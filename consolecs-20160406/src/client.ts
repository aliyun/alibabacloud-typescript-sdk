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
    this._endpoint = this.getEndpoint("consolecs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - GetOpenApiListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOpenApiListResponse
   */
  async getOpenApiListWithOptions(request: $_model.GetOpenApiListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOpenApiListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOpenApiList",
      version: "2016-04-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOpenApiListResponse>(await this.callApi(params, req, runtime), new $_model.GetOpenApiListResponse({}));
  }

  /**
   * @param request - GetOpenApiListRequest
   * @returns GetOpenApiListResponse
   */
  async getOpenApiList(request: $_model.GetOpenApiListRequest): Promise<$_model.GetOpenApiListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOpenApiListWithOptions(request, runtime);
  }

  /**
   * @param request - ListConsoleProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsoleProductResponse
   */
  async listConsoleProductWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListConsoleProductResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListConsoleProduct",
      version: "2016-04-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsoleProductResponse>(await this.callApi(params, req, runtime), new $_model.ListConsoleProductResponse({}));
  }

  /**
   * @returns ListConsoleProductResponse
   */
  async listConsoleProduct(): Promise<$_model.ListConsoleProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConsoleProductWithOptions(runtime);
  }

}
