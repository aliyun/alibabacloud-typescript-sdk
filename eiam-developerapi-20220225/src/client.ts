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
    this._endpointMap = {
      'eu-central-1': "eiam-developerapi.eu-central-1.aliyuncs.com",
      'cn-hongkong': "eiam-developerapi.cn-hongkong.aliyuncs.com",
      'cn-hangzhou': "eiam-developerapi.cn-hangzhou.aliyuncs.com",
      'ap-southeast-5': "eiam-developerapi.ap-southeast-5.aliyuncs.com",
      'ap-southeast-1': "eiam-developerapi.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "eiam-developerapi.ap-northeast-2.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eiam-developerapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds an EIAM account to one or more EIAM organizations. These organizations serve as subordinate organizations for the account. If the account is already a member of a specified organization, no update is performed.
   * 
   * @param request - AddUserToOrganizationalUnitsRequest
   * @param headers - AddUserToOrganizationalUnitsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToOrganizationalUnitsResponse
   */
  async addUserToOrganizationalUnitsWithOptions(instanceId: string, applicationId: string, userId: string, request: $_model.AddUserToOrganizationalUnitsRequest, headers: $_model.AddUserToOrganizationalUnitsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToOrganizationalUnitsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationalUnitIds)) {
      body["organizationalUnitIds"] = request.organizationalUnitIds;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToOrganizationalUnits",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/${$dara.URL.percentEncode(userId)}/actions/addUserToOrganizationalUnits`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.AddUserToOrganizationalUnitsResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.AddUserToOrganizationalUnitsResponse({}));
  }

  /**
   * Adds an EIAM account to one or more EIAM organizations. These organizations serve as subordinate organizations for the account. If the account is already a member of a specified organization, no update is performed.
   * 
   * @param request - AddUserToOrganizationalUnitsRequest
   * @returns AddUserToOrganizationalUnitsResponse
   */
  async addUserToOrganizationalUnits(instanceId: string, applicationId: string, userId: string, request: $_model.AddUserToOrganizationalUnitsRequest): Promise<$_model.AddUserToOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddUserToOrganizationalUnitsHeaders({ });
    return await this.addUserToOrganizationalUnitsWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

  /**
   * Adds multiple Employee Identity and Access Management (EIAM) accounts to an EIAM group. If the accounts are already added to the specified group, no update is performed.
   * 
   * @param request - AddUsersToGroupRequest
   * @param headers - AddUsersToGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUsersToGroupResponse
   */
  async addUsersToGroupWithOptions(instanceId: string, applicationId: string, groupId: string, request: $_model.AddUsersToGroupRequest, headers: $_model.AddUsersToGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddUsersToGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userIds)) {
      body["userIds"] = request.userIds;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUsersToGroup",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/groups/${$dara.URL.percentEncode(groupId)}/actions/addUsersToGroup`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.AddUsersToGroupResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.AddUsersToGroupResponse({}));
  }

  /**
   * Adds multiple Employee Identity and Access Management (EIAM) accounts to an EIAM group. If the accounts are already added to the specified group, no update is performed.
   * 
   * @param request - AddUsersToGroupRequest
   * @returns AddUsersToGroupResponse
   */
  async addUsersToGroup(instanceId: string, applicationId: string, groupId: string, request: $_model.AddUsersToGroupRequest): Promise<$_model.AddUsersToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddUsersToGroupHeaders({ });
    return await this.addUsersToGroupWithOptions(instanceId, applicationId, groupId, request, headers, runtime);
  }

  /**
   * Creates a group.
   * 
   * @param request - CreateGroupRequest
   * @param headers - CreateGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(instanceId: string, applicationId: string, request: $_model.CreateGroupRequest, headers: $_model.CreateGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupExternalId)) {
      body["groupExternalId"] = request.groupExternalId;
    }

    if (!$dara.isNull(request.groupName)) {
      body["groupName"] = request.groupName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/groups`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGroupResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.CreateGroupResponse({}));
  }

  /**
   * Creates a group.
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(instanceId: string, applicationId: string, request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateGroupHeaders({ });
    return await this.createGroupWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Creates an organizational unit.
   * 
   * @param request - CreateOrganizationalUnitRequest
   * @param headers - CreateOrganizationalUnitHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrganizationalUnitResponse
   */
  async createOrganizationalUnitWithOptions(instanceId: string, applicationId: string, request: $_model.CreateOrganizationalUnitRequest, headers: $_model.CreateOrganizationalUnitHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrganizationalUnitResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.organizationalUnitExternalId)) {
      body["organizationalUnitExternalId"] = request.organizationalUnitExternalId;
    }

    if (!$dara.isNull(request.organizationalUnitName)) {
      body["organizationalUnitName"] = request.organizationalUnitName;
    }

    if (!$dara.isNull(request.parentId)) {
      body["parentId"] = request.parentId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrganizationalUnit",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/organizationalUnits`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrganizationalUnitResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.CreateOrganizationalUnitResponse({}));
  }

  /**
   * Creates an organizational unit.
   * 
   * @param request - CreateOrganizationalUnitRequest
   * @returns CreateOrganizationalUnitResponse
   */
  async createOrganizationalUnit(instanceId: string, applicationId: string, request: $_model.CreateOrganizationalUnitRequest): Promise<$_model.CreateOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateOrganizationalUnitHeaders({ });
    return await this.createOrganizationalUnitWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Creates a new EIAM account in a specified organization.
   * 
   * @param request - CreateUserRequest
   * @param headers - CreateUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(instanceId: string, applicationId: string, request: $_model.CreateUserRequest, headers: $_model.CreateUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customFields)) {
      body["customFields"] = request.customFields;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.emailVerified)) {
      body["emailVerified"] = request.emailVerified;
    }

    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    if (!$dara.isNull(request.passwordInitializationConfig)) {
      body["passwordInitializationConfig"] = request.passwordInitializationConfig;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["phoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.phoneNumberVerified)) {
      body["phoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!$dara.isNull(request.phoneRegion)) {
      body["phoneRegion"] = request.phoneRegion;
    }

    if (!$dara.isNull(request.primaryOrganizationalUnitId)) {
      body["primaryOrganizationalUnitId"] = request.primaryOrganizationalUnitId;
    }

    if (!$dara.isNull(request.userExternalId)) {
      body["userExternalId"] = request.userExternalId;
    }

    if (!$dara.isNull(request.username)) {
      body["username"] = request.username;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.CreateUserResponse({}));
  }

  /**
   * Creates a new EIAM account in a specified organization.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(instanceId: string, applicationId: string, request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateUserHeaders({ });
    return await this.createUserWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Creates an account-specific credential.
   * 
   * @remarks
   * This API uses an Access Token issued by IDaaS for identity authentication and authorization.
   * Ensure that the Access Token you provide has the "Manage Static Credentials" permission for the IDaaS built-in PAM application (Privileged Access Management).
   * > The corresponding scope is `urn:cloud:idaas:pam|credential:manage`.
   * 
   * @param request - CreateUserExclusiveCredentialRequest
   * @param headers - CreateUserExclusiveCredentialHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserExclusiveCredentialResponse
   */
  async createUserExclusiveCredentialWithOptions(instanceId: string, request: $_model.CreateUserExclusiveCredentialRequest, headers: $_model.CreateUserExclusiveCredentialHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserExclusiveCredentialResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.credentialContent)) {
      body["credentialContent"] = request.credentialContent;
    }

    if (!$dara.isNull(request.credentialExternalId)) {
      body["credentialExternalId"] = request.credentialExternalId;
    }

    if (!$dara.isNull(request.credentialIdentifier)) {
      body["credentialIdentifier"] = request.credentialIdentifier;
    }

    if (!$dara.isNull(request.credentialName)) {
      body["credentialName"] = request.credentialName;
    }

    if (!$dara.isNull(request.credentialScenarioLabel)) {
      body["credentialScenarioLabel"] = request.credentialScenarioLabel;
    }

    if (!$dara.isNull(request.credentialType)) {
      body["credentialType"] = request.credentialType;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.returnCiphertext)) {
      body["returnCiphertext"] = request.returnCiphertext;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserExclusiveCredential",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/credentials/_/actions/createUserExclusive`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserExclusiveCredentialResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.CreateUserExclusiveCredentialResponse({}));
  }

  /**
   * Creates an account-specific credential.
   * 
   * @remarks
   * This API uses an Access Token issued by IDaaS for identity authentication and authorization.
   * Ensure that the Access Token you provide has the "Manage Static Credentials" permission for the IDaaS built-in PAM application (Privileged Access Management).
   * > The corresponding scope is `urn:cloud:idaas:pam|credential:manage`.
   * 
   * @param request - CreateUserExclusiveCredentialRequest
   * @returns CreateUserExclusiveCredentialResponse
   */
  async createUserExclusiveCredential(instanceId: string, request: $_model.CreateUserExclusiveCredentialRequest): Promise<$_model.CreateUserExclusiveCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateUserExclusiveCredentialHeaders({ });
    return await this.createUserExclusiveCredentialWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Deletes a group.
   * 
   * @param request - DeleteGroupRequest
   * @param headers - DeleteGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(instanceId: string, applicationId: string, groupId: string, request: $_model.DeleteGroupRequest, headers: $_model.DeleteGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/groups/${$dara.URL.percentEncode(groupId)}`,
      method: "DELETE",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteGroupResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.DeleteGroupResponse({}));
  }

  /**
   * Deletes a group.
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(instanceId: string, applicationId: string, groupId: string, request: $_model.DeleteGroupRequest): Promise<$_model.DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteGroupHeaders({ });
    return await this.deleteGroupWithOptions(instanceId, applicationId, groupId, request, headers, runtime);
  }

  /**
   * Deletes an organizational unit.
   * 
   * @param request - DeleteOrganizationalUnitRequest
   * @param headers - DeleteOrganizationalUnitHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnitWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, request: $_model.DeleteOrganizationalUnitRequest, headers: $_model.DeleteOrganizationalUnitHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOrganizationalUnitResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOrganizationalUnit",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/organizationalUnits/${$dara.URL.percentEncode(organizationalUnitId)}`,
      method: "DELETE",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteOrganizationalUnitResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.DeleteOrganizationalUnitResponse({}));
  }

  /**
   * Deletes an organizational unit.
   * 
   * @param request - DeleteOrganizationalUnitRequest
   * @returns DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnit(instanceId: string, applicationId: string, organizationalUnitId: string, request: $_model.DeleteOrganizationalUnitRequest): Promise<$_model.DeleteOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteOrganizationalUnitHeaders({ });
    return await this.deleteOrganizationalUnitWithOptions(instanceId, applicationId, organizationalUnitId, request, headers, runtime);
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - DeleteUserRequest
   * @param headers - DeleteUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(instanceId: string, applicationId: string, userId: string, request: $_model.DeleteUserRequest, headers: $_model.DeleteUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/${$dara.URL.percentEncode(userId)}`,
      method: "DELETE",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteUserResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.DeleteUserResponse({}));
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(instanceId: string, applicationId: string, userId: string, request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteUserHeaders({ });
    return await this.deleteUserWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

  /**
   * Disables an Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - DisableUserRequest
   * @param headers - DisableUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableUserResponse
   */
  async disableUserWithOptions(instanceId: string, applicationId: string, userId: string, request: $_model.DisableUserRequest, headers: $_model.DisableUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DisableUserResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/${$dara.URL.percentEncode(userId)}/actions/disable`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DisableUserResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.DisableUserResponse({}));
  }

  /**
   * Disables an Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - DisableUserRequest
   * @returns DisableUserResponse
   */
  async disableUser(instanceId: string, applicationId: string, userId: string, request: $_model.DisableUserRequest): Promise<$_model.DisableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DisableUserHeaders({ });
    return await this.disableUserWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

  /**
   * Enables an Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - EnableUserRequest
   * @param headers - EnableUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableUserResponse
   */
  async enableUserWithOptions(instanceId: string, applicationId: string, userId: string, request: $_model.EnableUserRequest, headers: $_model.EnableUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.EnableUserResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/${$dara.URL.percentEncode(userId)}/actions/enable`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.EnableUserResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.EnableUserResponse({}));
  }

  /**
   * Enables an Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - EnableUserRequest
   * @returns EnableUserResponse
   */
  async enableUser(instanceId: string, applicationId: string, userId: string, request: $_model.EnableUserRequest): Promise<$_model.EnableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.EnableUserHeaders({ });
    return await this.enableUserWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

  /**
   * Retrieves a valid OAuth authentication token.
   * 
   * @remarks
   * This API authenticates and authorizes requests based on an Access Token issued by IDaaS.
   * Ensure that the Access Token you provide has the function authorization to "obtain authentication token" for the IDaaS built-in PAM application (Privileged Access Management).
   * > The corresponding scope is `urn:cloud:idaas:pam|authentication_token:obtain`.
   * 
   * @param request - FetchOAuthAuthenticationTokenRequest
   * @param headers - FetchOAuthAuthenticationTokenHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchOAuthAuthenticationTokenResponse
   */
  async fetchOAuthAuthenticationTokenWithOptions(instanceId: string, request: $_model.FetchOAuthAuthenticationTokenRequest, headers: $_model.FetchOAuthAuthenticationTokenHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FetchOAuthAuthenticationTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.credentialProviderIdentifier)) {
      body["credentialProviderIdentifier"] = request.credentialProviderIdentifier;
    }

    if (!$dara.isNull(request.customParameters)) {
      body["customParameters"] = request.customParameters;
    }

    if (!$dara.isNull(request.forceAuthentication)) {
      body["forceAuthentication"] = request.forceAuthentication;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchOAuthAuthenticationToken",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/authenticationTokens/_/actions/fetchOAuthAccessToken`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FetchOAuthAuthenticationTokenResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.FetchOAuthAuthenticationTokenResponse({}));
  }

  /**
   * Retrieves a valid OAuth authentication token.
   * 
   * @remarks
   * This API authenticates and authorizes requests based on an Access Token issued by IDaaS.
   * Ensure that the Access Token you provide has the function authorization to "obtain authentication token" for the IDaaS built-in PAM application (Privileged Access Management).
   * > The corresponding scope is `urn:cloud:idaas:pam|authentication_token:obtain`.
   * 
   * @param request - FetchOAuthAuthenticationTokenRequest
   * @returns FetchOAuthAuthenticationTokenResponse
   */
  async fetchOAuthAuthenticationToken(instanceId: string, request: $_model.FetchOAuthAuthenticationTokenRequest): Promise<$_model.FetchOAuthAuthenticationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FetchOAuthAuthenticationTokenHeaders({ });
    return await this.fetchOAuthAuthenticationTokenWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Generates a device code.
   * 
   * @param request - GenerateDeviceCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateDeviceCodeResponse
   */
  async generateDeviceCodeWithOptions(instanceId: string, applicationId: string, request: $_model.GenerateDeviceCodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateDeviceCodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scope)) {
      query["scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateDeviceCode",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/oauth2/device/code`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateDeviceCodeResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GenerateDeviceCodeResponse({}));
  }

  /**
   * Generates a device code.
   * 
   * @param request - GenerateDeviceCodeRequest
   * @returns GenerateDeviceCodeResponse
   */
  async generateDeviceCode(instanceId: string, applicationId: string, request: $_model.GenerateDeviceCodeRequest): Promise<$_model.GenerateDeviceCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateDeviceCodeWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Generates a JSON Web Token (JWT) authentication token.
   * 
   * @remarks
   * This API performs identity authentication and authorization using the Access Token issued by IDaaS.
   * Ensure that the provided Access Token has the authorization to access the "Obtain Authentication Token" feature of the built-in Privileged Access Management (PAM) application in IDaaS.
   * > The corresponding scope is `urn:cloud:idaas:pam|authentication_token:obtain`.
   * 
   * @param request - GenerateJwtAuthenticationTokenRequest
   * @param headers - GenerateJwtAuthenticationTokenHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateJwtAuthenticationTokenResponse
   */
  async generateJwtAuthenticationTokenWithOptions(instanceId: string, request: $_model.GenerateJwtAuthenticationTokenRequest, headers: $_model.GenerateJwtAuthenticationTokenHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateJwtAuthenticationTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.audiences)) {
      body["audiences"] = request.audiences;
    }

    if (!$dara.isNull(request.credentialProviderIdentifier)) {
      body["credentialProviderIdentifier"] = request.credentialProviderIdentifier;
    }

    if (!$dara.isNull(request.customClaims)) {
      body["customClaims"] = request.customClaims;
    }

    if (!$dara.isNull(request.expiration)) {
      body["expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.includeDerivedShortToken)) {
      body["includeDerivedShortToken"] = request.includeDerivedShortToken;
    }

    if (!$dara.isNull(request.issuer)) {
      body["issuer"] = request.issuer;
    }

    if (!$dara.isNull(request.subject)) {
      body["subject"] = request.subject;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateJwtAuthenticationToken",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/authenticationTokens/_/actions/generateJwt`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateJwtAuthenticationTokenResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GenerateJwtAuthenticationTokenResponse({}));
  }

  /**
   * Generates a JSON Web Token (JWT) authentication token.
   * 
   * @remarks
   * This API performs identity authentication and authorization using the Access Token issued by IDaaS.
   * Ensure that the provided Access Token has the authorization to access the "Obtain Authentication Token" feature of the built-in Privileged Access Management (PAM) application in IDaaS.
   * > The corresponding scope is `urn:cloud:idaas:pam|authentication_token:obtain`.
   * 
   * @param request - GenerateJwtAuthenticationTokenRequest
   * @returns GenerateJwtAuthenticationTokenResponse
   */
  async generateJwtAuthenticationToken(instanceId: string, request: $_model.GenerateJwtAuthenticationTokenRequest): Promise<$_model.GenerateJwtAuthenticationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GenerateJwtAuthenticationTokenHeaders({ });
    return await this.generateJwtAuthenticationTokenWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Generates an access token for an application in a specified IDaaS instance based on credential information.
   * 
   * @remarks
   * The following methods are supported: Authorization Code, Device Flow, Refresh Token, Client Credentials, and Password.
   * ### 1. Authorization Code
   * Scenario: This is the standard OAuth 2.0 authorization code flow, which is suitable for web applications with frontend interaction.
   * Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=authorization_code
   * &code={authorization_code}
   * &redirect_uri={redirect_uri}
   * &client_id={client_id}
   * &client_secret={client_secret}
   * ```
   * Parameters:
   * ● code: The authorization code obtained from the authorization endpoint.
   * ● redirect_uri: Must be the same as the redirect_uri that was used to obtain the authorization code.
   * ### 1.1 Authorization Code for public clients
   * Scenario: This scenario is suitable for applications that cannot securely store a secret, such as single-page applications (SPAs) or native applications. In this flow, a client_secret is not required, but you must use the Proof Key for Code Exchange (PKCE) mechanism. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=authorization_code
   * &code={authorization_code}
   * &redirect_uri={redirect_uri}
   * &client_id={client_id}
   * &code_verifier={code_verifier}
   * ```
   * Parameters:
   * ● code_verifier: The code verifier for the PKCE mechanism. The client generates it when initiating an authorization request and uses it to derive the \\`code_challenge\\`. When exchanging for a token, you must submit this value. It must be identical to the value used to generate the \\`code_challenge\\`.
   * Java example for generating a code_verifier and code_challenge:
   * ```java
   * String codeVerifier = Base64.getUrlEncoder().withoutPadding().encodeToString(new SecureRandom().generateSeed(43));
   * String codeChallenge = Base64.getUrlEncoder().withoutPadding().encodeToString(java.security.MessageDigest.getInstance("SHA-256").digest(codeVerifier.getBytes()));
   * ```
   * ### 2. Device Flow
   * Scenario: This scenario is suitable for input-constrained devices, such as TVs and IoT devices. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=urn:ietf:params:oauth:grant-type:device_code
   * &device_code={device_code}
   * &client_id={client_id}
   * &client_secret={client_secret}
   * ```
   * To obtain the device code, first call `/oauth2/device/code` to retrieve the device_code and user_code.
   * ### 2.1 Device Flow for public clients
   * Scenario: This scenario is used when interactive logon is not convenient and the client is a public client. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=urn:ietf:params:oauth:grant-type:device_code
   * &device_code={device_code}
   * &client_id={client_id}
   * ```
   * ### 3. Refresh Token
   * Scenario: This scenario uses a refresh_token to obtain a new access_token. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=refresh_token
   * &refresh_token={refresh_token}
   * &client_id={client_id}
   * &client_secret={client_secret}
   * ```
   * ### 4. Client Credentials
   * Scenario: This scenario is for server-to-server authentication without user involvement. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=client_credentials
   * &client_id={client_id}
   * &client_secret={client_secret}
   * &scope={scope}
   * ```
   * ### 5. Password
   * Scenario: This scenario uses traditional username and password authentication. Use this method with caution. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=password
   * &username={username}
   * &password={password}
   * &client_id={client_id}
   * &scope={scope}
   * ```
   * 
   * @param request - GenerateTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateTokenResponse
   */
  async generateTokenWithOptions(instanceId: string, applicationId: string, request: $_model.GenerateTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      query["client_id"] = request.clientId;
    }

    if (!$dara.isNull(request.clientSecret)) {
      query["client_secret"] = request.clientSecret;
    }

    if (!$dara.isNull(request.code)) {
      query["code"] = request.code;
    }

    if (!$dara.isNull(request.codeVerifier)) {
      query["code_verifier"] = request.codeVerifier;
    }

    if (!$dara.isNull(request.deviceCode)) {
      query["device_code"] = request.deviceCode;
    }

    if (!$dara.isNull(request.exclusiveTag)) {
      query["exclusive_tag"] = request.exclusiveTag;
    }

    if (!$dara.isNull(request.grantType)) {
      query["grant_type"] = request.grantType;
    }

    if (!$dara.isNull(request.password)) {
      query["password"] = request.password;
    }

    if (!$dara.isNull(request.redirectUri)) {
      query["redirect_uri"] = request.redirectUri;
    }

    if (!$dara.isNull(request.refreshToken)) {
      query["refresh_token"] = request.refreshToken;
    }

    if (!$dara.isNull(request.scope)) {
      query["scope"] = request.scope;
    }

    if (!$dara.isNull(request.username)) {
      query["username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateToken",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/oauth2/token`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateTokenResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GenerateTokenResponse({}));
  }

  /**
   * Generates an access token for an application in a specified IDaaS instance based on credential information.
   * 
   * @remarks
   * The following methods are supported: Authorization Code, Device Flow, Refresh Token, Client Credentials, and Password.
   * ### 1. Authorization Code
   * Scenario: This is the standard OAuth 2.0 authorization code flow, which is suitable for web applications with frontend interaction.
   * Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=authorization_code
   * &code={authorization_code}
   * &redirect_uri={redirect_uri}
   * &client_id={client_id}
   * &client_secret={client_secret}
   * ```
   * Parameters:
   * ● code: The authorization code obtained from the authorization endpoint.
   * ● redirect_uri: Must be the same as the redirect_uri that was used to obtain the authorization code.
   * ### 1.1 Authorization Code for public clients
   * Scenario: This scenario is suitable for applications that cannot securely store a secret, such as single-page applications (SPAs) or native applications. In this flow, a client_secret is not required, but you must use the Proof Key for Code Exchange (PKCE) mechanism. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=authorization_code
   * &code={authorization_code}
   * &redirect_uri={redirect_uri}
   * &client_id={client_id}
   * &code_verifier={code_verifier}
   * ```
   * Parameters:
   * ● code_verifier: The code verifier for the PKCE mechanism. The client generates it when initiating an authorization request and uses it to derive the \\`code_challenge\\`. When exchanging for a token, you must submit this value. It must be identical to the value used to generate the \\`code_challenge\\`.
   * Java example for generating a code_verifier and code_challenge:
   * ```java
   * String codeVerifier = Base64.getUrlEncoder().withoutPadding().encodeToString(new SecureRandom().generateSeed(43));
   * String codeChallenge = Base64.getUrlEncoder().withoutPadding().encodeToString(java.security.MessageDigest.getInstance("SHA-256").digest(codeVerifier.getBytes()));
   * ```
   * ### 2. Device Flow
   * Scenario: This scenario is suitable for input-constrained devices, such as TVs and IoT devices. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=urn:ietf:params:oauth:grant-type:device_code
   * &device_code={device_code}
   * &client_id={client_id}
   * &client_secret={client_secret}
   * ```
   * To obtain the device code, first call `/oauth2/device/code` to retrieve the device_code and user_code.
   * ### 2.1 Device Flow for public clients
   * Scenario: This scenario is used when interactive logon is not convenient and the client is a public client. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=urn:ietf:params:oauth:grant-type:device_code
   * &device_code={device_code}
   * &client_id={client_id}
   * ```
   * ### 3. Refresh Token
   * Scenario: This scenario uses a refresh_token to obtain a new access_token. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=refresh_token
   * &refresh_token={refresh_token}
   * &client_id={client_id}
   * &client_secret={client_secret}
   * ```
   * ### 4. Client Credentials
   * Scenario: This scenario is for server-to-server authentication without user involvement. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=client_credentials
   * &client_id={client_id}
   * &client_secret={client_secret}
   * &scope={scope}
   * ```
   * ### 5. Password
   * Scenario: This scenario uses traditional username and password authentication. Use this method with caution. Example call:
   * ```
   * POST /v2/{instanceId}/{applicationId}/oauth2/token
   * Content-Type: application/x-www-form-urlencoded
   * grant_type=password
   * &username={username}
   * &password={password}
   * &client_id={client_id}
   * &scope={scope}
   * ```
   * 
   * @param request - GenerateTokenRequest
   * @returns GenerateTokenResponse
   */
  async generateToken(instanceId: string, applicationId: string, request: $_model.GenerateTokenRequest): Promise<$_model.GenerateTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateTokenWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * The token endpoint for an instance-level authorization server.
   * 
   * @param request - GenerateTokenByAuthorizationServerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateTokenByAuthorizationServerResponse
   */
  async generateTokenByAuthorizationServerWithOptions(instanceId: string, authorizationServerId: string, request: $_model.GenerateTokenByAuthorizationServerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateTokenByAuthorizationServerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationFederatedCredentialName)) {
      query["application_federated_credential_name"] = request.applicationFederatedCredentialName;
    }

    if (!$dara.isNull(request.clientAssertion)) {
      query["client_assertion"] = request.clientAssertion;
    }

    if (!$dara.isNull(request.clientAssertionType)) {
      query["client_assertion_type"] = request.clientAssertionType;
    }

    if (!$dara.isNull(request.clientId)) {
      query["client_id"] = request.clientId;
    }

    if (!$dara.isNull(request.clientSecret)) {
      query["client_secret"] = request.clientSecret;
    }

    if (!$dara.isNull(request.clientX509)) {
      query["client_x509"] = request.clientX509;
    }

    if (!$dara.isNull(request.clientX509Chain)) {
      query["client_x509_chain"] = request.clientX509Chain;
    }

    if (!$dara.isNull(request.code)) {
      query["code"] = request.code;
    }

    if (!$dara.isNull(request.codeVerifier)) {
      query["code_verifier"] = request.codeVerifier;
    }

    if (!$dara.isNull(request.deviceCode)) {
      query["device_code"] = request.deviceCode;
    }

    if (!$dara.isNull(request.grantType)) {
      query["grant_type"] = request.grantType;
    }

    if (!$dara.isNull(request.password)) {
      query["password"] = request.password;
    }

    if (!$dara.isNull(request.redirectUri)) {
      query["redirect_uri"] = request.redirectUri;
    }

    if (!$dara.isNull(request.refreshToken)) {
      query["refresh_token"] = request.refreshToken;
    }

    if (!$dara.isNull(request.scope)) {
      query["scope"] = request.scope;
    }

    if (!$dara.isNull(request.username)) {
      query["username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateTokenByAuthorizationServer",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/authorizationServer/${$dara.URL.percentEncode(authorizationServerId)}/oauth2/token`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateTokenByAuthorizationServerResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GenerateTokenByAuthorizationServerResponse({}));
  }

  /**
   * The token endpoint for an instance-level authorization server.
   * 
   * @param request - GenerateTokenByAuthorizationServerRequest
   * @returns GenerateTokenByAuthorizationServerResponse
   */
  async generateTokenByAuthorizationServer(instanceId: string, authorizationServerId: string, request: $_model.GenerateTokenByAuthorizationServerRequest): Promise<$_model.GenerateTokenByAuthorizationServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateTokenByAuthorizationServerWithOptions(instanceId, authorizationServerId, request, headers, runtime);
  }

  /**
   * The GetApplicationProvisioningScope operation retrieves the synchronization scope of an application in a specific instance.
   * 
   * @remarks
   * > - You can set the synchronization scope in Application Management in the IDaaS console. After you create an application, you have permission to call this API by default.
   * 
   * @param request - GetApplicationProvisioningScopeRequest
   * @param headers - GetApplicationProvisioningScopeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScopeWithOptions(instanceId: string, applicationId: string, request: $_model.GetApplicationProvisioningScopeRequest, headers: $_model.GetApplicationProvisioningScopeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationProvisioningScopeResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationProvisioningScope",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/provisioningScope`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationProvisioningScopeResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetApplicationProvisioningScopeResponse({}));
  }

  /**
   * The GetApplicationProvisioningScope operation retrieves the synchronization scope of an application in a specific instance.
   * 
   * @remarks
   * > - You can set the synchronization scope in Application Management in the IDaaS console. After you create an application, you have permission to call this API by default.
   * 
   * @param request - GetApplicationProvisioningScopeRequest
   * @returns GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScope(instanceId: string, applicationId: string, request: $_model.GetApplicationProvisioningScopeRequest): Promise<$_model.GetApplicationProvisioningScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetApplicationProvisioningScopeHeaders({ });
    return await this.getApplicationProvisioningScopeWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a group.
   * 
   * @param request - GetGroupRequest
   * @param headers - GetGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(instanceId: string, applicationId: string, groupId: string, request: $_model.GetGroupRequest, headers: $_model.GetGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/groups/${$dara.URL.percentEncode(groupId)}`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetGroupResponse({}));
  }

  /**
   * Retrieves the details of a group.
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(instanceId: string, applicationId: string, groupId: string, request: $_model.GetGroupRequest): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetGroupHeaders({ });
    return await this.getGroupWithOptions(instanceId, applicationId, groupId, request, headers, runtime);
  }

  /**
   * Queries the current status and authorization result of an OAuth authorization session.
   * 
   * @param request - GetOAuthAuthorizationSessionRequest
   * @param headers - GetOAuthAuthorizationSessionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOAuthAuthorizationSessionResponse
   */
  async getOAuthAuthorizationSessionWithOptions(instanceId: string, request: $_model.GetOAuthAuthorizationSessionRequest, headers: $_model.GetOAuthAuthorizationSessionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetOAuthAuthorizationSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionUri)) {
      body["sessionUri"] = request.sessionUri;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOAuthAuthorizationSession",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/oauthAuthorizationSessions/_/actions/get`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOAuthAuthorizationSessionResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetOAuthAuthorizationSessionResponse({}));
  }

  /**
   * Queries the current status and authorization result of an OAuth authorization session.
   * 
   * @param request - GetOAuthAuthorizationSessionRequest
   * @returns GetOAuthAuthorizationSessionResponse
   */
  async getOAuthAuthorizationSession(instanceId: string, request: $_model.GetOAuthAuthorizationSessionRequest): Promise<$_model.GetOAuthAuthorizationSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetOAuthAuthorizationSessionHeaders({ });
    return await this.getOAuthAuthorizationSessionWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Retrieves the information about an organizational unit.
   * 
   * @param request - GetOrganizationalUnitRequest
   * @param headers - GetOrganizationalUnitHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrganizationalUnitResponse
   */
  async getOrganizationalUnitWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, request: $_model.GetOrganizationalUnitRequest, headers: $_model.GetOrganizationalUnitHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrganizationalUnitResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrganizationalUnit",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/organizationalUnits/${$dara.URL.percentEncode(organizationalUnitId)}`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrganizationalUnitResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetOrganizationalUnitResponse({}));
  }

  /**
   * Retrieves the information about an organizational unit.
   * 
   * @param request - GetOrganizationalUnitRequest
   * @returns GetOrganizationalUnitResponse
   */
  async getOrganizationalUnit(instanceId: string, applicationId: string, organizationalUnitId: string, request: $_model.GetOrganizationalUnitRequest): Promise<$_model.GetOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetOrganizationalUnitHeaders({ });
    return await this.getOrganizationalUnitWithOptions(instanceId, applicationId, organizationalUnitId, request, headers, runtime);
  }

  /**
   * Obtains the ID of an organizational unit based on the external ID
   * 
   * @param request - GetOrganizationalUnitIdByExternalIdRequest
   * @param headers - GetOrganizationalUnitIdByExternalIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrganizationalUnitIdByExternalIdResponse
   */
  async getOrganizationalUnitIdByExternalIdWithOptions(instanceId: string, applicationId: string, request: $_model.GetOrganizationalUnitIdByExternalIdRequest, headers: $_model.GetOrganizationalUnitIdByExternalIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrganizationalUnitIdByExternalIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationalUnitExternalId)) {
      body["organizationalUnitExternalId"] = request.organizationalUnitExternalId;
    }

    if (!$dara.isNull(request.organizationalUnitSourceId)) {
      body["organizationalUnitSourceId"] = request.organizationalUnitSourceId;
    }

    if (!$dara.isNull(request.organizationalUnitSourceType)) {
      body["organizationalUnitSourceType"] = request.organizationalUnitSourceType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrganizationalUnitIdByExternalId",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/organizationalUnits/_/actions/getOrganizationalUnitIdByExternalId`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrganizationalUnitIdByExternalIdResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetOrganizationalUnitIdByExternalIdResponse({}));
  }

  /**
   * Obtains the ID of an organizational unit based on the external ID
   * 
   * @param request - GetOrganizationalUnitIdByExternalIdRequest
   * @returns GetOrganizationalUnitIdByExternalIdResponse
   */
  async getOrganizationalUnitIdByExternalId(instanceId: string, applicationId: string, request: $_model.GetOrganizationalUnitIdByExternalIdRequest): Promise<$_model.GetOrganizationalUnitIdByExternalIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetOrganizationalUnitIdByExternalIdHeaders({ });
    return await this.getOrganizationalUnitIdByExternalIdWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Retrieves the details of an Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - GetUserRequest
   * @param headers - GetUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(instanceId: string, applicationId: string, userId: string, request: $_model.GetUserRequest, headers: $_model.GetUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/${$dara.URL.percentEncode(userId)}`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * Retrieves the details of an Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(instanceId: string, applicationId: string, userId: string, request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserHeaders({ });
    return await this.getUserWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

  /**
   * Queries the ID of an Employee Identity and Access Management (EIAM) account by email address.
   * 
   * @param request - GetUserIdByEmailRequest
   * @param headers - GetUserIdByEmailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserIdByEmailResponse
   */
  async getUserIdByEmailWithOptions(instanceId: string, applicationId: string, request: $_model.GetUserIdByEmailRequest, headers: $_model.GetUserIdByEmailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserIdByEmailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserIdByEmail",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/_/actions/getUserIdByEmail`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserIdByEmailResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetUserIdByEmailResponse({}));
  }

  /**
   * Queries the ID of an Employee Identity and Access Management (EIAM) account by email address.
   * 
   * @param request - GetUserIdByEmailRequest
   * @returns GetUserIdByEmailResponse
   */
  async getUserIdByEmail(instanceId: string, applicationId: string, request: $_model.GetUserIdByEmailRequest): Promise<$_model.GetUserIdByEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserIdByEmailHeaders({ });
    return await this.getUserIdByEmailWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Queries the ID of an Employee Identity and Access Management (EIAM) account based on the mobile number.
   * 
   * @param request - GetUserIdByPhoneNumberRequest
   * @param headers - GetUserIdByPhoneNumberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserIdByPhoneNumberResponse
   */
  async getUserIdByPhoneNumberWithOptions(instanceId: string, applicationId: string, request: $_model.GetUserIdByPhoneNumberRequest, headers: $_model.GetUserIdByPhoneNumberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserIdByPhoneNumberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.phoneNumber)) {
      body["phoneNumber"] = request.phoneNumber;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserIdByPhoneNumber",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/_/actions/getUserIdByPhoneNumber`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserIdByPhoneNumberResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetUserIdByPhoneNumberResponse({}));
  }

  /**
   * Queries the ID of an Employee Identity and Access Management (EIAM) account based on the mobile number.
   * 
   * @param request - GetUserIdByPhoneNumberRequest
   * @returns GetUserIdByPhoneNumberResponse
   */
  async getUserIdByPhoneNumber(instanceId: string, applicationId: string, request: $_model.GetUserIdByPhoneNumberRequest): Promise<$_model.GetUserIdByPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserIdByPhoneNumberHeaders({ });
    return await this.getUserIdByPhoneNumberWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Queries the ID of an Employee Identity and Access Management (EIAM) account based on the external ID.
   * 
   * @param request - GetUserIdByUserExternalIdRequest
   * @param headers - GetUserIdByUserExternalIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserIdByUserExternalIdResponse
   */
  async getUserIdByUserExternalIdWithOptions(instanceId: string, applicationId: string, request: $_model.GetUserIdByUserExternalIdRequest, headers: $_model.GetUserIdByUserExternalIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserIdByUserExternalIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userExternalId)) {
      body["userExternalId"] = request.userExternalId;
    }

    if (!$dara.isNull(request.userSourceId)) {
      body["userSourceId"] = request.userSourceId;
    }

    if (!$dara.isNull(request.userSourceType)) {
      body["userSourceType"] = request.userSourceType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserIdByUserExternalId",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/_/actions/getUserIdByExternalId`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserIdByUserExternalIdResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetUserIdByUserExternalIdResponse({}));
  }

  /**
   * Queries the ID of an Employee Identity and Access Management (EIAM) account based on the external ID.
   * 
   * @param request - GetUserIdByUserExternalIdRequest
   * @returns GetUserIdByUserExternalIdResponse
   */
  async getUserIdByUserExternalId(instanceId: string, applicationId: string, request: $_model.GetUserIdByUserExternalIdRequest): Promise<$_model.GetUserIdByUserExternalIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserIdByUserExternalIdHeaders({ });
    return await this.getUserIdByUserExternalIdWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Queries the ID of an Employee Identity and Access Management (EIAM) account based on the username.
   * 
   * @param request - GetUserIdByUsernameRequest
   * @param headers - GetUserIdByUsernameHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserIdByUsernameResponse
   */
  async getUserIdByUsernameWithOptions(instanceId: string, applicationId: string, request: $_model.GetUserIdByUsernameRequest, headers: $_model.GetUserIdByUsernameHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserIdByUsernameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.username)) {
      body["username"] = request.username;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserIdByUsername",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/_/actions/getUserIdByUsername`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserIdByUsernameResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetUserIdByUsernameResponse({}));
  }

  /**
   * Queries the ID of an Employee Identity and Access Management (EIAM) account based on the username.
   * 
   * @param request - GetUserIdByUsernameRequest
   * @returns GetUserIdByUsernameResponse
   */
  async getUserIdByUsername(instanceId: string, applicationId: string, request: $_model.GetUserIdByUsernameRequest): Promise<$_model.GetUserIdByUsernameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserIdByUsernameHeaders({ });
    return await this.getUserIdByUsernameWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Retrieves the information about a user by using the user token.
   * 
   * @param request - GetUserInfoRequest
   * @param headers - GetUserInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserInfoResponse
   */
  async getUserInfoWithOptions(instanceId: string, applicationId: string, request: $_model.GetUserInfoRequest, headers: $_model.GetUserInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserInfoResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserInfo",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/oauth2/userinfo`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserInfoResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetUserInfoResponse({}));
  }

  /**
   * Retrieves the information about a user by using the user token.
   * 
   * @param request - GetUserInfoRequest
   * @returns GetUserInfoResponse
   */
  async getUserInfo(instanceId: string, applicationId: string, request: $_model.GetUserInfoRequest): Promise<$_model.GetUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserInfoHeaders({ });
    return await this.getUserInfoWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Lists authentication tokens.
   * 
   * @remarks
   * This API uses an Access Token issued by IDaaS for identity authentication and authorization.
   * Ensure that the Access Token you provide has the Query authentication tokens permission for the built-in Privileged Access Management (PAM) application in IDaaS.
   * > The required scope is `urn:cloud:idaas:pam|authentication_token:read`.
   * 
   * @param request - ListAuthenticationTokensRequest
   * @param headers - ListAuthenticationTokensHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthenticationTokensResponse
   */
  async listAuthenticationTokensWithOptions(instanceId: string, request: $_model.ListAuthenticationTokensRequest, headers: $_model.ListAuthenticationTokensHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthenticationTokensResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerId)) {
      query["consumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.credentialProviderIdentifier)) {
      query["credentialProviderIdentifier"] = request.credentialProviderIdentifier;
    }

    if (!$dara.isNull(request.expired)) {
      query["expired"] = request.expired;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.revoked)) {
      query["revoked"] = request.revoked;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthenticationTokens",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/authenticationTokens`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthenticationTokensResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListAuthenticationTokensResponse({}));
  }

  /**
   * Lists authentication tokens.
   * 
   * @remarks
   * This API uses an Access Token issued by IDaaS for identity authentication and authorization.
   * Ensure that the Access Token you provide has the Query authentication tokens permission for the built-in Privileged Access Management (PAM) application in IDaaS.
   * > The required scope is `urn:cloud:idaas:pam|authentication_token:read`.
   * 
   * @param request - ListAuthenticationTokensRequest
   * @returns ListAuthenticationTokensResponse
   */
  async listAuthenticationTokens(instanceId: string, request: $_model.ListAuthenticationTokensRequest): Promise<$_model.ListAuthenticationTokensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListAuthenticationTokensHeaders({ });
    return await this.listAuthenticationTokensWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Retrieves information about Employee Identity and Access Management (EIAM) groups by page.
   * 
   * @param request - ListGroupsRequest
   * @param headers - ListGroupsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(instanceId: string, applicationId: string, request: $_model.ListGroupsRequest, headers: $_model.ListGroupsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupNameStartWith)) {
      query["groupNameStartWith"] = request.groupNameStartWith;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroups",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/groups`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListGroupsResponse({}));
  }

  /**
   * Retrieves information about Employee Identity and Access Management (EIAM) groups by page.
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(instanceId: string, applicationId: string, request: $_model.ListGroupsRequest): Promise<$_model.ListGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListGroupsHeaders({ });
    return await this.listGroupsWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Lists the groups that an EIAM user is a member of.
   * 
   * @param request - ListGroupsForUserRequest
   * @param headers - ListGroupsForUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUserWithOptions(instanceId: string, applicationId: string, userId: string, request: $_model.ListGroupsForUserRequest, headers: $_model.ListGroupsForUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsForUserResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupsForUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/${$dara.URL.percentEncode(userId)}/actions/listGroupsForUser`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsForUserResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListGroupsForUserResponse({}));
  }

  /**
   * Lists the groups that an EIAM user is a member of.
   * 
   * @param request - ListGroupsForUserRequest
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUser(instanceId: string, applicationId: string, userId: string, request: $_model.ListGroupsForUserRequest): Promise<$_model.ListGroupsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListGroupsForUserHeaders({ });
    return await this.listGroupsForUserWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

  /**
   * Retrieves the information about all the parent organizational units of an organizational unit.
   * 
   * @param request - ListOrganizationalUnitParentIdsRequest
   * @param headers - ListOrganizationalUnitParentIdsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitParentIdsResponse
   */
  async listOrganizationalUnitParentIdsWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, request: $_model.ListOrganizationalUnitParentIdsRequest, headers: $_model.ListOrganizationalUnitParentIdsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationalUnitParentIdsResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationalUnitParentIds",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/organizationalUnits/${$dara.URL.percentEncode(organizationalUnitId)}/parentIds`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationalUnitParentIdsResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListOrganizationalUnitParentIdsResponse({}));
  }

  /**
   * Retrieves the information about all the parent organizational units of an organizational unit.
   * 
   * @param request - ListOrganizationalUnitParentIdsRequest
   * @returns ListOrganizationalUnitParentIdsResponse
   */
  async listOrganizationalUnitParentIds(instanceId: string, applicationId: string, organizationalUnitId: string, request: $_model.ListOrganizationalUnitParentIdsRequest): Promise<$_model.ListOrganizationalUnitParentIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListOrganizationalUnitParentIdsHeaders({ });
    return await this.listOrganizationalUnitParentIdsWithOptions(instanceId, applicationId, organizationalUnitId, request, headers, runtime);
  }

  /**
   * Performs a paged query to retrieve organization information from EIAM.
   * 
   * @remarks
   * To retrieve the direct child organizations of the root organization, set the request parameter as follows:
   * ```
   * {
   *   "parentOrganizationalUnitId": "ou_root"
   * }
   * ```
   * 
   * @param request - ListOrganizationalUnitsRequest
   * @param headers - ListOrganizationalUnitsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitsResponse
   */
  async listOrganizationalUnitsWithOptions(instanceId: string, applicationId: string, request: $_model.ListOrganizationalUnitsRequest, headers: $_model.ListOrganizationalUnitsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationalUnitsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentId)) {
      query["parentId"] = request.parentId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationalUnits",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/organizationalUnits`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationalUnitsResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListOrganizationalUnitsResponse({}));
  }

  /**
   * Performs a paged query to retrieve organization information from EIAM.
   * 
   * @remarks
   * To retrieve the direct child organizations of the root organization, set the request parameter as follows:
   * ```
   * {
   *   "parentOrganizationalUnitId": "ou_root"
   * }
   * ```
   * 
   * @param request - ListOrganizationalUnitsRequest
   * @returns ListOrganizationalUnitsResponse
   */
  async listOrganizationalUnits(instanceId: string, applicationId: string, request: $_model.ListOrganizationalUnitsRequest): Promise<$_model.ListOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListOrganizationalUnitsHeaders({ });
    return await this.listOrganizationalUnitsWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Performs a paged query for EIAM account information.
   * 
   * @param request - ListUsersRequest
   * @param headers - ListUsersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(instanceId: string, applicationId: string, request: $_model.ListUsersRequest, headers: $_model.ListUsersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationalUnitId)) {
      query["organizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * Performs a paged query for EIAM account information.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(instanceId: string, applicationId: string, request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListUsersHeaders({ });
    return await this.listUsersWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Queries accounts in an Employee Identity and Access Management (EIAM) group.
   * 
   * @param request - ListUsersForGroupRequest
   * @param headers - ListUsersForGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroupWithOptions(instanceId: string, applicationId: string, groupId: string, request: $_model.ListUsersForGroupRequest, headers: $_model.ListUsersForGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersForGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersForGroup",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/groups/${$dara.URL.percentEncode(groupId)}/actions/listUsersForGroup`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersForGroupResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListUsersForGroupResponse({}));
  }

  /**
   * Queries accounts in an Employee Identity and Access Management (EIAM) group.
   * 
   * @param request - ListUsersForGroupRequest
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroup(instanceId: string, applicationId: string, groupId: string, request: $_model.ListUsersForGroupRequest): Promise<$_model.ListUsersForGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListUsersForGroupHeaders({ });
    return await this.listUsersForGroupWithOptions(instanceId, applicationId, groupId, request, headers, runtime);
  }

  /**
   * Retrieves temporary access credentials for a cloud account role (CloudAccountRole).
   * 
   * @remarks
   * This API authenticates and authorizes requests based on an Access Token issued by IDaaS.
   * Ensure that the Access Token has the "Obtain Cloud Role Access Credential" permission for the IDaaS built-in PAM application (Privileged Access Management).
   * > The corresponding scope is `urn:cloud:idaas:pam|cloud_account_role:obtain_access_credential`.
   * 
   * @param request - ObtainCloudAccountRoleAccessCredentialRequest
   * @param headers - ObtainCloudAccountRoleAccessCredentialHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainCloudAccountRoleAccessCredentialResponse
   */
  async obtainCloudAccountRoleAccessCredentialWithOptions(instanceId: string, request: $_model.ObtainCloudAccountRoleAccessCredentialRequest, headers: $_model.ObtainCloudAccountRoleAccessCredentialHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ObtainCloudAccountRoleAccessCredentialResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloudAccountRoleExternalId)) {
      query["cloudAccountRoleExternalId"] = request.cloudAccountRoleExternalId;
    }

    if (!$dara.isNull(request.durationSeconds)) {
      query["durationSeconds"] = request.durationSeconds;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainCloudAccountRoleAccessCredential",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/cloudAccountRoles/_/actions/obtainAccessCredential`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ObtainCloudAccountRoleAccessCredentialResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ObtainCloudAccountRoleAccessCredentialResponse({}));
  }

  /**
   * Retrieves temporary access credentials for a cloud account role (CloudAccountRole).
   * 
   * @remarks
   * This API authenticates and authorizes requests based on an Access Token issued by IDaaS.
   * Ensure that the Access Token has the "Obtain Cloud Role Access Credential" permission for the IDaaS built-in PAM application (Privileged Access Management).
   * > The corresponding scope is `urn:cloud:idaas:pam|cloud_account_role:obtain_access_credential`.
   * 
   * @param request - ObtainCloudAccountRoleAccessCredentialRequest
   * @returns ObtainCloudAccountRoleAccessCredentialResponse
   */
  async obtainCloudAccountRoleAccessCredential(instanceId: string, request: $_model.ObtainCloudAccountRoleAccessCredentialRequest): Promise<$_model.ObtainCloudAccountRoleAccessCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ObtainCloudAccountRoleAccessCredentialHeaders({ });
    return await this.obtainCloudAccountRoleAccessCredentialWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Retrieves the plaintext of a secret.
   * 
   * @remarks
   * This API uses an access token from IDaaS for authentication and authorization.
   * The access token must have permissions to obtain static credentials for the built-in privileged access management (PAM) application in IDaaS.
   * > The required scope is `urn:cloud:idaas:pam|credential:obtain`.
   * 
   * @param request - ObtainCredentialRequest
   * @param headers - ObtainCredentialHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainCredentialResponse
   */
  async obtainCredentialWithOptions(instanceId: string, request: $_model.ObtainCredentialRequest, headers: $_model.ObtainCredentialHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ObtainCredentialResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.credentialIdentifier)) {
      query["credentialIdentifier"] = request.credentialIdentifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainCredential",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/credentials/_/actions/obtain`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ObtainCredentialResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ObtainCredentialResponse({}));
  }

  /**
   * Retrieves the plaintext of a secret.
   * 
   * @remarks
   * This API uses an access token from IDaaS for authentication and authorization.
   * The access token must have permissions to obtain static credentials for the built-in privileged access management (PAM) application in IDaaS.
   * > The required scope is `urn:cloud:idaas:pam|credential:obtain`.
   * 
   * @param request - ObtainCredentialRequest
   * @returns ObtainCredentialResponse
   */
  async obtainCredential(instanceId: string, request: $_model.ObtainCredentialRequest): Promise<$_model.ObtainCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ObtainCredentialHeaders({ });
    return await this.obtainCredentialWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Obtains a JWT authentication token.
   * 
   * @remarks
   * This API requires an access token issued by IDaaS for authentication and authorization.
   * The provided access token must have permission to obtain authentication tokens for the built-in privileged access management (PAM) application in IDaaS.
   * > The corresponding scope is `urn:cloud:idaas:pam|authentication_token:obtain`.
   * 
   * @param request - ObtainJwtAuthenticationTokenRequest
   * @param headers - ObtainJwtAuthenticationTokenHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainJwtAuthenticationTokenResponse
   */
  async obtainJwtAuthenticationTokenWithOptions(instanceId: string, request: $_model.ObtainJwtAuthenticationTokenRequest, headers: $_model.ObtainJwtAuthenticationTokenHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ObtainJwtAuthenticationTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authenticationTokenId)) {
      body["authenticationTokenId"] = request.authenticationTokenId;
    }

    if (!$dara.isNull(request.consumerId)) {
      body["consumerId"] = request.consumerId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainJwtAuthenticationToken",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/authenticationTokens/_/actions/obtainJwt`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ObtainJwtAuthenticationTokenResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ObtainJwtAuthenticationTokenResponse({}));
  }

  /**
   * Obtains a JWT authentication token.
   * 
   * @remarks
   * This API requires an access token issued by IDaaS for authentication and authorization.
   * The provided access token must have permission to obtain authentication tokens for the built-in privileged access management (PAM) application in IDaaS.
   * > The corresponding scope is `urn:cloud:idaas:pam|authentication_token:obtain`.
   * 
   * @param request - ObtainJwtAuthenticationTokenRequest
   * @returns ObtainJwtAuthenticationTokenResponse
   */
  async obtainJwtAuthenticationToken(instanceId: string, request: $_model.ObtainJwtAuthenticationTokenRequest): Promise<$_model.ObtainJwtAuthenticationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ObtainJwtAuthenticationTokenHeaders({ });
    return await this.obtainJwtAuthenticationTokenWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Obtain a JWT authentication token using a derived short token.
   * 
   * @param request - ObtainJwtAuthenticationTokenByDerivedShortTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainJwtAuthenticationTokenByDerivedShortTokenResponse
   */
  async obtainJwtAuthenticationTokenByDerivedShortTokenWithOptions(instanceId: string, request: $_model.ObtainJwtAuthenticationTokenByDerivedShortTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ObtainJwtAuthenticationTokenByDerivedShortTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.derivedShortToken)) {
      body["derivedShortToken"] = request.derivedShortToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainJwtAuthenticationTokenByDerivedShortToken",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/authenticationTokens/_/actions/obtainJwtByDerivedShortToken`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ObtainJwtAuthenticationTokenByDerivedShortTokenResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ObtainJwtAuthenticationTokenByDerivedShortTokenResponse({}));
  }

  /**
   * Obtain a JWT authentication token using a derived short token.
   * 
   * @param request - ObtainJwtAuthenticationTokenByDerivedShortTokenRequest
   * @returns ObtainJwtAuthenticationTokenByDerivedShortTokenResponse
   */
  async obtainJwtAuthenticationTokenByDerivedShortToken(instanceId: string, request: $_model.ObtainJwtAuthenticationTokenByDerivedShortTokenRequest): Promise<$_model.ObtainJwtAuthenticationTokenByDerivedShortTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.obtainJwtAuthenticationTokenByDerivedShortTokenWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies information about an Employee Identity and Access Management (EIAM) group.
   * 
   * @param request - PatchGroupRequest
   * @param headers - PatchGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PatchGroupResponse
   */
  async patchGroupWithOptions(instanceId: string, applicationId: string, groupId: string, request: $_model.PatchGroupRequest, headers: $_model.PatchGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PatchGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["groupName"] = request.groupName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PatchGroup",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/groups/${$dara.URL.percentEncode(groupId)}`,
      method: "PATCH",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PatchGroupResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.PatchGroupResponse({}));
  }

  /**
   * Modifies information about an Employee Identity and Access Management (EIAM) group.
   * 
   * @param request - PatchGroupRequest
   * @returns PatchGroupResponse
   */
  async patchGroup(instanceId: string, applicationId: string, groupId: string, request: $_model.PatchGroupRequest): Promise<$_model.PatchGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PatchGroupHeaders({ });
    return await this.patchGroupWithOptions(instanceId, applicationId, groupId, request, headers, runtime);
  }

  /**
   * Modifies an EIAM organizational unit.
   * 
   * @remarks
   * The operation conforms to the HTTP PATCH request method. The value of a parameter is modified only if the parameter is specified in the request.
   * 
   * @param request - PatchOrganizationalUnitRequest
   * @param headers - PatchOrganizationalUnitHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PatchOrganizationalUnitResponse
   */
  async patchOrganizationalUnitWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, request: $_model.PatchOrganizationalUnitRequest, headers: $_model.PatchOrganizationalUnitHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PatchOrganizationalUnitResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.organizationalUnitName)) {
      body["organizationalUnitName"] = request.organizationalUnitName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PatchOrganizationalUnit",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/organizationalUnits/${$dara.URL.percentEncode(organizationalUnitId)}`,
      method: "PATCH",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PatchOrganizationalUnitResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.PatchOrganizationalUnitResponse({}));
  }

  /**
   * Modifies an EIAM organizational unit.
   * 
   * @remarks
   * The operation conforms to the HTTP PATCH request method. The value of a parameter is modified only if the parameter is specified in the request.
   * 
   * @param request - PatchOrganizationalUnitRequest
   * @returns PatchOrganizationalUnitResponse
   */
  async patchOrganizationalUnit(instanceId: string, applicationId: string, organizationalUnitId: string, request: $_model.PatchOrganizationalUnitRequest): Promise<$_model.PatchOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PatchOrganizationalUnitHeaders({ });
    return await this.patchOrganizationalUnitWithOptions(instanceId, applicationId, organizationalUnitId, request, headers, runtime);
  }

  /**
   * Modifies an Employee Identity and Access Management (EIAM) account.
   * 
   * @remarks
   * The operation conforms to the HTTP PATCH request method. The value of a parameter is modified only if the parameter is specified in the request.
   * 
   * @param request - PatchUserRequest
   * @param headers - PatchUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PatchUserResponse
   */
  async patchUserWithOptions(instanceId: string, applicationId: string, userId: string, request: $_model.PatchUserRequest, headers: $_model.PatchUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PatchUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customFields)) {
      body["customFields"] = request.customFields;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.emailVerified)) {
      body["emailVerified"] = request.emailVerified;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["phoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.phoneNumberVerified)) {
      body["phoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!$dara.isNull(request.phoneRegion)) {
      body["phoneRegion"] = request.phoneRegion;
    }

    if (!$dara.isNull(request.username)) {
      body["username"] = request.username;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PatchUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/${$dara.URL.percentEncode(userId)}`,
      method: "PATCH",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PatchUserResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.PatchUserResponse({}));
  }

  /**
   * Modifies an Employee Identity and Access Management (EIAM) account.
   * 
   * @remarks
   * The operation conforms to the HTTP PATCH request method. The value of a parameter is modified only if the parameter is specified in the request.
   * 
   * @param request - PatchUserRequest
   * @returns PatchUserResponse
   */
  async patchUser(instanceId: string, applicationId: string, userId: string, request: $_model.PatchUserRequest): Promise<$_model.PatchUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PatchUserHeaders({ });
    return await this.patchUserWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

  /**
   * Reinstate an authentication token.
   * 
   * @remarks
   * This API uses an IDaaS-issued Access Token for identity authentication and authorization.
   * Ensure that the Access Token you provide has the Manage authentication tokens permission for the IDaaS built-in Privileged Access Management (PAM) application.
   * > The required scope is `urn:cloud:idaas:pam|authentication_token:manage`.
   * >Notice: 
   * Only JWT authentication tokens support this operation.
   * 
   * @param request - ReinstateAuthenticationTokenRequest
   * @param headers - ReinstateAuthenticationTokenHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReinstateAuthenticationTokenResponse
   */
  async reinstateAuthenticationTokenWithOptions(instanceId: string, request: $_model.ReinstateAuthenticationTokenRequest, headers: $_model.ReinstateAuthenticationTokenHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ReinstateAuthenticationTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.token)) {
      body["token"] = request.token;
    }

    if (!$dara.isNull(request.tokenTypeHint)) {
      body["token_type_hint"] = request.tokenTypeHint;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReinstateAuthenticationToken",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/authenticationTokens/_/actions/reinstate`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.ReinstateAuthenticationTokenResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ReinstateAuthenticationTokenResponse({}));
  }

  /**
   * Reinstate an authentication token.
   * 
   * @remarks
   * This API uses an IDaaS-issued Access Token for identity authentication and authorization.
   * Ensure that the Access Token you provide has the Manage authentication tokens permission for the IDaaS built-in Privileged Access Management (PAM) application.
   * > The required scope is `urn:cloud:idaas:pam|authentication_token:manage`.
   * >Notice: 
   * Only JWT authentication tokens support this operation.
   * 
   * @param request - ReinstateAuthenticationTokenRequest
   * @returns ReinstateAuthenticationTokenResponse
   */
  async reinstateAuthenticationToken(instanceId: string, request: $_model.ReinstateAuthenticationTokenRequest): Promise<$_model.ReinstateAuthenticationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ReinstateAuthenticationTokenHeaders({ });
    return await this.reinstateAuthenticationTokenWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Reinstate an authentication token for a consumer.
   * 
   * @remarks
   * This API uses an access token issued by IDaaS to perform identity authentication and authorization.
   * Ensure that the provided access token is authorized to access the Manage Authentication Token feature in the IDaaS built-in PAM (Privileged Access Management) application.
   * > The corresponding scope is `urn:cloud:idaas:pam|authentication_token:manage`.
   * >Notice: 
   * This operation supports only JWT-type authentication tokens.
   * 
   * @param request - ReinstateAuthenticationTokenByConsumerRequest
   * @param headers - ReinstateAuthenticationTokenByConsumerHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReinstateAuthenticationTokenByConsumerResponse
   */
  async reinstateAuthenticationTokenByConsumerWithOptions(instanceId: string, request: $_model.ReinstateAuthenticationTokenByConsumerRequest, headers: $_model.ReinstateAuthenticationTokenByConsumerHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ReinstateAuthenticationTokenByConsumerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerId)) {
      body["consumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.credentialProviderIdentifier)) {
      body["credentialProviderIdentifier"] = request.credentialProviderIdentifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReinstateAuthenticationTokenByConsumer",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/authenticationTokens/_/actions/reinstateByConsumer`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.ReinstateAuthenticationTokenByConsumerResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ReinstateAuthenticationTokenByConsumerResponse({}));
  }

  /**
   * Reinstate an authentication token for a consumer.
   * 
   * @remarks
   * This API uses an access token issued by IDaaS to perform identity authentication and authorization.
   * Ensure that the provided access token is authorized to access the Manage Authentication Token feature in the IDaaS built-in PAM (Privileged Access Management) application.
   * > The corresponding scope is `urn:cloud:idaas:pam|authentication_token:manage`.
   * >Notice: 
   * This operation supports only JWT-type authentication tokens.
   * 
   * @param request - ReinstateAuthenticationTokenByConsumerRequest
   * @returns ReinstateAuthenticationTokenByConsumerResponse
   */
  async reinstateAuthenticationTokenByConsumer(instanceId: string, request: $_model.ReinstateAuthenticationTokenByConsumerRequest): Promise<$_model.ReinstateAuthenticationTokenByConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ReinstateAuthenticationTokenByConsumerHeaders({ });
    return await this.reinstateAuthenticationTokenByConsumerWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Removes an EIAM account from one or more EIAM organizational units. The operation succeeds even if the account is not in the specified organizational units.
   * 
   * @param request - RemoveUserFromOrganizationalUnitsRequest
   * @param headers - RemoveUserFromOrganizationalUnitsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromOrganizationalUnitsResponse
   */
  async removeUserFromOrganizationalUnitsWithOptions(instanceId: string, applicationId: string, userId: string, request: $_model.RemoveUserFromOrganizationalUnitsRequest, headers: $_model.RemoveUserFromOrganizationalUnitsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserFromOrganizationalUnitsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationalUnitIds)) {
      body["organizationalUnitIds"] = request.organizationalUnitIds;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromOrganizationalUnits",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/${$dara.URL.percentEncode(userId)}/actions/removeUserFromOrganizationalUnits`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.RemoveUserFromOrganizationalUnitsResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.RemoveUserFromOrganizationalUnitsResponse({}));
  }

  /**
   * Removes an EIAM account from one or more EIAM organizational units. The operation succeeds even if the account is not in the specified organizational units.
   * 
   * @param request - RemoveUserFromOrganizationalUnitsRequest
   * @returns RemoveUserFromOrganizationalUnitsResponse
   */
  async removeUserFromOrganizationalUnits(instanceId: string, applicationId: string, userId: string, request: $_model.RemoveUserFromOrganizationalUnitsRequest): Promise<$_model.RemoveUserFromOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RemoveUserFromOrganizationalUnitsHeaders({ });
    return await this.removeUserFromOrganizationalUnitsWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

  /**
   * Removes multiple Employee Identity and Access Management (EIAM) accounts from an EIAM group. If an account does not belong to the group, the removal succeeds by default.
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @param headers - RemoveUsersFromGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroupWithOptions(instanceId: string, applicationId: string, groupId: string, request: $_model.RemoveUsersFromGroupRequest, headers: $_model.RemoveUsersFromGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUsersFromGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userIds)) {
      body["userIds"] = request.userIds;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUsersFromGroup",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/groups/${$dara.URL.percentEncode(groupId)}/actions/removeUsersFromGroup`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.RemoveUsersFromGroupResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.RemoveUsersFromGroupResponse({}));
  }

  /**
   * Removes multiple Employee Identity and Access Management (EIAM) accounts from an EIAM group. If an account does not belong to the group, the removal succeeds by default.
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @returns RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroup(instanceId: string, applicationId: string, groupId: string, request: $_model.RemoveUsersFromGroupRequest): Promise<$_model.RemoveUsersFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RemoveUsersFromGroupHeaders({ });
    return await this.removeUsersFromGroupWithOptions(instanceId, applicationId, groupId, request, headers, runtime);
  }

  /**
   * Revokes an authentication token.
   * 
   * @remarks
   * This API uses an Access Token issued by IDaaS to perform identity authentication and authorization.
   * Ensure that the Access Token is authorized to access the "Manage Authentication Tokens" feature of the built-in Privileged Access Management (PAM) application in IDaaS.
   * > The corresponding scope is `urn:cloud:idaas:pam|authentication_token:manage`.
   * >Notice: 
   * This operation currently supports only JWT authentication tokens.
   * 
   * @param request - RevokeAuthenticationTokenRequest
   * @param headers - RevokeAuthenticationTokenHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeAuthenticationTokenResponse
   */
  async revokeAuthenticationTokenWithOptions(instanceId: string, request: $_model.RevokeAuthenticationTokenRequest, headers: $_model.RevokeAuthenticationTokenHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeAuthenticationTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.token)) {
      body["token"] = request.token;
    }

    if (!$dara.isNull(request.tokenTypeHint)) {
      body["token_type_hint"] = request.tokenTypeHint;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeAuthenticationToken",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/authenticationTokens/_/actions/revoke`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.RevokeAuthenticationTokenResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.RevokeAuthenticationTokenResponse({}));
  }

  /**
   * Revokes an authentication token.
   * 
   * @remarks
   * This API uses an Access Token issued by IDaaS to perform identity authentication and authorization.
   * Ensure that the Access Token is authorized to access the "Manage Authentication Tokens" feature of the built-in Privileged Access Management (PAM) application in IDaaS.
   * > The corresponding scope is `urn:cloud:idaas:pam|authentication_token:manage`.
   * >Notice: 
   * This operation currently supports only JWT authentication tokens.
   * 
   * @param request - RevokeAuthenticationTokenRequest
   * @returns RevokeAuthenticationTokenResponse
   */
  async revokeAuthenticationToken(instanceId: string, request: $_model.RevokeAuthenticationTokenRequest): Promise<$_model.RevokeAuthenticationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RevokeAuthenticationTokenHeaders({ });
    return await this.revokeAuthenticationTokenWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Revokes an authentication token for a consumer.
   * 
   * @remarks
   * This API uses an access token issued by IDaaS to authenticate and authorize requests.
   * Make sure that the access token you provide has the \\"Manage authentication tokens\\" permission for the built-in Privileged Access Management (PAM) application in IDaaS.
   * > The required scope is `urn:cloud:idaas:pam|authentication_token:manage`.
   * >Notice: 
   * This operation can revoke only JWT authentication tokens.
   * 
   * @param request - RevokeAuthenticationTokenByConsumerRequest
   * @param headers - RevokeAuthenticationTokenByConsumerHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeAuthenticationTokenByConsumerResponse
   */
  async revokeAuthenticationTokenByConsumerWithOptions(instanceId: string, request: $_model.RevokeAuthenticationTokenByConsumerRequest, headers: $_model.RevokeAuthenticationTokenByConsumerHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeAuthenticationTokenByConsumerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerId)) {
      body["consumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.credentialProviderIdentifier)) {
      body["credentialProviderIdentifier"] = request.credentialProviderIdentifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeAuthenticationTokenByConsumer",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/authenticationTokens/_/actions/revokeByConsumer`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.RevokeAuthenticationTokenByConsumerResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.RevokeAuthenticationTokenByConsumerResponse({}));
  }

  /**
   * Revokes an authentication token for a consumer.
   * 
   * @remarks
   * This API uses an access token issued by IDaaS to authenticate and authorize requests.
   * Make sure that the access token you provide has the \\"Manage authentication tokens\\" permission for the built-in Privileged Access Management (PAM) application in IDaaS.
   * > The required scope is `urn:cloud:idaas:pam|authentication_token:manage`.
   * >Notice: 
   * This operation can revoke only JWT authentication tokens.
   * 
   * @param request - RevokeAuthenticationTokenByConsumerRequest
   * @returns RevokeAuthenticationTokenByConsumerResponse
   */
  async revokeAuthenticationTokenByConsumer(instanceId: string, request: $_model.RevokeAuthenticationTokenByConsumerRequest): Promise<$_model.RevokeAuthenticationTokenByConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RevokeAuthenticationTokenByConsumerHeaders({ });
    return await this.revokeAuthenticationTokenByConsumerWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Revokes an access token or refresh token.
   * 
   * @param request - RevokeTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeTokenResponse
   */
  async revokeTokenWithOptions(instanceId: string, applicationId: string, request: $_model.RevokeTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      query["client_id"] = request.clientId;
    }

    if (!$dara.isNull(request.clientSecret)) {
      query["client_secret"] = request.clientSecret;
    }

    if (!$dara.isNull(request.token)) {
      query["token"] = request.token;
    }

    if (!$dara.isNull(request.tokenTypeHint)) {
      query["token_type_hint"] = request.tokenTypeHint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeToken",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/oauth2/revoke`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeTokenResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.RevokeTokenResponse({}));
  }

  /**
   * Revokes an access token or refresh token.
   * 
   * @param request - RevokeTokenRequest
   * @returns RevokeTokenResponse
   */
  async revokeToken(instanceId: string, applicationId: string, request: $_model.RevokeTokenRequest): Promise<$_model.RevokeTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeTokenWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  /**
   * Sets the primary organization for an EIAM account. This operation removes the account from the old primary organization and adds it to the new one.
   * 
   * @param request - SetUserPrimaryOrganizationalUnitRequest
   * @param headers - SetUserPrimaryOrganizationalUnitHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserPrimaryOrganizationalUnitResponse
   */
  async setUserPrimaryOrganizationalUnitWithOptions(instanceId: string, applicationId: string, userId: string, request: $_model.SetUserPrimaryOrganizationalUnitRequest, headers: $_model.SetUserPrimaryOrganizationalUnitHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SetUserPrimaryOrganizationalUnitResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationalUnitId)) {
      body["organizationalUnitId"] = request.organizationalUnitId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetUserPrimaryOrganizationalUnit",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/${$dara.URL.percentEncode(userId)}/actions/setUserPrimaryOrganizationalUnit`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.SetUserPrimaryOrganizationalUnitResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.SetUserPrimaryOrganizationalUnitResponse({}));
  }

  /**
   * Sets the primary organization for an EIAM account. This operation removes the account from the old primary organization and adds it to the new one.
   * 
   * @param request - SetUserPrimaryOrganizationalUnitRequest
   * @returns SetUserPrimaryOrganizationalUnitResponse
   */
  async setUserPrimaryOrganizationalUnit(instanceId: string, applicationId: string, userId: string, request: $_model.SetUserPrimaryOrganizationalUnitRequest): Promise<$_model.SetUserPrimaryOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SetUserPrimaryOrganizationalUnitHeaders({ });
    return await this.setUserPrimaryOrganizationalUnitWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

  /**
   * Updates the password for a specified EIAM account.
   * 
   * @param request - UpdateUserPasswordRequest
   * @param headers - UpdateUserPasswordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserPasswordResponse
   */
  async updateUserPasswordWithOptions(instanceId: string, applicationId: string, userId: string, request: $_model.UpdateUserPasswordRequest, headers: $_model.UpdateUserPasswordHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserPasswordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.authorization)) {
      realHeaders["Authorization"] = String(headers.authorization);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserPassword",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/${$dara.URL.percentEncode(applicationId)}/users/${$dara.URL.percentEncode(userId)}/actions/updateUserPassword`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateUserPasswordResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.UpdateUserPasswordResponse({}));
  }

  /**
   * Updates the password for a specified EIAM account.
   * 
   * @param request - UpdateUserPasswordRequest
   * @returns UpdateUserPasswordResponse
   */
  async updateUserPassword(instanceId: string, applicationId: string, userId: string, request: $_model.UpdateUserPasswordRequest): Promise<$_model.UpdateUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateUserPasswordHeaders({ });
    return await this.updateUserPasswordWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

  /**
   * Validates an authentication token.
   * 
   * @remarks
   * >Notice: 
   * This operation is supported only for JSON Web Token (JWT) authentication tokens.
   * 
   * @param request - ValidateAuthenticationTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateAuthenticationTokenResponse
   */
  async validateAuthenticationTokenWithOptions(instanceId: string, request: $_model.ValidateAuthenticationTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateAuthenticationTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.token)) {
      body["token"] = request.token;
    }

    if (!$dara.isNull(request.tokenTypeHint)) {
      body["token_type_hint"] = request.tokenTypeHint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateAuthenticationToken",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${$dara.URL.percentEncode(instanceId)}/authenticationTokens/_/actions/validate`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateAuthenticationTokenResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ValidateAuthenticationTokenResponse({}));
  }

  /**
   * Validates an authentication token.
   * 
   * @remarks
   * >Notice: 
   * This operation is supported only for JSON Web Token (JWT) authentication tokens.
   * 
   * @param request - ValidateAuthenticationTokenRequest
   * @returns ValidateAuthenticationTokenResponse
   */
  async validateAuthenticationToken(instanceId: string, request: $_model.ValidateAuthenticationTokenRequest): Promise<$_model.ValidateAuthenticationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateAuthenticationTokenWithOptions(instanceId, request, headers, runtime);
  }

}
