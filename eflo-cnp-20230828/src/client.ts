// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eflo-cnp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Change resource group
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Change resource group
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * deleteSlrEfloCnpForDeleting
   * 
   * @param request - CheckServiceLinkedRoleEfloCnpForDeletingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceLinkedRoleEfloCnpForDeletingResponse
   */
  async checkServiceLinkedRoleEfloCnpForDeletingWithOptions(request: $_model.CheckServiceLinkedRoleEfloCnpForDeletingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceLinkedRoleEfloCnpForDeletingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.deletionTaskId)) {
      query["DeletionTaskId"] = request.deletionTaskId;
    }

    if (!$dara.isNull(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.SPIRegionId)) {
      query["SPIRegionId"] = request.SPIRegionId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceLinkedRoleEfloCnpForDeleting",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckServiceLinkedRoleEfloCnpForDeletingResponse>(await this.callApi(params, req, runtime), new $_model.CheckServiceLinkedRoleEfloCnpForDeletingResponse({}));
  }

  /**
   * deleteSlrEfloCnpForDeleting
   * 
   * @param request - CheckServiceLinkedRoleEfloCnpForDeletingRequest
   * @returns CheckServiceLinkedRoleEfloCnpForDeletingResponse
   */
  async checkServiceLinkedRoleEfloCnpForDeleting(request: $_model.CheckServiceLinkedRoleEfloCnpForDeletingRequest): Promise<$_model.CheckServiceLinkedRoleEfloCnpForDeletingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleEfloCnpForDeletingWithOptions(request, runtime);
  }

  /**
   * Create Experiment Plan
   * 
   * @param tmpReq - CreateExperimentPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperimentPlanResponse
   */
  async createExperimentPlanWithOptions(tmpReq: $_model.CreateExperimentPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExperimentPlanResponse> {
    tmpReq.validate();
    let request = new $_model.CreateExperimentPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.externalParams)) {
      request.externalParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalParams, "ExternalParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.externalParamsShrink)) {
      query["ExternalParams"] = request.externalParamsShrink;
    }

    if (!$dara.isNull(request.planTemplateName)) {
      query["PlanTemplateName"] = request.planTemplateName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExperimentPlan",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExperimentPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateExperimentPlanResponse({}));
  }

  /**
   * Create Experiment Plan
   * 
   * @param request - CreateExperimentPlanRequest
   * @returns CreateExperimentPlanResponse
   */
  async createExperimentPlan(request: $_model.CreateExperimentPlanRequest): Promise<$_model.CreateExperimentPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExperimentPlanWithOptions(request, runtime);
  }

  /**
   * Create/Update Test Plan Template
   * 
   * @param tmpReq - CreateExperimentPlanTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperimentPlanTemplateResponse
   */
  async createExperimentPlanTemplateWithOptions(tmpReq: $_model.CreateExperimentPlanTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExperimentPlanTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateExperimentPlanTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.templatePipeline)) {
      request.templatePipelineShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templatePipeline, "TemplatePipeline", "json");
    }

    let query = { };
    if (!$dara.isNull(request.privacyLevel)) {
      query["PrivacyLevel"] = request.privacyLevel;
    }

    if (!$dara.isNull(request.templateDescription)) {
      query["TemplateDescription"] = request.templateDescription;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templatePipelineShrink)) {
      body["TemplatePipeline"] = request.templatePipelineShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExperimentPlanTemplate",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExperimentPlanTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateExperimentPlanTemplateResponse({}));
  }

  /**
   * Create/Update Test Plan Template
   * 
   * @param request - CreateExperimentPlanTemplateRequest
   * @returns CreateExperimentPlanTemplateResponse
   */
  async createExperimentPlanTemplate(request: $_model.CreateExperimentPlanTemplateRequest): Promise<$_model.CreateExperimentPlanTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExperimentPlanTemplateWithOptions(request, runtime);
  }

  /**
   * Create Evaluation Resource
   * 
   * @param tmpReq - CreateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(tmpReq: $_model.CreateResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.machineTypes)) {
      request.machineTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.machineTypes, "MachineTypes", "json");
    }

    if (!$dara.isNull(tmpReq.userAccessParam)) {
      request.userAccessParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userAccessParam, "UserAccessParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterDesc)) {
      query["ClusterDesc"] = request.clusterDesc;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.machineTypesShrink)) {
      body["MachineTypes"] = request.machineTypesShrink;
    }

    if (!$dara.isNull(request.userAccessParamShrink)) {
      body["UserAccessParam"] = request.userAccessParamShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResource",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceResponse({}));
  }

  /**
   * Create Evaluation Resource
   * 
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(request: $_model.CreateResourceRequest): Promise<$_model.CreateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceWithOptions(request, runtime);
  }

  /**
   * Delete Experiment
   * 
   * @param request - DeleteExperimentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentResponse
   */
  async deleteExperimentWithOptions(request: $_model.DeleteExperimentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExperimentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperiment",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExperimentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExperimentResponse({}));
  }

  /**
   * Delete Experiment
   * 
   * @param request - DeleteExperimentRequest
   * @returns DeleteExperimentResponse
   */
  async deleteExperiment(request: $_model.DeleteExperimentRequest): Promise<$_model.DeleteExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExperimentWithOptions(request, runtime);
  }

  /**
   * 获取实验计划详情
   * 
   * @param request - DeleteExperimentPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentPlanResponse
   */
  async deleteExperimentPlanWithOptions(request: $_model.DeleteExperimentPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExperimentPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperimentPlan",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExperimentPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExperimentPlanResponse({}));
  }

  /**
   * 获取实验计划详情
   * 
   * @param request - DeleteExperimentPlanRequest
   * @returns DeleteExperimentPlanResponse
   */
  async deleteExperimentPlan(request: $_model.DeleteExperimentPlanRequest): Promise<$_model.DeleteExperimentPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExperimentPlanWithOptions(request, runtime);
  }

  /**
   * Delete Test Plan Template
   * 
   * @param request - DeleteExperimentPlanTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentPlanTemplateResponse
   */
  async deleteExperimentPlanTemplateWithOptions(request: $_model.DeleteExperimentPlanTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExperimentPlanTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperimentPlanTemplate",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExperimentPlanTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExperimentPlanTemplateResponse({}));
  }

  /**
   * Delete Test Plan Template
   * 
   * @param request - DeleteExperimentPlanTemplateRequest
   * @returns DeleteExperimentPlanTemplateResponse
   */
  async deleteExperimentPlanTemplate(request: $_model.DeleteExperimentPlanTemplateRequest): Promise<$_model.DeleteExperimentPlanTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExperimentPlanTemplateWithOptions(request, runtime);
  }

  /**
   * Get Experiment Details
   * 
   * @param request - GetExperimentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentResponse
   */
  async getExperimentWithOptions(request: $_model.GetExperimentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExperimentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExperiment",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExperimentResponse>(await this.callApi(params, req, runtime), new $_model.GetExperimentResponse({}));
  }

  /**
   * Get Experiment Details
   * 
   * @param request - GetExperimentRequest
   * @returns GetExperimentResponse
   */
  async getExperiment(request: $_model.GetExperimentRequest): Promise<$_model.GetExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExperimentWithOptions(request, runtime);
  }

  /**
   * Get Experiment Plan Details
   * 
   * @param request - GetExperimentPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentPlanResponse
   */
  async getExperimentPlanWithOptions(request: $_model.GetExperimentPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExperimentPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExperimentPlan",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExperimentPlanResponse>(await this.callApi(params, req, runtime), new $_model.GetExperimentPlanResponse({}));
  }

  /**
   * Get Experiment Plan Details
   * 
   * @param request - GetExperimentPlanRequest
   * @returns GetExperimentPlanResponse
   */
  async getExperimentPlan(request: $_model.GetExperimentPlanRequest): Promise<$_model.GetExperimentPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExperimentPlanWithOptions(request, runtime);
  }

  /**
   * Query Test Plan Template Details
   * 
   * @param request - GetExperimentPlanTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentPlanTemplateResponse
   */
  async getExperimentPlanTemplateWithOptions(request: $_model.GetExperimentPlanTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExperimentPlanTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExperimentPlanTemplate",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExperimentPlanTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetExperimentPlanTemplateResponse({}));
  }

  /**
   * Query Test Plan Template Details
   * 
   * @param request - GetExperimentPlanTemplateRequest
   * @returns GetExperimentPlanTemplateResponse
   */
  async getExperimentPlanTemplate(request: $_model.GetExperimentPlanTemplateRequest): Promise<$_model.GetExperimentPlanTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExperimentPlanTemplateWithOptions(request, runtime);
  }

  /**
   * Fetch Experiment Result Data
   * 
   * @param request - GetExperimentResultDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentResultDataResponse
   */
  async getExperimentResultDataWithOptions(request: $_model.GetExperimentResultDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExperimentResultDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!$dara.isNull(request.hostname)) {
      query["Hostname"] = request.hostname;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.workloadType)) {
      query["WorkloadType"] = request.workloadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExperimentResultData",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExperimentResultDataResponse>(await this.callApi(params, req, runtime), new $_model.GetExperimentResultDataResponse({}));
  }

  /**
   * Fetch Experiment Result Data
   * 
   * @param request - GetExperimentResultDataRequest
   * @returns GetExperimentResultDataResponse
   */
  async getExperimentResultData(request: $_model.GetExperimentResultDataRequest): Promise<$_model.GetExperimentResultDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExperimentResultDataWithOptions(request, runtime);
  }

  /**
   * Get Resource Information
   * 
   * @param request - GetResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceResponse
   */
  async getResourceWithOptions(request: $_model.GetResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResource",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceResponse({}));
  }

  /**
   * Get Resource Information
   * 
   * @param request - GetResourceRequest
   * @returns GetResourceResponse
   */
  async getResource(request: $_model.GetResourceRequest): Promise<$_model.GetResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceWithOptions(request, runtime);
  }

  /**
   * Query the resource prediction results of the test plan template
   * 
   * @param request - GetResourcePredictResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourcePredictResultResponse
   */
  async getResourcePredictResultWithOptions(request: $_model.GetResourcePredictResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourcePredictResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourcePredictResult",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourcePredictResultResponse>(await this.callApi(params, req, runtime), new $_model.GetResourcePredictResultResponse({}));
  }

  /**
   * Query the resource prediction results of the test plan template
   * 
   * @param request - GetResourcePredictResultRequest
   * @returns GetResourcePredictResultResponse
   */
  async getResourcePredictResult(request: $_model.GetResourcePredictResultRequest): Promise<$_model.GetResourcePredictResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourcePredictResultWithOptions(request, runtime);
  }

  /**
   * Retrieve workload information by ID
   * 
   * @param request - GetWorkloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkloadResponse
   */
  async getWorkloadWithOptions(request: $_model.GetWorkloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkloadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workloadId)) {
      query["WorkloadId"] = request.workloadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkload",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkloadResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkloadResponse({}));
  }

  /**
   * Retrieve workload information by ID
   * 
   * @param request - GetWorkloadRequest
   * @returns GetWorkloadResponse
   */
  async getWorkload(request: $_model.GetWorkloadRequest): Promise<$_model.GetWorkloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkloadWithOptions(request, runtime);
  }

  /**
   * Query Test Plan Template List
   * 
   * @param request - ListExperimentPlanTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentPlanTemplatesResponse
   */
  async listExperimentPlanTemplatesWithOptions(request: $_model.ListExperimentPlanTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExperimentPlanTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.privacyLevel)) {
      query["PrivacyLevel"] = request.privacyLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExperimentPlanTemplates",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExperimentPlanTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListExperimentPlanTemplatesResponse({}));
  }

  /**
   * Query Test Plan Template List
   * 
   * @param request - ListExperimentPlanTemplatesRequest
   * @returns ListExperimentPlanTemplatesResponse
   */
  async listExperimentPlanTemplates(request: $_model.ListExperimentPlanTemplatesRequest): Promise<$_model.ListExperimentPlanTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExperimentPlanTemplatesWithOptions(request, runtime);
  }

  /**
   * Query Experiment Plan List
   * 
   * @param tmpReq - ListExperimentPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentPlansResponse
   */
  async listExperimentPlansWithOptions(tmpReq: $_model.ListExperimentPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExperimentPlansResponse> {
    tmpReq.validate();
    let request = new $_model.ListExperimentPlansShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.planTaskStatus)) {
      request.planTaskStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.planTaskStatus, "PlanTaskStatus", "json");
    }

    if (!$dara.isNull(tmpReq.resourceName)) {
      request.resourceNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceName, "ResourceName", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.creatTimeOrder)) {
      query["CreatTimeOrder"] = request.creatTimeOrder;
    }

    if (!$dara.isNull(request.endTimeOrder)) {
      query["EndTimeOrder"] = request.endTimeOrder;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.startTimeOrder)) {
      query["StartTimeOrder"] = request.startTimeOrder;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.planTaskStatusShrink)) {
      body["PlanTaskStatus"] = request.planTaskStatusShrink;
    }

    if (!$dara.isNull(request.resourceNameShrink)) {
      body["ResourceName"] = request.resourceNameShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExperimentPlans",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExperimentPlansResponse>(await this.callApi(params, req, runtime), new $_model.ListExperimentPlansResponse({}));
  }

  /**
   * Query Experiment Plan List
   * 
   * @param request - ListExperimentPlansRequest
   * @returns ListExperimentPlansResponse
   */
  async listExperimentPlans(request: $_model.ListExperimentPlansRequest): Promise<$_model.ListExperimentPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExperimentPlansWithOptions(request, runtime);
  }

  /**
   * Query the experiment list based on the plan ID
   * 
   * @param request - ListExperimentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentsResponse
   */
  async listExperimentsWithOptions(request: $_model.ListExperimentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExperimentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExperiments",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExperimentsResponse>(await this.callApi(params, req, runtime), new $_model.ListExperimentsResponse({}));
  }

  /**
   * Query the experiment list based on the plan ID
   * 
   * @param request - ListExperimentsRequest
   * @returns ListExperimentsResponse
   */
  async listExperiments(request: $_model.ListExperimentsRequest): Promise<$_model.ListExperimentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExperimentsWithOptions(request, runtime);
  }

  /**
   * Query Resource Tags
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Query Resource Tags
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Get Workload List
   * 
   * @param request - ListWorkloadsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkloadsResponse
   */
  async listWorkloadsWithOptions(request: $_model.ListWorkloadsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkloadsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkloads",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkloadsResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkloadsResponse({}));
  }

  /**
   * Get Workload List
   * 
   * @param request - ListWorkloadsRequest
   * @returns ListWorkloadsResponse
   */
  async listWorkloads(request: $_model.ListWorkloadsRequest): Promise<$_model.ListWorkloadsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkloadsWithOptions(request, runtime);
  }

  /**
   * Stop Experiment
   * 
   * @param request - StopExperimentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopExperimentResponse
   */
  async stopExperimentWithOptions(request: $_model.StopExperimentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopExperimentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopExperiment",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopExperimentResponse>(await this.callApi(params, req, runtime), new $_model.StopExperimentResponse({}));
  }

  /**
   * Stop Experiment
   * 
   * @param request - StopExperimentRequest
   * @returns StopExperimentResponse
   */
  async stopExperiment(request: $_model.StopExperimentRequest): Promise<$_model.StopExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopExperimentWithOptions(request, runtime);
  }

  /**
   * Tag Resources with User Labels
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Tag Resources with User Labels
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Remove User Tags from Resources
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Remove User Tags from Resources
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Update Experiment Plan
   * 
   * @param request - UpdateExperimentPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentPlanResponse
   */
  async updateExperimentPlanWithOptions(request: $_model.UpdateExperimentPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExperimentPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.planTemplateName)) {
      query["PlanTemplateName"] = request.planTemplateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExperimentPlan",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExperimentPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExperimentPlanResponse({}));
  }

  /**
   * Update Experiment Plan
   * 
   * @param request - UpdateExperimentPlanRequest
   * @returns UpdateExperimentPlanResponse
   */
  async updateExperimentPlan(request: $_model.UpdateExperimentPlanRequest): Promise<$_model.UpdateExperimentPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateExperimentPlanWithOptions(request, runtime);
  }

  /**
   * Update Test Plan Template
   * 
   * @param tmpReq - UpdateExperimentPlanTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentPlanTemplateResponse
   */
  async updateExperimentPlanTemplateWithOptions(tmpReq: $_model.UpdateExperimentPlanTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExperimentPlanTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateExperimentPlanTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.templatePipeline)) {
      request.templatePipelineShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templatePipeline, "TemplatePipeline", "json");
    }

    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templatePipelineShrink)) {
      body["TemplatePipeline"] = request.templatePipelineShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExperimentPlanTemplate",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExperimentPlanTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExperimentPlanTemplateResponse({}));
  }

  /**
   * Update Test Plan Template
   * 
   * @param request - UpdateExperimentPlanTemplateRequest
   * @returns UpdateExperimentPlanTemplateResponse
   */
  async updateExperimentPlanTemplate(request: $_model.UpdateExperimentPlanTemplateRequest): Promise<$_model.UpdateExperimentPlanTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateExperimentPlanTemplateWithOptions(request, runtime);
  }

  /**
   * Resource Connectivity Test
   * 
   * @param tmpReq - ValidateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateResourceResponse
   */
  async validateResourceWithOptions(tmpReq: $_model.ValidateResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateResourceResponse> {
    tmpReq.validate();
    let request = new $_model.ValidateResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userAccessParam)) {
      request.userAccessParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userAccessParam, "UserAccessParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userAccessParamShrink)) {
      body["UserAccessParam"] = request.userAccessParamShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateResource",
      version: "2023-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateResourceResponse>(await this.callApi(params, req, runtime), new $_model.ValidateResourceResponse({}));
  }

  /**
   * Resource Connectivity Test
   * 
   * @param request - ValidateResourceRequest
   * @returns ValidateResourceResponse
   */
  async validateResource(request: $_model.ValidateResourceRequest): Promise<$_model.ValidateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateResourceWithOptions(request, runtime);
  }

}
