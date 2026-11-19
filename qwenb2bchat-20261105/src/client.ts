// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';
import { WebSocketUtils }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "QwenB2BChat";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("qwenb2bchat", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Sends text or multimodal messages to initiate conversations with web search capabilities, supporting deep thinking, session history management, and both complete JSON and Server-Sent Events (SSE) streaming responses. Specific agent and media capabilities are subject to the activated scope.
   * 
   * @param request - ChatRequest
   * @param headers - ChatHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatResponse
   */
  async *chatWithSSE(request: $_model.ChatRequest, headers: $_model.ChatHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.communication)) {
      body["communication"] = request.communication;
    }

    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accept)) {
      realHeaders["Accept"] = String(headers.accept);
    }

    if (!$dara.isNull(headers.xDashScopeSSE)) {
      realHeaders["X-DashScope-SSE"] = String(headers.xDashScopeSSE);
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWProtocol)) {
      realHeaders["X-GW-Protocol"] = String(headers.xGWProtocol);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Chat",
      version: "2026-11-05",
      protocol: "HTTPS",
      pathname: `/v1/api/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
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
   * Sends text or multimodal messages to initiate conversations with web search capabilities, supporting deep thinking, session history management, and both complete JSON and Server-Sent Events (SSE) streaming responses. Specific agent and media capabilities are subject to the activated scope.
   * 
   * @param request - ChatRequest
   * @param headers - ChatHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatResponse
   */
  async chatWithOptions(request: $_model.ChatRequest, headers: $_model.ChatHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.communication)) {
      body["communication"] = request.communication;
    }

    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accept)) {
      realHeaders["Accept"] = String(headers.accept);
    }

    if (!$dara.isNull(headers.xDashScopeSSE)) {
      realHeaders["X-DashScope-SSE"] = String(headers.xDashScopeSSE);
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWProtocol)) {
      realHeaders["X-GW-Protocol"] = String(headers.xGWProtocol);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Chat",
      version: "2026-11-05",
      protocol: "HTTPS",
      pathname: `/v1/api/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatResponse>(await this.callApi(params, req, runtime), new $_model.ChatResponse({}));
  }

  /**
   * Sends text or multimodal messages to initiate conversations with web search capabilities, supporting deep thinking, session history management, and both complete JSON and Server-Sent Events (SSE) streaming responses. Specific agent and media capabilities are subject to the activated scope.
   * 
   * @param request - ChatRequest
   * @returns ChatResponse
   */
  async chat(request: $_model.ChatRequest): Promise<$_model.ChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ChatHeaders({ });
    return await this.chatWithOptions(request, headers, runtime);
  }

  /**
   * Validates the service activation API or initiates service activation for the current account, and returns the current activation status along with the available order or instance ID.
   * 
   * @param request - OpenServiceRequest
   * @param headers - OpenServiceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenServiceResponse
   */
  async openServiceWithOptions(request: $_model.OpenServiceRequest, headers: $_model.OpenServiceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.OpenServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.communication)) {
      body["communication"] = request.communication;
    }

    if (!$dara.isNull(request.openBenefits)) {
      body["openBenefits"] = request.openBenefits;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenService",
      version: "2026-11-05",
      protocol: "HTTPS",
      pathname: `/v1/api/openService`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenServiceResponse({}));
  }

  /**
   * Validates the service activation API or initiates service activation for the current account, and returns the current activation status along with the available order or instance ID.
   * 
   * @param request - OpenServiceRequest
   * @returns OpenServiceResponse
   */
  async openService(request: $_model.OpenServiceRequest): Promise<$_model.OpenServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.OpenServiceHeaders({ });
    return await this.openServiceWithOptions(request, headers, runtime);
  }

  /**
   * Uploads audio and receives recognized text, agent responses, and synthesized audio over a WebSocket connection. Supports image and text auxiliary input, recognition context, and conversation history. The operation description covers the complete handshake, control frames, audio frames, return events, and error handling protocols.
   * 
   * @param request - StreamVoiceRequest
   * @param headers - StreamVoiceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StreamVoiceResponse
   */
  async streamVoiceWithOptions(request: $_model.StreamVoiceRequest, headers: $_model.StreamVoiceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StreamVoiceResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWProtocol)) {
      realHeaders["X-GW-Protocol"] = String(headers.xGWProtocol);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "StreamVoice",
      version: "2026-11-05",
      protocol: "wss",
      pathname: `/v1/api/voice`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
      websocketSubProtocol: "general",
    });
    let res = new $_model.StreamVoiceResponse({ });
    let tmp = await this.callApi(params, req, runtime);
    if (!$dara.isNull(tmp["webSocketClient"])) {
      res.webSocketClient = WebSocketUtils.createWebSocketClient(tmp["webSocketClient"]);
    }

    return res;
  }

  /**
   * Uploads audio and receives recognized text, agent responses, and synthesized audio over a WebSocket connection. Supports image and text auxiliary input, recognition context, and conversation history. The operation description covers the complete handshake, control frames, audio frames, return events, and error handling protocols.
   * 
   * @param request - StreamVoiceRequest
   * @returns StreamVoiceResponse
   */
  async streamVoice(request: $_model.StreamVoiceRequest): Promise<$_model.StreamVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StreamVoiceHeaders({ });
    return await this.streamVoiceWithOptions(request, headers, runtime);
  }

}
