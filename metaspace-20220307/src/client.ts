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
    this._endpoint = this.getEndpoint("metaspace", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 用协同码发起协同
   * 
   * @param request - ApplyCoordinationWithCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyCoordinationWithCodeResponse
   */
  async applyCoordinationWithCodeWithOptions(request: $_model.ApplyCoordinationWithCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyCoordinationWithCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coordinationCode)) {
      body["CoordinationCode"] = request.coordinationCode;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyCoordinationWithCode",
      version: "2022-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyCoordinationWithCodeResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ApplyCoordinationWithCodeResponse({}));
  }

  /**
   * 用协同码发起协同
   * 
   * @param request - ApplyCoordinationWithCodeRequest
   * @returns ApplyCoordinationWithCodeResponse
   */
  async applyCoordinationWithCode(request: $_model.ApplyCoordinationWithCodeRequest): Promise<$_model.ApplyCoordinationWithCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyCoordinationWithCodeWithOptions(request, runtime);
  }

  /**
   * Owner主动结束本次协同，同步失效协同码
   * 
   * @param request - EndAllCoordinationByOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EndAllCoordinationByOwnerResponse
   */
  async endAllCoordinationByOwnerWithOptions(request: $_model.EndAllCoordinationByOwnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EndAllCoordinationByOwnerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      body["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EndAllCoordinationByOwner",
      version: "2022-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EndAllCoordinationByOwnerResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.EndAllCoordinationByOwnerResponse({}));
  }

  /**
   * Owner主动结束本次协同，同步失效协同码
   * 
   * @param request - EndAllCoordinationByOwnerRequest
   * @returns EndAllCoordinationByOwnerResponse
   */
  async endAllCoordinationByOwner(request: $_model.EndAllCoordinationByOwnerRequest): Promise<$_model.EndAllCoordinationByOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.endAllCoordinationByOwnerWithOptions(request, runtime);
  }

  /**
   * 生成协同码
   * 
   * @param request - GenerateCoordinationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCoordinationCodeResponse
   */
  async generateCoordinationCodeWithOptions(request: $_model.GenerateCoordinationCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateCoordinationCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceName)) {
      body["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      body["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateCoordinationCode",
      version: "2022-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateCoordinationCodeResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GenerateCoordinationCodeResponse({}));
  }

  /**
   * 生成协同码
   * 
   * @param request - GenerateCoordinationCodeRequest
   * @returns GenerateCoordinationCodeResponse
   */
  async generateCoordinationCode(request: $_model.GenerateCoordinationCodeRequest): Promise<$_model.GenerateCoordinationCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateCoordinationCodeWithOptions(request, runtime);
  }

}
