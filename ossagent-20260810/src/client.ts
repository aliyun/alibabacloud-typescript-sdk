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
   * A2A接口
   * 
   * @param request - A2aRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns A2aResponse
   */
  async *a2aWithSSE(request: $_model.A2aRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.A2aResponse, any, unknown> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    let body : {[key: string ]: any} = { };
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "a2a",
      version: "2026-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "any",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = resp.event.data;
        yield $dara.cast<$_model.A2aResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.A2aResponse({}));
      }

    }
  }

  /**
   * A2A接口
   * 
   * @param request - A2aRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns A2aResponse
   */
  async a2aWithOptions(request: $_model.A2aRequest, runtime: $dara.RuntimeOptions): Promise<$_model.A2aResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    let body : {[key: string ]: any} = { };
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
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "a2a",
      version: "2026-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "any",
    });
    return $dara.cast<$_model.A2aResponse>(await this.callApi(params, req, runtime), new $_model.A2aResponse({}));
  }

  /**
   * A2A接口
   * 
   * @param request - A2aRequest
   * @returns A2aResponse
   */
  async a2a(request: $_model.A2aRequest): Promise<$_model.A2aResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.a2aWithOptions(request, runtime);
  }

  /**
   * 获取Agent_Card
   * 
   * @param request - AgentCardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgentCardResponse
   */
  async agent_cardWithOptions(request: $_model.AgentCardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AgentCardResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "agent_card",
      version: "2026-08-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "any",
    });
    return $dara.cast<$_model.AgentCardResponse>(await this.callApi(params, req, runtime), new $_model.AgentCardResponse({}));
  }

  /**
   * 获取Agent_Card
   * 
   * @param request - AgentCardRequest
   * @returns AgentCardResponse
   */
  async agent_card(request: $_model.AgentCardRequest): Promise<$_model.AgentCardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.agent_cardWithOptions(request, runtime);
  }

}
