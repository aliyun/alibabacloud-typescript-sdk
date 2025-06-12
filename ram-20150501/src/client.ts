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
    this._endpoint = this.getEndpoint("ram", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a Resource Access Management (RAM) user to a RAM user group.
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

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToGroup",
      version: "2015-05-01",
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
   * Adds a Resource Access Management (RAM) user to a RAM user group.
   * 
   * @param request - AddUserToGroupRequest
   * @returns AddUserToGroupResponse
   */
  async addUserToGroup(request: $_model.AddUserToGroupRequest): Promise<$_model.AddUserToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToGroupWithOptions(request, runtime);
  }

  /**
   * Attaches a policy to a Resource Access Management (RAM) user group.
   * 
   * @param request - AttachPolicyToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicyToGroupResponse
   */
  async attachPolicyToGroupWithOptions(request: $_model.AttachPolicyToGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachPolicyToGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachPolicyToGroup",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachPolicyToGroupResponse>(await this.callApi(params, req, runtime), new $_model.AttachPolicyToGroupResponse({}));
  }

  /**
   * Attaches a policy to a Resource Access Management (RAM) user group.
   * 
   * @param request - AttachPolicyToGroupRequest
   * @returns AttachPolicyToGroupResponse
   */
  async attachPolicyToGroup(request: $_model.AttachPolicyToGroupRequest): Promise<$_model.AttachPolicyToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPolicyToGroupWithOptions(request, runtime);
  }

  /**
   * Attaches a policy to a Resource Access Management (RAM) role.
   * 
   * @param request - AttachPolicyToRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicyToRoleResponse
   */
  async attachPolicyToRoleWithOptions(request: $_model.AttachPolicyToRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachPolicyToRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachPolicyToRole",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachPolicyToRoleResponse>(await this.callApi(params, req, runtime), new $_model.AttachPolicyToRoleResponse({}));
  }

  /**
   * Attaches a policy to a Resource Access Management (RAM) role.
   * 
   * @param request - AttachPolicyToRoleRequest
   * @returns AttachPolicyToRoleResponse
   */
  async attachPolicyToRole(request: $_model.AttachPolicyToRoleRequest): Promise<$_model.AttachPolicyToRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPolicyToRoleWithOptions(request, runtime);
  }

  /**
   * Attaches a policy to a Resource Access Management (RAM) user.
   * 
   * @param request - AttachPolicyToUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicyToUserResponse
   */
  async attachPolicyToUserWithOptions(request: $_model.AttachPolicyToUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachPolicyToUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachPolicyToUser",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachPolicyToUserResponse>(await this.callApi(params, req, runtime), new $_model.AttachPolicyToUserResponse({}));
  }

  /**
   * Attaches a policy to a Resource Access Management (RAM) user.
   * 
   * @param request - AttachPolicyToUserRequest
   * @returns AttachPolicyToUserResponse
   */
  async attachPolicyToUser(request: $_model.AttachPolicyToUserRequest): Promise<$_model.AttachPolicyToUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPolicyToUserWithOptions(request, runtime);
  }

  /**
   * Binds a multi-factor authentication (MFA) device to a Resource Access Management (RAM) user.
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

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindMFADevice",
      version: "2015-05-01",
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
   * Binds a multi-factor authentication (MFA) device to a Resource Access Management (RAM) user.
   * 
   * @param request - BindMFADeviceRequest
   * @returns BindMFADeviceResponse
   */
  async bindMFADevice(request: $_model.BindMFADeviceRequest): Promise<$_model.BindMFADeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindMFADeviceWithOptions(request, runtime);
  }

  /**
   * Changes the password that is used to log on to the console for a Resource Access Management (RAM) user.
   * 
   * @remarks
   * >  This operation is available only for RAM users. Before you call this operation, make sure that `AllowUserToChangePassword` in [SetSecurityPreference](https://help.aliyun.com/document_detail/43765.html) is set to `True`. The value True indicates that RAM users can manage their passwords.
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
      version: "2015-05-01",
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
   * Changes the password that is used to log on to the console for a Resource Access Management (RAM) user.
   * 
   * @remarks
   * >  This operation is available only for RAM users. Before you call this operation, make sure that `AllowUserToChangePassword` in [SetSecurityPreference](https://help.aliyun.com/document_detail/43765.html) is set to `True`. The value True indicates that RAM users can manage their passwords.
   * 
   * @param request - ChangePasswordRequest
   * @returns ChangePasswordResponse
   */
  async changePassword(request: $_model.ChangePasswordRequest): Promise<$_model.ChangePasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changePasswordWithOptions(request, runtime);
  }

  /**
   * Deletes the alias of an Alibaba Cloud account.
   * 
   * @param request - ClearAccountAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearAccountAliasResponse
   */
  async clearAccountAliasWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ClearAccountAliasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ClearAccountAlias",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearAccountAliasResponse>(await this.callApi(params, req, runtime), new $_model.ClearAccountAliasResponse({}));
  }

  /**
   * Deletes the alias of an Alibaba Cloud account.
   * @returns ClearAccountAliasResponse
   */
  async clearAccountAlias(): Promise<$_model.ClearAccountAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearAccountAliasWithOptions(runtime);
  }

  /**
   * Creates an AccessKey pair for a Resource Access Management (RAM) user.
   * 
   * @param request - CreateAccessKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessKeyResponse
   */
  async createAccessKeyWithOptions(request: $_model.CreateAccessKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessKey",
      version: "2015-05-01",
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
   * Creates an AccessKey pair for a Resource Access Management (RAM) user.
   * 
   * @param request - CreateAccessKeyRequest
   * @returns CreateAccessKeyResponse
   */
  async createAccessKey(request: $_model.CreateAccessKeyRequest): Promise<$_model.CreateAccessKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessKeyWithOptions(request, runtime);
  }

  /**
   * Creates a RAM user group.
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

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2015-05-01",
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
   * Creates a RAM user group.
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * Enables console logon for a Resource Access Management (RAM) user.
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

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoginProfile",
      version: "2015-05-01",
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
   * Enables console logon for a Resource Access Management (RAM) user.
   * 
   * @param request - CreateLoginProfileRequest
   * @returns CreateLoginProfileResponse
   */
  async createLoginProfile(request: $_model.CreateLoginProfileRequest): Promise<$_model.CreateLoginProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoginProfileWithOptions(request, runtime);
  }

  /**
   * Creates a custom policy.
   * 
   * @remarks
   * For more information about policies, see [Policy overview](https://help.aliyun.com/document_detail/93732.html).
   * This topic provides an example on how to create a custom policy to query Elastic Compute Service (ECS) instances in a specific region.
   * 
   * @param tmpReq - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(tmpReq: $_model.CreatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2015-05-01",
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
   * Creates a custom policy.
   * 
   * @remarks
   * For more information about policies, see [Policy overview](https://help.aliyun.com/document_detail/93732.html).
   * This topic provides an example on how to create a custom policy to query Elastic Compute Service (ECS) instances in a specific region.
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: $_model.CreatePolicyRequest): Promise<$_model.CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a version for a policy.
   * 
   * @param request - CreatePolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyVersionResponse
   */
  async createPolicyVersionWithOptions(request: $_model.CreatePolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.rotateStrategy)) {
      query["RotateStrategy"] = request.rotateStrategy;
    }

    if (!$dara.isNull(request.setAsDefault)) {
      query["SetAsDefault"] = request.setAsDefault;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyVersion",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyVersionResponse({}));
  }

  /**
   * Creates a version for a policy.
   * 
   * @param request - CreatePolicyVersionRequest
   * @returns CreatePolicyVersionResponse
   */
  async createPolicyVersion(request: $_model.CreatePolicyVersionRequest): Promise<$_model.CreatePolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyVersionWithOptions(request, runtime);
  }

  /**
   * Creates a Resource Access Management (RAM) role.
   * 
   * @remarks
   * ### [](#)Operation description
   * For more information about RAM roles, see [Overview of RAM roles](https://help.aliyun.com/document_detail/93689.html).
   * 
   * @param tmpReq - CreateRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoleResponse
   */
  async createRoleWithOptions(tmpReq: $_model.CreateRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRoleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRoleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeRolePolicyDocument)) {
      query["AssumeRolePolicyDocument"] = request.assumeRolePolicyDocument;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.maxSessionDuration)) {
      query["MaxSessionDuration"] = request.maxSessionDuration;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRole",
      version: "2015-05-01",
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
   * Creates a Resource Access Management (RAM) role.
   * 
   * @remarks
   * ### [](#)Operation description
   * For more information about RAM roles, see [Overview of RAM roles](https://help.aliyun.com/document_detail/93689.html).
   * 
   * @param request - CreateRoleRequest
   * @returns CreateRoleResponse
   */
  async createRole(request: $_model.CreateRoleRequest): Promise<$_model.CreateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRoleWithOptions(request, runtime);
  }

  /**
   * Creates a Resource Access Management (RAM) user.
   * 
   * @remarks
   * This topic provides an example on how to create a RAM user named `alice`.
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

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2015-05-01",
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
   * Creates a Resource Access Management (RAM) user.
   * 
   * @remarks
   * This topic provides an example on how to create a RAM user named `alice`.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * Creates a multi-factor authentication (MFA) device.
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
      version: "2015-05-01",
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
   * Creates a multi-factor authentication (MFA) device.
   * 
   * @param request - CreateVirtualMFADeviceRequest
   * @returns CreateVirtualMFADeviceResponse
   */
  async createVirtualMFADevice(request: $_model.CreateVirtualMFADeviceRequest): Promise<$_model.CreateVirtualMFADeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVirtualMFADeviceWithOptions(request, runtime);
  }

  /**
   * Decodes the diagnostic information in the response that contains an access denied error. The error is caused by no RAM permissions.
   * 
   * @param request - DecodeDiagnosticMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DecodeDiagnosticMessageResponse
   */
  async decodeDiagnosticMessageWithOptions(request: $_model.DecodeDiagnosticMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DecodeDiagnosticMessageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encodedDiagnosticMessage)) {
      query["EncodedDiagnosticMessage"] = request.encodedDiagnosticMessage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DecodeDiagnosticMessage",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DecodeDiagnosticMessageResponse>(await this.callApi(params, req, runtime), new $_model.DecodeDiagnosticMessageResponse({}));
  }

  /**
   * Decodes the diagnostic information in the response that contains an access denied error. The error is caused by no RAM permissions.
   * 
   * @param request - DecodeDiagnosticMessageRequest
   * @returns DecodeDiagnosticMessageResponse
   */
  async decodeDiagnosticMessage(request: $_model.DecodeDiagnosticMessageRequest): Promise<$_model.DecodeDiagnosticMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.decodeDiagnosticMessageWithOptions(request, runtime);
  }

  /**
   * Deletes an AccessKey pair of a Resource Access Management (RAM) user.
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

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessKey",
      version: "2015-05-01",
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
   * Deletes an AccessKey pair of a Resource Access Management (RAM) user.
   * 
   * @param request - DeleteAccessKeyRequest
   * @returns DeleteAccessKeyResponse
   */
  async deleteAccessKey(request: $_model.DeleteAccessKeyRequest): Promise<$_model.DeleteAccessKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessKeyWithOptions(request, runtime);
  }

  /**
   * Deletes a Resource Access Management (RAM) user group.
   * 
   * @remarks
   * Before you delete a RAM user group, make sure that no policies are attached to the group and no RAM users are included in the group.
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
      version: "2015-05-01",
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
   * Deletes a Resource Access Management (RAM) user group.
   * 
   * @remarks
   * Before you delete a RAM user group, make sure that no policies are attached to the group and no RAM users are included in the group.
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: $_model.DeleteGroupRequest): Promise<$_model.DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * Disables console logon for a Resource Access Management (RAM) user.
   * 
   * @param request - DeleteLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoginProfileResponse
   */
  async deleteLoginProfileWithOptions(request: $_model.DeleteLoginProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLoginProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLoginProfile",
      version: "2015-05-01",
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
   * Disables console logon for a Resource Access Management (RAM) user.
   * 
   * @param request - DeleteLoginProfileRequest
   * @returns DeleteLoginProfileResponse
   */
  async deleteLoginProfile(request: $_model.DeleteLoginProfileRequest): Promise<$_model.DeleteLoginProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLoginProfileWithOptions(request, runtime);
  }

  /**
   * Deletes a policy.
   * 
   * @param request - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: $_model.DeletePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cascadingDelete)) {
      query["CascadingDelete"] = request.cascadingDelete;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2015-05-01",
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
   * Deletes a policy.
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: $_model.DeletePolicyRequest): Promise<$_model.DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a policy version.
   * 
   * @param request - DeletePolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyVersionResponse
   */
  async deletePolicyVersionWithOptions(request: $_model.DeletePolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyVersion",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyVersionResponse({}));
  }

  /**
   * Deletes a policy version.
   * 
   * @param request - DeletePolicyVersionRequest
   * @returns DeletePolicyVersionResponse
   */
  async deletePolicyVersion(request: $_model.DeletePolicyVersionRequest): Promise<$_model.DeletePolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyVersionWithOptions(request, runtime);
  }

  /**
   * Deletes a Resource Access Management (RAM) role.
   * 
   * @param request - DeleteRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoleResponse
   */
  async deleteRoleWithOptions(request: $_model.DeleteRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRole",
      version: "2015-05-01",
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
   * Deletes a Resource Access Management (RAM) role.
   * 
   * @param request - DeleteRoleRequest
   * @returns DeleteRoleResponse
   */
  async deleteRole(request: $_model.DeleteRoleRequest): Promise<$_model.DeleteRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoleWithOptions(request, runtime);
  }

  /**
   * Deletes a Resource Access Management (RAM) user.
   * 
   * @remarks
   * Before you delete a RAM user, make sure that no policies are attached to the RAM user and that the RAM user does not belong to any groups.
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: $_model.DeleteUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2015-05-01",
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
   * Deletes a Resource Access Management (RAM) user.
   * 
   * @remarks
   * Before you delete a RAM user, make sure that no policies are attached to the RAM user and that the RAM user does not belong to any groups.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * Deletes a multi-factor authentication (MFA) device.
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
      version: "2015-05-01",
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
   * Deletes a multi-factor authentication (MFA) device.
   * 
   * @param request - DeleteVirtualMFADeviceRequest
   * @returns DeleteVirtualMFADeviceResponse
   */
  async deleteVirtualMFADevice(request: $_model.DeleteVirtualMFADeviceRequest): Promise<$_model.DeleteVirtualMFADeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  /**
   * Detaches a policy from a Resource Access Management (RAM) user group.
   * 
   * @param request - DetachPolicyFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicyFromGroupResponse
   */
  async detachPolicyFromGroupWithOptions(request: $_model.DetachPolicyFromGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachPolicyFromGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachPolicyFromGroup",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachPolicyFromGroupResponse>(await this.callApi(params, req, runtime), new $_model.DetachPolicyFromGroupResponse({}));
  }

  /**
   * Detaches a policy from a Resource Access Management (RAM) user group.
   * 
   * @param request - DetachPolicyFromGroupRequest
   * @returns DetachPolicyFromGroupResponse
   */
  async detachPolicyFromGroup(request: $_model.DetachPolicyFromGroupRequest): Promise<$_model.DetachPolicyFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPolicyFromGroupWithOptions(request, runtime);
  }

  /**
   * Detaches a policy from a Resource Access Management (RAM) role.
   * 
   * @param request - DetachPolicyFromRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicyFromRoleResponse
   */
  async detachPolicyFromRoleWithOptions(request: $_model.DetachPolicyFromRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachPolicyFromRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachPolicyFromRole",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachPolicyFromRoleResponse>(await this.callApi(params, req, runtime), new $_model.DetachPolicyFromRoleResponse({}));
  }

  /**
   * Detaches a policy from a Resource Access Management (RAM) role.
   * 
   * @param request - DetachPolicyFromRoleRequest
   * @returns DetachPolicyFromRoleResponse
   */
  async detachPolicyFromRole(request: $_model.DetachPolicyFromRoleRequest): Promise<$_model.DetachPolicyFromRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPolicyFromRoleWithOptions(request, runtime);
  }

  /**
   * Detaches a policy from a Resource Access Management (RAM) user.
   * 
   * @param request - DetachPolicyFromUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicyFromUserResponse
   */
  async detachPolicyFromUserWithOptions(request: $_model.DetachPolicyFromUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachPolicyFromUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachPolicyFromUser",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachPolicyFromUserResponse>(await this.callApi(params, req, runtime), new $_model.DetachPolicyFromUserResponse({}));
  }

  /**
   * Detaches a policy from a Resource Access Management (RAM) user.
   * 
   * @param request - DetachPolicyFromUserRequest
   * @returns DetachPolicyFromUserResponse
   */
  async detachPolicyFromUser(request: $_model.DetachPolicyFromUserRequest): Promise<$_model.DetachPolicyFromUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPolicyFromUserWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessKeyLastUsed",
      version: "2015-05-01",
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
   * @param request - GetAccessKeyLastUsedRequest
   * @returns GetAccessKeyLastUsedResponse
   */
  async getAccessKeyLastUsed(request: $_model.GetAccessKeyLastUsedRequest): Promise<$_model.GetAccessKeyLastUsedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedWithOptions(request, runtime);
  }

  /**
   * Queries the alias of an Alibaba Cloud account.
   * 
   * @param request - GetAccountAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountAliasResponse
   */
  async getAccountAliasWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountAliasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountAlias",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountAliasResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountAliasResponse({}));
  }

  /**
   * Queries the alias of an Alibaba Cloud account.
   * @returns GetAccountAliasResponse
   */
  async getAccountAlias(): Promise<$_model.GetAccountAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountAliasWithOptions(runtime);
  }

  /**
   * Queries information about a Resource Access Management (RAM) user group.
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
      version: "2015-05-01",
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
   * Queries information about a Resource Access Management (RAM) user group.
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: $_model.GetGroupRequest): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * Queries the logon configurations of a Resource Access Management (RAM) user.
   * 
   * @param request - GetLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginProfileResponse
   */
  async getLoginProfileWithOptions(request: $_model.GetLoginProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoginProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoginProfile",
      version: "2015-05-01",
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
   * Queries the logon configurations of a Resource Access Management (RAM) user.
   * 
   * @param request - GetLoginProfileRequest
   * @returns GetLoginProfileResponse
   */
  async getLoginProfile(request: $_model.GetLoginProfileRequest): Promise<$_model.GetLoginProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoginProfileWithOptions(request, runtime);
  }

  /**
   * Queries the password policy of Resource Access Management (RAM) users, including the password strength.
   * 
   * @param request - GetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordPolicyResponse
   */
  async getPasswordPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordPolicy",
      version: "2015-05-01",
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
   * Queries the password policy of Resource Access Management (RAM) users, including the password strength.
   * @returns GetPasswordPolicyResponse
   */
  async getPasswordPolicy(): Promise<$_model.GetPasswordPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordPolicyWithOptions(runtime);
  }

  /**
   * Queries information about a policy.
   * 
   * @param request - GetPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyResponse
   */
  async getPolicyWithOptions(request: $_model.GetPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicy",
      version: "2015-05-01",
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
   * Queries information about a policy.
   * 
   * @param request - GetPolicyRequest
   * @returns GetPolicyResponse
   */
  async getPolicy(request: $_model.GetPolicyRequest): Promise<$_model.GetPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the information about a policy version.
   * 
   * @param request - GetPolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyVersionResponse
   */
  async getPolicyVersionWithOptions(request: $_model.GetPolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyVersion",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyVersionResponse({}));
  }

  /**
   * Queries the information about a policy version.
   * 
   * @param request - GetPolicyVersionRequest
   * @returns GetPolicyVersionResponse
   */
  async getPolicyVersion(request: $_model.GetPolicyVersionRequest): Promise<$_model.GetPolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyVersionWithOptions(request, runtime);
  }

  /**
   * Queries information about a Resource Access Management (RAM) role.
   * 
   * @param request - GetRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleResponse
   */
  async getRoleWithOptions(request: $_model.GetRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRole",
      version: "2015-05-01",
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
   * Queries information about a Resource Access Management (RAM) role.
   * 
   * @param request - GetRoleRequest
   * @returns GetRoleResponse
   */
  async getRole(request: $_model.GetRoleRequest): Promise<$_model.GetRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRoleWithOptions(request, runtime);
  }

  /**
   * Queries the security preferences.
   * 
   * @param request - GetSecurityPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecurityPreferenceResponse
   */
  async getSecurityPreferenceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetSecurityPreferenceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetSecurityPreference",
      version: "2015-05-01",
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
   * Queries the security preferences.
   * @returns GetSecurityPreferenceResponse
   */
  async getSecurityPreference(): Promise<$_model.GetSecurityPreferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecurityPreferenceWithOptions(runtime);
  }

  /**
   * Queries information about a Resource Access Management (RAM) user.
   * 
   * @remarks
   * This topic provides an example on how to query information about the RAM user `alice`.
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2015-05-01",
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
   * Queries information about a Resource Access Management (RAM) user.
   * 
   * @remarks
   * This topic provides an example on how to query information about the RAM user `alice`.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * Queries the multi-factor authentication (MFA) device that is bound to a Resource Access Management (RAM) user.
   * 
   * @param request - GetUserMFAInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserMFAInfoResponse
   */
  async getUserMFAInfoWithOptions(request: $_model.GetUserMFAInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserMFAInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserMFAInfo",
      version: "2015-05-01",
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
   * Queries the multi-factor authentication (MFA) device that is bound to a Resource Access Management (RAM) user.
   * 
   * @param request - GetUserMFAInfoRequest
   * @returns GetUserMFAInfoResponse
   */
  async getUserMFAInfo(request: $_model.GetUserMFAInfoRequest): Promise<$_model.GetUserMFAInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserMFAInfoWithOptions(request, runtime);
  }

  /**
   * Queries all AccessKey pairs that belong to a Resource Access Management (RAM) user.
   * 
   * @param request - ListAccessKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessKeysResponse
   */
  async listAccessKeysWithOptions(request: $_model.ListAccessKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessKeys",
      version: "2015-05-01",
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
   * Queries all AccessKey pairs that belong to a Resource Access Management (RAM) user.
   * 
   * @param request - ListAccessKeysRequest
   * @returns ListAccessKeysResponse
   */
  async listAccessKeys(request: $_model.ListAccessKeysRequest): Promise<$_model.ListAccessKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessKeysWithOptions(request, runtime);
  }

  /**
   * Queries the entities to which a policy is attached.
   * 
   * @param request - ListEntitiesForPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEntitiesForPolicyResponse
   */
  async listEntitiesForPolicyWithOptions(request: $_model.ListEntitiesForPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEntitiesForPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEntitiesForPolicy",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEntitiesForPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListEntitiesForPolicyResponse({}));
  }

  /**
   * Queries the entities to which a policy is attached.
   * 
   * @param request - ListEntitiesForPolicyRequest
   * @returns ListEntitiesForPolicyResponse
   */
  async listEntitiesForPolicy(request: $_model.ListEntitiesForPolicyRequest): Promise<$_model.ListEntitiesForPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEntitiesForPolicyWithOptions(request, runtime);
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
      version: "2015-05-01",
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
   * Queries the Resource Access Management (RAM) user groups to which a RAM user belongs.
   * 
   * @remarks
   * ### [](#)
   * This topic provides an example on how to query the RAM user groups to which the RAM user `Alice` belongs. The response shows that `Alice` belongs to the RAM user group named `Dev-Team`.
   * 
   * @param request - ListGroupsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUserWithOptions(request: $_model.ListGroupsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupsForUser",
      version: "2015-05-01",
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
   * Queries the Resource Access Management (RAM) user groups to which a RAM user belongs.
   * 
   * @remarks
   * ### [](#)
   * This topic provides an example on how to query the RAM user groups to which the RAM user `Alice` belongs. The response shows that `Alice` belongs to the RAM user group named `Dev-Team`.
   * 
   * @param request - ListGroupsForUserRequest
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUser(request: $_model.ListGroupsForUserRequest): Promise<$_model.ListGroupsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  /**
   * Queries a list of policies.
   * 
   * @param tmpReq - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(tmpReq: $_model.ListPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesResponse> {
    tmpReq.validate();
    let request = new $_model.ListPoliciesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicies",
      version: "2015-05-01",
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
   * Queries a list of policies.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the policies that are attached to a Resource Access Management (RAM) user group.
   * 
   * @param request - ListPoliciesForGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesForGroupResponse
   */
  async listPoliciesForGroupWithOptions(request: $_model.ListPoliciesForGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesForGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPoliciesForGroup",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPoliciesForGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListPoliciesForGroupResponse({}));
  }

  /**
   * Queries the policies that are attached to a Resource Access Management (RAM) user group.
   * 
   * @param request - ListPoliciesForGroupRequest
   * @returns ListPoliciesForGroupResponse
   */
  async listPoliciesForGroup(request: $_model.ListPoliciesForGroupRequest): Promise<$_model.ListPoliciesForGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesForGroupWithOptions(request, runtime);
  }

  /**
   * Queries the policies that are attached to a Resource Access Management (RAM) role.
   * 
   * @param request - ListPoliciesForRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesForRoleResponse
   */
  async listPoliciesForRoleWithOptions(request: $_model.ListPoliciesForRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesForRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPoliciesForRole",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPoliciesForRoleResponse>(await this.callApi(params, req, runtime), new $_model.ListPoliciesForRoleResponse({}));
  }

  /**
   * Queries the policies that are attached to a Resource Access Management (RAM) role.
   * 
   * @param request - ListPoliciesForRoleRequest
   * @returns ListPoliciesForRoleResponse
   */
  async listPoliciesForRole(request: $_model.ListPoliciesForRoleRequest): Promise<$_model.ListPoliciesForRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesForRoleWithOptions(request, runtime);
  }

  /**
   * Queries the policies that are attached to a RAM user.
   * 
   * @remarks
   * > You can call this operation to query only the policies that are attached to Alibaba Cloud accounts. You cannot query the policies that are attached to resource groups.
   * 
   * @param request - ListPoliciesForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesForUserResponse
   */
  async listPoliciesForUserWithOptions(request: $_model.ListPoliciesForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPoliciesForUser",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPoliciesForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListPoliciesForUserResponse({}));
  }

  /**
   * Queries the policies that are attached to a RAM user.
   * 
   * @remarks
   * > You can call this operation to query only the policies that are attached to Alibaba Cloud accounts. You cannot query the policies that are attached to resource groups.
   * 
   * @param request - ListPoliciesForUserRequest
   * @returns ListPoliciesForUserResponse
   */
  async listPoliciesForUser(request: $_model.ListPoliciesForUserRequest): Promise<$_model.ListPoliciesForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesForUserWithOptions(request, runtime);
  }

  /**
   * Queries the versions of a policy.
   * 
   * @param request - ListPolicyVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyVersionsResponse
   */
  async listPolicyVersionsWithOptions(request: $_model.ListPolicyVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicyVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyVersions",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicyVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicyVersionsResponse({}));
  }

  /**
   * Queries the versions of a policy.
   * 
   * @param request - ListPolicyVersionsRequest
   * @returns ListPolicyVersionsResponse
   */
  async listPolicyVersions(request: $_model.ListPolicyVersionsRequest): Promise<$_model.ListPolicyVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyVersionsWithOptions(request, runtime);
  }

  /**
   * Queries all Resource Access Management (RAM) roles.
   * 
   * @param tmpReq - ListRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(tmpReq: $_model.ListRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRolesResponse> {
    tmpReq.validate();
    let request = new $_model.ListRolesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2015-05-01",
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
   * Queries all Resource Access Management (RAM) roles.
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: $_model.ListRolesRequest): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resources.
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceNames)) {
      request.resourceNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceNames, "ResourceNames", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceNamesShrink)) {
      query["ResourceNames"] = request.resourceNamesShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2015-05-01",
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
   * Queries the tags that are added to resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the information about all RAM users.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2015-05-01",
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
   * Queries the information about all RAM users.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Queries Resource Access Management (RAM) users in a RAM user group.
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
      version: "2015-05-01",
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
   * Queries Resource Access Management (RAM) users in a RAM user group.
   * 
   * @param request - ListUsersForGroupRequest
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroup(request: $_model.ListUsersForGroupRequest): Promise<$_model.ListUsersForGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  /**
   * Queries multi-factor authentication (MFA) devices.
   * 
   * @param request - ListVirtualMFADevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirtualMFADevicesResponse
   */
  async listVirtualMFADevicesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListVirtualMFADevicesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListVirtualMFADevices",
      version: "2015-05-01",
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
   * @returns ListVirtualMFADevicesResponse
   */
  async listVirtualMFADevices(): Promise<$_model.ListVirtualMFADevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVirtualMFADevicesWithOptions(runtime);
  }

  /**
   * Removes a Resource Access Management (RAM) user from a RAM user group.
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

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromGroup",
      version: "2015-05-01",
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
   * Removes a Resource Access Management (RAM) user from a RAM user group.
   * 
   * @param request - RemoveUserFromGroupRequest
   * @returns RemoveUserFromGroupResponse
   */
  async removeUserFromGroup(request: $_model.RemoveUserFromGroupRequest): Promise<$_model.RemoveUserFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserFromGroupWithOptions(request, runtime);
  }

  /**
   * Configures an alias for an Alibaba Cloud account.
   * 
   * @param request - SetAccountAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAccountAliasResponse
   */
  async setAccountAliasWithOptions(request: $_model.SetAccountAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAccountAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountAlias)) {
      query["AccountAlias"] = request.accountAlias;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAccountAlias",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAccountAliasResponse>(await this.callApi(params, req, runtime), new $_model.SetAccountAliasResponse({}));
  }

  /**
   * Configures an alias for an Alibaba Cloud account.
   * 
   * @param request - SetAccountAliasRequest
   * @returns SetAccountAliasResponse
   */
  async setAccountAlias(request: $_model.SetAccountAliasRequest): Promise<$_model.SetAccountAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAccountAliasWithOptions(request, runtime);
  }

  /**
   * Specifies a version for a policy as the default version.
   * 
   * @param request - SetDefaultPolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultPolicyVersionResponse
   */
  async setDefaultPolicyVersionWithOptions(request: $_model.SetDefaultPolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultPolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultPolicyVersion",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultPolicyVersionResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultPolicyVersionResponse({}));
  }

  /**
   * Specifies a version for a policy as the default version.
   * 
   * @param request - SetDefaultPolicyVersionRequest
   * @returns SetDefaultPolicyVersionResponse
   */
  async setDefaultPolicyVersion(request: $_model.SetDefaultPolicyVersionRequest): Promise<$_model.SetDefaultPolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultPolicyVersionWithOptions(request, runtime);
  }

  /**
   * Configures the password policy for Resource Access Management (RAM) users, including the password strength.
   * 
   * @param request - SetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordPolicyResponse
   */
  async setPasswordPolicyWithOptions(request: $_model.SetPasswordPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hardExpiry)) {
      query["HardExpiry"] = request.hardExpiry;
    }

    if (!$dara.isNull(request.maxLoginAttemps)) {
      query["MaxLoginAttemps"] = request.maxLoginAttemps;
    }

    if (!$dara.isNull(request.maxPasswordAge)) {
      query["MaxPasswordAge"] = request.maxPasswordAge;
    }

    if (!$dara.isNull(request.minimumPasswordLength)) {
      query["MinimumPasswordLength"] = request.minimumPasswordLength;
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
      version: "2015-05-01",
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
   * Configures the password policy for Resource Access Management (RAM) users, including the password strength.
   * 
   * @param request - SetPasswordPolicyRequest
   * @returns SetPasswordPolicyResponse
   */
  async setPasswordPolicy(request: $_model.SetPasswordPolicyRequest): Promise<$_model.SetPasswordPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordPolicyWithOptions(request, runtime);
  }

  /**
   * Configures the security preferences.
   * 
   * @param request - SetSecurityPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSecurityPreferenceResponse
   */
  async setSecurityPreferenceWithOptions(request: $_model.SetSecurityPreferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSecurityPreferenceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowUserToChangePassword)) {
      query["AllowUserToChangePassword"] = request.allowUserToChangePassword;
    }

    if (!$dara.isNull(request.allowUserToManageAccessKeys)) {
      query["AllowUserToManageAccessKeys"] = request.allowUserToManageAccessKeys;
    }

    if (!$dara.isNull(request.allowUserToManageMFADevices)) {
      query["AllowUserToManageMFADevices"] = request.allowUserToManageMFADevices;
    }

    if (!$dara.isNull(request.allowUserToManagePublicKeys)) {
      query["AllowUserToManagePublicKeys"] = request.allowUserToManagePublicKeys;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSecurityPreference",
      version: "2015-05-01",
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
   * Configures the security preferences.
   * 
   * @param request - SetSecurityPreferenceRequest
   * @returns SetSecurityPreferenceResponse
   */
  async setSecurityPreference(request: $_model.SetSecurityPreferenceRequest): Promise<$_model.SetSecurityPreferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSecurityPreferenceWithOptions(request, runtime);
  }

  /**
   * Adds tags to resources.
   * 
   * @param tmpReq - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(tmpReq: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.TagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceNames)) {
      request.resourceNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceNames, "ResourceNames", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.resourceNamesShrink)) {
      query["ResourceNames"] = request.resourceNamesShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2015-05-01",
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
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unbinds a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.
   * 
   * @param request - UnbindMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindMFADeviceResponse
   */
  async unbindMFADeviceWithOptions(request: $_model.UnbindMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindMFADeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindMFADevice",
      version: "2015-05-01",
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
   * Unbinds a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.
   * 
   * @param request - UnbindMFADeviceRequest
   * @returns UnbindMFADeviceResponse
   */
  async unbindMFADevice(request: $_model.UnbindMFADeviceRequest): Promise<$_model.UnbindMFADeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindMFADeviceWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources.
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceNames)) {
      request.resourceNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceNames, "ResourceNames", "json");
    }

    if (!$dara.isNull(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "TagKeys", "json");
    }

    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceNamesShrink)) {
      query["ResourceNames"] = request.resourceNamesShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeysShrink)) {
      query["TagKeys"] = request.tagKeysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2015-05-01",
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
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes the status of an AccessKey pair that belongs to a Resource Access Management (RAM) user.
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

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccessKey",
      version: "2015-05-01",
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
   * Changes the status of an AccessKey pair that belongs to a Resource Access Management (RAM) user.
   * 
   * @param request - UpdateAccessKeyRequest
   * @returns UpdateAccessKeyResponse
   */
  async updateAccessKey(request: $_model.UpdateAccessKeyRequest): Promise<$_model.UpdateAccessKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccessKeyWithOptions(request, runtime);
  }

  /**
   * Modifies a Resource Access Management (RAM) user group.
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

    if (!$dara.isNull(request.newGroupName)) {
      query["NewGroupName"] = request.newGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2015-05-01",
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
   * Modifies a Resource Access Management (RAM) user group.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: $_model.UpdateGroupRequest): Promise<$_model.UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the logon configurations of a Resource Access Management (RAM) user.
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

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoginProfile",
      version: "2015-05-01",
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
   * Modifies the logon configurations of a Resource Access Management (RAM) user.
   * 
   * @param request - UpdateLoginProfileRequest
   * @returns UpdateLoginProfileResponse
   */
  async updateLoginProfile(request: $_model.UpdateLoginProfileRequest): Promise<$_model.UpdateLoginProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoginProfileWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a custom policy.
   * 
   * @remarks
   * ### [](#)
   * You can call this operation to modify only the description of a custom policy. You cannot modify the description of a system policy.
   * 
   * @param request - UpdatePolicyDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyDescriptionResponse
   */
  async updatePolicyDescriptionWithOptions(request: $_model.UpdatePolicyDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolicyDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolicyDescription",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePolicyDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePolicyDescriptionResponse({}));
  }

  /**
   * Modifies the description of a custom policy.
   * 
   * @remarks
   * ### [](#)
   * You can call this operation to modify only the description of a custom policy. You cannot modify the description of a system policy.
   * 
   * @param request - UpdatePolicyDescriptionRequest
   * @returns UpdatePolicyDescriptionResponse
   */
  async updatePolicyDescription(request: $_model.UpdatePolicyDescriptionRequest): Promise<$_model.UpdatePolicyDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePolicyDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies information about a Resource Access Management (RAM) role.
   * 
   * @remarks
   * This topic provides an example on how to change the description of `ECSAdmin` to `ECS administrator`.
   * 
   * @param request - UpdateRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRoleResponse
   */
  async updateRoleWithOptions(request: $_model.UpdateRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newAssumeRolePolicyDocument)) {
      query["NewAssumeRolePolicyDocument"] = request.newAssumeRolePolicyDocument;
    }

    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.newMaxSessionDuration)) {
      query["NewMaxSessionDuration"] = request.newMaxSessionDuration;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRole",
      version: "2015-05-01",
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
   * Modifies information about a Resource Access Management (RAM) role.
   * 
   * @remarks
   * This topic provides an example on how to change the description of `ECSAdmin` to `ECS administrator`.
   * 
   * @param request - UpdateRoleRequest
   * @returns UpdateRoleResponse
   */
  async updateRole(request: $_model.UpdateRoleRequest): Promise<$_model.UpdateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRoleWithOptions(request, runtime);
  }

  /**
   * Modifies information about a Resource Access Management (RAM) user.
   * 
   * @remarks
   * This topic provides an example on how to change the name of a RAM user from `zhangq****` to `xiaoq****`.
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

    if (!$dara.isNull(request.newUserName)) {
      query["NewUserName"] = request.newUserName;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2015-05-01",
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
   * Modifies information about a Resource Access Management (RAM) user.
   * 
   * @remarks
   * This topic provides an example on how to change the name of a RAM user from `zhangq****` to `xiaoq****`.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
