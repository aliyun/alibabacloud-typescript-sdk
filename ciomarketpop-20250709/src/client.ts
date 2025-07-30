// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ciomarketpop", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 全员营销
   * 
   * @param request - GetEveryOneSellsFormListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEveryOneSellsFormListResponse
   */
  async getEveryOneSellsFormListWithOptions(request: $_model.GetEveryOneSellsFormListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEveryOneSellsFormListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEveryOneSellsFormList",
      version: "2025-07-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "array",
    });
    return $dara.cast<$_model.GetEveryOneSellsFormListResponse>(await this.callApi(params, req, runtime), new $_model.GetEveryOneSellsFormListResponse({}));
  }

  /**
   * 全员营销
   * 
   * @param request - GetEveryOneSellsFormListRequest
   * @returns GetEveryOneSellsFormListResponse
   */
  async getEveryOneSellsFormList(request: $_model.GetEveryOneSellsFormListRequest): Promise<$_model.GetEveryOneSellsFormListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEveryOneSellsFormListWithOptions(request, runtime);
  }

}
