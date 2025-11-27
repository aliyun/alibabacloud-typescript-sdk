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
