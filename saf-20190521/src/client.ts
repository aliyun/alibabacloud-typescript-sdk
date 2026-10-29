// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "saf.cn-shanghai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("saf", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Detects risks. This API operation supports public service invocation and allows you to invoke custom events.
   * 
   * @param request - ExecuteRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteRequestResponse
   */
  async executeRequestWithOptions(request: $_model.ExecuteRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteRequest",
      version: "2019-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteRequestResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteRequestResponse({}));
  }

  /**
   * Detects risks. This API operation supports public service invocation and allows you to invoke custom events.
   * 
   * @param request - ExecuteRequestRequest
   * @returns ExecuteRequestResponse
   */
  async executeRequest(request: $_model.ExecuteRequestRequest): Promise<$_model.ExecuteRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeRequestWithOptions(request, runtime);
  }

  /**
   * Detects risks. This operation supports only custom event calls and is available only in the Malaysia region.
   * 
   * @param request - ExecuteRequestMLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteRequestMLResponse
   */
  async executeRequestMLWithOptions(request: $_model.ExecuteRequestMLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteRequestMLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteRequestML",
      version: "2019-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteRequestMLResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteRequestMLResponse({}));
  }

  /**
   * Detects risks. This operation supports only custom event calls and is available only in the Malaysia region.
   * 
   * @param request - ExecuteRequestMLRequest
   * @returns ExecuteRequestMLResponse
   */
  async executeRequestML(request: $_model.ExecuteRequestMLRequest): Promise<$_model.ExecuteRequestMLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeRequestMLWithOptions(request, runtime);
  }

  /**
   * Detects risks. This API allows you to invoke public services and custom events.
   * 
   * @param request - ExecuteRequestSGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteRequestSGResponse
   */
  async executeRequestSGWithOptions(request: $_model.ExecuteRequestSGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteRequestSGResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteRequestSG",
      version: "2019-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteRequestSGResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteRequestSGResponse({}));
  }

  /**
   * Detects risks. This API allows you to invoke public services and custom events.
   * 
   * @param request - ExecuteRequestSGRequest
   * @returns ExecuteRequestSGResponse
   */
  async executeRequestSG(request: $_model.ExecuteRequestSGRequest): Promise<$_model.ExecuteRequestSGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeRequestSGWithOptions(request, runtime);
  }

  /**
   * Detects risks. This operation supports only custom event calls.
   * 
   * @param request - RequestDecisionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RequestDecisionResponse
   */
  async requestDecisionWithOptions(request: $_model.RequestDecisionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RequestDecisionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventCode)) {
      query["EventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RequestDecision",
      version: "2019-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RequestDecisionResponse>(await this.callApi(params, req, runtime), new $_model.RequestDecisionResponse({}));
  }

  /**
   * Detects risks. This operation supports only custom event calls.
   * 
   * @param request - RequestDecisionRequest
   * @returns RequestDecisionResponse
   */
  async requestDecision(request: $_model.RequestDecisionRequest): Promise<$_model.RequestDecisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.requestDecisionWithOptions(request, runtime);
  }

}
