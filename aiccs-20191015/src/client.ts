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
      'us-west-1': "aiccs.aliyuncs.com",
      'us-east-1': "aiccs.aliyuncs.com",
      'me-east-1': "aiccs.aliyuncs.com",
      'eu-west-1': "aiccs.aliyuncs.com",
      'eu-central-1': "aiccs.aliyuncs.com",
      'cn-zhangjiakou': "aiccs.aliyuncs.com",
      'cn-wulanchabu': "aiccs.aliyuncs.com",
      'cn-shenzhen-finance-1': "aiccs.aliyuncs.com",
      'cn-shenzhen': "aiccs.aliyuncs.com",
      'cn-shanghai-finance-1': "aiccs.aliyuncs.com",
      'cn-shanghai': "aiccs.aliyuncs.com",
      'cn-qingdao': "aiccs.aliyuncs.com",
      'cn-north-2-gov-1': "aiccs.aliyuncs.com",
      'cn-huhehaote': "aiccs.aliyuncs.com",
      'cn-hongkong': "aiccs.aliyuncs.com",
      'cn-hangzhou-finance': "aiccs.aliyuncs.com",
      'cn-hangzhou': "aiccs.aliyuncs.com",
      'cn-chengdu': "aiccs.aliyuncs.com",
      'cn-beijing-finance-1': "aiccs.aliyuncs.com",
      'cn-beijing': "aiccs.aliyuncs.com",
      'ap-southeast-5': "aiccs.aliyuncs.com",
      'ap-southeast-3': "aiccs.aliyuncs.com",
      'ap-southeast-1': "aiccs.aliyuncs.com",
      'ap-northeast-1': "aiccs.aliyuncs.com",
    };
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
   * Invoke the AddHotlineNumber API to add a hotline number.
   * 
   * @remarks
   * > Hotline numbers are for inbound and outbound calls only.
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
   * Invoke the AddHotlineNumber API to add a hotline number.
   * 
   * @remarks
   * > Hotline numbers are for inbound and outbound calls only.
   * 
   * @param request - AddHotlineNumberRequest
   * @returns AddHotlineNumberResponse
   */
  async addHotlineNumber(request: $_model.AddHotlineNumberRequest): Promise<$_model.AddHotlineNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addHotlineNumberWithOptions(request, runtime);
  }

  /**
   * Adds one or more inbound numbers.
   * 
   * @param tmpReq - AddInboundNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddInboundNumberResponse
   */
  async addInboundNumberWithOptions(tmpReq: $_model.AddInboundNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddInboundNumberResponse> {
    tmpReq.validate();
    let request = new $_model.AddInboundNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.inboundNumbers)) {
      request.inboundNumbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inboundNumbers, "InboundNumbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationCode)) {
      query["ApplicationCode"] = request.applicationCode;
    }

    if (!$dara.isNull(request.inboundNumbersShrink)) {
      query["InboundNumbers"] = request.inboundNumbersShrink;
    }

    if (!$dara.isNull(request.inboundType)) {
      query["InboundType"] = request.inboundType;
    }

    if (!$dara.isNull(request.lineCode)) {
      query["LineCode"] = request.lineCode;
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
      action: "AddInboundNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddInboundNumberResponse>(await this.callApi(params, req, runtime), new $_model.AddInboundNumberResponse({}));
  }

  /**
   * Adds one or more inbound numbers.
   * 
   * @param request - AddInboundNumberRequest
   * @returns AddInboundNumberResponse
   */
  async addInboundNumber(request: $_model.AddInboundNumberRequest): Promise<$_model.AddInboundNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addInboundNumberWithOptions(request, runtime);
  }

  /**
   * Adds a large language model.
   * 
   * @param tmpReq - AddLargeModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddLargeModelResponse
   */
  async addLargeModelWithOptions(tmpReq: $_model.AddLargeModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddLargeModelResponse> {
    tmpReq.validate();
    let request = new $_model.AddLargeModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.baseModel)) {
      request.baseModelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.baseModel, "BaseModel", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.baseModelShrink)) {
      query["BaseModel"] = request.baseModelShrink;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelUrl)) {
      query["ModelUrl"] = request.modelUrl;
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

    if (!$dara.isNull(request.temperature)) {
      query["Temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!$dara.isNull(request.topP)) {
      query["TopP"] = request.topP;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddLargeModel",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddLargeModelResponse>(await this.callApi(params, req, runtime), new $_model.AddLargeModelResponse({}));
  }

  /**
   * Adds a large language model.
   * 
   * @param request - AddLargeModelRequest
   * @returns AddLargeModelResponse
   */
  async addLargeModel(request: $_model.AddLargeModelRequest): Promise<$_model.AddLargeModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addLargeModelWithOptions(request, runtime);
  }

  /**
   * Add a model application
   * 
   * @param tmpReq - AddModelApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddModelApplicationResponse
   */
  async addModelApplicationWithOptions(tmpReq: $_model.AddModelApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddModelApplicationResponse> {
    tmpReq.validate();
    let request = new $_model.AddModelApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ttsConfig)) {
      request.ttsConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ttsConfig, "TtsConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationCps)) {
      query["ApplicationCps"] = request.applicationCps;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.callConnectedTriggerModel)) {
      query["CallConnectedTriggerModel"] = request.callConnectedTriggerModel;
    }

    if (!$dara.isNull(request.dyvmsSceneName)) {
      query["DyvmsSceneName"] = request.dyvmsSceneName;
    }

    if (!$dara.isNull(request.modelCode)) {
      query["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.modelVersion)) {
      query["ModelVersion"] = request.modelVersion;
    }

    if (!$dara.isNull(request.muteActive)) {
      query["MuteActive"] = request.muteActive;
    }

    if (!$dara.isNull(request.muteDuration)) {
      query["MuteDuration"] = request.muteDuration;
    }

    if (!$dara.isNull(request.muteHangupNum)) {
      query["MuteHangupNum"] = request.muteHangupNum;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.qualificationName)) {
      query["QualificationName"] = request.qualificationName;
    }

    if (!$dara.isNull(request.recordingFile)) {
      query["RecordingFile"] = request.recordingFile;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.speechContent)) {
      query["SpeechContent"] = request.speechContent;
    }

    if (!$dara.isNull(request.speechId)) {
      query["SpeechId"] = request.speechId;
    }

    if (!$dara.isNull(request.startWord)) {
      query["StartWord"] = request.startWord;
    }

    if (!$dara.isNull(request.startWordType)) {
      query["StartWordType"] = request.startWordType;
    }

    if (!$dara.isNull(request.ttsConfigShrink)) {
      query["TtsConfig"] = request.ttsConfigShrink;
    }

    if (!$dara.isNull(request.usageDesc)) {
      query["UsageDesc"] = request.usageDesc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddModelApplication",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddModelApplicationResponse>(await this.callApi(params, req, runtime), new $_model.AddModelApplicationResponse({}));
  }

  /**
   * Add a model application
   * 
   * @param request - AddModelApplicationRequest
   * @returns AddModelApplicationResponse
   */
  async addModelApplication(request: $_model.AddModelApplicationRequest): Promise<$_model.AddModelApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addModelApplicationWithOptions(request, runtime);
  }

  /**
   * Invoke AddOuterAccount to add an external account.
   * 
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
   * Invoke AddOuterAccount to add an external account.
   * 
   * @param request - AddOuterAccountRequest
   * @returns AddOuterAccountResponse
   */
  async addOuterAccount(request: $_model.AddOuterAccountRequest): Promise<$_model.AddOuterAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addOuterAccountWithOptions(request, runtime);
  }

  /**
   * Invoke AddSkillGroup to create an external skill group.
   * 
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
   * Invoke AddSkillGroup to create an external skill group.
   * 
   * @param request - AddSkillGroupRequest
   * @returns AddSkillGroupResponse
   */
  async addSkillGroup(request: $_model.AddSkillGroupRequest): Promise<$_model.AddSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSkillGroupWithOptions(request, runtime);
  }

  /**
   * Invoke the AiccsSmartCall API to initiate an Intelligent Speech Interaction call.
   * 
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
   * Invoke the AiccsSmartCall API to initiate an Intelligent Speech Interaction call.
   * 
   * @param request - AiccsSmartCallRequest
   * @returns AiccsSmartCallResponse
   */
  async aiccsSmartCall(request: $_model.AiccsSmartCallRequest): Promise<$_model.AiccsSmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aiccsSmartCallWithOptions(request, runtime);
  }

  /**
   * Invoke the AiccsSmartCallOperate API to initiate a specified action during an Intelligent outbound call. This API is only used for scenarios such as parallel transfer to a human agent or allowing a human agent to listen in on the man-machine dialogue.
   * 
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
   * Invoke the AiccsSmartCallOperate API to initiate a specified action during an Intelligent outbound call. This API is only used for scenarios such as parallel transfer to a human agent or allowing a human agent to listen in on the man-machine dialogue.
   * 
   * @param request - AiccsSmartCallOperateRequest
   * @returns AiccsSmartCallOperateResponse
   */
  async aiccsSmartCallOperate(request: $_model.AiccsSmartCallOperateRequest): Promise<$_model.AiccsSmartCallOperateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aiccsSmartCallOperateWithOptions(request, runtime);
  }

  /**
   * Invoke AnswerCall to answer an incoming call.
   * 
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
   * Invoke AnswerCall to answer an incoming call.
   * 
   * @param request - AnswerCallRequest
   * @returns AnswerCallResponse
   */
  async answerCall(request: $_model.AnswerCallRequest): Promise<$_model.AnswerCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.answerCallWithOptions(request, runtime);
  }

  /**
   * Append job details.
   * 
   * @remarks
   * - After creating an Intelligent Contact Robot calling job, you can invoke this API to append job details.
   * - Before invoking this API, ensure that you already have a successfully created Intelligent Contact Robot calling job.
   * - If you do not have a successfully created Intelligent Contact Robot calling job, you can click **Create Job** on the [Task Management](https://aiccs.console.aliyun.com/job/list) interface or create a job by using the [CreateTask](https://help.aliyun.com/document_detail/2718003.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Append job details.
   * 
   * @remarks
   * - After creating an Intelligent Contact Robot calling job, you can invoke this API to append job details.
   * - Before invoking this API, ensure that you already have a successfully created Intelligent Contact Robot calling job.
   * - If you do not have a successfully created Intelligent Contact Robot calling job, you can click **Create Job** on the [Task Management](https://aiccs.console.aliyun.com/job/list) interface or create a job by using the [CreateTask](https://help.aliyun.com/document_detail/2718003.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * This operation cancels calls from a call task. You cannot cancel a call if its detail record is already in the pending call queue or is in progress.
   * 
   * @remarks
   * - Use this operation to cancel calls. Alternatively, you can manually cancel calls in the console by navigating to **Call Task Management** > **Manage** > **Execution Records** > **Pending**.
   * - Before calling this operation, ensure you have created a call task and imported callee data.
   * - If you have not created a call task, you can create one and import callee data on the **Call Task Management** page. You can also call the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926815.html) and [ImportTaskNumberDatas]() operations.
   * - Canceling a call task may affect your business. Please proceed with caution.
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

    if (!$dara.isNull(request.encryptionType)) {
      query["EncryptionType"] = request.encryptionType;
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
   * This operation cancels calls from a call task. You cannot cancel a call if its detail record is already in the pending call queue or is in progress.
   * 
   * @remarks
   * - Use this operation to cancel calls. Alternatively, you can manually cancel calls in the console by navigating to **Call Task Management** > **Manage** > **Execution Records** > **Pending**.
   * - Before calling this operation, ensure you have created a call task and imported callee data.
   * - If you have not created a call task, you can create one and import callee data on the **Call Task Management** page. You can also call the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926815.html) and [ImportTaskNumberDatas]() operations.
   * - Canceling a call task may affect your business. Please proceed with caution.
   * 
   * @param request - CancelAiCallDetailsRequest
   * @returns CancelAiCallDetailsResponse
   */
  async cancelAiCallDetails(request: $_model.CancelAiCallDetailsRequest): Promise<$_model.CancelAiCallDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAiCallDetailsWithOptions(request, runtime);
  }

  /**
   * Cancel an Intelligent Contact Robot calling job.
   * 
   * @remarks
   * - You can invoke this API to cancel an Intelligent Contact Robot calling job, or manually cancel the job in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface.
   * - After an Intelligent Contact Robot calling job is canceled, it cannot be started again. Proceed with caution.
   * - If you want to pause a job and restart it later, you can manually pause the job in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface or pause it by using the [StopTask](https://help.aliyun.com/document_detail/2718006.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Cancel an Intelligent Contact Robot calling job.
   * 
   * @remarks
   * - You can invoke this API to cancel an Intelligent Contact Robot calling job, or manually cancel the job in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface.
   * - After an Intelligent Contact Robot calling job is canceled, it cannot be started again. Proceed with caution.
   * - If you want to pause a job and restart it later, you can manually pause the job in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface or pause it by using the [StopTask](https://help.aliyun.com/document_detail/2718006.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - CancelTaskRequest
   * @returns CancelTaskResponse
   */
  async cancelTask(request: $_model.CancelTaskRequest): Promise<$_model.CancelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelTaskWithOptions(request, runtime);
  }

  /**
   * Invoke ChangeChatAgentStatus to modify the Live Support status.
   * 
   * @remarks
   * > Currently, only changing the Live Support status to offline is supported.
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
   * Invoke ChangeChatAgentStatus to modify the Live Support status.
   * 
   * @remarks
   * > Currently, only changing the Live Support status to offline is supported.
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
   * Create an agent account in the Cloud Customer Service System and return the agent ID.
   * 
   * @remarks
   * - Before calling this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify skill group information, refer to the guidance in [Request Parameters](#api-detail-35).  
   * - You can manage agents by calling [DeleteAgent](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-deleteagent) to delete an agent or [UpdateAgent](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-updateagent) to update agent data.  
   * ### QPS Limit
   * - Per-user call frequency: No rate limiting.  
   * - API call frequency: 100 queries per second (QPS).  
   * > If the total calls from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Create an agent account in the Cloud Customer Service System and return the agent ID.
   * 
   * @remarks
   * - Before calling this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify skill group information, refer to the guidance in [Request Parameters](#api-detail-35).  
   * - You can manage agents by calling [DeleteAgent](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-deleteagent) to delete an agent or [UpdateAgent](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-updateagent) to update agent data.  
   * ### QPS Limit
   * - Per-user call frequency: No rate limiting.  
   * - API call frequency: 100 queries per second (QPS).  
   * > If the total calls from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - CreateAgentRequest
   * @returns CreateAgentResponse
   */
  async createAgent(request: $_model.CreateAgentRequest): Promise<$_model.CreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentWithOptions(request, runtime);
  }

  /**
   * Creates a call task.
   * 
   * @remarks
   * Before creating a call task, make a test call with an agent to ensure the results meet your requirements.
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

    if (!$dara.isNull(request.applicationCode)) {
      query["ApplicationCode"] = request.applicationCode;
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

    if (!$dara.isNull(request.lineEncoding)) {
      query["LineEncoding"] = request.lineEncoding;
    }

    if (!$dara.isNull(request.linePhoneNum)) {
      query["LinePhoneNum"] = request.linePhoneNum;
    }

    if (!$dara.isNull(request.missCallRetry)) {
      query["MissCallRetry"] = request.missCallRetry;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneType)) {
      query["PhoneType"] = request.phoneType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
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
   * Creates a call task.
   * 
   * @remarks
   * Before creating a call task, make a test call with an agent to ensure the results meet your requirements.
   * 
   * @param request - CreateAiCallTaskRequest
   * @returns CreateAiCallTaskResponse
   */
  async createAiCallTask(request: $_model.CreateAiCallTaskRequest): Promise<$_model.CreateAiCallTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAiCallTaskWithOptions(request, runtime);
  }

  /**
   * Create an Intelligent Outbound Call Job. You can configure the Task Type, job name, outbound caller ID, callee number deduplication policy, and other settings when creating the job.
   * 
   * @remarks
   * - The **Data** field in the response parameters of this API is the job ID.  
   * - After creating an Intelligent Outbound Call Job, if you need to make updates, you can invoke the [UpdateAiOutboundTask](https://help.aliyun.com/document_detail/2718021.html) API to update the outbound call job.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No Rate Limiting.
   * - API frequency: 20 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Create an Intelligent Outbound Call Job. You can configure the Task Type, job name, outbound caller ID, callee number deduplication policy, and other settings when creating the job.
   * 
   * @remarks
   * - The **Data** field in the response parameters of this API is the job ID.  
   * - After creating an Intelligent Outbound Call Job, if you need to make updates, you can invoke the [UpdateAiOutboundTask](https://help.aliyun.com/document_detail/2718021.html) API to update the outbound call job.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No Rate Limiting.
   * - API frequency: 20 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - CreateAiOutboundTaskRequest
   * @returns CreateAiOutboundTaskResponse
   */
  async createAiOutboundTask(request: $_model.CreateAiOutboundTaskRequest): Promise<$_model.CreateAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * Creates a batch for an Intelligent Outbound Calling job based on the instance ID and job ID, enabling data under the job to be queried by batch.
   * 
   * @remarks
   * Before invoking this API, we recommend that you confirm the instance ID and job ID. For guidance on how to obtain them, see the instructions in [Request Parameters](#api-detail-35).
   * ### QPS limit
   * - Per-user invocation frequency: 20 queries per second (QPS).
   * - API-wide invocation frequency: 20 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Creates a batch for an Intelligent Outbound Calling job based on the instance ID and job ID, enabling data under the job to be queried by batch.
   * 
   * @remarks
   * Before invoking this API, we recommend that you confirm the instance ID and job ID. For guidance on how to obtain them, see the instructions in [Request Parameters](#api-detail-35).
   * ### QPS limit
   * - Per-user invocation frequency: 20 queries per second (QPS).
   * - API-wide invocation frequency: 20 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
   * 
   * @param request - CreateAiOutboundTaskBatchRequest
   * @returns CreateAiOutboundTaskBatchResponse
   */
  async createAiOutboundTaskBatch(request: $_model.CreateAiOutboundTaskBatchRequest): Promise<$_model.CreateAiOutboundTaskBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAiOutboundTaskBatchWithOptions(request, runtime);
  }

  /**
   * Creates department information based on the Artificial Intelligence Cloud Call Service (AICCS) instance ID and department name. Upon successful creation, the department ID is returned.
   * 
   * @remarks
   * - If you need to update department information, you can invoke the [UpdateDepartment](https://help.aliyun.com/document_detail/2717977.html) API.
   * - After successfully creating department information by invoking this API, the **Data** field in the response contains the department ID. If you need to query the department ID later, you can invoke the [GetAllDepartment](https://help.aliyun.com/document_detail/2717975.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.
   * - API invocation frequency: 100 times/second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API frequency limit.
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
   * Creates department information based on the Artificial Intelligence Cloud Call Service (AICCS) instance ID and department name. Upon successful creation, the department ID is returned.
   * 
   * @remarks
   * - If you need to update department information, you can invoke the [UpdateDepartment](https://help.aliyun.com/document_detail/2717977.html) API.
   * - After successfully creating department information by invoking this API, the **Data** field in the response contains the department ID. If you need to query the department ID later, you can invoke the [GetAllDepartment](https://help.aliyun.com/document_detail/2717975.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.
   * - API invocation frequency: 100 times/second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API frequency limit.
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
   * Create a skill group based on the skill group name and channel type.
   * 
   * @remarks
   * - This API allows you to define information such as the external display name and description of the skill group. For details, see [Request Parameters](#api-detail-35).
   * - The **Data** parameter returned by this API is the ID of the successfully created skill group.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 1000 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Create a skill group based on the skill group name and channel type.
   * 
   * @remarks
   * - This API allows you to define information such as the external display name and description of the skill group. For details, see [Request Parameters](#api-detail-35).
   * - The **Data** parameter returned by this API is the ID of the successfully created skill group.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 1000 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - CreateSkillGroupRequest
   * @returns CreateSkillGroupResponse
   */
  async createSkillGroup(request: $_model.CreateSkillGroupRequest): Promise<$_model.CreateSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillGroupWithOptions(request, runtime);
  }

  /**
   * Create an Artificial Intelligence Cloud Call Service robot outbound calling job.
   * 
   * @remarks
   * - You can invoke this API to create a job, or create one in the **Artificial Intelligence Cloud Call Service console** > **Outbound Robot (Standard Edition)** > [Task Management](https://aiccs.console.aliyun.com/job/list) by clicking **Create Job**.  
   * - After invoking this API, the **Data** field in the response contains the unique job ID of the robot outbound calling task.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Create an Artificial Intelligence Cloud Call Service robot outbound calling job.
   * 
   * @remarks
   * - You can invoke this API to create a job, or create one in the **Artificial Intelligence Cloud Call Service console** > **Outbound Robot (Standard Edition)** > [Task Management](https://aiccs.console.aliyun.com/job/list) by clicking **Create Job**.  
   * - After invoking this API, the **Data** field in the response contains the unique job ID of the robot outbound calling task.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: $_model.CreateTaskRequest): Promise<$_model.CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTaskWithOptions(request, runtime);
  }

  /**
   * Create an agent that enables password-free login to the Cloud Customer Service System based on a User Account.
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
   * Create an agent that enables password-free login to the Cloud Customer Service System based on a User Account.
   * 
   * @param request - CreateThirdSsoAgentRequest
   * @returns CreateThirdSsoAgentResponse
   */
  async createThirdSsoAgent(request: $_model.CreateThirdSsoAgentRequest): Promise<$_model.CreateThirdSsoAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createThirdSsoAgentWithOptions(request, runtime);
  }

  /**
   * Deletes an agent account in the Cloud Customer Service System based on the instance ID and agent account name.
   * 
   * @remarks
   * - Before deletion, we recommend that you confirm the agent account name and instance ID to be deleted. For guidance on how to obtain them, see the description of [Request Parameters](#api-detail-35).
   * - If an agent is accidentally deleted, you can invoke the [CreateAgent](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-createagent) API to recreate the agent.
   * > If an account is re-added after deletion, the agent ID remains unchanged.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API frequency limit.
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
   * Deletes an agent account in the Cloud Customer Service System based on the instance ID and agent account name.
   * 
   * @remarks
   * - Before deletion, we recommend that you confirm the agent account name and instance ID to be deleted. For guidance on how to obtain them, see the description of [Request Parameters](#api-detail-35).
   * - If an agent is accidentally deleted, you can invoke the [CreateAgent](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-createagent) API to recreate the agent.
   * > If an account is re-added after deletion, the agent ID remains unchanged.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API frequency limit.
   * 
   * @param request - DeleteAgentRequest
   * @returns DeleteAgentResponse
   */
  async deleteAgent(request: $_model.DeleteAgentRequest): Promise<$_model.DeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAgentWithOptions(request, runtime);
  }

  /**
   * Deletes an Intelligent Outbound Calling job by instance ID and job ID. After deletion, the job will no longer appear in the outbound calling job list.
   * 
   * @remarks
   * >Notice: Deletion is a sensitive operation. Proceed with caution.
   * - Before deletion, we recommend that you confirm the job ID and related information. You can call the [GetAiOutboundTaskList](https://help.aliyun.com/document_detail/2718026.html) API to view the outbound calling job list and verify the task name, description, and corresponding job ID.
   * - If you need to recreate an Intelligent Outbound Calling job, you can call the [CreateAiOutboundTask](https://help.aliyun.com/document_detail/312260.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 20 times/second.
   * - API invocation frequency: 20 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Deletes an Intelligent Outbound Calling job by instance ID and job ID. After deletion, the job will no longer appear in the outbound calling job list.
   * 
   * @remarks
   * >Notice: Deletion is a sensitive operation. Proceed with caution.
   * - Before deletion, we recommend that you confirm the job ID and related information. You can call the [GetAiOutboundTaskList](https://help.aliyun.com/document_detail/2718026.html) API to view the outbound calling job list and verify the task name, description, and corresponding job ID.
   * - If you need to recreate an Intelligent Outbound Calling job, you can call the [CreateAiOutboundTask](https://help.aliyun.com/document_detail/312260.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 20 times/second.
   * - API invocation frequency: 20 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - DeleteAiOutboundTaskRequest
   * @returns DeleteAiOutboundTaskResponse
   */
  async deleteAiOutboundTask(request: $_model.DeleteAiOutboundTaskRequest): Promise<$_model.DeleteAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * Deletes department information based on the Artificial Intelligence Cloud Call Service (AICCS) instance ID and department ID.
   * 
   * @remarks
   * - Deletion is a sensitive operation. Proceed with caution.
   * - Before invoking this API, we recommend that you confirm the AICCS instance ID and department ID. For guidance on how to obtain them, see the instructions in [Request Parameters](#api-detail-35).
   * - If you accidentally delete department information, you can call the [CreateDepartment](https://help.aliyun.com/document_detail/2717974.html) API to recreate it.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: 100 times/second.
   * - API invocation frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Deletes department information based on the Artificial Intelligence Cloud Call Service (AICCS) instance ID and department ID.
   * 
   * @remarks
   * - Deletion is a sensitive operation. Proceed with caution.
   * - Before invoking this API, we recommend that you confirm the AICCS instance ID and department ID. For guidance on how to obtain them, see the instructions in [Request Parameters](#api-detail-35).
   * - If you accidentally delete department information, you can call the [CreateDepartment](https://help.aliyun.com/document_detail/2717974.html) API to recreate it.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: 100 times/second.
   * - API invocation frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - DeleteDepartmentRequest
   * @returns DeleteDepartmentResponse
   */
  async deleteDepartment(request: $_model.DeleteDepartmentRequest): Promise<$_model.DeleteDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDepartmentWithOptions(request, runtime);
  }

  /**
   * Invoke the DeleteHotlineNumber API to delete a configured hotline number.
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
   * Invoke the DeleteHotlineNumber API to delete a configured hotline number.
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
   * Invoke DeleteOuterAccount to delete an external account by its external Account ID.
   * 
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
   * Invoke DeleteOuterAccount to delete an external account by its external Account ID.
   * 
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
   * Deletes an external skill group based on the skill group ID and skill group channel type.
   * 
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
   * Deletes an external skill group based on the skill group ID and skill group channel type.
   * 
   * @param request - DeleteSkillGroupRequest
   * @returns DeleteSkillGroupResponse
   */
  async deleteSkillGroup(request: $_model.DeleteSkillGroupRequest): Promise<$_model.DeleteSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillGroupWithOptions(request, runtime);
  }

  /**
   * Invoke the DescribeRecordData API to retrieve call information.
   * 
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
   * Invoke the DescribeRecordData API to retrieve call information.
   * 
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
   * Invoke EncryptPhoneNum to encrypt the User\\"s Phone number.
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
   * Invoke EncryptPhoneNum to encrypt the User\\"s Phone number.
   * 
   * @param request - EncryptPhoneNumRequest
   * @returns EncryptPhoneNumResponse
   */
  async encryptPhoneNum(request: $_model.EncryptPhoneNumRequest): Promise<$_model.EncryptPhoneNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.encryptPhoneNumWithOptions(request, runtime);
  }

  /**
   * Retrieve or recover a call.
   * 
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
   * Retrieve or recover a call.
   * 
   * @param request - FetchCallRequest
   * @returns FetchCallResponse
   */
  async fetchCall(request: $_model.FetchCallRequest): Promise<$_model.FetchCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fetchCallWithOptions(request, runtime);
  }

  /**
   * End the hotline service by instance ID and agent account name.
   * 
   * @remarks
   * ### Queries per second (QPS) limit
   * - Per-user API call frequency: No rate limiting.
   * - API frequency: 100 calls per second.
   * > If the total number of calls from multiple users exceeds the API frequency limit, throttling will be triggered.
   * 
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
   * End the hotline service by instance ID and agent account name.
   * 
   * @remarks
   * ### Queries per second (QPS) limit
   * - Per-user API call frequency: No rate limiting.
   * - API frequency: 100 calls per second.
   * > If the total number of calls from multiple users exceeds the API frequency limit, throttling will be triggered.
   * 
   * @param request - FinishHotlineServiceRequest
   * @returns FinishHotlineServiceResponse
   */
  async finishHotlineService(request: $_model.FinishHotlineServiceRequest): Promise<$_model.FinishHotlineServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.finishHotlineServiceWithOptions(request, runtime);
  }

  /**
   * Generate a message channel access signature based on the Artificial Intelligence Cloud Call Service (AICCS) instance ID and agent account name.
   * 
   * @remarks
   * - You can invoke this API to generate a message channel access signature. The **Data** field in the response contains the MessageBox message channel signature code.
   * - Before invoking the API, we recommend that you confirm your AICCS instance ID. For instructions on how to obtain it, see the description of [Request Parameters](#api-detail-35).
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API-wide frequency: 100 queries per second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
   * 
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
   * Generate a message channel access signature based on the Artificial Intelligence Cloud Call Service (AICCS) instance ID and agent account name.
   * 
   * @remarks
   * - You can invoke this API to generate a message channel access signature. The **Data** field in the response contains the MessageBox message channel signature code.
   * - Before invoking the API, we recommend that you confirm your AICCS instance ID. For instructions on how to obtain it, see the description of [Request Parameters](#api-detail-35).
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API-wide frequency: 100 queries per second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
   * 
   * @param request - GenerateWebSocketSignRequest
   * @returns GenerateWebSocketSignResponse
   */
  async generateWebSocketSign(request: $_model.GenerateWebSocketSignRequest): Promise<$_model.GenerateWebSocketSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateWebSocketSignWithOptions(request, runtime);
  }

  /**
   * Query agent information in the Cloud Customer Service System by instance ID and agent account name, such as agent ID.
   * 
   * @remarks
   * - Before invoking this API, confirm the AICCS instance information and the agent account name. For guidance on how to obtain these details, refer to the instructions in [Request Parameters](#api-detail-35).
   * - Deleted agents can also be queried. Check the **Status** parameter in the response. If its value is 2, it indicates that the agent has been deleted.
   * ### queries per second (QPS) Limit
   * - Per-user invocation frequency: No Rate Limiting.
   * - API frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Query agent information in the Cloud Customer Service System by instance ID and agent account name, such as agent ID.
   * 
   * @remarks
   * - Before invoking this API, confirm the AICCS instance information and the agent account name. For guidance on how to obtain these details, refer to the instructions in [Request Parameters](#api-detail-35).
   * - Deleted agents can also be queried. Check the **Status** parameter in the response. If its value is 2, it indicates that the agent has been deleted.
   * ### queries per second (QPS) Limit
   * - Per-user invocation frequency: No Rate Limiting.
   * - API frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetAgentRequest
   * @returns GetAgentResponse
   */
  async getAgent(request: $_model.GetAgentRequest): Promise<$_model.GetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentWithOptions(request, runtime);
  }

  /**
   * Obtain the agent-level status metrics under hotline monitoring. Supports queries by instance, time range, agent, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to provide agent or department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Obtain the agent-level status metrics under hotline monitoring. Supports queries by instance, time range, agent, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to provide agent or department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Retrieve the summary data of hotline agent details under hotline reports. Supports queries by instance, time range, agent, and department group.
   * 
   * @remarks
   * - Before you invoke this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to provide agent or department information, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Retrieve the summary data of hotline agent details under hotline reports. Supports queries by instance, time range, agent, and department group.
   * 
   * @remarks
   * - Before you invoke this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to provide agent or department information, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
   * 
   * @param request - GetAgentDetailReportRequest
   * @returns GetAgentDetailReportResponse
   */
  async getAgentDetailReport(request: $_model.GetAgentDetailReportRequest): Promise<$_model.GetAgentDetailReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentDetailReportWithOptions(request, runtime);
  }

  /**
   * Obtain real-time agent detail data grouped by instance, department, and skill group (real-time data).
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).
   * - If you need to specify department or skill group information, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * ### queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 10 requests per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Obtain real-time agent detail data grouped by instance, department, and skill group (real-time data).
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).
   * - If you need to specify department or skill group information, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * ### queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 10 requests per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetAgentIndexRealTimeRequest
   * @returns GetAgentIndexRealTimeResponse
   */
  async getAgentIndexRealTime(request: $_model.GetAgentIndexRealTimeRequest): Promise<$_model.GetAgentIndexRealTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentIndexRealTimeWithOptions(request, runtime);
  }

  /**
   * Obtain the agent service status metrics from online reports. Supports queries by instance, time range, agent, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to provide agent or department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 queries per second.
   * - API-wide invocation frequency: 100 queries per second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
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
   * Obtain the agent service status metrics from online reports. Supports queries by instance, time range, agent, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to provide agent or department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 queries per second.
   * - API-wide invocation frequency: 100 queries per second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
   * 
   * @param request - GetAgentServiceStatusRequest
   * @returns GetAgentServiceStatusResponse
   */
  async getAgentServiceStatus(request: $_model.GetAgentServiceStatusRequest): Promise<$_model.GetAgentServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentServiceStatusWithOptions(request, runtime);
  }

  /**
   * Obtain agent-level statistics under hotline monitoring. Supports querying by instance, time range, agent, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify agent or department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### queries per second (QPS) limit
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
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
   * Obtain agent-level statistics under hotline monitoring. Supports querying by instance, time range, agent, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify agent or department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### queries per second (QPS) limit
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
   * 
   * @param request - GetAgentStatisticsRequest
   * @returns GetAgentStatisticsResponse
   */
  async getAgentStatistics(request: $_model.GetAgentStatisticsRequest): Promise<$_model.GetAgentStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentStatisticsWithOptions(request, runtime);
  }

  /**
   * Query the business information associated with this call by instance ID and session ID.
   * 
   * @remarks
   * ### Queries per second (QPS) limits
   * - Call frequency per user: 100 times/second.
   * - API call frequency: 100 times/second.
   * > If the total calls from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Query the business information associated with this call by instance ID and session ID.
   * 
   * @remarks
   * ### Queries per second (QPS) limits
   * - Call frequency per user: 100 times/second.
   * - API call frequency: 100 times/second.
   * > If the total calls from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetAiOutboundTaskBizDataRequest
   * @returns GetAiOutboundTaskBizDataResponse
   */
  async getAiOutboundTaskBizData(request: $_model.GetAiOutboundTaskBizDataRequest): Promise<$_model.GetAiOutboundTaskBizDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskBizDataWithOptions(request, runtime);
  }

  /**
   * Obtain the outbound call job details by instance ID and job ID.
   * 
   * @remarks
   * The outbound call job details include the job ID, job status, task type, outbound caller number, callee number repetition policy, and other information. For more information, see [Response parameters](#api-detail-40).  
   * ### Queries per second (QPS) limits  
   * - Per-user invocation frequency: 100 times per second.  
   * - API invocation frequency: 100 times per second.  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Obtain the outbound call job details by instance ID and job ID.
   * 
   * @remarks
   * The outbound call job details include the job ID, job status, task type, outbound caller number, callee number repetition policy, and other information. For more information, see [Response parameters](#api-detail-40).  
   * ### Queries per second (QPS) limits  
   * - Per-user invocation frequency: 100 times per second.  
   * - API invocation frequency: 100 times per second.  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetAiOutboundTaskDetailRequest
   * @returns GetAiOutboundTaskDetailResponse
   */
  async getAiOutboundTaskDetail(request: $_model.GetAiOutboundTaskDetailRequest): Promise<$_model.GetAiOutboundTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskDetailWithOptions(request, runtime);
  }

  /**
   * Obtain task execution details by instance ID and job ID.
   * 
   * @remarks
   * The task execution details include the total number of jobs, job batches, outbound call numbers, corresponding call counts, execution status, and other information.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.
   * - API invocation frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Obtain task execution details by instance ID and job ID.
   * 
   * @remarks
   * The task execution details include the total number of jobs, job batches, outbound call numbers, corresponding call counts, execution status, and other information.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.
   * - API invocation frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetAiOutboundTaskExecDetailRequest
   * @returns GetAiOutboundTaskExecDetailResponse
   */
  async getAiOutboundTaskExecDetail(request: $_model.GetAiOutboundTaskExecDetailRequest): Promise<$_model.GetAiOutboundTaskExecDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskExecDetailWithOptions(request, runtime);
  }

  /**
   * Retrieve the outbound call job list by instance ID and Task Type.
   * 
   * @remarks
   * - The job list contains job information, including job ID, Task Status, Task Name, task completion rate, and more. For details, see [Response parameters](#api-detail-40).
   * - If you need to update job information, you can invoke the [UpdateAiOutboundTask](https://help.aliyun.com/document_detail/2718021.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.
   * - API invocation frequency: 100 times/second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API frequency limit.
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
   * Retrieve the outbound call job list by instance ID and Task Type.
   * 
   * @remarks
   * - The job list contains job information, including job ID, Task Status, Task Name, task completion rate, and more. For details, see [Response parameters](#api-detail-40).
   * - If you need to update job information, you can invoke the [UpdateAiOutboundTask](https://help.aliyun.com/document_detail/2718021.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.
   * - API invocation frequency: 100 times/second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API frequency limit.
   * 
   * @param request - GetAiOutboundTaskListRequest
   * @returns GetAiOutboundTaskListResponse
   */
  async getAiOutboundTaskList(request: $_model.GetAiOutboundTaskListRequest): Promise<$_model.GetAiOutboundTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiOutboundTaskListWithOptions(request, runtime);
  }

  /**
   * Obtain the outbound call job progress by instance ID and job ID.
   * 
   * @remarks
   * - Before invoking this API, we recommend that you confirm the instance ID and job ID. For more information, see [Request Parameters](#api-detail-35).  
   * - The outbound call job progress includes information such as job ID, Task Type, job completion rate, agent connection rate, and customer connection rate. For details, see [Response Parameters](#api-detail-40).  
   * ### Queries per second (QPS) limits  
   * - Per-user invocation frequency: 100 times/second.  
   * - API-wide invocation frequency: 100 times/second.  
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Obtain the outbound call job progress by instance ID and job ID.
   * 
   * @remarks
   * - Before invoking this API, we recommend that you confirm the instance ID and job ID. For more information, see [Request Parameters](#api-detail-35).  
   * - The outbound call job progress includes information such as job ID, Task Type, job completion rate, agent connection rate, and customer connection rate. For details, see [Response Parameters](#api-detail-40).  
   * ### Queries per second (QPS) limits  
   * - Per-user invocation frequency: 100 times/second.  
   * - API-wide invocation frequency: 100 times/second.  
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * @remarks
   * - You can invoke this API to obtain department IDs for department group queries in certain data query APIs (such as [GetHotlineServiceStatistics](https://help.aliyun.com/document_detail/2717938.html)).  
   * - After creating, deleting, or updating department information, you can invoke this API to confirm whether the department information matches your expectations.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.  
   * - API invocation frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * @remarks
   * - You can invoke this API to obtain department IDs for department group queries in certain data query APIs (such as [GetHotlineServiceStatistics](https://help.aliyun.com/document_detail/2717938.html)).  
   * - After creating, deleting, or updating department information, you can invoke this API to confirm whether the department information matches your expectations.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.  
   * - API invocation frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetAllDepartmentRequest
   * @returns GetAllDepartmentResponse
   */
  async getAllDepartment(request: $_model.GetAllDepartmentRequest): Promise<$_model.GetAllDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAllDepartmentWithOptions(request, runtime);
  }

  /**
   * Retrieves the upload address for a voice memo recording.
   * 
   * @param request - GetAudioNoteUploadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAudioNoteUploadUrlResponse
   */
  async getAudioNoteUploadUrlWithOptions(request: $_model.GetAudioNoteUploadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAudioNoteUploadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAudioNoteUploadUrl",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAudioNoteUploadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAudioNoteUploadUrlResponse({}));
  }

  /**
   * Retrieves the upload address for a voice memo recording.
   * 
   * @param request - GetAudioNoteUploadUrlRequest
   * @returns GetAudioNoteUploadUrlResponse
   */
  async getAudioNoteUploadUrl(request: $_model.GetAudioNoteUploadUrlRequest): Promise<$_model.GetAudioNoteUploadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAudioNoteUploadUrlWithOptions(request, runtime);
  }

  /**
   * Retrieves the dialog content for a call by using its call ID. You can retrieve content for calls completed within the last 30 days.
   * 
   * @param request - GetCallDialogContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCallDialogContentResponse
   */
  async getCallDialogContentWithOptions(request: $_model.GetCallDialogContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCallDialogContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callDate)) {
      query["CallDate"] = request.callDate;
    }

    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
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
      action: "GetCallDialogContent",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCallDialogContentResponse>(await this.callApi(params, req, runtime), new $_model.GetCallDialogContentResponse({}));
  }

  /**
   * Retrieves the dialog content for a call by using its call ID. You can retrieve content for calls completed within the last 30 days.
   * 
   * @param request - GetCallDialogContentRequest
   * @returns GetCallDialogContentResponse
   */
  async getCallDialogContent(request: $_model.GetCallDialogContentRequest): Promise<$_model.GetCallDialogContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCallDialogContentWithOptions(request, runtime);
  }

  /**
   * Obtain the URL of a call recording file based on the call creation time and the unique call ID, and then retrieve the call recording file using the URL.
   * 
   * @remarks
   * ### Prerequisites
   * Before invoking this API, ensure that call recording was enabled during the invocation of the [RobotCall](https://help.aliyun.com/document_detail/223270.html) API and that you successfully received the recording receipt, indicating that the recording file has been generated. Otherwise, an invalid URL will be returned.
   * ### How-To
   * This API serves as a supplementary method to the recording receipt. If the URL in the recording receipt message expires, you can use this API to obtain a new recording URL. By default, the validity period of the recording receipt URL is three days.
   * > We recommend that you directly download the recording content using the recording receipt URL and save it locally, rather than relying on the receipt URL, to avoid issues caused by expiration.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > Throttling will be triggered if the total invocations from multiple users exceed the API frequency limit.
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
   * Obtain the URL of a call recording file based on the call creation time and the unique call ID, and then retrieve the call recording file using the URL.
   * 
   * @remarks
   * ### Prerequisites
   * Before invoking this API, ensure that call recording was enabled during the invocation of the [RobotCall](https://help.aliyun.com/document_detail/223270.html) API and that you successfully received the recording receipt, indicating that the recording file has been generated. Otherwise, an invalid URL will be returned.
   * ### How-To
   * This API serves as a supplementary method to the recording receipt. If the URL in the recording receipt message expires, you can use this API to obtain a new recording URL. By default, the validity period of the recording receipt URL is three days.
   * > We recommend that you directly download the recording content using the recording receipt URL and save it locally, rather than relying on the receipt URL, to avoid issues caused by expiration.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > Throttling will be triggered if the total invocations from multiple users exceed the API frequency limit.
   * 
   * @param request - GetCallSoundRecordRequest
   * @returns GetCallSoundRecordResponse
   */
  async getCallSoundRecord(request: $_model.GetCallSoundRecordRequest): Promise<$_model.GetCallSoundRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCallSoundRecordWithOptions(request, runtime);
  }

  /**
   * Invoke the GetConfigNumList API to obtain the hotline settings number list.
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
   * Invoke the GetConfigNumList API to obtain the hotline settings number list.
   * 
   * @param request - GetConfigNumListRequest
   * @returns GetConfigNumListResponse
   */
  async getConfigNumList(request: $_model.GetConfigNumListRequest): Promise<$_model.GetConfigNumListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConfigNumListWithOptions(request, runtime);
  }

  /**
   * You can invoke the GetCustomerInfo API to obtain membership details by Workbench membership ID.
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
   * You can invoke the GetCustomerInfo API to obtain membership details by Workbench membership ID.
   * 
   * @param request - GetCustomerInfoRequest
   * @returns GetCustomerInfoResponse
   */
  async getCustomerInfo(request: $_model.GetCustomerInfoRequest): Promise<$_model.GetCustomerInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerInfoWithOptions(request, runtime);
  }

  /**
   * Queries skill group categories and the skill group list by AICCS instance ID and agent ID.
   * 
   * @remarks
   * - The skill groups returned by this API are grouped by department ID, which can be specified when you [create a skill group](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-createskillgroup).
   * - To query detailed skill group information, you can invoke the [QuerySkillGroups](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups) API.
   * - Before invoking this API, you should confirm the AICCS instance ID and agent ID. For guidance on how to obtain them, see the description of [Request Parameters](#api-detail-35).
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 1000 queries per second.
   * - API-wide invocation frequency: 1000 queries per second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Queries skill group categories and the skill group list by AICCS instance ID and agent ID.
   * 
   * @remarks
   * - The skill groups returned by this API are grouped by department ID, which can be specified when you [create a skill group](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-createskillgroup).
   * - To query detailed skill group information, you can invoke the [QuerySkillGroups](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups) API.
   * - Before invoking this API, you should confirm the AICCS instance ID and agent ID. For guidance on how to obtain them, see the description of [Request Parameters](#api-detail-35).
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 1000 queries per second.
   * - API-wide invocation frequency: 1000 queries per second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
   * 
   * @param request - GetDepGroupTreeDataRequest
   * @returns GetDepGroupTreeDataResponse
   */
  async getDepGroupTreeData(request: $_model.GetDepGroupTreeDataRequest): Promise<$_model.GetDepGroupTreeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDepGroupTreeDataWithOptions(request, runtime);
  }

  /**
   * Obtain department-level status metrics under hotline monitoring. Supports queries by instance, time range, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.  
   * - API-wide invocation frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Obtain department-level status metrics under hotline monitoring. Supports queries by instance, time range, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.  
   * - API-wide invocation frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
   * 
   * @param request - GetDepartmentalLatitudeAgentStatusRequest
   * @returns GetDepartmentalLatitudeAgentStatusResponse
   */
  async getDepartmentalLatitudeAgentStatus(request: $_model.GetDepartmentalLatitudeAgentStatusRequest): Promise<$_model.GetDepartmentalLatitudeAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDepartmentalLatitudeAgentStatusWithOptions(request, runtime);
  }

  /**
   * Obtain the current service details of a hotline agent based on the instance ID and agent account name.
   * 
   * @remarks
   * The hotline agent details include information such as agent posture status, agent ID, and heartbeat signature. For more information, see [Response parameters](#api-detail-40).  
   * ### Queries per second (QPS) limit  
   * - Per-user invocation frequency: Rate Limiting is not applied.  
   * - API frequency: 100 queries per second (QPS).  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Obtain the current service details of a hotline agent based on the instance ID and agent account name.
   * 
   * @remarks
   * The hotline agent details include information such as agent posture status, agent ID, and heartbeat signature. For more information, see [Response parameters](#api-detail-40).  
   * ### Queries per second (QPS) limit  
   * - Per-user invocation frequency: Rate Limiting is not applied.  
   * - API frequency: 100 queries per second (QPS).  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetHotlineAgentDetailRequest
   * @returns GetHotlineAgentDetailResponse
   */
  async getHotlineAgentDetail(request: $_model.GetHotlineAgentDetailRequest): Promise<$_model.GetHotlineAgentDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineAgentDetailWithOptions(request, runtime);
  }

  /**
   * Obtain detailed data metrics by hotline agent dimension (T+1). Supports grouping queries by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/document_detail/276009.html) and [created an instance](https://help.aliyun.com/document_detail/276011.html).
   * - If you need to specify department or skill group information, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * > Query logic priority:
   * > - If GroupIds is not empty, query data metrics under the specified skill groups.
   * > - Otherwise, if DepIds is not empty, query data metrics under the corresponding department groups.
   * > - Otherwise, query data metrics under the AICCS instance.
   * ### QPS Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 10 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Obtain detailed data metrics by hotline agent dimension (T+1). Supports grouping queries by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/document_detail/276009.html) and [created an instance](https://help.aliyun.com/document_detail/276011.html).
   * - If you need to specify department or skill group information, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * > Query logic priority:
   * > - If GroupIds is not empty, query data metrics under the specified skill groups.
   * > - Otherwise, if DepIds is not empty, query data metrics under the corresponding department groups.
   * > - Otherwise, query data metrics under the AICCS instance.
   * ### QPS Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 10 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetHotlineAgentDetailReportRequest
   * @returns GetHotlineAgentDetailReportResponse
   */
  async getHotlineAgentDetailReport(request: $_model.GetHotlineAgentDetailReportRequest): Promise<$_model.GetHotlineAgentDetailReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineAgentDetailReportWithOptions(request, runtime);
  }

  /**
   * Queries the hotline agent status in the Cloud Customer Service System by AICCS instance ID and agent account name.
   * 
   * @remarks
   * - Before invoking this API, confirm the AICCS instance information and the agent account name. For guidance on how to obtain these details, see the description in [Request Parameters](#api-detail-35).  
   * - To retrieve detailed information about a hotline agent, you can invoke the [GetHotlineAgentDetail](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-gethotlineagentdetail) API.  
   * ### Queries per second (QPS) Limit  
   * - Per-user invocation frequency: No rate limiting.  
   * - API-wide frequency: 200 queries per second.  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Queries the hotline agent status in the Cloud Customer Service System by AICCS instance ID and agent account name.
   * 
   * @remarks
   * - Before invoking this API, confirm the AICCS instance information and the agent account name. For guidance on how to obtain these details, see the description in [Request Parameters](#api-detail-35).  
   * - To retrieve detailed information about a hotline agent, you can invoke the [GetHotlineAgentDetail](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-gethotlineagentdetail) API.  
   * ### Queries per second (QPS) Limit  
   * - Per-user invocation frequency: No rate limiting.  
   * - API-wide frequency: 200 queries per second.  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetHotlineAgentStatusRequest
   * @returns GetHotlineAgentStatusResponse
   */
  async getHotlineAgentStatus(request: $_model.GetHotlineAgentStatusRequest): Promise<$_model.GetHotlineAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineAgentStatusWithOptions(request, runtime);
  }

  /**
   * Invoke the GetHotlineCallAction API to query the result data of call actions.
   * 
   * @remarks
   * ### Queries per second (QPS) limits  
   * - Per-user invocation frequency: 50 times/second.  
   * - API invocation frequency: 100 times/second.  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Invoke the GetHotlineCallAction API to query the result data of call actions.
   * 
   * @remarks
   * ### Queries per second (QPS) limits  
   * - Per-user invocation frequency: 50 times/second.  
   * - API invocation frequency: 100 times/second.  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetHotlineCallActionRequest
   * @returns GetHotlineCallActionResponse
   */
  async getHotlineCallAction(request: $_model.GetHotlineCallActionRequest): Promise<$_model.GetHotlineCallActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineCallActionWithOptions(request, runtime);
  }

  /**
   * Retrieve detailed (T+1) data by hotline skill group dimension. Supports grouping by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/document_detail/276009.html) and [created an instance](https://help.aliyun.com/document_detail/276011.html).  
   * - If you need to specify agent, department, or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No Rate Limiting.  
   * - API frequency: 10 queries per second.
   * > Throttle will be triggered if the total invocations from multiple users exceed the API frequency limit.
   * 
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
   * Retrieve detailed (T+1) data by hotline skill group dimension. Supports grouping by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/document_detail/276009.html) and [created an instance](https://help.aliyun.com/document_detail/276011.html).  
   * - If you need to specify agent, department, or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No Rate Limiting.  
   * - API frequency: 10 queries per second.
   * > Throttle will be triggered if the total invocations from multiple users exceed the API frequency limit.
   * 
   * @param request - GetHotlineGroupDetailReportRequest
   * @returns GetHotlineGroupDetailReportResponse
   */
  async getHotlineGroupDetailReport(request: $_model.GetHotlineGroupDetailReportRequest): Promise<$_model.GetHotlineGroupDetailReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineGroupDetailReportWithOptions(request, runtime);
  }

  /**
   * Invoke the GetHotlineMessageLog API to retrieve hotline message records.
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
   * Invoke the GetHotlineMessageLog API to retrieve hotline message records.
   * 
   * @param request - GetHotlineMessageLogRequest
   * @returns GetHotlineMessageLogResponse
   */
  async getHotlineMessageLog(request: $_model.GetHotlineMessageLogRequest): Promise<$_model.GetHotlineMessageLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineMessageLogWithOptions(request, runtime);
  }

  /**
   * Invoke the GetHotlineRuntimeInfo API to query hotline runtime information.
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
   * Invoke the GetHotlineRuntimeInfo API to query hotline runtime information.
   * 
   * @param request - GetHotlineRuntimeInfoRequest
   * @returns GetHotlineRuntimeInfoResponse
   */
  async getHotlineRuntimeInfo(request: $_model.GetHotlineRuntimeInfoRequest): Promise<$_model.GetHotlineRuntimeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineRuntimeInfoWithOptions(request, runtime);
  }

  /**
   * Obtain service statistics under hotline monitoring. Supports grouped queries by instance, time dimension, agent, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to provide agent, department, or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
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
   * Obtain service statistics under hotline monitoring. Supports grouped queries by instance, time dimension, agent, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to provide agent, department, or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
   * 
   * @param request - GetHotlineServiceStatisticsRequest
   * @returns GetHotlineServiceStatisticsResponse
   */
  async getHotlineServiceStatistics(request: $_model.GetHotlineServiceStatisticsRequest): Promise<$_model.GetHotlineServiceStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineServiceStatisticsWithOptions(request, runtime);
  }

  /**
   * Obtain the queue length of hotline members.
   * 
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
   * Obtain the queue length of hotline members.
   * 
   * @param request - GetHotlineWaitingNumberRequest
   * @returns GetHotlineWaitingNumberResponse
   */
  async getHotlineWaitingNumber(request: $_model.GetHotlineWaitingNumberRequest): Promise<$_model.GetHotlineWaitingNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineWaitingNumberWithOptions(request, runtime);
  }

  /**
   * You can obtain the current statistical metrics (real-time data) and query them by instance ID, department, or skill group.
   * 
   * @remarks
   * - The current data statistics metrics include cumulative metrics for the day and real-time metrics.  
   * - If you need to specify department or skill group information, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * > Query logic priority:  
   * > - If GroupIds is not empty, query the data metrics for the specified skill groups.  
   * > - Otherwise, if DepIds is not empty, query the data metrics for the specified departments.  
   * > - Otherwise, query the data metrics for the Artificial Intelligence Cloud Call Service (AICCS) instance.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.  
   * - API frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * You can obtain the current statistical metrics (real-time data) and query them by instance ID, department, or skill group.
   * 
   * @remarks
   * - The current data statistics metrics include cumulative metrics for the day and real-time metrics.  
   * - If you need to specify department or skill group information, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * > Query logic priority:  
   * > - If GroupIds is not empty, query the data metrics for the specified skill groups.  
   * > - Otherwise, if DepIds is not empty, query the data metrics for the specified departments.  
   * > - Otherwise, query the data metrics for the Artificial Intelligence Cloud Call Service (AICCS) instance.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.  
   * - API frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Invoke the GetMcuLvsIp API to query the hotline server IP address.
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
   * Invoke the GetMcuLvsIp API to query the hotline server IP address.
   * 
   * @param request - GetMcuLvsIpRequest
   * @returns GetMcuLvsIpResponse
   */
  async getMcuLvsIp(request: $_model.GetMcuLvsIpRequest): Promise<$_model.GetMcuLvsIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMcuLvsIpWithOptions(request, runtime);
  }

  /**
   * Obtain the number\\"s归属地 information based on the instance ID and phone number.
   * 
   * @remarks
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Obtain the number\\"s归属地 information based on the instance ID and phone number.
   * 
   * @remarks
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetNumLocationRequest
   * @returns GetNumLocationResponse
   */
  async getNumLocation(request: $_model.GetNumLocationRequest): Promise<$_model.GetNumLocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNumLocationWithOptions(request, runtime);
  }

  /**
   * Obtain online agent information data under real-time monitoring. Support queries by instance, time range, agent, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify agent or department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
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
   * Obtain online agent information data under real-time monitoring. Support queries by instance, time range, agent, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify agent or department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
   * 
   * @param request - GetOnlineSeatInformationRequest
   * @returns GetOnlineSeatInformationResponse
   */
  async getOnlineSeatInformation(request: $_model.GetOnlineSeatInformationRequest): Promise<$_model.GetOnlineSeatInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOnlineSeatInformationWithOptions(request, runtime);
  }

  /**
   * Obtain the volume of Online Services under online monitoring. Support grouped queries by instance, time range, agent, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify agent, department, or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Obtain the volume of Online Services under online monitoring. Support grouped queries by instance, time range, agent, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify agent, department, or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
   * 
   * @param request - GetOnlineServiceVolumeRequest
   * @returns GetOnlineServiceVolumeResponse
   */
  async getOnlineServiceVolume(request: $_model.GetOnlineServiceVolumeRequest): Promise<$_model.GetOnlineServiceVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOnlineServiceVolumeWithOptions(request, runtime);
  }

  /**
   * Retrieve the list of external hotline numbers.
   * 
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
   * Retrieve the list of external hotline numbers.
   * 
   * @param request - GetOutbounNumListRequest
   * @returns GetOutbounNumListResponse
   */
  async getOutbounNumList(request: $_model.GetOutbounNumListRequest): Promise<$_model.GetOutbounNumListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOutbounNumListWithOptions(request, runtime);
  }

  /**
   * Invoke GetQualityProjectDetail to obtain the quality inspection job details.
   * 
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
   * Invoke GetQualityProjectDetail to obtain the quality inspection job details.
   * 
   * @param request - GetQualityProjectDetailRequest
   * @returns GetQualityProjectDetailResponse
   */
  async getQualityProjectDetail(request: $_model.GetQualityProjectDetailRequest): Promise<$_model.GetQualityProjectDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityProjectDetailWithOptions(request, runtime);
  }

  /**
   * Invoke GetQualityProjectList to obtain the quality inspection job list.
   * 
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
   * Invoke GetQualityProjectList to obtain the quality inspection job list.
   * 
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
   * Obtain queue information under the skill group dimension in online monitoring. Supports queries grouped by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Obtain queue information under the skill group dimension in online monitoring. Supports queries grouped by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
   * 
   * @param request - GetQueueInformationRequest
   * @returns GetQueueInformationResponse
   */
  async getQueueInformation(request: $_model.GetQueueInformationRequest): Promise<$_model.GetQueueInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueueInformationWithOptions(request, runtime);
  }

  /**
   * Invoke the GetRecordData API to obtain a recording file.
   * 
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
   * Invoke the GetRecordData API to obtain a recording file.
   * 
   * @param request - GetRecordDataRequest
   * @returns GetRecordDataResponse
   */
  async getRecordData(request: $_model.GetRecordDataRequest): Promise<$_model.GetRecordDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordDataWithOptions(request, runtime);
  }

  /**
   * Invoke the GetRecordUrl API to obtain the incoming and outgoing calls recording link.
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
   * Invoke the GetRecordUrl API to obtain the incoming and outgoing calls recording link.
   * 
   * @param request - GetRecordUrlRequest
   * @returns GetRecordUrlResponse
   */
  async getRecordUrl(request: $_model.GetRecordUrlRequest): Promise<$_model.GetRecordUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordUrlWithOptions(request, runtime);
  }

  /**
   * Invoke GetRtcToken to obtain the token for a shift agent.
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
   * Invoke GetRtcToken to obtain the token for a shift agent.
   * 
   * @param request - GetRtcTokenRequest
   * @returns GetRtcTokenResponse
   */
  async getRtcToken(request: $_model.GetRtcTokenRequest): Promise<$_model.GetRtcTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRtcTokenWithOptions(request, runtime);
  }

  /**
   * Obtain agent service capacity data under online monitoring. Supports queries by instance, time range, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Obtain agent service capacity data under online monitoring. Supports queries by instance, time range, and department group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
   * 
   * @param request - GetSeatInformationRequest
   * @returns GetSeatInformationResponse
   */
  async getSeatInformation(request: $_model.GetSeatInformationRequest): Promise<$_model.GetSeatInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSeatInformationWithOptions(request, runtime);
  }

  /**
   * Obtain the service status metrics of skill groups. Support grouped queries by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Obtain the service status metrics of skill groups. Support grouped queries by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
   * 
   * @param request - GetSkillGroupAgentStatusDetailsRequest
   * @returns GetSkillGroupAgentStatusDetailsResponse
   */
  async getSkillGroupAgentStatusDetails(request: $_model.GetSkillGroupAgentStatusDetailsRequest): Promise<$_model.GetSkillGroupAgentStatusDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupAgentStatusDetailsWithOptions(request, runtime);
  }

  /**
   * Obtain the aggregated agent status metrics for skill groups under hotline monitoring. Supports grouped queries by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
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
   * Obtain the aggregated agent status metrics for skill groups under hotline monitoring. Supports grouped queries by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
   * 
   * @param request - GetSkillGroupAndAgentStatusSummaryRequest
   * @returns GetSkillGroupAndAgentStatusSummaryResponse
   */
  async getSkillGroupAndAgentStatusSummary(request: $_model.GetSkillGroupAndAgentStatusSummaryRequest): Promise<$_model.GetSkillGroupAndAgentStatusSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupAndAgentStatusSummaryWithOptions(request, runtime);
  }

  /**
   * Obtain the hotline monitoring status metrics by skill group dimension. Supports queries grouped by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Obtain the hotline monitoring status metrics by skill group dimension. Supports queries grouped by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetSkillGroupLatitudeStateRequest
   * @returns GetSkillGroupLatitudeStateResponse
   */
  async getSkillGroupLatitudeState(request: $_model.GetSkillGroupLatitudeStateRequest): Promise<$_model.GetSkillGroupLatitudeStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupLatitudeStateWithOptions(request, runtime);
  }

  /**
   * Retrieve skill group–level service capacity data under online monitoring. Supports queries grouped by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
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
   * Retrieve skill group–level service capacity data under online monitoring. Supports queries grouped by instance, time range, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify department or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
   * 
   * @param request - GetSkillGroupServiceCapabilityRequest
   * @returns GetSkillGroupServiceCapabilityResponse
   */
  async getSkillGroupServiceCapability(request: $_model.GetSkillGroupServiceCapabilityRequest): Promise<$_model.GetSkillGroupServiceCapabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupServiceCapabilityWithOptions(request, runtime);
  }

  /**
   * Obtain the service status metrics of skill groups in online reports.
   * 
   * @remarks
   * ### Queries per second (QPS) limits  
   * - Per-user invocation frequency: 100 times per second.  
   * - API invocation frequency: 100 times per second.  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Obtain the service status metrics of skill groups in online reports.
   * 
   * @remarks
   * ### Queries per second (QPS) limits  
   * - Per-user invocation frequency: 100 times per second.  
   * - API invocation frequency: 100 times per second.  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - GetSkillGroupServiceStatusRequest
   * @returns GetSkillGroupServiceStatusResponse
   */
  async getSkillGroupServiceStatus(request: $_model.GetSkillGroupServiceStatusRequest): Promise<$_model.GetSkillGroupServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupServiceStatusWithOptions(request, runtime);
  }

  /**
   * Obtain the total status count of skill groups under hotline reports. Supports grouped queries by instance, time range, agent, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify agent, department, or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > Throttling will be triggered if the total invocations from multiple users exceed the API frequency limit.
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
   * Obtain the total status count of skill groups under hotline reports. Supports grouped queries by instance, time range, agent, department, and skill group.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have [activated the service](https://help.aliyun.com/zh/aiccs/user-guide/activate-aiccs?spm=a2c4g.11186623.0.0.38365923RQDwdH) and [created an instance](https://help.aliyun.com/zh/aiccs/user-guide/create-an-instance?spm=a2c4g.11186623.0.0.8e0b5a2fWNeRUn).  
   * - If you need to specify agent, department, or skill group information, refer to the guidance in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times per second.  
   * - API-wide invocation frequency: 100 times per second.  
   * > Throttling will be triggered if the total invocations from multiple users exceed the API frequency limit.
   * 
   * @param request - GetSkillGroupStatusTotalRequest
   * @returns GetSkillGroupStatusTotalResponse
   */
  async getSkillGroupStatusTotal(request: $_model.GetSkillGroupStatusTotalRequest): Promise<$_model.GetSkillGroupStatusTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupStatusTotalWithOptions(request, runtime);
  }

  /**
   * Cancel dual-call.
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
   * Cancel dual-call.
   * 
   * @param request - HangUpDoubleCallRequest
   * @returns HangUpDoubleCallResponse
   */
  async hangUpDoubleCall(request: $_model.HangUpDoubleCallRequest): Promise<$_model.HangUpDoubleCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangUpDoubleCallWithOptions(request, runtime);
  }

  /**
   * Invoke HangupCall to execute the agent hang-up operation.
   * 
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
   * Invoke HangupCall to execute the agent hang-up operation.
   * 
   * @param request - HangupCallRequest
   * @returns HangupCallResponse
   */
  async hangupCall(request: $_model.HangupCallRequest): Promise<$_model.HangupCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangupCallWithOptions(request, runtime);
  }

  /**
   * Hangs up a call in Communication Intelligence Engine.
   * 
   * @remarks
   * - Before you hang up a call in Communication Intelligence Engine, ensure that a call has been initiated by a large model.
   * - If a call has not been initiated, use the [LlmSmartCall](https://help.aliyun.com/document_detail/2862828.html) or [LlmSmartCallEncrypt](https://help.aliyun.com/document_detail/2881065.html) operation to do so.
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
   * Hangs up a call in Communication Intelligence Engine.
   * 
   * @remarks
   * - Before you hang up a call in Communication Intelligence Engine, ensure that a call has been initiated by a large model.
   * - If a call has not been initiated, use the [LlmSmartCall](https://help.aliyun.com/document_detail/2862828.html) or [LlmSmartCallEncrypt](https://help.aliyun.com/document_detail/2881065.html) operation to do so.
   * 
   * @param request - HangupOperateRequest
   * @returns HangupOperateResponse
   */
  async hangupOperate(request: $_model.HangupOperateRequest): Promise<$_model.HangupOperateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangupOperateWithOptions(request, runtime);
  }

  /**
   * Hang up a third-party call.
   * 
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
   * Hang up a third-party call.
   * 
   * @param request - HangupThirdCallRequest
   * @returns HangupThirdCallResponse
   */
  async hangupThirdCall(request: $_model.HangupThirdCallRequest): Promise<$_model.HangupThirdCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hangupThirdCallWithOptions(request, runtime);
  }

  /**
   * Hold the call.
   * 
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
   * Hold the call.
   * 
   * @param request - HoldCallRequest
   * @returns HoldCallResponse
   */
  async holdCall(request: $_model.HoldCallRequest): Promise<$_model.HoldCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.holdCallWithOptions(request, runtime);
  }

  /**
   * Query call details by instance ID.
   * 
   * @remarks
   * Call details include the total number of records, call result, agent name, call time, and other information.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No Rate Limiting.
   * - API frequency: 80 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency, throttling will be triggered.
   * 
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
   * Query call details by instance ID.
   * 
   * @remarks
   * Call details include the total number of records, call result, agent name, call time, and other information.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No Rate Limiting.
   * - API frequency: 80 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency, throttling will be triggered.
   * 
   * @param request - HotlineSessionQueryRequest
   * @returns HotlineSessionQueryResponse
   */
  async hotlineSessionQuery(request: $_model.HotlineSessionQueryRequest): Promise<$_model.HotlineSessionQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.hotlineSessionQueryWithOptions(request, runtime);
  }

  /**
   * Imports a single phone number to a task.
   * 
   * @param tmpReq - ImportOneTaskPhoneNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportOneTaskPhoneNumberResponse
   */
  async importOneTaskPhoneNumberWithOptions(tmpReq: $_model.ImportOneTaskPhoneNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportOneTaskPhoneNumberResponse> {
    tmpReq.validate();
    let request = new $_model.ImportOneTaskPhoneNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.variables)) {
      request.variablesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.variables, "Variables", "json");
    }

    let query = { };
    if (!$dara.isNull(request.encryptionType)) {
      query["EncryptionType"] = request.encryptionType;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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

    if (!$dara.isNull(request.variablesShrink)) {
      query["Variables"] = request.variablesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportOneTaskPhoneNumber",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportOneTaskPhoneNumberResponse>(await this.callApi(params, req, runtime), new $_model.ImportOneTaskPhoneNumberResponse({}));
  }

  /**
   * Imports a single phone number to a task.
   * 
   * @param request - ImportOneTaskPhoneNumberRequest
   * @returns ImportOneTaskPhoneNumberResponse
   */
  async importOneTaskPhoneNumber(request: $_model.ImportOneTaskPhoneNumberRequest): Promise<$_model.ImportOneTaskPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importOneTaskPhoneNumberWithOptions(request, runtime);
  }

  /**
   * Imports callee data for a call task.
   * 
   * @remarks
   * - You can import callee data by calling this operation. Alternatively, go to the **call task management** page, click **Import Callee Data**, download the template, and then upload your file.
   * - This API operation currently supports only the JSON data type for importing callee data.
   * - Ensure that you have created a call task before you call this operation.
   * - To create a call task, go to the **call task management** page and click **Create Call Task**, or call the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) operation.
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

    if (!$dara.isNull(request.encryptionType)) {
      query["EncryptionType"] = request.encryptionType;
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
   * Imports callee data for a call task.
   * 
   * @remarks
   * - You can import callee data by calling this operation. Alternatively, go to the **call task management** page, click **Import Callee Data**, download the template, and then upload your file.
   * - This API operation currently supports only the JSON data type for importing callee data.
   * - Ensure that you have created a call task before you call this operation.
   * - To create a call task, go to the **call task management** page and click **Create Call Task**, or call the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) operation.
   * 
   * @param request - ImportTaskNumberDatasRequest
   * @returns ImportTaskNumberDatasResponse
   */
  async importTaskNumberDatas(request: $_model.ImportTaskNumberDatasRequest): Promise<$_model.ImportTaskNumberDatasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importTaskNumberDatasWithOptions(request, runtime);
  }

  /**
   * Import outbound call callee numbers based on the instance ID and job ID.
   * 
   * @remarks
   * - After importing outbound call callee numbers, the outbound calling job can operate normally.  
   * - Before invoking this API, we recommend that you confirm the instance ID and job ID. For more information, see [Request Parameters](#api-detail-35).  
   * ### Queries per second (QPS) limits  
   * - Per-user invocation frequency: 20 times/second.  
   * - API invocation frequency: 50 times/second.  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Import outbound call callee numbers based on the instance ID and job ID.
   * 
   * @remarks
   * - After importing outbound call callee numbers, the outbound calling job can operate normally.  
   * - Before invoking this API, we recommend that you confirm the instance ID and job ID. For more information, see [Request Parameters](#api-detail-35).  
   * ### Queries per second (QPS) limits  
   * - Per-user invocation frequency: 20 times/second.  
   * - API invocation frequency: 50 times/second.  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Add a third party to the call.
   * 
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
   * Add a third party to the call.
   * 
   * @param request - JoinThirdCallRequest
   * @returns JoinThirdCallResponse
   */
  async joinThirdCall(request: $_model.JoinThirdCallRequest): Promise<$_model.JoinThirdCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.joinThirdCallWithOptions(request, runtime);
  }

  /**
   * Query the agent list in the Cloud Customer Service System by AICCS instance ID and skill group ID.
   * 
   * @remarks
   * - Before invoking this API, confirm the AICCS instance information and skill group information. For guidance on how to obtain these details, refer to the description of [Request Parameters](#api-detail-35).
   * - If an agent is not assigned to any skill group, you can invoke [GetAgent](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-getagent) to query the agent information.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Query the agent list in the Cloud Customer Service System by AICCS instance ID and skill group ID.
   * 
   * @remarks
   * - Before invoking this API, confirm the AICCS instance information and skill group information. For guidance on how to obtain these details, refer to the description of [Request Parameters](#api-detail-35).
   * - If an agent is not assigned to any skill group, you can invoke [GetAgent](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-getagent) to query the agent information.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - ListAgentBySkillGroupIdRequest
   * @returns ListAgentBySkillGroupIdResponse
   */
  async listAgentBySkillGroupId(request: $_model.ListAgentBySkillGroupIdRequest): Promise<$_model.ListAgentBySkillGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentBySkillGroupIdWithOptions(request, runtime);
  }

  /**
   * Retrieve the list of robot scripts, including robot type, robot name, robot ID, associated business, and industry information.
   * 
   * @remarks
   * - Before invoking this API, ensure that you already have scripts that have passed the Review.
   * - If you do not have any scripts that have passed the Review, add a script and submit it for Review in the [Script Management](https://aiccs.console.aliyun.com/patter/list) interface first.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No Rate Limiting.
   * - API frequency: 500 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttle will be triggered.
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
   * Retrieve the list of robot scripts, including robot type, robot name, robot ID, associated business, and industry information.
   * 
   * @remarks
   * - Before invoking this API, ensure that you already have scripts that have passed the Review.
   * - If you do not have any scripts that have passed the Review, add a script and submit it for Review in the [Script Management](https://aiccs.console.aliyun.com/patter/list) interface first.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No Rate Limiting.
   * - API frequency: 500 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttle will be triggered.
   * 
   * @param request - ListAiccsRobotRequest
   * @returns ListAiccsRobotResponse
   */
  async listAiccsRobot(request: $_model.ListAiccsRobotRequest): Promise<$_model.ListAiccsRobotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAiccsRobotWithOptions(request, runtime);
  }

  /**
   * Lists the system and custom TTS voices available for large model-based outbound calls.
   * 
   * @remarks
   * If you have not created and published any custom voices on the [Custom Voice](https://aiccs.console.aliyun.com/engine/voiceprint) page, the operation returns only system voices.
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

    if (!$dara.isNull(request.voiceType)) {
      query["VoiceType"] = request.voiceType;
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
   * Lists the system and custom TTS voices available for large model-based outbound calls.
   * 
   * @remarks
   * If you have not created and published any custom voices on the [Custom Voice](https://aiccs.console.aliyun.com/engine/voiceprint) page, the operation returns only system voices.
   * 
   * @param request - ListAvailableTtsRequest
   * @returns ListAvailableTtsResponse
   */
  async listAvailableTts(request: $_model.ListAvailableTtsRequest): Promise<$_model.ListAvailableTtsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvailableTtsWithOptions(request, runtime);
  }

  /**
   * Invoke ListChatRecordDetail to query online session details by time period.
   * 
   * @remarks
   * This API queries information about completed online sessions within a specified time range, including session content. The query rules are as follows:  
   * - The maximum time span for the query is 1 Day.  
   * - If only the query End Time is provided, the query Start Time is set to 1 hour before the End Time.  
   * - If only the query Start Time is provided, the End Time is set to 1 hour after the Start Time.  
   * - If neither time is provided, the End Time defaults to the current time, and the Start Time is set to 1 hour before the End Time.  
   * - If both times are provided but the time span exceeds 1 Day, an abnormal response is returned.
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
   * Invoke ListChatRecordDetail to query online session details by time period.
   * 
   * @remarks
   * This API queries information about completed online sessions within a specified time range, including session content. The query rules are as follows:  
   * - The maximum time span for the query is 1 Day.  
   * - If only the query End Time is provided, the query Start Time is set to 1 hour before the End Time.  
   * - If only the query Start Time is provided, the End Time is set to 1 hour after the Start Time.  
   * - If neither time is provided, the End Time defaults to the current time, and the Start Time is set to 1 hour before the End Time.  
   * - If both times are provided but the time span exceeds 1 Day, an abnormal response is returned.
   * 
   * @param request - ListChatRecordDetailRequest
   * @returns ListChatRecordDetailResponse
   */
  async listChatRecordDetail(request: $_model.ListChatRecordDetailRequest): Promise<$_model.ListChatRecordDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatRecordDetailWithOptions(request, runtime);
  }

  /**
   * Query Intelligent Contact Bot conversation records.
   * 
   * @remarks
   * - You can invoke this API to query Intelligent Contact Bot conversation records, or view them in the **Task Management** > **Details** > **View Conversation Records** interface.
   * - Before invoking this API, ensure that your created Intelligent Contact Bot calling job has successfully connected to at least one phone number.
   * - If you do not have an existing Intelligent Contact Bot calling job, you can create and start a job in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface, or use the [CreateTask](https://help.aliyun.com/document_detail/2718003.html) and [StartTask](https://help.aliyun.com/document_detail/2718005.html) APIs to create and start a job.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Query Intelligent Contact Bot conversation records.
   * 
   * @remarks
   * - You can invoke this API to query Intelligent Contact Bot conversation records, or view them in the **Task Management** > **Details** > **View Conversation Records** interface.
   * - Before invoking this API, ensure that your created Intelligent Contact Bot calling job has successfully connected to at least one phone number.
   * - If you do not have an existing Intelligent Contact Bot calling job, you can create and start a job in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface, or use the [CreateTask](https://help.aliyun.com/document_detail/2718003.html) and [StartTask](https://help.aliyun.com/document_detail/2718005.html) APIs to create and start a job.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - ListDialogRequest
   * @returns ListDialogResponse
   */
  async listDialog(request: $_model.ListDialogRequest): Promise<$_model.ListDialogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDialogWithOptions(request, runtime);
  }

  /**
   * Invoke ListHotlineRecord to query the hotline recording list by hotline session ID.
   * 
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
   * Invoke ListHotlineRecord to query the hotline recording list by hotline session ID.
   * 
   * @param request - ListHotlineRecordRequest
   * @returns ListHotlineRecordResponse
   */
  async listHotlineRecord(request: $_model.ListHotlineRecordRequest): Promise<$_model.ListHotlineRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotlineRecordWithOptions(request, runtime);
  }

  /**
   * Query the list of hotline details by time period.
   * 
   * @remarks
   * This API queries detailed hotline information within a specified time range, including hotline call information. The query rules are as follows:  
   * - The maximum time span for the query is 1 Day.  
   * - If only the query End Time is provided, the query Start Time is set to 1 hour before the End Time.  
   * - If only the query Start Time is provided, the End Time is set to 1 hour after the Start Time.  
   * - If neither time is provided, the End Time defaults to the current time, and the Start Time is set to 1 hour before the End Time.  
   * - If both times are provided but the time span exceeds 1 Day, an abnormal result is returned.
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
   * Query the list of hotline details by time period.
   * 
   * @remarks
   * This API queries detailed hotline information within a specified time range, including hotline call information. The query rules are as follows:  
   * - The maximum time span for the query is 1 Day.  
   * - If only the query End Time is provided, the query Start Time is set to 1 hour before the End Time.  
   * - If only the query Start Time is provided, the End Time is set to 1 hour after the Start Time.  
   * - If neither time is provided, the End Time defaults to the current time, and the Start Time is set to 1 hour before the End Time.  
   * - If both times are provided but the time span exceeds 1 Day, an abnormal result is returned.
   * 
   * @param request - ListHotlineRecordDetailRequest
   * @returns ListHotlineRecordDetailResponse
   */
  async listHotlineRecordDetail(request: $_model.ListHotlineRecordDetailRequest): Promise<$_model.ListHotlineRecordDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotlineRecordDetailWithOptions(request, runtime);
  }

  /**
   * Obtain the outbound caller phone numbers for a specified agent based on the instance ID and agent account name.
   * 
   * @remarks
   * ### Queries per second (QPS) limit
   * - Per-user API call frequency: No rate limiting.
   * - API frequency: 100 calls per second.
   * > If the total calls from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Obtain the outbound caller phone numbers for a specified agent based on the instance ID and agent account name.
   * 
   * @remarks
   * ### Queries per second (QPS) limit
   * - Per-user API call frequency: No rate limiting.
   * - API frequency: 100 calls per second.
   * > If the total calls from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - ListOutboundPhoneNumberRequest
   * @returns ListOutboundPhoneNumberResponse
   */
  async listOutboundPhoneNumber(request: $_model.ListOutboundPhoneNumberRequest): Promise<$_model.ListOutboundPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOutboundPhoneNumberWithOptions(request, runtime);
  }

  /**
   * Query Intelligent Contact Robot call records.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have already initiated an outbound job using the Intelligent Contact Robot.
   * - If you have not yet initiated an outbound job using the Intelligent Contact Robot, you can invoke the [RobotCall](https://help.aliyun.com/document_detail/2717996.html) API to start one.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Query Intelligent Contact Robot call records.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have already initiated an outbound job using the Intelligent Contact Robot.
   * - If you have not yet initiated an outbound job using the Intelligent Contact Robot, you can invoke the [RobotCall](https://help.aliyun.com/document_detail/2717996.html) API to start one.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - ListRobotCallDialogRequest
   * @returns ListRobotCallDialogResponse
   */
  async listRobotCallDialog(request: $_model.ListRobotCallDialogRequest): Promise<$_model.ListRobotCallDialogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRobotCallDialogWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of robot node information based on the robot ID, which is the script ID.
   * 
   * @remarks
   * - Robot node information includes flow name, model name, node name, whether it is an output, and output ID.  
   * - Before invoking this API, you can confirm the robot ID (that is, the script ID) by following the instructions in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Retrieves the list of robot node information based on the robot ID, which is the script ID.
   * 
   * @remarks
   * - Robot node information includes flow name, model name, node name, whether it is an output, and output ID.  
   * - Before invoking this API, you can confirm the robot ID (that is, the script ID) by following the instructions in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - ListRobotNodeRequest
   * @returns ListRobotNodeResponse
   */
  async listRobotNode(request: $_model.ListRobotNodeRequest): Promise<$_model.ListRobotNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRobotNodeWithOptions(request, runtime);
  }

  /**
   * Queries the list of robot parameters by robot ID, which is also the script ID.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have already added input parameters for the robot.
   * - If your robot does not have any input parameters, go to the [**Script Management**](https://aiccs.console.aliyun.com/patter/list) > **Configuration** > **Input and Output Parameters** interface and click to add an input parameter.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttle will be triggered.
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
   * Queries the list of robot parameters by robot ID, which is also the script ID.
   * 
   * @remarks
   * - Before invoking this API, ensure that you have already added input parameters for the robot.
   * - If your robot does not have any input parameters, go to the [**Script Management**](https://aiccs.console.aliyun.com/patter/list) > **Configuration** > **Input and Output Parameters** interface and click to add an input parameter.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttle will be triggered.
   * 
   * @param request - ListRobotParamsRequest
   * @returns ListRobotParamsResponse
   */
  async listRobotParams(request: $_model.ListRobotParamsRequest): Promise<$_model.ListRobotParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRobotParamsWithOptions(request, runtime);
  }

  /**
   * Invoke ListRoles to obtain the list of all roles under a tenant.
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
   * Invoke ListRoles to obtain the list of all roles under a tenant.
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: $_model.ListRolesRequest): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  /**
   * Query skill groups in the Cloud Customer Service System by instance ID and skill group channel type.
   * 
   * @remarks
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Query skill groups in the Cloud Customer Service System by instance ID and skill group channel type.
   * 
   * @remarks
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - ListSkillGroupRequest
   * @returns ListSkillGroupResponse
   */
  async listSkillGroup(request: $_model.ListSkillGroupRequest): Promise<$_model.ListSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillGroupWithOptions(request, runtime);
  }

  /**
   * Perform a paged query to retrieve the list of Intelligent Contact Robot call jobs. The response includes the total number of jobs and job details.
   * 
   * @remarks
   * - You can use this API to obtain the list of Intelligent Contact Robot call jobs, or retrieve the job list from the [Task Management](https://aiccs.console.aliyun.com/job/list) interface.
   * - If you have not created any Intelligent Contact Robot call jobs, you can click **Create Job** in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface or create a job by invoking the [CreateTask](https://help.aliyun.com/document_detail/2718003.html) API.
   * - The optional parameters of this API serve as Filter Conditions for the Intelligent Contact Robot call job list. If these parameters are not specified, the API queries all jobs.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No Rate Limiting.
   * - API frequency: 500 calls per second.
   * > If the combined invocations from multiple users exceed the API frequency limit, throttle will be triggered.
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
   * Perform a paged query to retrieve the list of Intelligent Contact Robot call jobs. The response includes the total number of jobs and job details.
   * 
   * @remarks
   * - You can use this API to obtain the list of Intelligent Contact Robot call jobs, or retrieve the job list from the [Task Management](https://aiccs.console.aliyun.com/job/list) interface.
   * - If you have not created any Intelligent Contact Robot call jobs, you can click **Create Job** in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface or create a job by invoking the [CreateTask](https://help.aliyun.com/document_detail/2718003.html) API.
   * - The optional parameters of this API serve as Filter Conditions for the Intelligent Contact Robot call job list. If these parameters are not specified, the API queries all jobs.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No Rate Limiting.
   * - API frequency: 500 calls per second.
   * > If the combined invocations from multiple users exceed the API frequency limit, throttle will be triggered.
   * 
   * @param request - ListTaskRequest
   * @returns ListTaskResponse
   */
  async listTask(request: $_model.ListTaskRequest): Promise<$_model.ListTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskWithOptions(request, runtime);
  }

  /**
   * Obtain the detail information of Intelligent Contact Robot call jobs.
   * 
   * @remarks
   * - You can invoke this API to obtain the detail information of Intelligent Contact Robot call jobs. Alternatively, you can view this information in the **Detail** interface under [**Task Management**](https://aiccs.console.aliyun.com/job/list).
   * - Before invoking this API, ensure that you have created an Intelligent Contact Robot and successfully started a job.
   * - If you do not have any successfully created Intelligent Contact Robot call jobs, you can create and start a job in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface, or use the [CreateTask](https://help.aliyun.com/document_detail/2718003.html) and [StartTask](https://help.aliyun.com/document_detail/2718005.html) APIs to create and start a job.
   * - The optional parameters in this API serve as filter conditions for the detail information of Intelligent Contact Robot call jobs. If these parameters are not specified, all job details will be queried.
   * ### queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Obtain the detail information of Intelligent Contact Robot call jobs.
   * 
   * @remarks
   * - You can invoke this API to obtain the detail information of Intelligent Contact Robot call jobs. Alternatively, you can view this information in the **Detail** interface under [**Task Management**](https://aiccs.console.aliyun.com/job/list).
   * - Before invoking this API, ensure that you have created an Intelligent Contact Robot and successfully started a job.
   * - If you do not have any successfully created Intelligent Contact Robot call jobs, you can create and start a job in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface, or use the [CreateTask](https://help.aliyun.com/document_detail/2718003.html) and [StartTask](https://help.aliyun.com/document_detail/2718005.html) APIs to create and start a job.
   * - The optional parameters in this API serve as filter conditions for the detail information of Intelligent Contact Robot call jobs. If these parameters are not specified, all job details will be queried.
   * ### queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - ListTaskDetailRequest
   * @returns ListTaskDetailResponse
   */
  async listTaskDetail(request: $_model.ListTaskDetailRequest): Promise<$_model.ListTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskDetailWithOptions(request, runtime);
  }

  /**
   * Performs full-duplex large language model operations.
   * 
   * @remarks
   * - This operation can be called only during an intelligent outbound call. When you call this operation, set the **CallId** request parameter to the unique receipt ID of the ongoing call.
   * - **CallId** is the **CallId** parameter returned by the [LlmSmartCallFullDuplex](https://help.aliyun.com/document_detail/2718012.html) operation.
   * 
   * @param request - LlmFullDuplexCallOperateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LlmFullDuplexCallOperateResponse
   */
  async llmFullDuplexCallOperateWithOptions(request: $_model.LlmFullDuplexCallOperateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LlmFullDuplexCallOperateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LlmFullDuplexCallOperate",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LlmFullDuplexCallOperateResponse>(await this.callApi(params, req, runtime), new $_model.LlmFullDuplexCallOperateResponse({}));
  }

  /**
   * Performs full-duplex large language model operations.
   * 
   * @remarks
   * - This operation can be called only during an intelligent outbound call. When you call this operation, set the **CallId** request parameter to the unique receipt ID of the ongoing call.
   * - **CallId** is the **CallId** parameter returned by the [LlmSmartCallFullDuplex](https://help.aliyun.com/document_detail/2718012.html) operation.
   * 
   * @param request - LlmFullDuplexCallOperateRequest
   * @returns LlmFullDuplexCallOperateResponse
   */
  async llmFullDuplexCallOperate(request: $_model.LlmFullDuplexCallOperateRequest): Promise<$_model.LlmFullDuplexCallOperateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.llmFullDuplexCallOperateWithOptions(request, runtime);
  }

  /**
   * Intelligent outbound call based on an LLM.
   * 
   * @remarks
   * - Each API invocation supports adding only one called number. If you have multiple called numbers, invoke the API multiple times.
   * - Before initiating an intelligent call based on an LLM, ensure that you have created an LLM application in the [Application Management](https://aiccs.console.aliyun.com/engine/llmApp) interface and have successfully requested a real number in the Voice Service [Number Management](https://dyvmsnext.console.aliyun.com/number/list/normal) interface.
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
   * Intelligent outbound call based on an LLM.
   * 
   * @remarks
   * - Each API invocation supports adding only one called number. If you have multiple called numbers, invoke the API multiple times.
   * - Before initiating an intelligent call based on an LLM, ensure that you have created an LLM application in the [Application Management](https://aiccs.console.aliyun.com/engine/llmApp) interface and have successfully requested a real number in the Voice Service [Number Management](https://dyvmsnext.console.aliyun.com/number/list/normal) interface.
   * 
   * @param request - LlmSmartCallRequest
   * @returns LlmSmartCallResponse
   */
  async llmSmartCall(request: $_model.LlmSmartCallRequest): Promise<$_model.LlmSmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.llmSmartCallWithOptions(request, runtime);
  }

  /**
   * Initiates a smart call to an encrypted number using a large language model.
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
   * Initiates a smart call to an encrypted number using a large language model.
   * 
   * @param request - LlmSmartCallEncryptRequest
   * @returns LlmSmartCallEncryptResponse
   */
  async llmSmartCallEncrypt(request: $_model.LlmSmartCallEncryptRequest): Promise<$_model.LlmSmartCallEncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.llmSmartCallEncryptWithOptions(request, runtime);
  }

  /**
   * Initiates a full-duplex Artificial Intelligence Cloud Call Service call with support for personalized configurations.
   * 
   * @remarks
   * ## Operation description
   * - Before calling this operation, make sure that you have configured the ASR callback URL.
   * - This operation is available only to users whose UIDs are added to the whitelist.
   * - The request rate limit for a single user is 100 QPS.
   * - `CalledNumber` and `CallerNumber` are required parameters that specify the called number and the calling number, respectively.
   * - Optional parameters such as `StartWordParam`, `TtsVoiceCode`, `TtsSpeed`, and `TtsVolume` allow you to customize the call experience. If these parameters are not specified, the default settings of the application are used.
   * - The `SessionTimeout` parameter specifies the maximum call duration in seconds. The call is automatically ended when the specified duration is exceeded. For the default value and valid range, refer to the relevant documentation.
   * - The `OutId` field can be used to track a unique identifier in an external system. The value must be 1 to 32 bytes in length.
   * 
   * @param tmpReq - LlmSmartCallFullDuplexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LlmSmartCallFullDuplexResponse
   */
  async llmSmartCallFullDuplexWithOptions(tmpReq: $_model.LlmSmartCallFullDuplexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LlmSmartCallFullDuplexResponse> {
    tmpReq.validate();
    let request = new $_model.LlmSmartCallFullDuplexShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.startWordParam)) {
      request.startWordParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startWordParam, "StartWordParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationCode)) {
      query["ApplicationCode"] = request.applicationCode;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callerNumber)) {
      query["CallerNumber"] = request.callerNumber;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
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
      action: "LlmSmartCallFullDuplex",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LlmSmartCallFullDuplexResponse>(await this.callApi(params, req, runtime), new $_model.LlmSmartCallFullDuplexResponse({}));
  }

  /**
   * Initiates a full-duplex Artificial Intelligence Cloud Call Service call with support for personalized configurations.
   * 
   * @remarks
   * ## Operation description
   * - Before calling this operation, make sure that you have configured the ASR callback URL.
   * - This operation is available only to users whose UIDs are added to the whitelist.
   * - The request rate limit for a single user is 100 QPS.
   * - `CalledNumber` and `CallerNumber` are required parameters that specify the called number and the calling number, respectively.
   * - Optional parameters such as `StartWordParam`, `TtsVoiceCode`, `TtsSpeed`, and `TtsVolume` allow you to customize the call experience. If these parameters are not specified, the default settings of the application are used.
   * - The `SessionTimeout` parameter specifies the maximum call duration in seconds. The call is automatically ended when the specified duration is exceeded. For the default value and valid range, refer to the relevant documentation.
   * - The `OutId` field can be used to track a unique identifier in an external system. The value must be 1 to 32 bytes in length.
   * 
   * @param request - LlmSmartCallFullDuplexRequest
   * @returns LlmSmartCallFullDuplexResponse
   */
  async llmSmartCallFullDuplex(request: $_model.LlmSmartCallFullDuplexRequest): Promise<$_model.LlmSmartCallFullDuplexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.llmSmartCallFullDuplexWithOptions(request, runtime);
  }

  /**
   * Invoke MakeCall to initiate a call.
   * 
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
   * Invoke MakeCall to initiate a call.
   * 
   * @param request - MakeCallRequest
   * @returns MakeCallResponse
   */
  async makeCall(request: $_model.MakeCallRequest): Promise<$_model.MakeCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.makeCallWithOptions(request, runtime);
  }

  /**
   * You can invoke MakeDoubleCall to initiate a call by using the server-side software development kit (SDK).
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
   * You can invoke MakeDoubleCall to initiate a call by using the server-side software development kit (SDK).
   * 
   * @param request - MakeDoubleCallRequest
   * @returns MakeDoubleCallResponse
   */
  async makeDoubleCall(request: $_model.MakeDoubleCallRequest): Promise<$_model.MakeDoubleCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.makeDoubleCallWithOptions(request, runtime);
  }

  /**
   * Returns a paginated list of agents.
   * 
   * @param request - PageQueryAgentListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageQueryAgentListResponse
   */
  async pageQueryAgentListWithOptions(request: $_model.PageQueryAgentListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PageQueryAgentListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PageQueryAgentList",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PageQueryAgentListResponse>(await this.callApi(params, req, runtime), new $_model.PageQueryAgentListResponse({}));
  }

  /**
   * Returns a paginated list of agents.
   * 
   * @param request - PageQueryAgentListRequest
   * @returns PageQueryAgentListResponse
   */
  async pageQueryAgentList(request: $_model.PageQueryAgentListRequest): Promise<$_model.PageQueryAgentListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageQueryAgentListWithOptions(request, runtime);
  }

  /**
   * Retrieve a paginated list of agents (agency mode V2)
   * 
   * @param request - PageQueryAgentListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageQueryAgentListNewResponse
   */
  async pageQueryAgentListNewWithOptions(request: $_model.PageQueryAgentListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PageQueryAgentListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.isAvailable)) {
      query["IsAvailable"] = request.isAvailable;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
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
      action: "PageQueryAgentListNew",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PageQueryAgentListNewResponse>(await this.callApi(params, req, runtime), new $_model.PageQueryAgentListNewResponse({}));
  }

  /**
   * Retrieve a paginated list of agents (agency mode V2)
   * 
   * @param request - PageQueryAgentListNewRequest
   * @returns PageQueryAgentListNewResponse
   */
  async pageQueryAgentListNew(request: $_model.PageQueryAgentListNewRequest): Promise<$_model.PageQueryAgentListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageQueryAgentListNewWithOptions(request, runtime);
  }

  /**
   * Runs a paginated query for call task details.
   * 
   * @remarks
   * - You must create a call task before you can query its details.
   * - You can create a call task on the **call task management** page or by calling the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) API.
   * 
   * @param tmpReq - QueryAiCallDetailPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAiCallDetailPageResponse
   */
  async queryAiCallDetailPageWithOptions(tmpReq: $_model.QueryAiCallDetailPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAiCallDetailPageResponse> {
    tmpReq.validate();
    let request = new $_model.QueryAiCallDetailPageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.detailIds)) {
      request.detailIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detailIds, "DetailIds", "json");
    }

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

    if (!$dara.isNull(request.detailIdsShrink)) {
      query["DetailIds"] = request.detailIdsShrink;
    }

    if (!$dara.isNull(request.encryptionType)) {
      query["EncryptionType"] = request.encryptionType;
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

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
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
   * Runs a paginated query for call task details.
   * 
   * @remarks
   * - You must create a call task before you can query its details.
   * - You can create a call task on the **call task management** page or by calling the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) API.
   * 
   * @param request - QueryAiCallDetailPageRequest
   * @returns QueryAiCallDetailPageResponse
   */
  async queryAiCallDetailPage(request: $_model.QueryAiCallDetailPageRequest): Promise<$_model.QueryAiCallDetailPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAiCallDetailPageWithOptions(request, runtime);
  }

  /**
   * Gets basic information for a call task.
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
   * Gets basic information for a call task.
   * 
   * @param request - QueryAiCallTaskDetailRequest
   * @returns QueryAiCallTaskDetailResponse
   */
  async queryAiCallTaskDetail(request: $_model.QueryAiCallTaskDetailRequest): Promise<$_model.QueryAiCallTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAiCallTaskDetailWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of call tasks.
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

    if (!$dara.isNull(request.applicationCode)) {
      query["ApplicationCode"] = request.applicationCode;
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

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
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
   * Retrieves a list of call tasks.
   * 
   * @param request - QueryAiCallTaskPageRequest
   * @returns QueryAiCallTaskPageResponse
   */
  async queryAiCallTaskPage(request: $_model.QueryAiCallTaskPageRequest): Promise<$_model.QueryAiCallTaskPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAiCallTaskPageWithOptions(request, runtime);
  }

  /**
   * Retrieve the details of a communication agent.
   * 
   * @param request - QueryAiVoiceAgentDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAiVoiceAgentDetailResponse
   */
  async queryAiVoiceAgentDetailWithOptions(request: $_model.QueryAiVoiceAgentDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAiVoiceAgentDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
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
      action: "QueryAiVoiceAgentDetail",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAiVoiceAgentDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryAiVoiceAgentDetailResponse({}));
  }

  /**
   * Retrieve the details of a communication agent.
   * 
   * @param request - QueryAiVoiceAgentDetailRequest
   * @returns QueryAiVoiceAgentDetailResponse
   */
  async queryAiVoiceAgentDetail(request: $_model.QueryAiVoiceAgentDetailRequest): Promise<$_model.QueryAiVoiceAgentDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAiVoiceAgentDetailWithOptions(request, runtime);
  }

  /**
   * Gets details for a specified agent, including its basic, branch, and version information.
   * 
   * @remarks
   * ## Usage notes
   * - This API retrieves the details of a communication agent.
   * - If you do not specify `BranchId` and `VersionId`, the API returns the configuration for the latest published version on the effective branch. If the effective branch only contains a draft version, no configuration is returned.
   * - If you specify only `BranchId`, the API returns the configuration for the latest published version on the specified branch. If the specified branch only contains a draft version, no configuration is returned.
   * - If you specify both `BranchId` and `VersionId`, the API returns the configuration for the specified version.
   * - When `BranchDeployStatus` is `1` (branch deployed) and `VersionPublishStatus` is `1` (version published), imported outbound tasks use the configuration of this branch.
   * 
   * @param request - QueryAiVoiceAgentDetailNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAiVoiceAgentDetailNewResponse
   */
  async queryAiVoiceAgentDetailNewWithOptions(request: $_model.QueryAiVoiceAgentDetailNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAiVoiceAgentDetailNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.branchId)) {
      query["BranchId"] = request.branchId;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAiVoiceAgentDetailNew",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAiVoiceAgentDetailNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryAiVoiceAgentDetailNewResponse({}));
  }

  /**
   * Gets details for a specified agent, including its basic, branch, and version information.
   * 
   * @remarks
   * ## Usage notes
   * - This API retrieves the details of a communication agent.
   * - If you do not specify `BranchId` and `VersionId`, the API returns the configuration for the latest published version on the effective branch. If the effective branch only contains a draft version, no configuration is returned.
   * - If you specify only `BranchId`, the API returns the configuration for the latest published version on the specified branch. If the specified branch only contains a draft version, no configuration is returned.
   * - If you specify both `BranchId` and `VersionId`, the API returns the configuration for the specified version.
   * - When `BranchDeployStatus` is `1` (branch deployed) and `VersionPublishStatus` is `1` (version published), imported outbound tasks use the configuration of this branch.
   * 
   * @param request - QueryAiVoiceAgentDetailNewRequest
   * @returns QueryAiVoiceAgentDetailNewResponse
   */
  async queryAiVoiceAgentDetailNew(request: $_model.QueryAiVoiceAgentDetailNewRequest): Promise<$_model.QueryAiVoiceAgentDetailNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAiVoiceAgentDetailNewWithOptions(request, runtime);
  }

  /**
   * Gets call details.
   * 
   * @remarks
   * - This API retrieves call details. You can also view these details on the **call task management** > **details** > **execution history** > **completed** > **call details** page.
   * - Before calling this API, make sure you have created a call task and imported called number data.
   * - You can create a call task and import called number data either on the **call task management** page or by using the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) and [ImportTaskNumberDatas](https://help.aliyun.com/document_detail/2926815.html) APIs.
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
   * Gets call details.
   * 
   * @remarks
   * - This API retrieves call details. You can also view these details on the **call task management** > **details** > **execution history** > **completed** > **call details** page.
   * - Before calling this API, make sure you have created a call task and imported called number data.
   * - You can create a call task and import called number data either on the **call task management** page or by using the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) and [ImportTaskNumberDatas](https://help.aliyun.com/document_detail/2926815.html) APIs.
   * 
   * @param request - QueryConversationDetailInfoRequest
   * @returns QueryConversationDetailInfoResponse
   */
  async queryConversationDetailInfo(request: $_model.QueryConversationDetailInfoRequest): Promise<$_model.QueryConversationDetailInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryConversationDetailInfoWithOptions(request, runtime);
  }

  /**
   * Queries the details of a call task and call records.
   * 
   * @remarks
   * - You can call this operation to query call details. You can also view call details in the **Call Task Management** > **Details** > **Execution Records** > **Completed** > **Call Details** console.
   * - Before calling this operation, make sure that you have created a call task and imported callee data.
   * - If you do not have a created call task, create a call task and import callee data in the **Call Task Management** console, or call the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) and [ImportTaskNumberDatas](https://help.aliyun.com/document_detail/2926815.html) operations to create a call task and import callee data.
   * 
   * @param request - QueryConversationDetailInfoNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConversationDetailInfoNewResponse
   */
  async queryConversationDetailInfoNewWithOptions(request: $_model.QueryConversationDetailInfoNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConversationDetailInfoNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.detailId)) {
      query["DetailId"] = request.detailId;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
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
      action: "QueryConversationDetailInfoNew",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryConversationDetailInfoNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryConversationDetailInfoNewResponse({}));
  }

  /**
   * Queries the details of a call task and call records.
   * 
   * @remarks
   * - You can call this operation to query call details. You can also view call details in the **Call Task Management** > **Details** > **Execution Records** > **Completed** > **Call Details** console.
   * - Before calling this operation, make sure that you have created a call task and imported callee data.
   * - If you do not have a created call task, create a call task and import callee data in the **Call Task Management** console, or call the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) and [ImportTaskNumberDatas](https://help.aliyun.com/document_detail/2926815.html) operations to create a call task and import callee data.
   * 
   * @param request - QueryConversationDetailInfoNewRequest
   * @returns QueryConversationDetailInfoNewResponse
   */
  async queryConversationDetailInfoNew(request: $_model.QueryConversationDetailInfoNewRequest): Promise<$_model.QueryConversationDetailInfoNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryConversationDetailInfoNewWithOptions(request, runtime);
  }

  /**
   * Invoke QueryHotlineInQueue to obtain hotline agent data for a skill group by skill group ID.
   * 
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
   * Invoke QueryHotlineInQueue to obtain hotline agent data for a skill group by skill group ID.
   * 
   * @param request - QueryHotlineInQueueRequest
   * @returns QueryHotlineInQueueResponse
   */
  async queryHotlineInQueue(request: $_model.QueryHotlineInQueueRequest): Promise<$_model.QueryHotlineInQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryHotlineInQueueWithOptions(request, runtime);
  }

  /**
   * Query the hotline number configuration list by instance ID. Fuzzy query by hotline number is supported.
   * 
   * @remarks
   * The hotline number configuration includes information such as the hotline number, number location, carrier, and whether it is used for incoming calls. For details, see [Return Parameters](#api-detail-40).
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: 100 times per second.
   * - API invocation frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Query the hotline number configuration list by instance ID. Fuzzy query by hotline number is supported.
   * 
   * @remarks
   * The hotline number configuration includes information such as the hotline number, number location, carrier, and whether it is used for incoming calls. For details, see [Return Parameters](#api-detail-40).
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: 100 times per second.
   * - API invocation frequency: 100 times per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - QueryHotlineNumberRequest
   * @returns QueryHotlineNumberResponse
   */
  async queryHotlineNumber(request: $_model.QueryHotlineNumberRequest): Promise<$_model.QueryHotlineNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryHotlineNumberWithOptions(request, runtime);
  }

  /**
   * 查询呼入CallId
   * 
   * @param request - QueryInboundCallIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInboundCallIdResponse
   */
  async queryInboundCallIdWithOptions(request: $_model.QueryInboundCallIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInboundCallIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callDate)) {
      query["CallDate"] = request.callDate;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
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
      action: "QueryInboundCallId",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInboundCallIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryInboundCallIdResponse({}));
  }

  /**
   * 查询呼入CallId
   * 
   * @param request - QueryInboundCallIdRequest
   * @returns QueryInboundCallIdResponse
   */
  async queryInboundCallId(request: $_model.QueryInboundCallIdRequest): Promise<$_model.QueryInboundCallIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInboundCallIdWithOptions(request, runtime);
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
   * Queries the skill group list of the Cloud Customer Service System by instance ID.
   * 
   * @remarks
   * This API allows you to query information such as the display name, description, channel type, and ID of skill groups. For details, see [Response Parameters](#api-detail-40).
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 1000 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Queries the skill group list of the Cloud Customer Service System by instance ID.
   * 
   * @remarks
   * This API allows you to query information such as the display name, description, channel type, and ID of skill groups. For details, see [Response Parameters](#api-detail-40).
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 1000 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Invoke the QueryTickets API to query ticket information.
   * 
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
   * Invoke the QueryTickets API to query ticket information.
   * 
   * @param request - QueryTicketsRequest
   * @returns QueryTicketsResponse
   */
  async queryTickets(request: $_model.QueryTicketsRequest): Promise<$_model.QueryTicketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTicketsWithOptions(request, runtime);
  }

  /**
   * Query contact data by instance, list of contact IDs, list of session IDs, and so on.
   * 
   * @remarks
   * This API allows you to query contact data such as contact status, session recipient, agent name, contact channel, satisfaction rating, and evaluation status. For details, see [Response parameters](#api-detail-40).  
   * ### Queries per second (QPS) limit  
   * - Per-user invocation frequency: No Rate Limiting.  
   * - API frequency: 50 queries per second (QPS).  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Query contact data by instance, list of contact IDs, list of session IDs, and so on.
   * 
   * @remarks
   * This API allows you to query contact data such as contact status, session recipient, agent name, contact channel, satisfaction rating, and evaluation status. For details, see [Response parameters](#api-detail-40).  
   * ### Queries per second (QPS) limit  
   * - Per-user invocation frequency: No Rate Limiting.  
   * - API frequency: 50 queries per second (QPS).  
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - QueryTouchListRequest
   * @returns QueryTouchListResponse
   */
  async queryTouchList(request: $_model.QueryTouchListRequest): Promise<$_model.QueryTouchListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTouchListWithOptions(request, runtime);
  }

  /**
   * Remove agent accounts from a skill group by specifying the skill group and agent IDs.
   * 
   * @remarks
   * - If you need to provide agent or skill group information, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * - You can invoke [ListAgentBySkillGroupId](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-listagentbyskillgroupid) to retrieve agent information under a skill group and verify whether the removal aligns with your expectations.
   * - If you accidentally remove an agent, you can invoke [UpdateAgent](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-updateagent) to update the agent data and reassign the skill group to the agent.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 50 times/second.
   * - API-wide invocation frequency: 100 times/second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
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
   * Remove agent accounts from a skill group by specifying the skill group and agent IDs.
   * 
   * @remarks
   * - If you need to provide agent or skill group information, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * - You can invoke [ListAgentBySkillGroupId](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-listagentbyskillgroupid) to retrieve agent information under a skill group and verify whether the removal aligns with your expectations.
   * - If you accidentally remove an agent, you can invoke [UpdateAgent](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-updateagent) to update the agent data and reassign the skill group to the agent.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 50 times/second.
   * - API-wide invocation frequency: 100 times/second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
   * 
   * @param request - RemoveAgentFromSkillGroupRequest
   * @returns RemoveAgentFromSkillGroupResponse
   */
  async removeAgentFromSkillGroup(request: $_model.RemoveAgentFromSkillGroupRequest): Promise<$_model.RemoveAgentFromSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeAgentFromSkillGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a skill group in the Cloud Customer Service System based on the AICCS instance ID and skill group ID.
   * 
   * @remarks
   * - Deletion is a sensitive operation. Proceed with caution.  
   * - Before deletion, confirm the AICCS instance ID and the skill group ID to be deleted. Refer to the guidance in [Request Parameters](#api-detail-35) for details on how to obtain them.  
   * - After deletion, you can invoke the [QuerySkillGroups](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups) API to verify the skill group status.  
   * - If you accidentally delete a skill group, you can recreate it by invoking the [CreateSkillGroup](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-createskillgroup) API.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.  
   * - API frequency: 1000 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Deletes a skill group in the Cloud Customer Service System based on the AICCS instance ID and skill group ID.
   * 
   * @remarks
   * - Deletion is a sensitive operation. Proceed with caution.  
   * - Before deletion, confirm the AICCS instance ID and the skill group ID to be deleted. Refer to the guidance in [Request Parameters](#api-detail-35) for details on how to obtain them.  
   * - After deletion, you can invoke the [QuerySkillGroups](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups) API to verify the skill group status.  
   * - If you accidentally delete a skill group, you can recreate it by invoking the [CreateSkillGroup](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-createskillgroup) API.
   * ### Queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.  
   * - API frequency: 1000 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - RemoveSkillGroupRequest
   * @returns RemoveSkillGroupResponse
   */
  async removeSkillGroup(request: $_model.RemoveSkillGroupRequest): Promise<$_model.RemoveSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeSkillGroupWithOptions(request, runtime);
  }

  /**
   * Invoke the ResetHotlineNumber API to reset the inbound (IVR flow) and outbound (effective scope) configuration information of a hotline number.
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
   * Invoke the ResetHotlineNumber API to reset the inbound (IVR flow) and outbound (effective scope) configuration information of a hotline number.
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
   * Initiate an outbound call using the Intelligent Contact Robot.
   * 
   * @remarks
   * - Before initiating an outbound call using the Intelligent Contact Robot, ensure that you already have a reviewed and approved script in the [Script Management](https://aiccs.console.aliyun.com/patter/list) interface and an approved real number in the Voice Service [Real Number Management](https://dyvmsnext.console.aliyun.com/number/list/normal) interface.
   * - You can obtain the creation time of the call from the **date** parameter in the **Response Header** after invoking this API.  
   * > For example, if the **date** parameter is: `"date": "Mon, 24 Jun 2024 03:40:31 GMT"`, then the call creation time is: `"2024-06-24 03:40:31"`.
   * ### queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 1000 calls per second.
   * > If the total calls from multiple users exceed the API frequency limit, throttle will be triggered.
   * 
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
   * Initiate an outbound call using the Intelligent Contact Robot.
   * 
   * @remarks
   * - Before initiating an outbound call using the Intelligent Contact Robot, ensure that you already have a reviewed and approved script in the [Script Management](https://aiccs.console.aliyun.com/patter/list) interface and an approved real number in the Voice Service [Real Number Management](https://dyvmsnext.console.aliyun.com/number/list/normal) interface.
   * - You can obtain the creation time of the call from the **date** parameter in the **Response Header** after invoking this API.  
   * > For example, if the **date** parameter is: `"date": "Mon, 24 Jun 2024 03:40:31 GMT"`, then the call creation time is: `"2024-06-24 03:40:31"`.
   * ### queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 1000 calls per second.
   * > If the total calls from multiple users exceed the API frequency limit, throttle will be triggered.
   * 
   * @param request - RobotCallRequest
   * @returns RobotCallResponse
   */
  async robotCall(request: $_model.RobotCallRequest): Promise<$_model.RobotCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.robotCallWithOptions(request, runtime);
  }

  /**
   * Initiate an Intelligent Speech Interaction call based on the callee\\"s caller ID, callee number, and intelligent outbound call audio file.
   * 
   * @remarks
   * - The following characters cannot appear in the Intelligent Speech Interaction SendCcoSmartCall callback: `@ = : "" $ { } ^ * ￥`.  
   * - After invoking this API, the **Data** field in the response contains the unique receipt ID for this call, which can be used when invoking the [SendCcoSmartCallOperate](https://help.aliyun.com/document_detail/2718013.html) API.
   * ### Queries Per Second (QPS) Limits
   * - Per-user invocation frequency: No rate limiting.  
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Initiate an Intelligent Speech Interaction call based on the callee\\"s caller ID, callee number, and intelligent outbound call audio file.
   * 
   * @remarks
   * - The following characters cannot appear in the Intelligent Speech Interaction SendCcoSmartCall callback: `@ = : "" $ { } ^ * ￥`.  
   * - After invoking this API, the **Data** field in the response contains the unique receipt ID for this call, which can be used when invoking the [SendCcoSmartCallOperate](https://help.aliyun.com/document_detail/2718013.html) API.
   * ### Queries Per Second (QPS) Limits
   * - Per-user invocation frequency: No rate limiting.  
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - SendCcoSmartCallRequest
   * @returns SendCcoSmartCallResponse
   */
  async sendCcoSmartCall(request: $_model.SendCcoSmartCallRequest): Promise<$_model.SendCcoSmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCcoSmartCallWithOptions(request, runtime);
  }

  /**
   * Initiates a specified action during an Intelligent Outbound Call, applicable only to scenarios such as parallel transfer to a human agent or allowing a human agent to listen in on the man-machine dialogue.
   * 
   * @remarks
   * - This API can be successfully invoked only during an ongoing Intelligent Outbound Call. When invoking it, note that the **CallId** in the request parameters must be set to the unique receipt ID of the active call.  
   * - The **CallId** is the **Data** parameter returned when you invoke the [SendCcoSmartCall](https://help.aliyun.com/document_detail/2718012.html) API.
   * 
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
   * Initiates a specified action during an Intelligent Outbound Call, applicable only to scenarios such as parallel transfer to a human agent or allowing a human agent to listen in on the man-machine dialogue.
   * 
   * @remarks
   * - This API can be successfully invoked only during an ongoing Intelligent Outbound Call. When invoking it, note that the **CallId** in the request parameters must be set to the unique receipt ID of the active call.  
   * - The **CallId** is the **Data** parameter returned when you invoke the [SendCcoSmartCall](https://help.aliyun.com/document_detail/2718012.html) API.
   * 
   * @param request - SendCcoSmartCallOperateRequest
   * @returns SendCcoSmartCallOperateResponse
   */
  async sendCcoSmartCallOperate(request: $_model.SendCcoSmartCallOperateRequest): Promise<$_model.SendCcoSmartCallOperateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCcoSmartCallOperateWithOptions(request, runtime);
  }

  /**
   * Send a hotline heartbeat request based on the instance ID, agent account name, and heartbeat signature.
   * 
   * @remarks
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Send a hotline heartbeat request based on the instance ID, agent account name, and heartbeat signature.
   * 
   * @remarks
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - SendHotlineHeartBeatRequest
   * @returns SendHotlineHeartBeatResponse
   */
  async sendHotlineHeartBeat(request: $_model.SendHotlineHeartBeatRequest): Promise<$_model.SendHotlineHeartBeatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendHotlineHeartBeatWithOptions(request, runtime);
  }

  /**
   * Starts a call task.
   * 
   * @remarks
   * - Before you start a call task, ensure its status is Stopped.
   * - If you do not have a call task, create one on the **Call Task Management** page or by calling the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) operation.
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
   * Starts a call task.
   * 
   * @remarks
   * - Before you start a call task, ensure its status is Stopped.
   * - If you do not have a call task, create one on the **Call Task Management** page or by calling the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) operation.
   * 
   * @param request - StartAiCallTaskRequest
   * @returns StartAiCallTaskResponse
   */
  async startAiCallTask(request: $_model.StartAiCallTaskRequest): Promise<$_model.StartAiCallTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAiCallTaskWithOptions(request, runtime);
  }

  /**
   * Start an outbound calling job by instance ID and job ID.
   * 
   * @remarks
   * - You can invoke this API to start an outbound calling job that is in the paused state.  
   * - An outbound calling job in the stopped state cannot be started again.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 20 times per second.  
   * - API invocation frequency: 20 times per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Start an outbound calling job by instance ID and job ID.
   * 
   * @remarks
   * - You can invoke this API to start an outbound calling job that is in the paused state.  
   * - An outbound calling job in the stopped state cannot be started again.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 20 times per second.  
   * - API invocation frequency: 20 times per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - StartAiOutboundTaskRequest
   * @returns StartAiOutboundTaskResponse
   */
  async startAiOutboundTask(request: $_model.StartAiOutboundTaskRequest): Promise<$_model.StartAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * Initiate an outbound call based on the instance ID, agent account name, hotline outbound caller number, and callee number.
   * 
   * @remarks
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Initiate an outbound call based on the instance ID, agent account name, hotline outbound caller number, and callee number.
   * 
   * @remarks
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - StartCallRequest
   * @returns StartCallResponse
   */
  async startCall(request: $_model.StartCallRequest): Promise<$_model.StartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCallWithOptions(request, runtime);
  }

  /**
   * Invoke StartCallV2 to initiate an outbound call V2.
   * 
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
   * Invoke StartCallV2 to initiate an outbound call V2.
   * 
   * @param request - StartCallV2Request
   * @returns StartCallV2Response
   */
  async startCallV2(request: $_model.StartCallV2Request): Promise<$_model.StartCallV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCallV2WithOptions(request, runtime);
  }

  /**
   * Invoke StartChatWork to switch an online agent to the working status.
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
   * Invoke StartChatWork to switch an online agent to the working status.
   * 
   * @param request - StartChatWorkRequest
   * @returns StartChatWorkResponse
   */
  async startChatWork(request: $_model.StartChatWorkRequest): Promise<$_model.StartChatWorkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startChatWorkWithOptions(request, runtime);
  }

  /**
   * Sign in a hotline agent by instance ID and agent account name to start the hotline service.
   * 
   * @remarks
   * - The **Data** parameter returned by this API is the token required to initiate a heartbeat.  
   * - If the agent takes a break, you can pause the hotline service by invoking the [SuspendHotlineService](https://help.aliyun.com/document_detail/2718046.html) API.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Sign in a hotline agent by instance ID and agent account name to start the hotline service.
   * 
   * @remarks
   * - The **Data** parameter returned by this API is the token required to initiate a heartbeat.  
   * - If the agent takes a break, you can pause the hotline service by invoking the [SuspendHotlineService](https://help.aliyun.com/document_detail/2718046.html) API.
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - StartHotlineServiceRequest
   * @returns StartHotlineServiceResponse
   */
  async startHotlineService(request: $_model.StartHotlineServiceRequest): Promise<$_model.StartHotlineServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startHotlineServiceWithOptions(request, runtime);
  }

  /**
   * Invoke the StartMicroOutbound API to initiate an outbound call request.
   * 
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
   * Invoke the StartMicroOutbound API to initiate an outbound call request.
   * 
   * @param request - StartMicroOutboundRequest
   * @returns StartMicroOutboundResponse
   */
  async startMicroOutbound(request: $_model.StartMicroOutboundRequest): Promise<$_model.StartMicroOutboundResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startMicroOutboundWithOptions(request, runtime);
  }

  /**
   * Start a successfully created Intelligent Contact Robot calling job.
   * 
   * @remarks
   * - You can invoke this API to start a successfully created Intelligent Contact Robot calling job, or manually start the job on the [Task Management](https://aiccs.console.aliyun.com/job/list) page.
   * - Before invoking this API, ensure that you already have a successfully created Intelligent Contact Robot calling job.
   * - If you do not have a successfully created Intelligent Contact Robot outbound calling job, you can click to create a job on the [Task Management](https://aiccs.console.aliyun.com/job/list) page or create one by using the [CreateTask](https://help.aliyun.com/document_detail/2718003.html) API.
   * ### queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Start a successfully created Intelligent Contact Robot calling job.
   * 
   * @remarks
   * - You can invoke this API to start a successfully created Intelligent Contact Robot calling job, or manually start the job on the [Task Management](https://aiccs.console.aliyun.com/job/list) page.
   * - Before invoking this API, ensure that you already have a successfully created Intelligent Contact Robot calling job.
   * - If you do not have a successfully created Intelligent Contact Robot outbound calling job, you can click to create a job on the [Task Management](https://aiccs.console.aliyun.com/job/list) page or create one by using the [CreateTask](https://help.aliyun.com/document_detail/2718003.html) API.
   * ### queries per second (QPS) Limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - StartTaskRequest
   * @returns StartTaskResponse
   */
  async startTask(request: $_model.StartTaskRequest): Promise<$_model.StartTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startTaskWithOptions(request, runtime);
  }

  /**
   * Stops an outbound call task.
   * 
   * @remarks
   * - Before you stop an outbound call task, ensure that the task has been created and its status is `running`.
   * - If you have not created an outbound call task, create one on the Outbound Task Management page or call the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) operation.
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
   * Stops an outbound call task.
   * 
   * @remarks
   * - Before you stop an outbound call task, ensure that the task has been created and its status is `running`.
   * - If you have not created an outbound call task, create one on the Outbound Task Management page or call the [CreateAiCallTask](https://help.aliyun.com/document_detail/2926796.html) operation.
   * 
   * @param request - StopAiCallTaskRequest
   * @returns StopAiCallTaskResponse
   */
  async stopAiCallTask(request: $_model.StopAiCallTaskRequest): Promise<$_model.StopAiCallTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAiCallTaskWithOptions(request, runtime);
  }

  /**
   * Pause an outbound calling job by instance ID and job ID.
   * 
   * @remarks
   * After pausing an outbound calling job, you can invoke the [StartAiOutboundTask](https://help.aliyun.com/document_detail/2718027.html) API to restart it.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 20 times/second.
   * - API invocation frequency: 20 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Pause an outbound calling job by instance ID and job ID.
   * 
   * @remarks
   * After pausing an outbound calling job, you can invoke the [StartAiOutboundTask](https://help.aliyun.com/document_detail/2718027.html) API to restart it.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 20 times/second.
   * - API invocation frequency: 20 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - StopAiOutboundTaskRequest
   * @returns StopAiOutboundTaskResponse
   */
  async stopAiOutboundTask(request: $_model.StopAiOutboundTaskRequest): Promise<$_model.StopAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * Pause an Intelligent Contact Robot calling job that has been successfully started.
   * 
   * @remarks
   * - You can use this API to pause an Intelligent Contact Robot calling job that has been successfully started, or manually pause the job on the [Task Management](https://aiccs.console.aliyun.com/job/list) interface.
   * - Before invoking this API, ensure that you already have a successfully started Intelligent Contact Robot calling job.
   * - If you do not have a successfully started Intelligent Contact Robot calling job, click **Start** on the [Task Management](https://aiccs.console.aliyun.com/job/list) interface or start a job by using the [StartTask](https://help.aliyun.com/document_detail/2718005.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Pause an Intelligent Contact Robot calling job that has been successfully started.
   * 
   * @remarks
   * - You can use this API to pause an Intelligent Contact Robot calling job that has been successfully started, or manually pause the job on the [Task Management](https://aiccs.console.aliyun.com/job/list) interface.
   * - Before invoking this API, ensure that you already have a successfully started Intelligent Contact Robot calling job.
   * - If you do not have a successfully started Intelligent Contact Robot calling job, click **Start** on the [Task Management](https://aiccs.console.aliyun.com/job/list) interface or start a job by using the [StartTask](https://help.aliyun.com/document_detail/2718005.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 500 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - StopTaskRequest
   * @returns StopTaskResponse
   */
  async stopTask(request: $_model.StopTaskRequest): Promise<$_model.StopTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopTaskWithOptions(request, runtime);
  }

  /**
   * Submits a recording notes task.
   * 
   * @param request - SubmitAudioNoteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAudioNoteResponse
   */
  async submitAudioNoteWithOptions(request: $_model.SubmitAudioNoteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAudioNoteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.llmModelId)) {
      query["LlmModelId"] = request.llmModelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAudioNote",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAudioNoteResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAudioNoteResponse({}));
  }

  /**
   * Submits a recording notes task.
   * 
   * @param request - SubmitAudioNoteRequest
   * @returns SubmitAudioNoteResponse
   */
  async submitAudioNote(request: $_model.SubmitAudioNoteRequest): Promise<$_model.SubmitAudioNoteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAudioNoteWithOptions(request, runtime);
  }

  /**
   * Pause hotline service when an agent takes a short break.
   * 
   * @remarks
   * If the break ends and you need to resume hotline service, you can invoke the [StartHotlineService](https://help.aliyun.com/document_detail/2718045.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Pause hotline service when an agent takes a short break.
   * 
   * @remarks
   * If the break ends and you need to resume hotline service, you can invoke the [StartHotlineService](https://help.aliyun.com/document_detail/2718045.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 100 queries per second (QPS).
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Terminate an outbound call job by instance ID and job ID.
   * 
   * @remarks
   * - This API supports terminating an outbound call job. Once terminated, the job cannot be restarted.
   * - To temporarily stop an outbound call job, you can invoke the [StopAiOutboundTask](https://help.aliyun.com/document_detail/2718024.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 20 times/second.
   * - API-wide invocation frequency: 20 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
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
   * Terminate an outbound call job by instance ID and job ID.
   * 
   * @remarks
   * - This API supports terminating an outbound call job. Once terminated, the job cannot be restarted.
   * - To temporarily stop an outbound call job, you can invoke the [StopAiOutboundTask](https://help.aliyun.com/document_detail/2718024.html) API.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 20 times/second.
   * - API-wide invocation frequency: 20 times/second.
   * > If the total invocations from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - TerminateAiOutboundTaskRequest
   * @returns TerminateAiOutboundTaskResponse
   */
  async terminateAiOutboundTask(request: $_model.TerminateAiOutboundTaskRequest): Promise<$_model.TerminateAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.terminateAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * TestLargeModel
   * 
   * @param tmpReq - TestLargeModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestLargeModelResponse
   */
  async testLargeModelWithOptions(tmpReq: $_model.TestLargeModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TestLargeModelResponse> {
    tmpReq.validate();
    let request = new $_model.TestLargeModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.baseModel)) {
      request.baseModelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.baseModel, "BaseModel", "json");
    }

    let query = { };
    if (!$dara.isNull(request.baseModelShrink)) {
      query["BaseModel"] = request.baseModelShrink;
    }

    if (!$dara.isNull(request.modelCode)) {
      query["ModelCode"] = request.modelCode;
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

    if (!$dara.isNull(request.userDialogContent)) {
      query["UserDialogContent"] = request.userDialogContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestLargeModel",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestLargeModelResponse>(await this.callApi(params, req, runtime), new $_model.TestLargeModelResponse({}));
  }

  /**
   * TestLargeModel
   * 
   * @param request - TestLargeModelRequest
   * @returns TestLargeModelResponse
   */
  async testLargeModel(request: $_model.TestLargeModelRequest): Promise<$_model.TestLargeModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testLargeModelWithOptions(request, runtime);
  }

  /**
   * Invoke the TransferCallToSkillGroup API to execute a single-step or two-step transfer to a skill group.
   * 
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
   * Invoke the TransferCallToSkillGroup API to execute a single-step or two-step transfer to a skill group.
   * 
   * @param request - TransferCallToSkillGroupRequest
   * @returns TransferCallToSkillGroupResponse
   */
  async transferCallToSkillGroup(request: $_model.TransferCallToSkillGroupRequest): Promise<$_model.TransferCallToSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferCallToSkillGroupWithOptions(request, runtime);
  }

  /**
   * Modify agent information in the Cloud Customer Service System based on the instance ID and agent account name. You can modify the agent\\"s display name and the skill groups to which the agent belongs.
   * 
   * @remarks
   * - Before invoking this API, we recommend that you confirm your Artificial Intelligence Cloud Call Service (AICCS) instance ID. For guidance on how to obtain it, see the description of [Request Parameters](#api-detail-35).
   * - After the update, you can invoke the [GetAgent](https://help.aliyun.com/document_detail/2717961.html) API to confirm whether the update meets your expectations.
   * > Currently, only the display name and assigned skill groups can be modified.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API-wide invocation frequency: 100 queries per second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
   * 
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
   * Modify agent information in the Cloud Customer Service System based on the instance ID and agent account name. You can modify the agent\\"s display name and the skill groups to which the agent belongs.
   * 
   * @remarks
   * - Before invoking this API, we recommend that you confirm your Artificial Intelligence Cloud Call Service (AICCS) instance ID. For guidance on how to obtain it, see the description of [Request Parameters](#api-detail-35).
   * - After the update, you can invoke the [GetAgent](https://help.aliyun.com/document_detail/2717961.html) API to confirm whether the update meets your expectations.
   * > Currently, only the display name and assigned skill groups can be modified.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: No rate limiting.
   * - API-wide invocation frequency: 100 queries per second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API-wide frequency limit.
   * 
   * @param request - UpdateAgentRequest
   * @returns UpdateAgentResponse
   */
  async updateAgent(request: $_model.UpdateAgentRequest): Promise<$_model.UpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgentWithOptions(request, runtime);
  }

  /**
   * Updates a call task configuration.
   * 
   * @remarks
   * Ensure the call task is stopped before you update its configuration.
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

    if (!$dara.isNull(request.lineEncoding)) {
      query["LineEncoding"] = request.lineEncoding;
    }

    if (!$dara.isNull(request.linePhoneNum)) {
      query["LinePhoneNum"] = request.linePhoneNum;
    }

    if (!$dara.isNull(request.missCallRetry)) {
      query["MissCallRetry"] = request.missCallRetry;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneType)) {
      query["PhoneType"] = request.phoneType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.startType)) {
      query["StartType"] = request.startType;
    }

    if (!$dara.isNull(request.taskCps)) {
      query["TaskCps"] = request.taskCps;
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
   * Updates a call task configuration.
   * 
   * @remarks
   * Ensure the call task is stopped before you update its configuration.
   * 
   * @param request - UpdateAiCallTaskRequest
   * @returns UpdateAiCallTaskResponse
   */
  async updateAiCallTask(request: $_model.UpdateAiCallTaskRequest): Promise<$_model.UpdateAiCallTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAiCallTaskWithOptions(request, runtime);
  }

  /**
   * Update an outbound call job by instance ID and job ID.
   * 
   * @remarks
   * This API supports updating information such as the task name, task description, outbound caller number, and skill group ID. For details, see [Request Parameters](#api-detail-35).
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 20 times per second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API frequency limit.
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
   * Update an outbound call job by instance ID and job ID.
   * 
   * @remarks
   * This API supports updating information such as the task name, task description, outbound caller number, and skill group ID. For details, see [Request Parameters](#api-detail-35).
   * ### Queries per second (QPS) limit
   * - Per-user invocation frequency: No rate limiting.
   * - API frequency: 20 times per second.
   * > Throttling is triggered if the total invocations from multiple users exceed the API frequency limit.
   * 
   * @param request - UpdateAiOutboundTaskRequest
   * @returns UpdateAiOutboundTaskResponse
   */
  async updateAiOutboundTask(request: $_model.UpdateAiOutboundTaskRequest): Promise<$_model.UpdateAiOutboundTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAiOutboundTaskWithOptions(request, runtime);
  }

  /**
   * Update the department name based on the Artificial Intelligence Cloud Call Service (AICCS) instance ID and department ID.
   * 
   * @remarks
   * - This API supports updating only the department name and does not support updating the department ID.  
   * - Before invoking this API, we recommend that you confirm the AICCS instance ID and department ID. For guidance on how to obtain them, see the instructions in [Request Parameters](#api-detail-35).  
   * - After the update is complete, you can invoke the [GetAllDepartment](https://help.aliyun.com/document_detail/2717975.html) API to confirm whether the department information matches your expectations.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.  
   * - API-wide invocation frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
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
   * Update the department name based on the Artificial Intelligence Cloud Call Service (AICCS) instance ID and department ID.
   * 
   * @remarks
   * - This API supports updating only the department name and does not support updating the department ID.  
   * - Before invoking this API, we recommend that you confirm the AICCS instance ID and department ID. For guidance on how to obtain them, see the instructions in [Request Parameters](#api-detail-35).  
   * - After the update is complete, you can invoke the [GetAllDepartment](https://help.aliyun.com/document_detail/2717975.html) API to confirm whether the department information matches your expectations.
   * ### Queries per second (QPS) limits
   * - Per-user invocation frequency: 100 times/second.  
   * - API-wide invocation frequency: 100 times/second.
   * > If the total invocations from multiple users exceed the API-wide frequency limit, throttling will be triggered.
   * 
   * @param request - UpdateDepartmentRequest
   * @returns UpdateDepartmentResponse
   */
  async updateDepartment(request: $_model.UpdateDepartmentRequest): Promise<$_model.UpdateDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDepartmentWithOptions(request, runtime);
  }

  /**
   * Updates a large language model.
   * 
   * @param tmpReq - UpdateLargeModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLargeModelResponse
   */
  async updateLargeModelWithOptions(tmpReq: $_model.UpdateLargeModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLargeModelResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLargeModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.baseModel)) {
      request.baseModelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.baseModel, "BaseModel", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.baseModelShrink)) {
      query["BaseModel"] = request.baseModelShrink;
    }

    if (!$dara.isNull(request.modelCode)) {
      query["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelUrl)) {
      query["ModelUrl"] = request.modelUrl;
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

    if (!$dara.isNull(request.temperature)) {
      query["Temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!$dara.isNull(request.topP)) {
      query["TopP"] = request.topP;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLargeModel",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLargeModelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLargeModelResponse({}));
  }

  /**
   * Updates a large language model.
   * 
   * @param request - UpdateLargeModelRequest
   * @returns UpdateLargeModelResponse
   */
  async updateLargeModel(request: $_model.UpdateLargeModelRequest): Promise<$_model.UpdateLargeModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLargeModelWithOptions(request, runtime);
  }

  /**
   * Edit Model Application
   * 
   * @param tmpReq - UpdateModelApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelApplicationResponse
   */
  async updateModelApplicationWithOptions(tmpReq: $_model.UpdateModelApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelApplicationResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateModelApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.interruptConfig)) {
      request.interruptConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.interruptConfig, "InterruptConfig", "json");
    }

    if (!$dara.isNull(tmpReq.ttsConfig)) {
      request.ttsConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ttsConfig, "TtsConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationCode)) {
      query["ApplicationCode"] = request.applicationCode;
    }

    if (!$dara.isNull(request.applicationCps)) {
      query["ApplicationCps"] = request.applicationCps;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.callAssistantHangup)) {
      query["CallAssistantHangup"] = request.callAssistantHangup;
    }

    if (!$dara.isNull(request.callAssistantRecognize)) {
      query["CallAssistantRecognize"] = request.callAssistantRecognize;
    }

    if (!$dara.isNull(request.callConnectedTriggerModel)) {
      query["CallConnectedTriggerModel"] = request.callConnectedTriggerModel;
    }

    if (!$dara.isNull(request.dtmfAllowedDigits)) {
      query["DtmfAllowedDigits"] = request.dtmfAllowedDigits;
    }

    if (!$dara.isNull(request.dtmfAutoValidateEnable)) {
      query["DtmfAutoValidateEnable"] = request.dtmfAutoValidateEnable;
    }

    if (!$dara.isNull(request.dtmfDigitCount)) {
      query["DtmfDigitCount"] = request.dtmfDigitCount;
    }

    if (!$dara.isNull(request.dtmfInputTimeout)) {
      query["DtmfInputTimeout"] = request.dtmfInputTimeout;
    }

    if (!$dara.isNull(request.dtmfOutOfRangeAction)) {
      query["DtmfOutOfRangeAction"] = request.dtmfOutOfRangeAction;
    }

    if (!$dara.isNull(request.dtmfRetryPlayTimes)) {
      query["DtmfRetryPlayTimes"] = request.dtmfRetryPlayTimes;
    }

    if (!$dara.isNull(request.dtmfRetryPromptText)) {
      query["DtmfRetryPromptText"] = request.dtmfRetryPromptText;
    }

    if (!$dara.isNull(request.dtmfSendMaxCount)) {
      query["DtmfSendMaxCount"] = request.dtmfSendMaxCount;
    }

    if (!$dara.isNull(request.dtmfSendWaitTimeout)) {
      query["DtmfSendWaitTimeout"] = request.dtmfSendWaitTimeout;
    }

    if (!$dara.isNull(request.dyvmsSceneName)) {
      query["DyvmsSceneName"] = request.dyvmsSceneName;
    }

    if (!$dara.isNull(request.enableDtmfReceive)) {
      query["EnableDtmfReceive"] = request.enableDtmfReceive;
    }

    if (!$dara.isNull(request.enableDtmfSend)) {
      query["EnableDtmfSend"] = request.enableDtmfSend;
    }

    if (!$dara.isNull(request.enableMorse)) {
      query["EnableMorse"] = request.enableMorse;
    }

    if (!$dara.isNull(request.interruptConfigShrink)) {
      query["InterruptConfig"] = request.interruptConfigShrink;
    }

    if (!$dara.isNull(request.modelCode)) {
      query["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.modelVersion)) {
      query["ModelVersion"] = request.modelVersion;
    }

    if (!$dara.isNull(request.muteActive)) {
      query["MuteActive"] = request.muteActive;
    }

    if (!$dara.isNull(request.muteDuration)) {
      query["MuteDuration"] = request.muteDuration;
    }

    if (!$dara.isNull(request.muteHangupNum)) {
      query["MuteHangupNum"] = request.muteHangupNum;
    }

    if (!$dara.isNull(request.mutePushMode)) {
      query["MutePushMode"] = request.mutePushMode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.qualificationName)) {
      query["QualificationName"] = request.qualificationName;
    }

    if (!$dara.isNull(request.recordingFile)) {
      query["RecordingFile"] = request.recordingFile;
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

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.speechContent)) {
      query["SpeechContent"] = request.speechContent;
    }

    if (!$dara.isNull(request.speechId)) {
      query["SpeechId"] = request.speechId;
    }

    if (!$dara.isNull(request.startWord)) {
      query["StartWord"] = request.startWord;
    }

    if (!$dara.isNull(request.startWordType)) {
      query["StartWordType"] = request.startWordType;
    }

    if (!$dara.isNull(request.ttsConfigShrink)) {
      query["TtsConfig"] = request.ttsConfigShrink;
    }

    if (!$dara.isNull(request.usageDesc)) {
      query["UsageDesc"] = request.usageDesc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelApplication",
      version: "2019-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelApplicationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelApplicationResponse({}));
  }

  /**
   * Edit Model Application
   * 
   * @param request - UpdateModelApplicationRequest
   * @returns UpdateModelApplicationResponse
   */
  async updateModelApplication(request: $_model.UpdateModelApplicationRequest): Promise<$_model.UpdateModelApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateModelApplicationWithOptions(request, runtime);
  }

  /**
   * Invoke UpdateOuterAccount to update an external account based on the external account ID.
   * 
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
   * Invoke UpdateOuterAccount to update an external account based on the external account ID.
   * 
   * @param request - UpdateOuterAccountRequest
   * @returns UpdateOuterAccountResponse
   */
  async updateOuterAccount(request: $_model.UpdateOuterAccountRequest): Promise<$_model.UpdateOuterAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOuterAccountWithOptions(request, runtime);
  }

  /**
   * Update the skill group information in the Cloud Customer Service System based on the AICCS instance ID and skill group ID. This API supports updating the skill group description and display name.
   * 
   * @remarks
   * - This API does not support updating the skill group ID or skill group name.  
   * - After the update, you can invoke the [QuerySkillGroups](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups) API to query the skill group information.  
   * - If you need to provide the AICCS instance ID and skill group ID, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limit
   * - Per-user call frequency: No rate limiting.
   * - API call frequency: 1000 calls per second.
   * > If the total calls from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
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
   * Update the skill group information in the Cloud Customer Service System based on the AICCS instance ID and skill group ID. This API supports updating the skill group description and display name.
   * 
   * @remarks
   * - This API does not support updating the skill group ID or skill group name.  
   * - After the update, you can invoke the [QuerySkillGroups](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-queryskillgroups) API to query the skill group information.  
   * - If you need to provide the AICCS instance ID and skill group ID, refer to the instructions in the [Request Parameters](#api-detail-35) section.
   * ### Queries per second (QPS) limit
   * - Per-user call frequency: No rate limiting.
   * - API call frequency: 1000 calls per second.
   * > If the total calls from multiple users exceed the API frequency limit, throttling will be triggered.
   * 
   * @param request - UpdateSkillGroupRequest
   * @returns UpdateSkillGroupResponse
   */
  async updateSkillGroup(request: $_model.UpdateSkillGroupRequest): Promise<$_model.UpdateSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillGroupWithOptions(request, runtime);
  }

}
