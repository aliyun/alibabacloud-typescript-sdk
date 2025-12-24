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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("agentidentity", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建一个 API 密钥凭证提供商
   * 
   * @param request - CreateAPIKeyCredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAPIKeyCredentialProviderResponse
   */
  async createAPIKeyCredentialProviderWithOptions(request: $_model.CreateAPIKeyCredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAPIKeyCredentialProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.APIKey)) {
      body["APIKey"] = request.APIKey;
    }

    if (!$dara.isNull(request.APIKeyCredentialProviderName)) {
      body["APIKeyCredentialProviderName"] = request.APIKeyCredentialProviderName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAPIKeyCredentialProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAPIKeyCredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.CreateAPIKeyCredentialProviderResponse({}));
  }

  /**
   * 创建一个 API 密钥凭证提供商
   * 
   * @param request - CreateAPIKeyCredentialProviderRequest
   * @returns CreateAPIKeyCredentialProviderResponse
   */
  async createAPIKeyCredentialProvider(request: $_model.CreateAPIKeyCredentialProviderRequest): Promise<$_model.CreateAPIKeyCredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAPIKeyCredentialProviderWithOptions(request, runtime);
  }

  /**
   * 创建IdentityProvider
   * 
   * @param tmpReq - CreateIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdentityProviderResponse
   */
  async createIdentityProviderWithOptions(tmpReq: $_model.CreateIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIdentityProviderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateIdentityProviderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.allowedAudience)) {
      request.allowedAudienceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.allowedAudience, "AllowedAudience", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedAudienceShrink)) {
      body["AllowedAudience"] = request.allowedAudienceShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.discoveryURL)) {
      body["DiscoveryURL"] = request.discoveryURL;
    }

    if (!$dara.isNull(request.identityProviderName)) {
      body["IdentityProviderName"] = request.identityProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIdentityProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.CreateIdentityProviderResponse({}));
  }

  /**
   * 创建IdentityProvider
   * 
   * @param request - CreateIdentityProviderRequest
   * @returns CreateIdentityProviderResponse
   */
  async createIdentityProvider(request: $_model.CreateIdentityProviderRequest): Promise<$_model.CreateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 创建 OAuth2 凭证提供商
   * 
   * @param tmpReq - CreateOAuth2CredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOAuth2CredentialProviderResponse
   */
  async createOAuth2CredentialProviderWithOptions(tmpReq: $_model.CreateOAuth2CredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOAuth2CredentialProviderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOAuth2CredentialProviderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.OAuth2ProviderConfig)) {
      request.OAuth2ProviderConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.OAuth2ProviderConfig, "OAuth2ProviderConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callbackURL)) {
      body["CallbackURL"] = request.callbackURL;
    }

    if (!$dara.isNull(request.credentialProviderVendor)) {
      body["CredentialProviderVendor"] = request.credentialProviderVendor;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.OAuth2CredentialProviderName)) {
      body["OAuth2CredentialProviderName"] = request.OAuth2CredentialProviderName;
    }

    if (!$dara.isNull(request.OAuth2ProviderConfigShrink)) {
      body["OAuth2ProviderConfig"] = request.OAuth2ProviderConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOAuth2CredentialProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOAuth2CredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.CreateOAuth2CredentialProviderResponse({}));
  }

  /**
   * 创建 OAuth2 凭证提供商
   * 
   * @param request - CreateOAuth2CredentialProviderRequest
   * @returns CreateOAuth2CredentialProviderResponse
   */
  async createOAuth2CredentialProvider(request: $_model.CreateOAuth2CredentialProviderRequest): Promise<$_model.CreateOAuth2CredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOAuth2CredentialProviderWithOptions(request, runtime);
  }

  /**
   * 创建WorkloadIdentity
   * 
   * @param tmpReq - CreateWorkloadIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkloadIdentityResponse
   */
  async createWorkloadIdentityWithOptions(tmpReq: $_model.CreateWorkloadIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkloadIdentityResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWorkloadIdentityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.allowedResourceOAuth2ReturnURLs)) {
      request.allowedResourceOAuth2ReturnURLsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.allowedResourceOAuth2ReturnURLs, "AllowedResourceOAuth2ReturnURLs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedResourceOAuth2ReturnURLsShrink)) {
      body["AllowedResourceOAuth2ReturnURLs"] = request.allowedResourceOAuth2ReturnURLsShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.identityProviderName)) {
      body["IdentityProviderName"] = request.identityProviderName;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.workloadIdentityName)) {
      body["WorkloadIdentityName"] = request.workloadIdentityName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkloadIdentity",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkloadIdentityResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkloadIdentityResponse({}));
  }

  /**
   * 创建WorkloadIdentity
   * 
   * @param request - CreateWorkloadIdentityRequest
   * @returns CreateWorkloadIdentityResponse
   */
  async createWorkloadIdentity(request: $_model.CreateWorkloadIdentityRequest): Promise<$_model.CreateWorkloadIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkloadIdentityWithOptions(request, runtime);
  }

  /**
   * 删除一个 API 密钥凭证提供商
   * 
   * @param request - DeleteAPIKeyCredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAPIKeyCredentialProviderResponse
   */
  async deleteAPIKeyCredentialProviderWithOptions(request: $_model.DeleteAPIKeyCredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAPIKeyCredentialProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.APIKeyCredentialProviderName)) {
      body["APIKeyCredentialProviderName"] = request.APIKeyCredentialProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAPIKeyCredentialProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAPIKeyCredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAPIKeyCredentialProviderResponse({}));
  }

  /**
   * 删除一个 API 密钥凭证提供商
   * 
   * @param request - DeleteAPIKeyCredentialProviderRequest
   * @returns DeleteAPIKeyCredentialProviderResponse
   */
  async deleteAPIKeyCredentialProvider(request: $_model.DeleteAPIKeyCredentialProviderRequest): Promise<$_model.DeleteAPIKeyCredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAPIKeyCredentialProviderWithOptions(request, runtime);
  }

  /**
   * 删除IdentityProvider
   * 
   * @param request - DeleteIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIdentityProviderResponse
   */
  async deleteIdentityProviderWithOptions(request: $_model.DeleteIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIdentityProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identityProviderName)) {
      body["IdentityProviderName"] = request.identityProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIdentityProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIdentityProviderResponse({}));
  }

  /**
   * 删除IdentityProvider
   * 
   * @param request - DeleteIdentityProviderRequest
   * @returns DeleteIdentityProviderResponse
   */
  async deleteIdentityProvider(request: $_model.DeleteIdentityProviderRequest): Promise<$_model.DeleteIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 删除 OAuth2 凭证提供商
   * 
   * @param request - DeleteOAuth2CredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOAuth2CredentialProviderResponse
   */
  async deleteOAuth2CredentialProviderWithOptions(request: $_model.DeleteOAuth2CredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOAuth2CredentialProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.OAuth2CredentialProviderName)) {
      body["OAuth2CredentialProviderName"] = request.OAuth2CredentialProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOAuth2CredentialProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOAuth2CredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOAuth2CredentialProviderResponse({}));
  }

  /**
   * 删除 OAuth2 凭证提供商
   * 
   * @param request - DeleteOAuth2CredentialProviderRequest
   * @returns DeleteOAuth2CredentialProviderResponse
   */
  async deleteOAuth2CredentialProvider(request: $_model.DeleteOAuth2CredentialProviderRequest): Promise<$_model.DeleteOAuth2CredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOAuth2CredentialProviderWithOptions(request, runtime);
  }

  /**
   * 删除WorkloadIdentity
   * 
   * @param request - DeleteWorkloadIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkloadIdentityResponse
   */
  async deleteWorkloadIdentityWithOptions(request: $_model.DeleteWorkloadIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkloadIdentityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workloadIdentityName)) {
      body["WorkloadIdentityName"] = request.workloadIdentityName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkloadIdentity",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkloadIdentityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkloadIdentityResponse({}));
  }

  /**
   * 删除WorkloadIdentity
   * 
   * @param request - DeleteWorkloadIdentityRequest
   * @returns DeleteWorkloadIdentityResponse
   */
  async deleteWorkloadIdentity(request: $_model.DeleteWorkloadIdentityRequest): Promise<$_model.DeleteWorkloadIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkloadIdentityWithOptions(request, runtime);
  }

  /**
   * 查询一个 API 密钥凭证提供商
   * 
   * @param request - GetAPIKeyCredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAPIKeyCredentialProviderResponse
   */
  async getAPIKeyCredentialProviderWithOptions(request: $_model.GetAPIKeyCredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAPIKeyCredentialProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.APIKeyCredentialProviderName)) {
      body["APIKeyCredentialProviderName"] = request.APIKeyCredentialProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAPIKeyCredentialProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAPIKeyCredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetAPIKeyCredentialProviderResponse({}));
  }

  /**
   * 查询一个 API 密钥凭证提供商
   * 
   * @param request - GetAPIKeyCredentialProviderRequest
   * @returns GetAPIKeyCredentialProviderResponse
   */
  async getAPIKeyCredentialProvider(request: $_model.GetAPIKeyCredentialProviderRequest): Promise<$_model.GetAPIKeyCredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAPIKeyCredentialProviderWithOptions(request, runtime);
  }

  /**
   * 创建应用
   * 
   * @param request - GetIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProviderWithOptions(request: $_model.GetIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identityProviderName)) {
      body["IdentityProviderName"] = request.identityProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderResponse({}));
  }

  /**
   * 创建应用
   * 
   * @param request - GetIdentityProviderRequest
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProvider(request: $_model.GetIdentityProviderRequest): Promise<$_model.GetIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 查询 OAuth2 凭证提供商
   * 
   * @param request - GetOAuth2CredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOAuth2CredentialProviderResponse
   */
  async getOAuth2CredentialProviderWithOptions(request: $_model.GetOAuth2CredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOAuth2CredentialProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.OAuth2CredentialProviderName)) {
      body["OAuth2CredentialProviderName"] = request.OAuth2CredentialProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOAuth2CredentialProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOAuth2CredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetOAuth2CredentialProviderResponse({}));
  }

  /**
   * 查询 OAuth2 凭证提供商
   * 
   * @param request - GetOAuth2CredentialProviderRequest
   * @returns GetOAuth2CredentialProviderResponse
   */
  async getOAuth2CredentialProvider(request: $_model.GetOAuth2CredentialProviderRequest): Promise<$_model.GetOAuth2CredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOAuth2CredentialProviderWithOptions(request, runtime);
  }

  /**
   * 创建应用
   * 
   * @param request - GetWorkloadIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkloadIdentityResponse
   */
  async getWorkloadIdentityWithOptions(request: $_model.GetWorkloadIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkloadIdentityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workloadIdentityName)) {
      body["WorkloadIdentityName"] = request.workloadIdentityName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkloadIdentity",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkloadIdentityResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkloadIdentityResponse({}));
  }

  /**
   * 创建应用
   * 
   * @param request - GetWorkloadIdentityRequest
   * @returns GetWorkloadIdentityResponse
   */
  async getWorkloadIdentity(request: $_model.GetWorkloadIdentityRequest): Promise<$_model.GetWorkloadIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkloadIdentityWithOptions(request, runtime);
  }

  /**
   * 列出 API 密钥凭证提供商
   * 
   * @param request - ListAPIKeyCredentialProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAPIKeyCredentialProvidersResponse
   */
  async listAPIKeyCredentialProvidersWithOptions(request: $_model.ListAPIKeyCredentialProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAPIKeyCredentialProvidersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAPIKeyCredentialProviders",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAPIKeyCredentialProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListAPIKeyCredentialProvidersResponse({}));
  }

  /**
   * 列出 API 密钥凭证提供商
   * 
   * @param request - ListAPIKeyCredentialProvidersRequest
   * @returns ListAPIKeyCredentialProvidersResponse
   */
  async listAPIKeyCredentialProviders(request: $_model.ListAPIKeyCredentialProvidersRequest): Promise<$_model.ListAPIKeyCredentialProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAPIKeyCredentialProvidersWithOptions(request, runtime);
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListIdentityProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProvidersWithOptions(request: $_model.ListIdentityProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdentityProvidersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdentityProviders",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIdentityProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListIdentityProvidersResponse({}));
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListIdentityProvidersRequest
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProviders(request: $_model.ListIdentityProvidersRequest): Promise<$_model.ListIdentityProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdentityProvidersWithOptions(request, runtime);
  }

  /**
   * 列出 OAuth2 凭证提供商
   * 
   * @param request - ListOAuth2CredentialProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOAuth2CredentialProvidersResponse
   */
  async listOAuth2CredentialProvidersWithOptions(request: $_model.ListOAuth2CredentialProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOAuth2CredentialProvidersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOAuth2CredentialProviders",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOAuth2CredentialProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListOAuth2CredentialProvidersResponse({}));
  }

  /**
   * 列出 OAuth2 凭证提供商
   * 
   * @param request - ListOAuth2CredentialProvidersRequest
   * @returns ListOAuth2CredentialProvidersResponse
   */
  async listOAuth2CredentialProviders(request: $_model.ListOAuth2CredentialProvidersRequest): Promise<$_model.ListOAuth2CredentialProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOAuth2CredentialProvidersWithOptions(request, runtime);
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListWorkloadIdentitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkloadIdentitiesResponse
   */
  async listWorkloadIdentitiesWithOptions(request: $_model.ListWorkloadIdentitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkloadIdentitiesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkloadIdentities",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkloadIdentitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkloadIdentitiesResponse({}));
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListWorkloadIdentitiesRequest
   * @returns ListWorkloadIdentitiesResponse
   */
  async listWorkloadIdentities(request: $_model.ListWorkloadIdentitiesRequest): Promise<$_model.ListWorkloadIdentitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkloadIdentitiesWithOptions(request, runtime);
  }

  /**
   * 更新一个 API 密钥凭证提供商
   * 
   * @param request - UpdateAPIKeyCredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAPIKeyCredentialProviderResponse
   */
  async updateAPIKeyCredentialProviderWithOptions(request: $_model.UpdateAPIKeyCredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAPIKeyCredentialProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.APIKey)) {
      body["APIKey"] = request.APIKey;
    }

    if (!$dara.isNull(request.APIKeyCredentialProviderName)) {
      body["APIKeyCredentialProviderName"] = request.APIKeyCredentialProviderName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAPIKeyCredentialProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAPIKeyCredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAPIKeyCredentialProviderResponse({}));
  }

  /**
   * 更新一个 API 密钥凭证提供商
   * 
   * @param request - UpdateAPIKeyCredentialProviderRequest
   * @returns UpdateAPIKeyCredentialProviderResponse
   */
  async updateAPIKeyCredentialProvider(request: $_model.UpdateAPIKeyCredentialProviderRequest): Promise<$_model.UpdateAPIKeyCredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAPIKeyCredentialProviderWithOptions(request, runtime);
  }

  /**
   * 更新IdentityProvider
   * 
   * @param tmpReq - UpdateIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProviderWithOptions(tmpReq: $_model.UpdateIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIdentityProviderResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateIdentityProviderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.allowedAudience)) {
      request.allowedAudienceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.allowedAudience, "AllowedAudience", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedAudienceShrink)) {
      body["AllowedAudience"] = request.allowedAudienceShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.discoveryURL)) {
      body["DiscoveryURL"] = request.discoveryURL;
    }

    if (!$dara.isNull(request.identityProviderName)) {
      body["IdentityProviderName"] = request.identityProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIdentityProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIdentityProviderResponse({}));
  }

  /**
   * 更新IdentityProvider
   * 
   * @param request - UpdateIdentityProviderRequest
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProvider(request: $_model.UpdateIdentityProviderRequest): Promise<$_model.UpdateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 修改 OAuth2 凭证提供商
   * 
   * @param tmpReq - UpdateOAuth2CredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOAuth2CredentialProviderResponse
   */
  async updateOAuth2CredentialProviderWithOptions(tmpReq: $_model.UpdateOAuth2CredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOAuth2CredentialProviderResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateOAuth2CredentialProviderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.OAuth2ProviderConfig)) {
      request.OAuth2ProviderConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.OAuth2ProviderConfig, "OAuth2ProviderConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callbackURL)) {
      body["CallbackURL"] = request.callbackURL;
    }

    if (!$dara.isNull(request.credentialProviderVendor)) {
      body["CredentialProviderVendor"] = request.credentialProviderVendor;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.OAuth2CredentialProviderName)) {
      body["OAuth2CredentialProviderName"] = request.OAuth2CredentialProviderName;
    }

    if (!$dara.isNull(request.OAuth2ProviderConfigShrink)) {
      body["OAuth2ProviderConfig"] = request.OAuth2ProviderConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOAuth2CredentialProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOAuth2CredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOAuth2CredentialProviderResponse({}));
  }

  /**
   * 修改 OAuth2 凭证提供商
   * 
   * @param request - UpdateOAuth2CredentialProviderRequest
   * @returns UpdateOAuth2CredentialProviderResponse
   */
  async updateOAuth2CredentialProvider(request: $_model.UpdateOAuth2CredentialProviderRequest): Promise<$_model.UpdateOAuth2CredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOAuth2CredentialProviderWithOptions(request, runtime);
  }

  /**
   * 创建应用
   * 
   * @param tmpReq - UpdateWorkloadIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkloadIdentityResponse
   */
  async updateWorkloadIdentityWithOptions(tmpReq: $_model.UpdateWorkloadIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkloadIdentityResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateWorkloadIdentityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.allowedResourceOAuth2ReturnURLs)) {
      request.allowedResourceOAuth2ReturnURLsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.allowedResourceOAuth2ReturnURLs, "AllowedResourceOAuth2ReturnURLs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowedResourceOAuth2ReturnURLsShrink)) {
      body["AllowedResourceOAuth2ReturnURLs"] = request.allowedResourceOAuth2ReturnURLsShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.identityProviderName)) {
      body["IdentityProviderName"] = request.identityProviderName;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.workloadIdentityName)) {
      body["WorkloadIdentityName"] = request.workloadIdentityName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkloadIdentity",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkloadIdentityResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkloadIdentityResponse({}));
  }

  /**
   * 创建应用
   * 
   * @param request - UpdateWorkloadIdentityRequest
   * @returns UpdateWorkloadIdentityResponse
   */
  async updateWorkloadIdentity(request: $_model.UpdateWorkloadIdentityRequest): Promise<$_model.UpdateWorkloadIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkloadIdentityWithOptions(request, runtime);
  }

}
