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
    this._endpoint = this.getEndpoint("aisearchengine", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * AI搜索
   * 
   * @param request - EngineSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EngineSearchResponse
   */
  async engineSearchWithOptions(request: $_model.EngineSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EngineSearchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.grey)) {
      body["grey"] = request.grey;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.recall)) {
      body["recall"] = request.recall;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.strategyId)) {
      body["strategyId"] = request.strategyId;
    }

    if (!$dara.isNull(request.user)) {
      body["user"] = request.user;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EngineSearch",
      version: "2026-04-17",
      protocol: "HTTPS",
      pathname: `/api/v1/platform/app/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EngineSearchResponse>(await this.callApi(params, req, runtime), new $_model.EngineSearchResponse({}));
  }

  /**
   * AI搜索
   * 
   * @param request - EngineSearchRequest
   * @returns EngineSearchResponse
   */
  async engineSearch(request: $_model.EngineSearchRequest): Promise<$_model.EngineSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.engineSearchWithOptions(request, headers, runtime);
  }

  /**
   * AI问答对话
   * 
   * @param request - QaChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QaChatResponse
   */
  async *qaChatWithSSE(request: $_model.QaChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.QaChatResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.message)) {
      body["message"] = request.message;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QaChat",
      version: "2026-04-17",
      protocol: "HTTPS",
      pathname: `/api/v1/platform/app/chat`,
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
        yield $dara.cast<$_model.QaChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.QaChatResponse({}));
      }

    }
  }

  /**
   * AI问答对话
   * 
   * @param request - QaChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QaChatResponse
   */
  async qaChatWithOptions(request: $_model.QaChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QaChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.message)) {
      body["message"] = request.message;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QaChat",
      version: "2026-04-17",
      protocol: "HTTPS",
      pathname: `/api/v1/platform/app/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QaChatResponse>(await this.callApi(params, req, runtime), new $_model.QaChatResponse({}));
  }

  /**
   * AI问答对话
   * 
   * @param request - QaChatRequest
   * @returns QaChatResponse
   */
  async qaChat(request: $_model.QaChatRequest): Promise<$_model.QaChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.qaChatWithOptions(request, headers, runtime);
  }

}
