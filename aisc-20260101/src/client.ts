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
    this._endpointMap = {
      'cn-zhangjiakou': "aisc.cn-shanghai.aliyuncs.com",
      'cn-wulanchabu': "aisc.cn-shanghai.aliyuncs.com",
      'cn-shanghai': "aisc.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "aisc.cn-shanghai.aliyuncs.com",
      'cn-nanjing': "aisc.cn-shanghai.aliyuncs.com",
      'cn-huhehaote': "aisc.cn-shanghai.aliyuncs.com",
      'cn-hangzhou': "aisc.cn-shanghai.aliyuncs.com",
      'cn-guangzhou': "aisc.cn-shanghai.aliyuncs.com",
      'cn-beijing': "aisc.cn-shanghai.aliyuncs.com",
      'ap-southeast-7': "aisc.ap-southeast-1.aliyuncs.com",
      'ap-southeast-6': "aisc.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "aisc.ap-southeast-1.aliyuncs.com",
      'ap-southeast-1': "aisc.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "aisc.ap-southeast-1.aliyuncs.com",
      'ap-northeast-1': "aisc.ap-southeast-1.aliyuncs.com",
      'eu-central-1': "aisc.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "aisc.ap-southeast-1.aliyuncs.com",
      'us-east-1': "aisc.ap-southeast-1.aliyuncs.com",
      'us-west-1': "aisc.ap-southeast-1.aliyuncs.com",
      'me-east-1': "aisc.ap-southeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "aisc.cn-shanghai.aliyuncs.com",
      'cn-hangzhou-finance': "aisc.cn-shanghai.aliyuncs.com",
      'cn-heyuan-acdr-1': "aisc.cn-shanghai.aliyuncs.com",
      'cn-shanghai-finance-1': "aisc.cn-shanghai.aliyuncs.com",
      'cn-shenzhen-finance-1': "aisc.cn-shanghai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aisc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Initiates batch detection for user-defined skills.
   * 
   * @param request - CreateSkillFileCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillFileCheckResponse
   */
  async createSkillFileCheckWithOptions(request: $_model.CreateSkillFileCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillFileCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.files)) {
      query["Files"] = request.files;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSkillFileCheck",
      version: "2026-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillFileCheckResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillFileCheckResponse({}));
  }

  /**
   * Initiates batch detection for user-defined skills.
   * 
   * @param request - CreateSkillFileCheckRequest
   * @returns CreateSkillFileCheckResponse
   */
  async createSkillFileCheck(request: $_model.CreateSkillFileCheckRequest): Promise<$_model.CreateSkillFileCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillFileCheckWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of agent risk events.
   * 
   * @param request - ListAIAgentEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIAgentEventResponse
   */
  async listAIAgentEventWithOptions(request: $_model.ListAIAgentEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIAgentEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.assetName)) {
      query["AssetName"] = request.assetName;
    }

    if (!$dara.isNull(request.assetType)) {
      query["AssetType"] = request.assetType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.infraInstanceId)) {
      query["InfraInstanceId"] = request.infraInstanceId;
    }

    if (!$dara.isNull(request.infraName)) {
      query["InfraName"] = request.infraName;
    }

    if (!$dara.isNull(request.infraRegionId)) {
      query["InfraRegionId"] = request.infraRegionId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.riskName)) {
      query["RiskName"] = request.riskName;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!$dara.isNull(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIAgentEvent",
      version: "2026-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIAgentEventResponse>(await this.callApi(params, req, runtime), new $_model.ListAIAgentEventResponse({}));
  }

  /**
   * Retrieves a list of agent risk events.
   * 
   * @param request - ListAIAgentEventRequest
   * @returns ListAIAgentEventResponse
   */
  async listAIAgentEvent(request: $_model.ListAIAgentEventRequest): Promise<$_model.ListAIAgentEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIAgentEventWithOptions(request, runtime);
  }

  /**
   * Get subtask information.
   * 
   * @param request - ListSubTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubTasksResponse
   */
  async listSubTasksWithOptions(request: $_model.ListSubTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.rootTaskId)) {
      query["RootTaskId"] = request.rootTaskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubTasks",
      version: "2026-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListSubTasksResponse({}));
  }

  /**
   * Get subtask information.
   * 
   * @param request - ListSubTasksRequest
   * @returns ListSubTasksResponse
   */
  async listSubTasks(request: $_model.ListSubTasksRequest): Promise<$_model.ListSubTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSubTasksWithOptions(request, runtime);
  }

}
