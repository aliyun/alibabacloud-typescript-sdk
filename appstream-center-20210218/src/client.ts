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
    this._endpoint = this.getEndpoint("appstream-center", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 登录token主动失效
   * 
   * @param request - ExpireLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExpireLoginTokenResponse
   */
  async expireLoginTokenWithOptions(request: $_model.ExpireLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExpireLoginTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      body["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExpireLoginToken",
      version: "2021-02-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExpireLoginTokenResponse>(await this.callApi(params, req, runtime), new $_model.ExpireLoginTokenResponse({}));
  }

  /**
   * 登录token主动失效
   * 
   * @param request - ExpireLoginTokenRequest
   * @returns ExpireLoginTokenResponse
   */
  async expireLoginToken(request: $_model.ExpireLoginTokenRequest): Promise<$_model.ExpireLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.expireLoginTokenWithOptions(request, runtime);
  }

  /**
   * 获取授权码
   * 
   * @param request - GetAuthCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthCodeResponse
   */
  async getAuthCodeWithOptions(request: $_model.GetAuthCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuthCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoCreateUser)) {
      body["AutoCreateUser"] = request.autoCreateUser;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.externalUserId)) {
      body["ExternalUserId"] = request.externalUserId;
    }

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuthCode",
      version: "2021-02-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuthCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetAuthCodeResponse({}));
  }

  /**
   * 获取授权码
   * 
   * @param request - GetAuthCodeRequest
   * @returns GetAuthCodeResponse
   */
  async getAuthCode(request: $_model.GetAuthCodeRequest): Promise<$_model.GetAuthCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuthCodeWithOptions(request, runtime);
  }

  /**
   * 获取stsToken
   * 
   * @param request - GetStsTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStsTokenResponse
   */
  async getStsTokenWithOptions(request: $_model.GetStsTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStsTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.expiration)) {
      body["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.externalId)) {
      body["ExternalId"] = request.externalId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStsToken",
      version: "2021-02-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStsTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetStsTokenResponse({}));
  }

  /**
   * 获取stsToken
   * 
   * @param request - GetStsTokenRequest
   * @returns GetStsTokenResponse
   */
  async getStsToken(request: $_model.GetStsTokenRequest): Promise<$_model.GetStsTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStsTokenWithOptions(request, runtime);
  }

}
