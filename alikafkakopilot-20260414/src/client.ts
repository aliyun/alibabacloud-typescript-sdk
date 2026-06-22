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
    this._endpoint = this.getEndpoint("alikafkakopilot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 智能体 stream chat
   * 
   * @param request - KopilotChatStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KopilotChatStreamResponse
   */
  async *kopilotChatStreamWithSSE(request: $_model.KopilotChatStreamRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.KopilotChatStreamResponse, any, unknown> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KopilotChatStream",
      version: "2026-04-14",
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
        yield $dara.cast<$_model.KopilotChatStreamResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.KopilotChatStreamResponse({}));
      }

    }
  }

  /**
   * 智能体 stream chat
   * 
   * @param request - KopilotChatStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KopilotChatStreamResponse
   */
  async kopilotChatStreamWithOptions(request: $_model.KopilotChatStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KopilotChatStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KopilotChatStream",
      version: "2026-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KopilotChatStreamResponse>(await this.callApi(params, req, runtime), new $_model.KopilotChatStreamResponse({}));
  }

  /**
   * 智能体 stream chat
   * 
   * @param request - KopilotChatStreamRequest
   * @returns KopilotChatStreamResponse
   */
  async kopilotChatStream(request: $_model.KopilotChatStreamRequest): Promise<$_model.KopilotChatStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.kopilotChatStreamWithOptions(request, runtime);
  }

  /**
   * 评价
   * 
   * @param request - KopilotFeedbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KopilotFeedbackResponse
   */
  async kopilotFeedbackWithOptions(request: $_model.KopilotFeedbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KopilotFeedbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.feedback)) {
      query["Feedback"] = request.feedback;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.turnId)) {
      query["TurnId"] = request.turnId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KopilotFeedback",
      version: "2026-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KopilotFeedbackResponse>(await this.callApi(params, req, runtime), new $_model.KopilotFeedbackResponse({}));
  }

  /**
   * 评价
   * 
   * @param request - KopilotFeedbackRequest
   * @returns KopilotFeedbackResponse
   */
  async kopilotFeedback(request: $_model.KopilotFeedbackRequest): Promise<$_model.KopilotFeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.kopilotFeedbackWithOptions(request, runtime);
  }

  /**
   * 历史会话
   * 
   * @param request - KopilotListConversationChatMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KopilotListConversationChatMessagesResponse
   */
  async kopilotListConversationChatMessagesWithOptions(request: $_model.KopilotListConversationChatMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KopilotListConversationChatMessagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beforeTurnId)) {
      query["BeforeTurnId"] = request.beforeTurnId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KopilotListConversationChatMessages",
      version: "2026-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KopilotListConversationChatMessagesResponse>(await this.callApi(params, req, runtime), new $_model.KopilotListConversationChatMessagesResponse({}));
  }

  /**
   * 历史会话
   * 
   * @param request - KopilotListConversationChatMessagesRequest
   * @returns KopilotListConversationChatMessagesResponse
   */
  async kopilotListConversationChatMessages(request: $_model.KopilotListConversationChatMessagesRequest): Promise<$_model.KopilotListConversationChatMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.kopilotListConversationChatMessagesWithOptions(request, runtime);
  }

  /**
   * 智能体
   * 
   * @param request - KopilotListConversationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KopilotListConversationsResponse
   */
  async kopilotListConversationsWithOptions(request: $_model.KopilotListConversationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KopilotListConversationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KopilotListConversations",
      version: "2026-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KopilotListConversationsResponse>(await this.callApi(params, req, runtime), new $_model.KopilotListConversationsResponse({}));
  }

  /**
   * 智能体
   * 
   * @param request - KopilotListConversationsRequest
   * @returns KopilotListConversationsResponse
   */
  async kopilotListConversations(request: $_model.KopilotListConversationsRequest): Promise<$_model.KopilotListConversationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.kopilotListConversationsWithOptions(request, runtime);
  }

  /**
   * 状态
   * 
   * @param request - KopilotQueryStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KopilotQueryStatusResponse
   */
  async kopilotQueryStatusWithOptions(request: $_model.KopilotQueryStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KopilotQueryStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KopilotQueryStatus",
      version: "2026-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KopilotQueryStatusResponse>(await this.callApi(params, req, runtime), new $_model.KopilotQueryStatusResponse({}));
  }

  /**
   * 状态
   * 
   * @param request - KopilotQueryStatusRequest
   * @returns KopilotQueryStatusResponse
   */
  async kopilotQueryStatus(request: $_model.KopilotQueryStatusRequest): Promise<$_model.KopilotQueryStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.kopilotQueryStatusWithOptions(request, runtime);
  }

}
