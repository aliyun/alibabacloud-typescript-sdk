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
   * 创建数字人会话
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
   * 创建数字人会话
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
