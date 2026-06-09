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
    this._endpoint = this.getEndpoint("edututor", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * AnswerSSE
   * 
   * @param request - AnswerSSERequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnswerSSEResponse
   */
  async *answerSSEWithSSE(request: $_model.AnswerSSERequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.AnswerSSEResponse, any, unknown> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnswerSSE",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/service/answerSSE`,
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
        yield $dara.cast<$_model.AnswerSSEResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.AnswerSSEResponse({}));
      }

    }
  }

  /**
   * AnswerSSE
   * 
   * @param request - AnswerSSERequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnswerSSEResponse
   */
  async answerSSEWithOptions(request: $_model.AnswerSSERequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AnswerSSEResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnswerSSE",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/service/answerSSE`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnswerSSEResponse>(await this.callApi(params, req, runtime), new $_model.AnswerSSEResponse({}));
  }

  /**
   * AnswerSSE
   * 
   * @param request - AnswerSSERequest
   * @returns AnswerSSEResponse
   */
  async answerSSE(request: $_model.AnswerSSERequest): Promise<$_model.AnswerSSEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.answerSSEWithOptions(request, headers, runtime);
  }

  /**
   * CutQuestions
   * 
   * @param request - CutQuestionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CutQuestionsResponse
   */
  async cutQuestionsWithOptions(request: $_model.CutQuestionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CutQuestionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.image)) {
      body["image"] = request.image;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CutQuestions",
      version: "2025-07-07",
      protocol: "HTTPS",
      pathname: `/service/cutApi`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CutQuestionsResponse>(await this.callApi(params, req, runtime), new $_model.CutQuestionsResponse({}));
  }

  /**
   * CutQuestions
   * 
   * @param request - CutQuestionsRequest
   * @returns CutQuestionsResponse
   */
  async cutQuestions(request: $_model.CutQuestionsRequest): Promise<$_model.CutQuestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cutQuestionsWithOptions(request, headers, runtime);
  }

}
