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
    this._endpoint = this.getEndpoint("eiam", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 在当前应用下给指定员工添加一个应用账号
   * 
   * @param request - AddApplicationAccountToUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddApplicationAccountToUserResponse
   */
  async addApplicationAccountToUserWithOptions(request: $_model.AddApplicationAccountToUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddApplicationAccountToUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationUsername)) {
      query["ApplicationUsername"] = request.applicationUsername;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddApplicationAccountToUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddApplicationAccountToUserResponse>(await this.callApi(params, req, runtime), new $_model.AddApplicationAccountToUserResponse({}));
  }

  /**
   * 在当前应用下给指定员工添加一个应用账号
   * 
   * @param request - AddApplicationAccountToUserRequest
   * @returns AddApplicationAccountToUserResponse
   */
  async addApplicationAccountToUser(request: $_model.AddApplicationAccountToUserRequest): Promise<$_model.AddApplicationAccountToUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addApplicationAccountToUserWithOptions(request, runtime);
  }

  /**
   * 将应用添加到授权规则
   * 
   * @param request - AddApplicationToAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddApplicationToAuthorizationRuleResponse
   */
  async addApplicationToAuthorizationRuleWithOptions(request: $_model.AddApplicationToAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddApplicationToAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    if (!$dara.isNull(request.validityType)) {
      query["ValidityType"] = request.validityType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddApplicationToAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddApplicationToAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddApplicationToAuthorizationRuleResponse({}));
  }

  /**
   * 将应用添加到授权规则
   * 
   * @param request - AddApplicationToAuthorizationRuleRequest
   * @returns AddApplicationToAuthorizationRuleResponse
   */
  async addApplicationToAuthorizationRule(request: $_model.AddApplicationToAuthorizationRuleRequest): Promise<$_model.AddApplicationToAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addApplicationToAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 添加条款到品牌
   * 
   * @param request - AddCustomPrivacyPoliciesToBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomPrivacyPoliciesToBrandResponse
   */
  async addCustomPrivacyPoliciesToBrandWithOptions(request: $_model.AddCustomPrivacyPoliciesToBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomPrivacyPoliciesToBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.customPrivacyPolicyIds)) {
      query["CustomPrivacyPolicyIds"] = request.customPrivacyPolicyIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomPrivacyPoliciesToBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomPrivacyPoliciesToBrandResponse>(await this.callApi(params, req, runtime), new $_model.AddCustomPrivacyPoliciesToBrandResponse({}));
  }

  /**
   * 添加条款到品牌
   * 
   * @param request - AddCustomPrivacyPoliciesToBrandRequest
   * @returns AddCustomPrivacyPoliciesToBrandResponse
   */
  async addCustomPrivacyPoliciesToBrand(request: $_model.AddCustomPrivacyPoliciesToBrandRequest): Promise<$_model.AddCustomPrivacyPoliciesToBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomPrivacyPoliciesToBrandWithOptions(request, runtime);
  }

  /**
   * 将组添加到授权规则
   * 
   * @param request - AddGroupToAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGroupToAuthorizationRuleResponse
   */
  async addGroupToAuthorizationRuleWithOptions(request: $_model.AddGroupToAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGroupToAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    if (!$dara.isNull(request.validityType)) {
      query["ValidityType"] = request.validityType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGroupToAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGroupToAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddGroupToAuthorizationRuleResponse({}));
  }

  /**
   * 将组添加到授权规则
   * 
   * @param request - AddGroupToAuthorizationRuleRequest
   * @returns AddGroupToAuthorizationRuleResponse
   */
  async addGroupToAuthorizationRule(request: $_model.AddGroupToAuthorizationRuleRequest): Promise<$_model.AddGroupToAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGroupToAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 将账户添加到授权规则
   * 
   * @param request - AddUserToAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToAuthorizationRuleResponse
   */
  async addUserToAuthorizationRuleWithOptions(request: $_model.AddUserToAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    if (!$dara.isNull(request.validityType)) {
      query["ValidityType"] = request.validityType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserToAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddUserToAuthorizationRuleResponse({}));
  }

  /**
   * 将账户添加到授权规则
   * 
   * @param request - AddUserToAuthorizationRuleRequest
   * @returns AddUserToAuthorizationRuleResponse
   */
  async addUserToAuthorizationRule(request: $_model.AddUserToAuthorizationRuleRequest): Promise<$_model.AddUserToAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * Adds an Employee Identity and Access Management (EIAM) account to multiple EIAM organizations of Identity as a Service (IDaaS). If the account already exists in the organizational unit, the system directly returns a success response.
   * 
   * @param request - AddUserToOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToOrganizationalUnitsResponse
   */
  async addUserToOrganizationalUnitsWithOptions(request: $_model.AddUserToOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserToOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new $_model.AddUserToOrganizationalUnitsResponse({}));
  }

  /**
   * Adds an Employee Identity and Access Management (EIAM) account to multiple EIAM organizations of Identity as a Service (IDaaS). If the account already exists in the organizational unit, the system directly returns a success response.
   * 
   * @param request - AddUserToOrganizationalUnitsRequest
   * @returns AddUserToOrganizationalUnitsResponse
   */
  async addUserToOrganizationalUnits(request: $_model.AddUserToOrganizationalUnitsRequest): Promise<$_model.AddUserToOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Adds Employee Identity and Access Management (EIAM) accounts to an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - AddUsersToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUsersToGroupResponse
   */
  async addUsersToGroupWithOptions(request: $_model.AddUsersToGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUsersToGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUsersToGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUsersToGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddUsersToGroupResponse({}));
  }

  /**
   * Adds Employee Identity and Access Management (EIAM) accounts to an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - AddUsersToGroupRequest
   * @returns AddUsersToGroupResponse
   */
  async addUsersToGroup(request: $_model.AddUsersToGroupRequest): Promise<$_model.AddUsersToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUsersToGroupWithOptions(request, runtime);
  }

  /**
   * Grants the permissions to access an application to multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - AuthorizeApplicationToGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToGroupsResponse
   */
  async authorizeApplicationToGroupsWithOptions(request: $_model.AuthorizeApplicationToGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeApplicationToGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeApplicationToGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeApplicationToGroupsResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeApplicationToGroupsResponse({}));
  }

  /**
   * Grants the permissions to access an application to multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - AuthorizeApplicationToGroupsRequest
   * @returns AuthorizeApplicationToGroupsResponse
   */
  async authorizeApplicationToGroups(request: $_model.AuthorizeApplicationToGroupsRequest): Promise<$_model.AuthorizeApplicationToGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeApplicationToGroupsWithOptions(request, runtime);
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - AuthorizeApplicationToOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToOrganizationalUnitsResponse
   */
  async authorizeApplicationToOrganizationalUnitsWithOptions(request: $_model.AuthorizeApplicationToOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeApplicationToOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeApplicationToOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeApplicationToOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeApplicationToOrganizationalUnitsResponse({}));
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - AuthorizeApplicationToOrganizationalUnitsRequest
   * @returns AuthorizeApplicationToOrganizationalUnitsResponse
   */
  async authorizeApplicationToOrganizationalUnits(request: $_model.AuthorizeApplicationToOrganizationalUnitsRequest): Promise<$_model.AuthorizeApplicationToOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeApplicationToOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - AuthorizeApplicationToUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToUsersResponse
   */
  async authorizeApplicationToUsersWithOptions(request: $_model.AuthorizeApplicationToUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeApplicationToUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeApplicationToUsers",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeApplicationToUsersResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeApplicationToUsersResponse({}));
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - AuthorizeApplicationToUsersRequest
   * @returns AuthorizeApplicationToUsersResponse
   */
  async authorizeApplicationToUsers(request: $_model.AuthorizeApplicationToUsersRequest): Promise<$_model.AuthorizeApplicationToUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeApplicationToUsersWithOptions(request, runtime);
  }

  /**
   * 授权指定ResourceServer下的Scope给Client
   * 
   * @param request - AuthorizeResourceServerScopesToClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeResourceServerScopesToClientResponse
   */
  async authorizeResourceServerScopesToClientWithOptions(request: $_model.AuthorizeResourceServerScopesToClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeResourceServerScopesToClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientApplicationId)) {
      query["ClientApplicationId"] = request.clientApplicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerApplicationId)) {
      query["ResourceServerApplicationId"] = request.resourceServerApplicationId;
    }

    if (!$dara.isNull(request.resourceServerScopeIds)) {
      query["ResourceServerScopeIds"] = request.resourceServerScopeIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeResourceServerScopesToClient",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeResourceServerScopesToClientResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeResourceServerScopesToClientResponse({}));
  }

  /**
   * 授权指定ResourceServer下的Scope给Client
   * 
   * @param request - AuthorizeResourceServerScopesToClientRequest
   * @returns AuthorizeResourceServerScopesToClientResponse
   */
  async authorizeResourceServerScopesToClient(request: $_model.AuthorizeResourceServerScopesToClientRequest): Promise<$_model.AuthorizeResourceServerScopesToClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeResourceServerScopesToClientWithOptions(request, runtime);
  }

  /**
   * 授予组ResourceServerScope权限
   * 
   * @param request - AuthorizeResourceServerScopesToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeResourceServerScopesToGroupResponse
   */
  async authorizeResourceServerScopesToGroupWithOptions(request: $_model.AuthorizeResourceServerScopesToGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeResourceServerScopesToGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerScopeIds)) {
      query["ResourceServerScopeIds"] = request.resourceServerScopeIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeResourceServerScopesToGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeResourceServerScopesToGroupResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeResourceServerScopesToGroupResponse({}));
  }

  /**
   * 授予组ResourceServerScope权限
   * 
   * @param request - AuthorizeResourceServerScopesToGroupRequest
   * @returns AuthorizeResourceServerScopesToGroupResponse
   */
  async authorizeResourceServerScopesToGroup(request: $_model.AuthorizeResourceServerScopesToGroupRequest): Promise<$_model.AuthorizeResourceServerScopesToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeResourceServerScopesToGroupWithOptions(request, runtime);
  }

  /**
   * 授予组织ResourceServerScope权限
   * 
   * @param request - AuthorizeResourceServerScopesToOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeResourceServerScopesToOrganizationalUnitResponse
   */
  async authorizeResourceServerScopesToOrganizationalUnitWithOptions(request: $_model.AuthorizeResourceServerScopesToOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeResourceServerScopesToOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.resourceServerScopeIds)) {
      query["ResourceServerScopeIds"] = request.resourceServerScopeIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeResourceServerScopesToOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeResourceServerScopesToOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeResourceServerScopesToOrganizationalUnitResponse({}));
  }

  /**
   * 授予组织ResourceServerScope权限
   * 
   * @param request - AuthorizeResourceServerScopesToOrganizationalUnitRequest
   * @returns AuthorizeResourceServerScopesToOrganizationalUnitResponse
   */
  async authorizeResourceServerScopesToOrganizationalUnit(request: $_model.AuthorizeResourceServerScopesToOrganizationalUnitRequest): Promise<$_model.AuthorizeResourceServerScopesToOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeResourceServerScopesToOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * 授予用户ResourceServerScope权限
   * 
   * @param request - AuthorizeResourceServerScopesToUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeResourceServerScopesToUserResponse
   */
  async authorizeResourceServerScopesToUserWithOptions(request: $_model.AuthorizeResourceServerScopesToUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeResourceServerScopesToUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerScopeIds)) {
      query["ResourceServerScopeIds"] = request.resourceServerScopeIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeResourceServerScopesToUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeResourceServerScopesToUserResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeResourceServerScopesToUserResponse({}));
  }

  /**
   * 授予用户ResourceServerScope权限
   * 
   * @param request - AuthorizeResourceServerScopesToUserRequest
   * @returns AuthorizeResourceServerScopesToUserResponse
   */
  async authorizeResourceServerScopesToUser(request: $_model.AuthorizeResourceServerScopesToUserRequest): Promise<$_model.AuthorizeResourceServerScopesToUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeResourceServerScopesToUserWithOptions(request, runtime);
  }

  /**
   * 授权指定ResourceServer给Client
   * 
   * @param request - AuthorizeResourceServerToClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeResourceServerToClientResponse
   */
  async authorizeResourceServerToClientWithOptions(request: $_model.AuthorizeResourceServerToClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeResourceServerToClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientApplicationId)) {
      query["ClientApplicationId"] = request.clientApplicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerApplicationId)) {
      query["ResourceServerApplicationId"] = request.resourceServerApplicationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeResourceServerToClient",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeResourceServerToClientResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeResourceServerToClientResponse({}));
  }

  /**
   * 授权指定ResourceServer给Client
   * 
   * @param request - AuthorizeResourceServerToClientRequest
   * @returns AuthorizeResourceServerToClientResponse
   */
  async authorizeResourceServerToClient(request: $_model.AuthorizeResourceServerToClientRequest): Promise<$_model.AuthorizeResourceServerToClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeResourceServerToClientWithOptions(request, runtime);
  }

  /**
   * 绑定三方登录账户
   * 
   * @param request - BindUserAuthnSourceMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindUserAuthnSourceMappingResponse
   */
  async bindUserAuthnSourceMappingWithOptions(request: $_model.BindUserAuthnSourceMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindUserAuthnSourceMappingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userExternalId)) {
      query["UserExternalId"] = request.userExternalId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindUserAuthnSourceMapping",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindUserAuthnSourceMappingResponse>(await this.callApi(params, req, runtime), new $_model.BindUserAuthnSourceMappingResponse({}));
  }

  /**
   * 绑定三方登录账户
   * 
   * @param request - BindUserAuthnSourceMappingRequest
   * @returns BindUserAuthnSourceMappingResponse
   */
  async bindUserAuthnSourceMapping(request: $_model.BindUserAuthnSourceMappingRequest): Promise<$_model.BindUserAuthnSourceMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindUserAuthnSourceMappingWithOptions(request, runtime);
  }

  /**
   * 检查应用同步主组织是否在应用同步范围
   * 
   * @param request - CheckApplicationProvisioningUserPrimaryOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckApplicationProvisioningUserPrimaryOrganizationalUnitResponse
   */
  async checkApplicationProvisioningUserPrimaryOrganizationalUnitWithOptions(request: $_model.CheckApplicationProvisioningUserPrimaryOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckApplicationProvisioningUserPrimaryOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userPrimaryOrganizationalUnitId)) {
      query["UserPrimaryOrganizationalUnitId"] = request.userPrimaryOrganizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckApplicationProvisioningUserPrimaryOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckApplicationProvisioningUserPrimaryOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.CheckApplicationProvisioningUserPrimaryOrganizationalUnitResponse({}));
  }

  /**
   * 检查应用同步主组织是否在应用同步范围
   * 
   * @param request - CheckApplicationProvisioningUserPrimaryOrganizationalUnitRequest
   * @returns CheckApplicationProvisioningUserPrimaryOrganizationalUnitResponse
   */
  async checkApplicationProvisioningUserPrimaryOrganizationalUnit(request: $_model.CheckApplicationProvisioningUserPrimaryOrganizationalUnitRequest): Promise<$_model.CheckApplicationProvisioningUserPrimaryOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkApplicationProvisioningUserPrimaryOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * 实例删除检查
   * 
   * @param request - CheckInstanceForDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstanceForDeleteResponse
   */
  async checkInstanceForDeleteWithOptions(request: $_model.CheckInstanceForDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckInstanceForDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckInstanceForDelete",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckInstanceForDeleteResponse>(await this.callApi(params, req, runtime), new $_model.CheckInstanceForDeleteResponse({}));
  }

  /**
   * 实例删除检查
   * 
   * @param request - CheckInstanceForDeleteRequest
   * @returns CheckInstanceForDeleteResponse
   */
  async checkInstanceForDelete(request: $_model.CheckInstanceForDeleteRequest): Promise<$_model.CheckInstanceForDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkInstanceForDeleteWithOptions(request, runtime);
  }

  /**
   * 判断实例是否具有某个模块的功能
   * 
   * @param request - CheckInstanceModuleStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstanceModuleStatusResponse
   */
  async checkInstanceModuleStatusWithOptions(request: $_model.CheckInstanceModuleStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckInstanceModuleStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureKey)) {
      query["FeatureKey"] = request.featureKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleKey)) {
      query["ModuleKey"] = request.moduleKey;
    }

    if (!$dara.isNull(request.subFeatureKey)) {
      query["SubFeatureKey"] = request.subFeatureKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckInstanceModuleStatus",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckInstanceModuleStatusResponse>(await this.callApi(params, req, runtime), new $_model.CheckInstanceModuleStatusResponse({}));
  }

  /**
   * 判断实例是否具有某个模块的功能
   * 
   * @param request - CheckInstanceModuleStatusRequest
   * @returns CheckInstanceModuleStatusResponse
   */
  async checkInstanceModuleStatus(request: $_model.CheckInstanceModuleStatusRequest): Promise<$_model.CheckInstanceModuleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkInstanceModuleStatusWithOptions(request, runtime);
  }

  /**
   * Adds an application to an Enterprise Identity Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @remarks
   * IDaaS EIAM supports the following two standard single sign-on (SSO) protocols for adding applications: SAML 2.0 and OIDC. You can select an SSO protocol based on your business requirements when you add an application. You cannot change the SSO protocol that you selected after the application is added.
   * 
   * @param request - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(request: $_model.CreateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.applicationSourceType)) {
      query["ApplicationSourceType"] = request.applicationSourceType;
    }

    if (!$dara.isNull(request.applicationTemplateId)) {
      query["ApplicationTemplateId"] = request.applicationTemplateId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!$dara.isNull(request.ssoType)) {
      query["SsoType"] = request.ssoType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplication",
      version: "2021-12-01",
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
   * Adds an application to an Enterprise Identity Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @remarks
   * IDaaS EIAM supports the following two standard single sign-on (SSO) protocols for adding applications: SAML 2.0 and OIDC. You can select an SSO protocol based on your business requirements when you add an application. You cannot change the SSO protocol that you selected after the application is added.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: $_model.CreateApplicationRequest): Promise<$_model.CreateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * Creates a client key for an Employee Identity and Access Management (EIAM) application. An EIAM application can have up to two client keys.
   * 
   * @param request - CreateApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationClientSecretResponse
   */
  async createApplicationClientSecretWithOptions(request: $_model.CreateApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.expirationTime)) {
      query["ExpirationTime"] = request.expirationTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationClientSecretResponse({}));
  }

  /**
   * Creates a client key for an Employee Identity and Access Management (EIAM) application. An EIAM application can have up to two client keys.
   * 
   * @param request - CreateApplicationClientSecretRequest
   * @returns CreateApplicationClientSecretResponse
   */
  async createApplicationClientSecret(request: $_model.CreateApplicationClientSecretRequest): Promise<$_model.CreateApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * 创建应用联邦凭证
   * 
   * @param request - CreateApplicationFederatedCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationFederatedCredentialResponse
   */
  async createApplicationFederatedCredentialWithOptions(request: $_model.CreateApplicationFederatedCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationFederatedCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationFederatedCredentialName)) {
      query["ApplicationFederatedCredentialName"] = request.applicationFederatedCredentialName;
    }

    if (!$dara.isNull(request.applicationFederatedCredentialType)) {
      query["ApplicationFederatedCredentialType"] = request.applicationFederatedCredentialType;
    }

    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.attributeMappings)) {
      query["AttributeMappings"] = request.attributeMappings;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.federatedCredentialProviderId)) {
      query["FederatedCredentialProviderId"] = request.federatedCredentialProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.verificationCondition)) {
      query["VerificationCondition"] = request.verificationCondition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplicationFederatedCredential",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationFederatedCredentialResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationFederatedCredentialResponse({}));
  }

  /**
   * 创建应用联邦凭证
   * 
   * @param request - CreateApplicationFederatedCredentialRequest
   * @returns CreateApplicationFederatedCredentialResponse
   */
  async createApplicationFederatedCredential(request: $_model.CreateApplicationFederatedCredentialRequest): Promise<$_model.CreateApplicationFederatedCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationFederatedCredentialWithOptions(request, runtime);
  }

  /**
   * 创建应用角色
   * 
   * @param request - CreateApplicationRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationRoleResponse
   */
  async createApplicationRoleWithOptions(request: $_model.CreateApplicationRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleName)) {
      query["ApplicationRoleName"] = request.applicationRoleName;
    }

    if (!$dara.isNull(request.applicationRoleValue)) {
      query["ApplicationRoleValue"] = request.applicationRoleValue;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplicationRole",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationRoleResponse({}));
  }

  /**
   * 创建应用角色
   * 
   * @param request - CreateApplicationRoleRequest
   * @returns CreateApplicationRoleResponse
   */
  async createApplicationRole(request: $_model.CreateApplicationRoleRequest): Promise<$_model.CreateApplicationRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationRoleWithOptions(request, runtime);
  }

  /**
   * 创建应用Token
   * 
   * @param request - CreateApplicationTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationTokenResponse
   */
  async createApplicationTokenWithOptions(request: $_model.CreateApplicationTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationTokenType)) {
      query["ApplicationTokenType"] = request.applicationTokenType;
    }

    if (!$dara.isNull(request.expirationTime)) {
      query["ExpirationTime"] = request.expirationTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplicationToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationTokenResponse({}));
  }

  /**
   * 创建应用Token
   * 
   * @param request - CreateApplicationTokenRequest
   * @returns CreateApplicationTokenResponse
   */
  async createApplicationToken(request: $_model.CreateApplicationTokenRequest): Promise<$_model.CreateApplicationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationTokenWithOptions(request, runtime);
  }

  /**
   * 创建授权资源
   * 
   * @param request - CreateAuthorizationResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAuthorizationResourceResponse
   */
  async createAuthorizationResourceWithOptions(request: $_model.CreateAuthorizationResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAuthorizationResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationResourceEntityId)) {
      query["AuthorizationResourceEntityId"] = request.authorizationResourceEntityId;
    }

    if (!$dara.isNull(request.authorizationResourceEntityType)) {
      query["AuthorizationResourceEntityType"] = request.authorizationResourceEntityType;
    }

    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAuthorizationResource",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAuthorizationResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateAuthorizationResourceResponse({}));
  }

  /**
   * 创建授权资源
   * 
   * @param request - CreateAuthorizationResourceRequest
   * @returns CreateAuthorizationResourceResponse
   */
  async createAuthorizationResource(request: $_model.CreateAuthorizationResourceRequest): Promise<$_model.CreateAuthorizationResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAuthorizationResourceWithOptions(request, runtime);
  }

  /**
   * 创建授权规则
   * 
   * @param request - CreateAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAuthorizationRuleResponse
   */
  async createAuthorizationRuleWithOptions(request: $_model.CreateAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationResourceScope)) {
      query["AuthorizationResourceScope"] = request.authorizationResourceScope;
    }

    if (!$dara.isNull(request.authorizationRuleName)) {
      query["AuthorizationRuleName"] = request.authorizationRuleName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateAuthorizationRuleResponse({}));
  }

  /**
   * 创建授权规则
   * 
   * @param request - CreateAuthorizationRuleRequest
   * @returns CreateAuthorizationRuleResponse
   */
  async createAuthorizationRule(request: $_model.CreateAuthorizationRuleRequest): Promise<$_model.CreateAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 创建品牌
   * 
   * @param request - CreateBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBrandResponse
   */
  async createBrandWithOptions(request: $_model.CreateBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandName)) {
      query["BrandName"] = request.brandName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBrandResponse>(await this.callApi(params, req, runtime), new $_model.CreateBrandResponse({}));
  }

  /**
   * 创建品牌
   * 
   * @param request - CreateBrandRequest
   * @returns CreateBrandResponse
   */
  async createBrand(request: $_model.CreateBrandRequest): Promise<$_model.CreateBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBrandWithOptions(request, runtime);
  }

  /**
   * 创建应用ClientPublicKey
   * 
   * @param request - CreateClientPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientPublicKeyResponse
   */
  async createClientPublicKeyWithOptions(request: $_model.CreateClientPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClientPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithmType)) {
      query["AlgorithmType"] = request.algorithmType;
    }

    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.publicKey)) {
      query["PublicKey"] = request.publicKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClientPublicKey",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClientPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateClientPublicKeyResponse({}));
  }

  /**
   * 创建应用ClientPublicKey
   * 
   * @param request - CreateClientPublicKeyRequest
   * @returns CreateClientPublicKeyResponse
   */
  async createClientPublicKey(request: $_model.CreateClientPublicKeyRequest): Promise<$_model.CreateClientPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientPublicKeyWithOptions(request, runtime);
  }

  /**
   * 创建云账号
   * 
   * @param request - CreateCloudAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudAccountResponse
   */
  async createCloudAccountWithOptions(request: $_model.CreateCloudAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cloudAccountExternalId)) {
      query["CloudAccountExternalId"] = request.cloudAccountExternalId;
    }

    if (!$dara.isNull(request.cloudAccountName)) {
      query["CloudAccountName"] = request.cloudAccountName;
    }

    if (!$dara.isNull(request.cloudAccountProviderName)) {
      query["CloudAccountProviderName"] = request.cloudAccountProviderName;
    }

    if (!$dara.isNull(request.cloudAccountVendorType)) {
      query["CloudAccountVendorType"] = request.cloudAccountVendorType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudAccount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudAccountResponse({}));
  }

  /**
   * 创建云账号
   * 
   * @param request - CreateCloudAccountRequest
   * @returns CreateCloudAccountResponse
   */
  async createCloudAccount(request: $_model.CreateCloudAccountRequest): Promise<$_model.CreateCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudAccountWithOptions(request, runtime);
  }

  /**
   * 创建云角色
   * 
   * @param request - CreateCloudAccountRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudAccountRoleResponse
   */
  async createCloudAccountRoleWithOptions(request: $_model.CreateCloudAccountRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudAccountRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cloudAccountId)) {
      query["CloudAccountId"] = request.cloudAccountId;
    }

    if (!$dara.isNull(request.cloudAccountRoleName)) {
      query["CloudAccountRoleName"] = request.cloudAccountRoleName;
    }

    if (!$dara.isNull(request.cloudAccountRoleType)) {
      query["CloudAccountRoleType"] = request.cloudAccountRoleType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudAccountRole",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudAccountRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudAccountRoleResponse({}));
  }

  /**
   * 创建云角色
   * 
   * @param request - CreateCloudAccountRoleRequest
   * @returns CreateCloudAccountRoleResponse
   */
  async createCloudAccountRole(request: $_model.CreateCloudAccountRoleRequest): Promise<$_model.CreateCloudAccountRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudAccountRoleWithOptions(request, runtime);
  }

  /**
   * Create Conditional Access Policy
   * 
   * @remarks
   * Create Conditional Access Policy
   * 
   * @param request - CreateConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConditionalAccessPolicyResponse
   */
  async createConditionalAccessPolicyWithOptions(request: $_model.CreateConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conditionalAccessPolicyName)) {
      query["ConditionalAccessPolicyName"] = request.conditionalAccessPolicyName;
    }

    if (!$dara.isNull(request.conditionalAccessPolicyType)) {
      query["ConditionalAccessPolicyType"] = request.conditionalAccessPolicyType;
    }

    if (!$dara.isNull(request.conditionsConfig)) {
      query["ConditionsConfig"] = request.conditionsConfig;
    }

    if (!$dara.isNull(request.decisionConfig)) {
      query["DecisionConfig"] = request.decisionConfig;
    }

    if (!$dara.isNull(request.decisionType)) {
      query["DecisionType"] = request.decisionType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.evaluateAt)) {
      query["EvaluateAt"] = request.evaluateAt;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateConditionalAccessPolicyResponse({}));
  }

  /**
   * Create Conditional Access Policy
   * 
   * @remarks
   * Create Conditional Access Policy
   * 
   * @param request - CreateConditionalAccessPolicyRequest
   * @returns CreateConditionalAccessPolicyResponse
   */
  async createConditionalAccessPolicy(request: $_model.CreateConditionalAccessPolicyRequest): Promise<$_model.CreateConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 创建扩展字段
   * 
   * @param request - CreateCustomFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomFieldResponse
   */
  async createCustomFieldWithOptions(request: $_model.CreateCustomFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultValue)) {
      query["DefaultValue"] = request.defaultValue;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.encrypted)) {
      query["Encrypted"] = request.encrypted;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.fieldDataConfig)) {
      query["FieldDataConfig"] = request.fieldDataConfig;
    }

    if (!$dara.isNull(request.fieldDataType)) {
      query["FieldDataType"] = request.fieldDataType;
    }

    if (!$dara.isNull(request.fieldDisplayName)) {
      query["FieldDisplayName"] = request.fieldDisplayName;
    }

    if (!$dara.isNull(request.fieldDisplayType)) {
      query["FieldDisplayType"] = request.fieldDisplayType;
    }

    if (!$dara.isNull(request.fieldName)) {
      query["FieldName"] = request.fieldName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.required)) {
      query["Required"] = request.required;
    }

    if (!$dara.isNull(request.unique)) {
      query["Unique"] = request.unique;
    }

    if (!$dara.isNull(request.userPermission)) {
      query["UserPermission"] = request.userPermission;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomField",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomFieldResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomFieldResponse({}));
  }

  /**
   * 创建扩展字段
   * 
   * @param request - CreateCustomFieldRequest
   * @returns CreateCustomFieldResponse
   */
  async createCustomField(request: $_model.CreateCustomFieldRequest): Promise<$_model.CreateCustomFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomFieldWithOptions(request, runtime);
  }

  /**
   * 创建自定义条款
   * 
   * @param request - CreateCustomPrivacyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomPrivacyPolicyResponse
   */
  async createCustomPrivacyPolicyWithOptions(request: $_model.CreateCustomPrivacyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomPrivacyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.customPrivacyPolicyContents)) {
      query["CustomPrivacyPolicyContents"] = request.customPrivacyPolicyContents;
    }

    if (!$dara.isNull(request.customPrivacyPolicyName)) {
      query["CustomPrivacyPolicyName"] = request.customPrivacyPolicyName;
    }

    if (!$dara.isNull(request.defaultLanguageCode)) {
      query["DefaultLanguageCode"] = request.defaultLanguageCode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userConsentType)) {
      query["UserConsentType"] = request.userConsentType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomPrivacyPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomPrivacyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomPrivacyPolicyResponse({}));
  }

  /**
   * 创建自定义条款
   * 
   * @param request - CreateCustomPrivacyPolicyRequest
   * @returns CreateCustomPrivacyPolicyResponse
   */
  async createCustomPrivacyPolicy(request: $_model.CreateCustomPrivacyPolicyRequest): Promise<$_model.CreateCustomPrivacyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomPrivacyPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a custom domain name for an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - CreateDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(request: $_model.CreateDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.filing)) {
      query["Filing"] = request.filing;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateDomainResponse({}));
  }

  /**
   * Creates a custom domain name for an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: $_model.CreateDomainRequest): Promise<$_model.CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * Creates a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - CreateDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainProxyTokenResponse
   */
  async createDomainProxyTokenWithOptions(request: $_model.CreateDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateDomainProxyTokenResponse({}));
  }

  /**
   * Creates a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - CreateDomainProxyTokenRequest
   * @returns CreateDomainProxyTokenResponse
   */
  async createDomainProxyToken(request: $_model.CreateDomainProxyTokenRequest): Promise<$_model.CreateDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * 创建联邦凭证提供方
   * 
   * @param request - CreateFederatedCredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFederatedCredentialProviderResponse
   */
  async createFederatedCredentialProviderWithOptions(request: $_model.CreateFederatedCredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFederatedCredentialProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.federatedCredentialProviderName)) {
      query["FederatedCredentialProviderName"] = request.federatedCredentialProviderName;
    }

    if (!$dara.isNull(request.federatedCredentialProviderType)) {
      query["FederatedCredentialProviderType"] = request.federatedCredentialProviderType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.oidcProviderConfig)) {
      query["OidcProviderConfig"] = request.oidcProviderConfig;
    }

    if (!$dara.isNull(request.pkcs7ProviderConfig)) {
      query["Pkcs7ProviderConfig"] = request.pkcs7ProviderConfig;
    }

    if (!$dara.isNull(request.privateCaProviderConfig)) {
      query["PrivateCaProviderConfig"] = request.privateCaProviderConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFederatedCredentialProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFederatedCredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.CreateFederatedCredentialProviderResponse({}));
  }

  /**
   * 创建联邦凭证提供方
   * 
   * @param request - CreateFederatedCredentialProviderRequest
   * @returns CreateFederatedCredentialProviderResponse
   */
  async createFederatedCredentialProvider(request: $_model.CreateFederatedCredentialProviderRequest): Promise<$_model.CreateFederatedCredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFederatedCredentialProviderWithOptions(request, runtime);
  }

  /**
   * Creates an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
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

    if (!$dara.isNull(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2021-12-01",
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
   * Creates an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * Create Identity Provider
   * 
   * @param request - CreateIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdentityProviderResponse
   */
  async createIdentityProviderWithOptions(request: $_model.CreateIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authnConfig)) {
      query["AuthnConfig"] = request.authnConfig;
    }

    if (!$dara.isNull(request.autoCreateUserConfig)) {
      query["AutoCreateUserConfig"] = request.autoCreateUserConfig;
    }

    if (!$dara.isNull(request.autoUpdateUserConfig)) {
      query["AutoUpdateUserConfig"] = request.autoUpdateUserConfig;
    }

    if (!$dara.isNull(request.bindingConfig)) {
      query["BindingConfig"] = request.bindingConfig;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dingtalkAppConfig)) {
      query["DingtalkAppConfig"] = request.dingtalkAppConfig;
    }

    if (!$dara.isNull(request.identityProviderName)) {
      query["IdentityProviderName"] = request.identityProviderName;
    }

    if (!$dara.isNull(request.identityProviderType)) {
      query["IdentityProviderType"] = request.identityProviderType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.larkConfig)) {
      query["LarkConfig"] = request.larkConfig;
    }

    if (!$dara.isNull(request.ldapConfig)) {
      query["LdapConfig"] = request.ldapConfig;
    }

    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.oidcConfig)) {
      query["OidcConfig"] = request.oidcConfig;
    }

    if (!$dara.isNull(request.udPullConfig)) {
      query["UdPullConfig"] = request.udPullConfig;
    }

    if (!$dara.isNull(request.udPushConfig)) {
      query["UdPushConfig"] = request.udPushConfig;
    }

    if (!$dara.isNull(request.weComConfig)) {
      query["WeComConfig"] = request.weComConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIdentityProvider",
      version: "2021-12-01",
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
   * Create Identity Provider
   * 
   * @param request - CreateIdentityProviderRequest
   * @returns CreateIdentityProviderResponse
   */
  async createIdentityProvider(request: $_model.CreateIdentityProviderRequest): Promise<$_model.CreateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 创建IdP状态检查任务
   * 
   * @param request - CreateIdentityProviderStatusCheckJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdentityProviderStatusCheckJobResponse
   */
  async createIdentityProviderStatusCheckJobWithOptions(request: $_model.CreateIdentityProviderStatusCheckJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIdentityProviderStatusCheckJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIdentityProviderStatusCheckJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIdentityProviderStatusCheckJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateIdentityProviderStatusCheckJobResponse({}));
  }

  /**
   * 创建IdP状态检查任务
   * 
   * @param request - CreateIdentityProviderStatusCheckJobRequest
   * @returns CreateIdentityProviderStatusCheckJobResponse
   */
  async createIdentityProviderStatusCheckJob(request: $_model.CreateIdentityProviderStatusCheckJobRequest): Promise<$_model.CreateIdentityProviderStatusCheckJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIdentityProviderStatusCheckJobWithOptions(request, runtime);
  }

  /**
   * Creates an instance based on which all capabilities of Identity as a Service (IDaaS) Enterprise Identity and Access Management (EIAM) are provided.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates an instance based on which all capabilities of Identity as a Service (IDaaS) Enterprise Identity and Access Management (EIAM) are provided.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 为实例创建试用版 License
   * 
   * @param request - CreateInstanceTrialLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceTrialLicenseResponse
   */
  async createInstanceTrialLicenseWithOptions(request: $_model.CreateInstanceTrialLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceTrialLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceTrialLicense",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceTrialLicenseResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceTrialLicenseResponse({}));
  }

  /**
   * 为实例创建试用版 License
   * 
   * @param request - CreateInstanceTrialLicenseRequest
   * @returns CreateInstanceTrialLicenseResponse
   */
  async createInstanceTrialLicense(request: $_model.CreateInstanceTrialLicenseRequest): Promise<$_model.CreateInstanceTrialLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceTrialLicenseWithOptions(request, runtime);
  }

  /**
   * Creates a dedicated endpoint.
   * 
   * @param request - CreateNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkAccessEndpointResponse
   */
  async createNetworkAccessEndpointWithOptions(request: $_model.CreateNetworkAccessEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkAccessEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointName)) {
      query["NetworkAccessEndpointName"] = request.networkAccessEndpointName;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkAccessEndpointResponse({}));
  }

  /**
   * Creates a dedicated endpoint.
   * 
   * @param request - CreateNetworkAccessEndpointRequest
   * @returns CreateNetworkAccessEndpointResponse
   */
  async createNetworkAccessEndpoint(request: $_model.CreateNetworkAccessEndpointRequest): Promise<$_model.CreateNetworkAccessEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * 创建网络区域对象
   * 
   * @param request - CreateNetworkZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkZoneResponse
   */
  async createNetworkZoneWithOptions(request: $_model.CreateNetworkZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipv4Cidrs)) {
      query["Ipv4Cidrs"] = request.ipv4Cidrs;
    }

    if (!$dara.isNull(request.ipv6Cidrs)) {
      query["Ipv6Cidrs"] = request.ipv6Cidrs;
    }

    if (!$dara.isNull(request.networkZoneName)) {
      query["NetworkZoneName"] = request.networkZoneName;
    }

    if (!$dara.isNull(request.networkZoneType)) {
      query["NetworkZoneType"] = request.networkZoneType;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkZone",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkZoneResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkZoneResponse({}));
  }

  /**
   * 创建网络区域对象
   * 
   * @param request - CreateNetworkZoneRequest
   * @returns CreateNetworkZoneResponse
   */
  async createNetworkZone(request: $_model.CreateNetworkZoneRequest): Promise<$_model.CreateNetworkZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkZoneWithOptions(request, runtime);
  }

  /**
   * Creates an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrganizationalUnitResponse
   */
  async createOrganizationalUnitWithOptions(request: $_model.CreateOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitExternalId)) {
      query["OrganizationalUnitExternalId"] = request.organizationalUnitExternalId;
    }

    if (!$dara.isNull(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrganizationalUnitResponse({}));
  }

  /**
   * Creates an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateOrganizationalUnitRequest
   * @returns CreateOrganizationalUnitResponse
   */
  async createOrganizationalUnit(request: $_model.CreateOrganizationalUnitRequest): Promise<$_model.CreateOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * 创建指定ResourceServer下的Scope
   * 
   * @param request - CreateResourceServerScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceServerScopeResponse
   */
  async createResourceServerScopeWithOptions(request: $_model.CreateResourceServerScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceServerScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.authorizationType)) {
      query["AuthorizationType"] = request.authorizationType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerScopeName)) {
      query["ResourceServerScopeName"] = request.resourceServerScopeName;
    }

    if (!$dara.isNull(request.resourceServerScopeType)) {
      query["ResourceServerScopeType"] = request.resourceServerScopeType;
    }

    if (!$dara.isNull(request.resourceServerScopeValue)) {
      query["ResourceServerScopeValue"] = request.resourceServerScopeValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceServerScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceServerScopeResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceServerScopeResponse({}));
  }

  /**
   * 创建指定ResourceServer下的Scope
   * 
   * @param request - CreateResourceServerScopeRequest
   * @returns CreateResourceServerScopeResponse
   */
  async createResourceServerScope(request: $_model.CreateResourceServerScopeRequest): Promise<$_model.CreateResourceServerScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceServerScopeWithOptions(request, runtime);
  }

  /**
   * Creates an account in an Identity as a Service (IDaaS) Enterprise Identity Access Management (EIAM) instance.
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: $_model.CreateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.customFields)) {
      query["CustomFields"] = request.customFields;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.emailVerified)) {
      query["EmailVerified"] = request.emailVerified;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordInitializationConfig)) {
      query["PasswordInitializationConfig"] = request.passwordInitializationConfig;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.phoneNumberVerified)) {
      query["PhoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!$dara.isNull(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!$dara.isNull(request.primaryOrganizationalUnitId)) {
      query["PrimaryOrganizationalUnitId"] = request.primaryOrganizationalUnitId;
    }

    if (!$dara.isNull(request.userExternalId)) {
      query["UserExternalId"] = request.userExternalId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2021-12-01",
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
   * Creates an account in an Identity as a Service (IDaaS) Enterprise Identity Access Management (EIAM) instance.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) application.
   * 
   * @remarks
   * Make sure that the EIAM application that you want to delete is not used before you delete the EIAM application. After you delete the EIAM application, all configurations are deleted and cannot be restored.
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: $_model.DeleteApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplication",
      version: "2021-12-01",
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
   * Deletes an Employee Identity and Access Management (EIAM) application.
   * 
   * @remarks
   * Make sure that the EIAM application that you want to delete is not used before you delete the EIAM application. After you delete the EIAM application, all configurations are deleted and cannot be restored.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes a client key for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DeleteApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationClientSecretResponse
   */
  async deleteApplicationClientSecretWithOptions(request: $_model.DeleteApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationClientSecretResponse({}));
  }

  /**
   * Deletes a client key for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DeleteApplicationClientSecretRequest
   * @returns DeleteApplicationClientSecretResponse
   */
  async deleteApplicationClientSecret(request: $_model.DeleteApplicationClientSecretRequest): Promise<$_model.DeleteApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * 删除应用联邦凭证
   * 
   * @param request - DeleteApplicationFederatedCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationFederatedCredentialResponse
   */
  async deleteApplicationFederatedCredentialWithOptions(request: $_model.DeleteApplicationFederatedCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationFederatedCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationFederatedCredentialId)) {
      query["ApplicationFederatedCredentialId"] = request.applicationFederatedCredentialId;
    }

    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplicationFederatedCredential",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationFederatedCredentialResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationFederatedCredentialResponse({}));
  }

  /**
   * 删除应用联邦凭证
   * 
   * @param request - DeleteApplicationFederatedCredentialRequest
   * @returns DeleteApplicationFederatedCredentialResponse
   */
  async deleteApplicationFederatedCredential(request: $_model.DeleteApplicationFederatedCredentialRequest): Promise<$_model.DeleteApplicationFederatedCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationFederatedCredentialWithOptions(request, runtime);
  }

  /**
   * 删除应用角色
   * 
   * @param request - DeleteApplicationRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationRoleResponse
   */
  async deleteApplicationRoleWithOptions(request: $_model.DeleteApplicationRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplicationRole",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationRoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationRoleResponse({}));
  }

  /**
   * 删除应用角色
   * 
   * @param request - DeleteApplicationRoleRequest
   * @returns DeleteApplicationRoleResponse
   */
  async deleteApplicationRole(request: $_model.DeleteApplicationRoleRequest): Promise<$_model.DeleteApplicationRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationRoleWithOptions(request, runtime);
  }

  /**
   * 删除ApplicationToken
   * 
   * @param request - DeleteApplicationTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationTokenResponse
   */
  async deleteApplicationTokenWithOptions(request: $_model.DeleteApplicationTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationTokenId)) {
      query["ApplicationTokenId"] = request.applicationTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplicationToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationTokenResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationTokenResponse({}));
  }

  /**
   * 删除ApplicationToken
   * 
   * @param request - DeleteApplicationTokenRequest
   * @returns DeleteApplicationTokenResponse
   */
  async deleteApplicationToken(request: $_model.DeleteApplicationTokenRequest): Promise<$_model.DeleteApplicationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationTokenWithOptions(request, runtime);
  }

  /**
   * 删除授权资源
   * 
   * @param request - DeleteAuthorizationResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAuthorizationResourceResponse
   */
  async deleteAuthorizationResourceWithOptions(request: $_model.DeleteAuthorizationResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAuthorizationResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationResourceId)) {
      query["AuthorizationResourceId"] = request.authorizationResourceId;
    }

    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAuthorizationResource",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAuthorizationResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAuthorizationResourceResponse({}));
  }

  /**
   * 删除授权资源
   * 
   * @param request - DeleteAuthorizationResourceRequest
   * @returns DeleteAuthorizationResourceResponse
   */
  async deleteAuthorizationResource(request: $_model.DeleteAuthorizationResourceRequest): Promise<$_model.DeleteAuthorizationResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAuthorizationResourceWithOptions(request, runtime);
  }

  /**
   * 删除授权规则
   * 
   * @param request - DeleteAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAuthorizationRuleResponse
   */
  async deleteAuthorizationRuleWithOptions(request: $_model.DeleteAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAuthorizationRuleResponse({}));
  }

  /**
   * 删除授权规则
   * 
   * @param request - DeleteAuthorizationRuleRequest
   * @returns DeleteAuthorizationRuleResponse
   */
  async deleteAuthorizationRule(request: $_model.DeleteAuthorizationRuleRequest): Promise<$_model.DeleteAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 删除品牌
   * 
   * @param request - DeleteBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBrandResponse
   */
  async deleteBrandWithOptions(request: $_model.DeleteBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBrandResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBrandResponse({}));
  }

  /**
   * 删除品牌
   * 
   * @param request - DeleteBrandRequest
   * @returns DeleteBrandResponse
   */
  async deleteBrand(request: $_model.DeleteBrandRequest): Promise<$_model.DeleteBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBrandWithOptions(request, runtime);
  }

  /**
   * 删除指定的应用ClientPublicKey
   * 
   * @param request - DeleteClientPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientPublicKeyResponse
   */
  async deleteClientPublicKeyWithOptions(request: $_model.DeleteClientPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClientPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientPublicKeyId)) {
      query["ClientPublicKeyId"] = request.clientPublicKeyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClientPublicKey",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClientPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClientPublicKeyResponse({}));
  }

  /**
   * 删除指定的应用ClientPublicKey
   * 
   * @param request - DeleteClientPublicKeyRequest
   * @returns DeleteClientPublicKeyResponse
   */
  async deleteClientPublicKey(request: $_model.DeleteClientPublicKeyRequest): Promise<$_model.DeleteClientPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientPublicKeyWithOptions(request, runtime);
  }

  /**
   * 删除云账号
   * 
   * @param request - DeleteCloudAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudAccountResponse
   */
  async deleteCloudAccountWithOptions(request: $_model.DeleteCloudAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudAccountId)) {
      query["CloudAccountId"] = request.cloudAccountId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudAccount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudAccountResponse({}));
  }

  /**
   * 删除云账号
   * 
   * @param request - DeleteCloudAccountRequest
   * @returns DeleteCloudAccountResponse
   */
  async deleteCloudAccount(request: $_model.DeleteCloudAccountRequest): Promise<$_model.DeleteCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudAccountWithOptions(request, runtime);
  }

  /**
   * 删除云角色
   * 
   * @param request - DeleteCloudAccountRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudAccountRoleResponse
   */
  async deleteCloudAccountRoleWithOptions(request: $_model.DeleteCloudAccountRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudAccountRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudAccountId)) {
      query["CloudAccountId"] = request.cloudAccountId;
    }

    if (!$dara.isNull(request.cloudAccountRoleId)) {
      query["CloudAccountRoleId"] = request.cloudAccountRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudAccountRole",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudAccountRoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudAccountRoleResponse({}));
  }

  /**
   * 删除云角色
   * 
   * @param request - DeleteCloudAccountRoleRequest
   * @returns DeleteCloudAccountRoleResponse
   */
  async deleteCloudAccountRole(request: $_model.DeleteCloudAccountRoleRequest): Promise<$_model.DeleteCloudAccountRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudAccountRoleWithOptions(request, runtime);
  }

  /**
   * Delete Conditional Access Policy
   * 
   * @remarks
   * When deleting a specified conditional access policy, please ensure that the policy is no longer in use. After deletion, all configuration data will be removed and cannot be recovered.
   * 
   * @param request - DeleteConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConditionalAccessPolicyResponse
   */
  async deleteConditionalAccessPolicyWithOptions(request: $_model.DeleteConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConditionalAccessPolicyResponse({}));
  }

  /**
   * Delete Conditional Access Policy
   * 
   * @remarks
   * When deleting a specified conditional access policy, please ensure that the policy is no longer in use. After deletion, all configuration data will be removed and cannot be recovered.
   * 
   * @param request - DeleteConditionalAccessPolicyRequest
   * @returns DeleteConditionalAccessPolicyResponse
   */
  async deleteConditionalAccessPolicy(request: $_model.DeleteConditionalAccessPolicyRequest): Promise<$_model.DeleteConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 删除扩展字段
   * 
   * @param request - DeleteCustomFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomFieldResponse
   */
  async deleteCustomFieldWithOptions(request: $_model.DeleteCustomFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fieldId)) {
      query["FieldId"] = request.fieldId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomField",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomFieldResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomFieldResponse({}));
  }

  /**
   * 删除扩展字段
   * 
   * @param request - DeleteCustomFieldRequest
   * @returns DeleteCustomFieldResponse
   */
  async deleteCustomField(request: $_model.DeleteCustomFieldRequest): Promise<$_model.DeleteCustomFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomFieldWithOptions(request, runtime);
  }

  /**
   * 删除自定义条款
   * 
   * @param request - DeleteCustomPrivacyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomPrivacyPolicyResponse
   */
  async deleteCustomPrivacyPolicyWithOptions(request: $_model.DeleteCustomPrivacyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomPrivacyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customPrivacyPolicyId)) {
      query["CustomPrivacyPolicyId"] = request.customPrivacyPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomPrivacyPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomPrivacyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomPrivacyPolicyResponse({}));
  }

  /**
   * 删除自定义条款
   * 
   * @param request - DeleteCustomPrivacyPolicyRequest
   * @returns DeleteCustomPrivacyPolicyResponse
   */
  async deleteCustomPrivacyPolicy(request: $_model.DeleteCustomPrivacyPolicyRequest): Promise<$_model.DeleteCustomPrivacyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomPrivacyPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a custom domain name of an Employee Identity and Access Management (EIAM) instance. You cannot delete the initial domain name and default domain name of the instance.
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: $_model.DeleteDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainResponse({}));
  }

  /**
   * Deletes a custom domain name of an Employee Identity and Access Management (EIAM) instance. You cannot delete the initial domain name and default domain name of the instance.
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: $_model.DeleteDomainRequest): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * Deletes a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. Only the proxy tokens in the disabled state can be deleted.
   * 
   * @param request - DeleteDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainProxyTokenResponse
   */
  async deleteDomainProxyTokenWithOptions(request: $_model.DeleteDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainProxyTokenResponse({}));
  }

  /**
   * Deletes a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. Only the proxy tokens in the disabled state can be deleted.
   * 
   * @param request - DeleteDomainProxyTokenRequest
   * @returns DeleteDomainProxyTokenResponse
   */
  async deleteDomainProxyToken(request: $_model.DeleteDomainProxyTokenRequest): Promise<$_model.DeleteDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * 删除联邦凭证提供方
   * 
   * @param request - DeleteFederatedCredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFederatedCredentialProviderResponse
   */
  async deleteFederatedCredentialProviderWithOptions(request: $_model.DeleteFederatedCredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFederatedCredentialProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.federatedCredentialProviderId)) {
      query["FederatedCredentialProviderId"] = request.federatedCredentialProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFederatedCredentialProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFederatedCredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFederatedCredentialProviderResponse({}));
  }

  /**
   * 删除联邦凭证提供方
   * 
   * @param request - DeleteFederatedCredentialProviderRequest
   * @returns DeleteFederatedCredentialProviderResponse
   */
  async deleteFederatedCredentialProvider(request: $_model.DeleteFederatedCredentialProviderRequest): Promise<$_model.DeleteFederatedCredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFederatedCredentialProviderWithOptions(request, runtime);
  }

  /**
   * Deletes the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - DeleteGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: $_model.DeleteGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2021-12-01",
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
   * Deletes the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: $_model.DeleteGroupRequest): Promise<$_model.DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * Delete identity provider
   * 
   * @param request - DeleteIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIdentityProviderResponse
   */
  async deleteIdentityProviderWithOptions(request: $_model.DeleteIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIdentityProvider",
      version: "2021-12-01",
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
   * Delete identity provider
   * 
   * @param request - DeleteIdentityProviderRequest
   * @returns DeleteIdentityProviderResponse
   */
  async deleteIdentityProvider(request: $_model.DeleteIdentityProviderRequest): Promise<$_model.DeleteIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Deletes an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS) that you do not need.
   * 
   * @remarks
   * Make sure that the instance to be deleted is no longer used. If the instance is deleted, all data related to the instance will be deleted.
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Deletes an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS) that you do not need.
   * 
   * @remarks
   * Make sure that the instance to be deleted is no longer used. If the instance is deleted, all data related to the instance will be deleted.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * Delete a network endpoint of a specific type.
   * 
   * @param request - DeleteNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkAccessEndpointResponse
   */
  async deleteNetworkAccessEndpointWithOptions(request: $_model.DeleteNetworkAccessEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkAccessEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkAccessEndpointResponse({}));
  }

  /**
   * Delete a network endpoint of a specific type.
   * 
   * @param request - DeleteNetworkAccessEndpointRequest
   * @returns DeleteNetworkAccessEndpointResponse
   */
  async deleteNetworkAccessEndpoint(request: $_model.DeleteNetworkAccessEndpointRequest): Promise<$_model.DeleteNetworkAccessEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * 删除网络区域对象
   * 
   * @param request - DeleteNetworkZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkZoneResponse
   */
  async deleteNetworkZoneWithOptions(request: $_model.DeleteNetworkZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkZoneId)) {
      query["NetworkZoneId"] = request.networkZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkZone",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkZoneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkZoneResponse({}));
  }

  /**
   * 删除网络区域对象
   * 
   * @param request - DeleteNetworkZoneRequest
   * @returns DeleteNetworkZoneResponse
   */
  async deleteNetworkZone(request: $_model.DeleteNetworkZoneRequest): Promise<$_model.DeleteNetworkZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkZoneWithOptions(request, runtime);
  }

  /**
   * Deletes an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the organization has EIAM accounts or child organizations, the delete operation fails.
   * 
   * @param request - DeleteOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnitWithOptions(request: $_model.DeleteOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOrganizationalUnitResponse({}));
  }

  /**
   * Deletes an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the organization has EIAM accounts or child organizations, the delete operation fails.
   * 
   * @param request - DeleteOrganizationalUnitRequest
   * @returns DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnit(request: $_model.DeleteOrganizationalUnitRequest): Promise<$_model.DeleteOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Delete organizational unit information, forcibly deleting all accounts and sub-organizations beneath it
   * 
   * @param request - DeleteOrganizationalUnitChildrenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOrganizationalUnitChildrenResponse
   */
  async deleteOrganizationalUnitChildrenWithOptions(request: $_model.DeleteOrganizationalUnitChildrenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOrganizationalUnitChildrenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOrganizationalUnitChildren",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOrganizationalUnitChildrenResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOrganizationalUnitChildrenResponse({}));
  }

  /**
   * Delete organizational unit information, forcibly deleting all accounts and sub-organizations beneath it
   * 
   * @param request - DeleteOrganizationalUnitChildrenRequest
   * @returns DeleteOrganizationalUnitChildrenResponse
   */
  async deleteOrganizationalUnitChildren(request: $_model.DeleteOrganizationalUnitChildrenRequest): Promise<$_model.DeleteOrganizationalUnitChildrenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOrganizationalUnitChildrenWithOptions(request, runtime);
  }

  /**
   * 删除指定ResourceServer下的Scope
   * 
   * @param request - DeleteResourceServerScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceServerScopeResponse
   */
  async deleteResourceServerScopeWithOptions(request: $_model.DeleteResourceServerScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceServerScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerScopeId)) {
      query["ResourceServerScopeId"] = request.resourceServerScopeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceServerScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceServerScopeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceServerScopeResponse({}));
  }

  /**
   * 删除指定ResourceServer下的Scope
   * 
   * @param request - DeleteResourceServerScopeRequest
   * @returns DeleteResourceServerScopeResponse
   */
  async deleteResourceServerScope(request: $_model.DeleteResourceServerScopeRequest): Promise<$_model.DeleteResourceServerScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResourceServerScopeWithOptions(request, runtime);
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The information related to the account is cleared.
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: $_model.DeleteUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2021-12-01",
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
   * Deletes an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The information related to the account is cleared.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * 批量删除账号
   * 
   * @param request - DeleteUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUsersResponse
   */
  async deleteUsersWithOptions(request: $_model.DeleteUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUsers",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUsersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUsersResponse({}));
  }

  /**
   * 批量删除账号
   * 
   * @param request - DeleteUsersRequest
   * @returns DeleteUsersResponse
   */
  async deleteUsers(request: $_model.DeleteUsersRequest): Promise<$_model.DeleteUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUsersWithOptions(request, runtime);
  }

  /**
   * 删除指定WebAuthn认证器名称
   * 
   * @param request - DeleteWebAuthnAuthenticatorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebAuthnAuthenticatorResponse
   */
  async deleteWebAuthnAuthenticatorWithOptions(request: $_model.DeleteWebAuthnAuthenticatorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebAuthnAuthenticatorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticatorId)) {
      query["AuthenticatorId"] = request.authenticatorId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWebAuthnAuthenticator",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebAuthnAuthenticatorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWebAuthnAuthenticatorResponse({}));
  }

  /**
   * 删除指定WebAuthn认证器名称
   * 
   * @param request - DeleteWebAuthnAuthenticatorRequest
   * @returns DeleteWebAuthnAuthenticatorResponse
   */
  async deleteWebAuthnAuthenticator(request: $_model.DeleteWebAuthnAuthenticatorRequest): Promise<$_model.DeleteWebAuthnAuthenticatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebAuthnAuthenticatorWithOptions(request, runtime);
  }

  /**
   * Disables an enabled Employee Identity and Access Management (EIAM) application. All features of the EIAM application cannot be used if you disable the EIAM application.
   * 
   * @remarks
   * All features of the EIAM application cannot be used if you disable the EIAM application, such as single sign-on (SSO) and account synchronization. Make sure that you acknowledge the risks of the delete operation.
   * 
   * @param request - DisableApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationResponse
   */
  async disableApplicationWithOptions(request: $_model.DisableApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationResponse({}));
  }

  /**
   * Disables an enabled Employee Identity and Access Management (EIAM) application. All features of the EIAM application cannot be used if you disable the EIAM application.
   * 
   * @remarks
   * All features of the EIAM application cannot be used if you disable the EIAM application, such as single sign-on (SSO) and account synchronization. Make sure that you acknowledge the risks of the delete operation.
   * 
   * @param request - DisableApplicationRequest
   * @returns DisableApplicationResponse
   */
  async disableApplication(request: $_model.DisableApplicationRequest): Promise<$_model.DisableApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationWithOptions(request, runtime);
  }

  /**
   * Disables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationApiInvokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationApiInvokeResponse
   */
  async disableApplicationApiInvokeWithOptions(request: $_model.DisableApplicationApiInvokeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationApiInvokeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationApiInvoke",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationApiInvokeResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationApiInvokeResponse({}));
  }

  /**
   * Disables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationApiInvokeRequest
   * @returns DisableApplicationApiInvokeResponse
   */
  async disableApplicationApiInvoke(request: $_model.DisableApplicationApiInvokeRequest): Promise<$_model.DisableApplicationApiInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationApiInvokeWithOptions(request, runtime);
  }

  /**
   * Disables a client key of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationClientSecretResponse
   */
  async disableApplicationClientSecretWithOptions(request: $_model.DisableApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationClientSecretResponse({}));
  }

  /**
   * Disables a client key of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationClientSecretRequest
   * @returns DisableApplicationClientSecretResponse
   */
  async disableApplicationClientSecret(request: $_model.DisableApplicationClientSecretRequest): Promise<$_model.DisableApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * 禁用应用联邦凭证
   * 
   * @param request - DisableApplicationFederatedCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationFederatedCredentialResponse
   */
  async disableApplicationFederatedCredentialWithOptions(request: $_model.DisableApplicationFederatedCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationFederatedCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationFederatedCredentialId)) {
      query["ApplicationFederatedCredentialId"] = request.applicationFederatedCredentialId;
    }

    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationFederatedCredential",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationFederatedCredentialResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationFederatedCredentialResponse({}));
  }

  /**
   * 禁用应用联邦凭证
   * 
   * @param request - DisableApplicationFederatedCredentialRequest
   * @returns DisableApplicationFederatedCredentialResponse
   */
  async disableApplicationFederatedCredential(request: $_model.DisableApplicationFederatedCredentialRequest): Promise<$_model.DisableApplicationFederatedCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationFederatedCredentialWithOptions(request, runtime);
  }

  /**
   * 禁用M2M Client 能力
   * 
   * @param request - DisableApplicationM2MClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationM2MClientResponse
   */
  async disableApplicationM2MClientWithOptions(request: $_model.DisableApplicationM2MClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationM2MClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationM2MClient",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationM2MClientResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationM2MClientResponse({}));
  }

  /**
   * 禁用M2M Client 能力
   * 
   * @param request - DisableApplicationM2MClientRequest
   * @returns DisableApplicationM2MClientResponse
   */
  async disableApplicationM2MClient(request: $_model.DisableApplicationM2MClientRequest): Promise<$_model.DisableApplicationM2MClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationM2MClientWithOptions(request, runtime);
  }

  /**
   * Disables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - DisableApplicationProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationProvisioningResponse
   */
  async disableApplicationProvisioningWithOptions(request: $_model.DisableApplicationProvisioningRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationProvisioningResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationProvisioning",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationProvisioningResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationProvisioningResponse({}));
  }

  /**
   * Disables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - DisableApplicationProvisioningRequest
   * @returns DisableApplicationProvisioningResponse
   */
  async disableApplicationProvisioning(request: $_model.DisableApplicationProvisioningRequest): Promise<$_model.DisableApplicationProvisioningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationProvisioningWithOptions(request, runtime);
  }

  /**
   * 禁用ResourceServer能力
   * 
   * @param request - DisableApplicationResourceServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationResourceServerResponse
   */
  async disableApplicationResourceServerWithOptions(request: $_model.DisableApplicationResourceServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationResourceServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationResourceServer",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationResourceServerResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationResourceServerResponse({}));
  }

  /**
   * 禁用ResourceServer能力
   * 
   * @param request - DisableApplicationResourceServerRequest
   * @returns DisableApplicationResourceServerResponse
   */
  async disableApplicationResourceServer(request: $_model.DisableApplicationResourceServerRequest): Promise<$_model.DisableApplicationResourceServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationResourceServerWithOptions(request, runtime);
  }

  /**
   * Disables the single sign-on (SSO) feature for an Employee Identity and Access Management (EIAM) application. This way, employees cannot log on to the application by using SSO.
   * 
   * @param request - DisableApplicationSsoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationSsoResponse
   */
  async disableApplicationSsoWithOptions(request: $_model.DisableApplicationSsoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationSsoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationSso",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationSsoResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationSsoResponse({}));
  }

  /**
   * Disables the single sign-on (SSO) feature for an Employee Identity and Access Management (EIAM) application. This way, employees cannot log on to the application by using SSO.
   * 
   * @param request - DisableApplicationSsoRequest
   * @returns DisableApplicationSsoResponse
   */
  async disableApplicationSso(request: $_model.DisableApplicationSsoRequest): Promise<$_model.DisableApplicationSsoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationSsoWithOptions(request, runtime);
  }

  /**
   * 禁用应用Token
   * 
   * @param request - DisableApplicationTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationTokenResponse
   */
  async disableApplicationTokenWithOptions(request: $_model.DisableApplicationTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationTokenId)) {
      query["ApplicationTokenId"] = request.applicationTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationTokenResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationTokenResponse({}));
  }

  /**
   * 禁用应用Token
   * 
   * @param request - DisableApplicationTokenRequest
   * @returns DisableApplicationTokenResponse
   */
  async disableApplicationToken(request: $_model.DisableApplicationTokenRequest): Promise<$_model.DisableApplicationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationTokenWithOptions(request, runtime);
  }

  /**
   * 禁用授权规则
   * 
   * @param request - DisableAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAuthorizationRuleResponse
   */
  async disableAuthorizationRuleWithOptions(request: $_model.DisableAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.DisableAuthorizationRuleResponse({}));
  }

  /**
   * 禁用授权规则
   * 
   * @param request - DisableAuthorizationRuleRequest
   * @returns DisableAuthorizationRuleResponse
   */
  async disableAuthorizationRule(request: $_model.DisableAuthorizationRuleRequest): Promise<$_model.DisableAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 禁用品牌
   * 
   * @param request - DisableBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableBrandResponse
   */
  async disableBrandWithOptions(request: $_model.DisableBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableBrandResponse>(await this.callApi(params, req, runtime), new $_model.DisableBrandResponse({}));
  }

  /**
   * 禁用品牌
   * 
   * @param request - DisableBrandRequest
   * @returns DisableBrandResponse
   */
  async disableBrand(request: $_model.DisableBrandRequest): Promise<$_model.DisableBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableBrandWithOptions(request, runtime);
  }

  /**
   * 禁用指定的应用ClientPublicKey
   * 
   * @param request - DisableClientPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableClientPublicKeyResponse
   */
  async disableClientPublicKeyWithOptions(request: $_model.DisableClientPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableClientPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientPublicKeyId)) {
      query["ClientPublicKeyId"] = request.clientPublicKeyId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableClientPublicKey",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableClientPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.DisableClientPublicKeyResponse({}));
  }

  /**
   * 禁用指定的应用ClientPublicKey
   * 
   * @param request - DisableClientPublicKeyRequest
   * @returns DisableClientPublicKeyResponse
   */
  async disableClientPublicKey(request: $_model.DisableClientPublicKeyRequest): Promise<$_model.DisableClientPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableClientPublicKeyWithOptions(request, runtime);
  }

  /**
   * 禁用云角色
   * 
   * @param request - DisableCloudAccountRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableCloudAccountRoleResponse
   */
  async disableCloudAccountRoleWithOptions(request: $_model.DisableCloudAccountRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableCloudAccountRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cloudAccountId)) {
      query["CloudAccountId"] = request.cloudAccountId;
    }

    if (!$dara.isNull(request.cloudAccountRoleId)) {
      query["CloudAccountRoleId"] = request.cloudAccountRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableCloudAccountRole",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableCloudAccountRoleResponse>(await this.callApi(params, req, runtime), new $_model.DisableCloudAccountRoleResponse({}));
  }

  /**
   * 禁用云角色
   * 
   * @param request - DisableCloudAccountRoleRequest
   * @returns DisableCloudAccountRoleResponse
   */
  async disableCloudAccountRole(request: $_model.DisableCloudAccountRoleRequest): Promise<$_model.DisableCloudAccountRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableCloudAccountRoleWithOptions(request, runtime);
  }

  /**
   * Disable Conditional Access Policy
   * 
   * @remarks
   * When changing a conditional access policy from an enabled state to a disabled state, the policy will no longer intercept. Please confirm that you are aware of the potential risks associated with this action.
   * 
   * @param request - DisableConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableConditionalAccessPolicyResponse
   */
  async disableConditionalAccessPolicyWithOptions(request: $_model.DisableConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DisableConditionalAccessPolicyResponse({}));
  }

  /**
   * Disable Conditional Access Policy
   * 
   * @remarks
   * When changing a conditional access policy from an enabled state to a disabled state, the policy will no longer intercept. Please confirm that you are aware of the potential risks associated with this action.
   * 
   * @param request - DisableConditionalAccessPolicyRequest
   * @returns DisableConditionalAccessPolicyResponse
   */
  async disableConditionalAccessPolicy(request: $_model.DisableConditionalAccessPolicyRequest): Promise<$_model.DisableConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 禁用字段
   * 
   * @param request - DisableCustomFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableCustomFieldResponse
   */
  async disableCustomFieldWithOptions(request: $_model.DisableCustomFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableCustomFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fieldId)) {
      query["FieldId"] = request.fieldId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableCustomField",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableCustomFieldResponse>(await this.callApi(params, req, runtime), new $_model.DisableCustomFieldResponse({}));
  }

  /**
   * 禁用字段
   * 
   * @param request - DisableCustomFieldRequest
   * @returns DisableCustomFieldResponse
   */
  async disableCustomField(request: $_model.DisableCustomFieldRequest): Promise<$_model.DisableCustomFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableCustomFieldWithOptions(request, runtime);
  }

  /**
   * 禁用自定义条款
   * 
   * @param request - DisableCustomPrivacyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableCustomPrivacyPolicyResponse
   */
  async disableCustomPrivacyPolicyWithOptions(request: $_model.DisableCustomPrivacyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableCustomPrivacyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customPrivacyPolicyId)) {
      query["CustomPrivacyPolicyId"] = request.customPrivacyPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableCustomPrivacyPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableCustomPrivacyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DisableCustomPrivacyPolicyResponse({}));
  }

  /**
   * 禁用自定义条款
   * 
   * @param request - DisableCustomPrivacyPolicyRequest
   * @returns DisableCustomPrivacyPolicyResponse
   */
  async disableCustomPrivacyPolicy(request: $_model.DisableCustomPrivacyPolicyRequest): Promise<$_model.DisableCustomPrivacyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableCustomPrivacyPolicyWithOptions(request, runtime);
  }

  /**
   * Disables a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. After the proxy token is disabled, the domain name may not be used as expected.
   * 
   * @param request - DisableDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDomainProxyTokenResponse
   */
  async disableDomainProxyTokenWithOptions(request: $_model.DisableDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new $_model.DisableDomainProxyTokenResponse({}));
  }

  /**
   * Disables a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. After the proxy token is disabled, the domain name may not be used as expected.
   * 
   * @param request - DisableDomainProxyTokenRequest
   * @returns DisableDomainProxyTokenResponse
   */
  async disableDomainProxyToken(request: $_model.DisableDomainProxyTokenRequest): Promise<$_model.DisableDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * 禁用联邦凭证提供方
   * 
   * @param request - DisableFederatedCredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableFederatedCredentialProviderResponse
   */
  async disableFederatedCredentialProviderWithOptions(request: $_model.DisableFederatedCredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableFederatedCredentialProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.federatedCredentialProviderId)) {
      query["FederatedCredentialProviderId"] = request.federatedCredentialProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableFederatedCredentialProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableFederatedCredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.DisableFederatedCredentialProviderResponse({}));
  }

  /**
   * 禁用联邦凭证提供方
   * 
   * @param request - DisableFederatedCredentialProviderRequest
   * @returns DisableFederatedCredentialProviderResponse
   */
  async disableFederatedCredentialProvider(request: $_model.DisableFederatedCredentialProviderRequest): Promise<$_model.DisableFederatedCredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableFederatedCredentialProviderWithOptions(request, runtime);
  }

  /**
   * 禁用高级配置
   * 
   * @param request - DisableIdentityProviderAdvancedAbilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableIdentityProviderAdvancedAbilityResponse
   */
  async disableIdentityProviderAdvancedAbilityWithOptions(request: $_model.DisableIdentityProviderAdvancedAbilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableIdentityProviderAdvancedAbilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableIdentityProviderAdvancedAbility",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableIdentityProviderAdvancedAbilityResponse>(await this.callApi(params, req, runtime), new $_model.DisableIdentityProviderAdvancedAbilityResponse({}));
  }

  /**
   * 禁用高级配置
   * 
   * @param request - DisableIdentityProviderAdvancedAbilityRequest
   * @returns DisableIdentityProviderAdvancedAbilityResponse
   */
  async disableIdentityProviderAdvancedAbility(request: $_model.DisableIdentityProviderAdvancedAbilityRequest): Promise<$_model.DisableIdentityProviderAdvancedAbilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableIdentityProviderAdvancedAbilityWithOptions(request, runtime);
  }

  /**
   * 禁用认证
   * 
   * @param request - DisableIdentityProviderAuthnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableIdentityProviderAuthnResponse
   */
  async disableIdentityProviderAuthnWithOptions(request: $_model.DisableIdentityProviderAuthnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableIdentityProviderAuthnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableIdentityProviderAuthn",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableIdentityProviderAuthnResponse>(await this.callApi(params, req, runtime), new $_model.DisableIdentityProviderAuthnResponse({}));
  }

  /**
   * 禁用认证
   * 
   * @param request - DisableIdentityProviderAuthnRequest
   * @returns DisableIdentityProviderAuthnResponse
   */
  async disableIdentityProviderAuthn(request: $_model.DisableIdentityProviderAuthnRequest): Promise<$_model.DisableIdentityProviderAuthnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableIdentityProviderAuthnWithOptions(request, runtime);
  }

  /**
   * Disable identity provider synchronization
   * 
   * @param request - DisableIdentityProviderUdPullRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableIdentityProviderUdPullResponse
   */
  async disableIdentityProviderUdPullWithOptions(request: $_model.DisableIdentityProviderUdPullRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableIdentityProviderUdPullResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableIdentityProviderUdPull",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableIdentityProviderUdPullResponse>(await this.callApi(params, req, runtime), new $_model.DisableIdentityProviderUdPullResponse({}));
  }

  /**
   * Disable identity provider synchronization
   * 
   * @param request - DisableIdentityProviderUdPullRequest
   * @returns DisableIdentityProviderUdPullResponse
   */
  async disableIdentityProviderUdPull(request: $_model.DisableIdentityProviderUdPullRequest): Promise<$_model.DisableIdentityProviderUdPullResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableIdentityProviderUdPullWithOptions(request, runtime);
  }

  /**
   * Disables the feature of automatically redirecting the initial domain name to the default domain name for an Employee Identity and Access Management (EIAM) instance. After the feature is disabled, users who visit the portal page by using the initial domain name are not redirected to the default domain name.
   * 
   * @param request - DisableInitDomainAutoRedirectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableInitDomainAutoRedirectResponse
   */
  async disableInitDomainAutoRedirectWithOptions(request: $_model.DisableInitDomainAutoRedirectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableInitDomainAutoRedirectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableInitDomainAutoRedirect",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableInitDomainAutoRedirectResponse>(await this.callApi(params, req, runtime), new $_model.DisableInitDomainAutoRedirectResponse({}));
  }

  /**
   * Disables the feature of automatically redirecting the initial domain name to the default domain name for an Employee Identity and Access Management (EIAM) instance. After the feature is disabled, users who visit the portal page by using the initial domain name are not redirected to the default domain name.
   * 
   * @param request - DisableInitDomainAutoRedirectRequest
   * @returns DisableInitDomainAutoRedirectResponse
   */
  async disableInitDomainAutoRedirect(request: $_model.DisableInitDomainAutoRedirectRequest): Promise<$_model.DisableInitDomainAutoRedirectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableInitDomainAutoRedirectWithOptions(request, runtime);
  }

  /**
   * 禁用内部认证源
   * 
   * @param request - DisableInternalAuthenticationSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableInternalAuthenticationSourceResponse
   */
  async disableInternalAuthenticationSourceWithOptions(request: $_model.DisableInternalAuthenticationSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableInternalAuthenticationSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationSourceId)) {
      query["AuthenticationSourceId"] = request.authenticationSourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableInternalAuthenticationSource",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableInternalAuthenticationSourceResponse>(await this.callApi(params, req, runtime), new $_model.DisableInternalAuthenticationSourceResponse({}));
  }

  /**
   * 禁用内部认证源
   * 
   * @param request - DisableInternalAuthenticationSourceRequest
   * @returns DisableInternalAuthenticationSourceResponse
   */
  async disableInternalAuthenticationSource(request: $_model.DisableInternalAuthenticationSourceRequest): Promise<$_model.DisableInternalAuthenticationSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableInternalAuthenticationSourceWithOptions(request, runtime);
  }

  /**
   * 禁用资源服务器自定义主体
   * 
   * @param request - DisableResourceServerCustomSubjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableResourceServerCustomSubjectResponse
   */
  async disableResourceServerCustomSubjectWithOptions(request: $_model.DisableResourceServerCustomSubjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableResourceServerCustomSubjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableResourceServerCustomSubject",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableResourceServerCustomSubjectResponse>(await this.callApi(params, req, runtime), new $_model.DisableResourceServerCustomSubjectResponse({}));
  }

  /**
   * 禁用资源服务器自定义主体
   * 
   * @param request - DisableResourceServerCustomSubjectRequest
   * @returns DisableResourceServerCustomSubjectResponse
   */
  async disableResourceServerCustomSubject(request: $_model.DisableResourceServerCustomSubjectRequest): Promise<$_model.DisableResourceServerCustomSubjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableResourceServerCustomSubjectWithOptions(request, runtime);
  }

  /**
   * Disables an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account. If the account is disabled, a success message is returned.
   * 
   * @param request - DisableUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableUserResponse
   */
  async disableUserWithOptions(request: $_model.DisableUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableUserResponse>(await this.callApi(params, req, runtime), new $_model.DisableUserResponse({}));
  }

  /**
   * Disables an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account. If the account is disabled, a success message is returned.
   * 
   * @param request - DisableUserRequest
   * @returns DisableUserResponse
   */
  async disableUser(request: $_model.DisableUserRequest): Promise<$_model.DisableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableUserWithOptions(request, runtime);
  }

  /**
   * Enables a disabled Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationResponse
   */
  async enableApplicationWithOptions(request: $_model.EnableApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationResponse({}));
  }

  /**
   * Enables a disabled Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationRequest
   * @returns EnableApplicationResponse
   */
  async enableApplication(request: $_model.EnableApplicationRequest): Promise<$_model.EnableApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationWithOptions(request, runtime);
  }

  /**
   * Enables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationApiInvokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationApiInvokeResponse
   */
  async enableApplicationApiInvokeWithOptions(request: $_model.EnableApplicationApiInvokeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationApiInvokeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationApiInvoke",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationApiInvokeResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationApiInvokeResponse({}));
  }

  /**
   * Enables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationApiInvokeRequest
   * @returns EnableApplicationApiInvokeResponse
   */
  async enableApplicationApiInvoke(request: $_model.EnableApplicationApiInvokeRequest): Promise<$_model.EnableApplicationApiInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationApiInvokeWithOptions(request, runtime);
  }

  /**
   * Enables the client key of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationClientSecretResponse
   */
  async enableApplicationClientSecretWithOptions(request: $_model.EnableApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationClientSecretResponse({}));
  }

  /**
   * Enables the client key of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationClientSecretRequest
   * @returns EnableApplicationClientSecretResponse
   */
  async enableApplicationClientSecret(request: $_model.EnableApplicationClientSecretRequest): Promise<$_model.EnableApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * 启用应用联邦凭证
   * 
   * @param request - EnableApplicationFederatedCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationFederatedCredentialResponse
   */
  async enableApplicationFederatedCredentialWithOptions(request: $_model.EnableApplicationFederatedCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationFederatedCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationFederatedCredentialId)) {
      query["ApplicationFederatedCredentialId"] = request.applicationFederatedCredentialId;
    }

    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationFederatedCredential",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationFederatedCredentialResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationFederatedCredentialResponse({}));
  }

  /**
   * 启用应用联邦凭证
   * 
   * @param request - EnableApplicationFederatedCredentialRequest
   * @returns EnableApplicationFederatedCredentialResponse
   */
  async enableApplicationFederatedCredential(request: $_model.EnableApplicationFederatedCredentialRequest): Promise<$_model.EnableApplicationFederatedCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationFederatedCredentialWithOptions(request, runtime);
  }

  /**
   * 启用M2M Client 能力
   * 
   * @param request - EnableApplicationM2MClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationM2MClientResponse
   */
  async enableApplicationM2MClientWithOptions(request: $_model.EnableApplicationM2MClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationM2MClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationM2MClient",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationM2MClientResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationM2MClientResponse({}));
  }

  /**
   * 启用M2M Client 能力
   * 
   * @param request - EnableApplicationM2MClientRequest
   * @returns EnableApplicationM2MClientResponse
   */
  async enableApplicationM2MClient(request: $_model.EnableApplicationM2MClientRequest): Promise<$_model.EnableApplicationM2MClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationM2MClientWithOptions(request, runtime);
  }

  /**
   * Enables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationProvisioningResponse
   */
  async enableApplicationProvisioningWithOptions(request: $_model.EnableApplicationProvisioningRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationProvisioningResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationProvisioning",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationProvisioningResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationProvisioningResponse({}));
  }

  /**
   * Enables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationProvisioningRequest
   * @returns EnableApplicationProvisioningResponse
   */
  async enableApplicationProvisioning(request: $_model.EnableApplicationProvisioningRequest): Promise<$_model.EnableApplicationProvisioningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationProvisioningWithOptions(request, runtime);
  }

  /**
   * 启用ResourceServer能力
   * 
   * @param request - EnableApplicationResourceServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationResourceServerResponse
   */
  async enableApplicationResourceServerWithOptions(request: $_model.EnableApplicationResourceServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationResourceServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationResourceServer",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationResourceServerResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationResourceServerResponse({}));
  }

  /**
   * 启用ResourceServer能力
   * 
   * @param request - EnableApplicationResourceServerRequest
   * @returns EnableApplicationResourceServerResponse
   */
  async enableApplicationResourceServer(request: $_model.EnableApplicationResourceServerRequest): Promise<$_model.EnableApplicationResourceServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationResourceServerWithOptions(request, runtime);
  }

  /**
   * Enables the single sign-on (SSO) feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationSsoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationSsoResponse
   */
  async enableApplicationSsoWithOptions(request: $_model.EnableApplicationSsoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationSsoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationSso",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationSsoResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationSsoResponse({}));
  }

  /**
   * Enables the single sign-on (SSO) feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationSsoRequest
   * @returns EnableApplicationSsoResponse
   */
  async enableApplicationSso(request: $_model.EnableApplicationSsoRequest): Promise<$_model.EnableApplicationSsoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationSsoWithOptions(request, runtime);
  }

  /**
   * 启用应用Token
   * 
   * @param request - EnableApplicationTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationTokenResponse
   */
  async enableApplicationTokenWithOptions(request: $_model.EnableApplicationTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationTokenId)) {
      query["ApplicationTokenId"] = request.applicationTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationTokenResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationTokenResponse({}));
  }

  /**
   * 启用应用Token
   * 
   * @param request - EnableApplicationTokenRequest
   * @returns EnableApplicationTokenResponse
   */
  async enableApplicationToken(request: $_model.EnableApplicationTokenRequest): Promise<$_model.EnableApplicationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationTokenWithOptions(request, runtime);
  }

  /**
   * 启用授权规则
   * 
   * @param request - EnableAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAuthorizationRuleResponse
   */
  async enableAuthorizationRuleWithOptions(request: $_model.EnableAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.EnableAuthorizationRuleResponse({}));
  }

  /**
   * 启用授权规则
   * 
   * @param request - EnableAuthorizationRuleRequest
   * @returns EnableAuthorizationRuleResponse
   */
  async enableAuthorizationRule(request: $_model.EnableAuthorizationRuleRequest): Promise<$_model.EnableAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 启用品牌
   * 
   * @param request - EnableBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableBrandResponse
   */
  async enableBrandWithOptions(request: $_model.EnableBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableBrandResponse>(await this.callApi(params, req, runtime), new $_model.EnableBrandResponse({}));
  }

  /**
   * 启用品牌
   * 
   * @param request - EnableBrandRequest
   * @returns EnableBrandResponse
   */
  async enableBrand(request: $_model.EnableBrandRequest): Promise<$_model.EnableBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableBrandWithOptions(request, runtime);
  }

  /**
   * 启用指定的应用ClientPublicKey
   * 
   * @param request - EnableClientPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableClientPublicKeyResponse
   */
  async enableClientPublicKeyWithOptions(request: $_model.EnableClientPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableClientPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientPublicKeyId)) {
      query["ClientPublicKeyId"] = request.clientPublicKeyId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableClientPublicKey",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableClientPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.EnableClientPublicKeyResponse({}));
  }

  /**
   * 启用指定的应用ClientPublicKey
   * 
   * @param request - EnableClientPublicKeyRequest
   * @returns EnableClientPublicKeyResponse
   */
  async enableClientPublicKey(request: $_model.EnableClientPublicKeyRequest): Promise<$_model.EnableClientPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableClientPublicKeyWithOptions(request, runtime);
  }

  /**
   * 启用云角色
   * 
   * @param request - EnableCloudAccountRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCloudAccountRoleResponse
   */
  async enableCloudAccountRoleWithOptions(request: $_model.EnableCloudAccountRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableCloudAccountRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cloudAccountId)) {
      query["CloudAccountId"] = request.cloudAccountId;
    }

    if (!$dara.isNull(request.cloudAccountRoleId)) {
      query["CloudAccountRoleId"] = request.cloudAccountRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableCloudAccountRole",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableCloudAccountRoleResponse>(await this.callApi(params, req, runtime), new $_model.EnableCloudAccountRoleResponse({}));
  }

  /**
   * 启用云角色
   * 
   * @param request - EnableCloudAccountRoleRequest
   * @returns EnableCloudAccountRoleResponse
   */
  async enableCloudAccountRole(request: $_model.EnableCloudAccountRoleRequest): Promise<$_model.EnableCloudAccountRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableCloudAccountRoleWithOptions(request, runtime);
  }

  /**
   * Enable Conditional Access Policy
   * 
   * @remarks
   * When changing the status of a conditional access policy from enabled to disabled, the policy will no longer intercept. Please confirm that you are aware of the potential risks associated with this action.
   * 
   * @param request - EnableConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableConditionalAccessPolicyResponse
   */
  async enableConditionalAccessPolicyWithOptions(request: $_model.EnableConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.EnableConditionalAccessPolicyResponse({}));
  }

  /**
   * Enable Conditional Access Policy
   * 
   * @remarks
   * When changing the status of a conditional access policy from enabled to disabled, the policy will no longer intercept. Please confirm that you are aware of the potential risks associated with this action.
   * 
   * @param request - EnableConditionalAccessPolicyRequest
   * @returns EnableConditionalAccessPolicyResponse
   */
  async enableConditionalAccessPolicy(request: $_model.EnableConditionalAccessPolicyRequest): Promise<$_model.EnableConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 启用字段
   * 
   * @param request - EnableCustomFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCustomFieldResponse
   */
  async enableCustomFieldWithOptions(request: $_model.EnableCustomFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableCustomFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fieldId)) {
      query["FieldId"] = request.fieldId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableCustomField",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableCustomFieldResponse>(await this.callApi(params, req, runtime), new $_model.EnableCustomFieldResponse({}));
  }

  /**
   * 启用字段
   * 
   * @param request - EnableCustomFieldRequest
   * @returns EnableCustomFieldResponse
   */
  async enableCustomField(request: $_model.EnableCustomFieldRequest): Promise<$_model.EnableCustomFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableCustomFieldWithOptions(request, runtime);
  }

  /**
   * 启用自定义条款
   * 
   * @param request - EnableCustomPrivacyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCustomPrivacyPolicyResponse
   */
  async enableCustomPrivacyPolicyWithOptions(request: $_model.EnableCustomPrivacyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableCustomPrivacyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customPrivacyPolicyId)) {
      query["CustomPrivacyPolicyId"] = request.customPrivacyPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableCustomPrivacyPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableCustomPrivacyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.EnableCustomPrivacyPolicyResponse({}));
  }

  /**
   * 启用自定义条款
   * 
   * @param request - EnableCustomPrivacyPolicyRequest
   * @returns EnableCustomPrivacyPolicyResponse
   */
  async enableCustomPrivacyPolicy(request: $_model.EnableCustomPrivacyPolicyRequest): Promise<$_model.EnableCustomPrivacyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableCustomPrivacyPolicyWithOptions(request, runtime);
  }

  /**
   * Enables a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. The proxy token is used to verify the security of the domain name.
   * 
   * @param request - EnableDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDomainProxyTokenResponse
   */
  async enableDomainProxyTokenWithOptions(request: $_model.EnableDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new $_model.EnableDomainProxyTokenResponse({}));
  }

  /**
   * Enables a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. The proxy token is used to verify the security of the domain name.
   * 
   * @param request - EnableDomainProxyTokenRequest
   * @returns EnableDomainProxyTokenResponse
   */
  async enableDomainProxyToken(request: $_model.EnableDomainProxyTokenRequest): Promise<$_model.EnableDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * 启用联邦凭证提供方
   * 
   * @param request - EnableFederatedCredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableFederatedCredentialProviderResponse
   */
  async enableFederatedCredentialProviderWithOptions(request: $_model.EnableFederatedCredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableFederatedCredentialProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.federatedCredentialProviderId)) {
      query["FederatedCredentialProviderId"] = request.federatedCredentialProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableFederatedCredentialProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableFederatedCredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.EnableFederatedCredentialProviderResponse({}));
  }

  /**
   * 启用联邦凭证提供方
   * 
   * @param request - EnableFederatedCredentialProviderRequest
   * @returns EnableFederatedCredentialProviderResponse
   */
  async enableFederatedCredentialProvider(request: $_model.EnableFederatedCredentialProviderRequest): Promise<$_model.EnableFederatedCredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableFederatedCredentialProviderWithOptions(request, runtime);
  }

  /**
   * 启用高级配置
   * 
   * @param request - EnableIdentityProviderAdvancedAbilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableIdentityProviderAdvancedAbilityResponse
   */
  async enableIdentityProviderAdvancedAbilityWithOptions(request: $_model.EnableIdentityProviderAdvancedAbilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableIdentityProviderAdvancedAbilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableIdentityProviderAdvancedAbility",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableIdentityProviderAdvancedAbilityResponse>(await this.callApi(params, req, runtime), new $_model.EnableIdentityProviderAdvancedAbilityResponse({}));
  }

  /**
   * 启用高级配置
   * 
   * @param request - EnableIdentityProviderAdvancedAbilityRequest
   * @returns EnableIdentityProviderAdvancedAbilityResponse
   */
  async enableIdentityProviderAdvancedAbility(request: $_model.EnableIdentityProviderAdvancedAbilityRequest): Promise<$_model.EnableIdentityProviderAdvancedAbilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableIdentityProviderAdvancedAbilityWithOptions(request, runtime);
  }

  /**
   * 启用认证
   * 
   * @param request - EnableIdentityProviderAuthnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableIdentityProviderAuthnResponse
   */
  async enableIdentityProviderAuthnWithOptions(request: $_model.EnableIdentityProviderAuthnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableIdentityProviderAuthnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableIdentityProviderAuthn",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableIdentityProviderAuthnResponse>(await this.callApi(params, req, runtime), new $_model.EnableIdentityProviderAuthnResponse({}));
  }

  /**
   * 启用认证
   * 
   * @param request - EnableIdentityProviderAuthnRequest
   * @returns EnableIdentityProviderAuthnResponse
   */
  async enableIdentityProviderAuthn(request: $_model.EnableIdentityProviderAuthnRequest): Promise<$_model.EnableIdentityProviderAuthnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableIdentityProviderAuthnWithOptions(request, runtime);
  }

  /**
   * Enable identity provider synchronization.
   * 
   * @param request - EnableIdentityProviderUdPullRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableIdentityProviderUdPullResponse
   */
  async enableIdentityProviderUdPullWithOptions(request: $_model.EnableIdentityProviderUdPullRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableIdentityProviderUdPullResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableIdentityProviderUdPull",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableIdentityProviderUdPullResponse>(await this.callApi(params, req, runtime), new $_model.EnableIdentityProviderUdPullResponse({}));
  }

  /**
   * Enable identity provider synchronization.
   * 
   * @param request - EnableIdentityProviderUdPullRequest
   * @returns EnableIdentityProviderUdPullResponse
   */
  async enableIdentityProviderUdPull(request: $_model.EnableIdentityProviderUdPullRequest): Promise<$_model.EnableIdentityProviderUdPullResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableIdentityProviderUdPullWithOptions(request, runtime);
  }

  /**
   * Enables the feature of automatically redirecting the initial domain name to the default domain name for an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - EnableInitDomainAutoRedirectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInitDomainAutoRedirectResponse
   */
  async enableInitDomainAutoRedirectWithOptions(request: $_model.EnableInitDomainAutoRedirectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableInitDomainAutoRedirectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableInitDomainAutoRedirect",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableInitDomainAutoRedirectResponse>(await this.callApi(params, req, runtime), new $_model.EnableInitDomainAutoRedirectResponse({}));
  }

  /**
   * Enables the feature of automatically redirecting the initial domain name to the default domain name for an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - EnableInitDomainAutoRedirectRequest
   * @returns EnableInitDomainAutoRedirectResponse
   */
  async enableInitDomainAutoRedirect(request: $_model.EnableInitDomainAutoRedirectRequest): Promise<$_model.EnableInitDomainAutoRedirectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableInitDomainAutoRedirectWithOptions(request, runtime);
  }

  /**
   * 启用内部认证源
   * 
   * @param request - EnableInternalAuthenticationSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInternalAuthenticationSourceResponse
   */
  async enableInternalAuthenticationSourceWithOptions(request: $_model.EnableInternalAuthenticationSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableInternalAuthenticationSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationSourceId)) {
      query["AuthenticationSourceId"] = request.authenticationSourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableInternalAuthenticationSource",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableInternalAuthenticationSourceResponse>(await this.callApi(params, req, runtime), new $_model.EnableInternalAuthenticationSourceResponse({}));
  }

  /**
   * 启用内部认证源
   * 
   * @param request - EnableInternalAuthenticationSourceRequest
   * @returns EnableInternalAuthenticationSourceResponse
   */
  async enableInternalAuthenticationSource(request: $_model.EnableInternalAuthenticationSourceRequest): Promise<$_model.EnableInternalAuthenticationSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableInternalAuthenticationSourceWithOptions(request, runtime);
  }

  /**
   * 启用资源服务器自定义主体
   * 
   * @param request - EnableResourceServerCustomSubjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableResourceServerCustomSubjectResponse
   */
  async enableResourceServerCustomSubjectWithOptions(request: $_model.EnableResourceServerCustomSubjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableResourceServerCustomSubjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableResourceServerCustomSubject",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableResourceServerCustomSubjectResponse>(await this.callApi(params, req, runtime), new $_model.EnableResourceServerCustomSubjectResponse({}));
  }

  /**
   * 启用资源服务器自定义主体
   * 
   * @param request - EnableResourceServerCustomSubjectRequest
   * @returns EnableResourceServerCustomSubjectResponse
   */
  async enableResourceServerCustomSubject(request: $_model.EnableResourceServerCustomSubjectRequest): Promise<$_model.EnableResourceServerCustomSubjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableResourceServerCustomSubjectWithOptions(request, runtime);
  }

  /**
   * Enables an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - EnableUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableUserResponse
   */
  async enableUserWithOptions(request: $_model.EnableUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableUserResponse>(await this.callApi(params, req, runtime), new $_model.EnableUserResponse({}));
  }

  /**
   * Enables an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - EnableUserRequest
   * @returns EnableUserResponse
   */
  async enableUser(request: $_model.EnableUserRequest): Promise<$_model.EnableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableUserWithOptions(request, runtime);
  }

  /**
   * 解析IdP Metadata信息。
   * 
   * @param request - ExecIdentityProviderMetadataUrlResolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecIdentityProviderMetadataUrlResolutionResponse
   */
  async execIdentityProviderMetadataUrlResolutionWithOptions(request: $_model.ExecIdentityProviderMetadataUrlResolutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecIdentityProviderMetadataUrlResolutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.oidcIssuer)) {
      query["OidcIssuer"] = request.oidcIssuer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecIdentityProviderMetadataUrlResolution",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecIdentityProviderMetadataUrlResolutionResponse>(await this.callApi(params, req, runtime), new $_model.ExecIdentityProviderMetadataUrlResolutionResponse({}));
  }

  /**
   * 解析IdP Metadata信息。
   * 
   * @param request - ExecIdentityProviderMetadataUrlResolutionRequest
   * @returns ExecIdentityProviderMetadataUrlResolutionResponse
   */
  async execIdentityProviderMetadataUrlResolution(request: $_model.ExecIdentityProviderMetadataUrlResolutionRequest): Promise<$_model.ExecIdentityProviderMetadataUrlResolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.execIdentityProviderMetadataUrlResolutionWithOptions(request, runtime);
  }

  /**
   * 生成文件导入结果下载地址
   * 
   * @param request - GenerateDownloadUrlForSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateDownloadUrlForSynchronizationJobResponse
   */
  async generateDownloadUrlForSynchronizationJobWithOptions(request: $_model.GenerateDownloadUrlForSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateDownloadUrlForSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateDownloadUrlForSynchronizationJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateDownloadUrlForSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.GenerateDownloadUrlForSynchronizationJobResponse({}));
  }

  /**
   * 生成文件导入结果下载地址
   * 
   * @param request - GenerateDownloadUrlForSynchronizationJobRequest
   * @returns GenerateDownloadUrlForSynchronizationJobResponse
   */
  async generateDownloadUrlForSynchronizationJob(request: $_model.GenerateDownloadUrlForSynchronizationJobRequest): Promise<$_model.GenerateDownloadUrlForSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateDownloadUrlForSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * 生成文件导入模板
   * 
   * @param request - GenerateFileImportTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateFileImportTemplateResponse
   */
  async generateFileImportTemplateWithOptions(request: $_model.GenerateFileImportTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateFileImportTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateFileImportTemplate",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateFileImportTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GenerateFileImportTemplateResponse({}));
  }

  /**
   * 生成文件导入模板
   * 
   * @param request - GenerateFileImportTemplateRequest
   * @returns GenerateFileImportTemplateResponse
   */
  async generateFileImportTemplate(request: $_model.GenerateFileImportTemplateRequest): Promise<$_model.GenerateFileImportTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateFileImportTemplateWithOptions(request, runtime);
  }

  /**
   * 生成 Oauth Token
   * 
   * @param request - GenerateOauthTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateOauthTokenResponse
   */
  async generateOauthTokenWithOptions(request: $_model.GenerateOauthTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateOauthTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.audience)) {
      query["Audience"] = request.audience;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scopeValues)) {
      query["ScopeValues"] = request.scopeValues;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateOauthToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateOauthTokenResponse>(await this.callApi(params, req, runtime), new $_model.GenerateOauthTokenResponse({}));
  }

  /**
   * 生成 Oauth Token
   * 
   * @param request - GenerateOauthTokenRequest
   * @returns GenerateOauthTokenResponse
   */
  async generateOauthToken(request: $_model.GenerateOauthTokenRequest): Promise<$_model.GenerateOauthTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateOauthTokenWithOptions(request, runtime);
  }

  /**
   * 获取上传认证
   * 
   * @param request - GenerateUploadAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateUploadAuthResponse
   */
  async generateUploadAuthWithOptions(request: $_model.GenerateUploadAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateUploadAuthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.purpose)) {
      query["Purpose"] = request.purpose;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateUploadAuth",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateUploadAuthResponse>(await this.callApi(params, req, runtime), new $_model.GenerateUploadAuthResponse({}));
  }

  /**
   * 获取上传认证
   * 
   * @param request - GenerateUploadAuthRequest
   * @returns GenerateUploadAuthResponse
   */
  async generateUploadAuth(request: $_model.GenerateUploadAuthRequest): Promise<$_model.GenerateUploadAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateUploadAuthWithOptions(request, runtime);
  }

  /**
   * Queries the details of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(request: $_model.GetApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplication",
      version: "2021-12-01",
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
   * Queries the details of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: $_model.GetApplicationRequest): Promise<$_model.GetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * 获取应用高阶配置
   * 
   * @param request - GetApplicationAdvancedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationAdvancedConfigResponse
   */
  async getApplicationAdvancedConfigWithOptions(request: $_model.GetApplicationAdvancedConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationAdvancedConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationAdvancedConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationAdvancedConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationAdvancedConfigResponse({}));
  }

  /**
   * 获取应用高阶配置
   * 
   * @param request - GetApplicationAdvancedConfigRequest
   * @returns GetApplicationAdvancedConfigResponse
   */
  async getApplicationAdvancedConfig(request: $_model.GetApplicationAdvancedConfigRequest): Promise<$_model.GetApplicationAdvancedConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationAdvancedConfigWithOptions(request, runtime);
  }

  /**
   * 获取应用联邦凭证
   * 
   * @param request - GetApplicationFederatedCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationFederatedCredentialResponse
   */
  async getApplicationFederatedCredentialWithOptions(request: $_model.GetApplicationFederatedCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationFederatedCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationFederatedCredentialId)) {
      query["ApplicationFederatedCredentialId"] = request.applicationFederatedCredentialId;
    }

    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationFederatedCredential",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationFederatedCredentialResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationFederatedCredentialResponse({}));
  }

  /**
   * 获取应用联邦凭证
   * 
   * @param request - GetApplicationFederatedCredentialRequest
   * @returns GetApplicationFederatedCredentialResponse
   */
  async getApplicationFederatedCredential(request: $_model.GetApplicationFederatedCredentialRequest): Promise<$_model.GetApplicationFederatedCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationFederatedCredentialWithOptions(request, runtime);
  }

  /**
   * Queries the permissions of the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationGrantScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationGrantScopeResponse
   */
  async getApplicationGrantScopeWithOptions(request: $_model.GetApplicationGrantScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationGrantScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationGrantScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationGrantScopeResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationGrantScopeResponse({}));
  }

  /**
   * Queries the permissions of the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationGrantScopeRequest
   * @returns GetApplicationGrantScopeResponse
   */
  async getApplicationGrantScope(request: $_model.GetApplicationGrantScopeRequest): Promise<$_model.GetApplicationGrantScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationGrantScopeWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetApplicationProvisioningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisioningConfigResponse
   */
  async getApplicationProvisioningConfigWithOptions(request: $_model.GetApplicationProvisioningConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationProvisioningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationProvisioningConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationProvisioningConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationProvisioningConfigResponse({}));
  }

  /**
   * Queries the configuration of the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetApplicationProvisioningConfigRequest
   * @returns GetApplicationProvisioningConfigResponse
   */
  async getApplicationProvisioningConfig(request: $_model.GetApplicationProvisioningConfigRequest): Promise<$_model.GetApplicationProvisioningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationProvisioningConfigWithOptions(request, runtime);
  }

  /**
   * Queries the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - GetApplicationProvisioningScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScopeWithOptions(request: $_model.GetApplicationProvisioningScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationProvisioningScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationProvisioningScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationProvisioningScopeResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationProvisioningScopeResponse({}));
  }

  /**
   * Queries the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - GetApplicationProvisioningScopeRequest
   * @returns GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScope(request: $_model.GetApplicationProvisioningScopeRequest): Promise<$_model.GetApplicationProvisioningScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationProvisioningScopeWithOptions(request, runtime);
  }

  /**
   * 查询指定应用同步配置
   * 
   * @param request - GetApplicationProvisioningUserPrimaryOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisioningUserPrimaryOrganizationalUnitResponse
   */
  async getApplicationProvisioningUserPrimaryOrganizationalUnitWithOptions(request: $_model.GetApplicationProvisioningUserPrimaryOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationProvisioningUserPrimaryOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationProvisioningUserPrimaryOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationProvisioningUserPrimaryOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationProvisioningUserPrimaryOrganizationalUnitResponse({}));
  }

  /**
   * 查询指定应用同步配置
   * 
   * @param request - GetApplicationProvisioningUserPrimaryOrganizationalUnitRequest
   * @returns GetApplicationProvisioningUserPrimaryOrganizationalUnitResponse
   */
  async getApplicationProvisioningUserPrimaryOrganizationalUnit(request: $_model.GetApplicationProvisioningUserPrimaryOrganizationalUnitRequest): Promise<$_model.GetApplicationProvisioningUserPrimaryOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationProvisioningUserPrimaryOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * 获取角色信息
   * 
   * @param request - GetApplicationRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationRoleResponse
   */
  async getApplicationRoleWithOptions(request: $_model.GetApplicationRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationRole",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationRoleResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationRoleResponse({}));
  }

  /**
   * 获取角色信息
   * 
   * @param request - GetApplicationRoleRequest
   * @returns GetApplicationRoleResponse
   */
  async getApplicationRole(request: $_model.GetApplicationRoleRequest): Promise<$_model.GetApplicationRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationRoleWithOptions(request, runtime);
  }

  /**
   * Queries the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetApplicationSsoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationSsoConfigResponse
   */
  async getApplicationSsoConfigWithOptions(request: $_model.GetApplicationSsoConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationSsoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationSsoConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationSsoConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationSsoConfigResponse({}));
  }

  /**
   * Queries the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetApplicationSsoConfigRequest
   * @returns GetApplicationSsoConfigResponse
   */
  async getApplicationSsoConfig(request: $_model.GetApplicationSsoConfigRequest): Promise<$_model.GetApplicationSsoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationSsoConfigWithOptions(request, runtime);
  }

  /**
   * 获取应用模板信息
   * 
   * @param request - GetApplicationTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationTemplateResponse
   */
  async getApplicationTemplateWithOptions(request: $_model.GetApplicationTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationTemplateId)) {
      query["ApplicationTemplateId"] = request.applicationTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationTemplate",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationTemplateResponse({}));
  }

  /**
   * 获取应用模板信息
   * 
   * @param request - GetApplicationTemplateRequest
   * @returns GetApplicationTemplateResponse
   */
  async getApplicationTemplate(request: $_model.GetApplicationTemplateRequest): Promise<$_model.GetApplicationTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationTemplateWithOptions(request, runtime);
  }

  /**
   * 获取授权资源信息
   * 
   * @param request - GetAuthorizationResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthorizationResourceResponse
   */
  async getAuthorizationResourceWithOptions(request: $_model.GetAuthorizationResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuthorizationResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationResourceId)) {
      query["AuthorizationResourceId"] = request.authorizationResourceId;
    }

    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuthorizationResource",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuthorizationResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetAuthorizationResourceResponse({}));
  }

  /**
   * 获取授权资源信息
   * 
   * @param request - GetAuthorizationResourceRequest
   * @returns GetAuthorizationResourceResponse
   */
  async getAuthorizationResource(request: $_model.GetAuthorizationResourceRequest): Promise<$_model.GetAuthorizationResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuthorizationResourceWithOptions(request, runtime);
  }

  /**
   * 获取授权规则信息
   * 
   * @param request - GetAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthorizationRuleResponse
   */
  async getAuthorizationRuleWithOptions(request: $_model.GetAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetAuthorizationRuleResponse({}));
  }

  /**
   * 获取授权规则信息
   * 
   * @param request - GetAuthorizationRuleRequest
   * @returns GetAuthorizationRuleResponse
   */
  async getAuthorizationRule(request: $_model.GetAuthorizationRuleRequest): Promise<$_model.GetAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 获取品牌详情
   * 
   * @param request - GetBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBrandResponse
   */
  async getBrandWithOptions(request: $_model.GetBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBrandResponse>(await this.callApi(params, req, runtime), new $_model.GetBrandResponse({}));
  }

  /**
   * 获取品牌详情
   * 
   * @param request - GetBrandRequest
   * @returns GetBrandResponse
   */
  async getBrand(request: $_model.GetBrandRequest): Promise<$_model.GetBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBrandWithOptions(request, runtime);
  }

  /**
   * 查询指定应用ClientPublicKey
   * 
   * @param request - GetClientPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientPublicKeyResponse
   */
  async getClientPublicKeyWithOptions(request: $_model.GetClientPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClientPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientPublicKeyId)) {
      query["ClientPublicKeyId"] = request.clientPublicKeyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClientPublicKey",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClientPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetClientPublicKeyResponse({}));
  }

  /**
   * 查询指定应用ClientPublicKey
   * 
   * @param request - GetClientPublicKeyRequest
   * @returns GetClientPublicKeyResponse
   */
  async getClientPublicKey(request: $_model.GetClientPublicKeyRequest): Promise<$_model.GetClientPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientPublicKeyWithOptions(request, runtime);
  }

  /**
   * 获取云账号
   * 
   * @param request - GetCloudAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCloudAccountResponse
   */
  async getCloudAccountWithOptions(request: $_model.GetCloudAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCloudAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudAccountId)) {
      query["CloudAccountId"] = request.cloudAccountId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCloudAccount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCloudAccountResponse>(await this.callApi(params, req, runtime), new $_model.GetCloudAccountResponse({}));
  }

  /**
   * 获取云账号
   * 
   * @param request - GetCloudAccountRequest
   * @returns GetCloudAccountResponse
   */
  async getCloudAccount(request: $_model.GetCloudAccountRequest): Promise<$_model.GetCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCloudAccountWithOptions(request, runtime);
  }

  /**
   * 获取云角色
   * 
   * @param request - GetCloudAccountRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCloudAccountRoleResponse
   */
  async getCloudAccountRoleWithOptions(request: $_model.GetCloudAccountRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCloudAccountRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudAccountId)) {
      query["CloudAccountId"] = request.cloudAccountId;
    }

    if (!$dara.isNull(request.cloudAccountRoleId)) {
      query["CloudAccountRoleId"] = request.cloudAccountRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCloudAccountRole",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCloudAccountRoleResponse>(await this.callApi(params, req, runtime), new $_model.GetCloudAccountRoleResponse({}));
  }

  /**
   * 获取云角色
   * 
   * @param request - GetCloudAccountRoleRequest
   * @returns GetCloudAccountRoleResponse
   */
  async getCloudAccountRole(request: $_model.GetCloudAccountRoleRequest): Promise<$_model.GetCloudAccountRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCloudAccountRoleWithOptions(request, runtime);
  }

  /**
   * Get Conditional Access Policy
   * 
   * @remarks
   * Query Conditional Access Policy
   * 
   * @param request - GetConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConditionalAccessPolicyResponse
   */
  async getConditionalAccessPolicyWithOptions(request: $_model.GetConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetConditionalAccessPolicyResponse({}));
  }

  /**
   * Get Conditional Access Policy
   * 
   * @remarks
   * Query Conditional Access Policy
   * 
   * @param request - GetConditionalAccessPolicyRequest
   * @returns GetConditionalAccessPolicyResponse
   */
  async getConditionalAccessPolicy(request: $_model.GetConditionalAccessPolicyRequest): Promise<$_model.GetConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 获取扩展字段信息
   * 
   * @param request - GetCustomFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomFieldResponse
   */
  async getCustomFieldWithOptions(request: $_model.GetCustomFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fieldId)) {
      query["FieldId"] = request.fieldId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomField",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomFieldResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomFieldResponse({}));
  }

  /**
   * 获取扩展字段信息
   * 
   * @param request - GetCustomFieldRequest
   * @returns GetCustomFieldResponse
   */
  async getCustomField(request: $_model.GetCustomFieldRequest): Promise<$_model.GetCustomFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomFieldWithOptions(request, runtime);
  }

  /**
   * 获取自定义条款
   * 
   * @param request - GetCustomPrivacyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomPrivacyPolicyResponse
   */
  async getCustomPrivacyPolicyWithOptions(request: $_model.GetCustomPrivacyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomPrivacyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customPrivacyPolicyId)) {
      query["CustomPrivacyPolicyId"] = request.customPrivacyPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomPrivacyPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomPrivacyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomPrivacyPolicyResponse({}));
  }

  /**
   * 获取自定义条款
   * 
   * @param request - GetCustomPrivacyPolicyRequest
   * @returns GetCustomPrivacyPolicyResponse
   */
  async getCustomPrivacyPolicy(request: $_model.GetCustomPrivacyPolicyRequest): Promise<$_model.GetCustomPrivacyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomPrivacyPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the information about a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - GetDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
   */
  async getDomainWithOptions(request: $_model.GetDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainResponse>(await this.callApi(params, req, runtime), new $_model.GetDomainResponse({}));
  }

  /**
   * Queries the information about a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - GetDomainRequest
   * @returns GetDomainResponse
   */
  async getDomain(request: $_model.GetDomainRequest): Promise<$_model.GetDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDomainWithOptions(request, runtime);
  }

  /**
   * Queries the domain name system (DNS) challenge records of a domain name of an Employee Identity and Access Management (EIAM) instance. The generated records are used to verify the ownership of the domain name.
   * 
   * @param request - GetDomainDnsChallengeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainDnsChallengeResponse
   */
  async getDomainDnsChallengeWithOptions(request: $_model.GetDomainDnsChallengeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainDnsChallengeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomainDnsChallenge",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainDnsChallengeResponse>(await this.callApi(params, req, runtime), new $_model.GetDomainDnsChallengeResponse({}));
  }

  /**
   * Queries the domain name system (DNS) challenge records of a domain name of an Employee Identity and Access Management (EIAM) instance. The generated records are used to verify the ownership of the domain name.
   * 
   * @param request - GetDomainDnsChallengeRequest
   * @returns GetDomainDnsChallengeResponse
   */
  async getDomainDnsChallenge(request: $_model.GetDomainDnsChallengeRequest): Promise<$_model.GetDomainDnsChallengeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDomainDnsChallengeWithOptions(request, runtime);
  }

  /**
   * 获取联邦凭证提供方
   * 
   * @param request - GetFederatedCredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFederatedCredentialProviderResponse
   */
  async getFederatedCredentialProviderWithOptions(request: $_model.GetFederatedCredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFederatedCredentialProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.federatedCredentialProviderId)) {
      query["FederatedCredentialProviderId"] = request.federatedCredentialProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFederatedCredentialProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFederatedCredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetFederatedCredentialProviderResponse({}));
  }

  /**
   * 获取联邦凭证提供方
   * 
   * @param request - GetFederatedCredentialProviderRequest
   * @returns GetFederatedCredentialProviderResponse
   */
  async getFederatedCredentialProvider(request: $_model.GetFederatedCredentialProviderRequest): Promise<$_model.GetFederatedCredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFederatedCredentialProviderWithOptions(request, runtime);
  }

  /**
   * Queries the forgot password configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetForgetPasswordConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetForgetPasswordConfigurationResponse
   */
  async getForgetPasswordConfigurationWithOptions(request: $_model.GetForgetPasswordConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetForgetPasswordConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetForgetPasswordConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetForgetPasswordConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetForgetPasswordConfigurationResponse({}));
  }

  /**
   * Queries the forgot password configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetForgetPasswordConfigurationRequest
   * @returns GetForgetPasswordConfigurationResponse
   */
  async getForgetPasswordConfiguration(request: $_model.GetForgetPasswordConfigurationRequest): Promise<$_model.GetForgetPasswordConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getForgetPasswordConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(request: $_model.GetGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2021-12-01",
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
   * Queries the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: $_model.GetGroupRequest): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * Get identity provider
   * 
   * @param request - GetIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProviderWithOptions(request: $_model.GetIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityProvider",
      version: "2021-12-01",
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
   * Get identity provider
   * 
   * @param request - GetIdentityProviderRequest
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProvider(request: $_model.GetIdentityProviderRequest): Promise<$_model.GetIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 获取高级配置信息
   * 
   * @param request - GetIdentityProviderAdvancedConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderAdvancedConfigurationResponse
   */
  async getIdentityProviderAdvancedConfigurationWithOptions(request: $_model.GetIdentityProviderAdvancedConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderAdvancedConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityProviderAdvancedConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdentityProviderAdvancedConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderAdvancedConfigurationResponse({}));
  }

  /**
   * 获取高级配置信息
   * 
   * @param request - GetIdentityProviderAdvancedConfigurationRequest
   * @returns GetIdentityProviderAdvancedConfigurationResponse
   */
  async getIdentityProviderAdvancedConfiguration(request: $_model.GetIdentityProviderAdvancedConfigurationRequest): Promise<$_model.GetIdentityProviderAdvancedConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderAdvancedConfigurationWithOptions(request, runtime);
  }

  /**
   * 获取IdP检查任务
   * 
   * @param request - GetIdentityProviderStatusCheckJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderStatusCheckJobResponse
   */
  async getIdentityProviderStatusCheckJobWithOptions(request: $_model.GetIdentityProviderStatusCheckJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderStatusCheckJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.identityProviderStatusCheckJobId)) {
      query["IdentityProviderStatusCheckJobId"] = request.identityProviderStatusCheckJobId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityProviderStatusCheckJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdentityProviderStatusCheckJobResponse>(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderStatusCheckJobResponse({}));
  }

  /**
   * 获取IdP检查任务
   * 
   * @param request - GetIdentityProviderStatusCheckJobRequest
   * @returns GetIdentityProviderStatusCheckJobResponse
   */
  async getIdentityProviderStatusCheckJob(request: $_model.GetIdentityProviderStatusCheckJobRequest): Promise<$_model.GetIdentityProviderStatusCheckJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderStatusCheckJobWithOptions(request, runtime);
  }

  /**
   * Get IdP Inbound Synchronization Configuration Information
   * 
   * @param request - GetIdentityProviderUdPullConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderUdPullConfigurationResponse
   */
  async getIdentityProviderUdPullConfigurationWithOptions(request: $_model.GetIdentityProviderUdPullConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderUdPullConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityProviderUdPullConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdentityProviderUdPullConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderUdPullConfigurationResponse({}));
  }

  /**
   * Get IdP Inbound Synchronization Configuration Information
   * 
   * @param request - GetIdentityProviderUdPullConfigurationRequest
   * @returns GetIdentityProviderUdPullConfigurationResponse
   */
  async getIdentityProviderUdPullConfiguration(request: $_model.GetIdentityProviderUdPullConfigurationRequest): Promise<$_model.GetIdentityProviderUdPullConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderUdPullConfigurationWithOptions(request, runtime);
  }

  /**
   * 获取IdP同步出配置
   * 
   * @param request - GetIdentityProviderUdPushConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderUdPushConfigurationResponse
   */
  async getIdentityProviderUdPushConfigurationWithOptions(request: $_model.GetIdentityProviderUdPushConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderUdPushConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityProviderUdPushConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdentityProviderUdPushConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderUdPushConfigurationResponse({}));
  }

  /**
   * 获取IdP同步出配置
   * 
   * @param request - GetIdentityProviderUdPushConfigurationRequest
   * @returns GetIdentityProviderUdPushConfigurationResponse
   */
  async getIdentityProviderUdPushConfiguration(request: $_model.GetIdentityProviderUdPushConfigurationRequest): Promise<$_model.GetIdentityProviderUdPushConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderUdPushConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: $_model.GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Queries the information of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * 查询实例控制项
   * 
   * @param request - GetInstanceControlConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceControlConfigurationResponse
   */
  async getInstanceControlConfigurationWithOptions(request: $_model.GetInstanceControlConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceControlConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceControlConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceControlConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceControlConfigurationResponse({}));
  }

  /**
   * 查询实例控制项
   * 
   * @param request - GetInstanceControlConfigurationRequest
   * @returns GetInstanceControlConfigurationResponse
   */
  async getInstanceControlConfiguration(request: $_model.GetInstanceControlConfigurationRequest): Promise<$_model.GetInstanceControlConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceControlConfigurationWithOptions(request, runtime);
  }

  /**
   * 获取实例语言、时区信息
   * 
   * @param request - GetInstanceGlobalizationConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceGlobalizationConfigResponse
   */
  async getInstanceGlobalizationConfigWithOptions(request: $_model.GetInstanceGlobalizationConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceGlobalizationConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceGlobalizationConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceGlobalizationConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceGlobalizationConfigResponse({}));
  }

  /**
   * 获取实例语言、时区信息
   * 
   * @param request - GetInstanceGlobalizationConfigRequest
   * @returns GetInstanceGlobalizationConfigResponse
   */
  async getInstanceGlobalizationConfig(request: $_model.GetInstanceGlobalizationConfigRequest): Promise<$_model.GetInstanceGlobalizationConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceGlobalizationConfigWithOptions(request, runtime);
  }

  /**
   * Query the currently effective License information of the instance
   * 
   * @remarks
   * Please ensure that your current instance is no longer in use. When the EIAM instance is deleted, all related data will be deleted.
   * 
   * @param request - GetInstanceLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceLicenseResponse
   */
  async getInstanceLicenseWithOptions(request: $_model.GetInstanceLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceLicense",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceLicenseResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceLicenseResponse({}));
  }

  /**
   * Query the currently effective License information of the instance
   * 
   * @remarks
   * Please ensure that your current instance is no longer in use. When the EIAM instance is deleted, all related data will be deleted.
   * 
   * @param request - GetInstanceLicenseRequest
   * @returns GetInstanceLicenseResponse
   */
  async getInstanceLicense(request: $_model.GetInstanceLicenseRequest): Promise<$_model.GetInstanceLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceLicenseWithOptions(request, runtime);
  }

  /**
   * 获取一级模块下，所有模块信息
   * 
   * @param request - GetInstanceModuleInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceModuleInfoResponse
   */
  async getInstanceModuleInfoWithOptions(request: $_model.GetInstanceModuleInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceModuleInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleKey)) {
      query["ModuleKey"] = request.moduleKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceModuleInfo",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceModuleInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceModuleInfoResponse({}));
  }

  /**
   * 获取一级模块下，所有模块信息
   * 
   * @param request - GetInstanceModuleInfoRequest
   * @returns GetInstanceModuleInfoResponse
   */
  async getInstanceModuleInfo(request: $_model.GetInstanceModuleInfoRequest): Promise<$_model.GetInstanceModuleInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceModuleInfoWithOptions(request, runtime);
  }

  /**
   * 获取实例单一类型的Quota
   * 
   * @param request - GetInstanceQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceQuotaResponse
   */
  async getInstanceQuotaWithOptions(request: $_model.GetInstanceQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.quotaKey)) {
      query["QuotaKey"] = request.quotaKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceQuota",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceQuotaResponse({}));
  }

  /**
   * 获取实例单一类型的Quota
   * 
   * @param request - GetInstanceQuotaRequest
   * @returns GetInstanceQuotaResponse
   */
  async getInstanceQuota(request: $_model.GetInstanceQuotaRequest): Promise<$_model.GetInstanceQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceQuotaWithOptions(request, runtime);
  }

  /**
   * 获取实例的试用状态
   * 
   * @param request - GetInstanceTrialStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceTrialStatusResponse
   */
  async getInstanceTrialStatusWithOptions(request: $_model.GetInstanceTrialStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceTrialStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceTrialStatus",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceTrialStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceTrialStatusResponse({}));
  }

  /**
   * 获取实例的试用状态
   * 
   * @param request - GetInstanceTrialStatusRequest
   * @returns GetInstanceTrialStatusResponse
   */
  async getInstanceTrialStatus(request: $_model.GetInstanceTrialStatusRequest): Promise<$_model.GetInstanceTrialStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceTrialStatusWithOptions(request, runtime);
  }

  /**
   * 获取品牌登录后跳转应用
   * 
   * @param request - GetLoginRedirectApplicationForBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginRedirectApplicationForBrandResponse
   */
  async getLoginRedirectApplicationForBrandWithOptions(request: $_model.GetLoginRedirectApplicationForBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoginRedirectApplicationForBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoginRedirectApplicationForBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLoginRedirectApplicationForBrandResponse>(await this.callApi(params, req, runtime), new $_model.GetLoginRedirectApplicationForBrandResponse({}));
  }

  /**
   * 获取品牌登录后跳转应用
   * 
   * @param request - GetLoginRedirectApplicationForBrandRequest
   * @returns GetLoginRedirectApplicationForBrandResponse
   */
  async getLoginRedirectApplicationForBrand(request: $_model.GetLoginRedirectApplicationForBrandRequest): Promise<$_model.GetLoginRedirectApplicationForBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoginRedirectApplicationForBrandWithOptions(request, runtime);
  }

  /**
   * Get Network Endpoint Information
   * 
   * @param request - GetNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkAccessEndpointResponse
   */
  async getNetworkAccessEndpointWithOptions(request: $_model.GetNetworkAccessEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetworkAccessEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new $_model.GetNetworkAccessEndpointResponse({}));
  }

  /**
   * Get Network Endpoint Information
   * 
   * @param request - GetNetworkAccessEndpointRequest
   * @returns GetNetworkAccessEndpointResponse
   */
  async getNetworkAccessEndpoint(request: $_model.GetNetworkAccessEndpointRequest): Promise<$_model.GetNetworkAccessEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * 获取网络区域对象
   * 
   * @param request - GetNetworkZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkZoneResponse
   */
  async getNetworkZoneWithOptions(request: $_model.GetNetworkZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetworkZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkZoneId)) {
      query["NetworkZoneId"] = request.networkZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkZone",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetworkZoneResponse>(await this.callApi(params, req, runtime), new $_model.GetNetworkZoneResponse({}));
  }

  /**
   * 获取网络区域对象
   * 
   * @param request - GetNetworkZoneRequest
   * @returns GetNetworkZoneResponse
   */
  async getNetworkZone(request: $_model.GetNetworkZoneRequest): Promise<$_model.GetNetworkZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkZoneWithOptions(request, runtime);
  }

  /**
   * Queries the information about an organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrganizationalUnitResponse
   */
  async getOrganizationalUnitWithOptions(request: $_model.GetOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.GetOrganizationalUnitResponse({}));
  }

  /**
   * Queries the information about an organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetOrganizationalUnitRequest
   * @returns GetOrganizationalUnitResponse
   */
  async getOrganizationalUnit(request: $_model.GetOrganizationalUnitRequest): Promise<$_model.GetOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Queries the password complexity configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordComplexityConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordComplexityConfigurationResponse
   */
  async getPasswordComplexityConfigurationWithOptions(request: $_model.GetPasswordComplexityConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordComplexityConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordComplexityConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPasswordComplexityConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetPasswordComplexityConfigurationResponse({}));
  }

  /**
   * Queries the password complexity configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordComplexityConfigurationRequest
   * @returns GetPasswordComplexityConfigurationResponse
   */
  async getPasswordComplexityConfiguration(request: $_model.GetPasswordComplexityConfigurationRequest): Promise<$_model.GetPasswordComplexityConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordComplexityConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password expiration configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordExpirationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordExpirationConfigurationResponse
   */
  async getPasswordExpirationConfigurationWithOptions(request: $_model.GetPasswordExpirationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordExpirationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordExpirationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPasswordExpirationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetPasswordExpirationConfigurationResponse({}));
  }

  /**
   * Queries the password expiration configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordExpirationConfigurationRequest
   * @returns GetPasswordExpirationConfigurationResponse
   */
  async getPasswordExpirationConfiguration(request: $_model.GetPasswordExpirationConfigurationRequest): Promise<$_model.GetPasswordExpirationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordExpirationConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password history configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordHistoryConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordHistoryConfigurationResponse
   */
  async getPasswordHistoryConfigurationWithOptions(request: $_model.GetPasswordHistoryConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordHistoryConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordHistoryConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPasswordHistoryConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetPasswordHistoryConfigurationResponse({}));
  }

  /**
   * Queries the password history configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordHistoryConfigurationRequest
   * @returns GetPasswordHistoryConfigurationResponse
   */
  async getPasswordHistoryConfiguration(request: $_model.GetPasswordHistoryConfigurationRequest): Promise<$_model.GetPasswordHistoryConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordHistoryConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password initialization configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordInitializationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordInitializationConfigurationResponse
   */
  async getPasswordInitializationConfigurationWithOptions(request: $_model.GetPasswordInitializationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordInitializationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordInitializationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPasswordInitializationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetPasswordInitializationConfigurationResponse({}));
  }

  /**
   * Queries the password initialization configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordInitializationConfigurationRequest
   * @returns GetPasswordInitializationConfigurationResponse
   */
  async getPasswordInitializationConfiguration(request: $_model.GetPasswordInitializationConfigurationRequest): Promise<$_model.GetPasswordInitializationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordInitializationConfigurationWithOptions(request, runtime);
  }

  /**
   * 查询指定ResourceServer下的Scope
   * 
   * @param request - GetResourceServerScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceServerScopeResponse
   */
  async getResourceServerScopeWithOptions(request: $_model.GetResourceServerScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceServerScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerScopeId)) {
      query["ResourceServerScopeId"] = request.resourceServerScopeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceServerScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceServerScopeResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceServerScopeResponse({}));
  }

  /**
   * 查询指定ResourceServer下的Scope
   * 
   * @param request - GetResourceServerScopeRequest
   * @returns GetResourceServerScopeResponse
   */
  async getResourceServerScope(request: $_model.GetResourceServerScopeRequest): Promise<$_model.GetResourceServerScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceServerScopeWithOptions(request, runtime);
  }

  /**
   * Queries the information about the root organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetRootOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRootOrganizationalUnitResponse
   */
  async getRootOrganizationalUnitWithOptions(request: $_model.GetRootOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRootOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRootOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRootOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.GetRootOrganizationalUnitResponse({}));
  }

  /**
   * Queries the information about the root organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetRootOrganizationalUnitRequest
   * @returns GetRootOrganizationalUnitResponse
   */
  async getRootOrganizationalUnit(request: $_model.GetRootOrganizationalUnitRequest): Promise<$_model.GetRootOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRootOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * 获取服务Quota
   * 
   * @param request - GetServiceQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceQuotaResponse
   */
  async getServiceQuotaWithOptions(request: $_model.GetServiceQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.quotaType)) {
      query["QuotaType"] = request.quotaType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceQuota",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceQuotaResponse({}));
  }

  /**
   * 获取服务Quota
   * 
   * @param request - GetServiceQuotaRequest
   * @returns GetServiceQuotaResponse
   */
  async getServiceQuota(request: $_model.GetServiceQuotaRequest): Promise<$_model.GetServiceQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceQuotaWithOptions(request, runtime);
  }

  /**
   * Obtains the information about a single synchronization job.
   * 
   * @param request - GetSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSynchronizationJobResponse
   */
  async getSynchronizationJobWithOptions(request: $_model.GetSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSynchronizationJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.GetSynchronizationJobResponse({}));
  }

  /**
   * Obtains the information about a single synchronization job.
   * 
   * @param request - GetSynchronizationJobRequest
   * @returns GetSynchronizationJobResponse
   */
  async getSynchronizationJob(request: $_model.GetSynchronizationJobRequest): Promise<$_model.GetSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Queries the details of an account in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2021-12-01",
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
   * Queries the details of an account in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * 查看调用事件列表
   * 
   * @param request - ListActionTrackEventTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListActionTrackEventTypesResponse
   */
  async listActionTrackEventTypesWithOptions(request: $_model.ListActionTrackEventTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListActionTrackEventTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListActionTrackEventTypes",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListActionTrackEventTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListActionTrackEventTypesResponse({}));
  }

  /**
   * 查看调用事件列表
   * 
   * @param request - ListActionTrackEventTypesRequest
   * @returns ListActionTrackEventTypesResponse
   */
  async listActionTrackEventTypes(request: $_model.ListActionTrackEventTypesRequest): Promise<$_model.ListActionTrackEventTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listActionTrackEventTypesWithOptions(request, runtime);
  }

  /**
   * 分页查询应用下的应用账户列表
   * 
   * @param request - ListApplicationAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationAccountsResponse
   */
  async listApplicationAccountsWithOptions(request: $_model.ListApplicationAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationAccounts",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationAccountsResponse({}));
  }

  /**
   * 分页查询应用下的应用账户列表
   * 
   * @param request - ListApplicationAccountsRequest
   * @returns ListApplicationAccountsResponse
   */
  async listApplicationAccounts(request: $_model.ListApplicationAccountsRequest): Promise<$_model.ListApplicationAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationAccountsWithOptions(request, runtime);
  }

  /**
   * 查询当前应用下指定用户的所有账号
   * 
   * @param request - ListApplicationAccountsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationAccountsForUserResponse
   */
  async listApplicationAccountsForUserWithOptions(request: $_model.ListApplicationAccountsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationAccountsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationAccountsForUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationAccountsForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationAccountsForUserResponse({}));
  }

  /**
   * 查询当前应用下指定用户的所有账号
   * 
   * @param request - ListApplicationAccountsForUserRequest
   * @returns ListApplicationAccountsForUserResponse
   */
  async listApplicationAccountsForUser(request: $_model.ListApplicationAccountsForUserRequest): Promise<$_model.ListApplicationAccountsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationAccountsForUserWithOptions(request, runtime);
  }

  /**
   * Queries all client keys of an Employee Identity and Access Management (EIAM) application. The returned key secret is not masked. If you want to query the key secret that is masked, call the ObtainApplicationClientSecret operation.
   * 
   * @param request - ListApplicationClientSecretsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationClientSecretsResponse
   */
  async listApplicationClientSecretsWithOptions(request: $_model.ListApplicationClientSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationClientSecretsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationClientSecrets",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationClientSecretsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationClientSecretsResponse({}));
  }

  /**
   * Queries all client keys of an Employee Identity and Access Management (EIAM) application. The returned key secret is not masked. If you want to query the key secret that is masked, call the ObtainApplicationClientSecret operation.
   * 
   * @param request - ListApplicationClientSecretsRequest
   * @returns ListApplicationClientSecretsResponse
   */
  async listApplicationClientSecrets(request: $_model.ListApplicationClientSecretsRequest): Promise<$_model.ListApplicationClientSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationClientSecretsWithOptions(request, runtime);
  }

  /**
   * 查询应用联邦凭证列表
   * 
   * @param request - ListApplicationFederatedCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationFederatedCredentialsResponse
   */
  async listApplicationFederatedCredentialsWithOptions(request: $_model.ListApplicationFederatedCredentialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationFederatedCredentialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationFederatedCredentialType)) {
      query["ApplicationFederatedCredentialType"] = request.applicationFederatedCredentialType;
    }

    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationFederatedCredentials",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationFederatedCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationFederatedCredentialsResponse({}));
  }

  /**
   * 查询应用联邦凭证列表
   * 
   * @param request - ListApplicationFederatedCredentialsRequest
   * @returns ListApplicationFederatedCredentialsResponse
   */
  async listApplicationFederatedCredentials(request: $_model.ListApplicationFederatedCredentialsRequest): Promise<$_model.ListApplicationFederatedCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationFederatedCredentialsWithOptions(request, runtime);
  }

  /**
   * 根据联邦凭证提供方查询应用联邦凭证列表
   * 
   * @param request - ListApplicationFederatedCredentialsForProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationFederatedCredentialsForProviderResponse
   */
  async listApplicationFederatedCredentialsForProviderWithOptions(request: $_model.ListApplicationFederatedCredentialsForProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationFederatedCredentialsForProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.federatedCredentialProviderId)) {
      query["FederatedCredentialProviderId"] = request.federatedCredentialProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationFederatedCredentialsForProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationFederatedCredentialsForProviderResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationFederatedCredentialsForProviderResponse({}));
  }

  /**
   * 根据联邦凭证提供方查询应用联邦凭证列表
   * 
   * @param request - ListApplicationFederatedCredentialsForProviderRequest
   * @returns ListApplicationFederatedCredentialsForProviderResponse
   */
  async listApplicationFederatedCredentialsForProvider(request: $_model.ListApplicationFederatedCredentialsForProviderRequest): Promise<$_model.ListApplicationFederatedCredentialsForProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationFederatedCredentialsForProviderWithOptions(request, runtime);
  }

  /**
   * 游标分页查询应用角色
   * 
   * @param request - ListApplicationRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationRolesResponse
   */
  async listApplicationRolesWithOptions(request: $_model.ListApplicationRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListApplicationRoles",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationRolesResponse({}));
  }

  /**
   * 游标分页查询应用角色
   * 
   * @param request - ListApplicationRolesRequest
   * @returns ListApplicationRolesResponse
   */
  async listApplicationRoles(request: $_model.ListApplicationRolesRequest): Promise<$_model.ListApplicationRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationRolesWithOptions(request, runtime);
  }

  /**
   * 应用支持账户同步类型列表
   * 
   * @param request - ListApplicationSupportedProvisionProtocolTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationSupportedProvisionProtocolTypesResponse
   */
  async listApplicationSupportedProvisionProtocolTypesWithOptions(request: $_model.ListApplicationSupportedProvisionProtocolTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationSupportedProvisionProtocolTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationSupportedProvisionProtocolTypes",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationSupportedProvisionProtocolTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationSupportedProvisionProtocolTypesResponse({}));
  }

  /**
   * 应用支持账户同步类型列表
   * 
   * @param request - ListApplicationSupportedProvisionProtocolTypesRequest
   * @returns ListApplicationSupportedProvisionProtocolTypesResponse
   */
  async listApplicationSupportedProvisionProtocolTypes(request: $_model.ListApplicationSupportedProvisionProtocolTypesRequest): Promise<$_model.ListApplicationSupportedProvisionProtocolTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationSupportedProvisionProtocolTypesWithOptions(request, runtime);
  }

  /**
   * 创建应用Token
   * 
   * @param request - ListApplicationTokensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationTokensResponse
   */
  async listApplicationTokensWithOptions(request: $_model.ListApplicationTokensRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationTokensResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationTokenType)) {
      query["ApplicationTokenType"] = request.applicationTokenType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationTokens",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationTokensResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationTokensResponse({}));
  }

  /**
   * 创建应用Token
   * 
   * @param request - ListApplicationTokensRequest
   * @returns ListApplicationTokensResponse
   */
  async listApplicationTokens(request: $_model.ListApplicationTokensRequest): Promise<$_model.ListApplicationTokensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationTokensWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or multiple Employee Identity and Access Management (EIAM) applications by page.
   * 
   * @param request - ListApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
  async listApplicationsWithOptions(request: $_model.ListApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationCreationType)) {
      query["ApplicationCreationType"] = request.applicationCreationType;
    }

    if (!$dara.isNull(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.authorizationType)) {
      query["AuthorizationType"] = request.authorizationType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.m2MClientStatus)) {
      query["M2MClientStatus"] = request.m2MClientStatus;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceServerStatus)) {
      query["ResourceServerStatus"] = request.resourceServerStatus;
    }

    if (!$dara.isNull(request.ssoType)) {
      query["SsoType"] = request.ssoType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplications",
      version: "2021-12-01",
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
   * Queries the information about one or multiple Employee Identity and Access Management (EIAM) applications by page.
   * 
   * @param request - ListApplicationsRequest
   * @returns ListApplicationsResponse
   */
  async listApplications(request: $_model.ListApplicationsRequest): Promise<$_model.ListApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
   * 查询授权规则关联的应用列表
   * 
   * @param request - ListApplicationsForAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForAuthorizationRuleResponse
   */
  async listApplicationsForAuthorizationRuleWithOptions(request: $_model.ListApplicationsForAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsForAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListApplicationsForAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsForAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsForAuthorizationRuleResponse({}));
  }

  /**
   * 查询授权规则关联的应用列表
   * 
   * @param request - ListApplicationsForAuthorizationRuleRequest
   * @returns ListApplicationsForAuthorizationRuleResponse
   */
  async listApplicationsForAuthorizationRule(request: $_model.ListApplicationsForAuthorizationRuleRequest): Promise<$_model.ListApplicationsForAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 查询一个EIAM组可访问的应用列表
   * 
   * @param request - ListApplicationsForGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForGroupResponse
   */
  async listApplicationsForGroupWithOptions(request: $_model.ListApplicationsForGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsForGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsForGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsForGroupResponse({}));
  }

  /**
   * 查询一个EIAM组可访问的应用列表
   * 
   * @param request - ListApplicationsForGroupRequest
   * @returns ListApplicationsForGroupResponse
   */
  async listApplicationsForGroup(request: $_model.ListApplicationsForGroupRequest): Promise<$_model.ListApplicationsForGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForGroupWithOptions(request, runtime);
  }

  /**
   * 获取网络访问端点下的App信息。
   * 
   * @param request - ListApplicationsForNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForNetworkAccessEndpointResponse
   */
  async listApplicationsForNetworkAccessEndpointWithOptions(request: $_model.ListApplicationsForNetworkAccessEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsForNetworkAccessEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsForNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsForNetworkAccessEndpointResponse({}));
  }

  /**
   * 获取网络访问端点下的App信息。
   * 
   * @param request - ListApplicationsForNetworkAccessEndpointRequest
   * @returns ListApplicationsForNetworkAccessEndpointResponse
   */
  async listApplicationsForNetworkAccessEndpoint(request: $_model.ListApplicationsForNetworkAccessEndpointRequest): Promise<$_model.ListApplicationsForNetworkAccessEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * 获取NetworkZone关联的应用列表
   * 
   * @param request - ListApplicationsForNetworkZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForNetworkZoneResponse
   */
  async listApplicationsForNetworkZoneWithOptions(request: $_model.ListApplicationsForNetworkZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsForNetworkZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.networkZoneId)) {
      query["NetworkZoneId"] = request.networkZoneId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForNetworkZone",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsForNetworkZoneResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsForNetworkZoneResponse({}));
  }

  /**
   * 获取NetworkZone关联的应用列表
   * 
   * @param request - ListApplicationsForNetworkZoneRequest
   * @returns ListApplicationsForNetworkZoneResponse
   */
  async listApplicationsForNetworkZone(request: $_model.ListApplicationsForNetworkZoneRequest): Promise<$_model.ListApplicationsForNetworkZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForNetworkZoneWithOptions(request, runtime);
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) organization can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @remarks
   * You can only query the permissions that are directly granted to the EIAM organization by calling the ListApplicationsForOrganizationalUnit operation. You can filter applications by configuring the **ApplicationIds** parameter when you call this operation.
   * 
   * @param request - ListApplicationsForOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForOrganizationalUnitResponse
   */
  async listApplicationsForOrganizationalUnitWithOptions(request: $_model.ListApplicationsForOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsForOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsForOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsForOrganizationalUnitResponse({}));
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) organization can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @remarks
   * You can only query the permissions that are directly granted to the EIAM organization by calling the ListApplicationsForOrganizationalUnit operation. You can filter applications by configuring the **ApplicationIds** parameter when you call this operation.
   * 
   * @param request - ListApplicationsForOrganizationalUnitRequest
   * @returns ListApplicationsForOrganizationalUnitResponse
   */
  async listApplicationsForOrganizationalUnit(request: $_model.ListApplicationsForOrganizationalUnitRequest): Promise<$_model.ListApplicationsForOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) account can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @param request - ListApplicationsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForUserResponse
   */
  async listApplicationsForUserWithOptions(request: $_model.ListApplicationsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsForUserResponse({}));
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) account can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @param request - ListApplicationsForUserRequest
   * @returns ListApplicationsForUserResponse
   */
  async listApplicationsForUser(request: $_model.ListApplicationsForUserRequest): Promise<$_model.ListApplicationsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForUserWithOptions(request, runtime);
  }

  /**
   * 查询授权资源信息列表
   * 
   * @param request - ListAuthorizationResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizationResourcesResponse
   */
  async listAuthorizationResourcesWithOptions(request: $_model.ListAuthorizationResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizationResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListAuthorizationResources",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizationResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizationResourcesResponse({}));
  }

  /**
   * 查询授权资源信息列表
   * 
   * @param request - ListAuthorizationResourcesRequest
   * @returns ListAuthorizationResourcesResponse
   */
  async listAuthorizationResources(request: $_model.ListAuthorizationResourcesRequest): Promise<$_model.ListAuthorizationResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizationResourcesWithOptions(request, runtime);
  }

  /**
   * 查询授权规则信息列表
   * 
   * @param request - ListAuthorizationRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizationRulesResponse
   */
  async listAuthorizationRulesWithOptions(request: $_model.ListAuthorizationRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizationRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListAuthorizationRules",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizationRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizationRulesResponse({}));
  }

  /**
   * 查询授权规则信息列表
   * 
   * @param request - ListAuthorizationRulesRequest
   * @returns ListAuthorizationRulesResponse
   */
  async listAuthorizationRules(request: $_model.ListAuthorizationRulesRequest): Promise<$_model.ListAuthorizationRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizationRulesWithOptions(request, runtime);
  }

  /**
   * 查询应用关联的授权规则信息列表
   * 
   * @param request - ListAuthorizationRulesForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizationRulesForApplicationResponse
   */
  async listAuthorizationRulesForApplicationWithOptions(request: $_model.ListAuthorizationRulesForApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizationRulesForApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListAuthorizationRulesForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizationRulesForApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizationRulesForApplicationResponse({}));
  }

  /**
   * 查询应用关联的授权规则信息列表
   * 
   * @param request - ListAuthorizationRulesForApplicationRequest
   * @returns ListAuthorizationRulesForApplicationResponse
   */
  async listAuthorizationRulesForApplication(request: $_model.ListAuthorizationRulesForApplicationRequest): Promise<$_model.ListAuthorizationRulesForApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizationRulesForApplicationWithOptions(request, runtime);
  }

  /**
   * 查询组关联的授权规则信息列表
   * 
   * @param request - ListAuthorizationRulesForGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizationRulesForGroupResponse
   */
  async listAuthorizationRulesForGroupWithOptions(request: $_model.ListAuthorizationRulesForGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizationRulesForGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListAuthorizationRulesForGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizationRulesForGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizationRulesForGroupResponse({}));
  }

  /**
   * 查询组关联的授权规则信息列表
   * 
   * @param request - ListAuthorizationRulesForGroupRequest
   * @returns ListAuthorizationRulesForGroupResponse
   */
  async listAuthorizationRulesForGroup(request: $_model.ListAuthorizationRulesForGroupRequest): Promise<$_model.ListAuthorizationRulesForGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizationRulesForGroupWithOptions(request, runtime);
  }

  /**
   * 查询用户关联的授权规则信息列表
   * 
   * @param request - ListAuthorizationRulesForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizationRulesForUserResponse
   */
  async listAuthorizationRulesForUserWithOptions(request: $_model.ListAuthorizationRulesForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizationRulesForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListAuthorizationRulesForUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizationRulesForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizationRulesForUserResponse({}));
  }

  /**
   * 查询用户关联的授权规则信息列表
   * 
   * @param request - ListAuthorizationRulesForUserRequest
   * @returns ListAuthorizationRulesForUserResponse
   */
  async listAuthorizationRulesForUser(request: $_model.ListAuthorizationRulesForUserRequest): Promise<$_model.ListAuthorizationRulesForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizationRulesForUserWithOptions(request, runtime);
  }

  /**
   * 获取品牌列表
   * 
   * @param request - ListBrandsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBrandsResponse
   */
  async listBrandsWithOptions(request: $_model.ListBrandsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBrandsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBrands",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBrandsResponse>(await this.callApi(params, req, runtime), new $_model.ListBrandsResponse({}));
  }

  /**
   * 获取品牌列表
   * 
   * @param request - ListBrandsRequest
   * @returns ListBrandsResponse
   */
  async listBrands(request: $_model.ListBrandsRequest): Promise<$_model.ListBrandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBrandsWithOptions(request, runtime);
  }

  /**
   * 查询指定应用所属的全部ClientPublicKey
   * 
   * @param request - ListClientPublicKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientPublicKeysResponse
   */
  async listClientPublicKeysWithOptions(request: $_model.ListClientPublicKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClientPublicKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListClientPublicKeys",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClientPublicKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListClientPublicKeysResponse({}));
  }

  /**
   * 查询指定应用所属的全部ClientPublicKey
   * 
   * @param request - ListClientPublicKeysRequest
   * @returns ListClientPublicKeysResponse
   */
  async listClientPublicKeys(request: $_model.ListClientPublicKeysRequest): Promise<$_model.ListClientPublicKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClientPublicKeysWithOptions(request, runtime);
  }

  /**
   * 查询云角色列表
   * 
   * @param request - ListCloudAccountRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudAccountRolesResponse
   */
  async listCloudAccountRolesWithOptions(request: $_model.ListCloudAccountRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudAccountRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudAccountId)) {
      query["CloudAccountId"] = request.cloudAccountId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListCloudAccountRoles",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudAccountRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudAccountRolesResponse({}));
  }

  /**
   * 查询云角色列表
   * 
   * @param request - ListCloudAccountRolesRequest
   * @returns ListCloudAccountRolesResponse
   */
  async listCloudAccountRoles(request: $_model.ListCloudAccountRolesRequest): Promise<$_model.ListCloudAccountRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudAccountRolesWithOptions(request, runtime);
  }

  /**
   * 查询云账号列表
   * 
   * @param request - ListCloudAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudAccountsResponse
   */
  async listCloudAccountsWithOptions(request: $_model.ListCloudAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListCloudAccounts",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudAccountsResponse({}));
  }

  /**
   * 查询云账号列表
   * 
   * @param request - ListCloudAccountsRequest
   * @returns ListCloudAccountsResponse
   */
  async listCloudAccounts(request: $_model.ListCloudAccountsRequest): Promise<$_model.ListCloudAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudAccountsWithOptions(request, runtime);
  }

  /**
   * List of Conditional Access Policies
   * 
   * @remarks
   * Paginated query for the list of conditional access policies
   * 
   * @param request - ListConditionalAccessPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConditionalAccessPoliciesResponse
   */
  async listConditionalAccessPoliciesWithOptions(request: $_model.ListConditionalAccessPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConditionalAccessPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConditionalAccessPolicies",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConditionalAccessPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListConditionalAccessPoliciesResponse({}));
  }

  /**
   * List of Conditional Access Policies
   * 
   * @remarks
   * Paginated query for the list of conditional access policies
   * 
   * @param request - ListConditionalAccessPoliciesRequest
   * @returns ListConditionalAccessPoliciesResponse
   */
  async listConditionalAccessPolicies(request: $_model.ListConditionalAccessPoliciesRequest): Promise<$_model.ListConditionalAccessPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConditionalAccessPoliciesWithOptions(request, runtime);
  }

  /**
   * 获取应用关联的条件访问策略列表
   * 
   * @param request - ListConditionalAccessPoliciesForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConditionalAccessPoliciesForApplicationResponse
   */
  async listConditionalAccessPoliciesForApplicationWithOptions(request: $_model.ListConditionalAccessPoliciesForApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConditionalAccessPoliciesForApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConditionalAccessPoliciesForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConditionalAccessPoliciesForApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListConditionalAccessPoliciesForApplicationResponse({}));
  }

  /**
   * 获取应用关联的条件访问策略列表
   * 
   * @param request - ListConditionalAccessPoliciesForApplicationRequest
   * @returns ListConditionalAccessPoliciesForApplicationResponse
   */
  async listConditionalAccessPoliciesForApplication(request: $_model.ListConditionalAccessPoliciesForApplicationRequest): Promise<$_model.ListConditionalAccessPoliciesForApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConditionalAccessPoliciesForApplicationWithOptions(request, runtime);
  }

  /**
   * List Conditional Access Policies Associated with Network Areas
   * 
   * @remarks
   * List Conditional Access Policies Associated with Network Zones
   * 
   * @param request - ListConditionalAccessPoliciesForNetworkZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConditionalAccessPoliciesForNetworkZoneResponse
   */
  async listConditionalAccessPoliciesForNetworkZoneWithOptions(request: $_model.ListConditionalAccessPoliciesForNetworkZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConditionalAccessPoliciesForNetworkZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkZoneId)) {
      query["NetworkZoneId"] = request.networkZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConditionalAccessPoliciesForNetworkZone",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConditionalAccessPoliciesForNetworkZoneResponse>(await this.callApi(params, req, runtime), new $_model.ListConditionalAccessPoliciesForNetworkZoneResponse({}));
  }

  /**
   * List Conditional Access Policies Associated with Network Areas
   * 
   * @remarks
   * List Conditional Access Policies Associated with Network Zones
   * 
   * @param request - ListConditionalAccessPoliciesForNetworkZoneRequest
   * @returns ListConditionalAccessPoliciesForNetworkZoneResponse
   */
  async listConditionalAccessPoliciesForNetworkZone(request: $_model.ListConditionalAccessPoliciesForNetworkZoneRequest): Promise<$_model.ListConditionalAccessPoliciesForNetworkZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConditionalAccessPoliciesForNetworkZoneWithOptions(request, runtime);
  }

  /**
   * 获取用户关联的条件访问策略列表
   * 
   * @param request - ListConditionalAccessPoliciesForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConditionalAccessPoliciesForUserResponse
   */
  async listConditionalAccessPoliciesForUserWithOptions(request: $_model.ListConditionalAccessPoliciesForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConditionalAccessPoliciesForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConditionalAccessPoliciesForUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConditionalAccessPoliciesForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListConditionalAccessPoliciesForUserResponse({}));
  }

  /**
   * 获取用户关联的条件访问策略列表
   * 
   * @param request - ListConditionalAccessPoliciesForUserRequest
   * @returns ListConditionalAccessPoliciesForUserResponse
   */
  async listConditionalAccessPoliciesForUser(request: $_model.ListConditionalAccessPoliciesForUserRequest): Promise<$_model.ListConditionalAccessPoliciesForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConditionalAccessPoliciesForUserWithOptions(request, runtime);
  }

  /**
   * 自定义条款列表查询。
   * 
   * @param request - ListCustomPrivacyPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomPrivacyPoliciesResponse
   */
  async listCustomPrivacyPoliciesWithOptions(request: $_model.ListCustomPrivacyPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomPrivacyPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customPrivacyPolicyNameStartsWith)) {
      query["CustomPrivacyPolicyNameStartsWith"] = request.customPrivacyPolicyNameStartsWith;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomPrivacyPolicies",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomPrivacyPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomPrivacyPoliciesResponse({}));
  }

  /**
   * 自定义条款列表查询。
   * 
   * @param request - ListCustomPrivacyPoliciesRequest
   * @returns ListCustomPrivacyPoliciesResponse
   */
  async listCustomPrivacyPolicies(request: $_model.ListCustomPrivacyPoliciesRequest): Promise<$_model.ListCustomPrivacyPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomPrivacyPoliciesWithOptions(request, runtime);
  }

  /**
   * 获取品牌关联资源的资源
   * 
   * @param request - ListCustomPrivacyPoliciesForBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomPrivacyPoliciesForBrandResponse
   */
  async listCustomPrivacyPoliciesForBrandWithOptions(request: $_model.ListCustomPrivacyPoliciesForBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomPrivacyPoliciesForBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomPrivacyPoliciesForBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomPrivacyPoliciesForBrandResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomPrivacyPoliciesForBrandResponse({}));
  }

  /**
   * 获取品牌关联资源的资源
   * 
   * @param request - ListCustomPrivacyPoliciesForBrandRequest
   * @returns ListCustomPrivacyPoliciesForBrandResponse
   */
  async listCustomPrivacyPoliciesForBrand(request: $_model.ListCustomPrivacyPoliciesForBrandRequest): Promise<$_model.ListCustomPrivacyPoliciesForBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomPrivacyPoliciesForBrandWithOptions(request, runtime);
  }

  /**
   * Queries the proxy tokens of a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - ListDomainProxyTokensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainProxyTokensResponse
   */
  async listDomainProxyTokensWithOptions(request: $_model.ListDomainProxyTokensRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainProxyTokensResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomainProxyTokens",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainProxyTokensResponse>(await this.callApi(params, req, runtime), new $_model.ListDomainProxyTokensResponse({}));
  }

  /**
   * Queries the proxy tokens of a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - ListDomainProxyTokensRequest
   * @returns ListDomainProxyTokensResponse
   */
  async listDomainProxyTokens(request: $_model.ListDomainProxyTokensRequest): Promise<$_model.ListDomainProxyTokensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainProxyTokensWithOptions(request, runtime);
  }

  /**
   * Queries a list of domain names of an Employee Identity and Access Management (EIAM) instance. The list contains the initial domain name and custom domain names.
   * 
   * @param request - ListDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: $_model.ListDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListDomainsResponse({}));
  }

  /**
   * Queries a list of domain names of an Employee Identity and Access Management (EIAM) instance. The list contains the initial domain name and custom domain names.
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: $_model.ListDomainsRequest): Promise<$_model.ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the information about Employee Identity and Access Management (EIAM) V1.0 instances or EIAM V2.0 instances.
   * 
   * @param request - ListEiamInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEiamInstancesResponse
   */
  async listEiamInstancesWithOptions(request: $_model.ListEiamInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEiamInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceRegionId)) {
      query["InstanceRegionId"] = request.instanceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEiamInstances",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEiamInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListEiamInstancesResponse({}));
  }

  /**
   * Queries the information about Employee Identity and Access Management (EIAM) V1.0 instances or EIAM V2.0 instances.
   * 
   * @param request - ListEiamInstancesRequest
   * @returns ListEiamInstancesResponse
   */
  async listEiamInstances(request: $_model.ListEiamInstancesRequest): Promise<$_model.ListEiamInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEiamInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the regions in which Employee Identity and Access Management (EIAM) V1.0 instances or EIAM V2.0 instances reside.
   * 
   * @param request - ListEiamRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEiamRegionsResponse
   */
  async listEiamRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListEiamRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListEiamRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEiamRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListEiamRegionsResponse({}));
  }

  /**
   * Queries the regions in which Employee Identity and Access Management (EIAM) V1.0 instances or EIAM V2.0 instances reside.
   * @returns ListEiamRegionsResponse
   */
  async listEiamRegions(): Promise<$_model.ListEiamRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEiamRegionsWithOptions(runtime);
  }

  /**
   * 查看事件列表
   * 
   * @param request - ListEventTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventTypesResponse
   */
  async listEventTypesWithOptions(request: $_model.ListEventTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventTypes",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListEventTypesResponse({}));
  }

  /**
   * 查看事件列表
   * 
   * @param request - ListEventTypesRequest
   * @returns ListEventTypesResponse
   */
  async listEventTypes(request: $_model.ListEventTypesRequest): Promise<$_model.ListEventTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEventTypesWithOptions(request, runtime);
  }

  /**
   * 查询联邦凭证提供方列表
   * 
   * @param request - ListFederatedCredentialProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFederatedCredentialProvidersResponse
   */
  async listFederatedCredentialProvidersWithOptions(request: $_model.ListFederatedCredentialProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFederatedCredentialProvidersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.federatedCredentialProviderName)) {
      query["FederatedCredentialProviderName"] = request.federatedCredentialProviderName;
    }

    if (!$dara.isNull(request.federatedCredentialProviderType)) {
      query["FederatedCredentialProviderType"] = request.federatedCredentialProviderType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFederatedCredentialProviders",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFederatedCredentialProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListFederatedCredentialProvidersResponse({}));
  }

  /**
   * 查询联邦凭证提供方列表
   * 
   * @param request - ListFederatedCredentialProvidersRequest
   * @returns ListFederatedCredentialProvidersResponse
   */
  async listFederatedCredentialProviders(request: $_model.ListFederatedCredentialProvidersRequest): Promise<$_model.ListFederatedCredentialProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFederatedCredentialProvidersWithOptions(request, runtime);
  }

  /**
   * Queries a list of account groups in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - ListGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(request: $_model.ListGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupNameStartsWith)) {
      query["GroupNameStartsWith"] = request.groupNameStartsWith;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroups",
      version: "2021-12-01",
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
   * Queries a list of account groups in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: $_model.ListGroupsRequest): Promise<$_model.ListGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of account groups to which the permissions to access an application are granted. The returned results contain the group IDs. You can call the GetGroup operation to query the information about an account group based on the group ID.
   * 
   * @param request - ListGroupsForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForApplicationResponse
   */
  async listGroupsForApplicationWithOptions(request: $_model.ListGroupsForApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsForApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupsForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsForApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupsForApplicationResponse({}));
  }

  /**
   * Queries a list of account groups to which the permissions to access an application are granted. The returned results contain the group IDs. You can call the GetGroup operation to query the information about an account group based on the group ID.
   * 
   * @param request - ListGroupsForApplicationRequest
   * @returns ListGroupsForApplicationResponse
   */
  async listGroupsForApplication(request: $_model.ListGroupsForApplicationRequest): Promise<$_model.ListGroupsForApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsForApplicationWithOptions(request, runtime);
  }

  /**
   * 查询授权规则关联的组列表
   * 
   * @param request - ListGroupsForAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForAuthorizationRuleResponse
   */
  async listGroupsForAuthorizationRuleWithOptions(request: $_model.ListGroupsForAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsForAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListGroupsForAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsForAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupsForAuthorizationRuleResponse({}));
  }

  /**
   * 查询授权规则关联的组列表
   * 
   * @param request - ListGroupsForAuthorizationRuleRequest
   * @returns ListGroupsForAuthorizationRuleResponse
   */
  async listGroupsForAuthorizationRule(request: $_model.ListGroupsForAuthorizationRuleRequest): Promise<$_model.ListGroupsForAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsForAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 查询ResourceServer授权的组和Scope权限
   * 
   * @param request - ListGroupsForResourceServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForResourceServerResponse
   */
  async listGroupsForResourceServerWithOptions(request: $_model.ListGroupsForResourceServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsForResourceServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListGroupsForResourceServer",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsForResourceServerResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupsForResourceServerResponse({}));
  }

  /**
   * 查询ResourceServer授权的组和Scope权限
   * 
   * @param request - ListGroupsForResourceServerRequest
   * @returns ListGroupsForResourceServerResponse
   */
  async listGroupsForResourceServer(request: $_model.ListGroupsForResourceServerRequest): Promise<$_model.ListGroupsForResourceServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsForResourceServerWithOptions(request, runtime);
  }

  /**
   * Queries a list of account groups to which an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) belongs.
   * 
   * @param request - ListGroupsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUserWithOptions(request: $_model.ListGroupsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupsForUser",
      version: "2021-12-01",
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
   * Queries a list of account groups to which an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) belongs.
   * 
   * @param request - ListGroupsForUserRequest
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUser(request: $_model.ListGroupsForUserRequest): Promise<$_model.ListGroupsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  /**
   * Query the list of identity providers.
   * 
   * @param request - ListIdentityProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProvidersWithOptions(request: $_model.ListIdentityProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdentityProvidersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdentityProviders",
      version: "2021-12-01",
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
   * Query the list of identity providers.
   * 
   * @param request - ListIdentityProvidersRequest
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProviders(request: $_model.ListIdentityProvidersRequest): Promise<$_model.ListIdentityProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdentityProvidersWithOptions(request, runtime);
  }

  /**
   * 获取网络端点下的IdP信息。
   * 
   * @param request - ListIdentityProvidersForNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdentityProvidersForNetworkAccessEndpointResponse
   */
  async listIdentityProvidersForNetworkAccessEndpointWithOptions(request: $_model.ListIdentityProvidersForNetworkAccessEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdentityProvidersForNetworkAccessEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdentityProvidersForNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIdentityProvidersForNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new $_model.ListIdentityProvidersForNetworkAccessEndpointResponse({}));
  }

  /**
   * 获取网络端点下的IdP信息。
   * 
   * @param request - ListIdentityProvidersForNetworkAccessEndpointRequest
   * @returns ListIdentityProvidersForNetworkAccessEndpointResponse
   */
  async listIdentityProvidersForNetworkAccessEndpoint(request: $_model.ListIdentityProvidersForNetworkAccessEndpointRequest): Promise<$_model.ListIdentityProvidersForNetworkAccessEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdentityProvidersForNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the information of one or more Enterprise Identity and Access Management (EIAM) instances of Identity as a Service (IDaaS).
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Queries the information of one or more Enterprise Identity and Access Management (EIAM) instances of Identity as a Service (IDaaS).
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Get a list of regions that support network access endpoints.
   * 
   * @param request - ListNetworkAccessEndpointAvailableRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointAvailableRegionsResponse
   */
  async listNetworkAccessEndpointAvailableRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkAccessEndpointAvailableRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessEndpointAvailableRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkAccessEndpointAvailableRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkAccessEndpointAvailableRegionsResponse({}));
  }

  /**
   * Get a list of regions that support network access endpoints.
   * @returns ListNetworkAccessEndpointAvailableRegionsResponse
   */
  async listNetworkAccessEndpointAvailableRegions(): Promise<$_model.ListNetworkAccessEndpointAvailableRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointAvailableRegionsWithOptions(runtime);
  }

  /**
   * 获取支持NAE的可用区列表
   * 
   * @param request - ListNetworkAccessEndpointAvailableZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointAvailableZonesResponse
   */
  async listNetworkAccessEndpointAvailableZonesWithOptions(request: $_model.ListNetworkAccessEndpointAvailableZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkAccessEndpointAvailableZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.naeRegionId)) {
      query["NaeRegionId"] = request.naeRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessEndpointAvailableZones",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkAccessEndpointAvailableZonesResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkAccessEndpointAvailableZonesResponse({}));
  }

  /**
   * 获取支持NAE的可用区列表
   * 
   * @param request - ListNetworkAccessEndpointAvailableZonesRequest
   * @returns ListNetworkAccessEndpointAvailableZonesResponse
   */
  async listNetworkAccessEndpointAvailableZones(request: $_model.ListNetworkAccessEndpointAvailableZonesRequest): Promise<$_model.ListNetworkAccessEndpointAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointAvailableZonesWithOptions(request, runtime);
  }

  /**
   * 列表查询专属网络端点。
   * 
   * @param request - ListNetworkAccessEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointsResponse
   */
  async listNetworkAccessEndpointsWithOptions(request: $_model.ListNetworkAccessEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkAccessEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.networkAccessEndpointStatus)) {
      query["NetworkAccessEndpointStatus"] = request.networkAccessEndpointStatus;
    }

    if (!$dara.isNull(request.networkAccessEndpointType)) {
      query["NetworkAccessEndpointType"] = request.networkAccessEndpointType;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessEndpoints",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkAccessEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkAccessEndpointsResponse({}));
  }

  /**
   * 列表查询专属网络端点。
   * 
   * @param request - ListNetworkAccessEndpointsRequest
   * @returns ListNetworkAccessEndpointsResponse
   */
  async listNetworkAccessEndpoints(request: $_model.ListNetworkAccessEndpointsRequest): Promise<$_model.ListNetworkAccessEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointsWithOptions(request, runtime);
  }

  /**
   * List the access paths under a certain network access endpoint.
   * 
   * @param request - ListNetworkAccessPathsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessPathsResponse
   */
  async listNetworkAccessPathsWithOptions(request: $_model.ListNetworkAccessPathsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkAccessPathsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessPaths",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkAccessPathsResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkAccessPathsResponse({}));
  }

  /**
   * List the access paths under a certain network access endpoint.
   * 
   * @param request - ListNetworkAccessPathsRequest
   * @returns ListNetworkAccessPathsResponse
   */
  async listNetworkAccessPaths(request: $_model.ListNetworkAccessPathsRequest): Promise<$_model.ListNetworkAccessPathsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessPathsWithOptions(request, runtime);
  }

  /**
   * 网络区域对象列表
   * 
   * @param request - ListNetworkZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkZonesResponse
   */
  async listNetworkZonesWithOptions(request: $_model.ListNetworkZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.networkZoneIds)) {
      query["NetworkZoneIds"] = request.networkZoneIds;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkZones",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkZonesResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkZonesResponse({}));
  }

  /**
   * 网络区域对象列表
   * 
   * @param request - ListNetworkZonesRequest
   * @returns ListNetworkZonesResponse
   */
  async listNetworkZones(request: $_model.ListNetworkZonesRequest): Promise<$_model.ListNetworkZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkZonesWithOptions(request, runtime);
  }

  /**
   * Queries all parent organizations of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - ListOrganizationalUnitParentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitParentsResponse
   */
  async listOrganizationalUnitParentsWithOptions(request: $_model.ListOrganizationalUnitParentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationalUnitParentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationalUnitParents",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationalUnitParentsResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationalUnitParentsResponse({}));
  }

  /**
   * Queries all parent organizations of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - ListOrganizationalUnitParentsRequest
   * @returns ListOrganizationalUnitParentsResponse
   */
  async listOrganizationalUnitParents(request: $_model.ListOrganizationalUnitParentsRequest): Promise<$_model.ListOrganizationalUnitParentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationalUnitParentsWithOptions(request, runtime);
  }

  /**
   * Queries the information about organizational units in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitsResponse
   */
  async listOrganizationalUnitsWithOptions(request: $_model.ListOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    if (!$dara.isNull(request.organizationalUnitNameStartsWith)) {
      query["OrganizationalUnitNameStartsWith"] = request.organizationalUnitNameStartsWith;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationalUnitsResponse({}));
  }

  /**
   * Queries the information about organizational units in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListOrganizationalUnitsRequest
   * @returns ListOrganizationalUnitsResponse
   */
  async listOrganizationalUnits(request: $_model.ListOrganizationalUnitsRequest): Promise<$_model.ListOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Queries the organizations that are allowed to access an Employee Identity and Access Management (EIAM) application by page. The return result includes the IDs of the organizations. If you want to obtain the details of the organizations, call the GetOrganizationalUnit operation.
   * 
   * @param request - ListOrganizationalUnitsForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitsForApplicationResponse
   */
  async listOrganizationalUnitsForApplicationWithOptions(request: $_model.ListOrganizationalUnitsForApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationalUnitsForApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationalUnitsForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationalUnitsForApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationalUnitsForApplicationResponse({}));
  }

  /**
   * Queries the organizations that are allowed to access an Employee Identity and Access Management (EIAM) application by page. The return result includes the IDs of the organizations. If you want to obtain the details of the organizations, call the GetOrganizationalUnit operation.
   * 
   * @param request - ListOrganizationalUnitsForApplicationRequest
   * @returns ListOrganizationalUnitsForApplicationResponse
   */
  async listOrganizationalUnitsForApplication(request: $_model.ListOrganizationalUnitsForApplicationRequest): Promise<$_model.ListOrganizationalUnitsForApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationalUnitsForApplicationWithOptions(request, runtime);
  }

  /**
   * 查询被授权到组织的ResourceServers和Scopes权限
   * 
   * @param request - ListOrganizationalUnitsForResourceServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitsForResourceServerResponse
   */
  async listOrganizationalUnitsForResourceServerWithOptions(request: $_model.ListOrganizationalUnitsForResourceServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationalUnitsForResourceServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListOrganizationalUnitsForResourceServer",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationalUnitsForResourceServerResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationalUnitsForResourceServerResponse({}));
  }

  /**
   * 查询被授权到组织的ResourceServers和Scopes权限
   * 
   * @param request - ListOrganizationalUnitsForResourceServerRequest
   * @returns ListOrganizationalUnitsForResourceServerResponse
   */
  async listOrganizationalUnitsForResourceServer(request: $_model.ListOrganizationalUnitsForResourceServerRequest): Promise<$_model.ListOrganizationalUnitsForResourceServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationalUnitsForResourceServerWithOptions(request, runtime);
  }

  /**
   * Queries the supported Alibaba Cloud regions.
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionsResponse({}));
  }

  /**
   * Queries the supported Alibaba Cloud regions.
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
   * 查询用户的被授予ResourceServers和Scopes的权限
   * 
   * @param request - ListResourceServersForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceServersForUserResponse
   */
  async listResourceServersForUserWithOptions(request: $_model.ListResourceServersForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceServersForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListResourceServersForUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceServersForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceServersForUserResponse({}));
  }

  /**
   * 查询用户的被授予ResourceServers和Scopes的权限
   * 
   * @param request - ListResourceServersForUserRequest
   * @returns ListResourceServersForUserResponse
   */
  async listResourceServersForUser(request: $_model.ListResourceServersForUserRequest): Promise<$_model.ListResourceServersForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceServersForUserWithOptions(request, runtime);
  }

  /**
   * 查询同步任务
   * 
   * @param request - ListSynchronizationJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSynchronizationJobsResponse
   */
  async listSynchronizationJobsWithOptions(request: $_model.ListSynchronizationJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSynchronizationJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.targetIds)) {
      query["TargetIds"] = request.targetIds;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSynchronizationJobs",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSynchronizationJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListSynchronizationJobsResponse({}));
  }

  /**
   * 查询同步任务
   * 
   * @param request - ListSynchronizationJobsRequest
   * @returns ListSynchronizationJobsResponse
   */
  async listSynchronizationJobs(request: $_model.ListSynchronizationJobsRequest): Promise<$_model.ListSynchronizationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSynchronizationJobsWithOptions(request, runtime);
  }

  /**
   * 查询三方登录账户绑定关系
   * 
   * @param request - ListUserAuthnSourceMappingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserAuthnSourceMappingsResponse
   */
  async listUserAuthnSourceMappingsWithOptions(request: $_model.ListUserAuthnSourceMappingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserAuthnSourceMappingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    if (!$dara.isNull(request.userExternalId)) {
      query["UserExternalId"] = request.userExternalId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserAuthnSourceMappings",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserAuthnSourceMappingsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserAuthnSourceMappingsResponse({}));
  }

  /**
   * 查询三方登录账户绑定关系
   * 
   * @param request - ListUserAuthnSourceMappingsRequest
   * @returns ListUserAuthnSourceMappingsResponse
   */
  async listUserAuthnSourceMappings(request: $_model.ListUserAuthnSourceMappingsRequest): Promise<$_model.ListUserAuthnSourceMappingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserAuthnSourceMappingsWithOptions(request, runtime);
  }

  /**
   * Queries the details of accounts in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayNameStartsWith)) {
      query["DisplayNameStartsWith"] = request.displayNameStartsWith;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userExternalId)) {
      query["UserExternalId"] = request.userExternalId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!$dara.isNull(request.userSourceId)) {
      query["UserSourceId"] = request.userSourceId;
    }

    if (!$dara.isNull(request.userSourceType)) {
      query["UserSourceType"] = request.userSourceType;
    }

    if (!$dara.isNull(request.usernameStartsWith)) {
      query["UsernameStartsWith"] = request.usernameStartsWith;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2021-12-01",
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
   * Queries the details of accounts in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Queries the accounts that are allowed to access an Employee Identity and Access Management (EIAM) application. The return results include the IDs of the accounts. If you need to obtain the details of the accounts, call the GetUser operation.
   * 
   * @param request - ListUsersForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForApplicationResponse
   */
  async listUsersForApplicationWithOptions(request: $_model.ListUsersForApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersForApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersForApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersForApplicationResponse({}));
  }

  /**
   * Queries the accounts that are allowed to access an Employee Identity and Access Management (EIAM) application. The return results include the IDs of the accounts. If you need to obtain the details of the accounts, call the GetUser operation.
   * 
   * @param request - ListUsersForApplicationRequest
   * @returns ListUsersForApplicationResponse
   */
  async listUsersForApplication(request: $_model.ListUsersForApplicationRequest): Promise<$_model.ListUsersForApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersForApplicationWithOptions(request, runtime);
  }

  /**
   * 查询授权规则关联的账户列表
   * 
   * @param request - ListUsersForAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForAuthorizationRuleResponse
   */
  async listUsersForAuthorizationRuleWithOptions(request: $_model.ListUsersForAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersForAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListUsersForAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersForAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersForAuthorizationRuleResponse({}));
  }

  /**
   * 查询授权规则关联的账户列表
   * 
   * @param request - ListUsersForAuthorizationRuleRequest
   * @returns ListUsersForAuthorizationRuleResponse
   */
  async listUsersForAuthorizationRule(request: $_model.ListUsersForAuthorizationRuleRequest): Promise<$_model.ListUsersForAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersForAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * Queries the information of accounts in an Employee Identity and Access Management (EIAM) group of Identity as a Service (IDaaS).
   * 
   * @param request - ListUsersForGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroupWithOptions(request: $_model.ListUsersForGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersForGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersForGroup",
      version: "2021-12-01",
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
   * Queries the information of accounts in an Employee Identity and Access Management (EIAM) group of Identity as a Service (IDaaS).
   * 
   * @param request - ListUsersForGroupRequest
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroup(request: $_model.ListUsersForGroupRequest): Promise<$_model.ListUsersForGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  /**
   * 查询ResourceServer授权的用户和Scope权限
   * 
   * @param request - ListUsersForResourceServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForResourceServerResponse
   */
  async listUsersForResourceServerWithOptions(request: $_model.ListUsersForResourceServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersForResourceServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListUsersForResourceServer",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersForResourceServerResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersForResourceServerResponse({}));
  }

  /**
   * 查询ResourceServer授权的用户和Scope权限
   * 
   * @param request - ListUsersForResourceServerRequest
   * @returns ListUsersForResourceServerResponse
   */
  async listUsersForResourceServer(request: $_model.ListUsersForResourceServerRequest): Promise<$_model.ListUsersForResourceServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersForResourceServerWithOptions(request, runtime);
  }

  /**
   * Queries a client key of an Employee Identity and Access Management (EIAM) application. The returned key secret is masked. If you want to query the key secret that is not masked, call the ListApplicationClientSecrets operation.
   * 
   * @param request - ObtainApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainApplicationClientSecretResponse
   */
  async obtainApplicationClientSecretWithOptions(request: $_model.ObtainApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ObtainApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ObtainApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.ObtainApplicationClientSecretResponse({}));
  }

  /**
   * Queries a client key of an Employee Identity and Access Management (EIAM) application. The returned key secret is masked. If you want to query the key secret that is not masked, call the ListApplicationClientSecrets operation.
   * 
   * @param request - ObtainApplicationClientSecretRequest
   * @returns ObtainApplicationClientSecretResponse
   */
  async obtainApplicationClientSecret(request: $_model.ObtainApplicationClientSecretRequest): Promise<$_model.ObtainApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.obtainApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * 查询指定应用Token
   * 
   * @param request - ObtainApplicationTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainApplicationTokenResponse
   */
  async obtainApplicationTokenWithOptions(request: $_model.ObtainApplicationTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ObtainApplicationTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationTokenId)) {
      query["ApplicationTokenId"] = request.applicationTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainApplicationToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ObtainApplicationTokenResponse>(await this.callApi(params, req, runtime), new $_model.ObtainApplicationTokenResponse({}));
  }

  /**
   * 查询指定应用Token
   * 
   * @param request - ObtainApplicationTokenRequest
   * @returns ObtainApplicationTokenResponse
   */
  async obtainApplicationToken(request: $_model.ObtainApplicationTokenRequest): Promise<$_model.ObtainApplicationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.obtainApplicationTokenWithOptions(request, runtime);
  }

  /**
   * Queries the information about a proxy token of a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - ObtainDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainDomainProxyTokenResponse
   */
  async obtainDomainProxyTokenWithOptions(request: $_model.ObtainDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ObtainDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ObtainDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new $_model.ObtainDomainProxyTokenResponse({}));
  }

  /**
   * Queries the information about a proxy token of a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - ObtainDomainProxyTokenRequest
   * @returns ObtainDomainProxyTokenResponse
   */
  async obtainDomainProxyToken(request: $_model.ObtainDomainProxyTokenRequest): Promise<$_model.ObtainDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.obtainDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * 删除一个当前应用下的指定员工的应用账号
   * 
   * @param request - RemoveApplicationAccountFromUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveApplicationAccountFromUserResponse
   */
  async removeApplicationAccountFromUserWithOptions(request: $_model.RemoveApplicationAccountFromUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveApplicationAccountFromUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationAccountId)) {
      query["ApplicationAccountId"] = request.applicationAccountId;
    }

    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveApplicationAccountFromUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveApplicationAccountFromUserResponse>(await this.callApi(params, req, runtime), new $_model.RemoveApplicationAccountFromUserResponse({}));
  }

  /**
   * 删除一个当前应用下的指定员工的应用账号
   * 
   * @param request - RemoveApplicationAccountFromUserRequest
   * @returns RemoveApplicationAccountFromUserResponse
   */
  async removeApplicationAccountFromUser(request: $_model.RemoveApplicationAccountFromUserRequest): Promise<$_model.RemoveApplicationAccountFromUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeApplicationAccountFromUserWithOptions(request, runtime);
  }

  /**
   * 将应用从授权规则中解除
   * 
   * @param request - RemoveApplicationFromAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveApplicationFromAuthorizationRuleResponse
   */
  async removeApplicationFromAuthorizationRuleWithOptions(request: $_model.RemoveApplicationFromAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveApplicationFromAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveApplicationFromAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveApplicationFromAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.RemoveApplicationFromAuthorizationRuleResponse({}));
  }

  /**
   * 将应用从授权规则中解除
   * 
   * @param request - RemoveApplicationFromAuthorizationRuleRequest
   * @returns RemoveApplicationFromAuthorizationRuleResponse
   */
  async removeApplicationFromAuthorizationRule(request: $_model.RemoveApplicationFromAuthorizationRuleRequest): Promise<$_model.RemoveApplicationFromAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeApplicationFromAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 移除品牌关联条款
   * 
   * @param request - RemoveCustomPrivacyPoliciesFromBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveCustomPrivacyPoliciesFromBrandResponse
   */
  async removeCustomPrivacyPoliciesFromBrandWithOptions(request: $_model.RemoveCustomPrivacyPoliciesFromBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveCustomPrivacyPoliciesFromBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.customPrivacyPolicyIds)) {
      query["CustomPrivacyPolicyIds"] = request.customPrivacyPolicyIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveCustomPrivacyPoliciesFromBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveCustomPrivacyPoliciesFromBrandResponse>(await this.callApi(params, req, runtime), new $_model.RemoveCustomPrivacyPoliciesFromBrandResponse({}));
  }

  /**
   * 移除品牌关联条款
   * 
   * @param request - RemoveCustomPrivacyPoliciesFromBrandRequest
   * @returns RemoveCustomPrivacyPoliciesFromBrandResponse
   */
  async removeCustomPrivacyPoliciesFromBrand(request: $_model.RemoveCustomPrivacyPoliciesFromBrandRequest): Promise<$_model.RemoveCustomPrivacyPoliciesFromBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeCustomPrivacyPoliciesFromBrandWithOptions(request, runtime);
  }

  /**
   * 将组从授权规则中解除
   * 
   * @param request - RemoveGroupFromAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveGroupFromAuthorizationRuleResponse
   */
  async removeGroupFromAuthorizationRuleWithOptions(request: $_model.RemoveGroupFromAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveGroupFromAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveGroupFromAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveGroupFromAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.RemoveGroupFromAuthorizationRuleResponse({}));
  }

  /**
   * 将组从授权规则中解除
   * 
   * @param request - RemoveGroupFromAuthorizationRuleRequest
   * @returns RemoveGroupFromAuthorizationRuleResponse
   */
  async removeGroupFromAuthorizationRule(request: $_model.RemoveGroupFromAuthorizationRuleRequest): Promise<$_model.RemoveGroupFromAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeGroupFromAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 将账户从授权规则中解除
   * 
   * @param request - RemoveUserFromAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromAuthorizationRuleResponse
   */
  async removeUserFromAuthorizationRuleWithOptions(request: $_model.RemoveUserFromAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserFromAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserFromAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserFromAuthorizationRuleResponse({}));
  }

  /**
   * 将账户从授权规则中解除
   * 
   * @param request - RemoveUserFromAuthorizationRuleRequest
   * @returns RemoveUserFromAuthorizationRuleResponse
   */
  async removeUserFromAuthorizationRule(request: $_model.RemoveUserFromAuthorizationRuleRequest): Promise<$_model.RemoveUserFromAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserFromAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * Removes an Employee Identity and Access Management (EIAM) account from multiple EIAM organizations of Identity as a Service (IDaaS). You cannot remove an account from a primary organization.
   * 
   * @param request - RemoveUserFromOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromOrganizationalUnitsResponse
   */
  async removeUserFromOrganizationalUnitsWithOptions(request: $_model.RemoveUserFromOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserFromOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserFromOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserFromOrganizationalUnitsResponse({}));
  }

  /**
   * Removes an Employee Identity and Access Management (EIAM) account from multiple EIAM organizations of Identity as a Service (IDaaS). You cannot remove an account from a primary organization.
   * 
   * @param request - RemoveUserFromOrganizationalUnitsRequest
   * @returns RemoveUserFromOrganizationalUnitsResponse
   */
  async removeUserFromOrganizationalUnits(request: $_model.RemoveUserFromOrganizationalUnitsRequest): Promise<$_model.RemoveUserFromOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserFromOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Removes Employee Identity and Access Management (EIAM) accounts from an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroupWithOptions(request: $_model.RemoveUsersFromGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUsersFromGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUsersFromGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUsersFromGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUsersFromGroupResponse({}));
  }

  /**
   * Removes Employee Identity and Access Management (EIAM) accounts from an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @returns RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroup(request: $_model.RemoveUsersFromGroupRequest): Promise<$_model.RemoveUsersFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUsersFromGroupWithOptions(request, runtime);
  }

  /**
   * 免费版续期
   * 
   * @param request - RenewFreeLicenseEndTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewFreeLicenseEndTimeResponse
   */
  async renewFreeLicenseEndTimeWithOptions(request: $_model.RenewFreeLicenseEndTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewFreeLicenseEndTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewFreeLicenseEndTime",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewFreeLicenseEndTimeResponse>(await this.callApi(params, req, runtime), new $_model.RenewFreeLicenseEndTimeResponse({}));
  }

  /**
   * 免费版续期
   * 
   * @param request - RenewFreeLicenseEndTimeRequest
   * @returns RenewFreeLicenseEndTimeResponse
   */
  async renewFreeLicenseEndTime(request: $_model.RenewFreeLicenseEndTimeRequest): Promise<$_model.RenewFreeLicenseEndTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewFreeLicenseEndTimeWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - RevokeApplicationFromGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromGroupsResponse
   */
  async revokeApplicationFromGroupsWithOptions(request: $_model.RevokeApplicationFromGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeApplicationFromGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeApplicationFromGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeApplicationFromGroupsResponse>(await this.callApi(params, req, runtime), new $_model.RevokeApplicationFromGroupsResponse({}));
  }

  /**
   * Revokes the permissions to access an application from multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - RevokeApplicationFromGroupsRequest
   * @returns RevokeApplicationFromGroupsResponse
   */
  async revokeApplicationFromGroups(request: $_model.RevokeApplicationFromGroupsRequest): Promise<$_model.RevokeApplicationFromGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeApplicationFromGroupsWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - RevokeApplicationFromOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromOrganizationalUnitsResponse
   */
  async revokeApplicationFromOrganizationalUnitsWithOptions(request: $_model.RevokeApplicationFromOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeApplicationFromOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeApplicationFromOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeApplicationFromOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new $_model.RevokeApplicationFromOrganizationalUnitsResponse({}));
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - RevokeApplicationFromOrganizationalUnitsRequest
   * @returns RevokeApplicationFromOrganizationalUnitsResponse
   */
  async revokeApplicationFromOrganizationalUnits(request: $_model.RevokeApplicationFromOrganizationalUnitsRequest): Promise<$_model.RevokeApplicationFromOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeApplicationFromOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - RevokeApplicationFromUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromUsersResponse
   */
  async revokeApplicationFromUsersWithOptions(request: $_model.RevokeApplicationFromUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeApplicationFromUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeApplicationFromUsers",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeApplicationFromUsersResponse>(await this.callApi(params, req, runtime), new $_model.RevokeApplicationFromUsersResponse({}));
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - RevokeApplicationFromUsersRequest
   * @returns RevokeApplicationFromUsersResponse
   */
  async revokeApplicationFromUsers(request: $_model.RevokeApplicationFromUsersRequest): Promise<$_model.RevokeApplicationFromUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeApplicationFromUsersWithOptions(request, runtime);
  }

  /**
   * 解除指定ResourceServer到Client的授权
   * 
   * @param request - RevokeResourceServerFromClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeResourceServerFromClientResponse
   */
  async revokeResourceServerFromClientWithOptions(request: $_model.RevokeResourceServerFromClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeResourceServerFromClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientApplicationId)) {
      query["ClientApplicationId"] = request.clientApplicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerApplicationId)) {
      query["ResourceServerApplicationId"] = request.resourceServerApplicationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeResourceServerFromClient",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeResourceServerFromClientResponse>(await this.callApi(params, req, runtime), new $_model.RevokeResourceServerFromClientResponse({}));
  }

  /**
   * 解除指定ResourceServer到Client的授权
   * 
   * @param request - RevokeResourceServerFromClientRequest
   * @returns RevokeResourceServerFromClientResponse
   */
  async revokeResourceServerFromClient(request: $_model.RevokeResourceServerFromClientRequest): Promise<$_model.RevokeResourceServerFromClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeResourceServerFromClientWithOptions(request, runtime);
  }

  /**
   * 解除指定ResourceServer下的Scope给Client
   * 
   * @param request - RevokeResourceServerScopesFromClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeResourceServerScopesFromClientResponse
   */
  async revokeResourceServerScopesFromClientWithOptions(request: $_model.RevokeResourceServerScopesFromClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeResourceServerScopesFromClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientApplicationId)) {
      query["ClientApplicationId"] = request.clientApplicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerApplicationId)) {
      query["ResourceServerApplicationId"] = request.resourceServerApplicationId;
    }

    if (!$dara.isNull(request.resourceServerScopeIds)) {
      query["ResourceServerScopeIds"] = request.resourceServerScopeIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeResourceServerScopesFromClient",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeResourceServerScopesFromClientResponse>(await this.callApi(params, req, runtime), new $_model.RevokeResourceServerScopesFromClientResponse({}));
  }

  /**
   * 解除指定ResourceServer下的Scope给Client
   * 
   * @param request - RevokeResourceServerScopesFromClientRequest
   * @returns RevokeResourceServerScopesFromClientResponse
   */
  async revokeResourceServerScopesFromClient(request: $_model.RevokeResourceServerScopesFromClientRequest): Promise<$_model.RevokeResourceServerScopesFromClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeResourceServerScopesFromClientWithOptions(request, runtime);
  }

  /**
   * 取消被授予到组的ResourceServerScope权限
   * 
   * @param request - RevokeResourceServerScopesFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeResourceServerScopesFromGroupResponse
   */
  async revokeResourceServerScopesFromGroupWithOptions(request: $_model.RevokeResourceServerScopesFromGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeResourceServerScopesFromGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerScopeIds)) {
      query["ResourceServerScopeIds"] = request.resourceServerScopeIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeResourceServerScopesFromGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeResourceServerScopesFromGroupResponse>(await this.callApi(params, req, runtime), new $_model.RevokeResourceServerScopesFromGroupResponse({}));
  }

  /**
   * 取消被授予到组的ResourceServerScope权限
   * 
   * @param request - RevokeResourceServerScopesFromGroupRequest
   * @returns RevokeResourceServerScopesFromGroupResponse
   */
  async revokeResourceServerScopesFromGroup(request: $_model.RevokeResourceServerScopesFromGroupRequest): Promise<$_model.RevokeResourceServerScopesFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeResourceServerScopesFromGroupWithOptions(request, runtime);
  }

  /**
   * 取消被授予到组织的ResourceServerScope权限
   * 
   * @param request - RevokeResourceServerScopesFromOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeResourceServerScopesFromOrganizationalUnitResponse
   */
  async revokeResourceServerScopesFromOrganizationalUnitWithOptions(request: $_model.RevokeResourceServerScopesFromOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeResourceServerScopesFromOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.resourceServerScopeIds)) {
      query["ResourceServerScopeIds"] = request.resourceServerScopeIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeResourceServerScopesFromOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeResourceServerScopesFromOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.RevokeResourceServerScopesFromOrganizationalUnitResponse({}));
  }

  /**
   * 取消被授予到组织的ResourceServerScope权限
   * 
   * @param request - RevokeResourceServerScopesFromOrganizationalUnitRequest
   * @returns RevokeResourceServerScopesFromOrganizationalUnitResponse
   */
  async revokeResourceServerScopesFromOrganizationalUnit(request: $_model.RevokeResourceServerScopesFromOrganizationalUnitRequest): Promise<$_model.RevokeResourceServerScopesFromOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeResourceServerScopesFromOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * 取消被授予用户的ResourceServerScope权限
   * 
   * @param request - RevokeResourceServerScopesFromUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeResourceServerScopesFromUserResponse
   */
  async revokeResourceServerScopesFromUserWithOptions(request: $_model.RevokeResourceServerScopesFromUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeResourceServerScopesFromUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerScopeIds)) {
      query["ResourceServerScopeIds"] = request.resourceServerScopeIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeResourceServerScopesFromUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeResourceServerScopesFromUserResponse>(await this.callApi(params, req, runtime), new $_model.RevokeResourceServerScopesFromUserResponse({}));
  }

  /**
   * 取消被授予用户的ResourceServerScope权限
   * 
   * @param request - RevokeResourceServerScopesFromUserRequest
   * @returns RevokeResourceServerScopesFromUserResponse
   */
  async revokeResourceServerScopesFromUser(request: $_model.RevokeResourceServerScopesFromUserRequest): Promise<$_model.RevokeResourceServerScopesFromUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeResourceServerScopesFromUserWithOptions(request, runtime);
  }

  /**
   * Creates a synchronization job and immediately runs the job.
   * 
   * @param request - RunSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSynchronizationJobResponse
   */
  async runSynchronizationJobWithOptions(request: $_model.RunSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordInitialization)) {
      query["PasswordInitialization"] = request.passwordInitialization;
    }

    if (!$dara.isNull(request.synchronizationScopeConfig)) {
      query["SynchronizationScopeConfig"] = request.synchronizationScopeConfig;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.userIdentityTypes)) {
      query["UserIdentityTypes"] = request.userIdentityTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSynchronizationJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.RunSynchronizationJobResponse({}));
  }

  /**
   * Creates a synchronization job and immediately runs the job.
   * 
   * @param request - RunSynchronizationJobRequest
   * @returns RunSynchronizationJobResponse
   */
  async runSynchronizationJob(request: $_model.RunSynchronizationJobRequest): Promise<$_model.RunSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Configures the permissions of the Developer API feature of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - SetApplicationGrantScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationGrantScopeResponse
   */
  async setApplicationGrantScopeWithOptions(request: $_model.SetApplicationGrantScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApplicationGrantScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.grantScopes)) {
      query["GrantScopes"] = request.grantScopes;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationGrantScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApplicationGrantScopeResponse>(await this.callApi(params, req, runtime), new $_model.SetApplicationGrantScopeResponse({}));
  }

  /**
   * Configures the permissions of the Developer API feature of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - SetApplicationGrantScopeRequest
   * @returns SetApplicationGrantScopeResponse
   */
  async setApplicationGrantScope(request: $_model.SetApplicationGrantScopeRequest): Promise<$_model.SetApplicationGrantScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationGrantScopeWithOptions(request, runtime);
  }

  /**
   * Configures the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - SetApplicationProvisioningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationProvisioningConfigResponse
   */
  async setApplicationProvisioningConfigWithOptions(request: $_model.SetApplicationProvisioningConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApplicationProvisioningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.callbackProvisioningConfig)) {
      query["CallbackProvisioningConfig"] = request.callbackProvisioningConfig;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.provisionPassword)) {
      query["ProvisionPassword"] = request.provisionPassword;
    }

    if (!$dara.isNull(request.provisionProtocolType)) {
      query["ProvisionProtocolType"] = request.provisionProtocolType;
    }

    if (!$dara.isNull(request.scimProvisioningConfig)) {
      query["ScimProvisioningConfig"] = request.scimProvisioningConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationProvisioningConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApplicationProvisioningConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetApplicationProvisioningConfigResponse({}));
  }

  /**
   * Configures the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - SetApplicationProvisioningConfigRequest
   * @returns SetApplicationProvisioningConfigResponse
   */
  async setApplicationProvisioningConfig(request: $_model.SetApplicationProvisioningConfigRequest): Promise<$_model.SetApplicationProvisioningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationProvisioningConfigWithOptions(request, runtime);
  }

  /**
   * Sets the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - SetApplicationProvisioningScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationProvisioningScopeResponse
   */
  async setApplicationProvisioningScopeWithOptions(request: $_model.SetApplicationProvisioningScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApplicationProvisioningScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationProvisioningScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApplicationProvisioningScopeResponse>(await this.callApi(params, req, runtime), new $_model.SetApplicationProvisioningScopeResponse({}));
  }

  /**
   * Sets the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - SetApplicationProvisioningScopeRequest
   * @returns SetApplicationProvisioningScopeResponse
   */
  async setApplicationProvisioningScope(request: $_model.SetApplicationProvisioningScopeRequest): Promise<$_model.SetApplicationProvisioningScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationProvisioningScopeWithOptions(request, runtime);
  }

  /**
   * 配置应用同步用户主组织
   * 
   * @param request - SetApplicationProvisioningUserPrimaryOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationProvisioningUserPrimaryOrganizationalUnitResponse
   */
  async setApplicationProvisioningUserPrimaryOrganizationalUnitWithOptions(request: $_model.SetApplicationProvisioningUserPrimaryOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApplicationProvisioningUserPrimaryOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userPrimaryOrganizationalUnitId)) {
      query["UserPrimaryOrganizationalUnitId"] = request.userPrimaryOrganizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationProvisioningUserPrimaryOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApplicationProvisioningUserPrimaryOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.SetApplicationProvisioningUserPrimaryOrganizationalUnitResponse({}));
  }

  /**
   * 配置应用同步用户主组织
   * 
   * @param request - SetApplicationProvisioningUserPrimaryOrganizationalUnitRequest
   * @returns SetApplicationProvisioningUserPrimaryOrganizationalUnitResponse
   */
  async setApplicationProvisioningUserPrimaryOrganizationalUnit(request: $_model.SetApplicationProvisioningUserPrimaryOrganizationalUnitRequest): Promise<$_model.SetApplicationProvisioningUserPrimaryOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationProvisioningUserPrimaryOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * 设置ResourceServer的Identifier
   * 
   * @param request - SetApplicationResourceServerIdentifierRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationResourceServerIdentifierResponse
   */
  async setApplicationResourceServerIdentifierWithOptions(request: $_model.SetApplicationResourceServerIdentifierRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApplicationResourceServerIdentifierResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerIdentifier)) {
      query["ResourceServerIdentifier"] = request.resourceServerIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationResourceServerIdentifier",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApplicationResourceServerIdentifierResponse>(await this.callApi(params, req, runtime), new $_model.SetApplicationResourceServerIdentifierResponse({}));
  }

  /**
   * 设置ResourceServer的Identifier
   * 
   * @param request - SetApplicationResourceServerIdentifierRequest
   * @returns SetApplicationResourceServerIdentifierResponse
   */
  async setApplicationResourceServerIdentifier(request: $_model.SetApplicationResourceServerIdentifierRequest): Promise<$_model.SetApplicationResourceServerIdentifierResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationResourceServerIdentifierWithOptions(request, runtime);
  }

  /**
   * Specifies the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @remarks
   * In IDaaS EIAM, the application management feature supports multiple SSO protocols for applications, including SAML 2.0 and OIDC protocols. Each application supports only one protocol, and the protocol cannot be changed after the application is created. You can specify the SSO configuration attributes of an application based on the supported SSO protocol.
   * 
   * @param request - SetApplicationSsoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationSsoConfigResponse
   */
  async setApplicationSsoConfigWithOptions(request: $_model.SetApplicationSsoConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApplicationSsoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.initLoginType)) {
      query["InitLoginType"] = request.initLoginType;
    }

    if (!$dara.isNull(request.initLoginUrl)) {
      query["InitLoginUrl"] = request.initLoginUrl;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.oidcSsoConfig)) {
      query["OidcSsoConfig"] = request.oidcSsoConfig;
    }

    if (!$dara.isNull(request.samlSsoConfig)) {
      query["SamlSsoConfig"] = request.samlSsoConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationSsoConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApplicationSsoConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetApplicationSsoConfigResponse({}));
  }

  /**
   * Specifies the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @remarks
   * In IDaaS EIAM, the application management feature supports multiple SSO protocols for applications, including SAML 2.0 and OIDC protocols. Each application supports only one protocol, and the protocol cannot be changed after the application is created. You can specify the SSO configuration attributes of an application based on the supported SSO protocol.
   * 
   * @param request - SetApplicationSsoConfigRequest
   * @returns SetApplicationSsoConfigResponse
   */
  async setApplicationSsoConfig(request: $_model.SetApplicationSsoConfigRequest): Promise<$_model.SetApplicationSsoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationSsoConfigWithOptions(request, runtime);
  }

  /**
   * Sets a domain name of an Employee Identity and Access Management (EIAM) instance as the default domain name.
   * 
   * @param request - SetDefaultDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultDomainResponse
   */
  async setDefaultDomainWithOptions(request: $_model.SetDefaultDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultDomain",
      version: "2021-12-01",
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
   * Sets a domain name of an Employee Identity and Access Management (EIAM) instance as the default domain name.
   * 
   * @param request - SetDefaultDomainRequest
   * @returns SetDefaultDomainResponse
   */
  async setDefaultDomain(request: $_model.SetDefaultDomainRequest): Promise<$_model.SetDefaultDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultDomainWithOptions(request, runtime);
  }

  /**
   * Configures a forgot password policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetForgetPasswordConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetForgetPasswordConfigurationResponse
   */
  async setForgetPasswordConfigurationWithOptions(request: $_model.SetForgetPasswordConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetForgetPasswordConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationChannels)) {
      query["AuthenticationChannels"] = request.authenticationChannels;
    }

    if (!$dara.isNull(request.forgetPasswordStatus)) {
      query["ForgetPasswordStatus"] = request.forgetPasswordStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetForgetPasswordConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetForgetPasswordConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetForgetPasswordConfigurationResponse({}));
  }

  /**
   * Configures a forgot password policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetForgetPasswordConfigurationRequest
   * @returns SetForgetPasswordConfigurationResponse
   */
  async setForgetPasswordConfiguration(request: $_model.SetForgetPasswordConfigurationRequest): Promise<$_model.SetForgetPasswordConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setForgetPasswordConfigurationWithOptions(request, runtime);
  }

  /**
   * 修改认证信息
   * 
   * @param request - SetIdentityProviderAuthnConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetIdentityProviderAuthnConfigurationResponse
   */
  async setIdentityProviderAuthnConfigurationWithOptions(request: $_model.SetIdentityProviderAuthnConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetIdentityProviderAuthnConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoCreateUserConfig)) {
      query["AutoCreateUserConfig"] = request.autoCreateUserConfig;
    }

    if (!$dara.isNull(request.autoUpdateUserConfig)) {
      query["AutoUpdateUserConfig"] = request.autoUpdateUserConfig;
    }

    if (!$dara.isNull(request.bindingConfig)) {
      query["BindingConfig"] = request.bindingConfig;
    }

    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ldapAuthnConfig)) {
      query["LdapAuthnConfig"] = request.ldapAuthnConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetIdentityProviderAuthnConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetIdentityProviderAuthnConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetIdentityProviderAuthnConfigurationResponse({}));
  }

  /**
   * 修改认证信息
   * 
   * @param request - SetIdentityProviderAuthnConfigurationRequest
   * @returns SetIdentityProviderAuthnConfigurationResponse
   */
  async setIdentityProviderAuthnConfiguration(request: $_model.SetIdentityProviderAuthnConfigurationRequest): Promise<$_model.SetIdentityProviderAuthnConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setIdentityProviderAuthnConfigurationWithOptions(request, runtime);
  }

  /**
   * Update IdP synchronization configuration.
   * 
   * @param request - SetIdentityProviderUdPullConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetIdentityProviderUdPullConfigurationResponse
   */
  async setIdentityProviderUdPullConfigurationWithOptions(request: $_model.SetIdentityProviderUdPullConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetIdentityProviderUdPullConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupSyncStatus)) {
      query["GroupSyncStatus"] = request.groupSyncStatus;
    }

    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.incrementalCallbackStatus)) {
      query["IncrementalCallbackStatus"] = request.incrementalCallbackStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ldapUdPullConfig)) {
      query["LdapUdPullConfig"] = request.ldapUdPullConfig;
    }

    if (!$dara.isNull(request.periodicSyncConfig)) {
      query["PeriodicSyncConfig"] = request.periodicSyncConfig;
    }

    if (!$dara.isNull(request.periodicSyncStatus)) {
      query["PeriodicSyncStatus"] = request.periodicSyncStatus;
    }

    if (!$dara.isNull(request.pullProtectedRule)) {
      query["PullProtectedRule"] = request.pullProtectedRule;
    }

    if (!$dara.isNull(request.udSyncScopeConfig)) {
      query["UdSyncScopeConfig"] = request.udSyncScopeConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetIdentityProviderUdPullConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetIdentityProviderUdPullConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetIdentityProviderUdPullConfigurationResponse({}));
  }

  /**
   * Update IdP synchronization configuration.
   * 
   * @param request - SetIdentityProviderUdPullConfigurationRequest
   * @returns SetIdentityProviderUdPullConfigurationResponse
   */
  async setIdentityProviderUdPullConfiguration(request: $_model.SetIdentityProviderUdPullConfigurationRequest): Promise<$_model.SetIdentityProviderUdPullConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setIdentityProviderUdPullConfigurationWithOptions(request, runtime);
  }

  /**
   * 修改IdP同步出配置
   * 
   * @param request - SetIdentityProviderUdPushConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetIdentityProviderUdPushConfigurationResponse
   */
  async setIdentityProviderUdPushConfigurationWithOptions(request: $_model.SetIdentityProviderUdPushConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetIdentityProviderUdPushConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.incrementalCallbackStatus)) {
      query["IncrementalCallbackStatus"] = request.incrementalCallbackStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ldapUdPushConfig)) {
      query["LdapUdPushConfig"] = request.ldapUdPushConfig;
    }

    if (!$dara.isNull(request.periodicSyncConfig)) {
      query["PeriodicSyncConfig"] = request.periodicSyncConfig;
    }

    if (!$dara.isNull(request.periodicSyncStatus)) {
      query["PeriodicSyncStatus"] = request.periodicSyncStatus;
    }

    if (!$dara.isNull(request.udSyncScopeConfigs)) {
      query["UdSyncScopeConfigs"] = request.udSyncScopeConfigs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetIdentityProviderUdPushConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetIdentityProviderUdPushConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetIdentityProviderUdPushConfigurationResponse({}));
  }

  /**
   * 修改IdP同步出配置
   * 
   * @param request - SetIdentityProviderUdPushConfigurationRequest
   * @returns SetIdentityProviderUdPushConfigurationResponse
   */
  async setIdentityProviderUdPushConfiguration(request: $_model.SetIdentityProviderUdPushConfigurationRequest): Promise<$_model.SetIdentityProviderUdPushConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setIdentityProviderUdPushConfigurationWithOptions(request, runtime);
  }

  /**
   * 设置实例控制项
   * 
   * @param request - SetInstanceControlConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetInstanceControlConfigurationResponse
   */
  async setInstanceControlConfigurationWithOptions(request: $_model.SetInstanceControlConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetInstanceControlConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.controlElements)) {
      query["ControlElements"] = request.controlElements;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetInstanceControlConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetInstanceControlConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetInstanceControlConfigurationResponse({}));
  }

  /**
   * 设置实例控制项
   * 
   * @param request - SetInstanceControlConfigurationRequest
   * @returns SetInstanceControlConfigurationResponse
   */
  async setInstanceControlConfiguration(request: $_model.SetInstanceControlConfigurationRequest): Promise<$_model.SetInstanceControlConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setInstanceControlConfigurationWithOptions(request, runtime);
  }

  /**
   * 设置实例语言、时区信息
   * 
   * @param request - SetInstanceGlobalizationConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetInstanceGlobalizationConfigResponse
   */
  async setInstanceGlobalizationConfigWithOptions(request: $_model.SetInstanceGlobalizationConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetInstanceGlobalizationConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetInstanceGlobalizationConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetInstanceGlobalizationConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetInstanceGlobalizationConfigResponse({}));
  }

  /**
   * 设置实例语言、时区信息
   * 
   * @param request - SetInstanceGlobalizationConfigRequest
   * @returns SetInstanceGlobalizationConfigResponse
   */
  async setInstanceGlobalizationConfig(request: $_model.SetInstanceGlobalizationConfigRequest): Promise<$_model.SetInstanceGlobalizationConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setInstanceGlobalizationConfigWithOptions(request, runtime);
  }

  /**
   * 为品牌设置登录后跳转应用
   * 
   * @param request - SetLoginRedirectApplicationForBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoginRedirectApplicationForBrandResponse
   */
  async setLoginRedirectApplicationForBrandWithOptions(request: $_model.SetLoginRedirectApplicationForBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoginRedirectApplicationForBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoginRedirectApplicationForBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoginRedirectApplicationForBrandResponse>(await this.callApi(params, req, runtime), new $_model.SetLoginRedirectApplicationForBrandResponse({}));
  }

  /**
   * 为品牌设置登录后跳转应用
   * 
   * @param request - SetLoginRedirectApplicationForBrandRequest
   * @returns SetLoginRedirectApplicationForBrandResponse
   */
  async setLoginRedirectApplicationForBrand(request: $_model.SetLoginRedirectApplicationForBrandRequest): Promise<$_model.SetLoginRedirectApplicationForBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoginRedirectApplicationForBrandWithOptions(request, runtime);
  }

  /**
   * Configures a password complexity policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordComplexityConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordComplexityConfigurationResponse
   */
  async setPasswordComplexityConfigurationWithOptions(request: $_model.SetPasswordComplexityConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordComplexityConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordComplexityRules)) {
      query["PasswordComplexityRules"] = request.passwordComplexityRules;
    }

    if (!$dara.isNull(request.passwordMinLength)) {
      query["PasswordMinLength"] = request.passwordMinLength;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordComplexityConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPasswordComplexityConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetPasswordComplexityConfigurationResponse({}));
  }

  /**
   * Configures a password complexity policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordComplexityConfigurationRequest
   * @returns SetPasswordComplexityConfigurationResponse
   */
  async setPasswordComplexityConfiguration(request: $_model.SetPasswordComplexityConfigurationRequest): Promise<$_model.SetPasswordComplexityConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordComplexityConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures a password expiration policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordExpirationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordExpirationConfigurationResponse
   */
  async setPasswordExpirationConfigurationWithOptions(request: $_model.SetPasswordExpirationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordExpirationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveAuthenticationSourceIds)) {
      query["EffectiveAuthenticationSourceIds"] = request.effectiveAuthenticationSourceIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordExpirationAction)) {
      query["PasswordExpirationAction"] = request.passwordExpirationAction;
    }

    if (!$dara.isNull(request.passwordExpirationNotificationChannels)) {
      query["PasswordExpirationNotificationChannels"] = request.passwordExpirationNotificationChannels;
    }

    if (!$dara.isNull(request.passwordExpirationNotificationDuration)) {
      query["PasswordExpirationNotificationDuration"] = request.passwordExpirationNotificationDuration;
    }

    if (!$dara.isNull(request.passwordExpirationNotificationStatus)) {
      query["PasswordExpirationNotificationStatus"] = request.passwordExpirationNotificationStatus;
    }

    if (!$dara.isNull(request.passwordExpirationStatus)) {
      query["PasswordExpirationStatus"] = request.passwordExpirationStatus;
    }

    if (!$dara.isNull(request.passwordForcedUpdateDuration)) {
      query["PasswordForcedUpdateDuration"] = request.passwordForcedUpdateDuration;
    }

    if (!$dara.isNull(request.passwordValidMaxDay)) {
      query["PasswordValidMaxDay"] = request.passwordValidMaxDay;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordExpirationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPasswordExpirationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetPasswordExpirationConfigurationResponse({}));
  }

  /**
   * Configures a password expiration policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordExpirationConfigurationRequest
   * @returns SetPasswordExpirationConfigurationResponse
   */
  async setPasswordExpirationConfiguration(request: $_model.SetPasswordExpirationConfigurationRequest): Promise<$_model.SetPasswordExpirationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordExpirationConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures a password history policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordHistoryConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordHistoryConfigurationResponse
   */
  async setPasswordHistoryConfigurationWithOptions(request: $_model.SetPasswordHistoryConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordHistoryConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordHistoryMaxRetention)) {
      query["PasswordHistoryMaxRetention"] = request.passwordHistoryMaxRetention;
    }

    if (!$dara.isNull(request.passwordHistoryStatus)) {
      query["PasswordHistoryStatus"] = request.passwordHistoryStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordHistoryConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPasswordHistoryConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetPasswordHistoryConfigurationResponse({}));
  }

  /**
   * Configures a password history policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordHistoryConfigurationRequest
   * @returns SetPasswordHistoryConfigurationResponse
   */
  async setPasswordHistoryConfiguration(request: $_model.SetPasswordHistoryConfigurationRequest): Promise<$_model.SetPasswordHistoryConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordHistoryConfigurationWithOptions(request, runtime);
  }

  /**
   * Sets the password initialization configurations for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordInitializationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordInitializationConfigurationResponse
   */
  async setPasswordInitializationConfigurationWithOptions(request: $_model.SetPasswordInitializationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordInitializationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordForcedUpdateStatus)) {
      query["PasswordForcedUpdateStatus"] = request.passwordForcedUpdateStatus;
    }

    if (!$dara.isNull(request.passwordInitializationNotificationChannels)) {
      query["PasswordInitializationNotificationChannels"] = request.passwordInitializationNotificationChannels;
    }

    if (!$dara.isNull(request.passwordInitializationStatus)) {
      query["PasswordInitializationStatus"] = request.passwordInitializationStatus;
    }

    if (!$dara.isNull(request.passwordInitializationType)) {
      query["PasswordInitializationType"] = request.passwordInitializationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordInitializationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPasswordInitializationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetPasswordInitializationConfigurationResponse({}));
  }

  /**
   * Sets the password initialization configurations for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordInitializationConfigurationRequest
   * @returns SetPasswordInitializationConfigurationResponse
   */
  async setPasswordInitializationConfiguration(request: $_model.SetPasswordInitializationConfigurationRequest): Promise<$_model.SetPasswordInitializationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordInitializationConfigurationWithOptions(request, runtime);
  }

  /**
   * 设置指定的应用ClientPublicKey优先启用状态
   * 
   * @param request - SetPrimaryClientPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPrimaryClientPublicKeyResponse
   */
  async setPrimaryClientPublicKeyWithOptions(request: $_model.SetPrimaryClientPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPrimaryClientPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientPublicKeyId)) {
      query["ClientPublicKeyId"] = request.clientPublicKeyId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPrimaryClientPublicKey",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPrimaryClientPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.SetPrimaryClientPublicKeyResponse({}));
  }

  /**
   * 设置指定的应用ClientPublicKey优先启用状态
   * 
   * @param request - SetPrimaryClientPublicKeyRequest
   * @returns SetPrimaryClientPublicKeyResponse
   */
  async setPrimaryClientPublicKey(request: $_model.SetPrimaryClientPublicKeyRequest): Promise<$_model.SetPrimaryClientPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPrimaryClientPublicKeyWithOptions(request, runtime);
  }

  /**
   * Updates the primary organizational unit to which an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account belongs. This account will be removed from the previous primary organizational unit and added to the new primary organization.
   * 
   * @param request - SetUserPrimaryOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserPrimaryOrganizationalUnitResponse
   */
  async setUserPrimaryOrganizationalUnitWithOptions(request: $_model.SetUserPrimaryOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetUserPrimaryOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetUserPrimaryOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetUserPrimaryOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.SetUserPrimaryOrganizationalUnitResponse({}));
  }

  /**
   * Updates the primary organizational unit to which an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account belongs. This account will be removed from the previous primary organizational unit and added to the new primary organization.
   * 
   * @param request - SetUserPrimaryOrganizationalUnitRequest
   * @returns SetUserPrimaryOrganizationalUnitResponse
   */
  async setUserPrimaryOrganizationalUnit(request: $_model.SetUserPrimaryOrganizationalUnitRequest): Promise<$_model.SetUserPrimaryOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setUserPrimaryOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * 设置WebAuthn配置
   * 
   * @param request - SetWebAuthnConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetWebAuthnConfigurationResponse
   */
  async setWebAuthnConfigurationWithOptions(request: $_model.SetWebAuthnConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetWebAuthnConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aaguids)) {
      query["Aaguids"] = request.aaguids;
    }

    if (!$dara.isNull(request.enableAaguidVerification)) {
      query["EnableAaguidVerification"] = request.enableAaguidVerification;
    }

    if (!$dara.isNull(request.enableMetadataServiceVerification)) {
      query["EnableMetadataServiceVerification"] = request.enableMetadataServiceVerification;
    }

    if (!$dara.isNull(request.enableUserSelfRegistration)) {
      query["EnableUserSelfRegistration"] = request.enableUserSelfRegistration;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetWebAuthnConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetWebAuthnConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetWebAuthnConfigurationResponse({}));
  }

  /**
   * 设置WebAuthn配置
   * 
   * @param request - SetWebAuthnConfigurationRequest
   * @returns SetWebAuthnConfigurationResponse
   */
  async setWebAuthnConfiguration(request: $_model.SetWebAuthnConfigurationRequest): Promise<$_model.SetWebAuthnConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setWebAuthnConfigurationWithOptions(request, runtime);
  }

  /**
   * 解绑指定用户TOTP
   * 
   * @param request - UnbindTotpAuthenticatorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindTotpAuthenticatorResponse
   */
  async unbindTotpAuthenticatorWithOptions(request: $_model.UnbindTotpAuthenticatorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindTotpAuthenticatorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindTotpAuthenticator",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindTotpAuthenticatorResponse>(await this.callApi(params, req, runtime), new $_model.UnbindTotpAuthenticatorResponse({}));
  }

  /**
   * 解绑指定用户TOTP
   * 
   * @param request - UnbindTotpAuthenticatorRequest
   * @returns UnbindTotpAuthenticatorResponse
   */
  async unbindTotpAuthenticator(request: $_model.UnbindTotpAuthenticatorRequest): Promise<$_model.UnbindTotpAuthenticatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindTotpAuthenticatorWithOptions(request, runtime);
  }

  /**
   * 解绑三方登录账户
   * 
   * @param request - UnbindUserAuthnSourceMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindUserAuthnSourceMappingResponse
   */
  async unbindUserAuthnSourceMappingWithOptions(request: $_model.UnbindUserAuthnSourceMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindUserAuthnSourceMappingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userExternalId)) {
      query["UserExternalId"] = request.userExternalId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindUserAuthnSourceMapping",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindUserAuthnSourceMappingResponse>(await this.callApi(params, req, runtime), new $_model.UnbindUserAuthnSourceMappingResponse({}));
  }

  /**
   * 解绑三方登录账户
   * 
   * @param request - UnbindUserAuthnSourceMappingRequest
   * @returns UnbindUserAuthnSourceMappingResponse
   */
  async unbindUserAuthnSourceMapping(request: $_model.UnbindUserAuthnSourceMappingRequest): Promise<$_model.UnbindUserAuthnSourceMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindUserAuthnSourceMappingWithOptions(request, runtime);
  }

  /**
   * Unlocks an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) that is locked.
   * 
   * @param request - UnlockUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockUserResponse
   */
  async unlockUserWithOptions(request: $_model.UnlockUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnlockUserResponse>(await this.callApi(params, req, runtime), new $_model.UnlockUserResponse({}));
  }

  /**
   * Unlocks an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) that is locked.
   * 
   * @param request - UnlockUserRequest
   * @returns UnlockUserResponse
   */
  async unlockUser(request: $_model.UnlockUserRequest): Promise<$_model.UnlockUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockUserWithOptions(request, runtime);
  }

  /**
   * 修改应用高阶配置
   * 
   * @param request - UpdateApplicationAdvancedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationAdvancedConfigResponse
   */
  async updateApplicationAdvancedConfigWithOptions(request: $_model.UpdateApplicationAdvancedConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationAdvancedConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scimServerAdvancedConfig)) {
      query["ScimServerAdvancedConfig"] = request.scimServerAdvancedConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationAdvancedConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationAdvancedConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationAdvancedConfigResponse({}));
  }

  /**
   * 修改应用高阶配置
   * 
   * @param request - UpdateApplicationAdvancedConfigRequest
   * @returns UpdateApplicationAdvancedConfigResponse
   */
  async updateApplicationAdvancedConfig(request: $_model.UpdateApplicationAdvancedConfigRequest): Promise<$_model.UpdateApplicationAdvancedConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationAdvancedConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the authorization type of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationAuthorizationTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationAuthorizationTypeResponse
   */
  async updateApplicationAuthorizationTypeWithOptions(request: $_model.UpdateApplicationAuthorizationTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationAuthorizationTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.authorizationType)) {
      query["AuthorizationType"] = request.authorizationType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationAuthorizationType",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationAuthorizationTypeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationAuthorizationTypeResponse({}));
  }

  /**
   * Modifies the authorization type of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationAuthorizationTypeRequest
   * @returns UpdateApplicationAuthorizationTypeResponse
   */
  async updateApplicationAuthorizationType(request: $_model.UpdateApplicationAuthorizationTypeRequest): Promise<$_model.UpdateApplicationAuthorizationTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationAuthorizationTypeWithOptions(request, runtime);
  }

  /**
   * 更新应用的指定ClientSecret的到期时间
   * 
   * @param request - UpdateApplicationClientSecretExpirationTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationClientSecretExpirationTimeResponse
   */
  async updateApplicationClientSecretExpirationTimeWithOptions(request: $_model.UpdateApplicationClientSecretExpirationTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationClientSecretExpirationTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.expirationTime)) {
      query["ExpirationTime"] = request.expirationTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationClientSecretExpirationTime",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationClientSecretExpirationTimeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationClientSecretExpirationTimeResponse({}));
  }

  /**
   * 更新应用的指定ClientSecret的到期时间
   * 
   * @param request - UpdateApplicationClientSecretExpirationTimeRequest
   * @returns UpdateApplicationClientSecretExpirationTimeResponse
   */
  async updateApplicationClientSecretExpirationTime(request: $_model.UpdateApplicationClientSecretExpirationTimeRequest): Promise<$_model.UpdateApplicationClientSecretExpirationTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationClientSecretExpirationTimeWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescriptionWithOptions(request: $_model.UpdateApplicationDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationDescriptionRequest
   * @returns UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescription(request: $_model.UpdateApplicationDescriptionRequest): Promise<$_model.UpdateApplicationDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新应用联邦凭证
   * 
   * @param request - UpdateApplicationFederatedCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationFederatedCredentialResponse
   */
  async updateApplicationFederatedCredentialWithOptions(request: $_model.UpdateApplicationFederatedCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationFederatedCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationFederatedCredentialId)) {
      query["ApplicationFederatedCredentialId"] = request.applicationFederatedCredentialId;
    }

    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.attributeMappings)) {
      query["AttributeMappings"] = request.attributeMappings;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.verificationCondition)) {
      query["VerificationCondition"] = request.verificationCondition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationFederatedCredential",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationFederatedCredentialResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationFederatedCredentialResponse({}));
  }

  /**
   * 更新应用联邦凭证
   * 
   * @param request - UpdateApplicationFederatedCredentialRequest
   * @returns UpdateApplicationFederatedCredentialResponse
   */
  async updateApplicationFederatedCredential(request: $_model.UpdateApplicationFederatedCredentialRequest): Promise<$_model.UpdateApplicationFederatedCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationFederatedCredentialWithOptions(request, runtime);
  }

  /**
   * 更新应用联邦凭证描述
   * 
   * @param request - UpdateApplicationFederatedCredentialDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationFederatedCredentialDescriptionResponse
   */
  async updateApplicationFederatedCredentialDescriptionWithOptions(request: $_model.UpdateApplicationFederatedCredentialDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationFederatedCredentialDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationFederatedCredentialId)) {
      query["ApplicationFederatedCredentialId"] = request.applicationFederatedCredentialId;
    }

    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationFederatedCredentialDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationFederatedCredentialDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationFederatedCredentialDescriptionResponse({}));
  }

  /**
   * 更新应用联邦凭证描述
   * 
   * @param request - UpdateApplicationFederatedCredentialDescriptionRequest
   * @returns UpdateApplicationFederatedCredentialDescriptionResponse
   */
  async updateApplicationFederatedCredentialDescription(request: $_model.UpdateApplicationFederatedCredentialDescriptionRequest): Promise<$_model.UpdateApplicationFederatedCredentialDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationFederatedCredentialDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新应用基本信息
   * 
   * @param request - UpdateApplicationInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationInfoResponse
   */
  async updateApplicationInfoWithOptions(request: $_model.UpdateApplicationInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.applicationVisibility)) {
      query["ApplicationVisibility"] = request.applicationVisibility;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationInfo",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationInfoResponse({}));
  }

  /**
   * 更新应用基本信息
   * 
   * @param request - UpdateApplicationInfoRequest
   * @returns UpdateApplicationInfoResponse
   */
  async updateApplicationInfo(request: $_model.UpdateApplicationInfoRequest): Promise<$_model.UpdateApplicationInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationInfoWithOptions(request, runtime);
  }

  /**
   * 修改应用角色
   * 
   * @param request - UpdateApplicationRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationRoleResponse
   */
  async updateApplicationRoleWithOptions(request: $_model.UpdateApplicationRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.applicationRoleName)) {
      query["ApplicationRoleName"] = request.applicationRoleName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationRole",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationRoleResponse({}));
  }

  /**
   * 修改应用角色
   * 
   * @param request - UpdateApplicationRoleRequest
   * @returns UpdateApplicationRoleResponse
   */
  async updateApplicationRole(request: $_model.UpdateApplicationRoleRequest): Promise<$_model.UpdateApplicationRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationRoleWithOptions(request, runtime);
  }

  /**
   * 修改应用角色描述
   * 
   * @param request - UpdateApplicationRoleDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationRoleDescriptionResponse
   */
  async updateApplicationRoleDescriptionWithOptions(request: $_model.UpdateApplicationRoleDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationRoleDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationRoleId)) {
      query["ApplicationRoleId"] = request.applicationRoleId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationRoleDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationRoleDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationRoleDescriptionResponse({}));
  }

  /**
   * 修改应用角色描述
   * 
   * @param request - UpdateApplicationRoleDescriptionRequest
   * @returns UpdateApplicationRoleDescriptionResponse
   */
  async updateApplicationRoleDescription(request: $_model.UpdateApplicationRoleDescriptionRequest): Promise<$_model.UpdateApplicationRoleDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationRoleDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新模板应用的SSO参数
   * 
   * @param request - UpdateApplicationSsoFormParamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationSsoFormParamsResponse
   */
  async updateApplicationSsoFormParamsWithOptions(request: $_model.UpdateApplicationSsoFormParamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationSsoFormParamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationTemplateParams)) {
      query["ApplicationTemplateParams"] = request.applicationTemplateParams;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationSsoFormParams",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationSsoFormParamsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationSsoFormParamsResponse({}));
  }

  /**
   * 更新模板应用的SSO参数
   * 
   * @param request - UpdateApplicationSsoFormParamsRequest
   * @returns UpdateApplicationSsoFormParamsResponse
   */
  async updateApplicationSsoFormParams(request: $_model.UpdateApplicationSsoFormParamsRequest): Promise<$_model.UpdateApplicationSsoFormParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationSsoFormParamsWithOptions(request, runtime);
  }

  /**
   * 更新ApplicationToken过期时间
   * 
   * @param request - UpdateApplicationTokenExpirationTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationTokenExpirationTimeResponse
   */
  async updateApplicationTokenExpirationTimeWithOptions(request: $_model.UpdateApplicationTokenExpirationTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationTokenExpirationTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationTokenId)) {
      query["ApplicationTokenId"] = request.applicationTokenId;
    }

    if (!$dara.isNull(request.expirationTime)) {
      query["ExpirationTime"] = request.expirationTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationTokenExpirationTime",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationTokenExpirationTimeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationTokenExpirationTimeResponse({}));
  }

  /**
   * 更新ApplicationToken过期时间
   * 
   * @param request - UpdateApplicationTokenExpirationTimeRequest
   * @returns UpdateApplicationTokenExpirationTimeResponse
   */
  async updateApplicationTokenExpirationTime(request: $_model.UpdateApplicationTokenExpirationTimeRequest): Promise<$_model.UpdateApplicationTokenExpirationTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationTokenExpirationTimeWithOptions(request, runtime);
  }

  /**
   * 更新授权规则信息
   * 
   * @param request - UpdateAuthorizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuthorizationRuleResponse
   */
  async updateAuthorizationRuleWithOptions(request: $_model.UpdateAuthorizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAuthorizationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationResourceScope)) {
      query["AuthorizationResourceScope"] = request.authorizationResourceScope;
    }

    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.authorizationRuleName)) {
      query["AuthorizationRuleName"] = request.authorizationRuleName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAuthorizationRule",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAuthorizationRuleResponse({}));
  }

  /**
   * 更新授权规则信息
   * 
   * @param request - UpdateAuthorizationRuleRequest
   * @returns UpdateAuthorizationRuleResponse
   */
  async updateAuthorizationRule(request: $_model.UpdateAuthorizationRuleRequest): Promise<$_model.UpdateAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAuthorizationRuleWithOptions(request, runtime);
  }

  /**
   * 更新授权规则应用关联关系属性
   * 
   * @param request - UpdateAuthorizationRuleApplicationAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuthorizationRuleApplicationAttachmentResponse
   */
  async updateAuthorizationRuleApplicationAttachmentWithOptions(request: $_model.UpdateAuthorizationRuleApplicationAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAuthorizationRuleApplicationAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    if (!$dara.isNull(request.validityType)) {
      query["ValidityType"] = request.validityType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAuthorizationRuleApplicationAttachment",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAuthorizationRuleApplicationAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAuthorizationRuleApplicationAttachmentResponse({}));
  }

  /**
   * 更新授权规则应用关联关系属性
   * 
   * @param request - UpdateAuthorizationRuleApplicationAttachmentRequest
   * @returns UpdateAuthorizationRuleApplicationAttachmentResponse
   */
  async updateAuthorizationRuleApplicationAttachment(request: $_model.UpdateAuthorizationRuleApplicationAttachmentRequest): Promise<$_model.UpdateAuthorizationRuleApplicationAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAuthorizationRuleApplicationAttachmentWithOptions(request, runtime);
  }

  /**
   * 更新授权规则描述信息
   * 
   * @param request - UpdateAuthorizationRuleDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuthorizationRuleDescriptionResponse
   */
  async updateAuthorizationRuleDescriptionWithOptions(request: $_model.UpdateAuthorizationRuleDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAuthorizationRuleDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAuthorizationRuleDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAuthorizationRuleDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAuthorizationRuleDescriptionResponse({}));
  }

  /**
   * 更新授权规则描述信息
   * 
   * @param request - UpdateAuthorizationRuleDescriptionRequest
   * @returns UpdateAuthorizationRuleDescriptionResponse
   */
  async updateAuthorizationRuleDescription(request: $_model.UpdateAuthorizationRuleDescriptionRequest): Promise<$_model.UpdateAuthorizationRuleDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAuthorizationRuleDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新授权规则组关联关系属性
   * 
   * @param request - UpdateAuthorizationRuleGroupAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuthorizationRuleGroupAttachmentResponse
   */
  async updateAuthorizationRuleGroupAttachmentWithOptions(request: $_model.UpdateAuthorizationRuleGroupAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAuthorizationRuleGroupAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    if (!$dara.isNull(request.validityType)) {
      query["ValidityType"] = request.validityType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAuthorizationRuleGroupAttachment",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAuthorizationRuleGroupAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAuthorizationRuleGroupAttachmentResponse({}));
  }

  /**
   * 更新授权规则组关联关系属性
   * 
   * @param request - UpdateAuthorizationRuleGroupAttachmentRequest
   * @returns UpdateAuthorizationRuleGroupAttachmentResponse
   */
  async updateAuthorizationRuleGroupAttachment(request: $_model.UpdateAuthorizationRuleGroupAttachmentRequest): Promise<$_model.UpdateAuthorizationRuleGroupAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAuthorizationRuleGroupAttachmentWithOptions(request, runtime);
  }

  /**
   * 更新授权规则账户关联关系属性
   * 
   * @param request - UpdateAuthorizationRuleUserAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuthorizationRuleUserAttachmentResponse
   */
  async updateAuthorizationRuleUserAttachmentWithOptions(request: $_model.UpdateAuthorizationRuleUserAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAuthorizationRuleUserAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    if (!$dara.isNull(request.validityType)) {
      query["ValidityType"] = request.validityType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAuthorizationRuleUserAttachment",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAuthorizationRuleUserAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAuthorizationRuleUserAttachmentResponse({}));
  }

  /**
   * 更新授权规则账户关联关系属性
   * 
   * @param request - UpdateAuthorizationRuleUserAttachmentRequest
   * @returns UpdateAuthorizationRuleUserAttachmentResponse
   */
  async updateAuthorizationRuleUserAttachment(request: $_model.UpdateAuthorizationRuleUserAttachmentRequest): Promise<$_model.UpdateAuthorizationRuleUserAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAuthorizationRuleUserAttachmentWithOptions(request, runtime);
  }

  /**
   * 修改品牌
   * 
   * @param request - UpdateBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBrandResponse
   */
  async updateBrandWithOptions(request: $_model.UpdateBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.brandName)) {
      query["BrandName"] = request.brandName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBrandResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBrandResponse({}));
  }

  /**
   * 修改品牌
   * 
   * @param request - UpdateBrandRequest
   * @returns UpdateBrandResponse
   */
  async updateBrand(request: $_model.UpdateBrandRequest): Promise<$_model.UpdateBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBrandWithOptions(request, runtime);
  }

  /**
   * 更新云账号
   * 
   * @param request - UpdateCloudAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudAccountResponse
   */
  async updateCloudAccountWithOptions(request: $_model.UpdateCloudAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cloudAccountId)) {
      query["CloudAccountId"] = request.cloudAccountId;
    }

    if (!$dara.isNull(request.cloudAccountName)) {
      query["CloudAccountName"] = request.cloudAccountName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudAccount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudAccountResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudAccountResponse({}));
  }

  /**
   * 更新云账号
   * 
   * @param request - UpdateCloudAccountRequest
   * @returns UpdateCloudAccountResponse
   */
  async updateCloudAccount(request: $_model.UpdateCloudAccountRequest): Promise<$_model.UpdateCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudAccountWithOptions(request, runtime);
  }

  /**
   * 更新云账号描述
   * 
   * @param request - UpdateCloudAccountDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudAccountDescriptionResponse
   */
  async updateCloudAccountDescriptionWithOptions(request: $_model.UpdateCloudAccountDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudAccountDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cloudAccountId)) {
      query["CloudAccountId"] = request.cloudAccountId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudAccountDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudAccountDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudAccountDescriptionResponse({}));
  }

  /**
   * 更新云账号描述
   * 
   * @param request - UpdateCloudAccountDescriptionRequest
   * @returns UpdateCloudAccountDescriptionResponse
   */
  async updateCloudAccountDescription(request: $_model.UpdateCloudAccountDescriptionRequest): Promise<$_model.UpdateCloudAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新云角色描述
   * 
   * @param request - UpdateCloudAccountRoleDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudAccountRoleDescriptionResponse
   */
  async updateCloudAccountRoleDescriptionWithOptions(request: $_model.UpdateCloudAccountRoleDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudAccountRoleDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cloudAccountId)) {
      query["CloudAccountId"] = request.cloudAccountId;
    }

    if (!$dara.isNull(request.cloudAccountRoleId)) {
      query["CloudAccountRoleId"] = request.cloudAccountRoleId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudAccountRoleDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudAccountRoleDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudAccountRoleDescriptionResponse({}));
  }

  /**
   * 更新云角色描述
   * 
   * @param request - UpdateCloudAccountRoleDescriptionRequest
   * @returns UpdateCloudAccountRoleDescriptionResponse
   */
  async updateCloudAccountRoleDescription(request: $_model.UpdateCloudAccountRoleDescriptionRequest): Promise<$_model.UpdateCloudAccountRoleDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudAccountRoleDescriptionWithOptions(request, runtime);
  }

  /**
   * Update Conditional Access Policy
   * 
   * @remarks
   * Update Conditional Access Policy
   * 
   * @param request - UpdateConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConditionalAccessPolicyResponse
   */
  async updateConditionalAccessPolicyWithOptions(request: $_model.UpdateConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.conditionalAccessPolicyName)) {
      query["ConditionalAccessPolicyName"] = request.conditionalAccessPolicyName;
    }

    if (!$dara.isNull(request.conditionsConfig)) {
      query["ConditionsConfig"] = request.conditionsConfig;
    }

    if (!$dara.isNull(request.decisionConfig)) {
      query["DecisionConfig"] = request.decisionConfig;
    }

    if (!$dara.isNull(request.decisionType)) {
      query["DecisionType"] = request.decisionType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConditionalAccessPolicyResponse({}));
  }

  /**
   * Update Conditional Access Policy
   * 
   * @remarks
   * Update Conditional Access Policy
   * 
   * @param request - UpdateConditionalAccessPolicyRequest
   * @returns UpdateConditionalAccessPolicyResponse
   */
  async updateConditionalAccessPolicy(request: $_model.UpdateConditionalAccessPolicyRequest): Promise<$_model.UpdateConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Update Conditional Access Policy Description
   * 
   * @remarks
   * Update Conditional Access Policy Description
   * 
   * @param request - UpdateConditionalAccessPolicyDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConditionalAccessPolicyDescriptionResponse
   */
  async updateConditionalAccessPolicyDescriptionWithOptions(request: $_model.UpdateConditionalAccessPolicyDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConditionalAccessPolicyDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConditionalAccessPolicyDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConditionalAccessPolicyDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConditionalAccessPolicyDescriptionResponse({}));
  }

  /**
   * Update Conditional Access Policy Description
   * 
   * @remarks
   * Update Conditional Access Policy Description
   * 
   * @param request - UpdateConditionalAccessPolicyDescriptionRequest
   * @returns UpdateConditionalAccessPolicyDescriptionResponse
   */
  async updateConditionalAccessPolicyDescription(request: $_model.UpdateConditionalAccessPolicyDescriptionRequest): Promise<$_model.UpdateConditionalAccessPolicyDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConditionalAccessPolicyDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新自定义条款
   * 
   * @param request - UpdateCustomPrivacyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomPrivacyPolicyResponse
   */
  async updateCustomPrivacyPolicyWithOptions(request: $_model.UpdateCustomPrivacyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomPrivacyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customPrivacyPolicyContents)) {
      query["CustomPrivacyPolicyContents"] = request.customPrivacyPolicyContents;
    }

    if (!$dara.isNull(request.customPrivacyPolicyId)) {
      query["CustomPrivacyPolicyId"] = request.customPrivacyPolicyId;
    }

    if (!$dara.isNull(request.customPrivacyPolicyName)) {
      query["CustomPrivacyPolicyName"] = request.customPrivacyPolicyName;
    }

    if (!$dara.isNull(request.defaultLanguageCode)) {
      query["DefaultLanguageCode"] = request.defaultLanguageCode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userConsentType)) {
      query["UserConsentType"] = request.userConsentType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomPrivacyPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomPrivacyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomPrivacyPolicyResponse({}));
  }

  /**
   * 更新自定义条款
   * 
   * @param request - UpdateCustomPrivacyPolicyRequest
   * @returns UpdateCustomPrivacyPolicyResponse
   */
  async updateCustomPrivacyPolicy(request: $_model.UpdateCustomPrivacyPolicyRequest): Promise<$_model.UpdateCustomPrivacyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomPrivacyPolicyWithOptions(request, runtime);
  }

  /**
   * 修改域名关联的品牌。
   * 
   * @param request - UpdateDomainBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainBrandResponse
   */
  async updateDomainBrandWithOptions(request: $_model.UpdateDomainBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandId)) {
      query["BrandId"] = request.brandId;
    }

    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomainBrand",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainBrandResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDomainBrandResponse({}));
  }

  /**
   * 修改域名关联的品牌。
   * 
   * @param request - UpdateDomainBrandRequest
   * @returns UpdateDomainBrandResponse
   */
  async updateDomainBrand(request: $_model.UpdateDomainBrandRequest): Promise<$_model.UpdateDomainBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDomainBrandWithOptions(request, runtime);
  }

  /**
   * 更新域名备案号。
   * 
   * @param request - UpdateDomainIcpNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainIcpNumberResponse
   */
  async updateDomainIcpNumberWithOptions(request: $_model.UpdateDomainIcpNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainIcpNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.icpNumber)) {
      query["IcpNumber"] = request.icpNumber;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomainIcpNumber",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainIcpNumberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDomainIcpNumberResponse({}));
  }

  /**
   * 更新域名备案号。
   * 
   * @param request - UpdateDomainIcpNumberRequest
   * @returns UpdateDomainIcpNumberResponse
   */
  async updateDomainIcpNumber(request: $_model.UpdateDomainIcpNumberRequest): Promise<$_model.UpdateDomainIcpNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDomainIcpNumberWithOptions(request, runtime);
  }

  /**
   * 更新联邦凭证提供方
   * 
   * @param request - UpdateFederatedCredentialProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFederatedCredentialProviderResponse
   */
  async updateFederatedCredentialProviderWithOptions(request: $_model.UpdateFederatedCredentialProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFederatedCredentialProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.federatedCredentialProviderId)) {
      query["FederatedCredentialProviderId"] = request.federatedCredentialProviderId;
    }

    if (!$dara.isNull(request.federatedCredentialProviderName)) {
      query["FederatedCredentialProviderName"] = request.federatedCredentialProviderName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.oidcProviderConfig)) {
      query["OidcProviderConfig"] = request.oidcProviderConfig;
    }

    if (!$dara.isNull(request.pkcs7ProviderConfig)) {
      query["Pkcs7ProviderConfig"] = request.pkcs7ProviderConfig;
    }

    if (!$dara.isNull(request.privateCaProviderConfig)) {
      query["PrivateCaProviderConfig"] = request.privateCaProviderConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFederatedCredentialProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFederatedCredentialProviderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFederatedCredentialProviderResponse({}));
  }

  /**
   * 更新联邦凭证提供方
   * 
   * @param request - UpdateFederatedCredentialProviderRequest
   * @returns UpdateFederatedCredentialProviderResponse
   */
  async updateFederatedCredentialProvider(request: $_model.UpdateFederatedCredentialProviderRequest): Promise<$_model.UpdateFederatedCredentialProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFederatedCredentialProviderWithOptions(request, runtime);
  }

  /**
   * 更新联邦凭证提供方描述
   * 
   * @param request - UpdateFederatedCredentialProviderDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFederatedCredentialProviderDescriptionResponse
   */
  async updateFederatedCredentialProviderDescriptionWithOptions(request: $_model.UpdateFederatedCredentialProviderDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFederatedCredentialProviderDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.federatedCredentialProviderId)) {
      query["FederatedCredentialProviderId"] = request.federatedCredentialProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFederatedCredentialProviderDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFederatedCredentialProviderDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFederatedCredentialProviderDescriptionResponse({}));
  }

  /**
   * 更新联邦凭证提供方描述
   * 
   * @param request - UpdateFederatedCredentialProviderDescriptionRequest
   * @returns UpdateFederatedCredentialProviderDescriptionResponse
   */
  async updateFederatedCredentialProviderDescription(request: $_model.UpdateFederatedCredentialProviderDescriptionRequest): Promise<$_model.UpdateFederatedCredentialProviderDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFederatedCredentialProviderDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the information about an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the information is empty, the information is not updated by default.
   * 
   * @param request - UpdateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(request: $_model.UpdateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2021-12-01",
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
   * Updates the information about an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the information is empty, the information is not updated by default.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: $_model.UpdateGroupRequest): Promise<$_model.UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
   * Updates the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account group.
   * 
   * @param request - UpdateGroupDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupDescriptionResponse
   */
  async updateGroupDescriptionWithOptions(request: $_model.UpdateGroupDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroupDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGroupDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGroupDescriptionResponse({}));
  }

  /**
   * Updates the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account group.
   * 
   * @param request - UpdateGroupDescriptionRequest
   * @returns UpdateGroupDescriptionResponse
   */
  async updateGroupDescription(request: $_model.UpdateGroupDescriptionRequest): Promise<$_model.UpdateGroupDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGroupDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新idp基础配置
   * 
   * @param request - UpdateIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProviderWithOptions(request: $_model.UpdateIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dingtalkAppConfig)) {
      query["DingtalkAppConfig"] = request.dingtalkAppConfig;
    }

    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.identityProviderName)) {
      query["IdentityProviderName"] = request.identityProviderName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.larkConfig)) {
      query["LarkConfig"] = request.larkConfig;
    }

    if (!$dara.isNull(request.ldapConfig)) {
      query["LdapConfig"] = request.ldapConfig;
    }

    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.oidcConfig)) {
      query["OidcConfig"] = request.oidcConfig;
    }

    if (!$dara.isNull(request.weComConfig)) {
      query["WeComConfig"] = request.weComConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIdentityProvider",
      version: "2021-12-01",
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
   * 更新idp基础配置
   * 
   * @param request - UpdateIdentityProviderRequest
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProvider(request: $_model.UpdateIdentityProviderRequest): Promise<$_model.UpdateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceDescriptionResponse
   */
  async updateInstanceDescriptionWithOptions(request: $_model.UpdateInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateInstanceDescriptionRequest
   * @returns UpdateInstanceDescriptionResponse
   */
  async updateInstanceDescription(request: $_model.UpdateInstanceDescriptionRequest): Promise<$_model.UpdateInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新一个专属网络端点的名称。
   * 
   * @param request - UpdateNetworkAccessEndpointNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNetworkAccessEndpointNameResponse
   */
  async updateNetworkAccessEndpointNameWithOptions(request: $_model.UpdateNetworkAccessEndpointNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNetworkAccessEndpointNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.networkAccessEndpointName)) {
      query["NetworkAccessEndpointName"] = request.networkAccessEndpointName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNetworkAccessEndpointName",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNetworkAccessEndpointNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNetworkAccessEndpointNameResponse({}));
  }

  /**
   * 更新一个专属网络端点的名称。
   * 
   * @param request - UpdateNetworkAccessEndpointNameRequest
   * @returns UpdateNetworkAccessEndpointNameResponse
   */
  async updateNetworkAccessEndpointName(request: $_model.UpdateNetworkAccessEndpointNameRequest): Promise<$_model.UpdateNetworkAccessEndpointNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNetworkAccessEndpointNameWithOptions(request, runtime);
  }

  /**
   * 更新网络区域对象
   * 
   * @param request - UpdateNetworkZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNetworkZoneResponse
   */
  async updateNetworkZoneWithOptions(request: $_model.UpdateNetworkZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNetworkZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipv4Cidrs)) {
      query["Ipv4Cidrs"] = request.ipv4Cidrs;
    }

    if (!$dara.isNull(request.ipv6Cidrs)) {
      query["Ipv6Cidrs"] = request.ipv6Cidrs;
    }

    if (!$dara.isNull(request.networkZoneId)) {
      query["NetworkZoneId"] = request.networkZoneId;
    }

    if (!$dara.isNull(request.networkZoneName)) {
      query["NetworkZoneName"] = request.networkZoneName;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNetworkZone",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNetworkZoneResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNetworkZoneResponse({}));
  }

  /**
   * 更新网络区域对象
   * 
   * @param request - UpdateNetworkZoneRequest
   * @returns UpdateNetworkZoneResponse
   */
  async updateNetworkZone(request: $_model.UpdateNetworkZoneRequest): Promise<$_model.UpdateNetworkZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNetworkZoneWithOptions(request, runtime);
  }

  /**
   * 更新网络区域对象描述
   * 
   * @param request - UpdateNetworkZoneDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNetworkZoneDescriptionResponse
   */
  async updateNetworkZoneDescriptionWithOptions(request: $_model.UpdateNetworkZoneDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNetworkZoneDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkZoneId)) {
      query["NetworkZoneId"] = request.networkZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNetworkZoneDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNetworkZoneDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNetworkZoneDescriptionResponse({}));
  }

  /**
   * 更新网络区域对象描述
   * 
   * @param request - UpdateNetworkZoneDescriptionRequest
   * @returns UpdateNetworkZoneDescriptionResponse
   */
  async updateNetworkZoneDescription(request: $_model.UpdateNetworkZoneDescriptionRequest): Promise<$_model.UpdateNetworkZoneDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNetworkZoneDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) organization. The basic information about the organization is not updated by default if no parameter is specified.
   * 
   * @param request - UpdateOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitResponse
   */
  async updateOrganizationalUnitWithOptions(request: $_model.UpdateOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOrganizationalUnitResponse({}));
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) organization. The basic information about the organization is not updated by default if no parameter is specified.
   * 
   * @param request - UpdateOrganizationalUnitRequest
   * @returns UpdateOrganizationalUnitResponse
   */
  async updateOrganizationalUnit(request: $_model.UpdateOrganizationalUnitRequest): Promise<$_model.UpdateOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - UpdateOrganizationalUnitDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitDescriptionResponse
   */
  async updateOrganizationalUnitDescriptionWithOptions(request: $_model.UpdateOrganizationalUnitDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOrganizationalUnitDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganizationalUnitDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOrganizationalUnitDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOrganizationalUnitDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - UpdateOrganizationalUnitDescriptionRequest
   * @returns UpdateOrganizationalUnitDescriptionResponse
   */
  async updateOrganizationalUnitDescription(request: $_model.UpdateOrganizationalUnitDescriptionRequest): Promise<$_model.UpdateOrganizationalUnitDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOrganizationalUnitDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the parent organization ID of an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). In this case, the organization is moved from a parent node to a new node.
   * 
   * @param request - UpdateOrganizationalUnitParentIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitParentIdResponse
   */
  async updateOrganizationalUnitParentIdWithOptions(request: $_model.UpdateOrganizationalUnitParentIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOrganizationalUnitParentIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganizationalUnitParentId",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOrganizationalUnitParentIdResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOrganizationalUnitParentIdResponse({}));
  }

  /**
   * Updates the parent organization ID of an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). In this case, the organization is moved from a parent node to a new node.
   * 
   * @param request - UpdateOrganizationalUnitParentIdRequest
   * @returns UpdateOrganizationalUnitParentIdResponse
   */
  async updateOrganizationalUnitParentId(request: $_model.UpdateOrganizationalUnitParentIdRequest): Promise<$_model.UpdateOrganizationalUnitParentIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOrganizationalUnitParentIdWithOptions(request, runtime);
  }

  /**
   * 更新指定ResourceServer下的Scope
   * 
   * @param request - UpdateResourceServerScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceServerScopeResponse
   */
  async updateResourceServerScopeWithOptions(request: $_model.UpdateResourceServerScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceServerScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceServerScopeId)) {
      query["ResourceServerScopeId"] = request.resourceServerScopeId;
    }

    if (!$dara.isNull(request.resourceServerScopeName)) {
      query["ResourceServerScopeName"] = request.resourceServerScopeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceServerScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceServerScopeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceServerScopeResponse({}));
  }

  /**
   * 更新指定ResourceServer下的Scope
   * 
   * @param request - UpdateResourceServerScopeRequest
   * @returns UpdateResourceServerScopeResponse
   */
  async updateResourceServerScope(request: $_model.UpdateResourceServerScopeRequest): Promise<$_model.UpdateResourceServerScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceServerScopeWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customFields)) {
      query["CustomFields"] = request.customFields;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.emailVerified)) {
      query["EmailVerified"] = request.emailVerified;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.phoneNumberVerified)) {
      query["PhoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!$dara.isNull(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2021-12-01",
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
   * Updates the basic information about an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - UpdateUserDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDescriptionResponse
   */
  async updateUserDescriptionWithOptions(request: $_model.UpdateUserDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - UpdateUserDescriptionRequest
   * @returns UpdateUserDescriptionResponse
   */
  async updateUserDescription(request: $_model.UpdateUserDescriptionRequest): Promise<$_model.UpdateUserDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the password information of an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The password must meet the requirements of the password policies that are configured in the IDaaS console.
   * 
   * @param request - UpdateUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserPasswordResponse
   */
  async updateUserPasswordWithOptions(request: $_model.UpdateUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordForcedUpdateStatus)) {
      query["PasswordForcedUpdateStatus"] = request.passwordForcedUpdateStatus;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userNotificationChannels)) {
      query["UserNotificationChannels"] = request.userNotificationChannels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserPassword",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserPasswordResponse({}));
  }

  /**
   * Updates the password information of an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The password must meet the requirements of the password policies that are configured in the IDaaS console.
   * 
   * @param request - UpdateUserPasswordRequest
   * @returns UpdateUserPasswordResponse
   */
  async updateUserPassword(request: $_model.UpdateUserPasswordRequest): Promise<$_model.UpdateUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserPasswordWithOptions(request, runtime);
  }

}
