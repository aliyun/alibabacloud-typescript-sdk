// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "PAIModelGallery";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
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
   * 创建任务计划。
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
   * 创建任务计划。
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
   * 删除任务计划。
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
   * 删除任务计划。
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
   * 查询蒸馏模板详情。
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
   * 查询蒸馏模板详情。
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
   * 获取任务计划。
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
   * 获取任务计划。
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
   * 查询蒸馏模板列表。
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

    if (!$dara.isNull(request.templateKind)) {
      query["TemplateKind"] = request.templateKind;
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
   * 查询蒸馏模板列表。
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
   * 获取任务计划列表。
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
   * 获取任务计划列表。
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
   * 获取ModelGallery模型列表
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
   * 获取ModelGallery模型列表
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
   * 更新任务计划。
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
   * 更新任务计划。
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
