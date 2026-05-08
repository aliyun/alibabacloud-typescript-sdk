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
    this._endpoint = this.getEndpoint("wuyingai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取用户进行对话所需的访问令牌（AccessToken），用于后续调用 Chat 接口进行身份验证。
   * 
   * @param request - GetAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessTokenResponse
   */
  async getAccessTokenWithOptions(request: $_model.GetAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.externalUserId)) {
      query["ExternalUserId"] = request.externalUserId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessToken",
      version: "2026-03-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessTokenResponse({}));
  }

  /**
   * 获取用户进行对话所需的访问令牌（AccessToken），用于后续调用 Chat 接口进行身份验证。
   * 
   * @param request - GetAccessTokenRequest
   * @returns GetAccessTokenResponse
   */
  async getAccessToken(request: $_model.GetAccessTokenRequest): Promise<$_model.GetAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessTokenWithOptions(request, runtime);
  }

}
