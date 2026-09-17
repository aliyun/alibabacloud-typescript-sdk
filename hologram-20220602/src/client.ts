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
    this._endpoint = this.getEndpoint("hologram", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 用于创建一个新的Agent会话并返回会话ID。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于创建一个新的 Agent 会话。
   * - 通过 `_meta.agent.agentName` 指定绑定的 Agent 名称，这是必填项。
   * - 可以通过 `_meta.config.sessionSource` 透传会话来源标识，便于后续按来源检索。
   * - 支持通过 `_meta.config.sessionTags[].sessionTagCode` 传入会话标签。
   * 
   * @param tmpReq - CreateAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentSessionResponse
   */
  async createAgentSessionWithOptions(tmpReq: $_model.CreateAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentSessionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgentSession",
      version: "2022-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentSessionResponse({}));
  }

  /**
   * 用于创建一个新的Agent会话并返回会话ID。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于创建一个新的 Agent 会话。
   * - 通过 `_meta.agent.agentName` 指定绑定的 Agent 名称，这是必填项。
   * - 可以通过 `_meta.config.sessionSource` 透传会话来源标识，便于后续按来源检索。
   * - 支持通过 `_meta.config.sessionTags[].sessionTagCode` 传入会话标签。
   * 
   * @param request - CreateAgentSessionRequest
   * @returns CreateAgentSessionResponse
   */
  async createAgentSession(request: $_model.CreateAgentSessionRequest): Promise<$_model.CreateAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentSessionWithOptions(request, runtime);
  }

  /**
   * 向指定会话发送用户Prompt，并以SSE方式流式接收Agent响应。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于向指定的会话 ID 发送用户的 Prompt，并以 SSE（Server-Sent Events）流式方式接收来自 Agent 的响应。
   * - 响应可能包括消息分片、思考过程、工具调用状态更新等信息。
   * - 如果指定的会话不存在，将通过 SSE 错误帧返回 400 错误。
   * - `stopReason`字段指示了 Agent 停止本轮对话的原因。
   * - 可选地提供额外元信息`Meta`来传递更多上下文给服务端。
   * - 返回的内容符合开源协议 Agent Client Protocol (ACP) 的规范。
   * 
   * @param tmpReq - PromptAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PromptAgentSessionResponse
   */
  async *promptAgentSessionWithSSE(tmpReq: $_model.PromptAgentSessionRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.PromptAgentSessionResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.PromptAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callerContext)) {
      body["Caller-Context"] = request.callerContext;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PromptAgentSession",
      version: "2022-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.PromptAgentSessionResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.PromptAgentSessionResponse({}));
      }

    }
  }

  /**
   * 向指定会话发送用户Prompt，并以SSE方式流式接收Agent响应。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于向指定的会话 ID 发送用户的 Prompt，并以 SSE（Server-Sent Events）流式方式接收来自 Agent 的响应。
   * - 响应可能包括消息分片、思考过程、工具调用状态更新等信息。
   * - 如果指定的会话不存在，将通过 SSE 错误帧返回 400 错误。
   * - `stopReason`字段指示了 Agent 停止本轮对话的原因。
   * - 可选地提供额外元信息`Meta`来传递更多上下文给服务端。
   * - 返回的内容符合开源协议 Agent Client Protocol (ACP) 的规范。
   * 
   * @param tmpReq - PromptAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PromptAgentSessionResponse
   */
  async promptAgentSessionWithOptions(tmpReq: $_model.PromptAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PromptAgentSessionResponse> {
    tmpReq.validate();
    let request = new $_model.PromptAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callerContext)) {
      body["Caller-Context"] = request.callerContext;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PromptAgentSession",
      version: "2022-06-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PromptAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.PromptAgentSessionResponse({}));
  }

  /**
   * 向指定会话发送用户Prompt，并以SSE方式流式接收Agent响应。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于向指定的会话 ID 发送用户的 Prompt，并以 SSE（Server-Sent Events）流式方式接收来自 Agent 的响应。
   * - 响应可能包括消息分片、思考过程、工具调用状态更新等信息。
   * - 如果指定的会话不存在，将通过 SSE 错误帧返回 400 错误。
   * - `stopReason`字段指示了 Agent 停止本轮对话的原因。
   * - 可选地提供额外元信息`Meta`来传递更多上下文给服务端。
   * - 返回的内容符合开源协议 Agent Client Protocol (ACP) 的规范。
   * 
   * @param request - PromptAgentSessionRequest
   * @returns PromptAgentSessionResponse
   */
  async promptAgentSession(request: $_model.PromptAgentSessionRequest): Promise<$_model.PromptAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.promptAgentSessionWithOptions(request, runtime);
  }

}
