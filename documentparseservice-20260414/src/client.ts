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
    this._endpoint = this.getEndpoint("documentparseservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 文档解析测试接口
   * 
   * @param request - DocumentParseOnlineApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocumentParseOnlineApiResponse
   */
  async documentParseOnlineApiWithOptions(request: $_model.DocumentParseOnlineApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DocumentParseOnlineApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocumentParseOnlineApi",
      version: "2026-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocumentParseOnlineApiResponse>(await this.callApi(params, req, runtime), new $_model.DocumentParseOnlineApiResponse({}));
  }

  /**
   * 文档解析测试接口
   * 
   * @param request - DocumentParseOnlineApiRequest
   * @returns DocumentParseOnlineApiResponse
   */
  async documentParseOnlineApi(request: $_model.DocumentParseOnlineApiRequest): Promise<$_model.DocumentParseOnlineApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.documentParseOnlineApiWithOptions(request, runtime);
  }

  /**
   * 文档解析测试接口
   * 
   * @param request - DocumentParseTestApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocumentParseTestApiResponse
   */
  async documentParseTestApiWithOptions(request: $_model.DocumentParseTestApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DocumentParseTestApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocumentParseTestApi",
      version: "2026-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocumentParseTestApiResponse>(await this.callApi(params, req, runtime), new $_model.DocumentParseTestApiResponse({}));
  }

  /**
   * 文档解析测试接口
   * 
   * @param request - DocumentParseTestApiRequest
   * @returns DocumentParseTestApiResponse
   */
  async documentParseTestApi(request: $_model.DocumentParseTestApiRequest): Promise<$_model.DocumentParseTestApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.documentParseTestApiWithOptions(request, runtime);
  }

}
