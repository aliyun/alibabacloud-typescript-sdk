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
      'cn-shanghai': "eds-user.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "eds-user.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eds-user", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Add or remove local administrator permissions on a cloud computer for a convenience account.
   * 
   * @remarks
   * A convenience account with local administrator permissions can install software or modify certain system settings on the cloud computer.
   * 
   * @param request - BatchSetDesktopManagerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSetDesktopManagerResponse
   */
  async batchSetDesktopManagerWithOptions(request: $_model.BatchSetDesktopManagerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSetDesktopManagerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.isDesktopManager)) {
      body["IsDesktopManager"] = request.isDesktopManager;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSetDesktopManager",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSetDesktopManagerResponse>(await this.callApi(params, req, runtime), new $_model.BatchSetDesktopManagerResponse({}));
  }

  /**
   * Add or remove local administrator permissions on a cloud computer for a convenience account.
   * 
   * @remarks
   * A convenience account with local administrator permissions can install software or modify certain system settings on the cloud computer.
   * 
   * @param request - BatchSetDesktopManagerRequest
   * @returns BatchSetDesktopManagerResponse
   */
  async batchSetDesktopManager(request: $_model.BatchSetDesktopManagerRequest): Promise<$_model.BatchSetDesktopManagerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetDesktopManagerWithOptions(request, runtime);
  }

  /**
   * When the administrator activates the mode, you can use this API to modify the user logon password.
   * 
   * @param request - ChangeUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeUserPasswordResponse
   */
  async changeUserPasswordWithOptions(request: $_model.ChangeUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeUserPasswordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.newPassword)) {
      body["NewPassword"] = request.newPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeUserPassword",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ChangeUserPasswordResponse({}));
  }

  /**
   * When the administrator activates the mode, you can use this API to modify the user logon password.
   * 
   * @param request - ChangeUserPasswordRequest
   * @returns ChangeUserPasswordResponse
   */
  async changeUserPassword(request: $_model.ChangeUserPasswordRequest): Promise<$_model.ChangeUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeUserPasswordWithOptions(request, runtime);
  }

  /**
   * Query the number of convenience accounts associated with a specified custom property.
   * 
   * @param request - CheckUsedPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUsedPropertyResponse
   */
  async checkUsedPropertyWithOptions(request: $_model.CheckUsedPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUsedPropertyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.propertyId)) {
      query["PropertyId"] = request.propertyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckUsedProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckUsedPropertyResponse>(await this.callApi(params, req, runtime), new $_model.CheckUsedPropertyResponse({}));
  }

  /**
   * Query the number of convenience accounts associated with a specified custom property.
   * 
   * @param request - CheckUsedPropertyRequest
   * @returns CheckUsedPropertyResponse
   */
  async checkUsedProperty(request: $_model.CheckUsedPropertyRequest): Promise<$_model.CheckUsedPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUsedPropertyWithOptions(request, runtime);
  }

  /**
   * Query the number of convenience accounts associated with a specified custom attribute value.
   * 
   * @param request - CheckUsedPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUsedPropertyValueResponse
   */
  async checkUsedPropertyValueWithOptions(request: $_model.CheckUsedPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUsedPropertyValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.propertyId)) {
      query["PropertyId"] = request.propertyId;
    }

    if (!$dara.isNull(request.propertyValueId)) {
      query["PropertyValueId"] = request.propertyValueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckUsedPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckUsedPropertyValueResponse>(await this.callApi(params, req, runtime), new $_model.CheckUsedPropertyValueResponse({}));
  }

  /**
   * Query the number of convenience accounts associated with a specified custom attribute value.
   * 
   * @param request - CheckUsedPropertyValueRequest
   * @returns CheckUsedPropertyValueResponse
   */
  async checkUsedPropertyValue(request: $_model.CheckUsedPropertyValueRequest): Promise<$_model.CheckUsedPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUsedPropertyValueWithOptions(request, runtime);
  }

  /**
   * Create a group.
   * 
   * @param request - CreateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: $_model.CreateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.parentGroupId)) {
      query["ParentGroupId"] = request.parentGroupId;
    }

    if (!$dara.isNull(request.solutionId)) {
      query["SolutionId"] = request.solutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2021-03-08",
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
   * Create a group.
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * Create an organization.
   * 
   * @param request - CreateOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrgResponse
   */
  async createOrgWithOptions(request: $_model.CreateOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.orgName)) {
      query["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.parentOrgId)) {
      query["ParentOrgId"] = request.parentOrgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrg",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrgResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrgResponse({}));
  }

  /**
   * Create an organization.
   * 
   * @param request - CreateOrgRequest
   * @returns CreateOrgResponse
   */
  async createOrg(request: $_model.CreateOrgRequest): Promise<$_model.CreateOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrgWithOptions(request, runtime);
  }

  /**
   * Create a user attribute.
   * 
   * @remarks
   * - You can create up to 10 different properties under one Alibaba Cloud account. Each property includes a property name (PropertyKey) and multiple attribute values (PropertyValue).  
   * - You can add up to 50 different attribute values to a single property.
   * 
   * @param request - CreatePropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePropertyResponse
   */
  async createPropertyWithOptions(request: $_model.CreatePropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePropertyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.propertyKey)) {
      body["PropertyKey"] = request.propertyKey;
    }

    if (!$dara.isNull(request.propertyValues)) {
      body["PropertyValues"] = request.propertyValues;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePropertyResponse>(await this.callApi(params, req, runtime), new $_model.CreatePropertyResponse({}));
  }

  /**
   * Create a user attribute.
   * 
   * @remarks
   * - You can create up to 10 different properties under one Alibaba Cloud account. Each property includes a property name (PropertyKey) and multiple attribute values (PropertyValue).  
   * - You can add up to 50 different attribute values to a single property.
   * 
   * @param request - CreatePropertyRequest
   * @returns CreatePropertyResponse
   */
  async createProperty(request: $_model.CreatePropertyRequest): Promise<$_model.CreatePropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPropertyWithOptions(request, runtime);
  }

  /**
   * Creates a resource group.
   * 
   * @param request - CreateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroupWithOptions(request: $_model.CreateResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.enableAliyunResourceGroup)) {
      query["EnableAliyunResourceGroup"] = request.enableAliyunResourceGroup;
    }

    if (!$dara.isNull(request.isResourceGroupWithOfficeSite)) {
      query["IsResourceGroupWithOfficeSite"] = request.isResourceGroupWithOfficeSite;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.resourceClassification)) {
      query["ResourceClassification"] = request.resourceClassification;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceGroup",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceGroupResponse({}));
  }

  /**
   * Creates a resource group.
   * 
   * @param request - CreateResourceGroupRequest
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroup(request: $_model.CreateResourceGroupRequest): Promise<$_model.CreateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceGroupWithOptions(request, runtime);
  }

  /**
   * Easily create accounts for your end users.
   * 
   * @remarks
   * <props="china">
   * A convenience account is a dedicated account system in Wuying Workspace for simple use cases that do not require enterprise AD integration. Accounts require a username, and either an email or a phone number.
   * <props="intl">
   * A convenience account is a dedicated account system in Wuying Workspace for simple use cases that do not require enterprise AD integration. Accounts require both a username and an email.
   * 
   * @param request - CreateUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUsersResponse
   */
  async createUsersWithOptions(request: $_model.CreateUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoLockTime)) {
      query["AutoLockTime"] = request.autoLockTime;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.isLocalAdmin)) {
      query["IsLocalAdmin"] = request.isLocalAdmin;
    }

    if (!$dara.isNull(request.passwordExpireDays)) {
      query["PasswordExpireDays"] = request.passwordExpireDays;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUsersResponse>(await this.callApi(params, req, runtime), new $_model.CreateUsersResponse({}));
  }

  /**
   * Easily create accounts for your end users.
   * 
   * @remarks
   * <props="china">
   * A convenience account is a dedicated account system in Wuying Workspace for simple use cases that do not require enterprise AD integration. Accounts require a username, and either an email or a phone number.
   * <props="intl">
   * A convenience account is a dedicated account system in Wuying Workspace for simple use cases that do not require enterprise AD integration. Accounts require both a username and an email.
   * 
   * @param request - CreateUsersRequest
   * @returns CreateUsersResponse
   */
  async createUsers(request: $_model.CreateUsersRequest): Promise<$_model.CreateUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUsersWithOptions(request, runtime);
  }

  /**
   * Delete a resource group.
   * 
   * @param request - DeleteResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroupWithOptions(request: $_model.DeleteResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceGroup",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceGroupResponse({}));
  }

  /**
   * Delete a resource group.
   * 
   * @param request - DeleteResourceGroupRequest
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroup(request: $_model.DeleteResourceGroupRequest): Promise<$_model.DeleteResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResourceGroupWithOptions(request, runtime);
  }

  /**
   * Detach a user from a user attribute.
   * 
   * @param request - DeleteUserPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserPropertyValueResponse
   */
  async deleteUserPropertyValueWithOptions(request: $_model.DeleteUserPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserPropertyValueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    if (!$dara.isNull(request.propertyValueId)) {
      body["PropertyValueId"] = request.propertyValueId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserPropertyValueResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserPropertyValueResponse({}));
  }

  /**
   * Detach a user from a user attribute.
   * 
   * @param request - DeleteUserPropertyValueRequest
   * @returns DeleteUserPropertyValueResponse
   */
  async deleteUserPropertyValue(request: $_model.DeleteUserPropertyValueRequest): Promise<$_model.DeleteUserPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserPropertyValueWithOptions(request, runtime);
  }

  /**
   * Query group members.
   * 
   * @param request - DescribeGroupUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupUserResponse
   */
  async describeGroupUserWithOptions(request: $_model.DescribeGroupUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
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

    if (!$dara.isNull(request.solutionId)) {
      query["SolutionId"] = request.solutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupUser",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupUserResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupUserResponse({}));
  }

  /**
   * Query group members.
   * 
   * @param request - DescribeGroupUserRequest
   * @returns DescribeGroupUserResponse
   */
  async describeGroupUser(request: $_model.DescribeGroupUserRequest): Promise<$_model.DescribeGroupUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupUserWithOptions(request, runtime);
  }

  /**
   * Query user groups.
   * 
   * @param request - DescribeGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupsResponse
   */
  async describeGroupsWithOptions(request: $_model.DescribeGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.excludeAttachedLoginPolicyGroups)) {
      query["ExcludeAttachedLoginPolicyGroups"] = request.excludeAttachedLoginPolicyGroups;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.idpId)) {
      query["IdpId"] = request.idpId;
    }

    if (!$dara.isNull(request.loginPolicyId)) {
      query["LoginPolicyId"] = request.loginPolicyId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.solutionId)) {
      query["SolutionId"] = request.solutionId;
    }

    if (!$dara.isNull(request.transferFileNeedApproval)) {
      query["TransferFileNeedApproval"] = request.transferFileNeedApproval;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroups",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupsResponse({}));
  }

  /**
   * Query user groups.
   * 
   * @param request - DescribeGroupsRequest
   * @returns DescribeGroupsResponse
   */
  async describeGroups(request: $_model.DescribeGroupsRequest): Promise<$_model.DescribeGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupsWithOptions(request, runtime);
  }

  /**
   * Lists virtual MFA devices bound to directory accounts.
   * 
   * @param request - DescribeMfaDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMfaDevicesResponse
   */
  async describeMfaDevicesWithOptions(request: $_model.DescribeMfaDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMfaDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
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

    if (!$dara.isNull(request.serialNumbers)) {
      query["SerialNumbers"] = request.serialNumbers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMfaDevices",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMfaDevicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMfaDevicesResponse({}));
  }

  /**
   * Lists virtual MFA devices bound to directory accounts.
   * 
   * @param request - DescribeMfaDevicesRequest
   * @returns DescribeMfaDevicesResponse
   */
  async describeMfaDevices(request: $_model.DescribeMfaDevicesRequest): Promise<$_model.DescribeMfaDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMfaDevicesWithOptions(request, runtime);
  }

  /**
   * Find subordinate organizations.
   * 
   * @param request - DescribeOrgByLayerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOrgByLayerResponse
   */
  async describeOrgByLayerWithOptions(request: $_model.DescribeOrgByLayerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOrgByLayerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.parentOrgId)) {
      body["ParentOrgId"] = request.parentOrgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOrgByLayer",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOrgByLayerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOrgByLayerResponse({}));
  }

  /**
   * Find subordinate organizations.
   * 
   * @param request - DescribeOrgByLayerRequest
   * @returns DescribeOrgByLayerResponse
   */
  async describeOrgByLayer(request: $_model.DescribeOrgByLayerRequest): Promise<$_model.DescribeOrgByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOrgByLayerWithOptions(request, runtime);
  }

  /**
   * Queries a list of organizations.
   * 
   * @remarks
   * Organizations are arranged in a tree-like structure. The root organization ID is org-aliyun-wy-org-id.
   * 
   * @param tmpReq - DescribeOrgsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOrgsResponse
   */
  async describeOrgsWithOptions(tmpReq: $_model.DescribeOrgsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOrgsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeOrgsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.showExtras)) {
      request.showExtrasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.showExtras, "ShowExtras", "json");
    }

    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.includeOrgIds)) {
      query["IncludeOrgIds"] = request.includeOrgIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orgName)) {
      query["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.parentOrgId)) {
      query["ParentOrgId"] = request.parentOrgId;
    }

    if (!$dara.isNull(request.showExtrasShrink)) {
      query["ShowExtras"] = request.showExtrasShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOrgs",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOrgsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOrgsResponse({}));
  }

  /**
   * Queries a list of organizations.
   * 
   * @remarks
   * Organizations are arranged in a tree-like structure. The root organization ID is org-aliyun-wy-org-id.
   * 
   * @param request - DescribeOrgsRequest
   * @returns DescribeOrgsResponse
   */
  async describeOrgs(request: $_model.DescribeOrgsRequest): Promise<$_model.DescribeOrgsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOrgsWithOptions(request, runtime);
  }

  /**
   * View resource groups.
   * 
   * @param request - DescribeResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceGroupsResponse
   */
  async describeResourceGroupsWithOptions(request: $_model.DescribeResourceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunResourceGroupIds)) {
      query["AliyunResourceGroupIds"] = request.aliyunResourceGroupIds;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.needContainResourceGroupWithOfficeSite)) {
      query["NeedContainResourceGroupWithOfficeSite"] = request.needContainResourceGroupWithOfficeSite;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.resourceClassification)) {
      query["ResourceClassification"] = request.resourceClassification;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceGroups",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceGroupsResponse({}));
  }

  /**
   * View resource groups.
   * 
   * @param request - DescribeResourceGroupsRequest
   * @returns DescribeResourceGroupsResponse
   */
  async describeResourceGroups(request: $_model.DescribeResourceGroupsRequest): Promise<$_model.DescribeResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Query user basic information
   * 
   * @param request - DescribeUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserResponse
   */
  async describeUserWithOptions(request: $_model.DescribeUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.requireExtraAttributes)) {
      query["RequireExtraAttributes"] = request.requireExtraAttributes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUser",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserResponse({}));
  }

  /**
   * Query user basic information
   * 
   * @param request - DescribeUserRequest
   * @returns DescribeUserResponse
   */
  async describeUser(request: $_model.DescribeUserRequest): Promise<$_model.DescribeUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserWithOptions(request, runtime);
  }

  /**
   * Retrieves directory account information, including the username, email address, and display name.
   * 
   * @param tmpReq - DescribeUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsersResponse
   */
  async describeUsersWithOptions(tmpReq: $_model.DescribeUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUsersResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterMap)) {
      request.filterMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterMap, "FilterMap", "json");
    }

    if (!$dara.isNull(tmpReq.filterWithAssignedResource)) {
      request.filterWithAssignedResourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterWithAssignedResource, "FilterWithAssignedResource", "json");
    }

    if (!$dara.isNull(tmpReq.filterWithAssignedResources)) {
      request.filterWithAssignedResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterWithAssignedResources, "FilterWithAssignedResources", "json");
    }

    if (!$dara.isNull(tmpReq.showExtras)) {
      request.showExtrasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.showExtras, "ShowExtras", "json");
    }

    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.filterMapShrink)) {
      query["FilterMap"] = request.filterMapShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.endUserIds)) {
      body["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.excludeEndUserIds)) {
      body["ExcludeEndUserIds"] = request.excludeEndUserIds;
    }

    if (!$dara.isNull(request.excludeGroupId)) {
      body["ExcludeGroupId"] = request.excludeGroupId;
    }

    if (!$dara.isNull(request.filterWithAssignedResourceShrink)) {
      body["FilterWithAssignedResource"] = request.filterWithAssignedResourceShrink;
    }

    if (!$dara.isNull(request.filterWithAssignedResourcesShrink)) {
      body["FilterWithAssignedResources"] = request.filterWithAssignedResourcesShrink;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.isQueryAllSubOrgs)) {
      body["IsQueryAllSubOrgs"] = request.isQueryAllSubOrgs;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.showExtrasShrink)) {
      body["ShowExtras"] = request.showExtrasShrink;
    }

    if (!$dara.isNull(request.solutionId)) {
      body["SolutionId"] = request.solutionId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUsersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUsersResponse({}));
  }

  /**
   * Retrieves directory account information, including the username, email address, and display name.
   * 
   * @param request - DescribeUsersRequest
   * @returns DescribeUsersResponse
   */
  async describeUsers(request: $_model.DescribeUsersRequest): Promise<$_model.DescribeUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsersWithOptions(request, runtime);
  }

  /**
   * Filter account information by user attribute.
   * 
   * @param tmpReq - FilterUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FilterUsersResponse
   */
  async filterUsersWithOptions(tmpReq: $_model.FilterUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FilterUsersResponse> {
    tmpReq.validate();
    let request = new $_model.FilterUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterMap)) {
      request.filterMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterMap, "FilterMap", "json");
    }

    if (!$dara.isNull(tmpReq.orderParam)) {
      request.orderParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderParam, "OrderParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.excludeEndUserIds)) {
      query["ExcludeEndUserIds"] = request.excludeEndUserIds;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.filterMapShrink)) {
      query["FilterMap"] = request.filterMapShrink;
    }

    if (!$dara.isNull(request.includeDesktopCount)) {
      query["IncludeDesktopCount"] = request.includeDesktopCount;
    }

    if (!$dara.isNull(request.includeDesktopGroupCount)) {
      query["IncludeDesktopGroupCount"] = request.includeDesktopGroupCount;
    }

    if (!$dara.isNull(request.includeEndUserIds)) {
      query["IncludeEndUserIds"] = request.includeEndUserIds;
    }

    if (!$dara.isNull(request.includeOrgInfo)) {
      query["IncludeOrgInfo"] = request.includeOrgInfo;
    }

    if (!$dara.isNull(request.includeSupportIdps)) {
      query["IncludeSupportIdps"] = request.includeSupportIdps;
    }

    if (!$dara.isNull(request.isQueryAllSubOrgs)) {
      query["IsQueryAllSubOrgs"] = request.isQueryAllSubOrgs;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderParamShrink)) {
      query["OrderParam"] = request.orderParamShrink;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.ownerType)) {
      query["OwnerType"] = request.ownerType;
    }

    if (!$dara.isNull(request.propertyFilterParam)) {
      query["PropertyFilterParam"] = request.propertyFilterParam;
    }

    if (!$dara.isNull(request.propertyKeyValueFilterParam)) {
      query["PropertyKeyValueFilterParam"] = request.propertyKeyValueFilterParam;
    }

    if (!$dara.isNull(request.showExtras)) {
      query["ShowExtras"] = request.showExtras;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FilterUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FilterUsersResponse>(await this.callApi(params, req, runtime), new $_model.FilterUsersResponse({}));
  }

  /**
   * Filter account information by user attribute.
   * 
   * @param request - FilterUsersRequest
   * @returns FilterUsersResponse
   */
  async filterUsers(request: $_model.FilterUsersRequest): Promise<$_model.FilterUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.filterUsersWithOptions(request, runtime);
  }

  /**
   * Obtains the information about the current logon administrator based on the authorization code.
   * 
   * @param request - GetManagerInfoByAuthCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetManagerInfoByAuthCodeResponse
   */
  async getManagerInfoByAuthCodeWithOptions(request: $_model.GetManagerInfoByAuthCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetManagerInfoByAuthCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetManagerInfoByAuthCode",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetManagerInfoByAuthCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetManagerInfoByAuthCodeResponse({}));
  }

  /**
   * Obtains the information about the current logon administrator based on the authorization code.
   * 
   * @param request - GetManagerInfoByAuthCodeRequest
   * @returns GetManagerInfoByAuthCodeResponse
   */
  async getManagerInfoByAuthCode(request: $_model.GetManagerInfoByAuthCodeRequest): Promise<$_model.GetManagerInfoByAuthCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getManagerInfoByAuthCodeWithOptions(request, runtime);
  }

  /**
   * Initialize the organization ID.
   * 
   * @param request - InitTenantAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitTenantAliasResponse
   */
  async initTenantAliasWithOptions(request: $_model.InitTenantAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitTenantAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitTenantAlias",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitTenantAliasResponse>(await this.callApi(params, req, runtime), new $_model.InitTenantAliasResponse({}));
  }

  /**
   * Initialize the organization ID.
   * 
   * @param request - InitTenantAliasRequest
   * @returns InitTenantAliasResponse
   */
  async initTenantAlias(request: $_model.InitTenantAliasRequest): Promise<$_model.InitTenantAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initTenantAliasWithOptions(request, runtime);
  }

  /**
   * Query the list of existing user attributes under the current account.
   * 
   * @param request - ListPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPropertyResponse
   */
  async listPropertyWithOptions(request: $_model.ListPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPropertyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPropertyResponse>(await this.callApi(params, req, runtime), new $_model.ListPropertyResponse({}));
  }

  /**
   * Query the list of existing user attributes under the current account.
   * 
   * @param request - ListPropertyRequest
   * @returns ListPropertyResponse
   */
  async listProperty(request: $_model.ListPropertyRequest): Promise<$_model.ListPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPropertyWithOptions(request, runtime);
  }

  /**
   * Query the list of attribute values for a specific user attribute.
   * 
   * @param request - ListPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPropertyValueResponse
   */
  async listPropertyValueWithOptions(request: $_model.ListPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPropertyValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.propertyId)) {
      query["PropertyId"] = request.propertyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPropertyValueResponse>(await this.callApi(params, req, runtime), new $_model.ListPropertyValueResponse({}));
  }

  /**
   * Query the list of attribute values for a specific user attribute.
   * 
   * @param request - ListPropertyValueRequest
   * @returns ListPropertyValueResponse
   */
  async listPropertyValue(request: $_model.ListPropertyValueRequest): Promise<$_model.ListPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPropertyValueWithOptions(request, runtime);
  }

  /**
   * Lock the virtual MFA device attached to a convenience account.
   * 
   * @remarks
   * After locking, the status of the virtual MFA device changes to LOCKED. When the associated convenience account attempts to log on to a WUYING Terminal through an office network with MFA enabled, authentication will fail due to the locked MFA device, preventing successful logon. You can invoke [UnlockMfaDevice](~~UnlockMfaDevice~~) to unlock it.
   * 
   * @param request - LockMfaDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockMfaDeviceResponse
   */
  async lockMfaDeviceWithOptions(request: $_model.LockMfaDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LockMfaDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LockMfaDevice",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LockMfaDeviceResponse>(await this.callApi(params, req, runtime), new $_model.LockMfaDeviceResponse({}));
  }

  /**
   * Lock the virtual MFA device attached to a convenience account.
   * 
   * @remarks
   * After locking, the status of the virtual MFA device changes to LOCKED. When the associated convenience account attempts to log on to a WUYING Terminal through an office network with MFA enabled, authentication will fail due to the locked MFA device, preventing successful logon. You can invoke [UnlockMfaDevice](~~UnlockMfaDevice~~) to unlock it.
   * 
   * @param request - LockMfaDeviceRequest
   * @returns LockMfaDeviceResponse
   */
  async lockMfaDevice(request: $_model.LockMfaDeviceRequest): Promise<$_model.LockMfaDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockMfaDeviceWithOptions(request, runtime);
  }

  /**
   * Locks one or more convenience accounts. Locked convenience accounts cannot be used to sign in to Wuying clients.
   * 
   * @remarks
   * For security purposes, you can lock convenience accounts. Locked convenience users cannot sign in to Wuying clients, and therefore cannot access any Wuying cloud resources.
   * > Call the [DescribeUsers](https://help.aliyun.com/document_detail/283609.html) operation to check the lock status of convenience accounts. The `Status` value in the response is 0 for unlocked accounts and 9 for locked accounts.
   * 
   * @param request - LockUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockUsersResponse
   */
  async lockUsersWithOptions(request: $_model.LockUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LockUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.logoutSession)) {
      query["LogoutSession"] = request.logoutSession;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LockUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LockUsersResponse>(await this.callApi(params, req, runtime), new $_model.LockUsersResponse({}));
  }

  /**
   * Locks one or more convenience accounts. Locked convenience accounts cannot be used to sign in to Wuying clients.
   * 
   * @remarks
   * For security purposes, you can lock convenience accounts. Locked convenience users cannot sign in to Wuying clients, and therefore cannot access any Wuying cloud resources.
   * > Call the [DescribeUsers](https://help.aliyun.com/document_detail/283609.html) operation to check the lock status of convenience accounts. The `Status` value in the response is 0 for unlocked accounts and 9 for locked accounts.
   * 
   * @param request - LockUsersRequest
   * @returns LockUsersResponse
   */
  async lockUsers(request: $_model.LockUsersRequest): Promise<$_model.LockUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockUsersWithOptions(request, runtime);
  }

  /**
   * Modify the name and description of a group.
   * 
   * @param request - ModifyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGroupResponse
   */
  async modifyGroupWithOptions(request: $_model.ModifyGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.newGroupName)) {
      query["NewGroupName"] = request.newGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyGroup",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGroupResponse({}));
  }

  /**
   * Modify the name and description of a group.
   * 
   * @param request - ModifyGroupRequest
   * @returns ModifyGroupResponse
   */
  async modifyGroup(request: $_model.ModifyGroupRequest): Promise<$_model.ModifyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGroupWithOptions(request, runtime);
  }

  /**
   * Modify an organization.
   * 
   * @param request - ModifyOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOrgResponse
   */
  async modifyOrgWithOptions(request: $_model.ModifyOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyOrgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      query["OrgName"] = request.orgName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOrg",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyOrgResponse>(await this.callApi(params, req, runtime), new $_model.ModifyOrgResponse({}));
  }

  /**
   * Modify an organization.
   * 
   * @param request - ModifyOrgRequest
   * @returns ModifyOrgResponse
   */
  async modifyOrg(request: $_model.ModifyOrgRequest): Promise<$_model.ModifyOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyOrgWithOptions(request, runtime);
  }

  /**
   * Modify the contact information of a convenience account.
   * 
   * @param request - ModifyUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserResponse
   */
  async modifyUserWithOptions(request: $_model.ModifyUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUser",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserResponse({}));
  }

  /**
   * Modify the contact information of a convenience account.
   * 
   * @param request - ModifyUserRequest
   * @returns ModifyUserResponse
   */
  async modifyUser(request: $_model.ModifyUserRequest): Promise<$_model.ModifyUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserWithOptions(request, runtime);
  }

  /**
   * Shift organization.
   * 
   * @param request - MoveOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveOrgResponse
   */
  async moveOrgWithOptions(request: $_model.MoveOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveOrgResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.newParentOrgId)) {
      body["NewParentOrgId"] = request.newParentOrgId;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveOrg",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveOrgResponse>(await this.callApi(params, req, runtime), new $_model.MoveOrgResponse({}));
  }

  /**
   * Shift organization.
   * 
   * @param request - MoveOrgRequest
   * @returns MoveOrgResponse
   */
  async moveOrg(request: $_model.MoveOrgRequest): Promise<$_model.MoveOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveOrgWithOptions(request, runtime);
  }

  /**
   * Shift users to the target organization architecture.
   * 
   * @param request - MoveUserOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveUserOrgResponse
   */
  async moveUserOrgWithOptions(request: $_model.MoveUserOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveUserOrgResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.endUserIds)) {
      body["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveUserOrg",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveUserOrgResponse>(await this.callApi(params, req, runtime), new $_model.MoveUserOrgResponse({}));
  }

  /**
   * Shift users to the target organization architecture.
   * 
   * @param request - MoveUserOrgRequest
   * @returns MoveUserOrgResponse
   */
  async moveUserOrg(request: $_model.MoveUserOrgRequest): Promise<$_model.MoveUserOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveUserOrgWithOptions(request, runtime);
  }

  /**
   * Query the user synchronization status.
   * 
   * @param request - QuerySyncStatusByAliUidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySyncStatusByAliUidResponse
   */
  async querySyncStatusByAliUidWithOptions(request: $_model.QuerySyncStatusByAliUidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySyncStatusByAliUidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySyncStatusByAliUid",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySyncStatusByAliUidResponse>(await this.callApi(params, req, runtime), new $_model.QuerySyncStatusByAliUidResponse({}));
  }

  /**
   * Query the user synchronization status.
   * 
   * @param request - QuerySyncStatusByAliUidRequest
   * @returns QuerySyncStatusByAliUidResponse
   */
  async querySyncStatusByAliUid(request: $_model.QuerySyncStatusByAliUidRequest): Promise<$_model.QuerySyncStatusByAliUidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySyncStatusByAliUidWithOptions(request, runtime);
  }

  /**
   * Delete a group. Supports batch operations.
   * 
   * @param request - RemoveGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveGroupResponse
   */
  async removeGroupWithOptions(request: $_model.RemoveGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveGroup",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveGroupResponse({}));
  }

  /**
   * Delete a group. Supports batch operations.
   * 
   * @param request - RemoveGroupRequest
   * @returns RemoveGroupResponse
   */
  async removeGroup(request: $_model.RemoveGroupRequest): Promise<$_model.RemoveGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeGroupWithOptions(request, runtime);
  }

  /**
   * Delete the virtual MFA device attached to a convenience account.
   * 
   * @remarks
   * Deleting the virtual MFA device attached to a convenience account unbinds the MFA device, which is equivalent to resetting or disabling it. The corresponding convenience account must reattach a new virtual MFA device when logging on to a WUYING Terminal.
   * 
   * @param request - RemoveMfaDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveMfaDeviceResponse
   */
  async removeMfaDeviceWithOptions(request: $_model.RemoveMfaDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveMfaDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveMfaDevice",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveMfaDeviceResponse>(await this.callApi(params, req, runtime), new $_model.RemoveMfaDeviceResponse({}));
  }

  /**
   * Delete the virtual MFA device attached to a convenience account.
   * 
   * @remarks
   * Deleting the virtual MFA device attached to a convenience account unbinds the MFA device, which is equivalent to resetting or disabling it. The corresponding convenience account must reattach a new virtual MFA device when logging on to a WUYING Terminal.
   * 
   * @param request - RemoveMfaDeviceRequest
   * @returns RemoveMfaDeviceResponse
   */
  async removeMfaDevice(request: $_model.RemoveMfaDeviceRequest): Promise<$_model.RemoveMfaDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeMfaDeviceWithOptions(request, runtime);
  }

  /**
   * Remove an organization.
   * 
   * @param request - RemoveOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveOrgResponse
   */
  async removeOrgWithOptions(request: $_model.RemoveOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveOrgResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveOrg",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveOrgResponse>(await this.callApi(params, req, runtime), new $_model.RemoveOrgResponse({}));
  }

  /**
   * Remove an organization.
   * 
   * @param request - RemoveOrgRequest
   * @returns RemoveOrgResponse
   */
  async removeOrg(request: $_model.RemoveOrgRequest): Promise<$_model.RemoveOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeOrgWithOptions(request, runtime);
  }

  /**
   * Delete a set of user attributes.
   * 
   * @param request - RemovePropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePropertyResponse
   */
  async removePropertyWithOptions(request: $_model.RemovePropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePropertyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemovePropertyResponse>(await this.callApi(params, req, runtime), new $_model.RemovePropertyResponse({}));
  }

  /**
   * Delete a set of user attributes.
   * 
   * @param request - RemovePropertyRequest
   * @returns RemovePropertyResponse
   */
  async removeProperty(request: $_model.RemovePropertyRequest): Promise<$_model.RemovePropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removePropertyWithOptions(request, runtime);
  }

  /**
   * Delete one or more convenience accounts.
   * 
   * @param request - RemoveUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersResponse
   */
  async removeUsersWithOptions(request: $_model.RemoveUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUsersResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUsersResponse({}));
  }

  /**
   * Delete one or more convenience accounts.
   * 
   * @param request - RemoveUsersRequest
   * @returns RemoveUsersResponse
   */
  async removeUsers(request: $_model.RemoveUsersRequest): Promise<$_model.RemoveUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUsersWithOptions(request, runtime);
  }

  /**
   * Reset the password of a convenience account, including generating a password reset token and sending a password reset email to the mailbox of the convenience account.
   * 
   * @param request - ResetUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetUserPasswordResponse
   */
  async resetUserPasswordWithOptions(request: $_model.ResetUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetUserPasswordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.notifyType)) {
      body["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetUserPassword",
      version: "2021-03-08",
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
   * Reset the password of a convenience account, including generating a password reset token and sending a password reset email to the mailbox of the convenience account.
   * 
   * @param request - ResetUserPasswordRequest
   * @returns ResetUserPasswordResponse
   */
  async resetUserPassword(request: $_model.ResetUserPasswordRequest): Promise<$_model.ResetUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  /**
   * Associate a user attribute with a specific user.
   * 
   * @param request - SetUserPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserPropertyValueResponse
   */
  async setUserPropertyValueWithOptions(request: $_model.SetUserPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetUserPropertyValueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    if (!$dara.isNull(request.propertyValueId)) {
      body["PropertyValueId"] = request.propertyValueId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetUserPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetUserPropertyValueResponse>(await this.callApi(params, req, runtime), new $_model.SetUserPropertyValueResponse({}));
  }

  /**
   * Associate a user attribute with a specific user.
   * 
   * @param request - SetUserPropertyValueRequest
   * @returns SetUserPropertyValueResponse
   */
  async setUserPropertyValue(request: $_model.SetUserPropertyValueRequest): Promise<$_model.SetUserPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setUserPropertyValueWithOptions(request, runtime);
  }

  /**
   * Synchronize all education information.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncAllEduInfoResponse
   */
  async syncAllEduInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.SyncAllEduInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "SyncAllEduInfo",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncAllEduInfoResponse>(await this.callApi(params, req, runtime), new $_model.SyncAllEduInfoResponse({}));
  }

  /**
   * Synchronize all education information.
   * @returns SyncAllEduInfoResponse
   */
  async syncAllEduInfo(): Promise<$_model.SyncAllEduInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncAllEduInfoWithOptions(runtime);
  }

  /**
   * 将资源转移到资源组中
   * 
   * @param request - TransferResourcesIntoGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferResourcesIntoGroupResponse
   */
  async transferResourcesIntoGroupWithOptions(request: $_model.TransferResourcesIntoGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferResourcesIntoGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferResourcesIntoGroup",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferResourcesIntoGroupResponse>(await this.callApi(params, req, runtime), new $_model.TransferResourcesIntoGroupResponse({}));
  }

  /**
   * 将资源转移到资源组中
   * 
   * @param request - TransferResourcesIntoGroupRequest
   * @returns TransferResourcesIntoGroupResponse
   */
  async transferResourcesIntoGroup(request: $_model.TransferResourcesIntoGroupRequest): Promise<$_model.TransferResourcesIntoGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferResourcesIntoGroupWithOptions(request, runtime);
  }

  /**
   * 将资源从资源组中转出
   * 
   * @param request - TransferResourcesOutofGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferResourcesOutofGroupResponse
   */
  async transferResourcesOutofGroupWithOptions(request: $_model.TransferResourcesOutofGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferResourcesOutofGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.targetResourceGroupId)) {
      query["TargetResourceGroupId"] = request.targetResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferResourcesOutofGroup",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferResourcesOutofGroupResponse>(await this.callApi(params, req, runtime), new $_model.TransferResourcesOutofGroupResponse({}));
  }

  /**
   * 将资源从资源组中转出
   * 
   * @param request - TransferResourcesOutofGroupRequest
   * @returns TransferResourcesOutofGroupResponse
   */
  async transferResourcesOutofGroup(request: $_model.TransferResourcesOutofGroupRequest): Promise<$_model.TransferResourcesOutofGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferResourcesOutofGroupWithOptions(request, runtime);
  }

  /**
   * Unlock the virtual MFA device attached to a convenience account.
   * 
   * @param request - UnlockMfaDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockMfaDeviceResponse
   */
  async unlockMfaDeviceWithOptions(request: $_model.UnlockMfaDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockMfaDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockMfaDevice",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnlockMfaDeviceResponse>(await this.callApi(params, req, runtime), new $_model.UnlockMfaDeviceResponse({}));
  }

  /**
   * Unlock the virtual MFA device attached to a convenience account.
   * 
   * @param request - UnlockMfaDeviceRequest
   * @returns UnlockMfaDeviceResponse
   */
  async unlockMfaDevice(request: $_model.UnlockMfaDeviceRequest): Promise<$_model.UnlockMfaDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockMfaDeviceWithOptions(request, runtime);
  }

  /**
   * Unlock one or more convenience accounts. After being unlocked, the convenience accounts can log on to WUYING Terminal.
   * 
   * @remarks
   * Locked convenience accounts cannot log on to WUYING Terminal and therefore cannot access any WUYING cloud resources. To allow a convenience account to log on to WUYING Terminal, you must first unlock it.  
   * > You can invoke [DescribeUsers](https://help.aliyun.com/document_detail/283609.html) to query convenience account information. If the value of `Status` in the returned data is 0, the convenience account is not locked. If the value of `Status` is 9, the convenience account is locked.
   * 
   * @param request - UnlockUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockUsersResponse
   */
  async unlockUsersWithOptions(request: $_model.UnlockUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoLockTime)) {
      query["AutoLockTime"] = request.autoLockTime;
    }

    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnlockUsersResponse>(await this.callApi(params, req, runtime), new $_model.UnlockUsersResponse({}));
  }

  /**
   * Unlock one or more convenience accounts. After being unlocked, the convenience accounts can log on to WUYING Terminal.
   * 
   * @remarks
   * Locked convenience accounts cannot log on to WUYING Terminal and therefore cannot access any WUYING cloud resources. To allow a convenience account to log on to WUYING Terminal, you must first unlock it.  
   * > You can invoke [DescribeUsers](https://help.aliyun.com/document_detail/283609.html) to query convenience account information. If the value of `Status` in the returned data is 0, the convenience account is not locked. If the value of `Status` is 9, the convenience account is locked.
   * 
   * @param request - UnlockUsersRequest
   * @returns UnlockUsersResponse
   */
  async unlockUsers(request: $_model.UnlockUsersRequest): Promise<$_model.UnlockUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockUsersWithOptions(request, runtime);
  }

  /**
   * Modify User Attributes.
   * 
   * @param request - UpdatePropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePropertyResponse
   */
  async updatePropertyWithOptions(request: $_model.UpdatePropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePropertyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessChannel)) {
      query["BusinessChannel"] = request.businessChannel;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    if (!$dara.isNull(request.propertyKey)) {
      body["PropertyKey"] = request.propertyKey;
    }

    if (!$dara.isNull(request.propertyValues)) {
      body["PropertyValues"] = request.propertyValues;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePropertyResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePropertyResponse({}));
  }

  /**
   * Modify User Attributes.
   * 
   * @param request - UpdatePropertyRequest
   * @returns UpdatePropertyResponse
   */
  async updateProperty(request: $_model.UpdatePropertyRequest): Promise<$_model.UpdatePropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePropertyWithOptions(request, runtime);
  }

  /**
   * Add users to a group in batch.
   * 
   * @param request - UserBatchJoinGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UserBatchJoinGroupResponse
   */
  async userBatchJoinGroupWithOptions(request: $_model.UserBatchJoinGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UserBatchJoinGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.endUserIds)) {
      body["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UserBatchJoinGroup",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UserBatchJoinGroupResponse>(await this.callApi(params, req, runtime), new $_model.UserBatchJoinGroupResponse({}));
  }

  /**
   * Add users to a group in batch.
   * 
   * @param request - UserBatchJoinGroupRequest
   * @returns UserBatchJoinGroupResponse
   */
  async userBatchJoinGroup(request: $_model.UserBatchJoinGroupRequest): Promise<$_model.UserBatchJoinGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.userBatchJoinGroupWithOptions(request, runtime);
  }

  /**
   * Remove users from a group in batch.
   * 
   * @param request - UserBatchQuitGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UserBatchQuitGroupResponse
   */
  async userBatchQuitGroupWithOptions(request: $_model.UserBatchQuitGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UserBatchQuitGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessChannel)) {
      body["BusinessChannel"] = request.businessChannel;
    }

    if (!$dara.isNull(request.endUserIds)) {
      body["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UserBatchQuitGroup",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UserBatchQuitGroupResponse>(await this.callApi(params, req, runtime), new $_model.UserBatchQuitGroupResponse({}));
  }

  /**
   * Remove users from a group in batch.
   * 
   * @param request - UserBatchQuitGroupRequest
   * @returns UserBatchQuitGroupResponse
   */
  async userBatchQuitGroup(request: $_model.UserBatchQuitGroupRequest): Promise<$_model.UserBatchQuitGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.userBatchQuitGroupWithOptions(request, runtime);
  }

}
