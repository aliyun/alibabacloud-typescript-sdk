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
    this._endpoint = this.getEndpoint("yundun-bastionhost", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * If an O\\&M engineer attempts to run a command specified in the Command Approval field on the Create Control Policy page, the administrator is notified to review the command in the Bastionhost console. The command can be run only after it is approved by the administrator.
   * 
   * @remarks
   * You can call this operation as a Bastionhost administrator to approve the request to run a command of an O\\&M engineer.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AcceptApproveCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptApproveCommandResponse
   */
  async acceptApproveCommandWithOptions(request: $_model.AcceptApproveCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptApproveCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptApproveCommand",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcceptApproveCommandResponse>(await this.callApi(params, req, runtime), new $_model.AcceptApproveCommandResponse({}));
  }

  /**
   * If an O\\&M engineer attempts to run a command specified in the Command Approval field on the Create Control Policy page, the administrator is notified to review the command in the Bastionhost console. The command can be run only after it is approved by the administrator.
   * 
   * @remarks
   * You can call this operation as a Bastionhost administrator to approve the request to run a command of an O\\&M engineer.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AcceptApproveCommandRequest
   * @returns AcceptApproveCommandResponse
   */
  async acceptApproveCommand(request: $_model.AcceptApproveCommandRequest): Promise<$_model.AcceptApproveCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptApproveCommandWithOptions(request, runtime);
  }

  /**
   * Approves an O\\\\\\\\\\\\&M application.
   * 
   * @remarks
   * You can call this operation as a Bastionhost administrator to approve an O\\&M application of an O\\&M engineer.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AcceptOperationTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptOperationTicketResponse
   */
  async acceptOperationTicketWithOptions(request: $_model.AcceptOperationTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptOperationTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.effectCount)) {
      query["EffectCount"] = request.effectCount;
    }

    if (!$dara.isNull(request.effectEndTime)) {
      query["EffectEndTime"] = request.effectEndTime;
    }

    if (!$dara.isNull(request.effectStartTime)) {
      query["EffectStartTime"] = request.effectStartTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.operationTicketId)) {
      query["OperationTicketId"] = request.operationTicketId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptOperationTicket",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcceptOperationTicketResponse>(await this.callApi(params, req, runtime), new $_model.AcceptOperationTicketResponse({}));
  }

  /**
   * Approves an O\\\\\\\\\\\\&M application.
   * 
   * @remarks
   * You can call this operation as a Bastionhost administrator to approve an O\\&M application of an O\\&M engineer.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AcceptOperationTicketRequest
   * @returns AcceptOperationTicketResponse
   */
  async acceptOperationTicket(request: $_model.AcceptOperationTicketRequest): Promise<$_model.AcceptOperationTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptOperationTicketWithOptions(request, runtime);
  }

  /**
   * Adds multiple databases to a specified asset group.
   * 
   * @param request - AddDatabasesToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDatabasesToGroupResponse
   */
  async addDatabasesToGroupWithOptions(request: $_model.AddDatabasesToGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDatabasesToGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseIds)) {
      query["DatabaseIds"] = request.databaseIds;
    }

    if (!$dara.isNull(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDatabasesToGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDatabasesToGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddDatabasesToGroupResponse({}));
  }

  /**
   * Adds multiple databases to a specified asset group.
   * 
   * @param request - AddDatabasesToGroupRequest
   * @returns AddDatabasesToGroupResponse
   */
  async addDatabasesToGroup(request: $_model.AddDatabasesToGroupRequest): Promise<$_model.AddDatabasesToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDatabasesToGroupWithOptions(request, runtime);
  }

  /**
   * Adds one or more hosts to the specified host group.
   * 
   * @remarks
   * You can call this operation to add one or more hosts to a host group. You can add multiple hosts to a host group to manage and grant permissions on the hosts in a centralized manner.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
   * 
   * @param request - AddHostsToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddHostsToGroupResponse
   */
  async addHostsToGroupWithOptions(request: $_model.AddHostsToGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddHostsToGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!$dara.isNull(request.hostIds)) {
      query["HostIds"] = request.hostIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddHostsToGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddHostsToGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddHostsToGroupResponse({}));
  }

  /**
   * Adds one or more hosts to the specified host group.
   * 
   * @remarks
   * You can call this operation to add one or more hosts to a host group. You can add multiple hosts to a host group to manage and grant permissions on the hosts in a centralized manner.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
   * 
   * @param request - AddHostsToGroupRequest
   * @returns AddHostsToGroupResponse
   */
  async addHostsToGroup(request: $_model.AddHostsToGroupRequest): Promise<$_model.AddHostsToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addHostsToGroupWithOptions(request, runtime);
  }

  /**
   * 添加RD成员账号
   * 
   * @param request - AddInstanceRdMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddInstanceRdMemberResponse
   */
  async addInstanceRdMemberWithOptions(request: $_model.AddInstanceRdMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddInstanceRdMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddInstanceRdMember",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddInstanceRdMemberResponse>(await this.callApi(params, req, runtime), new $_model.AddInstanceRdMemberResponse({}));
  }

  /**
   * 添加RD成员账号
   * 
   * @param request - AddInstanceRdMemberRequest
   * @returns AddInstanceRdMemberResponse
   */
  async addInstanceRdMember(request: $_model.AddInstanceRdMemberRequest): Promise<$_model.AddInstanceRdMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addInstanceRdMemberWithOptions(request, runtime);
  }

  /**
   * Add one or more users to a user group.
   * 
   * @remarks
   * #
   * You can call this operation to add one or more users to a user group. After you call the [CreateUserGroup](https://help.aliyun.com/document_detail/204596.html) operation to create a user group, you can call the AddUsersToGroup operation to add multiple users to the user group. Then, you can manage and grant permissions to the users at a time.
   * # Limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddUsersToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUsersToGroupResponse
   */
  async addUsersToGroupWithOptions(request: $_model.AddUsersToGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUsersToGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUsersToGroup",
      version: "2019-12-09",
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
   * Add one or more users to a user group.
   * 
   * @remarks
   * #
   * You can call this operation to add one or more users to a user group. After you call the [CreateUserGroup](https://help.aliyun.com/document_detail/204596.html) operation to create a user group, you can call the AddUsersToGroup operation to add multiple users to the user group. Then, you can manage and grant permissions to the users at a time.
   * # Limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddUsersToGroupRequest
   * @returns AddUsersToGroupResponse
   */
  async addUsersToGroup(request: $_model.AddUsersToGroupRequest): Promise<$_model.AddUsersToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUsersToGroupWithOptions(request, runtime);
  }

  /**
   * Authorizes a user to manage databases and database accounts.
   * 
   * @param request - AttachDatabaseAccountsToUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachDatabaseAccountsToUserResponse
   */
  async attachDatabaseAccountsToUserWithOptions(request: $_model.AttachDatabaseAccountsToUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachDatabaseAccountsToUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachDatabaseAccountsToUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachDatabaseAccountsToUserResponse>(await this.callApi(params, req, runtime), new $_model.AttachDatabaseAccountsToUserResponse({}));
  }

  /**
   * Authorizes a user to manage databases and database accounts.
   * 
   * @param request - AttachDatabaseAccountsToUserRequest
   * @returns AttachDatabaseAccountsToUserResponse
   */
  async attachDatabaseAccountsToUser(request: $_model.AttachDatabaseAccountsToUserRequest): Promise<$_model.AttachDatabaseAccountsToUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachDatabaseAccountsToUserWithOptions(request, runtime);
  }

  /**
   * Authorizes a user group to manage databases and database accounts.
   * 
   * @param request - AttachDatabaseAccountsToUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachDatabaseAccountsToUserGroupResponse
   */
  async attachDatabaseAccountsToUserGroupWithOptions(request: $_model.AttachDatabaseAccountsToUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachDatabaseAccountsToUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachDatabaseAccountsToUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachDatabaseAccountsToUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.AttachDatabaseAccountsToUserGroupResponse({}));
  }

  /**
   * Authorizes a user group to manage databases and database accounts.
   * 
   * @param request - AttachDatabaseAccountsToUserGroupRequest
   * @returns AttachDatabaseAccountsToUserGroupResponse
   */
  async attachDatabaseAccountsToUserGroup(request: $_model.AttachDatabaseAccountsToUserGroupRequest): Promise<$_model.AttachDatabaseAccountsToUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachDatabaseAccountsToUserGroupWithOptions(request, runtime);
  }

  /**
   * Associates host accounts with a shared key.
   * 
   * @param request - AttachHostAccountsToHostShareKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachHostAccountsToHostShareKeyResponse
   */
  async attachHostAccountsToHostShareKeyWithOptions(request: $_model.AttachHostAccountsToHostShareKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachHostAccountsToHostShareKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAccountIds)) {
      query["HostAccountIds"] = request.hostAccountIds;
    }

    if (!$dara.isNull(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachHostAccountsToHostShareKey",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachHostAccountsToHostShareKeyResponse>(await this.callApi(params, req, runtime), new $_model.AttachHostAccountsToHostShareKeyResponse({}));
  }

  /**
   * Associates host accounts with a shared key.
   * 
   * @param request - AttachHostAccountsToHostShareKeyRequest
   * @returns AttachHostAccountsToHostShareKeyResponse
   */
  async attachHostAccountsToHostShareKey(request: $_model.AttachHostAccountsToHostShareKeyRequest): Promise<$_model.AttachHostAccountsToHostShareKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachHostAccountsToHostShareKeyWithOptions(request, runtime);
  }

  /**
   * Authorizes a user to manage the hosts and host accounts.
   * 
   * @param request - AttachHostAccountsToUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachHostAccountsToUserResponse
   */
  async attachHostAccountsToUserWithOptions(request: $_model.AttachHostAccountsToUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachHostAccountsToUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachHostAccountsToUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachHostAccountsToUserResponse>(await this.callApi(params, req, runtime), new $_model.AttachHostAccountsToUserResponse({}));
  }

  /**
   * Authorizes a user to manage the hosts and host accounts.
   * 
   * @param request - AttachHostAccountsToUserRequest
   * @returns AttachHostAccountsToUserResponse
   */
  async attachHostAccountsToUser(request: $_model.AttachHostAccountsToUserRequest): Promise<$_model.AttachHostAccountsToUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachHostAccountsToUserWithOptions(request, runtime);
  }

  /**
   * Authorizes a user group to manage one or more hosts and host accounts.
   * 
   * @remarks
   * After you authorize a user group to manage specific hosts and host accounts, all the users in the user group have access to the authorized hosts and host accounts.
   * 
   * @param request - AttachHostAccountsToUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachHostAccountsToUserGroupResponse
   */
  async attachHostAccountsToUserGroupWithOptions(request: $_model.AttachHostAccountsToUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachHostAccountsToUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachHostAccountsToUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachHostAccountsToUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.AttachHostAccountsToUserGroupResponse({}));
  }

  /**
   * Authorizes a user group to manage one or more hosts and host accounts.
   * 
   * @remarks
   * After you authorize a user group to manage specific hosts and host accounts, all the users in the user group have access to the authorized hosts and host accounts.
   * 
   * @param request - AttachHostAccountsToUserGroupRequest
   * @returns AttachHostAccountsToUserGroupResponse
   */
  async attachHostAccountsToUserGroup(request: $_model.AttachHostAccountsToUserGroupRequest): Promise<$_model.AttachHostAccountsToUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachHostAccountsToUserGroupWithOptions(request, runtime);
  }

  /**
   * Authorizes a user to manage one or more host groups and host accounts.
   * 
   * @param request - AttachHostGroupAccountsToUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachHostGroupAccountsToUserResponse
   */
  async attachHostGroupAccountsToUserWithOptions(request: $_model.AttachHostGroupAccountsToUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachHostGroupAccountsToUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachHostGroupAccountsToUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachHostGroupAccountsToUserResponse>(await this.callApi(params, req, runtime), new $_model.AttachHostGroupAccountsToUserResponse({}));
  }

  /**
   * Authorizes a user to manage one or more host groups and host accounts.
   * 
   * @param request - AttachHostGroupAccountsToUserRequest
   * @returns AttachHostGroupAccountsToUserResponse
   */
  async attachHostGroupAccountsToUser(request: $_model.AttachHostGroupAccountsToUserRequest): Promise<$_model.AttachHostGroupAccountsToUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachHostGroupAccountsToUserWithOptions(request, runtime);
  }

  /**
   * Authorizes a user to manage one or more host groups and host accounts.
   * 
   * @param request - AttachHostGroupAccountsToUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachHostGroupAccountsToUserGroupResponse
   */
  async attachHostGroupAccountsToUserGroupWithOptions(request: $_model.AttachHostGroupAccountsToUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachHostGroupAccountsToUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachHostGroupAccountsToUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachHostGroupAccountsToUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.AttachHostGroupAccountsToUserGroupResponse({}));
  }

  /**
   * Authorizes a user to manage one or more host groups and host accounts.
   * 
   * @param request - AttachHostGroupAccountsToUserGroupRequest
   * @returns AttachHostGroupAccountsToUserGroupResponse
   */
  async attachHostGroupAccountsToUserGroup(request: $_model.AttachHostGroupAccountsToUserGroupRequest): Promise<$_model.AttachHostGroupAccountsToUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachHostGroupAccountsToUserGroupWithOptions(request, runtime);
  }

  /**
   * Configures security groups for a bastion host.
   * 
   * @param request - ConfigInstanceSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigInstanceSecurityGroupsResponse
   */
  async configInstanceSecurityGroupsWithOptions(request: $_model.ConfigInstanceSecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigInstanceSecurityGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizedSecurityGroups)) {
      query["AuthorizedSecurityGroups"] = request.authorizedSecurityGroups;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigInstanceSecurityGroups",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigInstanceSecurityGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ConfigInstanceSecurityGroupsResponse({}));
  }

  /**
   * Configures security groups for a bastion host.
   * 
   * @param request - ConfigInstanceSecurityGroupsRequest
   * @returns ConfigInstanceSecurityGroupsResponse
   */
  async configInstanceSecurityGroups(request: $_model.ConfigInstanceSecurityGroupsRequest): Promise<$_model.ConfigInstanceSecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configInstanceSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * Configures a whitelist of public IP addresses for a bastion host.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation to configure a whitelist of public IP addresses for a bastion host. By default, a bastion host is accessible from all public IP addresses. If you want to allow the requests from specific public IP addresses, you can call this operation to add trusted IP addresses to the whitelist of the bastion host.  
   * ## Limits
   * You can call this operation up to 30 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ConfigInstanceWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigInstanceWhiteListResponse
   */
  async configInstanceWhiteListWithOptions(request: $_model.ConfigInstanceWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigInstanceWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.whiteList)) {
      query["WhiteList"] = request.whiteList;
    }

    if (!$dara.isNull(request.whiteListPolicies)) {
      query["WhiteListPolicies"] = request.whiteListPolicies;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigInstanceWhiteList",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigInstanceWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.ConfigInstanceWhiteListResponse({}));
  }

  /**
   * Configures a whitelist of public IP addresses for a bastion host.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation to configure a whitelist of public IP addresses for a bastion host. By default, a bastion host is accessible from all public IP addresses. If you want to allow the requests from specific public IP addresses, you can call this operation to add trusted IP addresses to the whitelist of the bastion host.  
   * ## Limits
   * You can call this operation up to 30 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ConfigInstanceWhiteListRequest
   * @returns ConfigInstanceWhiteListResponse
   */
  async configInstanceWhiteList(request: $_model.ConfigInstanceWhiteListRequest): Promise<$_model.ConfigInstanceWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configInstanceWhiteListWithOptions(request, runtime);
  }

  /**
   * Imports an ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, PolarDB for MySQL cluster, PolarDB for PostgreSQL cluster, PolarDB for PostgreSQL (Compatible with Oracle) cluster, self-managed MySQL database, self-managed SQL Server database, self-managed PostgreSQL database, or self-managed Oracle database to a bastion host.
   * 
   * @param request - CreateDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatabaseResponse
   */
  async createDatabaseWithOptions(request: $_model.CreateDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activeAddressType)) {
      query["ActiveAddressType"] = request.activeAddressType;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.databasePort)) {
      query["DatabasePort"] = request.databasePort;
    }

    if (!$dara.isNull(request.databasePrivateAddress)) {
      query["DatabasePrivateAddress"] = request.databasePrivateAddress;
    }

    if (!$dara.isNull(request.databasePublicAddress)) {
      query["DatabasePublicAddress"] = request.databasePublicAddress;
    }

    if (!$dara.isNull(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceMemberId)) {
      query["InstanceMemberId"] = request.instanceMemberId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.polarDBEndpointType)) {
      query["PolarDBEndpointType"] = request.polarDBEndpointType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!$dara.isNull(request.sourceInstanceRegionId)) {
      query["SourceInstanceRegionId"] = request.sourceInstanceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatabase",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatabaseResponse({}));
  }

  /**
   * Imports an ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, PolarDB for MySQL cluster, PolarDB for PostgreSQL cluster, PolarDB for PostgreSQL (Compatible with Oracle) cluster, self-managed MySQL database, self-managed SQL Server database, self-managed PostgreSQL database, or self-managed Oracle database to a bastion host.
   * 
   * @param request - CreateDatabaseRequest
   * @returns CreateDatabaseResponse
   */
  async createDatabase(request: $_model.CreateDatabaseRequest): Promise<$_model.CreateDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatabaseWithOptions(request, runtime);
  }

  /**
   * After a database is created, you can create a database account for the database. After the account is created, O\\&M engineers can use the account to log on to and perform O\\&M operations on the database.
   * 
   * @param request - CreateDatabaseAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatabaseAccountResponse
   */
  async createDatabaseAccountWithOptions(request: $_model.CreateDatabaseAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!$dara.isNull(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!$dara.isNull(request.databaseSchema)) {
      query["DatabaseSchema"] = request.databaseSchema;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.loginAttribute)) {
      query["LoginAttribute"] = request.loginAttribute;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatabaseAccount",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatabaseAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatabaseAccountResponse({}));
  }

  /**
   * After a database is created, you can create a database account for the database. After the account is created, O\\&M engineers can use the account to log on to and perform O\\&M operations on the database.
   * 
   * @param request - CreateDatabaseAccountRequest
   * @returns CreateDatabaseAccountResponse
   */
  async createDatabaseAccount(request: $_model.CreateDatabaseAccountRequest): Promise<$_model.CreateDatabaseAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatabaseAccountWithOptions(request, runtime);
  }

  /**
   * 创建导出配置的任务
   * 
   * @param request - CreateExportConfigJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExportConfigJobResponse
   */
  async createExportConfigJobWithOptions(request: $_model.CreateExportConfigJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExportConfigJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExportConfigJob",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExportConfigJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateExportConfigJobResponse({}));
  }

  /**
   * 创建导出配置的任务
   * 
   * @param request - CreateExportConfigJobRequest
   * @returns CreateExportConfigJobResponse
   */
  async createExportConfigJob(request: $_model.CreateExportConfigJobRequest): Promise<$_model.CreateExportConfigJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExportConfigJobWithOptions(request, runtime);
  }

  /**
   * Bastionhost allows you to perform O\\&M operations on hosts from different sources, such as Alibaba Cloud Elastic Compute Service (ECS) instances, servers in on-premises data centers, and servers on other cloud platforms. Before you perform O\\&M operations on hosts by using a bastion host, you must import the hosts to the bastion host. You can call this operation to import a host to a bastion host.
   * 
   * @param request - CreateHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHostResponse
   */
  async createHostWithOptions(request: $_model.CreateHostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activeAddressType)) {
      query["ActiveAddressType"] = request.activeAddressType;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.hostPrivateAddress)) {
      query["HostPrivateAddress"] = request.hostPrivateAddress;
    }

    if (!$dara.isNull(request.hostPublicAddress)) {
      query["HostPublicAddress"] = request.hostPublicAddress;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceMemberId)) {
      query["InstanceMemberId"] = request.instanceMemberId;
    }

    if (!$dara.isNull(request.instanceRegionId)) {
      query["InstanceRegionId"] = request.instanceRegionId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHost",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHostResponse>(await this.callApi(params, req, runtime), new $_model.CreateHostResponse({}));
  }

  /**
   * Bastionhost allows you to perform O\\&M operations on hosts from different sources, such as Alibaba Cloud Elastic Compute Service (ECS) instances, servers in on-premises data centers, and servers on other cloud platforms. Before you perform O\\&M operations on hosts by using a bastion host, you must import the hosts to the bastion host. You can call this operation to import a host to a bastion host.
   * 
   * @param request - CreateHostRequest
   * @returns CreateHostResponse
   */
  async createHost(request: $_model.CreateHostRequest): Promise<$_model.CreateHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHostWithOptions(request, runtime);
  }

  /**
   * After you import a host to a bastion host, you must add an account of the host to the bastion host. This way, O\\&M engineers can use the account to log on to and perform O\\&M operations on the host by using the bastion host.
   * 
   * @param request - CreateHostAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHostAccountResponse
   */
  async createHostAccountWithOptions(request: $_model.CreateHostAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHostAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!$dara.isNull(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passPhrase)) {
      query["PassPhrase"] = request.passPhrase;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!$dara.isNull(request.privilegeType)) {
      query["PrivilegeType"] = request.privilegeType;
    }

    if (!$dara.isNull(request.protocolName)) {
      query["ProtocolName"] = request.protocolName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rotationMode)) {
      query["RotationMode"] = request.rotationMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHostAccount",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHostAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateHostAccountResponse({}));
  }

  /**
   * After you import a host to a bastion host, you must add an account of the host to the bastion host. This way, O\\&M engineers can use the account to log on to and perform O\\&M operations on the host by using the bastion host.
   * 
   * @param request - CreateHostAccountRequest
   * @returns CreateHostAccountResponse
   */
  async createHostAccount(request: $_model.CreateHostAccountRequest): Promise<$_model.CreateHostAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHostAccountWithOptions(request, runtime);
  }

  /**
   * You can create asset groups based on your business requirements and add assets of the same type to an asset group. This allows you to classify assets and manage multiple assets at a time.
   * 
   * @param request - CreateHostGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHostGroupResponse
   */
  async createHostGroupWithOptions(request: $_model.CreateHostGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHostGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.hostGroupName)) {
      query["HostGroupName"] = request.hostGroupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHostGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHostGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateHostGroupResponse({}));
  }

  /**
   * You can create asset groups based on your business requirements and add assets of the same type to an asset group. This allows you to classify assets and manage multiple assets at a time.
   * 
   * @param request - CreateHostGroupRequest
   * @returns CreateHostGroupResponse
   */
  async createHostGroup(request: $_model.CreateHostGroupRequest): Promise<$_model.CreateHostGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHostGroupWithOptions(request, runtime);
  }

  /**
   * Bastionhost provides the shared key feature. This feature allows you to manage the private key that is used to log on to a host in a bastion host. This way, you can associate the private key with multiple accounts of the host to make host account management more efficient.
   * 
   * @param request - CreateHostShareKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHostShareKeyResponse
   */
  async createHostShareKeyWithOptions(request: $_model.CreateHostShareKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHostShareKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostShareKeyName)) {
      query["HostShareKeyName"] = request.hostShareKeyName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passPhrase)) {
      query["PassPhrase"] = request.passPhrase;
    }

    if (!$dara.isNull(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHostShareKey",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHostShareKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateHostShareKeyResponse({}));
  }

  /**
   * Bastionhost provides the shared key feature. This feature allows you to manage the private key that is used to log on to a host in a bastion host. This way, you can associate the private key with multiple accounts of the host to make host account management more efficient.
   * 
   * @param request - CreateHostShareKeyRequest
   * @returns CreateHostShareKeyResponse
   */
  async createHostShareKey(request: $_model.CreateHostShareKeyRequest): Promise<$_model.CreateHostShareKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHostShareKeyWithOptions(request, runtime);
  }

  /**
   * Creates a network domain.
   * 
   * @param request - CreateNetworkDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkDomainResponse
   */
  async createNetworkDomainWithOptions(request: $_model.CreateNetworkDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainName)) {
      query["NetworkDomainName"] = request.networkDomainName;
    }

    if (!$dara.isNull(request.networkDomainType)) {
      query["NetworkDomainType"] = request.networkDomainType;
    }

    if (!$dara.isNull(request.proxies)) {
      query["Proxies"] = request.proxies;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkDomain",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkDomainResponse({}));
  }

  /**
   * Creates a network domain.
   * 
   * @param request - CreateNetworkDomainRequest
   * @returns CreateNetworkDomainResponse
   */
  async createNetworkDomain(request: $_model.CreateNetworkDomainRequest): Promise<$_model.CreateNetworkDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkDomainWithOptions(request, runtime);
  }

  /**
   * 创建运维审批工单
   * 
   * @param request - CreateOperationTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOperationTicketResponse
   */
  async createOperationTicketWithOptions(request: $_model.CreateOperationTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOperationTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.approveComment)) {
      query["ApproveComment"] = request.approveComment;
    }

    if (!$dara.isNull(request.assetAccountName)) {
      query["AssetAccountName"] = request.assetAccountName;
    }

    if (!$dara.isNull(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.effectEndTime)) {
      query["EffectEndTime"] = request.effectEndTime;
    }

    if (!$dara.isNull(request.effectStartTime)) {
      query["EffectStartTime"] = request.effectStartTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isOneTimeEffect)) {
      query["IsOneTimeEffect"] = request.isOneTimeEffect;
    }

    if (!$dara.isNull(request.protocolName)) {
      query["ProtocolName"] = request.protocolName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOperationTicket",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOperationTicketResponse>(await this.callApi(params, req, runtime), new $_model.CreateOperationTicketResponse({}));
  }

  /**
   * 创建运维审批工单
   * 
   * @param request - CreateOperationTicketRequest
   * @returns CreateOperationTicketResponse
   */
  async createOperationTicket(request: $_model.CreateOperationTicketRequest): Promise<$_model.CreateOperationTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOperationTicketWithOptions(request, runtime);
  }

  /**
   * Configures a command control, command approval, protocol control, or access control policy to manage O\\&M operations. This effectively prevents users from performing high-risk operations or accidental operations to ensure O\\&M security.
   * 
   * @param request - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(request: $_model.CreatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2019-12-09",
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
   * Configures a command control, command approval, protocol control, or access control policy to manage O\\&M operations. This effectively prevents users from performing high-risk operations or accidental operations to ensure O\\&M security.
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: $_model.CreatePolicyRequest): Promise<$_model.CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * You can create authorization rules to authorize multiple users to manage assets. You can also specify a validity period for an authorization rule. This way, you can manage users and assets in a more efficient manner and limit the time periods during which users can access assets.
   * 
   * @param request - CreateRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRuleResponse
   */
  async createRuleWithOptions(request: $_model.CreateRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!$dara.isNull(request.effectiveEndTime)) {
      query["EffectiveEndTime"] = request.effectiveEndTime;
    }

    if (!$dara.isNull(request.effectiveStartTime)) {
      query["EffectiveStartTime"] = request.effectiveStartTime;
    }

    if (!$dara.isNull(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!$dara.isNull(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
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
      action: "CreateRule",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRuleResponse({}));
  }

  /**
   * You can create authorization rules to authorize multiple users to manage assets. You can also specify a validity period for an authorization rule. This way, you can manage users and assets in a more efficient manner and limit the time periods during which users can access assets.
   * 
   * @param request - CreateRuleRequest
   * @returns CreateRuleResponse
   */
  async createRule(request: $_model.CreateRuleRequest): Promise<$_model.CreateRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  /**
   * Adds a user to a bastion host.
   * 
   * @remarks
   * You can call the CreateUser operation to add local users, Resource Access Management (RAM) users, Active Directory (AD)-authenticated users, or Lightweight Directory Access Protocol (LDAP)-authenticated users to a bastion host. After a Bastionhost administrator adds a user to a bastion host, O\\&M engineers can log on to the bastion host as the user to perform O\\&M operations on the hosts that the user is authorized to manage.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: $_model.CreateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.effectiveEndTime)) {
      query["EffectiveEndTime"] = request.effectiveEndTime;
    }

    if (!$dara.isNull(request.effectiveStartTime)) {
      query["EffectiveStartTime"] = request.effectiveStartTime;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.languageStatus)) {
      query["LanguageStatus"] = request.languageStatus;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.mobileCountryCode)) {
      query["MobileCountryCode"] = request.mobileCountryCode;
    }

    if (!$dara.isNull(request.needResetPassword)) {
      query["NeedResetPassword"] = request.needResetPassword;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceUserId)) {
      query["SourceUserId"] = request.sourceUserId;
    }

    if (!$dara.isNull(request.twoFactorMethods)) {
      query["TwoFactorMethods"] = request.twoFactorMethods;
    }

    if (!$dara.isNull(request.twoFactorStatus)) {
      query["TwoFactorStatus"] = request.twoFactorStatus;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2019-12-09",
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
   * Adds a user to a bastion host.
   * 
   * @remarks
   * You can call the CreateUser operation to add local users, Resource Access Management (RAM) users, Active Directory (AD)-authenticated users, or Lightweight Directory Access Protocol (LDAP)-authenticated users to a bastion host. After a Bastionhost administrator adds a user to a bastion host, O\\&M engineers can log on to the bastion host as the user to perform O\\&M operations on the hosts that the user is authorized to manage.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * Creates a user group for the specified bastion host.
   * 
   * @remarks
   * You can call this operation to create a user group for a bastion host as an administrator. Then, you can call the [AddUsersToGroup](https://help.aliyun.com/document_detail/204600.html) operation to add users to the user group at a time. After you add the users to the user group, you can authorize and manage the users in a centralized manner.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserGroupResponse
   */
  async createUserGroupWithOptions(request: $_model.CreateUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserGroup",
      version: "2019-12-09",
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
   * Creates a user group for the specified bastion host.
   * 
   * @remarks
   * You can call this operation to create a user group for a bastion host as an administrator. Then, you can call the [AddUsersToGroup](https://help.aliyun.com/document_detail/204600.html) operation to add users to the user group at a time. After you add the users to the user group, you can authorize and manage the users in a centralized manner.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateUserGroupRequest
   * @returns CreateUserGroupResponse
   */
  async createUserGroup(request: $_model.CreateUserGroupRequest): Promise<$_model.CreateUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  /**
   * Creates a public key for a bastion host user and hosts the public key in the bastion host. This way, O\\&M engineers can use the private key that corresponds to the public key to log on to the bastion host from an O\\&M client.
   * 
   * @remarks
   * You can call the CreateUserPublicKey operation to create a public key for the specified user of a bastion host.
   * 
   * @param request - CreateUserPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserPublicKeyResponse
   */
  async createUserPublicKeyWithOptions(request: $_model.CreateUserPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.publicKey)) {
      query["PublicKey"] = request.publicKey;
    }

    if (!$dara.isNull(request.publicKeyName)) {
      query["PublicKeyName"] = request.publicKeyName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserPublicKey",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserPublicKeyResponse({}));
  }

  /**
   * Creates a public key for a bastion host user and hosts the public key in the bastion host. This way, O\\&M engineers can use the private key that corresponds to the public key to log on to the bastion host from an O\\&M client.
   * 
   * @remarks
   * You can call the CreateUserPublicKey operation to create a public key for the specified user of a bastion host.
   * 
   * @param request - CreateUserPublicKeyRequest
   * @returns CreateUserPublicKeyResponse
   */
  async createUserPublicKey(request: $_model.CreateUserPublicKeyRequest): Promise<$_model.CreateUserPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserPublicKeyWithOptions(request, runtime);
  }

  /**
   * Deletes a database.
   * 
   * @param request - DeleteDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatabaseResponse
   */
  async deleteDatabaseWithOptions(request: $_model.DeleteDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatabase",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatabaseResponse({}));
  }

  /**
   * Deletes a database.
   * 
   * @param request - DeleteDatabaseRequest
   * @returns DeleteDatabaseResponse
   */
  async deleteDatabase(request: $_model.DeleteDatabaseRequest): Promise<$_model.DeleteDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  /**
   * Deletes a database account.
   * 
   * @param request - DeleteDatabaseAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatabaseAccountResponse
   */
  async deleteDatabaseAccountWithOptions(request: $_model.DeleteDatabaseAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatabaseAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseAccountId)) {
      query["DatabaseAccountId"] = request.databaseAccountId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatabaseAccount",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatabaseAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatabaseAccountResponse({}));
  }

  /**
   * Deletes a database account.
   * 
   * @param request - DeleteDatabaseAccountRequest
   * @returns DeleteDatabaseAccountResponse
   */
  async deleteDatabaseAccount(request: $_model.DeleteDatabaseAccountRequest): Promise<$_model.DeleteDatabaseAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatabaseAccountWithOptions(request, runtime);
  }

  /**
   * Deletes the specified host.
   * 
   * @param request - DeleteHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHostResponse
   */
  async deleteHostWithOptions(request: $_model.DeleteHostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHost",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHostResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHostResponse({}));
  }

  /**
   * Deletes the specified host.
   * 
   * @param request - DeleteHostRequest
   * @returns DeleteHostResponse
   */
  async deleteHost(request: $_model.DeleteHostRequest): Promise<$_model.DeleteHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHostWithOptions(request, runtime);
  }

  /**
   * Removes a host account.
   * 
   * @remarks
   * ## Usage notes
   * This interface is used to delete individual host accounts. If a host account is no longer in use, you can invoke this interface to delete the host account for that host that has been configured on the bastion.
   * >  After you remove the host account, you must enter the username and password of the host when you log on to the host in Bastionhost.  
   * ## QPS Limit
   * The single-user QPS limit of this interface is 10 times/second. If the limit is exceeded, the API call will be stream-limited, which may affect your business, please call reasonably.
   * 
   * @param request - DeleteHostAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHostAccountResponse
   */
  async deleteHostAccountWithOptions(request: $_model.DeleteHostAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHostAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAccountId)) {
      query["HostAccountId"] = request.hostAccountId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHostAccount",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHostAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHostAccountResponse({}));
  }

  /**
   * Removes a host account.
   * 
   * @remarks
   * ## Usage notes
   * This interface is used to delete individual host accounts. If a host account is no longer in use, you can invoke this interface to delete the host account for that host that has been configured on the bastion.
   * >  After you remove the host account, you must enter the username and password of the host when you log on to the host in Bastionhost.  
   * ## QPS Limit
   * The single-user QPS limit of this interface is 10 times/second. If the limit is exceeded, the API call will be stream-limited, which may affect your business, please call reasonably.
   * 
   * @param request - DeleteHostAccountRequest
   * @returns DeleteHostAccountResponse
   */
  async deleteHostAccount(request: $_model.DeleteHostAccountRequest): Promise<$_model.DeleteHostAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHostAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a host group.
   * 
   * @remarks
   * You can call this operation to delete a single host group. If you no longer need to perform O\\&M operations on all hosts in a host group, you can call this operation to delete the host group.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteHostGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHostGroupResponse
   */
  async deleteHostGroupWithOptions(request: $_model.DeleteHostGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHostGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHostGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHostGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHostGroupResponse({}));
  }

  /**
   * Deletes a host group.
   * 
   * @remarks
   * You can call this operation to delete a single host group. If you no longer need to perform O\\&M operations on all hosts in a host group, you can call this operation to delete the host group.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteHostGroupRequest
   * @returns DeleteHostGroupResponse
   */
  async deleteHostGroup(request: $_model.DeleteHostGroupRequest): Promise<$_model.DeleteHostGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHostGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a shared key.
   * 
   * @param request - DeleteHostShareKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHostShareKeyResponse
   */
  async deleteHostShareKeyWithOptions(request: $_model.DeleteHostShareKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHostShareKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHostShareKey",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHostShareKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHostShareKeyResponse({}));
  }

  /**
   * Deletes a shared key.
   * 
   * @param request - DeleteHostShareKeyRequest
   * @returns DeleteHostShareKeyResponse
   */
  async deleteHostShareKey(request: $_model.DeleteHostShareKeyRequest): Promise<$_model.DeleteHostShareKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHostShareKeyWithOptions(request, runtime);
  }

  /**
   * Deletes a network domain.
   * 
   * @param request - DeleteNetworkDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkDomainResponse
   */
  async deleteNetworkDomainWithOptions(request: $_model.DeleteNetworkDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkDomain",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkDomainResponse({}));
  }

  /**
   * Deletes a network domain.
   * 
   * @param request - DeleteNetworkDomainRequest
   * @returns DeleteNetworkDomainResponse
   */
  async deleteNetworkDomain(request: $_model.DeleteNetworkDomainRequest): Promise<$_model.DeleteNetworkDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkDomainWithOptions(request, runtime);
  }

  /**
   * Deletes a control policy.
   * 
   * @param request - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: $_model.DeletePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2019-12-09",
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
   * Deletes a control policy.
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: $_model.DeletePolicyRequest): Promise<$_model.DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes an authorization rule.
   * 
   * @param request - DeleteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRuleResponse
   */
  async deleteRuleWithOptions(request: $_model.DeleteRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRule",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRuleResponse({}));
  }

  /**
   * Deletes an authorization rule.
   * 
   * @param request - DeleteRuleRequest
   * @returns DeleteRuleResponse
   */
  async deleteRule(request: $_model.DeleteRuleRequest): Promise<$_model.DeleteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a bastion host user.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2019-12-09",
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
   * Deletes a bastion host user.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * Deletes a specified user group from a specified bastion host.
   * 
   * @param request - DeleteUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroupWithOptions(request: $_model.DeleteUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserGroup",
      version: "2019-12-09",
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
   * Deletes a specified user group from a specified bastion host.
   * 
   * @param request - DeleteUserGroupRequest
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroup(request: $_model.DeleteUserGroupRequest): Promise<$_model.DeleteUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a public key from the specified user.
   * 
   * @remarks
   * You can call the DeleteUserPublicKey operation to delete a public key from the specified user of a bastion host.
   * 
   * @param request - DeleteUserPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserPublicKeyResponse
   */
  async deleteUserPublicKeyWithOptions(request: $_model.DeleteUserPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.publicKeyId)) {
      query["PublicKeyId"] = request.publicKeyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserPublicKey",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserPublicKeyResponse({}));
  }

  /**
   * Deletes a public key from the specified user.
   * 
   * @remarks
   * You can call the DeleteUserPublicKey operation to delete a public key from the specified user of a bastion host.
   * 
   * @param request - DeleteUserPublicKeyRequest
   * @returns DeleteUserPublicKeyResponse
   */
  async deleteUserPublicKey(request: $_model.DeleteUserPublicKeyRequest): Promise<$_model.DeleteUserPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserPublicKeyWithOptions(request, runtime);
  }

  /**
   * Queries the attribute information about the specified bastion host. The information includes the ID and remarks of the bastion host.
   * 
   * @remarks
   * ***
   * 
   * @param request - DescribeInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAttributeResponse
   */
  async describeInstanceAttributeWithOptions(request: $_model.DescribeInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAttribute",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAttributeResponse({}));
  }

  /**
   * Queries the attribute information about the specified bastion host. The information includes the ID and remarks of the bastion host.
   * 
   * @remarks
   * ***
   * 
   * @param request - DescribeInstanceAttributeRequest
   * @returns DescribeInstanceAttributeResponse
   */
  async describeInstanceAttribute(request: $_model.DescribeInstanceAttributeRequest): Promise<$_model.DescribeInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 堡垒机实例列表
   * 
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesResponse({}));
  }

  /**
   * 堡垒机实例列表
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * Queries available regions where you can create bastion hosts.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries available regions where you can create bastion hosts.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Revokes permissions on databases and database accounts from a user.
   * 
   * @param request - DetachDatabaseAccountsFromUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachDatabaseAccountsFromUserResponse
   */
  async detachDatabaseAccountsFromUserWithOptions(request: $_model.DetachDatabaseAccountsFromUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachDatabaseAccountsFromUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachDatabaseAccountsFromUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachDatabaseAccountsFromUserResponse>(await this.callApi(params, req, runtime), new $_model.DetachDatabaseAccountsFromUserResponse({}));
  }

  /**
   * Revokes permissions on databases and database accounts from a user.
   * 
   * @param request - DetachDatabaseAccountsFromUserRequest
   * @returns DetachDatabaseAccountsFromUserResponse
   */
  async detachDatabaseAccountsFromUser(request: $_model.DetachDatabaseAccountsFromUserRequest): Promise<$_model.DetachDatabaseAccountsFromUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachDatabaseAccountsFromUserWithOptions(request, runtime);
  }

  /**
   * Revokes permissions on databases and database accounts from a user group.
   * 
   * @param request - DetachDatabaseAccountsFromUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachDatabaseAccountsFromUserGroupResponse
   */
  async detachDatabaseAccountsFromUserGroupWithOptions(request: $_model.DetachDatabaseAccountsFromUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachDatabaseAccountsFromUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachDatabaseAccountsFromUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachDatabaseAccountsFromUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.DetachDatabaseAccountsFromUserGroupResponse({}));
  }

  /**
   * Revokes permissions on databases and database accounts from a user group.
   * 
   * @param request - DetachDatabaseAccountsFromUserGroupRequest
   * @returns DetachDatabaseAccountsFromUserGroupResponse
   */
  async detachDatabaseAccountsFromUserGroup(request: $_model.DetachDatabaseAccountsFromUserGroupRequest): Promise<$_model.DetachDatabaseAccountsFromUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachDatabaseAccountsFromUserGroupWithOptions(request, runtime);
  }

  /**
   * Disassociate host accounts from a shared key.
   * 
   * @param request - DetachHostAccountsFromHostShareKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachHostAccountsFromHostShareKeyResponse
   */
  async detachHostAccountsFromHostShareKeyWithOptions(request: $_model.DetachHostAccountsFromHostShareKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachHostAccountsFromHostShareKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAccountIds)) {
      query["HostAccountIds"] = request.hostAccountIds;
    }

    if (!$dara.isNull(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachHostAccountsFromHostShareKey",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachHostAccountsFromHostShareKeyResponse>(await this.callApi(params, req, runtime), new $_model.DetachHostAccountsFromHostShareKeyResponse({}));
  }

  /**
   * Disassociate host accounts from a shared key.
   * 
   * @param request - DetachHostAccountsFromHostShareKeyRequest
   * @returns DetachHostAccountsFromHostShareKeyResponse
   */
  async detachHostAccountsFromHostShareKey(request: $_model.DetachHostAccountsFromHostShareKeyRequest): Promise<$_model.DetachHostAccountsFromHostShareKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachHostAccountsFromHostShareKeyWithOptions(request, runtime);
  }

  /**
   * Revokes permissions on hosts and host accounts from a user.
   * 
   * @param request - DetachHostAccountsFromUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachHostAccountsFromUserResponse
   */
  async detachHostAccountsFromUserWithOptions(request: $_model.DetachHostAccountsFromUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachHostAccountsFromUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachHostAccountsFromUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachHostAccountsFromUserResponse>(await this.callApi(params, req, runtime), new $_model.DetachHostAccountsFromUserResponse({}));
  }

  /**
   * Revokes permissions on hosts and host accounts from a user.
   * 
   * @param request - DetachHostAccountsFromUserRequest
   * @returns DetachHostAccountsFromUserResponse
   */
  async detachHostAccountsFromUser(request: $_model.DetachHostAccountsFromUserRequest): Promise<$_model.DetachHostAccountsFromUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachHostAccountsFromUserWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions on one or more hosts and host accounts from a user group.
   * 
   * @param request - DetachHostAccountsFromUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachHostAccountsFromUserGroupResponse
   */
  async detachHostAccountsFromUserGroupWithOptions(request: $_model.DetachHostAccountsFromUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachHostAccountsFromUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachHostAccountsFromUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachHostAccountsFromUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.DetachHostAccountsFromUserGroupResponse({}));
  }

  /**
   * Revokes the permissions on one or more hosts and host accounts from a user group.
   * 
   * @param request - DetachHostAccountsFromUserGroupRequest
   * @returns DetachHostAccountsFromUserGroupResponse
   */
  async detachHostAccountsFromUserGroup(request: $_model.DetachHostAccountsFromUserGroupRequest): Promise<$_model.DetachHostAccountsFromUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachHostAccountsFromUserGroupWithOptions(request, runtime);
  }

  /**
   * Removes host groups and host accounts from the list of host groups and host accounts that a user is authorized to manage.
   * 
   * @param request - DetachHostGroupAccountsFromUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachHostGroupAccountsFromUserResponse
   */
  async detachHostGroupAccountsFromUserWithOptions(request: $_model.DetachHostGroupAccountsFromUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachHostGroupAccountsFromUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachHostGroupAccountsFromUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachHostGroupAccountsFromUserResponse>(await this.callApi(params, req, runtime), new $_model.DetachHostGroupAccountsFromUserResponse({}));
  }

  /**
   * Removes host groups and host accounts from the list of host groups and host accounts that a user is authorized to manage.
   * 
   * @param request - DetachHostGroupAccountsFromUserRequest
   * @returns DetachHostGroupAccountsFromUserResponse
   */
  async detachHostGroupAccountsFromUser(request: $_model.DetachHostGroupAccountsFromUserRequest): Promise<$_model.DetachHostGroupAccountsFromUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachHostGroupAccountsFromUserWithOptions(request, runtime);
  }

  /**
   * Revokes permissions on one or more host groups and host accounts from a user group.
   * 
   * @remarks
   * ***
   * 
   * @param request - DetachHostGroupAccountsFromUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachHostGroupAccountsFromUserGroupResponse
   */
  async detachHostGroupAccountsFromUserGroupWithOptions(request: $_model.DetachHostGroupAccountsFromUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachHostGroupAccountsFromUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachHostGroupAccountsFromUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachHostGroupAccountsFromUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.DetachHostGroupAccountsFromUserGroupResponse({}));
  }

  /**
   * Revokes permissions on one or more host groups and host accounts from a user group.
   * 
   * @remarks
   * ***
   * 
   * @param request - DetachHostGroupAccountsFromUserGroupRequest
   * @returns DetachHostGroupAccountsFromUserGroupResponse
   */
  async detachHostGroupAccountsFromUserGroup(request: $_model.DetachHostGroupAccountsFromUserGroupRequest): Promise<$_model.DetachHostGroupAccountsFromUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachHostGroupAccountsFromUserGroupWithOptions(request, runtime);
  }

  /**
   * Disables Internet access for a bastion host.
   * 
   * @param request - DisableInstancePublicAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableInstancePublicAccessResponse
   */
  async disableInstancePublicAccessWithOptions(request: $_model.DisableInstancePublicAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableInstancePublicAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableInstancePublicAccess",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableInstancePublicAccessResponse>(await this.callApi(params, req, runtime), new $_model.DisableInstancePublicAccessResponse({}));
  }

  /**
   * Disables Internet access for a bastion host.
   * 
   * @param request - DisableInstancePublicAccessRequest
   * @returns DisableInstancePublicAccessResponse
   */
  async disableInstancePublicAccess(request: $_model.DisableInstancePublicAccessRequest): Promise<$_model.DisableInstancePublicAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableInstancePublicAccessWithOptions(request, runtime);
  }

  /**
   * Disables an authorization rule.
   * 
   * @param request - DisableRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableRuleResponse
   */
  async disableRuleWithOptions(request: $_model.DisableRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableRule",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableRuleResponse>(await this.callApi(params, req, runtime), new $_model.DisableRuleResponse({}));
  }

  /**
   * Disables an authorization rule.
   * 
   * @param request - DisableRuleRequest
   * @returns DisableRuleResponse
   */
  async disableRule(request: $_model.DisableRuleRequest): Promise<$_model.DisableRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableRuleWithOptions(request, runtime);
  }

  /**
   * Enables Internet access for a bastion host.
   * 
   * @param request - EnableInstancePublicAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInstancePublicAccessResponse
   */
  async enableInstancePublicAccessWithOptions(request: $_model.EnableInstancePublicAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableInstancePublicAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableInstancePublicAccess",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableInstancePublicAccessResponse>(await this.callApi(params, req, runtime), new $_model.EnableInstancePublicAccessResponse({}));
  }

  /**
   * Enables Internet access for a bastion host.
   * 
   * @param request - EnableInstancePublicAccessRequest
   * @returns EnableInstancePublicAccessResponse
   */
  async enableInstancePublicAccess(request: $_model.EnableInstancePublicAccessRequest): Promise<$_model.EnableInstancePublicAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableInstancePublicAccessWithOptions(request, runtime);
  }

  /**
   * Enables an authorization rule.
   * 
   * @param request - EnableRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableRuleResponse
   */
  async enableRuleWithOptions(request: $_model.EnableRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableRule",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableRuleResponse>(await this.callApi(params, req, runtime), new $_model.EnableRuleResponse({}));
  }

  /**
   * Enables an authorization rule.
   * 
   * @param request - EnableRuleRequest
   * @returns EnableRuleResponse
   */
  async enableRule(request: $_model.EnableRuleRequest): Promise<$_model.EnableRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableRuleWithOptions(request, runtime);
  }

  /**
   * Applies for an O\\&M token.
   * 
   * @param request - GenerateAssetOperationTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateAssetOperationTokenResponse
   */
  async generateAssetOperationTokenWithOptions(request: $_model.GenerateAssetOperationTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateAssetOperationTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetAccountId)) {
      query["AssetAccountId"] = request.assetAccountId;
    }

    if (!$dara.isNull(request.assetAccountName)) {
      query["AssetAccountName"] = request.assetAccountName;
    }

    if (!$dara.isNull(request.assetAccountPassword)) {
      query["AssetAccountPassword"] = request.assetAccountPassword;
    }

    if (!$dara.isNull(request.assetAccountProtocolName)) {
      query["AssetAccountProtocolName"] = request.assetAccountProtocolName;
    }

    if (!$dara.isNull(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.assetType)) {
      query["AssetType"] = request.assetType;
    }

    if (!$dara.isNull(request.databaseSchema)) {
      query["DatabaseSchema"] = request.databaseSchema;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.loginAttribute)) {
      query["LoginAttribute"] = request.loginAttribute;
    }

    if (!$dara.isNull(request.operationMode)) {
      query["OperationMode"] = request.operationMode;
    }

    if (!$dara.isNull(request.operationNote)) {
      query["OperationNote"] = request.operationNote;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ssoClient)) {
      query["SsoClient"] = request.ssoClient;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateAssetOperationToken",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateAssetOperationTokenResponse>(await this.callApi(params, req, runtime), new $_model.GenerateAssetOperationTokenResponse({}));
  }

  /**
   * Applies for an O\\&M token.
   * 
   * @param request - GenerateAssetOperationTokenRequest
   * @returns GenerateAssetOperationTokenResponse
   */
  async generateAssetOperationToken(request: $_model.GenerateAssetOperationTokenRequest): Promise<$_model.GenerateAssetOperationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateAssetOperationTokenWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a database.
   * 
   * @param request - GetDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseResponse
   */
  async getDatabaseWithOptions(request: $_model.GetDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabase",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.GetDatabaseResponse({}));
  }

  /**
   * Queries the detailed information about a database.
   * 
   * @param request - GetDatabaseRequest
   * @returns GetDatabaseResponse
   */
  async getDatabase(request: $_model.GetDatabaseRequest): Promise<$_model.GetDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDatabaseWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a database account.
   * 
   * @param request - GetDatabaseAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseAccountResponse
   */
  async getDatabaseAccountWithOptions(request: $_model.GetDatabaseAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatabaseAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseAccountId)) {
      query["DatabaseAccountId"] = request.databaseAccountId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabaseAccount",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatabaseAccountResponse>(await this.callApi(params, req, runtime), new $_model.GetDatabaseAccountResponse({}));
  }

  /**
   * Queries the detailed information about a database account.
   * 
   * @param request - GetDatabaseAccountRequest
   * @returns GetDatabaseAccountResponse
   */
  async getDatabaseAccount(request: $_model.GetDatabaseAccountRequest): Promise<$_model.GetDatabaseAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDatabaseAccountWithOptions(request, runtime);
  }

  /**
   * 获取导出配置任务进度
   * 
   * @param request - GetExportConfigJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExportConfigJobResponse
   */
  async getExportConfigJobWithOptions(request: $_model.GetExportConfigJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExportConfigJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExportConfigJob",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExportConfigJobResponse>(await this.callApi(params, req, runtime), new $_model.GetExportConfigJobResponse({}));
  }

  /**
   * 获取导出配置任务进度
   * 
   * @param request - GetExportConfigJobRequest
   * @returns GetExportConfigJobResponse
   */
  async getExportConfigJob(request: $_model.GetExportConfigJobRequest): Promise<$_model.GetExportConfigJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExportConfigJobWithOptions(request, runtime);
  }

  /**
   * Queries the details of a host, such as the name, source, address, protocol, and service port of the host.
   * 
   * @param request - GetHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHostResponse
   */
  async getHostWithOptions(request: $_model.GetHostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHost",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHostResponse>(await this.callApi(params, req, runtime), new $_model.GetHostResponse({}));
  }

  /**
   * Queries the details of a host, such as the name, source, address, protocol, and service port of the host.
   * 
   * @param request - GetHostRequest
   * @returns GetHostResponse
   */
  async getHost(request: $_model.GetHostRequest): Promise<$_model.GetHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHostWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified host account.
   * 
   * @param request - GetHostAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHostAccountResponse
   */
  async getHostAccountWithOptions(request: $_model.GetHostAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHostAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAccountId)) {
      query["HostAccountId"] = request.hostAccountId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHostAccount",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHostAccountResponse>(await this.callApi(params, req, runtime), new $_model.GetHostAccountResponse({}));
  }

  /**
   * Queries the details of a specified host account.
   * 
   * @param request - GetHostAccountRequest
   * @returns GetHostAccountResponse
   */
  async getHostAccount(request: $_model.GetHostAccountRequest): Promise<$_model.GetHostAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHostAccountWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified host group.
   * 
   * @param request - GetHostGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHostGroupResponse
   */
  async getHostGroupWithOptions(request: $_model.GetHostGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHostGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHostGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHostGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetHostGroupResponse({}));
  }

  /**
   * Queries the details of a specified host group.
   * 
   * @param request - GetHostGroupRequest
   * @returns GetHostGroupResponse
   */
  async getHostGroup(request: $_model.GetHostGroupRequest): Promise<$_model.GetHostGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHostGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about a shared key.
   * 
   * @param request - GetHostShareKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHostShareKeyResponse
   */
  async getHostShareKeyWithOptions(request: $_model.GetHostShareKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHostShareKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHostShareKey",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHostShareKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetHostShareKeyResponse({}));
  }

  /**
   * Queries the information about a shared key.
   * 
   * @param request - GetHostShareKeyRequest
   * @returns GetHostShareKeyResponse
   */
  async getHostShareKey(request: $_model.GetHostShareKeyRequest): Promise<$_model.GetHostShareKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHostShareKeyWithOptions(request, runtime);
  }

  /**
   * Queries the settings of Active Directory (AD) authentication on a bastion host.
   * 
   * @remarks
   * ###
   * You can call this operation to query the settings of AD authentication on a bastion host. After you configure AD authentication on a bastion host, you can import AD-authenticated users into the bastion host. After the AD-authenticated users are imported into the bastion host, the AD-authenticated users can log on to the bastion host to perform O\\&M operations on servers.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetInstanceADAuthServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceADAuthServerResponse
   */
  async getInstanceADAuthServerWithOptions(request: $_model.GetInstanceADAuthServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceADAuthServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceADAuthServer",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceADAuthServerResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceADAuthServerResponse({}));
  }

  /**
   * Queries the settings of Active Directory (AD) authentication on a bastion host.
   * 
   * @remarks
   * ###
   * You can call this operation to query the settings of AD authentication on a bastion host. After you configure AD authentication on a bastion host, you can import AD-authenticated users into the bastion host. After the AD-authenticated users are imported into the bastion host, the AD-authenticated users can log on to the bastion host to perform O\\&M operations on servers.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetInstanceADAuthServerRequest
   * @returns GetInstanceADAuthServerResponse
   */
  async getInstanceADAuthServer(request: $_model.GetInstanceADAuthServerRequest): Promise<$_model.GetInstanceADAuthServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceADAuthServerWithOptions(request, runtime);
  }

  /**
   * Queries the settings of Lightweight Directory Access Protocol (LDAP) authentication on a bastion host.
   * 
   * @param request - GetInstanceLDAPAuthServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceLDAPAuthServerResponse
   */
  async getInstanceLDAPAuthServerWithOptions(request: $_model.GetInstanceLDAPAuthServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceLDAPAuthServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceLDAPAuthServer",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceLDAPAuthServerResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceLDAPAuthServerResponse({}));
  }

  /**
   * Queries the settings of Lightweight Directory Access Protocol (LDAP) authentication on a bastion host.
   * 
   * @param request - GetInstanceLDAPAuthServerRequest
   * @returns GetInstanceLDAPAuthServerResponse
   */
  async getInstanceLDAPAuthServer(request: $_model.GetInstanceLDAPAuthServerRequest): Promise<$_model.GetInstanceLDAPAuthServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceLDAPAuthServerWithOptions(request, runtime);
  }

  /**
   * 获取堡垒机实例存储信息
   * 
   * @param request - GetInstanceStoreInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceStoreInfoResponse
   */
  async getInstanceStoreInfoWithOptions(request: $_model.GetInstanceStoreInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceStoreInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceStoreInfo",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceStoreInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceStoreInfoResponse({}));
  }

  /**
   * 获取堡垒机实例存储信息
   * 
   * @param request - GetInstanceStoreInfoRequest
   * @returns GetInstanceStoreInfoResponse
   */
  async getInstanceStoreInfo(request: $_model.GetInstanceStoreInfoRequest): Promise<$_model.GetInstanceStoreInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceStoreInfoWithOptions(request, runtime);
  }

  /**
   * Queries the settings of two-factor authentication on a bastion host.
   * 
   * @remarks
   * You can call this operation to query the settings of two-factor authentication on a bastion host. After you enable two-factor authentication, Bastionhost sends a verification code to a local user when the local user logs on to a bastion host. A local user can log on to the bastion host only when the local user enters the valid username and password and the verification code. This reduces the security risks caused by account information leaks.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetInstanceTwoFactorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceTwoFactorResponse
   */
  async getInstanceTwoFactorWithOptions(request: $_model.GetInstanceTwoFactorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceTwoFactorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceTwoFactor",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceTwoFactorResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceTwoFactorResponse({}));
  }

  /**
   * Queries the settings of two-factor authentication on a bastion host.
   * 
   * @remarks
   * You can call this operation to query the settings of two-factor authentication on a bastion host. After you enable two-factor authentication, Bastionhost sends a verification code to a local user when the local user logs on to a bastion host. A local user can log on to the bastion host only when the local user enters the valid username and password and the verification code. This reduces the security risks caused by account information leaks.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetInstanceTwoFactorRequest
   * @returns GetInstanceTwoFactorResponse
   */
  async getInstanceTwoFactor(request: $_model.GetInstanceTwoFactorRequest): Promise<$_model.GetInstanceTwoFactorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceTwoFactorWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a network domain.
   * 
   * @param request - GetNetworkDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkDomainResponse
   */
  async getNetworkDomainWithOptions(request: $_model.GetNetworkDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetworkDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkProxyState)) {
      query["CheckProxyState"] = request.checkProxyState;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkDomain",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetworkDomainResponse>(await this.callApi(params, req, runtime), new $_model.GetNetworkDomainResponse({}));
  }

  /**
   * Queries the detailed information about a network domain.
   * 
   * @param request - GetNetworkDomainRequest
   * @returns GetNetworkDomainResponse
   */
  async getNetworkDomain(request: $_model.GetNetworkDomainRequest): Promise<$_model.GetNetworkDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkDomainWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a control policy.
   * 
   * @param request - GetPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyResponse
   */
  async getPolicyWithOptions(request: $_model.GetPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicy",
      version: "2019-12-09",
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
   * Queries the detailed information about a control policy.
   * 
   * @param request - GetPolicyRequest
   * @returns GetPolicyResponse
   */
  async getPolicy(request: $_model.GetPolicyRequest): Promise<$_model.GetPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the assets to which a control policy applies.
   * 
   * @param request - GetPolicyAssetScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyAssetScopeResponse
   */
  async getPolicyAssetScopeWithOptions(request: $_model.GetPolicyAssetScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyAssetScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyAssetScope",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyAssetScopeResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyAssetScopeResponse({}));
  }

  /**
   * Queries the assets to which a control policy applies.
   * 
   * @param request - GetPolicyAssetScopeRequest
   * @returns GetPolicyAssetScopeResponse
   */
  async getPolicyAssetScope(request: $_model.GetPolicyAssetScopeRequest): Promise<$_model.GetPolicyAssetScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyAssetScopeWithOptions(request, runtime);
  }

  /**
   * Queries the scope of users to whom a control policy applies.
   * 
   * @param request - GetPolicyUserScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyUserScopeResponse
   */
  async getPolicyUserScopeWithOptions(request: $_model.GetPolicyUserScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyUserScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyUserScope",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyUserScopeResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyUserScopeResponse({}));
  }

  /**
   * Queries the scope of users to whom a control policy applies.
   * 
   * @param request - GetPolicyUserScopeRequest
   * @returns GetPolicyUserScopeResponse
   */
  async getPolicyUserScope(request: $_model.GetPolicyUserScopeRequest): Promise<$_model.GetPolicyUserScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyUserScopeWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about an authorization rule.
   * 
   * @param request - GetRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleResponse
   */
  async getRuleWithOptions(request: $_model.GetRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRule",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetRuleResponse({}));
  }

  /**
   * Queries the detailed information about an authorization rule.
   * 
   * @param request - GetRuleRequest
   * @returns GetRuleResponse
   */
  async getRule(request: $_model.GetRuleRequest): Promise<$_model.GetRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  /**
   * Queries the details of a user of the specified bastion host.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2019-12-09",
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
   * Queries the details of a user of the specified bastion host.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * Queries the details of a user group in a bastion host.
   * 
   * @param request - GetUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserGroupResponse
   */
  async getUserGroupWithOptions(request: $_model.GetUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetUserGroupResponse({}));
  }

  /**
   * Queries the details of a user group in a bastion host.
   * 
   * @param request - GetUserGroupRequest
   * @returns GetUserGroupResponse
   */
  async getUserGroup(request: $_model.GetUserGroupRequest): Promise<$_model.GetUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserGroupWithOptions(request, runtime);
  }

  /**
   * Queries commands to be reviewed.
   * 
   * @remarks
   * You can call this operation to query commands to be reviewed by a Bastionhost administrator.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListApproveCommandsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApproveCommandsResponse
   */
  async listApproveCommandsWithOptions(request: $_model.ListApproveCommandsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApproveCommandsResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApproveCommands",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApproveCommandsResponse>(await this.callApi(params, req, runtime), new $_model.ListApproveCommandsResponse({}));
  }

  /**
   * Queries commands to be reviewed.
   * 
   * @remarks
   * You can call this operation to query commands to be reviewed by a Bastionhost administrator.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListApproveCommandsRequest
   * @returns ListApproveCommandsResponse
   */
  async listApproveCommands(request: $_model.ListApproveCommandsRequest): Promise<$_model.ListApproveCommandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApproveCommandsWithOptions(request, runtime);
  }

  /**
   * Queries the database accounts of a database.
   * 
   * @param request - ListDatabaseAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabaseAccountsResponse
   */
  async listDatabaseAccountsWithOptions(request: $_model.ListDatabaseAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabaseAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!$dara.isNull(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabaseAccounts",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabaseAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabaseAccountsResponse({}));
  }

  /**
   * Queries the database accounts of a database.
   * 
   * @param request - ListDatabaseAccountsRequest
   * @returns ListDatabaseAccountsResponse
   */
  async listDatabaseAccounts(request: $_model.ListDatabaseAccountsRequest): Promise<$_model.ListDatabaseAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatabaseAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the database accounts of a database and whether a user is authorized to manage each database account.
   * 
   * @param request - ListDatabaseAccountsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabaseAccountsForUserResponse
   */
  async listDatabaseAccountsForUserWithOptions(request: $_model.ListDatabaseAccountsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabaseAccountsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!$dara.isNull(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabaseAccountsForUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabaseAccountsForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabaseAccountsForUserResponse({}));
  }

  /**
   * Queries the database accounts of a database and whether a user is authorized to manage each database account.
   * 
   * @param request - ListDatabaseAccountsForUserRequest
   * @returns ListDatabaseAccountsForUserResponse
   */
  async listDatabaseAccountsForUser(request: $_model.ListDatabaseAccountsForUserRequest): Promise<$_model.ListDatabaseAccountsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatabaseAccountsForUserWithOptions(request, runtime);
  }

  /**
   * Queries the database accounts of a database and whether a user group is authorized to manage each database account.
   * 
   * @param request - ListDatabaseAccountsForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabaseAccountsForUserGroupResponse
   */
  async listDatabaseAccountsForUserGroupWithOptions(request: $_model.ListDatabaseAccountsForUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabaseAccountsForUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!$dara.isNull(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabaseAccountsForUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabaseAccountsForUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabaseAccountsForUserGroupResponse({}));
  }

  /**
   * Queries the database accounts of a database and whether a user group is authorized to manage each database account.
   * 
   * @param request - ListDatabaseAccountsForUserGroupRequest
   * @returns ListDatabaseAccountsForUserGroupResponse
   */
  async listDatabaseAccountsForUserGroup(request: $_model.ListDatabaseAccountsForUserGroupRequest): Promise<$_model.ListDatabaseAccountsForUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatabaseAccountsForUserGroupWithOptions(request, runtime);
  }

  /**
   * Queries the databases that are managed by a bastion host.
   * 
   * @param request - ListDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabasesResponse
   */
  async listDatabasesWithOptions(request: $_model.ListDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!$dara.isNull(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabases",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabasesResponse({}));
  }

  /**
   * Queries the databases that are managed by a bastion host.
   * 
   * @param request - ListDatabasesRequest
   * @returns ListDatabasesResponse
   */
  async listDatabases(request: $_model.ListDatabasesRequest): Promise<$_model.ListDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatabasesWithOptions(request, runtime);
  }

  /**
   * Queries the databases that a user is authorized to manage.
   * 
   * @param request - ListDatabasesForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabasesForUserResponse
   */
  async listDatabasesForUserWithOptions(request: $_model.ListDatabasesForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabasesForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseAddress)) {
      query["DatabaseAddress"] = request.databaseAddress;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabasesForUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabasesForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabasesForUserResponse({}));
  }

  /**
   * Queries the databases that a user is authorized to manage.
   * 
   * @param request - ListDatabasesForUserRequest
   * @returns ListDatabasesForUserResponse
   */
  async listDatabasesForUser(request: $_model.ListDatabasesForUserRequest): Promise<$_model.ListDatabasesForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatabasesForUserWithOptions(request, runtime);
  }

  /**
   * Queries the databases that a user group is authorized to manage.
   * 
   * @param request - ListDatabasesForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabasesForUserGroupResponse
   */
  async listDatabasesForUserGroupWithOptions(request: $_model.ListDatabasesForUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabasesForUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseAddress)) {
      query["DatabaseAddress"] = request.databaseAddress;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabasesForUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabasesForUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabasesForUserGroupResponse({}));
  }

  /**
   * Queries the databases that a user group is authorized to manage.
   * 
   * @param request - ListDatabasesForUserGroupRequest
   * @returns ListDatabasesForUserGroupResponse
   */
  async listDatabasesForUserGroup(request: $_model.ListDatabasesForUserGroupRequest): Promise<$_model.ListDatabasesForUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatabasesForUserGroupWithOptions(request, runtime);
  }

  /**
   * Queries accounts of a specified host.
   * 
   * @param request - ListHostAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostAccountsResponse
   */
  async listHostAccountsWithOptions(request: $_model.ListHostAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!$dara.isNull(request.hostIds)) {
      query["HostIds"] = request.hostIds;
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

    if (!$dara.isNull(request.protocolName)) {
      query["ProtocolName"] = request.protocolName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostAccounts",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListHostAccountsResponse({}));
  }

  /**
   * Queries accounts of a specified host.
   * 
   * @param request - ListHostAccountsRequest
   * @returns ListHostAccountsResponse
   */
  async listHostAccounts(request: $_model.ListHostAccountsRequest): Promise<$_model.ListHostAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the host accounts that are associated with a shared key.
   * 
   * @param request - ListHostAccountsForHostShareKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostAccountsForHostShareKeyResponse
   */
  async listHostAccountsForHostShareKeyWithOptions(request: $_model.ListHostAccountsForHostShareKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostAccountsForHostShareKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostAccountsForHostShareKey",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostAccountsForHostShareKeyResponse>(await this.callApi(params, req, runtime), new $_model.ListHostAccountsForHostShareKeyResponse({}));
  }

  /**
   * Queries the host accounts that are associated with a shared key.
   * 
   * @param request - ListHostAccountsForHostShareKeyRequest
   * @returns ListHostAccountsForHostShareKeyResponse
   */
  async listHostAccountsForHostShareKey(request: $_model.ListHostAccountsForHostShareKeyRequest): Promise<$_model.ListHostAccountsForHostShareKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostAccountsForHostShareKeyWithOptions(request, runtime);
  }

  /**
   * Queries the host accounts that the specified user is authorized to manage on the specified host.
   * 
   * @param request - ListHostAccountsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostAccountsForUserResponse
   */
  async listHostAccountsForUserWithOptions(request: $_model.ListHostAccountsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostAccountsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostAccountsForUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostAccountsForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListHostAccountsForUserResponse({}));
  }

  /**
   * Queries the host accounts that the specified user is authorized to manage on the specified host.
   * 
   * @param request - ListHostAccountsForUserRequest
   * @returns ListHostAccountsForUserResponse
   */
  async listHostAccountsForUser(request: $_model.ListHostAccountsForUserRequest): Promise<$_model.ListHostAccountsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostAccountsForUserWithOptions(request, runtime);
  }

  /**
   * Queries the host accounts of the specified host that the specified user group is authorized to manage.
   * 
   * @param request - ListHostAccountsForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostAccountsForUserGroupResponse
   */
  async listHostAccountsForUserGroupWithOptions(request: $_model.ListHostAccountsForUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostAccountsForUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostAccountsForUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostAccountsForUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListHostAccountsForUserGroupResponse({}));
  }

  /**
   * Queries the host accounts of the specified host that the specified user group is authorized to manage.
   * 
   * @param request - ListHostAccountsForUserGroupRequest
   * @returns ListHostAccountsForUserGroupResponse
   */
  async listHostAccountsForUserGroup(request: $_model.ListHostAccountsForUserGroupRequest): Promise<$_model.ListHostAccountsForUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostAccountsForUserGroupWithOptions(request, runtime);
  }

  /**
   * Queries the names of the host accounts that a specified user is authorized to manage in a specified host group.
   * 
   * @param request - ListHostGroupAccountNamesForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostGroupAccountNamesForUserResponse
   */
  async listHostGroupAccountNamesForUserWithOptions(request: $_model.ListHostGroupAccountNamesForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostGroupAccountNamesForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostGroupAccountNamesForUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostGroupAccountNamesForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListHostGroupAccountNamesForUserResponse({}));
  }

  /**
   * Queries the names of the host accounts that a specified user is authorized to manage in a specified host group.
   * 
   * @param request - ListHostGroupAccountNamesForUserRequest
   * @returns ListHostGroupAccountNamesForUserResponse
   */
  async listHostGroupAccountNamesForUser(request: $_model.ListHostGroupAccountNamesForUserRequest): Promise<$_model.ListHostGroupAccountNamesForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostGroupAccountNamesForUserWithOptions(request, runtime);
  }

  /**
   * Queries the names of the host accounts that a user group is authorized to manage in a host group.
   * 
   * @param request - ListHostGroupAccountNamesForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostGroupAccountNamesForUserGroupResponse
   */
  async listHostGroupAccountNamesForUserGroupWithOptions(request: $_model.ListHostGroupAccountNamesForUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostGroupAccountNamesForUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostGroupAccountNamesForUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostGroupAccountNamesForUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListHostGroupAccountNamesForUserGroupResponse({}));
  }

  /**
   * Queries the names of the host accounts that a user group is authorized to manage in a host group.
   * 
   * @param request - ListHostGroupAccountNamesForUserGroupRequest
   * @returns ListHostGroupAccountNamesForUserGroupResponse
   */
  async listHostGroupAccountNamesForUserGroup(request: $_model.ListHostGroupAccountNamesForUserGroupRequest): Promise<$_model.ListHostGroupAccountNamesForUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostGroupAccountNamesForUserGroupWithOptions(request, runtime);
  }

  /**
   * Queries a list of asset groups that are managed by a bastion host.
   * 
   * @param request - ListHostGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostGroupsResponse
   */
  async listHostGroupsWithOptions(request: $_model.ListHostGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroupName)) {
      query["HostGroupName"] = request.hostGroupName;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostGroups",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListHostGroupsResponse({}));
  }

  /**
   * Queries a list of asset groups that are managed by a bastion host.
   * 
   * @param request - ListHostGroupsRequest
   * @returns ListHostGroupsResponse
   */
  async listHostGroups(request: $_model.ListHostGroupsRequest): Promise<$_model.ListHostGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of host groups that a bastion host user is authorized or is not authorized to manage.
   * 
   * @param request - ListHostGroupsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostGroupsForUserResponse
   */
  async listHostGroupsForUserWithOptions(request: $_model.ListHostGroupsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostGroupsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroupName)) {
      query["HostGroupName"] = request.hostGroupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostGroupsForUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostGroupsForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListHostGroupsForUserResponse({}));
  }

  /**
   * Queries a list of host groups that a bastion host user is authorized or is not authorized to manage.
   * 
   * @param request - ListHostGroupsForUserRequest
   * @returns ListHostGroupsForUserResponse
   */
  async listHostGroupsForUser(request: $_model.ListHostGroupsForUserRequest): Promise<$_model.ListHostGroupsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostGroupsForUserWithOptions(request, runtime);
  }

  /**
   * Queries the hosts that a specified user group is authorized or not authorized to manage.
   * 
   * @param request - ListHostGroupsForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostGroupsForUserGroupResponse
   */
  async listHostGroupsForUserGroupWithOptions(request: $_model.ListHostGroupsForUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostGroupsForUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroupName)) {
      query["HostGroupName"] = request.hostGroupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostGroupsForUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostGroupsForUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListHostGroupsForUserGroupResponse({}));
  }

  /**
   * Queries the hosts that a specified user group is authorized or not authorized to manage.
   * 
   * @param request - ListHostGroupsForUserGroupRequest
   * @returns ListHostGroupsForUserGroupResponse
   */
  async listHostGroupsForUserGroup(request: $_model.ListHostGroupsForUserGroupRequest): Promise<$_model.ListHostGroupsForUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostGroupsForUserGroupWithOptions(request, runtime);
  }

  /**
   * Queries the shared keys that are associated with a host.
   * 
   * @param request - ListHostShareKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostShareKeysResponse
   */
  async listHostShareKeysWithOptions(request: $_model.ListHostShareKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostShareKeysResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostShareKeys",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostShareKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListHostShareKeysResponse({}));
  }

  /**
   * Queries the shared keys that are associated with a host.
   * 
   * @param request - ListHostShareKeysRequest
   * @returns ListHostShareKeysResponse
   */
  async listHostShareKeys(request: $_model.ListHostShareKeysRequest): Promise<$_model.ListHostShareKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostShareKeysWithOptions(request, runtime);
  }

  /**
   * Queries the hosts in a bastion host.
   * 
   * @param request - ListHostsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostsResponse
   */
  async listHostsWithOptions(request: $_model.ListHostsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!$dara.isNull(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!$dara.isNull(request.sourceInstanceState)) {
      query["SourceInstanceState"] = request.sourceInstanceState;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHosts",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostsResponse>(await this.callApi(params, req, runtime), new $_model.ListHostsResponse({}));
  }

  /**
   * Queries the hosts in a bastion host.
   * 
   * @param request - ListHostsRequest
   * @returns ListHostsResponse
   */
  async listHosts(request: $_model.ListHostsRequest): Promise<$_model.ListHostsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostsWithOptions(request, runtime);
  }

  /**
   * Queries the hosts that a user group is authorized or not authorized to manage.
   * 
   * @param request - ListHostsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostsForUserResponse
   */
  async listHostsForUserWithOptions(request: $_model.ListHostsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostsForUser",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostsForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListHostsForUserResponse({}));
  }

  /**
   * Queries the hosts that a user group is authorized or not authorized to manage.
   * 
   * @param request - ListHostsForUserRequest
   * @returns ListHostsForUserResponse
   */
  async listHostsForUser(request: $_model.ListHostsForUserRequest): Promise<$_model.ListHostsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostsForUserWithOptions(request, runtime);
  }

  /**
   * Queries the hosts that a user group is authorized or not authorized to manage.
   * 
   * @param request - ListHostsForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostsForUserGroupResponse
   */
  async listHostsForUserGroupWithOptions(request: $_model.ListHostsForUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostsForUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostsForUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostsForUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListHostsForUserGroupResponse({}));
  }

  /**
   * Queries the hosts that a user group is authorized or not authorized to manage.
   * 
   * @param request - ListHostsForUserGroupRequest
   * @returns ListHostsForUserGroupResponse
   */
  async listHostsForUserGroup(request: $_model.ListHostsForUserGroupRequest): Promise<$_model.ListHostsForUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHostsForUserGroupWithOptions(request, runtime);
  }

  /**
   * 获取RD成员账号列表
   * 
   * @param request - ListInstanceRdMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceRdMembersResponse
   */
  async listInstanceRdMembersWithOptions(request: $_model.ListInstanceRdMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceRdMembersResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceRdMembers",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceRdMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceRdMembersResponse({}));
  }

  /**
   * 获取RD成员账号列表
   * 
   * @param request - ListInstanceRdMembersRequest
   * @returns ListInstanceRdMembersResponse
   */
  async listInstanceRdMembers(request: $_model.ListInstanceRdMembersRequest): Promise<$_model.ListInstanceRdMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceRdMembersWithOptions(request, runtime);
  }

  /**
   * Queries the network domains created in a bastion host.
   * 
   * @param request - ListNetworkDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkDomainsResponse
   */
  async listNetworkDomainsWithOptions(request: $_model.ListNetworkDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainName)) {
      query["NetworkDomainName"] = request.networkDomainName;
    }

    if (!$dara.isNull(request.networkDomainType)) {
      query["NetworkDomainType"] = request.networkDomainType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkDomains",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkDomainsResponse({}));
  }

  /**
   * Queries the network domains created in a bastion host.
   * 
   * @param request - ListNetworkDomainsRequest
   * @returns ListNetworkDomainsResponse
   */
  async listNetworkDomains(request: $_model.ListNetworkDomainsRequest): Promise<$_model.ListNetworkDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkDomainsWithOptions(request, runtime);
  }

  /**
   * Queries a list of database accounts that the current Resource Access Management (RAM) user is authorized to manage.
   * 
   * @param request - ListOperationDatabaseAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationDatabaseAccountsResponse
   */
  async listOperationDatabaseAccountsWithOptions(request: $_model.ListOperationDatabaseAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOperationDatabaseAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!$dara.isNull(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOperationDatabaseAccounts",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOperationDatabaseAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListOperationDatabaseAccountsResponse({}));
  }

  /**
   * Queries a list of database accounts that the current Resource Access Management (RAM) user is authorized to manage.
   * 
   * @param request - ListOperationDatabaseAccountsRequest
   * @returns ListOperationDatabaseAccountsResponse
   */
  async listOperationDatabaseAccounts(request: $_model.ListOperationDatabaseAccountsRequest): Promise<$_model.ListOperationDatabaseAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOperationDatabaseAccountsWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases that the current Resource Access Management (RAM) user is authorized to manage.
   * 
   * @param request - ListOperationDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationDatabasesResponse
   */
  async listOperationDatabasesWithOptions(request: $_model.ListOperationDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOperationDatabasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseAddress)) {
      query["DatabaseAddress"] = request.databaseAddress;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!$dara.isNull(request.sourceInstanceState)) {
      query["SourceInstanceState"] = request.sourceInstanceState;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOperationDatabases",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOperationDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.ListOperationDatabasesResponse({}));
  }

  /**
   * Queries a list of databases that the current Resource Access Management (RAM) user is authorized to manage.
   * 
   * @param request - ListOperationDatabasesRequest
   * @returns ListOperationDatabasesResponse
   */
  async listOperationDatabases(request: $_model.ListOperationDatabasesRequest): Promise<$_model.ListOperationDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOperationDatabasesWithOptions(request, runtime);
  }

  /**
   * Queries a list of host accounts that the current Resource Access Management (RAM) user is authorized to manage.
   * 
   * @param request - ListOperationHostAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationHostAccountsResponse
   */
  async listOperationHostAccountsWithOptions(request: $_model.ListOperationHostAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOperationHostAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOperationHostAccounts",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOperationHostAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListOperationHostAccountsResponse({}));
  }

  /**
   * Queries a list of host accounts that the current Resource Access Management (RAM) user is authorized to manage.
   * 
   * @param request - ListOperationHostAccountsRequest
   * @returns ListOperationHostAccountsResponse
   */
  async listOperationHostAccounts(request: $_model.ListOperationHostAccountsRequest): Promise<$_model.ListOperationHostAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOperationHostAccountsWithOptions(request, runtime);
  }

  /**
   * Queries a list of hosts that the current Resource Access Management (RAM) user is authorized to manage.
   * 
   * @param request - ListOperationHostsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationHostsResponse
   */
  async listOperationHostsWithOptions(request: $_model.ListOperationHostsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOperationHostsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!$dara.isNull(request.sourceInstanceState)) {
      query["SourceInstanceState"] = request.sourceInstanceState;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOperationHosts",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOperationHostsResponse>(await this.callApi(params, req, runtime), new $_model.ListOperationHostsResponse({}));
  }

  /**
   * Queries a list of hosts that the current Resource Access Management (RAM) user is authorized to manage.
   * 
   * @param request - ListOperationHostsRequest
   * @returns ListOperationHostsResponse
   */
  async listOperationHosts(request: $_model.ListOperationHostsRequest): Promise<$_model.ListOperationHostsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOperationHostsWithOptions(request, runtime);
  }

  /**
   * Queries O\\\\\\\\\\\\&M applications to be reviewed.
   * 
   * @remarks
   * You can call this operation to query the O\\&M applications to be reviewed by a Bastionhost administrator.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListOperationTicketsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationTicketsResponse
   */
  async listOperationTicketsWithOptions(request: $_model.ListOperationTicketsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOperationTicketsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetAddress)) {
      query["AssetAddress"] = request.assetAddress;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOperationTickets",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOperationTicketsResponse>(await this.callApi(params, req, runtime), new $_model.ListOperationTicketsResponse({}));
  }

  /**
   * Queries O\\\\\\\\\\\\&M applications to be reviewed.
   * 
   * @remarks
   * You can call this operation to query the O\\&M applications to be reviewed by a Bastionhost administrator.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListOperationTicketsRequest
   * @returns ListOperationTicketsResponse
   */
  async listOperationTickets(request: $_model.ListOperationTicketsRequest): Promise<$_model.ListOperationTicketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOperationTicketsWithOptions(request, runtime);
  }

  /**
   * Queries a list of control policies.
   * 
   * @param request - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: $_model.ListPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesResponse> {
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

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicies",
      version: "2019-12-09",
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
   * Queries a list of control policies.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries a list of authorization rules of a bastion host.
   * 
   * @param request - ListRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRulesResponse
   */
  async listRulesWithOptions(request: $_model.ListRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRulesResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleState)) {
      query["RuleState"] = request.ruleState;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRules",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListRulesResponse({}));
  }

  /**
   * Queries a list of authorization rules of a bastion host.
   * 
   * @param request - ListRulesRequest
   * @returns ListRulesResponse
   */
  async listRules(request: $_model.ListRulesRequest): Promise<$_model.ListRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to a resource.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListTagKeysResponse({}));
  }

  /**
   * Queries the tags that are added to a resource.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags bound to one or more Bastionhost instances.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2019-12-09",
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
   * Queries the tags bound to one or more Bastionhost instances.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of user groups on a bastion host.
   * 
   * @param request - ListUserGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsResponse
   */
  async listUserGroupsWithOptions(request: $_model.ListUserGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserGroupsResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroups",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserGroupsResponse({}));
  }

  /**
   * Queries a list of user groups on a bastion host.
   * 
   * @param request - ListUserGroupsRequest
   * @returns ListUserGroupsResponse
   */
  async listUserGroups(request: $_model.ListUserGroupsRequest): Promise<$_model.ListUserGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupsWithOptions(request, runtime);
  }

  /**
   * Queries all public keys of the specified user.
   * 
   * @param request - ListUserPublicKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserPublicKeysResponse
   */
  async listUserPublicKeysWithOptions(request: $_model.ListUserPublicKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserPublicKeysResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserPublicKeys",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserPublicKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListUserPublicKeysResponse({}));
  }

  /**
   * Queries all public keys of the specified user.
   * 
   * @param request - ListUserPublicKeysRequest
   * @returns ListUserPublicKeysResponse
   */
  async listUserPublicKeys(request: $_model.ListUserPublicKeysRequest): Promise<$_model.ListUserPublicKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserPublicKeysWithOptions(request, runtime);
  }

  /**
   * Queries a list of users of a bastion host.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceUserId)) {
      query["SourceUserId"] = request.sourceUserId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userState)) {
      query["UserState"] = request.userState;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2019-12-09",
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
   * Queries a list of users of a bastion host.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Locks one or more users of a bastion host.
   * 
   * @remarks
   * # Description
   * You can call this operation to lock one or more users of a bastion host. If a user does not need to use a bastion host to perform O\\&M operations within a specific period of time, you can lock the user. The locked user can no longer log on to or perform O\\&M operations on the hosts on which the user is granted permissions. If you want to unlock the user later, you can call the [UnlockUsers](https://help.aliyun.com/document_detail/204590.html) operation.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - LockUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockUsersResponse
   */
  async lockUsersWithOptions(request: $_model.LockUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LockUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LockUsers",
      version: "2019-12-09",
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
   * Locks one or more users of a bastion host.
   * 
   * @remarks
   * # Description
   * You can call this operation to lock one or more users of a bastion host. If a user does not need to use a bastion host to perform O\\&M operations within a specific period of time, you can lock the user. The locked user can no longer log on to or perform O\\&M operations on the hosts on which the user is granted permissions. If you want to unlock the user later, you can call the [UnlockUsers](https://help.aliyun.com/document_detail/204590.html) operation.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - LockUsersRequest
   * @returns LockUsersResponse
   */
  async lockUsers(request: $_model.LockUsersRequest): Promise<$_model.LockUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockUsersWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information about a database.
   * 
   * @param request - ModifyDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatabaseResponse
   */
  async modifyDatabaseWithOptions(request: $_model.ModifyDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activeAddressType)) {
      query["ActiveAddressType"] = request.activeAddressType;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.databasePort)) {
      query["DatabasePort"] = request.databasePort;
    }

    if (!$dara.isNull(request.databasePrivateAddress)) {
      query["DatabasePrivateAddress"] = request.databasePrivateAddress;
    }

    if (!$dara.isNull(request.databasePublicAddress)) {
      query["DatabasePublicAddress"] = request.databasePublicAddress;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDatabase",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDatabaseResponse({}));
  }

  /**
   * Modifies the basic information about a database.
   * 
   * @param request - ModifyDatabaseRequest
   * @returns ModifyDatabaseResponse
   */
  async modifyDatabase(request: $_model.ModifyDatabaseRequest): Promise<$_model.ModifyDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatabaseWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information about a database account.
   * 
   * @param request - ModifyDatabaseAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatabaseAccountResponse
   */
  async modifyDatabaseAccountWithOptions(request: $_model.ModifyDatabaseAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDatabaseAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseAccountId)) {
      query["DatabaseAccountId"] = request.databaseAccountId;
    }

    if (!$dara.isNull(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!$dara.isNull(request.databaseSchema)) {
      query["DatabaseSchema"] = request.databaseSchema;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDatabaseAccount",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDatabaseAccountResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDatabaseAccountResponse({}));
  }

  /**
   * Modifies the basic information about a database account.
   * 
   * @param request - ModifyDatabaseAccountRequest
   * @returns ModifyDatabaseAccountResponse
   */
  async modifyDatabaseAccount(request: $_model.ModifyDatabaseAccountRequest): Promise<$_model.ModifyDatabaseAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatabaseAccountWithOptions(request, runtime);
  }

  /**
   * Modifies information about a host. The information includes the address, name, and description of the host and the operating system that the host runs.
   * 
   * @remarks
   * You can call the ModifyHost operation to modify the basic information about a host in a data center, an Elastic Compute Service (ECS) instance, or a host in an ApsaraDB MyBase dedicated cluster.
   * > The basic information about ECS instances and hosts in ApsaraDB MyBase dedicated clusters within your Alibaba Cloud account is synchronized to Bastionhost on a regular basis. After you modify the basic information about an ECS instance or a host in an ApsaraDB MyBase dedicated cluster, the modification result may be overwritten by the synchronized information.
   * 
   * @param request - ModifyHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHostResponse
   */
  async modifyHostWithOptions(request: $_model.ModifyHostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.hostPrivateAddress)) {
      query["HostPrivateAddress"] = request.hostPrivateAddress;
    }

    if (!$dara.isNull(request.hostPublicAddress)) {
      query["HostPublicAddress"] = request.hostPublicAddress;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!$dara.isNull(request.prefKex)) {
      query["PrefKex"] = request.prefKex;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHost",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHostResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHostResponse({}));
  }

  /**
   * Modifies information about a host. The information includes the address, name, and description of the host and the operating system that the host runs.
   * 
   * @remarks
   * You can call the ModifyHost operation to modify the basic information about a host in a data center, an Elastic Compute Service (ECS) instance, or a host in an ApsaraDB MyBase dedicated cluster.
   * > The basic information about ECS instances and hosts in ApsaraDB MyBase dedicated clusters within your Alibaba Cloud account is synchronized to Bastionhost on a regular basis. After you modify the basic information about an ECS instance or a host in an ApsaraDB MyBase dedicated cluster, the modification result may be overwritten by the synchronized information.
   * 
   * @param request - ModifyHostRequest
   * @returns ModifyHostResponse
   */
  async modifyHost(request: $_model.ModifyHostRequest): Promise<$_model.ModifyHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHostWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a host account, such as the username, password, and private key of the host account.
   * 
   * @param request - ModifyHostAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHostAccountResponse
   */
  async modifyHostAccountWithOptions(request: $_model.ModifyHostAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHostAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAccountId)) {
      query["HostAccountId"] = request.hostAccountId;
    }

    if (!$dara.isNull(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!$dara.isNull(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passPhrase)) {
      query["PassPhrase"] = request.passPhrase;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!$dara.isNull(request.privilegeType)) {
      query["PrivilegeType"] = request.privilegeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rotationMode)) {
      query["RotationMode"] = request.rotationMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHostAccount",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHostAccountResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHostAccountResponse({}));
  }

  /**
   * Modifies the information about a host account, such as the username, password, and private key of the host account.
   * 
   * @param request - ModifyHostAccountRequest
   * @returns ModifyHostAccountResponse
   */
  async modifyHostAccount(request: $_model.ModifyHostAccountRequest): Promise<$_model.ModifyHostAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHostAccountWithOptions(request, runtime);
  }

  /**
   * Modifies the name or description of the specified host group.
   * 
   * @param request - ModifyHostGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHostGroupResponse
   */
  async modifyHostGroupWithOptions(request: $_model.ModifyHostGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHostGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!$dara.isNull(request.hostGroupName)) {
      query["HostGroupName"] = request.hostGroupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHostGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHostGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHostGroupResponse({}));
  }

  /**
   * Modifies the name or description of the specified host group.
   * 
   * @param request - ModifyHostGroupRequest
   * @returns ModifyHostGroupResponse
   */
  async modifyHostGroup(request: $_model.ModifyHostGroupRequest): Promise<$_model.ModifyHostGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHostGroupWithOptions(request, runtime);
  }

  /**
   * Modifies a shared key.
   * 
   * @param request - ModifyHostShareKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHostShareKeyResponse
   */
  async modifyHostShareKeyWithOptions(request: $_model.ModifyHostShareKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHostShareKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!$dara.isNull(request.hostShareKeyName)) {
      query["HostShareKeyName"] = request.hostShareKeyName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passPhrase)) {
      query["PassPhrase"] = request.passPhrase;
    }

    if (!$dara.isNull(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHostShareKey",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHostShareKeyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHostShareKeyResponse({}));
  }

  /**
   * Modifies a shared key.
   * 
   * @param request - ModifyHostShareKeyRequest
   * @returns ModifyHostShareKeyResponse
   */
  async modifyHostShareKey(request: $_model.ModifyHostShareKeyRequest): Promise<$_model.ModifyHostShareKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHostShareKeyWithOptions(request, runtime);
  }

  /**
   * Changes the portal type of one or more hosts for O\\&M.
   * 
   * @param request - ModifyHostsActiveAddressTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHostsActiveAddressTypeResponse
   */
  async modifyHostsActiveAddressTypeWithOptions(request: $_model.ModifyHostsActiveAddressTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHostsActiveAddressTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activeAddressType)) {
      query["ActiveAddressType"] = request.activeAddressType;
    }

    if (!$dara.isNull(request.hostIds)) {
      query["HostIds"] = request.hostIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHostsActiveAddressType",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHostsActiveAddressTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHostsActiveAddressTypeResponse({}));
  }

  /**
   * Changes the portal type of one or more hosts for O\\&M.
   * 
   * @param request - ModifyHostsActiveAddressTypeRequest
   * @returns ModifyHostsActiveAddressTypeResponse
   */
  async modifyHostsActiveAddressType(request: $_model.ModifyHostsActiveAddressTypeRequest): Promise<$_model.ModifyHostsActiveAddressTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHostsActiveAddressTypeWithOptions(request, runtime);
  }

  /**
   * Changes the port for the O\\\\\\\\\\\\&M protocol on one or more hosts.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation to change the port for the O&M protocol on one or more hosts. If the standard port for the O&M protocol on your host is vulnerable to attacks, you can call this operation to specify a custom port. For example, the standard port for SSH is port 22.  
   * >  Ports 0 to 1024 are reserved for Bastionhost. Do not change the port for the O&M protocol to a reserved port.  
   * ## QPS limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyHostsPortRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHostsPortResponse
   */
  async modifyHostsPortWithOptions(request: $_model.ModifyHostsPortRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHostsPortResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostIds)) {
      query["HostIds"] = request.hostIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.protocolName)) {
      query["ProtocolName"] = request.protocolName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHostsPort",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHostsPortResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHostsPortResponse({}));
  }

  /**
   * Changes the port for the O\\\\\\\\\\\\&M protocol on one or more hosts.
   * 
   * @remarks
   * ## Usage notes
   * You can call this operation to change the port for the O&M protocol on one or more hosts. If the standard port for the O&M protocol on your host is vulnerable to attacks, you can call this operation to specify a custom port. For example, the standard port for SSH is port 22.  
   * >  Ports 0 to 1024 are reserved for Bastionhost. Do not change the port for the O&M protocol to a reserved port.  
   * ## QPS limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyHostsPortRequest
   * @returns ModifyHostsPortResponse
   */
  async modifyHostsPort(request: $_model.ModifyHostsPortRequest): Promise<$_model.ModifyHostsPortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHostsPortWithOptions(request, runtime);
  }

  /**
   * Modifies the settings of the Active Directory (AD) authentication server of a bastion host.
   * 
   * @param request - ModifyInstanceADAuthServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceADAuthServerResponse
   */
  async modifyInstanceADAuthServerWithOptions(request: $_model.ModifyInstanceADAuthServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceADAuthServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.baseDN)) {
      query["BaseDN"] = request.baseDN;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.emailMapping)) {
      query["EmailMapping"] = request.emailMapping;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isSSL)) {
      query["IsSSL"] = request.isSSL;
    }

    if (!$dara.isNull(request.mobileMapping)) {
      query["MobileMapping"] = request.mobileMapping;
    }

    if (!$dara.isNull(request.nameMapping)) {
      query["NameMapping"] = request.nameMapping;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.server)) {
      query["Server"] = request.server;
    }

    if (!$dara.isNull(request.standbyServer)) {
      query["StandbyServer"] = request.standbyServer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceADAuthServer",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceADAuthServerResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceADAuthServerResponse({}));
  }

  /**
   * Modifies the settings of the Active Directory (AD) authentication server of a bastion host.
   * 
   * @param request - ModifyInstanceADAuthServerRequest
   * @returns ModifyInstanceADAuthServerResponse
   */
  async modifyInstanceADAuthServer(request: $_model.ModifyInstanceADAuthServerRequest): Promise<$_model.ModifyInstanceADAuthServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceADAuthServerWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a bastion host.
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttributeWithOptions(request: $_model.ModifyInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceAttribute",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAttributeResponse({}));
  }

  /**
   * Modifies the information about a bastion host.
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttribute(request: $_model.ModifyInstanceAttributeRequest): Promise<$_model.ModifyInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the settings of the Lightweight Directory Access Protocol (LDAP) authentication server of a bastion host.
   * 
   * @param request - ModifyInstanceLDAPAuthServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceLDAPAuthServerResponse
   */
  async modifyInstanceLDAPAuthServerWithOptions(request: $_model.ModifyInstanceLDAPAuthServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceLDAPAuthServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.baseDN)) {
      query["BaseDN"] = request.baseDN;
    }

    if (!$dara.isNull(request.emailMapping)) {
      query["EmailMapping"] = request.emailMapping;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isSSL)) {
      query["IsSSL"] = request.isSSL;
    }

    if (!$dara.isNull(request.loginNameMapping)) {
      query["LoginNameMapping"] = request.loginNameMapping;
    }

    if (!$dara.isNull(request.mobileMapping)) {
      query["MobileMapping"] = request.mobileMapping;
    }

    if (!$dara.isNull(request.nameMapping)) {
      query["NameMapping"] = request.nameMapping;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.server)) {
      query["Server"] = request.server;
    }

    if (!$dara.isNull(request.standbyServer)) {
      query["StandbyServer"] = request.standbyServer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceLDAPAuthServer",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceLDAPAuthServerResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceLDAPAuthServerResponse({}));
  }

  /**
   * Modifies the settings of the Lightweight Directory Access Protocol (LDAP) authentication server of a bastion host.
   * 
   * @param request - ModifyInstanceLDAPAuthServerRequest
   * @returns ModifyInstanceLDAPAuthServerResponse
   */
  async modifyInstanceLDAPAuthServer(request: $_model.ModifyInstanceLDAPAuthServerRequest): Promise<$_model.ModifyInstanceLDAPAuthServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceLDAPAuthServerWithOptions(request, runtime);
  }

  /**
   * Modifies the two-factor authentication settings of a bastion host.
   * 
   * @param request - ModifyInstanceTwoFactorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceTwoFactorResponse
   */
  async modifyInstanceTwoFactorWithOptions(request: $_model.ModifyInstanceTwoFactorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceTwoFactorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableTwoFactor)) {
      query["EnableTwoFactor"] = request.enableTwoFactor;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.skipTwoFactorTime)) {
      query["SkipTwoFactorTime"] = request.skipTwoFactorTime;
    }

    if (!$dara.isNull(request.twoFactorMethods)) {
      query["TwoFactorMethods"] = request.twoFactorMethods;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceTwoFactor",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceTwoFactorResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceTwoFactorResponse({}));
  }

  /**
   * Modifies the two-factor authentication settings of a bastion host.
   * 
   * @param request - ModifyInstanceTwoFactorRequest
   * @returns ModifyInstanceTwoFactorResponse
   */
  async modifyInstanceTwoFactor(request: $_model.ModifyInstanceTwoFactorRequest): Promise<$_model.ModifyInstanceTwoFactorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceTwoFactorWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information about a network domain.
   * 
   * @param request - ModifyNetworkDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNetworkDomainResponse
   */
  async modifyNetworkDomainWithOptions(request: $_model.ModifyNetworkDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNetworkDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.networkDomainName)) {
      query["NetworkDomainName"] = request.networkDomainName;
    }

    if (!$dara.isNull(request.networkDomainType)) {
      query["NetworkDomainType"] = request.networkDomainType;
    }

    if (!$dara.isNull(request.proxies)) {
      query["Proxies"] = request.proxies;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNetworkDomain",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNetworkDomainResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNetworkDomainResponse({}));
  }

  /**
   * Modifies the basic information about a network domain.
   * 
   * @param request - ModifyNetworkDomainRequest
   * @returns ModifyNetworkDomainResponse
   */
  async modifyNetworkDomain(request: $_model.ModifyNetworkDomainRequest): Promise<$_model.ModifyNetworkDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNetworkDomainWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information about a control policy.
   * 
   * @param request - ModifyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyResponse
   */
  async modifyPolicyWithOptions(request: $_model.ModifyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicy",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPolicyResponse({}));
  }

  /**
   * Modifies the basic information about a control policy.
   * 
   * @param request - ModifyPolicyRequest
   * @returns ModifyPolicyResponse
   */
  async modifyPolicy(request: $_model.ModifyPolicyRequest): Promise<$_model.ModifyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information of an authorization rule.
   * 
   * @param request - ModifyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRuleResponse
   */
  async modifyRuleWithOptions(request: $_model.ModifyRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!$dara.isNull(request.effectiveEndTime)) {
      query["EffectiveEndTime"] = request.effectiveEndTime;
    }

    if (!$dara.isNull(request.effectiveStartTime)) {
      query["EffectiveStartTime"] = request.effectiveStartTime;
    }

    if (!$dara.isNull(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!$dara.isNull(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
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
      action: "ModifyRule",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRuleResponse({}));
  }

  /**
   * Modifies the basic information of an authorization rule.
   * 
   * @param request - ModifyRuleRequest
   * @returns ModifyRuleResponse
   */
  async modifyRule(request: $_model.ModifyRuleRequest): Promise<$_model.ModifyRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a user of a bastion host.
   * 
   * @param request - ModifyUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserResponse
   */
  async modifyUserWithOptions(request: $_model.ModifyUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.effectiveEndTime)) {
      query["EffectiveEndTime"] = request.effectiveEndTime;
    }

    if (!$dara.isNull(request.effectiveStartTime)) {
      query["EffectiveStartTime"] = request.effectiveStartTime;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.languageStatus)) {
      query["LanguageStatus"] = request.languageStatus;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.mobileCountryCode)) {
      query["MobileCountryCode"] = request.mobileCountryCode;
    }

    if (!$dara.isNull(request.needResetPassword)) {
      query["NeedResetPassword"] = request.needResetPassword;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.twoFactorMethods)) {
      query["TwoFactorMethods"] = request.twoFactorMethods;
    }

    if (!$dara.isNull(request.twoFactorStatus)) {
      query["TwoFactorStatus"] = request.twoFactorStatus;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUser",
      version: "2019-12-09",
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
   * Modifies the information about a user of a bastion host.
   * 
   * @param request - ModifyUserRequest
   * @returns ModifyUserResponse
   */
  async modifyUser(request: $_model.ModifyUserRequest): Promise<$_model.ModifyUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserWithOptions(request, runtime);
  }

  /**
   * Modifies the information about the specified user group.
   * 
   * @param request - ModifyUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserGroupResponse
   */
  async modifyUserGroupWithOptions(request: $_model.ModifyUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "ModifyUserGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserGroupResponse({}));
  }

  /**
   * Modifies the information about the specified user group.
   * 
   * @param request - ModifyUserGroupRequest
   * @returns ModifyUserGroupResponse
   */
  async modifyUserGroup(request: $_model.ModifyUserGroupRequest): Promise<$_model.ModifyUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the public key of the user.
   * 
   * @param request - ModifyUserPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserPublicKeyResponse
   */
  async modifyUserPublicKeyWithOptions(request: $_model.ModifyUserPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.publicKey)) {
      query["PublicKey"] = request.publicKey;
    }

    if (!$dara.isNull(request.publicKeyId)) {
      query["PublicKeyId"] = request.publicKeyId;
    }

    if (!$dara.isNull(request.publicKeyName)) {
      query["PublicKeyName"] = request.publicKeyName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUserPublicKey",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserPublicKeyResponse({}));
  }

  /**
   * Modifies the public key of the user.
   * 
   * @param request - ModifyUserPublicKeyRequest
   * @returns ModifyUserPublicKeyResponse
   */
  async modifyUserPublicKey(request: $_model.ModifyUserPublicKeyRequest): Promise<$_model.ModifyUserPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserPublicKeyWithOptions(request, runtime);
  }

  /**
   * Adds multiple databases to a network domain at a time.
   * 
   * @param request - MoveDatabasesToNetworkDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveDatabasesToNetworkDomainResponse
   */
  async moveDatabasesToNetworkDomainWithOptions(request: $_model.MoveDatabasesToNetworkDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveDatabasesToNetworkDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseIds)) {
      query["DatabaseIds"] = request.databaseIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveDatabasesToNetworkDomain",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveDatabasesToNetworkDomainResponse>(await this.callApi(params, req, runtime), new $_model.MoveDatabasesToNetworkDomainResponse({}));
  }

  /**
   * Adds multiple databases to a network domain at a time.
   * 
   * @param request - MoveDatabasesToNetworkDomainRequest
   * @returns MoveDatabasesToNetworkDomainResponse
   */
  async moveDatabasesToNetworkDomain(request: $_model.MoveDatabasesToNetworkDomainRequest): Promise<$_model.MoveDatabasesToNetworkDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveDatabasesToNetworkDomainWithOptions(request, runtime);
  }

  /**
   * Adds multiple hosts to a network domain at a time.
   * 
   * @param request - MoveHostsToNetworkDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveHostsToNetworkDomainResponse
   */
  async moveHostsToNetworkDomainWithOptions(request: $_model.MoveHostsToNetworkDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveHostsToNetworkDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostIds)) {
      query["HostIds"] = request.hostIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveHostsToNetworkDomain",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveHostsToNetworkDomainResponse>(await this.callApi(params, req, runtime), new $_model.MoveHostsToNetworkDomainResponse({}));
  }

  /**
   * Adds multiple hosts to a network domain at a time.
   * 
   * @param request - MoveHostsToNetworkDomainRequest
   * @returns MoveHostsToNetworkDomainResponse
   */
  async moveHostsToNetworkDomain(request: $_model.MoveHostsToNetworkDomainRequest): Promise<$_model.MoveHostsToNetworkDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveHostsToNetworkDomainWithOptions(request, runtime);
  }

  /**
   * Moves a bastion host from one resource group to another resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.MoveResourceGroupResponse({}));
  }

  /**
   * Moves a bastion host from one resource group to another resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * If an O\\&M engineer attempts to run a command specified in the Command Approval section of the Create Control Policy page, the administrator is notified to review the command in the Bastionhost console. The command can be run only after it is approved by the administrator.
   * 
   * @remarks
   * You can call this operation as a Bastionhost administrator to reject the request to run a command of an O\\&M engineer.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - RejectApproveCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectApproveCommandResponse
   */
  async rejectApproveCommandWithOptions(request: $_model.RejectApproveCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RejectApproveCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RejectApproveCommand",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RejectApproveCommandResponse>(await this.callApi(params, req, runtime), new $_model.RejectApproveCommandResponse({}));
  }

  /**
   * If an O\\&M engineer attempts to run a command specified in the Command Approval section of the Create Control Policy page, the administrator is notified to review the command in the Bastionhost console. The command can be run only after it is approved by the administrator.
   * 
   * @remarks
   * You can call this operation as a Bastionhost administrator to reject the request to run a command of an O\\&M engineer.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - RejectApproveCommandRequest
   * @returns RejectApproveCommandResponse
   */
  async rejectApproveCommand(request: $_model.RejectApproveCommandRequest): Promise<$_model.RejectApproveCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rejectApproveCommandWithOptions(request, runtime);
  }

  /**
   * If a Bastionhost administrator enables O\\\\\\&M Approval on the Create Control Policy page, O\\\\\\&M engineers can log on to assets to perform O\\\\\\&M operations only after the administrator approves their O\\\\\\&M applications.
   * 
   * @remarks
   * You can call this operation to reject an O\\&M application of an O\\&M engineer as a Bastionhost administrator.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - RejectOperationTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectOperationTicketResponse
   */
  async rejectOperationTicketWithOptions(request: $_model.RejectOperationTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RejectOperationTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.operationTicketId)) {
      query["OperationTicketId"] = request.operationTicketId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RejectOperationTicket",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RejectOperationTicketResponse>(await this.callApi(params, req, runtime), new $_model.RejectOperationTicketResponse({}));
  }

  /**
   * If a Bastionhost administrator enables O\\\\\\&M Approval on the Create Control Policy page, O\\\\\\&M engineers can log on to assets to perform O\\\\\\&M operations only after the administrator approves their O\\\\\\&M applications.
   * 
   * @remarks
   * You can call this operation to reject an O\\&M application of an O\\&M engineer as a Bastionhost administrator.
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - RejectOperationTicketRequest
   * @returns RejectOperationTicketResponse
   */
  async rejectOperationTicket(request: $_model.RejectOperationTicketRequest): Promise<$_model.RejectOperationTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rejectOperationTicketWithOptions(request, runtime);
  }

  /**
   * Removes multiple databases from an asset group at a time.
   * 
   * @param request - RemoveDatabasesFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDatabasesFromGroupResponse
   */
  async removeDatabasesFromGroupWithOptions(request: $_model.RemoveDatabasesFromGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDatabasesFromGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseIds)) {
      query["DatabaseIds"] = request.databaseIds;
    }

    if (!$dara.isNull(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDatabasesFromGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDatabasesFromGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveDatabasesFromGroupResponse({}));
  }

  /**
   * Removes multiple databases from an asset group at a time.
   * 
   * @param request - RemoveDatabasesFromGroupRequest
   * @returns RemoveDatabasesFromGroupResponse
   */
  async removeDatabasesFromGroup(request: $_model.RemoveDatabasesFromGroupRequest): Promise<$_model.RemoveDatabasesFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDatabasesFromGroupWithOptions(request, runtime);
  }

  /**
   * Removes multiple hosts from an asset group at a time.
   * 
   * @remarks
   * You can call the RemoveHostsFromGroup operation to remove multiple hosts from an asset group at a time. If you no longer need to manage some hosts in an asset group, you can call this operation to remove the hosts from the asset group.
   * # [](#qps-)QPS limit
   * You can call this API operation up to 10 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - RemoveHostsFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveHostsFromGroupResponse
   */
  async removeHostsFromGroupWithOptions(request: $_model.RemoveHostsFromGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveHostsFromGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!$dara.isNull(request.hostIds)) {
      query["HostIds"] = request.hostIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveHostsFromGroup",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveHostsFromGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveHostsFromGroupResponse({}));
  }

  /**
   * Removes multiple hosts from an asset group at a time.
   * 
   * @remarks
   * You can call the RemoveHostsFromGroup operation to remove multiple hosts from an asset group at a time. If you no longer need to manage some hosts in an asset group, you can call this operation to remove the hosts from the asset group.
   * # [](#qps-)QPS limit
   * You can call this API operation up to 10 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - RemoveHostsFromGroupRequest
   * @returns RemoveHostsFromGroupResponse
   */
  async removeHostsFromGroup(request: $_model.RemoveHostsFromGroupRequest): Promise<$_model.RemoveHostsFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeHostsFromGroupWithOptions(request, runtime);
  }

  /**
   * 移除RD成员账号
   * 
   * @param request - RemoveInstanceRdMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveInstanceRdMemberResponse
   */
  async removeInstanceRdMemberWithOptions(request: $_model.RemoveInstanceRdMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveInstanceRdMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveInstanceRdMember",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveInstanceRdMemberResponse>(await this.callApi(params, req, runtime), new $_model.RemoveInstanceRdMemberResponse({}));
  }

  /**
   * 移除RD成员账号
   * 
   * @param request - RemoveInstanceRdMemberRequest
   * @returns RemoveInstanceRdMemberResponse
   */
  async removeInstanceRdMember(request: $_model.RemoveInstanceRdMemberRequest): Promise<$_model.RemoveInstanceRdMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeInstanceRdMemberWithOptions(request, runtime);
  }

  /**
   * Removes one or more users from a user group.
   * 
   * @remarks
   * You can call this operation to remove one or more users from a user group. When users in a user group are transferred to a new position, resign, or are switched to another user group, you can call this operation to remove the users from the current user group at a time.  
   * ## QPS limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroupWithOptions(request: $_model.RemoveUsersFromGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUsersFromGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUsersFromGroup",
      version: "2019-12-09",
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
   * Removes one or more users from a user group.
   * 
   * @remarks
   * You can call this operation to remove one or more users from a user group. When users in a user group are transferred to a new position, resign, or are switched to another user group, you can call this operation to remove the users from the current user group at a time.  
   * ## QPS limit
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @returns RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroup(request: $_model.RemoveUsersFromGroupRequest): Promise<$_model.RemoveUsersFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUsersFromGroupWithOptions(request, runtime);
  }

  /**
   * Renews an O\\&M token for one hour.
   * 
   * @param request - RenewAssetOperationTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAssetOperationTokenResponse
   */
  async renewAssetOperationTokenWithOptions(request: $_model.RenewAssetOperationTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewAssetOperationTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tokenId)) {
      query["TokenId"] = request.tokenId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewAssetOperationToken",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewAssetOperationTokenResponse>(await this.callApi(params, req, runtime), new $_model.RenewAssetOperationTokenResponse({}));
  }

  /**
   * Renews an O\\&M token for one hour.
   * 
   * @param request - RenewAssetOperationTokenRequest
   * @returns RenewAssetOperationTokenResponse
   */
  async renewAssetOperationToken(request: $_model.RenewAssetOperationTokenRequest): Promise<$_model.RenewAssetOperationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAssetOperationTokenWithOptions(request, runtime);
  }

  /**
   * Deletes the logon credential of a specified host account. The logon credential can be the password or Secure Shell (SSH) private key.
   * 
   * @param request - ResetHostAccountCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetHostAccountCredentialResponse
   */
  async resetHostAccountCredentialWithOptions(request: $_model.ResetHostAccountCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetHostAccountCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.credentialType)) {
      query["CredentialType"] = request.credentialType;
    }

    if (!$dara.isNull(request.hostAccountId)) {
      query["HostAccountId"] = request.hostAccountId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetHostAccountCredential",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetHostAccountCredentialResponse>(await this.callApi(params, req, runtime), new $_model.ResetHostAccountCredentialResponse({}));
  }

  /**
   * Deletes the logon credential of a specified host account. The logon credential can be the password or Secure Shell (SSH) private key.
   * 
   * @param request - ResetHostAccountCredentialRequest
   * @returns ResetHostAccountCredentialResponse
   */
  async resetHostAccountCredential(request: $_model.ResetHostAccountCredentialRequest): Promise<$_model.ResetHostAccountCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetHostAccountCredentialWithOptions(request, runtime);
  }

  /**
   * Configures the logon period limits in a control policy.
   * 
   * @param tmpReq - SetPolicyAccessTimeRangeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPolicyAccessTimeRangeConfigResponse
   */
  async setPolicyAccessTimeRangeConfigWithOptions(tmpReq: $_model.SetPolicyAccessTimeRangeConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPolicyAccessTimeRangeConfigResponse> {
    tmpReq.validate();
    let request = new $_model.SetPolicyAccessTimeRangeConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accessTimeRangeConfig)) {
      request.accessTimeRangeConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accessTimeRangeConfig, "AccessTimeRangeConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accessTimeRangeConfigShrink)) {
      query["AccessTimeRangeConfig"] = request.accessTimeRangeConfigShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPolicyAccessTimeRangeConfig",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPolicyAccessTimeRangeConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetPolicyAccessTimeRangeConfigResponse({}));
  }

  /**
   * Configures the logon period limits in a control policy.
   * 
   * @param request - SetPolicyAccessTimeRangeConfigRequest
   * @returns SetPolicyAccessTimeRangeConfigResponse
   */
  async setPolicyAccessTimeRangeConfig(request: $_model.SetPolicyAccessTimeRangeConfigRequest): Promise<$_model.SetPolicyAccessTimeRangeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPolicyAccessTimeRangeConfigWithOptions(request, runtime);
  }

  /**
   * Configures the O&M approval setting in a control policy.
   * 
   * @param tmpReq - SetPolicyApprovalConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPolicyApprovalConfigResponse
   */
  async setPolicyApprovalConfigWithOptions(tmpReq: $_model.SetPolicyApprovalConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPolicyApprovalConfigResponse> {
    tmpReq.validate();
    let request = new $_model.SetPolicyApprovalConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.approvalConfig)) {
      request.approvalConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approvalConfig, "ApprovalConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.approvalConfigShrink)) {
      query["ApprovalConfig"] = request.approvalConfigShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPolicyApprovalConfig",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPolicyApprovalConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetPolicyApprovalConfigResponse({}));
  }

  /**
   * Configures the O&M approval setting in a control policy.
   * 
   * @param request - SetPolicyApprovalConfigRequest
   * @returns SetPolicyApprovalConfigResponse
   */
  async setPolicyApprovalConfig(request: $_model.SetPolicyApprovalConfigRequest): Promise<$_model.SetPolicyApprovalConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPolicyApprovalConfigWithOptions(request, runtime);
  }

  /**
   * Specifies the assets to which a control policy applies.
   * 
   * @param request - SetPolicyAssetScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPolicyAssetScopeResponse
   */
  async setPolicyAssetScopeWithOptions(request: $_model.SetPolicyAssetScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPolicyAssetScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!$dara.isNull(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!$dara.isNull(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPolicyAssetScope",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPolicyAssetScopeResponse>(await this.callApi(params, req, runtime), new $_model.SetPolicyAssetScopeResponse({}));
  }

  /**
   * Specifies the assets to which a control policy applies.
   * 
   * @param request - SetPolicyAssetScopeRequest
   * @returns SetPolicyAssetScopeResponse
   */
  async setPolicyAssetScope(request: $_model.SetPolicyAssetScopeRequest): Promise<$_model.SetPolicyAssetScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPolicyAssetScopeWithOptions(request, runtime);
  }

  /**
   * Specifies the commands that can or cannot be run by the users or on the assets associated with the policy and the commands that must be reviewed.
   * 
   * @param tmpReq - SetPolicyCommandConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPolicyCommandConfigResponse
   */
  async setPolicyCommandConfigWithOptions(tmpReq: $_model.SetPolicyCommandConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPolicyCommandConfigResponse> {
    tmpReq.validate();
    let request = new $_model.SetPolicyCommandConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commandConfig)) {
      request.commandConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commandConfig, "CommandConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commandConfigShrink)) {
      query["CommandConfig"] = request.commandConfigShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPolicyCommandConfig",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPolicyCommandConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetPolicyCommandConfigResponse({}));
  }

  /**
   * Specifies the commands that can or cannot be run by the users or on the assets associated with the policy and the commands that must be reviewed.
   * 
   * @param request - SetPolicyCommandConfigRequest
   * @returns SetPolicyCommandConfigResponse
   */
  async setPolicyCommandConfig(request: $_model.SetPolicyCommandConfigRequest): Promise<$_model.SetPolicyCommandConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPolicyCommandConfigWithOptions(request, runtime);
  }

  /**
   * Configures access control settings in a control policy.
   * 
   * @param tmpReq - SetPolicyIPAclConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPolicyIPAclConfigResponse
   */
  async setPolicyIPAclConfigWithOptions(tmpReq: $_model.SetPolicyIPAclConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPolicyIPAclConfigResponse> {
    tmpReq.validate();
    let request = new $_model.SetPolicyIPAclConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.IPAclConfig)) {
      request.IPAclConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.IPAclConfig, "IPAclConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.IPAclConfigShrink)) {
      query["IPAclConfig"] = request.IPAclConfigShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPolicyIPAclConfig",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPolicyIPAclConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetPolicyIPAclConfigResponse({}));
  }

  /**
   * Configures access control settings in a control policy.
   * 
   * @param request - SetPolicyIPAclConfigRequest
   * @returns SetPolicyIPAclConfigResponse
   */
  async setPolicyIPAclConfig(request: $_model.SetPolicyIPAclConfigRequest): Promise<$_model.SetPolicyIPAclConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPolicyIPAclConfigWithOptions(request, runtime);
  }

  /**
   * Modify the protocol control settings in a control policy.
   * 
   * @param tmpReq - SetPolicyProtocolConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPolicyProtocolConfigResponse
   */
  async setPolicyProtocolConfigWithOptions(tmpReq: $_model.SetPolicyProtocolConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPolicyProtocolConfigResponse> {
    tmpReq.validate();
    let request = new $_model.SetPolicyProtocolConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.protocolConfig)) {
      request.protocolConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.protocolConfig, "ProtocolConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.protocolConfigShrink)) {
      query["ProtocolConfig"] = request.protocolConfigShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPolicyProtocolConfig",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPolicyProtocolConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetPolicyProtocolConfigResponse({}));
  }

  /**
   * Modify the protocol control settings in a control policy.
   * 
   * @param request - SetPolicyProtocolConfigRequest
   * @returns SetPolicyProtocolConfigResponse
   */
  async setPolicyProtocolConfig(request: $_model.SetPolicyProtocolConfigRequest): Promise<$_model.SetPolicyProtocolConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPolicyProtocolConfigWithOptions(request, runtime);
  }

  /**
   * Specifies the users to whom a control policy applies.
   * 
   * @param request - SetPolicyUserScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPolicyUserScopeResponse
   */
  async setPolicyUserScopeWithOptions(request: $_model.SetPolicyUserScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPolicyUserScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
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
      action: "SetPolicyUserScope",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPolicyUserScopeResponse>(await this.callApi(params, req, runtime), new $_model.SetPolicyUserScopeResponse({}));
  }

  /**
   * Specifies the users to whom a control policy applies.
   * 
   * @param request - SetPolicyUserScopeRequest
   * @returns SetPolicyUserScopeResponse
   */
  async setPolicyUserScope(request: $_model.SetPolicyUserScopeRequest): Promise<$_model.SetPolicyUserScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPolicyUserScopeWithOptions(request, runtime);
  }

  /**
   * Enables the specified bastion host.
   * 
   * @param request - StartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: $_model.StartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientSecurityGroupIds)) {
      query["ClientSecurityGroupIds"] = request.clientSecurityGroupIds;
    }

    if (!$dara.isNull(request.enablePortalPrivateAccess)) {
      query["EnablePortalPrivateAccess"] = request.enablePortalPrivateAccess;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    if (!$dara.isNull(request.slaveVswitchId)) {
      query["SlaveVswitchId"] = request.slaveVswitchId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstance",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceResponse({}));
  }

  /**
   * Enables the specified bastion host.
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: $_model.StartInstanceRequest): Promise<$_model.StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  /**
   * Creates and adds tags to specified bastion hosts.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2019-12-09",
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
   * Creates and adds tags to specified bastion hosts.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unlocks one or more users of a bastion host.
   * 
   * @remarks
   * After you call the [LockUsers](https://help.aliyun.com/document_detail/204591.html) operation to lock one or more users of a bastion host, you can call this operation to unlock the users. After the users are unlocked, the users can perform O\\&M operations by using the bastion host.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UnlockUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockUsersResponse
   */
  async unlockUsersWithOptions(request: $_model.UnlockUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockUsers",
      version: "2019-12-09",
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
   * Unlocks one or more users of a bastion host.
   * 
   * @remarks
   * After you call the [LockUsers](https://help.aliyun.com/document_detail/204591.html) operation to lock one or more users of a bastion host, you can call this operation to unlock the users. After the users are unlocked, the users can perform O\\&M operations by using the bastion host.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UnlockUsersRequest
   * @returns UnlockUsersResponse
   */
  async unlockUsers(request: $_model.UnlockUsersRequest): Promise<$_model.UnlockUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockUsersWithOptions(request, runtime);
  }

  /**
   * Removes tags from the specified bastion host and deletes the tags at a time.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2019-12-09",
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
   * Removes tags from the specified bastion host and deletes the tags at a time.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * 验证实例AD服务配置
   * 
   * @param request - VerifyInstanceADAuthServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyInstanceADAuthServerResponse
   */
  async verifyInstanceADAuthServerWithOptions(request: $_model.VerifyInstanceADAuthServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyInstanceADAuthServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.baseDN)) {
      query["BaseDN"] = request.baseDN;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isSSL)) {
      query["IsSSL"] = request.isSSL;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.server)) {
      query["Server"] = request.server;
    }

    if (!$dara.isNull(request.standbyServer)) {
      query["StandbyServer"] = request.standbyServer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyInstanceADAuthServer",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyInstanceADAuthServerResponse>(await this.callApi(params, req, runtime), new $_model.VerifyInstanceADAuthServerResponse({}));
  }

  /**
   * 验证实例AD服务配置
   * 
   * @param request - VerifyInstanceADAuthServerRequest
   * @returns VerifyInstanceADAuthServerResponse
   */
  async verifyInstanceADAuthServer(request: $_model.VerifyInstanceADAuthServerRequest): Promise<$_model.VerifyInstanceADAuthServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyInstanceADAuthServerWithOptions(request, runtime);
  }

  /**
   * 验证实例LDAP服务配置
   * 
   * @param request - VerifyInstanceLDAPAuthServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyInstanceLDAPAuthServerResponse
   */
  async verifyInstanceLDAPAuthServerWithOptions(request: $_model.VerifyInstanceLDAPAuthServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyInstanceLDAPAuthServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.baseDN)) {
      query["BaseDN"] = request.baseDN;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isSSL)) {
      query["IsSSL"] = request.isSSL;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.server)) {
      query["Server"] = request.server;
    }

    if (!$dara.isNull(request.standbyServer)) {
      query["StandbyServer"] = request.standbyServer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyInstanceLDAPAuthServer",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyInstanceLDAPAuthServerResponse>(await this.callApi(params, req, runtime), new $_model.VerifyInstanceLDAPAuthServerResponse({}));
  }

  /**
   * 验证实例LDAP服务配置
   * 
   * @param request - VerifyInstanceLDAPAuthServerRequest
   * @returns VerifyInstanceLDAPAuthServerResponse
   */
  async verifyInstanceLDAPAuthServer(request: $_model.VerifyInstanceLDAPAuthServerRequest): Promise<$_model.VerifyInstanceLDAPAuthServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyInstanceLDAPAuthServerWithOptions(request, runtime);
  }

}
