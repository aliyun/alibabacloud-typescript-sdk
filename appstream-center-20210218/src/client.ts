// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "appstream-center";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
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
   * Creates a time-limited static access token for a specified user in the current account to access a single cloud desktop.
   * 
   * @remarks
   * When you call this operation, you must provide Resource and specify both ResourceType and ResourceId. Only a single cloud desktop is supported. You cannot omit Resource to authorize or query all cloud desktops.
   * AuthorizerId is the WyId of the user and cannot be replaced by a username. BusinessChannel supports Enterprise and Business. If omitted, the default value is Enterprise.
   * Before creation, the user must belong to the current calling account and have access permissions for the target cloud desktop. This operation only creates an access token. It does not create a user or add an authorization relationship between the user and the cloud desktop. Each successful call creates a new time-limited token. To obtain an existing token, call GetLatestThirdAppAccessToken and pass the same AuthorizerId and Resource.
   * The unit of Expiration is seconds. Valid values: 1 to 15552000. If omitted, the default value is 15552000, which equals 180 days. Permanent validity is not supported. Keep the returned AccessToken secure and avoid displaying the full token in logs or public content.
   * 
   * @param tmpReq - CreateThirdAppAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateThirdAppAccessTokenResponse
   */
  async createThirdAppAccessTokenWithOptions(tmpReq: $_model.CreateThirdAppAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateThirdAppAccessTokenResponse> {
    tmpReq.validate();
    let request = new $_model.CreateThirdAppAccessTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resource)) {
      request.resourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resource, "Resource", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizerId)) {
      body["AuthorizerId"] = request.authorizerId;
    }

    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.expiration)) {
      body["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.resourceShrink)) {
      body["Resource"] = request.resourceShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateThirdAppAccessToken",
      version: "2021-02-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateThirdAppAccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateThirdAppAccessTokenResponse({}));
  }

  /**
   * Creates a time-limited static access token for a specified user in the current account to access a single cloud desktop.
   * 
   * @remarks
   * When you call this operation, you must provide Resource and specify both ResourceType and ResourceId. Only a single cloud desktop is supported. You cannot omit Resource to authorize or query all cloud desktops.
   * AuthorizerId is the WyId of the user and cannot be replaced by a username. BusinessChannel supports Enterprise and Business. If omitted, the default value is Enterprise.
   * Before creation, the user must belong to the current calling account and have access permissions for the target cloud desktop. This operation only creates an access token. It does not create a user or add an authorization relationship between the user and the cloud desktop. Each successful call creates a new time-limited token. To obtain an existing token, call GetLatestThirdAppAccessToken and pass the same AuthorizerId and Resource.
   * The unit of Expiration is seconds. Valid values: 1 to 15552000. If omitted, the default value is 15552000, which equals 180 days. Permanent validity is not supported. Keep the returned AccessToken secure and avoid displaying the full token in logs or public content.
   * 
   * @param request - CreateThirdAppAccessTokenRequest
   * @returns CreateThirdAppAccessTokenResponse
   */
  async createThirdAppAccessToken(request: $_model.CreateThirdAppAccessTokenRequest): Promise<$_model.CreateThirdAppAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createThirdAppAccessTokenWithOptions(request, runtime);
  }

  /**
   * Invalidates a Wuying Workspace logon session before it naturally expires.
   * 
   * @param request - ExpireLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExpireLoginTokenResponse
   */
  async expireLoginTokenWithOptions(request: $_model.ExpireLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExpireLoginTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      body["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExpireLoginToken",
      version: "2021-02-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExpireLoginTokenResponse>(await this.callApi(params, req, runtime), new $_model.ExpireLoginTokenResponse({}));
  }

  /**
   * Invalidates a Wuying Workspace logon session before it naturally expires.
   * 
   * @param request - ExpireLoginTokenRequest
   * @returns ExpireLoginTokenResponse
   */
  async expireLoginToken(request: $_model.ExpireLoginTokenRequest): Promise<$_model.ExpireLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.expireLoginTokenWithOptions(request, runtime);
  }

  /**
   * Retrieves an authorization code that contains user identity and permission information, which can be used to invoke cloud applications in integration scenarios.
   * 
   * @remarks
   * Retrieves an authorization code that contains user identity and permission information, which can be used to invoke cloud applications in integration scenarios.
   * 
   * @param request - GetAuthCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthCodeResponse
   */
  async getAuthCodeWithOptions(request: $_model.GetAuthCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuthCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tokenType)) {
      query["TokenType"] = request.tokenType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountType)) {
      body["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.adDomain)) {
      body["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.adPassword)) {
      body["AdPassword"] = request.adPassword;
    }

    if (!$dara.isNull(request.autoCreateUser)) {
      body["AutoCreateUser"] = request.autoCreateUser;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.externalUserId)) {
      body["ExternalUserId"] = request.externalUserId;
    }

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuthCode",
      version: "2021-02-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuthCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetAuthCodeResponse({}));
  }

  /**
   * Retrieves an authorization code that contains user identity and permission information, which can be used to invoke cloud applications in integration scenarios.
   * 
   * @remarks
   * Retrieves an authorization code that contains user identity and permission information, which can be used to invoke cloud applications in integration scenarios.
   * 
   * @param request - GetAuthCodeRequest
   * @returns GetAuthCodeResponse
   */
  async getAuthCode(request: $_model.GetAuthCodeRequest): Promise<$_model.GetAuthCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuthCodeWithOptions(request, runtime);
  }

  /**
   * Retrieves the current valid static access token for a specified user and a single cloud desktop under the current account, keeping the original expiration time.
   * 
   * @remarks
   * You must provide Resource and specify both ResourceType and ResourceId when calling this operation. Only a single cloud desktop is supported. You cannot omit Resource to authorize or query all cloud desktops.
   * AuthorizerId is the WyId of the user and cannot be replaced by a username. BusinessChannel supports Enterprise and Business. If omitted, the default value is Enterprise.
   * The AuthorizerId and Resource in the query conditions must be consistent with those used when the token was created. This operation only returns the current valid token for the current account, user, and cloud desktop. It does not create a new token, renew the token, or restore or roll back to a historical token. If no valid token is found, the token has expired, or the corresponding cache has been cleared, AccessToken.NotFound is returned. To obtain a new token, call CreateThirdAppAccessToken.
   * Keep the returned AccessToken secure and avoid displaying the full token in logs or public content.
   * 
   * @param tmpReq - GetLatestThirdAppAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLatestThirdAppAccessTokenResponse
   */
  async getLatestThirdAppAccessTokenWithOptions(tmpReq: $_model.GetLatestThirdAppAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLatestThirdAppAccessTokenResponse> {
    tmpReq.validate();
    let request = new $_model.GetLatestThirdAppAccessTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resource)) {
      request.resourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resource, "Resource", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizerId)) {
      body["AuthorizerId"] = request.authorizerId;
    }

    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.resourceShrink)) {
      body["Resource"] = request.resourceShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLatestThirdAppAccessToken",
      version: "2021-02-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLatestThirdAppAccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetLatestThirdAppAccessTokenResponse({}));
  }

  /**
   * Retrieves the current valid static access token for a specified user and a single cloud desktop under the current account, keeping the original expiration time.
   * 
   * @remarks
   * You must provide Resource and specify both ResourceType and ResourceId when calling this operation. Only a single cloud desktop is supported. You cannot omit Resource to authorize or query all cloud desktops.
   * AuthorizerId is the WyId of the user and cannot be replaced by a username. BusinessChannel supports Enterprise and Business. If omitted, the default value is Enterprise.
   * The AuthorizerId and Resource in the query conditions must be consistent with those used when the token was created. This operation only returns the current valid token for the current account, user, and cloud desktop. It does not create a new token, renew the token, or restore or roll back to a historical token. If no valid token is found, the token has expired, or the corresponding cache has been cleared, AccessToken.NotFound is returned. To obtain a new token, call CreateThirdAppAccessToken.
   * Keep the returned AccessToken secure and avoid displaying the full token in logs or public content.
   * 
   * @param request - GetLatestThirdAppAccessTokenRequest
   * @returns GetLatestThirdAppAccessTokenResponse
   */
  async getLatestThirdAppAccessToken(request: $_model.GetLatestThirdAppAccessTokenRequest): Promise<$_model.GetLatestThirdAppAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLatestThirdAppAccessTokenWithOptions(request, runtime);
  }

  /**
   * Retrieves a Wuying STS token (temporary identity credential).
   * 
   * @param request - GetStsTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStsTokenResponse
   */
  async getStsTokenWithOptions(request: $_model.GetStsTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStsTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.expiration)) {
      body["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.externalId)) {
      body["ExternalId"] = request.externalId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStsToken",
      version: "2021-02-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStsTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetStsTokenResponse({}));
  }

  /**
   * Retrieves a Wuying STS token (temporary identity credential).
   * 
   * @param request - GetStsTokenRequest
   * @returns GetStsTokenResponse
   */
  async getStsToken(request: $_model.GetStsTokenRequest): Promise<$_model.GetStsTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStsTokenWithOptions(request, runtime);
  }

}
