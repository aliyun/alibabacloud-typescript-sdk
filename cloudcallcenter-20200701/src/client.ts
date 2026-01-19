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
    this._endpoint = this.getEndpoint("cloudcallcenter", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * abort campaign
   * 
   * @param request - AbortCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbortCampaignResponse
   */
  async abortCampaignWithOptions(request: $_model.AbortCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AbortCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AbortCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbortCampaignResponse>(await this.callApi(params, req, runtime), new $_model.AbortCampaignResponse({}));
  }

  /**
   * abort campaign
   * 
   * @param request - AbortCampaignRequest
   * @returns AbortCampaignResponse
   */
  async abortCampaign(request: $_model.AbortCampaignRequest): Promise<$_model.AbortCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.abortCampaignWithOptions(request, runtime);
  }

  /**
   * abort cases
   * 
   * @param tmpReq - AbortCasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbortCasesResponse
   */
  async abortCasesWithOptions(tmpReq: $_model.AbortCasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AbortCasesResponse> {
    tmpReq.validate();
    let request = new $_model.AbortCasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.phoneNumberList)) {
      request.phoneNumberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phoneNumberList, "PhoneNumberList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.phoneNumberListShrink)) {
      query["PhoneNumberList"] = request.phoneNumberListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AbortCases",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbortCasesResponse>(await this.callApi(params, req, runtime), new $_model.AbortCasesResponse({}));
  }

  /**
   * abort cases
   * 
   * @param request - AbortCasesRequest
   * @returns AbortCasesResponse
   */
  async abortCases(request: $_model.AbortCasesRequest): Promise<$_model.AbortCasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.abortCasesWithOptions(request, runtime);
  }

  /**
   * @param request - CheckDemoInstanceExistsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDemoInstanceExistsResponse
   */
  async checkDemoInstanceExistsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.CheckDemoInstanceExistsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CheckDemoInstanceExists",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDemoInstanceExistsResponse>(await this.callApi(params, req, runtime), new $_model.CheckDemoInstanceExistsResponse({}));
  }

  /**
   * @returns CheckDemoInstanceExistsResponse
   */
  async checkDemoInstanceExists(): Promise<$_model.CheckDemoInstanceExistsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDemoInstanceExistsWithOptions(runtime);
  }

  /**
   * @param request - CheckMQRoleAssumptionAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckMQRoleAssumptionAuthorityResponse
   */
  async checkMQRoleAssumptionAuthorityWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.CheckMQRoleAssumptionAuthorityResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CheckMQRoleAssumptionAuthority",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckMQRoleAssumptionAuthorityResponse>(await this.callApi(params, req, runtime), new $_model.CheckMQRoleAssumptionAuthorityResponse({}));
  }

  /**
   * @returns CheckMQRoleAssumptionAuthorityResponse
   */
  async checkMQRoleAssumptionAuthority(): Promise<$_model.CheckMQRoleAssumptionAuthorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkMQRoleAssumptionAuthorityWithOptions(runtime);
  }

  /**
   * create campaign
   * 
   * @param tmpReq - CreateCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCampaignResponse
   */
  async createCampaignWithOptions(tmpReq: $_model.CreateCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCampaignResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCampaignShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.caseList)) {
      request.caseListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.caseList, "CaseList", "json");
    }

    if (!$dara.isNull(tmpReq.numberList)) {
      request.numberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numberList, "NumberList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.callableTime)) {
      query["CallableTime"] = request.callableTime;
    }

    if (!$dara.isNull(request.caseFileKey)) {
      query["CaseFileKey"] = request.caseFileKey;
    }

    if (!$dara.isNull(request.caseListShrink)) {
      query["CaseList"] = request.caseListShrink;
    }

    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executingUntilTimeout)) {
      query["ExecutingUntilTimeout"] = request.executingUntilTimeout;
    }

    if (!$dara.isNull(request.flashSmsParameters)) {
      query["FlashSmsParameters"] = request.flashSmsParameters;
    }

    if (!$dara.isNull(request.instGroupId)) {
      query["InstGroupId"] = request.instGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxAttemptCount)) {
      query["MaxAttemptCount"] = request.maxAttemptCount;
    }

    if (!$dara.isNull(request.minAttemptInterval)) {
      query["MinAttemptInterval"] = request.minAttemptInterval;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.numberListShrink)) {
      query["NumberList"] = request.numberListShrink;
    }

    if (!$dara.isNull(request.queueId)) {
      query["QueueId"] = request.queueId;
    }

    if (!$dara.isNull(request.simulation)) {
      query["Simulation"] = request.simulation;
    }

    if (!$dara.isNull(request.simulationParameters)) {
      query["SimulationParameters"] = request.simulationParameters;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.strategyParameters)) {
      query["StrategyParameters"] = request.strategyParameters;
    }

    if (!$dara.isNull(request.strategyType)) {
      query["StrategyType"] = request.strategyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCampaignResponse>(await this.callApi(params, req, runtime), new $_model.CreateCampaignResponse({}));
  }

  /**
   * create campaign
   * 
   * @param request - CreateCampaignRequest
   * @returns CreateCampaignResponse
   */
  async createCampaign(request: $_model.CreateCampaignRequest): Promise<$_model.CreateCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCampaignWithOptions(request, runtime);
  }

  /**
   * @param request - CreateChatMediaUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatMediaUrlResponse
   */
  async createChatMediaUrlWithOptions(request: $_model.CreateChatMediaUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatMediaUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mimeType)) {
      body["MimeType"] = request.mimeType;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChatMediaUrl",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatMediaUrlResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatMediaUrlResponse({}));
  }

  /**
   * @param request - CreateChatMediaUrlRequest
   * @returns CreateChatMediaUrlResponse
   */
  async createChatMediaUrl(request: $_model.CreateChatMediaUrlRequest): Promise<$_model.CreateChatMediaUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChatMediaUrlWithOptions(request, runtime);
  }

  /**
   * @param request - CreateCorpNumberGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCorpNumberGroupResponse
   */
  async createCorpNumberGroupWithOptions(request: $_model.CreateCorpNumberGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCorpNumberGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCorpNumberGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCorpNumberGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateCorpNumberGroupResponse({}));
  }

  /**
   * @param request - CreateCorpNumberGroupRequest
   * @returns CreateCorpNumberGroupResponse
   */
  async createCorpNumberGroup(request: $_model.CreateCorpNumberGroupRequest): Promise<$_model.CreateCorpNumberGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCorpNumberGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDemoInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDemoInstanceResponse
   */
  async createDemoInstanceWithOptions(request: $_model.CreateDemoInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDemoInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outboundCallWhitelist)) {
      query["OutboundCallWhitelist"] = request.outboundCallWhitelist;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDemoInstance",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDemoInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDemoInstanceResponse({}));
  }

  /**
   * @param request - CreateDemoInstanceRequest
   * @returns CreateDemoInstanceResponse
   */
  async createDemoInstance(request: $_model.CreateDemoInstanceRequest): Promise<$_model.CreateDemoInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDemoInstanceWithOptions(request, runtime);
  }

  /**
   * GetAccessChannelOfStaging
   * 
   * @param request - GetAccessChannelOfStagingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessChannelOfStagingResponse
   */
  async getAccessChannelOfStagingWithOptions(request: $_model.GetAccessChannelOfStagingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessChannelOfStagingResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessChannelOfStaging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessChannelOfStagingResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessChannelOfStagingResponse({}));
  }

  /**
   * GetAccessChannelOfStaging
   * 
   * @param request - GetAccessChannelOfStagingRequest
   * @returns GetAccessChannelOfStagingResponse
   */
  async getAccessChannelOfStaging(request: $_model.GetAccessChannelOfStagingRequest): Promise<$_model.GetAccessChannelOfStagingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessChannelOfStagingWithOptions(request, runtime);
  }

  /**
   * 获取预测式外呼活动
   * 
   * @param request - GetCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCampaignResponse
   */
  async getCampaignWithOptions(request: $_model.GetCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCampaignResponse>(await this.callApi(params, req, runtime), new $_model.GetCampaignResponse({}));
  }

  /**
   * 获取预测式外呼活动
   * 
   * @param request - GetCampaignRequest
   * @returns GetCampaignResponse
   */
  async getCampaign(request: $_model.GetCampaignRequest): Promise<$_model.GetCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCampaignWithOptions(request, runtime);
  }

  /**
   * GetDocument
   * 
   * @param request - GetDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentResponse
   */
  async getDocumentWithOptions(request: $_model.GetDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentId)) {
      body["DocumentId"] = request.documentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocument",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentResponse({}));
  }

  /**
   * GetDocument
   * 
   * @param request - GetDocumentRequest
   * @returns GetDocumentResponse
   */
  async getDocument(request: $_model.GetDocumentRequest): Promise<$_model.GetDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentWithOptions(request, runtime);
  }

  /**
   * 获取预测式外呼活动历史报表
   * 
   * @param request - GetHistoricalCampaignReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistoricalCampaignReportResponse
   */
  async getHistoricalCampaignReportWithOptions(request: $_model.GetHistoricalCampaignReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHistoricalCampaignReportResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHistoricalCampaignReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHistoricalCampaignReportResponse>(await this.callApi(params, req, runtime), new $_model.GetHistoricalCampaignReportResponse({}));
  }

  /**
   * 获取预测式外呼活动历史报表
   * 
   * @param request - GetHistoricalCampaignReportRequest
   * @returns GetHistoricalCampaignReportResponse
   */
  async getHistoricalCampaignReport(request: $_model.GetHistoricalCampaignReportRequest): Promise<$_model.GetHistoricalCampaignReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHistoricalCampaignReportWithOptions(request, runtime);
  }

  /**
   * 根据aliyunuid获取实例
   * 
   * @param request - GetInstanceIdsByAliyunUidV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceIdsByAliyunUidV2Response
   */
  async getInstanceIdsByAliyunUidV2WithOptions(request: $_model.GetInstanceIdsByAliyunUidV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceIdsByAliyunUidV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunUid)) {
      query["AliyunUid"] = request.aliyunUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceIdsByAliyunUidV2",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceIdsByAliyunUidV2Response>(await this.callApi(params, req, runtime), new $_model.GetInstanceIdsByAliyunUidV2Response({}));
  }

  /**
   * 根据aliyunuid获取实例
   * 
   * @param request - GetInstanceIdsByAliyunUidV2Request
   * @returns GetInstanceIdsByAliyunUidV2Response
   */
  async getInstanceIdsByAliyunUidV2(request: $_model.GetInstanceIdsByAliyunUidV2Request): Promise<$_model.GetInstanceIdsByAliyunUidV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceIdsByAliyunUidV2WithOptions(request, runtime);
  }

  /**
   * 获取预测式外呼实时状态
   * 
   * @param request - GetRealtimeCampaignStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRealtimeCampaignStatsResponse
   */
  async getRealtimeCampaignStatsWithOptions(request: $_model.GetRealtimeCampaignStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRealtimeCampaignStatsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRealtimeCampaignStats",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRealtimeCampaignStatsResponse>(await this.callApi(params, req, runtime), new $_model.GetRealtimeCampaignStatsResponse({}));
  }

  /**
   * 获取预测式外呼实时状态
   * 
   * @param request - GetRealtimeCampaignStatsRequest
   * @returns GetRealtimeCampaignStatsResponse
   */
  async getRealtimeCampaignStats(request: $_model.GetRealtimeCampaignStatsRequest): Promise<$_model.GetRealtimeCampaignStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRealtimeCampaignStatsWithOptions(request, runtime);
  }

  /**
   * @param request - ImportAdminsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportAdminsResponse
   */
  async importAdminsWithOptions(request: $_model.ImportAdminsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportAdminsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ramIdList)) {
      query["RamIdList"] = request.ramIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportAdmins",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportAdminsResponse>(await this.callApi(params, req, runtime), new $_model.ImportAdminsResponse({}));
  }

  /**
   * @param request - ImportAdminsRequest
   * @returns ImportAdminsResponse
   */
  async importAdmins(request: $_model.ImportAdminsRequest): Promise<$_model.ImportAdminsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importAdminsWithOptions(request, runtime);
  }

  /**
   * @param request - IssueSoftphoneCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IssueSoftphoneCommandResponse
   */
  async issueSoftphoneCommandWithOptions(request: $_model.IssueSoftphoneCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IssueSoftphoneCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IssueSoftphoneCommand",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IssueSoftphoneCommandResponse>(await this.callApi(params, req, runtime), new $_model.IssueSoftphoneCommandResponse({}));
  }

  /**
   * @param request - IssueSoftphoneCommandRequest
   * @returns IssueSoftphoneCommandResponse
   */
  async issueSoftphoneCommand(request: $_model.IssueSoftphoneCommandRequest): Promise<$_model.IssueSoftphoneCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.issueSoftphoneCommandWithOptions(request, runtime);
  }

  /**
   * 获取预测式外呼呼叫记录
   * 
   * @param request - ListAttemptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAttemptsResponse
   */
  async listAttemptsWithOptions(request: $_model.ListAttemptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAttemptsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAttempts",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAttemptsResponse>(await this.callApi(params, req, runtime), new $_model.ListAttemptsResponse({}));
  }

  /**
   * 获取预测式外呼呼叫记录
   * 
   * @param request - ListAttemptsRequest
   * @returns ListAttemptsResponse
   */
  async listAttempts(request: $_model.ListAttemptsRequest): Promise<$_model.ListAttemptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAttemptsWithOptions(request, runtime);
  }

  /**
   * 获取预测式外呼活动趋势报表
   * 
   * @param request - ListCampaignTrendingReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCampaignTrendingReportResponse
   */
  async listCampaignTrendingReportWithOptions(request: $_model.ListCampaignTrendingReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCampaignTrendingReportResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCampaignTrendingReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCampaignTrendingReportResponse>(await this.callApi(params, req, runtime), new $_model.ListCampaignTrendingReportResponse({}));
  }

  /**
   * 获取预测式外呼活动趋势报表
   * 
   * @param request - ListCampaignTrendingReportRequest
   * @returns ListCampaignTrendingReportResponse
   */
  async listCampaignTrendingReport(request: $_model.ListCampaignTrendingReportRequest): Promise<$_model.ListCampaignTrendingReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCampaignTrendingReportWithOptions(request, runtime);
  }

  /**
   * 查询预测式外呼列表
   * 
   * @param request - ListCampaignsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCampaignsResponse
   */
  async listCampaignsWithOptions(request: $_model.ListCampaignsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCampaignsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actualStartTimeFrom)) {
      query["ActualStartTimeFrom"] = request.actualStartTimeFrom;
    }

    if (!$dara.isNull(request.actualStartTimeTo)) {
      query["ActualStartTimeTo"] = request.actualStartTimeTo;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.planedStartTimeFrom)) {
      query["PlanedStartTimeFrom"] = request.planedStartTimeFrom;
    }

    if (!$dara.isNull(request.planedStartTimeTo)) {
      query["PlanedStartTimeTo"] = request.planedStartTimeTo;
    }

    if (!$dara.isNull(request.queueId)) {
      query["QueueId"] = request.queueId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCampaigns",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCampaignsResponse>(await this.callApi(params, req, runtime), new $_model.ListCampaignsResponse({}));
  }

  /**
   * 查询预测式外呼列表
   * 
   * @param request - ListCampaignsRequest
   * @returns ListCampaignsResponse
   */
  async listCampaigns(request: $_model.ListCampaignsRequest): Promise<$_model.ListCampaignsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCampaignsWithOptions(request, runtime);
  }

  /**
   * list case
   * 
   * @param request - ListCasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCasesResponse
   */
  async listCasesWithOptions(request: $_model.ListCasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCases",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCasesResponse>(await this.callApi(params, req, runtime), new $_model.ListCasesResponse({}));
  }

  /**
   * list case
   * 
   * @param request - ListCasesRequest
   * @returns ListCasesResponse
   */
  async listCases(request: $_model.ListCasesRequest): Promise<$_model.ListCasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCasesWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - ListFlashSmsSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlashSmsSettingsResponse
   */
  async listFlashSmsSettingsWithOptions(tmpReq: $_model.ListFlashSmsSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlashSmsSettingsResponse> {
    tmpReq.validate();
    let request = new $_model.ListFlashSmsSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.skillGroupIdList)) {
      request.skillGroupIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.skillGroupIdList, "SkillGroupIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillGroupIdListShrink)) {
      query["SkillGroupIdList"] = request.skillGroupIdListShrink;
    }

    if (!$dara.isNull(request.skillGroupName)) {
      query["SkillGroupName"] = request.skillGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlashSmsSettings",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlashSmsSettingsResponse>(await this.callApi(params, req, runtime), new $_model.ListFlashSmsSettingsResponse({}));
  }

  /**
   * @param request - ListFlashSmsSettingsRequest
   * @returns ListFlashSmsSettingsResponse
   */
  async listFlashSmsSettings(request: $_model.ListFlashSmsSettingsRequest): Promise<$_model.ListFlashSmsSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlashSmsSettingsWithOptions(request, runtime);
  }

  /**
   * 查询坐席技能组报表
   * 
   * @param request - ListHistoricalAgentSkillGroupReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHistoricalAgentSkillGroupReportResponse
   */
  async listHistoricalAgentSkillGroupReportWithOptions(request: $_model.ListHistoricalAgentSkillGroupReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHistoricalAgentSkillGroupReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentIdList)) {
      body["AgentIdList"] = request.agentIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHistoricalAgentSkillGroupReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHistoricalAgentSkillGroupReportResponse>(await this.callApi(params, req, runtime), new $_model.ListHistoricalAgentSkillGroupReportResponse({}));
  }

  /**
   * 查询坐席技能组报表
   * 
   * @param request - ListHistoricalAgentSkillGroupReportRequest
   * @returns ListHistoricalAgentSkillGroupReportResponse
   */
  async listHistoricalAgentSkillGroupReport(request: $_model.ListHistoricalAgentSkillGroupReportRequest): Promise<$_model.ListHistoricalAgentSkillGroupReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHistoricalAgentSkillGroupReportWithOptions(request, runtime);
  }

  /**
   * 查询坐席技能组报表
   * 
   * @param request - ListIntervalAgentSkillGroupReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntervalAgentSkillGroupReportResponse
   */
  async listIntervalAgentSkillGroupReportWithOptions(request: $_model.ListIntervalAgentSkillGroupReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntervalAgentSkillGroupReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.showDefaultIfEmpty)) {
      query["ShowDefaultIfEmpty"] = request.showDefaultIfEmpty;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntervalAgentSkillGroupReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntervalAgentSkillGroupReportResponse>(await this.callApi(params, req, runtime), new $_model.ListIntervalAgentSkillGroupReportResponse({}));
  }

  /**
   * 查询坐席技能组报表
   * 
   * @param request - ListIntervalAgentSkillGroupReportRequest
   * @returns ListIntervalAgentSkillGroupReportResponse
   */
  async listIntervalAgentSkillGroupReport(request: $_model.ListIntervalAgentSkillGroupReportRequest): Promise<$_model.ListIntervalAgentSkillGroupReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntervalAgentSkillGroupReportWithOptions(request, runtime);
  }

  /**
   * 录音查询
   * 
   * @param request - ListMonoRecordingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMonoRecordingsResponse
   */
  async listMonoRecordingsWithOptions(request: $_model.ListMonoRecordingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMonoRecordingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMonoRecordings",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMonoRecordingsResponse>(await this.callApi(params, req, runtime), new $_model.ListMonoRecordingsResponse({}));
  }

  /**
   * 录音查询
   * 
   * @param request - ListMonoRecordingsRequest
   * @returns ListMonoRecordingsResponse
   */
  async listMonoRecordings(request: $_model.ListMonoRecordingsRequest): Promise<$_model.ListMonoRecordingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMonoRecordingsWithOptions(request, runtime);
  }

  /**
   * 暂停预测式外呼
   * 
   * @param request - PauseCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseCampaignResponse
   */
  async pauseCampaignWithOptions(request: $_model.PauseCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseCampaignResponse>(await this.callApi(params, req, runtime), new $_model.PauseCampaignResponse({}));
  }

  /**
   * 暂停预测式外呼
   * 
   * @param request - PauseCampaignRequest
   * @returns PauseCampaignResponse
   */
  async pauseCampaign(request: $_model.PauseCampaignRequest): Promise<$_model.PauseCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseCampaignWithOptions(request, runtime);
  }

  /**
   * ProcessAliMeCallbackOfStaging
   * 
   * @param request - ProcessAliMeCallbackOfStagingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProcessAliMeCallbackOfStagingResponse
   */
  async processAliMeCallbackOfStagingWithOptions(request: $_model.ProcessAliMeCallbackOfStagingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProcessAliMeCallbackOfStagingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProcessAliMeCallbackOfStaging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProcessAliMeCallbackOfStagingResponse>(await this.callApi(params, req, runtime), new $_model.ProcessAliMeCallbackOfStagingResponse({}));
  }

  /**
   * ProcessAliMeCallbackOfStaging
   * 
   * @param request - ProcessAliMeCallbackOfStagingRequest
   * @returns ProcessAliMeCallbackOfStagingResponse
   */
  async processAliMeCallbackOfStaging(request: $_model.ProcessAliMeCallbackOfStagingRequest): Promise<$_model.ProcessAliMeCallbackOfStagingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.processAliMeCallbackOfStagingWithOptions(request, runtime);
  }

  /**
   * @param request - ProcessCustomIMCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProcessCustomIMCallbackResponse
   */
  async processCustomIMCallbackWithOptions(request: $_model.ProcessCustomIMCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProcessCustomIMCallbackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessChannelId)) {
      body["AccessChannelId"] = request.accessChannelId;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.messageContent)) {
      body["MessageContent"] = request.messageContent;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.senderAvatarMediaId)) {
      body["SenderAvatarMediaId"] = request.senderAvatarMediaId;
    }

    if (!$dara.isNull(request.senderId)) {
      body["SenderId"] = request.senderId;
    }

    if (!$dara.isNull(request.senderName)) {
      body["SenderName"] = request.senderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProcessCustomIMCallback",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProcessCustomIMCallbackResponse>(await this.callApi(params, req, runtime), new $_model.ProcessCustomIMCallbackResponse({}));
  }

  /**
   * @param request - ProcessCustomIMCallbackRequest
   * @returns ProcessCustomIMCallbackResponse
   */
  async processCustomIMCallback(request: $_model.ProcessCustomIMCallbackRequest): Promise<$_model.ProcessCustomIMCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.processCustomIMCallbackWithOptions(request, runtime);
  }

  /**
   * ccc migration
   * 
   * @param request - ReplaceMigrationAvailableNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceMigrationAvailableNumbersResponse
   */
  async replaceMigrationAvailableNumbersWithOptions(request: $_model.ReplaceMigrationAvailableNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceMigrationAvailableNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.operatorName)) {
      query["OperatorName"] = request.operatorName;
    }

    if (!$dara.isNull(request.operatorUid)) {
      query["OperatorUid"] = request.operatorUid;
    }

    if (!$dara.isNull(request.v1Numbers)) {
      query["V1Numbers"] = request.v1Numbers;
    }

    if (!$dara.isNull(request.v2Numbers)) {
      query["V2Numbers"] = request.v2Numbers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceMigrationAvailableNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceMigrationAvailableNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceMigrationAvailableNumbersResponse({}));
  }

  /**
   * ccc migration
   * 
   * @param request - ReplaceMigrationAvailableNumbersRequest
   * @returns ReplaceMigrationAvailableNumbersResponse
   */
  async replaceMigrationAvailableNumbers(request: $_model.ReplaceMigrationAvailableNumbersRequest): Promise<$_model.ReplaceMigrationAvailableNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.replaceMigrationAvailableNumbersWithOptions(request, runtime);
  }

  /**
   * resume campaign
   * 
   * @param request - ResumeCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeCampaignResponse
   */
  async resumeCampaignWithOptions(request: $_model.ResumeCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeCampaignResponse>(await this.callApi(params, req, runtime), new $_model.ResumeCampaignResponse({}));
  }

  /**
   * resume campaign
   * 
   * @param request - ResumeCampaignRequest
   * @returns ResumeCampaignResponse
   */
  async resumeCampaign(request: $_model.ResumeCampaignRequest): Promise<$_model.ResumeCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeCampaignWithOptions(request, runtime);
  }

  /**
   * @param request - SaveRTCStatsV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveRTCStatsV2Response
   */
  async saveRTCStatsV2WithOptions(request: $_model.SaveRTCStatsV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.SaveRTCStatsV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.generalInfo)) {
      query["GeneralInfo"] = request.generalInfo;
    }

    if (!$dara.isNull(request.googAddress)) {
      query["GoogAddress"] = request.googAddress;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.receiverReport)) {
      query["ReceiverReport"] = request.receiverReport;
    }

    if (!$dara.isNull(request.senderReport)) {
      query["SenderReport"] = request.senderReport;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveRTCStatsV2",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveRTCStatsV2Response>(await this.callApi(params, req, runtime), new $_model.SaveRTCStatsV2Response({}));
  }

  /**
   * @param request - SaveRTCStatsV2Request
   * @returns SaveRTCStatsV2Response
   */
  async saveRTCStatsV2(request: $_model.SaveRTCStatsV2Request): Promise<$_model.SaveRTCStatsV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveRTCStatsV2WithOptions(request, runtime);
  }

  /**
   * -
   * 
   * @param request - SaveTerminalLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTerminalLogResponse
   */
  async saveTerminalLogWithOptions(request: $_model.SaveTerminalLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTerminalLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.methodName)) {
      query["MethodName"] = request.methodName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.uniqueRequestId)) {
      query["UniqueRequestId"] = request.uniqueRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTerminalLog",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTerminalLogResponse>(await this.callApi(params, req, runtime), new $_model.SaveTerminalLogResponse({}));
  }

  /**
   * -
   * 
   * @param request - SaveTerminalLogRequest
   * @returns SaveTerminalLogResponse
   */
  async saveTerminalLog(request: $_model.SaveTerminalLogRequest): Promise<$_model.SaveTerminalLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTerminalLogWithOptions(request, runtime);
  }

  /**
   * -
   * 
   * @param request - SaveWebRtcInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveWebRtcInfoResponse
   */
  async saveWebRtcInfoWithOptions(request: $_model.SaveWebRtcInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveWebRtcInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveWebRtcInfo",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveWebRtcInfoResponse>(await this.callApi(params, req, runtime), new $_model.SaveWebRtcInfoResponse({}));
  }

  /**
   * -
   * 
   * @param request - SaveWebRtcInfoRequest
   * @returns SaveWebRtcInfoResponse
   */
  async saveWebRtcInfo(request: $_model.SaveWebRtcInfoRequest): Promise<$_model.SaveWebRtcInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveWebRtcInfoWithOptions(request, runtime);
  }

  /**
   * 推送消息
   * 
   * @param request - SendNotificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendNotificationResponse
   */
  async sendNotificationWithOptions(request: $_model.SendNotificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendNotificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.messageBody)) {
      query["MessageBody"] = request.messageBody;
    }

    if (!$dara.isNull(request.notificationTarget)) {
      query["NotificationTarget"] = request.notificationTarget;
    }

    if (!$dara.isNull(request.notificationType)) {
      query["NotificationType"] = request.notificationType;
    }

    if (!$dara.isNull(request.shardingKey)) {
      query["ShardingKey"] = request.shardingKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendNotification",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendNotificationResponse>(await this.callApi(params, req, runtime), new $_model.SendNotificationResponse({}));
  }

  /**
   * 推送消息
   * 
   * @param request - SendNotificationRequest
   * @returns SendNotificationResponse
   */
  async sendNotification(request: $_model.SendNotificationRequest): Promise<$_model.SendNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendNotificationWithOptions(request, runtime);
  }

  /**
   * submit campaign
   * 
   * @param request - SubmitCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCampaignResponse
   */
  async submitCampaignWithOptions(request: $_model.SubmitCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitCampaignResponse>(await this.callApi(params, req, runtime), new $_model.SubmitCampaignResponse({}));
  }

  /**
   * submit campaign
   * 
   * @param request - SubmitCampaignRequest
   * @returns SubmitCampaignResponse
   */
  async submitCampaign(request: $_model.SubmitCampaignRequest): Promise<$_model.SubmitCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCampaignWithOptions(request, runtime);
  }

  /**
   * 删除注册设备
   * 
   * @param request - UnregisterDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnregisterDeviceResponse
   */
  async unregisterDeviceWithOptions(request: $_model.UnregisterDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnregisterDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnregisterDevice",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnregisterDeviceResponse>(await this.callApi(params, req, runtime), new $_model.UnregisterDeviceResponse({}));
  }

  /**
   * 删除注册设备
   * 
   * @param request - UnregisterDeviceRequest
   * @returns UnregisterDeviceResponse
   */
  async unregisterDevice(request: $_model.UnregisterDeviceRequest): Promise<$_model.UnregisterDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unregisterDeviceWithOptions(request, runtime);
  }

}
