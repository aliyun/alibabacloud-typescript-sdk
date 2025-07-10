// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aiccs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 新增热线号码
   * 
   * @param tmpReq - AddHotlineNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddHotlineNumberResponse
   */
  async addHotlineNumberWithOptions(tmpReq: $_model.AddHotlineNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddHotlineNumberResponse> {
    tmpReq.validate();
    let request = new $_model.AddHotlineNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.outboundRangeList)) {
      request.outboundRangeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundRangeList, "OutboundRangeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableInbound)) {
      body["EnableInbound"] = request.enableInbound;
    }

    if (!$dara.isNull(request.enableInboundEvaluation)) {
      body["EnableInboundEvaluation"] = request.enableInboundEvaluation;
    }

    if (!$dara.isNull(request.enableOutbound)) {
      body["EnableOutbound"] = request.enableOutbound;
    }

    if (!$dara.isNull(request.enableOutboundEvaluation)) {
      body["EnableOutboundEvaluation"] = request.enableOutboundEvaluation;
    }

    if (!$dara.isNull(request.evaluationLevel)) {
      body["EvaluationLevel"] = request.evaluationLevel;
    }

    if (!$dara.isNull(request.hotlineNumber)) {
      body["HotlineNumber"] = request.hotlineNumber;
    }

    if (!$dara.isNull(request.inboundFlowId)) {
      body["InboundFlowId"] = request.inboundFlowId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundAllDepart)) {
      body["OutboundAllDepart"] = request.outboundAllDepart;
    }

    if (!$dara.isNull(request.outboundRangeListShrink)) {
      body["OutboundRangeList"] = request.outboundRangeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddHotlineNumberResponse>(await this.callApi(params, req, runtime), new $_model.AddHotlineNumberResponse({}));
  }

  /**
   * 新增热线号码
   * 
   * @param request - AddHotlineNumberRequest
   * @returns AddHotlineNumberResponse
   */
  async addHotlineNumber(request: $_model.AddHotlineNumberRequest): Promise<$_model.AddHotlineNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addHotlineNumberWithOptions(request, runtime);
  }

  /**
   * @param request - AddOuterAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOuterAccountResponse
   */
  async addOuterAccountWithOptions(request: $_model.AddOuterAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddOuterAccountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOuterAccount",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddOuterAccountResponse>(await this.callApi(params, req, runtime), new $_model.AddOuterAccountResponse({}));
  }

  /**
   * @param request - AddOuterAccountRequest
   * @returns AddOuterAccountResponse
   */
  async addOuterAccount(request: $_model.AddOuterAccountRequest): Promise<$_model.AddOuterAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addOuterAccountWithOptions(request, runtime);
  }

  /**
   * @param request - AddSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSkillGroupResponse
   */
  async addSkillGroupWithOptions(request: $_model.AddSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSkillGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddSkillGroupResponse({}));
  }

  /**
   * @param request - AddSkillGroupRequest
   * @returns AddSkillGroupResponse
   */
  async addSkillGroup(request: $_model.AddSkillGroupRequest): Promise<$_model.AddSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSkillGroupWithOptions(request, runtime);
  }

  /**
   * @param request - AiccsSmartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AiccsSmartCallResponse
   */
  async aiccsSmartCallWithOptions(request: $_model.AiccsSmartCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AiccsSmartCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionCodeBreak)) {
      query["ActionCodeBreak"] = request.actionCodeBreak;
    }

    if (!$dara.isNull(request.actionCodeTimeBreak)) {
      query["ActionCodeTimeBreak"] = request.actionCodeTimeBreak;
    }

    if (!$dara.isNull(request.asrAlsAmId)) {
      query["AsrAlsAmId"] = request.asrAlsAmId;
    }

    if (!$dara.isNull(request.asrBaseId)) {
      query["AsrBaseId"] = request.asrBaseId;
    }

    if (!$dara.isNull(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!$dara.isNull(request.asrVocabularyId)) {
      query["AsrVocabularyId"] = request.asrVocabularyId;
    }

    if (!$dara.isNull(request.backgroundFileCode)) {
      query["BackgroundFileCode"] = request.backgroundFileCode;
    }

    if (!$dara.isNull(request.backgroundSpeed)) {
      query["BackgroundSpeed"] = request.backgroundSpeed;
    }

    if (!$dara.isNull(request.backgroundVolume)) {
      query["BackgroundVolume"] = request.backgroundVolume;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.dynamicId)) {
      query["DynamicId"] = request.dynamicId;
    }

    if (!$dara.isNull(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!$dara.isNull(request.enableITN)) {
      query["EnableITN"] = request.enableITN;
    }

    if (!$dara.isNull(request.muteTime)) {
      query["MuteTime"] = request.muteTime;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pauseTime)) {
      query["PauseTime"] = request.pauseTime;
    }

    if (!$dara.isNull(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.recordFlag)) {
      query["RecordFlag"] = request.recordFlag;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sessionTimeout)) {
      query["SessionTimeout"] = request.sessionTimeout;
    }

    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!$dara.isNull(request.ttsConf)) {
      query["TtsConf"] = request.ttsConf;
    }

    if (!$dara.isNull(request.ttsSpeed)) {
      query["TtsSpeed"] = request.ttsSpeed;
    }

    if (!$dara.isNull(request.ttsStyle)) {
      query["TtsStyle"] = request.ttsStyle;
    }

    if (!$dara.isNull(request.ttsVolume)) {
      query["TtsVolume"] = request.ttsVolume;
    }

    if (!$dara.isNull(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!$dara.isNull(request.voiceCodeParam)) {
      query["VoiceCodeParam"] = request.voiceCodeParam;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AiccsSmartCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AiccsSmartCallResponse>(await this.callApi(params, req, runtime), new $_model.AiccsSmartCallResponse({}));
  }

  /**
   * @param request - AiccsSmartCallRequest
   * @returns AiccsSmartCallResponse
   */
  async aiccsSmartCall(request: $_model.AiccsSmartCallRequest): Promise<$_model.AiccsSmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aiccsSmartCallWithOptions(request, runtime);
  }

  /**
   * @param request - AiccsSmartCallOperateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AiccsSmartCallOperateResponse
   */
  async aiccsSmartCallOperateWithOptions(request: $_model.AiccsSmartCallOperateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AiccsSmartCallOperateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AiccsSmartCallOperate",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AiccsSmartCallOperateResponse>(await this.callApi(params, req, runtime), new $_model.AiccsSmartCallOperateResponse({}));
  }

  /**
   * @param request - AiccsSmartCallOperateRequest
   * @returns AiccsSmartCallOperateResponse
   */
  async aiccsSmartCallOperate(request: $_model.AiccsSmartCallOperateRequest): Promise<$_model.AiccsSmartCallOperateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aiccsSmartCallOperateWithOptions(request, runtime);
  }

  /**
   * @param request - AnswerCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnswerCallResponse
   */
  async answerCallWithOptions(request: $_model.AnswerCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AnswerCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnswerCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnswerCallResponse>(await this.callApi(params, req, runtime), new $_model.AnswerCallResponse({}));
  }

  /**
   * @param request - AnswerCallRequest
   * @returns AnswerCallResponse
   */
  async answerCall(request: $_model.AnswerCallRequest): Promise<$_model.AnswerCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.answerCallWithOptions(request, runtime);
  }

  /**
   * 追加任务明细
   * 
   * @param request - AttachTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachTaskResponse
   */
  async attachTaskWithOptions(request: $_model.AttachTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callString)) {
      query["CallString"] = request.callString;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachTaskResponse>(await this.callApi(params, req, runtime), new $_model.AttachTaskResponse({}));
  }

  /**
   * 追加任务明细
   * 
   * @param request - AttachTaskRequest
   * @returns AttachTaskResponse
   */
  async attachTask(request: $_model.AttachTaskRequest): Promise<$_model.AttachTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachTaskWithOptions(request, runtime);
  }

  /**
   * @param request - BatchCreateQualityProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateQualityProjectsResponse
   */
  async batchCreateQualityProjectsWithOptions(request: $_model.BatchCreateQualityProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateQualityProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analysisIds)) {
      query["AnalysisIds"] = request.analysisIds;
    }

    if (!$dara.isNull(request.channelTouchType)) {
      query["ChannelTouchType"] = request.channelTouchType;
    }

    if (!$dara.isNull(request.checkFreqType)) {
      query["CheckFreqType"] = request.checkFreqType;
    }

    if (!$dara.isNull(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.timeRangeEnd)) {
      query["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!$dara.isNull(request.timeRangeStart)) {
      query["TimeRangeStart"] = request.timeRangeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateQualityProjects",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateQualityProjectsResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateQualityProjectsResponse({}));
  }

  /**
   * @param request - BatchCreateQualityProjectsRequest
   * @returns BatchCreateQualityProjectsResponse
   */
  async batchCreateQualityProjects(request: $_model.BatchCreateQualityProjectsRequest): Promise<$_model.BatchCreateQualityProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateQualityProjectsWithOptions(request, runtime);
  }

  /**
   * 批量取消大模型解决方案Ai外呼明细任务
   * 
   * @param tmpReq - CancelAiCallDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAiCallDetailsResponse
   */
  async cancelAiCallDetailsWithOptions(tmpReq: $_model.CancelAiCallDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAiCallDetailsResponse> {
    tmpReq.validate();
    let request = new $_model.CancelAiCallDetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.detailIdList)) {
      request.detailIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detailIdList, "DetailIdList", "json");
    }

    if (!$dara.isNull(tmpReq.phoneNumbers)) {
      request.phoneNumbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phoneNumbers, "PhoneNumbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!$dara.isNull(request.detailIdListShrink)) {
      query["DetailIdList"] = request.detailIdListShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumbersShrink)) {
      query["PhoneNumbers"] = request.phoneNumbersShrink;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAiCallDetails",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAiCallDetailsResponse>(await this.callApi(params, req, runtime), new $_model.CancelAiCallDetailsResponse({}));
  }

  /**
   * 批量取消大模型解决方案Ai外呼明细任务
   * 
   * @param request - CancelAiCallDetailsRequest
   * @returns CancelAiCallDetailsResponse
   */
  async cancelAiCallDetails(request: $_model.CancelAiCallDetailsRequest): Promise<$_model.CancelAiCallDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAiCallDetailsWithOptions(request, runtime);
  }

  /**
   * 删除智能外呼任务
   * 
   * @param request - CancelTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
   */
  async cancelTaskWithOptions(request: $_model.CancelTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelTaskResponse({}));
  }

  /**
   * 删除智能外呼任务
   * 
   * @param request - CancelTaskRequest
   * @returns CancelTaskResponse
   */
  async cancelTask(request: $_model.CancelTaskRequest): Promise<$_model.CancelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelTaskWithOptions(request, runtime);
  }

  /**
   * 修改在线客服状态
   * 
   * @param request - ChangeChatAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeChatAgentStatusResponse
   */
  async changeChatAgentStatusWithOptions(request: $_model.ChangeChatAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeChatAgentStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.method)) {
      body["Method"] = request.method;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeChatAgentStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeChatAgentStatusResponse>(await this.callApi(params, req, runtime), new $_model.ChangeChatAgentStatusResponse({}));
  }

  /**
   * 修改在线客服状态
   * 
   * @param request - ChangeChatAgentStatusRequest
   * @returns ChangeChatAgentStatusResponse
   */
  async changeChatAgentStatus(request: $_model.ChangeChatAgentStatusRequest): Promise<$_model.ChangeChatAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeChatAgentStatusWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeQualityProjectStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeQualityProjectStatusResponse
   */
  async changeQualityProjectStatusWithOptions(request: $_model.ChangeQualityProjectStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeQualityProjectStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeQualityProjectStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeQualityProjectStatusResponse>(await this.callApi(params, req, runtime), new $_model.ChangeQualityProjectStatusResponse({}));
  }

  /**
   * @param request - ChangeQualityProjectStatusRequest
   * @returns ChangeQualityProjectStatusResponse
   */
  async changeQualityProjectStatus(request: $_model.ChangeQualityProjectStatusRequest): Promise<$_model.ChangeQualityProjectStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeQualityProjectStatusWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentResponse
   */
  async createAgentWithOptions(request: $_model.CreateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.skillGroupId)) {
      bodyFlat["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      bodyFlat["SkillGroupIdList"] = request.skillGroupIdList;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentResponse({}));
  }

  /**
   * @param request - CreateAgentRequest
   * @returns CreateAgentResponse
   */
  async createAgent(request: $_model.CreateAgentRequest): Promise<$_model.CreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentWithOptions(request, runtime);
  }

  /**
   * 创建任务
   * 
   * @param tmpReq - CreateAiCallTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAiCallTaskResponse
   */
  async createAiCallTaskWithOptions(tmpReq: $_model.CreateAiCallTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAiCallTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAiCallTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callDay)) {
      request.callDayShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callDay, "CallDay", "json");
    }

    if (!$dara.isNull(tmpReq.callRetryReason)) {
      request.callRetryReasonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callRetryReason, "CallRetryReason", "json");
    }

    if (!$dara.isNull(tmpReq.callTime)) {
      request.callTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callTime, "CallTime", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.callDayShrink)) {
      query["CallDay"] = request.callDayShrink;
    }

    if (!$dara.isNull(request.callRetryInterval)) {
      query["CallRetryInterval"] = request.callRetryInterval;
    }

    if (!$dara.isNull(request.callRetryReasonShrink)) {
      query["CallRetryReason"] = request.callRetryReasonShrink;
    }

    if (!$dara.isNull(request.callRetryTimes)) {
      query["CallRetryTimes"] = request.callRetryTimes;
    }

    if (!$dara.isNull(request.callTimeShrink)) {
      query["CallTime"] = request.callTimeShrink;
    }

    if (!$dara.isNull(request.missCallRetry)) {
      query["MissCallRetry"] = request.missCallRetry;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startType)) {
      query["StartType"] = request.startType;
    }

    if (!$dara.isNull(request.taskCps)) {
      query["TaskCps"] = request.taskCps;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskStartTime)) {
      query["TaskStartTime"] = request.taskStartTime;
    }

    if (!$dara.isNull(request.virtualNumber)) {
      query["VirtualNumber"] = request.virtualNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAiCallTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAiCallTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateAiCallTaskResponse({}));
  }

  /**
   * 创建任务
   * 
   * @param request - CreateAiCallTaskRequest
   * @returns CreateAiCallTaskResponse
   */
  async createAiCallTask(request: $_model.CreateAiCallTaskRequest): Promise<$_model.CreateAiCallTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAiCallTaskWithOptions(request, runtime);
  }

  /**
   * 创建智能外呼任务（预测式外呼、自动外呼）
   * 
   * @param tmpReq - CreateAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAiOutboundTaskResponse
   */
  async createAiOutboundTaskWithOptions(tmpReq: $_model.CreateAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAiOutboundTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAiOutboundTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.outboundNums)) {
      request.outboundNumsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundNums, "OutboundNums", "json");
    }

    if (!$dara.isNull(tmpReq.recallRule)) {
      request.recallRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recallRule, "RecallRule", "json");
    }

    let query = { };
    if (!$dara.isNull(request.concurrentRate)) {
      query["ConcurrentRate"] = request.concurrentRate;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionTime)) {
      query["ExecutionTime"] = request.executionTime;
    }

    if (!$dara.isNull(request.forecastCallRate)) {
      query["ForecastCallRate"] = request.forecastCallRate;
    }

    if (!$dara.isNull(request.handlerId)) {
      query["HandlerId"] = request.handlerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.numRepeated)) {
      query["NumRepeated"] = request.numRepeated;
    }

    if (!$dara.isNull(request.outboundNumsShrink)) {
      query["OutboundNums"] = request.outboundNumsShrink;
    }

    if (!$dara.isNull(request.recallRuleShrink)) {
      query["RecallRule"] = request.recallRuleShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateAiOutboundTaskResponse({}));
  }

  /**
   * 创建智能外呼任务（预测式外呼、自动外呼）
   * 
   * @param request - CreateAiOutboundTaskRequest
   * @returns CreateAiOutboundTaskResponse
   */
  async createAiOutboundTask(request: $_model.CreateAiOutboundTaskRequest): Promise<$_model.CreateAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * 创建智能外呼任务批次
   * 
   * @param request - CreateAiOutboundTaskBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAiOutboundTaskBatchResponse
   */
  async createAiOutboundTaskBatchWithOptions(request: $_model.CreateAiOutboundTaskBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAiOutboundTaskBatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAiOutboundTaskBatch",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAiOutboundTaskBatchResponse>(await this.callApi(params, req, runtime), new $_model.CreateAiOutboundTaskBatchResponse({}));
  }

  /**
   * 创建智能外呼任务批次
   * 
   * @param request - CreateAiOutboundTaskBatchRequest
   * @returns CreateAiOutboundTaskBatchResponse
   */
  async createAiOutboundTaskBatch(request: $_model.CreateAiOutboundTaskBatchRequest): Promise<$_model.CreateAiOutboundTaskBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAiOutboundTaskBatchWithOptions(request, runtime);
  }

  /**
   * 创建部门信息
   * 
   * @param request - CreateDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDepartmentResponse
   */
  async createDepartmentWithOptions(request: $_model.CreateDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDepartmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateDepartmentResponse({}));
  }

  /**
   * 创建部门信息
   * 
   * @param request - CreateDepartmentRequest
   * @returns CreateDepartmentResponse
   */
  async createDepartment(request: $_model.CreateDepartmentRequest): Promise<$_model.CreateDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDepartmentWithOptions(request, runtime);
  }

  /**
   * @param request - CreateOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOutboundTaskResponse
   */
  async createOutboundTaskWithOptions(request: $_model.CreateOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ani)) {
      query["Ani"] = request.ani;
    }

    if (!$dara.isNull(request.callInfos)) {
      query["CallInfos"] = request.callInfos;
    }

    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.extAttrs)) {
      query["ExtAttrs"] = request.extAttrs;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.retryInterval)) {
      query["RetryInterval"] = request.retryInterval;
    }

    if (!$dara.isNull(request.retryTime)) {
      query["RetryTime"] = request.retryTime;
    }

    if (!$dara.isNull(request.skillGroup)) {
      query["SkillGroup"] = request.skillGroup;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOutboundTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateOutboundTaskResponse({}));
  }

  /**
   * @param request - CreateOutboundTaskRequest
   * @returns CreateOutboundTaskResponse
   */
  async createOutboundTask(request: $_model.CreateOutboundTaskRequest): Promise<$_model.CreateOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - CreateQualityProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityProjectResponse
   */
  async createQualityProjectWithOptions(request: $_model.CreateQualityProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQualityProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysisIds)) {
      body["AnalysisIds"] = request.analysisIds;
    }

    if (!$dara.isNull(request.channelTouchType)) {
      body["ChannelTouchType"] = request.channelTouchType;
    }

    if (!$dara.isNull(request.checkFreqType)) {
      body["CheckFreqType"] = request.checkFreqType;
    }

    if (!$dara.isNull(request.depList)) {
      body["DepList"] = request.depList;
    }

    if (!$dara.isNull(request.groupList)) {
      body["GroupList"] = request.groupList;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.scopeType)) {
      body["ScopeType"] = request.scopeType;
    }

    if (!$dara.isNull(request.servicerList)) {
      body["ServicerList"] = request.servicerList;
    }

    if (!$dara.isNull(request.timeRangeEnd)) {
      body["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!$dara.isNull(request.timeRangeStart)) {
      body["TimeRangeStart"] = request.timeRangeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityProject",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQualityProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateQualityProjectResponse({}));
  }

  /**
   * @param request - CreateQualityProjectRequest
   * @returns CreateQualityProjectResponse
   */
  async createQualityProject(request: $_model.CreateQualityProjectRequest): Promise<$_model.CreateQualityProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQualityProjectWithOptions(request, runtime);
  }

  /**
   * @param request - CreateQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityRuleResponse
   */
  async createQualityRuleWithOptions(request: $_model.CreateQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQualityRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyWords)) {
      body["KeyWords"] = request.keyWords;
    }

    if (!$dara.isNull(request.matchType)) {
      body["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ruleTag)) {
      body["RuleTag"] = request.ruleTag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityRule",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateQualityRuleResponse({}));
  }

  /**
   * @param request - CreateQualityRuleRequest
   * @returns CreateQualityRuleResponse
   */
  async createQualityRule(request: $_model.CreateQualityRuleRequest): Promise<$_model.CreateQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQualityRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillGroupResponse
   */
  async createSkillGroupWithOptions(request: $_model.CreateSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.departmentId)) {
      body["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupName)) {
      body["SkillGroupName"] = request.skillGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillGroupResponse({}));
  }

  /**
   * @param request - CreateSkillGroupRequest
   * @returns CreateSkillGroupResponse
   */
  async createSkillGroup(request: $_model.CreateSkillGroupRequest): Promise<$_model.CreateSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillGroupWithOptions(request, runtime);
  }

  /**
   * 创建外呼任务
   * 
   * @param request - CreateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: $_model.CreateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callString)) {
      query["CallString"] = request.callString;
    }

    if (!$dara.isNull(request.callStringType)) {
      query["CallStringType"] = request.callStringType;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.retryCount)) {
      query["RetryCount"] = request.retryCount;
    }

    if (!$dara.isNull(request.retryFlag)) {
      query["RetryFlag"] = request.retryFlag;
    }

    if (!$dara.isNull(request.retryInterval)) {
      query["RetryInterval"] = request.retryInterval;
    }

    if (!$dara.isNull(request.retryStatusCode)) {
      query["RetryStatusCode"] = request.retryStatusCode;
    }

    if (!$dara.isNull(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    if (!$dara.isNull(request.seatCount)) {
      query["SeatCount"] = request.seatCount;
    }

    if (!$dara.isNull(request.startNow)) {
      query["StartNow"] = request.startNow;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.workDay)) {
      query["WorkDay"] = request.workDay;
    }

    if (!$dara.isNull(request.workTimeList)) {
      query["WorkTimeList"] = request.workTimeList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTaskResponse({}));
  }

  /**
   * 创建外呼任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: $_model.CreateTaskRequest): Promise<$_model.CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTaskWithOptions(request, runtime);
  }

  /**
   * 创建坐席并开通sso登录能力
   * 
   * @param request - CreateThirdSsoAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateThirdSsoAgentResponse
   */
  async createThirdSsoAgentWithOptions(request: $_model.CreateThirdSsoAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateThirdSsoAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleIds)) {
      bodyFlat["RoleIds"] = request.roleIds;
    }

    if (!$dara.isNull(request.skillGroupIds)) {
      bodyFlat["SkillGroupIds"] = request.skillGroupIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateThirdSsoAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateThirdSsoAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateThirdSsoAgentResponse({}));
  }

  /**
   * 创建坐席并开通sso登录能力
   * 
   * @param request - CreateThirdSsoAgentRequest
   * @returns CreateThirdSsoAgentResponse
   */
  async createThirdSsoAgent(request: $_model.CreateThirdSsoAgentRequest): Promise<$_model.CreateThirdSsoAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createThirdSsoAgentWithOptions(request, runtime);
  }

  /**
   * 删除坐席账号
   * 
   * @param request - DeleteAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentResponse
   */
  async deleteAgentWithOptions(request: $_model.DeleteAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "DELETE",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentResponse({}));
  }

  /**
   * 删除坐席账号
   * 
   * @param request - DeleteAgentRequest
   * @returns DeleteAgentResponse
   */
  async deleteAgent(request: $_model.DeleteAgentRequest): Promise<$_model.DeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAgentWithOptions(request, runtime);
  }

  /**
   * 删除智能外呼任务
   * 
   * @param request - DeleteAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAiOutboundTaskResponse
   */
  async deleteAiOutboundTaskWithOptions(request: $_model.DeleteAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAiOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAiOutboundTaskResponse({}));
  }

  /**
   * 删除智能外呼任务
   * 
   * @param request - DeleteAiOutboundTaskRequest
   * @returns DeleteAiOutboundTaskResponse
   */
  async deleteAiOutboundTask(request: $_model.DeleteAiOutboundTaskRequest): Promise<$_model.DeleteAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * 删除部门信息
   * 
   * @param request - DeleteDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDepartmentResponse
   */
  async deleteDepartmentWithOptions(request: $_model.DeleteDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDepartmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDepartmentResponse({}));
  }

  /**
   * 删除部门信息
   * 
   * @param request - DeleteDepartmentRequest
   * @returns DeleteDepartmentResponse
   */
  async deleteDepartment(request: $_model.DeleteDepartmentRequest): Promise<$_model.DeleteDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDepartmentWithOptions(request, runtime);
  }

  /**
   * 删除热线号码
   * 
   * @param request - DeleteHotlineNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotlineNumberResponse
   */
  async deleteHotlineNumberWithOptions(request: $_model.DeleteHotlineNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHotlineNumberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotlineNumber)) {
      body["HotlineNumber"] = request.hotlineNumber;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHotlineNumberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHotlineNumberResponse({}));
  }

  /**
   * 删除热线号码
   * 
   * @param request - DeleteHotlineNumberRequest
   * @returns DeleteHotlineNumberResponse
   */
  async deleteHotlineNumber(request: $_model.DeleteHotlineNumberRequest): Promise<$_model.DeleteHotlineNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHotlineNumberWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOutboundTaskResponse
   */
  async deleteOutboundTaskWithOptions(request: $_model.DeleteOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOutboundTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOutboundTaskResponse({}));
  }

  /**
   * @param request - DeleteOutboundTaskRequest
   * @returns DeleteOutboundTaskResponse
   */
  async deleteOutboundTask(request: $_model.DeleteOutboundTaskRequest): Promise<$_model.DeleteOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteOuterAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOuterAccountResponse
   */
  async deleteOuterAccountWithOptions(request: $_model.DeleteOuterAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOuterAccountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOuterAccount",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOuterAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOuterAccountResponse({}));
  }

  /**
   * @param request - DeleteOuterAccountRequest
   * @returns DeleteOuterAccountResponse
   */
  async deleteOuterAccount(request: $_model.DeleteOuterAccountRequest): Promise<$_model.DeleteOuterAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOuterAccountWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteQualityProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityProjectResponse
   */
  async deleteQualityProjectWithOptions(request: $_model.DeleteQualityProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQualityProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityProject",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQualityProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQualityProjectResponse({}));
  }

  /**
   * @param request - DeleteQualityProjectRequest
   * @returns DeleteQualityProjectResponse
   */
  async deleteQualityProject(request: $_model.DeleteQualityProjectRequest): Promise<$_model.DeleteQualityProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityProjectWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityRuleResponse
   */
  async deleteQualityRuleWithOptions(request: $_model.DeleteQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQualityRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityRule",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQualityRuleResponse({}));
  }

  /**
   * @param request - DeleteQualityRuleRequest
   * @returns DeleteQualityRuleResponse
   */
  async deleteQualityRule(request: $_model.DeleteQualityRuleRequest): Promise<$_model.DeleteQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillGroupResponse
   */
  async deleteSkillGroupWithOptions(request: $_model.DeleteSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSkillGroupResponse({}));
  }

  /**
   * @param request - DeleteSkillGroupRequest
   * @returns DeleteSkillGroupResponse
   */
  async deleteSkillGroup(request: $_model.DeleteSkillGroupRequest): Promise<$_model.DeleteSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecordDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordDataResponse
   */
  async describeRecordDataWithOptions(request: $_model.DescribeRecordDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecordDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secLevel)) {
      query["SecLevel"] = request.secLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecordDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecordDataResponse({}));
  }

  /**
   * @param request - DescribeRecordDataRequest
   * @returns DescribeRecordDataResponse
   */
  async describeRecordData(request: $_model.DescribeRecordDataRequest): Promise<$_model.DescribeRecordDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordDataWithOptions(request, runtime);
  }

  /**
   * @param request - EditQualityProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditQualityProjectResponse
   */
  async editQualityProjectWithOptions(request: $_model.EditQualityProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditQualityProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analysisIds)) {
      query["AnalysisIds"] = request.analysisIds;
    }

    if (!$dara.isNull(request.channelTouchType)) {
      query["ChannelTouchType"] = request.channelTouchType;
    }

    if (!$dara.isNull(request.checkFreqType)) {
      query["CheckFreqType"] = request.checkFreqType;
    }

    if (!$dara.isNull(request.depList)) {
      query["DepList"] = request.depList;
    }

    if (!$dara.isNull(request.groupList)) {
      query["GroupList"] = request.groupList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectVersion)) {
      query["ProjectVersion"] = request.projectVersion;
    }

    if (!$dara.isNull(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    if (!$dara.isNull(request.servicerList)) {
      query["ServicerList"] = request.servicerList;
    }

    if (!$dara.isNull(request.timeRangeEnd)) {
      query["TimeRangeEnd"] = request.timeRangeEnd;
    }

    if (!$dara.isNull(request.timeRangeStart)) {
      query["TimeRangeStart"] = request.timeRangeStart;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditQualityProject",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditQualityProjectResponse>(await this.callApi(params, req, runtime), new $_model.EditQualityProjectResponse({}));
  }

  /**
   * @param request - EditQualityProjectRequest
   * @returns EditQualityProjectResponse
   */
  async editQualityProject(request: $_model.EditQualityProjectRequest): Promise<$_model.EditQualityProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editQualityProjectWithOptions(request, runtime);
  }

  /**
   * @param request - EditQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditQualityRuleResponse
   */
  async editQualityRuleWithOptions(request: $_model.EditQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditQualityRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyWords)) {
      body["KeyWords"] = request.keyWords;
    }

    if (!$dara.isNull(request.matchType)) {
      body["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.qualityRuleId)) {
      body["QualityRuleId"] = request.qualityRuleId;
    }

    if (!$dara.isNull(request.ruleTag)) {
      body["RuleTag"] = request.ruleTag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditQualityRule",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.EditQualityRuleResponse({}));
  }

  /**
   * @param request - EditQualityRuleRequest
   * @returns EditQualityRuleResponse
   */
  async editQualityRule(request: $_model.EditQualityRuleRequest): Promise<$_model.EditQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editQualityRuleWithOptions(request, runtime);
  }

  /**
   * @param request - EditQualityRuleTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditQualityRuleTagResponse
   */
  async editQualityRuleTagWithOptions(request: $_model.EditQualityRuleTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditQualityRuleTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analysisTypes)) {
      query["AnalysisTypes"] = request.analysisTypes;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditQualityRuleTag",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditQualityRuleTagResponse>(await this.callApi(params, req, runtime), new $_model.EditQualityRuleTagResponse({}));
  }

  /**
   * @param request - EditQualityRuleTagRequest
   * @returns EditQualityRuleTagResponse
   */
  async editQualityRuleTag(request: $_model.EditQualityRuleTagRequest): Promise<$_model.EditQualityRuleTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editQualityRuleTagWithOptions(request, runtime);
  }

  /**
   * 热线号码加密
   * 
   * @param request - EncryptPhoneNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EncryptPhoneNumResponse
   */
  async encryptPhoneNumWithOptions(request: $_model.EncryptPhoneNumRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EncryptPhoneNumResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EncryptPhoneNum",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EncryptPhoneNumResponse>(await this.callApi(params, req, runtime), new $_model.EncryptPhoneNumResponse({}));
  }

  /**
   * 热线号码加密
   * 
   * @param request - EncryptPhoneNumRequest
   * @returns EncryptPhoneNumResponse
   */
  async encryptPhoneNum(request: $_model.EncryptPhoneNumRequest): Promise<$_model.EncryptPhoneNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.encryptPhoneNumWithOptions(request, runtime);
  }

  /**
   * @param request - FetchCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchCallResponse
   */
  async fetchCallWithOptions(request: $_model.FetchCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FetchCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.holdConnectionId)) {
      body["HoldConnectionId"] = request.holdConnectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FetchCallResponse>(await this.callApi(params, req, runtime), new $_model.FetchCallResponse({}));
  }

  /**
   * @param request - FetchCallRequest
   * @returns FetchCallResponse
   */
  async fetchCall(request: $_model.FetchCallRequest): Promise<$_model.FetchCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fetchCallWithOptions(request, runtime);
  }

  /**
   * @param request - FinishHotlineServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishHotlineServiceResponse
   */
  async finishHotlineServiceWithOptions(request: $_model.FinishHotlineServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FinishHotlineServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FinishHotlineService",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FinishHotlineServiceResponse>(await this.callApi(params, req, runtime), new $_model.FinishHotlineServiceResponse({}));
  }

  /**
   * @param request - FinishHotlineServiceRequest
   * @returns FinishHotlineServiceResponse
   */
  async finishHotlineService(request: $_model.FinishHotlineServiceRequest): Promise<$_model.FinishHotlineServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.finishHotlineServiceWithOptions(request, runtime);
  }

  /**
   * @param request - GenerateWebSocketSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateWebSocketSignResponse
   */
  async generateWebSocketSignWithOptions(request: $_model.GenerateWebSocketSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateWebSocketSignResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateWebSocketSign",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateWebSocketSignResponse>(await this.callApi(params, req, runtime), new $_model.GenerateWebSocketSignResponse({}));
  }

  /**
   * @param request - GenerateWebSocketSignRequest
   * @returns GenerateWebSocketSignResponse
   */
  async generateWebSocketSign(request: $_model.GenerateWebSocketSignRequest): Promise<$_model.GenerateWebSocketSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateWebSocketSignWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentResponse
   */
  async getAgentWithOptions(request: $_model.GetAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentResponse({}));
  }

  /**
   * @param request - GetAgentRequest
   * @returns GetAgentResponse
   */
  async getAgent(request: $_model.GetAgentRequest): Promise<$_model.GetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentWithOptions(request, runtime);
  }

  /**
   * 坐席纬度基础状态量
   * 
   * @param tmpReq - GetAgentBasisStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentBasisStatusResponse
   */
  async getAgentBasisStatusWithOptions(tmpReq: $_model.GetAgentBasisStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentBasisStatusResponse> {
    tmpReq.validate();
    let request = new $_model.GetAgentBasisStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentBasisStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentBasisStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentBasisStatusResponse({}));
  }

  /**
   * 坐席纬度基础状态量
   * 
   * @param request - GetAgentBasisStatusRequest
   * @returns GetAgentBasisStatusResponse
   */
  async getAgentBasisStatus(request: $_model.GetAgentBasisStatusRequest): Promise<$_model.GetAgentBasisStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentBasisStatusWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgentByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentByIdResponse
   */
  async getAgentByIdWithOptions(request: $_model.GetAgentByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentByIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentById",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentByIdResponse({}));
  }

  /**
   * @param request - GetAgentByIdRequest
   * @returns GetAgentByIdResponse
   */
  async getAgentById(request: $_model.GetAgentByIdRequest): Promise<$_model.GetAgentByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentByIdWithOptions(request, runtime);
  }

  /**
   * 热线坐席纬度详情汇总
   * 
   * @param tmpReq - GetAgentDetailReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentDetailReportResponse
   */
  async getAgentDetailReportWithOptions(tmpReq: $_model.GetAgentDetailReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentDetailReportResponse> {
    tmpReq.validate();
    let request = new $_model.GetAgentDetailReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentDetailReport",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentDetailReportResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentDetailReportResponse({}));
  }

  /**
   * 热线坐席纬度详情汇总
   * 
   * @param request - GetAgentDetailReportRequest
   * @returns GetAgentDetailReportResponse
   */
  async getAgentDetailReport(request: $_model.GetAgentDetailReportRequest): Promise<$_model.GetAgentDetailReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentDetailReportWithOptions(request, runtime);
  }

  /**
   * @param request - GetAgentIndexRealTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentIndexRealTimeResponse
   */
  async getAgentIndexRealTimeWithOptions(request: $_model.GetAgentIndexRealTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentIndexRealTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentIndexRealTime",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentIndexRealTimeResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentIndexRealTimeResponse({}));
  }

  /**
   * @param request - GetAgentIndexRealTimeRequest
   * @returns GetAgentIndexRealTimeResponse
   */
  async getAgentIndexRealTime(request: $_model.GetAgentIndexRealTimeRequest): Promise<$_model.GetAgentIndexRealTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentIndexRealTimeWithOptions(request, runtime);
  }

  /**
   * 坐席服务状态量
   * 
   * @param tmpReq - GetAgentServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentServiceStatusResponse
   */
  async getAgentServiceStatusWithOptions(tmpReq: $_model.GetAgentServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentServiceStatusResponse> {
    tmpReq.validate();
    let request = new $_model.GetAgentServiceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentServiceStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentServiceStatusResponse({}));
  }

  /**
   * 坐席服务状态量
   * 
   * @param request - GetAgentServiceStatusRequest
   * @returns GetAgentServiceStatusResponse
   */
  async getAgentServiceStatus(request: $_model.GetAgentServiceStatusRequest): Promise<$_model.GetAgentServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentServiceStatusWithOptions(request, runtime);
  }

  /**
   * 坐席纬度统计量
   * 
   * @param tmpReq - GetAgentStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentStatisticsResponse
   */
  async getAgentStatisticsWithOptions(tmpReq: $_model.GetAgentStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentStatisticsResponse> {
    tmpReq.validate();
    let request = new $_model.GetAgentStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentStatistics",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentStatisticsResponse({}));
  }

  /**
   * 坐席纬度统计量
   * 
   * @param request - GetAgentStatisticsRequest
   * @returns GetAgentStatisticsResponse
   */
  async getAgentStatistics(request: $_model.GetAgentStatisticsRequest): Promise<$_model.GetAgentStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentStatisticsWithOptions(request, runtime);
  }

  /**
   * 获取智能外呼任务业务自定义信息
   * 
   * @param request - GetAiOutboundTaskBizDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiOutboundTaskBizDataResponse
   */
  async getAiOutboundTaskBizDataWithOptions(request: $_model.GetAiOutboundTaskBizDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAiOutboundTaskBizDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiOutboundTaskBizData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAiOutboundTaskBizDataResponse>(await this.callApi(params, req, runtime), new $_model.GetAiOutboundTaskBizDataResponse({}));
  }

  /**
   * 获取智能外呼任务业务自定义信息
   * 
   * @param request - GetAiOutboundTaskBizDataRequest
   * @returns GetAiOutboundTaskBizDataResponse
   */
  async getAiOutboundTaskBizData(request: $_model.GetAiOutboundTaskBizDataRequest): Promise<$_model.GetAiOutboundTaskBizDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskBizDataWithOptions(request, runtime);
  }

  /**
   * 智能外呼任务配置详情查询
   * 
   * @param request - GetAiOutboundTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiOutboundTaskDetailResponse
   */
  async getAiOutboundTaskDetailWithOptions(request: $_model.GetAiOutboundTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAiOutboundTaskDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiOutboundTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAiOutboundTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetAiOutboundTaskDetailResponse({}));
  }

  /**
   * 智能外呼任务配置详情查询
   * 
   * @param request - GetAiOutboundTaskDetailRequest
   * @returns GetAiOutboundTaskDetailResponse
   */
  async getAiOutboundTaskDetail(request: $_model.GetAiOutboundTaskDetailRequest): Promise<$_model.GetAiOutboundTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskDetailWithOptions(request, runtime);
  }

  /**
   * 智能外呼任务执行详情
   * 
   * @param request - GetAiOutboundTaskExecDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiOutboundTaskExecDetailResponse
   */
  async getAiOutboundTaskExecDetailWithOptions(request: $_model.GetAiOutboundTaskExecDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAiOutboundTaskExecDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiOutboundTaskExecDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAiOutboundTaskExecDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetAiOutboundTaskExecDetailResponse({}));
  }

  /**
   * 智能外呼任务执行详情
   * 
   * @param request - GetAiOutboundTaskExecDetailRequest
   * @returns GetAiOutboundTaskExecDetailResponse
   */
  async getAiOutboundTaskExecDetail(request: $_model.GetAiOutboundTaskExecDetailRequest): Promise<$_model.GetAiOutboundTaskExecDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskExecDetailWithOptions(request, runtime);
  }

  /**
   * 智能外呼任务列表查询
   * 
   * @param request - GetAiOutboundTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiOutboundTaskListResponse
   */
  async getAiOutboundTaskListWithOptions(request: $_model.GetAiOutboundTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAiOutboundTaskListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiOutboundTaskList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAiOutboundTaskListResponse>(await this.callApi(params, req, runtime), new $_model.GetAiOutboundTaskListResponse({}));
  }

  /**
   * 智能外呼任务列表查询
   * 
   * @param request - GetAiOutboundTaskListRequest
   * @returns GetAiOutboundTaskListResponse
   */
  async getAiOutboundTaskList(request: $_model.GetAiOutboundTaskListRequest): Promise<$_model.GetAiOutboundTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskListWithOptions(request, runtime);
  }

  /**
   * 智能外呼任务执行进度
   * 
   * @param request - GetAiOutboundTaskProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiOutboundTaskProgressResponse
   */
  async getAiOutboundTaskProgressWithOptions(request: $_model.GetAiOutboundTaskProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAiOutboundTaskProgressResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiOutboundTaskProgress",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAiOutboundTaskProgressResponse>(await this.callApi(params, req, runtime), new $_model.GetAiOutboundTaskProgressResponse({}));
  }

  /**
   * 智能外呼任务执行进度
   * 
   * @param request - GetAiOutboundTaskProgressRequest
   * @returns GetAiOutboundTaskProgressResponse
   */
  async getAiOutboundTaskProgress(request: $_model.GetAiOutboundTaskProgressRequest): Promise<$_model.GetAiOutboundTaskProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskProgressWithOptions(request, runtime);
  }

  /**
   * getAllDepartment
   * 
   * @param request - GetAllDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAllDepartmentResponse
   */
  async getAllDepartmentWithOptions(request: $_model.GetAllDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAllDepartmentResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAllDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAllDepartmentResponse>(await this.callApi(params, req, runtime), new $_model.GetAllDepartmentResponse({}));
  }

  /**
   * getAllDepartment
   * 
   * @param request - GetAllDepartmentRequest
   * @returns GetAllDepartmentResponse
   */
  async getAllDepartment(request: $_model.GetAllDepartmentRequest): Promise<$_model.GetAllDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAllDepartmentWithOptions(request, runtime);
  }

  /**
   * 获取通话录音文件
   * 
   * @param request - GetCallSoundRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCallSoundRecordResponse
   */
  async getCallSoundRecordWithOptions(request: $_model.GetCallSoundRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCallSoundRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCallSoundRecord",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCallSoundRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetCallSoundRecordResponse({}));
  }

  /**
   * 获取通话录音文件
   * 
   * @param request - GetCallSoundRecordRequest
   * @returns GetCallSoundRecordResponse
   */
  async getCallSoundRecord(request: $_model.GetCallSoundRecordRequest): Promise<$_model.GetCallSoundRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCallSoundRecordWithOptions(request, runtime);
  }

  /**
   * 获取热线配置号码列表
   * 
   * @param request - GetConfigNumListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigNumListResponse
   */
  async getConfigNumListWithOptions(request: $_model.GetConfigNumListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConfigNumListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfigNumList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConfigNumListResponse>(await this.callApi(params, req, runtime), new $_model.GetConfigNumListResponse({}));
  }

  /**
   * 获取热线配置号码列表
   * 
   * @param request - GetConfigNumListRequest
   * @returns GetConfigNumListResponse
   */
  async getConfigNumList(request: $_model.GetConfigNumListRequest): Promise<$_model.GetConfigNumListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigNumListWithOptions(request, runtime);
  }

  /**
   * 获取会员信息
   * 
   * @param request - GetCustomerInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerInfoResponse
   */
  async getCustomerInfoWithOptions(request: $_model.GetCustomerInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomerInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerInfo",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomerInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomerInfoResponse({}));
  }

  /**
   * 获取会员信息
   * 
   * @param request - GetCustomerInfoRequest
   * @returns GetCustomerInfoResponse
   */
  async getCustomerInfo(request: $_model.GetCustomerInfoRequest): Promise<$_model.GetCustomerInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerInfoWithOptions(request, runtime);
  }

  /**
   * 获取技能组分组
   * 
   * @param request - GetDepGroupTreeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDepGroupTreeDataResponse
   */
  async getDepGroupTreeDataWithOptions(request: $_model.GetDepGroupTreeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDepGroupTreeDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDepGroupTreeData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDepGroupTreeDataResponse>(await this.callApi(params, req, runtime), new $_model.GetDepGroupTreeDataResponse({}));
  }

  /**
   * 获取技能组分组
   * 
   * @param request - GetDepGroupTreeDataRequest
   * @returns GetDepGroupTreeDataResponse
   */
  async getDepGroupTreeData(request: $_model.GetDepGroupTreeDataRequest): Promise<$_model.GetDepGroupTreeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDepGroupTreeDataWithOptions(request, runtime);
  }

  /**
   * 部门纬度坐席状态量
   * 
   * @param tmpReq - GetDepartmentalLatitudeAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDepartmentalLatitudeAgentStatusResponse
   */
  async getDepartmentalLatitudeAgentStatusWithOptions(tmpReq: $_model.GetDepartmentalLatitudeAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDepartmentalLatitudeAgentStatusResponse> {
    tmpReq.validate();
    let request = new $_model.GetDepartmentalLatitudeAgentStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDepartmentalLatitudeAgentStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDepartmentalLatitudeAgentStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetDepartmentalLatitudeAgentStatusResponse({}));
  }

  /**
   * 部门纬度坐席状态量
   * 
   * @param request - GetDepartmentalLatitudeAgentStatusRequest
   * @returns GetDepartmentalLatitudeAgentStatusResponse
   */
  async getDepartmentalLatitudeAgentStatus(request: $_model.GetDepartmentalLatitudeAgentStatusRequest): Promise<$_model.GetDepartmentalLatitudeAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDepartmentalLatitudeAgentStatusWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotlineAgentDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineAgentDetailResponse
   */
  async getHotlineAgentDetailWithOptions(request: $_model.GetHotlineAgentDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotlineAgentDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineAgentDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotlineAgentDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetHotlineAgentDetailResponse({}));
  }

  /**
   * @param request - GetHotlineAgentDetailRequest
   * @returns GetHotlineAgentDetailResponse
   */
  async getHotlineAgentDetail(request: $_model.GetHotlineAgentDetailRequest): Promise<$_model.GetHotlineAgentDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineAgentDetailWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotlineAgentDetailReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineAgentDetailReportResponse
   */
  async getHotlineAgentDetailReportWithOptions(request: $_model.GetHotlineAgentDetailReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotlineAgentDetailReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineAgentDetailReport",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotlineAgentDetailReportResponse>(await this.callApi(params, req, runtime), new $_model.GetHotlineAgentDetailReportResponse({}));
  }

  /**
   * @param request - GetHotlineAgentDetailReportRequest
   * @returns GetHotlineAgentDetailReportResponse
   */
  async getHotlineAgentDetailReport(request: $_model.GetHotlineAgentDetailReportRequest): Promise<$_model.GetHotlineAgentDetailReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineAgentDetailReportWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotlineAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineAgentStatusResponse
   */
  async getHotlineAgentStatusWithOptions(request: $_model.GetHotlineAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotlineAgentStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineAgentStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotlineAgentStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetHotlineAgentStatusResponse({}));
  }

  /**
   * @param request - GetHotlineAgentStatusRequest
   * @returns GetHotlineAgentStatusResponse
   */
  async getHotlineAgentStatus(request: $_model.GetHotlineAgentStatusRequest): Promise<$_model.GetHotlineAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineAgentStatusWithOptions(request, runtime);
  }

  /**
   * 查询话务动作结果数据
   * 
   * @param request - GetHotlineCallActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineCallActionResponse
   */
  async getHotlineCallActionWithOptions(request: $_model.GetHotlineCallActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotlineCallActionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acc)) {
      body["Acc"] = request.acc;
    }

    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.act)) {
      body["Act"] = request.act;
    }

    if (!$dara.isNull(request.biz)) {
      body["Biz"] = request.biz;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.fromSource)) {
      body["FromSource"] = request.fromSource;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineCallAction",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotlineCallActionResponse>(await this.callApi(params, req, runtime), new $_model.GetHotlineCallActionResponse({}));
  }

  /**
   * 查询话务动作结果数据
   * 
   * @param request - GetHotlineCallActionRequest
   * @returns GetHotlineCallActionResponse
   */
  async getHotlineCallAction(request: $_model.GetHotlineCallActionRequest): Promise<$_model.GetHotlineCallActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineCallActionWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotlineGroupDetailReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineGroupDetailReportResponse
   */
  async getHotlineGroupDetailReportWithOptions(request: $_model.GetHotlineGroupDetailReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotlineGroupDetailReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineGroupDetailReport",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotlineGroupDetailReportResponse>(await this.callApi(params, req, runtime), new $_model.GetHotlineGroupDetailReportResponse({}));
  }

  /**
   * @param request - GetHotlineGroupDetailReportRequest
   * @returns GetHotlineGroupDetailReportResponse
   */
  async getHotlineGroupDetailReport(request: $_model.GetHotlineGroupDetailReportRequest): Promise<$_model.GetHotlineGroupDetailReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineGroupDetailReportWithOptions(request, runtime);
  }

  /**
   * 获取热线聊天记录
   * 
   * @param request - GetHotlineMessageLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineMessageLogResponse
   */
  async getHotlineMessageLogWithOptions(request: $_model.GetHotlineMessageLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotlineMessageLogResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineMessageLog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotlineMessageLogResponse>(await this.callApi(params, req, runtime), new $_model.GetHotlineMessageLogResponse({}));
  }

  /**
   * 获取热线聊天记录
   * 
   * @param request - GetHotlineMessageLogRequest
   * @returns GetHotlineMessageLogResponse
   */
  async getHotlineMessageLog(request: $_model.GetHotlineMessageLogRequest): Promise<$_model.GetHotlineMessageLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineMessageLogWithOptions(request, runtime);
  }

  /**
   * 获取热线当前信息
   * 
   * @param request - GetHotlineRuntimeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineRuntimeInfoResponse
   */
  async getHotlineRuntimeInfoWithOptions(request: $_model.GetHotlineRuntimeInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotlineRuntimeInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineRuntimeInfo",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotlineRuntimeInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetHotlineRuntimeInfoResponse({}));
  }

  /**
   * 获取热线当前信息
   * 
   * @param request - GetHotlineRuntimeInfoRequest
   * @returns GetHotlineRuntimeInfoResponse
   */
  async getHotlineRuntimeInfo(request: $_model.GetHotlineRuntimeInfoRequest): Promise<$_model.GetHotlineRuntimeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineRuntimeInfoWithOptions(request, runtime);
  }

  /**
   * 服务统计量数据
   * 
   * @param tmpReq - GetHotlineServiceStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineServiceStatisticsResponse
   */
  async getHotlineServiceStatisticsWithOptions(tmpReq: $_model.GetHotlineServiceStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotlineServiceStatisticsResponse> {
    tmpReq.validate();
    let request = new $_model.GetHotlineServiceStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineServiceStatistics",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotlineServiceStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetHotlineServiceStatisticsResponse({}));
  }

  /**
   * 服务统计量数据
   * 
   * @param request - GetHotlineServiceStatisticsRequest
   * @returns GetHotlineServiceStatisticsResponse
   */
  async getHotlineServiceStatistics(request: $_model.GetHotlineServiceStatisticsRequest): Promise<$_model.GetHotlineServiceStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineServiceStatisticsWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotlineWaitingNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineWaitingNumberResponse
   */
  async getHotlineWaitingNumberWithOptions(request: $_model.GetHotlineWaitingNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotlineWaitingNumberResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineWaitingNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotlineWaitingNumberResponse>(await this.callApi(params, req, runtime), new $_model.GetHotlineWaitingNumberResponse({}));
  }

  /**
   * @param request - GetHotlineWaitingNumberRequest
   * @returns GetHotlineWaitingNumberResponse
   */
  async getHotlineWaitingNumber(request: $_model.GetHotlineWaitingNumberRequest): Promise<$_model.GetHotlineWaitingNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineWaitingNumberWithOptions(request, runtime);
  }

  /**
   * @param request - GetIndexCurrentValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexCurrentValueResponse
   */
  async getIndexCurrentValueWithOptions(request: $_model.GetIndexCurrentValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIndexCurrentValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.depIds)) {
      query["DepIds"] = request.depIds;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndexCurrentValue",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIndexCurrentValueResponse>(await this.callApi(params, req, runtime), new $_model.GetIndexCurrentValueResponse({}));
  }

  /**
   * @param request - GetIndexCurrentValueRequest
   * @returns GetIndexCurrentValueResponse
   */
  async getIndexCurrentValue(request: $_model.GetIndexCurrentValueRequest): Promise<$_model.GetIndexCurrentValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIndexCurrentValueWithOptions(request, runtime);
  }

  /**
   * @param request - GetInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceListResponse
   */
  async getInstanceListWithOptions(request: $_model.GetInstanceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceListResponse({}));
  }

  /**
   * @param request - GetInstanceListRequest
   * @returns GetInstanceListResponse
   */
  async getInstanceList(request: $_model.GetInstanceListRequest): Promise<$_model.GetInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceListWithOptions(request, runtime);
  }

  /**
   * 热线检测获取mcu ip地址
   * 
   * @param request - GetMcuLvsIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMcuLvsIpResponse
   */
  async getMcuLvsIpWithOptions(request: $_model.GetMcuLvsIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcuLvsIpResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMcuLvsIp",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMcuLvsIpResponse>(await this.callApi(params, req, runtime), new $_model.GetMcuLvsIpResponse({}));
  }

  /**
   * 热线检测获取mcu ip地址
   * 
   * @param request - GetMcuLvsIpRequest
   * @returns GetMcuLvsIpResponse
   */
  async getMcuLvsIp(request: $_model.GetMcuLvsIpRequest): Promise<$_model.GetMcuLvsIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMcuLvsIpWithOptions(request, runtime);
  }

  /**
   * @param request - GetNumLocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNumLocationResponse
   */
  async getNumLocationWithOptions(request: $_model.GetNumLocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNumLocationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNumLocation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNumLocationResponse>(await this.callApi(params, req, runtime), new $_model.GetNumLocationResponse({}));
  }

  /**
   * @param request - GetNumLocationRequest
   * @returns GetNumLocationResponse
   */
  async getNumLocation(request: $_model.GetNumLocationRequest): Promise<$_model.GetNumLocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNumLocationWithOptions(request, runtime);
  }

  /**
   * 在线坐席信息
   * 
   * @param tmpReq - GetOnlineSeatInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOnlineSeatInformationResponse
   */
  async getOnlineSeatInformationWithOptions(tmpReq: $_model.GetOnlineSeatInformationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOnlineSeatInformationResponse> {
    tmpReq.validate();
    let request = new $_model.GetOnlineSeatInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOnlineSeatInformation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOnlineSeatInformationResponse>(await this.callApi(params, req, runtime), new $_model.GetOnlineSeatInformationResponse({}));
  }

  /**
   * 在线坐席信息
   * 
   * @param request - GetOnlineSeatInformationRequest
   * @returns GetOnlineSeatInformationResponse
   */
  async getOnlineSeatInformation(request: $_model.GetOnlineSeatInformationRequest): Promise<$_model.GetOnlineSeatInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOnlineSeatInformationWithOptions(request, runtime);
  }

  /**
   * 在线服务总量
   * 
   * @param tmpReq - GetOnlineServiceVolumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOnlineServiceVolumeResponse
   */
  async getOnlineServiceVolumeWithOptions(tmpReq: $_model.GetOnlineServiceVolumeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOnlineServiceVolumeResponse> {
    tmpReq.validate();
    let request = new $_model.GetOnlineServiceVolumeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOnlineServiceVolume",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOnlineServiceVolumeResponse>(await this.callApi(params, req, runtime), new $_model.GetOnlineServiceVolumeResponse({}));
  }

  /**
   * 在线服务总量
   * 
   * @param request - GetOnlineServiceVolumeRequest
   * @returns GetOnlineServiceVolumeResponse
   */
  async getOnlineServiceVolume(request: $_model.GetOnlineServiceVolumeRequest): Promise<$_model.GetOnlineServiceVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOnlineServiceVolumeWithOptions(request, runtime);
  }

  /**
   * @param request - GetOutbounNumListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOutbounNumListResponse
   */
  async getOutbounNumListWithOptions(request: $_model.GetOutbounNumListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOutbounNumListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOutbounNumList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOutbounNumListResponse>(await this.callApi(params, req, runtime), new $_model.GetOutbounNumListResponse({}));
  }

  /**
   * @param request - GetOutbounNumListRequest
   * @returns GetOutbounNumListResponse
   */
  async getOutbounNumList(request: $_model.GetOutbounNumListRequest): Promise<$_model.GetOutbounNumListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOutbounNumListWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityProjectDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityProjectDetailResponse
   */
  async getQualityProjectDetailWithOptions(request: $_model.GetQualityProjectDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityProjectDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityProjectDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityProjectDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityProjectDetailResponse({}));
  }

  /**
   * @param request - GetQualityProjectDetailRequest
   * @returns GetQualityProjectDetailResponse
   */
  async getQualityProjectDetail(request: $_model.GetQualityProjectDetailRequest): Promise<$_model.GetQualityProjectDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityProjectDetailWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityProjectListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityProjectListResponse
   */
  async getQualityProjectListWithOptions(request: $_model.GetQualityProjectListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityProjectListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.checkFreqType)) {
      query["checkFreqType"] = request.checkFreqType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityProjectList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityProjectListResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityProjectListResponse({}));
  }

  /**
   * @param request - GetQualityProjectListRequest
   * @returns GetQualityProjectListResponse
   */
  async getQualityProjectList(request: $_model.GetQualityProjectListRequest): Promise<$_model.GetQualityProjectListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityProjectListWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityProjectLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityProjectLogResponse
   */
  async getQualityProjectLogWithOptions(request: $_model.GetQualityProjectLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityProjectLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityProjectLog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityProjectLogResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityProjectLogResponse({}));
  }

  /**
   * @param request - GetQualityProjectLogRequest
   * @returns GetQualityProjectLogResponse
   */
  async getQualityProjectLog(request: $_model.GetQualityProjectLogRequest): Promise<$_model.GetQualityProjectLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityProjectLogWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityResultResponse
   */
  async getQualityResultWithOptions(request: $_model.GetQualityResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.hitStatus)) {
      query["HitStatus"] = request.hitStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectIds)) {
      query["ProjectIds"] = request.projectIds;
    }

    if (!$dara.isNull(request.qualityRuleIds)) {
      query["QualityRuleIds"] = request.qualityRuleIds;
    }

    if (!$dara.isNull(request.touchEndTime)) {
      query["TouchEndTime"] = request.touchEndTime;
    }

    if (!$dara.isNull(request.touchStartTime)) {
      query["TouchStartTime"] = request.touchStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityResult",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityResultResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityResultResponse({}));
  }

  /**
   * @param request - GetQualityResultRequest
   * @returns GetQualityResultResponse
   */
  async getQualityResult(request: $_model.GetQualityResultRequest): Promise<$_model.GetQualityResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityResultWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityRuleDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityRuleDetailResponse
   */
  async getQualityRuleDetailWithOptions(request: $_model.GetQualityRuleDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityRuleDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.qualityRuleId)) {
      query["QualityRuleId"] = request.qualityRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityRuleDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityRuleDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityRuleDetailResponse({}));
  }

  /**
   * @param request - GetQualityRuleDetailRequest
   * @returns GetQualityRuleDetailResponse
   */
  async getQualityRuleDetail(request: $_model.GetQualityRuleDetailRequest): Promise<$_model.GetQualityRuleDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityRuleDetailWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityRuleListResponse
   */
  async getQualityRuleListWithOptions(request: $_model.GetQualityRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityRuleListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityRuleList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityRuleListResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityRuleListResponse({}));
  }

  /**
   * @param request - GetQualityRuleListRequest
   * @returns GetQualityRuleListResponse
   */
  async getQualityRuleList(request: $_model.GetQualityRuleListRequest): Promise<$_model.GetQualityRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityRuleListWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityRuleTagListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityRuleTagListResponse
   */
  async getQualityRuleTagListWithOptions(request: $_model.GetQualityRuleTagListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityRuleTagListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityRuleTagList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityRuleTagListResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityRuleTagListResponse({}));
  }

  /**
   * @param request - GetQualityRuleTagListRequest
   * @returns GetQualityRuleTagListResponse
   */
  async getQualityRuleTagList(request: $_model.GetQualityRuleTagListRequest): Promise<$_model.GetQualityRuleTagListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityRuleTagListWithOptions(request, runtime);
  }

  /**
   * 技能组纬度队列信息
   * 
   * @param tmpReq - GetQueueInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueueInformationResponse
   */
  async getQueueInformationWithOptions(tmpReq: $_model.GetQueueInformationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueueInformationResponse> {
    tmpReq.validate();
    let request = new $_model.GetQueueInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueueInformation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueueInformationResponse>(await this.callApi(params, req, runtime), new $_model.GetQueueInformationResponse({}));
  }

  /**
   * 技能组纬度队列信息
   * 
   * @param request - GetQueueInformationRequest
   * @returns GetQueueInformationResponse
   */
  async getQueueInformation(request: $_model.GetQueueInformationRequest): Promise<$_model.GetQueueInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueueInformationWithOptions(request, runtime);
  }

  /**
   * @param request - GetRecordDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordDataResponse
   */
  async getRecordDataWithOptions(request: $_model.GetRecordDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecordDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecordData",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecordDataResponse>(await this.callApi(params, req, runtime), new $_model.GetRecordDataResponse({}));
  }

  /**
   * @param request - GetRecordDataRequest
   * @returns GetRecordDataResponse
   */
  async getRecordData(request: $_model.GetRecordDataRequest): Promise<$_model.GetRecordDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordDataWithOptions(request, runtime);
  }

  /**
   * 获取录音链接
   * 
   * @param request - GetRecordUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordUrlResponse
   */
  async getRecordUrlWithOptions(request: $_model.GetRecordUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecordUrlResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecordUrl",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecordUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetRecordUrlResponse({}));
  }

  /**
   * 获取录音链接
   * 
   * @param request - GetRecordUrlRequest
   * @returns GetRecordUrlResponse
   */
  async getRecordUrl(request: $_model.GetRecordUrlRequest): Promise<$_model.GetRecordUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordUrlWithOptions(request, runtime);
  }

  /**
   * 获取RtcToken
   * 
   * @param request - GetRtcTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRtcTokenResponse
   */
  async getRtcTokenWithOptions(request: $_model.GetRtcTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRtcTokenResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRtcToken",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRtcTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetRtcTokenResponse({}));
  }

  /**
   * 获取RtcToken
   * 
   * @param request - GetRtcTokenRequest
   * @returns GetRtcTokenResponse
   */
  async getRtcToken(request: $_model.GetRtcTokenRequest): Promise<$_model.GetRtcTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRtcTokenWithOptions(request, runtime);
  }

  /**
   * 部门纬度坐席信息数据
   * 
   * @param tmpReq - GetSeatInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSeatInformationResponse
   */
  async getSeatInformationWithOptions(tmpReq: $_model.GetSeatInformationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSeatInformationResponse> {
    tmpReq.validate();
    let request = new $_model.GetSeatInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "depIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSeatInformation",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSeatInformationResponse>(await this.callApi(params, req, runtime), new $_model.GetSeatInformationResponse({}));
  }

  /**
   * 部门纬度坐席信息数据
   * 
   * @param request - GetSeatInformationRequest
   * @returns GetSeatInformationResponse
   */
  async getSeatInformation(request: $_model.GetSeatInformationRequest): Promise<$_model.GetSeatInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSeatInformationWithOptions(request, runtime);
  }

  /**
   * 技能组坐席状态详情
   * 
   * @param tmpReq - GetSkillGroupAgentStatusDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupAgentStatusDetailsResponse
   */
  async getSkillGroupAgentStatusDetailsWithOptions(tmpReq: $_model.GetSkillGroupAgentStatusDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillGroupAgentStatusDetailsResponse> {
    tmpReq.validate();
    let request = new $_model.GetSkillGroupAgentStatusDetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupAgentStatusDetails",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillGroupAgentStatusDetailsResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillGroupAgentStatusDetailsResponse({}));
  }

  /**
   * 技能组坐席状态详情
   * 
   * @param request - GetSkillGroupAgentStatusDetailsRequest
   * @returns GetSkillGroupAgentStatusDetailsResponse
   */
  async getSkillGroupAgentStatusDetails(request: $_model.GetSkillGroupAgentStatusDetailsRequest): Promise<$_model.GetSkillGroupAgentStatusDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupAgentStatusDetailsWithOptions(request, runtime);
  }

  /**
   * 技能组坐席汇总状态量
   * 
   * @param tmpReq - GetSkillGroupAndAgentStatusSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupAndAgentStatusSummaryResponse
   */
  async getSkillGroupAndAgentStatusSummaryWithOptions(tmpReq: $_model.GetSkillGroupAndAgentStatusSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillGroupAndAgentStatusSummaryResponse> {
    tmpReq.validate();
    let request = new $_model.GetSkillGroupAndAgentStatusSummaryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupAndAgentStatusSummary",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillGroupAndAgentStatusSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillGroupAndAgentStatusSummaryResponse({}));
  }

  /**
   * 技能组坐席汇总状态量
   * 
   * @param request - GetSkillGroupAndAgentStatusSummaryRequest
   * @returns GetSkillGroupAndAgentStatusSummaryResponse
   */
  async getSkillGroupAndAgentStatusSummary(request: $_model.GetSkillGroupAndAgentStatusSummaryRequest): Promise<$_model.GetSkillGroupAndAgentStatusSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupAndAgentStatusSummaryWithOptions(request, runtime);
  }

  /**
   * 技能组纬度状态量
   * 
   * @param tmpReq - GetSkillGroupLatitudeStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupLatitudeStateResponse
   */
  async getSkillGroupLatitudeStateWithOptions(tmpReq: $_model.GetSkillGroupLatitudeStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillGroupLatitudeStateResponse> {
    tmpReq.validate();
    let request = new $_model.GetSkillGroupLatitudeStateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupLatitudeState",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillGroupLatitudeStateResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillGroupLatitudeStateResponse({}));
  }

  /**
   * 技能组纬度状态量
   * 
   * @param request - GetSkillGroupLatitudeStateRequest
   * @returns GetSkillGroupLatitudeStateResponse
   */
  async getSkillGroupLatitudeState(request: $_model.GetSkillGroupLatitudeStateRequest): Promise<$_model.GetSkillGroupLatitudeStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupLatitudeStateWithOptions(request, runtime);
  }

  /**
   * 技能组纬度服务能力
   * 
   * @param tmpReq - GetSkillGroupServiceCapabilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupServiceCapabilityResponse
   */
  async getSkillGroupServiceCapabilityWithOptions(tmpReq: $_model.GetSkillGroupServiceCapabilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillGroupServiceCapabilityResponse> {
    tmpReq.validate();
    let request = new $_model.GetSkillGroupServiceCapabilityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupServiceCapability",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillGroupServiceCapabilityResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillGroupServiceCapabilityResponse({}));
  }

  /**
   * 技能组纬度服务能力
   * 
   * @param request - GetSkillGroupServiceCapabilityRequest
   * @returns GetSkillGroupServiceCapabilityResponse
   */
  async getSkillGroupServiceCapability(request: $_model.GetSkillGroupServiceCapabilityRequest): Promise<$_model.GetSkillGroupServiceCapabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupServiceCapabilityWithOptions(request, runtime);
  }

  /**
   * 技能组服务状态量
   * 
   * @param tmpReq - GetSkillGroupServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupServiceStatusResponse
   */
  async getSkillGroupServiceStatusWithOptions(tmpReq: $_model.GetSkillGroupServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillGroupServiceStatusResponse> {
    tmpReq.validate();
    let request = new $_model.GetSkillGroupServiceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupServiceStatus",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillGroupServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillGroupServiceStatusResponse({}));
  }

  /**
   * 技能组服务状态量
   * 
   * @param request - GetSkillGroupServiceStatusRequest
   * @returns GetSkillGroupServiceStatusResponse
   */
  async getSkillGroupServiceStatus(request: $_model.GetSkillGroupServiceStatusRequest): Promise<$_model.GetSkillGroupServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupServiceStatusWithOptions(request, runtime);
  }

  /**
   * 技能组状态总量
   * 
   * @param tmpReq - GetSkillGroupStatusTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupStatusTotalResponse
   */
  async getSkillGroupStatusTotalWithOptions(tmpReq: $_model.GetSkillGroupStatusTotalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillGroupStatusTotalResponse> {
    tmpReq.validate();
    let request = new $_model.GetSkillGroupStatusTotalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!$dara.isNull(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupStatusTotal",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillGroupStatusTotalResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillGroupStatusTotalResponse({}));
  }

  /**
   * 技能组状态总量
   * 
   * @param request - GetSkillGroupStatusTotalRequest
   * @returns GetSkillGroupStatusTotalResponse
   */
  async getSkillGroupStatusTotal(request: $_model.GetSkillGroupStatusTotalRequest): Promise<$_model.GetSkillGroupStatusTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupStatusTotalWithOptions(request, runtime);
  }

  /**
   * 移动端呼叫挂断
   * 
   * @param request - HangUpDoubleCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HangUpDoubleCallResponse
   */
  async hangUpDoubleCallWithOptions(request: $_model.HangUpDoubleCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HangUpDoubleCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HangUpDoubleCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HangUpDoubleCallResponse>(await this.callApi(params, req, runtime), new $_model.HangUpDoubleCallResponse({}));
  }

  /**
   * 移动端呼叫挂断
   * 
   * @param request - HangUpDoubleCallRequest
   * @returns HangUpDoubleCallResponse
   */
  async hangUpDoubleCall(request: $_model.HangUpDoubleCallRequest): Promise<$_model.HangUpDoubleCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangUpDoubleCallWithOptions(request, runtime);
  }

  /**
   * @param request - HangupCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HangupCallResponse
   */
  async hangupCallWithOptions(request: $_model.HangupCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HangupCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HangupCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HangupCallResponse>(await this.callApi(params, req, runtime), new $_model.HangupCallResponse({}));
  }

  /**
   * @param request - HangupCallRequest
   * @returns HangupCallResponse
   */
  async hangupCall(request: $_model.HangupCallRequest): Promise<$_model.HangupCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangupCallWithOptions(request, runtime);
  }

  /**
   * 通信智能引擎中主动挂断通话
   * 
   * @param request - HangupOperateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HangupOperateResponse
   */
  async hangupOperateWithOptions(request: $_model.HangupOperateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HangupOperateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.immediateHangup)) {
      query["ImmediateHangup"] = request.immediateHangup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HangupOperate",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HangupOperateResponse>(await this.callApi(params, req, runtime), new $_model.HangupOperateResponse({}));
  }

  /**
   * 通信智能引擎中主动挂断通话
   * 
   * @param request - HangupOperateRequest
   * @returns HangupOperateResponse
   */
  async hangupOperate(request: $_model.HangupOperateRequest): Promise<$_model.HangupOperateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangupOperateWithOptions(request, runtime);
  }

  /**
   * @param request - HangupThirdCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HangupThirdCallResponse
   */
  async hangupThirdCallWithOptions(request: $_model.HangupThirdCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HangupThirdCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HangupThirdCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HangupThirdCallResponse>(await this.callApi(params, req, runtime), new $_model.HangupThirdCallResponse({}));
  }

  /**
   * @param request - HangupThirdCallRequest
   * @returns HangupThirdCallResponse
   */
  async hangupThirdCall(request: $_model.HangupThirdCallRequest): Promise<$_model.HangupThirdCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangupThirdCallWithOptions(request, runtime);
  }

  /**
   * @param request - HoldCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HoldCallResponse
   */
  async holdCallWithOptions(request: $_model.HoldCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HoldCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HoldCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HoldCallResponse>(await this.callApi(params, req, runtime), new $_model.HoldCallResponse({}));
  }

  /**
   * @param request - HoldCallRequest
   * @returns HoldCallResponse
   */
  async holdCall(request: $_model.HoldCallRequest): Promise<$_model.HoldCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.holdCallWithOptions(request, runtime);
  }

  /**
   * @param request - HotlineSessionQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotlineSessionQueryResponse
   */
  async hotlineSessionQueryWithOptions(request: $_model.HotlineSessionQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HotlineSessionQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acid)) {
      query["Acid"] = request.acid;
    }

    if (!$dara.isNull(request.acidList)) {
      query["AcidList"] = request.acidList;
    }

    if (!$dara.isNull(request.callResult)) {
      query["CallResult"] = request.callResult;
    }

    if (!$dara.isNull(request.callResultList)) {
      query["CallResultList"] = request.callResultList;
    }

    if (!$dara.isNull(request.callType)) {
      query["CallType"] = request.callType;
    }

    if (!$dara.isNull(request.callTypeList)) {
      query["CallTypeList"] = request.callTypeList;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledNumberList)) {
      query["CalledNumberList"] = request.calledNumberList;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.callingNumberList)) {
      query["CallingNumberList"] = request.callingNumberList;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupIdList)) {
      query["GroupIdList"] = request.groupIdList;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.memberIdList)) {
      query["MemberIdList"] = request.memberIdList;
    }

    if (!$dara.isNull(request.memberName)) {
      query["MemberName"] = request.memberName;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.queryEndTime)) {
      query["QueryEndTime"] = request.queryEndTime;
    }

    if (!$dara.isNull(request.queryStartTime)) {
      query["QueryStartTime"] = request.queryStartTime;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.servicerId)) {
      query["ServicerId"] = request.servicerId;
    }

    if (!$dara.isNull(request.servicerIdList)) {
      query["ServicerIdList"] = request.servicerIdList;
    }

    if (!$dara.isNull(request.servicerName)) {
      query["ServicerName"] = request.servicerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotlineSessionQuery",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotlineSessionQueryResponse>(await this.callApi(params, req, runtime), new $_model.HotlineSessionQueryResponse({}));
  }

  /**
   * @param request - HotlineSessionQueryRequest
   * @returns HotlineSessionQueryResponse
   */
  async hotlineSessionQuery(request: $_model.HotlineSessionQueryRequest): Promise<$_model.HotlineSessionQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hotlineSessionQueryWithOptions(request, runtime);
  }

  /**
   * 导入任务号码数据
   * 
   * @param tmpReq - ImportTaskNumberDatasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportTaskNumberDatasResponse
   */
  async importTaskNumberDatasWithOptions(tmpReq: $_model.ImportTaskNumberDatasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportTaskNumberDatasResponse> {
    tmpReq.validate();
    let request = new $_model.ImportTaskNumberDatasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.phoneNumberList)) {
      request.phoneNumberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phoneNumberList, "PhoneNumberList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.ossFileName)) {
      query["OssFileName"] = request.ossFileName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.phoneNumberListShrink)) {
      body["PhoneNumberList"] = request.phoneNumberListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportTaskNumberDatas",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportTaskNumberDatasResponse>(await this.callApi(params, req, runtime), new $_model.ImportTaskNumberDatasResponse({}));
  }

  /**
   * 导入任务号码数据
   * 
   * @param request - ImportTaskNumberDatasRequest
   * @returns ImportTaskNumberDatasResponse
   */
  async importTaskNumberDatas(request: $_model.ImportTaskNumberDatasRequest): Promise<$_model.ImportTaskNumberDatasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importTaskNumberDatasWithOptions(request, runtime);
  }

  /**
   * 智能外呼任务导入号码
   * 
   * @param tmpReq - InsertAiOutboundPhoneNumsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertAiOutboundPhoneNumsResponse
   */
  async insertAiOutboundPhoneNumsWithOptions(tmpReq: $_model.InsertAiOutboundPhoneNumsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InsertAiOutboundPhoneNumsResponse> {
    tmpReq.validate();
    let request = new $_model.InsertAiOutboundPhoneNumsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.details)) {
      request.detailsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.details, "Details", "json");
    }

    let query = { };
    if (!$dara.isNull(request.batchVersion)) {
      query["BatchVersion"] = request.batchVersion;
    }

    if (!$dara.isNull(request.detailsShrink)) {
      query["Details"] = request.detailsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertAiOutboundPhoneNums",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertAiOutboundPhoneNumsResponse>(await this.callApi(params, req, runtime), new $_model.InsertAiOutboundPhoneNumsResponse({}));
  }

  /**
   * 智能外呼任务导入号码
   * 
   * @param request - InsertAiOutboundPhoneNumsRequest
   * @returns InsertAiOutboundPhoneNumsResponse
   */
  async insertAiOutboundPhoneNums(request: $_model.InsertAiOutboundPhoneNumsRequest): Promise<$_model.InsertAiOutboundPhoneNumsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.insertAiOutboundPhoneNumsWithOptions(request, runtime);
  }

  /**
   * @param request - InsertTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertTaskDetailResponse
   */
  async insertTaskDetailWithOptions(request: $_model.InsertTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InsertTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callInfos)) {
      query["CallInfos"] = request.callInfos;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.InsertTaskDetailResponse({}));
  }

  /**
   * @param request - InsertTaskDetailRequest
   * @returns InsertTaskDetailResponse
   */
  async insertTaskDetail(request: $_model.InsertTaskDetailRequest): Promise<$_model.InsertTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.insertTaskDetailWithOptions(request, runtime);
  }

  /**
   * @param request - JoinThirdCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JoinThirdCallResponse
   */
  async joinThirdCallWithOptions(request: $_model.JoinThirdCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.JoinThirdCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.holdConnectionId)) {
      body["HoldConnectionId"] = request.holdConnectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "JoinThirdCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.JoinThirdCallResponse>(await this.callApi(params, req, runtime), new $_model.JoinThirdCallResponse({}));
  }

  /**
   * @param request - JoinThirdCallRequest
   * @returns JoinThirdCallResponse
   */
  async joinThirdCall(request: $_model.JoinThirdCallRequest): Promise<$_model.JoinThirdCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.joinThirdCallWithOptions(request, runtime);
  }

  /**
   * @param request - ListAgentBySkillGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentBySkillGroupIdResponse
   */
  async listAgentBySkillGroupIdWithOptions(request: $_model.ListAgentBySkillGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentBySkillGroupIdResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentBySkillGroupId",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentBySkillGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentBySkillGroupIdResponse({}));
  }

  /**
   * @param request - ListAgentBySkillGroupIdRequest
   * @returns ListAgentBySkillGroupIdResponse
   */
  async listAgentBySkillGroupId(request: $_model.ListAgentBySkillGroupIdRequest): Promise<$_model.ListAgentBySkillGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentBySkillGroupIdWithOptions(request, runtime);
  }

  /**
   * 查询所有机器人列表
   * 
   * @param request - ListAiccsRobotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAiccsRobotResponse
   */
  async listAiccsRobotWithOptions(request: $_model.ListAiccsRobotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAiccsRobotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.robotName)) {
      query["RobotName"] = request.robotName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAiccsRobot",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAiccsRobotResponse>(await this.callApi(params, req, runtime), new $_model.ListAiccsRobotResponse({}));
  }

  /**
   * 查询所有机器人列表
   * 
   * @param request - ListAiccsRobotRequest
   * @returns ListAiccsRobotResponse
   */
  async listAiccsRobot(request: $_model.ListAiccsRobotRequest): Promise<$_model.ListAiccsRobotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAiccsRobotWithOptions(request, runtime);
  }

  /**
   * 获取tts音色列表
   * 
   * @param request - ListAvailableTtsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableTtsResponse
   */
  async listAvailableTtsWithOptions(request: $_model.ListAvailableTtsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvailableTtsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ttsVoiceCode)) {
      query["TtsVoiceCode"] = request.ttsVoiceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableTts",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvailableTtsResponse>(await this.callApi(params, req, runtime), new $_model.ListAvailableTtsResponse({}));
  }

  /**
   * 获取tts音色列表
   * 
   * @param request - ListAvailableTtsRequest
   * @returns ListAvailableTtsResponse
   */
  async listAvailableTts(request: $_model.ListAvailableTtsRequest): Promise<$_model.ListAvailableTtsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvailableTtsWithOptions(request, runtime);
  }

  /**
   * 根据时间段查询在线会话详情，包含会话内容，时间段范围最长不超过1天
   * 
   * @param request - ListChatRecordDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatRecordDetailResponse
   */
  async listChatRecordDetailWithOptions(request: $_model.ListChatRecordDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatRecordDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatRecordDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatRecordDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListChatRecordDetailResponse({}));
  }

  /**
   * 根据时间段查询在线会话详情，包含会话内容，时间段范围最长不超过1天
   * 
   * @param request - ListChatRecordDetailRequest
   * @returns ListChatRecordDetailResponse
   */
  async listChatRecordDetail(request: $_model.ListChatRecordDetailRequest): Promise<$_model.ListChatRecordDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatRecordDetailWithOptions(request, runtime);
  }

  /**
   * 查看对话记录
   * 
   * @param request - ListDialogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDialogResponse
   */
  async listDialogWithOptions(request: $_model.ListDialogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDialogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.called)) {
      query["Called"] = request.called;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDialog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDialogResponse>(await this.callApi(params, req, runtime), new $_model.ListDialogResponse({}));
  }

  /**
   * 查看对话记录
   * 
   * @param request - ListDialogRequest
   * @returns ListDialogResponse
   */
  async listDialog(request: $_model.ListDialogRequest): Promise<$_model.ListDialogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDialogWithOptions(request, runtime);
  }

  /**
   * @param request - ListHotlineRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotlineRecordResponse
   */
  async listHotlineRecordWithOptions(request: $_model.ListHotlineRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotlineRecordResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotlineRecord",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotlineRecordResponse>(await this.callApi(params, req, runtime), new $_model.ListHotlineRecordResponse({}));
  }

  /**
   * @param request - ListHotlineRecordRequest
   * @returns ListHotlineRecordResponse
   */
  async listHotlineRecord(request: $_model.ListHotlineRecordRequest): Promise<$_model.ListHotlineRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotlineRecordWithOptions(request, runtime);
  }

  /**
   * 根据时间段查询热线详情列表，包含热线通话信息，时间段范围最长不超过1天
   * 
   * @param request - ListHotlineRecordDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotlineRecordDetailResponse
   */
  async listHotlineRecordDetailWithOptions(request: $_model.ListHotlineRecordDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotlineRecordDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotlineRecordDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotlineRecordDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListHotlineRecordDetailResponse({}));
  }

  /**
   * 根据时间段查询热线详情列表，包含热线通话信息，时间段范围最长不超过1天
   * 
   * @param request - ListHotlineRecordDetailRequest
   * @returns ListHotlineRecordDetailResponse
   */
  async listHotlineRecordDetail(request: $_model.ListHotlineRecordDetailRequest): Promise<$_model.ListHotlineRecordDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotlineRecordDetailWithOptions(request, runtime);
  }

  /**
   * @param request - ListOutboundPhoneNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOutboundPhoneNumberResponse
   */
  async listOutboundPhoneNumberWithOptions(request: $_model.ListOutboundPhoneNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOutboundPhoneNumberResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOutboundPhoneNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOutboundPhoneNumberResponse>(await this.callApi(params, req, runtime), new $_model.ListOutboundPhoneNumberResponse({}));
  }

  /**
   * @param request - ListOutboundPhoneNumberRequest
   * @returns ListOutboundPhoneNumberResponse
   */
  async listOutboundPhoneNumber(request: $_model.ListOutboundPhoneNumberRequest): Promise<$_model.ListOutboundPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOutboundPhoneNumberWithOptions(request, runtime);
  }

  /**
   * 查看对话记录
   * 
   * @param request - ListRobotCallDialogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRobotCallDialogResponse
   */
  async listRobotCallDialogWithOptions(request: $_model.ListRobotCallDialogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRobotCallDialogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRobotCallDialog",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRobotCallDialogResponse>(await this.callApi(params, req, runtime), new $_model.ListRobotCallDialogResponse({}));
  }

  /**
   * 查看对话记录
   * 
   * @param request - ListRobotCallDialogRequest
   * @returns ListRobotCallDialogResponse
   */
  async listRobotCallDialog(request: $_model.ListRobotCallDialogRequest): Promise<$_model.ListRobotCallDialogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRobotCallDialogWithOptions(request, runtime);
  }

  /**
   * 查询机器人输出列表
   * 
   * @param request - ListRobotNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRobotNodeResponse
   */
  async listRobotNodeWithOptions(request: $_model.ListRobotNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRobotNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRobotNode",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRobotNodeResponse>(await this.callApi(params, req, runtime), new $_model.ListRobotNodeResponse({}));
  }

  /**
   * 查询机器人输出列表
   * 
   * @param request - ListRobotNodeRequest
   * @returns ListRobotNodeResponse
   */
  async listRobotNode(request: $_model.ListRobotNodeRequest): Promise<$_model.ListRobotNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRobotNodeWithOptions(request, runtime);
  }

  /**
   * 查询参数列表
   * 
   * @param request - ListRobotParamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRobotParamsResponse
   */
  async listRobotParamsWithOptions(request: $_model.ListRobotParamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRobotParamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRobotParams",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRobotParamsResponse>(await this.callApi(params, req, runtime), new $_model.ListRobotParamsResponse({}));
  }

  /**
   * 查询参数列表
   * 
   * @param request - ListRobotParamsRequest
   * @returns ListRobotParamsResponse
   */
  async listRobotParams(request: $_model.ListRobotParamsRequest): Promise<$_model.ListRobotParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRobotParamsWithOptions(request, runtime);
  }

  /**
   * 获取租户下的所有角色
   * 
   * @param request - ListRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(request: $_model.ListRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRolesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListRolesResponse({}));
  }

  /**
   * 获取租户下的所有角色
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: $_model.ListRolesRequest): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  /**
   * @param request - ListSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillGroupResponse
   */
  async listSkillGroupWithOptions(request: $_model.ListSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillGroupResponse({}));
  }

  /**
   * @param request - ListSkillGroupRequest
   * @returns ListSkillGroupResponse
   */
  async listSkillGroup(request: $_model.ListSkillGroupRequest): Promise<$_model.ListSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillGroupWithOptions(request, runtime);
  }

  /**
   * 查询任务列表
   * 
   * @param request - ListTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskResponse
   */
  async listTaskWithOptions(request: $_model.ListTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.robotName)) {
      query["RobotName"] = request.robotName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskResponse({}));
  }

  /**
   * 查询任务列表
   * 
   * @param request - ListTaskRequest
   * @returns ListTaskResponse
   */
  async listTask(request: $_model.ListTaskRequest): Promise<$_model.ListTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskWithOptions(request, runtime);
  }

  /**
   * 任务详情查看通话列表
   * 
   * @param request - ListTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskDetailResponse
   */
  async listTaskDetailWithOptions(request: $_model.ListTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.called)) {
      query["Called"] = request.called;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.statusCode)) {
      query["StatusCode"] = request.statusCode;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskDetailResponse({}));
  }

  /**
   * 任务详情查看通话列表
   * 
   * @param request - ListTaskDetailRequest
   * @returns ListTaskDetailResponse
   */
  async listTaskDetail(request: $_model.ListTaskDetailRequest): Promise<$_model.ListTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskDetailWithOptions(request, runtime);
  }

  /**
   * 基于大模型的智能外呼
   * 
   * @param tmpReq - LlmSmartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LlmSmartCallResponse
   */
  async llmSmartCallWithOptions(tmpReq: $_model.LlmSmartCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LlmSmartCallResponse> {
    tmpReq.validate();
    let request = new $_model.LlmSmartCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizParam)) {
      request.bizParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizParam, "BizParam", "json");
    }

    if (!$dara.isNull(tmpReq.promptParam)) {
      request.promptParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.promptParam, "PromptParam", "json");
    }

    if (!$dara.isNull(tmpReq.startWordParam)) {
      request.startWordParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startWordParam, "StartWordParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationCode)) {
      query["ApplicationCode"] = request.applicationCode;
    }

    if (!$dara.isNull(request.bizParamShrink)) {
      query["BizParam"] = request.bizParamShrink;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callerNumber)) {
      query["CallerNumber"] = request.callerNumber;
    }

    if (!$dara.isNull(request.customerLineCode)) {
      query["CustomerLineCode"] = request.customerLineCode;
    }

    if (!$dara.isNull(request.extension)) {
      query["Extension"] = request.extension;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.promptParamShrink)) {
      query["PromptParam"] = request.promptParamShrink;
    }

    if (!$dara.isNull(request.sessionTimeout)) {
      query["SessionTimeout"] = request.sessionTimeout;
    }

    if (!$dara.isNull(request.startWordParamShrink)) {
      query["StartWordParam"] = request.startWordParamShrink;
    }

    if (!$dara.isNull(request.ttsSpeed)) {
      query["TtsSpeed"] = request.ttsSpeed;
    }

    if (!$dara.isNull(request.ttsVoiceCode)) {
      query["TtsVoiceCode"] = request.ttsVoiceCode;
    }

    if (!$dara.isNull(request.ttsVolume)) {
      query["TtsVolume"] = request.ttsVolume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LlmSmartCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LlmSmartCallResponse>(await this.callApi(params, req, runtime), new $_model.LlmSmartCallResponse({}));
  }

  /**
   * 基于大模型的智能外呼
   * 
   * @param request - LlmSmartCallRequest
   * @returns LlmSmartCallResponse
   */
  async llmSmartCall(request: $_model.LlmSmartCallRequest): Promise<$_model.LlmSmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.llmSmartCallWithOptions(request, runtime);
  }

  /**
   * 大模型外呼加密号码接口
   * 
   * @param tmpReq - LlmSmartCallEncryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LlmSmartCallEncryptResponse
   */
  async llmSmartCallEncryptWithOptions(tmpReq: $_model.LlmSmartCallEncryptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LlmSmartCallEncryptResponse> {
    tmpReq.validate();
    let request = new $_model.LlmSmartCallEncryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.promptParam)) {
      request.promptParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.promptParam, "PromptParam", "json");
    }

    if (!$dara.isNull(tmpReq.startWordParam)) {
      request.startWordParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startWordParam, "StartWordParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationCode)) {
      query["ApplicationCode"] = request.applicationCode;
    }

    if (!$dara.isNull(request.callerNumber)) {
      query["CallerNumber"] = request.callerNumber;
    }

    if (!$dara.isNull(request.encryptCalledNumber)) {
      query["EncryptCalledNumber"] = request.encryptCalledNumber;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.promptParamShrink)) {
      query["PromptParam"] = request.promptParamShrink;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startWordParamShrink)) {
      query["StartWordParam"] = request.startWordParamShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LlmSmartCallEncrypt",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LlmSmartCallEncryptResponse>(await this.callApi(params, req, runtime), new $_model.LlmSmartCallEncryptResponse({}));
  }

  /**
   * 大模型外呼加密号码接口
   * 
   * @param request - LlmSmartCallEncryptRequest
   * @returns LlmSmartCallEncryptResponse
   */
  async llmSmartCallEncrypt(request: $_model.LlmSmartCallEncryptRequest): Promise<$_model.LlmSmartCallEncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.llmSmartCallEncryptWithOptions(request, runtime);
  }

  /**
   * @param request - MakeCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MakeCallResponse
   */
  async makeCallWithOptions(request: $_model.MakeCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MakeCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.commandCode)) {
      query["CommandCode"] = request.commandCode;
    }

    if (!$dara.isNull(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!$dara.isNull(request.outerAccountId)) {
      query["OuterAccountId"] = request.outerAccountId;
    }

    if (!$dara.isNull(request.outerAccountType)) {
      query["OuterAccountType"] = request.outerAccountType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MakeCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MakeCallResponse>(await this.callApi(params, req, runtime), new $_model.MakeCallResponse({}));
  }

  /**
   * @param request - MakeCallRequest
   * @returns MakeCallResponse
   */
  async makeCall(request: $_model.MakeCallRequest): Promise<$_model.MakeCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.makeCallWithOptions(request, runtime);
  }

  /**
   * 移动端发起呼叫
   * 
   * @param request - MakeDoubleCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MakeDoubleCallResponse
   */
  async makeDoubleCallWithOptions(request: $_model.MakeDoubleCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MakeDoubleCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.bizData)) {
      query["BizData"] = request.bizData;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberPhone)) {
      query["MemberPhone"] = request.memberPhone;
    }

    if (!$dara.isNull(request.outboundCallNumber)) {
      query["OutboundCallNumber"] = request.outboundCallNumber;
    }

    if (!$dara.isNull(request.servicerPhone)) {
      query["ServicerPhone"] = request.servicerPhone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MakeDoubleCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MakeDoubleCallResponse>(await this.callApi(params, req, runtime), new $_model.MakeDoubleCallResponse({}));
  }

  /**
   * 移动端发起呼叫
   * 
   * @param request - MakeDoubleCallRequest
   * @returns MakeDoubleCallResponse
   */
  async makeDoubleCall(request: $_model.MakeDoubleCallRequest): Promise<$_model.MakeDoubleCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.makeDoubleCallWithOptions(request, runtime);
  }

  /**
   * 查询明细记录
   * 
   * @param request - QueryAiCallDetailPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAiCallDetailPageResponse
   */
  async queryAiCallDetailPageWithOptions(request: $_model.QueryAiCallDetailPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAiCallDetailPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!$dara.isNull(request.callResult)) {
      query["CallResult"] = request.callResult;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.endCallingTime)) {
      query["EndCallingTime"] = request.endCallingTime;
    }

    if (!$dara.isNull(request.endImportedTime)) {
      query["EndImportedTime"] = request.endImportedTime;
    }

    if (!$dara.isNull(request.majorIntent)) {
      query["MajorIntent"] = request.majorIntent;
    }

    if (!$dara.isNull(request.maxConversationDuration)) {
      query["MaxConversationDuration"] = request.maxConversationDuration;
    }

    if (!$dara.isNull(request.minConversationDuration)) {
      query["MinConversationDuration"] = request.minConversationDuration;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startCallingTime)) {
      query["StartCallingTime"] = request.startCallingTime;
    }

    if (!$dara.isNull(request.startImportedTime)) {
      query["StartImportedTime"] = request.startImportedTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAiCallDetailPage",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAiCallDetailPageResponse>(await this.callApi(params, req, runtime), new $_model.QueryAiCallDetailPageResponse({}));
  }

  /**
   * 查询明细记录
   * 
   * @param request - QueryAiCallDetailPageRequest
   * @returns QueryAiCallDetailPageResponse
   */
  async queryAiCallDetailPage(request: $_model.QueryAiCallDetailPageRequest): Promise<$_model.QueryAiCallDetailPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAiCallDetailPageWithOptions(request, runtime);
  }

  /**
   * 查询任务详情
   * 
   * @param request - QueryAiCallTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAiCallTaskDetailResponse
   */
  async queryAiCallTaskDetailWithOptions(request: $_model.QueryAiCallTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAiCallTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAiCallTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAiCallTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryAiCallTaskDetailResponse({}));
  }

  /**
   * 查询任务详情
   * 
   * @param request - QueryAiCallTaskDetailRequest
   * @returns QueryAiCallTaskDetailResponse
   */
  async queryAiCallTaskDetail(request: $_model.QueryAiCallTaskDetailRequest): Promise<$_model.QueryAiCallTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAiCallTaskDetailWithOptions(request, runtime);
  }

  /**
   * 查询任务列表
   * 
   * @param request - QueryAiCallTaskPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAiCallTaskPageResponse
   */
  async queryAiCallTaskPageWithOptions(request: $_model.QueryAiCallTaskPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAiCallTaskPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAiCallTaskPage",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAiCallTaskPageResponse>(await this.callApi(params, req, runtime), new $_model.QueryAiCallTaskPageResponse({}));
  }

  /**
   * 查询任务列表
   * 
   * @param request - QueryAiCallTaskPageRequest
   * @returns QueryAiCallTaskPageResponse
   */
  async queryAiCallTaskPage(request: $_model.QueryAiCallTaskPageRequest): Promise<$_model.QueryAiCallTaskPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAiCallTaskPageWithOptions(request, runtime);
  }

  /**
   * 查询通话详情信息
   * 
   * @param request - QueryConversationDetailInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConversationDetailInfoResponse
   */
  async queryConversationDetailInfoWithOptions(request: $_model.QueryConversationDetailInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConversationDetailInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!$dara.isNull(request.detailId)) {
      query["DetailId"] = request.detailId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConversationDetailInfo",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryConversationDetailInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryConversationDetailInfoResponse({}));
  }

  /**
   * 查询通话详情信息
   * 
   * @param request - QueryConversationDetailInfoRequest
   * @returns QueryConversationDetailInfoResponse
   */
  async queryConversationDetailInfo(request: $_model.QueryConversationDetailInfoRequest): Promise<$_model.QueryConversationDetailInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryConversationDetailInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryHotlineInQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHotlineInQueueResponse
   */
  async queryHotlineInQueueWithOptions(request: $_model.QueryHotlineInQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryHotlineInQueueResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryHotlineInQueue",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryHotlineInQueueResponse>(await this.callApi(params, req, runtime), new $_model.QueryHotlineInQueueResponse({}));
  }

  /**
   * @param request - QueryHotlineInQueueRequest
   * @returns QueryHotlineInQueueResponse
   */
  async queryHotlineInQueue(request: $_model.QueryHotlineInQueueRequest): Promise<$_model.QueryHotlineInQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryHotlineInQueueWithOptions(request, runtime);
  }

  /**
   * 查询热线号码配置
   * 
   * @param tmpReq - QueryHotlineNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHotlineNumberResponse
   */
  async queryHotlineNumberWithOptions(tmpReq: $_model.QueryHotlineNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryHotlineNumberResponse> {
    tmpReq.validate();
    let request = new $_model.QueryHotlineNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryHotlineNumberResponse>(await this.callApi(params, req, runtime), new $_model.QueryHotlineNumberResponse({}));
  }

  /**
   * 查询热线号码配置
   * 
   * @param request - QueryHotlineNumberRequest
   * @returns QueryHotlineNumberResponse
   */
  async queryHotlineNumber(request: $_model.QueryHotlineNumberRequest): Promise<$_model.QueryHotlineNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryHotlineNumberWithOptions(request, runtime);
  }

  /**
   * @param request - QueryOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOutboundTaskResponse
   */
  async queryOutboundTaskWithOptions(request: $_model.QueryOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ani)) {
      query["Ani"] = request.ani;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillGroup)) {
      query["SkillGroup"] = request.skillGroup;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOutboundTaskResponse>(await this.callApi(params, req, runtime), new $_model.QueryOutboundTaskResponse({}));
  }

  /**
   * @param request - QueryOutboundTaskRequest
   * @returns QueryOutboundTaskResponse
   */
  async queryOutboundTask(request: $_model.QueryOutboundTaskRequest): Promise<$_model.QueryOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySkillGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySkillGroupsResponse
   */
  async querySkillGroupsWithOptions(request: $_model.QuerySkillGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySkillGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySkillGroups",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySkillGroupsResponse>(await this.callApi(params, req, runtime), new $_model.QuerySkillGroupsResponse({}));
  }

  /**
   * @param request - QuerySkillGroupsRequest
   * @returns QuerySkillGroupsResponse
   */
  async querySkillGroups(request: $_model.QuerySkillGroupsRequest): Promise<$_model.QuerySkillGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySkillGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskDetailResponse
   */
  async queryTaskDetailWithOptions(request: $_model.QueryTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ani)) {
      query["Ani"] = request.ani;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.departmentIdList)) {
      query["DepartmentIdList"] = request.departmentIdList;
    }

    if (!$dara.isNull(request.dnis)) {
      query["Dnis"] = request.dnis;
    }

    if (!$dara.isNull(request.endReasonList)) {
      query["EndReasonList"] = request.endReasonList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.priorityList)) {
      query["PriorityList"] = request.priorityList;
    }

    if (!$dara.isNull(request.servicerId)) {
      query["ServicerId"] = request.servicerId;
    }

    if (!$dara.isNull(request.servicerName)) {
      query["ServicerName"] = request.servicerName;
    }

    if (!$dara.isNull(request.sid)) {
      query["Sid"] = request.sid;
    }

    if (!$dara.isNull(request.skillGroup)) {
      query["SkillGroup"] = request.skillGroup;
    }

    if (!$dara.isNull(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryTaskDetailResponse({}));
  }

  /**
   * @param request - QueryTaskDetailRequest
   * @returns QueryTaskDetailResponse
   */
  async queryTaskDetail(request: $_model.QueryTaskDetailRequest): Promise<$_model.QueryTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskDetailWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - QueryTicketsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTicketsResponse
   */
  async queryTicketsWithOptions(tmpReq: $_model.QueryTicketsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTicketsResponse> {
    tmpReq.validate();
    let request = new $_model.QueryTicketsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.caseId)) {
      body["CaseId"] = request.caseId;
    }

    if (!$dara.isNull(request.caseStatus)) {
      body["CaseStatus"] = request.caseStatus;
    }

    if (!$dara.isNull(request.caseType)) {
      body["CaseType"] = request.caseType;
    }

    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dealId)) {
      body["DealId"] = request.dealId;
    }

    if (!$dara.isNull(request.extraShrink)) {
      body["Extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.srType)) {
      body["SrType"] = request.srType;
    }

    if (!$dara.isNull(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.touchId)) {
      body["TouchId"] = request.touchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTickets",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTicketsResponse>(await this.callApi(params, req, runtime), new $_model.QueryTicketsResponse({}));
  }

  /**
   * @param request - QueryTicketsRequest
   * @returns QueryTicketsResponse
   */
  async queryTickets(request: $_model.QueryTicketsRequest): Promise<$_model.QueryTicketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTicketsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTouchListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTouchListResponse
   */
  async queryTouchListWithOptions(request: $_model.QueryTouchListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTouchListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.closeTimeEnd)) {
      body["CloseTimeEnd"] = request.closeTimeEnd;
    }

    if (!$dara.isNull(request.closeTimeStart)) {
      body["CloseTimeStart"] = request.closeTimeStart;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.evaluationLevel)) {
      body["EvaluationLevel"] = request.evaluationLevel;
    }

    if (!$dara.isNull(request.evaluationScore)) {
      body["EvaluationScore"] = request.evaluationScore;
    }

    if (!$dara.isNull(request.evaluationStatus)) {
      body["EvaluationStatus"] = request.evaluationStatus;
    }

    if (!$dara.isNull(request.firstTimeEnd)) {
      body["FirstTimeEnd"] = request.firstTimeEnd;
    }

    if (!$dara.isNull(request.firstTimeStart)) {
      body["FirstTimeStart"] = request.firstTimeStart;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberId)) {
      body["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.memberName)) {
      body["MemberName"] = request.memberName;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueId)) {
      body["QueueId"] = request.queueId;
    }

    if (!$dara.isNull(request.servicerId)) {
      body["ServicerId"] = request.servicerId;
    }

    if (!$dara.isNull(request.servicerName)) {
      body["ServicerName"] = request.servicerName;
    }

    if (!$dara.isNull(request.touchId)) {
      body["TouchId"] = request.touchId;
    }

    if (!$dara.isNull(request.touchType)) {
      body["TouchType"] = request.touchType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTouchList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTouchListResponse>(await this.callApi(params, req, runtime), new $_model.QueryTouchListResponse({}));
  }

  /**
   * @param request - QueryTouchListRequest
   * @returns QueryTouchListResponse
   */
  async queryTouchList(request: $_model.QueryTouchListRequest): Promise<$_model.QueryTouchListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTouchListWithOptions(request, runtime);
  }

  /**
   * 从技能组中移除坐席
   * 
   * @param tmpReq - RemoveAgentFromSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAgentFromSkillGroupResponse
   */
  async removeAgentFromSkillGroupWithOptions(tmpReq: $_model.RemoveAgentFromSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveAgentFromSkillGroupResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveAgentFromSkillGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentIdsShrink)) {
      query["AgentIds"] = request.agentIdsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveAgentFromSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveAgentFromSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveAgentFromSkillGroupResponse({}));
  }

  /**
   * 从技能组中移除坐席
   * 
   * @param request - RemoveAgentFromSkillGroupRequest
   * @returns RemoveAgentFromSkillGroupResponse
   */
  async removeAgentFromSkillGroup(request: $_model.RemoveAgentFromSkillGroupRequest): Promise<$_model.RemoveAgentFromSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeAgentFromSkillGroupWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSkillGroupResponse
   */
  async removeSkillGroupWithOptions(request: $_model.RemoveSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveSkillGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      body["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveSkillGroupResponse({}));
  }

  /**
   * @param request - RemoveSkillGroupRequest
   * @returns RemoveSkillGroupResponse
   */
  async removeSkillGroup(request: $_model.RemoveSkillGroupRequest): Promise<$_model.RemoveSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeSkillGroupWithOptions(request, runtime);
  }

  /**
   * 重置热线号码
   * 
   * @param tmpReq - ResetHotlineNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetHotlineNumberResponse
   */
  async resetHotlineNumberWithOptions(tmpReq: $_model.ResetHotlineNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetHotlineNumberResponse> {
    tmpReq.validate();
    let request = new $_model.ResetHotlineNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.outboundRangeList)) {
      request.outboundRangeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundRangeList, "OutboundRangeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableInbound)) {
      body["EnableInbound"] = request.enableInbound;
    }

    if (!$dara.isNull(request.enableInboundEvaluation)) {
      body["EnableInboundEvaluation"] = request.enableInboundEvaluation;
    }

    if (!$dara.isNull(request.enableOutbound)) {
      body["EnableOutbound"] = request.enableOutbound;
    }

    if (!$dara.isNull(request.enableOutboundEvaluation)) {
      body["EnableOutboundEvaluation"] = request.enableOutboundEvaluation;
    }

    if (!$dara.isNull(request.evaluationLevel)) {
      body["EvaluationLevel"] = request.evaluationLevel;
    }

    if (!$dara.isNull(request.hotlineNumber)) {
      body["HotlineNumber"] = request.hotlineNumber;
    }

    if (!$dara.isNull(request.inboundFlowId)) {
      body["InboundFlowId"] = request.inboundFlowId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundAllDepart)) {
      body["OutboundAllDepart"] = request.outboundAllDepart;
    }

    if (!$dara.isNull(request.outboundRangeListShrink)) {
      body["OutboundRangeList"] = request.outboundRangeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetHotlineNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetHotlineNumberResponse>(await this.callApi(params, req, runtime), new $_model.ResetHotlineNumberResponse({}));
  }

  /**
   * 重置热线号码
   * 
   * @param request - ResetHotlineNumberRequest
   * @returns ResetHotlineNumberResponse
   */
  async resetHotlineNumber(request: $_model.ResetHotlineNumberRequest): Promise<$_model.ResetHotlineNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetHotlineNumberWithOptions(request, runtime);
  }

  /**
   * @param request - RestartOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartOutboundTaskResponse
   */
  async restartOutboundTaskWithOptions(request: $_model.RestartOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartOutboundTaskResponse>(await this.callApi(params, req, runtime), new $_model.RestartOutboundTaskResponse({}));
  }

  /**
   * @param request - RestartOutboundTaskRequest
   * @returns RestartOutboundTaskResponse
   */
  async restartOutboundTask(request: $_model.RestartOutboundTaskRequest): Promise<$_model.RestartOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - RobotCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RobotCallResponse
   */
  async robotCallWithOptions(request: $_model.RobotCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RobotCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.recordFlag)) {
      query["RecordFlag"] = request.recordFlag;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RobotCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RobotCallResponse>(await this.callApi(params, req, runtime), new $_model.RobotCallResponse({}));
  }

  /**
   * @param request - RobotCallRequest
   * @returns RobotCallResponse
   */
  async robotCall(request: $_model.RobotCallRequest): Promise<$_model.RobotCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.robotCallWithOptions(request, runtime);
  }

  /**
   * @param request - SendCcoSmartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendCcoSmartCallResponse
   */
  async sendCcoSmartCallWithOptions(request: $_model.SendCcoSmartCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendCcoSmartCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionCodeBreak)) {
      query["ActionCodeBreak"] = request.actionCodeBreak;
    }

    if (!$dara.isNull(request.actionCodeTimeBreak)) {
      query["ActionCodeTimeBreak"] = request.actionCodeTimeBreak;
    }

    if (!$dara.isNull(request.asrAlsAmId)) {
      query["AsrAlsAmId"] = request.asrAlsAmId;
    }

    if (!$dara.isNull(request.asrBaseId)) {
      query["AsrBaseId"] = request.asrBaseId;
    }

    if (!$dara.isNull(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!$dara.isNull(request.asrVocabularyId)) {
      query["AsrVocabularyId"] = request.asrVocabularyId;
    }

    if (!$dara.isNull(request.backgroundFileCode)) {
      query["BackgroundFileCode"] = request.backgroundFileCode;
    }

    if (!$dara.isNull(request.backgroundSpeed)) {
      query["BackgroundSpeed"] = request.backgroundSpeed;
    }

    if (!$dara.isNull(request.backgroundVolume)) {
      query["BackgroundVolume"] = request.backgroundVolume;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.dynamicId)) {
      query["DynamicId"] = request.dynamicId;
    }

    if (!$dara.isNull(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!$dara.isNull(request.enableITN)) {
      query["EnableITN"] = request.enableITN;
    }

    if (!$dara.isNull(request.muteTime)) {
      query["MuteTime"] = request.muteTime;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pauseTime)) {
      query["PauseTime"] = request.pauseTime;
    }

    if (!$dara.isNull(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.recordFlag)) {
      query["RecordFlag"] = request.recordFlag;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sessionTimeout)) {
      query["SessionTimeout"] = request.sessionTimeout;
    }

    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!$dara.isNull(request.ttsConf)) {
      query["TtsConf"] = request.ttsConf;
    }

    if (!$dara.isNull(request.ttsSpeed)) {
      query["TtsSpeed"] = request.ttsSpeed;
    }

    if (!$dara.isNull(request.ttsStyle)) {
      query["TtsStyle"] = request.ttsStyle;
    }

    if (!$dara.isNull(request.ttsVolume)) {
      query["TtsVolume"] = request.ttsVolume;
    }

    if (!$dara.isNull(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!$dara.isNull(request.voiceCodeParam)) {
      query["VoiceCodeParam"] = request.voiceCodeParam;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendCcoSmartCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendCcoSmartCallResponse>(await this.callApi(params, req, runtime), new $_model.SendCcoSmartCallResponse({}));
  }

  /**
   * @param request - SendCcoSmartCallRequest
   * @returns SendCcoSmartCallResponse
   */
  async sendCcoSmartCall(request: $_model.SendCcoSmartCallRequest): Promise<$_model.SendCcoSmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCcoSmartCallWithOptions(request, runtime);
  }

  /**
   * @param request - SendCcoSmartCallOperateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendCcoSmartCallOperateResponse
   */
  async sendCcoSmartCallOperateWithOptions(request: $_model.SendCcoSmartCallOperateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendCcoSmartCallOperateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendCcoSmartCallOperate",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendCcoSmartCallOperateResponse>(await this.callApi(params, req, runtime), new $_model.SendCcoSmartCallOperateResponse({}));
  }

  /**
   * @param request - SendCcoSmartCallOperateRequest
   * @returns SendCcoSmartCallOperateResponse
   */
  async sendCcoSmartCallOperate(request: $_model.SendCcoSmartCallOperateRequest): Promise<$_model.SendCcoSmartCallOperateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCcoSmartCallOperateWithOptions(request, runtime);
  }

  /**
   * @param request - SendHotlineHeartBeatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendHotlineHeartBeatResponse
   */
  async sendHotlineHeartBeatWithOptions(request: $_model.SendHotlineHeartBeatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendHotlineHeartBeatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendHotlineHeartBeat",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendHotlineHeartBeatResponse>(await this.callApi(params, req, runtime), new $_model.SendHotlineHeartBeatResponse({}));
  }

  /**
   * @param request - SendHotlineHeartBeatRequest
   * @returns SendHotlineHeartBeatResponse
   */
  async sendHotlineHeartBeat(request: $_model.SendHotlineHeartBeatRequest): Promise<$_model.SendHotlineHeartBeatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendHotlineHeartBeatWithOptions(request, runtime);
  }

  /**
   * 启动任务
   * 
   * @param request - StartAiCallTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAiCallTaskResponse
   */
  async startAiCallTaskWithOptions(request: $_model.StartAiCallTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAiCallTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAiCallTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAiCallTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartAiCallTaskResponse({}));
  }

  /**
   * 启动任务
   * 
   * @param request - StartAiCallTaskRequest
   * @returns StartAiCallTaskResponse
   */
  async startAiCallTask(request: $_model.StartAiCallTaskRequest): Promise<$_model.StartAiCallTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAiCallTaskWithOptions(request, runtime);
  }

  /**
   * 启动智能外呼任务
   * 
   * @param request - StartAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAiOutboundTaskResponse
   */
  async startAiOutboundTaskWithOptions(request: $_model.StartAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAiOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartAiOutboundTaskResponse({}));
  }

  /**
   * 启动智能外呼任务
   * 
   * @param request - StartAiOutboundTaskRequest
   * @returns StartAiOutboundTaskResponse
   */
  async startAiOutboundTask(request: $_model.StartAiOutboundTaskRequest): Promise<$_model.StartAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - StartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCallResponse
   */
  async startCallWithOptions(request: $_model.StartCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartCallResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callee)) {
      body["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      body["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCall",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartCallResponse>(await this.callApi(params, req, runtime), new $_model.StartCallResponse({}));
  }

  /**
   * @param request - StartCallRequest
   * @returns StartCallResponse
   */
  async startCall(request: $_model.StartCallRequest): Promise<$_model.StartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCallWithOptions(request, runtime);
  }

  /**
   * @param request - StartCallV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCallV2Response
   */
  async startCallV2WithOptions(request: $_model.StartCallV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.StartCallV2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callee)) {
      body["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      body["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.callerType)) {
      body["CallerType"] = request.callerType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCallV2",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartCallV2Response>(await this.callApi(params, req, runtime), new $_model.StartCallV2Response({}));
  }

  /**
   * @param request - StartCallV2Request
   * @returns StartCallV2Response
   */
  async startCallV2(request: $_model.StartCallV2Request): Promise<$_model.StartCallV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCallV2WithOptions(request, runtime);
  }

  /**
   * 修改在线客服为上班状态
   * 
   * @param request - StartChatWorkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartChatWorkResponse
   */
  async startChatWorkWithOptions(request: $_model.StartChatWorkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartChatWorkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartChatWork",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartChatWorkResponse>(await this.callApi(params, req, runtime), new $_model.StartChatWorkResponse({}));
  }

  /**
   * 修改在线客服为上班状态
   * 
   * @param request - StartChatWorkRequest
   * @returns StartChatWorkResponse
   */
  async startChatWork(request: $_model.StartChatWorkRequest): Promise<$_model.StartChatWorkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startChatWorkWithOptions(request, runtime);
  }

  /**
   * @param request - StartHotlineServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartHotlineServiceResponse
   */
  async startHotlineServiceWithOptions(request: $_model.StartHotlineServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartHotlineServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartHotlineService",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartHotlineServiceResponse>(await this.callApi(params, req, runtime), new $_model.StartHotlineServiceResponse({}));
  }

  /**
   * @param request - StartHotlineServiceRequest
   * @returns StartHotlineServiceResponse
   */
  async startHotlineService(request: $_model.StartHotlineServiceRequest): Promise<$_model.StartHotlineServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startHotlineServiceWithOptions(request, runtime);
  }

  /**
   * @param request - StartMicroOutboundRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMicroOutboundResponse
   */
  async startMicroOutboundWithOptions(request: $_model.StartMicroOutboundRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartMicroOutboundResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.commandCode)) {
      query["CommandCode"] = request.commandCode;
    }

    if (!$dara.isNull(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMicroOutbound",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartMicroOutboundResponse>(await this.callApi(params, req, runtime), new $_model.StartMicroOutboundResponse({}));
  }

  /**
   * @param request - StartMicroOutboundRequest
   * @returns StartMicroOutboundResponse
   */
  async startMicroOutbound(request: $_model.StartMicroOutboundRequest): Promise<$_model.StartMicroOutboundResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startMicroOutboundWithOptions(request, runtime);
  }

  /**
   * 立即或定时启动智能外呼任务
   * 
   * @param request - StartTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTaskResponse
   */
  async startTaskWithOptions(request: $_model.StartTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startNow)) {
      query["StartNow"] = request.startNow;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartTaskResponse({}));
  }

  /**
   * 立即或定时启动智能外呼任务
   * 
   * @param request - StartTaskRequest
   * @returns StartTaskResponse
   */
  async startTask(request: $_model.StartTaskRequest): Promise<$_model.StartTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startTaskWithOptions(request, runtime);
  }

  /**
   * 停止任务
   * 
   * @param request - StopAiCallTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAiCallTaskResponse
   */
  async stopAiCallTaskWithOptions(request: $_model.StopAiCallTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAiCallTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAiCallTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAiCallTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopAiCallTaskResponse({}));
  }

  /**
   * 停止任务
   * 
   * @param request - StopAiCallTaskRequest
   * @returns StopAiCallTaskResponse
   */
  async stopAiCallTask(request: $_model.StopAiCallTaskRequest): Promise<$_model.StopAiCallTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAiCallTaskWithOptions(request, runtime);
  }

  /**
   * 手动暂停智能外呼任务
   * 
   * @param request - StopAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAiOutboundTaskResponse
   */
  async stopAiOutboundTaskWithOptions(request: $_model.StopAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAiOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopAiOutboundTaskResponse({}));
  }

  /**
   * 手动暂停智能外呼任务
   * 
   * @param request - StopAiOutboundTaskRequest
   * @returns StopAiOutboundTaskResponse
   */
  async stopAiOutboundTask(request: $_model.StopAiOutboundTaskRequest): Promise<$_model.StopAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * 暂停外呼任务
   * 
   * @param request - StopTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTaskResponse
   */
  async stopTaskWithOptions(request: $_model.StopTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopTaskResponse({}));
  }

  /**
   * 暂停外呼任务
   * 
   * @param request - StopTaskRequest
   * @returns StopTaskResponse
   */
  async stopTask(request: $_model.StopTaskRequest): Promise<$_model.StopTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopTaskWithOptions(request, runtime);
  }

  /**
   * @param request - SuspendHotlineServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendHotlineServiceResponse
   */
  async suspendHotlineServiceWithOptions(request: $_model.SuspendHotlineServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendHotlineServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendHotlineService",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendHotlineServiceResponse>(await this.callApi(params, req, runtime), new $_model.SuspendHotlineServiceResponse({}));
  }

  /**
   * @param request - SuspendHotlineServiceRequest
   * @returns SuspendHotlineServiceResponse
   */
  async suspendHotlineService(request: $_model.SuspendHotlineServiceRequest): Promise<$_model.SuspendHotlineServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendHotlineServiceWithOptions(request, runtime);
  }

  /**
   * @param request - SuspendOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendOutboundTaskResponse
   */
  async suspendOutboundTaskWithOptions(request: $_model.SuspendOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundTaskId)) {
      query["OutboundTaskId"] = request.outboundTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendOutboundTaskResponse>(await this.callApi(params, req, runtime), new $_model.SuspendOutboundTaskResponse({}));
  }

  /**
   * @param request - SuspendOutboundTaskRequest
   * @returns SuspendOutboundTaskResponse
   */
  async suspendOutboundTask(request: $_model.SuspendOutboundTaskRequest): Promise<$_model.SuspendOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendOutboundTaskWithOptions(request, runtime);
  }

  /**
   * 终止智能外呼任务
   * 
   * @param request - TerminateAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateAiOutboundTaskResponse
   */
  async terminateAiOutboundTaskWithOptions(request: $_model.TerminateAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateAiOutboundTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminateAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new $_model.TerminateAiOutboundTaskResponse({}));
  }

  /**
   * 终止智能外呼任务
   * 
   * @param request - TerminateAiOutboundTaskRequest
   * @returns TerminateAiOutboundTaskResponse
   */
  async terminateAiOutboundTask(request: $_model.TerminateAiOutboundTaskRequest): Promise<$_model.TerminateAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.terminateAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * @param request - TransferCallToSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferCallToSkillGroupResponse
   */
  async transferCallToSkillGroupWithOptions(request: $_model.TransferCallToSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferCallToSkillGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.callId)) {
      body["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.holdConnectionId)) {
      body["HoldConnectionId"] = request.holdConnectionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isSingleTransfer)) {
      body["IsSingleTransfer"] = request.isSingleTransfer;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      body["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferCallToSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferCallToSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.TransferCallToSkillGroupResponse({}));
  }

  /**
   * @param request - TransferCallToSkillGroupRequest
   * @returns TransferCallToSkillGroupResponse
   */
  async transferCallToSkillGroup(request: $_model.TransferCallToSkillGroupRequest): Promise<$_model.TransferCallToSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferCallToSkillGroupWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentResponse
   */
  async updateAgentWithOptions(request: $_model.UpdateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      body["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      body["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "PUT",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentResponse({}));
  }

  /**
   * @param request - UpdateAgentRequest
   * @returns UpdateAgentResponse
   */
  async updateAgent(request: $_model.UpdateAgentRequest): Promise<$_model.UpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgentWithOptions(request, runtime);
  }

  /**
   * 更新AI外呼任务配置
   * 
   * @param tmpReq - UpdateAiCallTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAiCallTaskResponse
   */
  async updateAiCallTaskWithOptions(tmpReq: $_model.UpdateAiCallTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAiCallTaskResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAiCallTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callDay)) {
      request.callDayShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callDay, "CallDay", "json");
    }

    if (!$dara.isNull(tmpReq.callRetryReason)) {
      request.callRetryReasonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callRetryReason, "CallRetryReason", "json");
    }

    if (!$dara.isNull(tmpReq.callTime)) {
      request.callTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callTime, "CallTime", "json");
    }

    let query = { };
    if (!$dara.isNull(request.callDayShrink)) {
      query["CallDay"] = request.callDayShrink;
    }

    if (!$dara.isNull(request.callRetryInterval)) {
      query["CallRetryInterval"] = request.callRetryInterval;
    }

    if (!$dara.isNull(request.callRetryReasonShrink)) {
      query["CallRetryReason"] = request.callRetryReasonShrink;
    }

    if (!$dara.isNull(request.callRetryTimes)) {
      query["CallRetryTimes"] = request.callRetryTimes;
    }

    if (!$dara.isNull(request.callTimeShrink)) {
      query["CallTime"] = request.callTimeShrink;
    }

    if (!$dara.isNull(request.missCallRetry)) {
      query["MissCallRetry"] = request.missCallRetry;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startType)) {
      query["StartType"] = request.startType;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskStartTime)) {
      query["TaskStartTime"] = request.taskStartTime;
    }

    if (!$dara.isNull(request.virtualNumber)) {
      query["VirtualNumber"] = request.virtualNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAiCallTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAiCallTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAiCallTaskResponse({}));
  }

  /**
   * 更新AI外呼任务配置
   * 
   * @param request - UpdateAiCallTaskRequest
   * @returns UpdateAiCallTaskResponse
   */
  async updateAiCallTask(request: $_model.UpdateAiCallTaskRequest): Promise<$_model.UpdateAiCallTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAiCallTaskWithOptions(request, runtime);
  }

  /**
   * 更新智能外呼任务（预测式外呼、自动外呼）
   * 
   * @param tmpReq - UpdateAiOutboundTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAiOutboundTaskResponse
   */
  async updateAiOutboundTaskWithOptions(tmpReq: $_model.UpdateAiOutboundTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAiOutboundTaskResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAiOutboundTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.outboundNums)) {
      request.outboundNumsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundNums, "OutboundNums", "json");
    }

    if (!$dara.isNull(tmpReq.recallRule)) {
      request.recallRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recallRule, "RecallRule", "json");
    }

    let query = { };
    if (!$dara.isNull(request.concurrentRate)) {
      query["ConcurrentRate"] = request.concurrentRate;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionTime)) {
      query["ExecutionTime"] = request.executionTime;
    }

    if (!$dara.isNull(request.forecastCallRate)) {
      query["ForecastCallRate"] = request.forecastCallRate;
    }

    if (!$dara.isNull(request.handlerId)) {
      query["HandlerId"] = request.handlerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.numRepeated)) {
      query["NumRepeated"] = request.numRepeated;
    }

    if (!$dara.isNull(request.outboundNumsShrink)) {
      query["OutboundNums"] = request.outboundNumsShrink;
    }

    if (!$dara.isNull(request.recallRuleShrink)) {
      query["RecallRule"] = request.recallRuleShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAiOutboundTask",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAiOutboundTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAiOutboundTaskResponse({}));
  }

  /**
   * 更新智能外呼任务（预测式外呼、自动外呼）
   * 
   * @param request - UpdateAiOutboundTaskRequest
   * @returns UpdateAiOutboundTaskResponse
   */
  async updateAiOutboundTask(request: $_model.UpdateAiOutboundTaskRequest): Promise<$_model.UpdateAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * 更新部门信息
   * 
   * @param request - UpdateDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDepartmentResponse
   */
  async updateDepartmentWithOptions(request: $_model.UpdateDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDepartment",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDepartmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDepartmentResponse({}));
  }

  /**
   * 更新部门信息
   * 
   * @param request - UpdateDepartmentRequest
   * @returns UpdateDepartmentResponse
   */
  async updateDepartment(request: $_model.UpdateDepartmentRequest): Promise<$_model.UpdateDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDepartmentWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateOuterAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOuterAccountResponse
   */
  async updateOuterAccountWithOptions(request: $_model.UpdateOuterAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOuterAccountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOuterAccount",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOuterAccountResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOuterAccountResponse({}));
  }

  /**
   * @param request - UpdateOuterAccountRequest
   * @returns UpdateOuterAccountResponse
   */
  async updateOuterAccount(request: $_model.UpdateOuterAccountRequest): Promise<$_model.UpdateOuterAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOuterAccountWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillGroupResponse
   */
  async updateSkillGroupWithOptions(request: $_model.UpdateSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.skillGroupName)) {
      query["SkillGroupName"] = request.skillGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSkillGroup",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillGroupResponse({}));
  }

  /**
   * @param request - UpdateSkillGroupRequest
   * @returns UpdateSkillGroupResponse
   */
  async updateSkillGroup(request: $_model.UpdateSkillGroupRequest): Promise<$_model.UpdateSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillGroupWithOptions(request, runtime);
  }

}
