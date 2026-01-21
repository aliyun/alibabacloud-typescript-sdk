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
    this._endpoint = this.getEndpoint("bsn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - GetBsnByResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBsnByResourceResponse
   */
  async getBsnByResourceWithOptions(request: $_model.GetBsnByResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBsnByResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliuid)) {
      query["aliuid"] = request.aliuid;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBsnByResource",
      version: "2015-05-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBsnByResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetBsnByResourceResponse({}));
  }

  /**
   * @param request - GetBsnByResourceRequest
   * @returns GetBsnByResourceResponse
   */
  async getBsnByResource(request: $_model.GetBsnByResourceRequest): Promise<$_model.GetBsnByResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBsnByResourceWithOptions(request, runtime);
  }

  /**
   * 授权服务码，供虚商使用
   * 
   * @param request - GrantBsnCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantBsnCodeResponse
   */
  async grantBsnCodeWithOptions(request: $_model.GrantBsnCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantBsnCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.grantToAliuid)) {
      query["GrantToAliuid"] = request.grantToAliuid;
    }

    if (!$dara.isNull(request.notes)) {
      query["Notes"] = request.notes;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantBsnCode",
      version: "2015-05-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantBsnCodeResponse>(await this.callApi(params, req, runtime), new $_model.GrantBsnCodeResponse({}));
  }

  /**
   * 授权服务码，供虚商使用
   * 
   * @param request - GrantBsnCodeRequest
   * @returns GrantBsnCodeResponse
   */
  async grantBsnCode(request: $_model.GrantBsnCodeRequest): Promise<$_model.GrantBsnCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantBsnCodeWithOptions(request, runtime);
  }

  /**
   * @param request - ProductBindBsnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProductBindBsnResponse
   */
  async productBindBsnWithOptions(request: $_model.ProductBindBsnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProductBindBsnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliuid)) {
      query["aliuid"] = request.aliuid;
    }

    if (!$dara.isNull(request.num)) {
      query["num"] = request.num;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProductBindBsn",
      version: "2015-05-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProductBindBsnResponse>(await this.callApi(params, req, runtime), new $_model.ProductBindBsnResponse({}));
  }

  /**
   * @param request - ProductBindBsnRequest
   * @returns ProductBindBsnResponse
   */
  async productBindBsn(request: $_model.ProductBindBsnRequest): Promise<$_model.ProductBindBsnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.productBindBsnWithOptions(request, runtime);
  }

}
