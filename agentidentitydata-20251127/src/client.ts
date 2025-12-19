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
    this._endpoint = this.getEndpoint("agentidentitydata", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取工作负载访问令牌
   * 
   * @param request - AssumeRoleForWorkloadIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssumeRoleForWorkloadIdentityResponse
   */
  async assumeRoleForWorkloadIdentityWithOptions(request: $_model.AssumeRoleForWorkloadIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssumeRoleForWorkloadIdentityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.durationSeconds)) {
      body["DurationSeconds"] = request.durationSeconds;
    }

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.roleSessionName)) {
      body["RoleSessionName"] = request.roleSessionName;
    }

    if (!$dara.isNull(request.workloadAccessToken)) {
      body["WorkloadAccessToken"] = request.workloadAccessToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssumeRoleForWorkloadIdentity",
      version: "2025-11-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssumeRoleForWorkloadIdentityResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.AssumeRoleForWorkloadIdentityResponse({}));
  }

  /**
   * 获取工作负载访问令牌
   * 
   * @param request - AssumeRoleForWorkloadIdentityRequest
   * @returns AssumeRoleForWorkloadIdentityResponse
   */
  async assumeRoleForWorkloadIdentity(request: $_model.AssumeRoleForWorkloadIdentityRequest): Promise<$_model.AssumeRoleForWorkloadIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assumeRoleForWorkloadIdentityWithOptions(request, runtime);
  }

  /**
   * 确认用户授权会话已完成
   * 
   * @param tmpReq - CompleteResourceTokenAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteResourceTokenAuthResponse
   */
  async completeResourceTokenAuthWithOptions(tmpReq: $_model.CompleteResourceTokenAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompleteResourceTokenAuthResponse> {
    tmpReq.validate();
    let request = new $_model.CompleteResourceTokenAuthShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userIdentifier)) {
      request.userIdentifierShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIdentifier, "UserIdentifier", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionURI)) {
      body["SessionURI"] = request.sessionURI;
    }

    if (!$dara.isNull(request.userIdentifierShrink)) {
      body["UserIdentifier"] = request.userIdentifierShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompleteResourceTokenAuth",
      version: "2025-11-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompleteResourceTokenAuthResponse>(await this.callApi(params, req, runtime), new $_model.CompleteResourceTokenAuthResponse({}));
  }

  /**
   * 确认用户授权会话已完成
   * 
   * @param request - CompleteResourceTokenAuthRequest
   * @returns CompleteResourceTokenAuthResponse
   */
  async completeResourceTokenAuth(request: $_model.CompleteResourceTokenAuthRequest): Promise<$_model.CompleteResourceTokenAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.completeResourceTokenAuthWithOptions(request, runtime);
  }

  /**
   * 获取下游资源的 API 密钥
   * 
   * @param request - GetResourceAPIKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceAPIKeyResponse
   */
  async getResourceAPIKeyWithOptions(request: $_model.GetResourceAPIKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceAPIKeyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceCredentialProviderName)) {
      body["ResourceCredentialProviderName"] = request.resourceCredentialProviderName;
    }

    if (!$dara.isNull(request.workloadAccessToken)) {
      body["WorkloadAccessToken"] = request.workloadAccessToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceAPIKey",
      version: "2025-11-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceAPIKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceAPIKeyResponse({}));
  }

  /**
   * 获取下游资源的 API 密钥
   * 
   * @param request - GetResourceAPIKeyRequest
   * @returns GetResourceAPIKeyResponse
   */
  async getResourceAPIKey(request: $_model.GetResourceAPIKeyRequest): Promise<$_model.GetResourceAPIKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceAPIKeyWithOptions(request, runtime);
  }

  /**
   * 获取下游资源的 OAuth 2.0 访问令牌
   * 
   * @param tmpReq - GetResourceOAuth2TokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceOAuth2TokenResponse
   */
  async getResourceOAuth2TokenWithOptions(tmpReq: $_model.GetResourceOAuth2TokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceOAuth2TokenResponse> {
    tmpReq.validate();
    let request = new $_model.GetResourceOAuth2TokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customParameters)) {
      request.customParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customParameters, "CustomParameters", "json");
    }

    if (!$dara.isNull(tmpReq.scopes)) {
      request.scopesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scopes, "Scopes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customParametersShrink)) {
      body["CustomParameters"] = request.customParametersShrink;
    }

    if (!$dara.isNull(request.customState)) {
      body["CustomState"] = request.customState;
    }

    if (!$dara.isNull(request.forceAuthentication)) {
      body["ForceAuthentication"] = request.forceAuthentication;
    }

    if (!$dara.isNull(request.OAuth2Flow)) {
      body["OAuth2Flow"] = request.OAuth2Flow;
    }

    if (!$dara.isNull(request.resourceCredentialProviderName)) {
      body["ResourceCredentialProviderName"] = request.resourceCredentialProviderName;
    }

    if (!$dara.isNull(request.resourceOAuth2ReturnURL)) {
      body["ResourceOAuth2ReturnURL"] = request.resourceOAuth2ReturnURL;
    }

    if (!$dara.isNull(request.scopesShrink)) {
      body["Scopes"] = request.scopesShrink;
    }

    if (!$dara.isNull(request.sessionURI)) {
      body["SessionURI"] = request.sessionURI;
    }

    if (!$dara.isNull(request.workloadAccessToken)) {
      body["WorkloadAccessToken"] = request.workloadAccessToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceOAuth2Token",
      version: "2025-11-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceOAuth2TokenResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceOAuth2TokenResponse({}));
  }

  /**
   * 获取下游资源的 OAuth 2.0 访问令牌
   * 
   * @param request - GetResourceOAuth2TokenRequest
   * @returns GetResourceOAuth2TokenResponse
   */
  async getResourceOAuth2Token(request: $_model.GetResourceOAuth2TokenRequest): Promise<$_model.GetResourceOAuth2TokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceOAuth2TokenWithOptions(request, runtime);
  }

  /**
   * 获取工作负载访问令牌
   * 
   * @param request - GetWorkloadAccessTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkloadAccessTokenResponse
   */
  async getWorkloadAccessTokenWithOptions(request: $_model.GetWorkloadAccessTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkloadAccessTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workloadIdentityName)) {
      body["WorkloadIdentityName"] = request.workloadIdentityName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkloadAccessToken",
      version: "2025-11-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkloadAccessTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkloadAccessTokenResponse({}));
  }

  /**
   * 获取工作负载访问令牌
   * 
   * @param request - GetWorkloadAccessTokenRequest
   * @returns GetWorkloadAccessTokenResponse
   */
  async getWorkloadAccessToken(request: $_model.GetWorkloadAccessTokenRequest): Promise<$_model.GetWorkloadAccessTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkloadAccessTokenWithOptions(request, runtime);
  }

  /**
   * 获取工作负载访问令牌
   * 
   * @param request - GetWorkloadAccessTokenForJWTRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkloadAccessTokenForJWTResponse
   */
  async getWorkloadAccessTokenForJWTWithOptions(request: $_model.GetWorkloadAccessTokenForJWTRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkloadAccessTokenForJWTResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userToken)) {
      body["UserToken"] = request.userToken;
    }

    if (!$dara.isNull(request.workloadIdentityName)) {
      body["WorkloadIdentityName"] = request.workloadIdentityName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkloadAccessTokenForJWT",
      version: "2025-11-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkloadAccessTokenForJWTResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkloadAccessTokenForJWTResponse({}));
  }

  /**
   * 获取工作负载访问令牌
   * 
   * @param request - GetWorkloadAccessTokenForJWTRequest
   * @returns GetWorkloadAccessTokenForJWTResponse
   */
  async getWorkloadAccessTokenForJWT(request: $_model.GetWorkloadAccessTokenForJWTRequest): Promise<$_model.GetWorkloadAccessTokenForJWTResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkloadAccessTokenForJWTWithOptions(request, runtime);
  }

  /**
   * 获取工作负载访问令牌
   * 
   * @param request - GetWorkloadAccessTokenForUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkloadAccessTokenForUserIdResponse
   */
  async getWorkloadAccessTokenForUserIdWithOptions(request: $_model.GetWorkloadAccessTokenForUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkloadAccessTokenForUserIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workloadIdentityName)) {
      body["WorkloadIdentityName"] = request.workloadIdentityName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkloadAccessTokenForUserId",
      version: "2025-11-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkloadAccessTokenForUserIdResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkloadAccessTokenForUserIdResponse({}));
  }

  /**
   * 获取工作负载访问令牌
   * 
   * @param request - GetWorkloadAccessTokenForUserIdRequest
   * @returns GetWorkloadAccessTokenForUserIdResponse
   */
  async getWorkloadAccessTokenForUserId(request: $_model.GetWorkloadAccessTokenForUserIdRequest): Promise<$_model.GetWorkloadAccessTokenForUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkloadAccessTokenForUserIdWithOptions(request, runtime);
  }

}
