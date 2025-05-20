// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pds';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "pds";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._disableHttp2 = true;
    this._endpointRule = "";
  }


  /**
   * Adds a member to a group.
   * 
   * @param request - AddGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGroupMemberResponse
   */
  async addGroupMemberWithOptions(request: $_model.AddGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddGroupMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.memberId)) {
      body["member_id"] = request.memberId;
    }

    if (!$dara.isNull(request.memberType)) {
      body["member_type"] = request.memberType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGroupMember",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/add_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGroupMemberResponse>(await this.execute(params, req, runtime), new $_model.AddGroupMemberResponse({}));
  }

  /**
   * Adds a member to a group.
   * 
   * @param request - AddGroupMemberRequest
   * @returns AddGroupMemberResponse
   */
  async addGroupMember(request: $_model.AddGroupMemberRequest): Promise<$_model.AddGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGroupMemberWithOptions(request, headers, runtime);
  }

  /**
   * 故事添加文件
   * 
   * @param request - AddStoryFilesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddStoryFilesResponse
   */
  async addStoryFilesWithOptions(request: $_model.AddStoryFilesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddStoryFilesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddStoryFiles",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/add_story_files`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddStoryFilesResponse>(await this.execute(params, req, runtime), new $_model.AddStoryFilesResponse({}));
  }

  /**
   * 故事添加文件
   * 
   * @param request - AddStoryFilesRequest
   * @returns AddStoryFilesResponse
   */
  async addStoryFiles(request: $_model.AddStoryFilesRequest): Promise<$_model.AddStoryFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addStoryFilesWithOptions(request, headers, runtime);
  }

  /**
   * Assigns a group administrator role to a user.
   * 
   * @remarks
   * You can call this operation to assign a group administrator role to a user.
   * 
   * @param request - AssignRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignRoleResponse
   */
  async assignRoleWithOptions(request: $_model.AssignRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AssignRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.manageResourceId)) {
      body["manage_resource_id"] = request.manageResourceId;
    }

    if (!$dara.isNull(request.manageResourceType)) {
      body["manage_resource_type"] = request.manageResourceType;
    }

    if (!$dara.isNull(request.roleId)) {
      body["role_id"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignRole",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/assign`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignRoleResponse>(await this.execute(params, req, runtime), new $_model.AssignRoleResponse({}));
  }

  /**
   * Assigns a group administrator role to a user.
   * 
   * @remarks
   * You can call this operation to assign a group administrator role to a user.
   * 
   * @param request - AssignRoleRequest
   * @returns AssignRoleResponse
   */
  async assignRole(request: $_model.AssignRoleRequest): Promise<$_model.AssignRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.assignRoleWithOptions(request, headers, runtime);
  }

  /**
   * Exports audit logs.
   * 
   * @remarks
   * Log audit is a value-added feature that is provided by Drive and Photo Service (PDS) Developer Edition. Before you call this operation, make sure that you learn about the [value-added billable items](https://www.alibabacloud.com/help/document_detail/425220.html).
   * 
   * @param request - AuditLogExportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuditLogExportResponse
   */
  async auditLogExportWithOptions(request: $_model.AuditLogExportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AuditLogExportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["file_name"] = request.fileName;
    }

    if (!$dara.isNull(request.language)) {
      body["language"] = request.language;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuditLogExport",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/audit_log/export`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuditLogExportResponse>(await this.execute(params, req, runtime), new $_model.AuditLogExportResponse({}));
  }

  /**
   * Exports audit logs.
   * 
   * @remarks
   * Log audit is a value-added feature that is provided by Drive and Photo Service (PDS) Developer Edition. Before you call this operation, make sure that you learn about the [value-added billable items](https://www.alibabacloud.com/help/document_detail/425220.html).
   * 
   * @param request - AuditLogExportRequest
   * @returns AuditLogExportResponse
   */
  async auditLogExport(request: $_model.AuditLogExportRequest): Promise<$_model.AuditLogExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.auditLogExportWithOptions(request, headers, runtime);
  }

  /**
   * Requests permissions by using OAuth 2.0.
   * 
   * @remarks
   * For more information, see "OAuth 2.0 For Web Server Applications" at [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/en/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications) in User Guide.
   * 
   * @param tmpReq - AuthorizeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeResponse
   */
  async authorizeWithOptions(tmpReq: $_model.AuthorizeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeResponse> {
    tmpReq.validate();
    let request = new $_model.AuthorizeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scope)) {
      request.scopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scope, "scope", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      query["client_id"] = request.clientId;
    }

    if (!$dara.isNull(request.hideConsent)) {
      query["hide_consent"] = request.hideConsent;
    }

    if (!$dara.isNull(request.loginType)) {
      query["login_type"] = request.loginType;
    }

    if (!$dara.isNull(request.redirectUri)) {
      query["redirect_uri"] = request.redirectUri;
    }

    if (!$dara.isNull(request.responseType)) {
      query["response_type"] = request.responseType;
    }

    if (!$dara.isNull(request.scopeShrink)) {
      query["scope"] = request.scopeShrink;
    }

    if (!$dara.isNull(request.state)) {
      query["state"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Authorize",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/oauth/authorize`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "binary",
    });
    return $dara.cast<$_model.AuthorizeResponse>(await this.execute(params, req, runtime), new $_model.AuthorizeResponse({}));
  }

  /**
   * Requests permissions by using OAuth 2.0.
   * 
   * @remarks
   * For more information, see "OAuth 2.0 For Web Server Applications" at [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/en/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications) in User Guide.
   * 
   * @param request - AuthorizeRequest
   * @returns AuthorizeResponse
   */
  async authorize(request: $_model.AuthorizeRequest): Promise<$_model.AuthorizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeWithOptions(request, headers, runtime);
  }

  /**
   * Calls multiple operations at a time to improve call efficiency.
   * 
   * @param request - BatchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchResponse
   */
  async batchWithOptions(request: $_model.BatchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requests)) {
      body["requests"] = request.requests;
    }

    if (!$dara.isNull(request.resource)) {
      body["resource"] = request.resource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Batch",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/batch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchResponse>(await this.execute(params, req, runtime), new $_model.BatchResponse({}));
  }

  /**
   * Calls multiple operations at a time to improve call efficiency.
   * 
   * @param request - BatchRequest
   * @returns BatchResponse
   */
  async batch(request: $_model.BatchRequest): Promise<$_model.BatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchWithOptions(request, headers, runtime);
  }

  /**
   * Cancels a role.
   * 
   * @remarks
   * You can cancel only the group administrator role.
   * 
   * @param request - CancelAssignRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAssignRoleResponse
   */
  async cancelAssignRoleWithOptions(request: $_model.CancelAssignRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAssignRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.manageResourceId)) {
      body["manage_resource_id"] = request.manageResourceId;
    }

    if (!$dara.isNull(request.manageResourceType)) {
      body["manage_resource_type"] = request.manageResourceType;
    }

    if (!$dara.isNull(request.roleId)) {
      body["role_id"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAssignRole",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/cancel_assign`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAssignRoleResponse>(await this.execute(params, req, runtime), new $_model.CancelAssignRoleResponse({}));
  }

  /**
   * Cancels a role.
   * 
   * @remarks
   * You can cancel only the group administrator role.
   * 
   * @param request - CancelAssignRoleRequest
   * @returns CancelAssignRoleResponse
   */
  async cancelAssignRole(request: $_model.CancelAssignRoleRequest): Promise<$_model.CancelAssignRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelAssignRoleWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a share link.
   * 
   * @param request - CancelShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelShareLinkResponse
   */
  async cancelShareLinkWithOptions(request: $_model.CancelShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelShareLinkResponse>(await this.execute(params, req, runtime), new $_model.CancelShareLinkResponse({}));
  }

  /**
   * Deletes a share link.
   * 
   * @param request - CancelShareLinkRequest
   * @returns CancelShareLinkResponse
   */
  async cancelShareLink(request: $_model.CancelShareLinkRequest): Promise<$_model.CancelShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * Empties the recycle bin.
   * 
   * @param request - ClearRecyclebinRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearRecyclebinResponse
   */
  async clearRecyclebinWithOptions(request: $_model.ClearRecyclebinRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ClearRecyclebinResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearRecyclebin",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/clear`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearRecyclebinResponse>(await this.execute(params, req, runtime), new $_model.ClearRecyclebinResponse({}));
  }

  /**
   * Empties the recycle bin.
   * 
   * @param request - ClearRecyclebinRequest
   * @returns ClearRecyclebinResponse
   */
  async clearRecyclebin(request: $_model.ClearRecyclebinRequest): Promise<$_model.ClearRecyclebinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.clearRecyclebinWithOptions(request, headers, runtime);
  }

  /**
   * Completes the upload of a file.
   * 
   * @param request - CompleteFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteFileResponse
   */
  async completeFileWithOptions(request: $_model.CompleteFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CompleteFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.crc64Hash)) {
      body["crc64_hash"] = request.crc64Hash;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.uploadId)) {
      body["upload_id"] = request.uploadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompleteFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/complete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompleteFileResponse>(await this.execute(params, req, runtime), new $_model.CompleteFileResponse({}));
  }

  /**
   * Completes the upload of a file.
   * 
   * @param request - CompleteFileRequest
   * @returns CompleteFileResponse
   */
  async completeFile(request: $_model.CompleteFileRequest): Promise<$_model.CompleteFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.completeFileWithOptions(request, headers, runtime);
  }

  /**
   * Copies a file or folder.
   * 
   * @param request - CopyFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyFileResponse
   */
  async copyFileWithOptions(request: $_model.CopyFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CopyFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRename)) {
      body["auto_rename"] = request.autoRename;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.toDriveId)) {
      body["to_drive_id"] = request.toDriveId;
    }

    if (!$dara.isNull(request.toParentFileId)) {
      body["to_parent_file_id"] = request.toParentFileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/copy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyFileResponse>(await this.execute(params, req, runtime), new $_model.CopyFileResponse({}));
  }

  /**
   * Copies a file or folder.
   * 
   * @param request - CopyFileRequest
   * @returns CopyFileResponse
   */
  async copyFile(request: $_model.CopyFileRequest): Promise<$_model.CopyFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.copyFileWithOptions(request, headers, runtime);
  }

  /**
   * 创建自定义故事
   * 
   * @param request - CreateCustomizedStoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomizedStoryResponse
   */
  async createCustomizedStoryWithOptions(request: $_model.CreateCustomizedStoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomizedStoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.storyCover)) {
      body["story_cover"] = request.storyCover;
    }

    if (!$dara.isNull(request.storyFiles)) {
      body["story_files"] = request.storyFiles;
    }

    if (!$dara.isNull(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    if (!$dara.isNull(request.storySubType)) {
      body["story_sub_type"] = request.storySubType;
    }

    if (!$dara.isNull(request.storyType)) {
      body["story_type"] = request.storyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomizedStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/create_customized_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomizedStoryResponse>(await this.execute(params, req, runtime), new $_model.CreateCustomizedStoryResponse({}));
  }

  /**
   * 创建自定义故事
   * 
   * @param request - CreateCustomizedStoryRequest
   * @returns CreateCustomizedStoryResponse
   */
  async createCustomizedStory(request: $_model.CreateCustomizedStoryRequest): Promise<$_model.CreateCustomizedStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCustomizedStoryWithOptions(request, headers, runtime);
  }

  /**
   * test_domain
   * 
   * @remarks
   * The description of the domain.
   * 
   * @param request - CreateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(request: $_model.CreateDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainName)) {
      body["domain_name"] = request.domainName;
    }

    if (!$dara.isNull(request.initDriveEnable)) {
      body["init_drive_enable"] = request.initDriveEnable;
    }

    if (!$dara.isNull(request.initDriveSize)) {
      body["init_drive_size"] = request.initDriveSize;
    }

    if (!$dara.isNull(request.parentDomainId)) {
      body["parent_domain_id"] = request.parentDomainId;
    }

    if (!$dara.isNull(request.sizeQuota)) {
      body["size_quota"] = request.sizeQuota;
    }

    if (!$dara.isNull(request.userCountQuota)) {
      body["user_count_quota"] = request.userCountQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDomainResponse>(await this.execute(params, req, runtime), new $_model.CreateDomainResponse({}));
  }

  /**
   * test_domain
   * 
   * @remarks
   * The description of the domain.
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: $_model.CreateDomainRequest): Promise<$_model.CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDomainWithOptions(request, headers, runtime);
  }

  /**
   * Creates a drive.
   * 
   * @param request - CreateDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDriveResponse
   */
  async createDriveWithOptions(request: $_model.CreateDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.default)) {
      body["default"] = request.default;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.driveName)) {
      body["drive_name"] = request.driveName;
    }

    if (!$dara.isNull(request.driveType)) {
      body["drive_type"] = request.driveType;
    }

    if (!$dara.isNull(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!$dara.isNull(request.ownerType)) {
      body["owner_type"] = request.ownerType;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDriveResponse>(await this.execute(params, req, runtime), new $_model.CreateDriveResponse({}));
  }

  /**
   * Creates a drive.
   * 
   * @param request - CreateDriveRequest
   * @returns CreateDriveResponse
   */
  async createDrive(request: $_model.CreateDriveRequest): Promise<$_model.CreateDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDriveWithOptions(request, headers, runtime);
  }

  /**
   * Creates a file or folder.
   * 
   * @param request - CreateFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileResponse
   */
  async createFileWithOptions(request: $_model.CreateFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkNameMode)) {
      body["check_name_mode"] = request.checkNameMode;
    }

    if (!$dara.isNull(request.contentHash)) {
      body["content_hash"] = request.contentHash;
    }

    if (!$dara.isNull(request.contentHashName)) {
      body["content_hash_name"] = request.contentHashName;
    }

    if (!$dara.isNull(request.contentType)) {
      body["content_type"] = request.contentType;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.hidden)) {
      body["hidden"] = request.hidden;
    }

    if (!$dara.isNull(request.imageMediaMetadata)) {
      body["image_media_metadata"] = request.imageMediaMetadata;
    }

    if (!$dara.isNull(request.localCreatedAt)) {
      body["local_created_at"] = request.localCreatedAt;
    }

    if (!$dara.isNull(request.localModifiedAt)) {
      body["local_modified_at"] = request.localModifiedAt;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parallelUpload)) {
      body["parallel_upload"] = request.parallelUpload;
    }

    if (!$dara.isNull(request.parentFileId)) {
      body["parent_file_id"] = request.parentFileId;
    }

    if (!$dara.isNull(request.partInfoList)) {
      body["part_info_list"] = request.partInfoList;
    }

    if (!$dara.isNull(request.preHash)) {
      body["pre_hash"] = request.preHash;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.size)) {
      body["size"] = request.size;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.userTags)) {
      body["user_tags"] = request.userTags;
    }

    if (!$dara.isNull(request.videoMediaMetadata)) {
      body["video_media_metadata"] = request.videoMediaMetadata;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileResponse>(await this.execute(params, req, runtime), new $_model.CreateFileResponse({}));
  }

  /**
   * Creates a file or folder.
   * 
   * @param request - CreateFileRequest
   * @returns CreateFileResponse
   */
  async createFile(request: $_model.CreateFileRequest): Promise<$_model.CreateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFileWithOptions(request, headers, runtime);
  }

  /**
   * Creates a group.
   * 
   * @param request - CreateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: $_model.CreateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      body["group_name"] = request.groupName;
    }

    if (!$dara.isNull(request.isRoot)) {
      body["is_root"] = request.isRoot;
    }

    if (!$dara.isNull(request.parentGroupId)) {
      body["parent_group_id"] = request.parentGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGroupResponse>(await this.execute(params, req, runtime), new $_model.CreateGroupResponse({}));
  }

  /**
   * Creates a group.
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a mapping between an entity and a benefit package. You can call this operation to associate a benefit package with a user.
   * 
   * @remarks
   * If you need to manage a large number of users based on Drive and Photo Service, you can control the features and quotas that users can use based on the benefits to which they are entitled. For more information, join the DingTalk group (ID 23146118).
   * 
   * @param request - CreateIdentityToBenefitPkgMappingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdentityToBenefitPkgMappingResponse
   */
  async createIdentityToBenefitPkgMappingWithOptions(request: $_model.CreateIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIdentityToBenefitPkgMappingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amount)) {
      body["amount"] = request.amount;
    }

    if (!$dara.isNull(request.benefitPkgId)) {
      body["benefit_pkg_id"] = request.benefitPkgId;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["expire_time"] = request.expireTime;
    }

    if (!$dara.isNull(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new $_model.CreateIdentityToBenefitPkgMappingResponse({}));
  }

  /**
   * Creates a mapping between an entity and a benefit package. You can call this operation to associate a benefit package with a user.
   * 
   * @remarks
   * If you need to manage a large number of users based on Drive and Photo Service, you can control the features and quotas that users can use based on the benefits to which they are entitled. For more information, join the DingTalk group (ID 23146118).
   * 
   * @param request - CreateIdentityToBenefitPkgMappingRequest
   * @returns CreateIdentityToBenefitPkgMappingResponse
   */
  async createIdentityToBenefitPkgMapping(request: $_model.CreateIdentityToBenefitPkgMappingRequest): Promise<$_model.CreateIdentityToBenefitPkgMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  /**
   * 创建凌霄订单
   * 
   * @param request - CreateOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderResponse
   */
  async createOrderWithOptions(request: $_model.CreateOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoPay)) {
      body["auto_pay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["auto_renew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["instance_id"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      body["order_type"] = request.orderType;
    }

    if (!$dara.isNull(request.package)) {
      body["package"] = request.package;
    }

    if (!$dara.isNull(request.period)) {
      body["period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["period_unit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    if (!$dara.isNull(request.userCount)) {
      body["user_count"] = request.userCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrder",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/create_order`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrderResponse>(await this.execute(params, req, runtime), new $_model.CreateOrderResponse({}));
  }

  /**
   * 创建凌霄订单
   * 
   * @param request - CreateOrderRequest
   * @returns CreateOrderResponse
   */
  async createOrder(request: $_model.CreateOrderRequest): Promise<$_model.CreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOrderWithOptions(request, headers, runtime);
  }

  /**
   * Creates a share URL.
   * 
   * @remarks
   * A share is a file view container. You can grant anonymous users the permissions to access files in the user drive by using the share URL. Anonymous users can access the files based on the granted permissions.
   * 
   * @param request - CreateShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateShareLinkResponse
   */
  async createShareLinkWithOptions(request: $_model.CreateShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creatable)) {
      body["creatable"] = request.creatable;
    }

    if (!$dara.isNull(request.creatableFileIdList)) {
      body["creatable_file_id_list"] = request.creatableFileIdList;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.disableDownload)) {
      body["disable_download"] = request.disableDownload;
    }

    if (!$dara.isNull(request.disablePreview)) {
      body["disable_preview"] = request.disablePreview;
    }

    if (!$dara.isNull(request.disableSave)) {
      body["disable_save"] = request.disableSave;
    }

    if (!$dara.isNull(request.downloadLimit)) {
      body["download_limit"] = request.downloadLimit;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.expiration)) {
      body["expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.fileIdList)) {
      body["file_id_list"] = request.fileIdList;
    }

    if (!$dara.isNull(request.officeEditable)) {
      body["office_editable"] = request.officeEditable;
    }

    if (!$dara.isNull(request.previewLimit)) {
      body["preview_limit"] = request.previewLimit;
    }

    if (!$dara.isNull(request.requireLogin)) {
      body["require_login"] = request.requireLogin;
    }

    if (!$dara.isNull(request.saveLimit)) {
      body["save_limit"] = request.saveLimit;
    }

    if (!$dara.isNull(request.shareAllFiles)) {
      body["share_all_files"] = request.shareAllFiles;
    }

    if (!$dara.isNull(request.shareName)) {
      body["share_name"] = request.shareName;
    }

    if (!$dara.isNull(request.sharePwd)) {
      body["share_pwd"] = request.sharePwd;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateShareLinkResponse>(await this.execute(params, req, runtime), new $_model.CreateShareLinkResponse({}));
  }

  /**
   * Creates a share URL.
   * 
   * @remarks
   * A share is a file view container. You can grant anonymous users the permissions to access files in the user drive by using the share URL. Anonymous users can access the files based on the granted permissions.
   * 
   * @param request - CreateShareLinkRequest
   * @returns CreateShareLinkResponse
   */
  async createShareLink(request: $_model.CreateShareLinkRequest): Promise<$_model.CreateShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * 创建相似图片聚类任务
   * 
   * @param request - CreateSimilarImageClusterTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSimilarImageClusterTaskResponse
   */
  async createSimilarImageClusterTaskWithOptions(request: $_model.CreateSimilarImageClusterTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSimilarImageClusterTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSimilarImageClusterTask",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/create_similar_image_cluster_task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSimilarImageClusterTaskResponse>(await this.execute(params, req, runtime), new $_model.CreateSimilarImageClusterTaskResponse({}));
  }

  /**
   * 创建相似图片聚类任务
   * 
   * @param request - CreateSimilarImageClusterTaskRequest
   * @returns CreateSimilarImageClusterTaskResponse
   */
  async createSimilarImageClusterTask(request: $_model.CreateSimilarImageClusterTaskRequest): Promise<$_model.CreateSimilarImageClusterTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSimilarImageClusterTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建推荐故事
   * 
   * @param request - CreateStoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStoryResponse
   */
  async createStoryWithOptions(request: $_model.CreateStoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.address)) {
      body["address"] = request.address;
    }

    if (!$dara.isNull(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.maxImageCount)) {
      body["max_image_count"] = request.maxImageCount;
    }

    if (!$dara.isNull(request.minImageCount)) {
      body["min_image_count"] = request.minImageCount;
    }

    if (!$dara.isNull(request.storyEndTime)) {
      body["story_end_time"] = request.storyEndTime;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!$dara.isNull(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    if (!$dara.isNull(request.storyStartTime)) {
      body["story_start_time"] = request.storyStartTime;
    }

    if (!$dara.isNull(request.storySubType)) {
      body["story_sub_type"] = request.storySubType;
    }

    if (!$dara.isNull(request.storyType)) {
      body["story_type"] = request.storyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/create_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStoryResponse>(await this.execute(params, req, runtime), new $_model.CreateStoryResponse({}));
  }

  /**
   * 创建推荐故事
   * 
   * @param request - CreateStoryRequest
   * @returns CreateStoryResponse
   */
  async createStory(request: $_model.CreateStoryRequest): Promise<$_model.CreateStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createStoryWithOptions(request, headers, runtime);
  }

  /**
   * Creates a user.
   * 
   * @param request - CreateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: $_model.CreateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatar)) {
      body["avatar"] = request.avatar;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.groupInfoList)) {
      body["group_info_list"] = request.groupInfoList;
    }

    if (!$dara.isNull(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.role)) {
      body["role"] = request.role;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      body["user_name"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserResponse>(await this.execute(params, req, runtime), new $_model.CreateUserResponse({}));
  }

  /**
   * Creates a user.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserWithOptions(request, headers, runtime);
  }

  /**
   * 获取文件内容安全信息
   * 
   * @param request - CsiGetFileInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CsiGetFileInfoResponse
   */
  async csiGetFileInfoWithOptions(request: $_model.CsiGetFileInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CsiGetFileInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CsiGetFileInfo",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/csi/get_file_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CsiGetFileInfoResponse>(await this.execute(params, req, runtime), new $_model.CsiGetFileInfoResponse({}));
  }

  /**
   * 获取文件内容安全信息
   * 
   * @param request - CsiGetFileInfoRequest
   * @returns CsiGetFileInfoResponse
   */
  async csiGetFileInfo(request: $_model.CsiGetFileInfoRequest): Promise<$_model.CsiGetFileInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.csiGetFileInfoWithOptions(request, headers, runtime);
  }

  /**
   * Delete the domain
   * 
   * @param request - DeleteDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: $_model.DeleteDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainId)) {
      body["domain_id"] = request.domainId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainResponse>(await this.execute(params, req, runtime), new $_model.DeleteDomainResponse({}));
  }

  /**
   * Delete the domain
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: $_model.DeleteDomainRequest): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDomainWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a drive.
   * 
   * @param request - DeleteDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDriveResponse
   */
  async deleteDriveWithOptions(request: $_model.DeleteDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDriveResponse>(await this.execute(params, req, runtime), new $_model.DeleteDriveResponse({}));
  }

  /**
   * Deletes a drive.
   * 
   * @param request - DeleteDriveRequest
   * @returns DeleteDriveResponse
   */
  async deleteDrive(request: $_model.DeleteDriveRequest): Promise<$_model.DeleteDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDriveWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a file or folder.
   * 
   * @param request - DeleteFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileResponse
   */
  async deleteFileWithOptions(request: $_model.DeleteFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileResponse>(await this.execute(params, req, runtime), new $_model.DeleteFileResponse({}));
  }

  /**
   * Deletes a file or folder.
   * 
   * @param request - DeleteFileRequest
   * @returns DeleteFileResponse
   */
  async deleteFile(request: $_model.DeleteFileRequest): Promise<$_model.DeleteFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFileWithOptions(request, headers, runtime);
  }

  /**
   * Deletes groups. Before you delete a group, make sure that no other groups or users exist in the group. Otherwise, the group fails to be deleted.
   * 
   * @param request - DeleteGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: $_model.DeleteGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGroupResponse>(await this.execute(params, req, runtime), new $_model.DeleteGroupResponse({}));
  }

  /**
   * Deletes groups. Before you delete a group, make sure that no other groups or users exist in the group. Otherwise, the group fails to be deleted.
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: $_model.DeleteGroupRequest): Promise<$_model.DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a historical version of a file. You cannot delete the latest version of a file.
   * 
   * @param request - DeleteRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRevisionResponse
   */
  async deleteRevisionWithOptions(request: $_model.DeleteRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRevisionResponse>(await this.execute(params, req, runtime), new $_model.DeleteRevisionResponse({}));
  }

  /**
   * Deletes a historical version of a file. You cannot delete the latest version of a file.
   * 
   * @param request - DeleteRevisionRequest
   * @returns DeleteRevisionResponse
   */
  async deleteRevision(request: $_model.DeleteRevisionRequest): Promise<$_model.DeleteRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRevisionWithOptions(request, headers, runtime);
  }

  /**
   * 删除故事
   * 
   * @param request - DeleteStoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStoryResponse
   */
  async deleteStoryWithOptions(request: $_model.DeleteStoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/delete_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStoryResponse>(await this.execute(params, req, runtime), new $_model.DeleteStoryResponse({}));
  }

  /**
   * 删除故事
   * 
   * @param request - DeleteStoryRequest
   * @returns DeleteStoryResponse
   */
  async deleteStory(request: $_model.DeleteStoryRequest): Promise<$_model.DeleteStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteStoryWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a user.
   * 
   * @param request - DeleteUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: $_model.DeleteUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserResponse>(await this.execute(params, req, runtime), new $_model.DeleteUserResponse({}));
  }

  /**
   * Deletes a user.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserWithOptions(request, headers, runtime);
  }

  /**
   * Queries the cursor of incremental information.
   * 
   * @param request - DeltaGetLastCursorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeltaGetLastCursorResponse
   */
  async deltaGetLastCursorWithOptions(request: $_model.DeltaGetLastCursorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeltaGetLastCursorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.syncRootId)) {
      body["sync_root_id"] = request.syncRootId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeltaGetLastCursor",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_last_cursor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeltaGetLastCursorResponse>(await this.execute(params, req, runtime), new $_model.DeltaGetLastCursorResponse({}));
  }

  /**
   * Queries the cursor of incremental information.
   * 
   * @param request - DeltaGetLastCursorRequest
   * @returns DeltaGetLastCursorResponse
   */
  async deltaGetLastCursor(request: $_model.DeltaGetLastCursorRequest): Promise<$_model.DeltaGetLastCursorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deltaGetLastCursorWithOptions(request, headers, runtime);
  }

  /**
   * Downloads a file.
   * 
   * @remarks
   * For information about best practices for downloading a file.
   * 
   * @param request - DownloadFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadFileResponse
   */
  async downloadFileWithOptions(request: $_model.DownloadFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      query["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      query["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.officeThumbnailProcess)) {
      query["office_thumbnail_process"] = request.officeThumbnailProcess;
    }

    if (!$dara.isNull(request.shareId)) {
      query["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.videoThumbnailProcess)) {
      query["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/download`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "binary",
    });
    return $dara.cast<$_model.DownloadFileResponse>(await this.execute(params, req, runtime), new $_model.DownloadFileResponse({}));
  }

  /**
   * Downloads a file.
   * 
   * @remarks
   * For information about best practices for downloading a file.
   * 
   * @param request - DownloadFileRequest
   * @returns DownloadFileResponse
   */
  async downloadFile(request: $_model.DownloadFileRequest): Promise<$_model.DownloadFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.downloadFileWithOptions(request, headers, runtime);
  }

  /**
   * Grants permissions to access files to a user or group.
   * 
   * @param request - FileAddPermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileAddPermissionResponse
   */
  async fileAddPermissionWithOptions(request: $_model.FileAddPermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FileAddPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.memberList)) {
      body["member_list"] = request.memberList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileAddPermission",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/add_permission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FileAddPermissionResponse>(await this.execute(params, req, runtime), new $_model.FileAddPermissionResponse({}));
  }

  /**
   * Grants permissions to access files to a user or group.
   * 
   * @param request - FileAddPermissionRequest
   * @returns FileAddPermissionResponse
   */
  async fileAddPermission(request: $_model.FileAddPermissionRequest): Promise<$_model.FileAddPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileAddPermissionWithOptions(request, headers, runtime);
  }

  /**
   * Removes custom tags from a file.
   * 
   * @param request - FileDeleteUserTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileDeleteUserTagsResponse
   */
  async fileDeleteUserTagsWithOptions(request: $_model.FileDeleteUserTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FileDeleteUserTagsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.keyList)) {
      body["key_list"] = request.keyList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileDeleteUserTags",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/delete_usertags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FileDeleteUserTagsResponse>(await this.execute(params, req, runtime), new $_model.FileDeleteUserTagsResponse({}));
  }

  /**
   * Removes custom tags from a file.
   * 
   * @param request - FileDeleteUserTagsRequest
   * @returns FileDeleteUserTagsResponse
   */
  async fileDeleteUserTags(request: $_model.FileDeleteUserTagsRequest): Promise<$_model.FileDeleteUserTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileDeleteUserTagsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the sharing authorization records of a file.
   * 
   * @param request - FileListPermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileListPermissionResponse
   */
  async fileListPermissionWithOptions(request: $_model.FileListPermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FileListPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileListPermission",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_permission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.FileListPermissionResponse>(await this.execute(params, req, runtime), new $_model.FileListPermissionResponse({}));
  }

  /**
   * Queries the sharing authorization records of a file.
   * 
   * @param request - FileListPermissionRequest
   * @returns FileListPermissionResponse
   */
  async fileListPermission(request: $_model.FileListPermissionRequest): Promise<$_model.FileListPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileListPermissionWithOptions(request, headers, runtime);
  }

  /**
   * Adds custom tags to a file.
   * 
   * @remarks
   * This operation is an incremental update operation. Take note of the following items:
   * *   If a tag name specified in the request is the same as an existing tag name, the existing tag is overwritten.
   * *   If a tag name specified in the request is different from the existing tag names, the specified tag is added.
   * *   The existing tags with unique names are not affected.
   * 
   * @param request - FilePutUserTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FilePutUserTagsResponse
   */
  async filePutUserTagsWithOptions(request: $_model.FilePutUserTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FilePutUserTagsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.userTags)) {
      body["user_tags"] = request.userTags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FilePutUserTags",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/put_usertags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FilePutUserTagsResponse>(await this.execute(params, req, runtime), new $_model.FilePutUserTagsResponse({}));
  }

  /**
   * Adds custom tags to a file.
   * 
   * @remarks
   * This operation is an incremental update operation. Take note of the following items:
   * *   If a tag name specified in the request is the same as an existing tag name, the existing tag is overwritten.
   * *   If a tag name specified in the request is different from the existing tag names, the specified tag is added.
   * *   The existing tags with unique names are not affected.
   * 
   * @param request - FilePutUserTagsRequest
   * @returns FilePutUserTagsResponse
   */
  async filePutUserTags(request: $_model.FilePutUserTagsRequest): Promise<$_model.FilePutUserTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.filePutUserTagsWithOptions(request, headers, runtime);
  }

  /**
   * Cancels the permissions on a shared file.
   * 
   * @param request - FileRemovePermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileRemovePermissionResponse
   */
  async fileRemovePermissionWithOptions(request: $_model.FileRemovePermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FileRemovePermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.memberList)) {
      body["member_list"] = request.memberList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileRemovePermission",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/remove_permission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FileRemovePermissionResponse>(await this.execute(params, req, runtime), new $_model.FileRemovePermissionResponse({}));
  }

  /**
   * Cancels the permissions on a shared file.
   * 
   * @param request - FileRemovePermissionRequest
   * @returns FileRemovePermissionResponse
   */
  async fileRemovePermission(request: $_model.FileRemovePermissionRequest): Promise<$_model.FileRemovePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileRemovePermissionWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about an asynchronous task.
   * 
   * @param request - GetAsyncTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTaskWithOptions(request: $_model.GetAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asyncTaskId)) {
      body["async_task_id"] = request.asyncTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncTask",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/async_task/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncTaskResponse>(await this.execute(params, req, runtime), new $_model.GetAsyncTaskResponse({}));
  }

  /**
   * Queries the information about an asynchronous task.
   * 
   * @param request - GetAsyncTaskRequest
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTask(request: $_model.GetAsyncTaskRequest): Promise<$_model.GetAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAsyncTaskWithOptions(request, headers, runtime);
  }

  /**
   * Queries the default drive of a user.
   * 
   * @param request - GetDefaultDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefaultDriveResponse
   */
  async getDefaultDriveWithOptions(request: $_model.GetDefaultDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDefaultDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDefaultDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/get_default_drive`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDefaultDriveResponse>(await this.execute(params, req, runtime), new $_model.GetDefaultDriveResponse({}));
  }

  /**
   * Queries the default drive of a user.
   * 
   * @param request - GetDefaultDriveRequest
   * @returns GetDefaultDriveResponse
   */
  async getDefaultDrive(request: $_model.GetDefaultDriveRequest): Promise<$_model.GetDefaultDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDefaultDriveWithOptions(request, headers, runtime);
  }

  /**
   * Get domain information.
   * 
   * @param request - GetDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
   */
  async getDomainWithOptions(request: $_model.GetDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainId)) {
      body["domain_id"] = request.domainId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.getQuotaUsed)) {
      body["get_quota_used"] = request.getQuotaUsed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainResponse>(await this.execute(params, req, runtime), new $_model.GetDomainResponse({}));
  }

  /**
   * Get domain information.
   * 
   * @param request - GetDomainRequest
   * @returns GetDomainResponse
   */
  async getDomain(request: $_model.GetDomainRequest): Promise<$_model.GetDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainWithOptions(request, headers, runtime);
  }

  /**
   * 获取domain限额
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainQuotaResponse
   */
  async getDomainQuotaWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainQuotaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomainQuota",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/get_quota`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainQuotaResponse>(await this.execute(params, req, runtime), new $_model.GetDomainQuotaResponse({}));
  }

  /**
   * 获取domain限额
   * @returns GetDomainQuotaResponse
   */
  async getDomainQuota(): Promise<$_model.GetDomainQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainQuotaWithOptions(headers, runtime);
  }

  /**
   * Queries the download URL of a file. For more information about best practices, visit https://help.aliyun.com/document_detail/175889.html.
   * 
   * @param request - GetDownloadUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDownloadUrlResponse
   */
  async getDownloadUrlWithOptions(request: $_model.GetDownloadUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDownloadUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.expireSec)) {
      body["expire_sec"] = request.expireSec;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.fileName)) {
      body["file_name"] = request.fileName;
    }

    if (!$dara.isNull(request.responseContentType)) {
      body["response_content_type"] = request.responseContentType;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDownloadUrl",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_download_url`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDownloadUrlResponse>(await this.execute(params, req, runtime), new $_model.GetDownloadUrlResponse({}));
  }

  /**
   * Queries the download URL of a file. For more information about best practices, visit https://help.aliyun.com/document_detail/175889.html.
   * 
   * @param request - GetDownloadUrlRequest
   * @returns GetDownloadUrlResponse
   */
  async getDownloadUrl(request: $_model.GetDownloadUrlRequest): Promise<$_model.GetDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDownloadUrlWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a drive.
   * 
   * @param request - GetDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDriveResponse
   */
  async getDriveWithOptions(request: $_model.GetDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDriveResponse>(await this.execute(params, req, runtime), new $_model.GetDriveResponse({}));
  }

  /**
   * Queries the information about a drive.
   * 
   * @param request - GetDriveRequest
   * @returns GetDriveResponse
   */
  async getDrive(request: $_model.GetDriveRequest): Promise<$_model.GetDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDriveWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a file.
   * 
   * @param request - GetFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileResponse
   */
  async getFileWithOptions(request: $_model.GetFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.thumbnailProcesses)) {
      body["thumbnail_processes"] = request.thumbnailProcesses;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileResponse>(await this.execute(params, req, runtime), new $_model.GetFileResponse({}));
  }

  /**
   * Queries the information about a file.
   * 
   * @param request - GetFileRequest
   * @returns GetFileResponse
   */
  async getFile(request: $_model.GetFileRequest): Promise<$_model.GetFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a group.
   * 
   * @param request - GetGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(request: $_model.GetGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupResponse>(await this.execute(params, req, runtime), new $_model.GetGroupResponse({}));
  }

  /**
   * Queries the information about a group.
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: $_model.GetGroupRequest): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupWithOptions(request, headers, runtime);
  }

  /**
   * Queries the mapping between an entity and a benefit package. You can call this operation to query the benefit package that is associated with a user.
   * 
   * @param request - GetIdentityToBenefitPkgMappingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityToBenefitPkgMappingResponse
   */
  async getIdentityToBenefitPkgMappingWithOptions(request: $_model.GetIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityToBenefitPkgMappingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.benefitPkgId)) {
      body["benefit_pkg_id"] = request.benefitPkgId;
    }

    if (!$dara.isNull(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new $_model.GetIdentityToBenefitPkgMappingResponse({}));
  }

  /**
   * Queries the mapping between an entity and a benefit package. You can call this operation to query the benefit package that is associated with a user.
   * 
   * @param request - GetIdentityToBenefitPkgMappingRequest
   * @returns GetIdentityToBenefitPkgMappingResponse
   */
  async getIdentityToBenefitPkgMapping(request: $_model.GetIdentityToBenefitPkgMappingRequest): Promise<$_model.GetIdentityToBenefitPkgMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about an account.
   * 
   * @param request - GetLinkInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLinkInfoResponse
   */
  async getLinkInfoWithOptions(request: $_model.GetLinkInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLinkInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLinkInfo",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/get_link_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLinkInfoResponse>(await this.execute(params, req, runtime), new $_model.GetLinkInfoResponse({}));
  }

  /**
   * Queries the information about an account.
   * 
   * @param request - GetLinkInfoRequest
   * @returns GetLinkInfoResponse
   */
  async getLinkInfo(request: $_model.GetLinkInfoRequest): Promise<$_model.GetLinkInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLinkInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a user based on the user ID.
   * 
   * @param request - GetLinkInfoByUserIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLinkInfoByUserIdResponse
   */
  async getLinkInfoByUserIdWithOptions(request: $_model.GetLinkInfoByUserIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLinkInfoByUserIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLinkInfoByUserId",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/get_link_info_by_user_id`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLinkInfoByUserIdResponse>(await this.execute(params, req, runtime), new $_model.GetLinkInfoByUserIdResponse({}));
  }

  /**
   * Queries the information about a user based on the user ID.
   * 
   * @param request - GetLinkInfoByUserIdRequest
   * @returns GetLinkInfoByUserIdResponse
   */
  async getLinkInfoByUserId(request: $_model.GetLinkInfoByUserIdRequest): Promise<$_model.GetLinkInfoByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLinkInfoByUserIdWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a version.
   * 
   * @param request - GetRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRevisionResponse
   */
  async getRevisionWithOptions(request: $_model.GetRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRevisionResponse>(await this.execute(params, req, runtime), new $_model.GetRevisionResponse({}));
  }

  /**
   * Queries the information about a version.
   * 
   * @param request - GetRevisionRequest
   * @returns GetRevisionResponse
   */
  async getRevision(request: $_model.GetRevisionRequest): Promise<$_model.GetRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRevisionWithOptions(request, headers, runtime);
  }

  /**
   * Queries the share URL of a file.
   * 
   * @param request - GetShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetShareLinkResponse
   */
  async getShareLinkWithOptions(request: $_model.GetShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetShareLinkResponse>(await this.execute(params, req, runtime), new $_model.GetShareLinkResponse({}));
  }

  /**
   * Queries the share URL of a file.
   * 
   * @param request - GetShareLinkRequest
   * @returns GetShareLinkResponse
   */
  async getShareLink(request: $_model.GetShareLinkRequest): Promise<$_model.GetShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a share link anonymously.
   * 
   * @param request - GetShareLinkByAnonymousRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetShareLinkByAnonymousResponse
   */
  async getShareLinkByAnonymousWithOptions(request: $_model.GetShareLinkByAnonymousRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetShareLinkByAnonymousResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetShareLinkByAnonymous",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/get_by_anonymous`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetShareLinkByAnonymousResponse>(await this.execute(params, req, runtime), new $_model.GetShareLinkByAnonymousResponse({}));
  }

  /**
   * Queries the information about a share link anonymously.
   * 
   * @param request - GetShareLinkByAnonymousRequest
   * @returns GetShareLinkByAnonymousResponse
   */
  async getShareLinkByAnonymous(request: $_model.GetShareLinkByAnonymousRequest): Promise<$_model.GetShareLinkByAnonymousResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getShareLinkByAnonymousWithOptions(request, headers, runtime);
  }

  /**
   * Queries a share token anonymously.
   * 
   * @remarks
   * To access a file by using a share link, you must first obtain a share token, even if the value of share_pwd of this share is an empty string, which specifies that the share is not private.
   * 
   * @param request - GetShareLinkTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetShareLinkTokenResponse
   */
  async getShareLinkTokenWithOptions(request: $_model.GetShareLinkTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetShareLinkTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireSec)) {
      body["expire_sec"] = request.expireSec;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.sharePwd)) {
      body["share_pwd"] = request.sharePwd;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetShareLinkToken",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/get_share_token`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetShareLinkTokenResponse>(await this.execute(params, req, runtime), new $_model.GetShareLinkTokenResponse({}));
  }

  /**
   * Queries a share token anonymously.
   * 
   * @remarks
   * To access a file by using a share link, you must first obtain a share token, even if the value of share_pwd of this share is an empty string, which specifies that the share is not private.
   * 
   * @param request - GetShareLinkTokenRequest
   * @returns GetShareLinkTokenResponse
   */
  async getShareLinkToken(request: $_model.GetShareLinkTokenRequest): Promise<$_model.GetShareLinkTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getShareLinkTokenWithOptions(request, headers, runtime);
  }

  /**
   * 获取故事详情
   * 
   * @param request - GetStoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStoryResponse
   */
  async getStoryWithOptions(request: $_model.GetStoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetStoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coverImageThumbnailProcess)) {
      body["cover_image_thumbnail_process"] = request.coverImageThumbnailProcess;
    }

    if (!$dara.isNull(request.coverVideoThumbnailProcess)) {
      body["cover_video_thumbnail_process"] = request.coverVideoThumbnailProcess;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.imageUrlProcess)) {
      body["image_url_process"] = request.imageUrlProcess;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    if (!$dara.isNull(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/get_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStoryResponse>(await this.execute(params, req, runtime), new $_model.GetStoryResponse({}));
  }

  /**
   * 获取故事详情
   * 
   * @param request - GetStoryRequest
   * @returns GetStoryResponse
   */
  async getStory(request: $_model.GetStoryRequest): Promise<$_model.GetStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStoryWithOptions(request, headers, runtime);
  }

  /**
   * Queries the execution status of a value-added asynchronous task. You can call this operation to query the execution status of an asynchronous task that is created by calling the CreateSimilarImageClusterTask operation.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/425220.html) of Drive and Photo Service**.
   * To call this operation, make sure that the value-added image processing feature is enabled.
   * Before you call this operation, a value-added asynchronous task must be created. For example, you can call the CreateSimilarImageClusterTask operation to create an asynchronous task. Then, you can call this operation to query the execution status of the asynchronous task based on the task ID.
   * 
   * @param request - GetTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatusResponse
   */
  async getTaskStatusWithOptions(request: $_model.GetTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskStatus",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/get_task_status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskStatusResponse>(await this.execute(params, req, runtime), new $_model.GetTaskStatusResponse({}));
  }

  /**
   * Queries the execution status of a value-added asynchronous task. You can call this operation to query the execution status of an asynchronous task that is created by calling the CreateSimilarImageClusterTask operation.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/425220.html) of Drive and Photo Service**.
   * To call this operation, make sure that the value-added image processing feature is enabled.
   * Before you call this operation, a value-added asynchronous task must be created. For example, you can call the CreateSimilarImageClusterTask operation to create an asynchronous task. Then, you can call this operation to query the execution status of the asynchronous task based on the task ID.
   * 
   * @param request - GetTaskStatusRequest
   * @returns GetTaskStatusResponse
   */
  async getTaskStatus(request: $_model.GetTaskStatusRequest): Promise<$_model.GetTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskStatusWithOptions(request, headers, runtime);
  }

  /**
   * Queries the upload URL of a file.
   * 
   * @param request - GetUploadUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadUrlResponse
   */
  async getUploadUrlWithOptions(request: $_model.GetUploadUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.partInfoList)) {
      body["part_info_list"] = request.partInfoList;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.uploadId)) {
      body["upload_id"] = request.uploadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadUrl",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_upload_url`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadUrlResponse>(await this.execute(params, req, runtime), new $_model.GetUploadUrlResponse({}));
  }

  /**
   * Queries the upload URL of a file.
   * 
   * @param request - GetUploadUrlRequest
   * @returns GetUploadUrlResponse
   */
  async getUploadUrl(request: $_model.GetUploadUrlRequest): Promise<$_model.GetUploadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUploadUrlWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a user.
   * 
   * @param request - GetUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserResponse>(await this.execute(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * Queries the information about a user.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about video playback.
   * 
   * @remarks
   *   **Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://help.aliyun.com/document_detail/425220.html) of Drive and Photo Service (PDS).**
   * *   Before you call this operation, make sure that the transcoding mode which you want to specify by using the category parameter is enabled for the domain. To enable the transcoding feature and configure transcoding templates, contact our technical support. For more information, see [Contact us](https://help.aliyun.com/document_detail/175917.html).
   * *   This operation is a synchronous operation. If the specified file is not transcoded in the specified transcoding mode, the API call returns **202 VideoPreviewWaitAndRetry**, which indicates that you need to wait a moment and try again. If the specified file cannot be transcoded in the specified transcoding mode, the API call returns **404 NotFound.VideoPreviewInfo**.
   * *   This operation generates transcoding data and stores it in the space that is used to store the value-added data of the tenant domain. This way, end users can play audio and videos online. For specific transcoding modes, this operation provides domain-level deduplication for transcoding.
   * *   If the transcoding mode is set to quick_video, the playback URL returned by this operation contains the `{` and `}` characters that are not URL-encoded. For development on iOS, decode and encode the returned URL first to avoid decoding failure of the NSURL library of the system.
   * *   If the transcoding mode is set to quick_video, you cannot use the GET Range method to obtain segments of the M3U8 file in the playback URL.
   * >
   * 
   * @param request - GetVideoPreviewPlayInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoPreviewPlayInfoResponse
   */
  async getVideoPreviewPlayInfoWithOptions(request: $_model.GetVideoPreviewPlayInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoPreviewPlayInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.getMasterUrl)) {
      body["get_master_url"] = request.getMasterUrl;
    }

    if (!$dara.isNull(request.getWithoutUrl)) {
      body["get_without_url"] = request.getWithoutUrl;
    }

    if (!$dara.isNull(request.reTranscode)) {
      body["re_transcode"] = request.reTranscode;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.templateId)) {
      body["template_id"] = request.templateId;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoPreviewPlayInfo",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_video_preview_play_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoPreviewPlayInfoResponse>(await this.execute(params, req, runtime), new $_model.GetVideoPreviewPlayInfoResponse({}));
  }

  /**
   * Queries the information about video playback.
   * 
   * @remarks
   *   **Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://help.aliyun.com/document_detail/425220.html) of Drive and Photo Service (PDS).**
   * *   Before you call this operation, make sure that the transcoding mode which you want to specify by using the category parameter is enabled for the domain. To enable the transcoding feature and configure transcoding templates, contact our technical support. For more information, see [Contact us](https://help.aliyun.com/document_detail/175917.html).
   * *   This operation is a synchronous operation. If the specified file is not transcoded in the specified transcoding mode, the API call returns **202 VideoPreviewWaitAndRetry**, which indicates that you need to wait a moment and try again. If the specified file cannot be transcoded in the specified transcoding mode, the API call returns **404 NotFound.VideoPreviewInfo**.
   * *   This operation generates transcoding data and stores it in the space that is used to store the value-added data of the tenant domain. This way, end users can play audio and videos online. For specific transcoding modes, this operation provides domain-level deduplication for transcoding.
   * *   If the transcoding mode is set to quick_video, the playback URL returned by this operation contains the `{` and `}` characters that are not URL-encoded. For development on iOS, decode and encode the returned URL first to avoid decoding failure of the NSURL library of the system.
   * *   If the transcoding mode is set to quick_video, you cannot use the GET Range method to obtain segments of the M3U8 file in the playback URL.
   * >
   * 
   * @param request - GetVideoPreviewPlayInfoRequest
   * @returns GetVideoPreviewPlayInfoResponse
   */
  async getVideoPreviewPlayInfo(request: $_model.GetVideoPreviewPlayInfoRequest): Promise<$_model.GetVideoPreviewPlayInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVideoPreviewPlayInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries the preview metadata of a video.
   * 
   * @remarks
   * For more information about best practices, see [Preview videos online](https://help.aliyun.com/document_detail/427477.html).
   * 
   * @param request - GetVideoPreviewPlayMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoPreviewPlayMetaResponse
   */
  async getVideoPreviewPlayMetaWithOptions(request: $_model.GetVideoPreviewPlayMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoPreviewPlayMetaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoPreviewPlayMeta",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/get_video_preview_play_meta`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoPreviewPlayMetaResponse>(await this.execute(params, req, runtime), new $_model.GetVideoPreviewPlayMetaResponse({}));
  }

  /**
   * Queries the preview metadata of a video.
   * 
   * @remarks
   * For more information about best practices, see [Preview videos online](https://help.aliyun.com/document_detail/427477.html).
   * 
   * @param request - GetVideoPreviewPlayMetaRequest
   * @returns GetVideoPreviewPlayMetaResponse
   */
  async getVideoPreviewPlayMeta(request: $_model.GetVideoPreviewPlayMetaRequest): Promise<$_model.GetVideoPreviewPlayMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVideoPreviewPlayMetaWithOptions(request, headers, runtime);
  }

  /**
   * 更新用户组名字
   * 
   * @param request - GroupUpdateNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GroupUpdateNameResponse
   */
  async groupUpdateNameWithOptions(request: $_model.GroupUpdateNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GroupUpdateNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GroupUpdateName",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/update_name`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GroupUpdateNameResponse>(await this.execute(params, req, runtime), new $_model.GroupUpdateNameResponse({}));
  }

  /**
   * 更新用户组名字
   * 
   * @param request - GroupUpdateNameRequest
   * @returns GroupUpdateNameResponse
   */
  async groupUpdateName(request: $_model.GroupUpdateNameRequest): Promise<$_model.GroupUpdateNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.groupUpdateNameWithOptions(request, headers, runtime);
  }

  /**
   * Imports a user.
   * 
   * @param request - ImportUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportUserResponse
   */
  async importUserWithOptions(request: $_model.ImportUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ImportUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authenticationDisplayName)) {
      body["authentication_display_name"] = request.authenticationDisplayName;
    }

    if (!$dara.isNull(request.authenticationType)) {
      body["authentication_type"] = request.authenticationType;
    }

    if (!$dara.isNull(request.autoCreateDrive)) {
      body["auto_create_drive"] = request.autoCreateDrive;
    }

    if (!$dara.isNull(request.driveTotalSize)) {
      body["drive_total_size"] = request.driveTotalSize;
    }

    if (!$dara.isNull(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!$dara.isNull(request.parentGroupId)) {
      body["parent_group_id"] = request.parentGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportUserResponse>(await this.execute(params, req, runtime), new $_model.ImportUserResponse({}));
  }

  /**
   * Imports a user.
   * 
   * @param request - ImportUserRequest
   * @returns ImportUserResponse
   */
  async importUser(request: $_model.ImportUserRequest): Promise<$_model.ImportUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.importUserWithOptions(request, headers, runtime);
  }

  /**
   * 送审文件
   * 
   * @param request - InvestigateFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvestigateFileResponse
   */
  async investigateFileWithOptions(request: $_model.InvestigateFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InvestigateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveFileIds)) {
      body["drive_file_ids"] = request.driveFileIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvestigateFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/csi/investigate_file`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvestigateFileResponse>(await this.execute(params, req, runtime), new $_model.InvestigateFileResponse({}));
  }

  /**
   * 送审文件
   * 
   * @param request - InvestigateFileRequest
   * @returns InvestigateFileResponse
   */
  async investigateFile(request: $_model.InvestigateFileRequest): Promise<$_model.InvestigateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.investigateFileWithOptions(request, headers, runtime);
  }

  /**
   * Associates an account with a user.
   * 
   * @param request - LinkAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LinkAccountResponse
   */
  async linkAccountWithOptions(request: $_model.LinkAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.LinkAccountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LinkAccount",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/link`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.LinkAccountResponse>(await this.execute(params, req, runtime), new $_model.LinkAccountResponse({}));
  }

  /**
   * Associates an account with a user.
   * 
   * @param request - LinkAccountRequest
   * @returns LinkAccountResponse
   */
  async linkAccount(request: $_model.LinkAccountRequest): Promise<$_model.LinkAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.linkAccountWithOptions(request, headers, runtime);
  }

  /**
   * Queries location-based groups.
   * 
   * @param request - ListAddressGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddressGroupsResponse
   */
  async listAddressGroupsWithOptions(request: $_model.ListAddressGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAddressGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddressGroups",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/list_address_groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddressGroupsResponse>(await this.execute(params, req, runtime), new $_model.ListAddressGroupsResponse({}));
  }

  /**
   * Queries location-based groups.
   * 
   * @param request - ListAddressGroupsRequest
   * @returns ListAddressGroupsResponse
   */
  async listAddressGroups(request: $_model.ListAddressGroupsRequest): Promise<$_model.ListAddressGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAddressGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of assigned roles. For example, you can query the administrators of a group by group ID.
   * 
   * @param request - ListAssignmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssignmentResponse
   */
  async listAssignmentWithOptions(request: $_model.ListAssignmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAssignmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.manageResourceId)) {
      body["manage_resource_id"] = request.manageResourceId;
    }

    if (!$dara.isNull(request.manageResourceType)) {
      body["manage_resource_type"] = request.manageResourceType;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAssignment",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/list_assignment`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAssignmentResponse>(await this.execute(params, req, runtime), new $_model.ListAssignmentResponse({}));
  }

  /**
   * Queries a list of assigned roles. For example, you can query the administrators of a group by group ID.
   * 
   * @param request - ListAssignmentRequest
   * @returns ListAssignmentResponse
   */
  async listAssignment(request: $_model.ListAssignmentRequest): Promise<$_model.ListAssignmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAssignmentWithOptions(request, headers, runtime);
  }

  /**
   * Queries incremental information.
   * 
   * @param request - ListDeltaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeltaResponse
   */
  async listDeltaWithOptions(request: $_model.ListDeltaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeltaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cursor)) {
      body["cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.syncRootId)) {
      body["sync_root_id"] = request.syncRootId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDelta",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_delta`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeltaResponse>(await this.execute(params, req, runtime), new $_model.ListDeltaResponse({}));
  }

  /**
   * Queries incremental information.
   * 
   * @param request - ListDeltaRequest
   * @returns ListDeltaResponse
   */
  async listDelta(request: $_model.ListDeltaRequest): Promise<$_model.ListDeltaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeltaWithOptions(request, headers, runtime);
  }

  /**
   * 列举 domain
   * 
   * @param request - ListDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: $_model.ListDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.parentDomainId)) {
      body["parent_domain_id"] = request.parentDomainId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["service_code"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainsResponse>(await this.execute(params, req, runtime), new $_model.ListDomainsResponse({}));
  }

  /**
   * 列举 domain
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: $_model.ListDomainsRequest): Promise<$_model.ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDomainsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of drives.
   * 
   * @param request - ListDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDriveResponse
   */
  async listDriveWithOptions(request: $_model.ListDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!$dara.isNull(request.ownerType)) {
      body["owner_type"] = request.ownerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDriveResponse>(await this.execute(params, req, runtime), new $_model.ListDriveResponse({}));
  }

  /**
   * Queries a list of drives.
   * 
   * @param request - ListDriveRequest
   * @returns ListDriveResponse
   */
  async listDrive(request: $_model.ListDriveRequest): Promise<$_model.ListDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDriveWithOptions(request, headers, runtime);
  }

  /**
   * Queries face-based groups.
   * 
   * @param request - ListFacegroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFacegroupsResponse
   */
  async listFacegroupsWithOptions(request: $_model.ListFacegroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFacegroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.remarks)) {
      body["remarks"] = request.remarks;
    }

    if (!$dara.isNull(request.returnTotalCount)) {
      body["return_total_count"] = request.returnTotalCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFacegroups",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/list_facegroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFacegroupsResponse>(await this.execute(params, req, runtime), new $_model.ListFacegroupsResponse({}));
  }

  /**
   * Queries face-based groups.
   * 
   * @param request - ListFacegroupsRequest
   * @returns ListFacegroupsResponse
   */
  async listFacegroups(request: $_model.ListFacegroupsRequest): Promise<$_model.ListFacegroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFacegroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of files and folders.
   * 
   * @param request - ListFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFileResponse
   */
  async listFileWithOptions(request: $_model.ListFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["order_direction"] = request.orderDirection;
    }

    if (!$dara.isNull(request.parentFileId)) {
      body["parent_file_id"] = request.parentFileId;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.thumbnailProcesses)) {
      body["thumbnail_processes"] = request.thumbnailProcesses;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFileResponse>(await this.execute(params, req, runtime), new $_model.ListFileResponse({}));
  }

  /**
   * Queries a list of files and folders.
   * 
   * @param request - ListFileRequest
   * @returns ListFileResponse
   */
  async listFile(request: $_model.ListFileRequest): Promise<$_model.ListFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFileWithOptions(request, headers, runtime);
  }

  /**
   * Queries groups.
   * 
   * @param request - ListGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupResponse
   */
  async listGroupWithOptions(request: $_model.ListGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupResponse>(await this.execute(params, req, runtime), new $_model.ListGroupResponse({}));
  }

  /**
   * Queries groups.
   * 
   * @param request - ListGroupRequest
   * @returns ListGroupResponse
   */
  async listGroup(request: $_model.ListGroupRequest): Promise<$_model.ListGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupWithOptions(request, headers, runtime);
  }

  /**
   * Queries the members of a group.
   * 
   * @param request - ListGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupMemberResponse
   */
  async listGroupMemberWithOptions(request: $_model.ListGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.memberType)) {
      body["member_type"] = request.memberType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupMember",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/list_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupMemberResponse>(await this.execute(params, req, runtime), new $_model.ListGroupMemberResponse({}));
  }

  /**
   * Queries the members of a group.
   * 
   * @param request - ListGroupMemberRequest
   * @returns ListGroupMemberResponse
   */
  async listGroupMember(request: $_model.ListGroupMemberRequest): Promise<$_model.ListGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupMemberWithOptions(request, headers, runtime);
  }

  /**
   * 列举用户或团队已分配的角色列表
   * 
   * @param request - ListIdentityRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdentityRoleResponse
   */
  async listIdentityRoleWithOptions(request: $_model.ListIdentityRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdentityRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdentityRole",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/role/list_identity_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIdentityRoleResponse>(await this.execute(params, req, runtime), new $_model.ListIdentityRoleResponse({}));
  }

  /**
   * 列举用户或团队已分配的角色列表
   * 
   * @param request - ListIdentityRoleRequest
   * @returns ListIdentityRoleResponse
   */
  async listIdentityRole(request: $_model.ListIdentityRoleRequest): Promise<$_model.ListIdentityRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIdentityRoleWithOptions(request, headers, runtime);
  }

  /**
   * Queries the mappings between entities and benefit packages. You can call this operation to query the benefit packages that are associated with a user.
   * 
   * @param request - ListIdentityToBenefitPkgMappingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdentityToBenefitPkgMappingResponse
   */
  async listIdentityToBenefitPkgMappingWithOptions(request: $_model.ListIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdentityToBenefitPkgMappingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    if (!$dara.isNull(request.includeExpired)) {
      body["include_expired"] = request.includeExpired;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new $_model.ListIdentityToBenefitPkgMappingResponse({}));
  }

  /**
   * Queries the mappings between entities and benefit packages. You can call this operation to query the benefit packages that are associated with a user.
   * 
   * @param request - ListIdentityToBenefitPkgMappingRequest
   * @returns ListIdentityToBenefitPkgMappingResponse
   */
  async listIdentityToBenefitPkgMapping(request: $_model.ListIdentityToBenefitPkgMappingRequest): Promise<$_model.ListIdentityToBenefitPkgMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  /**
   * Queries the drives of the current user.
   * 
   * @param request - ListMyDrivesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMyDrivesResponse
   */
  async listMyDrivesWithOptions(request: $_model.ListMyDrivesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMyDrivesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMyDrives",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/list_my_drives`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMyDrivesResponse>(await this.execute(params, req, runtime), new $_model.ListMyDrivesResponse({}));
  }

  /**
   * Queries the drives of the current user.
   * 
   * @param request - ListMyDrivesRequest
   * @returns ListMyDrivesResponse
   */
  async listMyDrives(request: $_model.ListMyDrivesRequest): Promise<$_model.ListMyDrivesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMyDrivesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the team drives that can be accessed by the authorized users.
   * 
   * @param request - ListMyGroupDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMyGroupDriveResponse
   */
  async listMyGroupDriveWithOptions(request: $_model.ListMyGroupDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMyGroupDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveName)) {
      body["drive_name"] = request.driveName;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMyGroupDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/list_my_group_drive`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMyGroupDriveResponse>(await this.execute(params, req, runtime), new $_model.ListMyGroupDriveResponse({}));
  }

  /**
   * Queries the team drives that can be accessed by the authorized users.
   * 
   * @param request - ListMyGroupDriveRequest
   * @returns ListMyGroupDriveResponse
   */
  async listMyGroupDrive(request: $_model.ListMyGroupDriveRequest): Promise<$_model.ListMyGroupDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMyGroupDriveWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of files that are shared with a user. You can call this operation to query a list of files in a personal drive on which a user is granted permissions.
   * 
   * @param request - ListReceivedFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReceivedFileResponse
   */
  async listReceivedFileWithOptions(request: $_model.ListReceivedFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListReceivedFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReceivedFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_received_file`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReceivedFileResponse>(await this.execute(params, req, runtime), new $_model.ListReceivedFileResponse({}));
  }

  /**
   * Queries a list of files that are shared with a user. You can call this operation to query a list of files in a personal drive on which a user is granted permissions.
   * 
   * @param request - ListReceivedFileRequest
   * @returns ListReceivedFileResponse
   */
  async listReceivedFile(request: $_model.ListReceivedFileRequest): Promise<$_model.ListReceivedFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listReceivedFileWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about files and folders in the recycle bin.
   * 
   * @param request - ListRecyclebinRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecyclebinResponse
   */
  async listRecyclebinWithOptions(request: $_model.ListRecyclebinRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecyclebinResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.thumbnailProcesses)) {
      body["thumbnail_processes"] = request.thumbnailProcesses;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecyclebin",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecyclebinResponse>(await this.execute(params, req, runtime), new $_model.ListRecyclebinResponse({}));
  }

  /**
   * Queries the information about files and folders in the recycle bin.
   * 
   * @param request - ListRecyclebinRequest
   * @returns ListRecyclebinResponse
   */
  async listRecyclebin(request: $_model.ListRecyclebinRequest): Promise<$_model.ListRecyclebinResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecyclebinWithOptions(request, headers, runtime);
  }

  /**
   * Queries the versions of a file.
   * 
   * @param request - ListRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRevisionResponse
   */
  async listRevisionWithOptions(request: $_model.ListRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRevisionResponse>(await this.execute(params, req, runtime), new $_model.ListRevisionResponse({}));
  }

  /**
   * Queries the versions of a file.
   * 
   * @param request - ListRevisionRequest
   * @returns ListRevisionResponse
   */
  async listRevision(request: $_model.ListRevisionRequest): Promise<$_model.ListRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRevisionWithOptions(request, headers, runtime);
  }

  /**
   * Queries shares.
   * 
   * @remarks
   * This operation is discontinued. To query shares, you can call the SearchShareLink operation.
   * 
   * @param request - ListShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListShareLinkResponse
   */
  async listShareLinkWithOptions(request: $_model.ListShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creator)) {
      body["creator"] = request.creator;
    }

    if (!$dara.isNull(request.includeCancelled)) {
      body["include_cancelled"] = request.includeCancelled;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["order_direction"] = request.orderDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListShareLinkResponse>(await this.execute(params, req, runtime), new $_model.ListShareLinkResponse({}));
  }

  /**
   * Queries shares.
   * 
   * @remarks
   * This operation is discontinued. To query shares, you can call the SearchShareLink operation.
   * 
   * @param request - ListShareLinkRequest
   * @returns ListShareLinkResponse
   */
  async listShareLink(request: $_model.ListShareLinkRequest): Promise<$_model.ListShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * Queries tags.
   * 
   * @remarks
   * You can call this operation to query the tags within the specified drive at a time. The top 2,000 tags of the images are returned.
   * 
   * @param request - ListTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsResponse
   */
  async listTagsWithOptions(request: $_model.ListTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTags",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/list_tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagsResponse>(await this.execute(params, req, runtime), new $_model.ListTagsResponse({}));
  }

  /**
   * Queries tags.
   * 
   * @remarks
   * You can call this operation to query the tags within the specified drive at a time. The top 2,000 tags of the images are returned.
   * 
   * @param request - ListTagsRequest
   * @returns ListTagsResponse
   */
  async listTags(request: $_model.ListTagsRequest): Promise<$_model.ListTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the file parts that are uploaded.
   * 
   * @param request - ListUploadedPartsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUploadedPartsResponse
   */
  async listUploadedPartsWithOptions(request: $_model.ListUploadedPartsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUploadedPartsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.partNumberMarker)) {
      body["part_number_marker"] = request.partNumberMarker;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.uploadId)) {
      body["upload_id"] = request.uploadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUploadedParts",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/list_uploaded_parts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUploadedPartsResponse>(await this.execute(params, req, runtime), new $_model.ListUploadedPartsResponse({}));
  }

  /**
   * Queries the file parts that are uploaded.
   * 
   * @param request - ListUploadedPartsRequest
   * @returns ListUploadedPartsResponse
   */
  async listUploadedParts(request: $_model.ListUploadedPartsRequest): Promise<$_model.ListUploadedPartsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUploadedPartsWithOptions(request, headers, runtime);
  }

  /**
   * Queries users.
   * 
   * @param request - ListUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserResponse
   */
  async listUserWithOptions(request: $_model.ListUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserResponse>(await this.execute(params, req, runtime), new $_model.ListUserResponse({}));
  }

  /**
   * Queries users.
   * 
   * @param request - ListUserRequest
   * @returns ListUserResponse
   */
  async listUser(request: $_model.ListUserRequest): Promise<$_model.ListUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserWithOptions(request, headers, runtime);
  }

  /**
   * Moves files or folders.
   * 
   * @param request - MoveFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveFileResponse
   */
  async moveFileWithOptions(request: $_model.MoveFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MoveFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkNameMode)) {
      body["check_name_mode"] = request.checkNameMode;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.toParentFileId)) {
      body["to_parent_file_id"] = request.toParentFileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/move`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveFileResponse>(await this.execute(params, req, runtime), new $_model.MoveFileResponse({}));
  }

  /**
   * Moves files or folders.
   * 
   * @param request - MoveFileRequest
   * @returns MoveFileResponse
   */
  async moveFile(request: $_model.MoveFileRequest): Promise<$_model.MoveFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.moveFileWithOptions(request, headers, runtime);
  }

  /**
   * 查询凌霄订单价格
   * 
   * @param request - QueryOrderPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrderPriceResponse
   */
  async queryOrderPriceWithOptions(request: $_model.QueryOrderPriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOrderPriceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["instance_id"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      body["order_type"] = request.orderType;
    }

    if (!$dara.isNull(request.package)) {
      body["package"] = request.package;
    }

    if (!$dara.isNull(request.period)) {
      body["period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["period_unit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    if (!$dara.isNull(request.userCount)) {
      body["user_count"] = request.userCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOrderPrice",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/query_order_price`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOrderPriceResponse>(await this.execute(params, req, runtime), new $_model.QueryOrderPriceResponse({}));
  }

  /**
   * 查询凌霄订单价格
   * 
   * @param request - QueryOrderPriceRequest
   * @returns QueryOrderPriceResponse
   */
  async queryOrderPrice(request: $_model.QueryOrderPriceRequest): Promise<$_model.QueryOrderPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryOrderPriceWithOptions(request, headers, runtime);
  }

  /**
   * 从人脸分组中的移除指定的文件
   * 
   * @param request - RemoveFaceGroupFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveFaceGroupFileResponse
   */
  async removeFaceGroupFileWithOptions(request: $_model.RemoveFaceGroupFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveFaceGroupFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.faceGroupId)) {
      body["face_group_id"] = request.faceGroupId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveFaceGroupFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/albums/unassign_facegroup_item`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveFaceGroupFileResponse>(await this.execute(params, req, runtime), new $_model.RemoveFaceGroupFileResponse({}));
  }

  /**
   * 从人脸分组中的移除指定的文件
   * 
   * @param request - RemoveFaceGroupFileRequest
   * @returns RemoveFaceGroupFileResponse
   */
  async removeFaceGroupFile(request: $_model.RemoveFaceGroupFileRequest): Promise<$_model.RemoveFaceGroupFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeFaceGroupFileWithOptions(request, headers, runtime);
  }

  /**
   * Removes a member from a group.
   * 
   * @param request - RemoveGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveGroupMemberResponse
   */
  async removeGroupMemberWithOptions(request: $_model.RemoveGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveGroupMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.memberId)) {
      body["member_id"] = request.memberId;
    }

    if (!$dara.isNull(request.memberType)) {
      body["member_type"] = request.memberType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveGroupMember",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/remove_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveGroupMemberResponse>(await this.execute(params, req, runtime), new $_model.RemoveGroupMemberResponse({}));
  }

  /**
   * Removes a member from a group.
   * 
   * @param request - RemoveGroupMemberRequest
   * @returns RemoveGroupMemberResponse
   */
  async removeGroupMember(request: $_model.RemoveGroupMemberRequest): Promise<$_model.RemoveGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeGroupMemberWithOptions(request, headers, runtime);
  }

  /**
   * 故事移除文件
   * 
   * @param request - RemoveStoryFilesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveStoryFilesResponse
   */
  async removeStoryFilesWithOptions(request: $_model.RemoveStoryFilesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveStoryFilesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveStoryFiles",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/remove_story_files`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveStoryFilesResponse>(await this.execute(params, req, runtime), new $_model.RemoveStoryFilesResponse({}));
  }

  /**
   * 故事移除文件
   * 
   * @param request - RemoveStoryFilesRequest
   * @returns RemoveStoryFilesResponse
   */
  async removeStoryFiles(request: $_model.RemoveStoryFilesRequest): Promise<$_model.RemoveStoryFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeStoryFilesWithOptions(request, headers, runtime);
  }

  /**
   * Restores a file or folder from the recycle bin.
   * 
   * @param request - RestoreFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreFileResponse
   */
  async restoreFileWithOptions(request: $_model.RestoreFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/restore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreFileResponse>(await this.execute(params, req, runtime), new $_model.RestoreFileResponse({}));
  }

  /**
   * Restores a file or folder from the recycle bin.
   * 
   * @param request - RestoreFileRequest
   * @returns RestoreFileResponse
   */
  async restoreFile(request: $_model.RestoreFileRequest): Promise<$_model.RestoreFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restoreFileWithOptions(request, headers, runtime);
  }

  /**
   * Restores a historical version of a file. You cannot restore the latest version of a file.
   * 
   * @param request - RestoreRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreRevisionResponse
   */
  async restoreRevisionWithOptions(request: $_model.RestoreRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/restore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreRevisionResponse>(await this.execute(params, req, runtime), new $_model.RestoreRevisionResponse({}));
  }

  /**
   * Restores a historical version of a file. You cannot restore the latest version of a file.
   * 
   * @param request - RestoreRevisionRequest
   * @returns RestoreRevisionResponse
   */
  async restoreRevision(request: $_model.RestoreRevisionRequest): Promise<$_model.RestoreRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restoreRevisionWithOptions(request, headers, runtime);
  }

  /**
   * Scans files.
   * 
   * @param request - ScanFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScanFileResponse
   */
  async scanFileWithOptions(request: $_model.ScanFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScanFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScanFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/scan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScanFileResponse>(await this.execute(params, req, runtime), new $_model.ScanFileResponse({}));
  }

  /**
   * Scans files.
   * 
   * @param request - ScanFileRequest
   * @returns ScanFileResponse
   */
  async scanFile(request: $_model.ScanFileRequest): Promise<$_model.ScanFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scanFileWithOptions(request, headers, runtime);
  }

  /**
   * Queries location-based groups based on specific locations.
   * 
   * @param request - SearchAddressGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAddressGroupsResponse
   */
  async searchAddressGroupsWithOptions(request: $_model.SearchAddressGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchAddressGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressLevel)) {
      body["address_level"] = request.addressLevel;
    }

    if (!$dara.isNull(request.addressNames)) {
      body["address_names"] = request.addressNames;
    }

    if (!$dara.isNull(request.brGeoPoint)) {
      body["br_geo_point"] = request.brGeoPoint;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.tlGeoPoint)) {
      body["tl_geo_point"] = request.tlGeoPoint;
    }

    if (!$dara.isNull(request.videoThumbnailProcess)) {
      body["video_thumbnail_process"] = request.videoThumbnailProcess;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchAddressGroups",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/search_address_groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchAddressGroupsResponse>(await this.execute(params, req, runtime), new $_model.SearchAddressGroupsResponse({}));
  }

  /**
   * Queries location-based groups based on specific locations.
   * 
   * @param request - SearchAddressGroupsRequest
   * @returns SearchAddressGroupsResponse
   */
  async searchAddressGroups(request: $_model.SearchAddressGroupsRequest): Promise<$_model.SearchAddressGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchAddressGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Search domain with specified attributes
   * 
   * @param request - SearchDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchDomainsResponse
   */
  async searchDomainsWithOptions(request: $_model.SearchDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchDomainsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchDomains",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchDomainsResponse>(await this.execute(params, req, runtime), new $_model.SearchDomainsResponse({}));
  }

  /**
   * Search domain with specified attributes
   * 
   * @param request - SearchDomainsRequest
   * @returns SearchDomainsResponse
   */
  async searchDomains(request: $_model.SearchDomainsRequest): Promise<$_model.SearchDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchDomainsWithOptions(request, headers, runtime);
  }

  /**
   * Queries drives.
   * 
   * @param request - SearchDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchDriveResponse
   */
  async searchDriveWithOptions(request: $_model.SearchDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveName)) {
      body["drive_name"] = request.driveName;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!$dara.isNull(request.ownerType)) {
      body["owner_type"] = request.ownerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchDriveResponse>(await this.execute(params, req, runtime), new $_model.SearchDriveResponse({}));
  }

  /**
   * Queries drives.
   * 
   * @param request - SearchDriveRequest
   * @returns SearchDriveResponse
   */
  async searchDrive(request: $_model.SearchDriveRequest): Promise<$_model.SearchDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchDriveWithOptions(request, headers, runtime);
  }

  /**
   * Searches for files.
   * 
   * @param request - SearchFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchFileResponse
   */
  async searchFileWithOptions(request: $_model.SearchFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fields)) {
      body["fields"] = request.fields;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.recursive)) {
      body["recursive"] = request.recursive;
    }

    if (!$dara.isNull(request.returnTotalCount)) {
      body["return_total_count"] = request.returnTotalCount;
    }

    if (!$dara.isNull(request.thumbnailProcesses)) {
      body["thumbnail_processes"] = request.thumbnailProcesses;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchFileResponse>(await this.execute(params, req, runtime), new $_model.SearchFileResponse({}));
  }

  /**
   * Searches for files.
   * 
   * @param request - SearchFileRequest
   * @returns SearchFileResponse
   */
  async searchFile(request: $_model.SearchFileRequest): Promise<$_model.SearchFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchFileWithOptions(request, headers, runtime);
  }

  /**
   * Queries share URLs.
   * 
   * @param request - SearchShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchShareLinkResponse
   */
  async searchShareLinkWithOptions(request: $_model.SearchShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creators)) {
      body["creators"] = request.creators;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["order_by"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["order_direction"] = request.orderDirection;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.returnTotalCount)) {
      body["return_total_count"] = request.returnTotalCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchShareLinkResponse>(await this.execute(params, req, runtime), new $_model.SearchShareLinkResponse({}));
  }

  /**
   * Queries share URLs.
   * 
   * @param request - SearchShareLinkRequest
   * @returns SearchShareLinkResponse
   */
  async searchShareLink(request: $_model.SearchShareLinkRequest): Promise<$_model.SearchShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * 获取相似图片聚类结果
   * 
   * @param request - SearchSimilarImageClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchSimilarImageClustersResponse
   */
  async searchSimilarImageClustersWithOptions(request: $_model.SearchSimilarImageClustersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchSimilarImageClustersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.imageThumbnailProcess)) {
      body["image_thumbnail_process"] = request.imageThumbnailProcess;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchSimilarImageClusters",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/query_similar_image_clusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchSimilarImageClustersResponse>(await this.execute(params, req, runtime), new $_model.SearchSimilarImageClustersResponse({}));
  }

  /**
   * 获取相似图片聚类结果
   * 
   * @param request - SearchSimilarImageClustersRequest
   * @returns SearchSimilarImageClustersResponse
   */
  async searchSimilarImageClusters(request: $_model.SearchSimilarImageClustersRequest): Promise<$_model.SearchSimilarImageClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchSimilarImageClustersWithOptions(request, headers, runtime);
  }

  /**
   * 查询故事列表
   * 
   * @param request - SearchStoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchStoriesResponse
   */
  async searchStoriesWithOptions(request: $_model.SearchStoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchStoriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coverImageThumbnailProcess)) {
      body["cover_image_thumbnail_process"] = request.coverImageThumbnailProcess;
    }

    if (!$dara.isNull(request.coverVideoThumbnailProcess)) {
      body["cover_video_thumbnail_process"] = request.coverVideoThumbnailProcess;
    }

    if (!$dara.isNull(request.createTimeRange)) {
      body["create_time_range"] = request.createTimeRange;
    }

    if (!$dara.isNull(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.faceGroupIds)) {
      body["face_group_ids"] = request.faceGroupIds;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.sort)) {
      body["sort"] = request.sort;
    }

    if (!$dara.isNull(request.storyEndTimeRange)) {
      body["story_end_time_range"] = request.storyEndTimeRange;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!$dara.isNull(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    if (!$dara.isNull(request.storyStartTimeRange)) {
      body["story_start_time_range"] = request.storyStartTimeRange;
    }

    if (!$dara.isNull(request.storyType)) {
      body["story_type"] = request.storyType;
    }

    if (!$dara.isNull(request.urlExpireSec)) {
      body["url_expire_sec"] = request.urlExpireSec;
    }

    if (!$dara.isNull(request.withEmptyStories)) {
      body["with_empty_stories"] = request.withEmptyStories;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchStories",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/find_stories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchStoriesResponse>(await this.execute(params, req, runtime), new $_model.SearchStoriesResponse({}));
  }

  /**
   * 查询故事列表
   * 
   * @param request - SearchStoriesRequest
   * @returns SearchStoriesResponse
   */
  async searchStories(request: $_model.SearchStoriesRequest): Promise<$_model.SearchStoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchStoriesWithOptions(request, headers, runtime);
  }

  /**
   * Searches for users.
   * 
   * @param request - SearchUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchUserResponse
   */
  async searchUserWithOptions(request: $_model.SearchUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.marker)) {
      body["marker"] = request.marker;
    }

    if (!$dara.isNull(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!$dara.isNull(request.nickNameForFuzzy)) {
      body["nick_name_for_fuzzy"] = request.nickNameForFuzzy;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.role)) {
      body["role"] = request.role;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.userName)) {
      body["user_name"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchUserResponse>(await this.execute(params, req, runtime), new $_model.SearchUserResponse({}));
  }

  /**
   * Searches for users.
   * 
   * @param request - SearchUserRequest
   * @returns SearchUserResponse
   */
  async searchUser(request: $_model.SearchUserRequest): Promise<$_model.SearchUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchUserWithOptions(request, headers, runtime);
  }

  /**
   * Generates an access token based on Open Authorization (OAuth) 2.0.
   * 
   * @remarks
   * For more information about how to access Drive and Photo Service from a web server application by using OAuth 2.0, visit [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications).
   * For more information about how to access Drive and Photo Service by using a JSON Web Token (JWT) application, visit [Access process for JWT applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/access-process-for-jwt-applications).
   * 
   * @param request - TokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TokenResponse
   */
  async tokenWithOptions(request: $_model.TokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assertion)) {
      body["assertion"] = request.assertion;
    }

    if (!$dara.isNull(request.clientId)) {
      body["client_id"] = request.clientId;
    }

    if (!$dara.isNull(request.clientSecret)) {
      body["client_secret"] = request.clientSecret;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.grantType)) {
      body["grant_type"] = request.grantType;
    }

    if (!$dara.isNull(request.redirectUri)) {
      body["redirect_uri"] = request.redirectUri;
    }

    if (!$dara.isNull(request.refreshToken)) {
      body["refresh_token"] = request.refreshToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Token",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/oauth/token`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TokenResponse>(await this.execute(params, req, runtime), new $_model.TokenResponse({}));
  }

  /**
   * Generates an access token based on Open Authorization (OAuth) 2.0.
   * 
   * @remarks
   * For more information about how to access Drive and Photo Service from a web server application by using OAuth 2.0, visit [OAuth 2.0 For Web Server Applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/oauth-2-0-access-process-for-web-server-applications).
   * For more information about how to access Drive and Photo Service by using a JSON Web Token (JWT) application, visit [Access process for JWT applications](https://www.alibabacloud.com/help/zh/pds/drive-and-photo-service-dev/user-guide/access-process-for-jwt-applications).
   * 
   * @param request - TokenRequest
   * @returns TokenResponse
   */
  async token(request: $_model.TokenRequest): Promise<$_model.TokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tokenWithOptions(request, headers, runtime);
  }

  /**
   * Moves a file or folder to the recycle bin.
   * 
   * @param request - TrashFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrashFileResponse
   */
  async trashFileWithOptions(request: $_model.TrashFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TrashFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrashFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/recyclebin/trash`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrashFileResponse>(await this.execute(params, req, runtime), new $_model.TrashFileResponse({}));
  }

  /**
   * Moves a file or folder to the recycle bin.
   * 
   * @param request - TrashFileRequest
   * @returns TrashFileResponse
   */
  async trashFile(request: $_model.TrashFileRequest): Promise<$_model.TrashFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.trashFileWithOptions(request, headers, runtime);
  }

  /**
   * Unlink Account Binding
   * 
   * @param request - UnLinkAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnLinkAccountResponse
   */
  async unLinkAccountWithOptions(request: $_model.UnLinkAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnLinkAccountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!$dara.isNull(request.identity)) {
      body["identity"] = request.identity;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnLinkAccount",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/account/unlink`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnLinkAccountResponse>(await this.execute(params, req, runtime), new $_model.UnLinkAccountResponse({}));
  }

  /**
   * Unlink Account Binding
   * 
   * @param request - UnLinkAccountRequest
   * @returns UnLinkAccountResponse
   */
  async unLinkAccount(request: $_model.UnLinkAccountRequest): Promise<$_model.UnLinkAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unLinkAccountWithOptions(request, headers, runtime);
  }

  /**
   * Update domain information.
   * 
   * @param request - UpdateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainResponse
   */
  async updateDomainWithOptions(request: $_model.UpdateDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainId)) {
      body["domain_id"] = request.domainId;
    }

    if (!$dara.isNull(request.domainName)) {
      body["domain_name"] = request.domainName;
    }

    if (!$dara.isNull(request.initDriveEnable)) {
      body["init_drive_enable"] = request.initDriveEnable;
    }

    if (!$dara.isNull(request.initDriveSize)) {
      body["init_drive_size"] = request.initDriveSize;
    }

    if (!$dara.isNull(request.publishedAppAccessStrategy)) {
      body["published_app_access_strategy"] = request.publishedAppAccessStrategy;
    }

    if (!$dara.isNull(request.sizeQuota)) {
      body["size_quota"] = request.sizeQuota;
    }

    if (!$dara.isNull(request.userCountQuota)) {
      body["user_count_quota"] = request.userCountQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomain",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/domain/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainResponse>(await this.execute(params, req, runtime), new $_model.UpdateDomainResponse({}));
  }

  /**
   * Update domain information.
   * 
   * @param request - UpdateDomainRequest
   * @returns UpdateDomainResponse
   */
  async updateDomain(request: $_model.UpdateDomainRequest): Promise<$_model.UpdateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDomainWithOptions(request, headers, runtime);
  }

  /**
   * Modifies a drive.
   * 
   * @param request - UpdateDriveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDriveResponse
   */
  async updateDriveWithOptions(request: $_model.UpdateDriveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDriveResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.driveName)) {
      body["drive_name"] = request.driveName;
    }

    if (!$dara.isNull(request.owner)) {
      body["owner"] = request.owner;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.totalSize)) {
      body["total_size"] = request.totalSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDrive",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/drive/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDriveResponse>(await this.execute(params, req, runtime), new $_model.UpdateDriveResponse({}));
  }

  /**
   * Modifies a drive.
   * 
   * @param request - UpdateDriveRequest
   * @returns UpdateDriveResponse
   */
  async updateDrive(request: $_model.UpdateDriveRequest): Promise<$_model.UpdateDriveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDriveWithOptions(request, headers, runtime);
  }

  /**
   * Updates a face-based group.
   * 
   * @param request - UpdateFacegroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFacegroupResponse
   */
  async updateFacegroupWithOptions(request: $_model.UpdateFacegroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFacegroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.groupCoverFaceId)) {
      body["group_cover_face_id"] = request.groupCoverFaceId;
    }

    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      body["group_name"] = request.groupName;
    }

    if (!$dara.isNull(request.remarks)) {
      body["remarks"] = request.remarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFacegroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/update_facegroup_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFacegroupResponse>(await this.execute(params, req, runtime), new $_model.UpdateFacegroupResponse({}));
  }

  /**
   * Updates a face-based group.
   * 
   * @param request - UpdateFacegroupRequest
   * @returns UpdateFacegroupResponse
   */
  async updateFacegroup(request: $_model.UpdateFacegroupRequest): Promise<$_model.UpdateFacegroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFacegroupWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the information about a file instead of the file data.
   * 
   * @param request - UpdateFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileResponse
   */
  async updateFileWithOptions(request: $_model.UpdateFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkNameMode)) {
      body["check_name_mode"] = request.checkNameMode;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.hidden)) {
      body["hidden"] = request.hidden;
    }

    if (!$dara.isNull(request.labels)) {
      body["labels"] = request.labels;
    }

    if (!$dara.isNull(request.localModifiedAt)) {
      body["local_modified_at"] = request.localModifiedAt;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.starred)) {
      body["starred"] = request.starred;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFile",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFileResponse>(await this.execute(params, req, runtime), new $_model.UpdateFileResponse({}));
  }

  /**
   * Modifies the information about a file instead of the file data.
   * 
   * @param request - UpdateFileRequest
   * @returns UpdateFileResponse
   */
  async updateFile(request: $_model.UpdateFileRequest): Promise<$_model.UpdateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFileWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the information about a group.
   * 
   * @param request - UpdateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(request: $_model.UpdateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      body["group_id"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      body["group_name"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/group/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGroupResponse>(await this.execute(params, req, runtime), new $_model.UpdateGroupResponse({}));
  }

  /**
   * Modifies the information about a group.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: $_model.UpdateGroupRequest): Promise<$_model.UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGroupWithOptions(request, headers, runtime);
  }

  /**
   * Updates the mapping between an entity and a benefit package. You can call this operation to associate a benefit package with a user.
   * 
   * @param request - UpdateIdentityToBenefitPkgMappingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIdentityToBenefitPkgMappingResponse
   */
  async updateIdentityToBenefitPkgMappingWithOptions(request: $_model.UpdateIdentityToBenefitPkgMappingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIdentityToBenefitPkgMappingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amount)) {
      body["amount"] = request.amount;
    }

    if (!$dara.isNull(request.benefitPkgId)) {
      body["benefit_pkg_id"] = request.benefitPkgId;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["expire_time"] = request.expireTime;
    }

    if (!$dara.isNull(request.identityId)) {
      body["identity_id"] = request.identityId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["identity_type"] = request.identityType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIdentityToBenefitPkgMapping",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/benefit/identity_to_benefit_pkg_mapping/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIdentityToBenefitPkgMappingResponse>(await this.execute(params, req, runtime), new $_model.UpdateIdentityToBenefitPkgMappingResponse({}));
  }

  /**
   * Updates the mapping between an entity and a benefit package. You can call this operation to associate a benefit package with a user.
   * 
   * @param request - UpdateIdentityToBenefitPkgMappingRequest
   * @returns UpdateIdentityToBenefitPkgMappingResponse
   */
  async updateIdentityToBenefitPkgMapping(request: $_model.UpdateIdentityToBenefitPkgMappingRequest): Promise<$_model.UpdateIdentityToBenefitPkgMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIdentityToBenefitPkgMappingWithOptions(request, headers, runtime);
  }

  /**
   * Updates the version information. You can call this operation to permanently retain a version or modify the description of a version. You can permanently retain up to 50 versions of a file.
   * 
   * @param request - UpdateRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRevisionResponse
   */
  async updateRevisionWithOptions(request: $_model.UpdateRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRevisionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.fileId)) {
      body["file_id"] = request.fileId;
    }

    if (!$dara.isNull(request.keepForever)) {
      body["keep_forever"] = request.keepForever;
    }

    if (!$dara.isNull(request.revisionDescription)) {
      body["revision_description"] = request.revisionDescription;
    }

    if (!$dara.isNull(request.revisionId)) {
      body["revision_id"] = request.revisionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRevision",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/revision/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRevisionResponse>(await this.execute(params, req, runtime), new $_model.UpdateRevisionResponse({}));
  }

  /**
   * Updates the version information. You can call this operation to permanently retain a version or modify the description of a version. You can permanently retain up to 50 versions of a file.
   * 
   * @param request - UpdateRevisionRequest
   * @returns UpdateRevisionResponse
   */
  async updateRevision(request: $_model.UpdateRevisionRequest): Promise<$_model.UpdateRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRevisionWithOptions(request, headers, runtime);
  }

  /**
   * Modifies a share link.
   * 
   * @param request - UpdateShareLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateShareLinkResponse
   */
  async updateShareLinkWithOptions(request: $_model.UpdateShareLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateShareLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.disableDownload)) {
      body["disable_download"] = request.disableDownload;
    }

    if (!$dara.isNull(request.disablePreview)) {
      body["disable_preview"] = request.disablePreview;
    }

    if (!$dara.isNull(request.disableSave)) {
      body["disable_save"] = request.disableSave;
    }

    if (!$dara.isNull(request.downloadCount)) {
      body["download_count"] = request.downloadCount;
    }

    if (!$dara.isNull(request.downloadLimit)) {
      body["download_limit"] = request.downloadLimit;
    }

    if (!$dara.isNull(request.expiration)) {
      body["expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.officeEditable)) {
      body["office_editable"] = request.officeEditable;
    }

    if (!$dara.isNull(request.previewCount)) {
      body["preview_count"] = request.previewCount;
    }

    if (!$dara.isNull(request.previewLimit)) {
      body["preview_limit"] = request.previewLimit;
    }

    if (!$dara.isNull(request.reportCount)) {
      body["report_count"] = request.reportCount;
    }

    if (!$dara.isNull(request.saveCount)) {
      body["save_count"] = request.saveCount;
    }

    if (!$dara.isNull(request.saveLimit)) {
      body["save_limit"] = request.saveLimit;
    }

    if (!$dara.isNull(request.shareId)) {
      body["share_id"] = request.shareId;
    }

    if (!$dara.isNull(request.shareName)) {
      body["share_name"] = request.shareName;
    }

    if (!$dara.isNull(request.sharePwd)) {
      body["share_pwd"] = request.sharePwd;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.videoPreviewCount)) {
      body["video_preview_count"] = request.videoPreviewCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateShareLink",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/share_link/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateShareLinkResponse>(await this.execute(params, req, runtime), new $_model.UpdateShareLinkResponse({}));
  }

  /**
   * Modifies a share link.
   * 
   * @param request - UpdateShareLinkRequest
   * @returns UpdateShareLinkResponse
   */
  async updateShareLink(request: $_model.UpdateShareLinkRequest): Promise<$_model.UpdateShareLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateShareLinkWithOptions(request, headers, runtime);
  }

  /**
   * 更新故事
   * 
   * @param request - UpdateStoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStoryResponse
   */
  async updateStoryWithOptions(request: $_model.UpdateStoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cover)) {
      body["cover"] = request.cover;
    }

    if (!$dara.isNull(request.customLabels)) {
      body["custom_labels"] = request.customLabels;
    }

    if (!$dara.isNull(request.driveId)) {
      body["drive_id"] = request.driveId;
    }

    if (!$dara.isNull(request.storyId)) {
      body["story_id"] = request.storyId;
    }

    if (!$dara.isNull(request.storyName)) {
      body["story_name"] = request.storyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStory",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/image/update_story`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStoryResponse>(await this.execute(params, req, runtime), new $_model.UpdateStoryResponse({}));
  }

  /**
   * 更新故事
   * 
   * @param request - UpdateStoryRequest
   * @returns UpdateStoryResponse
   */
  async updateStory(request: $_model.UpdateStoryRequest): Promise<$_model.UpdateStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateStoryWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the information about a user.
   * 
   * @param request - UpdateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: $_model.UpdateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatar)) {
      body["avatar"] = request.avatar;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.email)) {
      body["email"] = request.email;
    }

    if (!$dara.isNull(request.groupInfoList)) {
      body["group_info_list"] = request.groupInfoList;
    }

    if (!$dara.isNull(request.nickName)) {
      body["nick_name"] = request.nickName;
    }

    if (!$dara.isNull(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!$dara.isNull(request.role)) {
      body["role"] = request.role;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!$dara.isNull(request.userId)) {
      body["user_id"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/user/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserResponse>(await this.execute(params, req, runtime), new $_model.UpdateUserResponse({}));
  }

  /**
   * Modifies the information about a user.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserWithOptions(request, headers, runtime);
  }

  /**
   * Obtain the digital rights management (DRM) license of a video.
   * 
   * @param request - VideoDRMLicenseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoDRMLicenseResponse
   */
  async videoDRMLicenseWithOptions(request: $_model.VideoDRMLicenseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.VideoDRMLicenseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.drmType)) {
      body["drmType"] = request.drmType;
    }

    if (!$dara.isNull(request.licenseRequest)) {
      body["licenseRequest"] = request.licenseRequest;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VideoDRMLicense",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/v2/file/video_drm_license`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.VideoDRMLicenseResponse>(await this.execute(params, req, runtime), new $_model.VideoDRMLicenseResponse({}));
  }

  /**
   * Obtain the digital rights management (DRM) license of a video.
   * 
   * @param request - VideoDRMLicenseRequest
   * @returns VideoDRMLicenseResponse
   */
  async videoDRMLicense(request: $_model.VideoDRMLicenseRequest): Promise<$_model.VideoDRMLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoDRMLicenseWithOptions(request, headers, runtime);
  }

}
