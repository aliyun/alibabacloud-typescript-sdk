// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "SearchAgent";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "";
  }


  /**
   * search agent acp 接口
   * 
   * @param request - ExecuteAcpCommandRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAcpCommandResponse
   */
  async executeAcpCommandWithOptions(workspaceName: string, request: $_model.ExecuteAcpCommandRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAcpCommandResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentName)) {
      body["agentName"] = request.agentName;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.method)) {
      body["method"] = request.method;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAcpCommand",
      version: "2026-05-15",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/agent/acp`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAcpCommandResponse>(await this.execute(params, req, runtime), new $_model.ExecuteAcpCommandResponse({}));
  }

  /**
   * search agent acp 接口
   * 
   * @param request - ExecuteAcpCommandRequest
   * @returns ExecuteAcpCommandResponse
   */
  async executeAcpCommand(workspaceName: string, request: $_model.ExecuteAcpCommandRequest): Promise<$_model.ExecuteAcpCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeAcpCommandWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * 生成 acp stream
   * 
   * @param request - GenerateAcpCompletionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateAcpCompletionResponse
   */
  async *generateAcpCompletionWithSSE(workspaceName: string, request: $_model.GenerateAcpCompletionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.GenerateAcpCompletionResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentName)) {
      body["agentName"] = request.agentName;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.method)) {
      body["method"] = request.method;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateAcpCompletion",
      version: "2026-05-15",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/agent/acp`,
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
        yield $dara.cast<$_model.GenerateAcpCompletionResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.GenerateAcpCompletionResponse({}));
      }

    }
  }

  /**
   * 生成 acp stream
   * 
   * @param request - GenerateAcpCompletionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateAcpCompletionResponse
   */
  async generateAcpCompletionWithOptions(workspaceName: string, request: $_model.GenerateAcpCompletionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateAcpCompletionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentName)) {
      body["agentName"] = request.agentName;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.method)) {
      body["method"] = request.method;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateAcpCompletion",
      version: "2026-05-15",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/agent/acp`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.GenerateAcpCompletionResponse>(await this.execute(params, req, runtime), new $_model.GenerateAcpCompletionResponse({}));
  }

  /**
   * 生成 acp stream
   * 
   * @param request - GenerateAcpCompletionRequest
   * @returns GenerateAcpCompletionResponse
   */
  async generateAcpCompletion(workspaceName: string, request: $_model.GenerateAcpCompletionRequest): Promise<$_model.GenerateAcpCompletionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateAcpCompletionWithOptions(workspaceName, request, headers, runtime);
  }

}
