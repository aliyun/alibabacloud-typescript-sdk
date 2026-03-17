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
    this._endpoint = this.getEndpoint("bailiancontrol", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 查询 apiKey
   * 
   * @param request - GetApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApiKeyResponse
   */
  async getApiKeyWithOptions(request: $_model.GetApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetApiKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApiKey",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/bailianControl/apiKey/getApiKey`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetApiKeyResponse({}));
  }

  /**
   * 查询 apiKey
   * 
   * @param request - GetApiKeyRequest
   * @returns GetApiKeyResponse
   */
  async getApiKey(request: $_model.GetApiKeyRequest): Promise<$_model.GetApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApiKeyWithOptions(request, headers, runtime);
  }

  /**
   * 获取ApiKey列表
   * 
   * @param request - ListApiKeysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiKeysResponse
   */
  async listApiKeysWithOptions(request: $_model.ListApiKeysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiKeysResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skip)) {
      query["skip"] = request.skip;
    }

    if (!$dara.isNull(request.uid)) {
      query["uid"] = request.uid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiKeys",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/bailianControl/apiKeys`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListApiKeysResponse({}));
  }

  /**
   * 获取ApiKey列表
   * 
   * @param request - ListApiKeysRequest
   * @returns ListApiKeysResponse
   */
  async listApiKeys(request: $_model.ListApiKeysRequest): Promise<$_model.ListApiKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApiKeysWithOptions(request, headers, runtime);
  }

}
