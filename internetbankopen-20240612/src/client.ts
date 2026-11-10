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
    this._productId = "InternetBankOpen";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("internetbankopen", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 数据产品统一调用入口
   * 
   * @param request - InvokeDataProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeDataProductResponse
   */
  async invokeDataProductWithOptions(request: $_model.InvokeDataProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InvokeDataProductResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.productCode)) {
      query["productCode"] = request.productCode;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["serviceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeDataProduct",
      version: "2024-06-12",
      protocol: "HTTPS",
      pathname: `/pop/api/v1/rpc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvokeDataProductResponse>(await this.callApi(params, req, runtime), new $_model.InvokeDataProductResponse({}));
  }

  /**
   * 数据产品统一调用入口
   * 
   * @param request - InvokeDataProductRequest
   * @returns InvokeDataProductResponse
   */
  async invokeDataProduct(request: $_model.InvokeDataProductRequest): Promise<$_model.InvokeDataProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.invokeDataProductWithOptions(request, headers, runtime);
  }

}
