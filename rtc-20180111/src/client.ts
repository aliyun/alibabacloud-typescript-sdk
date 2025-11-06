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
    this._endpoint = this.getEndpoint("rtc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRecordTemplateResponse
   */
  async addRecordTemplateWithOptions(request: $_model.AddRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRecordTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.delayStopTime)) {
      query["DelayStopTime"] = request.delayStopTime;
    }

    if (!$dara.isNull(request.enableM3u8DateTime)) {
      query["EnableM3u8DateTime"] = request.enableM3u8DateTime;
    }

    if (!$dara.isNull(request.fileSplitInterval)) {
      query["FileSplitInterval"] = request.fileSplitInterval;
    }

    if (!$dara.isNull(request.formats)) {
      query["Formats"] = request.formats;
    }

    if (!$dara.isNull(request.httpCallbackUrl)) {
      query["HttpCallbackUrl"] = request.httpCallbackUrl;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.mnsQueue)) {
      query["MnsQueue"] = request.mnsQueue;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.ossFilePrefix)) {
      query["OssFilePrefix"] = request.ossFilePrefix;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskProfile)) {
      query["TaskProfile"] = request.taskProfile;
    }

    if (!$dara.isNull(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRecordTemplateResponse>(await this.callApi(params, req, runtime), new $_model.AddRecordTemplateResponse({}));
  }

  /**
   * @param request - AddRecordTemplateRequest
   * @returns AddRecordTemplateResponse
   */
  async addRecordTemplate(request: $_model.AddRecordTemplateRequest): Promise<$_model.AddRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 创建应用智能体模版
   * 
   * @param tmpReq - CreateAppAgentTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppAgentTemplateResponse
   */
  async createAppAgentTemplateWithOptions(tmpReq: $_model.CreateAppAgentTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppAgentTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppAgentTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentSilenceConfig)) {
      request.agentSilenceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentSilenceConfig, "AgentSilenceConfig", "json");
    }

    if (!$dara.isNull(tmpReq.ambientSoundConfig)) {
      request.ambientSoundConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ambientSoundConfig, "AmbientSoundConfig", "json");
    }

    if (!$dara.isNull(tmpReq.asrConfig)) {
      request.asrConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.asrConfig, "AsrConfig", "json");
    }

    if (!$dara.isNull(tmpReq.backChannelConfig)) {
      request.backChannelConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.backChannelConfig, "BackChannelConfig", "json");
    }

    if (!$dara.isNull(tmpReq.interruptConfig)) {
      request.interruptConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.interruptConfig, "InterruptConfig", "json");
    }

    if (!$dara.isNull(tmpReq.llmConfig)) {
      request.llmConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.llmConfig, "LlmConfig", "json");
    }

    if (!$dara.isNull(tmpReq.ttsConfig)) {
      request.ttsConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ttsConfig, "TtsConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentSilenceConfigShrink)) {
      query["AgentSilenceConfig"] = request.agentSilenceConfigShrink;
    }

    if (!$dara.isNull(request.ambientSoundConfigShrink)) {
      query["AmbientSoundConfig"] = request.ambientSoundConfigShrink;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.asrConfigShrink)) {
      query["AsrConfig"] = request.asrConfigShrink;
    }

    if (!$dara.isNull(request.backChannelConfigShrink)) {
      query["BackChannelConfig"] = request.backChannelConfigShrink;
    }

    if (!$dara.isNull(request.chatMode)) {
      query["ChatMode"] = request.chatMode;
    }

    if (!$dara.isNull(request.greeting)) {
      query["Greeting"] = request.greeting;
    }

    if (!$dara.isNull(request.interruptConfigShrink)) {
      query["InterruptConfig"] = request.interruptConfigShrink;
    }

    if (!$dara.isNull(request.interruptMode)) {
      query["InterruptMode"] = request.interruptMode;
    }

    if (!$dara.isNull(request.llmConfigShrink)) {
      query["LlmConfig"] = request.llmConfigShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ttsConfigShrink)) {
      query["TtsConfig"] = request.ttsConfigShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppAgentTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppAgentTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppAgentTemplateResponse({}));
  }

  /**
   * 创建应用智能体模版
   * 
   * @param request - CreateAppAgentTemplateRequest
   * @returns CreateAppAgentTemplateResponse
   */
  async createAppAgentTemplate(request: $_model.CreateAppAgentTemplateRequest): Promise<$_model.CreateAppAgentTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppAgentTemplateWithOptions(request, runtime);
  }

  /**
   * 新增app自定义布局
   * 
   * @param tmpReq - CreateAppLayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppLayoutResponse
   */
  async createAppLayoutWithOptions(tmpReq: $_model.CreateAppLayoutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppLayoutResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppLayoutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layout)) {
      request.layoutShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layout, "Layout", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.layoutShrink)) {
      query["Layout"] = request.layoutShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppLayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppLayoutResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppLayoutResponse({}));
  }

  /**
   * 新增app自定义布局
   * 
   * @param request - CreateAppLayoutRequest
   * @returns CreateAppLayoutResponse
   */
  async createAppLayout(request: $_model.CreateAppLayoutRequest): Promise<$_model.CreateAppLayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppLayoutWithOptions(request, runtime);
  }

  /**
   * 增加应用录制模版
   * 
   * @param tmpReq - CreateAppRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppRecordTemplateResponse
   */
  async createAppRecordTemplateWithOptions(tmpReq: $_model.CreateAppRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppRecordTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.recordTemplate)) {
      request.recordTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordTemplate, "RecordTemplate", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.recordTemplateShrink)) {
      query["RecordTemplate"] = request.recordTemplateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppRecordTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppRecordTemplateResponse({}));
  }

  /**
   * 增加应用录制模版
   * 
   * @param request - CreateAppRecordTemplateRequest
   * @returns CreateAppRecordTemplateResponse
   */
  async createAppRecordTemplate(request: $_model.CreateAppRecordTemplateRequest): Promise<$_model.CreateAppRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 创建应用推流模版
   * 
   * @param tmpReq - CreateAppStreamingOutTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppStreamingOutTemplateResponse
   */
  async createAppStreamingOutTemplateWithOptions(tmpReq: $_model.CreateAppStreamingOutTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppStreamingOutTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppStreamingOutTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.streamingOutTemplate)) {
      request.streamingOutTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamingOutTemplate, "StreamingOutTemplate", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.streamingOutTemplateShrink)) {
      query["StreamingOutTemplate"] = request.streamingOutTemplateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppStreamingOutTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppStreamingOutTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppStreamingOutTemplateResponse({}));
  }

  /**
   * 创建应用推流模版
   * 
   * @param request - CreateAppStreamingOutTemplateRequest
   * @returns CreateAppStreamingOutTemplateResponse
   */
  async createAppStreamingOutTemplate(request: $_model.CreateAppStreamingOutTemplateRequest): Promise<$_model.CreateAppStreamingOutTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppStreamingOutTemplateWithOptions(request, runtime);
  }

  /**
   * 创建应用合流模版
   * 
   * @param tmpReq - CreateAppViewTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppViewTemplateResponse
   */
  async createAppViewTemplateWithOptions(tmpReq: $_model.CreateAppViewTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppViewTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppViewTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.templateShrink)) {
      query["Template"] = request.templateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppViewTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppViewTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppViewTemplateResponse({}));
  }

  /**
   * 创建应用合流模版
   * 
   * @param request - CreateAppViewTemplateRequest
   * @returns CreateAppViewTemplateResponse
   */
  async createAppViewTemplate(request: $_model.CreateAppViewTemplateRequest): Promise<$_model.CreateAppViewTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppViewTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoLiveStreamRuleResponse
   */
  async createAutoLiveStreamRuleWithOptions(request: $_model.CreateAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callBack)) {
      query["CallBack"] = request.callBack;
    }

    if (!$dara.isNull(request.channelIdPrefixes)) {
      query["ChannelIdPrefixes"] = request.channelIdPrefixes;
    }

    if (!$dara.isNull(request.channelIds)) {
      query["ChannelIds"] = request.channelIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateAutoLiveStreamRuleResponse({}));
  }

  /**
   * @param request - CreateAutoLiveStreamRuleRequest
   * @returns CreateAutoLiveStreamRuleResponse
   */
  async createAutoLiveStreamRule(request: $_model.CreateAutoLiveStreamRuleRequest): Promise<$_model.CreateAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * 增加纪要热词表
   * 
   * @param tmpReq - CreateCloudNotePhrasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudNotePhrasesResponse
   */
  async createCloudNotePhrasesWithOptions(tmpReq: $_model.CreateCloudNotePhrasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudNotePhrasesResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCloudNotePhrasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.phrase)) {
      request.phraseShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phrase, "Phrase", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.phraseShrink)) {
      query["Phrase"] = request.phraseShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudNotePhrases",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudNotePhrasesResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudNotePhrasesResponse({}));
  }

  /**
   * 增加纪要热词表
   * 
   * @param request - CreateCloudNotePhrasesRequest
   * @returns CreateCloudNotePhrasesResponse
   */
  async createCloudNotePhrases(request: $_model.CreateCloudNotePhrasesRequest): Promise<$_model.CreateCloudNotePhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudNotePhrasesWithOptions(request, runtime);
  }

  /**
   * @param request - CreateEventSubscribeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEventSubscribeResponse
   */
  async createEventSubscribeWithOptions(request: $_model.CreateEventSubscribeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEventSubscribeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.events)) {
      query["Events"] = request.events;
    }

    if (!$dara.isNull(request.needCallbackAuth)) {
      query["NeedCallbackAuth"] = request.needCallbackAuth;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.users)) {
      query["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEventSubscribe",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEventSubscribeResponse>(await this.callApi(params, req, runtime), new $_model.CreateEventSubscribeResponse({}));
  }

  /**
   * @param request - CreateEventSubscribeRequest
   * @returns CreateEventSubscribeResponse
   */
  async createEventSubscribe(request: $_model.CreateEventSubscribeRequest): Promise<$_model.CreateEventSubscribeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEventSubscribeWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMPULayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMPULayoutResponse
   */
  async createMPULayoutWithOptions(request: $_model.CreateMPULayoutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMPULayoutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.audioMixCount)) {
      query["AudioMixCount"] = request.audioMixCount;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMPULayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMPULayoutResponse>(await this.callApi(params, req, runtime), new $_model.CreateMPULayoutResponse({}));
  }

  /**
   * @param request - CreateMPULayoutRequest
   * @returns CreateMPULayoutResponse
   */
  async createMPULayout(request: $_model.CreateMPULayoutRequest): Promise<$_model.CreateMPULayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMPULayoutWithOptions(request, runtime);
  }

  /**
   * 删除应用智能体模版
   * 
   * @param request - DeleteAppAgentTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppAgentTemplateResponse
   */
  async deleteAppAgentTemplateWithOptions(request: $_model.DeleteAppAgentTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppAgentTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppAgentTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppAgentTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppAgentTemplateResponse({}));
  }

  /**
   * 删除应用智能体模版
   * 
   * @param request - DeleteAppAgentTemplateRequest
   * @returns DeleteAppAgentTemplateResponse
   */
  async deleteAppAgentTemplate(request: $_model.DeleteAppAgentTemplateRequest): Promise<$_model.DeleteAppAgentTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppAgentTemplateWithOptions(request, runtime);
  }

  /**
   * 删除app自定义布局
   * 
   * @param tmpReq - DeleteAppLayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppLayoutResponse
   */
  async deleteAppLayoutWithOptions(tmpReq: $_model.DeleteAppLayoutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppLayoutResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAppLayoutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layout)) {
      request.layoutShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layout, "Layout", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.layoutShrink)) {
      query["Layout"] = request.layoutShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppLayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppLayoutResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppLayoutResponse({}));
  }

  /**
   * 删除app自定义布局
   * 
   * @param request - DeleteAppLayoutRequest
   * @returns DeleteAppLayoutResponse
   */
  async deleteAppLayout(request: $_model.DeleteAppLayoutRequest): Promise<$_model.DeleteAppLayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppLayoutWithOptions(request, runtime);
  }

  /**
   * 删除应用录制模版
   * 
   * @param tmpReq - DeleteAppRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppRecordTemplateResponse
   */
  async deleteAppRecordTemplateWithOptions(tmpReq: $_model.DeleteAppRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppRecordTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAppRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.templateShrink)) {
      query["Template"] = request.templateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppRecordTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppRecordTemplateResponse({}));
  }

  /**
   * 删除应用录制模版
   * 
   * @param request - DeleteAppRecordTemplateRequest
   * @returns DeleteAppRecordTemplateResponse
   */
  async deleteAppRecordTemplate(request: $_model.DeleteAppRecordTemplateRequest): Promise<$_model.DeleteAppRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 删除应用推流模版
   * 
   * @param tmpReq - DeleteAppStreamingOutTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppStreamingOutTemplateResponse
   */
  async deleteAppStreamingOutTemplateWithOptions(tmpReq: $_model.DeleteAppStreamingOutTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppStreamingOutTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAppStreamingOutTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.streamingOutTemplate)) {
      request.streamingOutTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamingOutTemplate, "StreamingOutTemplate", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.streamingOutTemplateShrink)) {
      query["StreamingOutTemplate"] = request.streamingOutTemplateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppStreamingOutTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppStreamingOutTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppStreamingOutTemplateResponse({}));
  }

  /**
   * 删除应用推流模版
   * 
   * @param request - DeleteAppStreamingOutTemplateRequest
   * @returns DeleteAppStreamingOutTemplateResponse
   */
  async deleteAppStreamingOutTemplate(request: $_model.DeleteAppStreamingOutTemplateRequest): Promise<$_model.DeleteAppStreamingOutTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppStreamingOutTemplateWithOptions(request, runtime);
  }

  /**
   * 删除应用合流模版
   * 
   * @param tmpReq - DeleteAppViewTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppViewTemplateResponse
   */
  async deleteAppViewTemplateWithOptions(tmpReq: $_model.DeleteAppViewTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppViewTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAppViewTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.templateShrink)) {
      query["Template"] = request.templateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppViewTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppViewTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppViewTemplateResponse({}));
  }

  /**
   * 删除应用合流模版
   * 
   * @param request - DeleteAppViewTemplateRequest
   * @returns DeleteAppViewTemplateResponse
   */
  async deleteAppViewTemplate(request: $_model.DeleteAppViewTemplateRequest): Promise<$_model.DeleteAppViewTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppViewTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoLiveStreamRuleResponse
   */
  async deleteAutoLiveStreamRuleWithOptions(request: $_model.DeleteAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAutoLiveStreamRuleResponse({}));
  }

  /**
   * @param request - DeleteAutoLiveStreamRuleRequest
   * @returns DeleteAutoLiveStreamRuleResponse
   */
  async deleteAutoLiveStreamRule(request: $_model.DeleteAutoLiveStreamRuleRequest): Promise<$_model.DeleteAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChannelResponse
   */
  async deleteChannelWithOptions(request: $_model.DeleteChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChannelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChannelResponse({}));
  }

  /**
   * @param request - DeleteChannelRequest
   * @returns DeleteChannelResponse
   */
  async deleteChannel(request: $_model.DeleteChannelRequest): Promise<$_model.DeleteChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChannelWithOptions(request, runtime);
  }

  /**
   * 删除纪要热词表
   * 
   * @param tmpReq - DeleteCloudNotePhrasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudNotePhrasesResponse
   */
  async deleteCloudNotePhrasesWithOptions(tmpReq: $_model.DeleteCloudNotePhrasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudNotePhrasesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteCloudNotePhrasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.phrase)) {
      request.phraseShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phrase, "Phrase", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.phraseShrink)) {
      query["Phrase"] = request.phraseShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudNotePhrases",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudNotePhrasesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudNotePhrasesResponse({}));
  }

  /**
   * 删除纪要热词表
   * 
   * @param request - DeleteCloudNotePhrasesRequest
   * @returns DeleteCloudNotePhrasesResponse
   */
  async deleteCloudNotePhrases(request: $_model.DeleteCloudNotePhrasesRequest): Promise<$_model.DeleteCloudNotePhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudNotePhrasesWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteEventSubscribeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventSubscribeResponse
   */
  async deleteEventSubscribeWithOptions(request: $_model.DeleteEventSubscribeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventSubscribeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.subscribeId)) {
      query["SubscribeId"] = request.subscribeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventSubscribe",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventSubscribeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventSubscribeResponse({}));
  }

  /**
   * @param request - DeleteEventSubscribeRequest
   * @returns DeleteEventSubscribeResponse
   */
  async deleteEventSubscribe(request: $_model.DeleteEventSubscribeRequest): Promise<$_model.DeleteEventSubscribeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventSubscribeWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMPULayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMPULayoutResponse
   */
  async deleteMPULayoutWithOptions(request: $_model.DeleteMPULayoutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMPULayoutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.layoutId)) {
      query["LayoutId"] = request.layoutId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMPULayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMPULayoutResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMPULayoutResponse({}));
  }

  /**
   * @param request - DeleteMPULayoutRequest
   * @returns DeleteMPULayoutResponse
   */
  async deleteMPULayout(request: $_model.DeleteMPULayoutRequest): Promise<$_model.DeleteMPULayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMPULayoutWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecordTemplateResponse
   */
  async deleteRecordTemplateWithOptions(request: $_model.DeleteRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecordTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecordTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecordTemplateResponse({}));
  }

  /**
   * @param request - DeleteRecordTemplateRequest
   * @returns DeleteRecordTemplateResponse
   */
  async deleteRecordTemplate(request: $_model.DeleteRecordTemplateRequest): Promise<$_model.DeleteRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 列出系统支持的事件回调
   * 
   * @param request - DescribeAllCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllCallbackResponse
   */
  async describeAllCallbackWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAllCallbackResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAllCallback",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAllCallbackResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAllCallbackResponse({}));
  }

  /**
   * 列出系统支持的事件回调
   * @returns DescribeAllCallbackResponse
   */
  async describeAllCallback(): Promise<$_model.DescribeAllCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllCallbackWithOptions(runtime);
  }

  /**
   * 查询应用智能体开关
   * 
   * @param request - DescribeAppAgentFunctionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppAgentFunctionStatusResponse
   */
  async describeAppAgentFunctionStatusWithOptions(request: $_model.DescribeAppAgentFunctionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppAgentFunctionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppAgentFunctionStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppAgentFunctionStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppAgentFunctionStatusResponse({}));
  }

  /**
   * 查询应用智能体开关
   * 
   * @param request - DescribeAppAgentFunctionStatusRequest
   * @returns DescribeAppAgentFunctionStatusResponse
   */
  async describeAppAgentFunctionStatus(request: $_model.DescribeAppAgentFunctionStatusRequest): Promise<$_model.DescribeAppAgentFunctionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppAgentFunctionStatusWithOptions(request, runtime);
  }

  /**
   * 应用智能体模版列表
   * 
   * @param request - DescribeAppAgentTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppAgentTemplatesResponse
   */
  async describeAppAgentTemplatesWithOptions(request: $_model.DescribeAppAgentTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppAgentTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppAgentTemplates",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppAgentTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppAgentTemplatesResponse({}));
  }

  /**
   * 应用智能体模版列表
   * 
   * @param request - DescribeAppAgentTemplatesRequest
   * @returns DescribeAppAgentTemplatesResponse
   */
  async describeAppAgentTemplates(request: $_model.DescribeAppAgentTemplatesRequest): Promise<$_model.DescribeAppAgentTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppAgentTemplatesWithOptions(request, runtime);
  }

  /**
   * 查看app回调开关
   * 
   * @param request - DescribeAppCallStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppCallStatusResponse
   */
  async describeAppCallStatusWithOptions(request: $_model.DescribeAppCallStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppCallStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppCallStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppCallStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppCallStatusResponse({}));
  }

  /**
   * 查看app回调开关
   * 
   * @param request - DescribeAppCallStatusRequest
   * @returns DescribeAppCallStatusResponse
   */
  async describeAppCallStatus(request: $_model.DescribeAppCallStatusRequest): Promise<$_model.DescribeAppCallStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppCallStatusWithOptions(request, runtime);
  }

  /**
   * 获取app回调密钥
   * 
   * @param request - DescribeAppCallbackSecretKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppCallbackSecretKeyResponse
   */
  async describeAppCallbackSecretKeyWithOptions(request: $_model.DescribeAppCallbackSecretKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppCallbackSecretKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppCallbackSecretKey",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppCallbackSecretKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppCallbackSecretKeyResponse({}));
  }

  /**
   * 获取app回调密钥
   * 
   * @param request - DescribeAppCallbackSecretKeyRequest
   * @returns DescribeAppCallbackSecretKeyResponse
   */
  async describeAppCallbackSecretKey(request: $_model.DescribeAppCallbackSecretKeyRequest): Promise<$_model.DescribeAppCallbackSecretKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppCallbackSecretKeyWithOptions(request, runtime);
  }

  /**
   * 查看AppKey
   * 
   * @param request - DescribeAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppKeyResponse
   */
  async describeAppKeyWithOptions(request: $_model.DescribeAppKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppKey",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppKeyResponse({}));
  }

  /**
   * 查看AppKey
   * 
   * @param request - DescribeAppKeyRequest
   * @returns DescribeAppKeyResponse
   */
  async describeAppKey(request: $_model.DescribeAppKeyRequest): Promise<$_model.DescribeAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppKeyWithOptions(request, runtime);
  }

  /**
   * 查询app自定义布局
   * 
   * @param tmpReq - DescribeAppLayoutsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppLayoutsResponse
   */
  async describeAppLayoutsWithOptions(tmpReq: $_model.DescribeAppLayoutsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppLayoutsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeAppLayoutsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppLayouts",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppLayoutsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppLayoutsResponse({}));
  }

  /**
   * 查询app自定义布局
   * 
   * @param request - DescribeAppLayoutsRequest
   * @returns DescribeAppLayoutsResponse
   */
  async describeAppLayouts(request: $_model.DescribeAppLayoutsRequest): Promise<$_model.DescribeAppLayoutsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppLayoutsWithOptions(request, runtime);
  }

  /**
   * 查看应用旁路开关
   * 
   * @param request - DescribeAppLiveStreamStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppLiveStreamStatusResponse
   */
  async describeAppLiveStreamStatusWithOptions(request: $_model.DescribeAppLiveStreamStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppLiveStreamStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppLiveStreamStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppLiveStreamStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppLiveStreamStatusResponse({}));
  }

  /**
   * 查看应用旁路开关
   * 
   * @param request - DescribeAppLiveStreamStatusRequest
   * @returns DescribeAppLiveStreamStatusResponse
   */
  async describeAppLiveStreamStatus(request: $_model.DescribeAppLiveStreamStatusRequest): Promise<$_model.DescribeAppLiveStreamStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppLiveStreamStatusWithOptions(request, runtime);
  }

  /**
   * 查询应用录制开关
   * 
   * @param request - DescribeAppRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppRecordStatusResponse
   */
  async describeAppRecordStatusWithOptions(request: $_model.DescribeAppRecordStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppRecordStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppRecordStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppRecordStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppRecordStatusResponse({}));
  }

  /**
   * 查询应用录制开关
   * 
   * @param request - DescribeAppRecordStatusRequest
   * @returns DescribeAppRecordStatusResponse
   */
  async describeAppRecordStatus(request: $_model.DescribeAppRecordStatusRequest): Promise<$_model.DescribeAppRecordStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppRecordStatusWithOptions(request, runtime);
  }

  /**
   * 应用录制模版列表
   * 
   * @param tmpReq - DescribeAppRecordTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppRecordTemplatesResponse
   */
  async describeAppRecordTemplatesWithOptions(tmpReq: $_model.DescribeAppRecordTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppRecordTemplatesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeAppRecordTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppRecordTemplates",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppRecordTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppRecordTemplatesResponse({}));
  }

  /**
   * 应用录制模版列表
   * 
   * @param request - DescribeAppRecordTemplatesRequest
   * @returns DescribeAppRecordTemplatesResponse
   */
  async describeAppRecordTemplates(request: $_model.DescribeAppRecordTemplatesRequest): Promise<$_model.DescribeAppRecordTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppRecordTemplatesWithOptions(request, runtime);
  }

  /**
   * 查询录制列表
   * 
   * @param tmpReq - DescribeAppRecordingFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppRecordingFilesResponse
   */
  async describeAppRecordingFilesWithOptions(tmpReq: $_model.DescribeAppRecordingFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppRecordingFilesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeAppRecordingFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppRecordingFiles",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppRecordingFilesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppRecordingFilesResponse({}));
  }

  /**
   * 查询录制列表
   * 
   * @param request - DescribeAppRecordingFilesRequest
   * @returns DescribeAppRecordingFilesResponse
   */
  async describeAppRecordingFiles(request: $_model.DescribeAppRecordingFilesRequest): Promise<$_model.DescribeAppRecordingFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppRecordingFilesWithOptions(request, runtime);
  }

  /**
   * 应用推流模版列表
   * 
   * @param tmpReq - DescribeAppStreamingOutTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppStreamingOutTemplatesResponse
   */
  async describeAppStreamingOutTemplatesWithOptions(tmpReq: $_model.DescribeAppStreamingOutTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppStreamingOutTemplatesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeAppStreamingOutTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.conditionShrink)) {
      query["Condition"] = request.conditionShrink;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppStreamingOutTemplates",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppStreamingOutTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppStreamingOutTemplatesResponse({}));
  }

  /**
   * 应用推流模版列表
   * 
   * @param request - DescribeAppStreamingOutTemplatesRequest
   * @returns DescribeAppStreamingOutTemplatesResponse
   */
  async describeAppStreamingOutTemplates(request: $_model.DescribeAppStreamingOutTemplatesRequest): Promise<$_model.DescribeAppStreamingOutTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppStreamingOutTemplatesWithOptions(request, runtime);
  }

  /**
   * 查看合流开关
   * 
   * @param request - DescribeAppViewStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppViewStatusResponse
   */
  async describeAppViewStatusWithOptions(request: $_model.DescribeAppViewStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppViewStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppViewStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppViewStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppViewStatusResponse({}));
  }

  /**
   * 查看合流开关
   * 
   * @param request - DescribeAppViewStatusRequest
   * @returns DescribeAppViewStatusResponse
   */
  async describeAppViewStatus(request: $_model.DescribeAppViewStatusRequest): Promise<$_model.DescribeAppViewStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppViewStatusWithOptions(request, runtime);
  }

  /**
   * 应用合流模版列表
   * 
   * @param tmpReq - DescribeAppViewTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppViewTemplatesResponse
   */
  async describeAppViewTemplatesWithOptions(tmpReq: $_model.DescribeAppViewTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppViewTemplatesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeAppViewTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.conditionShrink)) {
      query["Condition"] = request.conditionShrink;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppViewTemplates",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppViewTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppViewTemplatesResponse({}));
  }

  /**
   * 应用合流模版列表
   * 
   * @param request - DescribeAppViewTemplatesRequest
   * @returns DescribeAppViewTemplatesResponse
   */
  async describeAppViewTemplates(request: $_model.DescribeAppViewTemplatesRequest): Promise<$_model.DescribeAppViewTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppViewTemplatesWithOptions(request, runtime);
  }

  /**
   * App列表
   * 
   * @param request - DescribeAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppsResponse
   */
  async describeAppsWithOptions(request: $_model.DescribeAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApps",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppsResponse({}));
  }

  /**
   * App列表
   * 
   * @param request - DescribeAppsRequest
   * @returns DescribeAppsResponse
   */
  async describeApps(request: $_model.DescribeAppsRequest): Promise<$_model.DescribeAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoLiveStreamRuleResponse
   */
  async describeAutoLiveStreamRuleWithOptions(request: $_model.DescribeAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoLiveStreamRuleResponse({}));
  }

  /**
   * @param request - DescribeAutoLiveStreamRuleRequest
   * @returns DescribeAutoLiveStreamRuleResponse
   */
  async describeAutoLiveStreamRule(request: $_model.DescribeAutoLiveStreamRuleRequest): Promise<$_model.DescribeAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * 调用DescribeCall获取单次通信详情。
   * 
   * @param request - DescribeCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCallResponse
   */
  async describeCallWithOptions(request: $_model.DescribeCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.extDataType)) {
      query["ExtDataType"] = request.extDataType;
    }

    if (!$dara.isNull(request.queryExpInfo)) {
      query["QueryExpInfo"] = request.queryExpInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCall",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCallResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCallResponse({}));
  }

  /**
   * 调用DescribeCall获取单次通信详情。
   * 
   * @param request - DescribeCallRequest
   * @returns DescribeCallResponse
   */
  async describeCall(request: $_model.DescribeCallRequest): Promise<$_model.DescribeCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCallWithOptions(request, runtime);
  }

  /**
   * 调用DescribeCallList分页查询时间范围内创建的通信信息。
   * 
   * @param request - DescribeCallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCallListResponse
   */
  async describeCallListWithOptions(request: $_model.DescribeCallListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCallListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callStatus)) {
      query["CallStatus"] = request.callStatus;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCallList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCallListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCallListResponse({}));
  }

  /**
   * 调用DescribeCallList分页查询时间范围内创建的通信信息。
   * 
   * @param request - DescribeCallListRequest
   * @returns DescribeCallListResponse
   */
  async describeCallList(request: $_model.DescribeCallListRequest): Promise<$_model.DescribeCallListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCallListWithOptions(request, runtime);
  }

  /**
   * app事件回调列表
   * 
   * @param request - DescribeCallbacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCallbacksResponse
   */
  async describeCallbacksWithOptions(request: $_model.DescribeCallbacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCallbacksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCallbacks",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCallbacksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCallbacksResponse({}));
  }

  /**
   * app事件回调列表
   * 
   * @param request - DescribeCallbacksRequest
   * @returns DescribeCallbacksResponse
   */
  async describeCallbacks(request: $_model.DescribeCallbacksRequest): Promise<$_model.DescribeCallbacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCallbacksWithOptions(request, runtime);
  }

  /**
   * DescribeChannel
   * 
   * @param request - DescribeChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelResponse
   */
  async describeChannelWithOptions(request: $_model.DescribeChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelResponse({}));
  }

  /**
   * DescribeChannel
   * 
   * @param request - DescribeChannelRequest
   * @returns DescribeChannelResponse
   */
  async describeChannel(request: $_model.DescribeChannelRequest): Promise<$_model.DescribeChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelWithOptions(request, runtime);
  }

  /**
   * 查询频道的所有参会者
   * 
   * @param request - DescribeChannelAllUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelAllUsersResponse
   */
  async describeChannelAllUsersWithOptions(request: $_model.DescribeChannelAllUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelAllUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelAllUsers",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelAllUsersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelAllUsersResponse({}));
  }

  /**
   * 查询频道的所有参会者
   * 
   * @param request - DescribeChannelAllUsersRequest
   * @returns DescribeChannelAllUsersResponse
   */
  async describeChannelAllUsers(request: $_model.DescribeChannelAllUsersRequest): Promise<$_model.DescribeChannelAllUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelAllUsersWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelAreaDistributionStatData获取频道地区分布统计数据。
   * 
   * @param request - DescribeChannelAreaDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelAreaDistributionStatDataResponse
   */
  async describeChannelAreaDistributionStatDataWithOptions(request: $_model.DescribeChannelAreaDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelAreaDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelAreaDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelAreaDistributionStatDataResponse({}));
  }

  /**
   * 调用DescribeChannelAreaDistributionStatData获取频道地区分布统计数据。
   * 
   * @param request - DescribeChannelAreaDistributionStatDataRequest
   * @returns DescribeChannelAreaDistributionStatDataResponse
   */
  async describeChannelAreaDistributionStatData(request: $_model.DescribeChannelAreaDistributionStatDataRequest): Promise<$_model.DescribeChannelAreaDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelAreaDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelDistributionStatData获取频道分布统计数据。
   * 
   * @param request - DescribeChannelDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelDistributionStatDataResponse
   */
  async describeChannelDistributionStatDataWithOptions(request: $_model.DescribeChannelDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelDistributionStatDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelDistributionStatDataResponse({}));
  }

  /**
   * 调用DescribeChannelDistributionStatData获取频道分布统计数据。
   * 
   * @param request - DescribeChannelDistributionStatDataRequest
   * @returns DescribeChannelDistributionStatDataResponse
   */
  async describeChannelDistributionStatData(request: $_model.DescribeChannelDistributionStatDataRequest): Promise<$_model.DescribeChannelDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelOverallData查询频道概览数据。
   * 
   * @param request - DescribeChannelOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelOverallDataResponse
   */
  async describeChannelOverallDataWithOptions(request: $_model.DescribeChannelOverallDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelOverallDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelOverallDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelOverallDataResponse({}));
  }

  /**
   * 调用DescribeChannelOverallData查询频道概览数据。
   * 
   * @param request - DescribeChannelOverallDataRequest
   * @returns DescribeChannelOverallDataResponse
   */
  async describeChannelOverallData(request: $_model.DescribeChannelOverallDataRequest): Promise<$_model.DescribeChannelOverallDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelOverallDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeChannelParticipantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelParticipantsResponse
   */
  async describeChannelParticipantsWithOptions(request: $_model.DescribeChannelParticipantsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelParticipantsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelParticipants",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelParticipantsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelParticipantsResponse({}));
  }

  /**
   * @param request - DescribeChannelParticipantsRequest
   * @returns DescribeChannelParticipantsResponse
   */
  async describeChannelParticipants(request: $_model.DescribeChannelParticipantsRequest): Promise<$_model.DescribeChannelParticipantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelParticipantsWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelTopPubUserList获取频道内发布端的用户列表（按用户在线时长降序）。
   * 
   * @param request - DescribeChannelTopPubUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelTopPubUserListResponse
   */
  async describeChannelTopPubUserListWithOptions(request: $_model.DescribeChannelTopPubUserListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelTopPubUserListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelTopPubUserList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelTopPubUserListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelTopPubUserListResponse({}));
  }

  /**
   * 调用DescribeChannelTopPubUserList获取频道内发布端的用户列表（按用户在线时长降序）。
   * 
   * @param request - DescribeChannelTopPubUserListRequest
   * @returns DescribeChannelTopPubUserListResponse
   */
  async describeChannelTopPubUserList(request: $_model.DescribeChannelTopPubUserListRequest): Promise<$_model.DescribeChannelTopPubUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelTopPubUserListWithOptions(request, runtime);
  }

  /**
   * DescribeChannelUser
   * 
   * @param request - DescribeChannelUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelUserResponse
   */
  async describeChannelUserWithOptions(request: $_model.DescribeChannelUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelUser",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelUserResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelUserResponse({}));
  }

  /**
   * DescribeChannelUser
   * 
   * @param request - DescribeChannelUserRequest
   * @returns DescribeChannelUserResponse
   */
  async describeChannelUser(request: $_model.DescribeChannelUserRequest): Promise<$_model.DescribeChannelUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelUserWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelUserMetrics查询频道总览中的用户数据。
   * 
   * @param request - DescribeChannelUserMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelUserMetricsResponse
   */
  async describeChannelUserMetricsWithOptions(request: $_model.DescribeChannelUserMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelUserMetricsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelUserMetrics",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelUserMetricsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelUserMetricsResponse({}));
  }

  /**
   * 调用DescribeChannelUserMetrics查询频道总览中的用户数据。
   * 
   * @param request - DescribeChannelUserMetricsRequest
   * @returns DescribeChannelUserMetricsResponse
   */
  async describeChannelUserMetrics(request: $_model.DescribeChannelUserMetricsRequest): Promise<$_model.DescribeChannelUserMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelUserMetricsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeChannelUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelUsersResponse
   */
  async describeChannelUsersWithOptions(request: $_model.DescribeChannelUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelUsers",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelUsersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelUsersResponse({}));
  }

  /**
   * @param request - DescribeChannelUsersRequest
   * @returns DescribeChannelUsersResponse
   */
  async describeChannelUsers(request: $_model.DescribeChannelUsersRequest): Promise<$_model.DescribeChannelUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelUsersWithOptions(request, runtime);
  }

  /**
   * 查询在线频道列表
   * 
   * @param request - DescribeChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelsResponse
   */
  async describeChannelsWithOptions(request: $_model.DescribeChannelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChannelsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannels",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChannelsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChannelsResponse({}));
  }

  /**
   * 查询在线频道列表
   * 
   * @param request - DescribeChannelsRequest
   * @returns DescribeChannelsResponse
   */
  async describeChannels(request: $_model.DescribeChannelsRequest): Promise<$_model.DescribeChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelsWithOptions(request, runtime);
  }

  /**
   * 纪要热词列表
   * 
   * @param tmpReq - DescribeCloudNotePhrasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudNotePhrasesResponse
   */
  async describeCloudNotePhrasesWithOptions(tmpReq: $_model.DescribeCloudNotePhrasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudNotePhrasesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCloudNotePhrasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.conditionShrink)) {
      query["Condition"] = request.conditionShrink;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudNotePhrases",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudNotePhrasesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudNotePhrasesResponse({}));
  }

  /**
   * 纪要热词列表
   * 
   * @param request - DescribeCloudNotePhrasesRequest
   * @returns DescribeCloudNotePhrasesResponse
   */
  async describeCloudNotePhrases(request: $_model.DescribeCloudNotePhrasesRequest): Promise<$_model.DescribeCloudNotePhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudNotePhrasesWithOptions(request, runtime);
  }

  /**
   * 纪要列表
   * 
   * @param tmpReq - DescribeCloudNotesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudNotesResponse
   */
  async describeCloudNotesWithOptions(tmpReq: $_model.DescribeCloudNotesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudNotesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCloudNotesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudNotes",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudNotesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudNotesResponse({}));
  }

  /**
   * 纪要列表
   * 
   * @param request - DescribeCloudNotesRequest
   * @returns DescribeCloudNotesResponse
   */
  async describeCloudNotes(request: $_model.DescribeCloudNotesRequest): Promise<$_model.DescribeCloudNotesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudNotesWithOptions(request, runtime);
  }

  /**
   * 查询录制任务状态
   * 
   * @param request - DescribeCloudRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudRecordStatusResponse
   */
  async describeCloudRecordStatusWithOptions(request: $_model.DescribeCloudRecordStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudRecordStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudRecordStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudRecordStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudRecordStatusResponse({}));
  }

  /**
   * 查询录制任务状态
   * 
   * @param request - DescribeCloudRecordStatusRequest
   * @returns DescribeCloudRecordStatusResponse
   */
  async describeCloudRecordStatus(request: $_model.DescribeCloudRecordStatusRequest): Promise<$_model.DescribeCloudRecordStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudRecordStatusWithOptions(request, runtime);
  }

  /**
   * 调用DescribeEndPointEventList获取端对端用户事件列表。
   * 
   * @param request - DescribeEndPointEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndPointEventListResponse
   */
  async describeEndPointEventListWithOptions(request: $_model.DescribeEndPointEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEndPointEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEndPointEventList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEndPointEventListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEndPointEventListResponse({}));
  }

  /**
   * 调用DescribeEndPointEventList获取端对端用户事件列表。
   * 
   * @param request - DescribeEndPointEventListRequest
   * @returns DescribeEndPointEventListResponse
   */
  async describeEndPointEventList(request: $_model.DescribeEndPointEventListRequest): Promise<$_model.DescribeEndPointEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEndPointEventListWithOptions(request, runtime);
  }

  /**
   * 调用DescribeEndPointMetricData获取端对端指标数据。
   * 
   * @param request - DescribeEndPointMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndPointMetricDataResponse
   */
  async describeEndPointMetricDataWithOptions(request: $_model.DescribeEndPointMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEndPointMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.pubCallIdList)) {
      query["PubCallIdList"] = request.pubCallIdList;
    }

    if (!$dara.isNull(request.pubUserId)) {
      query["PubUserId"] = request.pubUserId;
    }

    if (!$dara.isNull(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEndPointMetricData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEndPointMetricDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEndPointMetricDataResponse({}));
  }

  /**
   * 调用DescribeEndPointMetricData获取端对端指标数据。
   * 
   * @param request - DescribeEndPointMetricDataRequest
   * @returns DescribeEndPointMetricDataResponse
   */
  async describeEndPointMetricData(request: $_model.DescribeEndPointMetricDataRequest): Promise<$_model.DescribeEndPointMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEndPointMetricDataWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断影响因素分布
   * 
   * @param request - DescribeFaultDiagnosisFactorDistributionStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisFactorDistributionStatResponse
   */
  async describeFaultDiagnosisFactorDistributionStatWithOptions(request: $_model.DescribeFaultDiagnosisFactorDistributionStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFaultDiagnosisFactorDistributionStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaultDiagnosisFactorDistributionStat",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFaultDiagnosisFactorDistributionStatResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFaultDiagnosisFactorDistributionStatResponse({}));
  }

  /**
   * 获取异常诊断影响因素分布
   * 
   * @param request - DescribeFaultDiagnosisFactorDistributionStatRequest
   * @returns DescribeFaultDiagnosisFactorDistributionStatResponse
   */
  async describeFaultDiagnosisFactorDistributionStat(request: $_model.DescribeFaultDiagnosisFactorDistributionStatRequest): Promise<$_model.DescribeFaultDiagnosisFactorDistributionStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaultDiagnosisFactorDistributionStatWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断总览数据
   * 
   * @param request - DescribeFaultDiagnosisOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisOverallDataResponse
   */
  async describeFaultDiagnosisOverallDataWithOptions(request: $_model.DescribeFaultDiagnosisOverallDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFaultDiagnosisOverallDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!$dara.isNull(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaultDiagnosisOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFaultDiagnosisOverallDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFaultDiagnosisOverallDataResponse({}));
  }

  /**
   * 获取异常诊断总览数据
   * 
   * @param request - DescribeFaultDiagnosisOverallDataRequest
   * @returns DescribeFaultDiagnosisOverallDataResponse
   */
  async describeFaultDiagnosisOverallData(request: $_model.DescribeFaultDiagnosisOverallDataRequest): Promise<$_model.DescribeFaultDiagnosisOverallDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaultDiagnosisOverallDataWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断用户详情
   * 
   * @param request - DescribeFaultDiagnosisUserDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisUserDetailResponse
   */
  async describeFaultDiagnosisUserDetailWithOptions(request: $_model.DescribeFaultDiagnosisUserDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFaultDiagnosisUserDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.faultType)) {
      query["FaultType"] = request.faultType;
    }

    if (!$dara.isNull(request.queryCallUserInfo)) {
      query["QueryCallUserInfo"] = request.queryCallUserInfo;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaultDiagnosisUserDetail",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFaultDiagnosisUserDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFaultDiagnosisUserDetailResponse({}));
  }

  /**
   * 获取异常诊断用户详情
   * 
   * @param request - DescribeFaultDiagnosisUserDetailRequest
   * @returns DescribeFaultDiagnosisUserDetailResponse
   */
  async describeFaultDiagnosisUserDetail(request: $_model.DescribeFaultDiagnosisUserDetailRequest): Promise<$_model.DescribeFaultDiagnosisUserDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaultDiagnosisUserDetailWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断用户明细列表
   * 
   * @param request - DescribeFaultDiagnosisUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisUserListResponse
   */
  async describeFaultDiagnosisUserListWithOptions(request: $_model.DescribeFaultDiagnosisUserListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFaultDiagnosisUserListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.faultTypes)) {
      query["FaultTypes"] = request.faultTypes;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaultDiagnosisUserList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFaultDiagnosisUserListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFaultDiagnosisUserListResponse({}));
  }

  /**
   * 获取异常诊断用户明细列表
   * 
   * @param request - DescribeFaultDiagnosisUserListRequest
   * @returns DescribeFaultDiagnosisUserListResponse
   */
  async describeFaultDiagnosisUserList(request: $_model.DescribeFaultDiagnosisUserListRequest): Promise<$_model.DescribeFaultDiagnosisUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaultDiagnosisUserListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMPULayoutInfoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMPULayoutInfoListResponse
   */
  async describeMPULayoutInfoListWithOptions(request: $_model.DescribeMPULayoutInfoListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMPULayoutInfoListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.layoutId)) {
      query["LayoutId"] = request.layoutId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMPULayoutInfoList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMPULayoutInfoListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMPULayoutInfoListResponse({}));
  }

  /**
   * @param request - DescribeMPULayoutInfoListRequest
   * @returns DescribeMPULayoutInfoListResponse
   */
  async describeMPULayoutInfoList(request: $_model.DescribeMPULayoutInfoListRequest): Promise<$_model.DescribeMPULayoutInfoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMPULayoutInfoListWithOptions(request, runtime);
  }

  /**
   * 调用DescribePubUserListBySubUser根据订阅端获取通信中发布端用户列表。
   * 
   * @param request - DescribePubUserListBySubUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePubUserListBySubUserResponse
   */
  async describePubUserListBySubUserWithOptions(request: $_model.DescribePubUserListBySubUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePubUserListBySubUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePubUserListBySubUser",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePubUserListBySubUserResponse>(await this.callApi(params, req, runtime), new $_model.DescribePubUserListBySubUserResponse({}));
  }

  /**
   * 调用DescribePubUserListBySubUser根据订阅端获取通信中发布端用户列表。
   * 
   * @param request - DescribePubUserListBySubUserRequest
   * @returns DescribePubUserListBySubUserResponse
   */
  async describePubUserListBySubUser(request: $_model.DescribePubUserListBySubUserRequest): Promise<$_model.DescribePubUserListBySubUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePubUserListBySubUserWithOptions(request, runtime);
  }

  /**
   * 调用DescribeQoeMetricData获取单次通信中用户的下行体验质量指标。
   * 
   * @param request - DescribeQoeMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQoeMetricDataResponse
   */
  async describeQoeMetricDataWithOptions(request: $_model.DescribeQoeMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQoeMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQoeMetricData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQoeMetricDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQoeMetricDataResponse({}));
  }

  /**
   * 调用DescribeQoeMetricData获取单次通信中用户的下行体验质量指标。
   * 
   * @param request - DescribeQoeMetricDataRequest
   * @returns DescribeQoeMetricDataResponse
   */
  async describeQoeMetricData(request: $_model.DescribeQoeMetricDataRequest): Promise<$_model.DescribeQoeMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQoeMetricDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计区域分布统计数据
   * 
   * @param request - DescribeQualityAreaDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityAreaDistributionStatDataResponse
   */
  async describeQualityAreaDistributionStatDataWithOptions(request: $_model.DescribeQualityAreaDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQualityAreaDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQualityAreaDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQualityAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQualityAreaDistributionStatDataResponse({}));
  }

  /**
   * 获取质量统计区域分布统计数据
   * 
   * @param request - DescribeQualityAreaDistributionStatDataRequest
   * @returns DescribeQualityAreaDistributionStatDataResponse
   */
  async describeQualityAreaDistributionStatData(request: $_model.DescribeQualityAreaDistributionStatDataRequest): Promise<$_model.DescribeQualityAreaDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQualityAreaDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计分布数据
   * 
   * @param request - DescribeQualityDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityDistributionStatDataResponse
   */
  async describeQualityDistributionStatDataWithOptions(request: $_model.DescribeQualityDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQualityDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQualityDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQualityDistributionStatDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQualityDistributionStatDataResponse({}));
  }

  /**
   * 获取质量统计分布数据
   * 
   * @param request - DescribeQualityDistributionStatDataRequest
   * @returns DescribeQualityDistributionStatDataResponse
   */
  async describeQualityDistributionStatData(request: $_model.DescribeQualityDistributionStatDataRequest): Promise<$_model.DescribeQualityDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQualityDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeQualityOsSdkVersionDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityOsSdkVersionDistributionStatDataResponse
   */
  async describeQualityOsSdkVersionDistributionStatDataWithOptions(request: $_model.DescribeQualityOsSdkVersionDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQualityOsSdkVersionDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQualityOsSdkVersionDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQualityOsSdkVersionDistributionStatDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQualityOsSdkVersionDistributionStatDataResponse({}));
  }

  /**
   * 获取质量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeQualityOsSdkVersionDistributionStatDataRequest
   * @returns DescribeQualityOsSdkVersionDistributionStatDataResponse
   */
  async describeQualityOsSdkVersionDistributionStatData(request: $_model.DescribeQualityOsSdkVersionDistributionStatDataRequest): Promise<$_model.DescribeQualityOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQualityOsSdkVersionDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计概览数据
   * 
   * @param request - DescribeQualityOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityOverallDataResponse
   */
  async describeQualityOverallDataWithOptions(request: $_model.DescribeQualityOverallDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQualityOverallDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQualityOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQualityOverallDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQualityOverallDataResponse({}));
  }

  /**
   * 获取质量统计概览数据
   * 
   * @param request - DescribeQualityOverallDataRequest
   * @returns DescribeQualityOverallDataResponse
   */
  async describeQualityOverallData(request: $_model.DescribeQualityOverallDataRequest): Promise<$_model.DescribeQualityOverallDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQualityOverallDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecordFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordFilesResponse
   */
  async describeRecordFilesWithOptions(request: $_model.DescribeRecordFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecordFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordFiles",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecordFilesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecordFilesResponse({}));
  }

  /**
   * @param request - DescribeRecordFilesRequest
   * @returns DescribeRecordFilesResponse
   */
  async describeRecordFiles(request: $_model.DescribeRecordFilesRequest): Promise<$_model.DescribeRecordFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordFilesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecordTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordTemplatesResponse
   */
  async describeRecordTemplatesWithOptions(request: $_model.DescribeRecordTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecordTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordTemplates",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecordTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecordTemplatesResponse({}));
  }

  /**
   * @param request - DescribeRecordTemplatesRequest
   * @returns DescribeRecordTemplatesResponse
   */
  async describeRecordTemplates(request: $_model.DescribeRecordTemplatesRequest): Promise<$_model.DescribeRecordTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcChannelListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcChannelListResponse
   */
  async describeRtcChannelListWithOptions(request: $_model.DescribeRtcChannelListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRtcChannelListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
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

    if (!$dara.isNull(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!$dara.isNull(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRtcChannelList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRtcChannelListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRtcChannelListResponse({}));
  }

  /**
   * @param request - DescribeRtcChannelListRequest
   * @returns DescribeRtcChannelListResponse
   */
  async describeRtcChannelList(request: $_model.DescribeRtcChannelListRequest): Promise<$_model.DescribeRtcChannelListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRtcChannelListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcChannelMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcChannelMetricResponse
   */
  async describeRtcChannelMetricWithOptions(request: $_model.DescribeRtcChannelMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRtcChannelMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRtcChannelMetric",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRtcChannelMetricResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRtcChannelMetricResponse({}));
  }

  /**
   * @param request - DescribeRtcChannelMetricRequest
   * @returns DescribeRtcChannelMetricResponse
   */
  async describeRtcChannelMetric(request: $_model.DescribeRtcChannelMetricRequest): Promise<$_model.DescribeRtcChannelMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRtcChannelMetricWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcDurationDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcDurationDataResponse
   */
  async describeRtcDurationDataWithOptions(request: $_model.DescribeRtcDurationDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRtcDurationDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRtcDurationData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRtcDurationDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRtcDurationDataResponse({}));
  }

  /**
   * @param request - DescribeRtcDurationDataRequest
   * @returns DescribeRtcDurationDataResponse
   */
  async describeRtcDurationData(request: $_model.DescribeRtcDurationDataRequest): Promise<$_model.DescribeRtcDurationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRtcDurationDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcPeakChannelCntDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcPeakChannelCntDataResponse
   */
  async describeRtcPeakChannelCntDataWithOptions(request: $_model.DescribeRtcPeakChannelCntDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRtcPeakChannelCntDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRtcPeakChannelCntData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRtcPeakChannelCntDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRtcPeakChannelCntDataResponse({}));
  }

  /**
   * @param request - DescribeRtcPeakChannelCntDataRequest
   * @returns DescribeRtcPeakChannelCntDataResponse
   */
  async describeRtcPeakChannelCntData(request: $_model.DescribeRtcPeakChannelCntDataRequest): Promise<$_model.DescribeRtcPeakChannelCntDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRtcPeakChannelCntDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcUserCntDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcUserCntDataResponse
   */
  async describeRtcUserCntDataWithOptions(request: $_model.DescribeRtcUserCntDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRtcUserCntDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRtcUserCntData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRtcUserCntDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRtcUserCntDataResponse({}));
  }

  /**
   * @param request - DescribeRtcUserCntDataRequest
   * @returns DescribeRtcUserCntDataResponse
   */
  async describeRtcUserCntData(request: $_model.DescribeRtcUserCntDataRequest): Promise<$_model.DescribeRtcUserCntDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRtcUserCntDataWithOptions(request, runtime);
  }

  /**
   * 查询旁路推流状态
   * 
   * @param request - DescribeStreamingOutStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamingOutStatusResponse
   */
  async describeStreamingOutStatusWithOptions(request: $_model.DescribeStreamingOutStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStreamingOutStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStreamingOutStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStreamingOutStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStreamingOutStatusResponse({}));
  }

  /**
   * 查询旁路推流状态
   * 
   * @param request - DescribeStreamingOutStatusRequest
   * @returns DescribeStreamingOutStatusResponse
   */
  async describeStreamingOutStatus(request: $_model.DescribeStreamingOutStatusRequest): Promise<$_model.DescribeStreamingOutStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamingOutStatusWithOptions(request, runtime);
  }

  /**
   * 系统内置布局
   * 
   * @param request - DescribeSystemLayoutListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSystemLayoutListResponse
   */
  async describeSystemLayoutListWithOptions(request: $_model.DescribeSystemLayoutListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSystemLayoutListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSystemLayoutList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSystemLayoutListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSystemLayoutListResponse({}));
  }

  /**
   * 系统内置布局
   * 
   * @param request - DescribeSystemLayoutListRequest
   * @returns DescribeSystemLayoutListResponse
   */
  async describeSystemLayoutList(request: $_model.DescribeSystemLayoutListRequest): Promise<$_model.DescribeSystemLayoutListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSystemLayoutListWithOptions(request, runtime);
  }

  /**
   * 获取用量统计地域分布数据
   * 
   * @param request - DescribeUsageAreaDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageAreaDistributionStatDataResponse
   */
  async describeUsageAreaDistributionStatDataWithOptions(request: $_model.DescribeUsageAreaDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUsageAreaDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsageAreaDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUsageAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUsageAreaDistributionStatDataResponse({}));
  }

  /**
   * 获取用量统计地域分布数据
   * 
   * @param request - DescribeUsageAreaDistributionStatDataRequest
   * @returns DescribeUsageAreaDistributionStatDataResponse
   */
  async describeUsageAreaDistributionStatData(request: $_model.DescribeUsageAreaDistributionStatDataRequest): Promise<$_model.DescribeUsageAreaDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsageAreaDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取用量统计分布数据
   * 
   * @param request - DescribeUsageDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageDistributionStatDataResponse
   */
  async describeUsageDistributionStatDataWithOptions(request: $_model.DescribeUsageDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUsageDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsageDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUsageDistributionStatDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUsageDistributionStatDataResponse({}));
  }

  /**
   * 获取用量统计分布数据
   * 
   * @param request - DescribeUsageDistributionStatDataRequest
   * @returns DescribeUsageDistributionStatDataResponse
   */
  async describeUsageDistributionStatData(request: $_model.DescribeUsageDistributionStatDataRequest): Promise<$_model.DescribeUsageDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsageDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取用量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeUsageOsSdkVersionDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageOsSdkVersionDistributionStatDataResponse
   */
  async describeUsageOsSdkVersionDistributionStatDataWithOptions(request: $_model.DescribeUsageOsSdkVersionDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUsageOsSdkVersionDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsageOsSdkVersionDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUsageOsSdkVersionDistributionStatDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUsageOsSdkVersionDistributionStatDataResponse({}));
  }

  /**
   * 获取用量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeUsageOsSdkVersionDistributionStatDataRequest
   * @returns DescribeUsageOsSdkVersionDistributionStatDataResponse
   */
  async describeUsageOsSdkVersionDistributionStatData(request: $_model.DescribeUsageOsSdkVersionDistributionStatDataRequest): Promise<$_model.DescribeUsageOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsageOsSdkVersionDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取用量统计概览数据
   * 
   * @param request - DescribeUsageOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageOverallDataResponse
   */
  async describeUsageOverallDataWithOptions(request: $_model.DescribeUsageOverallDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUsageOverallDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsageOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUsageOverallDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUsageOverallDataResponse({}));
  }

  /**
   * 获取用量统计概览数据
   * 
   * @param request - DescribeUsageOverallDataRequest
   * @returns DescribeUsageOverallDataResponse
   */
  async describeUsageOverallData(request: $_model.DescribeUsageOverallDataRequest): Promise<$_model.DescribeUsageOverallDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsageOverallDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeUserInfoInChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserInfoInChannelResponse
   */
  async describeUserInfoInChannelWithOptions(request: $_model.DescribeUserInfoInChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserInfoInChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserInfoInChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserInfoInChannelResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserInfoInChannelResponse({}));
  }

  /**
   * @param request - DescribeUserInfoInChannelRequest
   * @returns DescribeUserInfoInChannelResponse
   */
  async describeUserInfoInChannel(request: $_model.DescribeUserInfoInChannelRequest): Promise<$_model.DescribeUserInfoInChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserInfoInChannelWithOptions(request, runtime);
  }

  /**
   * @param request - DisableAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAutoLiveStreamRuleResponse
   */
  async disableAutoLiveStreamRuleWithOptions(request: $_model.DisableAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new $_model.DisableAutoLiveStreamRuleResponse({}));
  }

  /**
   * @param request - DisableAutoLiveStreamRuleRequest
   * @returns DisableAutoLiveStreamRuleResponse
   */
  async disableAutoLiveStreamRule(request: $_model.DisableAutoLiveStreamRuleRequest): Promise<$_model.DisableAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * @param request - EnableAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAutoLiveStreamRuleResponse
   */
  async enableAutoLiveStreamRuleWithOptions(request: $_model.EnableAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new $_model.EnableAutoLiveStreamRuleResponse({}));
  }

  /**
   * @param request - EnableAutoLiveStreamRuleRequest
   * @returns EnableAutoLiveStreamRuleResponse
   */
  async enableAutoLiveStreamRule(request: $_model.EnableAutoLiveStreamRuleRequest): Promise<$_model.EnableAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * GetAgent。
   * 
   * @param request - GetAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentResponse
   */
  async getAgentWithOptions(request: $_model.GetAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgent",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentResponse({}));
  }

  /**
   * GetAgent。
   * 
   * @param request - GetAgentRequest
   * @returns GetAgentResponse
   */
  async getAgent(request: $_model.GetAgentRequest): Promise<$_model.GetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentWithOptions(request, runtime);
  }

  /**
   * @param request - GetMPUTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMPUTaskStatusResponse
   */
  async getMPUTaskStatusWithOptions(request: $_model.GetMPUTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMPUTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMPUTaskStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMPUTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetMPUTaskStatusResponse({}));
  }

  /**
   * @param request - GetMPUTaskStatusRequest
   * @returns GetMPUTaskStatusResponse
   */
  async getMPUTaskStatus(request: $_model.GetMPUTaskStatusRequest): Promise<$_model.GetMPUTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMPUTaskStatusWithOptions(request, runtime);
  }

  /**
   * 修改App信息
   * 
   * @param request - ModifyAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppResponse
   */
  async modifyAppWithOptions(request: $_model.ModifyAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApp",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppResponse({}));
  }

  /**
   * 修改App信息
   * 
   * @param request - ModifyAppRequest
   * @returns ModifyAppResponse
   */
  async modifyApp(request: $_model.ModifyAppRequest): Promise<$_model.ModifyAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * 修改应用智能体开关
   * 
   * @param request - ModifyAppAgentFunctionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppAgentFunctionStatusResponse
   */
  async modifyAppAgentFunctionStatusWithOptions(request: $_model.ModifyAppAgentFunctionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppAgentFunctionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppAgentFunctionStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppAgentFunctionStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppAgentFunctionStatusResponse({}));
  }

  /**
   * 修改应用智能体开关
   * 
   * @param request - ModifyAppAgentFunctionStatusRequest
   * @returns ModifyAppAgentFunctionStatusResponse
   */
  async modifyAppAgentFunctionStatus(request: $_model.ModifyAppAgentFunctionStatusRequest): Promise<$_model.ModifyAppAgentFunctionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppAgentFunctionStatusWithOptions(request, runtime);
  }

  /**
   * 更新应用智能体模版
   * 
   * @param tmpReq - ModifyAppAgentTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppAgentTemplateResponse
   */
  async modifyAppAgentTemplateWithOptions(tmpReq: $_model.ModifyAppAgentTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppAgentTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAppAgentTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentSilenceConfig)) {
      request.agentSilenceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentSilenceConfig, "AgentSilenceConfig", "json");
    }

    if (!$dara.isNull(tmpReq.ambientSoundConfig)) {
      request.ambientSoundConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ambientSoundConfig, "AmbientSoundConfig", "json");
    }

    if (!$dara.isNull(tmpReq.asrConfig)) {
      request.asrConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.asrConfig, "AsrConfig", "json");
    }

    if (!$dara.isNull(tmpReq.backChannelConfig)) {
      request.backChannelConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.backChannelConfig, "BackChannelConfig", "json");
    }

    if (!$dara.isNull(tmpReq.interruptConfig)) {
      request.interruptConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.interruptConfig, "InterruptConfig", "json");
    }

    if (!$dara.isNull(tmpReq.llmConfig)) {
      request.llmConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.llmConfig, "LlmConfig", "json");
    }

    if (!$dara.isNull(tmpReq.ttsConfig)) {
      request.ttsConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ttsConfig, "TtsConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentSilenceConfigShrink)) {
      query["AgentSilenceConfig"] = request.agentSilenceConfigShrink;
    }

    if (!$dara.isNull(request.ambientSoundConfigShrink)) {
      query["AmbientSoundConfig"] = request.ambientSoundConfigShrink;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.asrConfigShrink)) {
      query["AsrConfig"] = request.asrConfigShrink;
    }

    if (!$dara.isNull(request.backChannelConfigShrink)) {
      query["BackChannelConfig"] = request.backChannelConfigShrink;
    }

    if (!$dara.isNull(request.chatMode)) {
      query["ChatMode"] = request.chatMode;
    }

    if (!$dara.isNull(request.greeting)) {
      query["Greeting"] = request.greeting;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.interruptConfigShrink)) {
      query["InterruptConfig"] = request.interruptConfigShrink;
    }

    if (!$dara.isNull(request.interruptMode)) {
      query["InterruptMode"] = request.interruptMode;
    }

    if (!$dara.isNull(request.llmConfigShrink)) {
      query["LlmConfig"] = request.llmConfigShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ttsConfigShrink)) {
      query["TtsConfig"] = request.ttsConfigShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppAgentTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppAgentTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppAgentTemplateResponse({}));
  }

  /**
   * 更新应用智能体模版
   * 
   * @param request - ModifyAppAgentTemplateRequest
   * @returns ModifyAppAgentTemplateResponse
   */
  async modifyAppAgentTemplate(request: $_model.ModifyAppAgentTemplateRequest): Promise<$_model.ModifyAppAgentTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppAgentTemplateWithOptions(request, runtime);
  }

  /**
   * 更新app回调事件开关
   * 
   * @param request - ModifyAppCallbackStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppCallbackStatusResponse
   */
  async modifyAppCallbackStatusWithOptions(request: $_model.ModifyAppCallbackStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppCallbackStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppCallbackStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppCallbackStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppCallbackStatusResponse({}));
  }

  /**
   * 更新app回调事件开关
   * 
   * @param request - ModifyAppCallbackStatusRequest
   * @returns ModifyAppCallbackStatusResponse
   */
  async modifyAppCallbackStatus(request: $_model.ModifyAppCallbackStatusRequest): Promise<$_model.ModifyAppCallbackStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppCallbackStatusWithOptions(request, runtime);
  }

  /**
   * 修改app自定义布局
   * 
   * @param tmpReq - ModifyAppLayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppLayoutResponse
   */
  async modifyAppLayoutWithOptions(tmpReq: $_model.ModifyAppLayoutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppLayoutResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAppLayoutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layout)) {
      request.layoutShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layout, "Layout", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.layoutShrink)) {
      query["Layout"] = request.layoutShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppLayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppLayoutResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppLayoutResponse({}));
  }

  /**
   * 修改app自定义布局
   * 
   * @param request - ModifyAppLayoutRequest
   * @returns ModifyAppLayoutResponse
   */
  async modifyAppLayout(request: $_model.ModifyAppLayoutRequest): Promise<$_model.ModifyAppLayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppLayoutWithOptions(request, runtime);
  }

  /**
   * 修改应用旁路开关
   * 
   * @param request - ModifyAppLiveStreamStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppLiveStreamStatusResponse
   */
  async modifyAppLiveStreamStatusWithOptions(request: $_model.ModifyAppLiveStreamStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppLiveStreamStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppLiveStreamStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppLiveStreamStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppLiveStreamStatusResponse({}));
  }

  /**
   * 修改应用旁路开关
   * 
   * @param request - ModifyAppLiveStreamStatusRequest
   * @returns ModifyAppLiveStreamStatusResponse
   */
  async modifyAppLiveStreamStatus(request: $_model.ModifyAppLiveStreamStatusRequest): Promise<$_model.ModifyAppLiveStreamStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppLiveStreamStatusWithOptions(request, runtime);
  }

  /**
   * 修改应用录制开关
   * 
   * @param request - ModifyAppRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppRecordStatusResponse
   */
  async modifyAppRecordStatusWithOptions(request: $_model.ModifyAppRecordStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppRecordStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppRecordStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppRecordStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppRecordStatusResponse({}));
  }

  /**
   * 修改应用录制开关
   * 
   * @param request - ModifyAppRecordStatusRequest
   * @returns ModifyAppRecordStatusResponse
   */
  async modifyAppRecordStatus(request: $_model.ModifyAppRecordStatusRequest): Promise<$_model.ModifyAppRecordStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppRecordStatusWithOptions(request, runtime);
  }

  /**
   * 修改应用录制模版
   * 
   * @param tmpReq - ModifyAppRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppRecordTemplateResponse
   */
  async modifyAppRecordTemplateWithOptions(tmpReq: $_model.ModifyAppRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppRecordTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAppRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.recordTemplate)) {
      request.recordTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordTemplate, "RecordTemplate", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.recordTemplateShrink)) {
      query["RecordTemplate"] = request.recordTemplateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppRecordTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppRecordTemplateResponse({}));
  }

  /**
   * 修改应用录制模版
   * 
   * @param request - ModifyAppRecordTemplateRequest
   * @returns ModifyAppRecordTemplateResponse
   */
  async modifyAppRecordTemplate(request: $_model.ModifyAppRecordTemplateRequest): Promise<$_model.ModifyAppRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 更新应用推流模版
   * 
   * @param tmpReq - ModifyAppStreamingOutTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppStreamingOutTemplateResponse
   */
  async modifyAppStreamingOutTemplateWithOptions(tmpReq: $_model.ModifyAppStreamingOutTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppStreamingOutTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAppStreamingOutTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.streamingOutTemplate)) {
      request.streamingOutTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamingOutTemplate, "StreamingOutTemplate", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.streamingOutTemplateShrink)) {
      query["StreamingOutTemplate"] = request.streamingOutTemplateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppStreamingOutTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppStreamingOutTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppStreamingOutTemplateResponse({}));
  }

  /**
   * 更新应用推流模版
   * 
   * @param request - ModifyAppStreamingOutTemplateRequest
   * @returns ModifyAppStreamingOutTemplateResponse
   */
  async modifyAppStreamingOutTemplate(request: $_model.ModifyAppStreamingOutTemplateRequest): Promise<$_model.ModifyAppStreamingOutTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppStreamingOutTemplateWithOptions(request, runtime);
  }

  /**
   * 修改合流开关
   * 
   * @param request - ModifyAppViewStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppViewStatusResponse
   */
  async modifyAppViewStatusWithOptions(request: $_model.ModifyAppViewStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppViewStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppViewStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppViewStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppViewStatusResponse({}));
  }

  /**
   * 修改合流开关
   * 
   * @param request - ModifyAppViewStatusRequest
   * @returns ModifyAppViewStatusResponse
   */
  async modifyAppViewStatus(request: $_model.ModifyAppViewStatusRequest): Promise<$_model.ModifyAppViewStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppViewStatusWithOptions(request, runtime);
  }

  /**
   * 更新应用合流模版
   * 
   * @param tmpReq - ModifyAppViewTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppViewTemplateResponse
   */
  async modifyAppViewTemplateWithOptions(tmpReq: $_model.ModifyAppViewTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppViewTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAppViewTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.templateShrink)) {
      query["Template"] = request.templateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppViewTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppViewTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppViewTemplateResponse({}));
  }

  /**
   * 更新应用合流模版
   * 
   * @param request - ModifyAppViewTemplateRequest
   * @returns ModifyAppViewTemplateResponse
   */
  async modifyAppViewTemplate(request: $_model.ModifyAppViewTemplateRequest): Promise<$_model.ModifyAppViewTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppViewTemplateWithOptions(request, runtime);
  }

  /**
   * 更新app回调
   * 
   * @param tmpReq - ModifyCallbackMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCallbackMetaResponse
   */
  async modifyCallbackMetaWithOptions(tmpReq: $_model.ModifyCallbackMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCallbackMetaResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyCallbackMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callback)) {
      request.callbackShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callback, "Callback", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callbackShrink)) {
      query["Callback"] = request.callbackShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCallbackMeta",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCallbackMetaResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCallbackMetaResponse({}));
  }

  /**
   * 更新app回调
   * 
   * @param request - ModifyCallbackMetaRequest
   * @returns ModifyCallbackMetaResponse
   */
  async modifyCallbackMeta(request: $_model.ModifyCallbackMetaRequest): Promise<$_model.ModifyCallbackMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCallbackMetaWithOptions(request, runtime);
  }

  /**
   * 更新纪要热词表
   * 
   * @param tmpReq - ModifyCloudNotePhrasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudNotePhrasesResponse
   */
  async modifyCloudNotePhrasesWithOptions(tmpReq: $_model.ModifyCloudNotePhrasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCloudNotePhrasesResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyCloudNotePhrasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.phrase)) {
      request.phraseShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phrase, "Phrase", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.phraseShrink)) {
      query["Phrase"] = request.phraseShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCloudNotePhrases",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCloudNotePhrasesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCloudNotePhrasesResponse({}));
  }

  /**
   * 更新纪要热词表
   * 
   * @param request - ModifyCloudNotePhrasesRequest
   * @returns ModifyCloudNotePhrasesResponse
   */
  async modifyCloudNotePhrases(request: $_model.ModifyCloudNotePhrasesRequest): Promise<$_model.ModifyCloudNotePhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCloudNotePhrasesWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyMPULayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMPULayoutResponse
   */
  async modifyMPULayoutWithOptions(request: $_model.ModifyMPULayoutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMPULayoutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.audioMixCount)) {
      query["AudioMixCount"] = request.audioMixCount;
    }

    if (!$dara.isNull(request.layoutId)) {
      query["LayoutId"] = request.layoutId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMPULayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMPULayoutResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMPULayoutResponse({}));
  }

  /**
   * @param request - ModifyMPULayoutRequest
   * @returns ModifyMPULayoutResponse
   */
  async modifyMPULayout(request: $_model.ModifyMPULayoutRequest): Promise<$_model.ModifyMPULayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMPULayoutWithOptions(request, runtime);
  }

  /**
   * 设置流属性
   * 
   * @param tmpReq - ModifyStreamingPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyStreamingPropertyResponse
   */
  async modifyStreamingPropertyWithOptions(tmpReq: $_model.ModifyStreamingPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyStreamingPropertyResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyStreamingPropertyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.viewSubscribers)) {
      request.viewSubscribersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.viewSubscribers, "ViewSubscribers", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.viewContent)) {
      query["ViewContent"] = request.viewContent;
    }

    if (!$dara.isNull(request.viewSubscribersShrink)) {
      query["ViewSubscribers"] = request.viewSubscribersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyStreamingProperty",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyStreamingPropertyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyStreamingPropertyResponse({}));
  }

  /**
   * 设置流属性
   * 
   * @param request - ModifyStreamingPropertyRequest
   * @returns ModifyStreamingPropertyResponse
   */
  async modifyStreamingProperty(request: $_model.ModifyStreamingPropertyRequest): Promise<$_model.ModifyStreamingPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyStreamingPropertyWithOptions(request, runtime);
  }

  /**
   * 设置合流布局
   * 
   * @param tmpReq - ModifyViewLayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyViewLayoutResponse
   */
  async modifyViewLayoutWithOptions(tmpReq: $_model.ModifyViewLayoutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyViewLayoutResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyViewLayoutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layoutSpecifiedUsers)) {
      request.layoutSpecifiedUsersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layoutSpecifiedUsers, "LayoutSpecifiedUsers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.images)) {
      query["Images"] = request.images;
    }

    if (!$dara.isNull(request.layoutSpecifiedUsersShrink)) {
      query["LayoutSpecifiedUsers"] = request.layoutSpecifiedUsersShrink;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.texts)) {
      query["Texts"] = request.texts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyViewLayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyViewLayoutResponse>(await this.callApi(params, req, runtime), new $_model.ModifyViewLayoutResponse({}));
  }

  /**
   * 设置合流布局
   * 
   * @param request - ModifyViewLayoutRequest
   * @returns ModifyViewLayoutResponse
   */
  async modifyViewLayout(request: $_model.ModifyViewLayoutRequest): Promise<$_model.ModifyViewLayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyViewLayoutWithOptions(request, runtime);
  }

  /**
   * NotifyAgent
   * 
   * @param tmpReq - NotifyAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NotifyAgentResponse
   */
  async notifyAgentWithOptions(tmpReq: $_model.NotifyAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NotifyAgentResponse> {
    tmpReq.validate();
    let request = new $_model.NotifyAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.backgroundMusic)) {
      request.backgroundMusicShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.backgroundMusic, "BackgroundMusic", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgroundMusicShrink)) {
      query["BackgroundMusic"] = request.backgroundMusicShrink;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.customAttribute)) {
      query["CustomAttribute"] = request.customAttribute;
    }

    if (!$dara.isNull(request.interruptable)) {
      query["Interruptable"] = request.interruptable;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "NotifyAgent",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NotifyAgentResponse>(await this.callApi(params, req, runtime), new $_model.NotifyAgentResponse({}));
  }

  /**
   * NotifyAgent
   * 
   * @param request - NotifyAgentRequest
   * @returns NotifyAgentResponse
   */
  async notifyAgent(request: $_model.NotifyAgentRequest): Promise<$_model.NotifyAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.notifyAgentWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveTerminalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTerminalsResponse
   */
  async removeTerminalsWithOptions(request: $_model.RemoveTerminalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTerminalsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.terminalIds)) {
      query["TerminalIds"] = request.terminalIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTerminals",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveTerminalsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveTerminalsResponse({}));
  }

  /**
   * @param request - RemoveTerminalsRequest
   * @returns RemoveTerminalsResponse
   */
  async removeTerminals(request: $_model.RemoveTerminalsRequest): Promise<$_model.RemoveTerminalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTerminalsWithOptions(request, runtime);
  }

  /**
   * RemoveUsers
   * 
   * @param request - RemoveUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersResponse
   */
  async removeUsersWithOptions(request: $_model.RemoveUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.users)) {
      query["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUsers",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUsersResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUsersResponse({}));
  }

  /**
   * RemoveUsers
   * 
   * @param request - RemoveUsersRequest
   * @returns RemoveUsersResponse
   */
  async removeUsers(request: $_model.RemoveUsersRequest): Promise<$_model.RemoveUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUsersWithOptions(request, runtime);
  }

  /**
   * 取消Sip邀请
   * 
   * @param request - RtcCancelSipInviteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RtcCancelSipInviteResponse
   */
  async rtcCancelSipInviteWithOptions(request: $_model.RtcCancelSipInviteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RtcCancelSipInviteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RtcCancelSipInvite",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RtcCancelSipInviteResponse>(await this.callApi(params, req, runtime), new $_model.RtcCancelSipInviteResponse({}));
  }

  /**
   * 取消Sip邀请
   * 
   * @param request - RtcCancelSipInviteRequest
   * @returns RtcCancelSipInviteResponse
   */
  async rtcCancelSipInvite(request: $_model.RtcCancelSipInviteRequest): Promise<$_model.RtcCancelSipInviteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rtcCancelSipInviteWithOptions(request, runtime);
  }

  /**
   * 邀请SIP加入频道
   * 
   * @param request - RtcSipInviteMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RtcSipInviteMemberResponse
   */
  async rtcSipInviteMemberWithOptions(request: $_model.RtcSipInviteMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RtcSipInviteMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appToken)) {
      query["AppToken"] = request.appToken;
    }

    if (!$dara.isNull(request.callNumber)) {
      query["CallNumber"] = request.callNumber;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.registered)) {
      query["Registered"] = request.registered;
    }

    if (!$dara.isNull(request.serverAddress)) {
      query["ServerAddress"] = request.serverAddress;
    }

    if (!$dara.isNull(request.sipDisplayName)) {
      query["SipDisplayName"] = request.sipDisplayName;
    }

    if (!$dara.isNull(request.sipRoomId)) {
      query["SipRoomId"] = request.sipRoomId;
    }

    if (!$dara.isNull(request.sipUri)) {
      query["SipUri"] = request.sipUri;
    }

    if (!$dara.isNull(request.sipUserAgent)) {
      query["SipUserAgent"] = request.sipUserAgent;
    }

    if (!$dara.isNull(request.sipUserId)) {
      query["SipUserId"] = request.sipUserId;
    }

    if (!$dara.isNull(request.sipUserPassword)) {
      query["SipUserPassword"] = request.sipUserPassword;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RtcSipInviteMember",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RtcSipInviteMemberResponse>(await this.callApi(params, req, runtime), new $_model.RtcSipInviteMemberResponse({}));
  }

  /**
   * 邀请SIP加入频道
   * 
   * @param request - RtcSipInviteMemberRequest
   * @returns RtcSipInviteMemberResponse
   */
  async rtcSipInviteMember(request: $_model.RtcSipInviteMemberRequest): Promise<$_model.RtcSipInviteMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rtcSipInviteMemberWithOptions(request, runtime);
  }

  /**
   * Mute操作
   * 
   * @param request - RtcSipMuteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RtcSipMuteResponse
   */
  async rtcSipMuteWithOptions(request: $_model.RtcSipMuteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RtcSipMuteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.operations)) {
      query["Operations"] = request.operations;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RtcSipMute",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RtcSipMuteResponse>(await this.callApi(params, req, runtime), new $_model.RtcSipMuteResponse({}));
  }

  /**
   * Mute操作
   * 
   * @param request - RtcSipMuteRequest
   * @returns RtcSipMuteResponse
   */
  async rtcSipMute(request: $_model.RtcSipMuteRequest): Promise<$_model.RtcSipMuteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rtcSipMuteWithOptions(request, runtime);
  }

  /**
   * 启动AI Agent
   * 
   * @param tmpReq - StartAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAgentResponse
   */
  async startAgentWithOptions(tmpReq: $_model.StartAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAgentResponse> {
    tmpReq.validate();
    let request = new $_model.StartAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rtcConfig)) {
      request.rtcConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rtcConfig, "RtcConfig", "json");
    }

    if (!$dara.isNull(tmpReq.voiceChatConfig)) {
      request.voiceChatConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.voiceChatConfig, "VoiceChatConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.rtcConfigShrink)) {
      query["RtcConfig"] = request.rtcConfigShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.voiceChatConfigShrink)) {
      query["VoiceChatConfig"] = request.voiceChatConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAgent",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAgentResponse>(await this.callApi(params, req, runtime), new $_model.StartAgentResponse({}));
  }

  /**
   * 启动AI Agent
   * 
   * @param request - StartAgentRequest
   * @returns StartAgentResponse
   */
  async startAgent(request: $_model.StartAgentRequest): Promise<$_model.StartAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAgentWithOptions(request, runtime);
  }

  /**
   * 开启某个事件回调
   * 
   * @param tmpReq - StartCategoryCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCategoryCallbackResponse
   */
  async startCategoryCallbackWithOptions(tmpReq: $_model.StartCategoryCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartCategoryCallbackResponse> {
    tmpReq.validate();
    let request = new $_model.StartCategoryCallbackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callback)) {
      request.callbackShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callback, "Callback", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callbackShrink)) {
      query["Callback"] = request.callbackShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCategoryCallback",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartCategoryCallbackResponse>(await this.callApi(params, req, runtime), new $_model.StartCategoryCallbackResponse({}));
  }

  /**
   * 开启某个事件回调
   * 
   * @param request - StartCategoryCallbackRequest
   * @returns StartCategoryCallbackResponse
   */
  async startCategoryCallback(request: $_model.StartCategoryCallbackRequest): Promise<$_model.StartCategoryCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCategoryCallbackWithOptions(request, runtime);
  }

  /**
   * 开启智能纪要
   * 
   * @param tmpReq - StartCloudNoteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCloudNoteResponse
   */
  async startCloudNoteWithOptions(tmpReq: $_model.StartCloudNoteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartCloudNoteResponse> {
    tmpReq.validate();
    let request = new $_model.StartCloudNoteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.autoChapters)) {
      request.autoChaptersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.autoChapters, "AutoChapters", "json");
    }

    if (!$dara.isNull(tmpReq.customPrompt)) {
      request.customPromptShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customPrompt, "CustomPrompt", "json");
    }

    if (!$dara.isNull(tmpReq.meetingAssistance)) {
      request.meetingAssistanceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.meetingAssistance, "MeetingAssistance", "json");
    }

    if (!$dara.isNull(tmpReq.realtimeSubtitle)) {
      request.realtimeSubtitleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.realtimeSubtitle, "RealtimeSubtitle", "json");
    }

    if (!$dara.isNull(tmpReq.serviceInspection)) {
      request.serviceInspectionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serviceInspection, "ServiceInspection", "json");
    }

    if (!$dara.isNull(tmpReq.summarization)) {
      request.summarizationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.summarization, "Summarization", "json");
    }

    if (!$dara.isNull(tmpReq.textPolish)) {
      request.textPolishShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textPolish, "TextPolish", "json");
    }

    if (!$dara.isNull(tmpReq.transcription)) {
      request.transcriptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transcription, "Transcription", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.autoChaptersShrink)) {
      query["AutoChapters"] = request.autoChaptersShrink;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.customPromptShrink)) {
      query["CustomPrompt"] = request.customPromptShrink;
    }

    if (!$dara.isNull(request.languageHints)) {
      query["LanguageHints"] = request.languageHints;
    }

    if (!$dara.isNull(request.meetingAssistanceShrink)) {
      query["MeetingAssistance"] = request.meetingAssistanceShrink;
    }

    if (!$dara.isNull(request.realtimeSubtitleShrink)) {
      query["RealtimeSubtitle"] = request.realtimeSubtitleShrink;
    }

    if (!$dara.isNull(request.serviceInspectionShrink)) {
      query["ServiceInspection"] = request.serviceInspectionShrink;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.storageConfig)) {
      query["StorageConfig"] = request.storageConfig;
    }

    if (!$dara.isNull(request.summarizationShrink)) {
      query["Summarization"] = request.summarizationShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.textPolishShrink)) {
      query["TextPolish"] = request.textPolishShrink;
    }

    if (!$dara.isNull(request.transcriptionShrink)) {
      query["Transcription"] = request.transcriptionShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCloudNote",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartCloudNoteResponse>(await this.callApi(params, req, runtime), new $_model.StartCloudNoteResponse({}));
  }

  /**
   * 开启智能纪要
   * 
   * @param request - StartCloudNoteRequest
   * @returns StartCloudNoteResponse
   */
  async startCloudNote(request: $_model.StartCloudNoteRequest): Promise<$_model.StartCloudNoteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCloudNoteWithOptions(request, runtime);
  }

  /**
   * StartCloudRecord
   * 
   * @param tmpReq - StartCloudRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCloudRecordResponse
   */
  async startCloudRecordWithOptions(tmpReq: $_model.StartCloudRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartCloudRecordResponse> {
    tmpReq.validate();
    let request = new $_model.StartCloudRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layoutSpecifiedUsers)) {
      request.layoutSpecifiedUsersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layoutSpecifiedUsers, "LayoutSpecifiedUsers", "json");
    }

    if (!$dara.isNull(tmpReq.singleStreamingRecord)) {
      request.singleStreamingRecordShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.singleStreamingRecord, "SingleStreamingRecord", "json");
    }

    let query = { };
    if (!$dara.isNull(request.annotation)) {
      query["Annotation"] = request.annotation;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.bgColor)) {
      query["BgColor"] = request.bgColor;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.images)) {
      query["Images"] = request.images;
    }

    if (!$dara.isNull(request.layoutSpecifiedUsersShrink)) {
      query["LayoutSpecifiedUsers"] = request.layoutSpecifiedUsersShrink;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!$dara.isNull(request.recordMode)) {
      query["RecordMode"] = request.recordMode;
    }

    if (!$dara.isNull(request.regionColor)) {
      query["RegionColor"] = request.regionColor;
    }

    if (!$dara.isNull(request.reservePaneForNoCameraUser)) {
      query["ReservePaneForNoCameraUser"] = request.reservePaneForNoCameraUser;
    }

    if (!$dara.isNull(request.showDefaultBackgroundOnMute)) {
      query["ShowDefaultBackgroundOnMute"] = request.showDefaultBackgroundOnMute;
    }

    if (!$dara.isNull(request.singleStreamingRecordShrink)) {
      query["SingleStreamingRecord"] = request.singleStreamingRecordShrink;
    }

    if (!$dara.isNull(request.startWithoutChannel)) {
      query["StartWithoutChannel"] = request.startWithoutChannel;
    }

    if (!$dara.isNull(request.startWithoutChannelWaitTime)) {
      query["StartWithoutChannelWaitTime"] = request.startWithoutChannelWaitTime;
    }

    if (!$dara.isNull(request.storageConfig)) {
      query["StorageConfig"] = request.storageConfig;
    }

    if (!$dara.isNull(request.subHighResolutionStream)) {
      query["SubHighResolutionStream"] = request.subHighResolutionStream;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.texts)) {
      query["Texts"] = request.texts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCloudRecord",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartCloudRecordResponse>(await this.callApi(params, req, runtime), new $_model.StartCloudRecordResponse({}));
  }

  /**
   * StartCloudRecord
   * 
   * @param request - StartCloudRecordRequest
   * @returns StartCloudRecordResponse
   */
  async startCloudRecord(request: $_model.StartCloudRecordRequest): Promise<$_model.StartCloudRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCloudRecordWithOptions(request, runtime);
  }

  /**
   * @param request - StartMPUTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMPUTaskResponse
   */
  async startMPUTaskWithOptions(request: $_model.StartMPUTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartMPUTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.mixMode)) {
      query["MixMode"] = request.mixMode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payloadType)) {
      query["PayloadType"] = request.payloadType;
    }

    if (!$dara.isNull(request.reportVad)) {
      query["ReportVad"] = request.reportVad;
    }

    if (!$dara.isNull(request.rtpExtInfo)) {
      query["RtpExtInfo"] = request.rtpExtInfo;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!$dara.isNull(request.streamURL)) {
      query["StreamURL"] = request.streamURL;
    }

    if (!$dara.isNull(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!$dara.isNull(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!$dara.isNull(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.timeStampRef)) {
      query["TimeStampRef"] = request.timeStampRef;
    }

    if (!$dara.isNull(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!$dara.isNull(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!$dara.isNull(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    if (!$dara.isNull(request.vadInterval)) {
      query["VadInterval"] = request.vadInterval;
    }

    if (!$dara.isNull(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enhancedParam)) {
      bodyFlat["EnhancedParam"] = request.enhancedParam;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMPUTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartMPUTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartMPUTaskResponse({}));
  }

  /**
   * @param request - StartMPUTaskRequest
   * @returns StartMPUTaskResponse
   */
  async startMPUTask(request: $_model.StartMPUTaskRequest): Promise<$_model.StartMPUTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startMPUTaskWithOptions(request, runtime);
  }

  /**
   * @param request - StartRecordTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRecordTaskResponse
   */
  async startRecordTaskWithOptions(request: $_model.StartRecordTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRecordTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.mixMode)) {
      query["MixMode"] = request.mixMode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!$dara.isNull(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!$dara.isNull(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!$dara.isNull(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskProfile)) {
      query["TaskProfile"] = request.taskProfile;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!$dara.isNull(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!$dara.isNull(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRecordTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRecordTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartRecordTaskResponse({}));
  }

  /**
   * @param request - StartRecordTaskRequest
   * @returns StartRecordTaskResponse
   */
  async startRecordTask(request: $_model.StartRecordTaskRequest): Promise<$_model.StartRecordTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRecordTaskWithOptions(request, runtime);
  }

  /**
   * StartStreamingOut
   * 
   * @param tmpReq - StartStreamingOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartStreamingOutResponse
   */
  async startStreamingOutWithOptions(tmpReq: $_model.StartStreamingOutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartStreamingOutResponse> {
    tmpReq.validate();
    let request = new $_model.StartStreamingOutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layoutSpecifiedUsers)) {
      request.layoutSpecifiedUsersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layoutSpecifiedUsers, "LayoutSpecifiedUsers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.annotation)) {
      query["Annotation"] = request.annotation;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.bgColor)) {
      query["BgColor"] = request.bgColor;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.images)) {
      query["Images"] = request.images;
    }

    if (!$dara.isNull(request.layoutSpecifiedUsersShrink)) {
      query["LayoutSpecifiedUsers"] = request.layoutSpecifiedUsersShrink;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!$dara.isNull(request.regionColor)) {
      query["RegionColor"] = request.regionColor;
    }

    if (!$dara.isNull(request.reservePaneForNoCameraUser)) {
      query["ReservePaneForNoCameraUser"] = request.reservePaneForNoCameraUser;
    }

    if (!$dara.isNull(request.showDefaultBackgroundOnMute)) {
      query["ShowDefaultBackgroundOnMute"] = request.showDefaultBackgroundOnMute;
    }

    if (!$dara.isNull(request.specMixedUserList)) {
      query["SpecMixedUserList"] = request.specMixedUserList;
    }

    if (!$dara.isNull(request.startWithoutChannel)) {
      query["StartWithoutChannel"] = request.startWithoutChannel;
    }

    if (!$dara.isNull(request.startWithoutChannelWaitTime)) {
      query["StartWithoutChannelWaitTime"] = request.startWithoutChannelWaitTime;
    }

    if (!$dara.isNull(request.subHighResolutionStream)) {
      query["SubHighResolutionStream"] = request.subHighResolutionStream;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.texts)) {
      query["Texts"] = request.texts;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartStreamingOut",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartStreamingOutResponse>(await this.callApi(params, req, runtime), new $_model.StartStreamingOutResponse({}));
  }

  /**
   * StartStreamingOut
   * 
   * @param request - StartStreamingOutRequest
   * @returns StartStreamingOutResponse
   */
  async startStreamingOut(request: $_model.StartStreamingOutRequest): Promise<$_model.StartStreamingOutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startStreamingOutWithOptions(request, runtime);
  }

  /**
   * 开始合流
   * 
   * @param tmpReq - StartViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartViewResponse
   */
  async startViewWithOptions(tmpReq: $_model.StartViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartViewResponse> {
    tmpReq.validate();
    let request = new $_model.StartViewShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.viewSubscribers)) {
      request.viewSubscribersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.viewSubscribers, "ViewSubscribers", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.bgColor)) {
      query["BgColor"] = request.bgColor;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.regionColor)) {
      query["RegionColor"] = request.regionColor;
    }

    if (!$dara.isNull(request.startWithoutChannel)) {
      query["StartWithoutChannel"] = request.startWithoutChannel;
    }

    if (!$dara.isNull(request.startWithoutChannelWaitTime)) {
      query["StartWithoutChannelWaitTime"] = request.startWithoutChannelWaitTime;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.viewContent)) {
      query["ViewContent"] = request.viewContent;
    }

    if (!$dara.isNull(request.viewSubscribersShrink)) {
      query["ViewSubscribers"] = request.viewSubscribersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartView",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartViewResponse>(await this.callApi(params, req, runtime), new $_model.StartViewResponse({}));
  }

  /**
   * 开始合流
   * 
   * @param request - StartViewRequest
   * @returns StartViewResponse
   */
  async startView(request: $_model.StartViewRequest): Promise<$_model.StartViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startViewWithOptions(request, runtime);
  }

  /**
   * 停止AI Agent
   * 
   * @param request - StopAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAgentResponse
   */
  async stopAgentWithOptions(request: $_model.StopAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAgent",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAgentResponse>(await this.callApi(params, req, runtime), new $_model.StopAgentResponse({}));
  }

  /**
   * 停止AI Agent
   * 
   * @param request - StopAgentRequest
   * @returns StopAgentResponse
   */
  async stopAgent(request: $_model.StopAgentRequest): Promise<$_model.StopAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAgentWithOptions(request, runtime);
  }

  /**
   * 关闭某个事件回调
   * 
   * @param tmpReq - StopCategoryCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCategoryCallbackResponse
   */
  async stopCategoryCallbackWithOptions(tmpReq: $_model.StopCategoryCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopCategoryCallbackResponse> {
    tmpReq.validate();
    let request = new $_model.StopCategoryCallbackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callback)) {
      request.callbackShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callback, "Callback", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callbackShrink)) {
      query["Callback"] = request.callbackShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCategoryCallback",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopCategoryCallbackResponse>(await this.callApi(params, req, runtime), new $_model.StopCategoryCallbackResponse({}));
  }

  /**
   * 关闭某个事件回调
   * 
   * @param request - StopCategoryCallbackRequest
   * @returns StopCategoryCallbackResponse
   */
  async stopCategoryCallback(request: $_model.StopCategoryCallbackRequest): Promise<$_model.StopCategoryCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopCategoryCallbackWithOptions(request, runtime);
  }

  /**
   * 删除频道
   * 
   * @param request - StopChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopChannelResponse
   */
  async stopChannelWithOptions(request: $_model.StopChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopChannelResponse>(await this.callApi(params, req, runtime), new $_model.StopChannelResponse({}));
  }

  /**
   * 删除频道
   * 
   * @param request - StopChannelRequest
   * @returns StopChannelResponse
   */
  async stopChannel(request: $_model.StopChannelRequest): Promise<$_model.StopChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopChannelWithOptions(request, runtime);
  }

  /**
   * 停止智能纪要
   * 
   * @param request - StopCloudNoteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCloudNoteResponse
   */
  async stopCloudNoteWithOptions(request: $_model.StopCloudNoteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopCloudNoteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCloudNote",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopCloudNoteResponse>(await this.callApi(params, req, runtime), new $_model.StopCloudNoteResponse({}));
  }

  /**
   * 停止智能纪要
   * 
   * @param request - StopCloudNoteRequest
   * @returns StopCloudNoteResponse
   */
  async stopCloudNote(request: $_model.StopCloudNoteRequest): Promise<$_model.StopCloudNoteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopCloudNoteWithOptions(request, runtime);
  }

  /**
   * StopCloudRecord
   * 
   * @param request - StopCloudRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCloudRecordResponse
   */
  async stopCloudRecordWithOptions(request: $_model.StopCloudRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopCloudRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCloudRecord",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopCloudRecordResponse>(await this.callApi(params, req, runtime), new $_model.StopCloudRecordResponse({}));
  }

  /**
   * StopCloudRecord
   * 
   * @param request - StopCloudRecordRequest
   * @returns StopCloudRecordResponse
   */
  async stopCloudRecord(request: $_model.StopCloudRecordRequest): Promise<$_model.StopCloudRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopCloudRecordWithOptions(request, runtime);
  }

  /**
   * @param request - StopMPUTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMPUTaskResponse
   */
  async stopMPUTaskWithOptions(request: $_model.StopMPUTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopMPUTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopMPUTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopMPUTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopMPUTaskResponse({}));
  }

  /**
   * @param request - StopMPUTaskRequest
   * @returns StopMPUTaskResponse
   */
  async stopMPUTask(request: $_model.StopMPUTaskRequest): Promise<$_model.StopMPUTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopMPUTaskWithOptions(request, runtime);
  }

  /**
   * @param request - StopRecordTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRecordTaskResponse
   */
  async stopRecordTaskWithOptions(request: $_model.StopRecordTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopRecordTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRecordTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopRecordTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopRecordTaskResponse({}));
  }

  /**
   * @param request - StopRecordTaskRequest
   * @returns StopRecordTaskResponse
   */
  async stopRecordTask(request: $_model.StopRecordTaskRequest): Promise<$_model.StopRecordTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopRecordTaskWithOptions(request, runtime);
  }

  /**
   * StopStreamingOut
   * 
   * @param request - StopStreamingOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopStreamingOutResponse
   */
  async stopStreamingOutWithOptions(request: $_model.StopStreamingOutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopStreamingOutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopStreamingOut",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopStreamingOutResponse>(await this.callApi(params, req, runtime), new $_model.StopStreamingOutResponse({}));
  }

  /**
   * StopStreamingOut
   * 
   * @param request - StopStreamingOutRequest
   * @returns StopStreamingOutResponse
   */
  async stopStreamingOut(request: $_model.StopStreamingOutRequest): Promise<$_model.StopStreamingOutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopStreamingOutWithOptions(request, runtime);
  }

  /**
   * 停止合流
   * 
   * @param request - StopViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopViewResponse
   */
  async stopViewWithOptions(request: $_model.StopViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopView",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopViewResponse>(await this.callApi(params, req, runtime), new $_model.StopViewResponse({}));
  }

  /**
   * 停止合流
   * 
   * @param request - StopViewRequest
   * @returns StopViewResponse
   */
  async stopView(request: $_model.StopViewRequest): Promise<$_model.StopViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopViewWithOptions(request, runtime);
  }

  /**
   * 更新AI Agent
   * 
   * @param tmpReq - UpdateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentResponse
   */
  async updateAgentWithOptions(tmpReq: $_model.UpdateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.voiceChatConfig)) {
      request.voiceChatConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.voiceChatConfig, "VoiceChatConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.voiceChatConfigShrink)) {
      query["VoiceChatConfig"] = request.voiceChatConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgent",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentResponse({}));
  }

  /**
   * 更新AI Agent
   * 
   * @param request - UpdateAgentRequest
   * @returns UpdateAgentResponse
   */
  async updateAgent(request: $_model.UpdateAgentRequest): Promise<$_model.UpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgentWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutoLiveStreamRuleResponse
   */
  async updateAutoLiveStreamRuleWithOptions(request: $_model.UpdateAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callBack)) {
      query["CallBack"] = request.callBack;
    }

    if (!$dara.isNull(request.channelIdPrefixes)) {
      query["ChannelIdPrefixes"] = request.channelIdPrefixes;
    }

    if (!$dara.isNull(request.channelIds)) {
      query["ChannelIds"] = request.channelIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAutoLiveStreamRuleResponse({}));
  }

  /**
   * @param request - UpdateAutoLiveStreamRuleRequest
   * @returns UpdateAutoLiveStreamRuleResponse
   */
  async updateAutoLiveStreamRule(request: $_model.UpdateAutoLiveStreamRuleRequest): Promise<$_model.UpdateAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * 更新云端录制任务
   * 
   * @param tmpReq - UpdateCloudRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudRecordResponse
   */
  async updateCloudRecordWithOptions(tmpReq: $_model.UpdateCloudRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudRecordResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCloudRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layoutSpecifiedUsers)) {
      request.layoutSpecifiedUsersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layoutSpecifiedUsers, "LayoutSpecifiedUsers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.images)) {
      query["Images"] = request.images;
    }

    if (!$dara.isNull(request.layoutSpecifiedUsersShrink)) {
      query["LayoutSpecifiedUsers"] = request.layoutSpecifiedUsersShrink;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.texts)) {
      query["Texts"] = request.texts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudRecord",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudRecordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudRecordResponse({}));
  }

  /**
   * 更新云端录制任务
   * 
   * @param request - UpdateCloudRecordRequest
   * @returns UpdateCloudRecordResponse
   */
  async updateCloudRecord(request: $_model.UpdateCloudRecordRequest): Promise<$_model.UpdateCloudRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudRecordWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateMPUTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMPUTaskResponse
   */
  async updateMPUTaskWithOptions(request: $_model.UpdateMPUTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMPUTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.mixMode)) {
      query["MixMode"] = request.mixMode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!$dara.isNull(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!$dara.isNull(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!$dara.isNull(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!$dara.isNull(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!$dara.isNull(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    if (!$dara.isNull(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMPUTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMPUTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMPUTaskResponse({}));
  }

  /**
   * @param request - UpdateMPUTaskRequest
   * @returns UpdateMPUTaskResponse
   */
  async updateMPUTask(request: $_model.UpdateMPUTaskRequest): Promise<$_model.UpdateMPUTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMPUTaskWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateRecordTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordTaskResponse
   */
  async updateRecordTaskWithOptions(request: $_model.UpdateRecordTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecordTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!$dara.isNull(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!$dara.isNull(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskProfile)) {
      query["TaskProfile"] = request.taskProfile;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!$dara.isNull(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!$dara.isNull(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecordTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecordTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecordTaskResponse({}));
  }

  /**
   * @param request - UpdateRecordTaskRequest
   * @returns UpdateRecordTaskResponse
   */
  async updateRecordTask(request: $_model.UpdateRecordTaskRequest): Promise<$_model.UpdateRecordTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecordTaskWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordTemplateResponse
   */
  async updateRecordTemplateWithOptions(request: $_model.UpdateRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecordTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.delayStopTime)) {
      query["DelayStopTime"] = request.delayStopTime;
    }

    if (!$dara.isNull(request.enableM3u8DateTime)) {
      query["EnableM3u8DateTime"] = request.enableM3u8DateTime;
    }

    if (!$dara.isNull(request.fileSplitInterval)) {
      query["FileSplitInterval"] = request.fileSplitInterval;
    }

    if (!$dara.isNull(request.formats)) {
      query["Formats"] = request.formats;
    }

    if (!$dara.isNull(request.httpCallbackUrl)) {
      query["HttpCallbackUrl"] = request.httpCallbackUrl;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.mnsQueue)) {
      query["MnsQueue"] = request.mnsQueue;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.ossFilePrefix)) {
      query["OssFilePrefix"] = request.ossFilePrefix;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskProfile)) {
      query["TaskProfile"] = request.taskProfile;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecordTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecordTemplateResponse({}));
  }

  /**
   * @param request - UpdateRecordTemplateRequest
   * @returns UpdateRecordTemplateResponse
   */
  async updateRecordTemplate(request: $_model.UpdateRecordTemplateRequest): Promise<$_model.UpdateRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 更新旁路推流任务
   * 
   * @param tmpReq - UpdateStreamingOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStreamingOutResponse
   */
  async updateStreamingOutWithOptions(tmpReq: $_model.UpdateStreamingOutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStreamingOutResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStreamingOutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layoutSpecifiedUsers)) {
      request.layoutSpecifiedUsersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layoutSpecifiedUsers, "LayoutSpecifiedUsers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.bgColor)) {
      query["BgColor"] = request.bgColor;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.images)) {
      query["Images"] = request.images;
    }

    if (!$dara.isNull(request.layoutSpecifiedUsersShrink)) {
      query["LayoutSpecifiedUsers"] = request.layoutSpecifiedUsersShrink;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!$dara.isNull(request.regionColor)) {
      query["RegionColor"] = request.regionColor;
    }

    if (!$dara.isNull(request.specMixedUserList)) {
      query["SpecMixedUserList"] = request.specMixedUserList;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.texts)) {
      query["Texts"] = request.texts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStreamingOut",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStreamingOutResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStreamingOutResponse({}));
  }

  /**
   * 更新旁路推流任务
   * 
   * @param request - UpdateStreamingOutRequest
   * @returns UpdateStreamingOutResponse
   */
  async updateStreamingOut(request: $_model.UpdateStreamingOutRequest): Promise<$_model.UpdateStreamingOutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStreamingOutWithOptions(request, runtime);
  }

}
