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
    this._endpoint = this.getEndpoint("buss", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 处罚请求异步接口回调
   * 
   * @param tmpReq - BusinessResultServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BusinessResultServiceResponse
   */
  async businessResultServiceWithOptions(tmpReq: $_model.BusinessResultServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BusinessResultServiceResponse> {
    tmpReq.validate();
    let request = new $_model.BusinessResultServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.result)) {
      request.resultShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.result, "Result", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BusinessResultService",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BusinessResultServiceResponse>(await this.callApi(params, req, runtime), new $_model.BusinessResultServiceResponse({}));
  }

  /**
   * 处罚请求异步接口回调
   * 
   * @param request - BusinessResultServiceRequest
   * @returns BusinessResultServiceResponse
   */
  async businessResultService(request: $_model.BusinessResultServiceRequest): Promise<$_model.BusinessResultServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.businessResultServiceWithOptions(request, runtime);
  }

  /**
   * 协查中心查询任务接口
   * 
   * @param request - CreateUserInvestigationInfoQueryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserInvestigationInfoQueryTaskResponse
   */
  async createUserInvestigationInfoQueryTaskWithOptions(request: $_model.CreateUserInvestigationInfoQueryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserInvestigationInfoQueryTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserInvestigationInfoQueryTask",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserInvestigationInfoQueryTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserInvestigationInfoQueryTaskResponse({}));
  }

  /**
   * 协查中心查询任务接口
   * 
   * @param request - CreateUserInvestigationInfoQueryTaskRequest
   * @returns CreateUserInvestigationInfoQueryTaskResponse
   */
  async createUserInvestigationInfoQueryTask(request: $_model.CreateUserInvestigationInfoQueryTaskRequest): Promise<$_model.CreateUserInvestigationInfoQueryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserInvestigationInfoQueryTaskWithOptions(request, runtime);
  }

  /**
   * 反查资源
   * 
   * @param tmpReq - FindInstanceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindInstanceInfoResponse
   */
  async findInstanceInfoWithOptions(tmpReq: $_model.FindInstanceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindInstanceInfoResponse> {
    tmpReq.validate();
    let request = new $_model.FindInstanceInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extras)) {
      request.extrasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extras, "extras", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindInstanceInfo",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindInstanceInfoResponse>(await this.callApi(params, req, runtime), new $_model.FindInstanceInfoResponse({}));
  }

  /**
   * 反查资源
   * 
   * @param request - FindInstanceInfoRequest
   * @returns FindInstanceInfoResponse
   */
  async findInstanceInfo(request: $_model.FindInstanceInfoRequest): Promise<$_model.FindInstanceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findInstanceInfoWithOptions(request, runtime);
  }

  /**
   * 根据用户id查询对应产品下全部可用资产信息接口
   * 
   * @param request - FindUserAvailbleResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindUserAvailbleResourcesResponse
   */
  async findUserAvailbleResourcesWithOptions(request: $_model.FindUserAvailbleResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindUserAvailbleResourcesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindUserAvailbleResources",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindUserAvailbleResourcesResponse>(await this.callApi(params, req, runtime), new $_model.FindUserAvailbleResourcesResponse({}));
  }

  /**
   * 根据用户id查询对应产品下全部可用资产信息接口
   * 
   * @param request - FindUserAvailbleResourcesRequest
   * @returns FindUserAvailbleResourcesResponse
   */
  async findUserAvailbleResources(request: $_model.FindUserAvailbleResourcesRequest): Promise<$_model.FindUserAvailbleResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findUserAvailbleResourcesWithOptions(request, runtime);
  }

  /**
   * 查询安全事件详情
   * 
   * @param request - GetSecurityEventDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecurityEventDetailResponse
   */
  async getSecurityEventDetailWithOptions(request: $_model.GetSecurityEventDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecurityEventDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecurityEventDetail",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecurityEventDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetSecurityEventDetailResponse({}));
  }

  /**
   * 查询安全事件详情
   * 
   * @param request - GetSecurityEventDetailRequest
   * @returns GetSecurityEventDetailResponse
   */
  async getSecurityEventDetail(request: $_model.GetSecurityEventDetailRequest): Promise<$_model.GetSecurityEventDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecurityEventDetailWithOptions(request, runtime);
  }

  /**
   * 处罚资源搜索
   * 
   * @param tmpReq - PunishResourceSearchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PunishResourceSearchResponse
   */
  async punishResourceSearchWithOptions(tmpReq: $_model.PunishResourceSearchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PunishResourceSearchResponse> {
    tmpReq.validate();
    let request = new $_model.PunishResourceSearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actionCodes)) {
      request.actionCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionCodes, "ActionCodes", "json");
    }

    if (!$dara.isNull(tmpReq.bussinessCodes)) {
      request.bussinessCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bussinessCodes, "BussinessCodes", "json");
    }

    if (!$dara.isNull(tmpReq.sourceCodes)) {
      request.sourceCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceCodes, "SourceCodes", "json");
    }

    if (!$dara.isNull(tmpReq.userIds)) {
      request.userIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIds, "UserIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PunishResourceSearch",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PunishResourceSearchResponse>(await this.callApi(params, req, runtime), new $_model.PunishResourceSearchResponse({}));
  }

  /**
   * 处罚资源搜索
   * 
   * @param request - PunishResourceSearchRequest
   * @returns PunishResourceSearchResponse
   */
  async punishResourceSearch(request: $_model.PunishResourceSearchRequest): Promise<$_model.PunishResourceSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.punishResourceSearchWithOptions(request, runtime);
  }

  /**
   * 记录是否点击链接
   * 
   * @param request - RecordClickLinkActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecordClickLinkActionResponse
   */
  async recordClickLinkActionWithOptions(request: $_model.RecordClickLinkActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecordClickLinkActionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecordClickLinkAction",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecordClickLinkActionResponse>(await this.callApi(params, req, runtime), new $_model.RecordClickLinkActionResponse({}));
  }

  /**
   * 记录是否点击链接
   * 
   * @param request - RecordClickLinkActionRequest
   * @returns RecordClickLinkActionResponse
   */
  async recordClickLinkAction(request: $_model.RecordClickLinkActionRequest): Promise<$_model.RecordClickLinkActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recordClickLinkActionWithOptions(request, runtime);
  }

  /**
   * 风险事件同步
   * 
   * @param request - RiskEventSyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RiskEventSyncResponse
   */
  async riskEventSyncWithOptions(request: $_model.RiskEventSyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RiskEventSyncResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleted)) {
      body["Deleted"] = request.deleted;
    }

    if (!$dara.isNull(request.discoveryTime)) {
      body["DiscoveryTime"] = request.discoveryTime;
    }

    if (!$dara.isNull(request.eventName)) {
      body["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.eventNumber)) {
      body["EventNumber"] = request.eventNumber;
    }

    if (!$dara.isNull(request.relevanceBu)) {
      body["RelevanceBu"] = request.relevanceBu;
    }

    if (!$dara.isNull(request.riskDetail)) {
      body["RiskDetail"] = request.riskDetail;
    }

    if (!$dara.isNull(request.riskEffectType)) {
      body["RiskEffectType"] = request.riskEffectType;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.riskType)) {
      body["RiskType"] = request.riskType;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.submitter)) {
      body["Submitter"] = request.submitter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RiskEventSync",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RiskEventSyncResponse>(await this.callApi(params, req, runtime), new $_model.RiskEventSyncResponse({}));
  }

  /**
   * 风险事件同步
   * 
   * @param request - RiskEventSyncRequest
   * @returns RiskEventSyncResponse
   */
  async riskEventSync(request: $_model.RiskEventSyncRequest): Promise<$_model.RiskEventSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.riskEventSyncWithOptions(request, runtime);
  }

  /**
   * 管控事件查询
   * 
   * @param tmpReq - SearchPunishEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchPunishEventsResponse
   */
  async searchPunishEventsWithOptions(tmpReq: $_model.SearchPunishEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchPunishEventsResponse> {
    tmpReq.validate();
    let request = new $_model.SearchPunishEventsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bussinessCodes)) {
      request.bussinessCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bussinessCodes, "BussinessCodes", "json");
    }

    if (!$dara.isNull(tmpReq.caseCodes)) {
      request.caseCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.caseCodes, "CaseCodes", "json");
    }

    if (!$dara.isNull(tmpReq.eventCodes)) {
      request.eventCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventCodes, "EventCodes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.bussinessCodesShrink)) {
      query["BussinessCodes"] = request.bussinessCodesShrink;
    }

    if (!$dara.isNull(request.caseCodesShrink)) {
      query["CaseCodes"] = request.caseCodesShrink;
    }

    if (!$dara.isNull(request.eventCodesShrink)) {
      query["EventCodes"] = request.eventCodesShrink;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchPunishEvents",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchPunishEventsResponse>(await this.callApi(params, req, runtime), new $_model.SearchPunishEventsResponse({}));
  }

  /**
   * 管控事件查询
   * 
   * @param request - SearchPunishEventsRequest
   * @returns SearchPunishEventsResponse
   */
  async searchPunishEvents(request: $_model.SearchPunishEventsRequest): Promise<$_model.SearchPunishEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchPunishEventsWithOptions(request, runtime);
  }

  /**
   * 管控事件查询
   * 
   * @param tmpReq - SearchPunishRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchPunishRecordsResponse
   */
  async searchPunishRecordsWithOptions(tmpReq: $_model.SearchPunishRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchPunishRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.SearchPunishRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actionCodes)) {
      request.actionCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionCodes, "ActionCodes", "json");
    }

    if (!$dara.isNull(tmpReq.caseCodes)) {
      request.caseCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.caseCodes, "CaseCodes", "json");
    }

    if (!$dara.isNull(tmpReq.eventCodes)) {
      request.eventCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventCodes, "EventCodes", "json");
    }

    if (!$dara.isNull(tmpReq.punishStatus)) {
      request.punishStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.punishStatus, "PunishStatus", "json");
    }

    if (!$dara.isNull(tmpReq.sourceCodes)) {
      request.sourceCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceCodes, "SourceCodes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionCodesShrink)) {
      query["ActionCodes"] = request.actionCodesShrink;
    }

    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.bussinessCodes)) {
      query["BussinessCodes"] = request.bussinessCodes;
    }

    if (!$dara.isNull(request.caseCodesShrink)) {
      query["CaseCodes"] = request.caseCodesShrink;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodesShrink)) {
      query["EventCodes"] = request.eventCodesShrink;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.punishStatusShrink)) {
      query["PunishStatus"] = request.punishStatusShrink;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.sourceCodesShrink)) {
      query["SourceCodes"] = request.sourceCodesShrink;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.urlFuzzy)) {
      query["UrlFuzzy"] = request.urlFuzzy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchPunishRecords",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchPunishRecordsResponse>(await this.callApi(params, req, runtime), new $_model.SearchPunishRecordsResponse({}));
  }

  /**
   * 管控事件查询
   * 
   * @param request - SearchPunishRecordsRequest
   * @returns SearchPunishRecordsResponse
   */
  async searchPunishRecords(request: $_model.SearchPunishRecordsRequest): Promise<$_model.SearchPunishRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchPunishRecordsWithOptions(request, runtime);
  }

  /**
   * 处罚记录查询
   * 
   * @param tmpReq - SearchPunishRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchPunishRequestResponse
   */
  async searchPunishRequestWithOptions(tmpReq: $_model.SearchPunishRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchPunishRequestResponse> {
    tmpReq.validate();
    let request = new $_model.SearchPunishRequestShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.antiStatuses)) {
      request.antiStatusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.antiStatuses, "AntiStatuses", "json");
    }

    if (!$dara.isNull(tmpReq.bussinessCodes)) {
      request.bussinessCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bussinessCodes, "BussinessCodes", "json");
    }

    if (!$dara.isNull(tmpReq.eventCodes)) {
      request.eventCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventCodes, "EventCodes", "json");
    }

    if (!$dara.isNull(tmpReq.punishStatuses)) {
      request.punishStatusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.punishStatuses, "PunishStatuses", "json");
    }

    if (!$dara.isNull(tmpReq.sourceCodes)) {
      request.sourceCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceCodes, "SourceCodes", "json");
    }

    if (!$dara.isNull(tmpReq.userIds)) {
      request.userIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIds, "UserIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchPunishRequest",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchPunishRequestResponse>(await this.callApi(params, req, runtime), new $_model.SearchPunishRequestResponse({}));
  }

  /**
   * 处罚记录查询
   * 
   * @param request - SearchPunishRequestRequest
   * @returns SearchPunishRequestResponse
   */
  async searchPunishRequest(request: $_model.SearchPunishRequestRequest): Promise<$_model.SearchPunishRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchPunishRequestWithOptions(request, runtime);
  }

  /**
   * 更新安全事件状态
   * 
   * @param request - UpdateSecurityEventStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecurityEventStatusResponse
   */
  async updateSecurityEventStatusWithOptions(request: $_model.UpdateSecurityEventStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecurityEventStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSecurityEventStatus",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSecurityEventStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecurityEventStatusResponse({}));
  }

  /**
   * 更新安全事件状态
   * 
   * @param request - UpdateSecurityEventStatusRequest
   * @returns UpdateSecurityEventStatusResponse
   */
  async updateSecurityEventStatus(request: $_model.UpdateSecurityEventStatusRequest): Promise<$_model.UpdateSecurityEventStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSecurityEventStatusWithOptions(request, runtime);
  }

}
