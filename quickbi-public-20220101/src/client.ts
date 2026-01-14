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
    this._endpoint = this.getEndpoint("quickbi-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Add selected groups of people incrementally for a single row and column permission rule.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.\\n
   * 
   * @param request - AddDataLevelPermissionRuleUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataLevelPermissionRuleUsersResponse
   */
  async addDataLevelPermissionRuleUsersWithOptions(request: $_model.AddDataLevelPermissionRuleUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDataLevelPermissionRuleUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addUserModel)) {
      query["AddUserModel"] = request.addUserModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDataLevelPermissionRuleUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDataLevelPermissionRuleUsersResponse>(await this.callApi(params, req, runtime), new $_model.AddDataLevelPermissionRuleUsersResponse({}));
  }

  /**
   * Add selected groups of people incrementally for a single row and column permission rule.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.\\n
   * 
   * @param request - AddDataLevelPermissionRuleUsersRequest
   * @returns AddDataLevelPermissionRuleUsersResponse
   */
  async addDataLevelPermissionRuleUsers(request: $_model.AddDataLevelPermissionRuleUsersRequest): Promise<$_model.AddDataLevelPermissionRuleUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDataLevelPermissionRuleUsersWithOptions(request, runtime);
  }

  /**
   * 43342***435,1553a****41231
   * 
   * @remarks
   * ROW_LEVEL
   * 
   * @param request - AddDataLevelPermissionWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataLevelPermissionWhiteListResponse
   */
  async addDataLevelPermissionWhiteListWithOptions(request: $_model.AddDataLevelPermissionWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDataLevelPermissionWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
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
      action: "AddDataLevelPermissionWhiteList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDataLevelPermissionWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.AddDataLevelPermissionWhiteListResponse({}));
  }

  /**
   * 43342***435,1553a****41231
   * 
   * @remarks
   * ROW_LEVEL
   * 
   * @param request - AddDataLevelPermissionWhiteListRequest
   * @returns AddDataLevelPermissionWhiteListResponse
   */
  async addDataLevelPermissionWhiteList(request: $_model.AddDataLevelPermissionWhiteListRequest): Promise<$_model.AddDataLevelPermissionWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDataLevelPermissionWhiteListWithOptions(request, runtime);
  }

  /**
   * 创建数据源
   * 
   * @param request - AddDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataSourceResponse
   */
  async addDataSourceWithOptions(request: $_model.AddDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addModel)) {
      query["AddModel"] = request.addModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDataSource",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.AddDataSourceResponse({}));
  }

  /**
   * 创建数据源
   * 
   * @param request - AddDataSourceRequest
   * @returns AddDataSourceResponse
   */
  async addDataSource(request: $_model.AddDataSourceRequest): Promise<$_model.AddDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDataSourceWithOptions(request, runtime);
  }

  /**
   * Add a sharing configuration for data works.
   * 
   * @param request - AddShareReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddShareReportResponse
   */
  async addShareReportWithOptions(request: $_model.AddShareReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddShareReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authPoint)) {
      query["AuthPoint"] = request.authPoint;
    }

    if (!$dara.isNull(request.expireDate)) {
      query["ExpireDate"] = request.expireDate;
    }

    if (!$dara.isNull(request.shareToId)) {
      query["ShareToId"] = request.shareToId;
    }

    if (!$dara.isNull(request.shareToType)) {
      query["ShareToType"] = request.shareToType;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddShareReport",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddShareReportResponse>(await this.callApi(params, req, runtime), new $_model.AddShareReportResponse({}));
  }

  /**
   * Add a sharing configuration for data works.
   * 
   * @param request - AddShareReportRequest
   * @returns AddShareReportResponse
   */
  async addShareReport(request: $_model.AddShareReportRequest): Promise<$_model.AddShareReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addShareReportWithOptions(request, runtime);
  }

  /**
   * Add an organization member.
   * 
   * @param request - AddUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserResponse
   */
  async addUserWithOptions(request: $_model.AddUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.adminUser)) {
      query["AdminUser"] = request.adminUser;
    }

    if (!$dara.isNull(request.authAdminUser)) {
      query["AuthAdminUser"] = request.authAdminUser;
    }

    if (!$dara.isNull(request.nickName)) {
      query["NickName"] = request.nickName;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleIds)) {
      body["RoleIds"] = request.roleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUser",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserResponse>(await this.callApi(params, req, runtime), new $_model.AddUserResponse({}));
  }

  /**
   * Add an organization member.
   * 
   * @param request - AddUserRequest
   * @returns AddUserResponse
   */
  async addUser(request: $_model.AddUserRequest): Promise<$_model.AddUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserWithOptions(request, runtime);
  }

  /**
   * Adds an organization member to a specified user group.
   * 
   * @param request - AddUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserGroupMemberResponse
   */
  async addUserGroupMemberWithOptions(request: $_model.AddUserGroupMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserGroupMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserGroupMember",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.AddUserGroupMemberResponse({}));
  }

  /**
   * Adds an organization member to a specified user group.
   * 
   * @param request - AddUserGroupMemberRequest
   * @returns AddUserGroupMemberResponse
   */
  async addUserGroupMember(request: $_model.AddUserGroupMemberRequest): Promise<$_model.AddUserGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * Add users to a specified user group at a time.
   * 
   * @param request - AddUserGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserGroupMembersResponse
   */
  async addUserGroupMembersWithOptions(request: $_model.AddUserGroupMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserGroupMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserGroupMembers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserGroupMembersResponse>(await this.callApi(params, req, runtime), new $_model.AddUserGroupMembersResponse({}));
  }

  /**
   * Add users to a specified user group at a time.
   * 
   * @param request - AddUserGroupMembersRequest
   * @returns AddUserGroupMembersResponse
   */
  async addUserGroupMembers(request: $_model.AddUserGroupMembersRequest): Promise<$_model.AddUserGroupMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserGroupMembersWithOptions(request, runtime);
  }

  /**
   * Add organization member tag metadata.
   * 
   * @param request - AddUserTagMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserTagMetaResponse
   */
  async addUserTagMetaWithOptions(request: $_model.AddUserTagMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserTagMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tagDescription)) {
      query["TagDescription"] = request.tagDescription;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserTagMeta",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserTagMetaResponse>(await this.callApi(params, req, runtime), new $_model.AddUserTagMetaResponse({}));
  }

  /**
   * Add organization member tag metadata.
   * 
   * @param request - AddUserTagMetaRequest
   * @returns AddUserTagMetaResponse
   */
  async addUserTagMeta(request: $_model.AddUserTagMetaRequest): Promise<$_model.AddUserTagMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserTagMetaWithOptions(request, runtime);
  }

  /**
   * Add a member to the specified workspace.
   * 
   * @param request - AddUserToWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToWorkspaceResponse
   */
  async addUserToWorkspaceWithOptions(request: $_model.AddUserToWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToWorkspace",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserToWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.AddUserToWorkspaceResponse({}));
  }

  /**
   * Add a member to the specified workspace.
   * 
   * @param request - AddUserToWorkspaceRequest
   * @returns AddUserToWorkspaceResponse
   */
  async addUserToWorkspace(request: $_model.AddUserToWorkspaceRequest): Promise<$_model.AddUserToWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToWorkspaceWithOptions(request, runtime);
  }

  /**
   * Batch add members to the workspace.
   * 
   * @param request - AddWorkspaceUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWorkspaceUsersResponse
   */
  async addWorkspaceUsersWithOptions(request: $_model.AddWorkspaceUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddWorkspaceUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddWorkspaceUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddWorkspaceUsersResponse>(await this.callApi(params, req, runtime), new $_model.AddWorkspaceUsersResponse({}));
  }

  /**
   * Batch add members to the workspace.
   * 
   * @param request - AddWorkspaceUsersRequest
   * @returns AddWorkspaceUsersResponse
   */
  async addWorkspaceUsers(request: $_model.AddWorkspaceUsersRequest): Promise<$_model.AddWorkspaceUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addWorkspaceUsersWithOptions(request, runtime);
  }

  /**
   * Trigger the collection acceleration of the Quick engine for datasets.
   * 
   * @param request - AllotDatasetAccelerationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllotDatasetAccelerationTaskResponse
   */
  async allotDatasetAccelerationTaskWithOptions(request: $_model.AllotDatasetAccelerationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllotDatasetAccelerationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllotDatasetAccelerationTask",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllotDatasetAccelerationTaskResponse>(await this.callApi(params, req, runtime), new $_model.AllotDatasetAccelerationTaskResponse({}));
  }

  /**
   * Trigger the collection acceleration of the Quick engine for datasets.
   * 
   * @param request - AllotDatasetAccelerationTaskRequest
   * @returns AllotDatasetAccelerationTaskResponse
   */
  async allotDatasetAccelerationTask(request: $_model.AllotDatasetAccelerationTaskRequest): Promise<$_model.AllotDatasetAccelerationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allotDatasetAccelerationTaskWithOptions(request, runtime);
  }

  /**
   * Batch authorization of BI portal menu will be skipped automatically.
   * 
   * @param request - AuthorizeMenuRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeMenuResponse
   */
  async authorizeMenuWithOptions(request: $_model.AuthorizeMenuRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeMenuResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authPointsValue)) {
      query["AuthPointsValue"] = request.authPointsValue;
    }

    if (!$dara.isNull(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!$dara.isNull(request.menuIds)) {
      query["MenuIds"] = request.menuIds;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeMenu",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeMenuResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeMenuResponse({}));
  }

  /**
   * Batch authorization of BI portal menu will be skipped automatically.
   * 
   * @param request - AuthorizeMenuRequest
   * @returns AuthorizeMenuResponse
   */
  async authorizeMenu(request: $_model.AuthorizeMenuRequest): Promise<$_model.AuthorizeMenuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeMenuWithOptions(request, runtime);
  }

  /**
   * Batch add Feishu users.
   * 
   * @deprecated OpenAPI BatchAddFeishuUsers is deprecated
   * 
   * @param request - BatchAddFeishuUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddFeishuUsersResponse
   */
  async batchAddFeishuUsersWithOptions(request: $_model.BatchAddFeishuUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchAddFeishuUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.feishuUsers)) {
      query["FeishuUsers"] = request.feishuUsers;
    }

    if (!$dara.isNull(request.isAdmin)) {
      query["IsAdmin"] = request.isAdmin;
    }

    if (!$dara.isNull(request.isAuthAdmin)) {
      query["IsAuthAdmin"] = request.isAuthAdmin;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAddFeishuUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchAddFeishuUsersResponse>(await this.callApi(params, req, runtime), new $_model.BatchAddFeishuUsersResponse({}));
  }

  /**
   * Batch add Feishu users.
   * 
   * @deprecated OpenAPI BatchAddFeishuUsers is deprecated
   * 
   * @param request - BatchAddFeishuUsersRequest
   * @returns BatchAddFeishuUsersResponse
   */
  // Deprecated
  async batchAddFeishuUsers(request: $_model.BatchAddFeishuUsersRequest): Promise<$_model.BatchAddFeishuUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchAddFeishuUsersWithOptions(request, runtime);
  }

  /**
   * Cancel the authorization records for specified users and user groups based on the portal menu ID.
   * 
   * @param request - CancelAuthorizationMenuRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAuthorizationMenuResponse
   */
  async cancelAuthorizationMenuWithOptions(request: $_model.CancelAuthorizationMenuRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAuthorizationMenuResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!$dara.isNull(request.menuIds)) {
      query["MenuIds"] = request.menuIds;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAuthorizationMenu",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAuthorizationMenuResponse>(await this.callApi(params, req, runtime), new $_model.CancelAuthorizationMenuResponse({}));
  }

  /**
   * Cancel the authorization records for specified users and user groups based on the portal menu ID.
   * 
   * @param request - CancelAuthorizationMenuRequest
   * @returns CancelAuthorizationMenuResponse
   */
  async cancelAuthorizationMenu(request: $_model.CancelAuthorizationMenuRequest): Promise<$_model.CancelAuthorizationMenuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAuthorizationMenuWithOptions(request, runtime);
  }

  /**
   * Cancel the data works from the user\\"s collection.
   * 
   * @param request - CancelCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCollectionResponse
   */
  async cancelCollectionWithOptions(request: $_model.CancelCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCollection",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelCollectionResponse>(await this.callApi(params, req, runtime), new $_model.CancelCollectionResponse({}));
  }

  /**
   * Cancel the data works from the user\\"s collection.
   * 
   * @param request - CancelCollectionRequest
   * @returns CancelCollectionResponse
   */
  async cancelCollection(request: $_model.CancelCollectionRequest): Promise<$_model.CancelCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCollectionWithOptions(request, runtime);
  }

  /**
   * Delete a share authorization for a data work.
   * 
   * @param request - CancelReportShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelReportShareResponse
   */
  async cancelReportShareWithOptions(request: $_model.CancelReportShareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelReportShareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.shareToIds)) {
      query["ShareToIds"] = request.shareToIds;
    }

    if (!$dara.isNull(request.shareToType)) {
      query["ShareToType"] = request.shareToType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelReportShare",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelReportShareResponse>(await this.callApi(params, req, runtime), new $_model.CancelReportShareResponse({}));
  }

  /**
   * Delete a share authorization for a data work.
   * 
   * @param request - CancelReportShareRequest
   * @returns CancelReportShareResponse
   */
  async cancelReportShare(request: $_model.CancelReportShareRequest): Promise<$_model.CancelReportShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelReportShareWithOptions(request, runtime);
  }

  /**
   * Modifies the visibility mode of the BI portal menu and whether the menu is only authorized to be visible.
   * 
   * @param request - ChangeVisibilityModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeVisibilityModelResponse
   */
  async changeVisibilityModelWithOptions(request: $_model.ChangeVisibilityModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeVisibilityModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!$dara.isNull(request.menuIds)) {
      query["MenuIds"] = request.menuIds;
    }

    if (!$dara.isNull(request.showOnlyWithAccess)) {
      query["ShowOnlyWithAccess"] = request.showOnlyWithAccess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeVisibilityModel",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeVisibilityModelResponse>(await this.callApi(params, req, runtime), new $_model.ChangeVisibilityModelResponse({}));
  }

  /**
   * Modifies the visibility mode of the BI portal menu and whether the menu is only authorized to be visible.
   * 
   * @param request - ChangeVisibilityModelRequest
   * @returns ChangeVisibilityModelResponse
   */
  async changeVisibilityModel(request: $_model.ChangeVisibilityModelRequest): Promise<$_model.ChangeVisibilityModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeVisibilityModelWithOptions(request, runtime);
  }

  /**
   * 检查给定的cubeId是否存在
   * 
   * @param request - CheckDatasetExistedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDatasetExistedResponse
   */
  async checkDatasetExistedWithOptions(request: $_model.CheckDatasetExistedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDatasetExistedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDatasetExisted",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDatasetExistedResponse>(await this.callApi(params, req, runtime), new $_model.CheckDatasetExistedResponse({}));
  }

  /**
   * 检查给定的cubeId是否存在
   * 
   * @param request - CheckDatasetExistedRequest
   * @returns CheckDatasetExistedResponse
   */
  async checkDatasetExisted(request: $_model.CheckDatasetExistedRequest): Promise<$_model.CheckDatasetExistedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDatasetExistedWithOptions(request, runtime);
  }

  /**
   * 判断用户是否属于组织
   * 
   * @param request - CheckOrganizationMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckOrganizationMemberResponse
   */
  async checkOrganizationMemberWithOptions(request: $_model.CheckOrganizationMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckOrganizationMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckOrganizationMember",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckOrganizationMemberResponse>(await this.callApi(params, req, runtime), new $_model.CheckOrganizationMemberResponse({}));
  }

  /**
   * 判断用户是否属于组织
   * 
   * @param request - CheckOrganizationMemberRequest
   * @returns CheckOrganizationMemberResponse
   */
  async checkOrganizationMember(request: $_model.CheckOrganizationMemberRequest): Promise<$_model.CheckOrganizationMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkOrganizationMemberWithOptions(request, runtime);
  }

  /**
   * Queries whether a user has permissions to view data works, such as dashboards and workbooks.
   * 
   * @param request - CheckReadableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckReadableResponse
   */
  async checkReadableWithOptions(request: $_model.CheckReadableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckReadableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckReadable",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckReadableResponse>(await this.callApi(params, req, runtime), new $_model.CheckReadableResponse({}));
  }

  /**
   * Queries whether a user has permissions to view data works, such as dashboards and workbooks.
   * 
   * @param request - CheckReadableRequest
   * @returns CheckReadableResponse
   */
  async checkReadable(request: $_model.CheckReadableRequest): Promise<$_model.CheckReadableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkReadableWithOptions(request, runtime);
  }

  /**
   * 根据自定义sql创建数据集
   * 
   * @param request - CreateCubeBySqlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCubeBySqlResponse
   */
  async createCubeBySqlWithOptions(request: $_model.CreateCubeBySqlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCubeBySqlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caption)) {
      query["Caption"] = request.caption;
    }

    if (!$dara.isNull(request.customSql)) {
      query["CustomSql"] = request.customSql;
    }

    if (!$dara.isNull(request.dsId)) {
      query["DsId"] = request.dsId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCubeBySql",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCubeBySqlResponse>(await this.callApi(params, req, runtime), new $_model.CreateCubeBySqlResponse({}));
  }

  /**
   * 根据自定义sql创建数据集
   * 
   * @param request - CreateCubeBySqlRequest
   * @returns CreateCubeBySqlResponse
   */
  async createCubeBySql(request: $_model.CreateCubeBySqlRequest): Promise<$_model.CreateCubeBySqlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCubeBySqlWithOptions(request, runtime);
  }

  /**
   * 根据物理表名称创建数据集
   * 
   * @param request - CreateDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetResponse
   */
  async createDatasetWithOptions(request: $_model.CreateDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dsId)) {
      query["DsId"] = request.dsId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.targetDirectoryId)) {
      query["TargetDirectoryId"] = request.targetDirectoryId;
    }

    if (!$dara.isNull(request.userDefineCubeName)) {
      query["UserDefineCubeName"] = request.userDefineCubeName;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataset",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetResponse({}));
  }

  /**
   * 根据物理表名称创建数据集
   * 
   * @param request - CreateDatasetRequest
   * @returns CreateDatasetResponse
   */
  async createDataset(request: $_model.CreateDatasetRequest): Promise<$_model.CreateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatasetWithOptions(request, runtime);
  }

  /**
   * Generate a ticket for third-party embedding.
   * 
   * @remarks
   * For detailed usage, please refer to [Report Embedding Data Permission Control and Parameter Passing Security Enhancement Solution](https://help.aliyun.com/document_detail/391291.html).
   * 
   * @param request - CreateTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicketResponse
   */
  async createTicketWithOptions(request: $_model.CreateTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.cmptId)) {
      query["CmptId"] = request.cmptId;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.globalParam)) {
      query["GlobalParam"] = request.globalParam;
    }

    if (!$dara.isNull(request.ticketNum)) {
      query["TicketNum"] = request.ticketNum;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.watermarkParam)) {
      query["WatermarkParam"] = request.watermarkParam;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTicket",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTicketResponse>(await this.callApi(params, req, runtime), new $_model.CreateTicketResponse({}));
  }

  /**
   * Generate a ticket for third-party embedding.
   * 
   * @remarks
   * For detailed usage, please refer to [Report Embedding Data Permission Control and Parameter Passing Security Enhancement Solution](https://help.aliyun.com/document_detail/391291.html).
   * 
   * @param request - CreateTicketRequest
   * @returns CreateTicketResponse
   */
  async createTicket(request: $_model.CreateTicketRequest): Promise<$_model.CreateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTicketWithOptions(request, runtime);
  }

  /**
   * Generate an embedding ticket for Smart Q.
   * 
   * @param request - CreateTicket4CopilotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicket4CopilotResponse
   */
  async createTicket4CopilotWithOptions(request: $_model.CreateTicket4CopilotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTicket4CopilotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.copilotId)) {
      query["CopilotId"] = request.copilotId;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.ticketNum)) {
      query["TicketNum"] = request.ticketNum;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTicket4Copilot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTicket4CopilotResponse>(await this.callApi(params, req, runtime), new $_model.CreateTicket4CopilotResponse({}));
  }

  /**
   * Generate an embedding ticket for Smart Q.
   * 
   * @param request - CreateTicket4CopilotRequest
   * @returns CreateTicket4CopilotResponse
   */
  async createTicket4Copilot(request: $_model.CreateTicket4CopilotRequest): Promise<$_model.CreateTicket4CopilotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTicket4CopilotWithOptions(request, runtime);
  }

  /**
   * Create a user group. You can specify a parent user group.
   * 
   * @param request - CreateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserGroupResponse
   */
  async createUserGroupWithOptions(request: $_model.CreateUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.parentUserGroupId)) {
      query["ParentUserGroupId"] = request.parentUserGroupId;
    }

    if (!$dara.isNull(request.userGroupDescription)) {
      query["UserGroupDescription"] = request.userGroupDescription;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserGroup",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserGroupResponse({}));
  }

  /**
   * Create a user group. You can specify a parent user group.
   * 
   * @param request - CreateUserGroupRequest
   * @returns CreateUserGroupResponse
   */
  async createUserGroup(request: $_model.CreateUserGroupRequest): Promise<$_model.CreateUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  /**
   * 创建工作空间
   * 
   * @param request - CreateWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: $_model.CreateWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowPublish)) {
      query["AllowPublish"] = request.allowPublish;
    }

    if (!$dara.isNull(request.allowShare)) {
      query["AllowShare"] = request.allowShare;
    }

    if (!$dara.isNull(request.allowViewAll)) {
      query["AllowViewAll"] = request.allowViewAll;
    }

    if (!$dara.isNull(request.defaultShareToAll)) {
      query["DefaultShareToAll"] = request.defaultShareToAll;
    }

    if (!$dara.isNull(request.onlyAdminCreateDatasource)) {
      query["OnlyAdminCreateDatasource"] = request.onlyAdminCreateDatasource;
    }

    if (!$dara.isNull(request.useComment)) {
      query["UseComment"] = request.useComment;
    }

    if (!$dara.isNull(request.workspaceDescription)) {
      query["WorkspaceDescription"] = request.workspaceDescription;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * 创建工作空间
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkspaceWithOptions(request, runtime);
  }

  /**
   * 数据解读开放接口
   * 
   * @param request - DataInterpretationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DataInterpretationResponse
   */
  async dataInterpretationWithOptions(request: $_model.DataInterpretationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DataInterpretationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.modelCode)) {
      query["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.promptForceOverride)) {
      query["PromptForceOverride"] = request.promptForceOverride;
    }

    if (!$dara.isNull(request.userPrompt)) {
      query["UserPrompt"] = request.userPrompt;
    }

    if (!$dara.isNull(request.userQuestion)) {
      query["UserQuestion"] = request.userQuestion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DataInterpretation",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DataInterpretationResponse>(await this.callApi(params, req, runtime), new $_model.DataInterpretationResponse({}));
  }

  /**
   * 数据解读开放接口
   * 
   * @param request - DataInterpretationRequest
   * @returns DataInterpretationResponse
   */
  async dataInterpretation(request: $_model.DataInterpretationRequest): Promise<$_model.DataInterpretationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dataInterpretationWithOptions(request, runtime);
  }

  /**
   * Query works information under the specified dataset.
   * 
   * @param request - DataSetBloodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DataSetBloodResponse
   */
  async dataSetBloodWithOptions(request: $_model.DataSetBloodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DataSetBloodResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSetIds)) {
      query["DataSetIds"] = request.dataSetIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DataSetBlood",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DataSetBloodResponse>(await this.callApi(params, req, runtime), new $_model.DataSetBloodResponse({}));
  }

  /**
   * Query works information under the specified dataset.
   * 
   * @param request - DataSetBloodRequest
   * @returns DataSetBloodResponse
   */
  async dataSetBlood(request: $_model.DataSetBloodRequest): Promise<$_model.DataSetBloodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dataSetBloodWithOptions(request, runtime);
  }

  /**
   * Query dataset information under the specified data source
   * 
   * @param request - DataSourceBloodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DataSourceBloodResponse
   */
  async dataSourceBloodWithOptions(request: $_model.DataSourceBloodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DataSourceBloodResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DataSourceBlood",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DataSourceBloodResponse>(await this.callApi(params, req, runtime), new $_model.DataSourceBloodResponse({}));
  }

  /**
   * Query dataset information under the specified data source
   * 
   * @param request - DataSourceBloodRequest
   * @returns DataSourceBloodResponse
   */
  async dataSourceBlood(request: $_model.DataSourceBloodRequest): Promise<$_model.DataSourceBloodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dataSourceBloodWithOptions(request, runtime);
  }

  /**
   * Update the expiration time of the ticket embedded in the report.
   * 
   * @param request - DelayTicketExpireTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelayTicketExpireTimeResponse
   */
  async delayTicketExpireTimeWithOptions(request: $_model.DelayTicketExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DelayTicketExpireTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DelayTicketExpireTime",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DelayTicketExpireTimeResponse>(await this.callApi(params, req, runtime), new $_model.DelayTicketExpireTimeResponse({}));
  }

  /**
   * Update the expiration time of the ticket embedded in the report.
   * 
   * @param request - DelayTicketExpireTimeRequest
   * @returns DelayTicketExpireTimeResponse
   */
  async delayTicketExpireTime(request: $_model.DelayTicketExpireTimeRequest): Promise<$_model.DelayTicketExpireTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delayTicketExpireTimeWithOptions(request, runtime);
  }

  /**
   * { "ruleId": "a5bb24da- ***-a891683e14da", // The ID of the row-column permission rule. "cubeId": "7c7223ae- ***-3c744528014b", // The ID of the dataset. "delModel": { "userGroups": [ "0d5fb19b- ***-1248 fc27ca51", // Delete the user group ID of the user group. "3d2c23d4-***-f6390f325c2d" ], "users": [ "4334 ***358", // Delete the UserID of the user group. "Huang***3fa822" ] } }
   * 
   * @remarks
   * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","delModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
   * 
   * @param request - DeleteDataLevelPermissionRuleUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLevelPermissionRuleUsersResponse
   */
  async deleteDataLevelPermissionRuleUsersWithOptions(request: $_model.DeleteDataLevelPermissionRuleUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLevelPermissionRuleUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteUserModel)) {
      query["DeleteUserModel"] = request.deleteUserModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLevelPermissionRuleUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLevelPermissionRuleUsersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLevelPermissionRuleUsersResponse({}));
  }

  /**
   * { "ruleId": "a5bb24da- ***-a891683e14da", // The ID of the row-column permission rule. "cubeId": "7c7223ae- ***-3c744528014b", // The ID of the dataset. "delModel": { "userGroups": [ "0d5fb19b- ***-1248 fc27ca51", // Delete the user group ID of the user group. "3d2c23d4-***-f6390f325c2d" ], "users": [ "4334 ***358", // Delete the UserID of the user group. "Huang***3fa822" ] } }
   * 
   * @remarks
   * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","delModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
   * 
   * @param request - DeleteDataLevelPermissionRuleUsersRequest
   * @returns DeleteDataLevelPermissionRuleUsersResponse
   */
  async deleteDataLevelPermissionRuleUsers(request: $_model.DeleteDataLevelPermissionRuleUsersRequest): Promise<$_model.DeleteDataLevelPermissionRuleUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLevelPermissionRuleUsersWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * @param request - DeleteDataLevelRuleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLevelRuleConfigResponse
   */
  async deleteDataLevelRuleConfigWithOptions(request: $_model.DeleteDataLevelRuleConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLevelRuleConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLevelRuleConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLevelRuleConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLevelRuleConfigResponse({}));
  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * @param request - DeleteDataLevelRuleConfigRequest
   * @returns DeleteDataLevelRuleConfigResponse
   */
  async deleteDataLevelRuleConfig(request: $_model.DeleteDataLevelRuleConfigRequest): Promise<$_model.DeleteDataLevelRuleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLevelRuleConfigWithOptions(request, runtime);
  }

  /**
   * Delete Third-Party Embedded Ticket
   * 
   * @param request - DeleteTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTicketResponse
   */
  async deleteTicketWithOptions(request: $_model.DeleteTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTicket",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTicketResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTicketResponse({}));
  }

  /**
   * Delete Third-Party Embedded Ticket
   * 
   * @param request - DeleteTicketRequest
   * @returns DeleteTicketResponse
   */
  async deleteTicket(request: $_model.DeleteTicketRequest): Promise<$_model.DeleteTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTicketWithOptions(request, runtime);
  }

  /**
   * Delete the specified organization user.
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: $_model.DeleteUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.transferUserId)) {
      query["TransferUserId"] = request.transferUserId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2022-01-01",
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
   * Delete the specified organization user.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * Delete a member from the specified workspace.
   * 
   * @param request - DeleteUserFromWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserFromWorkspaceResponse
   */
  async deleteUserFromWorkspaceWithOptions(request: $_model.DeleteUserFromWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserFromWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserFromWorkspace",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserFromWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserFromWorkspaceResponse({}));
  }

  /**
   * Delete a member from the specified workspace.
   * 
   * @param request - DeleteUserFromWorkspaceRequest
   * @returns DeleteUserFromWorkspaceResponse
   */
  async deleteUserFromWorkspace(request: $_model.DeleteUserFromWorkspaceRequest): Promise<$_model.DeleteUserFromWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserFromWorkspaceWithOptions(request, runtime);
  }

  /**
   * Deletes a user group in an organization.
   * 
   * @param request - DeleteUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroupWithOptions(request: $_model.DeleteUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserGroup",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserGroupResponse({}));
  }

  /**
   * Deletes a user group in an organization.
   * 
   * @param request - DeleteUserGroupRequest
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroup(request: $_model.DeleteUserGroupRequest): Promise<$_model.DeleteUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a specified member from a specified user group.
   * 
   * @param request - DeleteUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupMemberResponse
   */
  async deleteUserGroupMemberWithOptions(request: $_model.DeleteUserGroupMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserGroupMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserGroupMember",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserGroupMemberResponse({}));
  }

  /**
   * Deletes a specified member from a specified user group.
   * 
   * @param request - DeleteUserGroupMemberRequest
   * @returns DeleteUserGroupMemberResponse
   */
  async deleteUserGroupMember(request: $_model.DeleteUserGroupMemberRequest): Promise<$_model.DeleteUserGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * Batch remove specified users from user groups.
   * 
   * @param request - DeleteUserGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupMembersResponse
   */
  async deleteUserGroupMembersWithOptions(request: $_model.DeleteUserGroupMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserGroupMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserGroupMembers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserGroupMembersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserGroupMembersResponse({}));
  }

  /**
   * Batch remove specified users from user groups.
   * 
   * @param request - DeleteUserGroupMembersRequest
   * @returns DeleteUserGroupMembersResponse
   */
  async deleteUserGroupMembers(request: $_model.DeleteUserGroupMembersRequest): Promise<$_model.DeleteUserGroupMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserGroupMembersWithOptions(request, runtime);
  }

  /**
   * Deletes the tag metadata of an organization member.
   * 
   * @param request - DeleteUserTagMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserTagMetaResponse
   */
  async deleteUserTagMetaWithOptions(request: $_model.DeleteUserTagMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserTagMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserTagMeta",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserTagMetaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserTagMetaResponse({}));
  }

  /**
   * Deletes the tag metadata of an organization member.
   * 
   * @param request - DeleteUserTagMetaRequest
   * @returns DeleteUserTagMetaResponse
   */
  async deleteUserTagMeta(request: $_model.DeleteUserTagMetaRequest): Promise<$_model.DeleteUserTagMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserTagMetaWithOptions(request, runtime);
  }

  /**
   * Get Data Source Information
   * 
   * @param request - GetDataSourceConnectionInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceConnectionInfoResponse
   */
  async getDataSourceConnectionInfoWithOptions(request: $_model.GetDataSourceConnectionInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataSourceConnectionInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dsId)) {
      query["DsId"] = request.dsId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataSourceConnectionInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataSourceConnectionInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDataSourceConnectionInfoResponse({}));
  }

  /**
   * Get Data Source Information
   * 
   * @param request - GetDataSourceConnectionInfoRequest
   * @returns GetDataSourceConnectionInfoResponse
   */
  async getDataSourceConnectionInfo(request: $_model.GetDataSourceConnectionInfoRequest): Promise<$_model.GetDataSourceConnectionInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataSourceConnectionInfoWithOptions(request, runtime);
  }

  /**
   * 获取订阅任务列表信息
   * 
   * @param request - GetMailTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMailTaskListResponse
   */
  async getMailTaskListWithOptions(request: $_model.GetMailTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMailTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paused)) {
      query["Paused"] = request.paused;
    }

    if (!$dara.isNull(request.userNick)) {
      query["UserNick"] = request.userNick;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMailTaskList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMailTaskListResponse>(await this.callApi(params, req, runtime), new $_model.GetMailTaskListResponse({}));
  }

  /**
   * 获取订阅任务列表信息
   * 
   * @param request - GetMailTaskListRequest
   * @returns GetMailTaskListResponse
   */
  async getMailTaskList(request: $_model.GetMailTaskListRequest): Promise<$_model.GetMailTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMailTaskListWithOptions(request, runtime);
  }

  /**
   * Check the running status of mail tasks within an organization
   * 
   * @param request - GetMailTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMailTaskStatusResponse
   */
  async getMailTaskStatusWithOptions(request: $_model.GetMailTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMailTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mailId)) {
      query["MailId"] = request.mailId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMailTaskStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMailTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetMailTaskStatusResponse({}));
  }

  /**
   * Check the running status of mail tasks within an organization
   * 
   * @param request - GetMailTaskStatusRequest
   * @returns GetMailTaskStatusResponse
   */
  async getMailTaskStatus(request: $_model.GetMailTaskStatusRequest): Promise<$_model.GetMailTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMailTaskStatusWithOptions(request, runtime);
  }

  /**
   * Search for user group information based on the keyword of the user group name.
   * 
   * @param request - GetUserGroupInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserGroupInfoResponse
   */
  async getUserGroupInfoWithOptions(request: $_model.GetUserGroupInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserGroupInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserGroupInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserGroupInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetUserGroupInfoResponse({}));
  }

  /**
   * Search for user group information based on the keyword of the user group name.
   * 
   * @param request - GetUserGroupInfoRequest
   * @returns GetUserGroupInfoResponse
   */
  async getUserGroupInfo(request: $_model.GetUserGroupInfoRequest): Promise<$_model.GetUserGroupInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserGroupInfoWithOptions(request, runtime);
  }

  /**
   * Query the list of embedded reports
   * 
   * @param request - GetWorksEmbedListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorksEmbedListResponse
   */
  async getWorksEmbedListWithOptions(request: $_model.GetWorksEmbedListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorksEmbedListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    if (!$dara.isNull(request.wsId)) {
      query["WsId"] = request.wsId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorksEmbedList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorksEmbedListResponse>(await this.callApi(params, req, runtime), new $_model.GetWorksEmbedListResponse({}));
  }

  /**
   * Query the list of embedded reports
   * 
   * @param request - GetWorksEmbedListRequest
   * @returns GetWorksEmbedListResponse
   */
  async getWorksEmbedList(request: $_model.GetWorksEmbedListRequest): Promise<$_model.GetWorksEmbedListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorksEmbedListWithOptions(request, runtime);
  }

  /**
   * 获取空间下加速引擎管控页任务信息。
   * 
   * @param request - ListAccelerationOfWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccelerationOfWorkspaceResponse
   */
  async listAccelerationOfWorkspaceWithOptions(request: $_model.ListAccelerationOfWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccelerationOfWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.creatorId)) {
      query["CreatorId"] = request.creatorId;
    }

    if (!$dara.isNull(request.cubeName)) {
      query["CubeName"] = request.cubeName;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccelerationOfWorkspace",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccelerationOfWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.ListAccelerationOfWorkspaceResponse({}));
  }

  /**
   * 获取空间下加速引擎管控页任务信息。
   * 
   * @param request - ListAccelerationOfWorkspaceRequest
   * @returns ListAccelerationOfWorkspaceResponse
   */
  async listAccelerationOfWorkspace(request: $_model.ListAccelerationOfWorkspaceRequest): Promise<$_model.ListAccelerationOfWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccelerationOfWorkspaceWithOptions(request, runtime);
  }

  /**
   * Queries API data sources.
   * 
   * @remarks
   * For more information about the parameters, see [Create an API data source](https://help.aliyun.com/document_detail/409330.html).
   * 
   * @param request - ListApiDatasourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiDatasourceResponse
   */
  async listApiDatasourceWithOptions(request: $_model.ListApiDatasourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiDatasourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiDatasource",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiDatasourceResponse>(await this.callApi(params, req, runtime), new $_model.ListApiDatasourceResponse({}));
  }

  /**
   * Queries API data sources.
   * 
   * @remarks
   * For more information about the parameters, see [Create an API data source](https://help.aliyun.com/document_detail/409330.html).
   * 
   * @param request - ListApiDatasourceRequest
   * @returns ListApiDatasourceResponse
   */
  async listApiDatasource(request: $_model.ListApiDatasourceRequest): Promise<$_model.ListApiDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApiDatasourceWithOptions(request, runtime);
  }

  /**
   * Queries user group information at a time by user group ID.
   * 
   * @param request - ListByUserGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListByUserGroupIdResponse
   */
  async listByUserGroupIdWithOptions(request: $_model.ListByUserGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListByUserGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListByUserGroupId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListByUserGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.ListByUserGroupIdResponse({}));
  }

  /**
   * Queries user group information at a time by user group ID.
   * 
   * @param request - ListByUserGroupIdRequest
   * @returns ListByUserGroupIdResponse
   */
  async listByUserGroupId(request: $_model.ListByUserGroupIdRequest): Promise<$_model.ListByUserGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listByUserGroupIdWithOptions(request, runtime);
  }

  /**
   * Retrieve the list of works that a user has favorited.
   * 
   * @param request - ListCollectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCollectionsResponse
   */
  async listCollectionsWithOptions(request: $_model.ListCollectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCollectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCollections",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCollectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListCollectionsResponse({}));
  }

  /**
   * Retrieve the list of works that a user has favorited.
   * 
   * @param request - ListCollectionsRequest
   * @returns ListCollectionsResponse
   */
  async listCollections(request: $_model.ListCollectionsRequest): Promise<$_model.ListCollectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCollectionsWithOptions(request, runtime);
  }

  /**
   * You can this operation to obtain a list of row and column permission configurations for a specified dataset.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
   * 
   * @param request - ListCubeDataLevelPermissionConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCubeDataLevelPermissionConfigResponse
   */
  async listCubeDataLevelPermissionConfigWithOptions(request: $_model.ListCubeDataLevelPermissionConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCubeDataLevelPermissionConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCubeDataLevelPermissionConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCubeDataLevelPermissionConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListCubeDataLevelPermissionConfigResponse({}));
  }

  /**
   * You can this operation to obtain a list of row and column permission configurations for a specified dataset.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
   * 
   * @param request - ListCubeDataLevelPermissionConfigRequest
   * @returns ListCubeDataLevelPermissionConfigResponse
   */
  async listCubeDataLevelPermissionConfig(request: $_model.ListCubeDataLevelPermissionConfigRequest): Promise<$_model.ListCubeDataLevelPermissionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCubeDataLevelPermissionConfigWithOptions(request, runtime);
  }

  /**
   * Retrieve the whitelist for dataset row and column permissions based on the type of permission.
   * 
   * @remarks
   * > This API only supports the new row and column permission model of Quick BI. If you are still using the old row and column permissions, please migrate to the new row and column permission model before calling this interface. To migrate to the new row and column permission model, follow these steps: In Organization Management -> Security Configuration -> Upgrade Row and Column Permissions, click **One-Click Upgrade** to upgrade to the new row-level permissions.
   * 
   * @param request - ListDataLevelPermissionWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLevelPermissionWhiteListResponse
   */
  async listDataLevelPermissionWhiteListWithOptions(request: $_model.ListDataLevelPermissionWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLevelPermissionWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLevelPermissionWhiteList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLevelPermissionWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLevelPermissionWhiteListResponse({}));
  }

  /**
   * Retrieve the whitelist for dataset row and column permissions based on the type of permission.
   * 
   * @remarks
   * > This API only supports the new row and column permission model of Quick BI. If you are still using the old row and column permissions, please migrate to the new row and column permission model before calling this interface. To migrate to the new row and column permission model, follow these steps: In Organization Management -> Security Configuration -> Upgrade Row and Column Permissions, click **One-Click Upgrade** to upgrade to the new row-level permissions.
   * 
   * @param request - ListDataLevelPermissionWhiteListRequest
   * @returns ListDataLevelPermissionWhiteListResponse
   */
  async listDataLevelPermissionWhiteList(request: $_model.ListDataLevelPermissionWhiteListRequest): Promise<$_model.ListDataLevelPermissionWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLevelPermissionWhiteListWithOptions(request, runtime);
  }

  /**
   * Query all data sources under the specified space
   * 
   * @param request - ListDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceResponse
   */
  async listDataSourceWithOptions(request: $_model.ListDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dsType)) {
      query["DsType"] = request.dsType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSource",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceResponse({}));
  }

  /**
   * Query all data sources under the specified space
   * 
   * @param request - ListDataSourceRequest
   * @returns ListDataSourceResponse
   */
  async listDataSource(request: $_model.ListDataSourceRequest): Promise<$_model.ListDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourceWithOptions(request, runtime);
  }

  /**
   * Overview
   * 
   * @param request - ListFavoriteReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFavoriteReportsResponse
   */
  async listFavoriteReportsWithOptions(request: $_model.ListFavoriteReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFavoriteReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.treeType)) {
      query["TreeType"] = request.treeType;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFavoriteReports",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFavoriteReportsResponse>(await this.callApi(params, req, runtime), new $_model.ListFavoriteReportsResponse({}));
  }

  /**
   * Overview
   * 
   * @param request - ListFavoriteReportsRequest
   * @returns ListFavoriteReportsResponse
   */
  async listFavoriteReports(request: $_model.ListFavoriteReportsRequest): Promise<$_model.ListFavoriteReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFavoriteReportsWithOptions(request, runtime);
  }

  /**
   * Get user list under the specified organization role.
   * 
   * @param request - ListOrganizationRoleUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationRoleUsersResponse
   */
  async listOrganizationRoleUsersWithOptions(request: $_model.ListOrganizationRoleUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationRoleUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationRoleUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationRoleUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationRoleUsersResponse({}));
  }

  /**
   * Get user list under the specified organization role.
   * 
   * @param request - ListOrganizationRoleUsersRequest
   * @returns ListOrganizationRoleUsersResponse
   */
  async listOrganizationRoleUsers(request: $_model.ListOrganizationRoleUsersRequest): Promise<$_model.ListOrganizationRoleUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationRoleUsersWithOptions(request, runtime);
  }

  /**
   * Retrieve the list of custom roles at the organization level.
   * 
   * @param request - ListOrganizationRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationRolesResponse
   */
  async listOrganizationRolesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationRolesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationRoles",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationRolesResponse({}));
  }

  /**
   * Retrieve the list of custom roles at the organization level.
   * @returns ListOrganizationRolesResponse
   */
  async listOrganizationRoles(): Promise<$_model.ListOrganizationRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationRolesWithOptions(runtime);
  }

  /**
   * Obtains the list of authorization details for a BI portal menu.
   * 
   * @param request - ListPortalMenuAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPortalMenuAuthorizationResponse
   */
  async listPortalMenuAuthorizationWithOptions(request: $_model.ListPortalMenuAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPortalMenuAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPortalMenuAuthorization",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPortalMenuAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.ListPortalMenuAuthorizationResponse({}));
  }

  /**
   * Obtains the list of authorization details for a BI portal menu.
   * 
   * @param request - ListPortalMenuAuthorizationRequest
   * @returns ListPortalMenuAuthorizationResponse
   */
  async listPortalMenuAuthorization(request: $_model.ListPortalMenuAuthorizationRequest): Promise<$_model.ListPortalMenuAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPortalMenuAuthorizationWithOptions(request, runtime);
  }

  /**
   * Gets a hierarchical list of menus under a specific BI portal.
   * 
   * @param request - ListPortalMenusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPortalMenusResponse
   */
  async listPortalMenusWithOptions(request: $_model.ListPortalMenusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPortalMenusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPortalMenus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPortalMenusResponse>(await this.callApi(params, req, runtime), new $_model.ListPortalMenusResponse({}));
  }

  /**
   * Gets a hierarchical list of menus under a specific BI portal.
   * 
   * @param request - ListPortalMenusRequest
   * @returns ListPortalMenusResponse
   */
  async listPortalMenus(request: $_model.ListPortalMenusRequest): Promise<$_model.ListPortalMenusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPortalMenusWithOptions(request, runtime);
  }

  /**
   * You can call this operation to obtain a list of the most frequently viewed and footsteps displayed in the homepage dashboard for a specified user.
   * 
   * @param request - ListRecentViewReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecentViewReportsResponse
   */
  async listRecentViewReportsWithOptions(request: $_model.ListRecentViewReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecentViewReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.offsetDay)) {
      query["OffsetDay"] = request.offsetDay;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!$dara.isNull(request.treeType)) {
      query["TreeType"] = request.treeType;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecentViewReports",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecentViewReportsResponse>(await this.callApi(params, req, runtime), new $_model.ListRecentViewReportsResponse({}));
  }

  /**
   * You can call this operation to obtain a list of the most frequently viewed and footsteps displayed in the homepage dashboard for a specified user.
   * 
   * @param request - ListRecentViewReportsRequest
   * @returns ListRecentViewReportsResponse
   */
  async listRecentViewReports(request: $_model.ListRecentViewReportsRequest): Promise<$_model.ListRecentViewReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecentViewReportsWithOptions(request, runtime);
  }

  /**
   * You can this operation to obtain the list of authorized works displayed on the homepage of a specified user.
   * 
   * @param request - ListSharedReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSharedReportsResponse
   */
  async listSharedReportsWithOptions(request: $_model.ListSharedReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSharedReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.treeType)) {
      query["TreeType"] = request.treeType;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSharedReports",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSharedReportsResponse>(await this.callApi(params, req, runtime), new $_model.ListSharedReportsResponse({}));
  }

  /**
   * You can this operation to obtain the list of authorized works displayed on the homepage of a specified user.
   * 
   * @param request - ListSharedReportsRequest
   * @returns ListSharedReportsResponse
   */
  async listSharedReports(request: $_model.ListSharedReportsRequest): Promise<$_model.ListSharedReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSharedReportsWithOptions(request, runtime);
  }

  /**
   * Queries all user groups to which a user belongs based on the user ID.
   * 
   * @param request - ListUserGroupsByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsByUserIdResponse
   */
  async listUserGroupsByUserIdWithOptions(request: $_model.ListUserGroupsByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserGroupsByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroupsByUserId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserGroupsByUserIdResponse>(await this.callApi(params, req, runtime), new $_model.ListUserGroupsByUserIdResponse({}));
  }

  /**
   * Queries all user groups to which a user belongs based on the user ID.
   * 
   * @param request - ListUserGroupsByUserIdRequest
   * @returns ListUserGroupsByUserIdResponse
   */
  async listUserGroupsByUserId(request: $_model.ListUserGroupsByUserIdRequest): Promise<$_model.ListUserGroupsByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupsByUserIdWithOptions(request, runtime);
  }

  /**
   * 获取数据门户菜单的白名单列表
   * 
   * @param request - ListWhitePortalMenuRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWhitePortalMenuResponse
   */
  async listWhitePortalMenuWithOptions(request: $_model.ListWhitePortalMenuRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWhitePortalMenuResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataportalId)) {
      query["DataportalId"] = request.dataportalId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWhitePortalMenu",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWhitePortalMenuResponse>(await this.callApi(params, req, runtime), new $_model.ListWhitePortalMenuResponse({}));
  }

  /**
   * 获取数据门户菜单的白名单列表
   * 
   * @param request - ListWhitePortalMenuRequest
   * @returns ListWhitePortalMenuResponse
   */
  async listWhitePortalMenu(request: $_model.ListWhitePortalMenuRequest): Promise<$_model.ListWhitePortalMenuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWhitePortalMenuWithOptions(request, runtime);
  }

  /**
   * Get user list under the specified workspace role.
   * 
   * @param request - ListWorkspaceRoleUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceRoleUsersResponse
   */
  async listWorkspaceRoleUsersWithOptions(request: $_model.ListWorkspaceRoleUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspaceRoleUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaceRoleUsers",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspaceRoleUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspaceRoleUsersResponse({}));
  }

  /**
   * Get user list under the specified workspace role.
   * 
   * @param request - ListWorkspaceRoleUsersRequest
   * @returns ListWorkspaceRoleUsersResponse
   */
  async listWorkspaceRoleUsers(request: $_model.ListWorkspaceRoleUsersRequest): Promise<$_model.ListWorkspaceRoleUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkspaceRoleUsersWithOptions(request, runtime);
  }

  /**
   * Get the list of workspace roles.
   * 
   * @param request - ListWorkspaceRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceRolesResponse
   */
  async listWorkspaceRolesWithOptions(request: $_model.ListWorkspaceRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspaceRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaceRoles",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspaceRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspaceRolesResponse({}));
  }

  /**
   * Get the list of workspace roles.
   * 
   * @param request - ListWorkspaceRolesRequest
   * @returns ListWorkspaceRolesResponse
   */
  async listWorkspaceRoles(request: $_model.ListWorkspaceRolesRequest): Promise<$_model.ListWorkspaceRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkspaceRolesWithOptions(request, runtime);
  }

  /**
   * 查询用户所有空间角色列表
   * 
   * @param request - ListWorkspaceUserRolesByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceUserRolesByUserIdResponse
   */
  async listWorkspaceUserRolesByUserIdWithOptions(request: $_model.ListWorkspaceUserRolesByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspaceUserRolesByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaceUserRolesByUserId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspaceUserRolesByUserIdResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspaceUserRolesByUserIdResponse({}));
  }

  /**
   * 查询用户所有空间角色列表
   * 
   * @param request - ListWorkspaceUserRolesByUserIdRequest
   * @returns ListWorkspaceUserRolesByUserIdResponse
   */
  async listWorkspaceUserRolesByUserId(request: $_model.ListWorkspaceUserRolesByUserIdRequest): Promise<$_model.ListWorkspaceUserRolesByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkspaceUserRolesByUserIdWithOptions(request, runtime);
  }

  /**
   * Manually Execute Email Task
   * 
   * @param request - ManualRunMailTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManualRunMailTaskResponse
   */
  async manualRunMailTaskWithOptions(request: $_model.ManualRunMailTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ManualRunMailTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mailId)) {
      query["MailId"] = request.mailId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManualRunMailTask",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManualRunMailTaskResponse>(await this.callApi(params, req, runtime), new $_model.ManualRunMailTaskResponse({}));
  }

  /**
   * Manually Execute Email Task
   * 
   * @param request - ManualRunMailTaskRequest
   * @returns ManualRunMailTaskResponse
   */
  async manualRunMailTask(request: $_model.ManualRunMailTaskRequest): Promise<$_model.ManualRunMailTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualRunMailTaskWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a specified API data source.
   * 
   * @remarks
   * When you modify a query statement, you can modify only the top-level JsonObject. You cannot modify parameters that are nested in multiple layers. For more information about the parameters, see [Create an API data source](https://help.aliyun.com/document_detail/409330.html).
   * 
   * @param request - ModifyApiDatasourceParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApiDatasourceParametersResponse
   */
  async modifyApiDatasourceParametersWithOptions(request: $_model.ModifyApiDatasourceParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApiDatasourceParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApiDatasourceParameters",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApiDatasourceParametersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApiDatasourceParametersResponse({}));
  }

  /**
   * Modifies the configurations of a specified API data source.
   * 
   * @remarks
   * When you modify a query statement, you can modify only the top-level JsonObject. You cannot modify parameters that are nested in multiple layers. For more information about the parameters, see [Create an API data source](https://help.aliyun.com/document_detail/409330.html).
   * 
   * @param request - ModifyApiDatasourceParametersRequest
   * @returns ModifyApiDatasourceParametersResponse
   */
  async modifyApiDatasourceParameters(request: $_model.ModifyApiDatasourceParametersRequest): Promise<$_model.ModifyApiDatasourceParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApiDatasourceParametersWithOptions(request, runtime);
  }

  /**
   * Modify Intelligent Query Embedding Configuration
   * 
   * @param request - ModifyCopilotEmbedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCopilotEmbedConfigResponse
   */
  async modifyCopilotEmbedConfigWithOptions(request: $_model.ModifyCopilotEmbedConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCopilotEmbedConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.copilotId)) {
      query["CopilotId"] = request.copilotId;
    }

    if (!$dara.isNull(request.dataRange)) {
      query["DataRange"] = request.dataRange;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCopilotEmbedConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCopilotEmbedConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCopilotEmbedConfigResponse({}));
  }

  /**
   * Modify Intelligent Query Embedding Configuration
   * 
   * @param request - ModifyCopilotEmbedConfigRequest
   * @returns ModifyCopilotEmbedConfigResponse
   */
  async modifyCopilotEmbedConfig(request: $_model.ModifyCopilotEmbedConfigRequest): Promise<$_model.ModifyCopilotEmbedConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCopilotEmbedConfigWithOptions(request, runtime);
  }

  /**
   * 批量编辑仪表板的小Q问数状态
   * 
   * @param request - ModifyDashboardNl2sqlStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDashboardNl2sqlStatusResponse
   */
  async modifyDashboardNl2sqlStatusWithOptions(request: $_model.ModifyDashboardNl2sqlStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDashboardNl2sqlStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dashboardIds)) {
      query["DashboardIds"] = request.dashboardIds;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDashboardNl2sqlStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDashboardNl2sqlStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDashboardNl2sqlStatusResponse({}));
  }

  /**
   * 批量编辑仪表板的小Q问数状态
   * 
   * @param request - ModifyDashboardNl2sqlStatusRequest
   * @returns ModifyDashboardNl2sqlStatusResponse
   */
  async modifyDashboardNl2sqlStatus(request: $_model.ModifyDashboardNl2sqlStatusRequest): Promise<$_model.ModifyDashboardNl2sqlStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDashboardNl2sqlStatusWithOptions(request, runtime);
  }

  /**
   * 获取指定数据集的加速任务运行日志
   * 
   * @param request - QueryAccelerationLogByCubeIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccelerationLogByCubeIdResponse
   */
  async queryAccelerationLogByCubeIdWithOptions(request: $_model.QueryAccelerationLogByCubeIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccelerationLogByCubeIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccelerationLogByCubeId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccelerationLogByCubeIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccelerationLogByCubeIdResponse({}));
  }

  /**
   * 获取指定数据集的加速任务运行日志
   * 
   * @param request - QueryAccelerationLogByCubeIdRequest
   * @returns QueryAccelerationLogByCubeIdResponse
   */
  async queryAccelerationLogByCubeId(request: $_model.QueryAccelerationLogByCubeIdRequest): Promise<$_model.QueryAccelerationLogByCubeIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccelerationLogByCubeIdWithOptions(request, runtime);
  }

  /**
   * Get approval flow information based on the approver.
   * 
   * @param request - QueryApprovalInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryApprovalInfoResponse
   */
  async queryApprovalInfoWithOptions(request: $_model.QueryApprovalInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryApprovalInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryApprovalInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryApprovalInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryApprovalInfoResponse({}));
  }

  /**
   * Get approval flow information based on the approver.
   * 
   * @param request - QueryApprovalInfoRequest
   * @returns QueryApprovalInfoResponse
   */
  async queryApprovalInfo(request: $_model.QueryApprovalInfoRequest): Promise<$_model.QueryApprovalInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryApprovalInfoWithOptions(request, runtime);
  }

  /**
   * Query audit log information.
   * 
   * @param request - QueryAuditLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAuditLogResponse
   */
  async queryAuditLogWithOptions(request: $_model.QueryAuditLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAuditLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessSourceFlag)) {
      query["AccessSourceFlag"] = request.accessSourceFlag;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.operatorId)) {
      query["OperatorId"] = request.operatorId;
    }

    if (!$dara.isNull(request.operatorTypes)) {
      query["OperatorTypes"] = request.operatorTypes;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.userAccessDevice)) {
      query["UserAccessDevice"] = request.userAccessDevice;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAuditLog",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAuditLogResponse>(await this.callApi(params, req, runtime), new $_model.QueryAuditLogResponse({}));
  }

  /**
   * Query audit log information.
   * 
   * @param request - QueryAuditLogRequest
   * @returns QueryAuditLogResponse
   */
  async queryAuditLog(request: $_model.QueryAuditLogRequest): Promise<$_model.QueryAuditLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAuditLogWithOptions(request, runtime);
  }

  /**
   * Queries component performance logs.
   * 
   * @param request - QueryComponentPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryComponentPerformanceResponse
   */
  async queryComponentPerformanceWithOptions(request: $_model.QueryComponentPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryComponentPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.costTimeAvgMin)) {
      query["CostTimeAvgMin"] = request.costTimeAvgMin;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryComponentPerformance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryComponentPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.QueryComponentPerformanceResponse({}));
  }

  /**
   * Queries component performance logs.
   * 
   * @param request - QueryComponentPerformanceRequest
   * @returns QueryComponentPerformanceResponse
   */
  async queryComponentPerformance(request: $_model.QueryComponentPerformanceRequest): Promise<$_model.QueryComponentPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryComponentPerformanceWithOptions(request, runtime);
  }

  /**
   * Get the List of Configurations for Activating XiaoQ Embedding
   * 
   * @param request - QueryCopilotEmbedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCopilotEmbedConfigResponse
   */
  async queryCopilotEmbedConfigWithOptions(request: $_model.QueryCopilotEmbedConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCopilotEmbedConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCopilotEmbedConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCopilotEmbedConfigResponse>(await this.callApi(params, req, runtime), new $_model.QueryCopilotEmbedConfigResponse({}));
  }

  /**
   * Get the List of Configurations for Activating XiaoQ Embedding
   * 
   * @param request - QueryCopilotEmbedConfigRequest
   * @returns QueryCopilotEmbedConfigResponse
   */
  async queryCopilotEmbedConfig(request: $_model.QueryCopilotEmbedConfigRequest): Promise<$_model.QueryCopilotEmbedConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCopilotEmbedConfigWithOptions(request, runtime);
  }

  /**
   * Queries dataset optimization suggestions.
   * 
   * @param request - QueryCubeOptimizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCubeOptimizationResponse
   */
  async queryCubeOptimizationWithOptions(request: $_model.QueryCubeOptimizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCubeOptimizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCubeOptimization",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCubeOptimizationResponse>(await this.callApi(params, req, runtime), new $_model.QueryCubeOptimizationResponse({}));
  }

  /**
   * Queries dataset optimization suggestions.
   * 
   * @param request - QueryCubeOptimizationRequest
   * @returns QueryCubeOptimizationResponse
   */
  async queryCubeOptimization(request: $_model.QueryCubeOptimizationRequest): Promise<$_model.QueryCubeOptimizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCubeOptimizationWithOptions(request, runtime);
  }

  /**
   * Queries the performance logs of a dataset.
   * 
   * @param request - QueryCubePerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCubePerformanceResponse
   */
  async queryCubePerformanceWithOptions(request: $_model.QueryCubePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCubePerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.costTimeAvgMin)) {
      query["CostTimeAvgMin"] = request.costTimeAvgMin;
    }

    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCubePerformance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCubePerformanceResponse>(await this.callApi(params, req, runtime), new $_model.QueryCubePerformanceResponse({}));
  }

  /**
   * Queries the performance logs of a dataset.
   * 
   * @param request - QueryCubePerformanceRequest
   * @returns QueryCubePerformanceResponse
   */
  async queryCubePerformance(request: $_model.QueryCubePerformanceRequest): Promise<$_model.QueryCubePerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCubePerformanceWithOptions(request, runtime);
  }

  /**
   * Query Dashboard\\"s Question Resource Information
   * 
   * @param request - QueryDashboardNl2sqlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDashboardNl2sqlResponse
   */
  async queryDashboardNl2sqlWithOptions(request: $_model.QueryDashboardNl2sqlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDashboardNl2sqlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDashboardNl2sql",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDashboardNl2sqlResponse>(await this.callApi(params, req, runtime), new $_model.QueryDashboardNl2sqlResponse({}));
  }

  /**
   * Query Dashboard\\"s Question Resource Information
   * 
   * @param request - QueryDashboardNl2sqlRequest
   * @returns QueryDashboardNl2sqlResponse
   */
  async queryDashboardNl2sql(request: $_model.QueryDashboardNl2sqlRequest): Promise<$_model.QueryDashboardNl2sqlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDashboardNl2sqlWithOptions(request, runtime);
  }

  /**
   * Invoke the open data service API.
   * 
   * @remarks
   * ### Prerequisites
   * You need to create a data service API through Quick BI\\"s data service. For more details, see: [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * ### Usage Restrictions
   * * The data service feature is only available to professional edition customers.
   * * The timeout for data service API calls is 60s, and the QPS for a single API is 10 times/second.
   * * If row-level permissions are enabled on the dataset referenced by the data service API, the API call will also be intercepted by the row-level permission policy.
   * 
   * @param request - QueryDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataResponse
   */
  async queryDataWithOptions(request: $_model.QueryDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.conditions)) {
      query["Conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.returnFields)) {
      query["ReturnFields"] = request.returnFields;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryData",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryDataResponse({}));
  }

  /**
   * Invoke the open data service API.
   * 
   * @remarks
   * ### Prerequisites
   * You need to create a data service API through Quick BI\\"s data service. For more details, see: [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * ### Usage Restrictions
   * * The data service feature is only available to professional edition customers.
   * * The timeout for data service API calls is 60s, and the QPS for a single API is 10 times/second.
   * * If row-level permissions are enabled on the dataset referenced by the data service API, the API call will also be intercepted by the row-level permission policy.
   * 
   * @param request - QueryDataRequest
   * @returns QueryDataResponse
   */
  async queryData(request: $_model.QueryDataRequest): Promise<$_model.QueryDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDataWithOptions(request, runtime);
  }

  /**
   * Get Data Range Catalog List
   * 
   * @param request - QueryDataRangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataRangeResponse
   */
  async queryDataRangeWithOptions(request: $_model.QueryDataRangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDataRangeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDataRange",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDataRangeResponse>(await this.callApi(params, req, runtime), new $_model.QueryDataRangeResponse({}));
  }

  /**
   * Get Data Range Catalog List
   * 
   * @param request - QueryDataRangeRequest
   * @returns QueryDataRangeResponse
   */
  async queryDataRange(request: $_model.QueryDataRangeRequest): Promise<$_model.QueryDataRangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDataRangeWithOptions(request, runtime);
  }

  /**
   * Invoke an already created API in the data service.
   * 
   * @remarks
   * #### Prerequisites
   * You create the data service API through Quick BI\\"s data service. For more details, see [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * #### Usage Restrictions
   * * The data service feature is only available to professional edition customers. 
   * * The timeout for data service API calls is 60s, and the QPS for a single API is 10 times/second.
   * * If row-level permissions are enabled on the dataset referenced by the data service API, the API call may be intercepted by the row-level permission policy.
   * 
   * @deprecated OpenAPI QueryDataService is deprecated, please use quickbi-public::2022-01-01::QueryData instead.
   * 
   * @param request - QueryDataServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataServiceResponse
   */
  async queryDataServiceWithOptions(request: $_model.QueryDataServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDataServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.conditions)) {
      query["Conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.returnFields)) {
      query["ReturnFields"] = request.returnFields;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDataService",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDataServiceResponse>(await this.callApi(params, req, runtime), new $_model.QueryDataServiceResponse({}));
  }

  /**
   * Invoke an already created API in the data service.
   * 
   * @remarks
   * #### Prerequisites
   * You create the data service API through Quick BI\\"s data service. For more details, see [Data Service](https://help.aliyun.com/document_detail/144980.html).
   * #### Usage Restrictions
   * * The data service feature is only available to professional edition customers. 
   * * The timeout for data service API calls is 60s, and the QPS for a single API is 10 times/second.
   * * If row-level permissions are enabled on the dataset referenced by the data service API, the API call may be intercepted by the row-level permission policy.
   * 
   * @deprecated OpenAPI QueryDataService is deprecated, please use quickbi-public::2022-01-01::QueryData instead.
   * 
   * @param request - QueryDataServiceRequest
   * @returns QueryDataServiceResponse
   */
  // Deprecated
  async queryDataService(request: $_model.QueryDataServiceRequest): Promise<$_model.QueryDataServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDataServiceWithOptions(request, runtime);
  }

  /**
   * Query Data Service API List
   * 
   * @param request - QueryDataServiceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataServiceListResponse
   */
  async queryDataServiceListWithOptions(request: $_model.QueryDataServiceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDataServiceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
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
      action: "QueryDataServiceList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDataServiceListResponse>(await this.callApi(params, req, runtime), new $_model.QueryDataServiceListResponse({}));
  }

  /**
   * Query Data Service API List
   * 
   * @param request - QueryDataServiceListRequest
   * @returns QueryDataServiceListResponse
   */
  async queryDataServiceList(request: $_model.QueryDataServiceListRequest): Promise<$_model.QueryDataServiceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDataServiceListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified dataset, including the data source, directory, and dataset model.
   * 
   * @remarks
   * The data source, directory, and dataset model (including dimensions, measures, physical fields, custom SQL text, and association relationships).
   * 
   * @param request - QueryDatasetDetailInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetDetailInfoResponse
   */
  async queryDatasetDetailInfoWithOptions(request: $_model.QueryDatasetDetailInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDatasetDetailInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDatasetDetailInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDatasetDetailInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryDatasetDetailInfoResponse({}));
  }

  /**
   * Queries the details of a specified dataset, including the data source, directory, and dataset model.
   * 
   * @remarks
   * The data source, directory, and dataset model (including dimensions, measures, physical fields, custom SQL text, and association relationships).
   * 
   * @param request - QueryDatasetDetailInfoRequest
   * @returns QueryDatasetDetailInfoResponse
   */
  async queryDatasetDetailInfo(request: $_model.QueryDatasetDetailInfoRequest): Promise<$_model.QueryDatasetDetailInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDatasetDetailInfoWithOptions(request, runtime);
  }

  /**
   * Indicates whether the table is a custom SQL table. Valid values:
   * \\*   true: custom SQL table
   * \\*   false: non-custom SQL table
   * 
   * @param request - QueryDatasetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetInfoResponse
   */
  async queryDatasetInfoWithOptions(request: $_model.QueryDatasetInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDatasetInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDatasetInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDatasetInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryDatasetInfoResponse({}));
  }

  /**
   * Indicates whether the table is a custom SQL table. Valid values:
   * \\*   true: custom SQL table
   * \\*   false: non-custom SQL table
   * 
   * @param request - QueryDatasetInfoRequest
   * @returns QueryDatasetInfoResponse
   */
  async queryDatasetInfo(request: $_model.QueryDatasetInfoRequest): Promise<$_model.QueryDatasetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDatasetInfoWithOptions(request, runtime);
  }

  /**
   * The name of the training dataset.
   * 
   * @param request - QueryDatasetListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetListResponse
   */
  async queryDatasetListWithOptions(request: $_model.QueryDatasetListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDatasetListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.withChildren)) {
      query["WithChildren"] = request.withChildren;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDatasetList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDatasetListResponse>(await this.callApi(params, req, runtime), new $_model.QueryDatasetListResponse({}));
  }

  /**
   * The name of the training dataset.
   * 
   * @param request - QueryDatasetListRequest
   * @returns QueryDatasetListResponse
   */
  async queryDatasetList(request: $_model.QueryDatasetListRequest): Promise<$_model.QueryDatasetListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDatasetListWithOptions(request, runtime);
  }

  /**
   * Check if the Dataset has Enabled Smart Query
   * 
   * @param request - QueryDatasetSmartqStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetSmartqStatusResponse
   */
  async queryDatasetSmartqStatusWithOptions(request: $_model.QueryDatasetSmartqStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDatasetSmartqStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDatasetSmartqStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDatasetSmartqStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryDatasetSmartqStatusResponse({}));
  }

  /**
   * Check if the Dataset has Enabled Smart Query
   * 
   * @param request - QueryDatasetSmartqStatusRequest
   * @returns QueryDatasetSmartqStatusResponse
   */
  async queryDatasetSmartqStatus(request: $_model.QueryDatasetSmartqStatusRequest): Promise<$_model.QueryDatasetSmartqStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDatasetSmartqStatusWithOptions(request, runtime);
  }

  /**
   * Get the row-level permission switch status for a specified dataset.
   * 
   * @remarks
   * > This interface only supports the new row and column permission model of Quick BI. If you are still using the old row and column permissions, please migrate to the new row and column permission model before calling this interface. To migrate to the new row and column permission model, follow these steps: In Organization Management -> Security Configuration -> Upgrade Row and Column Permissions, click **One-Click Upgrade** to upgrade to the new row-level permissions.
   * 
   * @param request - QueryDatasetSwitchInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetSwitchInfoResponse
   */
  async queryDatasetSwitchInfoWithOptions(request: $_model.QueryDatasetSwitchInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDatasetSwitchInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDatasetSwitchInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDatasetSwitchInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryDatasetSwitchInfoResponse({}));
  }

  /**
   * Get the row-level permission switch status for a specified dataset.
   * 
   * @remarks
   * > This interface only supports the new row and column permission model of Quick BI. If you are still using the old row and column permissions, please migrate to the new row and column permission model before calling this interface. To migrate to the new row and column permission model, follow these steps: In Organization Management -> Security Configuration -> Upgrade Row and Column Permissions, click **One-Click Upgrade** to upgrade to the new row-level permissions.
   * 
   * @param request - QueryDatasetSwitchInfoRequest
   * @returns QueryDatasetSwitchInfoResponse
   */
  async queryDatasetSwitchInfo(request: $_model.QueryDatasetSwitchInfoRequest): Promise<$_model.QueryDatasetSwitchInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDatasetSwitchInfoWithOptions(request, runtime);
  }

  /**
   * Obtain the embedding configuration in the organization, including the maximum number of embeddings and the number of embeddings.
   * 
   * @param request - QueryEmbeddedInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEmbeddedInfoResponse
   */
  async queryEmbeddedInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.QueryEmbeddedInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryEmbeddedInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEmbeddedInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryEmbeddedInfoResponse({}));
  }

  /**
   * Obtain the embedding configuration in the organization, including the maximum number of embeddings and the number of embeddings.
   * @returns QueryEmbeddedInfoResponse
   */
  async queryEmbeddedInfo(): Promise<$_model.QueryEmbeddedInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEmbeddedInfoWithOptions(runtime);
  }

  /**
   * Queries whether embedding is enabled for a report.
   * 
   * @param request - QueryEmbeddedStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEmbeddedStatusResponse
   */
  async queryEmbeddedStatusWithOptions(request: $_model.QueryEmbeddedStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEmbeddedStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEmbeddedStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEmbeddedStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryEmbeddedStatusResponse({}));
  }

  /**
   * Queries whether embedding is enabled for a report.
   * 
   * @param request - QueryEmbeddedStatusRequest
   * @returns QueryEmbeddedStatusResponse
   */
  async queryEmbeddedStatus(request: $_model.QueryEmbeddedStatusRequest): Promise<$_model.QueryEmbeddedStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEmbeddedStatusWithOptions(request, runtime);
  }

  /**
   * Query the Most Recent Acceleration Task by Dataset ID
   * 
   * @param request - QueryLastAccelerationEngineJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLastAccelerationEngineJobResponse
   */
  async queryLastAccelerationEngineJobWithOptions(request: $_model.QueryLastAccelerationEngineJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLastAccelerationEngineJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLastAccelerationEngineJob",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLastAccelerationEngineJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryLastAccelerationEngineJobResponse({}));
  }

  /**
   * Query the Most Recent Acceleration Task by Dataset ID
   * 
   * @param request - QueryLastAccelerationEngineJobRequest
   * @returns QueryLastAccelerationEngineJobResponse
   */
  async queryLastAccelerationEngineJob(request: $_model.QueryLastAccelerationEngineJobRequest): Promise<$_model.QueryLastAccelerationEngineJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryLastAccelerationEngineJobWithOptions(request, runtime);
  }

  /**
   * Check which datasets and analysis themes the user has question authorization for
   * 
   * @param request - QueryLlmCubeWithThemeListByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLlmCubeWithThemeListByUserIdResponse
   */
  async queryLlmCubeWithThemeListByUserIdWithOptions(request: $_model.QueryLlmCubeWithThemeListByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLlmCubeWithThemeListByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLlmCubeWithThemeListByUserId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLlmCubeWithThemeListByUserIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryLlmCubeWithThemeListByUserIdResponse({}));
  }

  /**
   * Check which datasets and analysis themes the user has question authorization for
   * 
   * @param request - QueryLlmCubeWithThemeListByUserIdRequest
   * @returns QueryLlmCubeWithThemeListByUserIdResponse
   */
  async queryLlmCubeWithThemeListByUserId(request: $_model.QueryLlmCubeWithThemeListByUserIdRequest): Promise<$_model.QueryLlmCubeWithThemeListByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryLlmCubeWithThemeListByUserIdWithOptions(request, runtime);
  }

  /**
   * Gets the configuration of the specified organization role.
   * 
   * @param request - QueryOrganizationRoleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrganizationRoleConfigResponse
   */
  async queryOrganizationRoleConfigWithOptions(request: $_model.QueryOrganizationRoleConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOrganizationRoleConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOrganizationRoleConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOrganizationRoleConfigResponse>(await this.callApi(params, req, runtime), new $_model.QueryOrganizationRoleConfigResponse({}));
  }

  /**
   * Gets the configuration of the specified organization role.
   * 
   * @param request - QueryOrganizationRoleConfigRequest
   * @returns QueryOrganizationRoleConfigResponse
   */
  async queryOrganizationRoleConfig(request: $_model.QueryOrganizationRoleConfigRequest): Promise<$_model.QueryOrganizationRoleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOrganizationRoleConfigWithOptions(request, runtime);
  }

  /**
   * Retrieve the list of workspaces under the current organization.
   * 
   * @param request - QueryOrganizationWorkspaceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrganizationWorkspaceListResponse
   */
  async queryOrganizationWorkspaceListWithOptions(request: $_model.QueryOrganizationWorkspaceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOrganizationWorkspaceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
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
      action: "QueryOrganizationWorkspaceList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOrganizationWorkspaceListResponse>(await this.callApi(params, req, runtime), new $_model.QueryOrganizationWorkspaceListResponse({}));
  }

  /**
   * Retrieve the list of workspaces under the current organization.
   * 
   * @param request - QueryOrganizationWorkspaceListRequest
   * @returns QueryOrganizationWorkspaceListResponse
   */
  async queryOrganizationWorkspaceList(request: $_model.QueryOrganizationWorkspaceListRequest): Promise<$_model.QueryOrganizationWorkspaceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOrganizationWorkspaceListWithOptions(request, runtime);
  }

  /**
   * Queries the list of works that a user has the permission to view, including the statements that are authorized to share in a space.
   * 
   * @deprecated OpenAPI QueryReadableResourcesListByUserId is deprecated, please use quickbi-public::2022-01-01::QueryReadableResourcesListByUserIdV2 instead.
   * 
   * @param request - QueryReadableResourcesListByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReadableResourcesListByUserIdResponse
   */
  async queryReadableResourcesListByUserIdWithOptions(request: $_model.QueryReadableResourcesListByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryReadableResourcesListByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryReadableResourcesListByUserId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryReadableResourcesListByUserIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryReadableResourcesListByUserIdResponse({}));
  }

  /**
   * Queries the list of works that a user has the permission to view, including the statements that are authorized to share in a space.
   * 
   * @deprecated OpenAPI QueryReadableResourcesListByUserId is deprecated, please use quickbi-public::2022-01-01::QueryReadableResourcesListByUserIdV2 instead.
   * 
   * @param request - QueryReadableResourcesListByUserIdRequest
   * @returns QueryReadableResourcesListByUserIdResponse
   */
  // Deprecated
  async queryReadableResourcesListByUserId(request: $_model.QueryReadableResourcesListByUserIdRequest): Promise<$_model.QueryReadableResourcesListByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryReadableResourcesListByUserIdWithOptions(request, runtime);
  }

  /**
   * Query list of works user has permission to view (new)
   * 
   * @param request - QueryReadableResourcesListByUserIdV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReadableResourcesListByUserIdV2Response
   */
  async queryReadableResourcesListByUserIdV2WithOptions(request: $_model.QueryReadableResourcesListByUserIdV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.QueryReadableResourcesListByUserIdV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workType)) {
      query["WorkType"] = request.workType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryReadableResourcesListByUserIdV2",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryReadableResourcesListByUserIdV2Response>(await this.callApi(params, req, runtime), new $_model.QueryReadableResourcesListByUserIdV2Response({}));
  }

  /**
   * Query list of works user has permission to view (new)
   * 
   * @param request - QueryReadableResourcesListByUserIdV2Request
   * @returns QueryReadableResourcesListByUserIdV2Response
   */
  async queryReadableResourcesListByUserIdV2(request: $_model.QueryReadableResourcesListByUserIdV2Request): Promise<$_model.QueryReadableResourcesListByUserIdV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryReadableResourcesListByUserIdV2WithOptions(request, runtime);
  }

  /**
   * Queries report performance logs.
   * 
   * @param request - QueryReportPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReportPerformanceResponse
   */
  async queryReportPerformanceWithOptions(request: $_model.QueryReportPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryReportPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.costTimeAvgMin)) {
      query["CostTimeAvgMin"] = request.costTimeAvgMin;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryReportPerformance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryReportPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.QueryReportPerformanceResponse({}));
  }

  /**
   * Queries report performance logs.
   * 
   * @param request - QueryReportPerformanceRequest
   * @returns QueryReportPerformanceResponse
   */
  async queryReportPerformance(request: $_model.QueryReportPerformanceRequest): Promise<$_model.QueryReportPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryReportPerformanceWithOptions(request, runtime);
  }

  /**
   * Query the list of objects to which a work has been shared, returning only the sharing configurations that are still within their validity period.
   * 
   * @param request - QueryShareListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryShareListResponse
   */
  async queryShareListWithOptions(request: $_model.QueryShareListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryShareListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryShareList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryShareListResponse>(await this.callApi(params, req, runtime), new $_model.QueryShareListResponse({}));
  }

  /**
   * Query the list of objects to which a work has been shared, returning only the sharing configurations that are still within their validity period.
   * 
   * @param request - QueryShareListRequest
   * @returns QueryShareListResponse
   */
  async queryShareList(request: $_model.QueryShareListRequest): Promise<$_model.QueryShareListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryShareListWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the list of works authorized to a user.
   * 
   * @param request - QuerySharesToUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySharesToUserListResponse
   */
  async querySharesToUserListWithOptions(request: $_model.QuerySharesToUserListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySharesToUserListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySharesToUserList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySharesToUserListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySharesToUserListResponse({}));
  }

  /**
   * You can call this operation to query the list of works authorized to a user.
   * 
   * @param request - QuerySharesToUserListRequest
   * @returns QuerySharesToUserListResponse
   */
  async querySharesToUserList(request: $_model.QuerySharesToUserListRequest): Promise<$_model.QuerySharesToUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySharesToUserListWithOptions(request, runtime);
  }

  /**
   * Check if a user has permission for a specific smart question dataset
   * 
   * @param request - QuerySmartqPermissionByCubeIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmartqPermissionByCubeIdResponse
   */
  async querySmartqPermissionByCubeIdWithOptions(request: $_model.QuerySmartqPermissionByCubeIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmartqPermissionByCubeIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmartqPermissionByCubeId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmartqPermissionByCubeIdResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmartqPermissionByCubeIdResponse({}));
  }

  /**
   * Check if a user has permission for a specific smart question dataset
   * 
   * @param request - QuerySmartqPermissionByCubeIdRequest
   * @returns QuerySmartqPermissionByCubeIdResponse
   */
  async querySmartqPermissionByCubeId(request: $_model.QuerySmartqPermissionByCubeIdRequest): Promise<$_model.QuerySmartqPermissionByCubeIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmartqPermissionByCubeIdWithOptions(request, runtime);
  }

  /**
   * Obtains the details of a specified ticket for a report that is not embedded in the report.
   * 
   * @param request - QueryTicketInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTicketInfoResponse
   */
  async queryTicketInfoWithOptions(request: $_model.QueryTicketInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTicketInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTicketInfo",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTicketInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryTicketInfoResponse({}));
  }

  /**
   * Obtains the details of a specified ticket for a report that is not embedded in the report.
   * 
   * @param request - QueryTicketInfoRequest
   * @returns QueryTicketInfoResponse
   */
  async queryTicketInfo(request: $_model.QueryTicketInfoRequest): Promise<$_model.QueryTicketInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTicketInfoWithOptions(request, runtime);
  }

  /**
   * 根据绑定的第三方账号ID查询UserId
   * 
   * @param request - QueryUserByMobileAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserByMobileAccountResponse
   */
  async queryUserByMobileAccountWithOptions(request: $_model.QueryUserByMobileAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserByMobileAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mobileType)) {
      query["MobileType"] = request.mobileType;
    }

    if (!$dara.isNull(request.mobileUserId)) {
      query["MobileUserId"] = request.mobileUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserByMobileAccount",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserByMobileAccountResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserByMobileAccountResponse({}));
  }

  /**
   * 根据绑定的第三方账号ID查询UserId
   * 
   * @param request - QueryUserByMobileAccountRequest
   * @returns QueryUserByMobileAccountResponse
   */
  async queryUserByMobileAccount(request: $_model.QueryUserByMobileAccountRequest): Promise<$_model.QueryUserByMobileAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserByMobileAccountWithOptions(request, runtime);
  }

  /**
   * You can this operation to obtain information about child user groups under a specified parent user group.
   * 
   * @param request - QueryUserGroupListByParentIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserGroupListByParentIdResponse
   */
  async queryUserGroupListByParentIdWithOptions(request: $_model.QueryUserGroupListByParentIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserGroupListByParentIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.parentUserGroupId)) {
      query["ParentUserGroupId"] = request.parentUserGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserGroupListByParentId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserGroupListByParentIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserGroupListByParentIdResponse({}));
  }

  /**
   * You can this operation to obtain information about child user groups under a specified parent user group.
   * 
   * @param request - QueryUserGroupListByParentIdRequest
   * @returns QueryUserGroupListByParentIdResponse
   */
  async queryUserGroupListByParentId(request: $_model.QueryUserGroupListByParentIdRequest): Promise<$_model.QueryUserGroupListByParentIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserGroupListByParentIdWithOptions(request, runtime);
  }

  /**
   * Retrieve the list of members under a user group.
   * 
   * @param request - QueryUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserGroupMemberResponse
   */
  async queryUserGroupMemberWithOptions(request: $_model.QueryUserGroupMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserGroupMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserGroupMember",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserGroupMemberResponse({}));
  }

  /**
   * Retrieve the list of members under a user group.
   * 
   * @param request - QueryUserGroupMemberRequest
   * @returns QueryUserGroupMemberResponse
   */
  async queryUserGroupMember(request: $_model.QueryUserGroupMemberRequest): Promise<$_model.QueryUserGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * Queries user information based on the Alibaba Cloud ID or Alibaba Cloud account name.
   * 
   * @param request - QueryUserInfoByAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserInfoByAccountResponse
   */
  async queryUserInfoByAccountWithOptions(request: $_model.QueryUserInfoByAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserInfoByAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.parentAccountName)) {
      query["ParentAccountName"] = request.parentAccountName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserInfoByAccount",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserInfoByAccountResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserInfoByAccountResponse({}));
  }

  /**
   * Queries user information based on the Alibaba Cloud ID or Alibaba Cloud account name.
   * 
   * @param request - QueryUserInfoByAccountRequest
   * @returns QueryUserInfoByAccountResponse
   */
  async queryUserInfoByAccount(request: $_model.QueryUserInfoByAccountRequest): Promise<$_model.QueryUserInfoByAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserInfoByAccountWithOptions(request, runtime);
  }

  /**
   * Queries user information based on the user ID.
   * 
   * @param request - QueryUserInfoByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserInfoByUserIdResponse
   */
  async queryUserInfoByUserIdWithOptions(request: $_model.QueryUserInfoByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserInfoByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserInfoByUserId",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserInfoByUserIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserInfoByUserIdResponse({}));
  }

  /**
   * Queries user information based on the user ID.
   * 
   * @param request - QueryUserInfoByUserIdRequest
   * @returns QueryUserInfoByUserIdResponse
   */
  async queryUserInfoByUserId(request: $_model.QueryUserInfoByUserIdRequest): Promise<$_model.QueryUserInfoByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserInfoByUserIdWithOptions(request, runtime);
  }

  /**
   * Queries the members of an organization.
   * 
   * @param request - QueryUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserListResponse
   */
  async queryUserListWithOptions(request: $_model.QueryUserListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserListResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserListResponse({}));
  }

  /**
   * Queries the members of an organization.
   * 
   * @param request - QueryUserListRequest
   * @returns QueryUserListResponse
   */
  async queryUserList(request: $_model.QueryUserListRequest): Promise<$_model.QueryUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserListWithOptions(request, runtime);
  }

  /**
   * Get the preset workspace role information for a specified workspace member.
   * 
   * @param request - QueryUserRoleInfoInWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserRoleInfoInWorkspaceResponse
   */
  async queryUserRoleInfoInWorkspaceWithOptions(request: $_model.QueryUserRoleInfoInWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserRoleInfoInWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserRoleInfoInWorkspace",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserRoleInfoInWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserRoleInfoInWorkspaceResponse({}));
  }

  /**
   * Get the preset workspace role information for a specified workspace member.
   * 
   * @param request - QueryUserRoleInfoInWorkspaceRequest
   * @returns QueryUserRoleInfoInWorkspaceResponse
   */
  async queryUserRoleInfoInWorkspace(request: $_model.QueryUserRoleInfoInWorkspaceRequest): Promise<$_model.QueryUserRoleInfoInWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserRoleInfoInWorkspaceWithOptions(request, runtime);
  }

  /**
   * Queries the metadata list of member tags in an organization.
   * 
   * @param request - QueryUserTagMetaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserTagMetaListResponse
   */
  async queryUserTagMetaListWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserTagMetaListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserTagMetaList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserTagMetaListResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserTagMetaListResponse({}));
  }

  /**
   * Queries the metadata list of member tags in an organization.
   * @returns QueryUserTagMetaListResponse
   */
  async queryUserTagMetaList(): Promise<$_model.QueryUserTagMetaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserTagMetaListWithOptions(runtime);
  }

  /**
   * Query the list of specific user tag values.
   * 
   * @param request - QueryUserTagValueListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserTagValueListResponse
   */
  async queryUserTagValueListWithOptions(request: $_model.QueryUserTagValueListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserTagValueListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserTagValueList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserTagValueListResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserTagValueListResponse({}));
  }

  /**
   * Query the list of specific user tag values.
   * 
   * @param request - QueryUserTagValueListRequest
   * @returns QueryUserTagValueListResponse
   */
  async queryUserTagValueList(request: $_model.QueryUserTagValueListRequest): Promise<$_model.QueryUserTagValueListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserTagValueListWithOptions(request, runtime);
  }

  /**
   * Queries information about a specified data work.
   * 
   * @param request - QueryWorksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksResponse
   */
  async queryWorksWithOptions(request: $_model.QueryWorksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWorksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorks",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWorksResponse>(await this.callApi(params, req, runtime), new $_model.QueryWorksResponse({}));
  }

  /**
   * Queries information about a specified data work.
   * 
   * @param request - QueryWorksRequest
   * @returns QueryWorksResponse
   */
  async queryWorks(request: $_model.QueryWorksRequest): Promise<$_model.QueryWorksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorksWithOptions(request, runtime);
  }

  /**
   * Obtains the kinship of a data work, including the datasets referenced by each component and query field information. Currently, only supported data works include dashboards, workbooks, and self-service data retrieval.
   * 
   * @param request - QueryWorksBloodRelationshipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksBloodRelationshipResponse
   */
  async queryWorksBloodRelationshipWithOptions(request: $_model.QueryWorksBloodRelationshipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWorksBloodRelationshipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorksBloodRelationship",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWorksBloodRelationshipResponse>(await this.callApi(params, req, runtime), new $_model.QueryWorksBloodRelationshipResponse({}));
  }

  /**
   * Obtains the kinship of a data work, including the datasets referenced by each component and query field information. Currently, only supported data works include dashboards, workbooks, and self-service data retrieval.
   * 
   * @param request - QueryWorksBloodRelationshipRequest
   * @returns QueryWorksBloodRelationshipResponse
   */
  async queryWorksBloodRelationship(request: $_model.QueryWorksBloodRelationshipRequest): Promise<$_model.QueryWorksBloodRelationshipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorksBloodRelationshipWithOptions(request, runtime);
  }

  /**
   * Query all works under the entire organization, with the option to specify the type of work.
   * 
   * @param request - QueryWorksByOrganizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksByOrganizationResponse
   */
  async queryWorksByOrganizationWithOptions(request: $_model.QueryWorksByOrganizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWorksByOrganizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.thirdPartAuthFlag)) {
      query["ThirdPartAuthFlag"] = request.thirdPartAuthFlag;
    }

    if (!$dara.isNull(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorksByOrganization",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWorksByOrganizationResponse>(await this.callApi(params, req, runtime), new $_model.QueryWorksByOrganizationResponse({}));
  }

  /**
   * Query all works under the entire organization, with the option to specify the type of work.
   * 
   * @param request - QueryWorksByOrganizationRequest
   * @returns QueryWorksByOrganizationResponse
   */
  async queryWorksByOrganization(request: $_model.QueryWorksByOrganizationRequest): Promise<$_model.QueryWorksByOrganizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorksByOrganizationWithOptions(request, runtime);
  }

  /**
   * Queries all works in a workspace under an organization. You can specify the type of work.
   * 
   * @param request - QueryWorksByWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksByWorkspaceResponse
   */
  async queryWorksByWorkspaceWithOptions(request: $_model.QueryWorksByWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWorksByWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.thirdPartAuthFlag)) {
      query["ThirdPartAuthFlag"] = request.thirdPartAuthFlag;
    }

    if (!$dara.isNull(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorksByWorkspace",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWorksByWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.QueryWorksByWorkspaceResponse({}));
  }

  /**
   * Queries all works in a workspace under an organization. You can specify the type of work.
   * 
   * @param request - QueryWorksByWorkspaceRequest
   * @returns QueryWorksByWorkspaceResponse
   */
  async queryWorksByWorkspace(request: $_model.QueryWorksByWorkspaceRequest): Promise<$_model.QueryWorksByWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorksByWorkspaceWithOptions(request, runtime);
  }

  /**
   * Get Configuration Information for a Specified Workspace Role
   * 
   * @param request - QueryWorkspaceRoleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorkspaceRoleConfigResponse
   */
  async queryWorkspaceRoleConfigWithOptions(request: $_model.QueryWorkspaceRoleConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWorkspaceRoleConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorkspaceRoleConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWorkspaceRoleConfigResponse>(await this.callApi(params, req, runtime), new $_model.QueryWorkspaceRoleConfigResponse({}));
  }

  /**
   * Get Configuration Information for a Specified Workspace Role
   * 
   * @param request - QueryWorkspaceRoleConfigRequest
   * @returns QueryWorkspaceRoleConfigResponse
   */
  async queryWorkspaceRoleConfig(request: $_model.QueryWorkspaceRoleConfigRequest): Promise<$_model.QueryWorkspaceRoleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorkspaceRoleConfigWithOptions(request, runtime);
  }

  /**
   * Query the list of members under a specified workspace.
   * 
   * @param request - QueryWorkspaceUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorkspaceUserListResponse
   */
  async queryWorkspaceUserListWithOptions(request: $_model.QueryWorkspaceUserListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWorkspaceUserListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWorkspaceUserList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWorkspaceUserListResponse>(await this.callApi(params, req, runtime), new $_model.QueryWorkspaceUserListResponse({}));
  }

  /**
   * Query the list of members under a specified workspace.
   * 
   * @param request - QueryWorkspaceUserListRequest
   * @returns QueryWorkspaceUserListResponse
   */
  async queryWorkspaceUserList(request: $_model.QueryWorkspaceUserListRequest): Promise<$_model.QueryWorkspaceUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorkspaceUserListWithOptions(request, runtime);
  }

  /**
   * You can customize the callback interface for approval processes to process Quick BI approval processes.
   * 
   * @param request - ResultCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResultCallbackResponse
   */
  async resultCallbackWithOptions(request: $_model.ResultCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResultCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.handleReason)) {
      query["HandleReason"] = request.handleReason;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResultCallback",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResultCallbackResponse>(await this.callApi(params, req, runtime), new $_model.ResultCallbackResponse({}));
  }

  /**
   * You can customize the callback interface for approval processes to process Quick BI approval processes.
   * 
   * @param request - ResultCallbackRequest
   * @returns ResultCallbackResponse
   */
  async resultCallback(request: $_model.ResultCallbackRequest): Promise<$_model.ResultCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resultCallbackWithOptions(request, runtime);
  }

  /**
   * Add a user\\"s favorite work
   * 
   * @param request - SaveFavoritesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveFavoritesResponse
   */
  async saveFavoritesWithOptions(request: $_model.SaveFavoritesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveFavoritesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveFavorites",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveFavoritesResponse>(await this.callApi(params, req, runtime), new $_model.SaveFavoritesResponse({}));
  }

  /**
   * Add a user\\"s favorite work
   * 
   * @param request - SaveFavoritesRequest
   * @returns SaveFavoritesResponse
   */
  async saveFavorites(request: $_model.SaveFavoritesRequest): Promise<$_model.SaveFavoritesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveFavoritesWithOptions(request, runtime);
  }

  /**
   * Set extra configuration for row and column permissions.
   * 
   * @remarks
   * > This interface only supports the new version of Quick BI\\"s row and column permission model. If you are still using the old row and column permissions, please migrate to the new row and column permission model before calling this interface. The steps to migrate to the new row and column permission model: In Organization Management --> Security Configuration --> Upgrade Row and Column Permissions to New Version, click **One-Click Upgrade** to upgrade to the new row-level permissions.
   * 
   * @param request - SetDataLevelPermissionExtraConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDataLevelPermissionExtraConfigResponse
   */
  async setDataLevelPermissionExtraConfigWithOptions(request: $_model.SetDataLevelPermissionExtraConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDataLevelPermissionExtraConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.missHitPolicy)) {
      query["MissHitPolicy"] = request.missHitPolicy;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDataLevelPermissionExtraConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDataLevelPermissionExtraConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetDataLevelPermissionExtraConfigResponse({}));
  }

  /**
   * Set extra configuration for row and column permissions.
   * 
   * @remarks
   * > This interface only supports the new version of Quick BI\\"s row and column permission model. If you are still using the old row and column permissions, please migrate to the new row and column permission model before calling this interface. The steps to migrate to the new row and column permission model: In Organization Management --> Security Configuration --> Upgrade Row and Column Permissions to New Version, click **One-Click Upgrade** to upgrade to the new row-level permissions.
   * 
   * @param request - SetDataLevelPermissionExtraConfigRequest
   * @returns SetDataLevelPermissionExtraConfigResponse
   */
  async setDataLevelPermissionExtraConfig(request: $_model.SetDataLevelPermissionExtraConfigRequest): Promise<$_model.SetDataLevelPermissionExtraConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDataLevelPermissionExtraConfigWithOptions(request, runtime);
  }

  /**
   * Set single dataset row and column permission configuration information (addition and update)
   * 
   * @remarks
   * > This interface only supports the new row and column permission model of Quick BI. If you are still using the old row and column permissions, please migrate to the new row and column permission model before calling this interface. Steps to migrate to the new row and column permission model: In Organization Management --> Security Configuration --> Upgrade Row and Column Permissions to New Version, click **One-Click Upgrade** to upgrade to the new row-level permissions.
   * 
   * @param request - SetDataLevelPermissionRuleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDataLevelPermissionRuleConfigResponse
   */
  async setDataLevelPermissionRuleConfigWithOptions(request: $_model.SetDataLevelPermissionRuleConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDataLevelPermissionRuleConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleModel)) {
      query["RuleModel"] = request.ruleModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDataLevelPermissionRuleConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDataLevelPermissionRuleConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetDataLevelPermissionRuleConfigResponse({}));
  }

  /**
   * Set single dataset row and column permission configuration information (addition and update)
   * 
   * @remarks
   * > This interface only supports the new row and column permission model of Quick BI. If you are still using the old row and column permissions, please migrate to the new row and column permission model before calling this interface. Steps to migrate to the new row and column permission model: In Organization Management --> Security Configuration --> Upgrade Row and Column Permissions to New Version, click **One-Click Upgrade** to upgrade to the new row-level permissions.
   * 
   * @param request - SetDataLevelPermissionRuleConfigRequest
   * @returns SetDataLevelPermissionRuleConfigResponse
   */
  async setDataLevelPermissionRuleConfig(request: $_model.SetDataLevelPermissionRuleConfigRequest): Promise<$_model.SetDataLevelPermissionRuleConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDataLevelPermissionRuleConfigWithOptions(request, runtime);
  }

  /**
   * Sets the whitelist for the specified row-level permissions.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
   * 
   * @param request - SetDataLevelPermissionWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDataLevelPermissionWhiteListResponse
   */
  async setDataLevelPermissionWhiteListWithOptions(request: $_model.SetDataLevelPermissionWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDataLevelPermissionWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.whiteListModel)) {
      query["WhiteListModel"] = request.whiteListModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDataLevelPermissionWhiteList",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDataLevelPermissionWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.SetDataLevelPermissionWhiteListResponse({}));
  }

  /**
   * Sets the whitelist for the specified row-level permissions.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
   * 
   * @param request - SetDataLevelPermissionWhiteListRequest
   * @returns SetDataLevelPermissionWhiteListResponse
   */
  async setDataLevelPermissionWhiteList(request: $_model.SetDataLevelPermissionWhiteListRequest): Promise<$_model.SetDataLevelPermissionWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDataLevelPermissionWhiteListWithOptions(request, runtime);
  }

  /**
   * Synchronize the question count permissions of a specified user to other users
   * 
   * @param request - SmartqAuthTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmartqAuthTransferResponse
   */
  async smartqAuthTransferWithOptions(request: $_model.SmartqAuthTransferRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SmartqAuthTransferResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.originUserId)) {
      query["OriginUserId"] = request.originUserId;
    }

    if (!$dara.isNull(request.targetUserIds)) {
      query["TargetUserIds"] = request.targetUserIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmartqAuthTransfer",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SmartqAuthTransferResponse>(await this.callApi(params, req, runtime), new $_model.SmartqAuthTransferResponse({}));
  }

  /**
   * Synchronize the question count permissions of a specified user to other users
   * 
   * @param request - SmartqAuthTransferRequest
   * @returns SmartqAuthTransferResponse
   */
  async smartqAuthTransfer(request: $_model.SmartqAuthTransferRequest): Promise<$_model.SmartqAuthTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smartqAuthTransferWithOptions(request, runtime);
  }

  /**
   * Batch Management of Smart Q\\\\\\&A Authorizations
   * 
   * @remarks
   * Used for batch management of smart Q&A authorizations. Repeatedly adding an authorization will be treated as a new addition; repeatedly deleting an authorization will be skipped by default and will not be recorded in the audit log.
   * 
   * @param request - SmartqAuthorizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmartqAuthorizeResponse
   */
  async smartqAuthorizeWithOptions(request: $_model.SmartqAuthorizeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SmartqAuthorizeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeIds)) {
      query["CubeIds"] = request.cubeIds;
    }

    if (!$dara.isNull(request.expireDay)) {
      query["ExpireDay"] = request.expireDay;
    }

    if (!$dara.isNull(request.llmCubeThemes)) {
      query["LlmCubeThemes"] = request.llmCubeThemes;
    }

    if (!$dara.isNull(request.llmCubes)) {
      query["LlmCubes"] = request.llmCubes;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmartqAuthorize",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SmartqAuthorizeResponse>(await this.callApi(params, req, runtime), new $_model.SmartqAuthorizeResponse({}));
  }

  /**
   * Batch Management of Smart Q\\\\\\&A Authorizations
   * 
   * @remarks
   * Used for batch management of smart Q&A authorizations. Repeatedly adding an authorization will be treated as a new addition; repeatedly deleting an authorization will be skipped by default and will not be recorded in the audit log.
   * 
   * @param request - SmartqAuthorizeRequest
   * @returns SmartqAuthorizeResponse
   */
  async smartqAuthorize(request: $_model.SmartqAuthorizeRequest): Promise<$_model.SmartqAuthorizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smartqAuthorizeWithOptions(request, runtime);
  }

  /**
   * Query Capability Open
   * 
   * @remarks
   * Special Note: When a user is authorized to call this API, it is assumed that the user has the permission to query the corresponding data by passing in the userId as that user.
   * 
   * @param request - SmartqQueryAbilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmartqQueryAbilityResponse
   */
  async smartqQueryAbilityWithOptions(request: $_model.SmartqQueryAbilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SmartqQueryAbilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.multipleCubeIds)) {
      query["MultipleCubeIds"] = request.multipleCubeIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userQuestion)) {
      query["UserQuestion"] = request.userQuestion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmartqQueryAbility",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SmartqQueryAbilityResponse>(await this.callApi(params, req, runtime), new $_model.SmartqQueryAbilityResponse({}));
  }

  /**
   * Query Capability Open
   * 
   * @remarks
   * Special Note: When a user is authorized to call this API, it is assumed that the user has the permission to query the corresponding data by passing in the userId as that user.
   * 
   * @param request - SmartqQueryAbilityRequest
   * @returns SmartqQueryAbilityResponse
   */
  async smartqQueryAbility(request: $_model.SmartqQueryAbilityRequest): Promise<$_model.SmartqQueryAbilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smartqQueryAbilityWithOptions(request, runtime);
  }

  /**
   * 更新自定义sql数据集
   * 
   * @param request - UpdateCubeBySqlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCubeBySqlResponse
   */
  async updateCubeBySqlWithOptions(request: $_model.UpdateCubeBySqlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCubeBySqlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.customSql)) {
      query["CustomSql"] = request.customSql;
    }

    if (!$dara.isNull(request.dsId)) {
      query["DsId"] = request.dsId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCubeBySql",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCubeBySqlResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCubeBySqlResponse({}));
  }

  /**
   * 更新自定义sql数据集
   * 
   * @param request - UpdateCubeBySqlRequest
   * @returns UpdateCubeBySqlResponse
   */
  async updateCubeBySql(request: $_model.UpdateCubeBySqlRequest): Promise<$_model.UpdateCubeBySqlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCubeBySqlWithOptions(request, runtime);
  }

  /**
   * Indicates whether the request is successful. Valid values:
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @remarks
   * The execution result of the interface. Valid values:
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @param request - UpdateDataLevelPermissionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLevelPermissionStatusResponse
   */
  async updateDataLevelPermissionStatusWithOptions(request: $_model.UpdateDataLevelPermissionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLevelPermissionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!$dara.isNull(request.isOpen)) {
      query["IsOpen"] = request.isOpen;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLevelPermissionStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLevelPermissionStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLevelPermissionStatusResponse({}));
  }

  /**
   * Indicates whether the request is successful. Valid values:
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @remarks
   * The execution result of the interface. Valid values:
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @param request - UpdateDataLevelPermissionStatusRequest
   * @returns UpdateDataLevelPermissionStatusResponse
   */
  async updateDataLevelPermissionStatus(request: $_model.UpdateDataLevelPermissionStatusRequest): Promise<$_model.UpdateDataLevelPermissionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLevelPermissionStatusWithOptions(request, runtime);
  }

  /**
   * Modify Data Source Configuration
   * 
   * @param request - UpdateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceResponse
   */
  async updateDataSourceWithOptions(request: $_model.UpdateDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.updateModel)) {
      query["UpdateModel"] = request.updateModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataSource",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataSourceResponse({}));
  }

  /**
   * Modify Data Source Configuration
   * 
   * @param request - UpdateDataSourceRequest
   * @returns UpdateDataSourceResponse
   */
  async updateDataSource(request: $_model.UpdateDataSourceRequest): Promise<$_model.UpdateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataSourceWithOptions(request, runtime);
  }

  /**
   * Change the embedding status of a report, turn on embedding, or turn off embedding.
   * 
   * @param request - UpdateEmbeddedStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEmbeddedStatusResponse
   */
  async updateEmbeddedStatusWithOptions(request: $_model.UpdateEmbeddedStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEmbeddedStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.thirdPartAuthFlag)) {
      query["ThirdPartAuthFlag"] = request.thirdPartAuthFlag;
    }

    if (!$dara.isNull(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEmbeddedStatus",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEmbeddedStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEmbeddedStatusResponse({}));
  }

  /**
   * Change the embedding status of a report, turn on embedding, or turn off embedding.
   * 
   * @param request - UpdateEmbeddedStatusRequest
   * @returns UpdateEmbeddedStatusResponse
   */
  async updateEmbeddedStatus(request: $_model.UpdateEmbeddedStatusRequest): Promise<$_model.UpdateEmbeddedStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEmbeddedStatusWithOptions(request, runtime);
  }

  /**
   * Update the ticket quantity on the specified ticket used for the exemption embedded report.
   * 
   * @param request - UpdateTicketNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTicketNumResponse
   */
  async updateTicketNumWithOptions(request: $_model.UpdateTicketNumRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTicketNumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    if (!$dara.isNull(request.ticketNum)) {
      query["TicketNum"] = request.ticketNum;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTicketNum",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTicketNumResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTicketNumResponse({}));
  }

  /**
   * Update the ticket quantity on the specified ticket used for the exemption embedded report.
   * 
   * @param request - UpdateTicketNumRequest
   * @returns UpdateTicketNumResponse
   */
  async updateTicketNum(request: $_model.UpdateTicketNumRequest): Promise<$_model.UpdateTicketNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTicketNumWithOptions(request, runtime);
  }

  /**
   * Updates the information of a specified member in an organization.
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adminUser)) {
      query["AdminUser"] = request.adminUser;
    }

    if (!$dara.isNull(request.authAdminUser)) {
      query["AuthAdminUser"] = request.authAdminUser;
    }

    if (!$dara.isNull(request.isDeleted)) {
      query["IsDeleted"] = request.isDeleted;
    }

    if (!$dara.isNull(request.nickName)) {
      query["NickName"] = request.nickName;
    }

    if (!$dara.isNull(request.roleIds)) {
      query["RoleIds"] = request.roleIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2022-01-01",
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
   * Updates the information of a specified member in an organization.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Updates information about a specified user group in an organization.
   * 
   * @param request - UpdateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroupWithOptions(request: $_model.UpdateUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userGroupDescription)) {
      query["UserGroupDescription"] = request.userGroupDescription;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserGroup",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserGroupResponse({}));
  }

  /**
   * Updates information about a specified user group in an organization.
   * 
   * @param request - UpdateUserGroupRequest
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroup(request: $_model.UpdateUserGroupRequest): Promise<$_model.UpdateUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  /**
   * Used for updating the metadata of organization member tags
   * 
   * @param request - UpdateUserTagMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserTagMetaResponse
   */
  async updateUserTagMetaWithOptions(request: $_model.UpdateUserTagMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserTagMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tagDescription)) {
      query["TagDescription"] = request.tagDescription;
    }

    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserTagMeta",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserTagMetaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserTagMetaResponse({}));
  }

  /**
   * Used for updating the metadata of organization member tags
   * 
   * @param request - UpdateUserTagMetaRequest
   * @returns UpdateUserTagMetaResponse
   */
  async updateUserTagMeta(request: $_model.UpdateUserTagMetaRequest): Promise<$_model.UpdateUserTagMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserTagMetaWithOptions(request, runtime);
  }

  /**
   * Update the tag value of an organization member.
   * 
   * @param request - UpdateUserTagValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserTagValueResponse
   */
  async updateUserTagValueWithOptions(request: $_model.UpdateUserTagValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserTagValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!$dara.isNull(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserTagValue",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserTagValueResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserTagValueResponse({}));
  }

  /**
   * Update the tag value of an organization member.
   * 
   * @param request - UpdateUserTagValueRequest
   * @returns UpdateUserTagValueResponse
   */
  async updateUserTagValue(request: $_model.UpdateUserTagValueRequest): Promise<$_model.UpdateUserTagValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserTagValueWithOptions(request, runtime);
  }

  /**
   * Modify the role of a specified member under the workspace, existing roles will be overwritten.
   * 
   * @param request - UpdateWorkspaceUserRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceUserRoleResponse
   */
  async updateWorkspaceUserRoleWithOptions(request: $_model.UpdateWorkspaceUserRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceUserRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.roleIds)) {
      query["RoleIds"] = request.roleIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspaceUserRole",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceUserRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceUserRoleResponse({}));
  }

  /**
   * Modify the role of a specified member under the workspace, existing roles will be overwritten.
   * 
   * @param request - UpdateWorkspaceUserRoleRequest
   * @returns UpdateWorkspaceUserRoleResponse
   */
  async updateWorkspaceUserRole(request: $_model.UpdateWorkspaceUserRoleRequest): Promise<$_model.UpdateWorkspaceUserRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkspaceUserRoleWithOptions(request, runtime);
  }

  /**
   * Batch update the role information of workspace members, existing roles will be overwritten
   * 
   * @param request - UpdateWorkspaceUsersRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceUsersRoleResponse
   */
  async updateWorkspaceUsersRoleWithOptions(request: $_model.UpdateWorkspaceUsersRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceUsersRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspaceUsersRole",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceUsersRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceUsersRoleResponse({}));
  }

  /**
   * Batch update the role information of workspace members, existing roles will be overwritten
   * 
   * @param request - UpdateWorkspaceUsersRoleRequest
   * @returns UpdateWorkspaceUsersRoleResponse
   */
  async updateWorkspaceUsersRole(request: $_model.UpdateWorkspaceUsersRoleRequest): Promise<$_model.UpdateWorkspaceUsersRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkspaceUsersRoleWithOptions(request, runtime);
  }

  /**
   * Make the user exit all user groups. This process is irreversible. Exercise caution when performing this operation.
   * 
   * @param request - WithdrawAllUserGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WithdrawAllUserGroupsResponse
   */
  async withdrawAllUserGroupsWithOptions(request: $_model.WithdrawAllUserGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WithdrawAllUserGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WithdrawAllUserGroups",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WithdrawAllUserGroupsResponse>(await this.callApi(params, req, runtime), new $_model.WithdrawAllUserGroupsResponse({}));
  }

  /**
   * Make the user exit all user groups. This process is irreversible. Exercise caution when performing this operation.
   * 
   * @param request - WithdrawAllUserGroupsRequest
   * @returns WithdrawAllUserGroupsResponse
   */
  async withdrawAllUserGroups(request: $_model.WithdrawAllUserGroupsRequest): Promise<$_model.WithdrawAllUserGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.withdrawAllUserGroupsWithOptions(request, runtime);
  }

}
