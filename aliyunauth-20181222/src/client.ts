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
    this._endpoint = this.getEndpoint("aliyunauth", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AuthenticateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthenticateResponse
   */
  async authenticateWithOptions(request: $_model.AuthenticateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthenticateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Authenticate",
      version: "2018-12-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthenticateResponse>(await this.callApi(params, req, runtime), new $_model.AuthenticateResponse({}));
  }

  /**
   * @param request - AuthenticateRequest
   * @returns AuthenticateResponse
   */
  async authenticate(request: $_model.AuthenticateRequest): Promise<$_model.AuthenticateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authenticateWithOptions(request, runtime);
  }

  /**
   * @param request - GetDetailByOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDetailByOrderResponse
   */
  async getDetailByOrderWithOptions(request: $_model.GetDetailByOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDetailByOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptor)) {
      query["Acceptor"] = request.acceptor;
    }

    if (!$dara.isNull(request.bizNo)) {
      query["BizNo"] = request.bizNo;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.checkAuthItems)) {
      query["CheckAuthItems"] = request.checkAuthItems;
    }

    if (!$dara.isNull(request.empId)) {
      query["EmpId"] = request.empId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.optSource)) {
      query["OptSource"] = request.optSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDetailByOrder",
      version: "2018-12-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDetailByOrderResponse>(await this.callApi(params, req, runtime), new $_model.GetDetailByOrderResponse({}));
  }

  /**
   * @param request - GetDetailByOrderRequest
   * @returns GetDetailByOrderResponse
   */
  async getDetailByOrder(request: $_model.GetDetailByOrderRequest): Promise<$_model.GetDetailByOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDetailByOrderWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAuthResponse
   */
  async queryAuthWithOptions(request: $_model.QueryAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAuthResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAuth",
      version: "2018-12-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAuthResponse>(await this.callApi(params, req, runtime), new $_model.QueryAuthResponse({}));
  }

  /**
   * @param request - QueryAuthRequest
   * @returns QueryAuthResponse
   */
  async queryAuth(request: $_model.QueryAuthRequest): Promise<$_model.QueryAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAuthWithOptions(request, runtime);
  }

  /**
   * @param request - QueryInEffectQuthOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInEffectQuthOrderResponse
   */
  async queryInEffectQuthOrderWithOptions(request: $_model.QueryInEffectQuthOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInEffectQuthOrderResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInEffectQuthOrder",
      version: "2018-12-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInEffectQuthOrderResponse>(await this.callApi(params, req, runtime), new $_model.QueryInEffectQuthOrderResponse({}));
  }

  /**
   * @param request - QueryInEffectQuthOrderRequest
   * @returns QueryInEffectQuthOrderResponse
   */
  async queryInEffectQuthOrder(request: $_model.QueryInEffectQuthOrderRequest): Promise<$_model.QueryInEffectQuthOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInEffectQuthOrderWithOptions(request, runtime);
  }

}
