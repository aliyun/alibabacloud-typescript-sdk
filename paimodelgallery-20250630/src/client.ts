// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("paimodelgallery", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Creates a new job plan that supports task types such as distillation.
   * 
   * @remarks
   * ## Operation description
   * - This API operation creates a new node plan. You can specify the workspace ID, node plan type, name, and steps.
   * - If you use a scenario-specific distillation template, provide the `TemplateId` parameter and make sure that `JobPlanSteps` contains distillation configurations that match the template.
   * - The `Tag` parameter follows the Alibaba Cloud label system specification and is used to add additional identity information to the node plan.
   * 
   * @param request - CreateJobPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobPlanResponse
   */
  async createJobPlanWithOptions(request: $_model.CreateJobPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobPlanName)) {
      body["JobPlanName"] = request.jobPlanName;
    }

    if (!$dara.isNull(request.jobPlanSteps)) {
      body["JobPlanSteps"] = request.jobPlanSteps;
    }

    if (!$dara.isNull(request.jobPlanType)) {
      body["JobPlanType"] = request.jobPlanType;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJobPlan",
      version: "2025-06-30",
      protocol: "HTTPS",
      pathname: `/api/v1/jobplans`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobPlanResponse({}));
  }

  /**
   * Creates a new job plan that supports task types such as distillation.
   * 
   * @remarks
   * ## Operation description
   * - This API operation creates a new node plan. You can specify the workspace ID, node plan type, name, and steps.
   * - If you use a scenario-specific distillation template, provide the `TemplateId` parameter and make sure that `JobPlanSteps` contains distillation configurations that match the template.
   * - The `Tag` parameter follows the Alibaba Cloud label system specification and is used to add additional identity information to the node plan.
   * 
   * @param request - CreateJobPlanRequest
   * @returns CreateJobPlanResponse
   */
  async createJobPlan(request: $_model.CreateJobPlanRequest): Promise<$_model.CreateJobPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobPlanWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a specified task plan by task plan ID.
   * 
   * @remarks
   * ## Operation description.
   * 
   * @param request - DeleteJobPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobPlanResponse
   */
  async deleteJobPlanWithOptions(JobPlanId: string, request: $_model.DeleteJobPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteJobPlanResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJobPlan",
      version: "2025-06-30",
      protocol: "HTTPS",
      pathname: `/api/v1/jobplans/${$dara.URL.percentEncode(JobPlanId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteJobPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteJobPlanResponse({}));
  }

  /**
   * Deletes a specified task plan by task plan ID.
   * 
   * @remarks
   * ## Operation description.
   * 
   * @param request - DeleteJobPlanRequest
   * @returns DeleteJobPlanResponse
   */
  async deleteJobPlan(JobPlanId: string, request: $_model.DeleteJobPlanRequest): Promise<$_model.DeleteJobPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteJobPlanWithOptions(JobPlanId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a specified distillation template, including preset configurations and default YAML.
   * 
   * @remarks
   * ## Operation description
   * - This API operation queries the full details of a specific distillation template to facilitate rendering the creation form.
   * - The template ID is a required parameter, obtained from the `ListDistillationTemplates` operation.
   * - The `DefaultConfig` field provides the complete EasyDistill configuration YAML (with comments). All paths in the YAML are relative paths, and callers do not need to perform absolute path conversion or string replacement.
   * - All translatable fields are automatically parsed into the corresponding language version based on the `x-acs-accept-language` request header.
   * - If the `TrainingOptions` field is missing, the template supports only the first stage of processing. Attempts to use such a template to create a task that includes the second stage will fail.
   * 
   * @param request - GetDistillationTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDistillationTemplateResponse
   */
  async getDistillationTemplateWithOptions(TemplateId: string, request: $_model.GetDistillationTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDistillationTemplateResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDistillationTemplate",
      version: "2025-06-30",
      protocol: "HTTPS",
      pathname: `/api/v1/distillationtemplates/${$dara.URL.percentEncode(TemplateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDistillationTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetDistillationTemplateResponse({}));
  }

  /**
   * Retrieves the details of a specified distillation template, including preset configurations and default YAML.
   * 
   * @remarks
   * ## Operation description
   * - This API operation queries the full details of a specific distillation template to facilitate rendering the creation form.
   * - The template ID is a required parameter, obtained from the `ListDistillationTemplates` operation.
   * - The `DefaultConfig` field provides the complete EasyDistill configuration YAML (with comments). All paths in the YAML are relative paths, and callers do not need to perform absolute path conversion or string replacement.
   * - All translatable fields are automatically parsed into the corresponding language version based on the `x-acs-accept-language` request header.
   * - If the `TrainingOptions` field is missing, the template supports only the first stage of processing. Attempts to use such a template to create a task that includes the second stage will fail.
   * 
   * @param request - GetDistillationTemplateRequest
   * @returns GetDistillationTemplateResponse
   */
  async getDistillationTemplate(TemplateId: string, request: $_model.GetDistillationTemplateRequest): Promise<$_model.GetDistillationTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDistillationTemplateWithOptions(TemplateId, request, headers, runtime);
  }

  /**
   * Queries the details of a specified job plan by job plan ID.
   * 
   * @remarks
   * ## Description
   * This API operation retrieves the details of a job plan based on the specified job plan ID (`JobPlanId`), including but not limited to the name, type, and current step status of the job plan. Make sure the `JobPlanId` provided in the request is valid and belongs to your workspace.
   * 
   * @param request - GetJobPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobPlanResponse
   */
  async getJobPlanWithOptions(JobPlanId: string, request: $_model.GetJobPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobPlanResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobPlan",
      version: "2025-06-30",
      protocol: "HTTPS",
      pathname: `/api/v1/jobplans/${$dara.URL.percentEncode(JobPlanId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobPlanResponse>(await this.callApi(params, req, runtime), new $_model.GetJobPlanResponse({}));
  }

  /**
   * Queries the details of a specified job plan by job plan ID.
   * 
   * @remarks
   * ## Description
   * This API operation retrieves the details of a job plan based on the specified job plan ID (`JobPlanId`), including but not limited to the name, type, and current step status of the job plan. Make sure the `JobPlanId` provided in the request is valid and belongs to your workspace.
   * 
   * @param request - GetJobPlanRequest
   * @returns GetJobPlanResponse
   */
  async getJobPlan(JobPlanId: string, request: $_model.GetJobPlanRequest): Promise<$_model.GetJobPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobPlanWithOptions(JobPlanId, request, headers, runtime);
  }

  /**
   * Retrieves summary information of distillation templates for rendering the template card list.
   * 
   * @remarks
   * ## Operation description
   * - This operation supports filtered queries by using the TemplateId, Category, and Keyword parameters.
   * - Pagination is controlled by the PageNumber and PageSize parameters, consistent with other paginated operations of the same service.
   * - Templates are public resources that do not belong to any workspace. Therefore, you do not need to specify WorkspaceId.
   * - All translatable fields such as TemplateName and Description are automatically parsed into the corresponding language version based on the x-acs-accept-language request header.
   * 
   * @param request - ListDistillationTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDistillationTemplatesResponse
   */
  async listDistillationTemplatesWithOptions(request: $_model.ListDistillationTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDistillationTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDistillationTemplates",
      version: "2025-06-30",
      protocol: "HTTPS",
      pathname: `/api/v1/distillationtemplates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDistillationTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListDistillationTemplatesResponse({}));
  }

  /**
   * Retrieves summary information of distillation templates for rendering the template card list.
   * 
   * @remarks
   * ## Operation description
   * - This operation supports filtered queries by using the TemplateId, Category, and Keyword parameters.
   * - Pagination is controlled by the PageNumber and PageSize parameters, consistent with other paginated operations of the same service.
   * - Templates are public resources that do not belong to any workspace. Therefore, you do not need to specify WorkspaceId.
   * - All translatable fields such as TemplateName and Description are automatically parsed into the corresponding language version based on the x-acs-accept-language request header.
   * 
   * @param request - ListDistillationTemplatesRequest
   * @returns ListDistillationTemplatesResponse
   */
  async listDistillationTemplates(request: $_model.ListDistillationTemplatesRequest): Promise<$_model.ListDistillationTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDistillationTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of job plans in a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * - `WorkspaceId` is a required parameter that specifies the workspace to which the job plans belong.
   * - The `Tag` parameter must be encoded by using `EncodeURI` before being passed.
   * - If both `TemplateId` and `HasTemplate` are specified, the value of `TemplateId` takes precedence for filtering.
   * - `JobPlanName` supports exact match. Enclose the specific name in quotation marks.
   * - By default, results are sorted in descending order by creation time (`GmtCreateTime`). Set the `Order` parameter to `ASC` to change the sort order.
   * 
   * @param tmpReq - ListJobPlansRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobPlansResponse
   */
  async listJobPlansWithOptions(tmpReq: $_model.ListJobPlansRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobPlansResponse> {
    tmpReq.validate();
    let request = new $_model.ListJobPlansShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hasTemplate)) {
      query["HasTemplate"] = request.hasTemplate;
    }

    if (!$dara.isNull(request.jobPlanName)) {
      query["JobPlanName"] = request.jobPlanName;
    }

    if (!$dara.isNull(request.jobPlanType)) {
      query["JobPlanType"] = request.jobPlanType;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobPlans",
      version: "2025-06-30",
      protocol: "HTTPS",
      pathname: `/api/v1/jobplans`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobPlansResponse>(await this.callApi(params, req, runtime), new $_model.ListJobPlansResponse({}));
  }

  /**
   * Retrieves the list of job plans in a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * - `WorkspaceId` is a required parameter that specifies the workspace to which the job plans belong.
   * - The `Tag` parameter must be encoded by using `EncodeURI` before being passed.
   * - If both `TemplateId` and `HasTemplate` are specified, the value of `TemplateId` takes precedence for filtering.
   * - `JobPlanName` supports exact match. Enclose the specific name in quotation marks.
   * - By default, results are sorted in descending order by creation time (`GmtCreateTime`). Set the `Order` parameter to `ASC` to change the sort order.
   * 
   * @param request - ListJobPlansRequest
   * @returns ListJobPlansResponse
   */
  async listJobPlans(request: $_model.ListJobPlansRequest): Promise<$_model.ListJobPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobPlansWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of models from ModelGallery (deprecated, use the 2026-06-03 version instead).
   * 
   * @param tmpReq - ListModelGalleryModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelGalleryModelsResponse
   */
  async listModelGalleryModelsWithOptions(tmpReq: $_model.ListModelGalleryModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelGalleryModelsResponse> {
    tmpReq.validate();
    let request = new $_model.ListModelGalleryModelsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.conditions)) {
      request.conditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.conditions, "Conditions", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collections)) {
      query["Collections"] = request.collections;
    }

    if (!$dara.isNull(request.compressible)) {
      query["Compressible"] = request.compressible;
    }

    if (!$dara.isNull(request.conditionsShrink)) {
      query["Conditions"] = request.conditionsShrink;
    }

    if (!$dara.isNull(request.deepThink)) {
      query["DeepThink"] = request.deepThink;
    }

    if (!$dara.isNull(request.demonstrable)) {
      query["Demonstrable"] = request.demonstrable;
    }

    if (!$dara.isNull(request.deployable)) {
      query["Deployable"] = request.deployable;
    }

    if (!$dara.isNull(request.distillable)) {
      query["Distillable"] = request.distillable;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.evaluable)) {
      query["Evaluable"] = request.evaluable;
    }

    if (!$dara.isNull(request.functionCall)) {
      query["FunctionCall"] = request.functionCall;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelSeries)) {
      query["ModelSeries"] = request.modelSeries;
    }

    if (!$dara.isNull(request.modelType)) {
      query["ModelType"] = request.modelType;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.supportedCompressionResource)) {
      query["SupportedCompressionResource"] = request.supportedCompressionResource;
    }

    if (!$dara.isNull(request.supportedDistillationResource)) {
      query["SupportedDistillationResource"] = request.supportedDistillationResource;
    }

    if (!$dara.isNull(request.supportedEvaluationResource)) {
      query["SupportedEvaluationResource"] = request.supportedEvaluationResource;
    }

    if (!$dara.isNull(request.supportedInferenceResource)) {
      query["SupportedInferenceResource"] = request.supportedInferenceResource;
    }

    if (!$dara.isNull(request.supportedTrainingResource)) {
      query["SupportedTrainingResource"] = request.supportedTrainingResource;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.task)) {
      query["Task"] = request.task;
    }

    if (!$dara.isNull(request.trainable)) {
      query["Trainable"] = request.trainable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelGalleryModels",
      version: "2025-06-30",
      protocol: "HTTPS",
      pathname: `/api/v1/modelgallery/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelGalleryModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListModelGalleryModelsResponse({}));
  }

  /**
   * Retrieves the list of models from ModelGallery (deprecated, use the 2026-06-03 version instead).
   * 
   * @param request - ListModelGalleryModelsRequest
   * @returns ListModelGalleryModelsResponse
   */
  async listModelGalleryModels(request: $_model.ListModelGalleryModelsRequest): Promise<$_model.ListModelGalleryModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelGalleryModelsWithOptions(request, headers, runtime);
  }

  /**
   * Updates the current step and tag information of a specified task plan.
   * 
   * @remarks
   * ## Request description
   * You can use this API operation to update the current execution step (`JobPlanCurrentStep`) and related tags (`Tag`) of a specific task plan identified by `JobPlanId`. If the request contains tag information, tags are updated or added based on the provided key-value pairs.
   * - **JobPlanId** is a path parameter. You must provide a valid task plan ID.
   * - **JobPlanCurrentStep** is an optional parameter that specifies the new current step of the task.
   * - **Tag** is an optional parameter that specifies a list of key-value pairs used to label the task plan. Each tag consists of a `Key` and a `Value`.
   * Note: Ensure that the `JobPlanId` you provide exists and that you have the permissions to modify it.
   * 
   * @param request - UpdateJobPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJobPlanResponse
   */
  async updateJobPlanWithOptions(JobPlanId: string, request: $_model.UpdateJobPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateJobPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobPlanCurrentStep)) {
      body["JobPlanCurrentStep"] = request.jobPlanCurrentStep;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateJobPlan",
      version: "2025-06-30",
      protocol: "HTTPS",
      pathname: `/api/v1/jobplans/${$dara.URL.percentEncode(JobPlanId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateJobPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateJobPlanResponse({}));
  }

  /**
   * Updates the current step and tag information of a specified task plan.
   * 
   * @remarks
   * ## Request description
   * You can use this API operation to update the current execution step (`JobPlanCurrentStep`) and related tags (`Tag`) of a specific task plan identified by `JobPlanId`. If the request contains tag information, tags are updated or added based on the provided key-value pairs.
   * - **JobPlanId** is a path parameter. You must provide a valid task plan ID.
   * - **JobPlanCurrentStep** is an optional parameter that specifies the new current step of the task.
   * - **Tag** is an optional parameter that specifies a list of key-value pairs used to label the task plan. Each tag consists of a `Key` and a `Value`.
   * Note: Ensure that the `JobPlanId` you provide exists and that you have the permissions to modify it.
   * 
   * @param request - UpdateJobPlanRequest
   * @returns UpdateJobPlanResponse
   */
  async updateJobPlan(JobPlanId: string, request: $_model.UpdateJobPlanRequest): Promise<$_model.UpdateJobPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateJobPlanWithOptions(JobPlanId, request, headers, runtime);
  }

}
