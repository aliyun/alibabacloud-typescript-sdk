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
    this._endpoint = this.getEndpoint("ims", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 为OIDC身份提供商添加指定客户端ID
   * 
   * @param request - AddClientIdToOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddClientIdToOIDCProviderResponse
   */
  async addClientIdToOIDCProviderWithOptions(request: $_model.AddClientIdToOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddClientIdToOIDCProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddClientIdToOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddClientIdToOIDCProviderResponse>(await this.callApi(params, req, runtime), new $_model.AddClientIdToOIDCProviderResponse({}));
  }

  /**
   * 为OIDC身份提供商添加指定客户端ID
   * 
   * @param request - AddClientIdToOIDCProviderRequest
   * @returns AddClientIdToOIDCProviderResponse
   */
  async addClientIdToOIDCProvider(request: $_model.AddClientIdToOIDCProviderRequest): Promise<$_model.AddClientIdToOIDCProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addClientIdToOIDCProviderWithOptions(request, runtime);
  }

  /**
   * 为OIDC身份提供商添加验证指纹
   * 
   * @param request - AddFingerprintToOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFingerprintToOIDCProviderResponse
   */
  async addFingerprintToOIDCProviderWithOptions(request: $_model.AddFingerprintToOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFingerprintToOIDCProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fingerprint)) {
      query["Fingerprint"] = request.fingerprint;
    }

    if (!$dara.isNull(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFingerprintToOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFingerprintToOIDCProviderResponse>(await this.callApi(params, req, runtime), new $_model.AddFingerprintToOIDCProviderResponse({}));
  }

  /**
   * 为OIDC身份提供商添加验证指纹
   * 
   * @param request - AddFingerprintToOIDCProviderRequest
   * @returns AddFingerprintToOIDCProviderResponse
   */
  async addFingerprintToOIDCProvider(request: $_model.AddFingerprintToOIDCProviderRequest): Promise<$_model.AddFingerprintToOIDCProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFingerprintToOIDCProviderWithOptions(request, runtime);
  }

  /**
   * 将RAM用户添加到指定的用户组
   * 
   * @param request - AddUserToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToGroupResponse
   */
  async addUserToGroupWithOptions(request: $_model.AddUserToGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToGroup",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserToGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddUserToGroupResponse({}));
  }

  /**
   * 将RAM用户添加到指定的用户组
   * 
   * @param request - AddUserToGroupRequest
   * @returns AddUserToGroupResponse
   */
  async addUserToGroup(request: $_model.AddUserToGroupRequest): Promise<$_model.AddUserToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToGroupWithOptions(request, runtime);
  }

  /**
   * 为RAM用户绑定多因素认证设备
   * 
   * @param request - BindMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindMFADeviceResponse
   */
  async bindMFADeviceWithOptions(request: $_model.BindMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindMFADeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationCode1)) {
      query["AuthenticationCode1"] = request.authenticationCode1;
    }

    if (!$dara.isNull(request.authenticationCode2)) {
      query["AuthenticationCode2"] = request.authenticationCode2;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindMFADevice",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindMFADeviceResponse>(await this.callApi(params, req, runtime), new $_model.BindMFADeviceResponse({}));
  }

  /**
   * 为RAM用户绑定多因素认证设备
   * 
   * @param request - BindMFADeviceRequest
   * @returns BindMFADeviceResponse
   */
  async bindMFADevice(request: $_model.BindMFADeviceRequest): Promise<$_model.BindMFADeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindMFADeviceWithOptions(request, runtime);
  }

  /**
   * 修改RAM用户的登录密码
   * 
   * @param request - ChangePasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangePasswordResponse
   */
  async changePasswordWithOptions(request: $_model.ChangePasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangePasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!$dara.isNull(request.oldPassword)) {
      query["OldPassword"] = request.oldPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangePassword",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangePasswordResponse>(await this.callApi(params, req, runtime), new $_model.ChangePasswordResponse({}));
  }

  /**
   * 修改RAM用户的登录密码
   * 
   * @param request - ChangePasswordRequest
   * @returns ChangePasswordResponse
   */
  async changePassword(request: $_model.ChangePasswordRequest): Promise<$_model.ChangePasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changePasswordWithOptions(request, runtime);
  }

  /**
   * 创建主账号或RAM用户访问密钥
   * 
   * @param request - CreateAccessKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessKeyResponse
   */
  async createAccessKeyWithOptions(request: $_model.CreateAccessKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessKey",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessKeyResponse({}));
  }

  /**
   * 创建主账号或RAM用户访问密钥
   * 
   * @param request - CreateAccessKeyRequest
   * @returns CreateAccessKeyResponse
   */
  async createAccessKey(request: $_model.CreateAccessKeyRequest): Promise<$_model.CreateAccessKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessKeyWithOptions(request, runtime);
  }

  /**
   * 为指定的应用创建应用密钥
   * 
   * @param request - CreateAppSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppSecretResponse
   */
  async createAppSecretWithOptions(request: $_model.CreateAppSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppSecret",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppSecretResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppSecretResponse({}));
  }

  /**
   * 为指定的应用创建应用密钥
   * 
   * @param request - CreateAppSecretRequest
   * @returns CreateAppSecretResponse
   */
  async createAppSecret(request: $_model.CreateAppSecretRequest): Promise<$_model.CreateAppSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppSecretWithOptions(request, runtime);
  }

  /**
   * Creates an application.
   * 
   * @param request - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(request: $_model.CreateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessTokenValidity)) {
      query["AccessTokenValidity"] = request.accessTokenValidity;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.isMultiTenant)) {
      query["IsMultiTenant"] = request.isMultiTenant;
    }

    if (!$dara.isNull(request.predefinedScopes)) {
      query["PredefinedScopes"] = request.predefinedScopes;
    }

    if (!$dara.isNull(request.protocolVersion)) {
      query["ProtocolVersion"] = request.protocolVersion;
    }

    if (!$dara.isNull(request.redirectUris)) {
      query["RedirectUris"] = request.redirectUris;
    }

    if (!$dara.isNull(request.refreshTokenValidity)) {
      query["RefreshTokenValidity"] = request.refreshTokenValidity;
    }

    if (!$dara.isNull(request.requiredScopes)) {
      query["RequiredScopes"] = request.requiredScopes;
    }

    if (!$dara.isNull(request.secretRequired)) {
      query["SecretRequired"] = request.secretRequired;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationResponse({}));
  }

  /**
   * Creates an application.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: $_model.CreateApplicationRequest): Promise<$_model.CreateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * 创建用户组
   * 
   * @param request - CreateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: $_model.CreateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateGroupResponse({}));
  }

  /**
   * 创建用户组
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * Creates a logon configuration for a Resource Access Management (RAM) user.
   * 
   * @param request - CreateLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoginProfileResponse
   */
  async createLoginProfileWithOptions(request: $_model.CreateLoginProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoginProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.MFABindRequired)) {
      query["MFABindRequired"] = request.MFABindRequired;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordResetRequired)) {
      query["PasswordResetRequired"] = request.passwordResetRequired;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoginProfile",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoginProfileResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoginProfileResponse({}));
  }

  /**
   * Creates a logon configuration for a Resource Access Management (RAM) user.
   * 
   * @param request - CreateLoginProfileRequest
   * @returns CreateLoginProfileResponse
   */
  async createLoginProfile(request: $_model.CreateLoginProfileRequest): Promise<$_model.CreateLoginProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoginProfileWithOptions(request, runtime);
  }

  /**
   * 创建OIDC身份供应商
   * 
   * @param request - CreateOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOIDCProviderResponse
   */
  async createOIDCProviderWithOptions(request: $_model.CreateOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOIDCProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIds)) {
      query["ClientIds"] = request.clientIds;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fingerprints)) {
      query["Fingerprints"] = request.fingerprints;
    }

    if (!$dara.isNull(request.issuanceLimitTime)) {
      query["IssuanceLimitTime"] = request.issuanceLimitTime;
    }

    if (!$dara.isNull(request.issuerUrl)) {
      query["IssuerUrl"] = request.issuerUrl;
    }

    if (!$dara.isNull(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOIDCProviderResponse>(await this.callApi(params, req, runtime), new $_model.CreateOIDCProviderResponse({}));
  }

  /**
   * 创建OIDC身份供应商
   * 
   * @param request - CreateOIDCProviderRequest
   * @returns CreateOIDCProviderResponse
   */
  async createOIDCProvider(request: $_model.CreateOIDCProviderRequest): Promise<$_model.CreateOIDCProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOIDCProviderWithOptions(request, runtime);
  }

  /**
   * Creates an identity provider (IdP) for role-based single sign-on (SSO).
   * 
   * @param request - CreateSAMLProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSAMLProviderResponse
   */
  async createSAMLProviderWithOptions(request: $_model.CreateSAMLProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSAMLProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authnSignAlgo)) {
      query["AuthnSignAlgo"] = request.authnSignAlgo;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.encodedSAMLMetadataDocument)) {
      query["EncodedSAMLMetadataDocument"] = request.encodedSAMLMetadataDocument;
    }

    if (!$dara.isNull(request.SAMLProviderName)) {
      query["SAMLProviderName"] = request.SAMLProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSAMLProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSAMLProviderResponse>(await this.callApi(params, req, runtime), new $_model.CreateSAMLProviderResponse({}));
  }

  /**
   * Creates an identity provider (IdP) for role-based single sign-on (SSO).
   * 
   * @param request - CreateSAMLProviderRequest
   * @returns CreateSAMLProviderResponse
   */
  async createSAMLProvider(request: $_model.CreateSAMLProviderRequest): Promise<$_model.CreateSAMLProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSAMLProviderWithOptions(request, runtime);
  }

  /**
   * 创建RAM用户
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: $_model.CreateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.mobilePhone)) {
      query["MobilePhone"] = request.mobilePhone;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2019-08-15",
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
   * 创建RAM用户
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * 创建多因素认证设备
   * 
   * @param request - CreateVirtualMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVirtualMFADeviceResponse
   */
  async createVirtualMFADeviceWithOptions(request: $_model.CreateVirtualMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVirtualMFADeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.virtualMFADeviceName)) {
      query["VirtualMFADeviceName"] = request.virtualMFADeviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVirtualMFADevice",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new $_model.CreateVirtualMFADeviceResponse({}));
  }

  /**
   * 创建多因素认证设备
   * 
   * @param request - CreateVirtualMFADeviceRequest
   * @returns CreateVirtualMFADeviceResponse
   */
  async createVirtualMFADevice(request: $_model.CreateVirtualMFADeviceRequest): Promise<$_model.CreateVirtualMFADeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVirtualMFADeviceWithOptions(request, runtime);
  }

  /**
   * 删除用户的访问密钥
   * 
   * @param request - DeleteAccessKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessKeyResponse
   */
  async deleteAccessKeyWithOptions(request: $_model.DeleteAccessKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessKey",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessKeyResponse({}));
  }

  /**
   * 删除用户的访问密钥
   * 
   * @param request - DeleteAccessKeyRequest
   * @returns DeleteAccessKeyResponse
   */
  async deleteAccessKey(request: $_model.DeleteAccessKeyRequest): Promise<$_model.DeleteAccessKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessKeyWithOptions(request, runtime);
  }

  /**
   * 删除回收站中的访问密钥
   * 
   * @param request - DeleteAccessKeyInRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessKeyInRecycleBinResponse
   */
  async deleteAccessKeyInRecycleBinWithOptions(request: $_model.DeleteAccessKeyInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessKeyInRecycleBinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessKeyInRecycleBin",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessKeyInRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessKeyInRecycleBinResponse({}));
  }

  /**
   * 删除回收站中的访问密钥
   * 
   * @param request - DeleteAccessKeyInRecycleBinRequest
   * @returns DeleteAccessKeyInRecycleBinResponse
   */
  async deleteAccessKeyInRecycleBin(request: $_model.DeleteAccessKeyInRecycleBinRequest): Promise<$_model.DeleteAccessKeyInRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessKeyInRecycleBinWithOptions(request, runtime);
  }

  /**
   * 删除指定应用的应用密钥
   * 
   * @param request - DeleteAppSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppSecretResponse
   */
  async deleteAppSecretWithOptions(request: $_model.DeleteAppSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appSecretId)) {
      query["AppSecretId"] = request.appSecretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppSecret",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppSecretResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppSecretResponse({}));
  }

  /**
   * 删除指定应用的应用密钥
   * 
   * @param request - DeleteAppSecretRequest
   * @returns DeleteAppSecretResponse
   */
  async deleteAppSecret(request: $_model.DeleteAppSecretRequest): Promise<$_model.DeleteAppSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppSecretWithOptions(request, runtime);
  }

  /**
   * 删除指定的应用
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: $_model.DeleteApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationResponse({}));
  }

  /**
   * 删除指定的应用
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * 删除指定的用户组
   * 
   * @param request - DeleteGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: $_model.DeleteGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGroupResponse({}));
  }

  /**
   * 删除指定的用户组
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: $_model.DeleteGroupRequest): Promise<$_model.DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * 关闭指定RAM用户的控制台登录
   * 
   * @param request - DeleteLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoginProfileResponse
   */
  async deleteLoginProfileWithOptions(request: $_model.DeleteLoginProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLoginProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLoginProfile",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLoginProfileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLoginProfileResponse({}));
  }

  /**
   * 关闭指定RAM用户的控制台登录
   * 
   * @param request - DeleteLoginProfileRequest
   * @returns DeleteLoginProfileResponse
   */
  async deleteLoginProfile(request: $_model.DeleteLoginProfileRequest): Promise<$_model.DeleteLoginProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLoginProfileWithOptions(request, runtime);
  }

  /**
   * 删除指定的角色SSO身份提供商
   * 
   * @param request - DeleteOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOIDCProviderResponse
   */
  async deleteOIDCProviderWithOptions(request: $_model.DeleteOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOIDCProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOIDCProviderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOIDCProviderResponse({}));
  }

  /**
   * 删除指定的角色SSO身份提供商
   * 
   * @param request - DeleteOIDCProviderRequest
   * @returns DeleteOIDCProviderResponse
   */
  async deleteOIDCProvider(request: $_model.DeleteOIDCProviderRequest): Promise<$_model.DeleteOIDCProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOIDCProviderWithOptions(request, runtime);
  }

  /**
   * 删除Passkey
   * 
   * @param request - DeletePasskeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePasskeyResponse
   */
  async deletePasskeyWithOptions(request: $_model.DeletePasskeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePasskeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.passkeyId)) {
      query["PasskeyId"] = request.passkeyId;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePasskey",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePasskeyResponse>(await this.callApi(params, req, runtime), new $_model.DeletePasskeyResponse({}));
  }

  /**
   * 删除Passkey
   * 
   * @param request - DeletePasskeyRequest
   * @returns DeletePasskeyResponse
   */
  async deletePasskey(request: $_model.DeletePasskeyRequest): Promise<$_model.DeletePasskeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePasskeyWithOptions(request, runtime);
  }

  /**
   * 删除指定的角色SSO身份提供商
   * 
   * @param request - DeleteSAMLProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSAMLProviderResponse
   */
  async deleteSAMLProviderWithOptions(request: $_model.DeleteSAMLProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSAMLProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.SAMLProviderName)) {
      query["SAMLProviderName"] = request.SAMLProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSAMLProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSAMLProviderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSAMLProviderResponse({}));
  }

  /**
   * 删除指定的角色SSO身份提供商
   * 
   * @param request - DeleteSAMLProviderRequest
   * @returns DeleteSAMLProviderResponse
   */
  async deleteSAMLProvider(request: $_model.DeleteSAMLProviderRequest): Promise<$_model.DeleteSAMLProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSAMLProviderWithOptions(request, runtime);
  }

  /**
   * 删除RAM用户
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: $_model.DeleteUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2019-08-15",
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
   * 删除RAM用户
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * 删除回收站中的用户
   * 
   * @param request - DeleteUserInRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserInRecycleBinResponse
   */
  async deleteUserInRecycleBinWithOptions(request: $_model.DeleteUserInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserInRecycleBinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserInRecycleBin",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserInRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserInRecycleBinResponse({}));
  }

  /**
   * 删除回收站中的用户
   * 
   * @param request - DeleteUserInRecycleBinRequest
   * @returns DeleteUserInRecycleBinResponse
   */
  async deleteUserInRecycleBin(request: $_model.DeleteUserInRecycleBinRequest): Promise<$_model.DeleteUserInRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserInRecycleBinWithOptions(request, runtime);
  }

  /**
   * 删除多因素认证设备
   * 
   * @param request - DeleteVirtualMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVirtualMFADeviceResponse
   */
  async deleteVirtualMFADeviceWithOptions(request: $_model.DeleteVirtualMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVirtualMFADeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVirtualMFADevice",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVirtualMFADeviceResponse({}));
  }

  /**
   * 删除多因素认证设备
   * 
   * @param request - DeleteVirtualMFADeviceRequest
   * @returns DeleteVirtualMFADeviceResponse
   */
  async deleteVirtualMFADevice(request: $_model.DeleteVirtualMFADeviceRequest): Promise<$_model.DeleteVirtualMFADeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  /**
   * 解除安装应用
   * 
   * @param request - DeprovisionApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeprovisionApplicationResponse
   */
  async deprovisionApplicationWithOptions(request: $_model.DeprovisionApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeprovisionApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeprovisionApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeprovisionApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeprovisionApplicationResponse({}));
  }

  /**
   * 解除安装应用
   * 
   * @param request - DeprovisionApplicationRequest
   * @returns DeprovisionApplicationResponse
   */
  async deprovisionApplication(request: $_model.DeprovisionApplicationRequest): Promise<$_model.DeprovisionApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deprovisionApplicationWithOptions(request, runtime);
  }

  /**
   * 解除安装外部应用
   * 
   * @param request - DeprovisionExternalApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeprovisionExternalApplicationResponse
   */
  async deprovisionExternalApplicationWithOptions(request: $_model.DeprovisionExternalApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeprovisionExternalApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeprovisionExternalApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeprovisionExternalApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeprovisionExternalApplicationResponse({}));
  }

  /**
   * 解除安装外部应用
   * 
   * @param request - DeprovisionExternalApplicationRequest
   * @returns DeprovisionExternalApplicationResponse
   */
  async deprovisionExternalApplication(request: $_model.DeprovisionExternalApplicationRequest): Promise<$_model.DeprovisionExternalApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deprovisionExternalApplicationWithOptions(request, runtime);
  }

  /**
   * 解绑并删除多因素认证设备
   * 
   * @param request - DisableVirtualMFARequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableVirtualMFAResponse
   */
  async disableVirtualMFAWithOptions(request: $_model.DisableVirtualMFARequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableVirtualMFAResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableVirtualMFA",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableVirtualMFAResponse>(await this.callApi(params, req, runtime), new $_model.DisableVirtualMFAResponse({}));
  }

  /**
   * 解绑并删除多因素认证设备
   * 
   * @param request - DisableVirtualMFARequest
   * @returns DisableVirtualMFAResponse
   */
  async disableVirtualMFA(request: $_model.DisableVirtualMFARequest): Promise<$_model.DisableVirtualMFAResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableVirtualMFAWithOptions(request, runtime);
  }

  /**
   * 生成用户凭证报告
   * 
   * @param request - GenerateCredentialReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCredentialReportResponse
   */
  async generateCredentialReportWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GenerateCredentialReportResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GenerateCredentialReport",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateCredentialReportResponse>(await this.callApi(params, req, runtime), new $_model.GenerateCredentialReportResponse({}));
  }

  /**
   * 生成用户凭证报告
   * @returns GenerateCredentialReportResponse
   */
  async generateCredentialReport(): Promise<$_model.GenerateCredentialReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateCredentialReportWithOptions(runtime);
  }

  /**
   * 生成身份权限治理报告
   * 
   * @param request - GenerateGovernanceReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateGovernanceReportResponse
   */
  async generateGovernanceReportWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GenerateGovernanceReportResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GenerateGovernanceReport",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateGovernanceReportResponse>(await this.callApi(params, req, runtime), new $_model.GenerateGovernanceReportResponse({}));
  }

  /**
   * 生成身份权限治理报告
   * @returns GenerateGovernanceReportResponse
   */
  async generateGovernanceReport(): Promise<$_model.GenerateGovernanceReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateGovernanceReportWithOptions(runtime);
  }

  /**
   * 查询回收站中的访问密钥信息
   * 
   * @param request - GetAccessKeyInfoInRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessKeyInfoInRecycleBinResponse
   */
  async getAccessKeyInfoInRecycleBinWithOptions(request: $_model.GetAccessKeyInfoInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessKeyInfoInRecycleBinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessKeyInfoInRecycleBin",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessKeyInfoInRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessKeyInfoInRecycleBinResponse({}));
  }

  /**
   * 查询回收站中的访问密钥信息
   * 
   * @param request - GetAccessKeyInfoInRecycleBinRequest
   * @returns GetAccessKeyInfoInRecycleBinResponse
   */
  async getAccessKeyInfoInRecycleBin(request: $_model.GetAccessKeyInfoInRecycleBinRequest): Promise<$_model.GetAccessKeyInfoInRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessKeyInfoInRecycleBinWithOptions(request, runtime);
  }

  /**
   * 查询指定访问密钥的最后使用时间
   * 
   * @param request - GetAccessKeyLastUsedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessKeyLastUsedResponse
   */
  async getAccessKeyLastUsedWithOptions(request: $_model.GetAccessKeyLastUsedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessKeyLastUsedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessKeyLastUsed",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessKeyLastUsedResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessKeyLastUsedResponse({}));
  }

  /**
   * 查询指定访问密钥的最后使用时间
   * 
   * @param request - GetAccessKeyLastUsedRequest
   * @returns GetAccessKeyLastUsedResponse
   */
  async getAccessKeyLastUsed(request: $_model.GetAccessKeyLastUsedRequest): Promise<$_model.GetAccessKeyLastUsedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedWithOptions(request, runtime);
  }

  /**
   * 查询主账号多因素认证设备信息
   * 
   * @param request - GetAccountMFAInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountMFAInfoResponse
   */
  async getAccountMFAInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountMFAInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountMFAInfo",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountMFAInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountMFAInfoResponse({}));
  }

  /**
   * 查询主账号多因素认证设备信息
   * @returns GetAccountMFAInfoResponse
   */
  async getAccountMFAInfo(): Promise<$_model.GetAccountMFAInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountMFAInfoWithOptions(runtime);
  }

  /**
   * 查询阿里云账号的安全报告
   * 
   * @param request - GetAccountSecurityPracticeReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountSecurityPracticeReportResponse
   */
  async getAccountSecurityPracticeReportWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountSecurityPracticeReportResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountSecurityPracticeReport",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountSecurityPracticeReportResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountSecurityPracticeReportResponse({}));
  }

  /**
   * 查询阿里云账号的安全报告
   * @returns GetAccountSecurityPracticeReportResponse
   */
  async getAccountSecurityPracticeReport(): Promise<$_model.GetAccountSecurityPracticeReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountSecurityPracticeReportWithOptions(runtime);
  }

  /**
   * Retrieves a summary of an Alibaba Cloud account.
   * 
   * @param request - GetAccountSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountSummaryResponse
   */
  async getAccountSummaryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountSummaryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountSummary",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountSummaryResponse({}));
  }

  /**
   * Retrieves a summary of an Alibaba Cloud account.
   * @returns GetAccountSummaryResponse
   */
  async getAccountSummary(): Promise<$_model.GetAccountSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountSummaryWithOptions(runtime);
  }

  /**
   * 查询指定应用密钥信息
   * 
   * @param request - GetAppSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppSecretResponse
   */
  async getAppSecretWithOptions(request: $_model.GetAppSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appSecretId)) {
      query["AppSecretId"] = request.appSecretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppSecret",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppSecretResponse>(await this.callApi(params, req, runtime), new $_model.GetAppSecretResponse({}));
  }

  /**
   * 查询指定应用密钥信息
   * 
   * @param request - GetAppSecretRequest
   * @returns GetAppSecretResponse
   */
  async getAppSecret(request: $_model.GetAppSecretRequest): Promise<$_model.GetAppSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppSecretWithOptions(request, runtime);
  }

  /**
   * Queries the configuration information of a specified application.
   * 
   * @remarks
   * This topic provides an example of how to query the configuration information of the application `472457090344041****`.
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(request: $_model.GetApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationResponse({}));
  }

  /**
   * Queries the configuration information of a specified application.
   * 
   * @remarks
   * This topic provides an example of how to query the configuration information of the application `472457090344041****`.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: $_model.GetApplicationRequest): Promise<$_model.GetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * 查询应用安装信息
   * 
   * @param request - GetApplicationProvisionInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisionInfoResponse
   */
  async getApplicationProvisionInfoWithOptions(request: $_model.GetApplicationProvisionInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationProvisionInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationProvisionInfo",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationProvisionInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationProvisionInfoResponse({}));
  }

  /**
   * 查询应用安装信息
   * 
   * @param request - GetApplicationProvisionInfoRequest
   * @returns GetApplicationProvisionInfoResponse
   */
  async getApplicationProvisionInfo(request: $_model.GetApplicationProvisionInfoRequest): Promise<$_model.GetApplicationProvisionInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationProvisionInfoWithOptions(request, runtime);
  }

  /**
   * 查询用户凭证报告内容
   * 
   * @param request - GetCredentialReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCredentialReportResponse
   */
  async getCredentialReportWithOptions(request: $_model.GetCredentialReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCredentialReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCredentialReport",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCredentialReportResponse>(await this.callApi(params, req, runtime), new $_model.GetCredentialReportResponse({}));
  }

  /**
   * 查询用户凭证报告内容
   * 
   * @param request - GetCredentialReportRequest
   * @returns GetCredentialReportResponse
   */
  async getCredentialReport(request: $_model.GetCredentialReportRequest): Promise<$_model.GetCredentialReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCredentialReportWithOptions(request, runtime);
  }

  /**
   * 查询默认域名
   * 
   * @param request - GetDefaultDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefaultDomainResponse
   */
  async getDefaultDomainWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetDefaultDomainResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetDefaultDomain",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDefaultDomainResponse>(await this.callApi(params, req, runtime), new $_model.GetDefaultDomainResponse({}));
  }

  /**
   * 查询默认域名
   * @returns GetDefaultDomainResponse
   */
  async getDefaultDomain(): Promise<$_model.GetDefaultDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDefaultDomainWithOptions(runtime);
  }

  /**
   * 查询外部应用
   * 
   * @param request - GetExternalApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExternalApplicationResponse
   */
  async getExternalApplicationWithOptions(request: $_model.GetExternalApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExternalApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExternalApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExternalApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetExternalApplicationResponse({}));
  }

  /**
   * 查询外部应用
   * 
   * @param request - GetExternalApplicationRequest
   * @returns GetExternalApplicationResponse
   */
  async getExternalApplication(request: $_model.GetExternalApplicationRequest): Promise<$_model.GetExternalApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExternalApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specific check item in an identity and access governance report.
   * 
   * @param request - GetGovernanceItemReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGovernanceItemReportResponse
   */
  async getGovernanceItemReportWithOptions(request: $_model.GetGovernanceItemReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGovernanceItemReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.governanceItemType)) {
      query["GovernanceItemType"] = request.governanceItemType;
    }

    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGovernanceItemReport",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGovernanceItemReportResponse>(await this.callApi(params, req, runtime), new $_model.GetGovernanceItemReportResponse({}));
  }

  /**
   * Queries the details of a specific check item in an identity and access governance report.
   * 
   * @param request - GetGovernanceItemReportRequest
   * @returns GetGovernanceItemReportResponse
   */
  async getGovernanceItemReport(request: $_model.GetGovernanceItemReportRequest): Promise<$_model.GetGovernanceItemReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGovernanceItemReportWithOptions(request, runtime);
  }

  /**
   * Queries the status of an identity and access governance report.
   * 
   * @param request - GetGovernanceReportStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGovernanceReportStatusResponse
   */
  async getGovernanceReportStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetGovernanceReportStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetGovernanceReportStatus",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGovernanceReportStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetGovernanceReportStatusResponse({}));
  }

  /**
   * Queries the status of an identity and access governance report.
   * @returns GetGovernanceReportStatusResponse
   */
  async getGovernanceReportStatus(): Promise<$_model.GetGovernanceReportStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGovernanceReportStatusWithOptions(runtime);
  }

  /**
   * 查询指定用户组信息
   * 
   * @param request - GetGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(request: $_model.GetGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetGroupResponse({}));
  }

  /**
   * 查询指定用户组信息
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: $_model.GetGroupRequest): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * Retrieves the logon information for a specified Resource Access Management (RAM) user.
   * 
   * @param request - GetLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginProfileResponse
   */
  async getLoginProfileWithOptions(request: $_model.GetLoginProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoginProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoginProfile",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLoginProfileResponse>(await this.callApi(params, req, runtime), new $_model.GetLoginProfileResponse({}));
  }

  /**
   * Retrieves the logon information for a specified Resource Access Management (RAM) user.
   * 
   * @param request - GetLoginProfileRequest
   * @returns GetLoginProfileResponse
   */
  async getLoginProfile(request: $_model.GetLoginProfileRequest): Promise<$_model.GetLoginProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoginProfileWithOptions(request, runtime);
  }

  /**
   * 查询OIDC身份提供商信息
   * 
   * @param request - GetOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOIDCProviderResponse
   */
  async getOIDCProviderWithOptions(request: $_model.GetOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOIDCProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOIDCProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetOIDCProviderResponse({}));
  }

  /**
   * 查询OIDC身份提供商信息
   * 
   * @param request - GetOIDCProviderRequest
   * @returns GetOIDCProviderResponse
   */
  async getOIDCProvider(request: $_model.GetOIDCProviderRequest): Promise<$_model.GetOIDCProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOIDCProviderWithOptions(request, runtime);
  }

  /**
   * Retrieves the password strength policy for Resource Access Management (RAM) users.
   * 
   * @param request - GetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordPolicyResponse
   */
  async getPasswordPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordPolicy",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPasswordPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetPasswordPolicyResponse({}));
  }

  /**
   * Retrieves the password strength policy for Resource Access Management (RAM) users.
   * @returns GetPasswordPolicyResponse
   */
  async getPasswordPolicy(): Promise<$_model.GetPasswordPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordPolicyWithOptions(runtime);
  }

  /**
   * Retrieves information about a specified SAML provider for role-based SSO.
   * 
   * @param request - GetSAMLProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSAMLProviderResponse
   */
  async getSAMLProviderWithOptions(request: $_model.GetSAMLProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSAMLProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.SAMLProviderName)) {
      query["SAMLProviderName"] = request.SAMLProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSAMLProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSAMLProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetSAMLProviderResponse({}));
  }

  /**
   * Retrieves information about a specified SAML provider for role-based SSO.
   * 
   * @param request - GetSAMLProviderRequest
   * @returns GetSAMLProviderResponse
   */
  async getSAMLProvider(request: $_model.GetSAMLProviderRequest): Promise<$_model.GetSAMLProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSAMLProviderWithOptions(request, runtime);
  }

  /**
   * Queries the global security preferences for Resource Access Management (RAM) users.
   * 
   * @param request - GetSecurityPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecurityPreferenceResponse
   */
  async getSecurityPreferenceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetSecurityPreferenceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetSecurityPreference",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecurityPreferenceResponse>(await this.callApi(params, req, runtime), new $_model.GetSecurityPreferenceResponse({}));
  }

  /**
   * Queries the global security preferences for Resource Access Management (RAM) users.
   * @returns GetSecurityPreferenceResponse
   */
  async getSecurityPreference(): Promise<$_model.GetSecurityPreferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecurityPreferenceWithOptions(runtime);
  }

  /**
   * 查询RAM用户的详细信息
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2019-08-15",
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
   * 查询RAM用户的详细信息
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * 获取回收站中的用户
   * 
   * @param request - GetUserInRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserInRecycleBinResponse
   */
  async getUserInRecycleBinWithOptions(request: $_model.GetUserInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserInRecycleBinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserInRecycleBin",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserInRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.GetUserInRecycleBinResponse({}));
  }

  /**
   * 获取回收站中的用户
   * 
   * @param request - GetUserInRecycleBinRequest
   * @returns GetUserInRecycleBinResponse
   */
  async getUserInRecycleBin(request: $_model.GetUserInRecycleBinRequest): Promise<$_model.GetUserInRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserInRecycleBinWithOptions(request, runtime);
  }

  /**
   * 查询RAM用户多因素认证设备信息
   * 
   * @param request - GetUserMFAInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserMFAInfoResponse
   */
  async getUserMFAInfoWithOptions(request: $_model.GetUserMFAInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserMFAInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserMFAInfo",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserMFAInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetUserMFAInfoResponse({}));
  }

  /**
   * 查询RAM用户多因素认证设备信息
   * 
   * @param request - GetUserMFAInfoRequest
   * @returns GetUserMFAInfoResponse
   */
  async getUserMFAInfo(request: $_model.GetUserMFAInfoRequest): Promise<$_model.GetUserMFAInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserMFAInfoWithOptions(request, runtime);
  }

  /**
   * Queries the identity provider settings for user-based SSO.
   * 
   * @param request - GetUserSsoSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserSsoSettingsResponse
   */
  async getUserSsoSettingsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetUserSsoSettingsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetUserSsoSettings",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserSsoSettingsResponse>(await this.callApi(params, req, runtime), new $_model.GetUserSsoSettingsResponse({}));
  }

  /**
   * Queries the identity provider settings for user-based SSO.
   * @returns GetUserSsoSettingsResponse
   */
  async getUserSsoSettings(): Promise<$_model.GetUserSsoSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserSsoSettingsWithOptions(runtime);
  }

  /**
   * 获取用户安全认证的信息
   * 
   * @param request - GetVerificationInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVerificationInfoResponse
   */
  async getVerificationInfoWithOptions(request: $_model.GetVerificationInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVerificationInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVerificationInfo",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVerificationInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetVerificationInfoResponse({}));
  }

  /**
   * 获取用户安全认证的信息
   * 
   * @param request - GetVerificationInfoRequest
   * @returns GetVerificationInfoResponse
   */
  async getVerificationInfo(request: $_model.GetVerificationInfoRequest): Promise<$_model.GetVerificationInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVerificationInfoWithOptions(request, runtime);
  }

  /**
   * 查询主账号或RAM用户访问密钥列表
   * 
   * @param request - ListAccessKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessKeysResponse
   */
  async listAccessKeysWithOptions(request: $_model.ListAccessKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessKeys",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccessKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListAccessKeysResponse({}));
  }

  /**
   * 查询主账号或RAM用户访问密钥列表
   * 
   * @param request - ListAccessKeysRequest
   * @returns ListAccessKeysResponse
   */
  async listAccessKeys(request: $_model.ListAccessKeysRequest): Promise<$_model.ListAccessKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessKeysWithOptions(request, runtime);
  }

  /**
   * 列出回收站中访问密钥列表
   * 
   * @param request - ListAccessKeysInRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessKeysInRecycleBinResponse
   */
  async listAccessKeysInRecycleBinWithOptions(request: $_model.ListAccessKeysInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessKeysInRecycleBinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessKeysInRecycleBin",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccessKeysInRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.ListAccessKeysInRecycleBinResponse({}));
  }

  /**
   * 列出回收站中访问密钥列表
   * 
   * @param request - ListAccessKeysInRecycleBinRequest
   * @returns ListAccessKeysInRecycleBinResponse
   */
  async listAccessKeysInRecycleBin(request: $_model.ListAccessKeysInRecycleBinRequest): Promise<$_model.ListAccessKeysInRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessKeysInRecycleBinWithOptions(request, runtime);
  }

  /**
   * 查询指定应用的应用密钥ID列表
   * 
   * @param request - ListAppSecretIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppSecretIdsResponse
   */
  async listAppSecretIdsWithOptions(request: $_model.ListAppSecretIdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppSecretIdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppSecretIds",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppSecretIdsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppSecretIdsResponse({}));
  }

  /**
   * 查询指定应用的应用密钥ID列表
   * 
   * @param request - ListAppSecretIdsRequest
   * @returns ListAppSecretIdsResponse
   */
  async listAppSecretIds(request: $_model.ListAppSecretIdsRequest): Promise<$_model.ListAppSecretIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppSecretIdsWithOptions(request, runtime);
  }

  /**
   * Queries installation information about all installed applications.
   * 
   * @param request - ListApplicationProvisionInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationProvisionInfosResponse
   */
  async listApplicationProvisionInfosWithOptions(request: $_model.ListApplicationProvisionInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationProvisionInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationProvisionInfos",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationProvisionInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationProvisionInfosResponse({}));
  }

  /**
   * Queries installation information about all installed applications.
   * 
   * @param request - ListApplicationProvisionInfosRequest
   * @returns ListApplicationProvisionInfosResponse
   */
  async listApplicationProvisionInfos(request: $_model.ListApplicationProvisionInfosRequest): Promise<$_model.ListApplicationProvisionInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationProvisionInfosWithOptions(request, runtime);
  }

  /**
   * Lists the applications that you have created.
   * 
   * @remarks
   * This topic provides an example of how to query the applications in your Alibaba Cloud account. The response shows that only one application, named `myapp`, exists in the account.
   * 
   * @param request - ListApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
  async listApplicationsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListApplications",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsResponse({}));
  }

  /**
   * Lists the applications that you have created.
   * 
   * @remarks
   * This topic provides an example of how to query the applications in your Alibaba Cloud account. The response shows that only one application, named `myapp`, exists in the account.
   * @returns ListApplicationsResponse
   */
  async listApplications(): Promise<$_model.ListApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(runtime);
  }

  /**
   * Queries information about all installed external applications.
   * 
   * @param request - ListExternalApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExternalApplicationsResponse
   */
  async listExternalApplicationsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListExternalApplicationsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListExternalApplications",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExternalApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListExternalApplicationsResponse({}));
  }

  /**
   * Queries information about all installed external applications.
   * @returns ListExternalApplicationsResponse
   */
  async listExternalApplications(): Promise<$_model.ListExternalApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExternalApplicationsWithOptions(runtime);
  }

  /**
   * Queries Resource Access Management (RAM) user groups.
   * 
   * @param request - ListGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(request: $_model.ListGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroups",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupsResponse({}));
  }

  /**
   * Queries Resource Access Management (RAM) user groups.
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: $_model.ListGroupsRequest): Promise<$_model.ListGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * 查询RAM用户加入的用户组列表
   * 
   * @param request - ListGroupsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUserWithOptions(request: $_model.ListGroupsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupsForUser",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupsForUserResponse({}));
  }

  /**
   * 查询RAM用户加入的用户组列表
   * 
   * @param request - ListGroupsForUserRequest
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUser(request: $_model.ListGroupsForUserRequest): Promise<$_model.ListGroupsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  /**
   * 查询OIDC身份提供商列表
   * 
   * @param request - ListOIDCProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOIDCProvidersResponse
   */
  async listOIDCProvidersWithOptions(request: $_model.ListOIDCProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOIDCProvidersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOIDCProviders",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOIDCProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListOIDCProvidersResponse({}));
  }

  /**
   * 查询OIDC身份提供商列表
   * 
   * @param request - ListOIDCProvidersRequest
   * @returns ListOIDCProvidersResponse
   */
  async listOIDCProviders(request: $_model.ListOIDCProvidersRequest): Promise<$_model.ListOIDCProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOIDCProvidersWithOptions(request, runtime);
  }

  /**
   * 查询Passkey
   * 
   * @param request - ListPasskeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPasskeysResponse
   */
  async listPasskeysWithOptions(request: $_model.ListPasskeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPasskeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPasskeys",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPasskeysResponse>(await this.callApi(params, req, runtime), new $_model.ListPasskeysResponse({}));
  }

  /**
   * 查询Passkey
   * 
   * @param request - ListPasskeysRequest
   * @returns ListPasskeysResponse
   */
  async listPasskeys(request: $_model.ListPasskeysRequest): Promise<$_model.ListPasskeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPasskeysWithOptions(request, runtime);
  }

  /**
   * Queries predefined application permissions.
   * 
   * @param request - ListPredefinedScopesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPredefinedScopesResponse
   */
  async listPredefinedScopesWithOptions(request: $_model.ListPredefinedScopesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPredefinedScopesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPredefinedScopes",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPredefinedScopesResponse>(await this.callApi(params, req, runtime), new $_model.ListPredefinedScopesResponse({}));
  }

  /**
   * Queries predefined application permissions.
   * 
   * @param request - ListPredefinedScopesRequest
   * @returns ListPredefinedScopesResponse
   */
  async listPredefinedScopes(request: $_model.ListPredefinedScopesRequest): Promise<$_model.ListPredefinedScopesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPredefinedScopesWithOptions(request, runtime);
  }

  /**
   * Queries all metric values in the most recent governance check.
   * 
   * @param request - ListRecentGovernanceMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecentGovernanceMetricsResponse
   */
  async listRecentGovernanceMetricsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListRecentGovernanceMetricsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListRecentGovernanceMetrics",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecentGovernanceMetricsResponse>(await this.callApi(params, req, runtime), new $_model.ListRecentGovernanceMetricsResponse({}));
  }

  /**
   * Queries all metric values in the most recent governance check.
   * @returns ListRecentGovernanceMetricsResponse
   */
  async listRecentGovernanceMetrics(): Promise<$_model.ListRecentGovernanceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecentGovernanceMetricsWithOptions(runtime);
  }

  /**
   * 查询角色SSO身份提供商列表
   * 
   * @param request - ListSAMLProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSAMLProvidersResponse
   */
  async listSAMLProvidersWithOptions(request: $_model.ListSAMLProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSAMLProvidersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSAMLProviders",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSAMLProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListSAMLProvidersResponse({}));
  }

  /**
   * 查询角色SSO身份提供商列表
   * 
   * @param request - ListSAMLProvidersRequest
   * @returns ListSAMLProvidersResponse
   */
  async listSAMLProviders(request: $_model.ListSAMLProvidersRequest): Promise<$_model.ListSAMLProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSAMLProvidersWithOptions(request, runtime);
  }

  /**
   * 查询资源与标签的关系
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourcePrincipalName)) {
      query["ResourcePrincipalName"] = request.resourcePrincipalName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * 查询资源与标签的关系
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about all Resource Access Management (RAM) users.
   * 
   * @remarks
   * You can call the following API operations to query information about all RAM users:
   * - ListUsers: queries the details of all RAM users.
   * - ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
   * 
   * @param request - ListUserBasicInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserBasicInfosResponse
   */
  async listUserBasicInfosWithOptions(request: $_model.ListUserBasicInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserBasicInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserBasicInfos",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserBasicInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListUserBasicInfosResponse({}));
  }

  /**
   * Queries the basic information about all Resource Access Management (RAM) users.
   * 
   * @remarks
   * You can call the following API operations to query information about all RAM users:
   * - ListUsers: queries the details of all RAM users.
   * - ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
   * 
   * @param request - ListUserBasicInfosRequest
   * @returns ListUserBasicInfosResponse
   */
  async listUserBasicInfos(request: $_model.ListUserBasicInfosRequest): Promise<$_model.ListUserBasicInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserBasicInfosWithOptions(request, runtime);
  }

  /**
   * Queries information about all Resource Access Management (RAM) users.
   * 
   * @remarks
   * ### [](#)
   * You can call the following API operations to query the details of all RAM users:
   * - ListUsers: queries the details of all RAM users.
   * - ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2019-08-15",
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
   * Queries information about all Resource Access Management (RAM) users.
   * 
   * @remarks
   * ### [](#)
   * You can call the following API operations to query the details of all RAM users:
   * - ListUsers: queries the details of all RAM users.
   * - ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * 查询用户组中用户列表
   * 
   * @param request - ListUsersForGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroupWithOptions(request: $_model.ListUsersForGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersForGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersForGroup",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersForGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersForGroupResponse({}));
  }

  /**
   * 查询用户组中用户列表
   * 
   * @param request - ListUsersForGroupRequest
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroup(request: $_model.ListUsersForGroupRequest): Promise<$_model.ListUsersForGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  /**
   * 查询回收站中用户列表
   * 
   * @param request - ListUsersInRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersInRecycleBinResponse
   */
  async listUsersInRecycleBinWithOptions(request: $_model.ListUsersInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersInRecycleBinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersInRecycleBin",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersInRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersInRecycleBinResponse({}));
  }

  /**
   * 查询回收站中用户列表
   * 
   * @param request - ListUsersInRecycleBinRequest
   * @returns ListUsersInRecycleBinResponse
   */
  async listUsersInRecycleBin(request: $_model.ListUsersInRecycleBinRequest): Promise<$_model.ListUsersInRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersInRecycleBinWithOptions(request, runtime);
  }

  /**
   * Queries multi-factor authentication (MFA) devices.
   * 
   * @param request - ListVirtualMFADevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirtualMFADevicesResponse
   */
  async listVirtualMFADevicesWithOptions(request: $_model.ListVirtualMFADevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVirtualMFADevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVirtualMFADevices",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVirtualMFADevicesResponse>(await this.callApi(params, req, runtime), new $_model.ListVirtualMFADevicesResponse({}));
  }

  /**
   * Queries multi-factor authentication (MFA) devices.
   * 
   * @param request - ListVirtualMFADevicesRequest
   * @returns ListVirtualMFADevicesResponse
   */
  async listVirtualMFADevices(request: $_model.ListVirtualMFADevicesRequest): Promise<$_model.ListVirtualMFADevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVirtualMFADevicesWithOptions(request, runtime);
  }

  /**
   * 安装应用
   * 
   * @param request - ProvisionApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProvisionApplicationResponse
   */
  async provisionApplicationWithOptions(request: $_model.ProvisionApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProvisionApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.scopes)) {
      query["Scopes"] = request.scopes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProvisionApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProvisionApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ProvisionApplicationResponse({}));
  }

  /**
   * 安装应用
   * 
   * @param request - ProvisionApplicationRequest
   * @returns ProvisionApplicationResponse
   */
  async provisionApplication(request: $_model.ProvisionApplicationRequest): Promise<$_model.ProvisionApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.provisionApplicationWithOptions(request, runtime);
  }

  /**
   * 安装外部应用
   * 
   * @param request - ProvisionExternalApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProvisionExternalApplicationResponse
   */
  async provisionExternalApplicationWithOptions(request: $_model.ProvisionExternalApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProvisionExternalApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.scopes)) {
      query["Scopes"] = request.scopes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProvisionExternalApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProvisionExternalApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ProvisionExternalApplicationResponse({}));
  }

  /**
   * 安装外部应用
   * 
   * @param request - ProvisionExternalApplicationRequest
   * @returns ProvisionExternalApplicationResponse
   */
  async provisionExternalApplication(request: $_model.ProvisionExternalApplicationRequest): Promise<$_model.ProvisionExternalApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.provisionExternalApplicationWithOptions(request, runtime);
  }

  /**
   * 移除OIDC身份提供商中的指定客户端ID
   * 
   * @param request - RemoveClientIdFromOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveClientIdFromOIDCProviderResponse
   */
  async removeClientIdFromOIDCProviderWithOptions(request: $_model.RemoveClientIdFromOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveClientIdFromOIDCProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveClientIdFromOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveClientIdFromOIDCProviderResponse>(await this.callApi(params, req, runtime), new $_model.RemoveClientIdFromOIDCProviderResponse({}));
  }

  /**
   * 移除OIDC身份提供商中的指定客户端ID
   * 
   * @param request - RemoveClientIdFromOIDCProviderRequest
   * @returns RemoveClientIdFromOIDCProviderResponse
   */
  async removeClientIdFromOIDCProvider(request: $_model.RemoveClientIdFromOIDCProviderRequest): Promise<$_model.RemoveClientIdFromOIDCProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeClientIdFromOIDCProviderWithOptions(request, runtime);
  }

  /**
   * 移除OIDC身份提供商中指定的验证指纹
   * 
   * @param request - RemoveFingerprintFromOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveFingerprintFromOIDCProviderResponse
   */
  async removeFingerprintFromOIDCProviderWithOptions(request: $_model.RemoveFingerprintFromOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveFingerprintFromOIDCProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fingerprint)) {
      query["Fingerprint"] = request.fingerprint;
    }

    if (!$dara.isNull(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveFingerprintFromOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveFingerprintFromOIDCProviderResponse>(await this.callApi(params, req, runtime), new $_model.RemoveFingerprintFromOIDCProviderResponse({}));
  }

  /**
   * 移除OIDC身份提供商中指定的验证指纹
   * 
   * @param request - RemoveFingerprintFromOIDCProviderRequest
   * @returns RemoveFingerprintFromOIDCProviderResponse
   */
  async removeFingerprintFromOIDCProvider(request: $_model.RemoveFingerprintFromOIDCProviderRequest): Promise<$_model.RemoveFingerprintFromOIDCProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeFingerprintFromOIDCProviderWithOptions(request, runtime);
  }

  /**
   * 将RAM用户从用户组中移除
   * 
   * @param request - RemoveUserFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromGroupResponse
   */
  async removeUserFromGroupWithOptions(request: $_model.RemoveUserFromGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserFromGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromGroup",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserFromGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserFromGroupResponse({}));
  }

  /**
   * 将RAM用户从用户组中移除
   * 
   * @param request - RemoveUserFromGroupRequest
   * @returns RemoveUserFromGroupResponse
   */
  async removeUserFromGroup(request: $_model.RemoveUserFromGroupRequest): Promise<$_model.RemoveUserFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserFromGroupWithOptions(request, runtime);
  }

  /**
   * 清空回收站中的访问密钥
   * 
   * @param request - RestoreAccessKeyFromRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreAccessKeyFromRecycleBinResponse
   */
  async restoreAccessKeyFromRecycleBinWithOptions(request: $_model.RestoreAccessKeyFromRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreAccessKeyFromRecycleBinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreAccessKeyFromRecycleBin",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreAccessKeyFromRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.RestoreAccessKeyFromRecycleBinResponse({}));
  }

  /**
   * 清空回收站中的访问密钥
   * 
   * @param request - RestoreAccessKeyFromRecycleBinRequest
   * @returns RestoreAccessKeyFromRecycleBinResponse
   */
  async restoreAccessKeyFromRecycleBin(request: $_model.RestoreAccessKeyFromRecycleBinRequest): Promise<$_model.RestoreAccessKeyFromRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreAccessKeyFromRecycleBinWithOptions(request, runtime);
  }

  /**
   * 清空回收站中的用户
   * 
   * @param request - RestoreUserFromRecycleBinRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreUserFromRecycleBinResponse
   */
  async restoreUserFromRecycleBinWithOptions(request: $_model.RestoreUserFromRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreUserFromRecycleBinResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreUserFromRecycleBin",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreUserFromRecycleBinResponse>(await this.callApi(params, req, runtime), new $_model.RestoreUserFromRecycleBinResponse({}));
  }

  /**
   * 清空回收站中的用户
   * 
   * @param request - RestoreUserFromRecycleBinRequest
   * @returns RestoreUserFromRecycleBinResponse
   */
  async restoreUserFromRecycleBin(request: $_model.RestoreUserFromRecycleBinRequest): Promise<$_model.RestoreUserFromRecycleBinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreUserFromRecycleBinWithOptions(request, runtime);
  }

  /**
   * 设置默认域名
   * 
   * @param request - SetDefaultDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultDomainResponse
   */
  async setDefaultDomainWithOptions(request: $_model.SetDefaultDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultDomainName)) {
      query["DefaultDomainName"] = request.defaultDomainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultDomain",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultDomainResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultDomainResponse({}));
  }

  /**
   * 设置默认域名
   * 
   * @param request - SetDefaultDomainRequest
   * @returns SetDefaultDomainResponse
   */
  async setDefaultDomain(request: $_model.SetDefaultDomainRequest): Promise<$_model.SetDefaultDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultDomainWithOptions(request, runtime);
  }

  /**
   * Sets the password strength policy for RAM users.
   * 
   * @param request - SetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordPolicyResponse
   */
  async setPasswordPolicyWithOptions(request: $_model.SetPasswordPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hardExpire)) {
      query["HardExpire"] = request.hardExpire;
    }

    if (!$dara.isNull(request.initialPasswordAge)) {
      query["InitialPasswordAge"] = request.initialPasswordAge;
    }

    if (!$dara.isNull(request.interceptRiskPasswordOnApi)) {
      query["InterceptRiskPasswordOnApi"] = request.interceptRiskPasswordOnApi;
    }

    if (!$dara.isNull(request.maxLoginAttemps)) {
      query["MaxLoginAttemps"] = request.maxLoginAttemps;
    }

    if (!$dara.isNull(request.maxPasswordAge)) {
      query["MaxPasswordAge"] = request.maxPasswordAge;
    }

    if (!$dara.isNull(request.minimumPasswordDifferentCharacter)) {
      query["MinimumPasswordDifferentCharacter"] = request.minimumPasswordDifferentCharacter;
    }

    if (!$dara.isNull(request.minimumPasswordLength)) {
      query["MinimumPasswordLength"] = request.minimumPasswordLength;
    }

    if (!$dara.isNull(request.passwordNotContainUserName)) {
      query["PasswordNotContainUserName"] = request.passwordNotContainUserName;
    }

    if (!$dara.isNull(request.passwordReusePrevention)) {
      query["PasswordReusePrevention"] = request.passwordReusePrevention;
    }

    if (!$dara.isNull(request.requireLowercaseCharacters)) {
      query["RequireLowercaseCharacters"] = request.requireLowercaseCharacters;
    }

    if (!$dara.isNull(request.requireNumbers)) {
      query["RequireNumbers"] = request.requireNumbers;
    }

    if (!$dara.isNull(request.requireSymbols)) {
      query["RequireSymbols"] = request.requireSymbols;
    }

    if (!$dara.isNull(request.requireUppercaseCharacters)) {
      query["RequireUppercaseCharacters"] = request.requireUppercaseCharacters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordPolicy",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPasswordPolicyResponse>(await this.callApi(params, req, runtime), new $_model.SetPasswordPolicyResponse({}));
  }

  /**
   * Sets the password strength policy for RAM users.
   * 
   * @param request - SetPasswordPolicyRequest
   * @returns SetPasswordPolicyResponse
   */
  async setPasswordPolicy(request: $_model.SetPasswordPolicyRequest): Promise<$_model.SetPasswordPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordPolicyWithOptions(request, runtime);
  }

  /**
   * Configures the global security preferences for a Resource Access Management (RAM) user.
   * 
   * @param tmpReq - SetSecurityPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSecurityPreferenceResponse
   */
  async setSecurityPreferenceWithOptions(tmpReq: $_model.SetSecurityPreferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSecurityPreferenceResponse> {
    tmpReq.validate();
    let request = new $_model.SetSecurityPreferenceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.verificationTypes)) {
      request.verificationTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.verificationTypes, "VerificationTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.allowUserToChangePassword)) {
      query["AllowUserToChangePassword"] = request.allowUserToChangePassword;
    }

    if (!$dara.isNull(request.allowUserToLoginWithPasskey)) {
      query["AllowUserToLoginWithPasskey"] = request.allowUserToLoginWithPasskey;
    }

    if (!$dara.isNull(request.allowUserToManageAccessKeys)) {
      query["AllowUserToManageAccessKeys"] = request.allowUserToManageAccessKeys;
    }

    if (!$dara.isNull(request.allowUserToManageMFADevices)) {
      query["AllowUserToManageMFADevices"] = request.allowUserToManageMFADevices;
    }

    if (!$dara.isNull(request.allowUserToManagePersonalDingTalk)) {
      query["AllowUserToManagePersonalDingTalk"] = request.allowUserToManagePersonalDingTalk;
    }

    if (!$dara.isNull(request.enableSaveMFATicket)) {
      query["EnableSaveMFATicket"] = request.enableSaveMFATicket;
    }

    if (!$dara.isNull(request.loginNetworkMasks)) {
      query["LoginNetworkMasks"] = request.loginNetworkMasks;
    }

    if (!$dara.isNull(request.loginSessionDuration)) {
      query["LoginSessionDuration"] = request.loginSessionDuration;
    }

    if (!$dara.isNull(request.MFAOperationForLogin)) {
      query["MFAOperationForLogin"] = request.MFAOperationForLogin;
    }

    if (!$dara.isNull(request.maxIdleDaysForAccessKeys)) {
      query["MaxIdleDaysForAccessKeys"] = request.maxIdleDaysForAccessKeys;
    }

    if (!$dara.isNull(request.maxIdleDaysForUsers)) {
      query["MaxIdleDaysForUsers"] = request.maxIdleDaysForUsers;
    }

    if (!$dara.isNull(request.operationForRiskLogin)) {
      query["OperationForRiskLogin"] = request.operationForRiskLogin;
    }

    if (!$dara.isNull(request.verificationTypesShrink)) {
      query["VerificationTypes"] = request.verificationTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSecurityPreference",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSecurityPreferenceResponse>(await this.callApi(params, req, runtime), new $_model.SetSecurityPreferenceResponse({}));
  }

  /**
   * Configures the global security preferences for a Resource Access Management (RAM) user.
   * 
   * @param request - SetSecurityPreferenceRequest
   * @returns SetSecurityPreferenceResponse
   */
  async setSecurityPreference(request: $_model.SetSecurityPreferenceRequest): Promise<$_model.SetSecurityPreferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSecurityPreferenceWithOptions(request, runtime);
  }

  /**
   * Sets the identity provider (IdP) settings for user-based single sign-on (SSO).
   * 
   * @param request - SetUserSsoSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserSsoSettingsResponse
   */
  async setUserSsoSettingsWithOptions(request: $_model.SetUserSsoSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetUserSsoSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authnSignAlgo)) {
      query["AuthnSignAlgo"] = request.authnSignAlgo;
    }

    if (!$dara.isNull(request.auxiliaryDomain)) {
      query["AuxiliaryDomain"] = request.auxiliaryDomain;
    }

    if (!$dara.isNull(request.metadataDocument)) {
      query["MetadataDocument"] = request.metadataDocument;
    }

    if (!$dara.isNull(request.ssoEnabled)) {
      query["SsoEnabled"] = request.ssoEnabled;
    }

    if (!$dara.isNull(request.ssoLoginWithDomain)) {
      query["SsoLoginWithDomain"] = request.ssoLoginWithDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetUserSsoSettings",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetUserSsoSettingsResponse>(await this.callApi(params, req, runtime), new $_model.SetUserSsoSettingsResponse({}));
  }

  /**
   * Sets the identity provider (IdP) settings for user-based single sign-on (SSO).
   * 
   * @param request - SetUserSsoSettingsRequest
   * @returns SetUserSsoSettingsResponse
   */
  async setUserSsoSettings(request: $_model.SetUserSsoSettingsRequest): Promise<$_model.SetUserSsoSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setUserSsoSettingsWithOptions(request, runtime);
  }

  /**
   * 新增录入/修改安全手机号码、安全邮箱的API
   * 
   * @param request - SetVerificationInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetVerificationInfoResponse
   */
  async setVerificationInfoWithOptions(request: $_model.SetVerificationInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetVerificationInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.mobilePhone)) {
      query["MobilePhone"] = request.mobilePhone;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetVerificationInfo",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetVerificationInfoResponse>(await this.callApi(params, req, runtime), new $_model.SetVerificationInfoResponse({}));
  }

  /**
   * 新增录入/修改安全手机号码、安全邮箱的API
   * 
   * @param request - SetVerificationInfoRequest
   * @returns SetVerificationInfoResponse
   */
  async setVerificationInfo(request: $_model.SetVerificationInfoRequest): Promise<$_model.SetVerificationInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVerificationInfoWithOptions(request, runtime);
  }

  /**
   * 资源打上标签
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourcePrincipalName)) {
      query["ResourcePrincipalName"] = request.resourcePrincipalName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * 资源打上标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 为RAM用户解绑多因素认证设备
   * 
   * @param request - UnbindMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindMFADeviceResponse
   */
  async unbindMFADeviceWithOptions(request: $_model.UnbindMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindMFADeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindMFADevice",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindMFADeviceResponse>(await this.callApi(params, req, runtime), new $_model.UnbindMFADeviceResponse({}));
  }

  /**
   * 为RAM用户解绑多因素认证设备
   * 
   * @param request - UnbindMFADeviceRequest
   * @returns UnbindMFADeviceResponse
   */
  async unbindMFADevice(request: $_model.UnbindMFADeviceRequest): Promise<$_model.UnbindMFADeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindMFADeviceWithOptions(request, runtime);
  }

  /**
   * 删除用户的安全认证
   * 
   * @param request - UnbindVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindVerificationResponse
   */
  async unbindVerificationWithOptions(request: $_model.UnbindVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.mobilePhone)) {
      query["MobilePhone"] = request.mobilePhone;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindVerification",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindVerificationResponse>(await this.callApi(params, req, runtime), new $_model.UnbindVerificationResponse({}));
  }

  /**
   * 删除用户的安全认证
   * 
   * @param request - UnbindVerificationRequest
   * @returns UnbindVerificationResponse
   */
  async unbindVerification(request: $_model.UnbindVerificationRequest): Promise<$_model.UnbindVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindVerificationWithOptions(request, runtime);
  }

  /**
   * 解绑资源的标签
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourcePrincipalName)) {
      query["ResourcePrincipalName"] = request.resourcePrincipalName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * 解绑资源的标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * 修改访问密钥状态
   * 
   * @param request - UpdateAccessKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccessKeyResponse
   */
  async updateAccessKeyWithOptions(request: $_model.UpdateAccessKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAccessKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccessKey",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAccessKeyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAccessKeyResponse({}));
  }

  /**
   * 修改访问密钥状态
   * 
   * @param request - UpdateAccessKeyRequest
   * @returns UpdateAccessKeyResponse
   */
  async updateAccessKey(request: $_model.UpdateAccessKeyRequest): Promise<$_model.UpdateAccessKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccessKeyWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a specified application.
   * 
   * @param request - UpdateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationResponse
   */
  async updateApplicationWithOptions(request: $_model.UpdateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.newAccessTokenValidity)) {
      query["NewAccessTokenValidity"] = request.newAccessTokenValidity;
    }

    if (!$dara.isNull(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    if (!$dara.isNull(request.newIsMultiTenant)) {
      query["NewIsMultiTenant"] = request.newIsMultiTenant;
    }

    if (!$dara.isNull(request.newPredefinedScopes)) {
      query["NewPredefinedScopes"] = request.newPredefinedScopes;
    }

    if (!$dara.isNull(request.newRedirectUris)) {
      query["NewRedirectUris"] = request.newRedirectUris;
    }

    if (!$dara.isNull(request.newRefreshTokenValidity)) {
      query["NewRefreshTokenValidity"] = request.newRefreshTokenValidity;
    }

    if (!$dara.isNull(request.newRequiredScopes)) {
      query["NewRequiredScopes"] = request.newRequiredScopes;
    }

    if (!$dara.isNull(request.newSecretRequired)) {
      query["NewSecretRequired"] = request.newSecretRequired;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationResponse({}));
  }

  /**
   * Updates the configuration of a specified application.
   * 
   * @param request - UpdateApplicationRequest
   * @returns UpdateApplicationResponse
   */
  async updateApplication(request: $_model.UpdateApplicationRequest): Promise<$_model.UpdateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationWithOptions(request, runtime);
  }

  /**
   * 修改指定用户组的信息
   * 
   * @param request - UpdateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(request: $_model.UpdateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.newComments)) {
      query["NewComments"] = request.newComments;
    }

    if (!$dara.isNull(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    if (!$dara.isNull(request.newGroupName)) {
      query["NewGroupName"] = request.newGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGroupResponse({}));
  }

  /**
   * 修改指定用户组的信息
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: $_model.UpdateGroupRequest): Promise<$_model.UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the console logon information for a specified Resource Access Management (RAM) user.
   * 
   * @param request - UpdateLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoginProfileResponse
   */
  async updateLoginProfileWithOptions(request: $_model.UpdateLoginProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoginProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.MFABindRequired)) {
      query["MFABindRequired"] = request.MFABindRequired;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordResetRequired)) {
      query["PasswordResetRequired"] = request.passwordResetRequired;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoginProfile",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLoginProfileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLoginProfileResponse({}));
  }

  /**
   * Modifies the console logon information for a specified Resource Access Management (RAM) user.
   * 
   * @param request - UpdateLoginProfileRequest
   * @returns UpdateLoginProfileResponse
   */
  async updateLoginProfile(request: $_model.UpdateLoginProfileRequest): Promise<$_model.UpdateLoginProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoginProfileWithOptions(request, runtime);
  }

  /**
   * 修改OIDC身份提供商的描述和客户端ID
   * 
   * @param request - UpdateOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOIDCProviderResponse
   */
  async updateOIDCProviderWithOptions(request: $_model.UpdateOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOIDCProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIds)) {
      query["ClientIds"] = request.clientIds;
    }

    if (!$dara.isNull(request.issuanceLimitTime)) {
      query["IssuanceLimitTime"] = request.issuanceLimitTime;
    }

    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOIDCProviderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOIDCProviderResponse({}));
  }

  /**
   * 修改OIDC身份提供商的描述和客户端ID
   * 
   * @param request - UpdateOIDCProviderRequest
   * @returns UpdateOIDCProviderResponse
   */
  async updateOIDCProvider(request: $_model.UpdateOIDCProviderRequest): Promise<$_model.UpdateOIDCProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOIDCProviderWithOptions(request, runtime);
  }

  /**
   * 更新Passkey
   * 
   * @param request - UpdatePasskeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePasskeyResponse
   */
  async updatePasskeyWithOptions(request: $_model.UpdatePasskeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePasskeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.passkeyId)) {
      query["PasskeyId"] = request.passkeyId;
    }

    if (!$dara.isNull(request.passkeyName)) {
      query["PasskeyName"] = request.passkeyName;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePasskey",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePasskeyResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePasskeyResponse({}));
  }

  /**
   * 更新Passkey
   * 
   * @param request - UpdatePasskeyRequest
   * @returns UpdatePasskeyResponse
   */
  async updatePasskey(request: $_model.UpdatePasskeyRequest): Promise<$_model.UpdatePasskeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePasskeyWithOptions(request, runtime);
  }

  /**
   * Updates the information about a specified identity provider for role-based single sign-on (SSO).
   * 
   * @remarks
   * This example shows how to change the description of the identity provider `test-provider` to `This is a new provider.`.
   * 
   * @param request - UpdateSAMLProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSAMLProviderResponse
   */
  async updateSAMLProviderWithOptions(request: $_model.UpdateSAMLProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSAMLProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authnSignAlgo)) {
      query["AuthnSignAlgo"] = request.authnSignAlgo;
    }

    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.newEncodedSAMLMetadataDocument)) {
      query["NewEncodedSAMLMetadataDocument"] = request.newEncodedSAMLMetadataDocument;
    }

    if (!$dara.isNull(request.SAMLProviderName)) {
      query["SAMLProviderName"] = request.SAMLProviderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSAMLProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSAMLProviderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSAMLProviderResponse({}));
  }

  /**
   * Updates the information about a specified identity provider for role-based single sign-on (SSO).
   * 
   * @remarks
   * This example shows how to change the description of the identity provider `test-provider` to `This is a new provider.`.
   * 
   * @param request - UpdateSAMLProviderRequest
   * @returns UpdateSAMLProviderResponse
   */
  async updateSAMLProvider(request: $_model.UpdateSAMLProviderRequest): Promise<$_model.UpdateSAMLProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSAMLProviderWithOptions(request, runtime);
  }

  /**
   * 修改RAM用户信息
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newComments)) {
      query["NewComments"] = request.newComments;
    }

    if (!$dara.isNull(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    if (!$dara.isNull(request.newEmail)) {
      query["NewEmail"] = request.newEmail;
    }

    if (!$dara.isNull(request.newMobilePhone)) {
      query["NewMobilePhone"] = request.newMobilePhone;
    }

    if (!$dara.isNull(request.newUserPrincipalName)) {
      query["NewUserPrincipalName"] = request.newUserPrincipalName;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2019-08-15",
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
   * 修改RAM用户信息
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
