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
    this._endpoint = this.getEndpoint("wuyingai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 与 JVS Crew 进行流式对话，采用 Server-Sent Events (SSE) 协议实时推送对话内容。
   * 
   * @param tmpReq - ChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatResponse
   */
  async *chatWithSSE(tmpReq: $_model.ChatRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.ChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.settings)) {
      request.settingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.settings, "Settings", "json");
    }

    if (!$dara.isNull(tmpReq.streamOptions)) {
      request.streamOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamOptions, "StreamOptions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authorization)) {
      query["Authorization"] = request.authorization;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.externalUserId)) {
      body["ExternalUserId"] = request.externalUserId;
    }

    if (!$dara.isNull(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.routingKey)) {
      body["RoutingKey"] = request.routingKey;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.settingsShrink)) {
      body["Settings"] = request.settingsShrink;
    }

    if (!$dara.isNull(request.streamOptionsShrink)) {
      body["StreamOptions"] = request.streamOptionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Chat",
      version: "2026-03-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.ChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ChatResponse({}));
      }

    }
  }

  /**
   * 与 JVS Crew 进行流式对话，采用 Server-Sent Events (SSE) 协议实时推送对话内容。
   * 
   * @param tmpReq - ChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatResponse
   */
  async chatWithOptions(tmpReq: $_model.ChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatResponse> {
    tmpReq.validate();
    let request = new $_model.ChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.settings)) {
      request.settingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.settings, "Settings", "json");
    }

    if (!$dara.isNull(tmpReq.streamOptions)) {
      request.streamOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamOptions, "StreamOptions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authorization)) {
      query["Authorization"] = request.authorization;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.externalUserId)) {
      body["ExternalUserId"] = request.externalUserId;
    }

    if (!$dara.isNull(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.routingKey)) {
      body["RoutingKey"] = request.routingKey;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.settingsShrink)) {
      body["Settings"] = request.settingsShrink;
    }

    if (!$dara.isNull(request.streamOptionsShrink)) {
      body["StreamOptions"] = request.streamOptionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Chat",
      version: "2026-03-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ChatResponse({}));
  }

  /**
   * 与 JVS Crew 进行流式对话，采用 Server-Sent Events (SSE) 协议实时推送对话内容。
   * 
   * @param request - ChatRequest
   * @returns ChatResponse
   */
  async chat(request: $_model.ChatRequest): Promise<$_model.ChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatWithOptions(request, runtime);
  }

  /**
   * 获取用户进行对话所需的访问令牌（AccessToken），用于后续调用 Chat 接口进行身份验证。
   * 
   * @param request - GetAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessTokenResponse
   */
  async getAccessTokenWithOptions(request: $_model.GetAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.externalUserId)) {
      query["ExternalUserId"] = request.externalUserId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessToken",
      version: "2026-03-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessTokenResponse({}));
  }

  /**
   * 获取用户进行对话所需的访问令牌（AccessToken），用于后续调用 Chat 接口进行身份验证。
   * 
   * @param request - GetAccessTokenRequest
   * @returns GetAccessTokenResponse
   */
  async getAccessToken(request: $_model.GetAccessTokenRequest): Promise<$_model.GetAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessTokenWithOptions(request, runtime);
  }

}
