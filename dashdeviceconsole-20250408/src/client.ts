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
    this._endpoint = this.getEndpoint("dashdeviceconsole", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * delete prompt
   * 
   * @param request - DeletePromptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePromptResponse
   */
  async deletePromptWithOptions(request: $_model.DeletePromptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePromptResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrompt",
      version: "2025-04-08",
      protocol: "HTTPS",
      pathname: `/prompt/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePromptResponse>(await this.callApi(params, req, runtime), new $_model.DeletePromptResponse({}));
  }

  /**
   * delete prompt
   * 
   * @param request - DeletePromptRequest
   * @returns DeletePromptResponse
   */
  async deletePrompt(request: $_model.DeletePromptRequest): Promise<$_model.DeletePromptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePromptWithOptions(request, headers, runtime);
  }

  /**
   * get prompt
   * 
   * @param request - GetPromptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPromptResponse
   */
  async getPromptWithOptions(request: $_model.GetPromptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPromptResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrompt",
      version: "2025-04-08",
      protocol: "HTTPS",
      pathname: `/prompt/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPromptResponse>(await this.callApi(params, req, runtime), new $_model.GetPromptResponse({}));
  }

  /**
   * get prompt
   * 
   * @param request - GetPromptRequest
   * @returns GetPromptResponse
   */
  async getPrompt(request: $_model.GetPromptRequest): Promise<$_model.GetPromptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPromptWithOptions(request, headers, runtime);
  }

  /**
   * push prompt
   * 
   * @param request - PushPromptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushPromptResponse
   */
  async pushPromptWithOptions(request: $_model.PushPromptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PushPromptResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.promptContent)) {
      body["promptContent"] = request.promptContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushPrompt",
      version: "2025-04-08",
      protocol: "HTTPS",
      pathname: `/prompt/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushPromptResponse>(await this.callApi(params, req, runtime), new $_model.PushPromptResponse({}));
  }

  /**
   * push prompt
   * 
   * @param request - PushPromptRequest
   * @returns PushPromptResponse
   */
  async pushPrompt(request: $_model.PushPromptRequest): Promise<$_model.PushPromptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushPromptWithOptions(request, headers, runtime);
  }

}
