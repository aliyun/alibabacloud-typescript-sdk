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
    this._endpoint = this.getEndpoint("openagent", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Cancels a run.
   * 
   * @remarks
   * Cancels a specified run and returns the run status after the cancellation.
   * 
   * @param request - CancelRunRequest
   * @param headers - CancelRunHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRunResponse
   */
  async cancelRunWithOptions(sessionId: string, runId: string, request: $_model.CancelRunRequest, headers: $_model.CancelRunHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CancelRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reason)) {
      body["reason"] = request.reason;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xOpenAgentIdempotencyKey)) {
      realHeaders["X-OpenAgent-Idempotency-Key"] = String(headers.xOpenAgentIdempotencyKey);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRun",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/agent/sessions/${$dara.URL.percentEncode(sessionId)}/runs/${$dara.URL.percentEncode(runId)}/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelRunResponse>(await this.callApi(params, req, runtime), new $_model.CancelRunResponse({}));
  }

  /**
   * Cancels a run.
   * 
   * @remarks
   * Cancels a specified run and returns the run status after the cancellation.
   * 
   * @param request - CancelRunRequest
   * @returns CancelRunResponse
   */
  async cancelRun(sessionId: string, runId: string, request: $_model.CancelRunRequest): Promise<$_model.CancelRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CancelRunHeaders({ });
    return await this.cancelRunWithOptions(sessionId, runId, request, headers, runtime);
  }

  /**
   * Creates a session.
   * 
   * @remarks
   * Creates a session and returns the session information. Use the returned sessionId for subsequent operations such as sending messages, querying records, and updating the session.
   * 
   * @param request - CreateSessionRequest
   * @param headers - CreateSessionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSessionResponse
   */
  async createSessionWithOptions(request: $_model.CreateSessionRequest, headers: $_model.CreateSessionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xOpenAgentIdempotencyKey)) {
      realHeaders["X-OpenAgent-Idempotency-Key"] = String(headers.xOpenAgentIdempotencyKey);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSession",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/agent/sessions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSessionResponse>(await this.callApi(params, req, runtime), new $_model.CreateSessionResponse({}));
  }

  /**
   * Creates a session.
   * 
   * @remarks
   * Creates a session and returns the session information. Use the returned sessionId for subsequent operations such as sending messages, querying records, and updating the session.
   * 
   * @param request - CreateSessionRequest
   * @returns CreateSessionResponse
   */
  async createSession(request: $_model.CreateSessionRequest): Promise<$_model.CreateSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateSessionHeaders({ });
    return await this.createSessionWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a session.
   * 
   * @remarks
   * Deletes a specified session. Returns 404 Session.NotFound if the session does not exist or has been deleted.
   * 
   * @param request - DeleteSessionRequest
   * @param headers - DeleteSessionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSessionResponse
   */
  async deleteSessionWithOptions(sessionId: string, request: $_model.DeleteSessionRequest, headers: $_model.DeleteSessionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSessionResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xOpenAgentIdempotencyKey)) {
      realHeaders["X-OpenAgent-Idempotency-Key"] = String(headers.xOpenAgentIdempotencyKey);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSession",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/agent/sessions/${$dara.URL.percentEncode(sessionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSessionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSessionResponse({}));
  }

  /**
   * Deletes a session.
   * 
   * @remarks
   * Deletes a specified session. Returns 404 Session.NotFound if the session does not exist or has been deleted.
   * 
   * @param request - DeleteSessionRequest
   * @returns DeleteSessionResponse
   */
  async deleteSession(sessionId: string, request: $_model.DeleteSessionRequest): Promise<$_model.DeleteSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteSessionHeaders({ });
    return await this.deleteSessionWithOptions(sessionId, request, headers, runtime);
  }

  /**
   * Queries the read-only mode.
   * 
   * @remarks
   * Queries the read-only mode switch for the current account. The read-only mode is enabled by default if it is not configured.
   * 
   * @param request - GetReadonlyModeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReadonlyModeResponse
   */
  async getReadonlyModeWithOptions(request: $_model.GetReadonlyModeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetReadonlyModeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReadonlyMode",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/user/configs/readonly`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReadonlyModeResponse>(await this.callApi(params, req, runtime), new $_model.GetReadonlyModeResponse({}));
  }

  /**
   * Queries the read-only mode.
   * 
   * @remarks
   * Queries the read-only mode switch for the current account. The read-only mode is enabled by default if it is not configured.
   * 
   * @param request - GetReadonlyModeRequest
   * @returns GetReadonlyModeResponse
   */
  async getReadonlyMode(request: $_model.GetReadonlyModeRequest): Promise<$_model.GetReadonlyModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getReadonlyModeWithOptions(request, headers, runtime);
  }

  /**
   * Queries a run.
   * 
   * @remarks
   * Queries the status and interrupt information of a specified run.
   * 
   * @param request - GetRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRunResponse
   */
  async getRunWithOptions(sessionId: string, runId: string, request: $_model.GetRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRunResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRun",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/agent/sessions/${$dara.URL.percentEncode(sessionId)}/runs/${$dara.URL.percentEncode(runId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRunResponse>(await this.callApi(params, req, runtime), new $_model.GetRunResponse({}));
  }

  /**
   * Queries a run.
   * 
   * @remarks
   * Queries the status and interrupt information of a specified run.
   * 
   * @param request - GetRunRequest
   * @returns GetRunResponse
   */
  async getRun(sessionId: string, runId: string, request: $_model.GetRunRequest): Promise<$_model.GetRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRunWithOptions(sessionId, runId, request, headers, runtime);
  }

  /**
   * Queries a session.
   * 
   * @remarks
   * Queries the title, status, pinning information, and the ID and status of the most recent run of a specified session.
   * 
   * @param request - GetSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSessionResponse
   */
  async getSessionWithOptions(sessionId: string, request: $_model.GetSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSessionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSession",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/agent/sessions/${$dara.URL.percentEncode(sessionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSessionResponse>(await this.callApi(params, req, runtime), new $_model.GetSessionResponse({}));
  }

  /**
   * Queries a session.
   * 
   * @remarks
   * Queries the title, status, pinning information, and the ID and status of the most recent run of a specified session.
   * 
   * @param request - GetSessionRequest
   * @returns GetSessionResponse
   */
  async getSession(sessionId: string, request: $_model.GetSessionRequest): Promise<$_model.GetSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSessionWithOptions(sessionId, request, headers, runtime);
  }

  /**
   * Lists messages.
   * 
   * @remarks
   * Performs a paging query on the message timeline of a specified session. Use the returned nextToken to retrieve the next page.
   * 
   * @param request - ListMessagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessagesResponse
   */
  async listMessagesWithOptions(sessionId: string, request: $_model.ListMessagesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMessagesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.runId)) {
      query["runId"] = request.runId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMessages",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/agent/sessions/${$dara.URL.percentEncode(sessionId)}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ListMessagesResponse({}));
  }

  /**
   * Lists messages.
   * 
   * @remarks
   * Performs a paging query on the message timeline of a specified session. Use the returned nextToken to retrieve the next page.
   * 
   * @param request - ListMessagesRequest
   * @returns ListMessagesResponse
   */
  async listMessages(sessionId: string, request: $_model.ListMessagesRequest): Promise<$_model.ListMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMessagesWithOptions(sessionId, request, headers, runtime);
  }

  /**
   * Lists sessions.
   * 
   * @remarks
   * Uses paging to query the list of sessions accessible to the current identity used to invoke. Use the returned nextToken to retrieve the next page.
   * 
   * @param request - ListSessionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionsResponse
   */
  async listSessionsWithOptions(request: $_model.ListSessionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSessionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSessions",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/agent/sessions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSessionsResponse>(await this.callApi(params, req, runtime), new $_model.ListSessionsResponse({}));
  }

  /**
   * Lists sessions.
   * 
   * @remarks
   * Uses paging to query the list of sessions accessible to the current identity used to invoke. Use the returned nextToken to retrieve the next page.
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
   * Sends a message.
   * 
   * @remarks
   * Sends a message to a specified session, submits interrupt handling results, or reconnects to a specified run. Returns the run progress and results through a Server-Sent Events (SSE) event stream.
   * 
   * @param request - SendMessageRequest
   * @param headers - SendMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageResponse
   */
  async *sendMessageWithSSE(sessionId: string, request: $_model.SendMessageRequest, headers: $_model.SendMessageHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.SendMessageResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.resume)) {
      body["resume"] = request.resume;
    }

    if (!$dara.isNull(request.runId)) {
      body["runId"] = request.runId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xOpenAgentIdempotencyKey)) {
      realHeaders["X-OpenAgent-Idempotency-Key"] = String(headers.xOpenAgentIdempotencyKey);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMessage",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/agent/sessions/${$dara.URL.percentEncode(sessionId)}/messages`,
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
        yield $dara.cast<$_model.SendMessageResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.SendMessageResponse({}));
      }

    }
  }

  /**
   * Sends a message.
   * 
   * @remarks
   * Sends a message to a specified session, submits interrupt handling results, or reconnects to a specified run. Returns the run progress and results through a Server-Sent Events (SSE) event stream.
   * 
   * @param request - SendMessageRequest
   * @param headers - SendMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageResponse
   */
  async sendMessageWithOptions(sessionId: string, request: $_model.SendMessageRequest, headers: $_model.SendMessageHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SendMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.resume)) {
      body["resume"] = request.resume;
    }

    if (!$dara.isNull(request.runId)) {
      body["runId"] = request.runId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xOpenAgentIdempotencyKey)) {
      realHeaders["X-OpenAgent-Idempotency-Key"] = String(headers.xOpenAgentIdempotencyKey);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMessage",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/agent/sessions/${$dara.URL.percentEncode(sessionId)}/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.SendMessageResponse>(await this.callApi(params, req, runtime), new $_model.SendMessageResponse({}));
  }

  /**
   * Sends a message.
   * 
   * @remarks
   * Sends a message to a specified session, submits interrupt handling results, or reconnects to a specified run. Returns the run progress and results through a Server-Sent Events (SSE) event stream.
   * 
   * @param request - SendMessageRequest
   * @returns SendMessageResponse
   */
  async sendMessage(sessionId: string, request: $_model.SendMessageRequest): Promise<$_model.SendMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SendMessageHeaders({ });
    return await this.sendMessageWithOptions(sessionId, request, headers, runtime);
  }

  /**
   * Updates the read-only mode.
   * 
   * @remarks
   * Enables or disables the read-only mode for the current account.
   * 
   * @param request - UpdateReadonlyModeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateReadonlyModeResponse
   */
  async updateReadonlyModeWithOptions(request: $_model.UpdateReadonlyModeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateReadonlyModeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.value)) {
      body["value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateReadonlyMode",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/user/configs/readonly`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateReadonlyModeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateReadonlyModeResponse({}));
  }

  /**
   * Updates the read-only mode.
   * 
   * @remarks
   * Enables or disables the read-only mode for the current account.
   * 
   * @param request - UpdateReadonlyModeRequest
   * @returns UpdateReadonlyModeResponse
   */
  async updateReadonlyMode(request: $_model.UpdateReadonlyModeRequest): Promise<$_model.UpdateReadonlyModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateReadonlyModeWithOptions(request, headers, runtime);
  }

  /**
   * Updates the title or pinned status of a session.
   * 
   * @remarks
   * Updates the title or pinned status of a specified session. Specify at least one of the title and pinned fields. Unspecified fields remain unchanged.
   * 
   * @param request - UpdateSessionRequest
   * @param headers - UpdateSessionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSessionResponse
   */
  async updateSessionWithOptions(sessionId: string, request: $_model.UpdateSessionRequest, headers: $_model.UpdateSessionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pinned)) {
      body["pinned"] = request.pinned;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xOpenAgentIdempotencyKey)) {
      realHeaders["X-OpenAgent-Idempotency-Key"] = String(headers.xOpenAgentIdempotencyKey);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSession",
      version: "2026-08-01",
      protocol: "HTTPS",
      pathname: `/openapi/v1/agent/sessions/${$dara.URL.percentEncode(sessionId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSessionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSessionResponse({}));
  }

  /**
   * Updates the title or pinned status of a session.
   * 
   * @remarks
   * Updates the title or pinned status of a specified session. Specify at least one of the title and pinned fields. Unspecified fields remain unchanged.
   * 
   * @param request - UpdateSessionRequest
   * @returns UpdateSessionResponse
   */
  async updateSession(sessionId: string, request: $_model.UpdateSessionRequest): Promise<$_model.UpdateSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateSessionHeaders({ });
    return await this.updateSessionWithOptions(sessionId, request, headers, runtime);
  }

}
