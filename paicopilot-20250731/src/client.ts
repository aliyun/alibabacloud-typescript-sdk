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
    this._endpoint = this.getEndpoint("paicopilot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * CreateChat
   * 
   * @param request - CreateChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatResponse
   */
  async *createChatWithSSE(SessionId: string, request: $_model.CreateChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.CreateChatResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extraData)) {
      body["ExtraData"] = request.extraData;
    }

    if (!$dara.isNull(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!$dara.isNull(request.question)) {
      body["Question"] = request.question;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChat",
      version: "2025-07-31",
      protocol: "HTTPS",
      pathname: `/api/v1/sessions/${$dara.URL.percentEncode(SessionId)}/chats`,
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
        yield $dara.cast<$_model.CreateChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.CreateChatResponse({}));
      }

    }
  }

  /**
   * CreateChat
   * 
   * @param request - CreateChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatResponse
   */
  async createChatWithOptions(SessionId: string, request: $_model.CreateChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extraData)) {
      body["ExtraData"] = request.extraData;
    }

    if (!$dara.isNull(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!$dara.isNull(request.question)) {
      body["Question"] = request.question;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChat",
      version: "2025-07-31",
      protocol: "HTTPS",
      pathname: `/api/v1/sessions/${$dara.URL.percentEncode(SessionId)}/chats`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatResponse({}));
  }

  /**
   * CreateChat
   * 
   * @param request - CreateChatRequest
   * @returns CreateChatResponse
   */
  async createChat(SessionId: string, request: $_model.CreateChatRequest): Promise<$_model.CreateChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createChatWithOptions(SessionId, request, headers, runtime);
  }

  /**
   * /api/v1/sessions
   * 
   * @param request - CreateSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSessionResponse
   */
  async createSessionWithOptions(request: $_model.CreateSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSession",
      version: "2025-07-31",
      protocol: "HTTPS",
      pathname: `/api/v1/sessions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSessionResponse>(await this.callApi(params, req, runtime), new $_model.CreateSessionResponse({}));
  }

  /**
   * /api/v1/sessions
   * 
   * @param request - CreateSessionRequest
   * @returns CreateSessionResponse
   */
  async createSession(request: $_model.CreateSessionRequest): Promise<$_model.CreateSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSessionWithOptions(request, headers, runtime);
  }

  /**
   * DeleteChat
   * 
   * @param request - DeleteChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChatResponse
   */
  async deleteChatWithOptions(SessionId: string, ChatId: string, request: $_model.DeleteChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChatResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChat",
      version: "2025-07-31",
      protocol: "HTTPS",
      pathname: `/api/v1/sessions/${$dara.URL.percentEncode(SessionId)}/chats/${$dara.URL.percentEncode(ChatId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChatResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChatResponse({}));
  }

  /**
   * DeleteChat
   * 
   * @param request - DeleteChatRequest
   * @returns DeleteChatResponse
   */
  async deleteChat(SessionId: string, ChatId: string, request: $_model.DeleteChatRequest): Promise<$_model.DeleteChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteChatWithOptions(SessionId, ChatId, request, headers, runtime);
  }

  /**
   * DeleteSession
   * 
   * @param request - DeleteSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSessionResponse
   */
  async deleteSessionWithOptions(SessionId: string, request: $_model.DeleteSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSessionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSession",
      version: "2025-07-31",
      protocol: "HTTPS",
      pathname: `/api/v1/sessions/${$dara.URL.percentEncode(SessionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSessionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSessionResponse({}));
  }

  /**
   * DeleteSession
   * 
   * @param request - DeleteSessionRequest
   * @returns DeleteSessionResponse
   */
  async deleteSession(SessionId: string, request: $_model.DeleteSessionRequest): Promise<$_model.DeleteSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSessionWithOptions(SessionId, request, headers, runtime);
  }

  /**
   * GetChat
   * 
   * @param request - GetChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatResponse
   */
  async getChatWithOptions(ChatId: string, SessionId: string, request: $_model.GetChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChat",
      version: "2025-07-31",
      protocol: "HTTPS",
      pathname: `/api/v1/sessions/${$dara.URL.percentEncode(SessionId)}/chats/${$dara.URL.percentEncode(ChatId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatResponse>(await this.callApi(params, req, runtime), new $_model.GetChatResponse({}));
  }

  /**
   * GetChat
   * 
   * @param request - GetChatRequest
   * @returns GetChatResponse
   */
  async getChat(ChatId: string, SessionId: string, request: $_model.GetChatRequest): Promise<$_model.GetChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChatWithOptions(ChatId, SessionId, request, headers, runtime);
  }

  /**
   * GetSession
   * 
   * @param request - GetSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSessionResponse
   */
  async getSessionWithOptions(SessionId: string, request: $_model.GetSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSessionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSession",
      version: "2025-07-31",
      protocol: "HTTPS",
      pathname: `/api/v1/sessions/${$dara.URL.percentEncode(SessionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSessionResponse>(await this.callApi(params, req, runtime), new $_model.GetSessionResponse({}));
  }

  /**
   * GetSession
   * 
   * @param request - GetSessionRequest
   * @returns GetSessionResponse
   */
  async getSession(SessionId: string, request: $_model.GetSessionRequest): Promise<$_model.GetSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSessionWithOptions(SessionId, request, headers, runtime);
  }

  /**
   * ListChats
   * 
   * @param request - ListChatsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatsResponse
   */
  async listChatsWithOptions(SessionId: string, request: $_model.ListChatsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChats",
      version: "2025-07-31",
      protocol: "HTTPS",
      pathname: `/api/v1/sessions/${$dara.URL.percentEncode(SessionId)}/chats`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatsResponse>(await this.callApi(params, req, runtime), new $_model.ListChatsResponse({}));
  }

  /**
   * ListChats
   * 
   * @param request - ListChatsRequest
   * @returns ListChatsResponse
   */
  async listChats(SessionId: string, request: $_model.ListChatsRequest): Promise<$_model.ListChatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChatsWithOptions(SessionId, request, headers, runtime);
  }

  /**
   * GetChat
   * 
   * @param request - ListSessionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionsResponse
   */
  async listSessionsWithOptions(request: $_model.ListSessionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSessionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSessions",
      version: "2025-07-31",
      protocol: "HTTPS",
      pathname: `/api/v1/sessions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSessionsResponse>(await this.callApi(params, req, runtime), new $_model.ListSessionsResponse({}));
  }

  /**
   * GetChat
   * 
   * @param request - ListSessionsRequest
   * @returns ListSessionsResponse
   */
  async listSessions(request: $_model.ListSessionsRequest): Promise<$_model.ListSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSessionsWithOptions(request, headers, runtime);
  }

  /**
   * /api/v1/sessions
   * 
   * @param request - SearchInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchInfoResponse
   */
  async searchInfoWithOptions(request: $_model.SearchInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.knowledgeBaseFilters)) {
      body["KnowledgeBaseFilters"] = request.knowledgeBaseFilters;
    }

    if (!$dara.isNull(request.webFilters)) {
      body["WebFilters"] = request.webFilters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchInfo",
      version: "2025-07-31",
      protocol: "HTTPS",
      pathname: `/api/v1/searches`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchInfoResponse>(await this.callApi(params, req, runtime), new $_model.SearchInfoResponse({}));
  }

  /**
   * /api/v1/sessions
   * 
   * @param request - SearchInfoRequest
   * @returns SearchInfoResponse
   */
  async searchInfo(request: $_model.SearchInfoRequest): Promise<$_model.SearchInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchInfoWithOptions(request, headers, runtime);
  }

}
