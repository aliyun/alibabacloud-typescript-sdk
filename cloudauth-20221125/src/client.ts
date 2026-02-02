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
    this._endpoint = this.getEndpoint("cloudauth", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Enterprise Element Verification
   * 
   * @remarks
   * Supports only enterprises and individual businesses.
   * 
   * @param request - EntElementVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntElementVerifyResponse
   */
  async entElementVerifyWithOptions(request: $_model.EntElementVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EntElementVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entName)) {
      query["EntName"] = request.entName;
    }

    if (!$dara.isNull(request.infoVerifyType)) {
      query["InfoVerifyType"] = request.infoVerifyType;
    }

    if (!$dara.isNull(request.legalPersonCertNo)) {
      query["LegalPersonCertNo"] = request.legalPersonCertNo;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.licenseNo)) {
      query["LicenseNo"] = request.licenseNo;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.userAuthorization)) {
      query["UserAuthorization"] = request.userAuthorization;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EntElementVerify",
      version: "2022-11-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EntElementVerifyResponse>(await this.callApi(params, req, runtime), new $_model.EntElementVerifyResponse({}));
  }

  /**
   * Enterprise Element Verification
   * 
   * @remarks
   * Supports only enterprises and individual businesses.
   * 
   * @param request - EntElementVerifyRequest
   * @returns EntElementVerifyResponse
   */
  async entElementVerify(request: $_model.EntElementVerifyRequest): Promise<$_model.EntElementVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.entElementVerifyWithOptions(request, runtime);
  }

  /**
   * 企业要素核验PRO
   * 
   * @param request - EntElementVerifyPRORequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntElementVerifyPROResponse
   */
  async entElementVerifyPROWithOptions(request: $_model.EntElementVerifyPRORequest, runtime: $dara.RuntimeOptions): Promise<$_model.EntElementVerifyPROResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entName)) {
      query["EntName"] = request.entName;
    }

    if (!$dara.isNull(request.infoVerifyType)) {
      query["InfoVerifyType"] = request.infoVerifyType;
    }

    if (!$dara.isNull(request.legalPersonCertNo)) {
      query["LegalPersonCertNo"] = request.legalPersonCertNo;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.licenseNo)) {
      query["LicenseNo"] = request.licenseNo;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.userAuthorization)) {
      query["UserAuthorization"] = request.userAuthorization;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EntElementVerifyPRO",
      version: "2022-11-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EntElementVerifyPROResponse>(await this.callApi(params, req, runtime), new $_model.EntElementVerifyPROResponse({}));
  }

  /**
   * 企业要素核验PRO
   * 
   * @param request - EntElementVerifyPRORequest
   * @returns EntElementVerifyPROResponse
   */
  async entElementVerifyPRO(request: $_model.EntElementVerifyPRORequest): Promise<$_model.EntElementVerifyPROResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.entElementVerifyPROWithOptions(request, runtime);
  }

  /**
   * Enterprise Element Verification V2
   * 
   * @remarks
   * The Enterprise Element Verification API provides a service for verifying the consistency of enterprise element information, used to identify the authenticity of enterprise information.
   * It supports various institutions including enterprises, individual businesses, farmers\\" professional cooperatives, government agencies, public institutions, social organizations, legal profession institutions, and owners\\" meetings for 2-3 elements;
   * For 4 elements, it supports enterprises, individual businesses, farmers\\" professional cooperatives, and legal professions.
   * 
   * @param request - EntElementVerifyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntElementVerifyV2Response
   */
  async entElementVerifyV2WithOptions(request: $_model.EntElementVerifyV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.EntElementVerifyV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entName)) {
      query["EntName"] = request.entName;
    }

    if (!$dara.isNull(request.infoVerifyType)) {
      query["InfoVerifyType"] = request.infoVerifyType;
    }

    if (!$dara.isNull(request.legalPersonCertNo)) {
      query["LegalPersonCertNo"] = request.legalPersonCertNo;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.licenseNo)) {
      query["LicenseNo"] = request.licenseNo;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.userAuthorization)) {
      query["UserAuthorization"] = request.userAuthorization;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EntElementVerifyV2",
      version: "2022-11-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EntElementVerifyV2Response>(await this.callApi(params, req, runtime), new $_model.EntElementVerifyV2Response({}));
  }

  /**
   * Enterprise Element Verification V2
   * 
   * @remarks
   * The Enterprise Element Verification API provides a service for verifying the consistency of enterprise element information, used to identify the authenticity of enterprise information.
   * It supports various institutions including enterprises, individual businesses, farmers\\" professional cooperatives, government agencies, public institutions, social organizations, legal profession institutions, and owners\\" meetings for 2-3 elements;
   * For 4 elements, it supports enterprises, individual businesses, farmers\\" professional cooperatives, and legal professions.
   * 
   * @param request - EntElementVerifyV2Request
   * @returns EntElementVerifyV2Response
   */
  async entElementVerifyV2(request: $_model.EntElementVerifyV2Request): Promise<$_model.EntElementVerifyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.entElementVerifyV2WithOptions(request, runtime);
  }

  /**
   * Abnormal Business Operation Query
   * 
   * @param request - EntRiskQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntRiskQueryResponse
   */
  async entRiskQueryWithOptions(request: $_model.EntRiskQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EntRiskQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.paramValue)) {
      query["ParamValue"] = request.paramValue;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.userAuthorization)) {
      query["UserAuthorization"] = request.userAuthorization;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EntRiskQuery",
      version: "2022-11-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EntRiskQueryResponse>(await this.callApi(params, req, runtime), new $_model.EntRiskQueryResponse({}));
  }

  /**
   * Abnormal Business Operation Query
   * 
   * @param request - EntRiskQueryRequest
   * @returns EntRiskQueryResponse
   */
  async entRiskQuery(request: $_model.EntRiskQueryRequest): Promise<$_model.EntRiskQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.entRiskQueryWithOptions(request, runtime);
  }

  /**
   * Enterprise Authentication
   * 
   * @param request - EntVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EntVerifyResponse
   */
  async entVerifyWithOptions(request: $_model.EntVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EntVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountNo)) {
      query["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.entName)) {
      query["EntName"] = request.entName;
    }

    if (!$dara.isNull(request.infoVerifyType)) {
      query["InfoVerifyType"] = request.infoVerifyType;
    }

    if (!$dara.isNull(request.legalPersonCertNo)) {
      query["LegalPersonCertNo"] = request.legalPersonCertNo;
    }

    if (!$dara.isNull(request.legalPersonMobile)) {
      query["LegalPersonMobile"] = request.legalPersonMobile;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.licenseNo)) {
      query["LicenseNo"] = request.licenseNo;
    }

    if (!$dara.isNull(request.merchantBizId)) {
      query["MerchantBizId"] = request.merchantBizId;
    }

    if (!$dara.isNull(request.merchantUserId)) {
      query["MerchantUserId"] = request.merchantUserId;
    }

    if (!$dara.isNull(request.riskModelVersion)) {
      query["RiskModelVersion"] = request.riskModelVersion;
    }

    if (!$dara.isNull(request.riskVerifyType)) {
      query["RiskVerifyType"] = request.riskVerifyType;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.userAuthorization)) {
      query["UserAuthorization"] = request.userAuthorization;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EntVerify",
      version: "2022-11-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EntVerifyResponse>(await this.callApi(params, req, runtime), new $_model.EntVerifyResponse({}));
  }

  /**
   * Enterprise Authentication
   * 
   * @param request - EntVerifyRequest
   * @returns EntVerifyResponse
   */
  async entVerify(request: $_model.EntVerifyRequest): Promise<$_model.EntVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.entVerifyWithOptions(request, runtime);
  }

}
