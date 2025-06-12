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
    this._endpoint = this.getEndpoint("bailianmodelonchip", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 设备注册
   * 
   * @param request - DeviceRegisterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeviceRegisterResponse
   */
  async deviceRegisterWithOptions(request: $_model.DeviceRegisterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeviceRegisterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.nonce)) {
      body["nonce"] = request.nonce;
    }

    if (!$dara.isNull(request.requestTime)) {
      body["requestTime"] = request.requestTime;
    }

    if (!$dara.isNull(request.signature)) {
      body["signature"] = request.signature;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeviceRegister",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/device/v1/register`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeviceRegisterResponse>(await this.callApi(params, req, runtime), new $_model.DeviceRegisterResponse({}));
  }

  /**
   * 设备注册
   * 
   * @param request - DeviceRegisterRequest
   * @returns DeviceRegisterResponse
   */
  async deviceRegister(request: $_model.DeviceRegisterRequest): Promise<$_model.DeviceRegisterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deviceRegisterWithOptions(request, headers, runtime);
  }

  /**
   * 获取网关校验Token
   * 
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: $_model.GetTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.deviceName)) {
      body["deviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.nonce)) {
      body["nonce"] = request.nonce;
    }

    if (!$dara.isNull(request.requestTime)) {
      body["requestTime"] = request.requestTime;
    }

    if (!$dara.isNull(request.signature)) {
      body["signature"] = request.signature;
    }

    if (!$dara.isNull(request.tokenKey)) {
      body["tokenKey"] = request.tokenKey;
    }

    if (!$dara.isNull(request.tokenType)) {
      body["tokenType"] = request.tokenType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2024-08-16",
      protocol: "HTTPS",
      pathname: `/open/api/auth/v1/token/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenResponse({}));
  }

  /**
   * 获取网关校验Token
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: $_model.GetTokenRequest): Promise<$_model.GetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

}
