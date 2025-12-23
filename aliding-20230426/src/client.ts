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
    this._endpoint = this.getEndpoint("aliding", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加日程参与者
   * 
   * @param tmpReq - AddAttendeeRequest
   * @param tmpHeader - AddAttendeeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAttendeeResponse
   */
  async addAttendeeWithOptions(tmpReq: $_model.AddAttendeeRequest, tmpHeader: $_model.AddAttendeeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddAttendeeResponse> {
    tmpReq.validate();
    let request = new $_model.AddAttendeeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AddAttendeeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.attendeesToAdd)) {
      request.attendeesToAddShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attendeesToAdd, "AttendeesToAdd", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attendeesToAddShrink)) {
      body["AttendeesToAdd"] = request.attendeesToAddShrink;
    }

    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.eventId)) {
      body["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.chatNotification)) {
      body["chatNotification"] = request.chatNotification;
    }

    if (!$dara.isNull(request.pushNotification)) {
      body["pushNotification"] = request.pushNotification;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAttendee",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/addAttendee`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAttendeeResponse>(await this.callApi(params, req, runtime), new $_model.AddAttendeeResponse({}));
  }

  /**
   * 添加日程参与者
   * 
   * @param request - AddAttendeeRequest
   * @returns AddAttendeeResponse
   */
  async addAttendee(request: $_model.AddAttendeeRequest): Promise<$_model.AddAttendeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddAttendeeHeaders({ });
    return await this.addAttendeeWithOptions(request, headers, runtime);
  }

  /**
   * 新建钉盘空间
   * 
   * @param tmpReq - AddDriveSpaceRequest
   * @param tmpHeader - AddDriveSpaceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDriveSpaceResponse
   */
  async addDriveSpaceWithOptions(tmpReq: $_model.AddDriveSpaceRequest, tmpHeader: $_model.AddDriveSpaceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddDriveSpaceResponse> {
    tmpReq.validate();
    let request = new $_model.AddDriveSpaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AddDriveSpaceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDriveSpace",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/addDriveSpace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDriveSpaceResponse>(await this.callApi(params, req, runtime), new $_model.AddDriveSpaceResponse({}));
  }

  /**
   * 新建钉盘空间
   * 
   * @param request - AddDriveSpaceRequest
   * @returns AddDriveSpaceResponse
   */
  async addDriveSpace(request: $_model.AddDriveSpaceRequest): Promise<$_model.AddDriveSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddDriveSpaceHeaders({ });
    return await this.addDriveSpaceWithOptions(request, headers, runtime);
  }

  /**
   * 添加文件夹
   * 
   * @param tmpReq - AddFolderRequest
   * @param tmpHeader - AddFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFolderResponse
   */
  async addFolderWithOptions(tmpReq: $_model.AddFolderRequest, tmpHeader: $_model.AddFolderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddFolderResponse> {
    tmpReq.validate();
    let request = new $_model.AddFolderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AddFolderShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFolder",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/addFolder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFolderResponse>(await this.callApi(params, req, runtime), new $_model.AddFolderResponse({}));
  }

  /**
   * 添加文件夹
   * 
   * @param request - AddFolderRequest
   * @returns AddFolderResponse
   */
  async addFolder(request: $_model.AddFolderRequest): Promise<$_model.AddFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddFolderHeaders({ });
    return await this.addFolderWithOptions(request, headers, runtime);
  }

  /**
   * 预定会议室
   * 
   * @param tmpReq - AddMeetingRoomsRequest
   * @param tmpHeader - AddMeetingRoomsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMeetingRoomsResponse
   */
  async addMeetingRoomsWithOptions(tmpReq: $_model.AddMeetingRoomsRequest, tmpHeader: $_model.AddMeetingRoomsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddMeetingRoomsResponse> {
    tmpReq.validate();
    let request = new $_model.AddMeetingRoomsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AddMeetingRoomsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.meetingRoomsToAdd)) {
      request.meetingRoomsToAddShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.meetingRoomsToAdd, "MeetingRoomsToAdd", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.eventId)) {
      body["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.meetingRoomsToAddShrink)) {
      body["MeetingRoomsToAdd"] = request.meetingRoomsToAddShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMeetingRooms",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/addMeetingRooms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMeetingRoomsResponse>(await this.callApi(params, req, runtime), new $_model.AddMeetingRoomsResponse({}));
  }

  /**
   * 预定会议室
   * 
   * @param request - AddMeetingRoomsRequest
   * @returns AddMeetingRoomsResponse
   */
  async addMeetingRooms(request: $_model.AddMeetingRoomsRequest): Promise<$_model.AddMeetingRoomsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddMeetingRoomsHeaders({ });
    return await this.addMeetingRoomsWithOptions(request, headers, runtime);
  }

  /**
   * 新增数据表
   * 
   * @param tmpReq - AddMultiDimTableRequest
   * @param tmpHeader - AddMultiDimTableHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMultiDimTableResponse
   */
  async addMultiDimTableWithOptions(tmpReq: $_model.AddMultiDimTableRequest, tmpHeader: $_model.AddMultiDimTableHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddMultiDimTableResponse> {
    tmpReq.validate();
    let request = new $_model.AddMultiDimTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AddMultiDimTableShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.fields)) {
      request.fieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fields, "Fields", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.fieldsShrink)) {
      body["Fields"] = request.fieldsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMultiDimTable",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/addMultiDimTable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMultiDimTableResponse>(await this.callApi(params, req, runtime), new $_model.AddMultiDimTableResponse({}));
  }

  /**
   * 新增数据表
   * 
   * @param request - AddMultiDimTableRequest
   * @returns AddMultiDimTableResponse
   */
  async addMultiDimTable(request: $_model.AddMultiDimTableRequest): Promise<$_model.AddMultiDimTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddMultiDimTableHeaders({ });
    return await this.addMultiDimTableWithOptions(request, headers, runtime);
  }

  /**
   * 添加文件权限
   * 
   * @param tmpReq - AddPermissionRequest
   * @param tmpHeader - AddPermissionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPermissionResponse
   */
  async addPermissionWithOptions(tmpReq: $_model.AddPermissionRequest, tmpHeader: $_model.AddPermissionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddPermissionResponse> {
    tmpReq.validate();
    let request = new $_model.AddPermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AddPermissionShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryUuid)) {
      body["DentryUuid"] = request.dentryUuid;
    }

    if (!$dara.isNull(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.roleId)) {
      body["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddPermission",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/addPermission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPermissionResponse>(await this.callApi(params, req, runtime), new $_model.AddPermissionResponse({}));
  }

  /**
   * 添加文件权限
   * 
   * @param request - AddPermissionRequest
   * @returns AddPermissionResponse
   */
  async addPermission(request: $_model.AddPermissionRequest): Promise<$_model.AddPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddPermissionHeaders({ });
    return await this.addPermissionWithOptions(request, headers, runtime);
  }

  /**
   * 添加闪记权限
   * 
   * @param tmpReq - AddRecordPermissionRequest
   * @param tmpHeader - AddRecordPermissionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRecordPermissionResponse
   */
  async addRecordPermissionWithOptions(tmpReq: $_model.AddRecordPermissionRequest, tmpHeader: $_model.AddRecordPermissionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddRecordPermissionResponse> {
    tmpReq.validate();
    let request = new $_model.AddRecordPermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AddRecordPermissionShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRecordPermission",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/addRecordPermission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRecordPermissionResponse>(await this.callApi(params, req, runtime), new $_model.AddRecordPermissionResponse({}));
  }

  /**
   * 添加闪记权限
   * 
   * @param request - AddRecordPermissionRequest
   * @returns AddRecordPermissionResponse
   */
  async addRecordPermission(request: $_model.AddRecordPermissionRequest): Promise<$_model.AddRecordPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddRecordPermissionHeaders({ });
    return await this.addRecordPermissionWithOptions(request, headers, runtime);
  }

  /**
   * 新增群成员
   * 
   * @param request - AddScenegroupMemberRequest
   * @param tmpHeader - AddScenegroupMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddScenegroupMemberResponse
   */
  async addScenegroupMemberWithOptions(request: $_model.AddScenegroupMemberRequest, tmpHeader: $_model.AddScenegroupMemberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddScenegroupMemberResponse> {
    request.validate();
    let headers = new $_model.AddScenegroupMemberShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openConversationId)) {
      body["OpenConversationId"] = request.openConversationId;
    }

    if (!$dara.isNull(request.userIds)) {
      body["UserIds"] = request.userIds;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddScenegroupMember",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/addScenegroupMember`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddScenegroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.AddScenegroupMemberResponse({}));
  }

  /**
   * 新增群成员
   * 
   * @param request - AddScenegroupMemberRequest
   * @returns AddScenegroupMemberResponse
   */
  async addScenegroupMember(request: $_model.AddScenegroupMemberRequest): Promise<$_model.AddScenegroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddScenegroupMemberHeaders({ });
    return await this.addScenegroupMemberWithOptions(request, headers, runtime);
  }

  /**
   * 工单添加备注
   * 
   * @param tmpReq - AddTicketMemoRequest
   * @param tmpHeader - AddTicketMemoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTicketMemoResponse
   */
  async addTicketMemoWithOptions(tmpReq: $_model.AddTicketMemoRequest, tmpHeader: $_model.AddTicketMemoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddTicketMemoResponse> {
    tmpReq.validate();
    let request = new $_model.AddTicketMemoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AddTicketMemoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.ticketMemo)) {
      request.ticketMemoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ticketMemo, "TicketMemo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openTeamId)) {
      body["OpenTeamId"] = request.openTeamId;
    }

    if (!$dara.isNull(request.openTicketId)) {
      body["OpenTicketId"] = request.openTicketId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.ticketMemoShrink)) {
      body["TicketMemo"] = request.ticketMemoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTicketMemo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ticket/addTicketMemo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTicketMemoResponse>(await this.callApi(params, req, runtime), new $_model.AddTicketMemoResponse({}));
  }

  /**
   * 工单添加备注
   * 
   * @param request - AddTicketMemoRequest
   * @returns AddTicketMemoResponse
   */
  async addTicketMemo(request: $_model.AddTicketMemoRequest): Promise<$_model.AddTicketMemoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddTicketMemoHeaders({ });
    return await this.addTicketMemoWithOptions(request, headers, runtime);
  }

  /**
   * 新建知识库
   * 
   * @param tmpReq - AddWorkspaceRequest
   * @param tmpHeader - AddWorkspaceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWorkspaceResponse
   */
  async addWorkspaceWithOptions(tmpReq: $_model.AddWorkspaceRequest, tmpHeader: $_model.AddWorkspaceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddWorkspaceResponse> {
    tmpReq.validate();
    let request = new $_model.AddWorkspaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AddWorkspaceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddWorkspace",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/addWorkspace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.AddWorkspaceResponse({}));
  }

  /**
   * 新建知识库
   * 
   * @param request - AddWorkspaceRequest
   * @returns AddWorkspaceResponse
   */
  async addWorkspace(request: $_model.AddWorkspaceRequest): Promise<$_model.AddWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddWorkspaceHeaders({ });
    return await this.addWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * 添加知识库文档成员
   * 
   * @param tmpReq - AddWorkspaceDocMembersRequest
   * @param tmpHeader - AddWorkspaceDocMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWorkspaceDocMembersResponse
   */
  async addWorkspaceDocMembersWithOptions(tmpReq: $_model.AddWorkspaceDocMembersRequest, tmpHeader: $_model.AddWorkspaceDocMembersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddWorkspaceDocMembersResponse> {
    tmpReq.validate();
    let request = new $_model.AddWorkspaceDocMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AddWorkspaceDocMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddWorkspaceDocMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/addWorkspaceDocMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddWorkspaceDocMembersResponse>(await this.callApi(params, req, runtime), new $_model.AddWorkspaceDocMembersResponse({}));
  }

  /**
   * 添加知识库文档成员
   * 
   * @param request - AddWorkspaceDocMembersRequest
   * @returns AddWorkspaceDocMembersResponse
   */
  async addWorkspaceDocMembers(request: $_model.AddWorkspaceDocMembersRequest): Promise<$_model.AddWorkspaceDocMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddWorkspaceDocMembersHeaders({ });
    return await this.addWorkspaceDocMembersWithOptions(request, headers, runtime);
  }

  /**
   * 添加知识库成员
   * 
   * @param tmpReq - AddWorkspaceMembersRequest
   * @param tmpHeader - AddWorkspaceMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWorkspaceMembersResponse
   */
  async addWorkspaceMembersWithOptions(tmpReq: $_model.AddWorkspaceMembersRequest, tmpHeader: $_model.AddWorkspaceMembersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AddWorkspaceMembersResponse> {
    tmpReq.validate();
    let request = new $_model.AddWorkspaceMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AddWorkspaceMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddWorkspaceMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/addWorkspaceMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddWorkspaceMembersResponse>(await this.callApi(params, req, runtime), new $_model.AddWorkspaceMembersResponse({}));
  }

  /**
   * 添加知识库成员
   * 
   * @param request - AddWorkspaceMembersRequest
   * @returns AddWorkspaceMembersResponse
   */
  async addWorkspaceMembers(request: $_model.AddWorkspaceMembersRequest): Promise<$_model.AddWorkspaceMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AddWorkspaceMembersHeaders({ });
    return await this.addWorkspaceMembersWithOptions(request, headers, runtime);
  }

  /**
   * 指派工单
   * 
   * @param tmpReq - AssignTicketRequest
   * @param tmpHeader - AssignTicketHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignTicketResponse
   */
  async assignTicketWithOptions(tmpReq: $_model.AssignTicketRequest, tmpHeader: $_model.AssignTicketHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AssignTicketResponse> {
    tmpReq.validate();
    let request = new $_model.AssignTicketShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AssignTicketShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.notify)) {
      request.notifyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notify, "Notify", "json");
    }

    if (!$dara.isNull(tmpReq.processorUserIds)) {
      request.processorUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.processorUserIds, "ProcessorUserIds", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.ticketMemo)) {
      request.ticketMemoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ticketMemo, "TicketMemo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.notifyShrink)) {
      body["Notify"] = request.notifyShrink;
    }

    if (!$dara.isNull(request.openTeamId)) {
      body["OpenTeamId"] = request.openTeamId;
    }

    if (!$dara.isNull(request.openTicketId)) {
      body["OpenTicketId"] = request.openTicketId;
    }

    if (!$dara.isNull(request.processorUserIdsShrink)) {
      body["ProcessorUserIds"] = request.processorUserIdsShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.ticketMemoShrink)) {
      body["TicketMemo"] = request.ticketMemoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignTicket",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ticket/assignTicket`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignTicketResponse>(await this.callApi(params, req, runtime), new $_model.AssignTicketResponse({}));
  }

  /**
   * 指派工单
   * 
   * @param request - AssignTicketRequest
   * @returns AssignTicketResponse
   */
  async assignTicket(request: $_model.AssignTicketRequest): Promise<$_model.AssignTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AssignTicketHeaders({ });
    return await this.assignTicketWithOptions(request, headers, runtime);
  }

  /**
   * 校验AI技能调用权限
   * 
   * @param tmpReq - AuthorizeSkillRequest
   * @param tmpHeader - AuthorizeSkillHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeSkillResponse
   */
  async authorizeSkillWithOptions(tmpReq: $_model.AuthorizeSkillRequest, tmpHeader: $_model.AuthorizeSkillHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeSkillResponse> {
    tmpReq.validate();
    let request = new $_model.AuthorizeSkillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.AuthorizeSkillShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.permissionCodes)) {
      request.permissionCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permissionCodes, "PermissionCodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.permissionCodesShrink)) {
      body["PermissionCodes"] = request.permissionCodesShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeSkill",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/skill/authorizeSkill`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeSkillResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeSkillResponse({}));
  }

  /**
   * 校验AI技能调用权限
   * 
   * @param request - AuthorizeSkillRequest
   * @returns AuthorizeSkillResponse
   */
  async authorizeSkill(request: $_model.AuthorizeSkillRequest): Promise<$_model.AuthorizeSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AuthorizeSkillHeaders({ });
    return await this.authorizeSkillWithOptions(request, headers, runtime);
  }

  /**
   * 批量获取表单实例数据
   * 
   * @param tmpReq - BatchGetFormDataByIdListRequest
   * @param tmpHeader - BatchGetFormDataByIdListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetFormDataByIdListResponse
   */
  async batchGetFormDataByIdListWithOptions(tmpReq: $_model.BatchGetFormDataByIdListRequest, tmpHeader: $_model.BatchGetFormDataByIdListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetFormDataByIdListResponse> {
    tmpReq.validate();
    let request = new $_model.BatchGetFormDataByIdListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.BatchGetFormDataByIdListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.formInstanceIdList)) {
      request.formInstanceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.formInstanceIdList, "FormInstanceIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formInstanceIdListShrink)) {
      body["FormInstanceIdList"] = request.formInstanceIdListShrink;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.needFormInstanceValue)) {
      body["NeedFormInstanceValue"] = request.needFormInstanceValue;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetFormDataByIdList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/batchGetFormDataByIdList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetFormDataByIdListResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetFormDataByIdListResponse({}));
  }

  /**
   * 批量获取表单实例数据
   * 
   * @param request - BatchGetFormDataByIdListRequest
   * @returns BatchGetFormDataByIdListResponse
   */
  async batchGetFormDataByIdList(request: $_model.BatchGetFormDataByIdListRequest): Promise<$_model.BatchGetFormDataByIdListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.BatchGetFormDataByIdListHeaders({ });
    return await this.batchGetFormDataByIdListWithOptions(request, headers, runtime);
  }

  /**
   * 批量删除表单实例
   * 
   * @param tmpReq - BatchRemovalByFormInstanceIdListRequest
   * @param tmpHeader - BatchRemovalByFormInstanceIdListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchRemovalByFormInstanceIdListResponse
   */
  async batchRemovalByFormInstanceIdListWithOptions(tmpReq: $_model.BatchRemovalByFormInstanceIdListRequest, tmpHeader: $_model.BatchRemovalByFormInstanceIdListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.BatchRemovalByFormInstanceIdListResponse> {
    tmpReq.validate();
    let request = new $_model.BatchRemovalByFormInstanceIdListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.BatchRemovalByFormInstanceIdListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.formInstanceIdList)) {
      request.formInstanceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.formInstanceIdList, "FormInstanceIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.asynchronousExecution)) {
      body["AsynchronousExecution"] = request.asynchronousExecution;
    }

    if (!$dara.isNull(request.executeExpression)) {
      body["ExecuteExpression"] = request.executeExpression;
    }

    if (!$dara.isNull(request.formInstanceIdListShrink)) {
      body["FormInstanceIdList"] = request.formInstanceIdListShrink;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchRemovalByFormInstanceIdList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/batchRemovalByFormInstanceIdList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchRemovalByFormInstanceIdListResponse>(await this.callApi(params, req, runtime), new $_model.BatchRemovalByFormInstanceIdListResponse({}));
  }

  /**
   * 批量删除表单实例
   * 
   * @param request - BatchRemovalByFormInstanceIdListRequest
   * @returns BatchRemovalByFormInstanceIdListResponse
   */
  async batchRemovalByFormInstanceIdList(request: $_model.BatchRemovalByFormInstanceIdListRequest): Promise<$_model.BatchRemovalByFormInstanceIdListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.BatchRemovalByFormInstanceIdListHeaders({ });
    return await this.batchRemovalByFormInstanceIdListWithOptions(request, headers, runtime);
  }

  /**
   * 批量创建表单实例
   * 
   * @param tmpReq - BatchSaveFormDataRequest
   * @param tmpHeader - BatchSaveFormDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSaveFormDataResponse
   */
  async batchSaveFormDataWithOptions(tmpReq: $_model.BatchSaveFormDataRequest, tmpHeader: $_model.BatchSaveFormDataHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSaveFormDataResponse> {
    tmpReq.validate();
    let request = new $_model.BatchSaveFormDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.BatchSaveFormDataShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.formDataJsonList)) {
      request.formDataJsonListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.formDataJsonList, "FormDataJsonList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.asynchronousExecution)) {
      body["AsynchronousExecution"] = request.asynchronousExecution;
    }

    if (!$dara.isNull(request.formDataJsonListShrink)) {
      body["FormDataJsonList"] = request.formDataJsonListShrink;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.keepRunningAfterException)) {
      body["KeepRunningAfterException"] = request.keepRunningAfterException;
    }

    if (!$dara.isNull(request.noExecuteExpression)) {
      body["NoExecuteExpression"] = request.noExecuteExpression;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSaveFormData",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/batchSaveFormData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSaveFormDataResponse>(await this.callApi(params, req, runtime), new $_model.BatchSaveFormDataResponse({}));
  }

  /**
   * 批量创建表单实例
   * 
   * @param request - BatchSaveFormDataRequest
   * @returns BatchSaveFormDataResponse
   */
  async batchSaveFormData(request: $_model.BatchSaveFormDataRequest): Promise<$_model.BatchSaveFormDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.BatchSaveFormDataHeaders({ });
    return await this.batchSaveFormDataWithOptions(request, headers, runtime);
  }

  /**
   * 批量更新表单实例内的组件值
   * 
   * @param tmpReq - BatchUpdateFormDataByInstanceIdRequest
   * @param tmpHeader - BatchUpdateFormDataByInstanceIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateFormDataByInstanceIdResponse
   */
  async batchUpdateFormDataByInstanceIdWithOptions(tmpReq: $_model.BatchUpdateFormDataByInstanceIdRequest, tmpHeader: $_model.BatchUpdateFormDataByInstanceIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateFormDataByInstanceIdResponse> {
    tmpReq.validate();
    let request = new $_model.BatchUpdateFormDataByInstanceIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.BatchUpdateFormDataByInstanceIdShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.formInstanceIdList)) {
      request.formInstanceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.formInstanceIdList, "FormInstanceIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.asynchronousExecution)) {
      body["AsynchronousExecution"] = request.asynchronousExecution;
    }

    if (!$dara.isNull(request.formInstanceIdListShrink)) {
      body["FormInstanceIdList"] = request.formInstanceIdListShrink;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.ignoreEmpty)) {
      body["IgnoreEmpty"] = request.ignoreEmpty;
    }

    if (!$dara.isNull(request.noExecuteExpression)) {
      body["NoExecuteExpression"] = request.noExecuteExpression;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.updateFormDataJson)) {
      body["UpdateFormDataJson"] = request.updateFormDataJson;
    }

    if (!$dara.isNull(request.useLatestFormSchemaVersion)) {
      body["UseLatestFormSchemaVersion"] = request.useLatestFormSchemaVersion;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateFormDataByInstanceId",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/batchUpdateFormDataByInstanceId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateFormDataByInstanceIdResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateFormDataByInstanceIdResponse({}));
  }

  /**
   * 批量更新表单实例内的组件值
   * 
   * @param request - BatchUpdateFormDataByInstanceIdRequest
   * @returns BatchUpdateFormDataByInstanceIdResponse
   */
  async batchUpdateFormDataByInstanceId(request: $_model.BatchUpdateFormDataByInstanceIdRequest): Promise<$_model.BatchUpdateFormDataByInstanceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.BatchUpdateFormDataByInstanceIdHeaders({ });
    return await this.batchUpdateFormDataByInstanceIdWithOptions(request, headers, runtime);
  }

  /**
   * 通过表单实例数据批量更新表单实例
   * 
   * @param tmpReq - BatchUpdateFormDataByInstanceMapRequest
   * @param tmpHeader - BatchUpdateFormDataByInstanceMapHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateFormDataByInstanceMapResponse
   */
  async batchUpdateFormDataByInstanceMapWithOptions(tmpReq: $_model.BatchUpdateFormDataByInstanceMapRequest, tmpHeader: $_model.BatchUpdateFormDataByInstanceMapHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateFormDataByInstanceMapResponse> {
    tmpReq.validate();
    let request = new $_model.BatchUpdateFormDataByInstanceMapShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.BatchUpdateFormDataByInstanceMapShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.updateFormDataJsonMap)) {
      request.updateFormDataJsonMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateFormDataJsonMap, "UpdateFormDataJsonMap", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.asynchronousExecution)) {
      body["AsynchronousExecution"] = request.asynchronousExecution;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.ignoreEmpty)) {
      body["IgnoreEmpty"] = request.ignoreEmpty;
    }

    if (!$dara.isNull(request.noExecuteExpression)) {
      body["NoExecuteExpression"] = request.noExecuteExpression;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.updateFormDataJsonMapShrink)) {
      body["UpdateFormDataJsonMap"] = request.updateFormDataJsonMapShrink;
    }

    if (!$dara.isNull(request.useLatestFormSchemaVersion)) {
      body["UseLatestFormSchemaVersion"] = request.useLatestFormSchemaVersion;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateFormDataByInstanceMap",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/batchUpdateFormDataByInstanceMap`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateFormDataByInstanceMapResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateFormDataByInstanceMapResponse({}));
  }

  /**
   * 通过表单实例数据批量更新表单实例
   * 
   * @param request - BatchUpdateFormDataByInstanceMapRequest
   * @returns BatchUpdateFormDataByInstanceMapResponse
   */
  async batchUpdateFormDataByInstanceMap(request: $_model.BatchUpdateFormDataByInstanceMapRequest): Promise<$_model.BatchUpdateFormDataByInstanceMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.BatchUpdateFormDataByInstanceMapHeaders({ });
    return await this.batchUpdateFormDataByInstanceMapWithOptions(request, headers, runtime);
  }

  /**
   * 取消预约会议
   * 
   * @param tmpReq - CancelScheduleConferenceRequest
   * @param tmpHeader - CancelScheduleConferenceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelScheduleConferenceResponse
   */
  async cancelScheduleConferenceWithOptions(tmpReq: $_model.CancelScheduleConferenceRequest, tmpHeader: $_model.CancelScheduleConferenceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CancelScheduleConferenceResponse> {
    tmpReq.validate();
    let request = new $_model.CancelScheduleConferenceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CancelScheduleConferenceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scheduleConferenceId)) {
      body["ScheduleConferenceId"] = request.scheduleConferenceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelScheduleConference",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/cancelScheduleConference`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelScheduleConferenceResponse>(await this.callApi(params, req, runtime), new $_model.CancelScheduleConferenceResponse({}));
  }

  /**
   * 取消预约会议
   * 
   * @param request - CancelScheduleConferenceRequest
   * @returns CancelScheduleConferenceResponse
   */
  async cancelScheduleConference(request: $_model.CancelScheduleConferenceRequest): Promise<$_model.CancelScheduleConferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CancelScheduleConferenceHeaders({ });
    return await this.cancelScheduleConferenceWithOptions(request, headers, runtime);
  }

  /**
   * 修改阿里钉号
   * 
   * @param tmpReq - ChangeDingTalkIdRequest
   * @param tmpHeader - ChangeDingTalkIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeDingTalkIdResponse
   */
  async changeDingTalkIdWithOptions(tmpReq: $_model.ChangeDingTalkIdRequest, tmpHeader: $_model.ChangeDingTalkIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeDingTalkIdResponse> {
    tmpReq.validate();
    let request = new $_model.ChangeDingTalkIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ChangeDingTalkIdShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dingTalkId)) {
      body["DingTalkId"] = request.dingTalkId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeDingTalkId",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/user/changeDingTalkId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeDingTalkIdResponse>(await this.callApi(params, req, runtime), new $_model.ChangeDingTalkIdResponse({}));
  }

  /**
   * 修改阿里钉号
   * 
   * @param request - ChangeDingTalkIdRequest
   * @returns ChangeDingTalkIdResponse
   */
  async changeDingTalkId(request: $_model.ChangeDingTalkIdRequest): Promise<$_model.ChangeDingTalkIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ChangeDingTalkIdHeaders({ });
    return await this.changeDingTalkIdWithOptions(request, headers, runtime);
  }

  /**
   * 校验阿里员工
   * 
   * @param tmpReq - CheckAlibabaStaffRequest
   * @param tmpHeader - CheckAlibabaStaffHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAlibabaStaffResponse
   */
  async checkAlibabaStaffWithOptions(tmpReq: $_model.CheckAlibabaStaffRequest, tmpHeader: $_model.CheckAlibabaStaffHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAlibabaStaffResponse> {
    tmpReq.validate();
    let request = new $_model.CheckAlibabaStaffShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CheckAlibabaStaffShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAlibabaStaff",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/checkAlibabaStaff`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAlibabaStaffResponse>(await this.callApi(params, req, runtime), new $_model.CheckAlibabaStaffResponse({}));
  }

  /**
   * 校验阿里员工
   * 
   * @param request - CheckAlibabaStaffRequest
   * @returns CheckAlibabaStaffResponse
   */
  async checkAlibabaStaff(request: $_model.CheckAlibabaStaffRequest): Promise<$_model.CheckAlibabaStaffResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CheckAlibabaStaffHeaders({ });
    return await this.checkAlibabaStaffWithOptions(request, headers, runtime);
  }

  /**
   * 查询用户是否为企业内部群成员
   * 
   * @param request - CheckUserIsGroupMemberRequest
   * @param tmpHeader - CheckUserIsGroupMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUserIsGroupMemberResponse
   */
  async checkUserIsGroupMemberWithOptions(request: $_model.CheckUserIsGroupMemberRequest, tmpHeader: $_model.CheckUserIsGroupMemberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUserIsGroupMemberResponse> {
    request.validate();
    let headers = new $_model.CheckUserIsGroupMemberShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openConversationId)) {
      body["OpenConversationId"] = request.openConversationId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckUserIsGroupMember",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/checkUserIsGroupMember`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckUserIsGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.CheckUserIsGroupMemberResponse({}));
  }

  /**
   * 查询用户是否为企业内部群成员
   * 
   * @param request - CheckUserIsGroupMemberRequest
   * @returns CheckUserIsGroupMemberResponse
   */
  async checkUserIsGroupMember(request: $_model.CheckUserIsGroupMemberRequest): Promise<$_model.CheckUserIsGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CheckUserIsGroupMemberHeaders({ });
    return await this.checkUserIsGroupMemberWithOptions(request, headers, runtime);
  }

  /**
   * 清除单元格所有内容
   * 
   * @param tmpReq - ClearRequest
   * @param tmpHeader - ClearHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearResponse
   */
  async clearWithOptions(tmpReq: $_model.ClearRequest, tmpHeader: $_model.ClearHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ClearResponse> {
    tmpReq.validate();
    let request = new $_model.ClearShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ClearShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rangeAddress)) {
      body["RangeAddress"] = request.rangeAddress;
    }

    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Clear",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/clear`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearResponse>(await this.callApi(params, req, runtime), new $_model.ClearResponse({}));
  }

  /**
   * 清除单元格所有内容
   * 
   * @param request - ClearRequest
   * @returns ClearResponse
   */
  async clear(request: $_model.ClearRequest): Promise<$_model.ClearResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ClearHeaders({ });
    return await this.clearWithOptions(request, headers, runtime);
  }

  /**
   * 清除单元格数据
   * 
   * @param tmpReq - ClearDataRequest
   * @param tmpHeader - ClearDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearDataResponse
   */
  async clearDataWithOptions(tmpReq: $_model.ClearDataRequest, tmpHeader: $_model.ClearDataHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ClearDataResponse> {
    tmpReq.validate();
    let request = new $_model.ClearDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ClearDataShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rangeAddress)) {
      body["RangeAddress"] = request.rangeAddress;
    }

    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearData",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/clearData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearDataResponse>(await this.callApi(params, req, runtime), new $_model.ClearDataResponse({}));
  }

  /**
   * 清除单元格数据
   * 
   * @param request - ClearDataRequest
   * @returns ClearDataResponse
   */
  async clearData(request: $_model.ClearDataRequest): Promise<$_model.ClearDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ClearDataHeaders({ });
    return await this.clearDataWithOptions(request, headers, runtime);
  }

  /**
   * 关闭视频会议
   * 
   * @param tmpReq - CloseVideoConferenceRequest
   * @param tmpHeader - CloseVideoConferenceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseVideoConferenceResponse
   */
  async closeVideoConferenceWithOptions(tmpReq: $_model.CloseVideoConferenceRequest, tmpHeader: $_model.CloseVideoConferenceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CloseVideoConferenceResponse> {
    tmpReq.validate();
    let request = new $_model.CloseVideoConferenceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CloseVideoConferenceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseVideoConference",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/closeVideoConference`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseVideoConferenceResponse>(await this.callApi(params, req, runtime), new $_model.CloseVideoConferenceResponse({}));
  }

  /**
   * 关闭视频会议
   * 
   * @param request - CloseVideoConferenceRequest
   * @returns CloseVideoConferenceResponse
   */
  async closeVideoConference(request: $_model.CloseVideoConferenceRequest): Promise<$_model.CloseVideoConferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CloseVideoConferenceHeaders({ });
    return await this.closeVideoConferenceWithOptions(request, headers, runtime);
  }

  /**
   * 获取日志评论列表
   * 
   * @param tmpReq - CommentListReportRequest
   * @param tmpHeader - CommentListReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommentListReportResponse
   */
  async commentListReportWithOptions(tmpReq: $_model.CommentListReportRequest, tmpHeader: $_model.CommentListReportHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CommentListReportResponse> {
    tmpReq.validate();
    let request = new $_model.CommentListReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CommentListReportShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.offset)) {
      body["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.reportId)) {
      body["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CommentListReport",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/commentListReport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CommentListReportResponse>(await this.callApi(params, req, runtime), new $_model.CommentListReportResponse({}));
  }

  /**
   * 获取日志评论列表
   * 
   * @param request - CommentListReportRequest
   * @returns CommentListReportResponse
   */
  async commentListReport(request: $_model.CommentListReportRequest): Promise<$_model.CommentListReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CommentListReportHeaders({ });
    return await this.commentListReportWithOptions(request, headers, runtime);
  }

  /**
   * 提交文件
   * 
   * @param tmpReq - CommitFileRequest
   * @param tmpHeader - CommitFileHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommitFileResponse
   */
  async commitFileWithOptions(tmpReq: $_model.CommitFileRequest, tmpHeader: $_model.CommitFileHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CommitFileResponse> {
    tmpReq.validate();
    let request = new $_model.CommitFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CommitFileShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.parentDentryUuid)) {
      body["ParentDentryUuid"] = request.parentDentryUuid;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.uploadKey)) {
      body["UploadKey"] = request.uploadKey;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CommitFile",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/commitFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CommitFileResponse>(await this.callApi(params, req, runtime), new $_model.CommitFileResponse({}));
  }

  /**
   * 提交文件
   * 
   * @param request - CommitFileRequest
   * @returns CommitFileResponse
   */
  async commitFile(request: $_model.CommitFileRequest): Promise<$_model.CommitFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CommitFileHeaders({ });
    return await this.commitFileWithOptions(request, headers, runtime);
  }

  /**
   * 创建知识库节点副本
   * 
   * @param tmpReq - CopyDentryRequest
   * @param tmpHeader - CopyDentryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyDentryResponse
   */
  async copyDentryWithOptions(tmpReq: $_model.CopyDentryRequest, tmpHeader: $_model.CopyDentryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CopyDentryResponse> {
    tmpReq.validate();
    let request = new $_model.CopyDentryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CopyDentryShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryId)) {
      body["DentryId"] = request.dentryId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!$dara.isNull(request.targetSpaceId)) {
      body["TargetSpaceId"] = request.targetSpaceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.toNextDentryId)) {
      body["ToNextDentryId"] = request.toNextDentryId;
    }

    if (!$dara.isNull(request.toParentDentryId)) {
      body["ToParentDentryId"] = request.toParentDentryId;
    }

    if (!$dara.isNull(request.toPrevDentryId)) {
      body["ToPrevDentryId"] = request.toPrevDentryId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyDentry",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/copyDentry`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyDentryResponse>(await this.callApi(params, req, runtime), new $_model.CopyDentryResponse({}));
  }

  /**
   * 创建知识库节点副本
   * 
   * @param request - CopyDentryRequest
   * @returns CopyDentryResponse
   */
  async copyDentry(request: $_model.CopyDentryRequest): Promise<$_model.CopyDentryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CopyDentryHeaders({ });
    return await this.copyDentryWithOptions(request, headers, runtime);
  }

  /**
   * 通过NodeId创建知识库节点副本
   * 
   * @param tmpReq - CopyDentryByNodeIdRequest
   * @param tmpHeader - CopyDentryByNodeIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyDentryByNodeIdResponse
   */
  async copyDentryByNodeIdWithOptions(tmpReq: $_model.CopyDentryByNodeIdRequest, tmpHeader: $_model.CopyDentryByNodeIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CopyDentryByNodeIdResponse> {
    tmpReq.validate();
    let request = new $_model.CopyDentryByNodeIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CopyDentryByNodeIdShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryUuid)) {
      body["DentryUuid"] = request.dentryUuid;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.toNextNodeId)) {
      body["ToNextNodeId"] = request.toNextNodeId;
    }

    if (!$dara.isNull(request.toParentNodeId)) {
      body["ToParentNodeId"] = request.toParentNodeId;
    }

    if (!$dara.isNull(request.toPrevNodeId)) {
      body["ToPrevNodeId"] = request.toPrevNodeId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyDentryByNodeId",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/copyDentryByNodeId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyDentryByNodeIdResponse>(await this.callApi(params, req, runtime), new $_model.CopyDentryByNodeIdResponse({}));
  }

  /**
   * 通过NodeId创建知识库节点副本
   * 
   * @param request - CopyDentryByNodeIdRequest
   * @returns CopyDentryByNodeIdResponse
   */
  async copyDentryByNodeId(request: $_model.CopyDentryByNodeIdRequest): Promise<$_model.CopyDentryByNodeIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CopyDentryByNodeIdHeaders({ });
    return await this.copyDentryByNodeIdWithOptions(request, headers, runtime);
  }

  /**
   * @param tmpReq - CreateAlidingAssistantRequest
   * @param tmpHeader - CreateAlidingAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlidingAssistantResponse
   */
  async createAlidingAssistantWithOptions(tmpReq: $_model.CreateAlidingAssistantRequest, tmpHeader: $_model.CreateAlidingAssistantHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlidingAssistantResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAlidingAssistantShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateAlidingAssistantShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "Ext", "json");
    }

    if (!$dara.isNull(tmpReq.recommendPrompts)) {
      request.recommendPromptsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recommendPrompts, "RecommendPrompts", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appCode)) {
      body["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.extShrink)) {
      body["Ext"] = request.extShrink;
    }

    if (!$dara.isNull(request.icon)) {
      body["Icon"] = request.icon;
    }

    if (!$dara.isNull(request.instructions)) {
      body["Instructions"] = request.instructions;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.recommendPromptsShrink)) {
      body["RecommendPrompts"] = request.recommendPromptsShrink;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceIdentityId)) {
      body["SourceIdentityId"] = request.sourceIdentityId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.welcomeContent)) {
      body["WelcomeContent"] = request.welcomeContent;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlidingAssistant",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/aiagent/createAlidingAssistant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlidingAssistantResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlidingAssistantResponse({}));
  }

  /**
   * @param request - CreateAlidingAssistantRequest
   * @returns CreateAlidingAssistantResponse
   */
  async createAlidingAssistant(request: $_model.CreateAlidingAssistantRequest): Promise<$_model.CreateAlidingAssistantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateAlidingAssistantHeaders({ });
    return await this.createAlidingAssistantWithOptions(request, headers, runtime);
  }

  /**
   * 发布钉钉投放活动
   * 
   * @param tmpReq - CreateDeliveryPlanRequest
   * @param tmpHeader - CreateDeliveryPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeliveryPlanResponse
   */
  async createDeliveryPlanWithOptions(tmpReq: $_model.CreateDeliveryPlanRequest, tmpHeader: $_model.CreateDeliveryPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeliveryPlanResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDeliveryPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateDeliveryPlanShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.userIdList)) {
      request.userIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIdList, "UserIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentShrink)) {
      body["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resId)) {
      body["ResId"] = request.resId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.userIdListShrink)) {
      body["UserIdList"] = request.userIdListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeliveryPlan",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/watt/createDeliveryPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeliveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateDeliveryPlanResponse({}));
  }

  /**
   * 发布钉钉投放活动
   * 
   * @param request - CreateDeliveryPlanRequest
   * @returns CreateDeliveryPlanResponse
   */
  async createDeliveryPlan(request: $_model.CreateDeliveryPlanRequest): Promise<$_model.CreateDeliveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateDeliveryPlanHeaders({ });
    return await this.createDeliveryPlanWithOptions(request, headers, runtime);
  }

  /**
   * 委托权限创建钉钉个人待办
   * 
   * @param tmpReq - CreateDingtalkPersonalTodoTaskRequest
   * @param tmpHeader - CreateDingtalkPersonalTodoTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDingtalkPersonalTodoTaskResponse
   */
  async createDingtalkPersonalTodoTaskWithOptions(tmpReq: $_model.CreateDingtalkPersonalTodoTaskRequest, tmpHeader: $_model.CreateDingtalkPersonalTodoTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDingtalkPersonalTodoTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDingtalkPersonalTodoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateDingtalkPersonalTodoTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.executorIds)) {
      request.executorIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executorIds, "ExecutorIds", "json");
    }

    if (!$dara.isNull(tmpReq.notifyConfigs)) {
      request.notifyConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifyConfigs, "NotifyConfigs", "json");
    }

    if (!$dara.isNull(tmpReq.participantIds)) {
      request.participantIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.participantIds, "ParticipantIds", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dueTime)) {
      body["DueTime"] = request.dueTime;
    }

    if (!$dara.isNull(request.executorIdsShrink)) {
      body["ExecutorIds"] = request.executorIdsShrink;
    }

    if (!$dara.isNull(request.notifyConfigsShrink)) {
      body["NotifyConfigs"] = request.notifyConfigsShrink;
    }

    if (!$dara.isNull(request.participantIdsShrink)) {
      body["ParticipantIds"] = request.participantIdsShrink;
    }

    if (!$dara.isNull(request.subject)) {
      body["Subject"] = request.subject;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.userToken)) {
      body["UserToken"] = request.userToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDingtalkPersonalTodoTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/createDingtalkPersonalTodoTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDingtalkPersonalTodoTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDingtalkPersonalTodoTaskResponse({}));
  }

  /**
   * 委托权限创建钉钉个人待办
   * 
   * @param request - CreateDingtalkPersonalTodoTaskRequest
   * @returns CreateDingtalkPersonalTodoTaskResponse
   */
  async createDingtalkPersonalTodoTask(request: $_model.CreateDingtalkPersonalTodoTaskRequest): Promise<$_model.CreateDingtalkPersonalTodoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateDingtalkPersonalTodoTaskHeaders({ });
    return await this.createDingtalkPersonalTodoTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建日程
   * 
   * @param tmpReq - CreateEventRequest
   * @param tmpHeader - CreateEventHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEventResponse
   */
  async createEventWithOptions(tmpReq: $_model.CreateEventRequest, tmpHeader: $_model.CreateEventHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEventResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEventShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateEventShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.attendees)) {
      request.attendeesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attendees, "Attendees", "json");
    }

    if (!$dara.isNull(tmpReq.cardInstances)) {
      request.cardInstancesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cardInstances, "CardInstances", "json");
    }

    if (!$dara.isNull(tmpReq.end)) {
      request.endShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.end, "End", "json");
    }

    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    if (!$dara.isNull(tmpReq.location)) {
      request.locationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.location, "Location", "json");
    }

    if (!$dara.isNull(tmpReq.onlineMeetingInfo)) {
      request.onlineMeetingInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.onlineMeetingInfo, "OnlineMeetingInfo", "json");
    }

    if (!$dara.isNull(tmpReq.recurrence)) {
      request.recurrenceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recurrence, "Recurrence", "json");
    }

    if (!$dara.isNull(tmpReq.reminders)) {
      request.remindersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reminders, "Reminders", "json");
    }

    if (!$dara.isNull(tmpReq.richTextDescription)) {
      request.richTextDescriptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.richTextDescription, "RichTextDescription", "json");
    }

    if (!$dara.isNull(tmpReq.uiConfigs)) {
      request.uiConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.uiConfigs, "UiConfigs", "json");
    }

    if (!$dara.isNull(tmpReq.start)) {
      request.startShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.start, "start", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attendeesShrink)) {
      body["Attendees"] = request.attendeesShrink;
    }

    if (!$dara.isNull(request.cardInstancesShrink)) {
      body["CardInstances"] = request.cardInstancesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.endShrink)) {
      body["End"] = request.endShrink;
    }

    if (!$dara.isNull(request.extraShrink)) {
      body["Extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.isAllDay)) {
      body["IsAllDay"] = request.isAllDay;
    }

    if (!$dara.isNull(request.locationShrink)) {
      body["Location"] = request.locationShrink;
    }

    if (!$dara.isNull(request.onlineMeetingInfoShrink)) {
      body["OnlineMeetingInfo"] = request.onlineMeetingInfoShrink;
    }

    if (!$dara.isNull(request.recurrenceShrink)) {
      body["Recurrence"] = request.recurrenceShrink;
    }

    if (!$dara.isNull(request.remindersShrink)) {
      body["Reminders"] = request.remindersShrink;
    }

    if (!$dara.isNull(request.richTextDescriptionShrink)) {
      body["RichTextDescription"] = request.richTextDescriptionShrink;
    }

    if (!$dara.isNull(request.summary)) {
      body["Summary"] = request.summary;
    }

    if (!$dara.isNull(request.uiConfigsShrink)) {
      body["UiConfigs"] = request.uiConfigsShrink;
    }

    if (!$dara.isNull(request.calendarId)) {
      body["calendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.startShrink)) {
      body["start"] = request.startShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEvent",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/createEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEventResponse>(await this.callApi(params, req, runtime), new $_model.CreateEventResponse({}));
  }

  /**
   * 创建日程
   * 
   * @param request - CreateEventRequest
   * @returns CreateEventResponse
   */
  async createEvent(request: $_model.CreateEventRequest): Promise<$_model.CreateEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateEventHeaders({ });
    return await this.createEventWithOptions(request, headers, runtime);
  }

  /**
   * 创建直播
   * 
   * @param tmpReq - CreateLiveRequest
   * @param tmpHeader - CreateLiveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLiveResponse
   */
  async createLiveWithOptions(tmpReq: $_model.CreateLiveRequest, tmpHeader: $_model.CreateLiveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLiveResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLiveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateLiveShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coverUrl)) {
      body["CoverUrl"] = request.coverUrl;
    }

    if (!$dara.isNull(request.introduction)) {
      body["Introduction"] = request.introduction;
    }

    if (!$dara.isNull(request.preEndTime)) {
      body["PreEndTime"] = request.preEndTime;
    }

    if (!$dara.isNull(request.preStartTime)) {
      body["PreStartTime"] = request.preStartTime;
    }

    if (!$dara.isNull(request.publicType)) {
      body["PublicType"] = request.publicType;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLive",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/createLive`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLiveResponse>(await this.callApi(params, req, runtime), new $_model.CreateLiveResponse({}));
  }

  /**
   * 创建直播
   * 
   * @param request - CreateLiveRequest
   * @returns CreateLiveResponse
   */
  async createLive(request: $_model.CreateLiveRequest): Promise<$_model.CreateLiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateLiveHeaders({ });
    return await this.createLiveWithOptions(request, headers, runtime);
  }

  /**
   * 创建会议室
   * 
   * @param tmpReq - CreateMeetingRoomRequest
   * @param tmpHeader - CreateMeetingRoomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMeetingRoomResponse
   */
  async createMeetingRoomWithOptions(tmpReq: $_model.CreateMeetingRoomRequest, tmpHeader: $_model.CreateMeetingRoomHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMeetingRoomResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMeetingRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateMeetingRoomShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.reservationAuthority)) {
      request.reservationAuthorityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reservationAuthority, "ReservationAuthority", "json");
    }

    if (!$dara.isNull(tmpReq.roomLabelIds)) {
      request.roomLabelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomLabelIds, "RoomLabelIds", "json");
    }

    if (!$dara.isNull(tmpReq.roomLocation)) {
      request.roomLocationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomLocation, "RoomLocation", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableCycleReservation)) {
      body["EnableCycleReservation"] = request.enableCycleReservation;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.isvRoomId)) {
      body["IsvRoomId"] = request.isvRoomId;
    }

    if (!$dara.isNull(request.reservationAuthorityShrink)) {
      body["ReservationAuthority"] = request.reservationAuthorityShrink;
    }

    if (!$dara.isNull(request.roomCapacity)) {
      body["RoomCapacity"] = request.roomCapacity;
    }

    if (!$dara.isNull(request.roomLabelIdsShrink)) {
      body["RoomLabelIds"] = request.roomLabelIdsShrink;
    }

    if (!$dara.isNull(request.roomLocationShrink)) {
      body["RoomLocation"] = request.roomLocationShrink;
    }

    if (!$dara.isNull(request.roomName)) {
      body["RoomName"] = request.roomName;
    }

    if (!$dara.isNull(request.roomPicture)) {
      body["RoomPicture"] = request.roomPicture;
    }

    if (!$dara.isNull(request.roomStatus)) {
      body["RoomStatus"] = request.roomStatus;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMeetingRoom",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/createMeetingRoom`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMeetingRoomResponse>(await this.callApi(params, req, runtime), new $_model.CreateMeetingRoomResponse({}));
  }

  /**
   * 创建会议室
   * 
   * @param request - CreateMeetingRoomRequest
   * @returns CreateMeetingRoomResponse
   */
  async createMeetingRoom(request: $_model.CreateMeetingRoomRequest): Promise<$_model.CreateMeetingRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateMeetingRoomHeaders({ });
    return await this.createMeetingRoomWithOptions(request, headers, runtime);
  }

  /**
   * 创建会议室分组
   * 
   * @param tmpReq - CreateMeetingRoomGroupRequest
   * @param tmpHeader - CreateMeetingRoomGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMeetingRoomGroupResponse
   */
  async createMeetingRoomGroupWithOptions(tmpReq: $_model.CreateMeetingRoomGroupRequest, tmpHeader: $_model.CreateMeetingRoomGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMeetingRoomGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMeetingRoomGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateMeetingRoomGroupShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.parentGroupId)) {
      body["ParentGroupId"] = request.parentGroupId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMeetingRoomGroup",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/createMeetingRoomGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMeetingRoomGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateMeetingRoomGroupResponse({}));
  }

  /**
   * 创建会议室分组
   * 
   * @param request - CreateMeetingRoomGroupRequest
   * @returns CreateMeetingRoomGroupResponse
   */
  async createMeetingRoomGroup(request: $_model.CreateMeetingRoomGroupRequest): Promise<$_model.CreateMeetingRoomGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateMeetingRoomGroupHeaders({ });
    return await this.createMeetingRoomGroupWithOptions(request, headers, runtime);
  }

  /**
   * 创建消息
   * 
   * @param request - CreateMessageRequest
   * @param headers - CreateMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMessageResponse
   */
  async createMessageWithOptions(request: $_model.CreateMessageRequest, headers: $_model.CreateMessageHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.extLoginUser)) {
      body["extLoginUser"] = request.extLoginUser;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.originalAssistantId)) {
      body["originalAssistantId"] = request.originalAssistantId;
    }

    if (!$dara.isNull(request.sourceIdOfOriginalAssistantId)) {
      body["sourceIdOfOriginalAssistantId"] = request.sourceIdOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.sourceTypeOfOriginalAssistantId)) {
      body["sourceTypeOfOriginalAssistantId"] = request.sourceTypeOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountId)) {
      realHeaders["accountId"] = String(headers.accountId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMessage",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/assistant/createMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMessageResponse>(await this.callApi(params, req, runtime), new $_model.CreateMessageResponse({}));
  }

  /**
   * 创建消息
   * 
   * @param request - CreateMessageRequest
   * @returns CreateMessageResponse
   */
  async createMessage(request: $_model.CreateMessageRequest): Promise<$_model.CreateMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateMessageHeaders({ });
    return await this.createMessageWithOptions(request, headers, runtime);
  }

  /**
   * 创建字段
   * 
   * @param tmpReq - CreateMultiDimTableFieldRequest
   * @param tmpHeader - CreateMultiDimTableFieldHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMultiDimTableFieldResponse
   */
  async createMultiDimTableFieldWithOptions(tmpReq: $_model.CreateMultiDimTableFieldRequest, tmpHeader: $_model.CreateMultiDimTableFieldHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMultiDimTableFieldResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMultiDimTableFieldShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateMultiDimTableFieldShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.property)) {
      request.propertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.property, "Property", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.propertyShrink)) {
      body["Property"] = request.propertyShrink;
    }

    if (!$dara.isNull(request.sheetIdOrName)) {
      body["SheetIdOrName"] = request.sheetIdOrName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMultiDimTableField",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/createMultiDimTableField`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMultiDimTableFieldResponse>(await this.callApi(params, req, runtime), new $_model.CreateMultiDimTableFieldResponse({}));
  }

  /**
   * 创建字段
   * 
   * @param request - CreateMultiDimTableFieldRequest
   * @returns CreateMultiDimTableFieldResponse
   */
  async createMultiDimTableField(request: $_model.CreateMultiDimTableFieldRequest): Promise<$_model.CreateMultiDimTableFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateMultiDimTableFieldHeaders({ });
    return await this.createMultiDimTableFieldWithOptions(request, headers, runtime);
  }

  /**
   * 新增或更新表单实例
   * 
   * @param request - CreateOrUpdateFormDataRequest
   * @param tmpHeader - CreateOrUpdateFormDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateFormDataResponse
   */
  async createOrUpdateFormDataWithOptions(request: $_model.CreateOrUpdateFormDataRequest, tmpHeader: $_model.CreateOrUpdateFormDataHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateFormDataResponse> {
    request.validate();
    let headers = new $_model.CreateOrUpdateFormDataShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formDataJson)) {
      body["FormDataJson"] = request.formDataJson;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.noExecuteExpression)) {
      body["NoExecuteExpression"] = request.noExecuteExpression;
    }

    if (!$dara.isNull(request.searchCondition)) {
      body["SearchCondition"] = request.searchCondition;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateFormData",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/createOrUpdateFormData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateFormDataResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateFormDataResponse({}));
  }

  /**
   * 新增或更新表单实例
   * 
   * @param request - CreateOrUpdateFormDataRequest
   * @returns CreateOrUpdateFormDataResponse
   */
  async createOrUpdateFormData(request: $_model.CreateOrUpdateFormDataRequest): Promise<$_model.CreateOrUpdateFormDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateOrUpdateFormDataHeaders({ });
    return await this.createOrUpdateFormDataWithOptions(request, headers, runtime);
  }

  /**
   * 创建荣誉勋章模板
   * 
   * @param tmpReq - CreateOrgHonorTemplateRequest
   * @param tmpHeader - CreateOrgHonorTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrgHonorTemplateResponse
   */
  async createOrgHonorTemplateWithOptions(tmpReq: $_model.CreateOrgHonorTemplateRequest, tmpHeader: $_model.CreateOrgHonorTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrgHonorTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOrgHonorTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateOrgHonorTemplateShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.avatarFrameMediaId)) {
      body["avatarFrameMediaId"] = request.avatarFrameMediaId;
    }

    if (!$dara.isNull(request.defaultBgColor)) {
      body["defaultBgColor"] = request.defaultBgColor;
    }

    if (!$dara.isNull(request.medalDesc)) {
      body["medalDesc"] = request.medalDesc;
    }

    if (!$dara.isNull(request.medalMediaId)) {
      body["medalMediaId"] = request.medalMediaId;
    }

    if (!$dara.isNull(request.medalName)) {
      body["medalName"] = request.medalName;
    }

    if (!$dara.isNull(request.orgId)) {
      body["orgId"] = request.orgId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrgHonorTemplate",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/honor/createOrgHonorTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrgHonorTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrgHonorTemplateResponse({}));
  }

  /**
   * 创建荣誉勋章模板
   * 
   * @param request - CreateOrgHonorTemplateRequest
   * @returns CreateOrgHonorTemplateResponse
   */
  async createOrgHonorTemplate(request: $_model.CreateOrgHonorTemplateRequest): Promise<$_model.CreateOrgHonorTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateOrgHonorTemplateHeaders({ });
    return await this.createOrgHonorTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 创建钉钉个人待办任务
   * 
   * @param tmpReq - CreatePersonalTodoTaskRequest
   * @param tmpHeader - CreatePersonalTodoTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalTodoTaskResponse
   */
  async createPersonalTodoTaskWithOptions(tmpReq: $_model.CreatePersonalTodoTaskRequest, tmpHeader: $_model.CreatePersonalTodoTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalTodoTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePersonalTodoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreatePersonalTodoTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.executorIds)) {
      request.executorIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executorIds, "ExecutorIds", "json");
    }

    if (!$dara.isNull(tmpReq.notifyConfigs)) {
      request.notifyConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifyConfigs, "NotifyConfigs", "json");
    }

    if (!$dara.isNull(tmpReq.participantIds)) {
      request.participantIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.participantIds, "ParticipantIds", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dueTime)) {
      body["DueTime"] = request.dueTime;
    }

    if (!$dara.isNull(request.executorIdsShrink)) {
      body["ExecutorIds"] = request.executorIdsShrink;
    }

    if (!$dara.isNull(request.notifyConfigsShrink)) {
      body["NotifyConfigs"] = request.notifyConfigsShrink;
    }

    if (!$dara.isNull(request.participantIdsShrink)) {
      body["ParticipantIds"] = request.participantIdsShrink;
    }

    if (!$dara.isNull(request.reminderTimeStamp)) {
      body["ReminderTimeStamp"] = request.reminderTimeStamp;
    }

    if (!$dara.isNull(request.subject)) {
      body["Subject"] = request.subject;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalTodoTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/createPersonalTodoTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalTodoTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalTodoTaskResponse({}));
  }

  /**
   * 创建钉钉个人待办任务
   * 
   * @param request - CreatePersonalTodoTaskRequest
   * @returns CreatePersonalTodoTaskResponse
   */
  async createPersonalTodoTask(request: $_model.CreatePersonalTodoTaskRequest): Promise<$_model.CreatePersonalTodoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreatePersonalTodoTaskHeaders({ });
    return await this.createPersonalTodoTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建日志
   * 
   * @param tmpReq - CreateReportRequest
   * @param tmpHeader - CreateReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReportResponse
   */
  async createReportWithOptions(tmpReq: $_model.CreateReportRequest, tmpHeader: $_model.CreateReportHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReportResponse> {
    tmpReq.validate();
    let request = new $_model.CreateReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateReportShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.contents)) {
      request.contentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contents, "Contents", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.toCids)) {
      request.toCidsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.toCids, "ToCids", "json");
    }

    if (!$dara.isNull(tmpReq.toUserids)) {
      request.toUseridsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.toUserids, "ToUserids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentsShrink)) {
      body["Contents"] = request.contentsShrink;
    }

    if (!$dara.isNull(request.ddFrom)) {
      body["DdFrom"] = request.ddFrom;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.toChat)) {
      body["ToChat"] = request.toChat;
    }

    if (!$dara.isNull(request.toCidsShrink)) {
      body["ToCids"] = request.toCidsShrink;
    }

    if (!$dara.isNull(request.toUseridsShrink)) {
      body["ToUserids"] = request.toUseridsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReport",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/createReport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateReportResponse>(await this.callApi(params, req, runtime), new $_model.CreateReportResponse({}));
  }

  /**
   * 创建日志
   * 
   * @param request - CreateReportRequest
   * @returns CreateReportResponse
   */
  async createReport(request: $_model.CreateReportRequest): Promise<$_model.CreateReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateReportHeaders({ });
    return await this.createReportWithOptions(request, headers, runtime);
  }

  /**
   * 创建运行
   * 
   * @param request - CreateRunRequest
   * @param headers - CreateRunHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRunResponse
   */
  async *createRunWithSSE(request: $_model.CreateRunRequest, headers: $_model.CreateRunHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.CreateRunResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowStructViewContent)) {
      body["allowStructViewContent"] = request.allowStructViewContent;
    }

    if (!$dara.isNull(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.extLoginUser)) {
      body["extLoginUser"] = request.extLoginUser;
    }

    if (!$dara.isNull(request.originalAssistantId)) {
      body["originalAssistantId"] = request.originalAssistantId;
    }

    if (!$dara.isNull(request.sourceIdOfOriginalAssistantId)) {
      body["sourceIdOfOriginalAssistantId"] = request.sourceIdOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.sourceTypeOfOriginalAssistantId)) {
      body["sourceTypeOfOriginalAssistantId"] = request.sourceTypeOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountId)) {
      realHeaders["accountId"] = String(headers.accountId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRun",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/assistant/createRun`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.CreateRunResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.CreateRunResponse({}));
    }
  }

  /**
   * 创建运行
   * 
   * @param request - CreateRunRequest
   * @param headers - CreateRunHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRunResponse
   */
  async createRunWithOptions(request: $_model.CreateRunRequest, headers: $_model.CreateRunHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowStructViewContent)) {
      body["allowStructViewContent"] = request.allowStructViewContent;
    }

    if (!$dara.isNull(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.extLoginUser)) {
      body["extLoginUser"] = request.extLoginUser;
    }

    if (!$dara.isNull(request.originalAssistantId)) {
      body["originalAssistantId"] = request.originalAssistantId;
    }

    if (!$dara.isNull(request.sourceIdOfOriginalAssistantId)) {
      body["sourceIdOfOriginalAssistantId"] = request.sourceIdOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.sourceTypeOfOriginalAssistantId)) {
      body["sourceTypeOfOriginalAssistantId"] = request.sourceTypeOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountId)) {
      realHeaders["accountId"] = String(headers.accountId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRun",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/assistant/createRun`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRunResponse>(await this.callApi(params, req, runtime), new $_model.CreateRunResponse({}));
  }

  /**
   * 创建运行
   * 
   * @param request - CreateRunRequest
   * @returns CreateRunResponse
   */
  async createRun(request: $_model.CreateRunRequest): Promise<$_model.CreateRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateRunHeaders({ });
    return await this.createRunWithOptions(request, headers, runtime);
  }

  /**
   * 创建场景群
   * 
   * @param request - CreateScenegroupRequest
   * @param tmpHeader - CreateScenegroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScenegroupResponse
   */
  async createScenegroupWithOptions(request: $_model.CreateScenegroupRequest, tmpHeader: $_model.CreateScenegroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScenegroupResponse> {
    request.validate();
    let headers = new $_model.CreateScenegroupShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addFriendForbidden)) {
      body["AddFriendForbidden"] = request.addFriendForbidden;
    }

    if (!$dara.isNull(request.allMembersCanCreateCalendar)) {
      body["AllMembersCanCreateCalendar"] = request.allMembersCanCreateCalendar;
    }

    if (!$dara.isNull(request.allMembersCanCreateMcsConf)) {
      body["AllMembersCanCreateMcsConf"] = request.allMembersCanCreateMcsConf;
    }

    if (!$dara.isNull(request.chatBannedType)) {
      body["ChatBannedType"] = request.chatBannedType;
    }

    if (!$dara.isNull(request.groupEmailDisabled)) {
      body["GroupEmailDisabled"] = request.groupEmailDisabled;
    }

    if (!$dara.isNull(request.groupLiveSwitch)) {
      body["GroupLiveSwitch"] = request.groupLiveSwitch;
    }

    if (!$dara.isNull(request.icon)) {
      body["Icon"] = request.icon;
    }

    if (!$dara.isNull(request.managementType)) {
      body["ManagementType"] = request.managementType;
    }

    if (!$dara.isNull(request.membersToAdminChat)) {
      body["MembersToAdminChat"] = request.membersToAdminChat;
    }

    if (!$dara.isNull(request.mentionAllAuthority)) {
      body["MentionAllAuthority"] = request.mentionAllAuthority;
    }

    if (!$dara.isNull(request.onlyAdminCanDing)) {
      body["OnlyAdminCanDing"] = request.onlyAdminCanDing;
    }

    if (!$dara.isNull(request.onlyAdminCanSetMsgTop)) {
      body["OnlyAdminCanSetMsgTop"] = request.onlyAdminCanSetMsgTop;
    }

    if (!$dara.isNull(request.searchable)) {
      body["Searchable"] = request.searchable;
    }

    if (!$dara.isNull(request.showHistoryType)) {
      body["ShowHistoryType"] = request.showHistoryType;
    }

    if (!$dara.isNull(request.subadminIds)) {
      body["SubadminIds"] = request.subadminIds;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.userIds)) {
      body["UserIds"] = request.userIds;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    if (!$dara.isNull(request.validationType)) {
      body["ValidationType"] = request.validationType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScenegroup",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/createScenegroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScenegroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateScenegroupResponse({}));
  }

  /**
   * 创建场景群
   * 
   * @param request - CreateScenegroupRequest
   * @returns CreateScenegroupResponse
   */
  async createScenegroup(request: $_model.CreateScenegroupRequest): Promise<$_model.CreateScenegroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateScenegroupHeaders({ });
    return await this.createScenegroupWithOptions(request, headers, runtime);
  }

  /**
   * 创建预约会议
   * 
   * @param tmpReq - CreateScheduleConferenceRequest
   * @param tmpHeader - CreateScheduleConferenceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduleConferenceResponse
   */
  async createScheduleConferenceWithOptions(tmpReq: $_model.CreateScheduleConferenceRequest, tmpHeader: $_model.CreateScheduleConferenceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduleConferenceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateScheduleConferenceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateScheduleConferenceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleConfSettingModel)) {
      request.scheduleConfSettingModelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleConfSettingModel, "ScheduleConfSettingModel", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.scheduleConfSettingModelShrink)) {
      body["ScheduleConfSettingModel"] = request.scheduleConfSettingModelShrink;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduleConference",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/createScheduleConference`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScheduleConferenceResponse>(await this.callApi(params, req, runtime), new $_model.CreateScheduleConferenceResponse({}));
  }

  /**
   * 创建预约会议
   * 
   * @param request - CreateScheduleConferenceRequest
   * @returns CreateScheduleConferenceResponse
   */
  async createScheduleConference(request: $_model.CreateScheduleConferenceRequest): Promise<$_model.CreateScheduleConferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateScheduleConferenceHeaders({ });
    return await this.createScheduleConferenceWithOptions(request, headers, runtime);
  }

  /**
   * 发布钉钉搜索穹顶
   * 
   * @param tmpReq - CreateSearchDomeRequest
   * @param tmpHeader - CreateSearchDomeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSearchDomeResponse
   */
  async createSearchDomeWithOptions(tmpReq: $_model.CreateSearchDomeRequest, tmpHeader: $_model.CreateSearchDomeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSearchDomeResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSearchDomeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateSearchDomeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.userIdList)) {
      request.userIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIdList, "UserIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resId)) {
      body["ResId"] = request.resId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.userIdListShrink)) {
      body["UserIdList"] = request.userIdListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSearchDome",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/watt/createSearchDome`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSearchDomeResponse>(await this.callApi(params, req, runtime), new $_model.CreateSearchDomeResponse({}));
  }

  /**
   * 发布钉钉搜索穹顶
   * 
   * @param request - CreateSearchDomeRequest
   * @returns CreateSearchDomeResponse
   */
  async createSearchDome(request: $_model.CreateSearchDomeRequest): Promise<$_model.CreateSearchDomeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateSearchDomeHeaders({ });
    return await this.createSearchDomeWithOptions(request, headers, runtime);
  }

  /**
   * 发布钉钉搜索关键词
   * 
   * @param tmpReq - CreateSearchKeywordRequest
   * @param tmpHeader - CreateSearchKeywordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSearchKeywordResponse
   */
  async createSearchKeywordWithOptions(tmpReq: $_model.CreateSearchKeywordRequest, tmpHeader: $_model.CreateSearchKeywordHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSearchKeywordResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSearchKeywordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateSearchKeywordShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.userIdList)) {
      request.userIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIdList, "UserIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resId)) {
      body["ResId"] = request.resId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.userIdListShrink)) {
      body["UserIdList"] = request.userIdListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSearchKeyword",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/watt/createSearchKeyword`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSearchKeywordResponse>(await this.callApi(params, req, runtime), new $_model.CreateSearchKeywordResponse({}));
  }

  /**
   * 发布钉钉搜索关键词
   * 
   * @param request - CreateSearchKeywordRequest
   * @returns CreateSearchKeywordResponse
   */
  async createSearchKeyword(request: $_model.CreateSearchKeywordRequest): Promise<$_model.CreateSearchKeywordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateSearchKeywordHeaders({ });
    return await this.createSearchKeywordWithOptions(request, headers, runtime);
  }

  /**
   * 创建工作表
   * 
   * @param tmpReq - CreateSheetRequest
   * @param tmpHeader - CreateSheetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSheetResponse
   */
  async createSheetWithOptions(tmpReq: $_model.CreateSheetRequest, tmpHeader: $_model.CreateSheetHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSheetResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSheetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateSheetShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSheet",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/createSheet`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSheetResponse>(await this.callApi(params, req, runtime), new $_model.CreateSheetResponse({}));
  }

  /**
   * 创建工作表
   * 
   * @param request - CreateSheetRequest
   * @returns CreateSheetResponse
   */
  async createSheet(request: $_model.CreateSheetRequest): Promise<$_model.CreateSheetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateSheetHeaders({ });
    return await this.createSheetWithOptions(request, headers, runtime);
  }

  /**
   * 创建订阅日历
   * 
   * @param tmpReq - CreateSubscribedCalendarRequest
   * @param tmpHeader - CreateSubscribedCalendarHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubscribedCalendarResponse
   */
  async createSubscribedCalendarWithOptions(tmpReq: $_model.CreateSubscribedCalendarRequest, tmpHeader: $_model.CreateSubscribedCalendarHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSubscribedCalendarResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSubscribedCalendarShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateSubscribedCalendarShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.managers)) {
      request.managersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.managers, "Managers", "json");
    }

    if (!$dara.isNull(tmpReq.subscribeScope)) {
      request.subscribeScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subscribeScope, "SubscribeScope", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.managersShrink)) {
      body["Managers"] = request.managersShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.subscribeScopeShrink)) {
      body["SubscribeScope"] = request.subscribeScopeShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubscribedCalendar",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/createSubscribedCalendar`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSubscribedCalendarResponse>(await this.callApi(params, req, runtime), new $_model.CreateSubscribedCalendarResponse({}));
  }

  /**
   * 创建订阅日历
   * 
   * @param request - CreateSubscribedCalendarRequest
   * @returns CreateSubscribedCalendarResponse
   */
  async createSubscribedCalendar(request: $_model.CreateSubscribedCalendarRequest): Promise<$_model.CreateSubscribedCalendarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateSubscribedCalendarHeaders({ });
    return await this.createSubscribedCalendarWithOptions(request, headers, runtime);
  }

  /**
   * 创建线程
   * 
   * @param request - CreateThreadRequest
   * @param headers - CreateThreadHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateThreadResponse
   */
  async createThreadWithOptions(request: $_model.CreateThreadRequest, headers: $_model.CreateThreadHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateThreadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.clientEnum)) {
      body["clientEnum"] = request.clientEnum;
    }

    if (!$dara.isNull(request.extLoginUser)) {
      body["extLoginUser"] = request.extLoginUser;
    }

    if (!$dara.isNull(request.originalAssistantId)) {
      body["originalAssistantId"] = request.originalAssistantId;
    }

    if (!$dara.isNull(request.sourceIdOfOriginalAssistantId)) {
      body["sourceIdOfOriginalAssistantId"] = request.sourceIdOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.sourceTypeOfOriginalAssistantId)) {
      body["sourceTypeOfOriginalAssistantId"] = request.sourceTypeOfOriginalAssistantId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountId)) {
      realHeaders["accountId"] = String(headers.accountId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateThread",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/assistant/createThread`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateThreadResponse>(await this.callApi(params, req, runtime), new $_model.CreateThreadResponse({}));
  }

  /**
   * 创建线程
   * 
   * @param request - CreateThreadRequest
   * @returns CreateThreadResponse
   */
  async createThread(request: $_model.CreateThreadRequest): Promise<$_model.CreateThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateThreadHeaders({ });
    return await this.createThreadWithOptions(request, headers, runtime);
  }

  /**
   * 创建工单
   * 
   * @param tmpReq - CreateTicketRequest
   * @param tmpHeader - CreateTicketHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicketResponse
   */
  async createTicketWithOptions(tmpReq: $_model.CreateTicketRequest, tmpHeader: $_model.CreateTicketHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTicketResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTicketShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateTicketShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.notify)) {
      request.notifyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notify, "Notify", "json");
    }

    if (!$dara.isNull(tmpReq.processorUserIds)) {
      request.processorUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.processorUserIds, "ProcessorUserIds", "json");
    }

    if (!$dara.isNull(tmpReq.sceneContext)) {
      request.sceneContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sceneContext, "SceneContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customFields)) {
      body["CustomFields"] = request.customFields;
    }

    if (!$dara.isNull(request.notifyShrink)) {
      body["Notify"] = request.notifyShrink;
    }

    if (!$dara.isNull(request.openTeamId)) {
      body["OpenTeamId"] = request.openTeamId;
    }

    if (!$dara.isNull(request.openTemplateBizId)) {
      body["OpenTemplateBizId"] = request.openTemplateBizId;
    }

    if (!$dara.isNull(request.processorUserIdsShrink)) {
      body["ProcessorUserIds"] = request.processorUserIdsShrink;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sceneContextShrink)) {
      body["SceneContext"] = request.sceneContextShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTicket",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ticket/createTicket`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTicketResponse>(await this.callApi(params, req, runtime), new $_model.CreateTicketResponse({}));
  }

  /**
   * 创建工单
   * 
   * @param request - CreateTicketRequest
   * @returns CreateTicketResponse
   */
  async createTicket(request: $_model.CreateTicketRequest): Promise<$_model.CreateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateTicketHeaders({ });
    return await this.createTicketWithOptions(request, headers, runtime);
  }

  /**
   * 创建代办
   * 
   * @param tmpReq - CreateTodoTaskRequest
   * @param tmpHeader - CreateTodoTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTodoTaskResponse
   */
  async createTodoTaskWithOptions(tmpReq: $_model.CreateTodoTaskRequest, tmpHeader: $_model.CreateTodoTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTodoTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTodoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateTodoTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.actionList)) {
      request.actionListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionList, "actionList", "json");
    }

    if (!$dara.isNull(tmpReq.contentFieldList)) {
      request.contentFieldListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contentFieldList, "contentFieldList", "json");
    }

    if (!$dara.isNull(tmpReq.detailUrl)) {
      request.detailUrlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detailUrl, "detailUrl", "json");
    }

    if (!$dara.isNull(tmpReq.executorIds)) {
      request.executorIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executorIds, "executorIds", "json");
    }

    if (!$dara.isNull(tmpReq.notifyConfigs)) {
      request.notifyConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifyConfigs, "notifyConfigs", "json");
    }

    if (!$dara.isNull(tmpReq.participantIds)) {
      request.participantIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.participantIds, "participantIds", "json");
    }

    if (!$dara.isNull(tmpReq.remindNotifyConfigs)) {
      request.remindNotifyConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.remindNotifyConfigs, "remindNotifyConfigs", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operatorId)) {
      query["operatorId"] = request.operatorId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.actionListShrink)) {
      body["actionList"] = request.actionListShrink;
    }

    if (!$dara.isNull(request.contentFieldListShrink)) {
      body["contentFieldList"] = request.contentFieldListShrink;
    }

    if (!$dara.isNull(request.creatorId)) {
      body["creatorId"] = request.creatorId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.detailUrlShrink)) {
      body["detailUrl"] = request.detailUrlShrink;
    }

    if (!$dara.isNull(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!$dara.isNull(request.executorIdsShrink)) {
      body["executorIds"] = request.executorIdsShrink;
    }

    if (!$dara.isNull(request.isOnlyShowExecutor)) {
      body["isOnlyShowExecutor"] = request.isOnlyShowExecutor;
    }

    if (!$dara.isNull(request.notifyConfigsShrink)) {
      body["notifyConfigs"] = request.notifyConfigsShrink;
    }

    if (!$dara.isNull(request.participantIdsShrink)) {
      body["participantIds"] = request.participantIdsShrink;
    }

    if (!$dara.isNull(request.priority)) {
      body["priority"] = request.priority;
    }

    if (!$dara.isNull(request.remindNotifyConfigsShrink)) {
      body["remindNotifyConfigs"] = request.remindNotifyConfigsShrink;
    }

    if (!$dara.isNull(request.reminderTimeStamp)) {
      body["reminderTimeStamp"] = request.reminderTimeStamp;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.subject)) {
      body["subject"] = request.subject;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTodoTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/createTodoTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTodoTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTodoTaskResponse({}));
  }

  /**
   * 创建代办
   * 
   * @param request - CreateTodoTaskRequest
   * @returns CreateTodoTaskResponse
   */
  async createTodoTask(request: $_model.CreateTodoTaskRequest): Promise<$_model.CreateTodoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateTodoTaskHeaders({ });
    return await this.createTodoTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建视频会议
   * 
   * @param tmpReq - CreateVideoConferenceRequest
   * @param tmpHeader - CreateVideoConferenceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVideoConferenceResponse
   */
  async createVideoConferenceWithOptions(tmpReq: $_model.CreateVideoConferenceRequest, tmpHeader: $_model.CreateVideoConferenceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVideoConferenceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateVideoConferenceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateVideoConferenceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.inviteUserIds)) {
      request.inviteUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inviteUserIds, "InviteUserIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.confTitle)) {
      body["ConfTitle"] = request.confTitle;
    }

    if (!$dara.isNull(request.inviteCaller)) {
      body["InviteCaller"] = request.inviteCaller;
    }

    if (!$dara.isNull(request.inviteUserIdsShrink)) {
      body["InviteUserIds"] = request.inviteUserIdsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVideoConference",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/createVideoConference`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVideoConferenceResponse>(await this.callApi(params, req, runtime), new $_model.CreateVideoConferenceResponse({}));
  }

  /**
   * 创建视频会议
   * 
   * @param request - CreateVideoConferenceRequest
   * @returns CreateVideoConferenceResponse
   */
  async createVideoConference(request: $_model.CreateVideoConferenceRequest): Promise<$_model.CreateVideoConferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateVideoConferenceHeaders({ });
    return await this.createVideoConferenceWithOptions(request, headers, runtime);
  }

  /**
   * 创建知识库
   * 
   * @param tmpReq - CreateWorkspaceRequest
   * @param tmpHeader - CreateWorkspaceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(tmpReq: $_model.CreateWorkspaceRequest, tmpHeader: $_model.CreateWorkspaceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWorkspaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateWorkspaceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/createWorkspace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * 创建知识库
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateWorkspaceHeaders({ });
    return await this.createWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * 创建知识库文档
   * 
   * @param tmpReq - CreateWorkspaceDocRequest
   * @param tmpHeader - CreateWorkspaceDocHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceDocResponse
   */
  async createWorkspaceDocWithOptions(tmpReq: $_model.CreateWorkspaceDocRequest, tmpHeader: $_model.CreateWorkspaceDocHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceDocResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWorkspaceDocShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.CreateWorkspaceDocShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentNodeId)) {
      body["ParentNodeId"] = request.parentNodeId;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspaceDoc",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/createWorkspaceDoc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceDocResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceDocResponse({}));
  }

  /**
   * 创建知识库文档
   * 
   * @param request - CreateWorkspaceDocRequest
   * @returns CreateWorkspaceDocResponse
   */
  async createWorkspaceDoc(request: $_model.CreateWorkspaceDocRequest): Promise<$_model.CreateWorkspaceDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateWorkspaceDocHeaders({ });
    return await this.createWorkspaceDocWithOptions(request, headers, runtime);
  }

  /**
   * @param tmpReq - DeleteAlidingAssistantRequest
   * @param tmpHeader - DeleteAlidingAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlidingAssistantResponse
   */
  async deleteAlidingAssistantWithOptions(tmpReq: $_model.DeleteAlidingAssistantRequest, tmpHeader: $_model.DeleteAlidingAssistantHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlidingAssistantResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAlidingAssistantShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteAlidingAssistantShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistantId)) {
      body["AssistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlidingAssistant",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/aiagent/deleteAlidingAssistant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlidingAssistantResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlidingAssistantResponse({}));
  }

  /**
   * @param request - DeleteAlidingAssistantRequest
   * @returns DeleteAlidingAssistantResponse
   */
  async deleteAlidingAssistant(request: $_model.DeleteAlidingAssistantRequest): Promise<$_model.DeleteAlidingAssistantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteAlidingAssistantHeaders({ });
    return await this.deleteAlidingAssistantWithOptions(request, headers, runtime);
  }

  /**
   * 删除指定列
   * 
   * @param tmpReq - DeleteColumnsRequest
   * @param tmpHeader - DeleteColumnsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteColumnsResponse
   */
  async deleteColumnsWithOptions(tmpReq: $_model.DeleteColumnsRequest, tmpHeader: $_model.DeleteColumnsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteColumnsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteColumnsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteColumnsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.column)) {
      body["Column"] = request.column;
    }

    if (!$dara.isNull(request.columnCount)) {
      body["ColumnCount"] = request.columnCount;
    }

    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteColumns",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/deleteColumns`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteColumnsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteColumnsResponse({}));
  }

  /**
   * 删除指定列
   * 
   * @param request - DeleteColumnsRequest
   * @returns DeleteColumnsResponse
   */
  async deleteColumns(request: $_model.DeleteColumnsRequest): Promise<$_model.DeleteColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteColumnsHeaders({ });
    return await this.deleteColumnsWithOptions(request, headers, runtime);
  }

  /**
   * 删除文件或文件夹
   * 
   * @param tmpReq - DeleteDentryRequest
   * @param tmpHeader - DeleteDentryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDentryResponse
   */
  async deleteDentryWithOptions(tmpReq: $_model.DeleteDentryRequest, tmpHeader: $_model.DeleteDentryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDentryResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDentryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteDentryShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryId)) {
      body["DentryId"] = request.dentryId;
    }

    if (!$dara.isNull(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.toRecycleBin)) {
      body["ToRecycleBin"] = request.toRecycleBin;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDentry",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/deleteDentry`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDentryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDentryResponse({}));
  }

  /**
   * 删除文件或文件夹
   * 
   * @param request - DeleteDentryRequest
   * @returns DeleteDentryResponse
   */
  async deleteDentry(request: $_model.DeleteDentryRequest): Promise<$_model.DeleteDentryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteDentryHeaders({ });
    return await this.deleteDentryWithOptions(request, headers, runtime);
  }

  /**
   * 删除钉盘空间
   * 
   * @param tmpReq - DeleteDriveSpaceRequest
   * @param tmpHeader - DeleteDriveSpaceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDriveSpaceResponse
   */
  async deleteDriveSpaceWithOptions(tmpReq: $_model.DeleteDriveSpaceRequest, tmpHeader: $_model.DeleteDriveSpaceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDriveSpaceResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDriveSpaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteDriveSpaceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDriveSpace",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/deleteDriveSpace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDriveSpaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDriveSpaceResponse({}));
  }

  /**
   * 删除钉盘空间
   * 
   * @param request - DeleteDriveSpaceRequest
   * @returns DeleteDriveSpaceResponse
   */
  async deleteDriveSpace(request: $_model.DeleteDriveSpaceRequest): Promise<$_model.DeleteDriveSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteDriveSpaceHeaders({ });
    return await this.deleteDriveSpaceWithOptions(request, headers, runtime);
  }

  /**
   * 删除日程
   * 
   * @param request - DeleteEventRequest
   * @param tmpHeader - DeleteEventHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventResponse
   */
  async deleteEventWithOptions(request: $_model.DeleteEventRequest, tmpHeader: $_model.DeleteEventHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventResponse> {
    request.validate();
    let headers = new $_model.DeleteEventShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.eventId)) {
      body["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.pushNotification)) {
      body["pushNotification"] = request.pushNotification;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEvent",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/deleteEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventResponse({}));
  }

  /**
   * 删除日程
   * 
   * @param request - DeleteEventRequest
   * @returns DeleteEventResponse
   */
  async deleteEvent(request: $_model.DeleteEventRequest): Promise<$_model.DeleteEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteEventHeaders({ });
    return await this.deleteEventWithOptions(request, headers, runtime);
  }

  /**
   * 删除表单数据
   * 
   * @param request - DeleteFormDataRequest
   * @param tmpHeader - DeleteFormDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFormDataResponse
   */
  async deleteFormDataWithOptions(request: $_model.DeleteFormDataRequest, tmpHeader: $_model.DeleteFormDataHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFormDataResponse> {
    request.validate();
    let headers = new $_model.DeleteFormDataShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formInstanceId)) {
      body["FormInstanceId"] = request.formInstanceId;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFormData",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/deleteFormData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFormDataResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFormDataResponse({}));
  }

  /**
   * 删除表单数据
   * 
   * @param request - DeleteFormDataRequest
   * @returns DeleteFormDataResponse
   */
  async deleteFormData(request: $_model.DeleteFormDataRequest): Promise<$_model.DeleteFormDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteFormDataHeaders({ });
    return await this.deleteFormDataWithOptions(request, headers, runtime);
  }

  /**
   * @param request - DeleteInstanceRequest
   * @param tmpHeader - DeleteInstanceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, tmpHeader: $_model.DeleteInstanceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let headers = new $_model.DeleteInstanceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.processInstanceId)) {
      body["ProcessInstanceId"] = request.processInstanceId;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/deleteInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteInstanceHeaders({ });
    return await this.deleteInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 删除直播
   * 
   * @param tmpReq - DeleteLiveRequest
   * @param tmpHeader - DeleteLiveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLiveResponse
   */
  async deleteLiveWithOptions(tmpReq: $_model.DeleteLiveRequest, tmpHeader: $_model.DeleteLiveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLiveResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteLiveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteLiveShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLive",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/deleteLive`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLiveResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLiveResponse({}));
  }

  /**
   * 删除直播
   * 
   * @param request - DeleteLiveRequest
   * @returns DeleteLiveResponse
   */
  async deleteLive(request: $_model.DeleteLiveRequest): Promise<$_model.DeleteLiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteLiveHeaders({ });
    return await this.deleteLiveWithOptions(request, headers, runtime);
  }

  /**
   * 删除会议室
   * 
   * @param tmpReq - DeleteMeetingRoomRequest
   * @param tmpHeader - DeleteMeetingRoomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMeetingRoomResponse
   */
  async deleteMeetingRoomWithOptions(tmpReq: $_model.DeleteMeetingRoomRequest, tmpHeader: $_model.DeleteMeetingRoomHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMeetingRoomResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteMeetingRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteMeetingRoomShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMeetingRoom",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/deleteMeetingRoom`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMeetingRoomResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMeetingRoomResponse({}));
  }

  /**
   * 删除会议室
   * 
   * @param request - DeleteMeetingRoomRequest
   * @returns DeleteMeetingRoomResponse
   */
  async deleteMeetingRoom(request: $_model.DeleteMeetingRoomRequest): Promise<$_model.DeleteMeetingRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteMeetingRoomHeaders({ });
    return await this.deleteMeetingRoomWithOptions(request, headers, runtime);
  }

  /**
   * 删除会议室分组
   * 
   * @param tmpReq - DeleteMeetingRoomGroupRequest
   * @param tmpHeader - DeleteMeetingRoomGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMeetingRoomGroupResponse
   */
  async deleteMeetingRoomGroupWithOptions(tmpReq: $_model.DeleteMeetingRoomGroupRequest, tmpHeader: $_model.DeleteMeetingRoomGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMeetingRoomGroupResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteMeetingRoomGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteMeetingRoomGroupShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMeetingRoomGroup",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/deleteMeetingRoomGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMeetingRoomGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMeetingRoomGroupResponse({}));
  }

  /**
   * 删除会议室分组
   * 
   * @param request - DeleteMeetingRoomGroupRequest
   * @returns DeleteMeetingRoomGroupResponse
   */
  async deleteMeetingRoomGroup(request: $_model.DeleteMeetingRoomGroupRequest): Promise<$_model.DeleteMeetingRoomGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteMeetingRoomGroupHeaders({ });
    return await this.deleteMeetingRoomGroupWithOptions(request, headers, runtime);
  }

  /**
   * 删除字段
   * 
   * @param tmpReq - DeleteMultiDimTableFieldRequest
   * @param tmpHeader - DeleteMultiDimTableFieldHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMultiDimTableFieldResponse
   */
  async deleteMultiDimTableFieldWithOptions(tmpReq: $_model.DeleteMultiDimTableFieldRequest, tmpHeader: $_model.DeleteMultiDimTableFieldHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMultiDimTableFieldResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteMultiDimTableFieldShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteMultiDimTableFieldShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.fieldIdOrName)) {
      body["FieldIdOrName"] = request.fieldIdOrName;
    }

    if (!$dara.isNull(request.sheetIdOrName)) {
      body["SheetIdOrName"] = request.sheetIdOrName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMultiDimTableField",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/deleteMultiDimTableField`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMultiDimTableFieldResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMultiDimTableFieldResponse({}));
  }

  /**
   * 删除字段
   * 
   * @param request - DeleteMultiDimTableFieldRequest
   * @returns DeleteMultiDimTableFieldResponse
   */
  async deleteMultiDimTableField(request: $_model.DeleteMultiDimTableFieldRequest): Promise<$_model.DeleteMultiDimTableFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteMultiDimTableFieldHeaders({ });
    return await this.deleteMultiDimTableFieldWithOptions(request, headers, runtime);
  }

  /**
   * 删除多行记录
   * 
   * @param tmpReq - DeleteMultiDimTableRecordsRequest
   * @param tmpHeader - DeleteMultiDimTableRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMultiDimTableRecordsResponse
   */
  async deleteMultiDimTableRecordsWithOptions(tmpReq: $_model.DeleteMultiDimTableRecordsRequest, tmpHeader: $_model.DeleteMultiDimTableRecordsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMultiDimTableRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteMultiDimTableRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteMultiDimTableRecordsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.recordIds)) {
      request.recordIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordIds, "RecordIds", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.recordIdsShrink)) {
      body["RecordIds"] = request.recordIdsShrink;
    }

    if (!$dara.isNull(request.sheetIdOrName)) {
      body["SheetIdOrName"] = request.sheetIdOrName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMultiDimTableRecords",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/deleteMultiDimTableRecords`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMultiDimTableRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMultiDimTableRecordsResponse({}));
  }

  /**
   * 删除多行记录
   * 
   * @param request - DeleteMultiDimTableRecordsRequest
   * @returns DeleteMultiDimTableRecordsResponse
   */
  async deleteMultiDimTableRecords(request: $_model.DeleteMultiDimTableRecordsRequest): Promise<$_model.DeleteMultiDimTableRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteMultiDimTableRecordsHeaders({ });
    return await this.deleteMultiDimTableRecordsWithOptions(request, headers, runtime);
  }

  /**
   * 删除文件权限
   * 
   * @param tmpReq - DeletePermissionRequest
   * @param tmpHeader - DeletePermissionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePermissionResponse
   */
  async deletePermissionWithOptions(tmpReq: $_model.DeletePermissionRequest, tmpHeader: $_model.DeletePermissionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePermissionResponse> {
    tmpReq.validate();
    let request = new $_model.DeletePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeletePermissionShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryUuid)) {
      body["DentryUuid"] = request.dentryUuid;
    }

    if (!$dara.isNull(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!$dara.isNull(request.roleId)) {
      body["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePermission",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/deletePermission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePermissionResponse>(await this.callApi(params, req, runtime), new $_model.DeletePermissionResponse({}));
  }

  /**
   * 删除文件权限
   * 
   * @param request - DeletePermissionRequest
   * @returns DeletePermissionResponse
   */
  async deletePermission(request: $_model.DeletePermissionRequest): Promise<$_model.DeletePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeletePermissionHeaders({ });
    return await this.deletePermissionWithOptions(request, headers, runtime);
  }

  /**
   * 删除指定行
   * 
   * @param tmpReq - DeleteRowsRequest
   * @param tmpHeader - DeleteRowsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRowsResponse
   */
  async deleteRowsWithOptions(tmpReq: $_model.DeleteRowsRequest, tmpHeader: $_model.DeleteRowsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRowsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteRowsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteRowsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.row)) {
      body["Row"] = request.row;
    }

    if (!$dara.isNull(request.rowCount)) {
      body["RowCount"] = request.rowCount;
    }

    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRows",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/deleteRows`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRowsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRowsResponse({}));
  }

  /**
   * 删除指定行
   * 
   * @param request - DeleteRowsRequest
   * @returns DeleteRowsResponse
   */
  async deleteRows(request: $_model.DeleteRowsRequest): Promise<$_model.DeleteRowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteRowsHeaders({ });
    return await this.deleteRowsWithOptions(request, headers, runtime);
  }

  /**
   * 删除群成员
   * 
   * @param request - DeleteScenegroupMemberRequest
   * @param tmpHeader - DeleteScenegroupMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScenegroupMemberResponse
   */
  async deleteScenegroupMemberWithOptions(request: $_model.DeleteScenegroupMemberRequest, tmpHeader: $_model.DeleteScenegroupMemberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScenegroupMemberResponse> {
    request.validate();
    let headers = new $_model.DeleteScenegroupMemberShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openConversationId)) {
      body["OpenConversationId"] = request.openConversationId;
    }

    if (!$dara.isNull(request.userIds)) {
      body["UserIds"] = request.userIds;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScenegroupMember",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/deleteScenegroupMember`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScenegroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScenegroupMemberResponse({}));
  }

  /**
   * 删除群成员
   * 
   * @param request - DeleteScenegroupMemberRequest
   * @returns DeleteScenegroupMemberResponse
   */
  async deleteScenegroupMember(request: $_model.DeleteScenegroupMemberRequest): Promise<$_model.DeleteScenegroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteScenegroupMemberHeaders({ });
    return await this.deleteScenegroupMemberWithOptions(request, headers, runtime);
  }

  /**
   * 删除一个工作表
   * 
   * @param tmpReq - DeleteSheetRequest
   * @param tmpHeader - DeleteSheetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSheetResponse
   */
  async deleteSheetWithOptions(tmpReq: $_model.DeleteSheetRequest, tmpHeader: $_model.DeleteSheetHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSheetResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteSheetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteSheetShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSheet",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/deleteSheet`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSheetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSheetResponse({}));
  }

  /**
   * 删除一个工作表
   * 
   * @param request - DeleteSheetRequest
   * @returns DeleteSheetResponse
   */
  async deleteSheet(request: $_model.DeleteSheetRequest): Promise<$_model.DeleteSheetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteSheetHeaders({ });
    return await this.deleteSheetWithOptions(request, headers, runtime);
  }

  /**
   * 删除订阅日历
   * 
   * @param request - DeleteSubscribedCalendarRequest
   * @param tmpHeader - DeleteSubscribedCalendarHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubscribedCalendarResponse
   */
  async deleteSubscribedCalendarWithOptions(request: $_model.DeleteSubscribedCalendarRequest, tmpHeader: $_model.DeleteSubscribedCalendarHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSubscribedCalendarResponse> {
    request.validate();
    let headers = new $_model.DeleteSubscribedCalendarShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSubscribedCalendar",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/deleteSubscribedCalendar`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSubscribedCalendarResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSubscribedCalendarResponse({}));
  }

  /**
   * 删除订阅日历
   * 
   * @param request - DeleteSubscribedCalendarRequest
   * @returns DeleteSubscribedCalendarResponse
   */
  async deleteSubscribedCalendar(request: $_model.DeleteSubscribedCalendarRequest): Promise<$_model.DeleteSubscribedCalendarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteSubscribedCalendarHeaders({ });
    return await this.deleteSubscribedCalendarWithOptions(request, headers, runtime);
  }

  /**
   * 删除代办
   * 
   * @param tmpReq - DeleteTodoTaskRequest
   * @param tmpHeader - DeleteTodoTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTodoTaskResponse
   */
  async deleteTodoTaskWithOptions(tmpReq: $_model.DeleteTodoTaskRequest, tmpHeader: $_model.DeleteTodoTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTodoTaskResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteTodoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteTodoTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTodoTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/deleteTodoTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTodoTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTodoTaskResponse({}));
  }

  /**
   * 删除代办
   * 
   * @param request - DeleteTodoTaskRequest
   * @returns DeleteTodoTaskResponse
   */
  async deleteTodoTask(request: $_model.DeleteTodoTaskRequest): Promise<$_model.DeleteTodoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteTodoTaskHeaders({ });
    return await this.deleteTodoTaskWithOptions(request, headers, runtime);
  }

  /**
   * 删除知识库文档成员
   * 
   * @param tmpReq - DeleteWorkspaceDocMembersRequest
   * @param tmpHeader - DeleteWorkspaceDocMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceDocMembersResponse
   */
  async deleteWorkspaceDocMembersWithOptions(tmpReq: $_model.DeleteWorkspaceDocMembersRequest, tmpHeader: $_model.DeleteWorkspaceDocMembersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceDocMembersResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteWorkspaceDocMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteWorkspaceDocMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspaceDocMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/deleteWorkspaceDocMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceDocMembersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceDocMembersResponse({}));
  }

  /**
   * 删除知识库文档成员
   * 
   * @param request - DeleteWorkspaceDocMembersRequest
   * @returns DeleteWorkspaceDocMembersResponse
   */
  async deleteWorkspaceDocMembers(request: $_model.DeleteWorkspaceDocMembersRequest): Promise<$_model.DeleteWorkspaceDocMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteWorkspaceDocMembersHeaders({ });
    return await this.deleteWorkspaceDocMembersWithOptions(request, headers, runtime);
  }

  /**
   * 删除知识库成员
   * 
   * @param tmpReq - DeleteWorkspaceMembersRequest
   * @param tmpHeader - DeleteWorkspaceMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceMembersResponse
   */
  async deleteWorkspaceMembersWithOptions(tmpReq: $_model.DeleteWorkspaceMembersRequest, tmpHeader: $_model.DeleteWorkspaceMembersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceMembersResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteWorkspaceMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DeleteWorkspaceMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspaceMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/deleteWorkspaceMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceMembersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceMembersResponse({}));
  }

  /**
   * 删除知识库成员
   * 
   * @param request - DeleteWorkspaceMembersRequest
   * @returns DeleteWorkspaceMembersResponse
   */
  async deleteWorkspaceMembers(request: $_model.DeleteWorkspaceMembersRequest): Promise<$_model.DeleteWorkspaceMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteWorkspaceMembersHeaders({ });
    return await this.deleteWorkspaceMembersWithOptions(request, headers, runtime);
  }

  /**
   * 删除块元素
   * 
   * @param tmpReq - DocBlocksDeleteRequest
   * @param tmpHeader - DocBlocksDeleteHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocBlocksDeleteResponse
   */
  async docBlocksDeleteWithOptions(tmpReq: $_model.DocBlocksDeleteRequest, tmpHeader: $_model.DocBlocksDeleteHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DocBlocksDeleteResponse> {
    tmpReq.validate();
    let request = new $_model.DocBlocksDeleteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DocBlocksDeleteShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.blockId)) {
      body["BlockId"] = request.blockId;
    }

    if (!$dara.isNull(request.dentryUuid)) {
      body["DentryUuid"] = request.dentryUuid;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocBlocksDelete",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/docBlocksDelete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocBlocksDeleteResponse>(await this.callApi(params, req, runtime), new $_model.DocBlocksDeleteResponse({}));
  }

  /**
   * 删除块元素
   * 
   * @param request - DocBlocksDeleteRequest
   * @returns DocBlocksDeleteResponse
   */
  async docBlocksDelete(request: $_model.DocBlocksDeleteRequest): Promise<$_model.DocBlocksDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DocBlocksDeleteHeaders({ });
    return await this.docBlocksDeleteWithOptions(request, headers, runtime);
  }

  /**
   * 更新块元素
   * 
   * @param tmpReq - DocBlocksModifyRequest
   * @param tmpHeader - DocBlocksModifyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocBlocksModifyResponse
   */
  async docBlocksModifyWithOptions(tmpReq: $_model.DocBlocksModifyRequest, tmpHeader: $_model.DocBlocksModifyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DocBlocksModifyResponse> {
    tmpReq.validate();
    let request = new $_model.DocBlocksModifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DocBlocksModifyShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.element)) {
      request.elementShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.element, "Element", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.blockId)) {
      body["BlockId"] = request.blockId;
    }

    if (!$dara.isNull(request.dentryUuid)) {
      body["DentryUuid"] = request.dentryUuid;
    }

    if (!$dara.isNull(request.elementShrink)) {
      body["Element"] = request.elementShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocBlocksModify",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/docBlocksModify`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocBlocksModifyResponse>(await this.callApi(params, req, runtime), new $_model.DocBlocksModifyResponse({}));
  }

  /**
   * 更新块元素
   * 
   * @param request - DocBlocksModifyRequest
   * @returns DocBlocksModifyResponse
   */
  async docBlocksModify(request: $_model.DocBlocksModifyRequest): Promise<$_model.DocBlocksModifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DocBlocksModifyHeaders({ });
    return await this.docBlocksModifyWithOptions(request, headers, runtime);
  }

  /**
   * 查询块元素
   * 
   * @param tmpReq - DocBlocksQueryRequest
   * @param tmpHeader - DocBlocksQueryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocBlocksQueryResponse
   */
  async docBlocksQueryWithOptions(tmpReq: $_model.DocBlocksQueryRequest, tmpHeader: $_model.DocBlocksQueryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DocBlocksQueryResponse> {
    tmpReq.validate();
    let request = new $_model.DocBlocksQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DocBlocksQueryShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.blockType)) {
      body["BlockType"] = request.blockType;
    }

    if (!$dara.isNull(request.docKey)) {
      body["DocKey"] = request.docKey;
    }

    if (!$dara.isNull(request.endIndex)) {
      body["EndIndex"] = request.endIndex;
    }

    if (!$dara.isNull(request.startIndex)) {
      body["StartIndex"] = request.startIndex;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocBlocksQuery",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/docBlocksQuery`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocBlocksQueryResponse>(await this.callApi(params, req, runtime), new $_model.DocBlocksQueryResponse({}));
  }

  /**
   * 查询块元素
   * 
   * @param request - DocBlocksQueryRequest
   * @returns DocBlocksQueryResponse
   */
  async docBlocksQuery(request: $_model.DocBlocksQueryRequest): Promise<$_model.DocBlocksQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DocBlocksQueryHeaders({ });
    return await this.docBlocksQueryWithOptions(request, headers, runtime);
  }

  /**
   * 覆写文档
   * 
   * @param tmpReq - DocUpdateContentRequest
   * @param tmpHeader - DocUpdateContentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocUpdateContentResponse
   */
  async docUpdateContentWithOptions(tmpReq: $_model.DocUpdateContentRequest, tmpHeader: $_model.DocUpdateContentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DocUpdateContentResponse> {
    tmpReq.validate();
    let request = new $_model.DocUpdateContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.DocUpdateContentShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.docKey)) {
      body["DocKey"] = request.docKey;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocUpdateContent",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/docUpdateContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocUpdateContentResponse>(await this.callApi(params, req, runtime), new $_model.DocUpdateContentResponse({}));
  }

  /**
   * 覆写文档
   * 
   * @param request - DocUpdateContentRequest
   * @returns DocUpdateContentResponse
   */
  async docUpdateContent(request: $_model.DocUpdateContentRequest): Promise<$_model.DocUpdateContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DocUpdateContentHeaders({ });
    return await this.docUpdateContentWithOptions(request, headers, runtime);
  }

  /**
   * 批量执行宜搭审批任务
   * 
   * @param request - ExecuteBatchTaskRequest
   * @param tmpHeader - ExecuteBatchTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteBatchTaskResponse
   */
  async executeBatchTaskWithOptions(request: $_model.ExecuteBatchTaskRequest, tmpHeader: $_model.ExecuteBatchTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteBatchTaskResponse> {
    request.validate();
    let headers = new $_model.ExecuteBatchTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.outResult)) {
      body["OutResult"] = request.outResult;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.taskInformationList)) {
      body["TaskInformationList"] = request.taskInformationList;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteBatchTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/executeBatchTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteBatchTaskResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteBatchTaskResponse({}));
  }

  /**
   * 批量执行宜搭审批任务
   * 
   * @param request - ExecuteBatchTaskRequest
   * @returns ExecuteBatchTaskResponse
   */
  async executeBatchTask(request: $_model.ExecuteBatchTaskRequest): Promise<$_model.ExecuteBatchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExecuteBatchTaskHeaders({ });
    return await this.executeBatchTaskWithOptions(request, headers, runtime);
  }

  /**
   * 执行宜搭的审批任务
   * 
   * @param request - ExecutePlatformTaskRequest
   * @param tmpHeader - ExecutePlatformTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecutePlatformTaskResponse
   */
  async executePlatformTaskWithOptions(request: $_model.ExecutePlatformTaskRequest, tmpHeader: $_model.ExecutePlatformTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExecutePlatformTaskResponse> {
    request.validate();
    let headers = new $_model.ExecutePlatformTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formDataJson)) {
      body["FormDataJson"] = request.formDataJson;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.noExecuteExpressions)) {
      body["NoExecuteExpressions"] = request.noExecuteExpressions;
    }

    if (!$dara.isNull(request.outResult)) {
      body["OutResult"] = request.outResult;
    }

    if (!$dara.isNull(request.processInstanceId)) {
      body["ProcessInstanceId"] = request.processInstanceId;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecutePlatformTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/executePlatformTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecutePlatformTaskResponse>(await this.callApi(params, req, runtime), new $_model.ExecutePlatformTaskResponse({}));
  }

  /**
   * 执行宜搭的审批任务
   * 
   * @param request - ExecutePlatformTaskRequest
   * @returns ExecutePlatformTaskResponse
   */
  async executePlatformTask(request: $_model.ExecutePlatformTaskRequest): Promise<$_model.ExecutePlatformTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExecutePlatformTaskHeaders({ });
    return await this.executePlatformTaskWithOptions(request, headers, runtime);
  }

  /**
   * 同意或拒绝宜搭审批任务(执行审批任务)
   * 
   * @param request - ExecuteTaskRequest
   * @param tmpHeader - ExecuteTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTaskResponse
   */
  async executeTaskWithOptions(request: $_model.ExecuteTaskRequest, tmpHeader: $_model.ExecuteTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTaskResponse> {
    request.validate();
    let headers = new $_model.ExecuteTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.digitalSignUrl)) {
      body["DigitalSignUrl"] = request.digitalSignUrl;
    }

    if (!$dara.isNull(request.formDataJson)) {
      body["FormDataJson"] = request.formDataJson;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.noExecuteExpressions)) {
      body["NoExecuteExpressions"] = request.noExecuteExpressions;
    }

    if (!$dara.isNull(request.outResult)) {
      body["OutResult"] = request.outResult;
    }

    if (!$dara.isNull(request.processInstanceId)) {
      body["ProcessInstanceId"] = request.processInstanceId;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/executeTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTaskResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTaskResponse({}));
  }

  /**
   * 同意或拒绝宜搭审批任务(执行审批任务)
   * 
   * @param request - ExecuteTaskRequest
   * @returns ExecuteTaskResponse
   */
  async executeTask(request: $_model.ExecuteTaskRequest): Promise<$_model.ExecuteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExecuteTaskHeaders({ });
    return await this.executeTaskWithOptions(request, headers, runtime);
  }

  /**
   * 群扩容
   * 
   * @param tmpReq - ExpandGroupCapacityRequest
   * @param tmpHeader - ExpandGroupCapacityHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExpandGroupCapacityResponse
   */
  async expandGroupCapacityWithOptions(tmpReq: $_model.ExpandGroupCapacityRequest, tmpHeader: $_model.ExpandGroupCapacityHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExpandGroupCapacityResponse> {
    tmpReq.validate();
    let request = new $_model.ExpandGroupCapacityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ExpandGroupCapacityShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openConversationId)) {
      body["OpenConversationId"] = request.openConversationId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExpandGroupCapacity",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/im/expandGroupCapacity`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExpandGroupCapacityResponse>(await this.callApi(params, req, runtime), new $_model.ExpandGroupCapacityResponse({}));
  }

  /**
   * 群扩容
   * 
   * @param request - ExpandGroupCapacityRequest
   * @returns ExpandGroupCapacityResponse
   */
  async expandGroupCapacity(request: $_model.ExpandGroupCapacityRequest): Promise<$_model.ExpandGroupCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExpandGroupCapacityHeaders({ });
    return await this.expandGroupCapacityWithOptions(request, headers, runtime);
  }

  /**
   * 完结工单
   * 
   * @param tmpReq - FinishTicketRequest
   * @param tmpHeader - FinishTicketHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishTicketResponse
   */
  async finishTicketWithOptions(tmpReq: $_model.FinishTicketRequest, tmpHeader: $_model.FinishTicketHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FinishTicketResponse> {
    tmpReq.validate();
    let request = new $_model.FinishTicketShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.FinishTicketShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.notify)) {
      request.notifyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notify, "Notify", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.ticketMemo)) {
      request.ticketMemoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ticketMemo, "TicketMemo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.notifyShrink)) {
      body["Notify"] = request.notifyShrink;
    }

    if (!$dara.isNull(request.openTeamId)) {
      body["OpenTeamId"] = request.openTeamId;
    }

    if (!$dara.isNull(request.openTicketId)) {
      body["OpenTicketId"] = request.openTicketId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.ticketMemoShrink)) {
      body["TicketMemo"] = request.ticketMemoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FinishTicket",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ticket/finishTicket`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FinishTicketResponse>(await this.callApi(params, req, runtime), new $_model.FinishTicketResponse({}));
  }

  /**
   * 完结工单
   * 
   * @param request - FinishTicketRequest
   * @returns FinishTicketResponse
   */
  async finishTicket(request: $_model.FinishTicketRequest): Promise<$_model.FinishTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FinishTicketHeaders({ });
    return await this.finishTicketWithOptions(request, headers, runtime);
  }

  /**
   * 获取流程设计的节点信息
   * 
   * @param request - GetActivityListRequest
   * @param tmpHeader - GetActivityListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetActivityListResponse
   */
  async getActivityListWithOptions(request: $_model.GetActivityListRequest, tmpHeader: $_model.GetActivityListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetActivityListResponse> {
    request.validate();
    let headers = new $_model.GetActivityListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.processCode)) {
      body["ProcessCode"] = request.processCode;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetActivityList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getActivityList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetActivityListResponse>(await this.callApi(params, req, runtime), new $_model.GetActivityListResponse({}));
  }

  /**
   * 获取流程设计的节点信息
   * 
   * @param request - GetActivityListRequest
   * @returns GetActivityListResponse
   */
  async getActivityList(request: $_model.GetActivityListRequest): Promise<$_model.GetActivityListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetActivityListHeaders({ });
    return await this.getActivityListWithOptions(request, headers, runtime);
  }

  /**
   * 获取阿里钉ai助理信息
   * 
   * @param tmpReq - GetAlidingAssistantInfoRequest
   * @param tmpHeader - GetAlidingAssistantInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlidingAssistantInfoResponse
   */
  async getAlidingAssistantInfoWithOptions(tmpReq: $_model.GetAlidingAssistantInfoRequest, tmpHeader: $_model.GetAlidingAssistantInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlidingAssistantInfoResponse> {
    tmpReq.validate();
    let request = new $_model.GetAlidingAssistantInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetAlidingAssistantInfoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistantId)) {
      body["AssistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlidingAssistantInfo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/aiagent/getAlidingAssistantInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlidingAssistantInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetAlidingAssistantInfoResponse({}));
  }

  /**
   * 获取阿里钉ai助理信息
   * 
   * @param request - GetAlidingAssistantInfoRequest
   * @returns GetAlidingAssistantInfoResponse
   */
  async getAlidingAssistantInfo(request: $_model.GetAlidingAssistantInfoRequest): Promise<$_model.GetAlidingAssistantInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetAlidingAssistantInfoHeaders({ });
    return await this.getAlidingAssistantInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取所有工作表
   * 
   * @param tmpReq - GetAllSheetsRequest
   * @param tmpHeader - GetAllSheetsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAllSheetsResponse
   */
  async getAllSheetsWithOptions(tmpReq: $_model.GetAllSheetsRequest, tmpHeader: $_model.GetAllSheetsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetAllSheetsResponse> {
    tmpReq.validate();
    let request = new $_model.GetAllSheetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetAllSheetsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAllSheets",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/getAllSheets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAllSheetsResponse>(await this.callApi(params, req, runtime), new $_model.GetAllSheetsResponse({}));
  }

  /**
   * 获取所有工作表
   * 
   * @param request - GetAllSheetsRequest
   * @returns GetAllSheetsResponse
   */
  async getAllSheets(request: $_model.GetAllSheetsRequest): Promise<$_model.GetAllSheetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetAllSheetsHeaders({ });
    return await this.getAllSheetsWithOptions(request, headers, runtime);
  }

  /**
   * 获取助理能力
   * 
   * @param request - GetAssistantCapabilityRequest
   * @param headers - GetAssistantCapabilityHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAssistantCapabilityResponse
   */
  async getAssistantCapabilityWithOptions(request: $_model.GetAssistantCapabilityRequest, headers: $_model.GetAssistantCapabilityHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetAssistantCapabilityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.extLoginUser)) {
      body["extLoginUser"] = request.extLoginUser;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.originalAssistantId)) {
      body["originalAssistantId"] = request.originalAssistantId;
    }

    if (!$dara.isNull(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.sourceIdOfOriginalAssistantId)) {
      body["sourceIdOfOriginalAssistantId"] = request.sourceIdOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.sourceTypeOfOriginalAssistantId)) {
      body["sourceTypeOfOriginalAssistantId"] = request.sourceTypeOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    if (!$dara.isNull(request.timeout)) {
      body["timeout"] = request.timeout;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountId)) {
      realHeaders["accountId"] = String(headers.accountId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAssistantCapability",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/assistant/getAssistantCapability`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAssistantCapabilityResponse>(await this.callApi(params, req, runtime), new $_model.GetAssistantCapabilityResponse({}));
  }

  /**
   * 获取助理能力
   * 
   * @param request - GetAssistantCapabilityRequest
   * @returns GetAssistantCapabilityResponse
   */
  async getAssistantCapability(request: $_model.GetAssistantCapabilityRequest): Promise<$_model.GetAssistantCapabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetAssistantCapabilityHeaders({ });
    return await this.getAssistantCapabilityWithOptions(request, headers, runtime);
  }

  /**
   * @param tmpReq - GetCardTemplateRequest
   * @param tmpHeader - GetCardTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCardTemplateResponse
   */
  async getCardTemplateWithOptions(tmpReq: $_model.GetCardTemplateRequest, tmpHeader: $_model.GetCardTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetCardTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.GetCardTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetCardTemplateShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCardTemplate",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/card/getCardTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCardTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetCardTemplateResponse({}));
  }

  /**
   * @param request - GetCardTemplateRequest
   * @returns GetCardTemplateResponse
   */
  async getCardTemplate(request: $_model.GetCardTemplateRequest): Promise<$_model.GetCardTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetCardTemplateHeaders({ });
    return await this.getCardTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 获取群存储空间信息
   * 
   * @param tmpReq - GetConversaionSpaceRequest
   * @param tmpHeader - GetConversaionSpaceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConversaionSpaceResponse
   */
  async getConversaionSpaceWithOptions(tmpReq: $_model.GetConversaionSpaceRequest, tmpHeader: $_model.GetConversaionSpaceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetConversaionSpaceResponse> {
    tmpReq.validate();
    let request = new $_model.GetConversaionSpaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetConversaionSpaceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openConversationId)) {
      body["OpenConversationId"] = request.openConversationId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConversaionSpace",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/getConversaionSpace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConversaionSpaceResponse>(await this.callApi(params, req, runtime), new $_model.GetConversaionSpaceResponse({}));
  }

  /**
   * 获取群存储空间信息
   * 
   * @param request - GetConversaionSpaceRequest
   * @returns GetConversaionSpaceResponse
   */
  async getConversaionSpace(request: $_model.GetConversaionSpaceRequest): Promise<$_model.GetConversaionSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetConversaionSpaceHeaders({ });
    return await this.getConversaionSpaceWithOptions(request, headers, runtime);
  }

  /**
   * 获取组织内已完成的审批任务
   * 
   * @param request - GetCorpAccomplishmentTasksRequest
   * @param tmpHeader - GetCorpAccomplishmentTasksHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCorpAccomplishmentTasksResponse
   */
  async getCorpAccomplishmentTasksWithOptions(request: $_model.GetCorpAccomplishmentTasksRequest, tmpHeader: $_model.GetCorpAccomplishmentTasksHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetCorpAccomplishmentTasksResponse> {
    request.validate();
    let headers = new $_model.GetCorpAccomplishmentTasksShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appTypes)) {
      body["AppTypes"] = request.appTypes;
    }

    if (!$dara.isNull(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.processCodes)) {
      body["ProcessCodes"] = request.processCodes;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCorpAccomplishmentTasks",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getCorpAccomplishmentTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCorpAccomplishmentTasksResponse>(await this.callApi(params, req, runtime), new $_model.GetCorpAccomplishmentTasksResponse({}));
  }

  /**
   * 获取组织内已完成的审批任务
   * 
   * @param request - GetCorpAccomplishmentTasksRequest
   * @returns GetCorpAccomplishmentTasksResponse
   */
  async getCorpAccomplishmentTasks(request: $_model.GetCorpAccomplishmentTasksRequest): Promise<$_model.GetCorpAccomplishmentTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetCorpAccomplishmentTasksHeaders({ });
    return await this.getCorpAccomplishmentTasksWithOptions(request, headers, runtime);
  }

  /**
   * 获取任务列表（组织维度）
   * 
   * @param request - GetCorpTasksRequest
   * @param tmpHeader - GetCorpTasksHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCorpTasksResponse
   */
  async getCorpTasksWithOptions(request: $_model.GetCorpTasksRequest, tmpHeader: $_model.GetCorpTasksHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetCorpTasksResponse> {
    request.validate();
    let headers = new $_model.GetCorpTasksShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appTypes)) {
      body["AppTypes"] = request.appTypes;
    }

    if (!$dara.isNull(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.processCodes)) {
      body["ProcessCodes"] = request.processCodes;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCorpTasks",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getCorpTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCorpTasksResponse>(await this.callApi(params, req, runtime), new $_model.GetCorpTasksResponse({}));
  }

  /**
   * 获取任务列表（组织维度）
   * 
   * @param request - GetCorpTasksRequest
   * @returns GetCorpTasksResponse
   */
  async getCorpTasks(request: $_model.GetCorpTasksRequest): Promise<$_model.GetCorpTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetCorpTasksHeaders({ });
    return await this.getCorpTasksWithOptions(request, headers, runtime);
  }

  /**
   * @param tmpReq - GetDeptNoRequest
   * @param tmpHeader - GetDeptNoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeptNoResponse
   */
  async getDeptNoWithOptions(tmpReq: $_model.GetDeptNoRequest, tmpHeader: $_model.GetDeptNoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeptNoResponse> {
    tmpReq.validate();
    let request = new $_model.GetDeptNoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetDeptNoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.deptId)) {
      body["deptId"] = request.deptId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeptNo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/dept/getDeptNo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeptNoResponse>(await this.callApi(params, req, runtime), new $_model.GetDeptNoResponse({}));
  }

  /**
   * @param request - GetDeptNoRequest
   * @returns GetDeptNoResponse
   */
  async getDeptNo(request: $_model.GetDeptNoRequest): Promise<$_model.GetDeptNoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDeptNoHeaders({ });
    return await this.getDeptNoWithOptions(request, headers, runtime);
  }

  /**
   * 委托权限获取文档内容
   * 
   * @param tmpReq - GetDocContentRequest
   * @param tmpHeader - GetDocContentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocContentResponse
   */
  async getDocContentWithOptions(tmpReq: $_model.GetDocContentRequest, tmpHeader: $_model.GetDocContentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocContentResponse> {
    tmpReq.validate();
    let request = new $_model.GetDocContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetDocContentShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryUuid)) {
      body["DentryUuid"] = request.dentryUuid;
    }

    if (!$dara.isNull(request.targetFormat)) {
      body["TargetFormat"] = request.targetFormat;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.userToken)) {
      body["userToken"] = request.userToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocContent",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/getDocContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocContentResponse>(await this.callApi(params, req, runtime), new $_model.GetDocContentResponse({}));
  }

  /**
   * 委托权限获取文档内容
   * 
   * @param request - GetDocContentRequest
   * @returns GetDocContentResponse
   */
  async getDocContent(request: $_model.GetDocContentRequest): Promise<$_model.GetDocContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDocContentHeaders({ });
    return await this.getDocContentWithOptions(request, headers, runtime);
  }

  /**
   * 委托权限获取文档内容taskId
   * 
   * @param tmpReq - GetDocContentTakIdRequest
   * @param tmpHeader - GetDocContentTakIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocContentTakIdResponse
   */
  async getDocContentTakIdWithOptions(tmpReq: $_model.GetDocContentTakIdRequest, tmpHeader: $_model.GetDocContentTakIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocContentTakIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetDocContentTakIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetDocContentTakIdShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryUuid)) {
      body["DentryUuid"] = request.dentryUuid;
    }

    if (!$dara.isNull(request.generateCp)) {
      body["GenerateCp"] = request.generateCp;
    }

    if (!$dara.isNull(request.targetFormat)) {
      body["TargetFormat"] = request.targetFormat;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocContentTakId",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/getDocContentTakId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocContentTakIdResponse>(await this.callApi(params, req, runtime), new $_model.GetDocContentTakIdResponse({}));
  }

  /**
   * 委托权限获取文档内容taskId
   * 
   * @param request - GetDocContentTakIdRequest
   * @returns GetDocContentTakIdResponse
   */
  async getDocContentTakId(request: $_model.GetDocContentTakIdRequest): Promise<$_model.GetDocContentTakIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDocContentTakIdHeaders({ });
    return await this.getDocContentTakIdWithOptions(request, headers, runtime);
  }

  /**
   * 查询单个日程详情
   * 
   * @param request - GetEventRequest
   * @param tmpHeader - GetEventHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEventResponse
   */
  async getEventWithOptions(request: $_model.GetEventRequest, tmpHeader: $_model.GetEventHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetEventResponse> {
    request.validate();
    let headers = new $_model.GetEventShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxAttendees)) {
      query["MaxAttendees"] = request.maxAttendees;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.eventId)) {
      body["EventId"] = request.eventId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEvent",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/getEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEventResponse>(await this.callApi(params, req, runtime), new $_model.GetEventResponse({}));
  }

  /**
   * 查询单个日程详情
   * 
   * @param request - GetEventRequest
   * @returns GetEventResponse
   */
  async getEvent(request: $_model.GetEventRequest): Promise<$_model.GetEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetEventHeaders({ });
    return await this.getEventWithOptions(request, headers, runtime);
  }

  /**
   * 获取表单内的组件信息
   * 
   * @param request - GetFieldDefByUuidRequest
   * @param tmpHeader - GetFieldDefByUuidHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFieldDefByUuidResponse
   */
  async getFieldDefByUuidWithOptions(request: $_model.GetFieldDefByUuidRequest, tmpHeader: $_model.GetFieldDefByUuidHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetFieldDefByUuidResponse> {
    request.validate();
    let headers = new $_model.GetFieldDefByUuidShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFieldDefByUuid",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getFieldDefByUuid`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFieldDefByUuidResponse>(await this.callApi(params, req, runtime), new $_model.GetFieldDefByUuidResponse({}));
  }

  /**
   * 获取表单内的组件信息
   * 
   * @param request - GetFieldDefByUuidRequest
   * @returns GetFieldDefByUuidResponse
   */
  async getFieldDefByUuid(request: $_model.GetFieldDefByUuidRequest): Promise<$_model.GetFieldDefByUuidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetFieldDefByUuidHeaders({ });
    return await this.getFieldDefByUuidWithOptions(request, headers, runtime);
  }

  /**
   * 获取文件下载信息
   * 
   * @param tmpReq - GetFileDownloadInfoRequest
   * @param tmpHeader - GetFileDownloadInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileDownloadInfoResponse
   */
  async getFileDownloadInfoWithOptions(tmpReq: $_model.GetFileDownloadInfoRequest, tmpHeader: $_model.GetFileDownloadInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileDownloadInfoResponse> {
    tmpReq.validate();
    let request = new $_model.GetFileDownloadInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetFileDownloadInfoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryId)) {
      body["DentryId"] = request.dentryId;
    }

    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileDownloadInfo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/getFileDownloadInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileDownloadInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetFileDownloadInfoResponse({}));
  }

  /**
   * 获取文件下载信息
   * 
   * @param request - GetFileDownloadInfoRequest
   * @returns GetFileDownloadInfoResponse
   */
  async getFileDownloadInfo(request: $_model.GetFileDownloadInfoRequest): Promise<$_model.GetFileDownloadInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetFileDownloadInfoHeaders({ });
    return await this.getFileDownloadInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取文件上传信息
   * 
   * @param tmpReq - GetFileUploadInfoRequest
   * @param tmpHeader - GetFileUploadInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileUploadInfoResponse
   */
  async getFileUploadInfoWithOptions(tmpReq: $_model.GetFileUploadInfoRequest, tmpHeader: $_model.GetFileUploadInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileUploadInfoResponse> {
    tmpReq.validate();
    let request = new $_model.GetFileUploadInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetFileUploadInfoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.parentDentryUuid)) {
      body["ParentDentryUuid"] = request.parentDentryUuid;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileUploadInfo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/getFileUploadInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileUploadInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetFileUploadInfoResponse({}));
  }

  /**
   * 获取文件上传信息
   * 
   * @param request - GetFileUploadInfoRequest
   * @returns GetFileUploadInfoResponse
   */
  async getFileUploadInfo(request: $_model.GetFileUploadInfoRequest): Promise<$_model.GetFileUploadInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetFileUploadInfoHeaders({ });
    return await this.getFileUploadInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取表单组件定义列表
   * 
   * @param request - GetFormComponentDefinitionListRequest
   * @param tmpHeader - GetFormComponentDefinitionListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFormComponentDefinitionListResponse
   */
  async getFormComponentDefinitionListWithOptions(request: $_model.GetFormComponentDefinitionListRequest, tmpHeader: $_model.GetFormComponentDefinitionListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetFormComponentDefinitionListResponse> {
    request.validate();
    let headers = new $_model.GetFormComponentDefinitionListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFormComponentDefinitionList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getFormComponentDefinitionList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFormComponentDefinitionListResponse>(await this.callApi(params, req, runtime), new $_model.GetFormComponentDefinitionListResponse({}));
  }

  /**
   * 获取表单组件定义列表
   * 
   * @param request - GetFormComponentDefinitionListRequest
   * @returns GetFormComponentDefinitionListResponse
   */
  async getFormComponentDefinitionList(request: $_model.GetFormComponentDefinitionListRequest): Promise<$_model.GetFormComponentDefinitionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetFormComponentDefinitionListHeaders({ });
    return await this.getFormComponentDefinitionListWithOptions(request, headers, runtime);
  }

  /**
   * 查询表单数据
   * 
   * @param request - GetFormDataByIDRequest
   * @param tmpHeader - GetFormDataByIDHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFormDataByIDResponse
   */
  async getFormDataByIDWithOptions(request: $_model.GetFormDataByIDRequest, tmpHeader: $_model.GetFormDataByIDHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetFormDataByIDResponse> {
    request.validate();
    let headers = new $_model.GetFormDataByIDShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFormDataByID",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getFormDataByID`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFormDataByIDResponse>(await this.callApi(params, req, runtime), new $_model.GetFormDataByIDResponse({}));
  }

  /**
   * 查询表单数据
   * 
   * @param request - GetFormDataByIDRequest
   * @returns GetFormDataByIDResponse
   */
  async getFormDataByID(request: $_model.GetFormDataByIDRequest): Promise<$_model.GetFormDataByIDResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetFormDataByIDHeaders({ });
    return await this.getFormDataByIDWithOptions(request, headers, runtime);
  }

  /**
   * 获取指定应用下的表单列表
   * 
   * @param request - GetFormListInAppRequest
   * @param tmpHeader - GetFormListInAppHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFormListInAppResponse
   */
  async getFormListInAppWithOptions(request: $_model.GetFormListInAppRequest, tmpHeader: $_model.GetFormListInAppHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetFormListInAppResponse> {
    request.validate();
    let headers = new $_model.GetFormListInAppShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formTypes)) {
      body["FormTypes"] = request.formTypes;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFormListInApp",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getFormListInApp`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFormListInAppResponse>(await this.callApi(params, req, runtime), new $_model.GetFormListInAppResponse({}));
  }

  /**
   * 获取指定应用下的表单列表
   * 
   * @param request - GetFormListInAppRequest
   * @returns GetFormListInAppResponse
   */
  async getFormListInApp(request: $_model.GetFormListInAppRequest): Promise<$_model.GetFormListInAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetFormListInAppHeaders({ });
    return await this.getFormListInAppWithOptions(request, headers, runtime);
  }

  /**
   * 查询群内直播信息(最早支持2024年01月数据)
   * 
   * @param tmpReq - GetGroupLiveListRequest
   * @param tmpHeader - GetGroupLiveListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupLiveListResponse
   */
  async getGroupLiveListWithOptions(tmpReq: $_model.GetGroupLiveListRequest, tmpHeader: $_model.GetGroupLiveListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupLiveListResponse> {
    tmpReq.validate();
    let request = new $_model.GetGroupLiveListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetGroupLiveListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.openConversationId)) {
      body["OpenConversationId"] = request.openConversationId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroupLiveList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/getGroupLiveList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupLiveListResponse>(await this.callApi(params, req, runtime), new $_model.GetGroupLiveListResponse({}));
  }

  /**
   * 查询群内直播信息(最早支持2024年01月数据)
   * 
   * @param request - GetGroupLiveListRequest
   * @returns GetGroupLiveListResponse
   */
  async getGroupLiveList(request: $_model.GetGroupLiveListRequest): Promise<$_model.GetGroupLiveListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetGroupLiveListHeaders({ });
    return await this.getGroupLiveListWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业内部群成员
   * 
   * @param request - GetInnerGroupMembersRequest
   * @param tmpHeader - GetInnerGroupMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInnerGroupMembersResponse
   */
  async getInnerGroupMembersWithOptions(request: $_model.GetInnerGroupMembersRequest, tmpHeader: $_model.GetInnerGroupMembersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetInnerGroupMembersResponse> {
    request.validate();
    let headers = new $_model.GetInnerGroupMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.openConversationId)) {
      body["OpenConversationId"] = request.openConversationId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInnerGroupMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/getInnerGroupMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInnerGroupMembersResponse>(await this.callApi(params, req, runtime), new $_model.GetInnerGroupMembersResponse({}));
  }

  /**
   * 查询企业内部群成员
   * 
   * @param request - GetInnerGroupMembersRequest
   * @returns GetInnerGroupMembersResponse
   */
  async getInnerGroupMembers(request: $_model.GetInnerGroupMembersRequest): Promise<$_model.GetInnerGroupMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetInnerGroupMembersHeaders({ });
    return await this.getInnerGroupMembersWithOptions(request, headers, runtime);
  }

  /**
   * 根据流程实例ID获取流程实例
   * 
   * @param request - GetInstanceByIdRequest
   * @param tmpHeader - GetInstanceByIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceByIdResponse
   */
  async getInstanceByIdWithOptions(request: $_model.GetInstanceByIdRequest, tmpHeader: $_model.GetInstanceByIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceByIdResponse> {
    request.validate();
    let headers = new $_model.GetInstanceByIdShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceById",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getInstanceById`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceByIdResponse({}));
  }

  /**
   * 根据流程实例ID获取流程实例
   * 
   * @param request - GetInstanceByIdRequest
   * @returns GetInstanceByIdResponse
   */
  async getInstanceById(request: $_model.GetInstanceByIdRequest): Promise<$_model.GetInstanceByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetInstanceByIdHeaders({ });
    return await this.getInstanceByIdWithOptions(request, headers, runtime);
  }

  /**
   * 获取实例ID列表
   * 
   * @param request - GetInstanceIdListRequest
   * @param tmpHeader - GetInstanceIdListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceIdListResponse
   */
  async getInstanceIdListWithOptions(request: $_model.GetInstanceIdListRequest, tmpHeader: $_model.GetInstanceIdListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceIdListResponse> {
    request.validate();
    let headers = new $_model.GetInstanceIdListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.approvedResult)) {
      body["ApprovedResult"] = request.approvedResult;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      body["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.modifiedFromTimeGMT)) {
      body["ModifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!$dara.isNull(request.modifiedToTimeGMT)) {
      body["ModifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!$dara.isNull(request.originatorId)) {
      body["OriginatorId"] = request.originatorId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchFieldJson)) {
      body["SearchFieldJson"] = request.searchFieldJson;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceIdList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getInstanceIdList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceIdListResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceIdListResponse({}));
  }

  /**
   * 获取实例ID列表
   * 
   * @param request - GetInstanceIdListRequest
   * @returns GetInstanceIdListResponse
   */
  async getInstanceIdList(request: $_model.GetInstanceIdListRequest): Promise<$_model.GetInstanceIdListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetInstanceIdListHeaders({ });
    return await this.getInstanceIdListWithOptions(request, headers, runtime);
  }

  /**
   * 获取流程实例
   * 
   * @param request - GetInstancesRequest
   * @param tmpHeader - GetInstancesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstancesResponse
   */
  async getInstancesWithOptions(request: $_model.GetInstancesRequest, tmpHeader: $_model.GetInstancesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstancesResponse> {
    request.validate();
    let headers = new $_model.GetInstancesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.approvedResult)) {
      body["ApprovedResult"] = request.approvedResult;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      body["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.modifiedFromTimeGMT)) {
      body["ModifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!$dara.isNull(request.modifiedToTimeGMT)) {
      body["ModifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!$dara.isNull(request.orderConfigJson)) {
      body["OrderConfigJson"] = request.orderConfigJson;
    }

    if (!$dara.isNull(request.originatorId)) {
      body["OriginatorId"] = request.originatorId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchFieldJson)) {
      body["SearchFieldJson"] = request.searchFieldJson;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstances",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getInstances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstancesResponse>(await this.callApi(params, req, runtime), new $_model.GetInstancesResponse({}));
  }

  /**
   * 获取流程实例
   * 
   * @param request - GetInstancesRequest
   * @returns GetInstancesResponse
   */
  async getInstances(request: $_model.GetInstancesRequest): Promise<$_model.GetInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetInstancesHeaders({ });
    return await this.getInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 根据实例 ID 列表批量获取流程实例详情(批量获取流程实例列表)
   * 
   * @param request - GetInstancesByIdListRequest
   * @param tmpHeader - GetInstancesByIdListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstancesByIdListResponse
   */
  async getInstancesByIdListWithOptions(request: $_model.GetInstancesByIdListRequest, tmpHeader: $_model.GetInstancesByIdListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstancesByIdListResponse> {
    request.validate();
    let headers = new $_model.GetInstancesByIdListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.processInstanceIds)) {
      body["ProcessInstanceIds"] = request.processInstanceIds;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstancesByIdList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getInstancesByIdList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstancesByIdListResponse>(await this.callApi(params, req, runtime), new $_model.GetInstancesByIdListResponse({}));
  }

  /**
   * 根据实例 ID 列表批量获取流程实例详情(批量获取流程实例列表)
   * 
   * @param request - GetInstancesByIdListRequest
   * @returns GetInstancesByIdListResponse
   */
  async getInstancesByIdList(request: $_model.GetInstancesByIdListRequest): Promise<$_model.GetInstancesByIdListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetInstancesByIdListHeaders({ });
    return await this.getInstancesByIdListWithOptions(request, headers, runtime);
  }

  /**
   * 获取直播的可下载回放地址
   * 
   * @param tmpReq - GetLiveReplayUrlRequest
   * @param tmpHeader - GetLiveReplayUrlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLiveReplayUrlResponse
   */
  async getLiveReplayUrlWithOptions(tmpReq: $_model.GetLiveReplayUrlRequest, tmpHeader: $_model.GetLiveReplayUrlHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetLiveReplayUrlResponse> {
    tmpReq.validate();
    let request = new $_model.GetLiveReplayUrlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetLiveReplayUrlShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLiveReplayUrl",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/getLiveReplayUrl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLiveReplayUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetLiveReplayUrlResponse({}));
  }

  /**
   * 获取直播的可下载回放地址
   * 
   * @param request - GetLiveReplayUrlRequest
   * @returns GetLiveReplayUrlResponse
   */
  async getLiveReplayUrl(request: $_model.GetLiveReplayUrlRequest): Promise<$_model.GetLiveReplayUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetLiveReplayUrlHeaders({ });
    return await this.getLiveReplayUrlWithOptions(request, headers, runtime);
  }

  /**
   * 获取组织内某人提交的任务
   * 
   * @param request - GetMeCorpSubmissionRequest
   * @param tmpHeader - GetMeCorpSubmissionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMeCorpSubmissionResponse
   */
  async getMeCorpSubmissionWithOptions(request: $_model.GetMeCorpSubmissionRequest, tmpHeader: $_model.GetMeCorpSubmissionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetMeCorpSubmissionResponse> {
    request.validate();
    let headers = new $_model.GetMeCorpSubmissionShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appTypes)) {
      body["AppTypes"] = request.appTypes;
    }

    if (!$dara.isNull(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.processCodes)) {
      body["ProcessCodes"] = request.processCodes;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMeCorpSubmission",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getMeCorpSubmission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMeCorpSubmissionResponse>(await this.callApi(params, req, runtime), new $_model.GetMeCorpSubmissionResponse({}));
  }

  /**
   * 获取组织内某人提交的任务
   * 
   * @param request - GetMeCorpSubmissionRequest
   * @returns GetMeCorpSubmissionResponse
   */
  async getMeCorpSubmission(request: $_model.GetMeCorpSubmissionRequest): Promise<$_model.GetMeCorpSubmissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetMeCorpSubmissionHeaders({ });
    return await this.getMeCorpSubmissionWithOptions(request, headers, runtime);
  }

  /**
   * 获取会议室忙闲信息
   * 
   * @param tmpReq - GetMeetingRoomsScheduleRequest
   * @param tmpHeader - GetMeetingRoomsScheduleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMeetingRoomsScheduleResponse
   */
  async getMeetingRoomsScheduleWithOptions(tmpReq: $_model.GetMeetingRoomsScheduleRequest, tmpHeader: $_model.GetMeetingRoomsScheduleHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetMeetingRoomsScheduleResponse> {
    tmpReq.validate();
    let request = new $_model.GetMeetingRoomsScheduleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetMeetingRoomsScheduleShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.roomIds)) {
      request.roomIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomIds, "RoomIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.roomIdsShrink)) {
      body["RoomIds"] = request.roomIdsShrink;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMeetingRoomsSchedule",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/getMeetingRoomsSchedule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMeetingRoomsScheduleResponse>(await this.callApi(params, req, runtime), new $_model.GetMeetingRoomsScheduleResponse({}));
  }

  /**
   * 获取会议室忙闲信息
   * 
   * @param request - GetMeetingRoomsScheduleRequest
   * @returns GetMeetingRoomsScheduleResponse
   */
  async getMeetingRoomsSchedule(request: $_model.GetMeetingRoomsScheduleRequest): Promise<$_model.GetMeetingRoomsScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetMeetingRoomsScheduleHeaders({ });
    return await this.getMeetingRoomsScheduleWithOptions(request, headers, runtime);
  }

  /**
   * 获取我的文档知识库信息
   * 
   * @param tmpReq - GetMineWorkspaceRequest
   * @param tmpHeader - GetMineWorkspaceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMineWorkspaceResponse
   */
  async getMineWorkspaceWithOptions(tmpReq: $_model.GetMineWorkspaceRequest, tmpHeader: $_model.GetMineWorkspaceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetMineWorkspaceResponse> {
    tmpReq.validate();
    let request = new $_model.GetMineWorkspaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetMineWorkspaceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMineWorkspace",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/getMineWorkspace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMineWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.GetMineWorkspaceResponse({}));
  }

  /**
   * 获取我的文档知识库信息
   * 
   * @param request - GetMineWorkspaceRequest
   * @returns GetMineWorkspaceResponse
   */
  async getMineWorkspace(request: $_model.GetMineWorkspaceRequest): Promise<$_model.GetMineWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetMineWorkspaceHeaders({ });
    return await this.getMineWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * 获取所有字段
   * 
   * @param tmpReq - GetMultiDimTableAllFieldsRequest
   * @param tmpHeader - GetMultiDimTableAllFieldsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiDimTableAllFieldsResponse
   */
  async getMultiDimTableAllFieldsWithOptions(tmpReq: $_model.GetMultiDimTableAllFieldsRequest, tmpHeader: $_model.GetMultiDimTableAllFieldsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiDimTableAllFieldsResponse> {
    tmpReq.validate();
    let request = new $_model.GetMultiDimTableAllFieldsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetMultiDimTableAllFieldsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.sheetIdOrName)) {
      body["SheetIdOrName"] = request.sheetIdOrName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiDimTableAllFields",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/getMultiDimTableAllFields`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiDimTableAllFieldsResponse>(await this.callApi(params, req, runtime), new $_model.GetMultiDimTableAllFieldsResponse({}));
  }

  /**
   * 获取所有字段
   * 
   * @param request - GetMultiDimTableAllFieldsRequest
   * @returns GetMultiDimTableAllFieldsResponse
   */
  async getMultiDimTableAllFields(request: $_model.GetMultiDimTableAllFieldsRequest): Promise<$_model.GetMultiDimTableAllFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetMultiDimTableAllFieldsHeaders({ });
    return await this.getMultiDimTableAllFieldsWithOptions(request, headers, runtime);
  }

  /**
   * 获取所有数据表
   * 
   * @param tmpReq - GetMultiDimTableAllSheetsRequest
   * @param tmpHeader - GetMultiDimTableAllSheetsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiDimTableAllSheetsResponse
   */
  async getMultiDimTableAllSheetsWithOptions(tmpReq: $_model.GetMultiDimTableAllSheetsRequest, tmpHeader: $_model.GetMultiDimTableAllSheetsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiDimTableAllSheetsResponse> {
    tmpReq.validate();
    let request = new $_model.GetMultiDimTableAllSheetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetMultiDimTableAllSheetsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiDimTableAllSheets",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/getMultiDimTableAllSheets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiDimTableAllSheetsResponse>(await this.callApi(params, req, runtime), new $_model.GetMultiDimTableAllSheetsResponse({}));
  }

  /**
   * 获取所有数据表
   * 
   * @param request - GetMultiDimTableAllSheetsRequest
   * @returns GetMultiDimTableAllSheetsResponse
   */
  async getMultiDimTableAllSheets(request: $_model.GetMultiDimTableAllSheetsRequest): Promise<$_model.GetMultiDimTableAllSheetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetMultiDimTableAllSheetsHeaders({ });
    return await this.getMultiDimTableAllSheetsWithOptions(request, headers, runtime);
  }

  /**
   * 获取记录
   * 
   * @param tmpReq - GetMultiDimTableRecordRequest
   * @param tmpHeader - GetMultiDimTableRecordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiDimTableRecordResponse
   */
  async getMultiDimTableRecordWithOptions(tmpReq: $_model.GetMultiDimTableRecordRequest, tmpHeader: $_model.GetMultiDimTableRecordHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiDimTableRecordResponse> {
    tmpReq.validate();
    let request = new $_model.GetMultiDimTableRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetMultiDimTableRecordShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.recordId)) {
      body["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.sheetIdOrName)) {
      body["SheetIdOrName"] = request.sheetIdOrName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiDimTableRecord",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/getMultiDimTableRecord`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiDimTableRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetMultiDimTableRecordResponse({}));
  }

  /**
   * 获取记录
   * 
   * @param request - GetMultiDimTableRecordRequest
   * @returns GetMultiDimTableRecordResponse
   */
  async getMultiDimTableRecord(request: $_model.GetMultiDimTableRecordRequest): Promise<$_model.GetMultiDimTableRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetMultiDimTableRecordHeaders({ });
    return await this.getMultiDimTableRecordWithOptions(request, headers, runtime);
  }

  /**
   * 获取数据表
   * 
   * @param tmpReq - GetMultiDimTableSheetRequest
   * @param tmpHeader - GetMultiDimTableSheetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiDimTableSheetResponse
   */
  async getMultiDimTableSheetWithOptions(tmpReq: $_model.GetMultiDimTableSheetRequest, tmpHeader: $_model.GetMultiDimTableSheetHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiDimTableSheetResponse> {
    tmpReq.validate();
    let request = new $_model.GetMultiDimTableSheetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetMultiDimTableSheetShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.sheetIdOrName)) {
      body["SheetIdOrName"] = request.sheetIdOrName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiDimTableSheet",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/getMultiDimTableSheet`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiDimTableSheetResponse>(await this.callApi(params, req, runtime), new $_model.GetMultiDimTableSheetResponse({}));
  }

  /**
   * 获取数据表
   * 
   * @param request - GetMultiDimTableSheetRequest
   * @returns GetMultiDimTableSheetResponse
   */
  async getMultiDimTableSheet(request: $_model.GetMultiDimTableSheetRequest): Promise<$_model.GetMultiDimTableSheetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetMultiDimTableSheetHeaders({ });
    return await this.getMultiDimTableSheetWithOptions(request, headers, runtime);
  }

  /**
   * 获取文件分片上传信息
   * 
   * @param tmpReq - GetMultipartFileUploadInfosRequest
   * @param tmpHeader - GetMultipartFileUploadInfosHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultipartFileUploadInfosResponse
   */
  async getMultipartFileUploadInfosWithOptions(tmpReq: $_model.GetMultipartFileUploadInfosRequest, tmpHeader: $_model.GetMultipartFileUploadInfosHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultipartFileUploadInfosResponse> {
    tmpReq.validate();
    let request = new $_model.GetMultipartFileUploadInfosShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetMultipartFileUploadInfosShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.partNumbers)) {
      request.partNumbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partNumbers, "PartNumbers", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.partNumbersShrink)) {
      body["PartNumbers"] = request.partNumbersShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.uploadKey)) {
      body["UploadKey"] = request.uploadKey;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultipartFileUploadInfos",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/GetMultipartFileUploadInfos`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultipartFileUploadInfosResponse>(await this.callApi(params, req, runtime), new $_model.GetMultipartFileUploadInfosResponse({}));
  }

  /**
   * 获取文件分片上传信息
   * 
   * @param request - GetMultipartFileUploadInfosRequest
   * @returns GetMultipartFileUploadInfosResponse
   */
  async getMultipartFileUploadInfos(request: $_model.GetMultipartFileUploadInfosRequest): Promise<$_model.GetMultipartFileUploadInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetMultipartFileUploadInfosHeaders({ });
    return await this.getMultipartFileUploadInfosWithOptions(request, headers, runtime);
  }

  /**
   * 查询最近活跃的企业内部群列表
   * 
   * @param tmpReq - GetNewestInnerGroupsRequest
   * @param tmpHeader - GetNewestInnerGroupsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNewestInnerGroupsResponse
   */
  async getNewestInnerGroupsWithOptions(tmpReq: $_model.GetNewestInnerGroupsRequest, tmpHeader: $_model.GetNewestInnerGroupsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetNewestInnerGroupsResponse> {
    tmpReq.validate();
    let request = new $_model.GetNewestInnerGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetNewestInnerGroupsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNewestInnerGroups",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/getNewestInnerGroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNewestInnerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.GetNewestInnerGroupsResponse({}));
  }

  /**
   * 查询最近活跃的企业内部群列表
   * 
   * @param request - GetNewestInnerGroupsRequest
   * @returns GetNewestInnerGroupsResponse
   */
  async getNewestInnerGroups(request: $_model.GetNewestInnerGroupsRequest): Promise<$_model.GetNewestInnerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetNewestInnerGroupsHeaders({ });
    return await this.getNewestInnerGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 获取节点
   * 
   * @param tmpReq - GetNodeRequest
   * @param tmpHeader - GetNodeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeResponse
   */
  async getNodeWithOptions(tmpReq: $_model.GetNodeRequest, tmpHeader: $_model.GetNodeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeResponse> {
    tmpReq.validate();
    let request = new $_model.GetNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetNodeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.withPermissionRole)) {
      body["WithPermissionRole"] = request.withPermissionRole;
    }

    if (!$dara.isNull(request.withStatisticalInfo)) {
      body["WithStatisticalInfo"] = request.withStatisticalInfo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNode",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/getNode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeResponse({}));
  }

  /**
   * 获取节点
   * 
   * @param request - GetNodeRequest
   * @returns GetNodeResponse
   */
  async getNode(request: $_model.GetNodeRequest): Promise<$_model.GetNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetNodeHeaders({ });
    return await this.getNodeWithOptions(request, headers, runtime);
  }

  /**
   * 通过链接获取节点
   * 
   * @param tmpReq - GetNodeByUrlRequest
   * @param tmpHeader - GetNodeByUrlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeByUrlResponse
   */
  async getNodeByUrlWithOptions(tmpReq: $_model.GetNodeByUrlRequest, tmpHeader: $_model.GetNodeByUrlHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeByUrlResponse> {
    tmpReq.validate();
    let request = new $_model.GetNodeByUrlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetNodeByUrlShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeByUrl",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/getNodeByUrl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeByUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeByUrlResponse({}));
  }

  /**
   * 通过链接获取节点
   * 
   * @param request - GetNodeByUrlRequest
   * @returns GetNodeByUrlResponse
   */
  async getNodeByUrl(request: $_model.GetNodeByUrlRequest): Promise<$_model.GetNodeByUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetNodeByUrlHeaders({ });
    return await this.getNodeByUrlWithOptions(request, headers, runtime);
  }

  /**
   * 批量获取节点
   * 
   * @param tmpReq - GetNodesRequest
   * @param tmpHeader - GetNodesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodesResponse
   */
  async getNodesWithOptions(tmpReq: $_model.GetNodesRequest, tmpHeader: $_model.GetNodesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodesResponse> {
    tmpReq.validate();
    let request = new $_model.GetNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetNodesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.nodeIds)) {
      request.nodeIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIds, "NodeIds", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeIdsShrink)) {
      body["NodeIds"] = request.nodeIdsShrink;
    }

    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodes",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/getNodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodesResponse>(await this.callApi(params, req, runtime), new $_model.GetNodesResponse({}));
  }

  /**
   * 批量获取节点
   * 
   * @param request - GetNodesRequest
   * @returns GetNodesResponse
   */
  async getNodes(request: $_model.GetNodesRequest): Promise<$_model.GetNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetNodesHeaders({ });
    return await this.getNodesWithOptions(request, headers, runtime);
  }

  /**
   * 获取发送给用户的通知
   * 
   * @param request - GetNotifyMeRequest
   * @param tmpHeader - GetNotifyMeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNotifyMeResponse
   */
  async getNotifyMeWithOptions(request: $_model.GetNotifyMeRequest, tmpHeader: $_model.GetNotifyMeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetNotifyMeResponse> {
    request.validate();
    let headers = new $_model.GetNotifyMeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appTypes)) {
      body["AppTypes"] = request.appTypes;
    }

    if (!$dara.isNull(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.instanceCreateFromTimeGMT)) {
      body["InstanceCreateFromTimeGMT"] = request.instanceCreateFromTimeGMT;
    }

    if (!$dara.isNull(request.instanceCreateToTimeGMT)) {
      body["InstanceCreateToTimeGMT"] = request.instanceCreateToTimeGMT;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.processCodes)) {
      body["ProcessCodes"] = request.processCodes;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNotifyMe",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getNotifyMe`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNotifyMeResponse>(await this.callApi(params, req, runtime), new $_model.GetNotifyMeResponse({}));
  }

  /**
   * 获取发送给用户的通知
   * 
   * @param request - GetNotifyMeRequest
   * @returns GetNotifyMeResponse
   */
  async getNotifyMe(request: $_model.GetNotifyMeRequest): Promise<$_model.GetNotifyMeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetNotifyMeHeaders({ });
    return await this.getNotifyMeWithOptions(request, headers, runtime);
  }

  /**
   * 获取宜搭附件临时免登地址
   * 
   * @param request - GetOpenUrlRequest
   * @param tmpHeader - GetOpenUrlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOpenUrlResponse
   */
  async getOpenUrlWithOptions(request: $_model.GetOpenUrlRequest, tmpHeader: $_model.GetOpenUrlHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetOpenUrlResponse> {
    request.validate();
    let headers = new $_model.GetOpenUrlShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOpenUrl",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getOpenUrl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOpenUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetOpenUrlResponse({}));
  }

  /**
   * 获取宜搭附件临时免登地址
   * 
   * @param request - GetOpenUrlRequest
   * @returns GetOpenUrlResponse
   */
  async getOpenUrl(request: $_model.GetOpenUrlRequest): Promise<$_model.GetOpenUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetOpenUrlHeaders({ });
    return await this.getOpenUrlWithOptions(request, headers, runtime);
  }

  /**
   * 获取审批记录
   * 
   * @param request - GetOperationRecordsRequest
   * @param tmpHeader - GetOperationRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOperationRecordsResponse
   */
  async getOperationRecordsWithOptions(request: $_model.GetOperationRecordsRequest, tmpHeader: $_model.GetOperationRecordsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetOperationRecordsResponse> {
    request.validate();
    let headers = new $_model.GetOperationRecordsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.processInstanceId)) {
      body["ProcessInstanceId"] = request.processInstanceId;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOperationRecords",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getOperationRecords`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOperationRecordsResponse>(await this.callApi(params, req, runtime), new $_model.GetOperationRecordsResponse({}));
  }

  /**
   * 获取审批记录
   * 
   * @param request - GetOperationRecordsRequest
   * @returns GetOperationRecordsResponse
   */
  async getOperationRecords(request: $_model.GetOperationRecordsRequest): Promise<$_model.GetOperationRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetOperationRecordsHeaders({ });
    return await this.getOperationRecordsWithOptions(request, headers, runtime);
  }

  /**
   * @param tmpReq - GetOrgLiveListRequest
   * @param tmpHeader - GetOrgLiveListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrgLiveListResponse
   */
  async getOrgLiveListWithOptions(tmpReq: $_model.GetOrgLiveListRequest, tmpHeader: $_model.GetOrgLiveListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrgLiveListResponse> {
    tmpReq.validate();
    let request = new $_model.GetOrgLiveListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetOrgLiveListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrgLiveList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/getOrgLiveList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrgLiveListResponse>(await this.callApi(params, req, runtime), new $_model.GetOrgLiveListResponse({}));
  }

  /**
   * @param request - GetOrgLiveListRequest
   * @returns GetOrgLiveListResponse
   */
  async getOrgLiveList(request: $_model.GetOrgLiveListRequest): Promise<$_model.GetOrgLiveListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetOrgLiveListHeaders({ });
    return await this.getOrgLiveListWithOptions(request, headers, runtime);
  }

  /**
   * 委托权限获取组织或者互联网公开文档内容taskId
   * 
   * @param tmpReq - GetOrgOrWebOpenDocContentTaskIdRequest
   * @param tmpHeader - GetOrgOrWebOpenDocContentTaskIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrgOrWebOpenDocContentTaskIdResponse
   */
  async getOrgOrWebOpenDocContentTaskIdWithOptions(tmpReq: $_model.GetOrgOrWebOpenDocContentTaskIdRequest, tmpHeader: $_model.GetOrgOrWebOpenDocContentTaskIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrgOrWebOpenDocContentTaskIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetOrgOrWebOpenDocContentTaskIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetOrgOrWebOpenDocContentTaskIdShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryUuid)) {
      body["DentryUuid"] = request.dentryUuid;
    }

    if (!$dara.isNull(request.generateCp)) {
      body["GenerateCp"] = request.generateCp;
    }

    if (!$dara.isNull(request.scopeType)) {
      body["ScopeType"] = request.scopeType;
    }

    if (!$dara.isNull(request.targetFormat)) {
      body["TargetFormat"] = request.targetFormat;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrgOrWebOpenDocContentTaskId",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/getOrgOrWebOpenDocContentTaskId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrgOrWebOpenDocContentTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.GetOrgOrWebOpenDocContentTaskIdResponse({}));
  }

  /**
   * 委托权限获取组织或者互联网公开文档内容taskId
   * 
   * @param request - GetOrgOrWebOpenDocContentTaskIdRequest
   * @returns GetOrgOrWebOpenDocContentTaskIdResponse
   */
  async getOrgOrWebOpenDocContentTaskId(request: $_model.GetOrgOrWebOpenDocContentTaskIdRequest): Promise<$_model.GetOrgOrWebOpenDocContentTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetOrgOrWebOpenDocContentTaskIdHeaders({ });
    return await this.getOrgOrWebOpenDocContentTaskIdWithOptions(request, headers, runtime);
  }

  /**
   * 获取流程定义
   * 
   * @param request - GetProcessDefinitionRequest
   * @param tmpHeader - GetProcessDefinitionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProcessDefinitionResponse
   */
  async getProcessDefinitionWithOptions(request: $_model.GetProcessDefinitionRequest, tmpHeader: $_model.GetProcessDefinitionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetProcessDefinitionResponse> {
    request.validate();
    let headers = new $_model.GetProcessDefinitionShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.nameSpace)) {
      body["NameSpace"] = request.nameSpace;
    }

    if (!$dara.isNull(request.orderNumber)) {
      body["OrderNumber"] = request.orderNumber;
    }

    if (!$dara.isNull(request.processInstanceId)) {
      body["ProcessInstanceId"] = request.processInstanceId;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.systemType)) {
      body["SystemType"] = request.systemType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProcessDefinition",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getProcessDefinition`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProcessDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.GetProcessDefinitionResponse({}));
  }

  /**
   * 获取流程定义
   * 
   * @param request - GetProcessDefinitionRequest
   * @returns GetProcessDefinitionResponse
   */
  async getProcessDefinition(request: $_model.GetProcessDefinitionRequest): Promise<$_model.GetProcessDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetProcessDefinitionHeaders({ });
    return await this.getProcessDefinitionWithOptions(request, headers, runtime);
  }

  /**
   * 获取单元格区域
   * 
   * @param tmpReq - GetRangeRequest
   * @param tmpHeader - GetRangeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRangeResponse
   */
  async getRangeWithOptions(tmpReq: $_model.GetRangeRequest, tmpHeader: $_model.GetRangeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetRangeResponse> {
    tmpReq.validate();
    let request = new $_model.GetRangeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetRangeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rangeAddress)) {
      body["RangeAddress"] = request.rangeAddress;
    }

    if (!$dara.isNull(request.select)) {
      body["Select"] = request.select;
    }

    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRange",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/getRange`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRangeResponse>(await this.callApi(params, req, runtime), new $_model.GetRangeResponse({}));
  }

  /**
   * 获取单元格区域
   * 
   * @param request - GetRangeRequest
   * @returns GetRangeResponse
   */
  async getRange(request: $_model.GetRangeRequest): Promise<$_model.GetRangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetRangeHeaders({ });
    return await this.getRangeWithOptions(request, headers, runtime);
  }

  /**
   * 查询用户有权限的知识库列表(旧)
   * 
   * @param tmpReq - GetRelatedWorkspacesRequest
   * @param tmpHeader - GetRelatedWorkspacesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRelatedWorkspacesResponse
   */
  async getRelatedWorkspacesWithOptions(tmpReq: $_model.GetRelatedWorkspacesRequest, tmpHeader: $_model.GetRelatedWorkspacesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetRelatedWorkspacesResponse> {
    tmpReq.validate();
    let request = new $_model.GetRelatedWorkspacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetRelatedWorkspacesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.includeRecent)) {
      body["IncludeRecent"] = request.includeRecent;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRelatedWorkspaces",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/getRelatedWorkspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRelatedWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.GetRelatedWorkspacesResponse({}));
  }

  /**
   * 查询用户有权限的知识库列表(旧)
   * 
   * @param request - GetRelatedWorkspacesRequest
   * @returns GetRelatedWorkspacesResponse
   */
  async getRelatedWorkspaces(request: $_model.GetRelatedWorkspacesRequest): Promise<$_model.GetRelatedWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetRelatedWorkspacesHeaders({ });
    return await this.getRelatedWorkspacesWithOptions(request, headers, runtime);
  }

  /**
   * 获取模板详情
   * 
   * @param tmpReq - GetReportTemplateByNameRequest
   * @param tmpHeader - GetReportTemplateByNameHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReportTemplateByNameResponse
   */
  async getReportTemplateByNameWithOptions(tmpReq: $_model.GetReportTemplateByNameRequest, tmpHeader: $_model.GetReportTemplateByNameHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetReportTemplateByNameResponse> {
    tmpReq.validate();
    let request = new $_model.GetReportTemplateByNameShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetReportTemplateByNameShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReportTemplateByName",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/getReportTemplateByName`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReportTemplateByNameResponse>(await this.callApi(params, req, runtime), new $_model.GetReportTemplateByNameResponse({}));
  }

  /**
   * 获取模板详情
   * 
   * @param request - GetReportTemplateByNameRequest
   * @returns GetReportTemplateByNameResponse
   */
  async getReportTemplateByName(request: $_model.GetReportTemplateByNameRequest): Promise<$_model.GetReportTemplateByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetReportTemplateByNameHeaders({ });
    return await this.getReportTemplateByNameWithOptions(request, headers, runtime);
  }

  /**
   * 获取员工有多少数量的日志（一个月内）是未读状态
   * 
   * @param tmpReq - GetReportUnReadCountRequest
   * @param tmpHeader - GetReportUnReadCountHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReportUnReadCountResponse
   */
  async getReportUnReadCountWithOptions(tmpReq: $_model.GetReportUnReadCountRequest, tmpHeader: $_model.GetReportUnReadCountHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetReportUnReadCountResponse> {
    tmpReq.validate();
    let request = new $_model.GetReportUnReadCountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetReportUnReadCountShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReportUnReadCount",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/getReportUnReadCount`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReportUnReadCountResponse>(await this.callApi(params, req, runtime), new $_model.GetReportUnReadCountResponse({}));
  }

  /**
   * 获取员工有多少数量的日志（一个月内）是未读状态
   * 
   * @param request - GetReportUnReadCountRequest
   * @returns GetReportUnReadCountResponse
   */
  async getReportUnReadCount(request: $_model.GetReportUnReadCountRequest): Promise<$_model.GetReportUnReadCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetReportUnReadCountHeaders({ });
    return await this.getReportUnReadCountWithOptions(request, headers, runtime);
  }

  /**
   * 查询流程运行任务（VPC）
   * 
   * @param request - GetRunningTasksRequest
   * @param tmpHeader - GetRunningTasksHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRunningTasksResponse
   */
  async getRunningTasksWithOptions(request: $_model.GetRunningTasksRequest, tmpHeader: $_model.GetRunningTasksHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetRunningTasksResponse> {
    request.validate();
    let headers = new $_model.GetRunningTasksShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.processCodes)) {
      body["ProcessCodes"] = request.processCodes;
    }

    if (!$dara.isNull(request.processInstanceId)) {
      body["ProcessInstanceId"] = request.processInstanceId;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRunningTasks",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getRunningTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRunningTasksResponse>(await this.callApi(params, req, runtime), new $_model.GetRunningTasksResponse({}));
  }

  /**
   * 查询流程运行任务（VPC）
   * 
   * @param request - GetRunningTasksRequest
   * @returns GetRunningTasksResponse
   */
  async getRunningTasks(request: $_model.GetRunningTasksRequest): Promise<$_model.GetRunningTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetRunningTasksHeaders({ });
    return await this.getRunningTasksWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户忙闲信息
   * 
   * @param tmpReq - GetScheduleRequest
   * @param tmpHeader - GetScheduleHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduleResponse
   */
  async getScheduleWithOptions(tmpReq: $_model.GetScheduleRequest, tmpHeader: $_model.GetScheduleHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduleResponse> {
    tmpReq.validate();
    let request = new $_model.GetScheduleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetScheduleShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.userIds)) {
      request.userIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIds, "UserIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.userIdsShrink)) {
      body["UserIds"] = request.userIdsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSchedule",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/getSchedule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScheduleResponse>(await this.callApi(params, req, runtime), new $_model.GetScheduleResponse({}));
  }

  /**
   * 获取用户忙闲信息
   * 
   * @param request - GetScheduleRequest
   * @returns GetScheduleResponse
   */
  async getSchedule(request: $_model.GetScheduleRequest): Promise<$_model.GetScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetScheduleHeaders({ });
    return await this.getScheduleWithOptions(request, headers, runtime);
  }

  /**
   * 获取工作表
   * 
   * @param tmpReq - GetSheetRequest
   * @param tmpHeader - GetSheetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSheetResponse
   */
  async getSheetWithOptions(tmpReq: $_model.GetSheetRequest, tmpHeader: $_model.GetSheetHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetSheetResponse> {
    tmpReq.validate();
    let request = new $_model.GetSheetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetSheetShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSheet",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/getSheet`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSheetResponse>(await this.callApi(params, req, runtime), new $_model.GetSheetResponse({}));
  }

  /**
   * 获取工作表
   * 
   * @param request - GetSheetRequest
   * @returns GetSheetResponse
   */
  async getSheet(request: $_model.GetSheetRequest): Promise<$_model.GetSheetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetSheetHeaders({ });
    return await this.getSheetWithOptions(request, headers, runtime);
  }

  /**
   * 获取表格文档内容jobId
   * 
   * @param tmpReq - GetSheetContentJobIdRequest
   * @param tmpHeader - GetSheetContentJobIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSheetContentJobIdResponse
   */
  async getSheetContentJobIdWithOptions(tmpReq: $_model.GetSheetContentJobIdRequest, tmpHeader: $_model.GetSheetContentJobIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetSheetContentJobIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetSheetContentJobIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetSheetContentJobIdShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryUuid)) {
      body["DentryUuid"] = request.dentryUuid;
    }

    if (!$dara.isNull(request.exportType)) {
      body["ExportType"] = request.exportType;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSheetContentJobId",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/getSheetContentJobId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSheetContentJobIdResponse>(await this.callApi(params, req, runtime), new $_model.GetSheetContentJobIdResponse({}));
  }

  /**
   * 获取表格文档内容jobId
   * 
   * @param request - GetSheetContentJobIdRequest
   * @returns GetSheetContentJobIdResponse
   */
  async getSheetContentJobId(request: $_model.GetSheetContentJobIdRequest): Promise<$_model.GetSheetContentJobIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetSheetContentJobIdHeaders({ });
    return await this.getSheetContentJobIdWithOptions(request, headers, runtime);
  }

  /**
   * 查询知识库下的目录结构
   * 
   * @param tmpReq - GetSpaceDirectoriesRequest
   * @param tmpHeader - GetSpaceDirectoriesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSpaceDirectoriesResponse
   */
  async getSpaceDirectoriesWithOptions(tmpReq: $_model.GetSpaceDirectoriesRequest, tmpHeader: $_model.GetSpaceDirectoriesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetSpaceDirectoriesResponse> {
    tmpReq.validate();
    let request = new $_model.GetSpaceDirectoriesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetSpaceDirectoriesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryId)) {
      body["DentryId"] = request.dentryId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSpaceDirectories",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/getSpaceDirectories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSpaceDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.GetSpaceDirectoriesResponse({}));
  }

  /**
   * 查询知识库下的目录结构
   * 
   * @param request - GetSpaceDirectoriesRequest
   * @returns GetSpaceDirectoriesResponse
   */
  async getSpaceDirectories(request: $_model.GetSpaceDirectoriesRequest): Promise<$_model.GetSpaceDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetSpaceDirectoriesHeaders({ });
    return await this.getSpaceDirectoriesWithOptions(request, headers, runtime);
  }

  /**
   * 查询单个订阅日历详情
   * 
   * @param request - GetSubscribedCalendarRequest
   * @param tmpHeader - GetSubscribedCalendarHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubscribedCalendarResponse
   */
  async getSubscribedCalendarWithOptions(request: $_model.GetSubscribedCalendarRequest, tmpHeader: $_model.GetSubscribedCalendarHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubscribedCalendarResponse> {
    request.validate();
    let headers = new $_model.GetSubscribedCalendarShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubscribedCalendar",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/getSubscribedCalendar`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubscribedCalendarResponse>(await this.callApi(params, req, runtime), new $_model.GetSubscribedCalendarResponse({}));
  }

  /**
   * 查询单个订阅日历详情
   * 
   * @param request - GetSubscribedCalendarRequest
   * @returns GetSubscribedCalendarResponse
   */
  async getSubscribedCalendar(request: $_model.GetSubscribedCalendarRequest): Promise<$_model.GetSubscribedCalendarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetSubscribedCalendarHeaders({ });
    return await this.getSubscribedCalendarWithOptions(request, headers, runtime);
  }

  /**
   * 查询抄送我的任务列表（应用维度）
   * 
   * @param request - GetTaskCopiesRequest
   * @param tmpHeader - GetTaskCopiesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskCopiesResponse
   */
  async getTaskCopiesWithOptions(request: $_model.GetTaskCopiesRequest, tmpHeader: $_model.GetTaskCopiesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskCopiesResponse> {
    request.validate();
    let headers = new $_model.GetTaskCopiesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.processCodes)) {
      body["ProcessCodes"] = request.processCodes;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskCopies",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/getTaskCopies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskCopiesResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskCopiesResponse({}));
  }

  /**
   * 查询抄送我的任务列表（应用维度）
   * 
   * @param request - GetTaskCopiesRequest
   * @returns GetTaskCopiesResponse
   */
  async getTaskCopies(request: $_model.GetTaskCopiesRequest): Promise<$_model.GetTaskCopiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetTaskCopiesHeaders({ });
    return await this.getTaskCopiesWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户可见的日志模板
   * 
   * @param tmpReq - GetTemplateListByUserIdRequest
   * @param tmpHeader - GetTemplateListByUserIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateListByUserIdResponse
   */
  async getTemplateListByUserIdWithOptions(tmpReq: $_model.GetTemplateListByUserIdRequest, tmpHeader: $_model.GetTemplateListByUserIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateListByUserIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetTemplateListByUserIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetTemplateListByUserIdShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.offset)) {
      body["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateListByUserId",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/getTemplateListByUserId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateListByUserIdResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateListByUserIdResponse({}));
  }

  /**
   * 获取用户可见的日志模板
   * 
   * @param request - GetTemplateListByUserIdRequest
   * @returns GetTemplateListByUserIdResponse
   */
  async getTemplateListByUserId(request: $_model.GetTemplateListByUserIdRequest): Promise<$_model.GetTemplateListByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetTemplateListByUserIdHeaders({ });
    return await this.getTemplateListByUserIdWithOptions(request, headers, runtime);
  }

  /**
   * 获取指定工单详情
   * 
   * @param tmpReq - GetTicketRequest
   * @param tmpHeader - GetTicketHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTicketResponse
   */
  async getTicketWithOptions(tmpReq: $_model.GetTicketRequest, tmpHeader: $_model.GetTicketHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetTicketResponse> {
    tmpReq.validate();
    let request = new $_model.GetTicketShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetTicketShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openTeamId)) {
      body["OpenTeamId"] = request.openTeamId;
    }

    if (!$dara.isNull(request.openTicketId)) {
      body["OpenTicketId"] = request.openTicketId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTicket",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ticket/getTicket`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTicketResponse>(await this.callApi(params, req, runtime), new $_model.GetTicketResponse({}));
  }

  /**
   * 获取指定工单详情
   * 
   * @param request - GetTicketRequest
   * @returns GetTicketResponse
   */
  async getTicket(request: $_model.GetTicketRequest): Promise<$_model.GetTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetTicketHeaders({ });
    return await this.getTicketWithOptions(request, headers, runtime);
  }

  /**
   * 获取钉钉待办任务详情
   * 
   * @param tmpReq - GetTodoTaskRequest
   * @param tmpHeader - GetTodoTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTodoTaskResponse
   */
  async getTodoTaskWithOptions(tmpReq: $_model.GetTodoTaskRequest, tmpHeader: $_model.GetTodoTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetTodoTaskResponse> {
    tmpReq.validate();
    let request = new $_model.GetTodoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetTodoTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTodoTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/getTodoTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTodoTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTodoTaskResponse({}));
  }

  /**
   * 获取钉钉待办任务详情
   * 
   * @param request - GetTodoTaskRequest
   * @returns GetTodoTaskResponse
   */
  async getTodoTask(request: $_model.GetTodoTaskRequest): Promise<$_model.GetTodoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetTodoTaskHeaders({ });
    return await this.getTodoTaskWithOptions(request, headers, runtime);
  }

  /**
   * 获取专属账号信息
   * 
   * @param tmpReq - GetUserRequest
   * @param tmpHeader - GetUserHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(tmpReq: $_model.GetUserRequest, tmpHeader: $_model.GetUserHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    tmpReq.validate();
    let request = new $_model.GetUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetUserShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.language)) {
      body["language"] = request.language;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/getUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserResponse>(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * 获取专属账号信息
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserHeaders({ });
    return await this.getUserWithOptions(request, headers, runtime);
  }

  /**
   * 根据unionId获取用户userId
   * 
   * @param tmpReq - GetUserIdRequest
   * @param tmpHeader - GetUserIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserIdResponse
   */
  async getUserIdWithOptions(tmpReq: $_model.GetUserIdRequest, tmpHeader: $_model.GetUserIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetUserIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetUserIdShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.unionId)) {
      body["UnionId"] = request.unionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserId",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/getUserId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserIdResponse>(await this.callApi(params, req, runtime), new $_model.GetUserIdResponse({}));
  }

  /**
   * 根据unionId获取用户userId
   * 
   * @param request - GetUserIdRequest
   * @returns GetUserIdResponse
   */
  async getUserId(request: $_model.GetUserIdRequest): Promise<$_model.GetUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserIdHeaders({ });
    return await this.getUserIdWithOptions(request, headers, runtime);
  }

  /**
   * 根据orgId和staffId获取用户userId
   * 
   * @param tmpReq - GetUserIdByOrgIdAndStaffIdRequest
   * @param tmpHeader - GetUserIdByOrgIdAndStaffIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserIdByOrgIdAndStaffIdResponse
   */
  async getUserIdByOrgIdAndStaffIdWithOptions(tmpReq: $_model.GetUserIdByOrgIdAndStaffIdRequest, tmpHeader: $_model.GetUserIdByOrgIdAndStaffIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserIdByOrgIdAndStaffIdResponse> {
    tmpReq.validate();
    let request = new $_model.GetUserIdByOrgIdAndStaffIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetUserIdByOrgIdAndStaffIdShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserIdByOrgIdAndStaffId",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/getUserIdByOrgIdAndStaffId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserIdByOrgIdAndStaffIdResponse>(await this.callApi(params, req, runtime), new $_model.GetUserIdByOrgIdAndStaffIdResponse({}));
  }

  /**
   * 根据orgId和staffId获取用户userId
   * 
   * @param request - GetUserIdByOrgIdAndStaffIdRequest
   * @returns GetUserIdByOrgIdAndStaffIdResponse
   */
  async getUserIdByOrgIdAndStaffId(request: $_model.GetUserIdByOrgIdAndStaffIdRequest): Promise<$_model.GetUserIdByOrgIdAndStaffIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserIdByOrgIdAndStaffIdHeaders({ });
    return await this.getUserIdByOrgIdAndStaffIdWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户最新的有效的专属账号迁移方案
   * 
   * @param tmpReq - GetUserLatestPlanRequest
   * @param tmpHeader - GetUserLatestPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserLatestPlanResponse
   */
  async getUserLatestPlanWithOptions(tmpReq: $_model.GetUserLatestPlanRequest, tmpHeader: $_model.GetUserLatestPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserLatestPlanResponse> {
    tmpReq.validate();
    let request = new $_model.GetUserLatestPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetUserLatestPlanShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserLatestPlan",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/indepding/getUserLatestPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserLatestPlanResponse>(await this.callApi(params, req, runtime), new $_model.GetUserLatestPlanResponse({}));
  }

  /**
   * 获取用户最新的有效的专属账号迁移方案
   * 
   * @param request - GetUserLatestPlanRequest
   * @returns GetUserLatestPlanResponse
   */
  async getUserLatestPlan(request: $_model.GetUserLatestPlanRequest): Promise<$_model.GetUserLatestPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUserLatestPlanHeaders({ });
    return await this.getUserLatestPlanWithOptions(request, headers, runtime);
  }

  /**
   * 获取知识库
   * 
   * @param tmpReq - GetWorkspaceRequest
   * @param tmpHeader - GetWorkspaceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
  async getWorkspaceWithOptions(tmpReq: $_model.GetWorkspaceRequest, tmpHeader: $_model.GetWorkspaceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceResponse> {
    tmpReq.validate();
    let request = new $_model.GetWorkspaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetWorkspaceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.withPermissionRole)) {
      body["WithPermissionRole"] = request.withPermissionRole;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspace",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/getWorkspace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceResponse({}));
  }

  /**
   * 获取知识库
   * 
   * @param request - GetWorkspaceRequest
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(request: $_model.GetWorkspaceRequest): Promise<$_model.GetWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetWorkspaceHeaders({ });
    return await this.getWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * 批量获取知识库
   * 
   * @param tmpReq - GetWorkspacesRequest
   * @param tmpHeader - GetWorkspacesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspacesResponse
   */
  async getWorkspacesWithOptions(tmpReq: $_model.GetWorkspacesRequest, tmpHeader: $_model.GetWorkspacesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspacesResponse> {
    tmpReq.validate();
    let request = new $_model.GetWorkspacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GetWorkspacesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.workspaceIds)) {
      request.workspaceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workspaceIds, "WorkspaceIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workspaceIdsShrink)) {
      body["WorkspaceIds"] = request.workspaceIdsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspaces",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/getWorkspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspacesResponse({}));
  }

  /**
   * 批量获取知识库
   * 
   * @param request - GetWorkspacesRequest
   * @returns GetWorkspacesResponse
   */
  async getWorkspaces(request: $_model.GetWorkspacesRequest): Promise<$_model.GetWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetWorkspacesHeaders({ });
    return await this.getWorkspacesWithOptions(request, headers, runtime);
  }

  /**
   * 授予勋章
   * 
   * @param tmpReq - GrantHonorRequest
   * @param tmpHeader - GrantHonorHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantHonorResponse
   */
  async grantHonorWithOptions(tmpReq: $_model.GrantHonorRequest, tmpHeader: $_model.GrantHonorHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GrantHonorResponse> {
    tmpReq.validate();
    let request = new $_model.GrantHonorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.GrantHonorShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.openConversationIds)) {
      request.openConversationIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.openConversationIds, "openConversationIds", "json");
    }

    if (!$dara.isNull(tmpReq.receiverUserIds)) {
      request.receiverUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.receiverUserIds, "receiverUserIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.expirationTime)) {
      body["expirationTime"] = request.expirationTime;
    }

    if (!$dara.isNull(request.grantReason)) {
      body["grantReason"] = request.grantReason;
    }

    if (!$dara.isNull(request.granterName)) {
      body["granterName"] = request.granterName;
    }

    if (!$dara.isNull(request.honorId)) {
      body["honorId"] = request.honorId;
    }

    if (!$dara.isNull(request.noticeAnnouncer)) {
      body["noticeAnnouncer"] = request.noticeAnnouncer;
    }

    if (!$dara.isNull(request.noticeSingle)) {
      body["noticeSingle"] = request.noticeSingle;
    }

    if (!$dara.isNull(request.openConversationIdsShrink)) {
      body["openConversationIds"] = request.openConversationIdsShrink;
    }

    if (!$dara.isNull(request.orgId)) {
      body["orgId"] = request.orgId;
    }

    if (!$dara.isNull(request.receiverUserIdsShrink)) {
      body["receiverUserIds"] = request.receiverUserIdsShrink;
    }

    if (!$dara.isNull(request.senderUserId)) {
      body["senderUserId"] = request.senderUserId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantHonor",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/honor/grantHonor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantHonorResponse>(await this.callApi(params, req, runtime), new $_model.GrantHonorResponse({}));
  }

  /**
   * 授予勋章
   * 
   * @param request - GrantHonorRequest
   * @returns GrantHonorResponse
   */
  async grantHonor(request: $_model.GrantHonorRequest): Promise<$_model.GrantHonorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GrantHonorHeaders({ });
    return await this.grantHonorWithOptions(request, headers, runtime);
  }

  /**
   * 初始化文件分片上传
   * 
   * @param tmpReq - InitMultipartFileUploadRequest
   * @param tmpHeader - InitMultipartFileUploadHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitMultipartFileUploadResponse
   */
  async initMultipartFileUploadWithOptions(tmpReq: $_model.InitMultipartFileUploadRequest, tmpHeader: $_model.InitMultipartFileUploadHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InitMultipartFileUploadResponse> {
    tmpReq.validate();
    let request = new $_model.InitMultipartFileUploadShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.InitMultipartFileUploadShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.parentDentryUuid)) {
      body["ParentDentryUuid"] = request.parentDentryUuid;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitMultipartFileUpload",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/initMultipartFileUpload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitMultipartFileUploadResponse>(await this.callApi(params, req, runtime), new $_model.InitMultipartFileUploadResponse({}));
  }

  /**
   * 初始化文件分片上传
   * 
   * @param request - InitMultipartFileUploadRequest
   * @returns InitMultipartFileUploadResponse
   */
  async initMultipartFileUpload(request: $_model.InitMultipartFileUploadRequest): Promise<$_model.InitMultipartFileUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InitMultipartFileUploadHeaders({ });
    return await this.initMultipartFileUploadWithOptions(request, headers, runtime);
  }

  /**
   * 在指定列左侧插入若干列
   * 
   * @param tmpReq - InsertColumnsBeforeRequest
   * @param tmpHeader - InsertColumnsBeforeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertColumnsBeforeResponse
   */
  async insertColumnsBeforeWithOptions(tmpReq: $_model.InsertColumnsBeforeRequest, tmpHeader: $_model.InsertColumnsBeforeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsertColumnsBeforeResponse> {
    tmpReq.validate();
    let request = new $_model.InsertColumnsBeforeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.InsertColumnsBeforeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.column)) {
      body["Column"] = request.column;
    }

    if (!$dara.isNull(request.columnCount)) {
      body["ColumnCount"] = request.columnCount;
    }

    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertColumnsBefore",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/insertColumnsBefore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertColumnsBeforeResponse>(await this.callApi(params, req, runtime), new $_model.InsertColumnsBeforeResponse({}));
  }

  /**
   * 在指定列左侧插入若干列
   * 
   * @param request - InsertColumnsBeforeRequest
   * @returns InsertColumnsBeforeResponse
   */
  async insertColumnsBefore(request: $_model.InsertColumnsBeforeRequest): Promise<$_model.InsertColumnsBeforeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsertColumnsBeforeHeaders({ });
    return await this.insertColumnsBeforeWithOptions(request, headers, runtime);
  }

  /**
   * 文档中插入内容
   * 
   * @param tmpReq - InsertContentWithOptionsRequest
   * @param tmpHeader - InsertContentWithOptionsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertContentWithOptionsResponse
   */
  async insertContentWithOptionsWithOptions(tmpReq: $_model.InsertContentWithOptionsRequest, tmpHeader: $_model.InsertContentWithOptionsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsertContentWithOptionsResponse> {
    tmpReq.validate();
    let request = new $_model.InsertContentWithOptionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.InsertContentWithOptionsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    if (!$dara.isNull(tmpReq.path)) {
      request.pathShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.path, "Path", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentShrink)) {
      body["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.documentId)) {
      body["DocumentId"] = request.documentId;
    }

    if (!$dara.isNull(request.index)) {
      body["Index"] = request.index;
    }

    if (!$dara.isNull(request.pathShrink)) {
      body["Path"] = request.pathShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertContentWithOptions",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/insertContentWithOptions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertContentWithOptionsResponse>(await this.callApi(params, req, runtime), new $_model.InsertContentWithOptionsResponse({}));
  }

  /**
   * 文档中插入内容
   * 
   * @param request - InsertContentWithOptionsRequest
   * @returns InsertContentWithOptionsResponse
   */
  async insertContentWithOptions(request: $_model.InsertContentWithOptionsRequest): Promise<$_model.InsertContentWithOptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsertContentWithOptionsHeaders({ });
    return await this.insertContentWithOptionsWithOptions(request, headers, runtime);
  }

  /**
   * 插入下拉列表
   * 
   * @param tmpReq - InsertDropDownListRequest
   * @param tmpHeader - InsertDropDownListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertDropDownListResponse
   */
  async insertDropDownListWithOptions(tmpReq: $_model.InsertDropDownListRequest, tmpHeader: $_model.InsertDropDownListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsertDropDownListResponse> {
    tmpReq.validate();
    let request = new $_model.InsertDropDownListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.InsertDropDownListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "Options", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.optionsShrink)) {
      body["Options"] = request.optionsShrink;
    }

    if (!$dara.isNull(request.rangeAddress)) {
      body["RangeAddress"] = request.rangeAddress;
    }

    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertDropDownList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/insertDropDownList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertDropDownListResponse>(await this.callApi(params, req, runtime), new $_model.InsertDropDownListResponse({}));
  }

  /**
   * 插入下拉列表
   * 
   * @param request - InsertDropDownListRequest
   * @returns InsertDropDownListResponse
   */
  async insertDropDownList(request: $_model.InsertDropDownListRequest): Promise<$_model.InsertDropDownListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsertDropDownListHeaders({ });
    return await this.insertDropDownListWithOptions(request, headers, runtime);
  }

  /**
   * 新增记录
   * 
   * @param tmpReq - InsertMultiDimTableRecordRequest
   * @param tmpHeader - InsertMultiDimTableRecordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertMultiDimTableRecordResponse
   */
  async insertMultiDimTableRecordWithOptions(tmpReq: $_model.InsertMultiDimTableRecordRequest, tmpHeader: $_model.InsertMultiDimTableRecordHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsertMultiDimTableRecordResponse> {
    tmpReq.validate();
    let request = new $_model.InsertMultiDimTableRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.InsertMultiDimTableRecordShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.records)) {
      request.recordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.records, "Records", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.recordsShrink)) {
      body["Records"] = request.recordsShrink;
    }

    if (!$dara.isNull(request.sheetIdOrName)) {
      body["SheetIdOrName"] = request.sheetIdOrName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertMultiDimTableRecord",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/insertMultiDimTableRecord`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertMultiDimTableRecordResponse>(await this.callApi(params, req, runtime), new $_model.InsertMultiDimTableRecordResponse({}));
  }

  /**
   * 新增记录
   * 
   * @param request - InsertMultiDimTableRecordRequest
   * @returns InsertMultiDimTableRecordResponse
   */
  async insertMultiDimTableRecord(request: $_model.InsertMultiDimTableRecordRequest): Promise<$_model.InsertMultiDimTableRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsertMultiDimTableRecordHeaders({ });
    return await this.insertMultiDimTableRecordWithOptions(request, headers, runtime);
  }

  /**
   * 在指定行上方插入若干行
   * 
   * @param tmpReq - InsertRowsBeforeRequest
   * @param tmpHeader - InsertRowsBeforeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertRowsBeforeResponse
   */
  async insertRowsBeforeWithOptions(tmpReq: $_model.InsertRowsBeforeRequest, tmpHeader: $_model.InsertRowsBeforeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InsertRowsBeforeResponse> {
    tmpReq.validate();
    let request = new $_model.InsertRowsBeforeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.InsertRowsBeforeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.row)) {
      body["Row"] = request.row;
    }

    if (!$dara.isNull(request.rowCount)) {
      body["RowCount"] = request.rowCount;
    }

    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertRowsBefore",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/insertRowsBefore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertRowsBeforeResponse>(await this.callApi(params, req, runtime), new $_model.InsertRowsBeforeResponse({}));
  }

  /**
   * 在指定行上方插入若干行
   * 
   * @param request - InsertRowsBeforeRequest
   * @returns InsertRowsBeforeResponse
   */
  async insertRowsBefore(request: $_model.InsertRowsBeforeRequest): Promise<$_model.InsertRowsBeforeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InsertRowsBeforeHeaders({ });
    return await this.insertRowsBeforeWithOptions(request, headers, runtime);
  }

  /**
   * 邀请用户入会
   * 
   * @param tmpReq - InviteUsersRequest
   * @param tmpHeader - InviteUsersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InviteUsersResponse
   */
  async inviteUsersWithOptions(tmpReq: $_model.InviteUsersRequest, tmpHeader: $_model.InviteUsersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InviteUsersResponse> {
    tmpReq.validate();
    let request = new $_model.InviteUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.InviteUsersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.inviteeList)) {
      request.inviteeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inviteeList, "InviteeList", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.phoneInviteeList)) {
      request.phoneInviteeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phoneInviteeList, "phoneInviteeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inviteeListShrink)) {
      body["InviteeList"] = request.inviteeListShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    if (!$dara.isNull(request.phoneInviteeListShrink)) {
      body["phoneInviteeList"] = request.phoneInviteeListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InviteUsers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/inviteUsers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InviteUsersResponse>(await this.callApi(params, req, runtime), new $_model.InviteUsersResponse({}));
  }

  /**
   * 邀请用户入会
   * 
   * @param request - InviteUsersRequest
   * @returns InviteUsersResponse
   */
  async inviteUsers(request: $_model.InviteUsersRequest): Promise<$_model.InviteUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InviteUsersHeaders({ });
    return await this.inviteUsersWithOptions(request, headers, runtime);
  }

  /**
   * 调用助理
   * 
   * @param request - InvokeAssistantRequest
   * @param headers - InvokeAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeAssistantResponse
   */
  async *invokeAssistantWithSSE(request: $_model.InvokeAssistantRequest, headers: $_model.InvokeAssistantHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.InvokeAssistantResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.clientEnum)) {
      body["clientEnum"] = request.clientEnum;
    }

    if (!$dara.isNull(request.extLoginUser)) {
      body["extLoginUser"] = request.extLoginUser;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.originalAssistantId)) {
      body["originalAssistantId"] = request.originalAssistantId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sourceIdOfOriginalAssistantId)) {
      body["sourceIdOfOriginalAssistantId"] = request.sourceIdOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.sourceTypeOfOriginalAssistantId)) {
      body["sourceTypeOfOriginalAssistantId"] = request.sourceTypeOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountId)) {
      realHeaders["accountId"] = String(headers.accountId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeAssistant",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/assistant/invokeAssistant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.InvokeAssistantResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.InvokeAssistantResponse({}));
    }
  }

  /**
   * 调用助理
   * 
   * @param request - InvokeAssistantRequest
   * @param headers - InvokeAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeAssistantResponse
   */
  async invokeAssistantWithOptions(request: $_model.InvokeAssistantRequest, headers: $_model.InvokeAssistantHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvokeAssistantResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.clientEnum)) {
      body["clientEnum"] = request.clientEnum;
    }

    if (!$dara.isNull(request.extLoginUser)) {
      body["extLoginUser"] = request.extLoginUser;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.originalAssistantId)) {
      body["originalAssistantId"] = request.originalAssistantId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sourceIdOfOriginalAssistantId)) {
      body["sourceIdOfOriginalAssistantId"] = request.sourceIdOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.sourceTypeOfOriginalAssistantId)) {
      body["sourceTypeOfOriginalAssistantId"] = request.sourceTypeOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountId)) {
      realHeaders["accountId"] = String(headers.accountId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeAssistant",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/assistant/invokeAssistant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvokeAssistantResponse>(await this.callApi(params, req, runtime), new $_model.InvokeAssistantResponse({}));
  }

  /**
   * 调用助理
   * 
   * @param request - InvokeAssistantRequest
   * @returns InvokeAssistantResponse
   */
  async invokeAssistant(request: $_model.InvokeAssistantRequest): Promise<$_model.InvokeAssistantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvokeAssistantHeaders({ });
    return await this.invokeAssistantWithOptions(request, headers, runtime);
  }

  /**
   * 调用AI技能
   * 
   * @param tmpReq - InvokeSkillRequest
   * @param tmpHeader - InvokeSkillHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeSkillResponse
   */
  async *invokeSkillWithSSE(tmpReq: $_model.InvokeSkillRequest, tmpHeader: $_model.InvokeSkillHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.InvokeSkillResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.InvokeSkillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.InvokeSkillShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    if (!$dara.isNull(request.skillId)) {
      body["SkillId"] = request.skillId;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.sourceIdOfAssistantId)) {
      body["sourceIdOfAssistantId"] = request.sourceIdOfAssistantId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeSkill",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/skill/invoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.InvokeSkillResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.InvokeSkillResponse({}));
    }
  }

  /**
   * 调用AI技能
   * 
   * @param tmpReq - InvokeSkillRequest
   * @param tmpHeader - InvokeSkillHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeSkillResponse
   */
  async invokeSkillWithOptions(tmpReq: $_model.InvokeSkillRequest, tmpHeader: $_model.InvokeSkillHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvokeSkillResponse> {
    tmpReq.validate();
    let request = new $_model.InvokeSkillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.InvokeSkillShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    if (!$dara.isNull(request.skillId)) {
      body["SkillId"] = request.skillId;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.sourceIdOfAssistantId)) {
      body["sourceIdOfAssistantId"] = request.sourceIdOfAssistantId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeSkill",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/skill/invoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvokeSkillResponse>(await this.callApi(params, req, runtime), new $_model.InvokeSkillResponse({}));
  }

  /**
   * 调用AI技能
   * 
   * @param request - InvokeSkillRequest
   * @returns InvokeSkillResponse
   */
  async invokeSkill(request: $_model.InvokeSkillRequest): Promise<$_model.InvokeSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvokeSkillHeaders({ });
    return await this.invokeSkillWithOptions(request, headers, runtime);
  }

  /**
   * 查询宜搭应用列表
   * 
   * @param request - ListApplicationRequest
   * @param tmpHeader - ListApplicationHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationResponse
   */
  async listApplicationWithOptions(request: $_model.ListApplicationRequest, tmpHeader: $_model.ListApplicationHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationResponse> {
    request.validate();
    let headers = new $_model.ListApplicationShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appFilter)) {
      body["AppFilter"] = request.appFilter;
    }

    if (!$dara.isNull(request.appNameSearchKeyword)) {
      body["AppNameSearchKeyword"] = request.appNameSearchKeyword;
    }

    if (!$dara.isNull(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplication",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/listApplication`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationResponse({}));
  }

  /**
   * 查询宜搭应用列表
   * 
   * @param request - ListApplicationRequest
   * @returns ListApplicationResponse
   */
  async listApplication(request: $_model.ListApplicationRequest): Promise<$_model.ListApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListApplicationHeaders({ });
    return await this.listApplicationWithOptions(request, headers, runtime);
  }

  /**
   * 查询日历
   * 
   * @param tmpReq - ListCalendarsRequest
   * @param tmpHeader - ListCalendarsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCalendarsResponse
   */
  async listCalendarsWithOptions(tmpReq: $_model.ListCalendarsRequest, tmpHeader: $_model.ListCalendarsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListCalendarsResponse> {
    tmpReq.validate();
    let request = new $_model.ListCalendarsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListCalendarsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCalendars",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/listCalendars`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCalendarsResponse>(await this.callApi(params, req, runtime), new $_model.ListCalendarsResponse({}));
  }

  /**
   * 查询日历
   * 
   * @param request - ListCalendarsRequest
   * @returns ListCalendarsResponse
   */
  async listCalendars(request: $_model.ListCalendarsRequest): Promise<$_model.ListCalendarsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListCalendarsHeaders({ });
    return await this.listCalendarsWithOptions(request, headers, runtime);
  }

  /**
   * 获取文件或文件夹列表
   * 
   * @param tmpReq - ListDentriesRequest
   * @param tmpHeader - ListDentriesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDentriesResponse
   */
  async listDentriesWithOptions(tmpReq: $_model.ListDentriesRequest, tmpHeader: $_model.ListDentriesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListDentriesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDentriesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListDentriesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.withThumbnail)) {
      body["WithThumbnail"] = request.withThumbnail;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDentries",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/listDentries`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDentriesResponse>(await this.callApi(params, req, runtime), new $_model.ListDentriesResponse({}));
  }

  /**
   * 获取文件或文件夹列表
   * 
   * @param request - ListDentriesRequest
   * @returns ListDentriesResponse
   */
  async listDentries(request: $_model.ListDentriesRequest): Promise<$_model.ListDentriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListDentriesHeaders({ });
    return await this.listDentriesWithOptions(request, headers, runtime);
  }

  /**
   * 获取钉盘空间列表
   * 
   * @param tmpReq - ListDriveSpacesRequest
   * @param tmpHeader - ListDriveSpacesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDriveSpacesResponse
   */
  async listDriveSpacesWithOptions(tmpReq: $_model.ListDriveSpacesRequest, tmpHeader: $_model.ListDriveSpacesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListDriveSpacesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDriveSpacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListDriveSpacesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.spaceType)) {
      body["SpaceType"] = request.spaceType;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDriveSpaces",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/listDriveSpaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDriveSpacesResponse>(await this.callApi(params, req, runtime), new $_model.ListDriveSpacesResponse({}));
  }

  /**
   * 获取钉盘空间列表
   * 
   * @param request - ListDriveSpacesRequest
   * @returns ListDriveSpacesResponse
   */
  async listDriveSpaces(request: $_model.ListDriveSpacesRequest): Promise<$_model.ListDriveSpacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListDriveSpacesHeaders({ });
    return await this.listDriveSpacesWithOptions(request, headers, runtime);
  }

  /**
   * 查询日程列表
   * 
   * @param request - ListEventsRequest
   * @param tmpHeader - ListEventsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventsResponse
   */
  async listEventsWithOptions(request: $_model.ListEventsRequest, tmpHeader: $_model.ListEventsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventsResponse> {
    request.validate();
    let headers = new $_model.ListEventsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.maxAttendees)) {
      body["MaxAttendees"] = request.maxAttendees;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.seriesMasterId)) {
      body["SeriesMasterId"] = request.seriesMasterId;
    }

    if (!$dara.isNull(request.showDeleted)) {
      body["ShowDeleted"] = request.showDeleted;
    }

    if (!$dara.isNull(request.syncToken)) {
      body["SyncToken"] = request.syncToken;
    }

    if (!$dara.isNull(request.timeMax)) {
      body["TimeMax"] = request.timeMax;
    }

    if (!$dara.isNull(request.timeMin)) {
      body["TimeMin"] = request.timeMin;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEvents",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/listEvents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListEventsResponse({}));
  }

  /**
   * 查询日程列表
   * 
   * @param request - ListEventsRequest
   * @returns ListEventsResponse
   */
  async listEvents(request: $_model.ListEventsRequest): Promise<$_model.ListEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListEventsHeaders({ });
    return await this.listEventsWithOptions(request, headers, runtime);
  }

  /**
   * 查询日程视图
   * 
   * @param request - ListEventsViewRequest
   * @param tmpHeader - ListEventsViewHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventsViewResponse
   */
  async listEventsViewWithOptions(request: $_model.ListEventsViewRequest, tmpHeader: $_model.ListEventsViewHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventsViewResponse> {
    request.validate();
    let headers = new $_model.ListEventsViewShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.maxAttendees)) {
      body["MaxAttendees"] = request.maxAttendees;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.timeMax)) {
      body["TimeMax"] = request.timeMax;
    }

    if (!$dara.isNull(request.timeMin)) {
      body["TimeMin"] = request.timeMin;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventsView",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/listEventsView`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventsViewResponse>(await this.callApi(params, req, runtime), new $_model.ListEventsViewResponse({}));
  }

  /**
   * 查询日程视图
   * 
   * @param request - ListEventsViewRequest
   * @returns ListEventsViewResponse
   */
  async listEventsView(request: $_model.ListEventsViewRequest): Promise<$_model.ListEventsViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListEventsViewHeaders({ });
    return await this.listEventsViewWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询宜搭表单实例的评论
   * 
   * @param tmpReq - ListFormRemarksRequest
   * @param tmpHeader - ListFormRemarksHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFormRemarksResponse
   */
  async listFormRemarksWithOptions(tmpReq: $_model.ListFormRemarksRequest, tmpHeader: $_model.ListFormRemarksHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListFormRemarksResponse> {
    tmpReq.validate();
    let request = new $_model.ListFormRemarksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListFormRemarksShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.formInstanceIdList)) {
      request.formInstanceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.formInstanceIdList, "FormInstanceIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formInstanceIdListShrink)) {
      body["FormInstanceIdList"] = request.formInstanceIdListShrink;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFormRemarks",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/listFormRemarks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFormRemarksResponse>(await this.callApi(params, req, runtime), new $_model.ListFormRemarksResponse({}));
  }

  /**
   * 批量查询宜搭表单实例的评论
   * 
   * @param request - ListFormRemarksRequest
   * @returns ListFormRemarksResponse
   */
  async listFormRemarks(request: $_model.ListFormRemarksRequest): Promise<$_model.ListFormRemarksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListFormRemarksHeaders({ });
    return await this.listFormRemarksWithOptions(request, headers, runtime);
  }

  /**
   * 查询消息
   * 
   * @param request - ListMessageRequest
   * @param headers - ListMessageHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessageResponse
   */
  async listMessageWithOptions(request: $_model.ListMessageRequest, headers: $_model.ListMessageHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.extLoginUser)) {
      body["extLoginUser"] = request.extLoginUser;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.originalAssistantId)) {
      body["originalAssistantId"] = request.originalAssistantId;
    }

    if (!$dara.isNull(request.runId)) {
      body["runId"] = request.runId;
    }

    if (!$dara.isNull(request.sourceIdOfOriginalAssistantId)) {
      body["sourceIdOfOriginalAssistantId"] = request.sourceIdOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.sourceTypeOfOriginalAssistantId)) {
      body["sourceTypeOfOriginalAssistantId"] = request.sourceTypeOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.threadId)) {
      body["threadId"] = request.threadId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountId)) {
      realHeaders["accountId"] = String(headers.accountId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMessage",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/assistant/listMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMessageResponse>(await this.callApi(params, req, runtime), new $_model.ListMessageResponse({}));
  }

  /**
   * 查询消息
   * 
   * @param request - ListMessageRequest
   * @returns ListMessageResponse
   */
  async listMessage(request: $_model.ListMessageRequest): Promise<$_model.ListMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListMessageHeaders({ });
    return await this.listMessageWithOptions(request, headers, runtime);
  }

  /**
   * 列出多行记录
   * 
   * @param tmpReq - ListMultiDimTableRecordsRequest
   * @param tmpHeader - ListMultiDimTableRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultiDimTableRecordsResponse
   */
  async listMultiDimTableRecordsWithOptions(tmpReq: $_model.ListMultiDimTableRecordsRequest, tmpHeader: $_model.ListMultiDimTableRecordsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListMultiDimTableRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.ListMultiDimTableRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListMultiDimTableRecordsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.filterShrink)) {
      body["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sheetIdOrName)) {
      body["SheetIdOrName"] = request.sheetIdOrName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMultiDimTableRecords",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/listMultiDimTableRecords`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMultiDimTableRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListMultiDimTableRecordsResponse({}));
  }

  /**
   * 列出多行记录
   * 
   * @param request - ListMultiDimTableRecordsRequest
   * @returns ListMultiDimTableRecordsResponse
   */
  async listMultiDimTableRecords(request: $_model.ListMultiDimTableRecordsRequest): Promise<$_model.ListMultiDimTableRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListMultiDimTableRecordsHeaders({ });
    return await this.listMultiDimTableRecordsWithOptions(request, headers, runtime);
  }

  /**
   * 获取应用下的页面列表
   * 
   * @param request - ListNavigationByFormTypeRequest
   * @param tmpHeader - ListNavigationByFormTypeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNavigationByFormTypeResponse
   */
  async listNavigationByFormTypeWithOptions(request: $_model.ListNavigationByFormTypeRequest, tmpHeader: $_model.ListNavigationByFormTypeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListNavigationByFormTypeResponse> {
    request.validate();
    let headers = new $_model.ListNavigationByFormTypeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formType)) {
      body["FormType"] = request.formType;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNavigationByFormType",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/listNavigationByFormType`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNavigationByFormTypeResponse>(await this.callApi(params, req, runtime), new $_model.ListNavigationByFormTypeResponse({}));
  }

  /**
   * 获取应用下的页面列表
   * 
   * @param request - ListNavigationByFormTypeRequest
   * @returns ListNavigationByFormTypeResponse
   */
  async listNavigationByFormType(request: $_model.ListNavigationByFormTypeRequest): Promise<$_model.ListNavigationByFormTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListNavigationByFormTypeHeaders({ });
    return await this.listNavigationByFormTypeWithOptions(request, headers, runtime);
  }

  /**
   * 获取节点列表
   * 
   * @param tmpReq - ListNodesRequest
   * @param tmpHeader - ListNodesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(tmpReq: $_model.ListNodesRequest, tmpHeader: $_model.ListNodesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodesResponse> {
    tmpReq.validate();
    let request = new $_model.ListNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListNodesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parentNodeId)) {
      body["ParentNodeId"] = request.parentNodeId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.withPermissionRole)) {
      body["WithPermissionRole"] = request.withPermissionRole;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/listNodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListNodesResponse({}));
  }

  /**
   * 获取节点列表
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: $_model.ListNodesRequest): Promise<$_model.ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListNodesHeaders({ });
    return await this.listNodesWithOptions(request, headers, runtime);
  }

  /**
   * 获取文件权限列表
   * 
   * @param tmpReq - ListPermissionsRequest
   * @param tmpHeader - ListPermissionsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionsResponse
   */
  async listPermissionsWithOptions(tmpReq: $_model.ListPermissionsRequest, tmpHeader: $_model.ListPermissionsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListPermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListPermissionsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryUuid)) {
      body["DentryUuid"] = request.dentryUuid;
    }

    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPermissions",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/listPermissions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListPermissionsResponse({}));
  }

  /**
   * 获取文件权限列表
   * 
   * @param request - ListPermissionsRequest
   * @returns ListPermissionsResponse
   */
  async listPermissions(request: $_model.ListPermissionsRequest): Promise<$_model.ListPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListPermissionsHeaders({ });
    return await this.listPermissionsWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户发出的日志列表
   * 
   * @param tmpReq - ListReportRequest
   * @param tmpHeader - ListReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReportResponse
   */
  async listReportWithOptions(tmpReq: $_model.ListReportRequest, tmpHeader: $_model.ListReportHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListReportResponse> {
    tmpReq.validate();
    let request = new $_model.ListReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListReportShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cursor)) {
      body["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.modifiedEndTime)) {
      body["ModifiedEndTime"] = request.modifiedEndTime;
    }

    if (!$dara.isNull(request.modifiedStartTime)) {
      body["ModifiedStartTime"] = request.modifiedStartTime;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReport",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/listReport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReportResponse>(await this.callApi(params, req, runtime), new $_model.ListReportResponse({}));
  }

  /**
   * 获取用户发出的日志列表
   * 
   * @param request - ListReportRequest
   * @returns ListReportResponse
   */
  async listReport(request: $_model.ListReportRequest): Promise<$_model.ListReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListReportHeaders({ });
    return await this.listReportWithOptions(request, headers, runtime);
  }

  /**
   * 列出AI技能
   * 
   * @param request - ListSkillRequest
   * @param tmpHeader - ListSkillHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillResponse
   */
  async listSkillWithOptions(request: $_model.ListSkillRequest, tmpHeader: $_model.ListSkillHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillResponse> {
    request.validate();
    let headers = new $_model.ListSkillShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["groupId"] = request.groupId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkill",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/skill/listSkill`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillResponse({}));
  }

  /**
   * 列出AI技能
   * 
   * @param request - ListSkillRequest
   * @returns ListSkillResponse
   */
  async listSkill(request: $_model.ListSkillRequest): Promise<$_model.ListSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListSkillHeaders({ });
    return await this.listSkillWithOptions(request, headers, runtime);
  }

  /**
   * 获取子表组件数据
   * 
   * @param request - ListTableDataByFormInstanceIdTableIdRequest
   * @param tmpHeader - ListTableDataByFormInstanceIdTableIdHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTableDataByFormInstanceIdTableIdResponse
   */
  async listTableDataByFormInstanceIdTableIdWithOptions(request: $_model.ListTableDataByFormInstanceIdTableIdRequest, tmpHeader: $_model.ListTableDataByFormInstanceIdTableIdHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListTableDataByFormInstanceIdTableIdResponse> {
    request.validate();
    let headers = new $_model.ListTableDataByFormInstanceIdTableIdShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formInstanceId)) {
      body["FormInstanceId"] = request.formInstanceId;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.tableFieldId)) {
      body["TableFieldId"] = request.tableFieldId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTableDataByFormInstanceIdTableId",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/listTableDataByFormInstanceIdTableId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTableDataByFormInstanceIdTableIdResponse>(await this.callApi(params, req, runtime), new $_model.ListTableDataByFormInstanceIdTableIdResponse({}));
  }

  /**
   * 获取子表组件数据
   * 
   * @param request - ListTableDataByFormInstanceIdTableIdRequest
   * @returns ListTableDataByFormInstanceIdTableIdResponse
   */
  async listTableDataByFormInstanceIdTableId(request: $_model.ListTableDataByFormInstanceIdTableIdRequest): Promise<$_model.ListTableDataByFormInstanceIdTableIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListTableDataByFormInstanceIdTableIdHeaders({ });
    return await this.listTableDataByFormInstanceIdTableIdWithOptions(request, headers, runtime);
  }

  /**
   * 获取知识小组列表
   * 
   * @param tmpReq - ListTeamsRequest
   * @param tmpHeader - ListTeamsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTeamsResponse
   */
  async listTeamsWithOptions(tmpReq: $_model.ListTeamsRequest, tmpHeader: $_model.ListTeamsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListTeamsResponse> {
    tmpReq.validate();
    let request = new $_model.ListTeamsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListTeamsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTeams",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/listTeams`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTeamsResponse>(await this.callApi(params, req, runtime), new $_model.ListTeamsResponse({}));
  }

  /**
   * 获取知识小组列表
   * 
   * @param request - ListTeamsRequest
   * @returns ListTeamsResponse
   */
  async listTeams(request: $_model.ListTeamsRequest): Promise<$_model.ListTeamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListTeamsHeaders({ });
    return await this.listTeamsWithOptions(request, headers, runtime);
  }

  /**
   * 查询文档模板
   * 
   * @param tmpReq - ListTemplateRequest
   * @param tmpHeader - ListTemplateHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateResponse
   */
  async listTemplateWithOptions(tmpReq: $_model.ListTemplateRequest, tmpHeader: $_model.ListTemplateHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.ListTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListTemplateShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplate",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/listTemplate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplateResponse({}));
  }

  /**
   * 查询文档模板
   * 
   * @param request - ListTemplateRequest
   * @returns ListTemplateResponse
   */
  async listTemplate(request: $_model.ListTemplateRequest): Promise<$_model.ListTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListTemplateHeaders({ });
    return await this.listTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 查询工单操作记录
   * 
   * @param tmpReq - ListTicketOperateRecordRequest
   * @param tmpHeader - ListTicketOperateRecordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTicketOperateRecordResponse
   */
  async listTicketOperateRecordWithOptions(tmpReq: $_model.ListTicketOperateRecordRequest, tmpHeader: $_model.ListTicketOperateRecordHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListTicketOperateRecordResponse> {
    tmpReq.validate();
    let request = new $_model.ListTicketOperateRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListTicketOperateRecordShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.openTeamId)) {
      body["OpenTeamId"] = request.openTeamId;
    }

    if (!$dara.isNull(request.openTicketId)) {
      body["OpenTicketId"] = request.openTicketId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTicketOperateRecord",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ticket/listTicketOperateRecord`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTicketOperateRecordResponse>(await this.callApi(params, req, runtime), new $_model.ListTicketOperateRecordResponse({}));
  }

  /**
   * 查询工单操作记录
   * 
   * @param request - ListTicketOperateRecordRequest
   * @returns ListTicketOperateRecordResponse
   */
  async listTicketOperateRecord(request: $_model.ListTicketOperateRecordRequest): Promise<$_model.ListTicketOperateRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListTicketOperateRecordHeaders({ });
    return await this.listTicketOperateRecordWithOptions(request, headers, runtime);
  }

  /**
   * 获取知识库列表
   * 
   * @param tmpReq - ListWorkspacesRequest
   * @param tmpHeader - ListWorkspacesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(tmpReq: $_model.ListWorkspacesRequest, tmpHeader: $_model.ListWorkspacesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    tmpReq.validate();
    let request = new $_model.ListWorkspacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ListWorkspacesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.teamId)) {
      body["TeamId"] = request.teamId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.withPermissionRole)) {
      body["WithPermissionRole"] = request.withPermissionRole;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/listWorkspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * 获取知识库列表
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: $_model.ListWorkspacesRequest): Promise<$_model.ListWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListWorkspacesHeaders({ });
    return await this.listWorkspacesWithOptions(request, headers, runtime);
  }

  /**
   * 修改日程
   * 
   * @param tmpReq - PatchEventRequest
   * @param tmpHeader - PatchEventHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PatchEventResponse
   */
  async patchEventWithOptions(tmpReq: $_model.PatchEventRequest, tmpHeader: $_model.PatchEventHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PatchEventResponse> {
    tmpReq.validate();
    let request = new $_model.PatchEventShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.PatchEventShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.attendees)) {
      request.attendeesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attendees, "Attendees", "json");
    }

    if (!$dara.isNull(tmpReq.cardInstances)) {
      request.cardInstancesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cardInstances, "CardInstances", "json");
    }

    if (!$dara.isNull(tmpReq.end)) {
      request.endShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.end, "End", "json");
    }

    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    if (!$dara.isNull(tmpReq.location)) {
      request.locationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.location, "Location", "json");
    }

    if (!$dara.isNull(tmpReq.recurrence)) {
      request.recurrenceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recurrence, "Recurrence", "json");
    }

    if (!$dara.isNull(tmpReq.reminders)) {
      request.remindersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reminders, "Reminders", "json");
    }

    if (!$dara.isNull(tmpReq.start)) {
      request.startShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.start, "Start", "json");
    }

    if (!$dara.isNull(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "categories", "json");
    }

    if (!$dara.isNull(tmpReq.onlineMeetingInfo)) {
      request.onlineMeetingInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.onlineMeetingInfo, "onlineMeetingInfo", "json");
    }

    if (!$dara.isNull(tmpReq.richTextDescription)) {
      request.richTextDescriptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.richTextDescription, "richTextDescription", "json");
    }

    if (!$dara.isNull(tmpReq.uiConfigs)) {
      request.uiConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.uiConfigs, "uiConfigs", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoriesShrink)) {
      query["categories"] = request.categoriesShrink;
    }

    if (!$dara.isNull(request.freeBusyStatus)) {
      query["freeBusyStatus"] = request.freeBusyStatus;
    }

    if (!$dara.isNull(request.onlineMeetingInfoShrink)) {
      query["onlineMeetingInfo"] = request.onlineMeetingInfoShrink;
    }

    if (!$dara.isNull(request.richTextDescriptionShrink)) {
      query["richTextDescription"] = request.richTextDescriptionShrink;
    }

    if (!$dara.isNull(request.uiConfigsShrink)) {
      query["uiConfigs"] = request.uiConfigsShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attendeesShrink)) {
      body["Attendees"] = request.attendeesShrink;
    }

    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.cardInstancesShrink)) {
      body["CardInstances"] = request.cardInstancesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.endShrink)) {
      body["End"] = request.endShrink;
    }

    if (!$dara.isNull(request.eventId)) {
      body["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.extraShrink)) {
      body["Extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.isAllDay)) {
      body["IsAllDay"] = request.isAllDay;
    }

    if (!$dara.isNull(request.locationShrink)) {
      body["Location"] = request.locationShrink;
    }

    if (!$dara.isNull(request.recurrenceShrink)) {
      body["Recurrence"] = request.recurrenceShrink;
    }

    if (!$dara.isNull(request.remindersShrink)) {
      body["Reminders"] = request.remindersShrink;
    }

    if (!$dara.isNull(request.startShrink)) {
      body["Start"] = request.startShrink;
    }

    if (!$dara.isNull(request.summary)) {
      body["Summary"] = request.summary;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PatchEvent",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/patchEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PatchEventResponse>(await this.callApi(params, req, runtime), new $_model.PatchEventResponse({}));
  }

  /**
   * 修改日程
   * 
   * @param request - PatchEventRequest
   * @returns PatchEventResponse
   */
  async patchEvent(request: $_model.PatchEventRequest): Promise<$_model.PatchEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PatchEventHeaders({ });
    return await this.patchEventWithOptions(request, headers, runtime);
  }

  /**
   * 查询会议录制中的文本信息
   * 
   * @param tmpReq - QueryCloudRecordTextRequest
   * @param tmpHeader - QueryCloudRecordTextHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCloudRecordTextResponse
   */
  async queryCloudRecordTextWithOptions(tmpReq: $_model.QueryCloudRecordTextRequest, tmpHeader: $_model.QueryCloudRecordTextHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCloudRecordTextResponse> {
    tmpReq.validate();
    let request = new $_model.QueryCloudRecordTextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryCloudRecordTextShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.direction)) {
      body["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCloudRecordText",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryCloudRecordText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCloudRecordTextResponse>(await this.callApi(params, req, runtime), new $_model.QueryCloudRecordTextResponse({}));
  }

  /**
   * 查询会议录制中的文本信息
   * 
   * @param request - QueryCloudRecordTextRequest
   * @returns QueryCloudRecordTextResponse
   */
  async queryCloudRecordText(request: $_model.QueryCloudRecordTextRequest): Promise<$_model.QueryCloudRecordTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryCloudRecordTextHeaders({ });
    return await this.queryCloudRecordTextWithOptions(request, headers, runtime);
  }

  /**
   * 查询会议录制的详情信息
   * 
   * @param tmpReq - QueryCloudRecordVideoRequest
   * @param tmpHeader - QueryCloudRecordVideoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCloudRecordVideoResponse
   */
  async queryCloudRecordVideoWithOptions(tmpReq: $_model.QueryCloudRecordVideoRequest, tmpHeader: $_model.QueryCloudRecordVideoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCloudRecordVideoResponse> {
    tmpReq.validate();
    let request = new $_model.QueryCloudRecordVideoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryCloudRecordVideoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCloudRecordVideo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryCloudRecordVideo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCloudRecordVideoResponse>(await this.callApi(params, req, runtime), new $_model.QueryCloudRecordVideoResponse({}));
  }

  /**
   * 查询会议录制的详情信息
   * 
   * @param request - QueryCloudRecordVideoRequest
   * @returns QueryCloudRecordVideoResponse
   */
  async queryCloudRecordVideo(request: $_model.QueryCloudRecordVideoRequest): Promise<$_model.QueryCloudRecordVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryCloudRecordVideoHeaders({ });
    return await this.queryCloudRecordVideoWithOptions(request, headers, runtime);
  }

  /**
   * 查询会议录制中的视频信息
   * 
   * @param tmpReq - QueryCloudRecordVideoPlayInfoRequest
   * @param tmpHeader - QueryCloudRecordVideoPlayInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCloudRecordVideoPlayInfoResponse
   */
  async queryCloudRecordVideoPlayInfoWithOptions(tmpReq: $_model.QueryCloudRecordVideoPlayInfoRequest, tmpHeader: $_model.QueryCloudRecordVideoPlayInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCloudRecordVideoPlayInfoResponse> {
    tmpReq.validate();
    let request = new $_model.QueryCloudRecordVideoPlayInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryCloudRecordVideoPlayInfoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!$dara.isNull(request.mediaId)) {
      body["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCloudRecordVideoPlayInfo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryCloudRecordVideoPlayInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCloudRecordVideoPlayInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryCloudRecordVideoPlayInfoResponse({}));
  }

  /**
   * 查询会议录制中的视频信息
   * 
   * @param request - QueryCloudRecordVideoPlayInfoRequest
   * @returns QueryCloudRecordVideoPlayInfoResponse
   */
  async queryCloudRecordVideoPlayInfo(request: $_model.QueryCloudRecordVideoPlayInfoRequest): Promise<$_model.QueryCloudRecordVideoPlayInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryCloudRecordVideoPlayInfoHeaders({ });
    return await this.queryCloudRecordVideoPlayInfoWithOptions(request, headers, runtime);
  }

  /**
   * 查询视频会议信息
   * 
   * @param request - QueryConferenceInfoRequest
   * @param tmpHeader - QueryConferenceInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConferenceInfoResponse
   */
  async queryConferenceInfoWithOptions(request: $_model.QueryConferenceInfoRequest, tmpHeader: $_model.QueryConferenceInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConferenceInfoResponse> {
    request.validate();
    let headers = new $_model.QueryConferenceInfoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConferenceInfo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryConferenceInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryConferenceInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryConferenceInfoResponse({}));
  }

  /**
   * 查询视频会议信息
   * 
   * @param request - QueryConferenceInfoRequest
   * @returns QueryConferenceInfoResponse
   */
  async queryConferenceInfo(request: $_model.QueryConferenceInfoRequest): Promise<$_model.QueryConferenceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryConferenceInfoHeaders({ });
    return await this.queryConferenceInfoWithOptions(request, headers, runtime);
  }

  /**
   * 根据会议码查询视频会议信息
   * 
   * @param tmpReq - QueryConferenceInfoByRoomCodeRequest
   * @param tmpHeader - QueryConferenceInfoByRoomCodeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConferenceInfoByRoomCodeResponse
   */
  async queryConferenceInfoByRoomCodeWithOptions(tmpReq: $_model.QueryConferenceInfoByRoomCodeRequest, tmpHeader: $_model.QueryConferenceInfoByRoomCodeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConferenceInfoByRoomCodeResponse> {
    tmpReq.validate();
    let request = new $_model.QueryConferenceInfoByRoomCodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryConferenceInfoByRoomCodeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.roomCode)) {
      body["roomCode"] = request.roomCode;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConferenceInfoByRoomCode",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryConferenceInfoByRoomCode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryConferenceInfoByRoomCodeResponse>(await this.callApi(params, req, runtime), new $_model.QueryConferenceInfoByRoomCodeResponse({}));
  }

  /**
   * 根据会议码查询视频会议信息
   * 
   * @param request - QueryConferenceInfoByRoomCodeRequest
   * @returns QueryConferenceInfoByRoomCodeResponse
   */
  async queryConferenceInfoByRoomCode(request: $_model.QueryConferenceInfoByRoomCodeRequest): Promise<$_model.QueryConferenceInfoByRoomCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryConferenceInfoByRoomCodeHeaders({ });
    return await this.queryConferenceInfoByRoomCodeWithOptions(request, headers, runtime);
  }

  /**
   * 查询视频会议成员
   * 
   * @param tmpReq - QueryConferenceMembersRequest
   * @param tmpHeader - QueryConferenceMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConferenceMembersResponse
   */
  async queryConferenceMembersWithOptions(tmpReq: $_model.QueryConferenceMembersRequest, tmpHeader: $_model.QueryConferenceMembersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConferenceMembersResponse> {
    tmpReq.validate();
    let request = new $_model.QueryConferenceMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryConferenceMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConferenceMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryConferenceMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryConferenceMembersResponse>(await this.callApi(params, req, runtime), new $_model.QueryConferenceMembersResponse({}));
  }

  /**
   * 查询视频会议成员
   * 
   * @param request - QueryConferenceMembersRequest
   * @returns QueryConferenceMembersResponse
   */
  async queryConferenceMembers(request: $_model.QueryConferenceMembersRequest): Promise<$_model.QueryConferenceMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryConferenceMembersHeaders({ });
    return await this.queryConferenceMembersWithOptions(request, headers, runtime);
  }

  /**
   * 获取文件或文件夹信息
   * 
   * @param tmpReq - QueryDentriesInfoRequest
   * @param tmpHeader - QueryDentriesInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDentriesInfoResponse
   */
  async queryDentriesInfoWithOptions(tmpReq: $_model.QueryDentriesInfoRequest, tmpHeader: $_model.QueryDentriesInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDentriesInfoResponse> {
    tmpReq.validate();
    let request = new $_model.QueryDentriesInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryDentriesInfoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.appIdsForAppProperties)) {
      request.appIdsForAppPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appIdsForAppProperties, "AppIdsForAppProperties", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appIdsForAppPropertiesShrink)) {
      body["AppIdsForAppProperties"] = request.appIdsForAppPropertiesShrink;
    }

    if (!$dara.isNull(request.dentryId)) {
      body["DentryId"] = request.dentryId;
    }

    if (!$dara.isNull(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.withThumbnail)) {
      body["WithThumbnail"] = request.withThumbnail;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDentriesInfo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/queryDentriesInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDentriesInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryDentriesInfoResponse({}));
  }

  /**
   * 获取文件或文件夹信息
   * 
   * @param request - QueryDentriesInfoRequest
   * @returns QueryDentriesInfoResponse
   */
  async queryDentriesInfo(request: $_model.QueryDentriesInfoRequest): Promise<$_model.QueryDentriesInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryDentriesInfoHeaders({ });
    return await this.queryDentriesInfoWithOptions(request, headers, runtime);
  }

  /**
   * 查询知识库节点信息
   * 
   * @param tmpReq - QueryDentryRequest
   * @param tmpHeader - QueryDentryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDentryResponse
   */
  async queryDentryWithOptions(tmpReq: $_model.QueryDentryRequest, tmpHeader: $_model.QueryDentryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDentryResponse> {
    tmpReq.validate();
    let request = new $_model.QueryDentryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryDentryShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryId)) {
      body["DentryId"] = request.dentryId;
    }

    if (!$dara.isNull(request.includeSpace)) {
      body["IncludeSpace"] = request.includeSpace;
    }

    if (!$dara.isNull(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDentry",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v2/documents/queryDentry`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDentryResponse>(await this.callApi(params, req, runtime), new $_model.QueryDentryResponse({}));
  }

  /**
   * 查询知识库节点信息
   * 
   * @param request - QueryDentryRequest
   * @returns QueryDentryResponse
   */
  async queryDentry(request: $_model.QueryDentryRequest): Promise<$_model.QueryDentryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryDentryHeaders({ });
    return await this.queryDentryWithOptions(request, headers, runtime);
  }

  /**
   * 查询群直播详情
   * 
   * @param tmpReq - QueryGroupLiveInfoRequest
   * @param tmpHeader - QueryGroupLiveInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGroupLiveInfoResponse
   */
  async queryGroupLiveInfoWithOptions(tmpReq: $_model.QueryGroupLiveInfoRequest, tmpHeader: $_model.QueryGroupLiveInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGroupLiveInfoResponse> {
    tmpReq.validate();
    let request = new $_model.QueryGroupLiveInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryGroupLiveInfoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.anchorUnionId)) {
      body["AnchorUnionId"] = request.anchorUnionId;
    }

    if (!$dara.isNull(request.liveUuid)) {
      body["LiveUuid"] = request.liveUuid;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryGroupLiveInfo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryGroupLiveInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGroupLiveInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryGroupLiveInfoResponse({}));
  }

  /**
   * 查询群直播详情
   * 
   * @param request - QueryGroupLiveInfoRequest
   * @returns QueryGroupLiveInfoResponse
   */
  async queryGroupLiveInfo(request: $_model.QueryGroupLiveInfoRequest): Promise<$_model.QueryGroupLiveInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryGroupLiveInfoHeaders({ });
    return await this.queryGroupLiveInfoWithOptions(request, headers, runtime);
  }

  /**
   * 查询直播信息
   * 
   * @param tmpReq - QueryLiveInfoRequest
   * @param tmpHeader - QueryLiveInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLiveInfoResponse
   */
  async queryLiveInfoWithOptions(tmpReq: $_model.QueryLiveInfoRequest, tmpHeader: $_model.QueryLiveInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLiveInfoResponse> {
    tmpReq.validate();
    let request = new $_model.QueryLiveInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryLiveInfoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLiveInfo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryLiveInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLiveInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryLiveInfoResponse({}));
  }

  /**
   * 查询直播信息
   * 
   * @param request - QueryLiveInfoRequest
   * @returns QueryLiveInfoResponse
   */
  async queryLiveInfo(request: $_model.QueryLiveInfoRequest): Promise<$_model.QueryLiveInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryLiveInfoHeaders({ });
    return await this.queryLiveInfoWithOptions(request, headers, runtime);
  }

  /**
   * 查询直播的观看数据
   * 
   * @param tmpReq - QueryLiveWatchDetailRequest
   * @param tmpHeader - QueryLiveWatchDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLiveWatchDetailResponse
   */
  async queryLiveWatchDetailWithOptions(tmpReq: $_model.QueryLiveWatchDetailRequest, tmpHeader: $_model.QueryLiveWatchDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLiveWatchDetailResponse> {
    tmpReq.validate();
    let request = new $_model.QueryLiveWatchDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryLiveWatchDetailShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLiveWatchDetail",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryLiveWatchDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLiveWatchDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryLiveWatchDetailResponse({}));
  }

  /**
   * 查询直播的观看数据
   * 
   * @param request - QueryLiveWatchDetailRequest
   * @returns QueryLiveWatchDetailResponse
   */
  async queryLiveWatchDetail(request: $_model.QueryLiveWatchDetailRequest): Promise<$_model.QueryLiveWatchDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryLiveWatchDetailHeaders({ });
    return await this.queryLiveWatchDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询直播观看人员信息
   * 
   * @param tmpReq - QueryLiveWatchUserListRequest
   * @param tmpHeader - QueryLiveWatchUserListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLiveWatchUserListResponse
   */
  async queryLiveWatchUserListWithOptions(tmpReq: $_model.QueryLiveWatchUserListRequest, tmpHeader: $_model.QueryLiveWatchUserListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLiveWatchUserListResponse> {
    tmpReq.validate();
    let request = new $_model.QueryLiveWatchUserListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryLiveWatchUserListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLiveWatchUserList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryLiveWatchUserList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLiveWatchUserListResponse>(await this.callApi(params, req, runtime), new $_model.QueryLiveWatchUserListResponse({}));
  }

  /**
   * 查询直播观看人员信息
   * 
   * @param request - QueryLiveWatchUserListRequest
   * @returns QueryLiveWatchUserListResponse
   */
  async queryLiveWatchUserList(request: $_model.QueryLiveWatchUserListRequest): Promise<$_model.QueryLiveWatchUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryLiveWatchUserListHeaders({ });
    return await this.queryLiveWatchUserListWithOptions(request, headers, runtime);
  }

  /**
   * 查询会议室详情
   * 
   * @param tmpReq - QueryMeetingRoomRequest
   * @param tmpHeader - QueryMeetingRoomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMeetingRoomResponse
   */
  async queryMeetingRoomWithOptions(tmpReq: $_model.QueryMeetingRoomRequest, tmpHeader: $_model.QueryMeetingRoomHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMeetingRoomResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMeetingRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryMeetingRoomShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMeetingRoom",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryMeetingRoom`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMeetingRoomResponse>(await this.callApi(params, req, runtime), new $_model.QueryMeetingRoomResponse({}));
  }

  /**
   * 查询会议室详情
   * 
   * @param request - QueryMeetingRoomRequest
   * @returns QueryMeetingRoomResponse
   */
  async queryMeetingRoom(request: $_model.QueryMeetingRoomRequest): Promise<$_model.QueryMeetingRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryMeetingRoomHeaders({ });
    return await this.queryMeetingRoomWithOptions(request, headers, runtime);
  }

  /**
   * 查询会议室分组信息
   * 
   * @param tmpReq - QueryMeetingRoomGroupRequest
   * @param tmpHeader - QueryMeetingRoomGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMeetingRoomGroupResponse
   */
  async queryMeetingRoomGroupWithOptions(tmpReq: $_model.QueryMeetingRoomGroupRequest, tmpHeader: $_model.QueryMeetingRoomGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMeetingRoomGroupResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMeetingRoomGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryMeetingRoomGroupShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMeetingRoomGroup",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryMeetingRoomGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMeetingRoomGroupResponse>(await this.callApi(params, req, runtime), new $_model.QueryMeetingRoomGroupResponse({}));
  }

  /**
   * 查询会议室分组信息
   * 
   * @param request - QueryMeetingRoomGroupRequest
   * @returns QueryMeetingRoomGroupResponse
   */
  async queryMeetingRoomGroup(request: $_model.QueryMeetingRoomGroupRequest): Promise<$_model.QueryMeetingRoomGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryMeetingRoomGroupHeaders({ });
    return await this.queryMeetingRoomGroupWithOptions(request, headers, runtime);
  }

  /**
   * 查询会议室分组列表
   * 
   * @param tmpReq - QueryMeetingRoomGroupListRequest
   * @param tmpHeader - QueryMeetingRoomGroupListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMeetingRoomGroupListResponse
   */
  async queryMeetingRoomGroupListWithOptions(tmpReq: $_model.QueryMeetingRoomGroupListRequest, tmpHeader: $_model.QueryMeetingRoomGroupListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMeetingRoomGroupListResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMeetingRoomGroupListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryMeetingRoomGroupListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.request)) {
      request.requestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.request, "Request", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestShrink)) {
      body["Request"] = request.requestShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMeetingRoomGroupList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryMeetingRoomGroupList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMeetingRoomGroupListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMeetingRoomGroupListResponse({}));
  }

  /**
   * 查询会议室分组列表
   * 
   * @param request - QueryMeetingRoomGroupListRequest
   * @returns QueryMeetingRoomGroupListResponse
   */
  async queryMeetingRoomGroupList(request: $_model.QueryMeetingRoomGroupListRequest): Promise<$_model.QueryMeetingRoomGroupListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryMeetingRoomGroupListHeaders({ });
    return await this.queryMeetingRoomGroupListWithOptions(request, headers, runtime);
  }

  /**
   * 查询会议室列表
   * 
   * @param tmpReq - QueryMeetingRoomListRequest
   * @param tmpHeader - QueryMeetingRoomListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMeetingRoomListResponse
   */
  async queryMeetingRoomListWithOptions(tmpReq: $_model.QueryMeetingRoomListRequest, tmpHeader: $_model.QueryMeetingRoomListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMeetingRoomListResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMeetingRoomListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryMeetingRoomListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMeetingRoomList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryMeetingRoomList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMeetingRoomListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMeetingRoomListResponse({}));
  }

  /**
   * 查询会议室列表
   * 
   * @param request - QueryMeetingRoomListRequest
   * @returns QueryMeetingRoomListResponse
   */
  async queryMeetingRoomList(request: $_model.QueryMeetingRoomListRequest): Promise<$_model.QueryMeetingRoomListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryMeetingRoomListHeaders({ });
    return await this.queryMeetingRoomListWithOptions(request, headers, runtime);
  }

  /**
   * 查询闪记录音
   * 
   * @param tmpReq - QueryMinutesRequest
   * @param tmpHeader - QueryMinutesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinutesResponse
   */
  async queryMinutesWithOptions(tmpReq: $_model.QueryMinutesRequest, tmpHeader: $_model.QueryMinutesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMinutesResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMinutesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryMinutesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMinutes",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryMinutes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMinutesResponse>(await this.callApi(params, req, runtime), new $_model.QueryMinutesResponse({}));
  }

  /**
   * 查询闪记录音
   * 
   * @param request - QueryMinutesRequest
   * @returns QueryMinutesResponse
   */
  async queryMinutes(request: $_model.QueryMinutesRequest): Promise<$_model.QueryMinutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryMinutesHeaders({ });
    return await this.queryMinutesWithOptions(request, headers, runtime);
  }

  /**
   * 查询会议闪记智能纪要
   * 
   * @param tmpReq - QueryMinutesSummaryRequest
   * @param tmpHeader - QueryMinutesSummaryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinutesSummaryResponse
   */
  async queryMinutesSummaryWithOptions(tmpReq: $_model.QueryMinutesSummaryRequest, tmpHeader: $_model.QueryMinutesSummaryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMinutesSummaryResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMinutesSummaryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryMinutesSummaryShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.summaryTypeList)) {
      request.summaryTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.summaryTypeList, "summaryTypeList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    if (!$dara.isNull(request.summaryTypeListShrink)) {
      body["summaryTypeList"] = request.summaryTypeListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMinutesSummary",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryMinutesSummary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMinutesSummaryResponse>(await this.callApi(params, req, runtime), new $_model.QueryMinutesSummaryResponse({}));
  }

  /**
   * 查询会议闪记智能纪要
   * 
   * @param request - QueryMinutesSummaryRequest
   * @returns QueryMinutesSummaryResponse
   */
  async queryMinutesSummary(request: $_model.QueryMinutesSummaryRequest): Promise<$_model.QueryMinutesSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryMinutesSummaryHeaders({ });
    return await this.queryMinutesSummaryWithOptions(request, headers, runtime);
  }

  /**
   * 查询会议闪记的文本信息
   * 
   * @param tmpReq - QueryMinutesTextRequest
   * @param tmpHeader - QueryMinutesTextHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinutesTextResponse
   */
  async queryMinutesTextWithOptions(tmpReq: $_model.QueryMinutesTextRequest, tmpHeader: $_model.QueryMinutesTextHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMinutesTextResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMinutesTextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryMinutesTextShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    if (!$dara.isNull(request.direction)) {
      body["direction"] = request.direction;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMinutesText",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryMinutesText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMinutesTextResponse>(await this.callApi(params, req, runtime), new $_model.QueryMinutesTextResponse({}));
  }

  /**
   * 查询会议闪记的文本信息
   * 
   * @param request - QueryMinutesTextRequest
   * @returns QueryMinutesTextResponse
   */
  async queryMinutesText(request: $_model.QueryMinutesTextRequest): Promise<$_model.QueryMinutesTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryMinutesTextHeaders({ });
    return await this.queryMinutesTextWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业荣誉
   * 
   * @param tmpReq - QueryOrgHonorsRequest
   * @param tmpHeader - QueryOrgHonorsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrgHonorsResponse
   */
  async queryOrgHonorsWithOptions(tmpReq: $_model.QueryOrgHonorsRequest, tmpHeader: $_model.QueryOrgHonorsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOrgHonorsResponse> {
    tmpReq.validate();
    let request = new $_model.QueryOrgHonorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryOrgHonorsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orgId)) {
      body["orgId"] = request.orgId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOrgHonors",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/honor/queryOrgHonors`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOrgHonorsResponse>(await this.callApi(params, req, runtime), new $_model.QueryOrgHonorsResponse({}));
  }

  /**
   * 查询企业荣誉
   * 
   * @param request - QueryOrgHonorsRequest
   * @returns QueryOrgHonorsResponse
   */
  async queryOrgHonors(request: $_model.QueryOrgHonorsRequest): Promise<$_model.QueryOrgHonorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryOrgHonorsHeaders({ });
    return await this.queryOrgHonorsWithOptions(request, headers, runtime);
  }

  /**
   * 查询企业代办
   * 
   * @param tmpReq - QueryOrgTodoTasksRequest
   * @param tmpHeader - QueryOrgTodoTasksHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrgTodoTasksResponse
   */
  async queryOrgTodoTasksWithOptions(tmpReq: $_model.QueryOrgTodoTasksRequest, tmpHeader: $_model.QueryOrgTodoTasksHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOrgTodoTasksResponse> {
    tmpReq.validate();
    let request = new $_model.QueryOrgTodoTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryOrgTodoTasksShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.isDone)) {
      body["isDone"] = request.isDone;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOrgTodoTasks",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/queryOrgTodoTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOrgTodoTasksResponse>(await this.callApi(params, req, runtime), new $_model.QueryOrgTodoTasksResponse({}));
  }

  /**
   * 查询企业代办
   * 
   * @param request - QueryOrgTodoTasksRequest
   * @returns QueryOrgTodoTasksResponse
   */
  async queryOrgTodoTasks(request: $_model.QueryOrgTodoTasksRequest): Promise<$_model.QueryOrgTodoTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryOrgTodoTasksHeaders({ });
    return await this.queryOrgTodoTasksWithOptions(request, headers, runtime);
  }

  /**
   * 查询闪记的链接，可通过链接查看闪记内容
   * 
   * @param tmpReq - QueryRecordMinutesUrlRequest
   * @param tmpHeader - QueryRecordMinutesUrlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordMinutesUrlResponse
   */
  async queryRecordMinutesUrlWithOptions(tmpReq: $_model.QueryRecordMinutesUrlRequest, tmpHeader: $_model.QueryRecordMinutesUrlHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordMinutesUrlResponse> {
    tmpReq.validate();
    let request = new $_model.QueryRecordMinutesUrlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryRecordMinutesUrlShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["ConferenceId"] = request.conferenceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordMinutesUrl",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryRecordMinutesUrl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordMinutesUrlResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordMinutesUrlResponse({}));
  }

  /**
   * 查询闪记的链接，可通过链接查看闪记内容
   * 
   * @param request - QueryRecordMinutesUrlRequest
   * @returns QueryRecordMinutesUrlResponse
   */
  async queryRecordMinutesUrl(request: $_model.QueryRecordMinutesUrlRequest): Promise<$_model.QueryRecordMinutesUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryRecordMinutesUrlHeaders({ });
    return await this.queryRecordMinutesUrlWithOptions(request, headers, runtime);
  }

  /**
   * 获取日志详情
   * 
   * @param tmpReq - QueryReportDetailRequest
   * @param tmpHeader - QueryReportDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReportDetailResponse
   */
  async queryReportDetailWithOptions(tmpReq: $_model.QueryReportDetailRequest, tmpHeader: $_model.QueryReportDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryReportDetailResponse> {
    tmpReq.validate();
    let request = new $_model.QueryReportDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryReportDetailShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportId)) {
      body["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryReportDetail",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/queryReportDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryReportDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryReportDetailResponse({}));
  }

  /**
   * 获取日志详情
   * 
   * @param request - QueryReportDetailRequest
   * @returns QueryReportDetailResponse
   */
  async queryReportDetail(request: $_model.QueryReportDetailRequest): Promise<$_model.QueryReportDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryReportDetailHeaders({ });
    return await this.queryReportDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询预约会议
   * 
   * @param tmpReq - QueryScheduleConferenceRequest
   * @param tmpHeader - QueryScheduleConferenceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryScheduleConferenceResponse
   */
  async queryScheduleConferenceWithOptions(tmpReq: $_model.QueryScheduleConferenceRequest, tmpHeader: $_model.QueryScheduleConferenceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryScheduleConferenceResponse> {
    tmpReq.validate();
    let request = new $_model.QueryScheduleConferenceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryScheduleConferenceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.scheduleConferenceId)) {
      body["scheduleConferenceId"] = request.scheduleConferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryScheduleConference",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryScheduleConference`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryScheduleConferenceResponse>(await this.callApi(params, req, runtime), new $_model.QueryScheduleConferenceResponse({}));
  }

  /**
   * 查询预约会议
   * 
   * @param request - QueryScheduleConferenceRequest
   * @returns QueryScheduleConferenceResponse
   */
  async queryScheduleConference(request: $_model.QueryScheduleConferenceRequest): Promise<$_model.QueryScheduleConferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryScheduleConferenceHeaders({ });
    return await this.queryScheduleConferenceWithOptions(request, headers, runtime);
  }

  /**
   * 查询预约会议历史会议信息
   * 
   * @param tmpReq - QueryScheduleConferenceInfoRequest
   * @param tmpHeader - QueryScheduleConferenceInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryScheduleConferenceInfoResponse
   */
  async queryScheduleConferenceInfoWithOptions(tmpReq: $_model.QueryScheduleConferenceInfoRequest, tmpHeader: $_model.QueryScheduleConferenceInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryScheduleConferenceInfoResponse> {
    tmpReq.validate();
    let request = new $_model.QueryScheduleConferenceInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryScheduleConferenceInfoShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.scheduleConferenceId)) {
      body["ScheduleConferenceId"] = request.scheduleConferenceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryScheduleConferenceInfo",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/queryScheduleConferenceInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryScheduleConferenceInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryScheduleConferenceInfoResponse({}));
  }

  /**
   * 查询预约会议历史会议信息
   * 
   * @param request - QueryScheduleConferenceInfoRequest
   * @returns QueryScheduleConferenceInfoResponse
   */
  async queryScheduleConferenceInfo(request: $_model.QueryScheduleConferenceInfoRequest): Promise<$_model.QueryScheduleConferenceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryScheduleConferenceInfoHeaders({ });
    return await this.queryScheduleConferenceInfoWithOptions(request, headers, runtime);
  }

  /**
   * 查询员工勋章列表
   * 
   * @param tmpReq - QueryUserHonorsRequest
   * @param tmpHeader - QueryUserHonorsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserHonorsResponse
   */
  async queryUserHonorsWithOptions(tmpReq: $_model.QueryUserHonorsRequest, tmpHeader: $_model.QueryUserHonorsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserHonorsResponse> {
    tmpReq.validate();
    let request = new $_model.QueryUserHonorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.QueryUserHonorsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orgId)) {
      body["orgId"] = request.orgId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserHonors",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/honor/queryUserHonors`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserHonorsResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserHonorsResponse({}));
  }

  /**
   * 查询员工勋章列表
   * 
   * @param request - QueryUserHonorsRequest
   * @returns QueryUserHonorsResponse
   */
  async queryUserHonors(request: $_model.QueryUserHonorsRequest): Promise<$_model.QueryUserHonorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.QueryUserHonorsHeaders({ });
    return await this.queryUserHonorsWithOptions(request, headers, runtime);
  }

  /**
   * 收回勋章
   * 
   * @param tmpReq - RecallHonorRequest
   * @param tmpHeader - RecallHonorHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecallHonorResponse
   */
  async recallHonorWithOptions(tmpReq: $_model.RecallHonorRequest, tmpHeader: $_model.RecallHonorHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RecallHonorResponse> {
    tmpReq.validate();
    let request = new $_model.RecallHonorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.RecallHonorShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.honorId)) {
      body["honorId"] = request.honorId;
    }

    if (!$dara.isNull(request.orgId)) {
      body["orgId"] = request.orgId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecallHonor",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/honor/recallHonor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecallHonorResponse>(await this.callApi(params, req, runtime), new $_model.RecallHonorResponse({}));
  }

  /**
   * 收回勋章
   * 
   * @param request - RecallHonorRequest
   * @returns RecallHonorResponse
   */
  async recallHonor(request: $_model.RecallHonorRequest): Promise<$_model.RecallHonorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RecallHonorHeaders({ });
    return await this.recallHonorWithOptions(request, headers, runtime);
  }

  /**
   * 获取日志接收人员列表
   * 
   * @param tmpReq - ReceiverListReportRequest
   * @param tmpHeader - ReceiverListReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReceiverListReportResponse
   */
  async receiverListReportWithOptions(tmpReq: $_model.ReceiverListReportRequest, tmpHeader: $_model.ReceiverListReportHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ReceiverListReportResponse> {
    tmpReq.validate();
    let request = new $_model.ReceiverListReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.ReceiverListReportShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.offset)) {
      body["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.reportId)) {
      body["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReceiverListReport",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/receiverListReport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReceiverListReportResponse>(await this.callApi(params, req, runtime), new $_model.ReceiverListReportResponse({}));
  }

  /**
   * 获取日志接收人员列表
   * 
   * @param request - ReceiverListReportRequest
   * @returns ReceiverListReportResponse
   */
  async receiverListReport(request: $_model.ReceiverListReportRequest): Promise<$_model.ReceiverListReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ReceiverListReportHeaders({ });
    return await this.receiverListReportWithOptions(request, headers, runtime);
  }

  /**
   * 转交任务
   * 
   * @param request - RedirectTaskRequest
   * @param tmpHeader - RedirectTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RedirectTaskResponse
   */
  async redirectTaskWithOptions(request: $_model.RedirectTaskRequest, tmpHeader: $_model.RedirectTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RedirectTaskResponse> {
    request.validate();
    let headers = new $_model.RedirectTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.byManager)) {
      body["ByManager"] = request.byManager;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.nowActionExecutorId)) {
      body["NowActionExecutorId"] = request.nowActionExecutorId;
    }

    if (!$dara.isNull(request.processInstanceId)) {
      body["ProcessInstanceId"] = request.processInstanceId;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RedirectTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/redirectTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RedirectTaskResponse>(await this.callApi(params, req, runtime), new $_model.RedirectTaskResponse({}));
  }

  /**
   * 转交任务
   * 
   * @param request - RedirectTaskRequest
   * @returns RedirectTaskResponse
   */
  async redirectTask(request: $_model.RedirectTaskRequest): Promise<$_model.RedirectTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RedirectTaskHeaders({ });
    return await this.redirectTaskWithOptions(request, headers, runtime);
  }

  /**
   * 删除日程参与者
   * 
   * @param tmpReq - RemoveAttendeeRequest
   * @param tmpHeader - RemoveAttendeeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAttendeeResponse
   */
  async removeAttendeeWithOptions(tmpReq: $_model.RemoveAttendeeRequest, tmpHeader: $_model.RemoveAttendeeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveAttendeeResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveAttendeeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.RemoveAttendeeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.attendeesToRemove)) {
      request.attendeesToRemoveShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attendeesToRemove, "AttendeesToRemove", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attendeesToRemoveShrink)) {
      body["AttendeesToRemove"] = request.attendeesToRemoveShrink;
    }

    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.eventId)) {
      body["EventId"] = request.eventId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveAttendee",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/removeAttendee`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveAttendeeResponse>(await this.callApi(params, req, runtime), new $_model.RemoveAttendeeResponse({}));
  }

  /**
   * 删除日程参与者
   * 
   * @param request - RemoveAttendeeRequest
   * @returns RemoveAttendeeResponse
   */
  async removeAttendee(request: $_model.RemoveAttendeeRequest): Promise<$_model.RemoveAttendeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RemoveAttendeeHeaders({ });
    return await this.removeAttendeeWithOptions(request, headers, runtime);
  }

  /**
   * 取消预定会议室
   * 
   * @param tmpReq - RemoveMeetingRoomsRequest
   * @param tmpHeader - RemoveMeetingRoomsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveMeetingRoomsResponse
   */
  async removeMeetingRoomsWithOptions(tmpReq: $_model.RemoveMeetingRoomsRequest, tmpHeader: $_model.RemoveMeetingRoomsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveMeetingRoomsResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveMeetingRoomsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.RemoveMeetingRoomsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.meetingRoomsToRemove)) {
      request.meetingRoomsToRemoveShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.meetingRoomsToRemove, "MeetingRoomsToRemove", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.eventId)) {
      body["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.meetingRoomsToRemoveShrink)) {
      body["MeetingRoomsToRemove"] = request.meetingRoomsToRemoveShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveMeetingRooms",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/removeMeetingRooms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveMeetingRoomsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveMeetingRoomsResponse({}));
  }

  /**
   * 取消预定会议室
   * 
   * @param request - RemoveMeetingRoomsRequest
   * @returns RemoveMeetingRoomsResponse
   */
  async removeMeetingRooms(request: $_model.RemoveMeetingRoomsRequest): Promise<$_model.RemoveMeetingRoomsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RemoveMeetingRoomsHeaders({ });
    return await this.removeMeetingRoomsWithOptions(request, headers, runtime);
  }

  /**
   * 设置日程响应邀请状态
   * 
   * @param tmpReq - RespondEventRequest
   * @param tmpHeader - RespondEventHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RespondEventResponse
   */
  async respondEventWithOptions(tmpReq: $_model.RespondEventRequest, tmpHeader: $_model.RespondEventHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RespondEventResponse> {
    tmpReq.validate();
    let request = new $_model.RespondEventShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.RespondEventShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.eventId)) {
      body["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.responseStatus)) {
      body["ResponseStatus"] = request.responseStatus;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RespondEvent",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/respondEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RespondEventResponse>(await this.callApi(params, req, runtime), new $_model.RespondEventResponse({}));
  }

  /**
   * 设置日程响应邀请状态
   * 
   * @param request - RespondEventRequest
   * @returns RespondEventResponse
   */
  async respondEvent(request: $_model.RespondEventRequest): Promise<$_model.RespondEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RespondEventHeaders({ });
    return await this.respondEventWithOptions(request, headers, runtime);
  }

  /**
   * 查询运行
   * 
   * @param request - RetrieveRunRequest
   * @param headers - RetrieveRunHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveRunResponse
   */
  async retrieveRunWithOptions(request: $_model.RetrieveRunRequest, headers: $_model.RetrieveRunHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RetrieveRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistantId)) {
      body["assistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.extLoginUser)) {
      body["extLoginUser"] = request.extLoginUser;
    }

    if (!$dara.isNull(request.originalAssistantId)) {
      body["originalAssistantId"] = request.originalAssistantId;
    }

    if (!$dara.isNull(request.runId)) {
      body["runId"] = request.runId;
    }

    if (!$dara.isNull(request.sourceIdOfOriginalAssistantId)) {
      body["sourceIdOfOriginalAssistantId"] = request.sourceIdOfOriginalAssistantId;
    }

    if (!$dara.isNull(request.sourceTypeOfOriginalAssistantId)) {
      body["sourceTypeOfOriginalAssistantId"] = request.sourceTypeOfOriginalAssistantId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountId)) {
      realHeaders["accountId"] = String(headers.accountId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetrieveRun",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/ai/v1/assistant/retrieveRun`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetrieveRunResponse>(await this.callApi(params, req, runtime), new $_model.RetrieveRunResponse({}));
  }

  /**
   * 查询运行
   * 
   * @param request - RetrieveRunRequest
   * @returns RetrieveRunResponse
   */
  async retrieveRun(request: $_model.RetrieveRunRequest): Promise<$_model.RetrieveRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RetrieveRunHeaders({ });
    return await this.retrieveRunWithOptions(request, headers, runtime);
  }

  /**
   * 保存日志内容
   * 
   * @param tmpReq - SaveContentRequest
   * @param tmpHeader - SaveContentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveContentResponse
   */
  async saveContentWithOptions(tmpReq: $_model.SaveContentRequest, tmpHeader: $_model.SaveContentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SaveContentResponse> {
    tmpReq.validate();
    let request = new $_model.SaveContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.SaveContentShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.contents)) {
      request.contentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contents, "Contents", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentsShrink)) {
      body["Contents"] = request.contentsShrink;
    }

    if (!$dara.isNull(request.ddFrom)) {
      body["DdFrom"] = request.ddFrom;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveContent",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/saveContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveContentResponse>(await this.callApi(params, req, runtime), new $_model.SaveContentResponse({}));
  }

  /**
   * 保存日志内容
   * 
   * @param request - SaveContentRequest
   * @returns SaveContentResponse
   */
  async saveContent(request: $_model.SaveContentRequest): Promise<$_model.SaveContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SaveContentHeaders({ });
    return await this.saveContentWithOptions(request, headers, runtime);
  }

  /**
   * 保存表单数据
   * 
   * @param request - SaveFormDataRequest
   * @param tmpHeader - SaveFormDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveFormDataResponse
   */
  async saveFormDataWithOptions(request: $_model.SaveFormDataRequest, tmpHeader: $_model.SaveFormDataHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SaveFormDataResponse> {
    request.validate();
    let headers = new $_model.SaveFormDataShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formDataJson)) {
      body["FormDataJson"] = request.formDataJson;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveFormData",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/saveFormData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveFormDataResponse>(await this.callApi(params, req, runtime), new $_model.SaveFormDataResponse({}));
  }

  /**
   * 保存表单数据
   * 
   * @param request - SaveFormDataRequest
   * @returns SaveFormDataResponse
   */
  async saveFormData(request: $_model.SaveFormDataRequest): Promise<$_model.SaveFormDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SaveFormDataHeaders({ });
    return await this.saveFormDataWithOptions(request, headers, runtime);
  }

  /**
   * 提交表单或流程实例下的评论
   * 
   * @param request - SaveFormRemarkRequest
   * @param tmpHeader - SaveFormRemarkHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveFormRemarkResponse
   */
  async saveFormRemarkWithOptions(request: $_model.SaveFormRemarkRequest, tmpHeader: $_model.SaveFormRemarkHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SaveFormRemarkResponse> {
    request.validate();
    let headers = new $_model.SaveFormRemarkShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.atUserId)) {
      body["AtUserId"] = request.atUserId;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.formInstanceId)) {
      body["FormInstanceId"] = request.formInstanceId;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.replyId)) {
      body["ReplyId"] = request.replyId;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveFormRemark",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/saveFormRemark`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveFormRemarkResponse>(await this.callApi(params, req, runtime), new $_model.SaveFormRemarkResponse({}));
  }

  /**
   * 提交表单或流程实例下的评论
   * 
   * @param request - SaveFormRemarkRequest
   * @returns SaveFormRemarkResponse
   */
  async saveFormRemark(request: $_model.SaveFormRemarkRequest): Promise<$_model.SaveFormRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SaveFormRemarkHeaders({ });
    return await this.saveFormRemarkWithOptions(request, headers, runtime);
  }

  /**
   * 获取员工组件的值
   * 
   * @param request - SearchEmployeeFieldValuesRequest
   * @param tmpHeader - SearchEmployeeFieldValuesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchEmployeeFieldValuesResponse
   */
  async searchEmployeeFieldValuesWithOptions(request: $_model.SearchEmployeeFieldValuesRequest, tmpHeader: $_model.SearchEmployeeFieldValuesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SearchEmployeeFieldValuesResponse> {
    request.validate();
    let headers = new $_model.SearchEmployeeFieldValuesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.modifiedFromTimeGMT)) {
      body["ModifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!$dara.isNull(request.modifiedToTimeGMT)) {
      body["ModifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!$dara.isNull(request.originatorId)) {
      body["OriginatorId"] = request.originatorId;
    }

    if (!$dara.isNull(request.searchFieldJson)) {
      body["SearchFieldJson"] = request.searchFieldJson;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.targetFieldJson)) {
      body["TargetFieldJson"] = request.targetFieldJson;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchEmployeeFieldValues",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/searchEmployeeFieldValues`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchEmployeeFieldValuesResponse>(await this.callApi(params, req, runtime), new $_model.SearchEmployeeFieldValuesResponse({}));
  }

  /**
   * 获取员工组件的值
   * 
   * @param request - SearchEmployeeFieldValuesRequest
   * @returns SearchEmployeeFieldValuesResponse
   */
  async searchEmployeeFieldValues(request: $_model.SearchEmployeeFieldValuesRequest): Promise<$_model.SearchEmployeeFieldValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SearchEmployeeFieldValuesHeaders({ });
    return await this.searchEmployeeFieldValuesWithOptions(request, headers, runtime);
  }

  /**
   * 获取多个表单实例ID
   * 
   * @param request - SearchFormDataIdListRequest
   * @param tmpHeader - SearchFormDataIdListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFormDataIdListResponse
   */
  async searchFormDataIdListWithOptions(request: $_model.SearchFormDataIdListRequest, tmpHeader: $_model.SearchFormDataIdListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SearchFormDataIdListResponse> {
    request.validate();
    let headers = new $_model.SearchFormDataIdListShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.modifiedFromTimeGMT)) {
      body["ModifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!$dara.isNull(request.modifiedToTimeGMT)) {
      body["ModifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!$dara.isNull(request.originatorId)) {
      body["OriginatorId"] = request.originatorId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchFieldJson)) {
      body["SearchFieldJson"] = request.searchFieldJson;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchFormDataIdList",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/searchFormDataIdList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchFormDataIdListResponse>(await this.callApi(params, req, runtime), new $_model.SearchFormDataIdListResponse({}));
  }

  /**
   * 获取多个表单实例ID
   * 
   * @param request - SearchFormDataIdListRequest
   * @returns SearchFormDataIdListResponse
   */
  async searchFormDataIdList(request: $_model.SearchFormDataIdListRequest): Promise<$_model.SearchFormDataIdListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SearchFormDataIdListHeaders({ });
    return await this.searchFormDataIdListWithOptions(request, headers, runtime);
  }

  /**
   * 通过高级查询条件获取表单实例数据（包括子表单组件数据）
   * 
   * @param request - SearchFormDataSecondGenerationRequest
   * @param tmpHeader - SearchFormDataSecondGenerationHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFormDataSecondGenerationResponse
   */
  async searchFormDataSecondGenerationWithOptions(request: $_model.SearchFormDataSecondGenerationRequest, tmpHeader: $_model.SearchFormDataSecondGenerationHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SearchFormDataSecondGenerationResponse> {
    request.validate();
    let headers = new $_model.SearchFormDataSecondGenerationShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.modifiedFromTimeGMT)) {
      body["ModifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!$dara.isNull(request.modifiedToTimeGMT)) {
      body["ModifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!$dara.isNull(request.orderConfigJson)) {
      body["OrderConfigJson"] = request.orderConfigJson;
    }

    if (!$dara.isNull(request.originatorId)) {
      body["OriginatorId"] = request.originatorId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchCondition)) {
      body["SearchCondition"] = request.searchCondition;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchFormDataSecondGeneration",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/searchFormDataSecondGeneration`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchFormDataSecondGenerationResponse>(await this.callApi(params, req, runtime), new $_model.SearchFormDataSecondGenerationResponse({}));
  }

  /**
   * 通过高级查询条件获取表单实例数据（包括子表单组件数据）
   * 
   * @param request - SearchFormDataSecondGenerationRequest
   * @returns SearchFormDataSecondGenerationResponse
   */
  async searchFormDataSecondGeneration(request: $_model.SearchFormDataSecondGenerationRequest): Promise<$_model.SearchFormDataSecondGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SearchFormDataSecondGenerationHeaders({ });
    return await this.searchFormDataSecondGenerationWithOptions(request, headers, runtime);
  }

  /**
   * 通过高级查询条件获取表单实例数据（不包括子表单组件数据）
   * 
   * @param request - SearchFormDataSecondGenerationNoTableFieldRequest
   * @param tmpHeader - SearchFormDataSecondGenerationNoTableFieldHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFormDataSecondGenerationNoTableFieldResponse
   */
  async searchFormDataSecondGenerationNoTableFieldWithOptions(request: $_model.SearchFormDataSecondGenerationNoTableFieldRequest, tmpHeader: $_model.SearchFormDataSecondGenerationNoTableFieldHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SearchFormDataSecondGenerationNoTableFieldResponse> {
    request.validate();
    let headers = new $_model.SearchFormDataSecondGenerationNoTableFieldShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.modifiedFromTimeGMT)) {
      body["ModifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!$dara.isNull(request.modifiedToTimeGMT)) {
      body["ModifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!$dara.isNull(request.orderConfigJson)) {
      body["OrderConfigJson"] = request.orderConfigJson;
    }

    if (!$dara.isNull(request.originatorId)) {
      body["OriginatorId"] = request.originatorId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchCondition)) {
      body["SearchCondition"] = request.searchCondition;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchFormDataSecondGenerationNoTableField",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/searchFormDataSecondGenerationNoTableField`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchFormDataSecondGenerationNoTableFieldResponse>(await this.callApi(params, req, runtime), new $_model.SearchFormDataSecondGenerationNoTableFieldResponse({}));
  }

  /**
   * 通过高级查询条件获取表单实例数据（不包括子表单组件数据）
   * 
   * @param request - SearchFormDataSecondGenerationNoTableFieldRequest
   * @returns SearchFormDataSecondGenerationNoTableFieldResponse
   */
  async searchFormDataSecondGenerationNoTableField(request: $_model.SearchFormDataSecondGenerationNoTableFieldRequest): Promise<$_model.SearchFormDataSecondGenerationNoTableFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SearchFormDataSecondGenerationNoTableFieldHeaders({ });
    return await this.searchFormDataSecondGenerationNoTableFieldWithOptions(request, headers, runtime);
  }

  /**
   * 查询表单实例数据
   * 
   * @param request - SearchFormDatasRequest
   * @param tmpHeader - SearchFormDatasHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFormDatasResponse
   */
  async searchFormDatasWithOptions(request: $_model.SearchFormDatasRequest, tmpHeader: $_model.SearchFormDatasHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SearchFormDatasResponse> {
    request.validate();
    let headers = new $_model.SearchFormDatasShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.createFromTimeGMT)) {
      body["CreateFromTimeGMT"] = request.createFromTimeGMT;
    }

    if (!$dara.isNull(request.createToTimeGMT)) {
      body["CreateToTimeGMT"] = request.createToTimeGMT;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dynamicOrder)) {
      body["DynamicOrder"] = request.dynamicOrder;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.modifiedFromTimeGMT)) {
      body["ModifiedFromTimeGMT"] = request.modifiedFromTimeGMT;
    }

    if (!$dara.isNull(request.modifiedToTimeGMT)) {
      body["ModifiedToTimeGMT"] = request.modifiedToTimeGMT;
    }

    if (!$dara.isNull(request.originatorId)) {
      body["OriginatorId"] = request.originatorId;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchFieldJson)) {
      body["SearchFieldJson"] = request.searchFieldJson;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchFormDatas",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/searchFormDatas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchFormDatasResponse>(await this.callApi(params, req, runtime), new $_model.SearchFormDatasResponse({}));
  }

  /**
   * 查询表单实例数据
   * 
   * @param request - SearchFormDatasRequest
   * @returns SearchFormDatasResponse
   */
  async searchFormDatas(request: $_model.SearchFormDatasRequest): Promise<$_model.SearchFormDatasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SearchFormDatasHeaders({ });
    return await this.searchFormDatasWithOptions(request, headers, runtime);
  }

  /**
   * 根据关键词搜索企业内部群
   * 
   * @param request - SearchInnerGroupsRequest
   * @param tmpHeader - SearchInnerGroupsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchInnerGroupsResponse
   */
  async searchInnerGroupsWithOptions(request: $_model.SearchInnerGroupsRequest, tmpHeader: $_model.SearchInnerGroupsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SearchInnerGroupsResponse> {
    request.validate();
    let headers = new $_model.SearchInnerGroupsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchInnerGroups",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/im/searchInnerGroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchInnerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.SearchInnerGroupsResponse({}));
  }

  /**
   * 根据关键词搜索企业内部群
   * 
   * @param request - SearchInnerGroupsRequest
   * @returns SearchInnerGroupsResponse
   */
  async searchInnerGroups(request: $_model.SearchInnerGroupsRequest): Promise<$_model.SearchInnerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SearchInnerGroupsHeaders({ });
    return await this.searchInnerGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 发送钉钉Banner通知
   * 
   * @param tmpReq - SendBannerRequest
   * @param tmpHeader - SendBannerHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendBannerResponse
   */
  async sendBannerWithOptions(tmpReq: $_model.SendBannerRequest, tmpHeader: $_model.SendBannerHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SendBannerResponse> {
    tmpReq.validate();
    let request = new $_model.SendBannerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.SendBannerShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentShrink)) {
      body["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendBanner",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/watt/sendBanner`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendBannerResponse>(await this.callApi(params, req, runtime), new $_model.SendBannerResponse({}));
  }

  /**
   * 发送钉钉Banner通知
   * 
   * @param request - SendBannerRequest
   * @returns SendBannerResponse
   */
  async sendBanner(request: $_model.SendBannerRequest): Promise<$_model.SendBannerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SendBannerHeaders({ });
    return await this.sendBannerWithOptions(request, headers, runtime);
  }

  /**
   * 发送钉钉封屏弹窗
   * 
   * @param tmpReq - SendPopupRequest
   * @param tmpHeader - SendPopupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendPopupResponse
   */
  async sendPopupWithOptions(tmpReq: $_model.SendPopupRequest, tmpHeader: $_model.SendPopupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SendPopupResponse> {
    tmpReq.validate();
    let request = new $_model.SendPopupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.SendPopupShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentShrink)) {
      body["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendPopup",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/watt/sendPopup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendPopupResponse>(await this.callApi(params, req, runtime), new $_model.SendPopupResponse({}));
  }

  /**
   * 发送钉钉封屏弹窗
   * 
   * @param request - SendPopupRequest
   * @returns SendPopupResponse
   */
  async sendPopup(request: $_model.SendPopupRequest): Promise<$_model.SendPopupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SendPopupHeaders({ });
    return await this.sendPopupWithOptions(request, headers, runtime);
  }

  /**
   * 发送钉钉搜索底纹
   * 
   * @param tmpReq - SendSearchShadeRequest
   * @param tmpHeader - SendSearchShadeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSearchShadeResponse
   */
  async sendSearchShadeWithOptions(tmpReq: $_model.SendSearchShadeRequest, tmpHeader: $_model.SendSearchShadeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SendSearchShadeResponse> {
    tmpReq.validate();
    let request = new $_model.SendSearchShadeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.SendSearchShadeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentShrink)) {
      body["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendSearchShade",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/watt/sendSearchShade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendSearchShadeResponse>(await this.callApi(params, req, runtime), new $_model.SendSearchShadeResponse({}));
  }

  /**
   * 发送钉钉搜索底纹
   * 
   * @param request - SendSearchShadeRequest
   * @returns SendSearchShadeResponse
   */
  async sendSearchShade(request: $_model.SendSearchShadeRequest): Promise<$_model.SendSearchShadeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SendSearchShadeHeaders({ });
    return await this.sendSearchShadeWithOptions(request, headers, runtime);
  }

  /**
   * 指定列隐藏
   * 
   * @param tmpReq - SetColumnsVisibilityRequest
   * @param tmpHeader - SetColumnsVisibilityHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetColumnsVisibilityResponse
   */
  async setColumnsVisibilityWithOptions(tmpReq: $_model.SetColumnsVisibilityRequest, tmpHeader: $_model.SetColumnsVisibilityHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SetColumnsVisibilityResponse> {
    tmpReq.validate();
    let request = new $_model.SetColumnsVisibilityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.SetColumnsVisibilityShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.column)) {
      body["Column"] = request.column;
    }

    if (!$dara.isNull(request.columnCount)) {
      body["ColumnCount"] = request.columnCount;
    }

    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.visibility)) {
      body["Visibility"] = request.visibility;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetColumnsVisibility",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/setColumnsVisibility`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetColumnsVisibilityResponse>(await this.callApi(params, req, runtime), new $_model.SetColumnsVisibilityResponse({}));
  }

  /**
   * 指定列隐藏
   * 
   * @param request - SetColumnsVisibilityRequest
   * @returns SetColumnsVisibilityResponse
   */
  async setColumnsVisibility(request: $_model.SetColumnsVisibilityRequest): Promise<$_model.SetColumnsVisibilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SetColumnsVisibilityHeaders({ });
    return await this.setColumnsVisibilityWithOptions(request, headers, runtime);
  }

  /**
   * 设置联席主持人
   * 
   * @param tmpReq - SetConferenceHostsRequest
   * @param tmpHeader - SetConferenceHostsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetConferenceHostsResponse
   */
  async setConferenceHostsWithOptions(tmpReq: $_model.SetConferenceHostsRequest, tmpHeader: $_model.SetConferenceHostsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SetConferenceHostsResponse> {
    tmpReq.validate();
    let request = new $_model.SetConferenceHostsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.SetConferenceHostsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.userIds)) {
      request.userIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIds, "UserIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.userIdsShrink)) {
      body["UserIds"] = request.userIdsShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetConferenceHosts",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/setConferenceHosts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetConferenceHostsResponse>(await this.callApi(params, req, runtime), new $_model.SetConferenceHostsResponse({}));
  }

  /**
   * 设置联席主持人
   * 
   * @param request - SetConferenceHostsRequest
   * @returns SetConferenceHostsResponse
   */
  async setConferenceHosts(request: $_model.SetConferenceHostsRequest): Promise<$_model.SetConferenceHostsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SetConferenceHostsHeaders({ });
    return await this.setConferenceHostsWithOptions(request, headers, runtime);
  }

  /**
   * 指定行隐藏
   * 
   * @param tmpReq - SetRowsVisibilityRequest
   * @param tmpHeader - SetRowsVisibilityHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRowsVisibilityResponse
   */
  async setRowsVisibilityWithOptions(tmpReq: $_model.SetRowsVisibilityRequest, tmpHeader: $_model.SetRowsVisibilityHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SetRowsVisibilityResponse> {
    tmpReq.validate();
    let request = new $_model.SetRowsVisibilityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.SetRowsVisibilityShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.row)) {
      body["Row"] = request.row;
    }

    if (!$dara.isNull(request.rowCount)) {
      body["RowCount"] = request.rowCount;
    }

    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.visibility)) {
      body["Visibility"] = request.visibility;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetRowsVisibility",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/setRowsVisibility`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetRowsVisibilityResponse>(await this.callApi(params, req, runtime), new $_model.SetRowsVisibilityResponse({}));
  }

  /**
   * 指定行隐藏
   * 
   * @param request - SetRowsVisibilityRequest
   * @returns SetRowsVisibilityResponse
   */
  async setRowsVisibility(request: $_model.SetRowsVisibilityRequest): Promise<$_model.SetRowsVisibilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SetRowsVisibilityHeaders({ });
    return await this.setRowsVisibilityWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户发送日志的概要信息
   * 
   * @param tmpReq - SimpleListReportRequest
   * @param tmpHeader - SimpleListReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SimpleListReportResponse
   */
  async simpleListReportWithOptions(tmpReq: $_model.SimpleListReportRequest, tmpHeader: $_model.SimpleListReportHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SimpleListReportResponse> {
    tmpReq.validate();
    let request = new $_model.SimpleListReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.SimpleListReportShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cursor)) {
      body["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SimpleListReport",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/simpleListReport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SimpleListReportResponse>(await this.callApi(params, req, runtime), new $_model.SimpleListReportResponse({}));
  }

  /**
   * 获取用户发送日志的概要信息
   * 
   * @param request - SimpleListReportRequest
   * @returns SimpleListReportResponse
   */
  async simpleListReport(request: $_model.SimpleListReportRequest): Promise<$_model.SimpleListReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SimpleListReportHeaders({ });
    return await this.simpleListReportWithOptions(request, headers, runtime);
  }

  /**
   * 开启视频会议云录制
   * 
   * @param tmpReq - StartCloudRecordRequest
   * @param tmpHeader - StartCloudRecordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCloudRecordResponse
   */
  async startCloudRecordWithOptions(tmpReq: $_model.StartCloudRecordRequest, tmpHeader: $_model.StartCloudRecordHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StartCloudRecordResponse> {
    tmpReq.validate();
    let request = new $_model.StartCloudRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.StartCloudRecordShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.smallWindowPosition)) {
      body["SmallWindowPosition"] = request.smallWindowPosition;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCloudRecord",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/startCloudRecord`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartCloudRecordResponse>(await this.callApi(params, req, runtime), new $_model.StartCloudRecordResponse({}));
  }

  /**
   * 开启视频会议云录制
   * 
   * @param request - StartCloudRecordRequest
   * @returns StartCloudRecordResponse
   */
  async startCloudRecord(request: $_model.StartCloudRecordRequest): Promise<$_model.StartCloudRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StartCloudRecordHeaders({ });
    return await this.startCloudRecordWithOptions(request, headers, runtime);
  }

  /**
   * 发起宜搭审批流程
   * 
   * @param request - StartInstanceRequest
   * @param tmpHeader - StartInstanceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: $_model.StartInstanceRequest, tmpHeader: $_model.StartInstanceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceResponse> {
    request.validate();
    let headers = new $_model.StartInstanceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.departmentId)) {
      body["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.formDataJson)) {
      body["FormDataJson"] = request.formDataJson;
    }

    if (!$dara.isNull(request.formUuid)) {
      body["FormUuid"] = request.formUuid;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.processCode)) {
      body["ProcessCode"] = request.processCode;
    }

    if (!$dara.isNull(request.processData)) {
      body["ProcessData"] = request.processData;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstance",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/startInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceResponse({}));
  }

  /**
   * 发起宜搭审批流程
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: $_model.StartInstanceRequest): Promise<$_model.StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StartInstanceHeaders({ });
    return await this.startInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 开启闪记
   * 
   * @param tmpReq - StartMinutesRequest
   * @param tmpHeader - StartMinutesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMinutesResponse
   */
  async startMinutesWithOptions(tmpReq: $_model.StartMinutesRequest, tmpHeader: $_model.StartMinutesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StartMinutesResponse> {
    tmpReq.validate();
    let request = new $_model.StartMinutesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.StartMinutesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      body["ownerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.recordAudio)) {
      body["recordAudio"] = request.recordAudio;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMinutes",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/startMinutes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartMinutesResponse>(await this.callApi(params, req, runtime), new $_model.StartMinutesResponse({}));
  }

  /**
   * 开启闪记
   * 
   * @param request - StartMinutesRequest
   * @returns StartMinutesResponse
   */
  async startMinutes(request: $_model.StartMinutesRequest): Promise<$_model.StartMinutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StartMinutesHeaders({ });
    return await this.startMinutesWithOptions(request, headers, runtime);
  }

  /**
   * 获取日志相关人员列表
   * 
   * @param tmpReq - StatisticsListByTypeReportRequest
   * @param tmpHeader - StatisticsListByTypeReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StatisticsListByTypeReportResponse
   */
  async statisticsListByTypeReportWithOptions(tmpReq: $_model.StatisticsListByTypeReportRequest, tmpHeader: $_model.StatisticsListByTypeReportHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StatisticsListByTypeReportResponse> {
    tmpReq.validate();
    let request = new $_model.StatisticsListByTypeReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.StatisticsListByTypeReportShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.offset)) {
      body["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.reportId)) {
      body["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StatisticsListByTypeReport",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/statisticsListByTypeReport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StatisticsListByTypeReportResponse>(await this.callApi(params, req, runtime), new $_model.StatisticsListByTypeReportResponse({}));
  }

  /**
   * 获取日志相关人员列表
   * 
   * @param request - StatisticsListByTypeReportRequest
   * @returns StatisticsListByTypeReportResponse
   */
  async statisticsListByTypeReport(request: $_model.StatisticsListByTypeReportRequest): Promise<$_model.StatisticsListByTypeReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StatisticsListByTypeReportHeaders({ });
    return await this.statisticsListByTypeReportWithOptions(request, headers, runtime);
  }

  /**
   * 获取日志统计数据
   * 
   * @param tmpReq - StatisticsReportRequest
   * @param tmpHeader - StatisticsReportHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StatisticsReportResponse
   */
  async statisticsReportWithOptions(tmpReq: $_model.StatisticsReportRequest, tmpHeader: $_model.StatisticsReportHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StatisticsReportResponse> {
    tmpReq.validate();
    let request = new $_model.StatisticsReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.StatisticsReportShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportId)) {
      body["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StatisticsReport",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/log/statisticsReport`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StatisticsReportResponse>(await this.callApi(params, req, runtime), new $_model.StatisticsReportResponse({}));
  }

  /**
   * 获取日志统计数据
   * 
   * @param request - StatisticsReportRequest
   * @returns StatisticsReportResponse
   */
  async statisticsReport(request: $_model.StatisticsReportRequest): Promise<$_model.StatisticsReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StatisticsReportHeaders({ });
    return await this.statisticsReportWithOptions(request, headers, runtime);
  }

  /**
   * 停止视频会议云录制
   * 
   * @param tmpReq - StopCloudRecordRequest
   * @param tmpHeader - StopCloudRecordHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCloudRecordResponse
   */
  async stopCloudRecordWithOptions(tmpReq: $_model.StopCloudRecordRequest, tmpHeader: $_model.StopCloudRecordHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StopCloudRecordResponse> {
    tmpReq.validate();
    let request = new $_model.StopCloudRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.StopCloudRecordShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCloudRecord",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/stopCloudRecord`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopCloudRecordResponse>(await this.callApi(params, req, runtime), new $_model.StopCloudRecordResponse({}));
  }

  /**
   * 停止视频会议云录制
   * 
   * @param request - StopCloudRecordRequest
   * @returns StopCloudRecordResponse
   */
  async stopCloudRecord(request: $_model.StopCloudRecordRequest): Promise<$_model.StopCloudRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StopCloudRecordHeaders({ });
    return await this.stopCloudRecordWithOptions(request, headers, runtime);
  }

  /**
   * 暂停闪记
   * 
   * @param tmpReq - StopMinutesRequest
   * @param tmpHeader - StopMinutesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMinutesResponse
   */
  async stopMinutesWithOptions(tmpReq: $_model.StopMinutesRequest, tmpHeader: $_model.StopMinutesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StopMinutesResponse> {
    tmpReq.validate();
    let request = new $_model.StopMinutesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.StopMinutesShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopMinutes",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/stopMinutes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopMinutesResponse>(await this.callApi(params, req, runtime), new $_model.StopMinutesResponse({}));
  }

  /**
   * 暂停闪记
   * 
   * @param request - StopMinutesRequest
   * @returns StopMinutesResponse
   */
  async stopMinutes(request: $_model.StopMinutesRequest): Promise<$_model.StopMinutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StopMinutesHeaders({ });
    return await this.stopMinutesWithOptions(request, headers, runtime);
  }

  /**
   * 订阅公共日历
   * 
   * @param request - SubscribeCalendarRequest
   * @param tmpHeader - SubscribeCalendarHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubscribeCalendarResponse
   */
  async subscribeCalendarWithOptions(request: $_model.SubscribeCalendarRequest, tmpHeader: $_model.SubscribeCalendarHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SubscribeCalendarResponse> {
    request.validate();
    let headers = new $_model.SubscribeCalendarShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubscribeCalendar",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/subscribeCalendar`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubscribeCalendarResponse>(await this.callApi(params, req, runtime), new $_model.SubscribeCalendarResponse({}));
  }

  /**
   * 订阅公共日历
   * 
   * @param request - SubscribeCalendarRequest
   * @returns SubscribeCalendarResponse
   */
  async subscribeCalendar(request: $_model.SubscribeCalendarRequest): Promise<$_model.SubscribeCalendarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SubscribeCalendarHeaders({ });
    return await this.subscribeCalendarWithOptions(request, headers, runtime);
  }

  /**
   * 订阅文件变更事件
   * 
   * @param tmpReq - SubscribeEventRequest
   * @param tmpHeader - SubscribeEventHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubscribeEventResponse
   */
  async subscribeEventWithOptions(tmpReq: $_model.SubscribeEventRequest, tmpHeader: $_model.SubscribeEventHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SubscribeEventResponse> {
    tmpReq.validate();
    let request = new $_model.SubscribeEventShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.SubscribeEventShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scope)) {
      body["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.scopeId)) {
      body["ScopeId"] = request.scopeId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubscribeEvent",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/subscribeEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubscribeEventResponse>(await this.callApi(params, req, runtime), new $_model.SubscribeEventResponse({}));
  }

  /**
   * 订阅文件变更事件
   * 
   * @param request - SubscribeEventRequest
   * @returns SubscribeEventResponse
   */
  async subscribeEvent(request: $_model.SubscribeEventRequest): Promise<$_model.SubscribeEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SubscribeEventHeaders({ });
    return await this.subscribeEventWithOptions(request, headers, runtime);
  }

  /**
   * @param tmpReq - SwitchMainOrgRequest
   * @param tmpHeader - SwitchMainOrgHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchMainOrgResponse
   */
  async switchMainOrgWithOptions(tmpReq: $_model.SwitchMainOrgRequest, tmpHeader: $_model.SwitchMainOrgHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchMainOrgResponse> {
    tmpReq.validate();
    let request = new $_model.SwitchMainOrgShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.SwitchMainOrgShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.targetOrgId)) {
      body["TargetOrgId"] = request.targetOrgId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchMainOrg",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/user/switchMainOrg`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchMainOrgResponse>(await this.callApi(params, req, runtime), new $_model.SwitchMainOrgResponse({}));
  }

  /**
   * @param request - SwitchMainOrgRequest
   * @returns SwitchMainOrgResponse
   */
  async switchMainOrg(request: $_model.SwitchMainOrgRequest): Promise<$_model.SwitchMainOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SwitchMainOrgHeaders({ });
    return await this.switchMainOrgWithOptions(request, headers, runtime);
  }

  /**
   * 同步钉钉账号类型
   * 
   * @param tmpReq - SyncDingTypeRequest
   * @param tmpHeader - SyncDingTypeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDingTypeResponse
   */
  async syncDingTypeWithOptions(tmpReq: $_model.SyncDingTypeRequest, tmpHeader: $_model.SyncDingTypeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SyncDingTypeResponse> {
    tmpReq.validate();
    let request = new $_model.SyncDingTypeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.SyncDingTypeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dingType)) {
      body["DingType"] = request.dingType;
    }

    if (!$dara.isNull(request.isDimission)) {
      body["IsDimission"] = request.isDimission;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workNo)) {
      body["WorkNo"] = request.workNo;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncDingType",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/indepding/syncDingType`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncDingTypeResponse>(await this.callApi(params, req, runtime), new $_model.SyncDingTypeResponse({}));
  }

  /**
   * 同步钉钉账号类型
   * 
   * @param request - SyncDingTypeRequest
   * @returns SyncDingTypeResponse
   */
  async syncDingType(request: $_model.SyncDingTypeRequest): Promise<$_model.SyncDingTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SyncDingTypeHeaders({ });
    return await this.syncDingTypeWithOptions(request, headers, runtime);
  }

  /**
   * 终止流程实例
   * 
   * @param request - TerminateInstanceRequest
   * @param tmpHeader - TerminateInstanceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateInstanceResponse
   */
  async terminateInstanceWithOptions(request: $_model.TerminateInstanceRequest, tmpHeader: $_model.TerminateInstanceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateInstanceResponse> {
    request.validate();
    let headers = new $_model.TerminateInstanceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.processInstanceId)) {
      body["ProcessInstanceId"] = request.processInstanceId;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateInstance",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/terminateInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.TerminateInstanceResponse({}));
  }

  /**
   * 终止流程实例
   * 
   * @param request - TerminateInstanceRequest
   * @returns TerminateInstanceResponse
   */
  async terminateInstance(request: $_model.TerminateInstanceRequest): Promise<$_model.TerminateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TerminateInstanceHeaders({ });
    return await this.terminateInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 转交工单
   * 
   * @param tmpReq - TransferTicketRequest
   * @param tmpHeader - TransferTicketHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferTicketResponse
   */
  async transferTicketWithOptions(tmpReq: $_model.TransferTicketRequest, tmpHeader: $_model.TransferTicketHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TransferTicketResponse> {
    tmpReq.validate();
    let request = new $_model.TransferTicketShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.TransferTicketShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.notify)) {
      request.notifyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notify, "Notify", "json");
    }

    if (!$dara.isNull(tmpReq.processorUserIds)) {
      request.processorUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.processorUserIds, "ProcessorUserIds", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.ticketMemo)) {
      request.ticketMemoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ticketMemo, "TicketMemo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.notifyShrink)) {
      body["Notify"] = request.notifyShrink;
    }

    if (!$dara.isNull(request.openTeamId)) {
      body["OpenTeamId"] = request.openTeamId;
    }

    if (!$dara.isNull(request.openTicketId)) {
      body["OpenTicketId"] = request.openTicketId;
    }

    if (!$dara.isNull(request.processorUserIdsShrink)) {
      body["ProcessorUserIds"] = request.processorUserIdsShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.ticketMemoShrink)) {
      body["TicketMemo"] = request.ticketMemoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferTicket",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ticket/transferTicket`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferTicketResponse>(await this.callApi(params, req, runtime), new $_model.TransferTicketResponse({}));
  }

  /**
   * 转交工单
   * 
   * @param request - TransferTicketRequest
   * @returns TransferTicketResponse
   */
  async transferTicket(request: $_model.TransferTicketRequest): Promise<$_model.TransferTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TransferTicketHeaders({ });
    return await this.transferTicketWithOptions(request, headers, runtime);
  }

  /**
   * 取消订阅公共日历
   * 
   * @param request - UnsubscribeCalendarRequest
   * @param tmpHeader - UnsubscribeCalendarHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnsubscribeCalendarResponse
   */
  async unsubscribeCalendarWithOptions(request: $_model.UnsubscribeCalendarRequest, tmpHeader: $_model.UnsubscribeCalendarHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UnsubscribeCalendarResponse> {
    request.validate();
    let headers = new $_model.UnsubscribeCalendarShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnsubscribeCalendar",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/unsubscribeCalendar`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnsubscribeCalendarResponse>(await this.callApi(params, req, runtime), new $_model.UnsubscribeCalendarResponse({}));
  }

  /**
   * 取消订阅公共日历
   * 
   * @param request - UnsubscribeCalendarRequest
   * @returns UnsubscribeCalendarResponse
   */
  async unsubscribeCalendar(request: $_model.UnsubscribeCalendarRequest): Promise<$_model.UnsubscribeCalendarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UnsubscribeCalendarHeaders({ });
    return await this.unsubscribeCalendarWithOptions(request, headers, runtime);
  }

  /**
   * 取消订阅文件变更事件
   * 
   * @param tmpReq - UnsubscribeEventRequest
   * @param tmpHeader - UnsubscribeEventHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnsubscribeEventResponse
   */
  async unsubscribeEventWithOptions(tmpReq: $_model.UnsubscribeEventRequest, tmpHeader: $_model.UnsubscribeEventHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UnsubscribeEventResponse> {
    tmpReq.validate();
    let request = new $_model.UnsubscribeEventShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UnsubscribeEventShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scope)) {
      body["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.scopeId)) {
      body["ScopeId"] = request.scopeId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnsubscribeEvent",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/unsubscribeEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnsubscribeEventResponse>(await this.callApi(params, req, runtime), new $_model.UnsubscribeEventResponse({}));
  }

  /**
   * 取消订阅文件变更事件
   * 
   * @param request - UnsubscribeEventRequest
   * @returns UnsubscribeEventResponse
   */
  async unsubscribeEvent(request: $_model.UnsubscribeEventRequest): Promise<$_model.UnsubscribeEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UnsubscribeEventHeaders({ });
    return await this.unsubscribeEventWithOptions(request, headers, runtime);
  }

  /**
   * @param tmpReq - UpdateAlidingAssistantRequest
   * @param tmpHeader - UpdateAlidingAssistantHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlidingAssistantResponse
   */
  async updateAlidingAssistantWithOptions(tmpReq: $_model.UpdateAlidingAssistantRequest, tmpHeader: $_model.UpdateAlidingAssistantHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlidingAssistantResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAlidingAssistantShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateAlidingAssistantShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "Ext", "json");
    }

    if (!$dara.isNull(tmpReq.feature)) {
      request.featureShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.feature, "Feature", "json");
    }

    if (!$dara.isNull(tmpReq.recommendPrompts)) {
      request.recommendPromptsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recommendPrompts, "RecommendPrompts", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assistantId)) {
      body["AssistantId"] = request.assistantId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.extShrink)) {
      body["Ext"] = request.extShrink;
    }

    if (!$dara.isNull(request.fallbackContent)) {
      body["FallbackContent"] = request.fallbackContent;
    }

    if (!$dara.isNull(request.featureShrink)) {
      body["Feature"] = request.featureShrink;
    }

    if (!$dara.isNull(request.icon)) {
      body["Icon"] = request.icon;
    }

    if (!$dara.isNull(request.instructions)) {
      body["Instructions"] = request.instructions;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.recommendPromptsShrink)) {
      body["RecommendPrompts"] = request.recommendPromptsShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.welcomeContent)) {
      body["WelcomeContent"] = request.welcomeContent;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlidingAssistant",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/aiagent/updateAlidingAssistant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlidingAssistantResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlidingAssistantResponse({}));
  }

  /**
   * @param request - UpdateAlidingAssistantRequest
   * @returns UpdateAlidingAssistantResponse
   */
  async updateAlidingAssistant(request: $_model.UpdateAlidingAssistantRequest): Promise<$_model.UpdateAlidingAssistantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateAlidingAssistantHeaders({ });
    return await this.updateAlidingAssistantWithOptions(request, headers, runtime);
  }

  /**
   * @param tmpReq - UpdateConvExtensionRequest
   * @param tmpHeader - UpdateConvExtensionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConvExtensionResponse
   */
  async updateConvExtensionWithOptions(tmpReq: $_model.UpdateConvExtensionRequest, tmpHeader: $_model.UpdateConvExtensionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConvExtensionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateConvExtensionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateConvExtensionShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.staffIdList)) {
      request.staffIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.staffIdList, "StaffIdList", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mobileUrl)) {
      body["MobileUrl"] = request.mobileUrl;
    }

    if (!$dara.isNull(request.pcUrl)) {
      body["PcUrl"] = request.pcUrl;
    }

    if (!$dara.isNull(request.staffIdListShrink)) {
      body["StaffIdList"] = request.staffIdListShrink;
    }

    if (!$dara.isNull(request.systemUid)) {
      body["SystemUid"] = request.systemUid;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConvExtension",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/conversation/updateConvExtension`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConvExtensionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConvExtensionResponse({}));
  }

  /**
   * @param request - UpdateConvExtensionRequest
   * @returns UpdateConvExtensionResponse
   */
  async updateConvExtension(request: $_model.UpdateConvExtensionRequest): Promise<$_model.UpdateConvExtensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateConvExtensionHeaders({ });
    return await this.updateConvExtensionWithOptions(request, headers, runtime);
  }

  /**
   * 更新表单数据
   * 
   * @param request - UpdateFormDataRequest
   * @param tmpHeader - UpdateFormDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFormDataResponse
   */
  async updateFormDataWithOptions(request: $_model.UpdateFormDataRequest, tmpHeader: $_model.UpdateFormDataHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFormDataResponse> {
    request.validate();
    let headers = new $_model.UpdateFormDataShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.formInstanceId)) {
      body["FormInstanceId"] = request.formInstanceId;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.updateFormDataJson)) {
      body["UpdateFormDataJson"] = request.updateFormDataJson;
    }

    if (!$dara.isNull(request.useLatestVersion)) {
      body["UseLatestVersion"] = request.useLatestVersion;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFormData",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/updateFormData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFormDataResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFormDataResponse({}));
  }

  /**
   * 更新表单数据
   * 
   * @param request - UpdateFormDataRequest
   * @returns UpdateFormDataResponse
   */
  async updateFormData(request: $_model.UpdateFormDataRequest): Promise<$_model.UpdateFormDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateFormDataHeaders({ });
    return await this.updateFormDataWithOptions(request, headers, runtime);
  }

  /**
   * 更新流程实例
   * 
   * @param request - UpdateInstanceRequest
   * @param tmpHeader - UpdateInstanceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: $_model.UpdateInstanceRequest, tmpHeader: $_model.UpdateInstanceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let headers = new $_model.UpdateInstanceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.processInstanceId)) {
      body["ProcessInstanceId"] = request.processInstanceId;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    if (!$dara.isNull(request.updateFormDataJson)) {
      body["UpdateFormDataJson"] = request.updateFormDataJson;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/updateInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * 更新流程实例
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateInstanceHeaders({ });
    return await this.updateInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 修改直播属性信息
   * 
   * @param tmpReq - UpdateLiveRequest
   * @param tmpHeader - UpdateLiveHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLiveResponse
   */
  async updateLiveWithOptions(tmpReq: $_model.UpdateLiveRequest, tmpHeader: $_model.UpdateLiveHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLiveResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLiveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateLiveShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coverUrl)) {
      body["CoverUrl"] = request.coverUrl;
    }

    if (!$dara.isNull(request.introduction)) {
      body["Introduction"] = request.introduction;
    }

    if (!$dara.isNull(request.liveId)) {
      body["LiveId"] = request.liveId;
    }

    if (!$dara.isNull(request.preEndTime)) {
      body["PreEndTime"] = request.preEndTime;
    }

    if (!$dara.isNull(request.preStartTime)) {
      body["PreStartTime"] = request.preStartTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLive",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/updateLive`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLiveResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLiveResponse({}));
  }

  /**
   * 修改直播属性信息
   * 
   * @param request - UpdateLiveRequest
   * @returns UpdateLiveResponse
   */
  async updateLive(request: $_model.UpdateLiveRequest): Promise<$_model.UpdateLiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateLiveHeaders({ });
    return await this.updateLiveWithOptions(request, headers, runtime);
  }

  /**
   * 更新会议室信息
   * 
   * @param tmpReq - UpdateMeetingRoomRequest
   * @param tmpHeader - UpdateMeetingRoomHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMeetingRoomResponse
   */
  async updateMeetingRoomWithOptions(tmpReq: $_model.UpdateMeetingRoomRequest, tmpHeader: $_model.UpdateMeetingRoomHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMeetingRoomResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMeetingRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateMeetingRoomShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.reservationAuthority)) {
      request.reservationAuthorityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reservationAuthority, "ReservationAuthority", "json");
    }

    if (!$dara.isNull(tmpReq.roomLabelIds)) {
      request.roomLabelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomLabelIds, "RoomLabelIds", "json");
    }

    if (!$dara.isNull(tmpReq.roomLocation)) {
      request.roomLocationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roomLocation, "RoomLocation", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableCycleReservation)) {
      body["EnableCycleReservation"] = request.enableCycleReservation;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.isvRoomId)) {
      body["IsvRoomId"] = request.isvRoomId;
    }

    if (!$dara.isNull(request.reservationAuthorityShrink)) {
      body["ReservationAuthority"] = request.reservationAuthorityShrink;
    }

    if (!$dara.isNull(request.roomCapacity)) {
      body["RoomCapacity"] = request.roomCapacity;
    }

    if (!$dara.isNull(request.roomId)) {
      body["RoomId"] = request.roomId;
    }

    if (!$dara.isNull(request.roomLabelIdsShrink)) {
      body["RoomLabelIds"] = request.roomLabelIdsShrink;
    }

    if (!$dara.isNull(request.roomLocationShrink)) {
      body["RoomLocation"] = request.roomLocationShrink;
    }

    if (!$dara.isNull(request.roomName)) {
      body["RoomName"] = request.roomName;
    }

    if (!$dara.isNull(request.roomPicture)) {
      body["RoomPicture"] = request.roomPicture;
    }

    if (!$dara.isNull(request.roomStatus)) {
      body["RoomStatus"] = request.roomStatus;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMeetingRoom",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/updateMeetingRoom`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMeetingRoomResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMeetingRoomResponse({}));
  }

  /**
   * 更新会议室信息
   * 
   * @param request - UpdateMeetingRoomRequest
   * @returns UpdateMeetingRoomResponse
   */
  async updateMeetingRoom(request: $_model.UpdateMeetingRoomRequest): Promise<$_model.UpdateMeetingRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateMeetingRoomHeaders({ });
    return await this.updateMeetingRoomWithOptions(request, headers, runtime);
  }

  /**
   * 更新会议室分组信息
   * 
   * @param tmpReq - UpdateMeetingRoomGroupRequest
   * @param tmpHeader - UpdateMeetingRoomGroupHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMeetingRoomGroupResponse
   */
  async updateMeetingRoomGroupWithOptions(tmpReq: $_model.UpdateMeetingRoomGroupRequest, tmpHeader: $_model.UpdateMeetingRoomGroupHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMeetingRoomGroupResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMeetingRoomGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateMeetingRoomGroupShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMeetingRoomGroup",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/updateMeetingRoomGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMeetingRoomGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMeetingRoomGroupResponse({}));
  }

  /**
   * 更新会议室分组信息
   * 
   * @param request - UpdateMeetingRoomGroupRequest
   * @returns UpdateMeetingRoomGroupResponse
   */
  async updateMeetingRoomGroup(request: $_model.UpdateMeetingRoomGroupRequest): Promise<$_model.UpdateMeetingRoomGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateMeetingRoomGroupHeaders({ });
    return await this.updateMeetingRoomGroupWithOptions(request, headers, runtime);
  }

  /**
   * 更新数据表
   * 
   * @param tmpReq - UpdateMultiDimTableRequest
   * @param tmpHeader - UpdateMultiDimTableHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMultiDimTableResponse
   */
  async updateMultiDimTableWithOptions(tmpReq: $_model.UpdateMultiDimTableRequest, tmpHeader: $_model.UpdateMultiDimTableHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMultiDimTableResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMultiDimTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateMultiDimTableShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.sheetIdOrName)) {
      body["SheetIdOrName"] = request.sheetIdOrName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMultiDimTable",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/updateMultiDimTable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMultiDimTableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMultiDimTableResponse({}));
  }

  /**
   * 更新数据表
   * 
   * @param request - UpdateMultiDimTableRequest
   * @returns UpdateMultiDimTableResponse
   */
  async updateMultiDimTable(request: $_model.UpdateMultiDimTableRequest): Promise<$_model.UpdateMultiDimTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateMultiDimTableHeaders({ });
    return await this.updateMultiDimTableWithOptions(request, headers, runtime);
  }

  /**
   * 更新字段
   * 
   * @param tmpReq - UpdateMultiDimTableFieldRequest
   * @param tmpHeader - UpdateMultiDimTableFieldHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMultiDimTableFieldResponse
   */
  async updateMultiDimTableFieldWithOptions(tmpReq: $_model.UpdateMultiDimTableFieldRequest, tmpHeader: $_model.UpdateMultiDimTableFieldHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMultiDimTableFieldResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMultiDimTableFieldShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateMultiDimTableFieldShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.property)) {
      request.propertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.property, "Property", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.fieldIdOrName)) {
      body["FieldIdOrName"] = request.fieldIdOrName;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.propertyShrink)) {
      body["Property"] = request.propertyShrink;
    }

    if (!$dara.isNull(request.sheetIdOrName)) {
      body["SheetIdOrName"] = request.sheetIdOrName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMultiDimTableField",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/updateMultiDimTableField`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMultiDimTableFieldResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMultiDimTableFieldResponse({}));
  }

  /**
   * 更新字段
   * 
   * @param request - UpdateMultiDimTableFieldRequest
   * @returns UpdateMultiDimTableFieldResponse
   */
  async updateMultiDimTableField(request: $_model.UpdateMultiDimTableFieldRequest): Promise<$_model.UpdateMultiDimTableFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateMultiDimTableFieldHeaders({ });
    return await this.updateMultiDimTableFieldWithOptions(request, headers, runtime);
  }

  /**
   * 更新多行记录
   * 
   * @param tmpReq - UpdateMultiDimTableRecordsRequest
   * @param tmpHeader - UpdateMultiDimTableRecordsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMultiDimTableRecordsResponse
   */
  async updateMultiDimTableRecordsWithOptions(tmpReq: $_model.UpdateMultiDimTableRecordsRequest, tmpHeader: $_model.UpdateMultiDimTableRecordsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMultiDimTableRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMultiDimTableRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateMultiDimTableRecordsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.recordIds)) {
      request.recordIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordIds, "RecordIds", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseId)) {
      body["BaseId"] = request.baseId;
    }

    if (!$dara.isNull(request.recordIdsShrink)) {
      body["RecordIds"] = request.recordIdsShrink;
    }

    if (!$dara.isNull(request.sheetIdOrName)) {
      body["SheetIdOrName"] = request.sheetIdOrName;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMultiDimTableRecords",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/table/updateMultiDimTableRecords`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMultiDimTableRecordsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMultiDimTableRecordsResponse({}));
  }

  /**
   * 更新多行记录
   * 
   * @param request - UpdateMultiDimTableRecordsRequest
   * @returns UpdateMultiDimTableRecordsResponse
   */
  async updateMultiDimTableRecords(request: $_model.UpdateMultiDimTableRecordsRequest): Promise<$_model.UpdateMultiDimTableRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateMultiDimTableRecordsHeaders({ });
    return await this.updateMultiDimTableRecordsWithOptions(request, headers, runtime);
  }

  /**
   * 更新文件权限
   * 
   * @param tmpReq - UpdatePermissionRequest
   * @param tmpHeader - UpdatePermissionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePermissionResponse
   */
  async updatePermissionWithOptions(tmpReq: $_model.UpdatePermissionRequest, tmpHeader: $_model.UpdatePermissionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePermissionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdatePermissionShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!$dara.isNull(tmpReq.option)) {
      request.optionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.option, "Option", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dentryUuid)) {
      body["DentryUuid"] = request.dentryUuid;
    }

    if (!$dara.isNull(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!$dara.isNull(request.optionShrink)) {
      body["Option"] = request.optionShrink;
    }

    if (!$dara.isNull(request.roleId)) {
      body["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePermission",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/updatePermission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePermissionResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePermissionResponse({}));
  }

  /**
   * 更新文件权限
   * 
   * @param request - UpdatePermissionRequest
   * @returns UpdatePermissionResponse
   */
  async updatePermission(request: $_model.UpdatePermissionRequest): Promise<$_model.UpdatePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdatePermissionHeaders({ });
    return await this.updatePermissionWithOptions(request, headers, runtime);
  }

  /**
   * 更新单元格区域
   * 
   * @param tmpReq - UpdateRangeRequest
   * @param tmpHeader - UpdateRangeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRangeResponse
   */
  async updateRangeWithOptions(tmpReq: $_model.UpdateRangeRequest, tmpHeader: $_model.UpdateRangeHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRangeResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateRangeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateRangeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.backgroundColors)) {
      request.backgroundColorsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.backgroundColors, "BackgroundColors", "json");
    }

    if (!$dara.isNull(tmpReq.hyperlinks)) {
      request.hyperlinksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hyperlinks, "Hyperlinks", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.values)) {
      request.valuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.values, "Values", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backgroundColorsShrink)) {
      body["BackgroundColors"] = request.backgroundColorsShrink;
    }

    if (!$dara.isNull(request.hyperlinksShrink)) {
      body["Hyperlinks"] = request.hyperlinksShrink;
    }

    if (!$dara.isNull(request.numberFormat)) {
      body["NumberFormat"] = request.numberFormat;
    }

    if (!$dara.isNull(request.rangeAddress)) {
      body["RangeAddress"] = request.rangeAddress;
    }

    if (!$dara.isNull(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.valuesShrink)) {
      body["Values"] = request.valuesShrink;
    }

    if (!$dara.isNull(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRange",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/updateRange`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRangeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRangeResponse({}));
  }

  /**
   * 更新单元格区域
   * 
   * @param request - UpdateRangeRequest
   * @returns UpdateRangeResponse
   */
  async updateRange(request: $_model.UpdateRangeRequest): Promise<$_model.UpdateRangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateRangeHeaders({ });
    return await this.updateRangeWithOptions(request, headers, runtime);
  }

  /**
   * 更新预约会议设置
   * 
   * @param tmpReq - UpdateScheduleConfSettingsRequest
   * @param tmpHeader - UpdateScheduleConfSettingsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduleConfSettingsResponse
   */
  async updateScheduleConfSettingsWithOptions(tmpReq: $_model.UpdateScheduleConfSettingsRequest, tmpHeader: $_model.UpdateScheduleConfSettingsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScheduleConfSettingsResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateScheduleConfSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateScheduleConfSettingsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleConfSettingModel)) {
      request.scheduleConfSettingModelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleConfSettingModel, "ScheduleConfSettingModel", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scheduleConfSettingModelShrink)) {
      body["ScheduleConfSettingModel"] = request.scheduleConfSettingModelShrink;
    }

    if (!$dara.isNull(request.scheduleConferenceId)) {
      body["ScheduleConferenceId"] = request.scheduleConferenceId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScheduleConfSettings",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/updateScheduleConfSettings`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScheduleConfSettingsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScheduleConfSettingsResponse({}));
  }

  /**
   * 更新预约会议设置
   * 
   * @param request - UpdateScheduleConfSettingsRequest
   * @returns UpdateScheduleConfSettingsResponse
   */
  async updateScheduleConfSettings(request: $_model.UpdateScheduleConfSettingsRequest): Promise<$_model.UpdateScheduleConfSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateScheduleConfSettingsHeaders({ });
    return await this.updateScheduleConfSettingsWithOptions(request, headers, runtime);
  }

  /**
   * 更新预约会议
   * 
   * @param tmpReq - UpdateScheduleConferenceRequest
   * @param tmpHeader - UpdateScheduleConferenceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduleConferenceResponse
   */
  async updateScheduleConferenceWithOptions(tmpReq: $_model.UpdateScheduleConferenceRequest, tmpHeader: $_model.UpdateScheduleConferenceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScheduleConferenceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateScheduleConferenceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateScheduleConferenceShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.scheduleConferenceId)) {
      body["ScheduleConferenceId"] = request.scheduleConferenceId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScheduleConference",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/updateScheduleConference`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScheduleConferenceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScheduleConferenceResponse({}));
  }

  /**
   * 更新预约会议
   * 
   * @param request - UpdateScheduleConferenceRequest
   * @returns UpdateScheduleConferenceResponse
   */
  async updateScheduleConference(request: $_model.UpdateScheduleConferenceRequest): Promise<$_model.UpdateScheduleConferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateScheduleConferenceHeaders({ });
    return await this.updateScheduleConferenceWithOptions(request, headers, runtime);
  }

  /**
   * 更新状态
   * 
   * @param tmpReq - UpdateStatusRequest
   * @param tmpHeader - UpdateStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStatusResponse
   */
  async updateStatusWithOptions(tmpReq: $_model.UpdateStatusRequest, tmpHeader: $_model.UpdateStatusHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStatusResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateStatusShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.errorLines)) {
      request.errorLinesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.errorLines, "ErrorLines", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.errorLinesShrink)) {
      body["ErrorLines"] = request.errorLinesShrink;
    }

    if (!$dara.isNull(request.importSequence)) {
      body["ImportSequence"] = request.importSequence;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.systemToken)) {
      body["SystemToken"] = request.systemToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStatus",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/yida/updateStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStatusResponse({}));
  }

  /**
   * 更新状态
   * 
   * @param request - UpdateStatusRequest
   * @returns UpdateStatusResponse
   */
  async updateStatus(request: $_model.UpdateStatusRequest): Promise<$_model.UpdateStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateStatusHeaders({ });
    return await this.updateStatusWithOptions(request, headers, runtime);
  }

  /**
   * 更新订阅日历
   * 
   * @param tmpReq - UpdateSubscribedCalendarsRequest
   * @param tmpHeader - UpdateSubscribedCalendarsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubscribedCalendarsResponse
   */
  async updateSubscribedCalendarsWithOptions(tmpReq: $_model.UpdateSubscribedCalendarsRequest, tmpHeader: $_model.UpdateSubscribedCalendarsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSubscribedCalendarsResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSubscribedCalendarsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateSubscribedCalendarsShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.managers)) {
      request.managersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.managers, "Managers", "json");
    }

    if (!$dara.isNull(tmpReq.subscribeScope)) {
      request.subscribeScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subscribeScope, "SubscribeScope", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calendarId)) {
      body["CalendarId"] = request.calendarId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.managersShrink)) {
      body["Managers"] = request.managersShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.subscribeScopeShrink)) {
      body["SubscribeScope"] = request.subscribeScopeShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSubscribedCalendars",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/calendar/updateSubscribedCalendars`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSubscribedCalendarsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSubscribedCalendarsResponse({}));
  }

  /**
   * 更新订阅日历
   * 
   * @param request - UpdateSubscribedCalendarsRequest
   * @returns UpdateSubscribedCalendarsResponse
   */
  async updateSubscribedCalendars(request: $_model.UpdateSubscribedCalendarsRequest): Promise<$_model.UpdateSubscribedCalendarsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateSubscribedCalendarsHeaders({ });
    return await this.updateSubscribedCalendarsWithOptions(request, headers, runtime);
  }

  /**
   * 更新代办
   * 
   * @param tmpReq - UpdateTodoTaskRequest
   * @param tmpHeader - UpdateTodoTaskHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTodoTaskResponse
   */
  async updateTodoTaskWithOptions(tmpReq: $_model.UpdateTodoTaskRequest, tmpHeader: $_model.UpdateTodoTaskHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTodoTaskResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTodoTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateTodoTaskShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.executorIds)) {
      request.executorIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executorIds, "executorIds", "json");
    }

    if (!$dara.isNull(tmpReq.participantIds)) {
      request.participantIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.participantIds, "participantIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.done)) {
      body["done"] = request.done;
    }

    if (!$dara.isNull(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!$dara.isNull(request.executorIdsShrink)) {
      body["executorIds"] = request.executorIdsShrink;
    }

    if (!$dara.isNull(request.participantIdsShrink)) {
      body["participantIds"] = request.participantIdsShrink;
    }

    if (!$dara.isNull(request.subject)) {
      body["subject"] = request.subject;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTodoTask",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/updateTodoTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTodoTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTodoTaskResponse({}));
  }

  /**
   * 更新代办
   * 
   * @param request - UpdateTodoTaskRequest
   * @returns UpdateTodoTaskResponse
   */
  async updateTodoTask(request: $_model.UpdateTodoTaskRequest): Promise<$_model.UpdateTodoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateTodoTaskHeaders({ });
    return await this.updateTodoTaskWithOptions(request, headers, runtime);
  }

  /**
   * 更新代办执行者状态
   * 
   * @param tmpReq - UpdateTodoTaskExecutorStatusRequest
   * @param tmpHeader - UpdateTodoTaskExecutorStatusHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTodoTaskExecutorStatusResponse
   */
  async updateTodoTaskExecutorStatusWithOptions(tmpReq: $_model.UpdateTodoTaskExecutorStatusRequest, tmpHeader: $_model.UpdateTodoTaskExecutorStatusHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTodoTaskExecutorStatusResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTodoTaskExecutorStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateTodoTaskExecutorStatusShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    if (!$dara.isNull(tmpReq.executorStatusList)) {
      request.executorStatusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executorStatusList, "executorStatusList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.executorStatusListShrink)) {
      body["executorStatusList"] = request.executorStatusListShrink;
    }

    if (!$dara.isNull(request.operatorId)) {
      body["operatorId"] = request.operatorId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTodoTaskExecutorStatus",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/task/updateTodoTaskExecutorStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTodoTaskExecutorStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTodoTaskExecutorStatusResponse({}));
  }

  /**
   * 更新代办执行者状态
   * 
   * @param request - UpdateTodoTaskExecutorStatusRequest
   * @returns UpdateTodoTaskExecutorStatusResponse
   */
  async updateTodoTaskExecutorStatus(request: $_model.UpdateTodoTaskExecutorStatusRequest): Promise<$_model.UpdateTodoTaskExecutorStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateTodoTaskExecutorStatusHeaders({ });
    return await this.updateTodoTaskExecutorStatusWithOptions(request, headers, runtime);
  }

  /**
   * 更新企业账号用户头像
   * 
   * @param request - UpdateUserAvatarRequest
   * @param tmpHeader - UpdateUserAvatarHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserAvatarResponse
   */
  async updateUserAvatarWithOptions(request: $_model.UpdateUserAvatarRequest, tmpHeader: $_model.UpdateUserAvatarHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserAvatarResponse> {
    request.validate();
    let headers = new $_model.UpdateUserAvatarShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatarMediaId)) {
      body["AvatarMediaId"] = request.avatarMediaId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserAvatar",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/contact/updateUserAvatar`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserAvatarResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserAvatarResponse({}));
  }

  /**
   * 更新企业账号用户头像
   * 
   * @param request - UpdateUserAvatarRequest
   * @returns UpdateUserAvatarResponse
   */
  async updateUserAvatar(request: $_model.UpdateUserAvatarRequest): Promise<$_model.UpdateUserAvatarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateUserAvatarHeaders({ });
    return await this.updateUserAvatarWithOptions(request, headers, runtime);
  }

  /**
   * 设置正在进行中的视频会议属性
   * 
   * @param tmpReq - UpdateVideoConferenceSettingRequest
   * @param tmpHeader - UpdateVideoConferenceSettingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVideoConferenceSettingResponse
   */
  async updateVideoConferenceSettingWithOptions(tmpReq: $_model.UpdateVideoConferenceSettingRequest, tmpHeader: $_model.UpdateVideoConferenceSettingHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVideoConferenceSettingResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateVideoConferenceSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateVideoConferenceSettingShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowUnmuteSelf)) {
      body["AllowUnmuteSelf"] = request.allowUnmuteSelf;
    }

    if (!$dara.isNull(request.autoTransferHost)) {
      body["AutoTransferHost"] = request.autoTransferHost;
    }

    if (!$dara.isNull(request.forbiddenShareScreen)) {
      body["ForbiddenShareScreen"] = request.forbiddenShareScreen;
    }

    if (!$dara.isNull(request.lockConference)) {
      body["LockConference"] = request.lockConference;
    }

    if (!$dara.isNull(request.muteAll)) {
      body["MuteAll"] = request.muteAll;
    }

    if (!$dara.isNull(request.onlyInternalEmployeesJoin)) {
      body["OnlyInternalEmployeesJoin"] = request.onlyInternalEmployeesJoin;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.conferenceId)) {
      body["conferenceId"] = request.conferenceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVideoConferenceSetting",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/ysp/updateVideoConferenceSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVideoConferenceSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVideoConferenceSettingResponse({}));
  }

  /**
   * 设置正在进行中的视频会议属性
   * 
   * @param request - UpdateVideoConferenceSettingRequest
   * @returns UpdateVideoConferenceSettingResponse
   */
  async updateVideoConferenceSetting(request: $_model.UpdateVideoConferenceSettingRequest): Promise<$_model.UpdateVideoConferenceSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateVideoConferenceSettingHeaders({ });
    return await this.updateVideoConferenceSettingWithOptions(request, headers, runtime);
  }

  /**
   * 修改知识库文档成员权限
   * 
   * @param tmpReq - UpdateWorkspaceDocMembersRequest
   * @param tmpHeader - UpdateWorkspaceDocMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceDocMembersResponse
   */
  async updateWorkspaceDocMembersWithOptions(tmpReq: $_model.UpdateWorkspaceDocMembersRequest, tmpHeader: $_model.UpdateWorkspaceDocMembersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceDocMembersResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateWorkspaceDocMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateWorkspaceDocMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspaceDocMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/updateWorkspaceDocMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceDocMembersResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceDocMembersResponse({}));
  }

  /**
   * 修改知识库文档成员权限
   * 
   * @param request - UpdateWorkspaceDocMembersRequest
   * @returns UpdateWorkspaceDocMembersResponse
   */
  async updateWorkspaceDocMembers(request: $_model.UpdateWorkspaceDocMembersRequest): Promise<$_model.UpdateWorkspaceDocMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateWorkspaceDocMembersHeaders({ });
    return await this.updateWorkspaceDocMembersWithOptions(request, headers, runtime);
  }

  /**
   * 更新知识库成员权限
   * 
   * @param tmpReq - UpdateWorkspaceMembersRequest
   * @param tmpHeader - UpdateWorkspaceMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceMembersResponse
   */
  async updateWorkspaceMembersWithOptions(tmpReq: $_model.UpdateWorkspaceMembersRequest, tmpHeader: $_model.UpdateWorkspaceMembersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceMembersResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateWorkspaceMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UpdateWorkspaceMembersShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "Members", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.membersShrink)) {
      body["Members"] = request.membersShrink;
    }

    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspaceMembers",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/updateWorkspaceMembers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceMembersResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceMembersResponse({}));
  }

  /**
   * 更新知识库成员权限
   * 
   * @param request - UpdateWorkspaceMembersRequest
   * @returns UpdateWorkspaceMembersResponse
   */
  async updateWorkspaceMembers(request: $_model.UpdateWorkspaceMembersRequest): Promise<$_model.UpdateWorkspaceMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateWorkspaceMembersHeaders({ });
    return await this.updateWorkspaceMembersWithOptions(request, headers, runtime);
  }

  /**
   * 上传媒体<br/>
   * 
   * @param tmpReq - UploadMediaRequest
   * @param tmpHeader - UploadMediaHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadMediaResponse
   */
  async uploadMediaWithOptions(tmpReq: $_model.UploadMediaRequest, tmpHeader: $_model.UploadMediaHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UploadMediaResponse> {
    tmpReq.validate();
    let request = new $_model.UploadMediaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.UploadMediaShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.mediaName)) {
      body["mediaName"] = request.mediaName;
    }

    if (!$dara.isNull(request.mediaType)) {
      body["mediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.orgId)) {
      body["orgId"] = request.orgId;
    }

    if (!$dara.isNull(request.url)) {
      body["url"] = request.url;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadMedia",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/documents/uploadMedia`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadMediaResponse>(await this.callApi(params, req, runtime), new $_model.UploadMediaResponse({}));
  }

  /**
   * 上传媒体<br/>
   * 
   * @param request - UploadMediaRequest
   * @returns UploadMediaResponse
   */
  async uploadMedia(request: $_model.UploadMediaRequest): Promise<$_model.UploadMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UploadMediaHeaders({ });
    return await this.uploadMediaWithOptions(request, headers, runtime);
  }

  /**
   * 穿戴勋章
   * 
   * @param tmpReq - WearOrgHonorRequest
   * @param tmpHeader - WearOrgHonorHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WearOrgHonorResponse
   */
  async wearOrgHonorWithOptions(tmpReq: $_model.WearOrgHonorRequest, tmpHeader: $_model.WearOrgHonorHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.WearOrgHonorResponse> {
    tmpReq.validate();
    let request = new $_model.WearOrgHonorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new $_model.WearOrgHonorShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!$dara.isNull(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!$dara.isNull(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!$dara.isNull(request.honorId)) {
      body["honorId"] = request.honorId;
    }

    if (!$dara.isNull(request.orgId)) {
      body["orgId"] = request.orgId;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    if (!$dara.isNull(request.wear)) {
      body["wear"] = request.wear;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = typeof headers.accountContextShrink === "string" ? headers.accountContextShrink : JSON.stringify(headers.accountContextShrink);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "WearOrgHonor",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/aliding/v1/honor/wearOrgHonor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WearOrgHonorResponse>(await this.callApi(params, req, runtime), new $_model.WearOrgHonorResponse({}));
  }

  /**
   * 穿戴勋章
   * 
   * @param request - WearOrgHonorRequest
   * @returns WearOrgHonorResponse
   */
  async wearOrgHonor(request: $_model.WearOrgHonorRequest): Promise<$_model.WearOrgHonorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.WearOrgHonorHeaders({ });
    return await this.wearOrgHonorWithOptions(request, headers, runtime);
  }

}
