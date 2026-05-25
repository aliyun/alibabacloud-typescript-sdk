// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dytnsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * HLR服务
   * 
   * @param request - DescribeNumberHLRRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNumberHLRResponse
   */
  async describeNumberHLRWithOptions(request: $_model.DescribeNumberHLRRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNumberHLRResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNumberHLR",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNumberHLRResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNumberHLRResponse({}));
  }

  /**
   * HLR服务
   * 
   * @param request - DescribeNumberHLRRequest
   * @returns DescribeNumberHLRResponse
   */
  async describeNumberHLR(request: $_model.DescribeNumberHLRRequest): Promise<$_model.DescribeNumberHLRResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNumberHLRWithOptions(request, runtime);
  }

  /**
   * 号码百科国际站号码归属服务
   * 
   * @param request - DescribeNumberMccMncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNumberMccMncResponse
   */
  async describeNumberMccMncWithOptions(request: $_model.DescribeNumberMccMncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNumberMccMncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNumberMccMnc",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNumberMccMncResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNumberMccMncResponse({}));
  }

  /**
   * 号码百科国际站号码归属服务
   * 
   * @param request - DescribeNumberMccMncRequest
   * @returns DescribeNumberMccMncResponse
   */
  async describeNumberMccMnc(request: $_model.DescribeNumberMccMncRequest): Promise<$_model.DescribeNumberMccMncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNumberMccMncWithOptions(request, runtime);
  }

  /**
   * 获取认证结果
   * 
   * @param request - GetIdentificationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentificationResultResponse
   */
  async getIdentificationResultWithOptions(request: $_model.GetIdentificationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentificationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentificationResult",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdentificationResultResponse>(await this.callApi(params, req, runtime), new $_model.GetIdentificationResultResponse({}));
  }

  /**
   * 获取认证结果
   * 
   * @param request - GetIdentificationResultRequest
   * @returns GetIdentificationResultResponse
   */
  async getIdentificationResult(request: $_model.GetIdentificationResultRequest): Promise<$_model.GetIdentificationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentificationResultWithOptions(request, runtime);
  }

  /**
   * 国际认证获取sessionId
   * 
   * @param request - GetIdentificationSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentificationSessionResponse
   */
  async getIdentificationSessionWithOptions(request: $_model.GetIdentificationSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentificationSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentificationSession",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdentificationSessionResponse>(await this.callApi(params, req, runtime), new $_model.GetIdentificationSessionResponse({}));
  }

  /**
   * 国际认证获取sessionId
   * 
   * @param request - GetIdentificationSessionRequest
   * @returns GetIdentificationSessionResponse
   */
  async getIdentificationSession(request: $_model.GetIdentificationSessionRequest): Promise<$_model.GetIdentificationSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentificationSessionWithOptions(request, runtime);
  }

  /**
   * Obtains the verification result of your phone number.
   * 
   * @param request - GetPhoneNumberIdentificationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneNumberIdentificationResultResponse
   */
  async getPhoneNumberIdentificationResultWithOptions(request: $_model.GetPhoneNumberIdentificationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhoneNumberIdentificationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sessionPayload)) {
      query["SessionPayload"] = request.sessionPayload;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhoneNumberIdentificationResult",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhoneNumberIdentificationResultResponse>(await this.callApi(params, req, runtime), new $_model.GetPhoneNumberIdentificationResultResponse({}));
  }

  /**
   * Obtains the verification result of your phone number.
   * 
   * @param request - GetPhoneNumberIdentificationResultRequest
   * @returns GetPhoneNumberIdentificationResultResponse
   */
  async getPhoneNumberIdentificationResult(request: $_model.GetPhoneNumberIdentificationResultRequest): Promise<$_model.GetPhoneNumberIdentificationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhoneNumberIdentificationResultWithOptions(request, runtime);
  }

  /**
   * Obtains the verification URL of your phone number.
   * 
   * @param request - GetPhoneNumberIdentificationUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneNumberIdentificationUrlResponse
   */
  async getPhoneNumberIdentificationUrlWithOptions(request: $_model.GetPhoneNumberIdentificationUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhoneNumberIdentificationUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.rememberPhoneNumber)) {
      query["RememberPhoneNumber"] = request.rememberPhoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhoneNumberIdentificationUrl",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhoneNumberIdentificationUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetPhoneNumberIdentificationUrlResponse({}));
  }

  /**
   * Obtains the verification URL of your phone number.
   * 
   * @param request - GetPhoneNumberIdentificationUrlRequest
   * @returns GetPhoneNumberIdentificationUrlResponse
   */
  async getPhoneNumberIdentificationUrl(request: $_model.GetPhoneNumberIdentificationUrlRequest): Promise<$_model.GetPhoneNumberIdentificationUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhoneNumberIdentificationUrlWithOptions(request, runtime);
  }

}
