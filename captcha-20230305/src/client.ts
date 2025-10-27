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
    this._endpoint = this.getEndpoint("captcha", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 验证码验证
   * 
   * @param request - VerifyCaptchaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyCaptchaResponse
   */
  async verifyCaptchaWithOptions(request: $_model.VerifyCaptchaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyCaptchaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.captchaVerifyParam)) {
      query["CaptchaVerifyParam"] = request.captchaVerifyParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyCaptcha",
      version: "2023-03-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyCaptchaResponse>(await this.callApi(params, req, runtime), new $_model.VerifyCaptchaResponse({}));
  }

  /**
   * 验证码验证
   * 
   * @param request - VerifyCaptchaRequest
   * @returns VerifyCaptchaResponse
   */
  async verifyCaptcha(request: $_model.VerifyCaptchaRequest): Promise<$_model.VerifyCaptchaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyCaptchaWithOptions(request, runtime);
  }

  /**
   * 验证码验证
   * 
   * @param request - VerifyIntelligentCaptchaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyIntelligentCaptchaResponse
   */
  async verifyIntelligentCaptchaWithOptions(request: $_model.VerifyIntelligentCaptchaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyIntelligentCaptchaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.captchaVerifyParam)) {
      body["CaptchaVerifyParam"] = request.captchaVerifyParam;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyIntelligentCaptcha",
      version: "2023-03-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyIntelligentCaptchaResponse>(await this.callApi(params, req, runtime), new $_model.VerifyIntelligentCaptchaResponse({}));
  }

  /**
   * 验证码验证
   * 
   * @param request - VerifyIntelligentCaptchaRequest
   * @returns VerifyIntelligentCaptchaResponse
   */
  async verifyIntelligentCaptcha(request: $_model.VerifyIntelligentCaptchaRequest): Promise<$_model.VerifyIntelligentCaptchaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyIntelligentCaptchaWithOptions(request, runtime);
  }

}
