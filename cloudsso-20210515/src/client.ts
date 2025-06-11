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
    this._endpoint = this.getEndpoint("cloudsso", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a Security Assertion Markup Language (SAML) signing certificate.
   * 
   * @remarks
   * You can add up to two SAML signing certificates.
   * This topic provides an example on how to add a SAML signing certificate to the directory `d-00fc2p61****`.
   * 
   * @param request - AddExternalSAMLIdPCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddExternalSAMLIdPCertificateResponse
   */
  async addExternalSAMLIdPCertificateWithOptions(request: $_model.AddExternalSAMLIdPCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddExternalSAMLIdPCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.x509Certificate)) {
      query["X509Certificate"] = request.x509Certificate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddExternalSAMLIdPCertificate",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddExternalSAMLIdPCertificateResponse>(await this.callApi(params, req, runtime), new $_model.AddExternalSAMLIdPCertificateResponse({}));
  }

  /**
   * Adds a Security Assertion Markup Language (SAML) signing certificate.
   * 
   * @remarks
   * You can add up to two SAML signing certificates.
   * This topic provides an example on how to add a SAML signing certificate to the directory `d-00fc2p61****`.
   * 
   * @param request - AddExternalSAMLIdPCertificateRequest
   * @returns AddExternalSAMLIdPCertificateResponse
   */
  async addExternalSAMLIdPCertificate(request: $_model.AddExternalSAMLIdPCertificateRequest): Promise<$_model.AddExternalSAMLIdPCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addExternalSAMLIdPCertificateWithOptions(request, runtime);
  }

  /**
   * Adds a policy to an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to add the system policy `AliyunECSFullAccess` to the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - AddPermissionPolicyToAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPermissionPolicyToAccessConfigurationResponse
   */
  async addPermissionPolicyToAccessConfigurationWithOptions(request: $_model.AddPermissionPolicyToAccessConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPermissionPolicyToAccessConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.inlinePolicyDocument)) {
      query["InlinePolicyDocument"] = request.inlinePolicyDocument;
    }

    if (!$dara.isNull(request.permissionPolicyName)) {
      query["PermissionPolicyName"] = request.permissionPolicyName;
    }

    if (!$dara.isNull(request.permissionPolicyType)) {
      query["PermissionPolicyType"] = request.permissionPolicyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddPermissionPolicyToAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPermissionPolicyToAccessConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.AddPermissionPolicyToAccessConfigurationResponse({}));
  }

  /**
   * Adds a policy to an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to add the system policy `AliyunECSFullAccess` to the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - AddPermissionPolicyToAccessConfigurationRequest
   * @returns AddPermissionPolicyToAccessConfigurationResponse
   */
  async addPermissionPolicyToAccessConfiguration(request: $_model.AddPermissionPolicyToAccessConfigurationRequest): Promise<$_model.AddPermissionPolicyToAccessConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addPermissionPolicyToAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Adds a user to a group.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot add a user to a group that is synchronized by using SCIM.
   * This topic provides an example on how to add the user `u-00q8wbq42wiltcrk****` to the group `g-00jqzghi2n3o5hkh****`.
   * 
   * @param request - AddUserToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToGroupResponse
   */
  async addUserToGroupWithOptions(request: $_model.AddUserToGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToGroup",
      version: "2021-05-15",
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
   * Adds a user to a group.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot add a user to a group that is synchronized by using SCIM.
   * This topic provides an example on how to add the user `u-00q8wbq42wiltcrk****` to the group `g-00jqzghi2n3o5hkh****`.
   * 
   * @param request - AddUserToGroupRequest
   * @returns AddUserToGroupResponse
   */
  async addUserToGroup(request: $_model.AddUserToGroupRequest): Promise<$_model.AddUserToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToGroupWithOptions(request, runtime);
  }

  /**
   * Clears the configurations of a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
   * If single sign-on (SSO) logon is disabled, you can clear the configurations of a SAML IdP. If SSO logon is enabled, you cannot clear the configurations.
   * This topic provides an example on how to clear the configurations of the SAML IdP within the directory `d-00fc2p61****`.
   * 
   * @param request - ClearExternalSAMLIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearExternalSAMLIdentityProviderResponse
   */
  async clearExternalSAMLIdentityProviderWithOptions(request: $_model.ClearExternalSAMLIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClearExternalSAMLIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearExternalSAMLIdentityProvider",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearExternalSAMLIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.ClearExternalSAMLIdentityProviderResponse({}));
  }

  /**
   * Clears the configurations of a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
   * If single sign-on (SSO) logon is disabled, you can clear the configurations of a SAML IdP. If SSO logon is enabled, you cannot clear the configurations.
   * This topic provides an example on how to clear the configurations of the SAML IdP within the directory `d-00fc2p61****`.
   * 
   * @param request - ClearExternalSAMLIdentityProviderRequest
   * @returns ClearExternalSAMLIdentityProviderResponse
   */
  async clearExternalSAMLIdentityProvider(request: $_model.ClearExternalSAMLIdentityProviderRequest): Promise<$_model.ClearExternalSAMLIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Assigns access permissions on an account in your resource directory to a user or a group by using an access configuration.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * For more information about how to assign permissions on an account in your resource directory, see [Overview of multi-account authorization](https://help.aliyun.com/document_detail/266726.html).
   * This topic provides an example on how to assign access permissions on the account `114240524784****` in your resource directory to the CloudSSO user `u-00q8wbq42wiltcrk****` by using the access configuration `ac-00jhtfl8thteu6uj****`. After the call is successful, the CloudSSO user can access resources within the account in the resource directory.
   * 
   * @param request - CreateAccessAssignmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessAssignmentResponse
   */
  async createAccessAssignmentWithOptions(request: $_model.CreateAccessAssignmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessAssignmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessAssignment",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessAssignmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessAssignmentResponse({}));
  }

  /**
   * Assigns access permissions on an account in your resource directory to a user or a group by using an access configuration.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * For more information about how to assign permissions on an account in your resource directory, see [Overview of multi-account authorization](https://help.aliyun.com/document_detail/266726.html).
   * This topic provides an example on how to assign access permissions on the account `114240524784****` in your resource directory to the CloudSSO user `u-00q8wbq42wiltcrk****` by using the access configuration `ac-00jhtfl8thteu6uj****`. After the call is successful, the CloudSSO user can access resources within the account in the resource directory.
   * 
   * @param request - CreateAccessAssignmentRequest
   * @returns CreateAccessAssignmentResponse
   */
  async createAccessAssignment(request: $_model.CreateAccessAssignmentRequest): Promise<$_model.CreateAccessAssignmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessAssignmentWithOptions(request, runtime);
  }

  /**
   * Creates an access configuration.
   * 
   * @remarks
   * For more information about access configurations, see [Overview of access configurations](https://help.aliyun.com/document_detail/266737.html).
   * This topic provides an example on how to create an access configuration named `ECS-Admin`.
   * 
   * @param request - CreateAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessConfigurationResponse
   */
  async createAccessConfigurationWithOptions(request: $_model.CreateAccessConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationName)) {
      query["AccessConfigurationName"] = request.accessConfigurationName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.relayState)) {
      query["RelayState"] = request.relayState;
    }

    if (!$dara.isNull(request.sessionDuration)) {
      query["SessionDuration"] = request.sessionDuration;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessConfigurationResponse({}));
  }

  /**
   * Creates an access configuration.
   * 
   * @remarks
   * For more information about access configurations, see [Overview of access configurations](https://help.aliyun.com/document_detail/266737.html).
   * This topic provides an example on how to create an access configuration named `ECS-Admin`.
   * 
   * @param request - CreateAccessConfigurationRequest
   * @returns CreateAccessConfigurationResponse
   */
  async createAccessConfiguration(request: $_model.CreateAccessConfigurationRequest): Promise<$_model.CreateAccessConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates a directory.
   * 
   * @remarks
   * ### [](#)Operation description
   * A directory is a CloudSSO instance. Before you can use CloudSSO, you must create a directory. The directory is used to manage all CloudSSO resources.
   * To create a directory, you must select a region. Alibaba Cloud stores data in the directory only in the region that you select. However, you can deploy Alibaba Cloud resources including Elastic Compute Service (ECS) instances and ApsaraDB RDS instances in other regions. You can also use your cloud account for logons and access the Alibaba Cloud resources in other regions. You can select a region to create a directory based on your security compliance requirements and the geographic location of specific users. If you do not have strict security compliance requirements, we recommend that you select a region that is the closest to the geographical location of the specific users. This way, access to cloud resources is accelerated. You can create the CloudSSO directory in the China (Shanghai), China (Hong Kong), US (Silicon Valley), or Germany (Frankfurt) region.
   * This topic provides an example on how to create a directory named `example` in the China (Shanghai) region.
   * ### [](#)Limits
   * *   You can create only one directory for a management account.
   * *   If you want to change the region of a directory, you must delete the directory and then create a directory in a different region.
   * 
   * @param request - CreateDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDirectoryResponse
   */
  async createDirectoryWithOptions(request: $_model.CreateDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateDirectoryResponse({}));
  }

  /**
   * Creates a directory.
   * 
   * @remarks
   * ### [](#)Operation description
   * A directory is a CloudSSO instance. Before you can use CloudSSO, you must create a directory. The directory is used to manage all CloudSSO resources.
   * To create a directory, you must select a region. Alibaba Cloud stores data in the directory only in the region that you select. However, you can deploy Alibaba Cloud resources including Elastic Compute Service (ECS) instances and ApsaraDB RDS instances in other regions. You can also use your cloud account for logons and access the Alibaba Cloud resources in other regions. You can select a region to create a directory based on your security compliance requirements and the geographic location of specific users. If you do not have strict security compliance requirements, we recommend that you select a region that is the closest to the geographical location of the specific users. This way, access to cloud resources is accelerated. You can create the CloudSSO directory in the China (Shanghai), China (Hong Kong), US (Silicon Valley), or Germany (Frankfurt) region.
   * This topic provides an example on how to create a directory named `example` in the China (Shanghai) region.
   * ### [](#)Limits
   * *   You can create only one directory for a management account.
   * *   If you want to change the region of a directory, you must delete the directory and then create a directory in a different region.
   * 
   * @param request - CreateDirectoryRequest
   * @returns CreateDirectoryResponse
   */
  async createDirectory(request: $_model.CreateDirectoryRequest): Promise<$_model.CreateDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDirectoryWithOptions(request, runtime);
  }

  /**
   * Creates a group.
   * 
   * @remarks
   * This topic provides an example on how to create a group named `TestGroup`.
   * 
   * @param request - CreateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: $_model.CreateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2021-05-15",
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
   * Creates a group.
   * 
   * @remarks
   * This topic provides an example on how to create a group named `TestGroup`.
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * Creates a System for Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * SCIM credentials are required for SCIM synchronization. You can create up to two SCIM credentials.
   * This topic provides an example on how to create a SCIM credential within the directory `d-00fc2p61****`.
   * 
   * @param request - CreateSCIMServerCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSCIMServerCredentialResponse
   */
  async createSCIMServerCredentialWithOptions(request: $_model.CreateSCIMServerCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSCIMServerCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSCIMServerCredential",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSCIMServerCredentialResponse>(await this.callApi(params, req, runtime), new $_model.CreateSCIMServerCredentialResponse({}));
  }

  /**
   * Creates a System for Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * SCIM credentials are required for SCIM synchronization. You can create up to two SCIM credentials.
   * This topic provides an example on how to create a SCIM credential within the directory `d-00fc2p61****`.
   * 
   * @param request - CreateSCIMServerCredentialRequest
   * @returns CreateSCIMServerCredentialResponse
   */
  async createSCIMServerCredential(request: $_model.CreateSCIMServerCredentialRequest): Promise<$_model.CreateSCIMServerCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSCIMServerCredentialWithOptions(request, runtime);
  }

  /**
   * Creates a user.
   * 
   * @remarks
   * This topic provides an example on how to create a user named `Alice`.
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: $_model.CreateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.firstName)) {
      query["FirstName"] = request.firstName;
    }

    if (!$dara.isNull(request.lastName)) {
      query["LastName"] = request.lastName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2021-05-15",
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
   * Creates a user.
   * 
   * @remarks
   * This topic provides an example on how to create a user named `Alice`.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * Creates a Resource Access Management (RAM) user provisioning.
   * 
   * @remarks
   * You can create a RAM user provisioning for a member in your resource directory to create a RAM user that has the same username as a CloudSSO user. This way, the CloudSSO user can access the resources of the member as the RAM user.
   * 
   * @param request - CreateUserProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserProvisioningResponse
   */
  async createUserProvisioningWithOptions(request: $_model.CreateUserProvisioningRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserProvisioningResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletionStrategy)) {
      query["DeletionStrategy"] = request.deletionStrategy;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.duplicationStrategy)) {
      query["DuplicationStrategy"] = request.duplicationStrategy;
    }

    if (!$dara.isNull(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserProvisioning",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserProvisioningResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserProvisioningResponse({}));
  }

  /**
   * Creates a Resource Access Management (RAM) user provisioning.
   * 
   * @remarks
   * You can create a RAM user provisioning for a member in your resource directory to create a RAM user that has the same username as a CloudSSO user. This way, the CloudSSO user can access the resources of the member as the RAM user.
   * 
   * @param request - CreateUserProvisioningRequest
   * @returns CreateUserProvisioningResponse
   */
  async createUserProvisioning(request: $_model.CreateUserProvisioningRequest): Promise<$_model.CreateUserProvisioningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserProvisioningWithOptions(request, runtime);
  }

  /**
   * Removes the access permissions on an account in a resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to remove the access permissions on the account `114240524784****` in the resource directory from the CloudSSO user `u-00q8wbq42wiltcrk****`. The access permissions are assigned by using the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - DeleteAccessAssignmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessAssignmentResponse
   */
  async deleteAccessAssignmentWithOptions(request: $_model.DeleteAccessAssignmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessAssignmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.deprovisionStrategy)) {
      query["DeprovisionStrategy"] = request.deprovisionStrategy;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessAssignment",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessAssignmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessAssignmentResponse({}));
  }

  /**
   * Removes the access permissions on an account in a resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to remove the access permissions on the account `114240524784****` in the resource directory from the CloudSSO user `u-00q8wbq42wiltcrk****`. The access permissions are assigned by using the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - DeleteAccessAssignmentRequest
   * @returns DeleteAccessAssignmentResponse
   */
  async deleteAccessAssignment(request: $_model.DeleteAccessAssignmentRequest): Promise<$_model.DeleteAccessAssignmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessAssignmentWithOptions(request, runtime);
  }

  /**
   * Deletes an access configuration.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The access configuration that you want to delete is de-provisioned from the accounts in your resource directory. For more information, see [DeprovisionAccessConfiguration](https://help.aliyun.com/document_detail/338352.html).
   * ### [](#)Operation description
   * This topic provides an example on how to delete the access configuration whose ID is `ac-001j9mcm3k7335bc****`.
   * 
   * @param request - DeleteAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessConfigurationResponse
   */
  async deleteAccessConfigurationWithOptions(request: $_model.DeleteAccessConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.forceRemovePermissionPolicies)) {
      query["ForceRemovePermissionPolicies"] = request.forceRemovePermissionPolicies;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessConfigurationResponse({}));
  }

  /**
   * Deletes an access configuration.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The access configuration that you want to delete is de-provisioned from the accounts in your resource directory. For more information, see [DeprovisionAccessConfiguration](https://help.aliyun.com/document_detail/338352.html).
   * ### [](#)Operation description
   * This topic provides an example on how to delete the access configuration whose ID is `ac-001j9mcm3k7335bc****`.
   * 
   * @param request - DeleteAccessConfigurationRequest
   * @returns DeleteAccessConfigurationResponse
   */
  async deleteAccessConfiguration(request: $_model.DeleteAccessConfigurationRequest): Promise<$_model.DeleteAccessConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Deletes a directory.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * No resources are contained in the directory that you want to delete.
   * *   Access permissions on the accounts in your resource directory are removed from all users and groups. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * *   Users are deleted. For more information, see [DeleteUser](https://help.aliyun.com/document_detail/341671.html).
   * *   Groups are deleted. For more information, see [DeleteGroup](https://help.aliyun.com/document_detail/341821.html).
   * *   Access configurations are deleted. For more information, see [DeleteAccessConfiguration](https://help.aliyun.com/document_detail/336907.html).
   * *   System for Cross-domain Identity Management (SCIM) credentials are deleted. For more information, see [DeleteSCIMServerCredential](https://help.aliyun.com/document_detail/341842.html).
   * *   Single sign-on (SSO) logon configurations are deleted. For more information, see [ClearExternalSAMLIdentityProvider](https://help.aliyun.com/document_detail/341573.html).
   * ### [](#)Operation description
   * This topic provides an example on how to delete a directory whose ID is `d-00fc2p61****`.
   * 
   * @param request - DeleteDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDirectoryResponse
   */
  async deleteDirectoryWithOptions(request: $_model.DeleteDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDirectoryResponse({}));
  }

  /**
   * Deletes a directory.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * No resources are contained in the directory that you want to delete.
   * *   Access permissions on the accounts in your resource directory are removed from all users and groups. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * *   Users are deleted. For more information, see [DeleteUser](https://help.aliyun.com/document_detail/341671.html).
   * *   Groups are deleted. For more information, see [DeleteGroup](https://help.aliyun.com/document_detail/341821.html).
   * *   Access configurations are deleted. For more information, see [DeleteAccessConfiguration](https://help.aliyun.com/document_detail/336907.html).
   * *   System for Cross-domain Identity Management (SCIM) credentials are deleted. For more information, see [DeleteSCIMServerCredential](https://help.aliyun.com/document_detail/341842.html).
   * *   Single sign-on (SSO) logon configurations are deleted. For more information, see [ClearExternalSAMLIdentityProvider](https://help.aliyun.com/document_detail/341573.html).
   * ### [](#)Operation description
   * This topic provides an example on how to delete a directory whose ID is `d-00fc2p61****`.
   * 
   * @param request - DeleteDirectoryRequest
   * @returns DeleteDirectoryResponse
   */
  async deleteDirectory(request: $_model.DeleteDirectoryRequest): Promise<$_model.DeleteDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDirectoryWithOptions(request, runtime);
  }

  /**
   * Deletes a group.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The group that you want to delete is not associated with the following resources. If the group is associated with the resources, the deletion fails.
   * *   Users: You must remove users from the group. For more information, see [RemoveUserFromGroup](https://help.aliyun.com/document_detail/335116.html).
   * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the group. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * ### [](#)Operation description
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a group that is synchronized by using SCIM.
   * This topic provides an example on how to delete the group `g-00jqzghi2n3o5hkh****`.
   * 
   * @param request - DeleteGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: $_model.DeleteGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2021-05-15",
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
   * Deletes a group.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The group that you want to delete is not associated with the following resources. If the group is associated with the resources, the deletion fails.
   * *   Users: You must remove users from the group. For more information, see [RemoveUserFromGroup](https://help.aliyun.com/document_detail/335116.html).
   * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the group. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * ### [](#)Operation description
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a group that is synchronized by using SCIM.
   * This topic provides an example on how to delete the group `g-00jqzghi2n3o5hkh****`.
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: $_model.DeleteGroupRequest): Promise<$_model.DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * Unbinds a multi-factor authentication (MFA) device from a user.
   * 
   * @remarks
   * This topic provides an example on how to unbind the MFA device whose ID is `mfa-00ujhet8pycljj7j****` from the user whose ID is `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - DeleteMFADeviceForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMFADeviceForUserResponse
   */
  async deleteMFADeviceForUserWithOptions(request: $_model.DeleteMFADeviceForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMFADeviceForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.MFADeviceId)) {
      query["MFADeviceId"] = request.MFADeviceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMFADeviceForUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMFADeviceForUserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMFADeviceForUserResponse({}));
  }

  /**
   * Unbinds a multi-factor authentication (MFA) device from a user.
   * 
   * @remarks
   * This topic provides an example on how to unbind the MFA device whose ID is `mfa-00ujhet8pycljj7j****` from the user whose ID is `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - DeleteMFADeviceForUserRequest
   * @returns DeleteMFADeviceForUserResponse
   */
  async deleteMFADeviceForUser(request: $_model.DeleteMFADeviceForUserRequest): Promise<$_model.DeleteMFADeviceForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMFADeviceForUserWithOptions(request, runtime);
  }

  /**
   * Deletes a System for Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * After a SCIM credential is deleted, the synchronization task that uses the SCIM credential fails.
   * This topic provides an example on how to delete the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`.
   * 
   * @param request - DeleteSCIMServerCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSCIMServerCredentialResponse
   */
  async deleteSCIMServerCredentialWithOptions(request: $_model.DeleteSCIMServerCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSCIMServerCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.credentialId)) {
      query["CredentialId"] = request.credentialId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSCIMServerCredential",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSCIMServerCredentialResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSCIMServerCredentialResponse({}));
  }

  /**
   * Deletes a System for Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * After a SCIM credential is deleted, the synchronization task that uses the SCIM credential fails.
   * This topic provides an example on how to delete the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`.
   * 
   * @param request - DeleteSCIMServerCredentialRequest
   * @returns DeleteSCIMServerCredentialResponse
   */
  async deleteSCIMServerCredential(request: $_model.DeleteSCIMServerCredentialRequest): Promise<$_model.DeleteSCIMServerCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSCIMServerCredentialWithOptions(request, runtime);
  }

  /**
   * Deletes a user.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Before you delete a user, make sure that the user is not associated with the following resources. Otherwise, the deletion fails.
   * *   Multi-factor authentication (MFA) devices: You must delete the MFA devices bound to the user. For more information, see [DeleteMFADeviceForUser](https://help.aliyun.com/document_detail/341675.html).
   * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the user. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * *   Groups: You must remove the user from groups. For more information, see [RemoveUserFromGroup](https://help.aliyun.com/document_detail/335116.html).
   * ### [](#)Precautions
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a user that is synchronized by using SCIM.
   * This topic provides an example on how to delete the user whose ID is `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: $_model.DeleteUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2021-05-15",
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
   * Deletes a user.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Before you delete a user, make sure that the user is not associated with the following resources. Otherwise, the deletion fails.
   * *   Multi-factor authentication (MFA) devices: You must delete the MFA devices bound to the user. For more information, see [DeleteMFADeviceForUser](https://help.aliyun.com/document_detail/341675.html).
   * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the user. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * *   Groups: You must remove the user from groups. For more information, see [RemoveUserFromGroup](https://help.aliyun.com/document_detail/335116.html).
   * ### [](#)Precautions
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a user that is synchronized by using SCIM.
   * This topic provides an example on how to delete the user whose ID is `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * Deletes a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - DeleteUserProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserProvisioningResponse
   */
  async deleteUserProvisioningWithOptions(request: $_model.DeleteUserProvisioningRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserProvisioningResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletionStrategy)) {
      query["DeletionStrategy"] = request.deletionStrategy;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.userProvisioningId)) {
      query["UserProvisioningId"] = request.userProvisioningId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserProvisioning",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserProvisioningResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserProvisioningResponse({}));
  }

  /**
   * Deletes a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - DeleteUserProvisioningRequest
   * @returns DeleteUserProvisioningResponse
   */
  async deleteUserProvisioning(request: $_model.DeleteUserProvisioningRequest): Promise<$_model.DeleteUserProvisioningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserProvisioningWithOptions(request, runtime);
  }

  /**
   * Deletes a Resource Access Management (RAM) user provisioning event.
   * 
   * @param request - DeleteUserProvisioningEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserProvisioningEventResponse
   */
  async deleteUserProvisioningEventWithOptions(request: $_model.DeleteUserProvisioningEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserProvisioningEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.userProvisioningId)) {
      query["UserProvisioningId"] = request.userProvisioningId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserProvisioningEvent",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserProvisioningEventResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserProvisioningEventResponse({}));
  }

  /**
   * Deletes a Resource Access Management (RAM) user provisioning event.
   * 
   * @param request - DeleteUserProvisioningEventRequest
   * @returns DeleteUserProvisioningEventResponse
   */
  async deleteUserProvisioningEvent(request: $_model.DeleteUserProvisioningEventRequest): Promise<$_model.DeleteUserProvisioningEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserProvisioningEventWithOptions(request, runtime);
  }

  /**
   * De-provisions an access configuration from an account in your resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to de-provision the access configuration `ac-00jhtfl8thteu6uj****` from the account `114240524784****` in your resource directory.
   * 
   * @param request - DeprovisionAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeprovisionAccessConfigurationResponse
   */
  async deprovisionAccessConfigurationWithOptions(request: $_model.DeprovisionAccessConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeprovisionAccessConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeprovisionAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeprovisionAccessConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DeprovisionAccessConfigurationResponse({}));
  }

  /**
   * De-provisions an access configuration from an account in your resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to de-provision the access configuration `ac-00jhtfl8thteu6uj****` from the account `114240524784****` in your resource directory.
   * 
   * @param request - DeprovisionAccessConfigurationRequest
   * @returns DeprovisionAccessConfigurationResponse
   */
  async deprovisionAccessConfiguration(request: $_model.DeprovisionAccessConfigurationRequest): Promise<$_model.DeprovisionAccessConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deprovisionAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Disables the delegated administrator account of CloudSSO.
   * 
   * @param request - DisableDelegateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDelegateAccountResponse
   */
  async disableDelegateAccountWithOptions(request: $_model.DisableDelegateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDelegateAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDelegateAccount",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDelegateAccountResponse>(await this.callApi(params, req, runtime), new $_model.DisableDelegateAccountResponse({}));
  }

  /**
   * Disables the delegated administrator account of CloudSSO.
   * 
   * @param request - DisableDelegateAccountRequest
   * @returns DisableDelegateAccountResponse
   */
  async disableDelegateAccount(request: $_model.DisableDelegateAccountRequest): Promise<$_model.DisableDelegateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDelegateAccountWithOptions(request, runtime);
  }

  /**
   * Disables CloudSSO.
   * 
   * @remarks
   * If your CloudSSO has no directory, you can disable CloudSSO based on your business requirements. After you disable CloudSSO, you can enable it at any time.
   * 
   * @param request - DisableServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableServiceResponse
   */
  async disableServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DisableServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableService",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableServiceResponse>(await this.callApi(params, req, runtime), new $_model.DisableServiceResponse({}));
  }

  /**
   * Disables CloudSSO.
   * 
   * @remarks
   * If your CloudSSO has no directory, you can disable CloudSSO based on your business requirements. After you disable CloudSSO, you can enable it at any time.
   * @returns DisableServiceResponse
   */
  async disableService(): Promise<$_model.DisableServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableServiceWithOptions(runtime);
  }

  /**
   * Enables the delegated administrator account of CloudSSO.
   * 
   * @remarks
   * You can use the management account of a resource directory to specify a member of the resource directory as the delegated administrator account of CloudSSO. For more information, see [Add a delegated administrator account](https://help.aliyun.com/document_detail/208117.html).
   * After the delegated administrator account of CloudSSO is specified, you can call this operation to enable the delegated administrator account of CloudSSO to manage CloudSSO resources.
   * 
   * @param request - EnableDelegateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDelegateAccountResponse
   */
  async enableDelegateAccountWithOptions(request: $_model.EnableDelegateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDelegateAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDelegateAccount",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDelegateAccountResponse>(await this.callApi(params, req, runtime), new $_model.EnableDelegateAccountResponse({}));
  }

  /**
   * Enables the delegated administrator account of CloudSSO.
   * 
   * @remarks
   * You can use the management account of a resource directory to specify a member of the resource directory as the delegated administrator account of CloudSSO. For more information, see [Add a delegated administrator account](https://help.aliyun.com/document_detail/208117.html).
   * After the delegated administrator account of CloudSSO is specified, you can call this operation to enable the delegated administrator account of CloudSSO to manage CloudSSO resources.
   * 
   * @param request - EnableDelegateAccountRequest
   * @returns EnableDelegateAccountResponse
   */
  async enableDelegateAccount(request: $_model.EnableDelegateAccountRequest): Promise<$_model.EnableDelegateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDelegateAccountWithOptions(request, runtime);
  }

  /**
   * Enables CloudSSO.
   * 
   * @remarks
   * You can call this operation only if your account belongs to the management account that is used to enable a resource directory and has the permissions to enable CloudSSO. For more information, see [Enable CloudSSO](https://help.aliyun.com/document_detail/262819.html).
   * If you call this operation, you agree to the [Alibaba Cloud International Website Product Terms of Service](https://www.alibabacloud.com/help/doc-detail/42416.htm).
   * 
   * @param request - EnableServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableServiceResponse
   */
  async enableServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.EnableServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableService",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableServiceResponse>(await this.callApi(params, req, runtime), new $_model.EnableServiceResponse({}));
  }

  /**
   * Enables CloudSSO.
   * 
   * @remarks
   * You can call this operation only if your account belongs to the management account that is used to enable a resource directory and has the permissions to enable CloudSSO. For more information, see [Enable CloudSSO](https://help.aliyun.com/document_detail/262819.html).
   * If you call this operation, you agree to the [Alibaba Cloud International Website Product Terms of Service](https://www.alibabacloud.com/help/doc-detail/42416.htm).
   * @returns EnableServiceResponse
   */
  async enableService(): Promise<$_model.EnableServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableServiceWithOptions(runtime);
  }

  /**
   * Queries information about an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to query information about the access configuration whose ID is `ac-00ccule7tadaijxc****`.
   * 
   * @param request - GetAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessConfigurationResponse
   */
  async getAccessConfigurationWithOptions(request: $_model.GetAccessConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessConfigurationResponse({}));
  }

  /**
   * Queries information about an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to query information about the access configuration whose ID is `ac-00ccule7tadaijxc****`.
   * 
   * @param request - GetAccessConfigurationRequest
   * @returns GetAccessConfigurationResponse
   */
  async getAccessConfiguration(request: $_model.GetAccessConfigurationRequest): Promise<$_model.GetAccessConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries information about a directory.
   * 
   * @remarks
   * This topic provides an example on how to query information about the directory whose ID is `d-00fc2p61****`.
   * 
   * @param request - GetDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDirectoryResponse
   */
  async getDirectoryWithOptions(request: $_model.GetDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.GetDirectoryResponse({}));
  }

  /**
   * Queries information about a directory.
   * 
   * @remarks
   * This topic provides an example on how to query information about the directory whose ID is `d-00fc2p61****`.
   * 
   * @param request - GetDirectoryRequest
   * @returns GetDirectoryResponse
   */
  async getDirectory(request: $_model.GetDirectoryRequest): Promise<$_model.GetDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDirectoryWithOptions(request, runtime);
  }

  /**
   * Queries information about a Security Assertion Markup Language (SAML) service provider (SP).
   * 
   * @remarks
   * During SAML 2.0-based single sign-on (SSO) logon, CloudSSO is an SP, and the identity management system of an enterprise is an identity provider (IdP).
   * This topic provides an example on how to query information about the SP within the directory `d-00fc2p61****`.
   * 
   * @param request - GetDirectorySAMLServiceProviderInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDirectorySAMLServiceProviderInfoResponse
   */
  async getDirectorySAMLServiceProviderInfoWithOptions(request: $_model.GetDirectorySAMLServiceProviderInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDirectorySAMLServiceProviderInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDirectorySAMLServiceProviderInfo",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDirectorySAMLServiceProviderInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDirectorySAMLServiceProviderInfoResponse({}));
  }

  /**
   * Queries information about a Security Assertion Markup Language (SAML) service provider (SP).
   * 
   * @remarks
   * During SAML 2.0-based single sign-on (SSO) logon, CloudSSO is an SP, and the identity management system of an enterprise is an identity provider (IdP).
   * This topic provides an example on how to query information about the SP within the directory `d-00fc2p61****`.
   * 
   * @param request - GetDirectorySAMLServiceProviderInfoRequest
   * @returns GetDirectorySAMLServiceProviderInfoResponse
   */
  async getDirectorySAMLServiceProviderInfo(request: $_model.GetDirectorySAMLServiceProviderInfoRequest): Promise<$_model.GetDirectorySAMLServiceProviderInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDirectorySAMLServiceProviderInfoWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of a directory.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics of a directory whose ID is `d-00fc2p61****`. The statistics include the number of users, quota for users, number of groups, quota for groups, number of access configurations, quota for access configurations, number of access permissions that are assigned, number of system policies that can be configured for an access configuration, number of System for Cross-domain Identity Management (SCIM) credentials, number of asynchronous tasks, status of single sign-on (SSO) logon, and status of SCIM synchronization.
   * 
   * @param request - GetDirectoryStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDirectoryStatisticsResponse
   */
  async getDirectoryStatisticsWithOptions(request: $_model.GetDirectoryStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDirectoryStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDirectoryStatistics",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDirectoryStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetDirectoryStatisticsResponse({}));
  }

  /**
   * Queries the statistics of a directory.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics of a directory whose ID is `d-00fc2p61****`. The statistics include the number of users, quota for users, number of groups, quota for groups, number of access configurations, quota for access configurations, number of access permissions that are assigned, number of system policies that can be configured for an access configuration, number of System for Cross-domain Identity Management (SCIM) credentials, number of asynchronous tasks, status of single sign-on (SSO) logon, and status of SCIM synchronization.
   * 
   * @param request - GetDirectoryStatisticsRequest
   * @returns GetDirectoryStatisticsResponse
   */
  async getDirectoryStatistics(request: $_model.GetDirectoryStatisticsRequest): Promise<$_model.GetDirectoryStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDirectoryStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
   * This topic provides an example on how to query the configurations of the SAML IdP within the directory `d-00fc2p61****`.
   * 
   * @param request - GetExternalSAMLIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExternalSAMLIdentityProviderResponse
   */
  async getExternalSAMLIdentityProviderWithOptions(request: $_model.GetExternalSAMLIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExternalSAMLIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExternalSAMLIdentityProvider",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExternalSAMLIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetExternalSAMLIdentityProviderResponse({}));
  }

  /**
   * Queries the configurations of a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
   * This topic provides an example on how to query the configurations of the SAML IdP within the directory `d-00fc2p61****`.
   * 
   * @param request - GetExternalSAMLIdentityProviderRequest
   * @returns GetExternalSAMLIdentityProviderResponse
   */
  async getExternalSAMLIdentityProvider(request: $_model.GetExternalSAMLIdentityProviderRequest): Promise<$_model.GetExternalSAMLIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Queries information about a group.
   * 
   * @remarks
   * This topic provides an example on how to query information about the group `g-00jqzghi2n3o5hkh****` in the directory `d-00fc2p61****`.
   * 
   * @param request - GetGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(request: $_model.GetGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2021-05-15",
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
   * Queries information about a group.
   * 
   * @remarks
   * This topic provides an example on how to query information about the group `g-00jqzghi2n3o5hkh****` in the directory `d-00fc2p61****`.
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: $_model.GetGroupRequest): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * Queries the logon preference of CloudSSO users.
   * 
   * @param request - GetLoginPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginPreferenceResponse
   */
  async getLoginPreferenceWithOptions(request: $_model.GetLoginPreferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoginPreferenceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoginPreference",
      version: "2021-05-15",
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
   * Queries the logon preference of CloudSSO users.
   * 
   * @param request - GetLoginPreferenceRequest
   * @returns GetLoginPreferenceResponse
   */
  async getLoginPreference(request: $_model.GetLoginPreferenceRequest): Promise<$_model.GetLoginPreferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoginPreferenceWithOptions(request, runtime);
  }

  /**
   * Queries the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * If you enable username-password logon for CloudSSO users, you can query the MFA setting for the users.
   * This topic provides an example on how to query the MFA setting of all CloudSSO users that belong to the directory named `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - GetMFAAuthenticationSettingInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMFAAuthenticationSettingInfoResponse
   */
  async getMFAAuthenticationSettingInfoWithOptions(request: $_model.GetMFAAuthenticationSettingInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMFAAuthenticationSettingInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMFAAuthenticationSettingInfo",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMFAAuthenticationSettingInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetMFAAuthenticationSettingInfoResponse({}));
  }

  /**
   * Queries the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * If you enable username-password logon for CloudSSO users, you can query the MFA setting for the users.
   * This topic provides an example on how to query the MFA setting of all CloudSSO users that belong to the directory named `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - GetMFAAuthenticationSettingInfoRequest
   * @returns GetMFAAuthenticationSettingInfoResponse
   */
  async getMFAAuthenticationSettingInfo(request: $_model.GetMFAAuthenticationSettingInfoRequest): Promise<$_model.GetMFAAuthenticationSettingInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMFAAuthenticationSettingInfoWithOptions(request, runtime);
  }

  /**
   * Queries the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * >  This operation is no longer maintained and updated. You can call the [GetMFAAuthenticationSettingInfo](https://help.aliyun.com/document_detail/611286.html) operation to query more detailed information.
   * This topic provides an example on how to query the MFA setting of the users that belong to the directory named `d-00fc2p61****`. The returned result shows that MFA is enabled for all the users.
   * 
   * @param request - GetMFAAuthenticationSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMFAAuthenticationSettingsResponse
   */
  async getMFAAuthenticationSettingsWithOptions(request: $_model.GetMFAAuthenticationSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMFAAuthenticationSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMFAAuthenticationSettings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMFAAuthenticationSettingsResponse>(await this.callApi(params, req, runtime), new $_model.GetMFAAuthenticationSettingsResponse({}));
  }

  /**
   * Queries the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * >  This operation is no longer maintained and updated. You can call the [GetMFAAuthenticationSettingInfo](https://help.aliyun.com/document_detail/611286.html) operation to query more detailed information.
   * This topic provides an example on how to query the MFA setting of the users that belong to the directory named `d-00fc2p61****`. The returned result shows that MFA is enabled for all the users.
   * 
   * @param request - GetMFAAuthenticationSettingsRequest
   * @returns GetMFAAuthenticationSettingsResponse
   */
  async getMFAAuthenticationSettings(request: $_model.GetMFAAuthenticationSettingsRequest): Promise<$_model.GetMFAAuthenticationSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  /**
   * Checks whether multi-factor authentication (MFA) is enabled for users.
   * 
   * @remarks
   * This topic provides an example on how to check whether MFA is enabled for users in the directory whose ID is `d-00fc2p61****`. The returned result shows that MFA is in the Enabled state.
   * 
   * @param request - GetMFAAuthenticationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMFAAuthenticationStatusResponse
   */
  async getMFAAuthenticationStatusWithOptions(request: $_model.GetMFAAuthenticationStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMFAAuthenticationStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMFAAuthenticationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMFAAuthenticationStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetMFAAuthenticationStatusResponse({}));
  }

  /**
   * Checks whether multi-factor authentication (MFA) is enabled for users.
   * 
   * @remarks
   * This topic provides an example on how to check whether MFA is enabled for users in the directory whose ID is `d-00fc2p61****`. The returned result shows that MFA is in the Enabled state.
   * 
   * @param request - GetMFAAuthenticationStatusRequest
   * @returns GetMFAAuthenticationStatusResponse
   */
  async getMFAAuthenticationStatus(request: $_model.GetMFAAuthenticationStatusRequest): Promise<$_model.GetMFAAuthenticationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMFAAuthenticationStatusWithOptions(request, runtime);
  }

  /**
   * Queries the password policy of CloudSSO users.
   * 
   * @param request - GetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordPolicyResponse
   */
  async getPasswordPolicyWithOptions(request: $_model.GetPasswordPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordPolicy",
      version: "2021-05-15",
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
   * Queries the password policy of CloudSSO users.
   * 
   * @param request - GetPasswordPolicyRequest
   * @returns GetPasswordPolicyResponse
   */
  async getPasswordPolicy(request: $_model.GetPasswordPolicyRequest): Promise<$_model.GetPasswordPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the status of System for Cross-domain Identity Management (SCIM) synchronization.
   * 
   * @remarks
   * This topic provides an example on how to query the status of SCIM synchronization within the directory `d-00fc2p61****`. The returned result shows that SCIM synchronization is in the Enabled state.
   * 
   * @param request - GetSCIMSynchronizationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSCIMSynchronizationStatusResponse
   */
  async getSCIMSynchronizationStatusWithOptions(request: $_model.GetSCIMSynchronizationStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSCIMSynchronizationStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSCIMSynchronizationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSCIMSynchronizationStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetSCIMSynchronizationStatusResponse({}));
  }

  /**
   * Queries the status of System for Cross-domain Identity Management (SCIM) synchronization.
   * 
   * @remarks
   * This topic provides an example on how to query the status of SCIM synchronization within the directory `d-00fc2p61****`. The returned result shows that SCIM synchronization is in the Enabled state.
   * 
   * @param request - GetSCIMSynchronizationStatusRequest
   * @returns GetSCIMSynchronizationStatusResponse
   */
  async getSCIMSynchronizationStatus(request: $_model.GetSCIMSynchronizationStatusRequest): Promise<$_model.GetSCIMSynchronizationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSCIMSynchronizationStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status of CloudSSO.
   * 
   * @param request - GetServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceStatusResponse
   */
  async getServiceStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceStatusResponse({}));
  }

  /**
   * Queries the status of CloudSSO.
   * @returns GetServiceStatusResponse
   */
  async getServiceStatus(): Promise<$_model.GetServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceStatusWithOptions(runtime);
  }

  /**
   * Queries information about an asynchronous task.
   * 
   * @remarks
   * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
   * 
   * @param request - GetTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(request: $_model.GetTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResponse({}));
  }

  /**
   * Queries information about an asynchronous task.
   * 
   * @remarks
   * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
   * 
   * @param request - GetTaskRequest
   * @returns GetTaskResponse
   */
  async getTask(request: $_model.GetTaskRequest): Promise<$_model.GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  /**
   * Queries the status of an asynchronous task.
   * 
   * @remarks
   * You can call the GetTaskStatus operation to query the status of an asynchronous task. If you want to query more information about an asynchronous task, call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation.
   * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
   * 
   * @param request - GetTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatusResponse
   */
  async getTaskStatusWithOptions(request: $_model.GetTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskStatusResponse({}));
  }

  /**
   * Queries the status of an asynchronous task.
   * 
   * @remarks
   * You can call the GetTaskStatus operation to query the status of an asynchronous task. If you want to query more information about an asynchronous task, call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation.
   * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
   * 
   * @param request - GetTaskStatusRequest
   * @returns GetTaskStatusResponse
   */
  async getTaskStatus(request: $_model.GetTaskStatusRequest): Promise<$_model.GetTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskStatusWithOptions(request, runtime);
  }

  /**
   * Queries information about a user.
   * 
   * @remarks
   * This topic provides an example on how to query information about the user whose ID is `u-00q8wbq42wiltcrk****` in the `d-00fc2p61****` directory.
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2021-05-15",
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
   * Queries information about a user.
   * 
   * @remarks
   * This topic provides an example on how to query information about the user whose ID is `u-00q8wbq42wiltcrk****` in the `d-00fc2p61****` directory.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * Queries the ID of a user in a resource directory by using the ExternalId parameter.
   * 
   * @param tmpReq - GetUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserIdResponse
   */
  async getUserIdWithOptions(tmpReq: $_model.GetUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetUserIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.externalId)) {
      request.externalIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalId, "ExternalId", "json");
    }

    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.externalIdShrink)) {
      query["ExternalId"] = request.externalIdShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserId",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserIdResponse>(await this.callApi(params, req, runtime), new $_model.GetUserIdResponse({}));
  }

  /**
   * Queries the ID of a user in a resource directory by using the ExternalId parameter.
   * 
   * @param request - GetUserIdRequest
   * @returns GetUserIdResponse
   */
  async getUserId(request: $_model.GetUserIdRequest): Promise<$_model.GetUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserIdWithOptions(request, runtime);
  }

  /**
   * Queries the multi-factor authentication (MFA) setting of a single user.
   * 
   * @remarks
   * This topic provides an example on how to query the MFA setting of the user named `u-00q8wbq42wiltcrk****`. The returned result shows that MFA is enabled for the user.
   * 
   * @param request - GetUserMFAAuthenticationSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserMFAAuthenticationSettingsResponse
   */
  async getUserMFAAuthenticationSettingsWithOptions(request: $_model.GetUserMFAAuthenticationSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserMFAAuthenticationSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserMFAAuthenticationSettings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserMFAAuthenticationSettingsResponse>(await this.callApi(params, req, runtime), new $_model.GetUserMFAAuthenticationSettingsResponse({}));
  }

  /**
   * Queries the multi-factor authentication (MFA) setting of a single user.
   * 
   * @remarks
   * This topic provides an example on how to query the MFA setting of the user named `u-00q8wbq42wiltcrk****`. The returned result shows that MFA is enabled for the user.
   * 
   * @param request - GetUserMFAAuthenticationSettingsRequest
   * @returns GetUserMFAAuthenticationSettingsResponse
   */
  async getUserMFAAuthenticationSettings(request: $_model.GetUserMFAAuthenticationSettingsRequest): Promise<$_model.GetUserMFAAuthenticationSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  /**
   * Queries a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserProvisioningResponse
   */
  async getUserProvisioningWithOptions(request: $_model.GetUserProvisioningRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserProvisioningResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.userProvisioningId)) {
      query["UserProvisioningId"] = request.userProvisioningId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserProvisioning",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserProvisioningResponse>(await this.callApi(params, req, runtime), new $_model.GetUserProvisioningResponse({}));
  }

  /**
   * Queries a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningRequest
   * @returns GetUserProvisioningResponse
   */
  async getUserProvisioning(request: $_model.GetUserProvisioningRequest): Promise<$_model.GetUserProvisioningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserProvisioningWithOptions(request, runtime);
  }

  /**
   * Queries the global configurations of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserProvisioningConfigurationResponse
   */
  async getUserProvisioningConfigurationWithOptions(request: $_model.GetUserProvisioningConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserProvisioningConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserProvisioningConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserProvisioningConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetUserProvisioningConfigurationResponse({}));
  }

  /**
   * Queries the global configurations of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningConfigurationRequest
   * @returns GetUserProvisioningConfigurationResponse
   */
  async getUserProvisioningConfiguration(request: $_model.GetUserProvisioningConfigurationRequest): Promise<$_model.GetUserProvisioningConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserProvisioningConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserProvisioningEventResponse
   */
  async getUserProvisioningEventWithOptions(request: $_model.GetUserProvisioningEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserProvisioningEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserProvisioningEvent",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserProvisioningEventResponse>(await this.callApi(params, req, runtime), new $_model.GetUserProvisioningEventResponse({}));
  }

  /**
   * Queries the information about a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningEventRequest
   * @returns GetUserProvisioningEventResponse
   */
  async getUserProvisioningEvent(request: $_model.GetUserProvisioningEventRequest): Promise<$_model.GetUserProvisioningEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserProvisioningEventWithOptions(request, runtime);
  }

  /**
   * Queries statistics of Resource Access Management (RAM) user provisioning events that are created for the member in a resource directory.
   * 
   * @param request - GetUserProvisioningRdAccountStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserProvisioningRdAccountStatisticsResponse
   */
  async getUserProvisioningRdAccountStatisticsWithOptions(request: $_model.GetUserProvisioningRdAccountStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserProvisioningRdAccountStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.rdMemberId)) {
      query["RdMemberId"] = request.rdMemberId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserProvisioningRdAccountStatistics",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserProvisioningRdAccountStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetUserProvisioningRdAccountStatisticsResponse({}));
  }

  /**
   * Queries statistics of Resource Access Management (RAM) user provisioning events that are created for the member in a resource directory.
   * 
   * @param request - GetUserProvisioningRdAccountStatisticsRequest
   * @returns GetUserProvisioningRdAccountStatisticsResponse
   */
  async getUserProvisioningRdAccountStatistics(request: $_model.GetUserProvisioningRdAccountStatisticsRequest): Promise<$_model.GetUserProvisioningRdAccountStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserProvisioningRdAccountStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserProvisioningStatisticsResponse
   */
  async getUserProvisioningStatisticsWithOptions(request: $_model.GetUserProvisioningStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserProvisioningStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.userProvisioningId)) {
      query["UserProvisioningId"] = request.userProvisioningId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserProvisioningStatistics",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserProvisioningStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetUserProvisioningStatisticsResponse({}));
  }

  /**
   * Queries the statistics of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningStatisticsRequest
   * @returns GetUserProvisioningStatisticsResponse
   */
  async getUserProvisioningStatistics(request: $_model.GetUserProvisioningStatisticsRequest): Promise<$_model.GetUserProvisioningStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserProvisioningStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the access permissions that are assigned.
   * 
   * @remarks
   * This topic provides an example on how to query the assigned access permissions on the account `114240524784****` in your resource directory. The returned result shows that access permissions on the account in your resource directory is assigned to one user.
   * 
   * @param request - ListAccessAssignmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessAssignmentsResponse
   */
  async listAccessAssignmentsWithOptions(request: $_model.ListAccessAssignmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessAssignmentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessAssignments",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccessAssignmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListAccessAssignmentsResponse({}));
  }

  /**
   * Queries the access permissions that are assigned.
   * 
   * @remarks
   * This topic provides an example on how to query the assigned access permissions on the account `114240524784****` in your resource directory. The returned result shows that access permissions on the account in your resource directory is assigned to one user.
   * 
   * @param request - ListAccessAssignmentsRequest
   * @returns ListAccessAssignmentsResponse
   */
  async listAccessAssignments(request: $_model.ListAccessAssignmentsRequest): Promise<$_model.ListAccessAssignmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessAssignmentsWithOptions(request, runtime);
  }

  /**
   * Queries the access configurations that are provisioned.
   * 
   * @remarks
   * This topic provides an example on how to query the accounts for which the access permission `ac-00ccule7tadaijxc****` is provisioned. The returned result shows that the access configuration is provisioned for two accounts in your resource directory.
   * 
   * @param request - ListAccessConfigurationProvisioningsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessConfigurationProvisioningsResponse
   */
  async listAccessConfigurationProvisioningsWithOptions(request: $_model.ListAccessConfigurationProvisioningsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessConfigurationProvisioningsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.provisioningStatus)) {
      query["ProvisioningStatus"] = request.provisioningStatus;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessConfigurationProvisionings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccessConfigurationProvisioningsResponse>(await this.callApi(params, req, runtime), new $_model.ListAccessConfigurationProvisioningsResponse({}));
  }

  /**
   * Queries the access configurations that are provisioned.
   * 
   * @remarks
   * This topic provides an example on how to query the accounts for which the access permission `ac-00ccule7tadaijxc****` is provisioned. The returned result shows that the access configuration is provisioned for two accounts in your resource directory.
   * 
   * @param request - ListAccessConfigurationProvisioningsRequest
   * @returns ListAccessConfigurationProvisioningsResponse
   */
  async listAccessConfigurationProvisionings(request: $_model.ListAccessConfigurationProvisioningsRequest): Promise<$_model.ListAccessConfigurationProvisioningsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessConfigurationProvisioningsWithOptions(request, runtime);
  }

  /**
   * Queries access configurations.
   * 
   * @remarks
   * This topic provides an example on how to query the access configurations within the directory `d-00fc2p61****`. The returned result shows that the directory contains the `VPC-Admin` and `ECS-Admin` access configurations.
   * 
   * @param request - ListAccessConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessConfigurationsResponse
   */
  async listAccessConfigurationsWithOptions(request: $_model.ListAccessConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessConfigurationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.statusNotifications)) {
      query["StatusNotifications"] = request.statusNotifications;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccessConfigurations",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccessConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.ListAccessConfigurationsResponse({}));
  }

  /**
   * Queries access configurations.
   * 
   * @remarks
   * This topic provides an example on how to query the access configurations within the directory `d-00fc2p61****`. The returned result shows that the directory contains the `VPC-Admin` and `ECS-Admin` access configurations.
   * 
   * @param request - ListAccessConfigurationsRequest
   * @returns ListAccessConfigurationsResponse
   */
  async listAccessConfigurations(request: $_model.ListAccessConfigurationsRequest): Promise<$_model.ListAccessConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccessConfigurationsWithOptions(request, runtime);
  }

  /**
   * Queries directories.
   * 
   * @remarks
   * This topic provides an example on how to query the directories within your Alibaba Cloud account. The returned result shows that only one directory with the ID `d-00fc2p61****` is created within your Alibaba Cloud account.
   * 
   * @param request - ListDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDirectoriesResponse
   */
  async listDirectoriesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListDirectoriesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListDirectories",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListDirectoriesResponse({}));
  }

  /**
   * Queries directories.
   * 
   * @remarks
   * This topic provides an example on how to query the directories within your Alibaba Cloud account. The returned result shows that only one directory with the ID `d-00fc2p61****` is created within your Alibaba Cloud account.
   * @returns ListDirectoriesResponse
   */
  async listDirectories(): Promise<$_model.ListDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDirectoriesWithOptions(runtime);
  }

  /**
   * Queries Security Assertion Markup Language (SAML) signing certificates.
   * 
   * @remarks
   * This topic provides an example on how to query the SAML signing certificates within the directory `d-00fc2p61****`. The returned result shows that the directory contains one SAML signing certificate.
   * 
   * @param request - ListExternalSAMLIdPCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExternalSAMLIdPCertificatesResponse
   */
  async listExternalSAMLIdPCertificatesWithOptions(request: $_model.ListExternalSAMLIdPCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExternalSAMLIdPCertificatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExternalSAMLIdPCertificates",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExternalSAMLIdPCertificatesResponse>(await this.callApi(params, req, runtime), new $_model.ListExternalSAMLIdPCertificatesResponse({}));
  }

  /**
   * Queries Security Assertion Markup Language (SAML) signing certificates.
   * 
   * @remarks
   * This topic provides an example on how to query the SAML signing certificates within the directory `d-00fc2p61****`. The returned result shows that the directory contains one SAML signing certificate.
   * 
   * @param request - ListExternalSAMLIdPCertificatesRequest
   * @returns ListExternalSAMLIdPCertificatesResponse
   */
  async listExternalSAMLIdPCertificates(request: $_model.ListExternalSAMLIdPCertificatesRequest): Promise<$_model.ListExternalSAMLIdPCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExternalSAMLIdPCertificatesWithOptions(request, runtime);
  }

  /**
   * Queries the users in a group.
   * 
   * @remarks
   * This topic provides an example on how to query the users in the group `g-00jqzghi2n3o5hkh****`. The returned result shows that the group contains the user `Alice` and the user `user1`.
   * 
   * @param request - ListGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupMembersResponse
   */
  async listGroupMembersWithOptions(request: $_model.ListGroupMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupMembers",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupMembersResponse({}));
  }

  /**
   * Queries the users in a group.
   * 
   * @remarks
   * This topic provides an example on how to query the users in the group `g-00jqzghi2n3o5hkh****`. The returned result shows that the group contains the user `Alice` and the user `user1`.
   * 
   * @param request - ListGroupMembersRequest
   * @returns ListGroupMembersResponse
   */
  async listGroupMembers(request: $_model.ListGroupMembersRequest): Promise<$_model.ListGroupMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupMembersWithOptions(request, runtime);
  }

  /**
   * Queries groups.
   * 
   * @remarks
   * This topic provides an example on how to query the groups in the directory `d-00fc2p61****`. The returned result shows that the directory contains three groups. The groups `group1` and `group2` are synchronized from an external identity provider (IdP). The group `TestGroup` is manually created in CloudSSO.
   * 
   * @param request - ListGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(request: $_model.ListGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.provisionType)) {
      query["ProvisionType"] = request.provisionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroups",
      version: "2021-05-15",
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
   * Queries groups.
   * 
   * @remarks
   * This topic provides an example on how to query the groups in the directory `d-00fc2p61****`. The returned result shows that the directory contains three groups. The groups `group1` and `group2` are synchronized from an external identity provider (IdP). The group `TestGroup` is manually created in CloudSSO.
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: $_model.ListGroupsRequest): Promise<$_model.ListGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the groups to which a user is added.
   * 
   * @remarks
   * This topic provides an example on how to query the groups to which the user `u-00q8wbq42wiltcrk****` is added. The returned result shows that the user is added to both the `TestGroup` and the `group1` groups.
   * 
   * @param request - ListJoinedGroupsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJoinedGroupsForUserResponse
   */
  async listJoinedGroupsForUserWithOptions(request: $_model.ListJoinedGroupsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJoinedGroupsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJoinedGroupsForUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJoinedGroupsForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListJoinedGroupsForUserResponse({}));
  }

  /**
   * Queries the groups to which a user is added.
   * 
   * @remarks
   * This topic provides an example on how to query the groups to which the user `u-00q8wbq42wiltcrk****` is added. The returned result shows that the user is added to both the `TestGroup` and the `group1` groups.
   * 
   * @param request - ListJoinedGroupsForUserRequest
   * @returns ListJoinedGroupsForUserResponse
   */
  async listJoinedGroupsForUser(request: $_model.ListJoinedGroupsForUserRequest): Promise<$_model.ListJoinedGroupsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJoinedGroupsForUserWithOptions(request, runtime);
  }

  /**
   * Queries the multi-factor authentication (MFA) devices that are bound to a user. Up to two MFA devices can be bound to a user.
   * 
   * @remarks
   * This topic provides an example on how to query the MFA devices that are bound to the user `u-00q8wbq42wiltcrk****`. The returned result shows that the MFA device named `Alice-MFA1` is bound to the user.
   * 
   * @param request - ListMFADevicesForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMFADevicesForUserResponse
   */
  async listMFADevicesForUserWithOptions(request: $_model.ListMFADevicesForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMFADevicesForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMFADevicesForUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMFADevicesForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListMFADevicesForUserResponse({}));
  }

  /**
   * Queries the multi-factor authentication (MFA) devices that are bound to a user. Up to two MFA devices can be bound to a user.
   * 
   * @remarks
   * This topic provides an example on how to query the MFA devices that are bound to the user `u-00q8wbq42wiltcrk****`. The returned result shows that the MFA device named `Alice-MFA1` is bound to the user.
   * 
   * @param request - ListMFADevicesForUserRequest
   * @returns ListMFADevicesForUserResponse
   */
  async listMFADevicesForUser(request: $_model.ListMFADevicesForUserRequest): Promise<$_model.ListMFADevicesForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMFADevicesForUserWithOptions(request, runtime);
  }

  /**
   * Queries the policies that are created for an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to query the policies that are created for the access configuration `ac-00jhtfl8thteu6uj****`. The returned result shows that the access configuration contains one system policy and one inline policy.
   * 
   * @param request - ListPermissionPoliciesInAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionPoliciesInAccessConfigurationResponse
   */
  async listPermissionPoliciesInAccessConfigurationWithOptions(request: $_model.ListPermissionPoliciesInAccessConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionPoliciesInAccessConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.permissionPolicyType)) {
      query["PermissionPolicyType"] = request.permissionPolicyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPermissionPoliciesInAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPermissionPoliciesInAccessConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ListPermissionPoliciesInAccessConfigurationResponse({}));
  }

  /**
   * Queries the policies that are created for an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to query the policies that are created for the access configuration `ac-00jhtfl8thteu6uj****`. The returned result shows that the access configuration contains one system policy and one inline policy.
   * 
   * @param request - ListPermissionPoliciesInAccessConfigurationRequest
   * @returns ListPermissionPoliciesInAccessConfigurationResponse
   */
  async listPermissionPoliciesInAccessConfiguration(request: $_model.ListPermissionPoliciesInAccessConfigurationRequest): Promise<$_model.ListPermissionPoliciesInAccessConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPermissionPoliciesInAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries Cross-domain Identity Management (SCIM) credentials.
   * 
   * @remarks
   * This topic provides an example on how to query the SCIM credentials within the `d-00fc2p61****` directory.
   * 
   * @param request - ListSCIMServerCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSCIMServerCredentialsResponse
   */
  async listSCIMServerCredentialsWithOptions(request: $_model.ListSCIMServerCredentialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSCIMServerCredentialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSCIMServerCredentials",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSCIMServerCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.ListSCIMServerCredentialsResponse({}));
  }

  /**
   * Queries Cross-domain Identity Management (SCIM) credentials.
   * 
   * @remarks
   * This topic provides an example on how to query the SCIM credentials within the `d-00fc2p61****` directory.
   * 
   * @param request - ListSCIMServerCredentialsRequest
   * @returns ListSCIMServerCredentialsResponse
   */
  async listSCIMServerCredentials(request: $_model.ListSCIMServerCredentialsRequest): Promise<$_model.ListSCIMServerCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSCIMServerCredentialsWithOptions(request, runtime);
  }

  /**
   * Queries asynchronous tasks.
   * 
   * @remarks
   * By default, this operation queries the tasks within the previous 24 hours. This operation allows you to query the tasks within a maximum of 7 days. You can specify the start time of the query by using `Filter`.
   * This topic provides an example on how to query the tasks within the previous 24 hours.
   * 
   * @param request - ListTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(request: $_model.ListTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksResponse({}));
  }

  /**
   * Queries asynchronous tasks.
   * 
   * @remarks
   * By default, this operation queries the tasks within the previous 24 hours. This operation allows you to query the tasks within a maximum of 7 days. You can specify the start time of the query by using `Filter`.
   * This topic provides an example on how to query the tasks within the previous 24 hours.
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(request: $_model.ListTasksRequest): Promise<$_model.ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  /**
   * Queries Resource Access Management (RAM) user provisioning events.
   * 
   * @param request - ListUserProvisioningEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserProvisioningEventsResponse
   */
  async listUserProvisioningEventsWithOptions(request: $_model.ListUserProvisioningEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserProvisioningEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.userProvisioningId)) {
      query["UserProvisioningId"] = request.userProvisioningId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserProvisioningEvents",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserProvisioningEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserProvisioningEventsResponse({}));
  }

  /**
   * Queries Resource Access Management (RAM) user provisioning events.
   * 
   * @param request - ListUserProvisioningEventsRequest
   * @returns ListUserProvisioningEventsResponse
   */
  async listUserProvisioningEvents(request: $_model.ListUserProvisioningEventsRequest): Promise<$_model.ListUserProvisioningEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserProvisioningEventsWithOptions(request, runtime);
  }

  /**
   * Queries Resource Access Management (RAM) user provisionings.
   * 
   * @param request - ListUserProvisioningsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserProvisioningsResponse
   */
  async listUserProvisioningsWithOptions(request: $_model.ListUserProvisioningsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserProvisioningsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserProvisionings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserProvisioningsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserProvisioningsResponse({}));
  }

  /**
   * Queries Resource Access Management (RAM) user provisionings.
   * 
   * @param request - ListUserProvisioningsRequest
   * @returns ListUserProvisioningsResponse
   */
  async listUserProvisionings(request: $_model.ListUserProvisioningsRequest): Promise<$_model.ListUserProvisioningsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserProvisioningsWithOptions(request, runtime);
  }

  /**
   * Queries users.
   * 
   * @remarks
   * This topic provides an example on how to query users in the `d-00fc2p61****` directory. The returned result shows that the directory contains two users. The user `AliceLee` is synchronized from an external identity provider (IdP). The user `user1` is manually created within CloudSSO.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.provisionType)) {
      query["ProvisionType"] = request.provisionType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2021-05-15",
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
   * Queries users.
   * 
   * @remarks
   * This topic provides an example on how to query users in the `d-00fc2p61****` directory. The returned result shows that the directory contains two users. The user `AliceLee` is synchronized from an external identity provider (IdP). The user `user1` is manually created within CloudSSO.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Provisions an access configuration for an account in your resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to provision the access configuration `ac-00jhtfl8thteu6uj****` for the account `114240524784****` in your resource directory.
   * 
   * @param request - ProvisionAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProvisionAccessConfigurationResponse
   */
  async provisionAccessConfigurationWithOptions(request: $_model.ProvisionAccessConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProvisionAccessConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProvisionAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProvisionAccessConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ProvisionAccessConfigurationResponse({}));
  }

  /**
   * Provisions an access configuration for an account in your resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to provision the access configuration `ac-00jhtfl8thteu6uj****` for the account `114240524784****` in your resource directory.
   * 
   * @param request - ProvisionAccessConfigurationRequest
   * @returns ProvisionAccessConfigurationResponse
   */
  async provisionAccessConfiguration(request: $_model.ProvisionAccessConfigurationRequest): Promise<$_model.ProvisionAccessConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.provisionAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Removes a Security Assertion Markup Language (SAML) signing certificate.
   * 
   * @remarks
   * This topic provides an example on how to remove the SAML signing certificate whose ID is `idp-c-00dt9gnl7fmjaw9c****`.
   * 
   * @param request - RemoveExternalSAMLIdPCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveExternalSAMLIdPCertificateResponse
   */
  async removeExternalSAMLIdPCertificateWithOptions(request: $_model.RemoveExternalSAMLIdPCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveExternalSAMLIdPCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveExternalSAMLIdPCertificate",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveExternalSAMLIdPCertificateResponse>(await this.callApi(params, req, runtime), new $_model.RemoveExternalSAMLIdPCertificateResponse({}));
  }

  /**
   * Removes a Security Assertion Markup Language (SAML) signing certificate.
   * 
   * @remarks
   * This topic provides an example on how to remove the SAML signing certificate whose ID is `idp-c-00dt9gnl7fmjaw9c****`.
   * 
   * @param request - RemoveExternalSAMLIdPCertificateRequest
   * @returns RemoveExternalSAMLIdPCertificateResponse
   */
  async removeExternalSAMLIdPCertificate(request: $_model.RemoveExternalSAMLIdPCertificateRequest): Promise<$_model.RemoveExternalSAMLIdPCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeExternalSAMLIdPCertificateWithOptions(request, runtime);
  }

  /**
   * Removes a policy from an access configuration.
   * 
   * @remarks
   * After you remove an inline policy from an access configuration, the policy cannot be restored.
   * This topic provides an example on how to remove the system policy `AliyunECSFullAccess` from the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - RemovePermissionPolicyFromAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePermissionPolicyFromAccessConfigurationResponse
   */
  async removePermissionPolicyFromAccessConfigurationWithOptions(request: $_model.RemovePermissionPolicyFromAccessConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePermissionPolicyFromAccessConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.permissionPolicyName)) {
      query["PermissionPolicyName"] = request.permissionPolicyName;
    }

    if (!$dara.isNull(request.permissionPolicyType)) {
      query["PermissionPolicyType"] = request.permissionPolicyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemovePermissionPolicyFromAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemovePermissionPolicyFromAccessConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.RemovePermissionPolicyFromAccessConfigurationResponse({}));
  }

  /**
   * Removes a policy from an access configuration.
   * 
   * @remarks
   * After you remove an inline policy from an access configuration, the policy cannot be restored.
   * This topic provides an example on how to remove the system policy `AliyunECSFullAccess` from the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - RemovePermissionPolicyFromAccessConfigurationRequest
   * @returns RemovePermissionPolicyFromAccessConfigurationResponse
   */
  async removePermissionPolicyFromAccessConfiguration(request: $_model.RemovePermissionPolicyFromAccessConfigurationRequest): Promise<$_model.RemovePermissionPolicyFromAccessConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removePermissionPolicyFromAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Removes a user from a group.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot remove a user from a group that is synchronized by using SCIM.
   * This topic provides an example on how to remove the user `u-00q8wbq42wiltcrk****` from the group `g-00jqzghi2n3o5hkh****`.
   * 
   * @param request - RemoveUserFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromGroupResponse
   */
  async removeUserFromGroupWithOptions(request: $_model.RemoveUserFromGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserFromGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromGroup",
      version: "2021-05-15",
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
   * Removes a user from a group.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot remove a user from a group that is synchronized by using SCIM.
   * This topic provides an example on how to remove the user `u-00q8wbq42wiltcrk****` from the group `g-00jqzghi2n3o5hkh****`.
   * 
   * @param request - RemoveUserFromGroupRequest
   * @returns RemoveUserFromGroupResponse
   */
  async removeUserFromGroup(request: $_model.RemoveUserFromGroupRequest): Promise<$_model.RemoveUserFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserFromGroupWithOptions(request, runtime);
  }

  /**
   * Resets the password of a user.
   * 
   * @remarks
   * If a user forgets the password, the password expires, or the password poses security risks, a CloudSSO administrator can reset the password for the user.
   * >  After you enable single sign-on (SSO) logon, the password of a user cannot be reset.
   * This topic provides an example on how to reset the password of the user `u-00q8wbq42wiltcrk****`. The new password is automatically generated by the system.
   * 
   * @param request - ResetUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetUserPasswordResponse
   */
  async resetUserPasswordWithOptions(request: $_model.ResetUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetUserPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.generateRandomPassword)) {
      query["GenerateRandomPassword"] = request.generateRandomPassword;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.requirePasswordResetForNextLogin)) {
      query["RequirePasswordResetForNextLogin"] = request.requirePasswordResetForNextLogin;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetUserPassword",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetUserPasswordResponse({}));
  }

  /**
   * Resets the password of a user.
   * 
   * @remarks
   * If a user forgets the password, the password expires, or the password poses security risks, a CloudSSO administrator can reset the password for the user.
   * >  After you enable single sign-on (SSO) logon, the password of a user cannot be reset.
   * This topic provides an example on how to reset the password of the user `u-00q8wbq42wiltcrk****`. The new password is automatically generated by the system.
   * 
   * @param request - ResetUserPasswordRequest
   * @returns ResetUserPasswordResponse
   */
  async resetUserPassword(request: $_model.ResetUserPasswordRequest): Promise<$_model.ResetUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  /**
   * Retries a Resource Access Management (RAM) user provisioning event.
   * 
   * @param request - RetryUserProvisioningEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryUserProvisioningEventResponse
   */
  async retryUserProvisioningEventWithOptions(request: $_model.RetryUserProvisioningEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryUserProvisioningEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.duplicationStrategy)) {
      query["DuplicationStrategy"] = request.duplicationStrategy;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryUserProvisioningEvent",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryUserProvisioningEventResponse>(await this.callApi(params, req, runtime), new $_model.RetryUserProvisioningEventResponse({}));
  }

  /**
   * Retries a Resource Access Management (RAM) user provisioning event.
   * 
   * @param request - RetryUserProvisioningEventRequest
   * @returns RetryUserProvisioningEventResponse
   */
  async retryUserProvisioningEvent(request: $_model.RetryUserProvisioningEventRequest): Promise<$_model.RetryUserProvisioningEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryUserProvisioningEventWithOptions(request, runtime);
  }

  /**
   * Configures a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
   * During SAML 2.0-based single sign-on (SSO) logon, CloudSSO is a service provider (SP), and the identity management system of an enterprise is an IdP.
   * You can use one of the following methods to configure a SAML IdP. You can obtain the required metadata file or parameter values from your IdP.
   * *   Use the metadata file: You can specify the `EncodedMetadataDocument` parameter to upload the metadata file.
   * *   Manually configure the IdP: You can manually specify the following parameters for your IdP: `EntityId`, `LoginUrl`, `WantRequestSigned`, and `X509Certificate`.
   * If you have configured a SAML IdP, the existing configurations are replaced after you call this operation.
   * *   If the IdP is configured by using the metadata file, all existing configurations are replaced with new configurations.
   * *   If the IdP is manually configured, the original parameter values that are different from the new parameter values are replaced.
   * >  If SSO logon is enabled, new configurations immediately take effect. Take note of the impacts on the production environment.
   * This topic provides an example on how to configure an IdP by using the metadata file within the directory `d-00fc2p61****`.
   * 
   * @param request - SetExternalSAMLIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetExternalSAMLIdentityProviderResponse
   */
  async setExternalSAMLIdentityProviderWithOptions(request: $_model.SetExternalSAMLIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetExternalSAMLIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindingType)) {
      query["BindingType"] = request.bindingType;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.encodedMetadataDocument)) {
      query["EncodedMetadataDocument"] = request.encodedMetadataDocument;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.loginUrl)) {
      query["LoginUrl"] = request.loginUrl;
    }

    if (!$dara.isNull(request.SSOStatus)) {
      query["SSOStatus"] = request.SSOStatus;
    }

    if (!$dara.isNull(request.wantRequestSigned)) {
      query["WantRequestSigned"] = request.wantRequestSigned;
    }

    if (!$dara.isNull(request.x509Certificate)) {
      query["X509Certificate"] = request.x509Certificate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetExternalSAMLIdentityProvider",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetExternalSAMLIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.SetExternalSAMLIdentityProviderResponse({}));
  }

  /**
   * Configures a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
   * During SAML 2.0-based single sign-on (SSO) logon, CloudSSO is a service provider (SP), and the identity management system of an enterprise is an IdP.
   * You can use one of the following methods to configure a SAML IdP. You can obtain the required metadata file or parameter values from your IdP.
   * *   Use the metadata file: You can specify the `EncodedMetadataDocument` parameter to upload the metadata file.
   * *   Manually configure the IdP: You can manually specify the following parameters for your IdP: `EntityId`, `LoginUrl`, `WantRequestSigned`, and `X509Certificate`.
   * If you have configured a SAML IdP, the existing configurations are replaced after you call this operation.
   * *   If the IdP is configured by using the metadata file, all existing configurations are replaced with new configurations.
   * *   If the IdP is manually configured, the original parameter values that are different from the new parameter values are replaced.
   * >  If SSO logon is enabled, new configurations immediately take effect. Take note of the impacts on the production environment.
   * This topic provides an example on how to configure an IdP by using the metadata file within the directory `d-00fc2p61****`.
   * 
   * @param request - SetExternalSAMLIdentityProviderRequest
   * @returns SetExternalSAMLIdentityProviderResponse
   */
  async setExternalSAMLIdentityProvider(request: $_model.SetExternalSAMLIdentityProviderRequest): Promise<$_model.SetExternalSAMLIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Configures the logon preference of CloudSSO users.
   * 
   * @param request - SetLoginPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoginPreferenceResponse
   */
  async setLoginPreferenceWithOptions(request: $_model.SetLoginPreferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoginPreferenceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowUserToGetCredentials)) {
      query["AllowUserToGetCredentials"] = request.allowUserToGetCredentials;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.loginNetworkMasks)) {
      query["LoginNetworkMasks"] = request.loginNetworkMasks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoginPreference",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoginPreferenceResponse>(await this.callApi(params, req, runtime), new $_model.SetLoginPreferenceResponse({}));
  }

  /**
   * Configures the logon preference of CloudSSO users.
   * 
   * @param request - SetLoginPreferenceRequest
   * @returns SetLoginPreferenceResponse
   */
  async setLoginPreference(request: $_model.SetLoginPreferenceRequest): Promise<$_model.SetLoginPreferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoginPreferenceWithOptions(request, runtime);
  }

  /**
   * Enables or disables multi-factor authentication (MFA) for users in a directory.
   * 
   * @remarks
   * If a CloudSSO administrator enables username-password logon for users, CloudSSO automatically enables MFA to improve security. The administrator can call this operation to enable or disable MFA based on the business requirements.
   * This topic provides an example on how to enable MFA for users.
   * 
   * @param request - SetMFAAuthenticationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetMFAAuthenticationStatusResponse
   */
  async setMFAAuthenticationStatusWithOptions(request: $_model.SetMFAAuthenticationStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetMFAAuthenticationStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.MFAAuthenticationStatus)) {
      query["MFAAuthenticationStatus"] = request.MFAAuthenticationStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetMFAAuthenticationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetMFAAuthenticationStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetMFAAuthenticationStatusResponse({}));
  }

  /**
   * Enables or disables multi-factor authentication (MFA) for users in a directory.
   * 
   * @remarks
   * If a CloudSSO administrator enables username-password logon for users, CloudSSO automatically enables MFA to improve security. The administrator can call this operation to enable or disable MFA based on the business requirements.
   * This topic provides an example on how to enable MFA for users.
   * 
   * @param request - SetMFAAuthenticationStatusRequest
   * @returns SetMFAAuthenticationStatusResponse
   */
  async setMFAAuthenticationStatus(request: $_model.SetMFAAuthenticationStatusRequest): Promise<$_model.SetMFAAuthenticationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setMFAAuthenticationStatusWithOptions(request, runtime);
  }

  /**
   * Configures a password policy for CloudSSO users.
   * 
   * @param request - SetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordPolicyResponse
   */
  async setPasswordPolicyWithOptions(request: $_model.SetPasswordPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.maxLoginAttempts)) {
      query["MaxLoginAttempts"] = request.maxLoginAttempts;
    }

    if (!$dara.isNull(request.maxPasswordAge)) {
      query["MaxPasswordAge"] = request.maxPasswordAge;
    }

    if (!$dara.isNull(request.minPasswordDifferentChars)) {
      query["MinPasswordDifferentChars"] = request.minPasswordDifferentChars;
    }

    if (!$dara.isNull(request.minPasswordLength)) {
      query["MinPasswordLength"] = request.minPasswordLength;
    }

    if (!$dara.isNull(request.passwordNotContainUsername)) {
      query["PasswordNotContainUsername"] = request.passwordNotContainUsername;
    }

    if (!$dara.isNull(request.passwordReusePrevention)) {
      query["PasswordReusePrevention"] = request.passwordReusePrevention;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordPolicy",
      version: "2021-05-15",
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
   * Configures a password policy for CloudSSO users.
   * 
   * @param request - SetPasswordPolicyRequest
   * @returns SetPasswordPolicyResponse
   */
  async setPasswordPolicy(request: $_model.SetPasswordPolicyRequest): Promise<$_model.SetPasswordPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordPolicyWithOptions(request, runtime);
  }

  /**
   * Enables or disables System for Cross-domain Identity Management (SCIM) synchronization.
   * 
   * @remarks
   * You can synchronize users or groups from an external identity provider (IdP) that supports SCIM 2.0 to CloudSSO only after SCIM synchronization is enabled. If you disable SCIM synchronization, you can no longer synchronize users or groups to CloudSSO. The following list describes the impacts after SCIM synchronization is enabled or disabled:
   * *   After you enable SCIM synchronization, you cannot modify or delete the users or groups that are synchronized to CloudSSO by using SCIM. In addition, you cannot add users to or remove users from the groups. However, you can change the passwords of the users and enable or disable the logon of the users.
   * *   After you disable SCIM synchronization, you can modify and delete the users and groups that are synchronized to CloudSSO by using SCIM. You can also add users to or remove users from the groups.
   * This topic provides an example on how to enable SCIM synchronization within the directory `d-00fc2p61****`.
   * 
   * @param request - SetSCIMSynchronizationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSCIMSynchronizationStatusResponse
   */
  async setSCIMSynchronizationStatusWithOptions(request: $_model.SetSCIMSynchronizationStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSCIMSynchronizationStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.SCIMSynchronizationStatus)) {
      query["SCIMSynchronizationStatus"] = request.SCIMSynchronizationStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSCIMSynchronizationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSCIMSynchronizationStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetSCIMSynchronizationStatusResponse({}));
  }

  /**
   * Enables or disables System for Cross-domain Identity Management (SCIM) synchronization.
   * 
   * @remarks
   * You can synchronize users or groups from an external identity provider (IdP) that supports SCIM 2.0 to CloudSSO only after SCIM synchronization is enabled. If you disable SCIM synchronization, you can no longer synchronize users or groups to CloudSSO. The following list describes the impacts after SCIM synchronization is enabled or disabled:
   * *   After you enable SCIM synchronization, you cannot modify or delete the users or groups that are synchronized to CloudSSO by using SCIM. In addition, you cannot add users to or remove users from the groups. However, you can change the passwords of the users and enable or disable the logon of the users.
   * *   After you disable SCIM synchronization, you can modify and delete the users and groups that are synchronized to CloudSSO by using SCIM. You can also add users to or remove users from the groups.
   * This topic provides an example on how to enable SCIM synchronization within the directory `d-00fc2p61****`.
   * 
   * @param request - SetSCIMSynchronizationStatusRequest
   * @returns SetSCIMSynchronizationStatusResponse
   */
  async setSCIMSynchronizationStatus(request: $_model.SetSCIMSynchronizationStatusRequest): Promise<$_model.SetSCIMSynchronizationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSCIMSynchronizationStatusWithOptions(request, runtime);
  }

  /**
   * Modifies information about an access configuration.
   * 
   * @remarks
   * You can modify the `Description`, `SessionDuration`, and `RelayState` parameters for an access configuration.
   * This topic provides an example on how to change the initial web page in the access configuration `ac-00jhtfl8thteu6uj****` to `https://cloudsso.console.aliyun.com`.
   * 
   * @param request - UpdateAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccessConfigurationResponse
   */
  async updateAccessConfigurationWithOptions(request: $_model.UpdateAccessConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAccessConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.newRelayState)) {
      query["NewRelayState"] = request.newRelayState;
    }

    if (!$dara.isNull(request.newSessionDuration)) {
      query["NewSessionDuration"] = request.newSessionDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAccessConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAccessConfigurationResponse({}));
  }

  /**
   * Modifies information about an access configuration.
   * 
   * @remarks
   * You can modify the `Description`, `SessionDuration`, and `RelayState` parameters for an access configuration.
   * This topic provides an example on how to change the initial web page in the access configuration `ac-00jhtfl8thteu6uj****` to `https://cloudsso.console.aliyun.com`.
   * 
   * @param request - UpdateAccessConfigurationRequest
   * @returns UpdateAccessConfigurationResponse
   */
  async updateAccessConfiguration(request: $_model.UpdateAccessConfigurationRequest): Promise<$_model.UpdateAccessConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Changes the name of a directory.
   * 
   * @remarks
   * After you change the name of a directory, the URL that is used to log on to the CloudSSO user portal is changed. You must notify the CloudSSO users of the correct URL.
   * This topic provides an example on how to change the name of a directory to `new-example`.
   * 
   * @param request - UpdateDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDirectoryResponse
   */
  async updateDirectoryWithOptions(request: $_model.UpdateDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.newDirectoryName)) {
      query["NewDirectoryName"] = request.newDirectoryName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDirectoryResponse({}));
  }

  /**
   * Changes the name of a directory.
   * 
   * @remarks
   * After you change the name of a directory, the URL that is used to log on to the CloudSSO user portal is changed. You must notify the CloudSSO users of the correct URL.
   * This topic provides an example on how to change the name of a directory to `new-example`.
   * 
   * @param request - UpdateDirectoryRequest
   * @returns UpdateDirectoryResponse
   */
  async updateDirectory(request: $_model.UpdateDirectoryRequest): Promise<$_model.UpdateDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDirectoryWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a group.
   * 
   * @remarks
   * You can modify `GroupName` and `Description` for a group.
   * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify information about a group that is synchronized by using SCIM.
   * This topic provides an example on how to modify the name of the group `g-00jqzghi2n3o5hkh****` to `NewTestGroup`.
   * 
   * @param request - UpdateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(request: $_model.UpdateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.newGroupName)) {
      query["NewGroupName"] = request.newGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2021-05-15",
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
   * Modifies the information about a group.
   * 
   * @remarks
   * You can modify `GroupName` and `Description` for a group.
   * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify information about a group that is synchronized by using SCIM.
   * This topic provides an example on how to modify the name of the group `g-00jqzghi2n3o5hkh****` to `NewTestGroup`.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: $_model.UpdateGroupRequest): Promise<$_model.UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
   * Modifies an inline policy that is created for an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to modify an inline policy that is created for the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - UpdateInlinePolicyForAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInlinePolicyForAccessConfigurationResponse
   */
  async updateInlinePolicyForAccessConfigurationWithOptions(request: $_model.UpdateInlinePolicyForAccessConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInlinePolicyForAccessConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.inlinePolicyName)) {
      query["InlinePolicyName"] = request.inlinePolicyName;
    }

    if (!$dara.isNull(request.newInlinePolicyDocument)) {
      query["NewInlinePolicyDocument"] = request.newInlinePolicyDocument;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInlinePolicyForAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInlinePolicyForAccessConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInlinePolicyForAccessConfigurationResponse({}));
  }

  /**
   * Modifies an inline policy that is created for an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to modify an inline policy that is created for the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - UpdateInlinePolicyForAccessConfigurationRequest
   * @returns UpdateInlinePolicyForAccessConfigurationResponse
   */
  async updateInlinePolicyForAccessConfiguration(request: $_model.UpdateInlinePolicyForAccessConfigurationRequest): Promise<$_model.UpdateInlinePolicyForAccessConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInlinePolicyForAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * If you enable username-password logon for CloudSSO users, you can also configure MFA for the users.
   * This topic provides an example on how to enable MFA for all CloudSSO users that belong to the directory named `d-00fc2p61****`.
   * 
   * @param request - UpdateMFAAuthenticationSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMFAAuthenticationSettingsResponse
   */
  async updateMFAAuthenticationSettingsWithOptions(request: $_model.UpdateMFAAuthenticationSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMFAAuthenticationSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.MFAAuthenticationSettings)) {
      query["MFAAuthenticationSettings"] = request.MFAAuthenticationSettings;
    }

    if (!$dara.isNull(request.operationForRiskLogin)) {
      query["OperationForRiskLogin"] = request.operationForRiskLogin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMFAAuthenticationSettings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMFAAuthenticationSettingsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMFAAuthenticationSettingsResponse({}));
  }

  /**
   * Modifies the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * If you enable username-password logon for CloudSSO users, you can also configure MFA for the users.
   * This topic provides an example on how to enable MFA for all CloudSSO users that belong to the directory named `d-00fc2p61****`.
   * 
   * @param request - UpdateMFAAuthenticationSettingsRequest
   * @returns UpdateMFAAuthenticationSettingsResponse
   */
  async updateMFAAuthenticationSettings(request: $_model.UpdateMFAAuthenticationSettingsRequest): Promise<$_model.UpdateMFAAuthenticationSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  /**
   * Enables or disables a System for Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * This topic provides an example on how to disable the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`. After the SCIM credential is disabled, the synchronization task that uses the SCIM credential fails. You can call this operation again to enable the SCIM credential.
   * 
   * @param request - UpdateSCIMServerCredentialStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSCIMServerCredentialStatusResponse
   */
  async updateSCIMServerCredentialStatusWithOptions(request: $_model.UpdateSCIMServerCredentialStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSCIMServerCredentialStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.credentialId)) {
      query["CredentialId"] = request.credentialId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.newStatus)) {
      query["NewStatus"] = request.newStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSCIMServerCredentialStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSCIMServerCredentialStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSCIMServerCredentialStatusResponse({}));
  }

  /**
   * Enables or disables a System for Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * This topic provides an example on how to disable the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`. After the SCIM credential is disabled, the synchronization task that uses the SCIM credential fails. You can call this operation again to enable the SCIM credential.
   * 
   * @param request - UpdateSCIMServerCredentialStatusRequest
   * @returns UpdateSCIMServerCredentialStatusResponse
   */
  async updateSCIMServerCredentialStatus(request: $_model.UpdateSCIMServerCredentialStatusRequest): Promise<$_model.UpdateSCIMServerCredentialStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSCIMServerCredentialStatusWithOptions(request, runtime);
  }

  /**
   * Modifies information about a user.
   * 
   * @remarks
   * You can modify `FirstName`, `LastName`, `DisplayName`, `Email`, and `Description` for a user. You cannot modify `UserName` for a user.
   * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify information about a user that is synchronized by using SCIM.
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    if (!$dara.isNull(request.newEmail)) {
      query["NewEmail"] = request.newEmail;
    }

    if (!$dara.isNull(request.newFirstName)) {
      query["NewFirstName"] = request.newFirstName;
    }

    if (!$dara.isNull(request.newLastName)) {
      query["NewLastName"] = request.newLastName;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2021-05-15",
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
   * Modifies information about a user.
   * 
   * @remarks
   * You can modify `FirstName`, `LastName`, `DisplayName`, `Email`, and `Description` for a user. You cannot modify `UserName` for a user.
   * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify information about a user that is synchronized by using SCIM.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Modifies the multi-factor authentication (MFA) setting of a single user.
   * 
   * @remarks
   * If you call the [UpdateMFAAuthenticationSettings](https://help.aliyun.com/document_detail/450134.html) operation to set the MFAAuthenticationSettings parameter to `Byuser`, user-specific settings are applied. Then, you must call the UpdateUserMFAAuthenticationSettings operation to configure MFA for each user.
   * By default, the MFAAuthenticationSettings parameter is set to `Enabled` for a new user.
   * This topic provides an example on how to enable MFA for the user named `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - UpdateUserMFAAuthenticationSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserMFAAuthenticationSettingsResponse
   */
  async updateUserMFAAuthenticationSettingsWithOptions(request: $_model.UpdateUserMFAAuthenticationSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserMFAAuthenticationSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userMFAAuthenticationSettings)) {
      query["UserMFAAuthenticationSettings"] = request.userMFAAuthenticationSettings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserMFAAuthenticationSettings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserMFAAuthenticationSettingsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserMFAAuthenticationSettingsResponse({}));
  }

  /**
   * Modifies the multi-factor authentication (MFA) setting of a single user.
   * 
   * @remarks
   * If you call the [UpdateMFAAuthenticationSettings](https://help.aliyun.com/document_detail/450134.html) operation to set the MFAAuthenticationSettings parameter to `Byuser`, user-specific settings are applied. Then, you must call the UpdateUserMFAAuthenticationSettings operation to configure MFA for each user.
   * By default, the MFAAuthenticationSettings parameter is set to `Enabled` for a new user.
   * This topic provides an example on how to enable MFA for the user named `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - UpdateUserMFAAuthenticationSettingsRequest
   * @returns UpdateUserMFAAuthenticationSettingsResponse
   */
  async updateUserMFAAuthenticationSettings(request: $_model.UpdateUserMFAAuthenticationSettingsRequest): Promise<$_model.UpdateUserMFAAuthenticationSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  /**
   * Modifies a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - UpdateUserProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserProvisioningResponse
   */
  async updateUserProvisioningWithOptions(request: $_model.UpdateUserProvisioningRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserProvisioningResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.newDeletionStrategy)) {
      query["NewDeletionStrategy"] = request.newDeletionStrategy;
    }

    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.newDuplicationStrategy)) {
      query["NewDuplicationStrategy"] = request.newDuplicationStrategy;
    }

    if (!$dara.isNull(request.userProvisioningId)) {
      query["UserProvisioningId"] = request.userProvisioningId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserProvisioning",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserProvisioningResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserProvisioningResponse({}));
  }

  /**
   * Modifies a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - UpdateUserProvisioningRequest
   * @returns UpdateUserProvisioningResponse
   */
  async updateUserProvisioning(request: $_model.UpdateUserProvisioningRequest): Promise<$_model.UpdateUserProvisioningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserProvisioningWithOptions(request, runtime);
  }

  /**
   * Modifies the global configurations of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - UpdateUserProvisioningConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserProvisioningConfigurationResponse
   */
  async updateUserProvisioningConfigurationWithOptions(request: $_model.UpdateUserProvisioningConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserProvisioningConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.newDefaultLandingPage)) {
      query["NewDefaultLandingPage"] = request.newDefaultLandingPage;
    }

    if (!$dara.isNull(request.newSessionDuration)) {
      query["NewSessionDuration"] = request.newSessionDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserProvisioningConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserProvisioningConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserProvisioningConfigurationResponse({}));
  }

  /**
   * Modifies the global configurations of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - UpdateUserProvisioningConfigurationRequest
   * @returns UpdateUserProvisioningConfigurationResponse
   */
  async updateUserProvisioningConfiguration(request: $_model.UpdateUserProvisioningConfigurationRequest): Promise<$_model.UpdateUserProvisioningConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserProvisioningConfigurationWithOptions(request, runtime);
  }

  /**
   * Changes the status of a user.
   * 
   * @remarks
   * This topic provides an example on how to change the status of the user whose ID is `u-00q8wbq42wiltcrk****` to Disabled. Users in the Disabled state cannot log on to the CloudSSO user portal.
   * 
   * @param request - UpdateUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserStatusResponse
   */
  async updateUserStatusWithOptions(request: $_model.UpdateUserStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.newStatus)) {
      query["NewStatus"] = request.newStatus;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserStatusResponse({}));
  }

  /**
   * Changes the status of a user.
   * 
   * @remarks
   * This topic provides an example on how to change the status of the user whose ID is `u-00q8wbq42wiltcrk****` to Disabled. Users in the Disabled state cannot log on to the CloudSSO user portal.
   * 
   * @param request - UpdateUserStatusRequest
   * @returns UpdateUserStatusResponse
   */
  async updateUserStatus(request: $_model.UpdateUserStatusRequest): Promise<$_model.UpdateUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserStatusWithOptions(request, runtime);
  }

}
