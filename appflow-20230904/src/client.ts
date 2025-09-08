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
    this._endpoint = this.getEndpoint("appflow", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Generate Login Session Token
   * 
   * @param request - GenerateUserSessionTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateUserSessionTokenResponse
   */
  async generateUserSessionTokenWithOptions(request: $_model.GenerateUserSessionTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateUserSessionTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chatbotId)) {
      query["ChatbotId"] = request.chatbotId;
    }

    if (!$dara.isNull(request.expireSecond)) {
      query["ExpireSecond"] = request.expireSecond;
    }

    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.integrateId)) {
      query["IntegrateId"] = request.integrateId;
    }

    if (!$dara.isNull(request.userAvatar)) {
      query["UserAvatar"] = request.userAvatar;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateUserSessionToken",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateUserSessionTokenResponse>(await this.callApi(params, req, runtime), new $_model.GenerateUserSessionTokenResponse({}));
  }

  /**
   * Generate Login Session Token
   * 
   * @param request - GenerateUserSessionTokenRequest
   * @returns GenerateUserSessionTokenResponse
   */
  async generateUserSessionToken(request: $_model.GenerateUserSessionTokenRequest): Promise<$_model.GenerateUserSessionTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateUserSessionTokenWithOptions(request, runtime);
  }

}
