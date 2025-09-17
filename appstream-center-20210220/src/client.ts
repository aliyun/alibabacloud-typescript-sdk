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
   * 身份认证查询接口
   * 
   * @param tmpReq - FindIdpListByLoginIdentifierRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindIdpListByLoginIdentifierResponse
   */
  async findIdpListByLoginIdentifierWithOptions(tmpReq: $_model.FindIdpListByLoginIdentifierRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindIdpListByLoginIdentifierResponse> {
    tmpReq.validate();
    let request = new $_model.FindIdpListByLoginIdentifierShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.availableFeatures)) {
      request.availableFeaturesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.availableFeatures, "AvailableFeatures", "json");
    }

    let query = { };
    if (!$dara.isNull(request.availableFeaturesShrink)) {
      query["AvailableFeatures"] = request.availableFeaturesShrink;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientChannel)) {
      body["ClientChannel"] = request.clientChannel;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.loginIdentifier)) {
      body["LoginIdentifier"] = request.loginIdentifier;
    }

    if (!$dara.isNull(request.supportTypes)) {
      body["SupportTypes"] = request.supportTypes;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindIdpListByLoginIdentifier",
      version: "2021-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindIdpListByLoginIdentifierResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.FindIdpListByLoginIdentifierResponse({}));
  }

  /**
   * 身份认证查询接口
   * 
   * @param request - FindIdpListByLoginIdentifierRequest
   * @returns FindIdpListByLoginIdentifierResponse
   */
  async findIdpListByLoginIdentifier(request: $_model.FindIdpListByLoginIdentifierRequest): Promise<$_model.FindIdpListByLoginIdentifierResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findIdpListByLoginIdentifierWithOptions(request, runtime);
  }

  /**
   * GetLoginToken
   * 
   * @param tmpReq - GetLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginTokenResponse
   */
  async getLoginTokenWithOptions(tmpReq: $_model.GetLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoginTokenResponse> {
    tmpReq.validate();
    let request = new $_model.GetLoginTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.availableFeatures)) {
      request.availableFeaturesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.availableFeatures, "AvailableFeatures", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authenticationCode)) {
      query["AuthenticationCode"] = request.authenticationCode;
    }

    if (!$dara.isNull(request.availableFeaturesShrink)) {
      query["AvailableFeatures"] = request.availableFeaturesShrink;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientName)) {
      query["ClientName"] = request.clientName;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.currentStage)) {
      query["CurrentStage"] = request.currentStage;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.encryptedFingerPrintData)) {
      query["EncryptedFingerPrintData"] = request.encryptedFingerPrintData;
    }

    if (!$dara.isNull(request.encryptedKey)) {
      query["EncryptedKey"] = request.encryptedKey;
    }

    if (!$dara.isNull(request.encryptedPassword)) {
      query["EncryptedPassword"] = request.encryptedPassword;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fingerPrintData)) {
      query["FingerPrintData"] = request.fingerPrintData;
    }

    if (!$dara.isNull(request.idpId)) {
      query["IdpId"] = request.idpId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!$dara.isNull(request.keepAliveToken)) {
      query["KeepAliveToken"] = request.keepAliveToken;
    }

    if (!$dara.isNull(request.loginIdentifier)) {
      query["LoginIdentifier"] = request.loginIdentifier;
    }

    if (!$dara.isNull(request.loginName)) {
      query["LoginName"] = request.loginName;
    }

    if (!$dara.isNull(request.mfaType)) {
      query["MfaType"] = request.mfaType;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.oldPassword)) {
      query["OldPassword"] = request.oldPassword;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.phoneVerifyCode)) {
      query["PhoneVerifyCode"] = request.phoneVerifyCode;
    }

    if (!$dara.isNull(request.profileRegion)) {
      query["ProfileRegion"] = request.profileRegion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.ssoExtendsCookies)) {
      query["SsoExtendsCookies"] = request.ssoExtendsCookies;
    }

    if (!$dara.isNull(request.ssoSessionToken)) {
      query["SsoSessionToken"] = request.ssoSessionToken;
    }

    if (!$dara.isNull(request.tokenCode)) {
      query["TokenCode"] = request.tokenCode;
    }

    if (!$dara.isNull(request.umidToken)) {
      query["UmidToken"] = request.umidToken;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoginToken",
      version: "2021-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLoginTokenResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetLoginTokenResponse({}));
  }

  /**
   * GetLoginToken
   * 
   * @param request - GetLoginTokenRequest
   * @returns GetLoginTokenResponse
   */
  async getLoginToken(request: $_model.GetLoginTokenRequest): Promise<$_model.GetLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoginTokenWithOptions(request, runtime);
  }

  /**
   * 获取无影StsToken
   * 
   * @param request - GetStsTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStsTokenResponse
   */
  async getStsTokenWithOptions(request: $_model.GetStsTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStsTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authCode)) {
      body["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStsToken",
      version: "2021-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStsTokenResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetStsTokenResponse({}));
  }

  /**
   * 获取无影StsToken
   * 
   * @param request - GetStsTokenRequest
   * @returns GetStsTokenResponse
   */
  async getStsToken(request: $_model.GetStsTokenRequest): Promise<$_model.GetStsTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStsTokenWithOptions(request, runtime);
  }

  /**
   * @param request - RefreshLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshLoginTokenResponse
   */
  async refreshLoginTokenWithOptions(request: $_model.RefreshLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshLoginTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginIdentifier)) {
      query["LoginIdentifier"] = request.loginIdentifier;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.profileRegion)) {
      query["ProfileRegion"] = request.profileRegion;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshLoginToken",
      version: "2021-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshLoginTokenResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.RefreshLoginTokenResponse({}));
  }

  /**
   * @param request - RefreshLoginTokenRequest
   * @returns RefreshLoginTokenResponse
   */
  async refreshLoginToken(request: $_model.RefreshLoginTokenRequest): Promise<$_model.RefreshLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshLoginTokenWithOptions(request, runtime);
  }

}
