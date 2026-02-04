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
    this._endpoint = this.getEndpoint("lingmou", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 关闭会话实例session
   * 
   * @param tmpReq - CloseChatInstanceSessionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseChatInstanceSessionsResponse
   */
  async closeChatInstanceSessionsWithOptions(instanceId: string, tmpReq: $_model.CloseChatInstanceSessionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloseChatInstanceSessionsResponse> {
    tmpReq.validate();
    let request = new $_model.CloseChatInstanceSessionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sessionIds)) {
      request.sessionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sessionIds, "sessionIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionIdsShrink)) {
      body["sessionIds"] = request.sessionIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseChatInstanceSessions",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/chat/instances/${$dara.URL.percentEncode(instanceId)}/sessions/close`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseChatInstanceSessionsResponse>(await this.callApi(params, req, runtime), new $_model.CloseChatInstanceSessionsResponse({}));
  }

  /**
   * 关闭会话实例session
   * 
   * @param request - CloseChatInstanceSessionsRequest
   * @returns CloseChatInstanceSessionsResponse
   */
  async closeChatInstanceSessions(instanceId: string, request: $_model.CloseChatInstanceSessionsRequest): Promise<$_model.CloseChatInstanceSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeChatInstanceSessionsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 用户确认
   * 
   * @param request - ConfirmTrainPicAvatarRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmTrainPicAvatarResponse
   */
  async confirmTrainPicAvatarWithOptions(request: $_model.ConfirmTrainPicAvatarRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmTrainPicAvatarResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatarId)) {
      query["avatarId"] = request.avatarId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfirmTrainPicAvatar",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/train/confirmTrainPicAvatar`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfirmTrainPicAvatarResponse>(await this.callApi(params, req, runtime), new $_model.ConfirmTrainPicAvatarResponse({}));
  }

  /**
   * 用户确认
   * 
   * @param request - ConfirmTrainPicAvatarRequest
   * @returns ConfirmTrainPicAvatarResponse
   */
  async confirmTrainPicAvatar(request: $_model.ConfirmTrainPicAvatarRequest): Promise<$_model.ConfirmTrainPicAvatarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.confirmTrainPicAvatarWithOptions(request, headers, runtime);
  }

  /**
   * 创建背景素材
   * 
   * @param request - CreateBackgroundPicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackgroundPicResponse
   */
  async createBackgroundPicWithOptions(request: $_model.CreateBackgroundPicRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackgroundPicResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filename)) {
      query["filename"] = request.filename;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["ossKey"] = request.ossKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackgroundPic",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/chat/createBackgroundPic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackgroundPicResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackgroundPicResponse({}));
  }

  /**
   * 创建背景素材
   * 
   * @param request - CreateBackgroundPicRequest
   * @returns CreateBackgroundPicResponse
   */
  async createBackgroundPic(request: $_model.CreateBackgroundPicRequest): Promise<$_model.CreateBackgroundPicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBackgroundPicWithOptions(request, headers, runtime);
  }

  /**
   * 创建播报音频
   * 
   * @param request - CreateBroadcastAudioRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBroadcastAudioResponse
   */
  async createBroadcastAudioWithOptions(request: $_model.CreateBroadcastAudioRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBroadcastAudioResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.ossKey)) {
      body["ossKey"] = request.ossKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBroadcastAudio",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/customer/broadcast/material/audio/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBroadcastAudioResponse>(await this.callApi(params, req, runtime), new $_model.CreateBroadcastAudioResponse({}));
  }

  /**
   * 创建播报音频
   * 
   * @param request - CreateBroadcastAudioRequest
   * @returns CreateBroadcastAudioResponse
   */
  async createBroadcastAudio(request: $_model.CreateBroadcastAudioRequest): Promise<$_model.CreateBroadcastAudioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBroadcastAudioWithOptions(request, headers, runtime);
  }

  /**
   * 创建播报贴图
   * 
   * @param request - CreateBroadcastStickerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBroadcastStickerResponse
   */
  async createBroadcastStickerWithOptions(request: $_model.CreateBroadcastStickerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBroadcastStickerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.ossKey)) {
      body["ossKey"] = request.ossKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBroadcastSticker",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/customer/broadcast/material/sticker/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBroadcastStickerResponse>(await this.callApi(params, req, runtime), new $_model.CreateBroadcastStickerResponse({}));
  }

  /**
   * 创建播报贴图
   * 
   * @param request - CreateBroadcastStickerRequest
   * @returns CreateBroadcastStickerResponse
   */
  async createBroadcastSticker(request: $_model.CreateBroadcastStickerRequest): Promise<$_model.CreateBroadcastStickerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBroadcastStickerWithOptions(request, headers, runtime);
  }

  /**
   * 基于模板创建播报视频
   * 
   * @param request - CreateBroadcastVideoFromTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBroadcastVideoFromTemplateResponse
   */
  async createBroadcastVideoFromTemplateWithOptions(request: $_model.CreateBroadcastVideoFromTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBroadcastVideoFromTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.templateId)) {
      body["templateId"] = request.templateId;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    if (!$dara.isNull(request.videoOptions)) {
      body["videoOptions"] = request.videoOptions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBroadcastVideoFromTemplate",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/api/v1/amp/customer/broadcast/video/createFromTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBroadcastVideoFromTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateBroadcastVideoFromTemplateResponse({}));
  }

  /**
   * 基于模板创建播报视频
   * 
   * @param request - CreateBroadcastVideoFromTemplateRequest
   * @returns CreateBroadcastVideoFromTemplateResponse
   */
  async createBroadcastVideoFromTemplate(request: $_model.CreateBroadcastVideoFromTemplateRequest): Promise<$_model.CreateBroadcastVideoFromTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBroadcastVideoFromTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 背景配置
   * 
   * @param request - CreateChatConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatConfigResponse
   */
  async createChatConfigWithOptions(request: $_model.CreateChatConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatarId)) {
      query["avatarId"] = request.avatarId;
    }

    if (!$dara.isNull(request.backgroundId)) {
      query["backgroundId"] = request.backgroundId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChatConfig",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/chat/createChatConfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatConfigResponse({}));
  }

  /**
   * 背景配置
   * 
   * @param request - CreateChatConfigRequest
   * @returns CreateChatConfigResponse
   */
  async createChatConfig(request: $_model.CreateChatConfigRequest): Promise<$_model.CreateChatConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createChatConfigWithOptions(request, headers, runtime);
  }

  /**
   * 创建实时数字人会话。
   * 
   * @param request - CreateChatSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatSessionResponse
   */
  async createChatSessionWithOptions(id: string, request: $_model.CreateChatSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatSessionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.license)) {
      query["license"] = request.license;
    }

    if (!$dara.isNull(request.platform)) {
      query["platform"] = request.platform;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChatSession",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/chat/init/${$dara.URL.percentEncode(id)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatSessionResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatSessionResponse({}));
  }

  /**
   * 创建实时数字人会话。
   * 
   * @param request - CreateChatSessionRequest
   * @returns CreateChatSessionResponse
   */
  async createChatSession(id: string, request: $_model.CreateChatSessionRequest): Promise<$_model.CreateChatSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createChatSessionWithOptions(id, request, headers, runtime);
  }

  /**
   * 创建对话免训照片数字人
   * 
   * @param request - CreateNoTrainPicAvatarRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNoTrainPicAvatarResponse
   */
  async createNoTrainPicAvatarWithOptions(request: $_model.CreateNoTrainPicAvatarRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNoTrainPicAvatarResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expressiveness)) {
      query["expressiveness"] = request.expressiveness;
    }

    if (!$dara.isNull(request.gender)) {
      query["gender"] = request.gender;
    }

    if (!$dara.isNull(request.generateAssets)) {
      query["generateAssets"] = request.generateAssets;
    }

    if (!$dara.isNull(request.imageOssPath)) {
      query["imageOssPath"] = request.imageOssPath;
    }

    if (!$dara.isNull(request.jwtToken)) {
      query["jwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.transparent)) {
      query["transparent"] = request.transparent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNoTrainPicAvatar",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/chat/createNoTrainPicAvatar`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNoTrainPicAvatarResponse>(await this.callApi(params, req, runtime), new $_model.CreateNoTrainPicAvatarResponse({}));
  }

  /**
   * 创建对话免训照片数字人
   * 
   * @param request - CreateNoTrainPicAvatarRequest
   * @returns CreateNoTrainPicAvatarResponse
   */
  async createNoTrainPicAvatar(request: $_model.CreateNoTrainPicAvatarRequest): Promise<$_model.CreateNoTrainPicAvatarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createNoTrainPicAvatarWithOptions(request, headers, runtime);
  }

  /**
   * 创建TTS音色
   * 
   * @param request - CreateTTSVoiceCustomRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTTSVoiceCustomResponse
   */
  async createTTSVoiceCustomWithOptions(request: $_model.CreateTTSVoiceCustomRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTTSVoiceCustomResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.gender)) {
      query["gender"] = request.gender;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["ossKey"] = request.ossKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTTSVoiceCustom",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/voice/createTTSVoiceCustom`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTTSVoiceCustomResponse>(await this.callApi(params, req, runtime), new $_model.CreateTTSVoiceCustomResponse({}));
  }

  /**
   * 创建TTS音色
   * 
   * @param request - CreateTTSVoiceCustomRequest
   * @returns CreateTTSVoiceCustomResponse
   */
  async createTTSVoiceCustom(request: $_model.CreateTTSVoiceCustomRequest): Promise<$_model.CreateTTSVoiceCustomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTTSVoiceCustomWithOptions(request, headers, runtime);
  }

  /**
   * 创建图片训练数字人
   * 
   * @param request - CreateTrainPicAvatarRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrainPicAvatarResponse
   */
  async createTrainPicAvatarWithOptions(request: $_model.CreateTrainPicAvatarRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTrainPicAvatarResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizType)) {
      query["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.gender)) {
      query["gender"] = request.gender;
    }

    if (!$dara.isNull(request.generateAssets)) {
      query["generateAssets"] = request.generateAssets;
    }

    if (!$dara.isNull(request.imageOssPath)) {
      query["imageOssPath"] = request.imageOssPath;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.templateId)) {
      query["templateId"] = request.templateId;
    }

    if (!$dara.isNull(request.transparent)) {
      query["transparent"] = request.transparent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrainPicAvatar",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/train/createTrainPicAvatar`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTrainPicAvatarResponse>(await this.callApi(params, req, runtime), new $_model.CreateTrainPicAvatarResponse({}));
  }

  /**
   * 创建图片训练数字人
   * 
   * @param request - CreateTrainPicAvatarRequest
   * @returns CreateTrainPicAvatarResponse
   */
  async createTrainPicAvatar(request: $_model.CreateTrainPicAvatarRequest): Promise<$_model.CreateTrainPicAvatarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrainPicAvatarWithOptions(request, headers, runtime);
  }

  /**
   * 查询播报模板详情
   * 
   * @param request - GetBroadcastTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBroadcastTemplateResponse
   */
  async getBroadcastTemplateWithOptions(request: $_model.GetBroadcastTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetBroadcastTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateId)) {
      query["templateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBroadcastTemplate",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/customer/broadcast/template/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBroadcastTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetBroadcastTemplateResponse({}));
  }

  /**
   * 查询播报模板详情
   * 
   * @param request - GetBroadcastTemplateRequest
   * @returns GetBroadcastTemplateResponse
   */
  async getBroadcastTemplate(request: $_model.GetBroadcastTemplateRequest): Promise<$_model.GetBroadcastTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBroadcastTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 根据ID获取TTS音色
   * 
   * @param request - GetTTSVoiceByIdCustomRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTTSVoiceByIdCustomResponse
   */
  async getTTSVoiceByIdCustomWithOptions(request: $_model.GetTTSVoiceByIdCustomRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTTSVoiceByIdCustomResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.voiceId)) {
      query["voiceId"] = request.voiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTTSVoiceByIdCustom",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/voice/getTTSVoiceById`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTTSVoiceByIdCustomResponse>(await this.callApi(params, req, runtime), new $_model.GetTTSVoiceByIdCustomResponse({}));
  }

  /**
   * 根据ID获取TTS音色
   * 
   * @param request - GetTTSVoiceByIdCustomRequest
   * @returns GetTTSVoiceByIdCustomResponse
   */
  async getTTSVoiceByIdCustom(request: $_model.GetTTSVoiceByIdCustomRequest): Promise<$_model.GetTTSVoiceByIdCustomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTTSVoiceByIdCustomWithOptions(request, headers, runtime);
  }

  /**
   * 查询图片训练数字人的状态
   * 
   * @param request - GetTrainPicAvatarStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrainPicAvatarStatusResponse
   */
  async getTrainPicAvatarStatusWithOptions(request: $_model.GetTrainPicAvatarStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrainPicAvatarStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatarId)) {
      query["avatarId"] = request.avatarId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrainPicAvatarStatus",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/train/getTrainPicAvatarStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrainPicAvatarStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetTrainPicAvatarStatusResponse({}));
  }

  /**
   * 查询图片训练数字人的状态
   * 
   * @param request - GetTrainPicAvatarStatusRequest
   * @returns GetTrainPicAvatarStatusResponse
   */
  async getTrainPicAvatarStatus(request: $_model.GetTrainPicAvatarStatusRequest): Promise<$_model.GetTrainPicAvatarStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrainPicAvatarStatusWithOptions(request, headers, runtime);
  }

  /**
   * 获取对话免训图片素材上传凭证
   * 
   * @param request - GetUploadPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadPolicyResponse
   */
  async getUploadPolicyWithOptions(request: $_model.GetUploadPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadPolicyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["jwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadPolicy",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/chat/getUploadPolicy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadPolicyResponse({}));
  }

  /**
   * 获取对话免训图片素材上传凭证
   * 
   * @param request - GetUploadPolicyRequest
   * @returns GetUploadPolicyResponse
   */
  async getUploadPolicy(request: $_model.GetUploadPolicyRequest): Promise<$_model.GetUploadPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUploadPolicyWithOptions(request, headers, runtime);
  }

  /**
   * 根据音频id批量查询播报音频（最多查询100个）
   * 
   * @param tmpReq - ListBroadcastAudiosByIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBroadcastAudiosByIdResponse
   */
  async listBroadcastAudiosByIdWithOptions(tmpReq: $_model.ListBroadcastAudiosByIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListBroadcastAudiosByIdResponse> {
    tmpReq.validate();
    let request = new $_model.ListBroadcastAudiosByIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.audioIds)) {
      request.audioIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.audioIds, "audioIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.audioIdsShrink)) {
      query["audioIds"] = request.audioIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBroadcastAudiosById",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/customer/broadcast/material/audio/batchQuery`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBroadcastAudiosByIdResponse>(await this.callApi(params, req, runtime), new $_model.ListBroadcastAudiosByIdResponse({}));
  }

  /**
   * 根据音频id批量查询播报音频（最多查询100个）
   * 
   * @param request - ListBroadcastAudiosByIdRequest
   * @returns ListBroadcastAudiosByIdResponse
   */
  async listBroadcastAudiosById(request: $_model.ListBroadcastAudiosByIdRequest): Promise<$_model.ListBroadcastAudiosByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBroadcastAudiosByIdWithOptions(request, headers, runtime);
  }

  /**
   * 列举播报模板
   * 
   * @param request - ListBroadcastTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBroadcastTemplatesResponse
   */
  async listBroadcastTemplatesWithOptions(request: $_model.ListBroadcastTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListBroadcastTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBroadcastTemplates",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/customer/broadcast/template/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBroadcastTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListBroadcastTemplatesResponse({}));
  }

  /**
   * 列举播报模板
   * 
   * @param request - ListBroadcastTemplatesRequest
   * @returns ListBroadcastTemplatesResponse
   */
  async listBroadcastTemplates(request: $_model.ListBroadcastTemplatesRequest): Promise<$_model.ListBroadcastTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBroadcastTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * 根据视频id批量查询播报视频（最多查询100个）
   * 
   * @param tmpReq - ListBroadcastVideosByIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBroadcastVideosByIdResponse
   */
  async listBroadcastVideosByIdWithOptions(tmpReq: $_model.ListBroadcastVideosByIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListBroadcastVideosByIdResponse> {
    tmpReq.validate();
    let request = new $_model.ListBroadcastVideosByIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.videoIds)) {
      request.videoIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoIds, "videoIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.videoIdsShrink)) {
      query["videoIds"] = request.videoIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBroadcastVideosById",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/api/v1/amp/customer/broadcast/video/batchQuery`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBroadcastVideosByIdResponse>(await this.callApi(params, req, runtime), new $_model.ListBroadcastVideosByIdResponse({}));
  }

  /**
   * 根据视频id批量查询播报视频（最多查询100个）
   * 
   * @param request - ListBroadcastVideosByIdRequest
   * @returns ListBroadcastVideosByIdResponse
   */
  async listBroadcastVideosById(request: $_model.ListBroadcastVideosByIdRequest): Promise<$_model.ListBroadcastVideosByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBroadcastVideosByIdWithOptions(request, headers, runtime);
  }

  /**
   * 列举私有TTS音色
   * 
   * @param request - ListPrivateTTSVoicesCustomRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateTTSVoicesCustomResponse
   */
  async listPrivateTTSVoicesCustomWithOptions(request: $_model.ListPrivateTTSVoicesCustomRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrivateTTSVoicesCustomResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateTTSVoicesCustom",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/voice/listPrivateTTSVoicesCustom`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrivateTTSVoicesCustomResponse>(await this.callApi(params, req, runtime), new $_model.ListPrivateTTSVoicesCustomResponse({}));
  }

  /**
   * 列举私有TTS音色
   * 
   * @param request - ListPrivateTTSVoicesCustomRequest
   * @returns ListPrivateTTSVoicesCustomResponse
   */
  async listPrivateTTSVoicesCustom(request: $_model.ListPrivateTTSVoicesCustomRequest): Promise<$_model.ListPrivateTTSVoicesCustomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPrivateTTSVoicesCustomWithOptions(request, headers, runtime);
  }

  /**
   * 查询底板素材
   * 
   * @param request - ListTemplateMaterialRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateMaterialResponse
   */
  async listTemplateMaterialWithOptions(request: $_model.ListTemplateMaterialRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplateMaterialResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.templateIds)) {
      query["templateIds"] = request.templateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplateMaterial",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/train/listTemplateMaterial`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplateMaterialResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplateMaterialResponse({}));
  }

  /**
   * 查询底板素材
   * 
   * @param request - ListTemplateMaterialRequest
   * @returns ListTemplateMaterialResponse
   */
  async listTemplateMaterial(request: $_model.ListTemplateMaterialRequest): Promise<$_model.ListTemplateMaterialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplateMaterialWithOptions(request, headers, runtime);
  }

  /**
   * 查询会话实例session
   * 
   * @param tmpReq - QueryChatInstanceSessionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryChatInstanceSessionsResponse
   */
  async queryChatInstanceSessionsWithOptions(instanceId: string, tmpReq: $_model.QueryChatInstanceSessionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryChatInstanceSessionsResponse> {
    tmpReq.validate();
    let request = new $_model.QueryChatInstanceSessionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sessionIds)) {
      request.sessionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sessionIds, "sessionIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionIdsShrink)) {
      query["sessionIds"] = request.sessionIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryChatInstanceSessions",
      version: "2025-05-27",
      protocol: "HTTPS",
      pathname: `/openapi/chat/instances/${$dara.URL.percentEncode(instanceId)}/sessions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryChatInstanceSessionsResponse>(await this.callApi(params, req, runtime), new $_model.QueryChatInstanceSessionsResponse({}));
  }

  /**
   * 查询会话实例session
   * 
   * @param request - QueryChatInstanceSessionsRequest
   * @returns QueryChatInstanceSessionsResponse
   */
  async queryChatInstanceSessions(instanceId: string, request: $_model.QueryChatInstanceSessionsRequest): Promise<$_model.QueryChatInstanceSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryChatInstanceSessionsWithOptions(instanceId, request, headers, runtime);
  }

}
