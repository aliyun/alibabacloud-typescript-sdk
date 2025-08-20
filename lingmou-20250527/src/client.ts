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
