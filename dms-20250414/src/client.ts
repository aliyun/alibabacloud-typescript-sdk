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
    this._endpoint = this.getEndpoint("dms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取airflow登录凭证
   * 
   * @param request - CreateAirflowLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAirflowLoginTokenResponse
   */
  async createAirflowLoginTokenWithOptions(request: $_model.CreateAirflowLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAirflowLoginTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.airflowId)) {
      query["AirflowId"] = request.airflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAirflowLoginToken",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAirflowLoginTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateAirflowLoginTokenResponse({}));
  }

  /**
   * 获取airflow登录凭证
   * 
   * @param request - CreateAirflowLoginTokenRequest
   * @returns CreateAirflowLoginTokenResponse
   */
  async createAirflowLoginToken(request: $_model.CreateAirflowLoginTokenRequest): Promise<$_model.CreateAirflowLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAirflowLoginTokenWithOptions(request, runtime);
  }

}
