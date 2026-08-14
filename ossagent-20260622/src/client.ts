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
    this._endpoint = this.getEndpoint("ossagent", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Initiates a streaming chat session.
   * 
   * @param request - ChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatResponse
   */
  async *chatWithSSE(request: $_model.ChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Chat",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: `/api/chat/stream`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = resp.event.data;
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
   * Initiates a streaming chat session.
   * 
   * @param request - ChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatResponse
   */
  async chatWithOptions(request: $_model.ChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Chat",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: `/api/chat/stream`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.ChatResponse>(await this.callApi(params, req, runtime), new $_model.ChatResponse({}));
  }

  /**
   * Initiates a streaming chat session.
   * 
   * @param request - ChatRequest
   * @returns ChatResponse
   */
  async chat(request: $_model.ChatRequest): Promise<$_model.ChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.chatWithOptions(request, headers, runtime);
  }

  /**
   * Confirms a tool calling operation.
   * 
   * @param request - ConfirmRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmResponse
   */
  async *confirmWithSSE(request: $_model.ConfirmRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ConfirmResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.confirmed)) {
      body["confirmed"] = request.confirmed;
    }

    if (!$dara.isNull(request.phase)) {
      body["phase"] = request.phase;
    }

    if (!$dara.isNull(request.reason)) {
      body["reason"] = request.reason;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.toolCalls)) {
      body["toolCalls"] = request.toolCalls;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Confirm",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: `/api/chat/confirm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = resp.event.data;
        yield $dara.cast<$_model.ConfirmResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ConfirmResponse({}));
      }

    }
  }

  /**
   * Confirms a tool calling operation.
   * 
   * @param request - ConfirmRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmResponse
   */
  async confirmWithOptions(request: $_model.ConfirmRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.confirmed)) {
      body["confirmed"] = request.confirmed;
    }

    if (!$dara.isNull(request.phase)) {
      body["phase"] = request.phase;
    }

    if (!$dara.isNull(request.reason)) {
      body["reason"] = request.reason;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.toolCalls)) {
      body["toolCalls"] = request.toolCalls;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Confirm",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: `/api/chat/confirm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.ConfirmResponse>(await this.callApi(params, req, runtime), new $_model.ConfirmResponse({}));
  }

  /**
   * Confirms a tool calling operation.
   * 
   * @param request - ConfirmRequest
   * @returns ConfirmResponse
   */
  async confirm(request: $_model.ConfirmRequest): Promise<$_model.ConfirmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.confirmWithOptions(request, headers, runtime);
  }

  /**
   * Interrupts a chat session.
   * 
   * @param request - InterruptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InterruptResponse
   */
  async interruptWithOptions(sessionId: string, request: $_model.InterruptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InterruptResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "Interrupt",
      version: "2026-06-22",
      protocol: "HTTPS",
      pathname: `/api/chat/interrupt/${$dara.URL.percentEncode(sessionId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.InterruptResponse>(await this.callApi(params, req, runtime), new $_model.InterruptResponse({}));
  }

  /**
   * Interrupts a chat session.
   * 
   * @param request - InterruptRequest
   * @returns InterruptResponse
   */
  async interrupt(sessionId: string, request: $_model.InterruptRequest): Promise<$_model.InterruptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.interruptWithOptions(sessionId, request, headers, runtime);
  }

}
