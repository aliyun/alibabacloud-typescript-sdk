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
    this._endpoint = this.getEndpoint("dypnsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Verifies SMS verification codes.
   * 
   * @param request - CheckSmsVerifyCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSmsVerifyCodeResponse
   */
  async checkSmsVerifyCodeWithOptions(request: $_model.CheckSmsVerifyCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckSmsVerifyCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caseAuthPolicy)) {
      query["CaseAuthPolicy"] = request.caseAuthPolicy;
    }

    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
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

    if (!$dara.isNull(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!$dara.isNull(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckSmsVerifyCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckSmsVerifyCodeResponse>(await this.callApi(params, req, runtime), new $_model.CheckSmsVerifyCodeResponse({}));
  }

  /**
   * Verifies SMS verification codes.
   * 
   * @param request - CheckSmsVerifyCodeRequest
   * @returns CheckSmsVerifyCodeResponse
   */
  async checkSmsVerifyCode(request: $_model.CheckSmsVerifyCodeRequest): Promise<$_model.CheckSmsVerifyCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkSmsVerifyCodeWithOptions(request, runtime);
  }

  /**
   * Creates a code for a converged communication authentication service.
   * 
   * @param request - CreateSchemeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSchemeConfigResponse
   */
  async createSchemeConfigWithOptions(request: $_model.CreateSchemeConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSchemeConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidPackageName)) {
      query["AndroidPackageName"] = request.androidPackageName;
    }

    if (!$dara.isNull(request.androidPackageSign)) {
      query["AndroidPackageSign"] = request.androidPackageSign;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.h5Origin)) {
      query["H5Origin"] = request.h5Origin;
    }

    if (!$dara.isNull(request.h5Url)) {
      query["H5Url"] = request.h5Url;
    }

    if (!$dara.isNull(request.iosBundleId)) {
      query["IosBundleId"] = request.iosBundleId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSchemeConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSchemeConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateSchemeConfigResponse({}));
  }

  /**
   * Creates a code for a converged communication authentication service.
   * 
   * @param request - CreateSchemeConfigRequest
   * @returns CreateSchemeConfigResponse
   */
  async createSchemeConfig(request: $_model.CreateSchemeConfigRequest): Promise<$_model.CreateSchemeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSchemeConfigWithOptions(request, runtime);
  }

  /**
   * Creates a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVerifySchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVerifySchemeResponse
   */
  async createVerifySchemeWithOptions(request: $_model.CreateVerifySchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVerifySchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.cmApiCode)) {
      query["CmApiCode"] = request.cmApiCode;
    }

    if (!$dara.isNull(request.ctApiCode)) {
      query["CtApiCode"] = request.ctApiCode;
    }

    if (!$dara.isNull(request.cuApiCode)) {
      query["CuApiCode"] = request.cuApiCode;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.hmAppIdentifier)) {
      query["HmAppIdentifier"] = request.hmAppIdentifier;
    }

    if (!$dara.isNull(request.hmPackageName)) {
      query["HmPackageName"] = request.hmPackageName;
    }

    if (!$dara.isNull(request.hmSignName)) {
      query["HmSignName"] = request.hmSignName;
    }

    if (!$dara.isNull(request.ipWhiteList)) {
      query["IpWhiteList"] = request.ipWhiteList;
    }

    if (!$dara.isNull(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packName)) {
      query["PackName"] = request.packName;
    }

    if (!$dara.isNull(request.packSign)) {
      query["PackSign"] = request.packSign;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!$dara.isNull(request.smsSignName)) {
      query["SmsSignName"] = request.smsSignName;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVerifyScheme",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVerifySchemeResponse>(await this.callApi(params, req, runtime), new $_model.CreateVerifySchemeResponse({}));
  }

  /**
   * Creates a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateVerifySchemeRequest
   * @returns CreateVerifySchemeResponse
   */
  async createVerifyScheme(request: $_model.CreateVerifySchemeRequest): Promise<$_model.CreateVerifySchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVerifySchemeWithOptions(request, runtime);
  }

  /**
   * Deletes a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVerifySchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVerifySchemeResponse
   */
  async deleteVerifySchemeWithOptions(request: $_model.DeleteVerifySchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVerifySchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeCode)) {
      query["SchemeCode"] = request.schemeCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVerifyScheme",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVerifySchemeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVerifySchemeResponse({}));
  }

  /**
   * Deletes a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteVerifySchemeRequest
   * @returns DeleteVerifySchemeResponse
   */
  async deleteVerifyScheme(request: $_model.DeleteVerifySchemeRequest): Promise<$_model.DeleteVerifySchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVerifySchemeWithOptions(request, runtime);
  }

  /**
   * Queries the details of a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVerifySchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifySchemeResponse
   */
  async describeVerifySchemeWithOptions(request: $_model.DescribeVerifySchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifySchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeCode)) {
      query["SchemeCode"] = request.schemeCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyScheme",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifySchemeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifySchemeResponse({}));
  }

  /**
   * Queries the details of a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeVerifySchemeRequest
   * @returns DescribeVerifySchemeResponse
   */
  async describeVerifyScheme(request: $_model.DescribeVerifySchemeRequest): Promise<$_model.DescribeVerifySchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifySchemeWithOptions(request, runtime);
  }

  /**
   * Obtains the authorization token used for the authentication of the phone number verification for HTML5 pages. You can obtain AccessToken and JwtToken after a successful call.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](https://help.aliyun.com/document_detail/169786.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetAuthTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthTokenResponse
   */
  async getAuthTokenWithOptions(request: $_model.GetAuthTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuthTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.cmApiCode)) {
      query["CmApiCode"] = request.cmApiCode;
    }

    if (!$dara.isNull(request.ctApiCode)) {
      query["CtApiCode"] = request.ctApiCode;
    }

    if (!$dara.isNull(request.cuApiCode)) {
      query["CuApiCode"] = request.cuApiCode;
    }

    if (!$dara.isNull(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuthToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuthTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetAuthTokenResponse({}));
  }

  /**
   * Obtains the authorization token used for the authentication of the phone number verification for HTML5 pages. You can obtain AccessToken and JwtToken after a successful call.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](https://help.aliyun.com/document_detail/169786.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetAuthTokenRequest
   * @returns GetAuthTokenResponse
   */
  async getAuthToken(request: $_model.GetAuthTokenRequest): Promise<$_model.GetAuthTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuthTokenWithOptions(request, runtime);
  }

  /**
   * Obtains the URL for the Alipay account authorization.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account and obtain an Alibaba Cloud AccessKey pair. For more information, see [Process of communication authorization](https://help.aliyun.com/document_detail/196922.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetAuthorizationUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthorizationUrlResponse
   */
  async getAuthorizationUrlWithOptions(request: $_model.GetAuthorizationUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuthorizationUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNo)) {
      query["PhoneNo"] = request.phoneNo;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeId)) {
      query["SchemeId"] = request.schemeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuthorizationUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuthorizationUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAuthorizationUrlResponse({}));
  }

  /**
   * Obtains the URL for the Alipay account authorization.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account and obtain an Alibaba Cloud AccessKey pair. For more information, see [Process of communication authorization](https://help.aliyun.com/document_detail/196922.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetAuthorizationUrlRequest
   * @returns GetAuthorizationUrlResponse
   */
  async getAuthorizationUrl(request: $_model.GetAuthorizationUrlRequest): Promise<$_model.GetAuthorizationUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuthorizationUrlWithOptions(request, runtime);
  }

  /**
   * Obtains the verification results by using the token that is obtained from the client SDKs.
   * 
   * @param request - GetFusionAuthTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFusionAuthTokenResponse
   */
  async getFusionAuthTokenWithOptions(request: $_model.GetFusionAuthTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFusionAuthTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.durationSeconds)) {
      query["DurationSeconds"] = request.durationSeconds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    if (!$dara.isNull(request.packageSign)) {
      query["PackageSign"] = request.packageSign;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemeCode)) {
      query["SchemeCode"] = request.schemeCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFusionAuthToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFusionAuthTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetFusionAuthTokenResponse({}));
  }

  /**
   * Obtains the verification results by using the token that is obtained from the client SDKs.
   * 
   * @param request - GetFusionAuthTokenRequest
   * @returns GetFusionAuthTokenResponse
   */
  async getFusionAuthToken(request: $_model.GetFusionAuthTokenRequest): Promise<$_model.GetFusionAuthTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFusionAuthTokenWithOptions(request, runtime);
  }

  /**
   * Obtains a phone number for one-click logon.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable only to one-click logon or registration. You can call this operation only after you confirm the authorization on the authorization page provided by the SDK for one-click logon. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetMobileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMobileResponse
   */
  async getMobileWithOptions(request: $_model.GetMobileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMobileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "GetMobile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMobileResponse>(await this.callApi(params, req, runtime), new $_model.GetMobileResponse({}));
  }

  /**
   * Obtains a phone number for one-click logon.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable only to one-click logon or registration. You can call this operation only after you confirm the authorization on the authorization page provided by the SDK for one-click logon. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetMobileRequest
   * @returns GetMobileResponse
   */
  async getMobile(request: $_model.GetMobileRequest): Promise<$_model.GetMobileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMobileWithOptions(request, runtime);
  }

  /**
   * Obtains a phone number for one-click logon. This operation is exclusive to HTML5 pages.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable only to one-click logon or registration in HTML5 pages. You can call this operation only after you confirm the authorization on the authorization page provided by the JavaScript SDK. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPhoneWithTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneWithTokenResponse
   */
  async getPhoneWithTokenWithOptions(request: $_model.GetPhoneWithTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhoneWithTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.spToken)) {
      query["SpToken"] = request.spToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhoneWithToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhoneWithTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetPhoneWithTokenResponse({}));
  }

  /**
   * Obtains a phone number for one-click logon. This operation is exclusive to HTML5 pages.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable only to one-click logon or registration in HTML5 pages. You can call this operation only after you confirm the authorization on the authorization page provided by the JavaScript SDK. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPhoneWithTokenRequest
   * @returns GetPhoneWithTokenResponse
   */
  async getPhoneWithToken(request: $_model.GetPhoneWithTokenRequest): Promise<$_model.GetPhoneWithTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhoneWithTokenWithOptions(request, runtime);
  }

  /**
   * Obtains the authorization token for an SMS verification code.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](https://help.aliyun.com/document_detail/313209.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetSmsAuthTokensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmsAuthTokensResponse
   */
  async getSmsAuthTokensWithOptions(request: $_model.GetSmsAuthTokensRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmsAuthTokensResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.smsCodeExpire)) {
      query["SmsCodeExpire"] = request.smsCodeExpire;
    }

    if (!$dara.isNull(request.smsTemplateCode)) {
      query["SmsTemplateCode"] = request.smsTemplateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmsAuthTokens",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmsAuthTokensResponse>(await this.callApi(params, req, runtime), new $_model.GetSmsAuthTokensResponse({}));
  }

  /**
   * Obtains the authorization token for an SMS verification code.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](https://help.aliyun.com/document_detail/313209.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetSmsAuthTokensRequest
   * @returns GetSmsAuthTokensResponse
   */
  async getSmsAuthTokens(request: $_model.GetSmsAuthTokensRequest): Promise<$_model.GetSmsAuthTokensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmsAuthTokensWithOptions(request, runtime);
  }

  /**
   * Queries the fees generated by a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryGateVerifyBillingPublicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGateVerifyBillingPublicResponse
   */
  async queryGateVerifyBillingPublicWithOptions(request: $_model.QueryGateVerifyBillingPublicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGateVerifyBillingPublicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!$dara.isNull(request.month)) {
      query["Month"] = request.month;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryGateVerifyBillingPublic",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGateVerifyBillingPublicResponse>(await this.callApi(params, req, runtime), new $_model.QueryGateVerifyBillingPublicResponse({}));
  }

  /**
   * Queries the fees generated by a verification service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryGateVerifyBillingPublicRequest
   * @returns QueryGateVerifyBillingPublicResponse
   */
  async queryGateVerifyBillingPublic(request: $_model.QueryGateVerifyBillingPublicRequest): Promise<$_model.QueryGateVerifyBillingPublicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryGateVerifyBillingPublicWithOptions(request, runtime);
  }

  /**
   * Queries the calls of Phone Number Verification Service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryGateVerifyStatisticPublicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGateVerifyStatisticPublicResponse
   */
  async queryGateVerifyStatisticPublicWithOptions(request: $_model.QueryGateVerifyStatisticPublicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGateVerifyStatisticPublicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryGateVerifyStatisticPublic",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGateVerifyStatisticPublicResponse>(await this.callApi(params, req, runtime), new $_model.QueryGateVerifyStatisticPublicResponse({}));
  }

  /**
   * Queries the calls of Phone Number Verification Service.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryGateVerifyStatisticPublicRequest
   * @returns QueryGateVerifyStatisticPublicResponse
   */
  async queryGateVerifyStatisticPublic(request: $_model.QueryGateVerifyStatisticPublicRequest): Promise<$_model.QueryGateVerifyStatisticPublicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryGateVerifyStatisticPublicWithOptions(request, runtime);
  }

  /**
   * Queries the delivery status of the SMS verification code. You can query only the delivery status of the SMS verification code that is sent by calling corresponding API operations.
   * 
   * @deprecated OpenAPI QuerySendDetails is deprecated
   * 
   * @param request - QuerySendDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySendDetailsResponse
   */
  async querySendDetailsWithOptions(request: $_model.QuerySendDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySendDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!$dara.isNull(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySendDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySendDetailsResponse>(await this.callApi(params, req, runtime), new $_model.QuerySendDetailsResponse({}));
  }

  /**
   * Queries the delivery status of the SMS verification code. You can query only the delivery status of the SMS verification code that is sent by calling corresponding API operations.
   * 
   * @deprecated OpenAPI QuerySendDetails is deprecated
   * 
   * @param request - QuerySendDetailsRequest
   * @returns QuerySendDetailsResponse
   */
  // Deprecated
  async querySendDetails(request: $_model.QuerySendDetailsRequest): Promise<$_model.QuerySendDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendDetailsWithOptions(request, runtime);
  }

  /**
   * Sends SMS verification codes.
   * 
   * @param request - SendSmsVerifyCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSmsVerifyCodeResponse
   */
  async sendSmsVerifyCodeWithOptions(request: $_model.SendSmsVerifyCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendSmsVerifyCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRetry)) {
      query["AutoRetry"] = request.autoRetry;
    }

    if (!$dara.isNull(request.codeLength)) {
      query["CodeLength"] = request.codeLength;
    }

    if (!$dara.isNull(request.codeType)) {
      query["CodeType"] = request.codeType;
    }

    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.duplicatePolicy)) {
      query["DuplicatePolicy"] = request.duplicatePolicy;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
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

    if (!$dara.isNull(request.returnVerifyCode)) {
      query["ReturnVerifyCode"] = request.returnVerifyCode;
    }

    if (!$dara.isNull(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.smsUpExtendCode)) {
      query["SmsUpExtendCode"] = request.smsUpExtendCode;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateParam)) {
      query["TemplateParam"] = request.templateParam;
    }

    if (!$dara.isNull(request.validTime)) {
      query["ValidTime"] = request.validTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendSmsVerifyCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendSmsVerifyCodeResponse>(await this.callApi(params, req, runtime), new $_model.SendSmsVerifyCodeResponse({}));
  }

  /**
   * Sends SMS verification codes.
   * 
   * @param request - SendSmsVerifyCodeRequest
   * @returns SendSmsVerifyCodeResponse
   */
  async sendSmsVerifyCode(request: $_model.SendSmsVerifyCodeRequest): Promise<$_model.SendSmsVerifyCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendSmsVerifyCodeWithOptions(request, runtime);
  }

  /**
   * Verifies the phone number that you use.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable to only the verification of thephone number that you use. To obtain a phone number for one-click logon, call [GetMobile](https://help.aliyun.com/document_detail/189865.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifyMobileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyMobileResponse
   */
  async verifyMobileWithOptions(request: $_model.VerifyMobileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyMobileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessCode)) {
      query["AccessCode"] = request.accessCode;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyMobile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyMobileResponse>(await this.callApi(params, req, runtime), new $_model.VerifyMobileResponse({}));
  }

  /**
   * Verifies the phone number that you use.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/84541.html).
   * >  This operation is applicable to only the verification of thephone number that you use. To obtain a phone number for one-click logon, call [GetMobile](https://help.aliyun.com/document_detail/189865.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifyMobileRequest
   * @returns VerifyMobileResponse
   */
  async verifyMobile(request: $_model.VerifyMobileRequest): Promise<$_model.VerifyMobileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyMobileWithOptions(request, runtime);
  }

  /**
   * Verifies the phone number used in HTML5 pages.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](https://help.aliyun.com/document_detail/169786.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifyPhoneWithTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyPhoneWithTokenResponse
   */
  async verifyPhoneWithTokenWithOptions(request: $_model.VerifyPhoneWithTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyPhoneWithTokenResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.spToken)) {
      query["SpToken"] = request.spToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyPhoneWithToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyPhoneWithTokenResponse>(await this.callApi(params, req, runtime), new $_model.VerifyPhoneWithTokenResponse({}));
  }

  /**
   * Verifies the phone number used in HTML5 pages.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](https://help.aliyun.com/document_detail/169786.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifyPhoneWithTokenRequest
   * @returns VerifyPhoneWithTokenResponse
   */
  async verifyPhoneWithToken(request: $_model.VerifyPhoneWithTokenRequest): Promise<$_model.VerifyPhoneWithTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyPhoneWithTokenWithOptions(request, runtime);
  }

  /**
   * Verifies SMS verification codes.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](https://help.aliyun.com/document_detail/313209.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifySmsCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifySmsCodeResponse
   */
  async verifySmsCodeWithOptions(request: $_model.VerifySmsCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifySmsCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.smsCode)) {
      query["SmsCode"] = request.smsCode;
    }

    if (!$dara.isNull(request.smsToken)) {
      query["SmsToken"] = request.smsToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifySmsCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifySmsCodeResponse>(await this.callApi(params, req, runtime), new $_model.VerifySmsCodeResponse({}));
  }

  /**
   * Verifies SMS verification codes.
   * 
   * @remarks
   * ### [](#)Preparations
   * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](https://help.aliyun.com/document_detail/313209.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - VerifySmsCodeRequest
   * @returns VerifySmsCodeResponse
   */
  async verifySmsCode(request: $_model.VerifySmsCodeRequest): Promise<$_model.VerifySmsCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifySmsCodeWithOptions(request, runtime);
  }

  /**
   * Obtains the verification results by using the verification token that is obtained by using the authentication token.
   * 
   * @param request - VerifyWithFusionAuthTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyWithFusionAuthTokenResponse
   */
  async verifyWithFusionAuthTokenWithOptions(request: $_model.VerifyWithFusionAuthTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyWithFusionAuthTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.verifyToken)) {
      query["VerifyToken"] = request.verifyToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyWithFusionAuthToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyWithFusionAuthTokenResponse>(await this.callApi(params, req, runtime), new $_model.VerifyWithFusionAuthTokenResponse({}));
  }

  /**
   * Obtains the verification results by using the verification token that is obtained by using the authentication token.
   * 
   * @param request - VerifyWithFusionAuthTokenRequest
   * @returns VerifyWithFusionAuthTokenResponse
   */
  async verifyWithFusionAuthToken(request: $_model.VerifyWithFusionAuthTokenRequest): Promise<$_model.VerifyWithFusionAuthTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyWithFusionAuthTokenWithOptions(request, runtime);
  }

}
