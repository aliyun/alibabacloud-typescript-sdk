// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
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
   * 批量设置桌面管理员
   * 
   * @param request - BatchSetDesktopManagerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSetDesktopManagerResponse
   */
  async batchSetDesktopManagerWithOptions(request: $_model.BatchSetDesktopManagerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSetDesktopManagerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * 批量设置桌面管理员
   * 
   * @param request - BatchSetDesktopManagerRequest
   * @returns BatchSetDesktopManagerResponse
   */
  async batchSetDesktopManager(request: $_model.BatchSetDesktopManagerRequest): Promise<$_model.BatchSetDesktopManagerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetDesktopManagerWithOptions(request, runtime);
  }

  /**
   * 管理员修改用户密码
   * 
   * @param request - ChangeUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeUserPasswordResponse
   */
  async changeUserPasswordWithOptions(request: $_model.ChangeUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeUserPasswordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * 管理员修改用户密码
   * 
   * @param request - ChangeUserPasswordRequest
   * @returns ChangeUserPasswordResponse
   */
  async changeUserPassword(request: $_model.ChangeUserPasswordRequest): Promise<$_model.ChangeUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeUserPasswordWithOptions(request, runtime);
  }

  /**
   * Queries whether a property is associated with one or more convenience users.
   * 
   * @param request - CheckUsedPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUsedPropertyResponse
   */
  async checkUsedPropertyWithOptions(request: $_model.CheckUsedPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUsedPropertyResponse> {
    request.validate();
    let query = { };
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
   * Queries whether a property is associated with one or more convenience users.
   * 
   * @param request - CheckUsedPropertyRequest
   * @returns CheckUsedPropertyResponse
   */
  async checkUsedProperty(request: $_model.CheckUsedPropertyRequest): Promise<$_model.CheckUsedPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUsedPropertyWithOptions(request, runtime);
  }

  /**
   * Queries the number of convenience accounts that are associated with the specified custom property value.
   * 
   * @remarks
   * Before you call the operation, you can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the existing user properties and their IDs (PropertyId) and values (PropertyValueId).
   * 
   * @param request - CheckUsedPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUsedPropertyValueResponse
   */
  async checkUsedPropertyValueWithOptions(request: $_model.CheckUsedPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUsedPropertyValueResponse> {
    request.validate();
    let query = { };
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
   * Queries the number of convenience accounts that are associated with the specified custom property value.
   * 
   * @remarks
   * Before you call the operation, you can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the existing user properties and their IDs (PropertyId) and values (PropertyValueId).
   * 
   * @param request - CheckUsedPropertyValueRequest
   * @returns CheckUsedPropertyValueResponse
   */
  async checkUsedPropertyValue(request: $_model.CheckUsedPropertyValueRequest): Promise<$_model.CheckUsedPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUsedPropertyValueWithOptions(request, runtime);
  }

  /**
   * 创建角色.
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
   * 创建角色.
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * 创建组织
   * 
   * @param request - CreateOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrgResponse
   */
  async createOrgWithOptions(request: $_model.CreateOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrgResponse> {
    request.validate();
    let query = { };
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
   * 创建组织
   * 
   * @param request - CreateOrgRequest
   * @returns CreateOrgResponse
   */
  async createOrg(request: $_model.CreateOrgRequest): Promise<$_model.CreateOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrgWithOptions(request, runtime);
  }

  /**
   * Creates a user property.
   * 
   * @param request - CreatePropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePropertyResponse
   */
  async createPropertyWithOptions(request: $_model.CreatePropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePropertyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * Creates a user property.
   * 
   * @param request - CreatePropertyRequest
   * @returns CreatePropertyResponse
   */
  async createProperty(request: $_model.CreatePropertyRequest): Promise<$_model.CreatePropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPropertyWithOptions(request, runtime);
  }

  /**
   * 创建资源组
   * 
   * @param request - CreateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroupWithOptions(request: $_model.CreateResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isResourceGroupWithOfficeSite)) {
      query["IsResourceGroupWithOfficeSite"] = request.isResourceGroupWithOfficeSite;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
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
   * 创建资源组
   * 
   * @param request - CreateResourceGroupRequest
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroup(request: $_model.CreateResourceGroupRequest): Promise<$_model.CreateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a convenience user.
   * 
   * @remarks
   * Convenience users are dedicated Elastic Desktop Service (EDS) user accounts and are suitable for scenarios in which you do not need to connect to enterprise Active Directory (AD) systems. The information about a convenience user includes the username, email address, and mobile number. You must specify the username or email address.
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
   * Creates a convenience user.
   * 
   * @remarks
   * Convenience users are dedicated Elastic Desktop Service (EDS) user accounts and are suitable for scenarios in which you do not need to connect to enterprise Active Directory (AD) systems. The information about a convenience user includes the username, email address, and mobile number. You must specify the username or email address.
   * 
   * @param request - CreateUsersRequest
   * @returns CreateUsersResponse
   */
  async createUsers(request: $_model.CreateUsersRequest): Promise<$_model.CreateUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUsersWithOptions(request, runtime);
  }

  /**
   * Deletes a resource group.
   * 
   * @param request - DeleteResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroupWithOptions(request: $_model.DeleteResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceGroupResponse> {
    request.validate();
    let query = { };
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
   * Deletes a resource group.
   * 
   * @param request - DeleteResourceGroupRequest
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroup(request: $_model.DeleteResourceGroupRequest): Promise<$_model.DeleteResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResourceGroupWithOptions(request, runtime);
  }

  /**
   * Dissociates a user property from a user.
   * 
   * @remarks
   * Before you call this operation, you can call the FilterUsers operation to query the users that are associated with user properties.
   * 
   * @param request - DeleteUserPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserPropertyValueResponse
   */
  async deleteUserPropertyValueWithOptions(request: $_model.DeleteUserPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserPropertyValueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * Dissociates a user property from a user.
   * 
   * @remarks
   * Before you call this operation, you can call the FilterUsers operation to query the users that are associated with user properties.
   * 
   * @param request - DeleteUserPropertyValueRequest
   * @returns DeleteUserPropertyValueResponse
   */
  async deleteUserPropertyValue(request: $_model.DeleteUserPropertyValueRequest): Promise<$_model.DeleteUserPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserPropertyValueWithOptions(request, runtime);
  }

  /**
   * 全量同步初始化
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
   * 全量同步初始化
   * 
   * @param request - DescribeGroupUserRequest
   * @returns DescribeGroupUserResponse
   */
  async describeGroupUser(request: $_model.DescribeGroupUserRequest): Promise<$_model.DescribeGroupUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupUserWithOptions(request, runtime);
  }

  /**
   * 全量同步初始化.
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

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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
   * 全量同步初始化.
   * 
   * @param request - DescribeGroupsRequest
   * @returns DescribeGroupsResponse
   */
  async describeGroups(request: $_model.DescribeGroupsRequest): Promise<$_model.DescribeGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the information about virtual multi-factor authentication (MFA) devices that are bound to convenience users.
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

    if (!$dara.isNull(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
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
   * Queries the information about virtual multi-factor authentication (MFA) devices that are bound to convenience users.
   * 
   * @param request - DescribeMfaDevicesRequest
   * @returns DescribeMfaDevicesResponse
   */
  async describeMfaDevices(request: $_model.DescribeMfaDevicesRequest): Promise<$_model.DescribeMfaDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMfaDevicesWithOptions(request, runtime);
  }

  /**
   * 查找下级组织
   * 
   * @param request - DescribeOrgByLayerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOrgByLayerResponse
   */
  async describeOrgByLayerWithOptions(request: $_model.DescribeOrgByLayerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOrgByLayerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * 查找下级组织
   * 
   * @param request - DescribeOrgByLayerRequest
   * @returns DescribeOrgByLayerResponse
   */
  async describeOrgByLayer(request: $_model.DescribeOrgByLayerRequest): Promise<$_model.DescribeOrgByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOrgByLayerWithOptions(request, runtime);
  }

  /**
   * Queries organizations.
   * 
   * @remarks
   * An organization is in a tree structure. The root organization ID is in the following format: org-aliyun-wy-org-id.
   * 
   * @param request - DescribeOrgsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOrgsResponse
   */
  async describeOrgsWithOptions(request: $_model.DescribeOrgsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOrgsResponse> {
    request.validate();
    let query = { };
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
   * Queries organizations.
   * 
   * @remarks
   * An organization is in a tree structure. The root organization ID is in the following format: org-aliyun-wy-org-id.
   * 
   * @param request - DescribeOrgsRequest
   * @returns DescribeOrgsResponse
   */
  async describeOrgs(request: $_model.DescribeOrgsRequest): Promise<$_model.DescribeOrgsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOrgsWithOptions(request, runtime);
  }

  /**
   * 查看资源组
   * 
   * @param request - DescribeResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceGroupsResponse
   */
  async describeResourceGroupsWithOptions(request: $_model.DescribeResourceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceGroupsResponse> {
    request.validate();
    let query = { };
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
   * 查看资源组
   * 
   * @param request - DescribeResourceGroupsRequest
   * @returns DescribeResourceGroupsResponse
   */
  async describeResourceGroups(request: $_model.DescribeResourceGroupsRequest): Promise<$_model.DescribeResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the information about convenience users. The information of a convenience user includes a username, an email address, and a description.
   * 
   * @param tmpReq - DescribeUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsersResponse
   */
  async describeUsersWithOptions(tmpReq: $_model.DescribeUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUsersResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
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
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
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
   * Queries the information about convenience users. The information of a convenience user includes a username, an email address, and a description.
   * 
   * @param request - DescribeUsersRequest
   * @returns DescribeUsersResponse
   */
  async describeUsers(request: $_model.DescribeUsersRequest): Promise<$_model.DescribeUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsersWithOptions(request, runtime);
  }

  /**
   * Filters convenience accounts by property.
   * 
   * @param tmpReq - FilterUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FilterUsersResponse
   */
  async filterUsersWithOptions(tmpReq: $_model.FilterUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FilterUsersResponse> {
    tmpReq.validate();
    let request = new $_model.FilterUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.orderParam)) {
      request.orderParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderParam, "OrderParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.excludeEndUserIds)) {
      query["ExcludeEndUserIds"] = request.excludeEndUserIds;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.includeDesktopCount)) {
      query["IncludeDesktopCount"] = request.includeDesktopCount;
    }

    if (!$dara.isNull(request.includeDesktopGroupCount)) {
      query["IncludeDesktopGroupCount"] = request.includeDesktopGroupCount;
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
   * Filters convenience accounts by property.
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
   * 初始化TenantAlias
   * 
   * @param request - InitTenantAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitTenantAliasResponse
   */
  async initTenantAliasWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.InitTenantAliasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
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
   * 初始化TenantAlias
   * @returns InitTenantAliasResponse
   */
  async initTenantAlias(): Promise<$_model.InitTenantAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initTenantAliasWithOptions(runtime);
  }

  /**
   * Queries all user properties within an Alibaba Cloud account.
   * 
   * @param request - ListPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPropertyResponse
   */
  async listPropertyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListPropertyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
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
   * Queries all user properties within an Alibaba Cloud account.
   * @returns ListPropertyResponse
   */
  async listProperty(): Promise<$_model.ListPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPropertyWithOptions(runtime);
  }

  /**
   * Queries property values of a user property.
   * 
   * @param request - ListPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPropertyValueResponse
   */
  async listPropertyValueWithOptions(request: $_model.ListPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPropertyValueResponse> {
    request.validate();
    let query = { };
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
   * Queries property values of a user property.
   * 
   * @param request - ListPropertyValueRequest
   * @returns ListPropertyValueResponse
   */
  async listPropertyValue(request: $_model.ListPropertyValueRequest): Promise<$_model.ListPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPropertyValueWithOptions(request, runtime);
  }

  /**
   * Locks a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
   * 
   * @remarks
   * After a virtual MFA device is locked, the status of the virtual MFA device changes to LOCKED. The convenience user to which the MFA device is bound cannot log on to the cloud desktop that resides in the workspace with the MFA feature enabled because the identity of the convenience user cannot be verified based on the virtual MFA device. You can call the [UnlockMfaDevice](https://help.aliyun.com/document_detail/286534.html) operation to unlock the virtual MFA device.
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
   * Locks a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
   * 
   * @remarks
   * After a virtual MFA device is locked, the status of the virtual MFA device changes to LOCKED. The convenience user to which the MFA device is bound cannot log on to the cloud desktop that resides in the workspace with the MFA feature enabled because the identity of the convenience user cannot be verified based on the virtual MFA device. You can call the [UnlockMfaDevice](https://help.aliyun.com/document_detail/286534.html) operation to unlock the virtual MFA device.
   * 
   * @param request - LockMfaDeviceRequest
   * @returns LockMfaDeviceResponse
   */
  async lockMfaDevice(request: $_model.LockMfaDeviceRequest): Promise<$_model.LockMfaDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockMfaDeviceWithOptions(request, runtime);
  }

  /**
   * Locks one or more convenience users.
   * 
   * @param request - LockUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockUsersResponse
   */
  async lockUsersWithOptions(request: $_model.LockUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LockUsersResponse> {
    request.validate();
    let query = { };
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
   * Locks one or more convenience users.
   * 
   * @param request - LockUsersRequest
   * @returns LockUsersResponse
   */
  async lockUsers(request: $_model.LockUsersRequest): Promise<$_model.LockUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockUsersWithOptions(request, runtime);
  }

  /**
   * 修改角色.
   * 
   * @param request - ModifyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGroupResponse
   */
  async modifyGroupWithOptions(request: $_model.ModifyGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGroupResponse> {
    request.validate();
    let query = { };
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
   * 修改角色.
   * 
   * @param request - ModifyGroupRequest
   * @returns ModifyGroupResponse
   */
  async modifyGroup(request: $_model.ModifyGroupRequest): Promise<$_model.ModifyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGroupWithOptions(request, runtime);
  }

  /**
   * 修改组织
   * 
   * @param request - ModifyOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOrgResponse
   */
  async modifyOrgWithOptions(request: $_model.ModifyOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyOrgResponse> {
    request.validate();
    let query = { };
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
   * 修改组织
   * 
   * @param request - ModifyOrgRequest
   * @returns ModifyOrgResponse
   */
  async modifyOrg(request: $_model.ModifyOrgRequest): Promise<$_model.ModifyOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyOrgWithOptions(request, runtime);
  }

  /**
   * Modifies user information.
   * 
   * @param request - ModifyUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserResponse
   */
  async modifyUserWithOptions(request: $_model.ModifyUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserResponse> {
    request.validate();
    let query = { };
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
   * Modifies user information.
   * 
   * @param request - ModifyUserRequest
   * @returns ModifyUserResponse
   */
  async modifyUser(request: $_model.ModifyUserRequest): Promise<$_model.ModifyUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserWithOptions(request, runtime);
  }

  /**
   * 移动组织
   * 
   * @param request - MoveOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveOrgResponse
   */
  async moveOrgWithOptions(request: $_model.MoveOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveOrgResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * 移动组织
   * 
   * @param request - MoveOrgRequest
   * @returns MoveOrgResponse
   */
  async moveOrg(request: $_model.MoveOrgRequest): Promise<$_model.MoveOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveOrgWithOptions(request, runtime);
  }

  /**
   * 移动用户组织
   * 
   * @param request - MoveUserOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveUserOrgResponse
   */
  async moveUserOrgWithOptions(request: $_model.MoveUserOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveUserOrgResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * 移动用户组织
   * 
   * @param request - MoveUserOrgRequest
   * @returns MoveUserOrgResponse
   */
  async moveUserOrg(request: $_model.MoveUserOrgRequest): Promise<$_model.MoveUserOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveUserOrgWithOptions(request, runtime);
  }

  /**
   * 查询edu同步信息
   * 
   * @param request - QuerySyncStatusByAliUidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySyncStatusByAliUidResponse
   */
  async querySyncStatusByAliUidWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.QuerySyncStatusByAliUidResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
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
   * 查询edu同步信息
   * @returns QuerySyncStatusByAliUidResponse
   */
  async querySyncStatusByAliUid(): Promise<$_model.QuerySyncStatusByAliUidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySyncStatusByAliUidWithOptions(runtime);
  }

  /**
   * 删除角色.
   * 
   * @param request - RemoveGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveGroupResponse
   */
  async removeGroupWithOptions(request: $_model.RemoveGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveGroupResponse> {
    request.validate();
    let query = { };
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
   * 删除角色.
   * 
   * @param request - RemoveGroupRequest
   * @returns RemoveGroupResponse
   */
  async removeGroup(request: $_model.RemoveGroupRequest): Promise<$_model.RemoveGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeGroupWithOptions(request, runtime);
  }

  /**
   * Removes a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
   * 
   * @remarks
   * If you remove a virtual MFA device that is bound to a convenience user, the convenience user can no longer use the virtual MFA device to log on to cloud desktops. Before the convenience user can log on to cloud desktops again, a new virtual MFA device must be bound to the convenience user.
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
   * Removes a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
   * 
   * @remarks
   * If you remove a virtual MFA device that is bound to a convenience user, the convenience user can no longer use the virtual MFA device to log on to cloud desktops. Before the convenience user can log on to cloud desktops again, a new virtual MFA device must be bound to the convenience user.
   * 
   * @param request - RemoveMfaDeviceRequest
   * @returns RemoveMfaDeviceResponse
   */
  async removeMfaDevice(request: $_model.RemoveMfaDeviceRequest): Promise<$_model.RemoveMfaDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeMfaDeviceWithOptions(request, runtime);
  }

  /**
   * 移除组织
   * 
   * @param request - RemoveOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveOrgResponse
   */
  async removeOrgWithOptions(request: $_model.RemoveOrgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveOrgResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * 移除组织
   * 
   * @param request - RemoveOrgRequest
   * @returns RemoveOrgResponse
   */
  async removeOrg(request: $_model.RemoveOrgRequest): Promise<$_model.RemoveOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeOrgWithOptions(request, runtime);
  }

  /**
   * Deletes a user property.
   * 
   * @param request - RemovePropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePropertyResponse
   */
  async removePropertyWithOptions(request: $_model.RemovePropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePropertyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
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
   * Deletes a user property.
   * 
   * @param request - RemovePropertyRequest
   * @returns RemovePropertyResponse
   */
  async removeProperty(request: $_model.RemovePropertyRequest): Promise<$_model.RemovePropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removePropertyWithOptions(request, runtime);
  }

  /**
   * Removes one or more convenience users.
   * 
   * @param request - RemoveUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersResponse
   */
  async removeUsersWithOptions(request: $_model.RemoveUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * Removes one or more convenience users.
   * 
   * @param request - RemoveUsersRequest
   * @returns RemoveUsersResponse
   */
  async removeUsers(request: $_model.RemoveUsersRequest): Promise<$_model.RemoveUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUsersWithOptions(request, runtime);
  }

  /**
   * Resets the password for a convenience user. If you call this operation, a token that is used to reset the password is generated, and the system sends a password reset email that includes the token to the email address of the convenience user.
   * 
   * @param request - ResetUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetUserPasswordResponse
   */
  async resetUserPasswordWithOptions(request: $_model.ResetUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetUserPasswordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * Resets the password for a convenience user. If you call this operation, a token that is used to reset the password is generated, and the system sends a password reset email that includes the token to the email address of the convenience user.
   * 
   * @param request - ResetUserPasswordRequest
   * @returns ResetUserPasswordResponse
   */
  async resetUserPassword(request: $_model.ResetUserPasswordRequest): Promise<$_model.ResetUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  /**
   * Associates a user property with a convenience user.
   * 
   * @param request - SetUserPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserPropertyValueResponse
   */
  async setUserPropertyValueWithOptions(request: $_model.SetUserPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetUserPropertyValueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * Associates a user property with a convenience user.
   * 
   * @param request - SetUserPropertyValueRequest
   * @returns SetUserPropertyValueResponse
   */
  async setUserPropertyValue(request: $_model.SetUserPropertyValueRequest): Promise<$_model.SetUserPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setUserPropertyValueWithOptions(request, runtime);
  }

  /**
   * 从钉钉手动同步老师学生信息
   * 
   * @param request - SyncAllEduInfoRequest
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
   * 从钉钉手动同步老师学生信息
   * @returns SyncAllEduInfoResponse
   */
  async syncAllEduInfo(): Promise<$_model.SyncAllEduInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncAllEduInfoWithOptions(runtime);
  }

  /**
   * Unlocks a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
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
   * Unlocks a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
   * 
   * @param request - UnlockMfaDeviceRequest
   * @returns UnlockMfaDeviceResponse
   */
  async unlockMfaDevice(request: $_model.UnlockMfaDeviceRequest): Promise<$_model.UnlockMfaDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockMfaDeviceWithOptions(request, runtime);
  }

  /**
   * Unlocks one or more convenience users.
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
   * Unlocks one or more convenience users.
   * 
   * @param request - UnlockUsersRequest
   * @returns UnlockUsersResponse
   */
  async unlockUsers(request: $_model.UnlockUsersRequest): Promise<$_model.UnlockUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockUsersWithOptions(request, runtime);
  }

  /**
   * Modifies a user property.
   * 
   * @param request - UpdatePropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePropertyResponse
   */
  async updatePropertyWithOptions(request: $_model.UpdatePropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePropertyResponse> {
    request.validate();
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
   * Modifies a user property.
   * 
   * @param request - UpdatePropertyRequest
   * @returns UpdatePropertyResponse
   */
  async updateProperty(request: $_model.UpdatePropertyRequest): Promise<$_model.UpdatePropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePropertyWithOptions(request, runtime);
  }

  /**
   * 用户批量分配角色
   * 
   * @param request - UserBatchJoinGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UserBatchJoinGroupResponse
   */
  async userBatchJoinGroupWithOptions(request: $_model.UserBatchJoinGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UserBatchJoinGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * 用户批量分配角色
   * 
   * @param request - UserBatchJoinGroupRequest
   * @returns UserBatchJoinGroupResponse
   */
  async userBatchJoinGroup(request: $_model.UserBatchJoinGroupRequest): Promise<$_model.UserBatchJoinGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.userBatchJoinGroupWithOptions(request, runtime);
  }

  /**
   * 用户批量移出角色
   * 
   * @param request - UserBatchQuitGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UserBatchQuitGroupResponse
   */
  async userBatchQuitGroupWithOptions(request: $_model.UserBatchQuitGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UserBatchQuitGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * 用户批量移出角色
   * 
   * @param request - UserBatchQuitGroupRequest
   * @returns UserBatchQuitGroupResponse
   */
  async userBatchQuitGroup(request: $_model.UserBatchQuitGroupRequest): Promise<$_model.UserBatchQuitGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.userBatchQuitGroupWithOptions(request, runtime);
  }

}
