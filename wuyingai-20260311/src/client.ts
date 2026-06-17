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
   * Conducts a streaming conversation with JVS Crew, using the Server-Sent Events (SSE) protocol to push conversation content in real time.
   * 
   * @remarks
   * *Features**
   * - Real-time streaming response that reduces time to first token.
   * - Supports multimodal input (text, images, and files).
   * - Session persistence for multi-turn conversations.
   * - Event-driven architecture for precise message status control.
   * **Request information**
   * - **Request method**: `POST`
   * - **Content-Type**: `application/json`
   * - **Response Content-Type**: `text/event-stream`.
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

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.resume)) {
      body["Resume"] = request.resume;
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
   * Conducts a streaming conversation with JVS Crew, using the Server-Sent Events (SSE) protocol to push conversation content in real time.
   * 
   * @remarks
   * *Features**
   * - Real-time streaming response that reduces time to first token.
   * - Supports multimodal input (text, images, and files).
   * - Session persistence for multi-turn conversations.
   * - Event-driven architecture for precise message status control.
   * **Request information**
   * - **Request method**: `POST`
   * - **Content-Type**: `application/json`
   * - **Response Content-Type**: `text/event-stream`.
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

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.resume)) {
      body["Resume"] = request.resume;
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
   * Conducts a streaming conversation with JVS Crew, using the Server-Sent Events (SSE) protocol to push conversation content in real time.
   * 
   * @remarks
   * *Features**
   * - Real-time streaming response that reduces time to first token.
   * - Supports multimodal input (text, images, and files).
   * - Session persistence for multi-turn conversations.
   * - Event-driven architecture for precise message status control.
   * **Request information**
   * - **Request method**: `POST`
   * - **Content-Type**: `application/json`
   * - **Response Content-Type**: `text/event-stream`.
   * 
   * @param request - ChatRequest
   * @returns ChatResponse
   */
  async chat(request: $_model.ChatRequest): Promise<$_model.ChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatWithOptions(request, runtime);
  }

  /**
   * Obtains an access token (AccessToken) for user conversations, which is used to authenticate when invoking the Chat operation.
   * 
   * @remarks
   * *Token format**: The AccessToken is a **JWT** consisting of **Header.Payload.Signature** segments, each Base64URL-encoded and concatenated with `.` into a single line. The examples in the following table are masked for illustration purposes. The actual RequestId and JWT segments are longer.
   * **Token validity**: The AccessToken **is valid for a limited period of time**. After it expires, call this operation again to obtain a new token.
   * **Authentication method**: POP V1 signature (AK/SK)
   * **Action**: `GetAccessToken`.
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
   * Obtains an access token (AccessToken) for user conversations, which is used to authenticate when invoking the Chat operation.
   * 
   * @remarks
   * *Token format**: The AccessToken is a **JWT** consisting of **Header.Payload.Signature** segments, each Base64URL-encoded and concatenated with `.` into a single line. The examples in the following table are masked for illustration purposes. The actual RequestId and JWT segments are longer.
   * **Token validity**: The AccessToken **is valid for a limited period of time**. After it expires, call this operation again to obtain a new token.
   * **Authentication method**: POP V1 signature (AK/SK)
   * **Action**: `GetAccessToken`.
   * 
   * @param request - GetAccessTokenRequest
   * @returns GetAccessTokenResponse
   */
  async getAccessToken(request: $_model.GetAccessTokenRequest): Promise<$_model.GetAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessTokenWithOptions(request, runtime);
  }

}
