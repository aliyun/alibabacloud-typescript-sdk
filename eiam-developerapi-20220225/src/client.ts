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
   * 将账户加入多个组织
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
   * 将账户加入多个组织
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
   * Creates an Employee Identity and Access Management (EIAM) account in an organizational unit.
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
   * Creates an Employee Identity and Access Management (EIAM) account in an organizational unit.
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
   * Deletes a group.
   * 
   * @param headers - DeleteGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(instanceId: string, applicationId: string, groupId: string, headers: $_model.DeleteGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupResponse> {
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
   * @returns DeleteGroupResponse
   */
  async deleteGroup(instanceId: string, applicationId: string, groupId: string): Promise<$_model.DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteGroupHeaders({ });
    return await this.deleteGroupWithOptions(instanceId, applicationId, groupId, headers, runtime);
  }

  /**
   * Deletes an organizational unit.
   * 
   * @param headers - DeleteOrganizationalUnitHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnitWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, headers: $_model.DeleteOrganizationalUnitHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOrganizationalUnitResponse> {
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
   * @returns DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnit(instanceId: string, applicationId: string, organizationalUnitId: string): Promise<$_model.DeleteOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteOrganizationalUnitHeaders({ });
    return await this.deleteOrganizationalUnitWithOptions(instanceId, applicationId, organizationalUnitId, headers, runtime);
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) account.
   * 
   * @param headers - DeleteUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(instanceId: string, applicationId: string, userId: string, headers: $_model.DeleteUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
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
   * @returns DeleteUserResponse
   */
  async deleteUser(instanceId: string, applicationId: string, userId: string): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteUserHeaders({ });
    return await this.deleteUserWithOptions(instanceId, applicationId, userId, headers, runtime);
  }

  /**
   * Disables an Employee Identity and Access Management (EIAM) account.
   * 
   * @param headers - DisableUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableUserResponse
   */
  async disableUserWithOptions(instanceId: string, applicationId: string, userId: string, headers: $_model.DisableUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DisableUserResponse> {
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
   * @returns DisableUserResponse
   */
  async disableUser(instanceId: string, applicationId: string, userId: string): Promise<$_model.DisableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DisableUserHeaders({ });
    return await this.disableUserWithOptions(instanceId, applicationId, userId, headers, runtime);
  }

  /**
   * Enables an Employee Identity and Access Management (EIAM) account.
   * 
   * @param headers - EnableUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableUserResponse
   */
  async enableUserWithOptions(instanceId: string, applicationId: string, userId: string, headers: $_model.EnableUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.EnableUserResponse> {
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
   * @returns EnableUserResponse
   */
  async enableUser(instanceId: string, applicationId: string, userId: string): Promise<$_model.EnableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.EnableUserHeaders({ });
    return await this.enableUserWithOptions(instanceId, applicationId, userId, headers, runtime);
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
   * Generates a token for accessing an application in an instance.
   * 
   * @remarks
   * The following authorization types are supported: authorization code, device code, refresh token, and client credentials.
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
   * Generates a token for accessing an application in an instance.
   * 
   * @remarks
   * The following authorization types are supported: authorization code, device code, refresh token, and client credentials.
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
   * Queries the synchronization scope of an application in an instance.
   * 
   * @remarks
   * > 
   * *   You can go to the Applications page in the IDaaS console to set the synchronization scope. After an application is created, the application has the permission to call this operation by default.
   * 
   * @param headers - GetApplicationProvisioningScopeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScopeWithOptions(instanceId: string, applicationId: string, headers: $_model.GetApplicationProvisioningScopeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationProvisioningScopeResponse> {
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
   * Queries the synchronization scope of an application in an instance.
   * 
   * @remarks
   * > 
   * *   You can go to the Applications page in the IDaaS console to set the synchronization scope. After an application is created, the application has the permission to call this operation by default.
   * @returns GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScope(instanceId: string, applicationId: string): Promise<$_model.GetApplicationProvisioningScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetApplicationProvisioningScopeHeaders({ });
    return await this.getApplicationProvisioningScopeWithOptions(instanceId, applicationId, headers, runtime);
  }

  /**
   * Queries the details of a group.
   * 
   * @param headers - GetGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(instanceId: string, applicationId: string, groupId: string, headers: $_model.GetGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupResponse> {
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
   * Queries the details of a group.
   * @returns GetGroupResponse
   */
  async getGroup(instanceId: string, applicationId: string, groupId: string): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetGroupHeaders({ });
    return await this.getGroupWithOptions(instanceId, applicationId, groupId, headers, runtime);
  }

  /**
   * Queries the information of an organizational unit.
   * 
   * @param headers - GetOrganizationalUnitHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrganizationalUnitResponse
   */
  async getOrganizationalUnitWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, headers: $_model.GetOrganizationalUnitHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrganizationalUnitResponse> {
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
   * Queries the information of an organizational unit.
   * @returns GetOrganizationalUnitResponse
   */
  async getOrganizationalUnit(instanceId: string, applicationId: string, organizationalUnitId: string): Promise<$_model.GetOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetOrganizationalUnitHeaders({ });
    return await this.getOrganizationalUnitWithOptions(instanceId, applicationId, organizationalUnitId, headers, runtime);
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
   * Queries the details of an Employee Identity and Access Management (EIAM) account.
   * 
   * @param headers - GetUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(instanceId: string, applicationId: string, userId: string, headers: $_model.GetUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
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
   * Queries the details of an Employee Identity and Access Management (EIAM) account.
   * @returns GetUserResponse
   */
  async getUser(instanceId: string, applicationId: string, userId: string): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserHeaders({ });
    return await this.getUserWithOptions(instanceId, applicationId, userId, headers, runtime);
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
   * Queries the information of a user by using the user token.
   * 
   * @param headers - GetUserInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserInfoResponse
   */
  async getUserInfoWithOptions(instanceId: string, applicationId: string, headers: $_model.GetUserInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserInfoResponse> {
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
   * Queries the information of a user by using the user token.
   * @returns GetUserInfoResponse
   */
  async getUserInfo(instanceId: string, applicationId: string): Promise<$_model.GetUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserInfoHeaders({ });
    return await this.getUserInfoWithOptions(instanceId, applicationId, headers, runtime);
  }

  /**
   * Queries information about Employee Identity and Access Management (EIAM) groups by page.
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
   * Queries information about Employee Identity and Access Management (EIAM) groups by page.
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
   * 获取账户关联组列表
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
   * 获取账户关联组列表
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
   * Queries the information of all the parent organizational units of an organizational unit.
   * 
   * @param headers - ListOrganizationalUnitParentIdsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitParentIdsResponse
   */
  async listOrganizationalUnitParentIdsWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, headers: $_model.ListOrganizationalUnitParentIdsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationalUnitParentIdsResponse> {
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
   * Queries the information of all the parent organizational units of an organizational unit.
   * @returns ListOrganizationalUnitParentIdsResponse
   */
  async listOrganizationalUnitParentIds(instanceId: string, applicationId: string, organizationalUnitId: string): Promise<$_model.ListOrganizationalUnitParentIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListOrganizationalUnitParentIdsHeaders({ });
    return await this.listOrganizationalUnitParentIdsWithOptions(instanceId, applicationId, organizationalUnitId, headers, runtime);
  }

  /**
   * Queries the information of Employee Identity and Access Management (EIAM) organizational units by page.
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
   * Queries the information of Employee Identity and Access Management (EIAM) organizational units by page.
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
   * Queries the information of Employee Identity and Access Management (EIAM) accounts by page.
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
   * Queries the information of Employee Identity and Access Management (EIAM) accounts by page.
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
   * 将账户从多个组织移除【不支持移除主组织】
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
   * 将账户从多个组织移除【不支持移除主组织】
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
   * 将指定组织设置为账户主组织，移除旧主组织，加入新主组织。
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
   * 将指定组织设置为账户主组织，移除旧主组织，加入新主组织。
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
   * 更新账户密码
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
   * 更新账户密码
   * 
   * @param request - UpdateUserPasswordRequest
   * @returns UpdateUserPasswordResponse
   */
  async updateUserPassword(instanceId: string, applicationId: string, userId: string, request: $_model.UpdateUserPasswordRequest): Promise<$_model.UpdateUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateUserPasswordHeaders({ });
    return await this.updateUserPasswordWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

}
