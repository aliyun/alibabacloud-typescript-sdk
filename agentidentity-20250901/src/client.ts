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
   * 创建应用
   * 
   * @param request - AddSAMLIdentityProviderCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSAMLIdentityProviderCertificateResponse
   */
  async addSAMLIdentityProviderCertificateWithOptions(request: $_model.AddSAMLIdentityProviderCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSAMLIdentityProviderCertificateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    if (!$dara.isNull(request.x509Certificate)) {
      body["X509Certificate"] = request.x509Certificate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSAMLIdentityProviderCertificate",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSAMLIdentityProviderCertificateResponse>(await this.callApi(params, req, runtime), new $_model.AddSAMLIdentityProviderCertificateResponse({}));
  }

  /**
   * 创建应用
   * 
   * @param request - AddSAMLIdentityProviderCertificateRequest
   * @returns AddSAMLIdentityProviderCertificateResponse
   */
  async addSAMLIdentityProviderCertificate(request: $_model.AddSAMLIdentityProviderCertificateRequest): Promise<$_model.AddSAMLIdentityProviderCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSAMLIdentityProviderCertificateWithOptions(request, runtime);
  }

  /**
   * 策略集关联网关
   * 
   * @param request - AttachPolicySetToGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicySetToGatewayResponse
   */
  async attachPolicySetToGatewayWithOptions(request: $_model.AttachPolicySetToGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachPolicySetToGatewayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enforcementMode)) {
      body["EnforcementMode"] = request.enforcementMode;
    }

    if (!$dara.isNull(request.gatewayArn)) {
      body["GatewayArn"] = request.gatewayArn;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["GatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachPolicySetToGateway",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachPolicySetToGatewayResponse>(await this.callApi(params, req, runtime), new $_model.AttachPolicySetToGatewayResponse({}));
  }

  /**
   * 策略集关联网关
   * 
   * @param request - AttachPolicySetToGatewayRequest
   * @returns AttachPolicySetToGatewayResponse
   */
  async attachPolicySetToGateway(request: $_model.AttachPolicySetToGatewayRequest): Promise<$_model.AttachPolicySetToGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPolicySetToGatewayWithOptions(request, runtime);
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

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
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
   * 创建WorkloadIdentity
   * 
   * @param request - CreateClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientSecretResponse
   */
  async createClientSecretWithOptions(request: $_model.CreateClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClientSecretResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientName)) {
      body["ClientName"] = request.clientName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClientSecret",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.CreateClientSecretResponse({}));
  }

  /**
   * 创建WorkloadIdentity
   * 
   * @param request - CreateClientSecretRequest
   * @returns CreateClientSecretResponse
   */
  async createClientSecret(request: $_model.CreateClientSecretRequest): Promise<$_model.CreateClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientSecretWithOptions(request, runtime);
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

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
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
   * 创建一个权限策略
   * 
   * @param tmpReq - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(tmpReq: $_model.CreatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.definition)) {
      request.definitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.definition, "Definition", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.definitionShrink)) {
      body["Definition"] = request.definitionShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyResponse({}));
  }

  /**
   * 创建一个权限策略
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: $_model.CreatePolicyRequest): Promise<$_model.CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * 创建一个权限策略集合
   * 
   * @param request - CreatePolicySetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicySetResponse
   */
  async createPolicySetWithOptions(request: $_model.CreatePolicySetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicySetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicySet",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicySetResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicySetResponse({}));
  }

  /**
   * 创建一个权限策略集合
   * 
   * @param request - CreatePolicySetRequest
   * @returns CreatePolicySetResponse
   */
  async createPolicySet(request: $_model.CreatePolicySetRequest): Promise<$_model.CreatePolicySetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicySetWithOptions(request, runtime);
  }

  /**
   * 创建Role
   * 
   * @param request - CreateRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoleResponse
   */
  async createRoleWithOptions(request: $_model.CreateRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRole",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRoleResponse({}));
  }

  /**
   * 创建Role
   * 
   * @param request - CreateRoleRequest
   * @returns CreateRoleResponse
   */
  async createRole(request: $_model.CreateRoleRequest): Promise<$_model.CreateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRoleWithOptions(request, runtime);
  }

  /**
   * 策略集关联网关
   * 
   * @param request - CreateRoleAssignmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoleAssignmentResponse
   */
  async createRoleAssignmentWithOptions(request: $_model.CreateRoleAssignmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRoleAssignmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.principalName)) {
      body["PrincipalName"] = request.principalName;
    }

    if (!$dara.isNull(request.principalType)) {
      body["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRoleAssignment",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRoleAssignmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateRoleAssignmentResponse({}));
  }

  /**
   * 策略集关联网关
   * 
   * @param request - CreateRoleAssignmentRequest
   * @returns CreateRoleAssignmentResponse
   */
  async createRoleAssignment(request: $_model.CreateRoleAssignmentRequest): Promise<$_model.CreateRoleAssignmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRoleAssignmentWithOptions(request, runtime);
  }

  /**
   * 创建一个凭证库
   * 
   * @param tmpReq - CreateTokenVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTokenVaultResponse
   */
  async createTokenVaultWithOptions(tmpReq: $_model.CreateTokenVaultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTokenVaultResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTokenVaultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.encryptionConfig)) {
      request.encryptionConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionConfig, "EncryptionConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.encryptionConfigShrink)) {
      body["EncryptionConfig"] = request.encryptionConfigShrink;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTokenVault",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTokenVaultResponse>(await this.callApi(params, req, runtime), new $_model.CreateTokenVaultResponse({}));
  }

  /**
   * 创建一个凭证库
   * 
   * @param request - CreateTokenVaultRequest
   * @returns CreateTokenVaultResponse
   */
  async createTokenVault(request: $_model.CreateTokenVaultRequest): Promise<$_model.CreateTokenVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTokenVaultWithOptions(request, runtime);
  }

  /**
   * 创建用户池用户
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: $_model.CreateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      body["Email"] = request.email;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserResponse({}));
  }

  /**
   * 创建用户池用户
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * 创建UserPool
   * 
   * @param request - CreateUserPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserPoolResponse
   */
  async createUserPoolWithOptions(request: $_model.CreateUserPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserPoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserPool",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserPoolResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserPoolResponse({}));
  }

  /**
   * 创建UserPool
   * 
   * @param request - CreateUserPoolRequest
   * @returns CreateUserPoolResponse
   */
  async createUserPool(request: $_model.CreateUserPoolRequest): Promise<$_model.CreateUserPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserPoolWithOptions(request, runtime);
  }

  /**
   * 创建WorkloadIdentity
   * 
   * @param tmpReq - CreateUserPoolClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserPoolClientResponse
   */
  async createUserPoolClientWithOptions(tmpReq: $_model.CreateUserPoolClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserPoolClientResponse> {
    tmpReq.validate();
    let request = new $_model.CreateUserPoolClientShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.redirectURIs)) {
      request.redirectURIsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirectURIs, "RedirectURIs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessTokenValidity)) {
      body["AccessTokenValidity"] = request.accessTokenValidity;
    }

    if (!$dara.isNull(request.clientName)) {
      body["ClientName"] = request.clientName;
    }

    if (!$dara.isNull(request.enforcePKCE)) {
      body["EnforcePKCE"] = request.enforcePKCE;
    }

    if (!$dara.isNull(request.redirectURIsShrink)) {
      body["RedirectURIs"] = request.redirectURIsShrink;
    }

    if (!$dara.isNull(request.refreshTokenValidity)) {
      body["RefreshTokenValidity"] = request.refreshTokenValidity;
    }

    if (!$dara.isNull(request.secretRequired)) {
      body["SecretRequired"] = request.secretRequired;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserPoolClient",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserPoolClientResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserPoolClientResponse({}));
  }

  /**
   * 创建WorkloadIdentity
   * 
   * @param request - CreateUserPoolClientRequest
   * @returns CreateUserPoolClientResponse
   */
  async createUserPoolClient(request: $_model.CreateUserPoolClientRequest): Promise<$_model.CreateUserPoolClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserPoolClientWithOptions(request, runtime);
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

    if (!$dara.isNull(request.createRAMRole)) {
      body["CreateRAMRole"] = request.createRAMRole;
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

    if (!$dara.isNull(request.sessionBindingEnabled)) {
      body["SessionBindingEnabled"] = request.sessionBindingEnabled;
    }

    if (!$dara.isNull(request.sourceAgentArn)) {
      body["SourceAgentArn"] = request.sourceAgentArn;
    }

    if (!$dara.isNull(request.sourcePlatform)) {
      body["SourcePlatform"] = request.sourcePlatform;
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

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
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
   * @param request - DeleteClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientSecretResponse
   */
  async deleteClientSecretWithOptions(request: $_model.DeleteClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClientSecretResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientName)) {
      body["ClientName"] = request.clientName;
    }

    if (!$dara.isNull(request.clientSecretId)) {
      body["ClientSecretId"] = request.clientSecretId;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClientSecret",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClientSecretResponse({}));
  }

  /**
   * 删除IdentityProvider
   * 
   * @param request - DeleteClientSecretRequest
   * @returns DeleteClientSecretResponse
   */
  async deleteClientSecret(request: $_model.DeleteClientSecretRequest): Promise<$_model.DeleteClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientSecretWithOptions(request, runtime);
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

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
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
   * 删除一个权限策略
   * 
   * @param request - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: $_model.DeletePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyResponse({}));
  }

  /**
   * 删除一个权限策略
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: $_model.DeletePolicyRequest): Promise<$_model.DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * 删除一个权限策略集合
   * 
   * @param request - DeletePolicySetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicySetResponse
   */
  async deletePolicySetWithOptions(request: $_model.DeletePolicySetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicySetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicySet",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicySetResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicySetResponse({}));
  }

  /**
   * 删除一个权限策略集合
   * 
   * @param request - DeletePolicySetRequest
   * @returns DeletePolicySetResponse
   */
  async deletePolicySet(request: $_model.DeletePolicySetRequest): Promise<$_model.DeletePolicySetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicySetWithOptions(request, runtime);
  }

  /**
   * 删除Role
   * 
   * @param request - DeleteRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoleResponse
   */
  async deleteRoleWithOptions(request: $_model.DeleteRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRole",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoleResponse({}));
  }

  /**
   * 删除Role
   * 
   * @param request - DeleteRoleRequest
   * @returns DeleteRoleResponse
   */
  async deleteRole(request: $_model.DeleteRoleRequest): Promise<$_model.DeleteRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoleWithOptions(request, runtime);
  }

  /**
   * 网关取消关联策略集
   * 
   * @param request - DeleteRoleAssignmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoleAssignmentResponse
   */
  async deleteRoleAssignmentWithOptions(request: $_model.DeleteRoleAssignmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoleAssignmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.principalName)) {
      body["PrincipalName"] = request.principalName;
    }

    if (!$dara.isNull(request.principalType)) {
      body["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRoleAssignment",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoleAssignmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoleAssignmentResponse({}));
  }

  /**
   * 网关取消关联策略集
   * 
   * @param request - DeleteRoleAssignmentRequest
   * @returns DeleteRoleAssignmentResponse
   */
  async deleteRoleAssignment(request: $_model.DeleteRoleAssignmentRequest): Promise<$_model.DeleteRoleAssignmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoleAssignmentWithOptions(request, runtime);
  }

  /**
   * 删除WorkloadIdentity
   * 
   * @param request - DeleteSAMLIdentityProviderCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSAMLIdentityProviderCertificateResponse
   */
  async deleteSAMLIdentityProviderCertificateWithOptions(request: $_model.DeleteSAMLIdentityProviderCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSAMLIdentityProviderCertificateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certificateId)) {
      body["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSAMLIdentityProviderCertificate",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSAMLIdentityProviderCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSAMLIdentityProviderCertificateResponse({}));
  }

  /**
   * 删除WorkloadIdentity
   * 
   * @param request - DeleteSAMLIdentityProviderCertificateRequest
   * @returns DeleteSAMLIdentityProviderCertificateResponse
   */
  async deleteSAMLIdentityProviderCertificate(request: $_model.DeleteSAMLIdentityProviderCertificateRequest): Promise<$_model.DeleteSAMLIdentityProviderCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSAMLIdentityProviderCertificateWithOptions(request, runtime);
  }

  /**
   * 删除一个指定的凭证库。
   * 
   * @param request - DeleteTokenVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTokenVaultResponse
   */
  async deleteTokenVaultWithOptions(request: $_model.DeleteTokenVaultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTokenVaultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTokenVault",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTokenVaultResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTokenVaultResponse({}));
  }

  /**
   * 删除一个指定的凭证库。
   * 
   * @param request - DeleteTokenVaultRequest
   * @returns DeleteTokenVaultResponse
   */
  async deleteTokenVault(request: $_model.DeleteTokenVaultRequest): Promise<$_model.DeleteTokenVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTokenVaultWithOptions(request, runtime);
  }

  /**
   * 删除User
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: $_model.DeleteUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserResponse({}));
  }

  /**
   * 删除User
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * 删除UserPool
   * 
   * @param request - DeleteUserPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserPoolResponse
   */
  async deleteUserPoolWithOptions(request: $_model.DeleteUserPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserPoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserPool",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserPoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserPoolResponse({}));
  }

  /**
   * 删除UserPool
   * 
   * @param request - DeleteUserPoolRequest
   * @returns DeleteUserPoolResponse
   */
  async deleteUserPool(request: $_model.DeleteUserPoolRequest): Promise<$_model.DeleteUserPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserPoolWithOptions(request, runtime);
  }

  /**
   * 删除WorkloadIdentity
   * 
   * @param request - DeleteUserPoolClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserPoolClientResponse
   */
  async deleteUserPoolClientWithOptions(request: $_model.DeleteUserPoolClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserPoolClientResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientName)) {
      body["ClientName"] = request.clientName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserPoolClient",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserPoolClientResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserPoolClientResponse({}));
  }

  /**
   * 删除WorkloadIdentity
   * 
   * @param request - DeleteUserPoolClientRequest
   * @returns DeleteUserPoolClientResponse
   */
  async deleteUserPoolClient(request: $_model.DeleteUserPoolClientRequest): Promise<$_model.DeleteUserPoolClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserPoolClientWithOptions(request, runtime);
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
   * 网关取消关联策略集
   * 
   * @param request - DetachPolicySetFromGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicySetFromGatewayResponse
   */
  async detachPolicySetFromGatewayWithOptions(request: $_model.DetachPolicySetFromGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachPolicySetFromGatewayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayArn)) {
      body["GatewayArn"] = request.gatewayArn;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["GatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachPolicySetFromGateway",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachPolicySetFromGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DetachPolicySetFromGatewayResponse({}));
  }

  /**
   * 网关取消关联策略集
   * 
   * @param request - DetachPolicySetFromGatewayRequest
   * @returns DetachPolicySetFromGatewayResponse
   */
  async detachPolicySetFromGateway(request: $_model.DetachPolicySetFromGatewayRequest): Promise<$_model.DetachPolicySetFromGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPolicySetFromGatewayWithOptions(request, runtime);
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

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
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
   * 查询网关策略配置
   * 
   * @param request - GetGatewayPolicyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayPolicyConfigResponse
   */
  async getGatewayPolicyConfigWithOptions(request: $_model.GetGatewayPolicyConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayPolicyConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayArn)) {
      body["GatewayArn"] = request.gatewayArn;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["GatewayType"] = request.gatewayType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGatewayPolicyConfig",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayPolicyConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayPolicyConfigResponse({}));
  }

  /**
   * 查询网关策略配置
   * 
   * @param request - GetGatewayPolicyConfigRequest
   * @returns GetGatewayPolicyConfigResponse
   */
  async getGatewayPolicyConfig(request: $_model.GetGatewayPolicyConfigRequest): Promise<$_model.GetGatewayPolicyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGatewayPolicyConfigWithOptions(request, runtime);
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
   * 获取用户池登录相关配置
   * 
   * @param request - GetLoginPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginPreferenceResponse
   */
  async getLoginPreferenceWithOptions(request: $_model.GetLoginPreferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoginPreferenceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoginPreference",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLoginPreferenceResponse>(await this.callApi(params, req, runtime), new $_model.GetLoginPreferenceResponse({}));
  }

  /**
   * 获取用户池登录相关配置
   * 
   * @param request - GetLoginPreferenceRequest
   * @returns GetLoginPreferenceResponse
   */
  async getLoginPreference(request: $_model.GetLoginPreferenceRequest): Promise<$_model.GetLoginPreferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoginPreferenceWithOptions(request, runtime);
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

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
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
   * 查询一个 权限策略
   * 
   * @param request - GetPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyResponse
   */
  async getPolicyWithOptions(request: $_model.GetPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicy",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyResponse({}));
  }

  /**
   * 查询一个 权限策略
   * 
   * @param request - GetPolicyRequest
   * @returns GetPolicyResponse
   */
  async getPolicy(request: $_model.GetPolicyRequest): Promise<$_model.GetPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  /**
   * 查询一个 权限策略集合
   * 
   * @param request - GetPolicySetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicySetResponse
   */
  async getPolicySetWithOptions(request: $_model.GetPolicySetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicySetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicySet",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicySetResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicySetResponse({}));
  }

  /**
   * 查询一个 权限策略集合
   * 
   * @param request - GetPolicySetRequest
   * @returns GetPolicySetResponse
   */
  async getPolicySet(request: $_model.GetPolicySetRequest): Promise<$_model.GetPolicySetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicySetWithOptions(request, runtime);
  }

  /**
   * 获取Role
   * 
   * @param request - GetRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleResponse
   */
  async getRoleWithOptions(request: $_model.GetRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRole",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRoleResponse>(await this.callApi(params, req, runtime), new $_model.GetRoleResponse({}));
  }

  /**
   * 获取Role
   * 
   * @param request - GetRoleRequest
   * @returns GetRoleResponse
   */
  async getRole(request: $_model.GetRoleRequest): Promise<$_model.GetRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRoleWithOptions(request, runtime);
  }

  /**
   * 创建应用
   * 
   * @param request - GetSAMLIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSAMLIdentityProviderResponse
   */
  async getSAMLIdentityProviderWithOptions(request: $_model.GetSAMLIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSAMLIdentityProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSAMLIdentityProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSAMLIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetSAMLIdentityProviderResponse({}));
  }

  /**
   * 创建应用
   * 
   * @param request - GetSAMLIdentityProviderRequest
   * @returns GetSAMLIdentityProviderResponse
   */
  async getSAMLIdentityProvider(request: $_model.GetSAMLIdentityProviderRequest): Promise<$_model.GetSAMLIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSAMLIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 创建应用
   * 
   * @param request - GetSAMLServiceProviderInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSAMLServiceProviderInfoResponse
   */
  async getSAMLServiceProviderInfoWithOptions(request: $_model.GetSAMLServiceProviderInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSAMLServiceProviderInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSAMLServiceProviderInfo",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSAMLServiceProviderInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetSAMLServiceProviderInfoResponse({}));
  }

  /**
   * 创建应用
   * 
   * @param request - GetSAMLServiceProviderInfoRequest
   * @returns GetSAMLServiceProviderInfoResponse
   */
  async getSAMLServiceProviderInfo(request: $_model.GetSAMLServiceProviderInfoRequest): Promise<$_model.GetSAMLServiceProviderInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSAMLServiceProviderInfoWithOptions(request, runtime);
  }

  /**
   * 获取指定的身份提供商
   * 
   * @param request - GetSpecificIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSpecificIdentityProviderResponse
   */
  async getSpecificIdentityProviderWithOptions(request: $_model.GetSpecificIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSpecificIdentityProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identityProviderType)) {
      body["IdentityProviderType"] = request.identityProviderType;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSpecificIdentityProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSpecificIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetSpecificIdentityProviderResponse({}));
  }

  /**
   * 获取指定的身份提供商
   * 
   * @param request - GetSpecificIdentityProviderRequest
   * @returns GetSpecificIdentityProviderResponse
   */
  async getSpecificIdentityProvider(request: $_model.GetSpecificIdentityProviderRequest): Promise<$_model.GetSpecificIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSpecificIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 获取指定凭证库的详细配置。
   * 
   * @param request - GetTokenVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenVaultResponse
   */
  async getTokenVaultWithOptions(request: $_model.GetTokenVaultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenVaultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTokenVault",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenVaultResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenVaultResponse({}));
  }

  /**
   * 获取指定凭证库的详细配置。
   * 
   * @param request - GetTokenVaultRequest
   * @returns GetTokenVaultResponse
   */
  async getTokenVault(request: $_model.GetTokenVaultRequest): Promise<$_model.GetTokenVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTokenVaultWithOptions(request, runtime);
  }

  /**
   * 获取用户
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserResponse>(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * 获取用户
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * 获取UserPool
   * 
   * @param request - GetUserPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserPoolResponse
   */
  async getUserPoolWithOptions(request: $_model.GetUserPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserPoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserPool",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserPoolResponse>(await this.callApi(params, req, runtime), new $_model.GetUserPoolResponse({}));
  }

  /**
   * 获取UserPool
   * 
   * @param request - GetUserPoolRequest
   * @returns GetUserPoolResponse
   */
  async getUserPool(request: $_model.GetUserPoolRequest): Promise<$_model.GetUserPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserPoolWithOptions(request, runtime);
  }

  /**
   * 创建应用
   * 
   * @param request - GetUserPoolClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserPoolClientResponse
   */
  async getUserPoolClientWithOptions(request: $_model.GetUserPoolClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserPoolClientResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientName)) {
      body["ClientName"] = request.clientName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserPoolClient",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserPoolClientResponse>(await this.callApi(params, req, runtime), new $_model.GetUserPoolClientResponse({}));
  }

  /**
   * 创建应用
   * 
   * @param request - GetUserPoolClientRequest
   * @returns GetUserPoolClientResponse
   */
  async getUserPoolClient(request: $_model.GetUserPoolClientRequest): Promise<$_model.GetUserPoolClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserPoolClientWithOptions(request, runtime);
  }

  /**
   * 获取UserPool
   * 
   * @param request - GetUserPoolSyncJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserPoolSyncJobResponse
   */
  async getUserPoolSyncJobWithOptions(request: $_model.GetUserPoolSyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserPoolSyncJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.synchronizationJobId)) {
      body["SynchronizationJobId"] = request.synchronizationJobId;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserPoolSyncJob",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserPoolSyncJobResponse>(await this.callApi(params, req, runtime), new $_model.GetUserPoolSyncJobResponse({}));
  }

  /**
   * 获取UserPool
   * 
   * @param request - GetUserPoolSyncJobRequest
   * @returns GetUserPoolSyncJobResponse
   */
  async getUserPoolSyncJob(request: $_model.GetUserPoolSyncJobRequest): Promise<$_model.GetUserPoolSyncJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserPoolSyncJobWithOptions(request, runtime);
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

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
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
   * @param request - ListClientSecretsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientSecretsResponse
   */
  async listClientSecretsWithOptions(request: $_model.ListClientSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClientSecretsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientName)) {
      body["ClientName"] = request.clientName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClientSecrets",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClientSecretsResponse>(await this.callApi(params, req, runtime), new $_model.ListClientSecretsResponse({}));
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListClientSecretsRequest
   * @returns ListClientSecretsResponse
   */
  async listClientSecrets(request: $_model.ListClientSecretsRequest): Promise<$_model.ListClientSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClientSecretsWithOptions(request, runtime);
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

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
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
   * 列出权限策略
   * 
   * @param request - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: $_model.ListPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicies",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListPoliciesResponse({}));
  }

  /**
   * 列出权限策略
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * 列出网关策略配置
   * 
   * @param request - ListPolicySetAttachedGatewaysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicySetAttachedGatewaysResponse
   */
  async listPolicySetAttachedGatewaysWithOptions(request: $_model.ListPolicySetAttachedGatewaysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicySetAttachedGatewaysResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayType)) {
      body["GatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicySetAttachedGateways",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicySetAttachedGatewaysResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicySetAttachedGatewaysResponse({}));
  }

  /**
   * 列出网关策略配置
   * 
   * @param request - ListPolicySetAttachedGatewaysRequest
   * @returns ListPolicySetAttachedGatewaysResponse
   */
  async listPolicySetAttachedGateways(request: $_model.ListPolicySetAttachedGatewaysRequest): Promise<$_model.ListPolicySetAttachedGatewaysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicySetAttachedGatewaysWithOptions(request, runtime);
  }

  /**
   * 列出权限策略集合
   * 
   * @param request - ListPolicySetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicySetsResponse
   */
  async listPolicySetsWithOptions(request: $_model.ListPolicySetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicySetsResponse> {
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
      action: "ListPolicySets",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicySetsResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicySetsResponse({}));
  }

  /**
   * 列出权限策略集合
   * 
   * @param request - ListPolicySetsRequest
   * @returns ListPolicySetsResponse
   */
  async listPolicySets(request: $_model.ListPolicySetsRequest): Promise<$_model.ListPolicySetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicySetsWithOptions(request, runtime);
  }

  /**
   * 列出网关策略配置
   * 
   * @param request - ListRoleAssignmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRoleAssignmentsResponse
   */
  async listRoleAssignmentsWithOptions(request: $_model.ListRoleAssignmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRoleAssignmentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.principalName)) {
      body["PrincipalName"] = request.principalName;
    }

    if (!$dara.isNull(request.principalType)) {
      body["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoleAssignments",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRoleAssignmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListRoleAssignmentsResponse({}));
  }

  /**
   * 列出网关策略配置
   * 
   * @param request - ListRoleAssignmentsRequest
   * @returns ListRoleAssignmentsResponse
   */
  async listRoleAssignments(request: $_model.ListRoleAssignmentsRequest): Promise<$_model.ListRoleAssignmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRoleAssignmentsWithOptions(request, runtime);
  }

  /**
   * 列出Roles
   * 
   * @param request - ListRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(request: $_model.ListRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRolesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListRolesResponse({}));
  }

  /**
   * 列出Roles
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: $_model.ListRolesRequest): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListSAMLIdentityProviderCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSAMLIdentityProviderCertificatesResponse
   */
  async listSAMLIdentityProviderCertificatesWithOptions(request: $_model.ListSAMLIdentityProviderCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSAMLIdentityProviderCertificatesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSAMLIdentityProviderCertificates",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSAMLIdentityProviderCertificatesResponse>(await this.callApi(params, req, runtime), new $_model.ListSAMLIdentityProviderCertificatesResponse({}));
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListSAMLIdentityProviderCertificatesRequest
   * @returns ListSAMLIdentityProviderCertificatesResponse
   */
  async listSAMLIdentityProviderCertificates(request: $_model.ListSAMLIdentityProviderCertificatesRequest): Promise<$_model.ListSAMLIdentityProviderCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSAMLIdentityProviderCertificatesWithOptions(request, runtime);
  }

  /**
   * 分页列出账户下所有的 API 密钥凭证
   * 
   * @param request - ListTokenVaultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTokenVaultsResponse
   */
  async listTokenVaultsWithOptions(request: $_model.ListTokenVaultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTokenVaultsResponse> {
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
      action: "ListTokenVaults",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTokenVaultsResponse>(await this.callApi(params, req, runtime), new $_model.ListTokenVaultsResponse({}));
  }

  /**
   * 分页列出账户下所有的 API 密钥凭证
   * 
   * @param request - ListTokenVaultsRequest
   * @returns ListTokenVaultsResponse
   */
  async listTokenVaults(request: $_model.ListTokenVaultsRequest): Promise<$_model.ListTokenVaultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTokenVaultsWithOptions(request, runtime);
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListUserPoolClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserPoolClientsResponse
   */
  async listUserPoolClientsWithOptions(request: $_model.ListUserPoolClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserPoolClientsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserPoolClients",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserPoolClientsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserPoolClientsResponse({}));
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListUserPoolClientsRequest
   * @returns ListUserPoolClientsResponse
   */
  async listUserPoolClients(request: $_model.ListUserPoolClientsRequest): Promise<$_model.ListUserPoolClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserPoolClientsWithOptions(request, runtime);
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListUserPoolSyncJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserPoolSyncJobsResponse
   */
  async listUserPoolSyncJobsWithOptions(request: $_model.ListUserPoolSyncJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserPoolSyncJobsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserPoolSyncJobs",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserPoolSyncJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserPoolSyncJobsResponse({}));
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListUserPoolSyncJobsRequest
   * @returns ListUserPoolSyncJobsResponse
   */
  async listUserPoolSyncJobs(request: $_model.ListUserPoolSyncJobsRequest): Promise<$_model.ListUserPoolSyncJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserPoolSyncJobsWithOptions(request, runtime);
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListUserPoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserPoolsResponse
   */
  async listUserPoolsWithOptions(request: $_model.ListUserPoolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserPoolsResponse> {
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
      action: "ListUserPools",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserPoolsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserPoolsResponse({}));
  }

  /**
   * 列出IdentityProvider
   * 
   * @param request - ListUserPoolsRequest
   * @returns ListUserPoolsResponse
   */
  async listUserPools(request: $_model.ListUserPoolsRequest): Promise<$_model.ListUserPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserPoolsWithOptions(request, runtime);
  }

  /**
   * 列出用户
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * 列出用户
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
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
   * 创建UserPool
   * 
   * @param request - RunUserPoolSyncJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunUserPoolSyncJobResponse
   */
  async runUserPoolSyncJobWithOptions(request: $_model.RunUserPoolSyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunUserPoolSyncJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identityProviderType)) {
      body["IdentityProviderType"] = request.identityProviderType;
    }

    if (!$dara.isNull(request.maxSyncUsers)) {
      body["MaxSyncUsers"] = request.maxSyncUsers;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunUserPoolSyncJob",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunUserPoolSyncJobResponse>(await this.callApi(params, req, runtime), new $_model.RunUserPoolSyncJobResponse({}));
  }

  /**
   * 创建UserPool
   * 
   * @param request - RunUserPoolSyncJobRequest
   * @returns RunUserPoolSyncJobResponse
   */
  async runUserPoolSyncJob(request: $_model.RunUserPoolSyncJobRequest): Promise<$_model.RunUserPoolSyncJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runUserPoolSyncJobWithOptions(request, runtime);
  }

  /**
   * 创建WorkloadIdentity
   * 
   * @param tmpReq - SetSAMLIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSAMLIdentityProviderResponse
   */
  async setSAMLIdentityProviderWithOptions(tmpReq: $_model.SetSAMLIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSAMLIdentityProviderResponse> {
    tmpReq.validate();
    let request = new $_model.SetSAMLIdentityProviderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.x509Certificates)) {
      request.x509CertificatesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.x509Certificates, "X509Certificates", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.JITProvisionStatus)) {
      body["JITProvisionStatus"] = request.JITProvisionStatus;
    }

    if (!$dara.isNull(request.JITUpdateStatus)) {
      body["JITUpdateStatus"] = request.JITUpdateStatus;
    }

    if (!$dara.isNull(request.loginURL)) {
      body["LoginURL"] = request.loginURL;
    }

    if (!$dara.isNull(request.SAMLBindingType)) {
      body["SAMLBindingType"] = request.SAMLBindingType;
    }

    if (!$dara.isNull(request.SSOStatus)) {
      body["SSOStatus"] = request.SSOStatus;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    if (!$dara.isNull(request.x509CertificatesShrink)) {
      body["X509Certificates"] = request.x509CertificatesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSAMLIdentityProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSAMLIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.SetSAMLIdentityProviderResponse({}));
  }

  /**
   * 创建WorkloadIdentity
   * 
   * @param request - SetSAMLIdentityProviderRequest
   * @returns SetSAMLIdentityProviderResponse
   */
  async setSAMLIdentityProvider(request: $_model.SetSAMLIdentityProviderRequest): Promise<$_model.SetSAMLIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSAMLIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 通用IdP配置
   * 
   * @param request - SetSpecificIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSpecificIdentityProviderResponse
   */
  async setSpecificIdentityProviderWithOptions(request: $_model.SetSpecificIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSpecificIdentityProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.IDPMetadata)) {
      body["IDPMetadata"] = request.IDPMetadata;
    }

    if (!$dara.isNull(request.identityProviderType)) {
      body["IdentityProviderType"] = request.identityProviderType;
    }

    if (!$dara.isNull(request.SSOStatus)) {
      body["SSOStatus"] = request.SSOStatus;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSpecificIdentityProvider",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSpecificIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.SetSpecificIdentityProviderResponse({}));
  }

  /**
   * 通用IdP配置
   * 
   * @param request - SetSpecificIdentityProviderRequest
   * @returns SetSpecificIdentityProviderResponse
   */
  async setSpecificIdentityProvider(request: $_model.SetSpecificIdentityProviderRequest): Promise<$_model.SetSpecificIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSpecificIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 修改用户登录密码
   * 
   * @param request - SetUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserPasswordResponse
   */
  async setUserPasswordWithOptions(request: $_model.SetUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetUserPasswordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.generateRandomPassword)) {
      body["GenerateRandomPassword"] = request.generateRandomPassword;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetUserPassword",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.SetUserPasswordResponse({}));
  }

  /**
   * 修改用户登录密码
   * 
   * @param request - SetUserPasswordRequest
   * @returns SetUserPasswordResponse
   */
  async setUserPassword(request: $_model.SetUserPasswordRequest): Promise<$_model.SetUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setUserPasswordWithOptions(request, runtime);
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

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
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
   * 查询网关策略配置
   * 
   * @param request - UpdateGatewayPolicyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayPolicyConfigResponse
   */
  async updateGatewayPolicyConfigWithOptions(request: $_model.UpdateGatewayPolicyConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayPolicyConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enforcementMode)) {
      body["EnforcementMode"] = request.enforcementMode;
    }

    if (!$dara.isNull(request.gatewayArn)) {
      body["GatewayArn"] = request.gatewayArn;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["GatewayType"] = request.gatewayType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayPolicyConfig",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayPolicyConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayPolicyConfigResponse({}));
  }

  /**
   * 查询网关策略配置
   * 
   * @param request - UpdateGatewayPolicyConfigRequest
   * @returns UpdateGatewayPolicyConfigResponse
   */
  async updateGatewayPolicyConfig(request: $_model.UpdateGatewayPolicyConfigRequest): Promise<$_model.UpdateGatewayPolicyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGatewayPolicyConfigWithOptions(request, runtime);
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
   * 更新用户池登录配置
   * 
   * @param tmpReq - UpdateLoginPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoginPreferenceResponse
   */
  async updateLoginPreferenceWithOptions(tmpReq: $_model.UpdateLoginPreferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoginPreferenceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLoginPreferenceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.loginPreference)) {
      request.loginPreferenceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.loginPreference, "LoginPreference", "json");
    }

    let query = { };
    if (!$dara.isNull(request.loginPreferenceShrink)) {
      query["LoginPreference"] = request.loginPreferenceShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoginPreference",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLoginPreferenceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLoginPreferenceResponse({}));
  }

  /**
   * 更新用户池登录配置
   * 
   * @param request - UpdateLoginPreferenceRequest
   * @returns UpdateLoginPreferenceResponse
   */
  async updateLoginPreference(request: $_model.UpdateLoginPreferenceRequest): Promise<$_model.UpdateLoginPreferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoginPreferenceWithOptions(request, runtime);
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

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
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
   * 更新一个权限策略
   * 
   * @param tmpReq - UpdatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyResponse
   */
  async updatePolicyWithOptions(tmpReq: $_model.UpdatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolicyResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.definition)) {
      request.definitionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.definition, "Definition", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.definitionShrink)) {
      body["Definition"] = request.definitionShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.policyName)) {
      body["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolicy",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePolicyResponse({}));
  }

  /**
   * 更新一个权限策略
   * 
   * @param request - UpdatePolicyRequest
   * @returns UpdatePolicyResponse
   */
  async updatePolicy(request: $_model.UpdatePolicyRequest): Promise<$_model.UpdatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePolicyWithOptions(request, runtime);
  }

  /**
   * 更新一个权限策略集合
   * 
   * @param request - UpdatePolicySetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicySetResponse
   */
  async updatePolicySetWithOptions(request: $_model.UpdatePolicySetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolicySetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.policySetName)) {
      body["PolicySetName"] = request.policySetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolicySet",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePolicySetResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePolicySetResponse({}));
  }

  /**
   * 更新一个权限策略集合
   * 
   * @param request - UpdatePolicySetRequest
   * @returns UpdatePolicySetResponse
   */
  async updatePolicySet(request: $_model.UpdatePolicySetRequest): Promise<$_model.UpdatePolicySetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePolicySetWithOptions(request, runtime);
  }

  /**
   * 更新Role
   * 
   * @param request - UpdateRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRoleResponse
   */
  async updateRoleWithOptions(request: $_model.UpdateRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRole",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRoleResponse({}));
  }

  /**
   * 更新Role
   * 
   * @param request - UpdateRoleRequest
   * @returns UpdateRoleResponse
   */
  async updateRole(request: $_model.UpdateRoleRequest): Promise<$_model.UpdateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRoleWithOptions(request, runtime);
  }

  /**
   * 更新凭证库。
   * 
   * @param request - UpdateTokenVaultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTokenVaultResponse
   */
  async updateTokenVaultWithOptions(request: $_model.UpdateTokenVaultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTokenVaultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.tokenVaultName)) {
      body["TokenVaultName"] = request.tokenVaultName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTokenVault",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTokenVaultResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTokenVaultResponse({}));
  }

  /**
   * 更新凭证库。
   * 
   * @param request - UpdateTokenVaultRequest
   * @returns UpdateTokenVaultResponse
   */
  async updateTokenVault(request: $_model.UpdateTokenVaultRequest): Promise<$_model.UpdateTokenVaultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTokenVaultWithOptions(request, runtime);
  }

  /**
   * 更新用户池用户
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      body["Email"] = request.email;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserResponse({}));
  }

  /**
   * 更新用户池用户
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * 更新IdentityProvider
   * 
   * @param request - UpdateUserPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserPoolResponse
   */
  async updateUserPoolWithOptions(request: $_model.UpdateUserPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserPoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserPool",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserPoolResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserPoolResponse({}));
  }

  /**
   * 更新IdentityProvider
   * 
   * @param request - UpdateUserPoolRequest
   * @returns UpdateUserPoolResponse
   */
  async updateUserPool(request: $_model.UpdateUserPoolRequest): Promise<$_model.UpdateUserPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserPoolWithOptions(request, runtime);
  }

  /**
   * 创建应用
   * 
   * @param tmpReq - UpdateUserPoolClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserPoolClientResponse
   */
  async updateUserPoolClientWithOptions(tmpReq: $_model.UpdateUserPoolClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserPoolClientResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateUserPoolClientShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.redirectURIs)) {
      request.redirectURIsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirectURIs, "RedirectURIs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessTokenValidity)) {
      body["AccessTokenValidity"] = request.accessTokenValidity;
    }

    if (!$dara.isNull(request.clientName)) {
      body["ClientName"] = request.clientName;
    }

    if (!$dara.isNull(request.enforcePKCE)) {
      body["EnforcePKCE"] = request.enforcePKCE;
    }

    if (!$dara.isNull(request.redirectURIsShrink)) {
      body["RedirectURIs"] = request.redirectURIsShrink;
    }

    if (!$dara.isNull(request.refreshTokenValidity)) {
      body["RefreshTokenValidity"] = request.refreshTokenValidity;
    }

    if (!$dara.isNull(request.secretRequired)) {
      body["SecretRequired"] = request.secretRequired;
    }

    if (!$dara.isNull(request.userPoolName)) {
      body["UserPoolName"] = request.userPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserPoolClient",
      version: "2025-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserPoolClientResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserPoolClientResponse({}));
  }

  /**
   * 创建应用
   * 
   * @param request - UpdateUserPoolClientRequest
   * @returns UpdateUserPoolClientResponse
   */
  async updateUserPoolClient(request: $_model.UpdateUserPoolClientRequest): Promise<$_model.UpdateUserPoolClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserPoolClientWithOptions(request, runtime);
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

    if (!$dara.isNull(request.sessionBindingEnabled)) {
      body["SessionBindingEnabled"] = request.sessionBindingEnabled;
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
