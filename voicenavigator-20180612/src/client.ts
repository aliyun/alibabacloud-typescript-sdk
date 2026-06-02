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
    this._endpoint = this.getEndpoint("voicenavigator", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AssociateChatbotInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateChatbotInstanceResponse
   */
  async associateChatbotInstanceWithOptions(request: $_model.AssociateChatbotInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateChatbotInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chatbotInstanceId)) {
      query["ChatbotInstanceId"] = request.chatbotInstanceId;
    }

    if (!$dara.isNull(request.chatbotName)) {
      query["ChatbotName"] = request.chatbotName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nluServiceParamsJson)) {
      query["NluServiceParamsJson"] = request.nluServiceParamsJson;
    }

    if (!$dara.isNull(request.nluServiceType)) {
      query["NluServiceType"] = request.nluServiceType;
    }

    if (!$dara.isNull(request.unionSource)) {
      query["UnionSource"] = request.unionSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateChatbotInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateChatbotInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AssociateChatbotInstanceResponse({}));
  }

  /**
   * @param request - AssociateChatbotInstanceRequest
   * @returns AssociateChatbotInstanceResponse
   */
  async associateChatbotInstance(request: $_model.AssociateChatbotInstanceRequest): Promise<$_model.AssociateChatbotInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateChatbotInstanceWithOptions(request, runtime);
  }

  /**
   * AuditTTSVoice
   * 
   * @param request - AuditTTSVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuditTTSVoiceResponse
   */
  async auditTTSVoiceWithOptions(request: $_model.AuditTTSVoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuditTTSVoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pitchRate)) {
      query["PitchRate"] = request.pitchRate;
    }

    if (!$dara.isNull(request.secretKey)) {
      query["SecretKey"] = request.secretKey;
    }

    if (!$dara.isNull(request.speechRate)) {
      query["SpeechRate"] = request.speechRate;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    if (!$dara.isNull(request.voice)) {
      query["Voice"] = request.voice;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuditTTSVoice",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuditTTSVoiceResponse>(await this.callApi(params, req, runtime), new $_model.AuditTTSVoiceResponse({}));
  }

  /**
   * AuditTTSVoice
   * 
   * @param request - AuditTTSVoiceRequest
   * @returns AuditTTSVoiceResponse
   */
  async auditTTSVoice(request: $_model.AuditTTSVoiceRequest): Promise<$_model.AuditTTSVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.auditTTSVoiceWithOptions(request, runtime);
  }

  /**
   * 开启会话
   * 
   * @param request - BeginDialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BeginDialogueResponse
   */
  async beginDialogueWithOptions(request: $_model.BeginDialogueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BeginDialogueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.initialContext)) {
      query["InitialContext"] = request.initialContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BeginDialogue",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BeginDialogueResponse>(await this.callApi(params, req, runtime), new $_model.BeginDialogueResponse({}));
  }

  /**
   * 开启会话
   * 
   * @param request - BeginDialogueRequest
   * @returns BeginDialogueResponse
   */
  async beginDialogue(request: $_model.BeginDialogueRequest): Promise<$_model.BeginDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.beginDialogueWithOptions(request, runtime);
  }

  /**
   * @param request - CollectedNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CollectedNumberResponse
   */
  async collectedNumberWithOptions(request: $_model.CollectedNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CollectedNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.additionalContext)) {
      query["AdditionalContext"] = request.additionalContext;
    }

    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CollectedNumber",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CollectedNumberResponse>(await this.callApi(params, req, runtime), new $_model.CollectedNumberResponse({}));
  }

  /**
   * @param request - CollectedNumberRequest
   * @returns CollectedNumberResponse
   */
  async collectedNumber(request: $_model.CollectedNumberRequest): Promise<$_model.CollectedNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.collectedNumberWithOptions(request, runtime);
  }

  /**
   * CreateDownloadUrl
   * 
   * @param request - CreateDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDownloadUrlResponse
   */
  async createDownloadUrlWithOptions(request: $_model.CreateDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDownloadUrlResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDownloadUrl",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.CreateDownloadUrlResponse({}));
  }

  /**
   * CreateDownloadUrl
   * 
   * @param request - CreateDownloadUrlRequest
   * @returns CreateDownloadUrlResponse
   */
  async createDownloadUrl(request: $_model.CreateDownloadUrlRequest): Promise<$_model.CreateDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDownloadUrlWithOptions(request, runtime);
  }

  /**
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.concurrency)) {
      query["Concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nluServiceParamsJson)) {
      query["NluServiceParamsJson"] = request.nluServiceParamsJson;
    }

    if (!$dara.isNull(request.unionInstanceId)) {
      query["UnionInstanceId"] = request.unionInstanceId;
    }

    if (!$dara.isNull(request.unionSource)) {
      query["UnionSource"] = request.unionSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 测试窗开启文本对话
   * 
   * @param request - DebugBeginDialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DebugBeginDialogueResponse
   */
  async debugBeginDialogueWithOptions(request: $_model.DebugBeginDialogueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DebugBeginDialogueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.initialContext)) {
      query["InitialContext"] = request.initialContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.shouldUseSandBox)) {
      query["ShouldUseSandBox"] = request.shouldUseSandBox;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DebugBeginDialogue",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DebugBeginDialogueResponse>(await this.callApi(params, req, runtime), new $_model.DebugBeginDialogueResponse({}));
  }

  /**
   * 测试窗开启文本对话
   * 
   * @param request - DebugBeginDialogueRequest
   * @returns DebugBeginDialogueResponse
   */
  async debugBeginDialogue(request: $_model.DebugBeginDialogueRequest): Promise<$_model.DebugBeginDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.debugBeginDialogueWithOptions(request, runtime);
  }

  /**
   * DebugCollectedNumber
   * 
   * @param request - DebugCollectedNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DebugCollectedNumberResponse
   */
  async debugCollectedNumberWithOptions(request: $_model.DebugCollectedNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DebugCollectedNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DebugCollectedNumber",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DebugCollectedNumberResponse>(await this.callApi(params, req, runtime), new $_model.DebugCollectedNumberResponse({}));
  }

  /**
   * DebugCollectedNumber
   * 
   * @param request - DebugCollectedNumberRequest
   * @returns DebugCollectedNumberResponse
   */
  async debugCollectedNumber(request: $_model.DebugCollectedNumberRequest): Promise<$_model.DebugCollectedNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.debugCollectedNumberWithOptions(request, runtime);
  }

  /**
   * @param request - DebugDialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DebugDialogueResponse
   */
  async debugDialogueWithOptions(request: $_model.DebugDialogueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DebugDialogueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.additionalContext)) {
      query["AdditionalContext"] = request.additionalContext;
    }

    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DebugDialogue",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DebugDialogueResponse>(await this.callApi(params, req, runtime), new $_model.DebugDialogueResponse({}));
  }

  /**
   * @param request - DebugDialogueRequest
   * @returns DebugDialogueResponse
   */
  async debugDialogue(request: $_model.DebugDialogueRequest): Promise<$_model.DebugDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.debugDialogueWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeConversationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConversationResponse
   */
  async describeConversationWithOptions(request: $_model.DescribeConversationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConversationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConversation",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConversationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConversationResponse({}));
  }

  /**
   * @param request - DescribeConversationRequest
   * @returns DescribeConversationResponse
   */
  async describeConversation(request: $_model.DescribeConversationRequest): Promise<$_model.DescribeConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConversationWithOptions(request, runtime);
  }

  /**
   * DescribeConversationContext
   * 
   * @param request - DescribeConversationContextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConversationContextResponse
   */
  async describeConversationContextWithOptions(request: $_model.DescribeConversationContextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConversationContextResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConversationContext",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConversationContextResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConversationContextResponse({}));
  }

  /**
   * DescribeConversationContext
   * 
   * @param request - DescribeConversationContextRequest
   * @returns DescribeConversationContextResponse
   */
  async describeConversationContext(request: $_model.DescribeConversationContextRequest): Promise<$_model.DescribeConversationContextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConversationContextWithOptions(request, runtime);
  }

  /**
   * DescribeExportProgress
   * 
   * @param request - DescribeExportProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExportProgressResponse
   */
  async describeExportProgressWithOptions(request: $_model.DescribeExportProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExportProgressResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExportProgress",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExportProgressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExportProgressResponse({}));
  }

  /**
   * DescribeExportProgress
   * 
   * @param request - DescribeExportProgressRequest
   * @returns DescribeExportProgressResponse
   */
  async describeExportProgress(request: $_model.DescribeExportProgressRequest): Promise<$_model.DescribeExportProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExportProgressWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: $_model.DescribeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceResponse({}));
  }

  /**
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: $_model.DescribeInstanceRequest): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeNavigationConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNavigationConfigResponse
   */
  async describeNavigationConfigWithOptions(request: $_model.DescribeNavigationConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNavigationConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNavigationConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNavigationConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNavigationConfigResponse({}));
  }

  /**
   * @param request - DescribeNavigationConfigRequest
   * @returns DescribeNavigationConfigResponse
   */
  async describeNavigationConfig(request: $_model.DescribeNavigationConfigRequest): Promise<$_model.DescribeNavigationConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNavigationConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordingResponse
   */
  async describeRecordingWithOptions(request: $_model.DescribeRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecordingResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecording",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecordingResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecordingResponse({}));
  }

  /**
   * @param request - DescribeRecordingRequest
   * @returns DescribeRecordingResponse
   */
  async describeRecording(request: $_model.DescribeRecordingRequest): Promise<$_model.DescribeRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordingWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeStatisticalDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStatisticalDataResponse
   */
  async describeStatisticalDataWithOptions(request: $_model.DescribeStatisticalDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStatisticalDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStatisticalData",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStatisticalDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStatisticalDataResponse({}));
  }

  /**
   * @param request - DescribeStatisticalDataRequest
   * @returns DescribeStatisticalDataResponse
   */
  async describeStatisticalData(request: $_model.DescribeStatisticalDataRequest): Promise<$_model.DescribeStatisticalDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStatisticalDataWithOptions(request, runtime);
  }

  /**
   * 获取TTS配置
   * 
   * @param request - DescribeTTSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTTSConfigResponse
   */
  async describeTTSConfigWithOptions(request: $_model.DescribeTTSConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTTSConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTTSConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTTSConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTTSConfigResponse({}));
  }

  /**
   * 获取TTS配置
   * 
   * @param request - DescribeTTSConfigRequest
   * @returns DescribeTTSConfigResponse
   */
  async describeTTSConfig(request: $_model.DescribeTTSConfigRequest): Promise<$_model.DescribeTTSConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTTSConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DialogueResponse
   */
  async dialogueWithOptions(request: $_model.DialogueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DialogueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.additionalContext)) {
      query["AdditionalContext"] = request.additionalContext;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.emotion)) {
      query["Emotion"] = request.emotion;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!$dara.isNull(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Dialogue",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DialogueResponse>(await this.callApi(params, req, runtime), new $_model.DialogueResponse({}));
  }

  /**
   * @param request - DialogueRequest
   * @returns DialogueResponse
   */
  async dialogue(request: $_model.DialogueRequest): Promise<$_model.DialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dialogueWithOptions(request, runtime);
  }

  /**
   * @param request - DisableInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableInstanceResponse
   */
  async disableInstanceWithOptions(request: $_model.DisableInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DisableInstanceResponse({}));
  }

  /**
   * @param request - DisableInstanceRequest
   * @returns DisableInstanceResponse
   */
  async disableInstance(request: $_model.DisableInstanceRequest): Promise<$_model.DisableInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - EnableInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInstanceResponse
   */
  async enableInstanceWithOptions(request: $_model.EnableInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableInstanceResponse>(await this.callApi(params, req, runtime), new $_model.EnableInstanceResponse({}));
  }

  /**
   * @param request - EnableInstanceRequest
   * @returns EnableInstanceResponse
   */
  async enableInstance(request: $_model.EnableInstanceRequest): Promise<$_model.EnableInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - EndDialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EndDialogueResponse
   */
  async endDialogueWithOptions(request: $_model.EndDialogueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EndDialogueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.hangUpParams)) {
      query["HangUpParams"] = request.hangUpParams;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EndDialogue",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EndDialogueResponse>(await this.callApi(params, req, runtime), new $_model.EndDialogueResponse({}));
  }

  /**
   * @param request - EndDialogueRequest
   * @returns EndDialogueResponse
   */
  async endDialogue(request: $_model.EndDialogueRequest): Promise<$_model.EndDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.endDialogueWithOptions(request, runtime);
  }

  /**
   * ExportConversationDetails
   * 
   * @param request - ExportConversationDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportConversationDetailsResponse
   */
  async exportConversationDetailsWithOptions(request: $_model.ExportConversationDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportConversationDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTimeLeftRange)) {
      query["BeginTimeLeftRange"] = request.beginTimeLeftRange;
    }

    if (!$dara.isNull(request.beginTimeRightRange)) {
      query["BeginTimeRightRange"] = request.beginTimeRightRange;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.debugConversation)) {
      query["DebugConversation"] = request.debugConversation;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
    }

    if (!$dara.isNull(request.result)) {
      query["Result"] = request.result;
    }

    if (!$dara.isNull(request.roundsLeftRange)) {
      query["RoundsLeftRange"] = request.roundsLeftRange;
    }

    if (!$dara.isNull(request.roundsRightRange)) {
      query["RoundsRightRange"] = request.roundsRightRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportConversationDetails",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportConversationDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ExportConversationDetailsResponse({}));
  }

  /**
   * ExportConversationDetails
   * 
   * @param request - ExportConversationDetailsRequest
   * @returns ExportConversationDetailsResponse
   */
  async exportConversationDetails(request: $_model.ExportConversationDetailsRequest): Promise<$_model.ExportConversationDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportConversationDetailsWithOptions(request, runtime);
  }

  /**
   * @param request - ExportStatisticalDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportStatisticalDataResponse
   */
  async exportStatisticalDataWithOptions(request: $_model.ExportStatisticalDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportStatisticalDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTimeLeftRange)) {
      query["BeginTimeLeftRange"] = request.beginTimeLeftRange;
    }

    if (!$dara.isNull(request.beginTimeRightRange)) {
      query["BeginTimeRightRange"] = request.beginTimeRightRange;
    }

    if (!$dara.isNull(request.exportType)) {
      query["ExportType"] = request.exportType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.timeUnit)) {
      query["TimeUnit"] = request.timeUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportStatisticalData",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportStatisticalDataResponse>(await this.callApi(params, req, runtime), new $_model.ExportStatisticalDataResponse({}));
  }

  /**
   * @param request - ExportStatisticalDataRequest
   * @returns ExportStatisticalDataResponse
   */
  async exportStatisticalData(request: $_model.ExportStatisticalDataRequest): Promise<$_model.ExportStatisticalDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportStatisticalDataWithOptions(request, runtime);
  }

  /**
   * 获取Asr配置
   * 
   * @param request - GetAsrConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsrConfigResponse
   */
  async getAsrConfigWithOptions(request: $_model.GetAsrConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsrConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configLevel)) {
      query["ConfigLevel"] = request.configLevel;
    }

    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsrConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsrConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetAsrConfigResponse({}));
  }

  /**
   * 获取Asr配置
   * 
   * @param request - GetAsrConfigRequest
   * @returns GetAsrConfigResponse
   */
  async getAsrConfig(request: $_model.GetAsrConfigRequest): Promise<$_model.GetAsrConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsrConfigWithOptions(request, runtime);
  }

  /**
   * GetRealTimeConcurrency
   * 
   * @param request - GetRealTimeConcurrencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRealTimeConcurrencyResponse
   */
  async getRealTimeConcurrencyWithOptions(request: $_model.GetRealTimeConcurrencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRealTimeConcurrencyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRealTimeConcurrency",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRealTimeConcurrencyResponse>(await this.callApi(params, req, runtime), new $_model.GetRealTimeConcurrencyResponse({}));
  }

  /**
   * GetRealTimeConcurrency
   * 
   * @param request - GetRealTimeConcurrencyRequest
   * @returns GetRealTimeConcurrencyResponse
   */
  async getRealTimeConcurrency(request: $_model.GetRealTimeConcurrencyRequest): Promise<$_model.GetRealTimeConcurrencyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRealTimeConcurrencyWithOptions(request, runtime);
  }

  /**
   * @param request - ListChatbotInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatbotInstancesResponse
   */
  async listChatbotInstancesWithOptions(request: $_model.ListChatbotInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatbotInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatbotInstances",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatbotInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListChatbotInstancesResponse({}));
  }

  /**
   * @param request - ListChatbotInstancesRequest
   * @returns ListChatbotInstancesResponse
   */
  async listChatbotInstances(request: $_model.ListChatbotInstancesRequest): Promise<$_model.ListChatbotInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatbotInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - ListConversationDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConversationDetailsResponse
   */
  async listConversationDetailsWithOptions(request: $_model.ListConversationDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConversationDetailsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConversationDetails",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConversationDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListConversationDetailsResponse({}));
  }

  /**
   * @param request - ListConversationDetailsRequest
   * @returns ListConversationDetailsResponse
   */
  async listConversationDetails(request: $_model.ListConversationDetailsRequest): Promise<$_model.ListConversationDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConversationDetailsWithOptions(request, runtime);
  }

  /**
   * 查询会话列表
   * 
   * @param request - ListConversationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConversationsResponse
   */
  async listConversationsWithOptions(request: $_model.ListConversationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConversationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConversations",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConversationsResponse>(await this.callApi(params, req, runtime), new $_model.ListConversationsResponse({}));
  }

  /**
   * 查询会话列表
   * 
   * @param request - ListConversationsRequest
   * @returns ListConversationsResponse
   */
  async listConversations(request: $_model.ListConversationsRequest): Promise<$_model.ListConversationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConversationsWithOptions(request, runtime);
  }

  /**
   * 下载列表
   * 
   * @param request - ListDownloadTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDownloadTasksResponse
   */
  async listDownloadTasksWithOptions(request: $_model.ListDownloadTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDownloadTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDownloadTasks",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDownloadTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListDownloadTasksResponse({}));
  }

  /**
   * 下载列表
   * 
   * @param request - ListDownloadTasksRequest
   * @returns ListDownloadTasksResponse
   */
  async listDownloadTasks(request: $_model.ListDownloadTasksRequest): Promise<$_model.ListDownloadTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDownloadTasksWithOptions(request, runtime);
  }

  /**
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * 修改Asr配置
   * 
   * @param request - ModifyAsrConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAsrConfigResponse
   */
  async modifyAsrConfigWithOptions(request: $_model.ModifyAsrConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAsrConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.asrAcousticModelId)) {
      query["AsrAcousticModelId"] = request.asrAcousticModelId;
    }

    if (!$dara.isNull(request.asrClassVocabularyId)) {
      query["AsrClassVocabularyId"] = request.asrClassVocabularyId;
    }

    if (!$dara.isNull(request.asrCustomizationId)) {
      query["AsrCustomizationId"] = request.asrCustomizationId;
    }

    if (!$dara.isNull(request.asrOverrides)) {
      query["AsrOverrides"] = request.asrOverrides;
    }

    if (!$dara.isNull(request.asrVocabularyId)) {
      query["AsrVocabularyId"] = request.asrVocabularyId;
    }

    if (!$dara.isNull(request.configLevel)) {
      query["ConfigLevel"] = request.configLevel;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!$dara.isNull(request.nlsServiceType)) {
      query["NlsServiceType"] = request.nlsServiceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAsrConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAsrConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAsrConfigResponse({}));
  }

  /**
   * 修改Asr配置
   * 
   * @param request - ModifyAsrConfigRequest
   * @returns ModifyAsrConfigResponse
   */
  async modifyAsrConfig(request: $_model.ModifyAsrConfigRequest): Promise<$_model.ModifyAsrConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAsrConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyGreetingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGreetingConfigResponse
   */
  async modifyGreetingConfigWithOptions(request: $_model.ModifyGreetingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGreetingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.greetingWords)) {
      query["GreetingWords"] = request.greetingWords;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentTrigger)) {
      query["IntentTrigger"] = request.intentTrigger;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyGreetingConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGreetingConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGreetingConfigResponse({}));
  }

  /**
   * @param request - ModifyGreetingConfigRequest
   * @returns ModifyGreetingConfigResponse
   */
  async modifyGreetingConfig(request: $_model.ModifyGreetingConfigRequest): Promise<$_model.ModifyGreetingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGreetingConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceResponse
   */
  async modifyInstanceWithOptions(request: $_model.ModifyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.concurrency)) {
      query["Concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstance",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceResponse({}));
  }

  /**
   * @param request - ModifyInstanceRequest
   * @returns ModifyInstanceResponse
   */
  async modifyInstance(request: $_model.ModifyInstanceRequest): Promise<$_model.ModifyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - ModifySilenceTimeoutConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySilenceTimeoutConfigResponse
   */
  async modifySilenceTimeoutConfigWithOptions(request: $_model.ModifySilenceTimeoutConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySilenceTimeoutConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.finalAction)) {
      query["FinalAction"] = request.finalAction;
    }

    if (!$dara.isNull(request.finalActionParams)) {
      query["FinalActionParams"] = request.finalActionParams;
    }

    if (!$dara.isNull(request.finalPrompt)) {
      query["FinalPrompt"] = request.finalPrompt;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intentTrigger)) {
      query["IntentTrigger"] = request.intentTrigger;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySilenceTimeoutConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySilenceTimeoutConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifySilenceTimeoutConfigResponse({}));
  }

  /**
   * @param request - ModifySilenceTimeoutConfigRequest
   * @returns ModifySilenceTimeoutConfigResponse
   */
  async modifySilenceTimeoutConfig(request: $_model.ModifySilenceTimeoutConfigRequest): Promise<$_model.ModifySilenceTimeoutConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySilenceTimeoutConfigWithOptions(request, runtime);
  }

  /**
   * 修改TTS配置
   * 
   * @param request - ModifyTTSConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTTSConfigResponse
   */
  async modifyTTSConfigWithOptions(request: $_model.ModifyTTSConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTTSConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliCustomizedVoice)) {
      query["AliCustomizedVoice"] = request.aliCustomizedVoice;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineXunfei)) {
      query["EngineXunfei"] = request.engineXunfei;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nlsServiceType)) {
      query["NlsServiceType"] = request.nlsServiceType;
    }

    if (!$dara.isNull(request.pitchRate)) {
      query["PitchRate"] = request.pitchRate;
    }

    if (!$dara.isNull(request.speechRate)) {
      query["SpeechRate"] = request.speechRate;
    }

    if (!$dara.isNull(request.ttsOverrides)) {
      query["TtsOverrides"] = request.ttsOverrides;
    }

    if (!$dara.isNull(request.voice)) {
      query["Voice"] = request.voice;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTTSConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTTSConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTTSConfigResponse({}));
  }

  /**
   * 修改TTS配置
   * 
   * @param request - ModifyTTSConfigRequest
   * @returns ModifyTTSConfigResponse
   */
  async modifyTTSConfig(request: $_model.ModifyTTSConfigRequest): Promise<$_model.ModifyTTSConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTTSConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyUnrecognizingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUnrecognizingConfigResponse
   */
  async modifyUnrecognizingConfigWithOptions(request: $_model.ModifyUnrecognizingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUnrecognizingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.finalAction)) {
      query["FinalAction"] = request.finalAction;
    }

    if (!$dara.isNull(request.finalActionParams)) {
      query["FinalActionParams"] = request.finalActionParams;
    }

    if (!$dara.isNull(request.finalPrompt)) {
      query["FinalPrompt"] = request.finalPrompt;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUnrecognizingConfig",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUnrecognizingConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUnrecognizingConfigResponse({}));
  }

  /**
   * @param request - ModifyUnrecognizingConfigRequest
   * @returns ModifyUnrecognizingConfigResponse
   */
  async modifyUnrecognizingConfig(request: $_model.ModifyUnrecognizingConfigRequest): Promise<$_model.ModifyUnrecognizingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUnrecognizingConfigWithOptions(request, runtime);
  }

  /**
   * @param request - QueryConversationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConversationsResponse
   */
  async queryConversationsWithOptions(request: $_model.QueryConversationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConversationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConversations",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryConversationsResponse>(await this.callApi(params, req, runtime), new $_model.QueryConversationsResponse({}));
  }

  /**
   * @param request - QueryConversationsRequest
   * @returns QueryConversationsResponse
   */
  async queryConversations(request: $_model.QueryConversationsRequest): Promise<$_model.QueryConversationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryConversationsWithOptions(request, runtime);
  }

  /**
   * @param request - SaveRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveRecordingResponse
   */
  async saveRecordingWithOptions(request: $_model.SaveRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveRecordingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.voiceSliceRecordingList)) {
      query["VoiceSliceRecordingList"] = request.voiceSliceRecordingList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveRecording",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveRecordingResponse>(await this.callApi(params, req, runtime), new $_model.SaveRecordingResponse({}));
  }

  /**
   * @param request - SaveRecordingRequest
   * @returns SaveRecordingResponse
   */
  async saveRecording(request: $_model.SaveRecordingRequest): Promise<$_model.SaveRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveRecordingWithOptions(request, runtime);
  }

  /**
   * @param request - SilenceTimeoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SilenceTimeoutResponse
   */
  async silenceTimeoutWithOptions(request: $_model.SilenceTimeoutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SilenceTimeoutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.initialContext)) {
      query["InitialContext"] = request.initialContext;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SilenceTimeout",
      version: "2018-06-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SilenceTimeoutResponse>(await this.callApi(params, req, runtime), new $_model.SilenceTimeoutResponse({}));
  }

  /**
   * @param request - SilenceTimeoutRequest
   * @returns SilenceTimeoutResponse
   */
  async silenceTimeout(request: $_model.SilenceTimeoutRequest): Promise<$_model.SilenceTimeoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.silenceTimeoutWithOptions(request, runtime);
  }

}
