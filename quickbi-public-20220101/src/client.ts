// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDataLevelPermissionRuleUsersRequest extends $tea.Model {
  addUserModel?: string;
  static names(): { [key: string]: string } {
    return {
      addUserModel: 'AddUserModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addUserModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataLevelPermissionRuleUsersResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataLevelPermissionRuleUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDataLevelPermissionRuleUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDataLevelPermissionRuleUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataLevelPermissionWhiteListRequest extends $tea.Model {
  cubeId?: string;
  operateType?: string;
  ruleType?: string;
  targetIds?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      operateType: 'OperateType',
      ruleType: 'RuleType',
      targetIds: 'TargetIds',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      operateType: 'string',
      ruleType: 'string',
      targetIds: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataLevelPermissionWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataLevelPermissionWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDataLevelPermissionWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDataLevelPermissionWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShareReportRequest extends $tea.Model {
  authPoint?: number;
  expireDate?: number;
  shareToId?: string;
  shareToType?: number;
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      authPoint: 'AuthPoint',
      expireDate: 'ExpireDate',
      shareToId: 'ShareToId',
      shareToType: 'ShareToType',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPoint: 'number',
      expireDate: 'number',
      shareToId: 'string',
      shareToType: 'number',
      worksId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShareReportResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShareReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddShareReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddShareReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserRequest extends $tea.Model {
  accountName?: string;
  adminUser?: boolean;
  authAdminUser?: boolean;
  nickName?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      nickName: 'NickName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      nickName: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserResponseBody extends $tea.Model {
  requestId?: string;
  result?: AddUserResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: AddUserResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberRequest extends $tea.Model {
  userGroupId?: string;
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddUserGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserGroupMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMembersRequest extends $tea.Model {
  userGroupIds?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMembersResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddUserGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserTagMetaRequest extends $tea.Model {
  tagDescription?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDescription: 'TagDescription',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDescription: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserTagMetaResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserTagMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddUserTagMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserTagMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToWorkspaceRequest extends $tea.Model {
  roleId?: number;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToWorkspaceResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddUserToWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserToWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceUsersRequest extends $tea.Model {
  roleId?: number;
  userIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      userIds: 'UserIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      userIds: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceUsersResponseBody extends $tea.Model {
  requestId?: string;
  result?: AddWorkspaceUsersResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: AddWorkspaceUsersResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddWorkspaceUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddWorkspaceUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllotDatasetAccelerationTaskRequest extends $tea.Model {
  cubeId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllotDatasetAccelerationTaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllotDatasetAccelerationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AllotDatasetAccelerationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllotDatasetAccelerationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeMenuRequest extends $tea.Model {
  authPointsValue?: number;
  dataPortalId?: string;
  menuIds?: string;
  userGroupIds?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      authPointsValue: 'AuthPointsValue',
      dataPortalId: 'DataPortalId',
      menuIds: 'MenuIds',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPointsValue: 'number',
      dataPortalId: 'string',
      menuIds: 'string',
      userGroupIds: 'string',
      userIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeMenuResponseBody extends $tea.Model {
  requestId?: string;
  result?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeMenuResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthorizeMenuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthorizeMenuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersRequest extends $tea.Model {
  feishuUsers?: string;
  isAdmin?: boolean;
  isAuthAdmin?: boolean;
  userGroupIds?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      feishuUsers: 'FeishuUsers',
      isAdmin: 'IsAdmin',
      isAuthAdmin: 'IsAuthAdmin',
      userGroupIds: 'UserGroupIds',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feishuUsers: 'string',
      isAdmin: 'boolean',
      isAuthAdmin: 'boolean',
      userGroupIds: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponseBody extends $tea.Model {
  requestId?: string;
  result?: BatchAddFeishuUsersResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: BatchAddFeishuUsersResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchAddFeishuUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchAddFeishuUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAuthorizationMenuRequest extends $tea.Model {
  dataPortalId?: string;
  menuIds?: string;
  userGroupIds?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
      menuIds: 'MenuIds',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
      menuIds: 'string',
      userGroupIds: 'string',
      userIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAuthorizationMenuResponseBody extends $tea.Model {
  requestId?: string;
  result?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAuthorizationMenuResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelAuthorizationMenuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelAuthorizationMenuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCollectionRequest extends $tea.Model {
  userId?: string;
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      worksId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCollectionResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCollectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelCollectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelCollectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReportShareRequest extends $tea.Model {
  reportId?: string;
  shareToIds?: string;
  shareToType?: number;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      shareToIds: 'ShareToIds',
      shareToType: 'ShareToType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      shareToIds: 'string',
      shareToType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReportShareResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelReportShareResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelReportShareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelReportShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVisibilityModelRequest extends $tea.Model {
  dataPortalId?: string;
  menuIds?: string;
  showOnlyWithAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
      menuIds: 'MenuIds',
      showOnlyWithAccess: 'ShowOnlyWithAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
      menuIds: 'string',
      showOnlyWithAccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVisibilityModelResponseBody extends $tea.Model {
  requestId?: string;
  result?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeVisibilityModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeVisibilityModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeVisibilityModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckReadableRequest extends $tea.Model {
  userId?: string;
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      worksId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckReadableResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckReadableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckReadableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckReadableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketRequest extends $tea.Model {
  accountName?: string;
  accountType?: number;
  cmptId?: string;
  expireTime?: number;
  globalParam?: string;
  ticketNum?: number;
  userId?: string;
  watermarkParam?: string;
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      cmptId: 'CmptId',
      expireTime: 'ExpireTime',
      globalParam: 'GlobalParam',
      ticketNum: 'TicketNum',
      userId: 'UserId',
      watermarkParam: 'WatermarkParam',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'number',
      cmptId: 'string',
      expireTime: 'number',
      globalParam: 'string',
      ticketNum: 'number',
      userId: 'string',
      watermarkParam: 'string',
      worksId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequest extends $tea.Model {
  parentUserGroupId?: string;
  userGroupDescription?: string;
  userGroupId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      parentUserGroupId: 'ParentUserGroupId',
      userGroupDescription: 'UserGroupDescription',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentUserGroupId: 'string',
      userGroupDescription: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayTicketExpireTimeRequest extends $tea.Model {
  expireTime?: number;
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayTicketExpireTimeResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayTicketExpireTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DelayTicketExpireTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DelayTicketExpireTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelPermissionRuleUsersRequest extends $tea.Model {
  deleteUserModel?: string;
  static names(): { [key: string]: string } {
    return {
      deleteUserModel: 'DeleteUserModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteUserModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelPermissionRuleUsersResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelPermissionRuleUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDataLevelPermissionRuleUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataLevelPermissionRuleUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelRuleConfigRequest extends $tea.Model {
  cubeId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelRuleConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataLevelRuleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDataLevelRuleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataLevelRuleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTicketRequest extends $tea.Model {
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTicketResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  transferUserId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      transferUserId: 'TransferUserId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferUserId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserFromWorkspaceRequest extends $tea.Model {
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserFromWorkspaceResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserFromWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserFromWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserFromWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupRequest extends $tea.Model {
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMemberRequest extends $tea.Model {
  userGroupId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMemberResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserGroupMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMembersRequest extends $tea.Model {
  userGroupIds?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMembersResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserTagMetaRequest extends $tea.Model {
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserTagMetaResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserTagMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserTagMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserTagMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupInfoRequest extends $tea.Model {
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetUserGroupInfoResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetUserGroupInfoResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserGroupInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserGroupInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceRequest extends $tea.Model {
  keyWord?: string;
  pageNum?: number;
  pageSize?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      pageNum: 'number',
      pageSize: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListApiDatasourceResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListApiDatasourceResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListApiDatasourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApiDatasourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByUserGroupIdRequest extends $tea.Model {
  userGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByUserGroupIdResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListByUserGroupIdResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListByUserGroupIdResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByUserGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListByUserGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListByUserGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListCollectionsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCollectionsResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCollectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCollectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCubeDataLevelPermissionConfigRequest extends $tea.Model {
  cubeId?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCubeDataLevelPermissionConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCubeDataLevelPermissionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCubeDataLevelPermissionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCubeDataLevelPermissionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataLevelPermissionWhiteListRequest extends $tea.Model {
  cubeId?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataLevelPermissionWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDataLevelPermissionWhiteListResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListDataLevelPermissionWhiteListResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataLevelPermissionWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDataLevelPermissionWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataLevelPermissionWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFavoriteReportsRequest extends $tea.Model {
  keyword?: string;
  pageSize?: number;
  treeType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageSize: 'PageSize',
      treeType: 'TreeType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageSize: 'number',
      treeType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFavoriteReportsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListFavoriteReportsResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListFavoriteReportsResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFavoriteReportsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFavoriteReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFavoriteReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationRequest extends $tea.Model {
  dataPortalId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListPortalMenuAuthorizationResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListPortalMenuAuthorizationResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPortalMenuAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPortalMenuAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenusRequest extends $tea.Model {
  dataPortalId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPortalId: 'DataPortalId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPortalId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenusResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPortalMenusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPortalMenusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsRequest extends $tea.Model {
  keyword?: string;
  offsetDay?: number;
  pageSize?: number;
  queryMode?: string;
  treeType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      offsetDay: 'OffsetDay',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
      treeType: 'TreeType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      offsetDay: 'number',
      pageSize: 'number',
      queryMode: 'string',
      treeType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListRecentViewReportsResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListRecentViewReportsResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRecentViewReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRecentViewReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedReportsRequest extends $tea.Model {
  keyword?: string;
  pageSize?: number;
  treeType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageSize: 'PageSize',
      treeType: 'TreeType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageSize: 'number',
      treeType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedReportsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListSharedReportsResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListSharedReportsResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedReportsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSharedReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSharedReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsByUserIdRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsByUserIdResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListUserGroupsByUserIdResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListUserGroupsByUserIdResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsByUserIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserGroupsByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserGroupsByUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiDatasourceParametersRequest extends $tea.Model {
  apiId?: string;
  parameters?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      parameters: 'Parameters',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      parameters: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiDatasourceParametersResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiDatasourceParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyApiDatasourceParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyApiDatasourceParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryComponentPerformanceRequest extends $tea.Model {
  costTimeAvgMin?: number;
  pageNum?: number;
  pageSize?: number;
  queryType?: string;
  reportId?: string;
  resourceType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      costTimeAvgMin: 'CostTimeAvgMin',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      reportId: 'ReportId',
      resourceType: 'ResourceType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTimeAvgMin: 'number',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'string',
      reportId: 'string',
      resourceType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryComponentPerformanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryComponentPerformanceResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryComponentPerformanceResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryComponentPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryComponentPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryComponentPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationRequest extends $tea.Model {
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryCubeOptimizationResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryCubeOptimizationResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCubeOptimizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCubeOptimizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubePerformanceRequest extends $tea.Model {
  costTimeAvgMin?: number;
  cubeId?: string;
  pageNum?: number;
  pageSize?: number;
  queryType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      costTimeAvgMin: 'CostTimeAvgMin',
      cubeId: 'CubeId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTimeAvgMin: 'number',
      cubeId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubePerformanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryCubePerformanceResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryCubePerformanceResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubePerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCubePerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCubePerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceRequest extends $tea.Model {
  apiId?: string;
  conditions?: string;
  returnFields?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      conditions: 'Conditions',
      returnFields: 'ReturnFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      conditions: 'string',
      returnFields: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryDataServiceResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDataServiceResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDataServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDataServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetDetailInfoRequest extends $tea.Model {
  datasetId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetDetailInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetDetailInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDatasetDetailInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDatasetDetailInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoRequest extends $tea.Model {
  datasetId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryDatasetInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDatasetInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDatasetInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDatasetInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListRequest extends $tea.Model {
  directoryId?: string;
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  withChildren?: boolean;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      withChildren: 'WithChildren',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      withChildren: 'boolean',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryDatasetListResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDatasetListResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDatasetListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDatasetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSwitchInfoRequest extends $tea.Model {
  cubeId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSwitchInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryDatasetSwitchInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDatasetSwitchInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSwitchInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDatasetSwitchInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDatasetSwitchInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryEmbeddedInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryEmbeddedInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryEmbeddedInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEmbeddedInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedStatusRequest extends $tea.Model {
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      worksId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedStatusResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryEmbeddedStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEmbeddedStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListRequest extends $tea.Model {
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryOrganizationWorkspaceListResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryOrganizationWorkspaceListResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrganizationWorkspaceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryOrganizationWorkspaceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryReadableResourcesListByUserIdResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryReadableResourcesListByUserIdResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryReadableResourcesListByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryReadableResourcesListByUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReportPerformanceRequest extends $tea.Model {
  costTimeAvgMin?: number;
  pageNum?: number;
  pageSize?: number;
  queryType?: string;
  reportId?: string;
  resourceType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      costTimeAvgMin: 'CostTimeAvgMin',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      reportId: 'ReportId',
      resourceType: 'ResourceType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTimeAvgMin: 'number',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'string',
      reportId: 'string',
      resourceType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReportPerformanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryReportPerformanceResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryReportPerformanceResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReportPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryReportPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryReportPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShareListRequest extends $tea.Model {
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShareListResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryShareListResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryShareListResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShareListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryShareListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryShareListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySharesToUserListRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySharesToUserListResponseBody extends $tea.Model {
  requestId?: string;
  result?: QuerySharesToUserListResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QuerySharesToUserListResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySharesToUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySharesToUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySharesToUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketInfoRequest extends $tea.Model {
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryTicketInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryTicketInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTicketInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTicketInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupListByParentIdRequest extends $tea.Model {
  parentUserGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      parentUserGroupId: 'ParentUserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentUserGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupListByParentIdResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryUserGroupListByParentIdResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryUserGroupListByParentIdResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupListByParentIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserGroupListByParentIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserGroupListByParentIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupMemberRequest extends $tea.Model {
  keyword?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupMemberResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryUserGroupMemberResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryUserGroupMemberResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserGroupMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserGroupMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByAccountRequest extends $tea.Model {
  account?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByAccountResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryUserInfoByAccountResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryUserInfoByAccountResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserInfoByAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserInfoByAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByUserIdRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByUserIdResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryUserInfoByUserIdResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryUserInfoByUserIdResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByUserIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserInfoByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserInfoByUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListRequest extends $tea.Model {
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryUserListResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryUserListResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleInfoInWorkspaceRequest extends $tea.Model {
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleInfoInWorkspaceResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryUserRoleInfoInWorkspaceResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryUserRoleInfoInWorkspaceResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleInfoInWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserRoleInfoInWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserRoleInfoInWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagMetaListResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryUserTagMetaListResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryUserTagMetaListResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagMetaListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserTagMetaListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserTagMetaListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagValueListRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagValueListResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryUserTagValueListResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryUserTagValueListResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagValueListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserTagValueListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryUserTagValueListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksRequest extends $tea.Model {
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      worksId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryWorksResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryWorksResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryWorksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWorksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipRequest extends $tea.Model {
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      worksId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryWorksBloodRelationshipResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryWorksBloodRelationshipResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryWorksBloodRelationshipResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWorksBloodRelationshipResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  status?: number;
  thirdPartAuthFlag?: number;
  worksType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      worksType: 'WorksType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      status: 'number',
      thirdPartAuthFlag: 'number',
      worksType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryWorksByOrganizationResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryWorksByOrganizationResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryWorksByOrganizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWorksByOrganizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByWorkspaceRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  status?: number;
  thirdPartAuthFlag?: number;
  worksType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      worksType: 'WorksType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      status: 'number',
      thirdPartAuthFlag: 'number',
      worksType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByWorkspaceResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryWorksByWorkspaceResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryWorksByWorkspaceResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryWorksByWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWorksByWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListRequest extends $tea.Model {
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponseBody extends $tea.Model {
  requestId?: string;
  result?: QueryWorkspaceUserListResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryWorkspaceUserListResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryWorkspaceUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryWorkspaceUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultCallbackRequest extends $tea.Model {
  applicationId?: string;
  handleReason?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      handleReason: 'HandleReason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      handleReason: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultCallbackResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResultCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResultCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResultCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveFavoritesRequest extends $tea.Model {
  userId?: string;
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      worksId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveFavoritesResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveFavoritesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveFavoritesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveFavoritesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionExtraConfigRequest extends $tea.Model {
  cubeId?: string;
  missHitPolicy?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      missHitPolicy: 'MissHitPolicy',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      missHitPolicy: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionExtraConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionExtraConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDataLevelPermissionExtraConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDataLevelPermissionExtraConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionRuleConfigRequest extends $tea.Model {
  ruleModel?: string;
  static names(): { [key: string]: string } {
    return {
      ruleModel: 'RuleModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionRuleConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionRuleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDataLevelPermissionRuleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDataLevelPermissionRuleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionWhiteListRequest extends $tea.Model {
  whiteListModel?: string;
  static names(): { [key: string]: string } {
    return {
      whiteListModel: 'WhiteListModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteListModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataLevelPermissionWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDataLevelPermissionWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDataLevelPermissionWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataLevelPermissionStatusRequest extends $tea.Model {
  cubeId?: string;
  isOpen?: number;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      isOpen: 'IsOpen',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      isOpen: 'number',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataLevelPermissionStatusResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataLevelPermissionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDataLevelPermissionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDataLevelPermissionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEmbeddedStatusRequest extends $tea.Model {
  thirdPartAuthFlag?: boolean;
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdPartAuthFlag: 'boolean',
      worksId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEmbeddedStatusResponseBody extends $tea.Model {
  requestId?: string;
  result?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEmbeddedStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEmbeddedStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEmbeddedStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketNumRequest extends $tea.Model {
  ticket?: string;
  ticketNum?: number;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
      ticketNum: 'TicketNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
      ticketNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketNumResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTicketNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTicketNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  adminUser?: boolean;
  authAdminUser?: boolean;
  nickName?: string;
  userId?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      nickName: 'NickName',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      nickName: 'string',
      userId: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequest extends $tea.Model {
  userGroupDescription?: string;
  userGroupId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupDescription: 'UserGroupDescription',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupDescription: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagMetaRequest extends $tea.Model {
  tagDescription?: string;
  tagId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDescription: 'TagDescription',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDescription: 'string',
      tagId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagMetaResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUserTagMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserTagMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagValueRequest extends $tea.Model {
  tagId?: string;
  tagValue?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagValue: 'TagValue',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
      tagValue: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagValueResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserTagValueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUserTagValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserTagValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUserRoleRequest extends $tea.Model {
  roleId?: number;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUserRoleResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUserRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateWorkspaceUserRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkspaceUserRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUsersRoleRequest extends $tea.Model {
  roleId?: number;
  userIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      userIds: 'UserIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      userIds: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUsersRoleResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateWorkspaceUsersRoleResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateWorkspaceUsersRoleResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUsersRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateWorkspaceUsersRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkspaceUsersRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawAllUserGroupsRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawAllUserGroupsResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawAllUserGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: WithdrawAllUserGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WithdrawAllUserGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserResponseBodyResult extends $tea.Model {
  accountName?: string;
  adminUser?: boolean;
  authAdminUser?: boolean;
  nickName?: string;
  userId?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      nickName: 'NickName',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      nickName: 'string',
      userId: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceUsersResponseBodyResult extends $tea.Model {
  failure?: number;
  failureDetail?: { [key: string]: any };
  success?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failure: 'Failure',
      failureDetail: 'FailureDetail',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failure: 'number',
      failureDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos extends $tea.Model {
  code?: string;
  codeDesc?: string;
  input?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeDesc: 'CodeDesc',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeDesc: 'string',
      input: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponseBodyResultFailResults extends $tea.Model {
  failInfos?: BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos[];
  static names(): { [key: string]: string } {
    return {
      failInfos: 'FailInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failInfos: { 'type': 'array', 'itemType': BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddFeishuUsersResponseBodyResult extends $tea.Model {
  failCount?: number;
  failResults?: BatchAddFeishuUsersResponseBodyResultFailResults[];
  okCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      failResults: 'FailResults',
      okCount: 'OkCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      failResults: { 'type': 'array', 'itemType': BatchAddFeishuUsersResponseBodyResultFailResults },
      okCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupInfoResponseBodyResult extends $tea.Model {
  createTime?: string;
  createUser?: string;
  identifiedPath?: string;
  modifiedTime?: string;
  modifyUser?: string;
  parentUsergroupId?: string;
  usergroupDesc?: string;
  usergroupId?: string;
  usergroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      identifiedPath: 'IdentifiedPath',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      parentUsergroupId: 'ParentUsergroupId',
      usergroupDesc: 'UsergroupDesc',
      usergroupId: 'UsergroupId',
      usergroupName: 'UsergroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      identifiedPath: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      parentUsergroupId: 'string',
      usergroupDesc: 'string',
      usergroupId: 'string',
      usergroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceResponseBodyResultData extends $tea.Model {
  apiId?: string;
  body?: string;
  dataSize?: number;
  dateUpdateTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  jobId?: string;
  parameters?: string;
  showName?: string;
  statusType?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      body: 'Body',
      dataSize: 'DataSize',
      dateUpdateTime: 'DateUpdateTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      jobId: 'JobId',
      parameters: 'Parameters',
      showName: 'ShowName',
      statusType: 'StatusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      body: 'string',
      dataSize: 'number',
      dateUpdateTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      jobId: 'string',
      parameters: 'string',
      showName: 'string',
      statusType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceResponseBodyResult extends $tea.Model {
  data?: ListApiDatasourceResponseBodyResultData[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListApiDatasourceResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByUserGroupIdResponseBodyResultUserGroupModels extends $tea.Model {
  createTime?: string;
  createUser?: string;
  identifiedPath?: string;
  modifiedTime?: string;
  modifyUser?: string;
  parentUsergroupId?: string;
  usergroupDesc?: string;
  usergroupId?: string;
  usergroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      identifiedPath: 'IdentifiedPath',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      parentUsergroupId: 'ParentUsergroupId',
      usergroupDesc: 'UsergroupDesc',
      usergroupId: 'UsergroupId',
      usergroupName: 'UsergroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      identifiedPath: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      parentUsergroupId: 'string',
      usergroupDesc: 'string',
      usergroupId: 'string',
      usergroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListByUserGroupIdResponseBodyResult extends $tea.Model {
  failedUserGroupIds?: string[];
  userGroupModels?: ListByUserGroupIdResponseBodyResultUserGroupModels[];
  static names(): { [key: string]: string } {
    return {
      failedUserGroupIds: 'FailedUserGroupIds',
      userGroupModels: 'UserGroupModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUserGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupModels: { 'type': 'array', 'itemType': ListByUserGroupIdResponseBodyResultUserGroupModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionsResponseBodyResult extends $tea.Model {
  favoriteId?: number;
  ownerId?: string;
  worksId?: string;
  worksName?: string;
  worksType?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favoriteId: 'FavoriteId',
      ownerId: 'OwnerId',
      worksId: 'WorksId',
      worksName: 'WorksName',
      worksType: 'WorksType',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favoriteId: 'number',
      ownerId: 'string',
      worksId: 'string',
      worksName: 'string',
      worksType: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataLevelPermissionWhiteListResponseBodyResultUsersModel extends $tea.Model {
  userGroups?: string[];
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroups: 'UserGroups',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroups: { 'type': 'array', 'itemType': 'string' },
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataLevelPermissionWhiteListResponseBodyResult extends $tea.Model {
  cubeId?: string;
  ruleType?: string;
  usersModel?: ListDataLevelPermissionWhiteListResponseBodyResultUsersModel;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      ruleType: 'RuleType',
      usersModel: 'UsersModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      ruleType: 'string',
      usersModel: ListDataLevelPermissionWhiteListResponseBodyResultUsersModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFavoriteReportsResponseBodyResultData extends $tea.Model {
  favorite?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  hasEditAuth?: boolean;
  hasViewAuth?: boolean;
  name?: string;
  ownerName?: string;
  ownerNum?: string;
  publishStatus?: number;
  treeId?: string;
  type?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favorite: 'Favorite',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasEditAuth: 'HasEditAuth',
      hasViewAuth: 'HasViewAuth',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerNum: 'OwnerNum',
      publishStatus: 'PublishStatus',
      treeId: 'TreeId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favorite: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasEditAuth: 'boolean',
      hasViewAuth: 'boolean',
      name: 'string',
      ownerName: 'string',
      ownerNum: 'string',
      publishStatus: 'number',
      treeId: 'string',
      type: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFavoriteReportsResponseBodyResult extends $tea.Model {
  data?: ListFavoriteReportsResponseBodyResultData[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListFavoriteReportsResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationResponseBodyResultReceivers extends $tea.Model {
  receiverId?: string;
  receiverType?: number;
  static names(): { [key: string]: string } {
    return {
      receiverId: 'ReceiverId',
      receiverType: 'ReceiverType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiverId: 'string',
      receiverType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationResponseBodyResult extends $tea.Model {
  menuId?: string;
  receivers?: ListPortalMenuAuthorizationResponseBodyResultReceivers[];
  showOnlyWithAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      menuId: 'MenuId',
      receivers: 'Receivers',
      showOnlyWithAccess: 'ShowOnlyWithAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      menuId: 'string',
      receivers: { 'type': 'array', 'itemType': ListPortalMenuAuthorizationResponseBodyResultReceivers },
      showOnlyWithAccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsResponseBodyResultData extends $tea.Model {
  favorite?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  hasEditAuth?: boolean;
  hasViewAuth?: boolean;
  latestViewTime?: string;
  name?: string;
  ownerName?: string;
  ownerNum?: string;
  publishStatus?: number;
  treeId?: string;
  type?: string;
  viewCount?: number;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favorite: 'Favorite',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasEditAuth: 'HasEditAuth',
      hasViewAuth: 'HasViewAuth',
      latestViewTime: 'LatestViewTime',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerNum: 'OwnerNum',
      publishStatus: 'PublishStatus',
      treeId: 'TreeId',
      type: 'Type',
      viewCount: 'ViewCount',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favorite: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasEditAuth: 'boolean',
      hasViewAuth: 'boolean',
      latestViewTime: 'string',
      name: 'string',
      ownerName: 'string',
      ownerNum: 'string',
      publishStatus: 'number',
      treeId: 'string',
      type: 'string',
      viewCount: 'number',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentViewReportsResponseBodyResult extends $tea.Model {
  attention?: string;
  data?: ListRecentViewReportsResponseBodyResultData[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      attention: 'Attention',
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attention: 'string',
      data: { 'type': 'array', 'itemType': ListRecentViewReportsResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedReportsResponseBodyResultData extends $tea.Model {
  favorite?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  hasEditAuth?: boolean;
  hasViewAuth?: boolean;
  name?: string;
  ownerName?: string;
  ownerNum?: string;
  publishStatus?: number;
  treeId?: string;
  type?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favorite: 'Favorite',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasEditAuth: 'HasEditAuth',
      hasViewAuth: 'HasViewAuth',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerNum: 'OwnerNum',
      publishStatus: 'PublishStatus',
      treeId: 'TreeId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      favorite: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasEditAuth: 'boolean',
      hasViewAuth: 'boolean',
      name: 'string',
      ownerName: 'string',
      ownerNum: 'string',
      publishStatus: 'number',
      treeId: 'string',
      type: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedReportsResponseBodyResult extends $tea.Model {
  data?: ListSharedReportsResponseBodyResultData[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSharedReportsResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsByUserIdResponseBodyResult extends $tea.Model {
  createTime?: string;
  createUser?: string;
  identifiedPath?: string;
  modifiedTime?: string;
  modifyUser?: string;
  parentUsergroupId?: string;
  usergroupDesc?: string;
  usergroupId?: string;
  usergroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      identifiedPath: 'IdentifiedPath',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      parentUsergroupId: 'ParentUsergroupId',
      usergroupDesc: 'UsergroupDesc',
      usergroupId: 'UsergroupId',
      usergroupName: 'UsergroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      identifiedPath: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      parentUsergroupId: 'string',
      usergroupDesc: 'string',
      usergroupId: 'string',
      usergroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryComponentPerformanceResponseBodyResult extends $tea.Model {
  cacheCostTimeAvg?: number;
  cacheQueryCount?: number;
  componentId?: string;
  componentName?: string;
  costTimeAvg?: number;
  queryCount?: number;
  queryCountAvg?: number;
  queryOverFivePercentNum?: number;
  queryOverFiveSecPercent?: string;
  queryOverTenSecPercent?: string;
  queryOverTenSecPercentNum?: number;
  queryTimeoutCount?: number;
  queryTimeoutCountPercent?: number;
  quickIndexCostTimeAvg?: number;
  quickIndexQueryCount?: number;
  repeatQueryPercent?: string;
  repeatQueryPercentNum?: number;
  repeatSqlQueryCount?: number;
  repeatSqlQueryPercent?: string;
  reportId?: string;
  reportName?: string;
  reportType?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCostTimeAvg: 'CacheCostTimeAvg',
      cacheQueryCount: 'CacheQueryCount',
      componentId: 'ComponentId',
      componentName: 'ComponentName',
      costTimeAvg: 'CostTimeAvg',
      queryCount: 'QueryCount',
      queryCountAvg: 'QueryCountAvg',
      queryOverFivePercentNum: 'QueryOverFivePercentNum',
      queryOverFiveSecPercent: 'QueryOverFiveSecPercent',
      queryOverTenSecPercent: 'QueryOverTenSecPercent',
      queryOverTenSecPercentNum: 'QueryOverTenSecPercentNum',
      queryTimeoutCount: 'QueryTimeoutCount',
      queryTimeoutCountPercent: 'QueryTimeoutCountPercent',
      quickIndexCostTimeAvg: 'QuickIndexCostTimeAvg',
      quickIndexQueryCount: 'QuickIndexQueryCount',
      repeatQueryPercent: 'RepeatQueryPercent',
      repeatQueryPercentNum: 'RepeatQueryPercentNum',
      repeatSqlQueryCount: 'RepeatSqlQueryCount',
      repeatSqlQueryPercent: 'RepeatSqlQueryPercent',
      reportId: 'ReportId',
      reportName: 'ReportName',
      reportType: 'ReportType',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostTimeAvg: 'number',
      cacheQueryCount: 'number',
      componentId: 'string',
      componentName: 'string',
      costTimeAvg: 'number',
      queryCount: 'number',
      queryCountAvg: 'number',
      queryOverFivePercentNum: 'number',
      queryOverFiveSecPercent: 'string',
      queryOverTenSecPercent: 'string',
      queryOverTenSecPercentNum: 'number',
      queryTimeoutCount: 'number',
      queryTimeoutCountPercent: 'number',
      quickIndexCostTimeAvg: 'number',
      quickIndexQueryCount: 'number',
      repeatQueryPercent: 'string',
      repeatQueryPercentNum: 'number',
      repeatSqlQueryCount: 'number',
      repeatSqlQueryPercent: 'string',
      reportId: 'string',
      reportName: 'string',
      reportType: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel extends $tea.Model {
  cacheCostTimeAvg?: number;
  cacheQueryCount?: number;
  costTimeAvg?: number;
  cubeId?: string;
  cubeName?: string;
  queryCount?: number;
  queryCountAvg?: number;
  queryOverFivePercentNum?: number;
  queryOverFiveSecPercent?: string;
  queryOverTenSecPercent?: string;
  queryOverTenSecPercentNum?: number;
  queryTimeoutCount?: number;
  queryTimeoutCountPercent?: number;
  quickIndexCostTimeAvg?: number;
  quickIndexQueryCount?: number;
  repeatQueryPercent?: string;
  repeatQueryPercentNum?: number;
  repeatSqlQueryCount?: number;
  repeatSqlQueryPercent?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCostTimeAvg: 'CacheCostTimeAvg',
      cacheQueryCount: 'CacheQueryCount',
      costTimeAvg: 'CostTimeAvg',
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      queryCount: 'QueryCount',
      queryCountAvg: 'QueryCountAvg',
      queryOverFivePercentNum: 'QueryOverFivePercentNum',
      queryOverFiveSecPercent: 'QueryOverFiveSecPercent',
      queryOverTenSecPercent: 'QueryOverTenSecPercent',
      queryOverTenSecPercentNum: 'QueryOverTenSecPercentNum',
      queryTimeoutCount: 'QueryTimeoutCount',
      queryTimeoutCountPercent: 'QueryTimeoutCountPercent',
      quickIndexCostTimeAvg: 'QuickIndexCostTimeAvg',
      quickIndexQueryCount: 'QuickIndexQueryCount',
      repeatQueryPercent: 'RepeatQueryPercent',
      repeatQueryPercentNum: 'RepeatQueryPercentNum',
      repeatSqlQueryCount: 'RepeatSqlQueryCount',
      repeatSqlQueryPercent: 'RepeatSqlQueryPercent',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostTimeAvg: 'number',
      cacheQueryCount: 'number',
      costTimeAvg: 'number',
      cubeId: 'string',
      cubeName: 'string',
      queryCount: 'number',
      queryCountAvg: 'number',
      queryOverFivePercentNum: 'number',
      queryOverFiveSecPercent: 'string',
      queryOverTenSecPercent: 'string',
      queryOverTenSecPercentNum: 'number',
      queryTimeoutCount: 'number',
      queryTimeoutCountPercent: 'number',
      quickIndexCostTimeAvg: 'number',
      quickIndexQueryCount: 'number',
      repeatQueryPercent: 'string',
      repeatQueryPercentNum: 'number',
      repeatSqlQueryCount: 'number',
      repeatSqlQueryPercent: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationResponseBodyResult extends $tea.Model {
  adviceType?: string;
  cubePerformanceDiagnoseModel?: QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel;
  static names(): { [key: string]: string } {
    return {
      adviceType: 'AdviceType',
      cubePerformanceDiagnoseModel: 'CubePerformanceDiagnoseModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceType: 'string',
      cubePerformanceDiagnoseModel: QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubePerformanceResponseBodyResult extends $tea.Model {
  cacheCostTimeAvg?: number;
  cacheQueryCount?: number;
  costTimeAvg?: number;
  cubeId?: string;
  cubeName?: string;
  queryCount?: number;
  queryCountAvg?: number;
  queryOverFivePercentNum?: number;
  queryOverFiveSecPercent?: string;
  queryOverTenSecPercent?: string;
  queryOverTenSecPercentNum?: number;
  queryTimeoutCount?: number;
  queryTimeoutCountPercent?: number;
  quickIndexCostTimeAvg?: number;
  quickIndexQueryCount?: number;
  repeatQueryPercent?: string;
  repeatQueryPercentNum?: number;
  repeatSqlQueryCount?: number;
  repeatSqlQueryPercent?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCostTimeAvg: 'CacheCostTimeAvg',
      cacheQueryCount: 'CacheQueryCount',
      costTimeAvg: 'CostTimeAvg',
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      queryCount: 'QueryCount',
      queryCountAvg: 'QueryCountAvg',
      queryOverFivePercentNum: 'QueryOverFivePercentNum',
      queryOverFiveSecPercent: 'QueryOverFiveSecPercent',
      queryOverTenSecPercent: 'QueryOverTenSecPercent',
      queryOverTenSecPercentNum: 'QueryOverTenSecPercentNum',
      queryTimeoutCount: 'QueryTimeoutCount',
      queryTimeoutCountPercent: 'QueryTimeoutCountPercent',
      quickIndexCostTimeAvg: 'QuickIndexCostTimeAvg',
      quickIndexQueryCount: 'QuickIndexQueryCount',
      repeatQueryPercent: 'RepeatQueryPercent',
      repeatQueryPercentNum: 'RepeatQueryPercentNum',
      repeatSqlQueryCount: 'RepeatSqlQueryCount',
      repeatSqlQueryPercent: 'RepeatSqlQueryPercent',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostTimeAvg: 'number',
      cacheQueryCount: 'number',
      costTimeAvg: 'number',
      cubeId: 'string',
      cubeName: 'string',
      queryCount: 'number',
      queryCountAvg: 'number',
      queryOverFivePercentNum: 'number',
      queryOverFiveSecPercent: 'string',
      queryOverTenSecPercent: 'string',
      queryOverTenSecPercentNum: 'number',
      queryTimeoutCount: 'number',
      queryTimeoutCountPercent: 'number',
      quickIndexCostTimeAvg: 'number',
      quickIndexQueryCount: 'number',
      repeatQueryPercent: 'string',
      repeatQueryPercentNum: 'number',
      repeatSqlQueryCount: 'number',
      repeatSqlQueryPercent: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceResponseBodyResultHeaders extends $tea.Model {
  aggregator?: string;
  column?: string;
  dataType?: string;
  granularity?: string;
  label?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      column: 'Column',
      dataType: 'DataType',
      granularity: 'Granularity',
      label: 'Label',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      column: 'string',
      dataType: 'string',
      granularity: 'string',
      label: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceResponseBodyResult extends $tea.Model {
  headers?: QueryDataServiceResponseBodyResultHeaders[];
  sql?: string;
  values?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      sql: 'Sql',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': QueryDataServiceResponseBodyResultHeaders },
      sql: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultCubeTableList extends $tea.Model {
  caption?: string;
  customsql?: boolean;
  datasourceId?: string;
  dsType?: string;
  factTable?: boolean;
  sql?: string;
  tableName?: string;
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      customsql: 'Customsql',
      datasourceId: 'DatasourceId',
      dsType: 'DsType',
      factTable: 'FactTable',
      sql: 'Sql',
      tableName: 'TableName',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      customsql: 'boolean',
      datasourceId: 'string',
      dsType: 'string',
      factTable: 'boolean',
      sql: 'string',
      tableName: 'string',
      uniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultDimensionList extends $tea.Model {
  caption?: string;
  dataType?: string;
  dimensionType?: string;
  expression?: string;
  factColumn?: string;
  granularity?: string;
  refUid?: string;
  tableUniqueId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      dataType: 'DataType',
      dimensionType: 'DimensionType',
      expression: 'Expression',
      factColumn: 'FactColumn',
      granularity: 'Granularity',
      refUid: 'RefUid',
      tableUniqueId: 'TableUniqueId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      dataType: 'string',
      dimensionType: 'string',
      expression: 'string',
      factColumn: 'string',
      granularity: 'string',
      refUid: 'string',
      tableUniqueId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultDirectory extends $tea.Model {
  id?: string;
  name?: string;
  pathId?: string;
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResultMeasureList extends $tea.Model {
  caption?: string;
  dataType?: string;
  expression?: string;
  factColumn?: string;
  measureType?: string;
  tableUniqueId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      dataType: 'DataType',
      expression: 'Expression',
      factColumn: 'FactColumn',
      measureType: 'MeasureType',
      tableUniqueId: 'TableUniqueId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      dataType: 'string',
      expression: 'string',
      factColumn: 'string',
      measureType: 'string',
      tableUniqueId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetInfoResponseBodyResult extends $tea.Model {
  cubeTableList?: QueryDatasetInfoResponseBodyResultCubeTableList[];
  custimzeSql?: boolean;
  datasetId?: string;
  datasetName?: string;
  dimensionList?: QueryDatasetInfoResponseBodyResultDimensionList[];
  directory?: QueryDatasetInfoResponseBodyResultDirectory;
  dsId?: string;
  dsName?: string;
  dsType?: string;
  gmtCreate?: string;
  gmtModify?: string;
  measureList?: QueryDatasetInfoResponseBodyResultMeasureList[];
  ownerId?: string;
  ownerName?: string;
  rowLevel?: boolean;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cubeTableList: 'CubeTableList',
      custimzeSql: 'CustimzeSql',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      dimensionList: 'DimensionList',
      directory: 'Directory',
      dsId: 'DsId',
      dsName: 'DsName',
      dsType: 'DsType',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      measureList: 'MeasureList',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      rowLevel: 'RowLevel',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeTableList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultCubeTableList },
      custimzeSql: 'boolean',
      datasetId: 'string',
      datasetName: 'string',
      dimensionList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultDimensionList },
      directory: QueryDatasetInfoResponseBodyResultDirectory,
      dsId: 'string',
      dsName: 'string',
      dsType: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      measureList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultMeasureList },
      ownerId: 'string',
      ownerName: 'string',
      rowLevel: 'boolean',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBodyResultDataDataSource extends $tea.Model {
  dsId?: string;
  dsName?: string;
  dsType?: string;
  static names(): { [key: string]: string } {
    return {
      dsId: 'DsId',
      dsName: 'DsName',
      dsType: 'DsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsId: 'string',
      dsName: 'string',
      dsType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBodyResultDataDirectory extends $tea.Model {
  id?: string;
  name?: string;
  pathId?: string;
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBodyResultData extends $tea.Model {
  createTime?: string;
  dataSource?: QueryDatasetListResponseBodyResultDataDataSource;
  datasetId?: string;
  datasetName?: string;
  description?: string;
  directory?: QueryDatasetListResponseBodyResultDataDirectory;
  modifyTime?: string;
  ownerId?: string;
  ownerName?: string;
  rowLevel?: boolean;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      description: 'Description',
      directory: 'Directory',
      modifyTime: 'ModifyTime',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      rowLevel: 'RowLevel',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSource: QueryDatasetListResponseBodyResultDataDataSource,
      datasetId: 'string',
      datasetName: 'string',
      description: 'string',
      directory: QueryDatasetListResponseBodyResultDataDirectory,
      modifyTime: 'string',
      ownerId: 'string',
      ownerName: 'string',
      rowLevel: 'boolean',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBodyResult extends $tea.Model {
  data?: QueryDatasetListResponseBodyResultData[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryDatasetListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetSwitchInfoResponseBodyResult extends $tea.Model {
  cubeId?: string;
  isOpenColumnLevelPermission?: number;
  isOpenRowLevelPermission?: number;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      isOpenColumnLevelPermission: 'IsOpenColumnLevelPermission',
      isOpenRowLevelPermission: 'IsOpenRowLevelPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      isOpenColumnLevelPermission: 'number',
      isOpenRowLevelPermission: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedInfoResponseBodyResultDetail extends $tea.Model {
  dashboardOfflineQuery?: number;
  page?: number;
  report?: number;
  static names(): { [key: string]: string } {
    return {
      dashboardOfflineQuery: 'DashboardOfflineQuery',
      page: 'Page',
      report: 'Report',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardOfflineQuery: 'number',
      page: 'number',
      report: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmbeddedInfoResponseBodyResult extends $tea.Model {
  detail?: QueryEmbeddedInfoResponseBodyResultDetail;
  embeddedCount?: number;
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      embeddedCount: 'EmbeddedCount',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: QueryEmbeddedInfoResponseBodyResultDetail,
      embeddedCount: 'number',
      maxCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponseBodyResultData extends $tea.Model {
  allowPublishOperation?: boolean;
  allowShareOperation?: boolean;
  createTime?: string;
  createUser?: string;
  createUserAccountName?: string;
  modifiedTime?: string;
  modifyUser?: string;
  modifyUserAccountName?: string;
  organizationId?: string;
  owner?: string;
  ownerAccountName?: string;
  workspaceDescription?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      allowPublishOperation: 'AllowPublishOperation',
      allowShareOperation: 'AllowShareOperation',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      createUserAccountName: 'CreateUserAccountName',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      modifyUserAccountName: 'ModifyUserAccountName',
      organizationId: 'OrganizationId',
      owner: 'Owner',
      ownerAccountName: 'OwnerAccountName',
      workspaceDescription: 'WorkspaceDescription',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPublishOperation: 'boolean',
      allowShareOperation: 'boolean',
      createTime: 'string',
      createUser: 'string',
      createUserAccountName: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      modifyUserAccountName: 'string',
      organizationId: 'string',
      owner: 'string',
      ownerAccountName: 'string',
      workspaceDescription: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponseBodyResult extends $tea.Model {
  data?: QueryOrganizationWorkspaceListResponseBodyResultData[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryOrganizationWorkspaceListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdResponseBodyResultDirectory extends $tea.Model {
  id?: string;
  name?: string;
  pathId?: string;
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdResponseBodyResult extends $tea.Model {
  createTime?: string;
  description?: string;
  directory?: QueryReadableResourcesListByUserIdResponseBodyResultDirectory;
  modifyName?: string;
  modifyTime?: string;
  ownerId?: string;
  ownerName?: string;
  securityLevel?: string;
  status?: number;
  thirdPartAuthFlag?: number;
  workName?: string;
  workType?: string;
  worksId?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      directory: 'Directory',
      modifyName: 'ModifyName',
      modifyTime: 'ModifyTime',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      directory: QueryReadableResourcesListByUserIdResponseBodyResultDirectory,
      modifyName: 'string',
      modifyTime: 'string',
      ownerId: 'string',
      ownerName: 'string',
      securityLevel: 'string',
      status: 'number',
      thirdPartAuthFlag: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReportPerformanceResponseBodyResult extends $tea.Model {
  cacheCostTimeAvg?: number;
  cacheQueryCount?: number;
  componentQueryCount?: number;
  componentQueryCountAvg?: number;
  costTimeAvg?: number;
  queryCount?: number;
  queryCountAvg?: number;
  queryOverFivePercentNum?: number;
  queryOverFiveSecPercent?: string;
  queryOverTenSecPercent?: string;
  queryOverTenSecPercentNum?: number;
  queryTimeoutCount?: number;
  queryTimeoutCountPercent?: number;
  quickIndexCostTimeAvg?: number;
  quickIndexQueryCount?: number;
  repeatQueryPercent?: string;
  repeatQueryPercentNum?: number;
  repeatSqlQueryCount?: number;
  repeatSqlQueryPercent?: string;
  reportId?: string;
  reportName?: string;
  reportType?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCostTimeAvg: 'CacheCostTimeAvg',
      cacheQueryCount: 'CacheQueryCount',
      componentQueryCount: 'ComponentQueryCount',
      componentQueryCountAvg: 'ComponentQueryCountAvg',
      costTimeAvg: 'CostTimeAvg',
      queryCount: 'QueryCount',
      queryCountAvg: 'QueryCountAvg',
      queryOverFivePercentNum: 'QueryOverFivePercentNum',
      queryOverFiveSecPercent: 'QueryOverFiveSecPercent',
      queryOverTenSecPercent: 'QueryOverTenSecPercent',
      queryOverTenSecPercentNum: 'QueryOverTenSecPercentNum',
      queryTimeoutCount: 'QueryTimeoutCount',
      queryTimeoutCountPercent: 'QueryTimeoutCountPercent',
      quickIndexCostTimeAvg: 'QuickIndexCostTimeAvg',
      quickIndexQueryCount: 'QuickIndexQueryCount',
      repeatQueryPercent: 'RepeatQueryPercent',
      repeatQueryPercentNum: 'RepeatQueryPercentNum',
      repeatSqlQueryCount: 'RepeatSqlQueryCount',
      repeatSqlQueryPercent: 'RepeatSqlQueryPercent',
      reportId: 'ReportId',
      reportName: 'ReportName',
      reportType: 'ReportType',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCostTimeAvg: 'number',
      cacheQueryCount: 'number',
      componentQueryCount: 'number',
      componentQueryCountAvg: 'number',
      costTimeAvg: 'number',
      queryCount: 'number',
      queryCountAvg: 'number',
      queryOverFivePercentNum: 'number',
      queryOverFiveSecPercent: 'string',
      queryOverTenSecPercent: 'string',
      queryOverTenSecPercentNum: 'number',
      queryTimeoutCount: 'number',
      queryTimeoutCountPercent: 'number',
      quickIndexCostTimeAvg: 'number',
      quickIndexQueryCount: 'number',
      repeatQueryPercent: 'string',
      repeatQueryPercentNum: 'number',
      repeatSqlQueryCount: 'number',
      repeatSqlQueryPercent: 'string',
      reportId: 'string',
      reportName: 'string',
      reportType: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShareListResponseBodyResult extends $tea.Model {
  authPoint?: number;
  expireDate?: number;
  reportId?: string;
  shareId?: string;
  shareToId?: string;
  shareToName?: string;
  shareToType?: number;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      authPoint: 'AuthPoint',
      expireDate: 'ExpireDate',
      reportId: 'ReportId',
      shareId: 'ShareId',
      shareToId: 'ShareToId',
      shareToName: 'ShareToName',
      shareToType: 'ShareToType',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPoint: 'number',
      expireDate: 'number',
      reportId: 'string',
      shareId: 'string',
      shareToId: 'string',
      shareToName: 'string',
      shareToType: 'number',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySharesToUserListResponseBodyResultDirectory extends $tea.Model {
  id?: string;
  name?: string;
  pathId?: string;
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySharesToUserListResponseBodyResult extends $tea.Model {
  createTime?: string;
  description?: string;
  directory?: QuerySharesToUserListResponseBodyResultDirectory;
  modifyName?: string;
  modifyTime?: string;
  ownerId?: string;
  ownerName?: string;
  securityLevel?: string;
  status?: number;
  thirdPartAuthFlag?: number;
  workName?: string;
  workType?: string;
  worksId?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      directory: 'Directory',
      modifyName: 'ModifyName',
      modifyTime: 'ModifyTime',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      directory: QuerySharesToUserListResponseBodyResultDirectory,
      modifyName: 'string',
      modifyTime: 'string',
      ownerId: 'string',
      ownerName: 'string',
      securityLevel: 'string',
      status: 'number',
      thirdPartAuthFlag: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketInfoResponseBodyResult extends $tea.Model {
  accessTicket?: string;
  cmptId?: string;
  globalParam?: string;
  invalidTime?: string;
  maxTicketNum?: number;
  organizationId?: string;
  registerTime?: string;
  usedTicketNum?: number;
  userId?: string;
  watermarkParam?: string;
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      accessTicket: 'AccessTicket',
      cmptId: 'CmptId',
      globalParam: 'GlobalParam',
      invalidTime: 'InvalidTime',
      maxTicketNum: 'MaxTicketNum',
      organizationId: 'OrganizationId',
      registerTime: 'RegisterTime',
      usedTicketNum: 'UsedTicketNum',
      userId: 'UserId',
      watermarkParam: 'WatermarkParam',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTicket: 'string',
      cmptId: 'string',
      globalParam: 'string',
      invalidTime: 'string',
      maxTicketNum: 'number',
      organizationId: 'string',
      registerTime: 'string',
      usedTicketNum: 'number',
      userId: 'string',
      watermarkParam: 'string',
      worksId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupListByParentIdResponseBodyResult extends $tea.Model {
  createTime?: string;
  createUser?: string;
  identifiedPath?: string;
  modifiedTime?: string;
  modifyUser?: string;
  parentUserGroupId?: string;
  userGroupDescription?: string;
  userGroupId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      identifiedPath: 'IdentifiedPath',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      parentUserGroupId: 'ParentUserGroupId',
      userGroupDescription: 'UserGroupDescription',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      identifiedPath: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      parentUserGroupId: 'string',
      userGroupDescription: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupMemberResponseBodyResult extends $tea.Model {
  id?: string;
  isUserGroup?: boolean;
  name?: string;
  parentUserGroupId?: string;
  parentUserGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isUserGroup: 'IsUserGroup',
      name: 'Name',
      parentUserGroupId: 'ParentUserGroupId',
      parentUserGroupName: 'ParentUserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isUserGroup: 'boolean',
      name: 'string',
      parentUserGroupId: 'string',
      parentUserGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByAccountResponseBodyResult extends $tea.Model {
  accountId?: string;
  accountName?: string;
  adminUser?: boolean;
  authAdminUser?: boolean;
  email?: string;
  nickName?: string;
  phone?: string;
  userId?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      email: 'Email',
      nickName: 'NickName',
      phone: 'Phone',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      email: 'string',
      nickName: 'string',
      phone: 'string',
      userId: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByUserIdResponseBodyResult extends $tea.Model {
  accountId?: string;
  accountName?: string;
  adminUser?: boolean;
  authAdminUser?: boolean;
  email?: string;
  nickName?: string;
  phone?: string;
  userId?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      email: 'Email',
      nickName: 'NickName',
      phone: 'Phone',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      email: 'string',
      nickName: 'string',
      phone: 'string',
      userId: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListResponseBodyResultData extends $tea.Model {
  accountId?: string;
  accountName?: string;
  adminUser?: boolean;
  authAdminUser?: boolean;
  nickName?: string;
  userId?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      nickName: 'NickName',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      nickName: 'string',
      userId: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListResponseBodyResult extends $tea.Model {
  data?: QueryUserListResponseBodyResultData[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryUserListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserRoleInfoInWorkspaceResponseBodyResult extends $tea.Model {
  roleCode?: string;
  roleId?: number;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleCode: 'RoleCode',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleCode: 'string',
      roleId: 'number',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagMetaListResponseBodyResult extends $tea.Model {
  tagDescription?: string;
  tagId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDescription: 'TagDescription',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDescription: 'string',
      tagId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserTagValueListResponseBodyResult extends $tea.Model {
  tagId?: string;
  tagName?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagName: 'TagName',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
      tagName: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksResponseBodyResultDirectory extends $tea.Model {
  id?: string;
  name?: string;
  pathId?: string;
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksResponseBodyResult extends $tea.Model {
  auth3rdFlag?: number;
  description?: string;
  directory?: QueryWorksResponseBodyResultDirectory;
  gmtCreate?: string;
  gmtModify?: string;
  modifyName?: string;
  ownerId?: string;
  ownerName?: string;
  securityLevel?: string;
  status?: number;
  workName?: string;
  workType?: string;
  worksId?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      auth3rdFlag: 'Auth3rdFlag',
      description: 'Description',
      directory: 'Directory',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      modifyName: 'ModifyName',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth3rdFlag: 'number',
      description: 'string',
      directory: QueryWorksResponseBodyResultDirectory,
      gmtCreate: 'string',
      gmtModify: 'string',
      modifyName: 'string',
      ownerId: 'string',
      ownerName: 'string',
      securityLevel: 'string',
      status: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipResponseBodyResultQueryParams extends $tea.Model {
  areaId?: string;
  areaName?: string;
  caption?: string;
  dataType?: string;
  isMeasure?: boolean;
  pathId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      areaName: 'AreaName',
      caption: 'Caption',
      dataType: 'DataType',
      isMeasure: 'IsMeasure',
      pathId: 'PathId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      areaName: 'string',
      caption: 'string',
      dataType: 'string',
      isMeasure: 'boolean',
      pathId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipResponseBodyResult extends $tea.Model {
  componentId?: string;
  componentName?: string;
  componentType?: number;
  componentTypeName?: string;
  datasetId?: string;
  queryParams?: QueryWorksBloodRelationshipResponseBodyResultQueryParams[];
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentName: 'ComponentName',
      componentType: 'ComponentType',
      componentTypeName: 'ComponentTypeName',
      datasetId: 'DatasetId',
      queryParams: 'QueryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentName: 'string',
      componentType: 'number',
      componentTypeName: 'string',
      datasetId: 'string',
      queryParams: { 'type': 'array', 'itemType': QueryWorksBloodRelationshipResponseBodyResultQueryParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationResponseBodyResultDataDirectory extends $tea.Model {
  id?: string;
  name?: string;
  pathId?: string;
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationResponseBodyResultData extends $tea.Model {
  auth3rdFlag?: number;
  description?: string;
  directory?: QueryWorksByOrganizationResponseBodyResultDataDirectory;
  gmtCreate?: string;
  gmtModify?: string;
  modifyName?: string;
  ownerId?: string;
  ownerName?: string;
  securityLevel?: string;
  status?: number;
  workName?: string;
  workType?: string;
  worksId?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      auth3rdFlag: 'Auth3rdFlag',
      description: 'Description',
      directory: 'Directory',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      modifyName: 'ModifyName',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth3rdFlag: 'number',
      description: 'string',
      directory: QueryWorksByOrganizationResponseBodyResultDataDirectory,
      gmtCreate: 'string',
      gmtModify: 'string',
      modifyName: 'string',
      ownerId: 'string',
      ownerName: 'string',
      securityLevel: 'string',
      status: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationResponseBodyResult extends $tea.Model {
  data?: QueryWorksByOrganizationResponseBodyResultData[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryWorksByOrganizationResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByWorkspaceResponseBodyResultDataDirectory extends $tea.Model {
  id?: string;
  name?: string;
  pathId?: string;
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByWorkspaceResponseBodyResultData extends $tea.Model {
  auth3rdFlag?: number;
  description?: string;
  directory?: QueryWorksByWorkspaceResponseBodyResultDataDirectory;
  gmtCreate?: string;
  gmtModify?: string;
  modifyName?: string;
  ownerId?: string;
  ownerName?: string;
  securityLevel?: string;
  status?: number;
  workName?: string;
  workType?: string;
  worksId?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      auth3rdFlag: 'Auth3rdFlag',
      description: 'Description',
      directory: 'Directory',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      modifyName: 'ModifyName',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth3rdFlag: 'number',
      description: 'string',
      directory: QueryWorksByWorkspaceResponseBodyResultDataDirectory,
      gmtCreate: 'string',
      gmtModify: 'string',
      modifyName: 'string',
      ownerId: 'string',
      ownerName: 'string',
      securityLevel: 'string',
      status: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByWorkspaceResponseBodyResult extends $tea.Model {
  data?: QueryWorksByWorkspaceResponseBodyResultData[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryWorksByWorkspaceResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponseBodyResultDataRole extends $tea.Model {
  roleCode?: string;
  roleId?: number;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleCode: 'RoleCode',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleCode: 'string',
      roleId: 'number',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponseBodyResultData extends $tea.Model {
  accountId?: string;
  accountName?: string;
  nickName?: string;
  role?: QueryWorkspaceUserListResponseBodyResultDataRole;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      nickName: 'NickName',
      role: 'Role',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      nickName: 'string',
      role: QueryWorkspaceUserListResponseBodyResultDataRole,
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponseBodyResult extends $tea.Model {
  data?: QueryWorkspaceUserListResponseBodyResultData[];
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryWorkspaceUserListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceUsersRoleResponseBodyResult extends $tea.Model {
  failure?: number;
  failureDetail?: { [key: string]: any };
  success?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failure: 'Failure',
      failureDetail: 'FailureDetail',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failure: 'number',
      failureDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("quickbi-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
    * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.\\n
    *
    * @param request AddDataLevelPermissionRuleUsersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddDataLevelPermissionRuleUsersResponse
   */
  async addDataLevelPermissionRuleUsersWithOptions(request: AddDataLevelPermissionRuleUsersRequest, runtime: $Util.RuntimeOptions): Promise<AddDataLevelPermissionRuleUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addUserModel)) {
      query["AddUserModel"] = request.addUserModel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddDataLevelPermissionRuleUsersResponse>(await this.callApi(params, req, runtime), new AddDataLevelPermissionRuleUsersResponse({}));
  }

  /**
    * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.\\n
    *
    * @param request AddDataLevelPermissionRuleUsersRequest
    * @return AddDataLevelPermissionRuleUsersResponse
   */
  async addDataLevelPermissionRuleUsers(request: AddDataLevelPermissionRuleUsersRequest): Promise<AddDataLevelPermissionRuleUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDataLevelPermissionRuleUsersWithOptions(request, runtime);
  }

  /**
    * ROW_LEVEL
    *
    * @param request AddDataLevelPermissionWhiteListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddDataLevelPermissionWhiteListResponse
   */
  async addDataLevelPermissionWhiteListWithOptions(request: AddDataLevelPermissionWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<AddDataLevelPermissionWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.targetIds)) {
      query["TargetIds"] = request.targetIds;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddDataLevelPermissionWhiteListResponse>(await this.callApi(params, req, runtime), new AddDataLevelPermissionWhiteListResponse({}));
  }

  /**
    * ROW_LEVEL
    *
    * @param request AddDataLevelPermissionWhiteListRequest
    * @return AddDataLevelPermissionWhiteListResponse
   */
  async addDataLevelPermissionWhiteList(request: AddDataLevelPermissionWhiteListRequest): Promise<AddDataLevelPermissionWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDataLevelPermissionWhiteListWithOptions(request, runtime);
  }

  async addShareReportWithOptions(request: AddShareReportRequest, runtime: $Util.RuntimeOptions): Promise<AddShareReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authPoint)) {
      query["AuthPoint"] = request.authPoint;
    }

    if (!Util.isUnset(request.expireDate)) {
      query["ExpireDate"] = request.expireDate;
    }

    if (!Util.isUnset(request.shareToId)) {
      query["ShareToId"] = request.shareToId;
    }

    if (!Util.isUnset(request.shareToType)) {
      query["ShareToType"] = request.shareToType;
    }

    if (!Util.isUnset(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddShareReportResponse>(await this.callApi(params, req, runtime), new AddShareReportResponse({}));
  }

  async addShareReport(request: AddShareReportRequest): Promise<AddShareReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addShareReportWithOptions(request, runtime);
  }

  async addUserWithOptions(request: AddUserRequest, runtime: $Util.RuntimeOptions): Promise<AddUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.adminUser)) {
      query["AdminUser"] = request.adminUser;
    }

    if (!Util.isUnset(request.authAdminUser)) {
      query["AuthAdminUser"] = request.authAdminUser;
    }

    if (!Util.isUnset(request.nickName)) {
      query["NickName"] = request.nickName;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddUserResponse>(await this.callApi(params, req, runtime), new AddUserResponse({}));
  }

  async addUser(request: AddUserRequest): Promise<AddUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserWithOptions(request, runtime);
  }

  async addUserGroupMemberWithOptions(request: AddUserGroupMemberRequest, runtime: $Util.RuntimeOptions): Promise<AddUserGroupMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!Util.isUnset(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddUserGroupMemberResponse>(await this.callApi(params, req, runtime), new AddUserGroupMemberResponse({}));
  }

  async addUserGroupMember(request: AddUserGroupMemberRequest): Promise<AddUserGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserGroupMemberWithOptions(request, runtime);
  }

  async addUserGroupMembersWithOptions(request: AddUserGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<AddUserGroupMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddUserGroupMembersResponse>(await this.callApi(params, req, runtime), new AddUserGroupMembersResponse({}));
  }

  async addUserGroupMembers(request: AddUserGroupMembersRequest): Promise<AddUserGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserGroupMembersWithOptions(request, runtime);
  }

  async addUserTagMetaWithOptions(request: AddUserTagMetaRequest, runtime: $Util.RuntimeOptions): Promise<AddUserTagMetaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tagDescription)) {
      query["TagDescription"] = request.tagDescription;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddUserTagMetaResponse>(await this.callApi(params, req, runtime), new AddUserTagMetaResponse({}));
  }

  async addUserTagMeta(request: AddUserTagMetaRequest): Promise<AddUserTagMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserTagMetaWithOptions(request, runtime);
  }

  async addUserToWorkspaceWithOptions(request: AddUserToWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToWorkspaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddUserToWorkspaceResponse>(await this.callApi(params, req, runtime), new AddUserToWorkspaceResponse({}));
  }

  async addUserToWorkspace(request: AddUserToWorkspaceRequest): Promise<AddUserToWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToWorkspaceWithOptions(request, runtime);
  }

  async addWorkspaceUsersWithOptions(request: AddWorkspaceUsersRequest, runtime: $Util.RuntimeOptions): Promise<AddWorkspaceUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddWorkspaceUsersResponse>(await this.callApi(params, req, runtime), new AddWorkspaceUsersResponse({}));
  }

  async addWorkspaceUsers(request: AddWorkspaceUsersRequest): Promise<AddWorkspaceUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addWorkspaceUsersWithOptions(request, runtime);
  }

  async allotDatasetAccelerationTaskWithOptions(request: AllotDatasetAccelerationTaskRequest, runtime: $Util.RuntimeOptions): Promise<AllotDatasetAccelerationTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AllotDatasetAccelerationTaskResponse>(await this.callApi(params, req, runtime), new AllotDatasetAccelerationTaskResponse({}));
  }

  async allotDatasetAccelerationTask(request: AllotDatasetAccelerationTaskRequest): Promise<AllotDatasetAccelerationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allotDatasetAccelerationTaskWithOptions(request, runtime);
  }

  async authorizeMenuWithOptions(request: AuthorizeMenuRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeMenuResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authPointsValue)) {
      query["AuthPointsValue"] = request.authPointsValue;
    }

    if (!Util.isUnset(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!Util.isUnset(request.menuIds)) {
      query["MenuIds"] = request.menuIds;
    }

    if (!Util.isUnset(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AuthorizeMenuResponse>(await this.callApi(params, req, runtime), new AuthorizeMenuResponse({}));
  }

  async authorizeMenu(request: AuthorizeMenuRequest): Promise<AuthorizeMenuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeMenuWithOptions(request, runtime);
  }

  async batchAddFeishuUsersWithOptions(request: BatchAddFeishuUsersRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddFeishuUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.feishuUsers)) {
      query["FeishuUsers"] = request.feishuUsers;
    }

    if (!Util.isUnset(request.isAdmin)) {
      query["IsAdmin"] = request.isAdmin;
    }

    if (!Util.isUnset(request.isAuthAdmin)) {
      query["IsAuthAdmin"] = request.isAuthAdmin;
    }

    if (!Util.isUnset(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchAddFeishuUsersResponse>(await this.callApi(params, req, runtime), new BatchAddFeishuUsersResponse({}));
  }

  async batchAddFeishuUsers(request: BatchAddFeishuUsersRequest): Promise<BatchAddFeishuUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddFeishuUsersWithOptions(request, runtime);
  }

  async cancelAuthorizationMenuWithOptions(request: CancelAuthorizationMenuRequest, runtime: $Util.RuntimeOptions): Promise<CancelAuthorizationMenuResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!Util.isUnset(request.menuIds)) {
      query["MenuIds"] = request.menuIds;
    }

    if (!Util.isUnset(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CancelAuthorizationMenuResponse>(await this.callApi(params, req, runtime), new CancelAuthorizationMenuResponse({}));
  }

  async cancelAuthorizationMenu(request: CancelAuthorizationMenuRequest): Promise<CancelAuthorizationMenuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelAuthorizationMenuWithOptions(request, runtime);
  }

  async cancelCollectionWithOptions(request: CancelCollectionRequest, runtime: $Util.RuntimeOptions): Promise<CancelCollectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CancelCollectionResponse>(await this.callApi(params, req, runtime), new CancelCollectionResponse({}));
  }

  async cancelCollection(request: CancelCollectionRequest): Promise<CancelCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCollectionWithOptions(request, runtime);
  }

  async cancelReportShareWithOptions(request: CancelReportShareRequest, runtime: $Util.RuntimeOptions): Promise<CancelReportShareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!Util.isUnset(request.shareToIds)) {
      query["ShareToIds"] = request.shareToIds;
    }

    if (!Util.isUnset(request.shareToType)) {
      query["ShareToType"] = request.shareToType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CancelReportShareResponse>(await this.callApi(params, req, runtime), new CancelReportShareResponse({}));
  }

  async cancelReportShare(request: CancelReportShareRequest): Promise<CancelReportShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelReportShareWithOptions(request, runtime);
  }

  async changeVisibilityModelWithOptions(request: ChangeVisibilityModelRequest, runtime: $Util.RuntimeOptions): Promise<ChangeVisibilityModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!Util.isUnset(request.menuIds)) {
      query["MenuIds"] = request.menuIds;
    }

    if (!Util.isUnset(request.showOnlyWithAccess)) {
      query["ShowOnlyWithAccess"] = request.showOnlyWithAccess;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ChangeVisibilityModelResponse>(await this.callApi(params, req, runtime), new ChangeVisibilityModelResponse({}));
  }

  async changeVisibilityModel(request: ChangeVisibilityModelRequest): Promise<ChangeVisibilityModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeVisibilityModelWithOptions(request, runtime);
  }

  async checkReadableWithOptions(request: CheckReadableRequest, runtime: $Util.RuntimeOptions): Promise<CheckReadableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CheckReadableResponse>(await this.callApi(params, req, runtime), new CheckReadableResponse({}));
  }

  async checkReadable(request: CheckReadableRequest): Promise<CheckReadableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkReadableWithOptions(request, runtime);
  }

  async createTicketWithOptions(request: CreateTicketRequest, runtime: $Util.RuntimeOptions): Promise<CreateTicketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.cmptId)) {
      query["CmptId"] = request.cmptId;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.globalParam)) {
      query["GlobalParam"] = request.globalParam;
    }

    if (!Util.isUnset(request.ticketNum)) {
      query["TicketNum"] = request.ticketNum;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.watermarkParam)) {
      query["WatermarkParam"] = request.watermarkParam;
    }

    if (!Util.isUnset(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateTicketResponse>(await this.callApi(params, req, runtime), new CreateTicketResponse({}));
  }

  async createTicket(request: CreateTicketRequest): Promise<CreateTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTicketWithOptions(request, runtime);
  }

  async createUserGroupWithOptions(request: CreateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.parentUserGroupId)) {
      query["ParentUserGroupId"] = request.parentUserGroupId;
    }

    if (!Util.isUnset(request.userGroupDescription)) {
      query["UserGroupDescription"] = request.userGroupDescription;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!Util.isUnset(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateUserGroupResponse>(await this.callApi(params, req, runtime), new CreateUserGroupResponse({}));
  }

  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  async delayTicketExpireTimeWithOptions(request: DelayTicketExpireTimeRequest, runtime: $Util.RuntimeOptions): Promise<DelayTicketExpireTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DelayTicketExpireTimeResponse>(await this.callApi(params, req, runtime), new DelayTicketExpireTimeResponse({}));
  }

  async delayTicketExpireTime(request: DelayTicketExpireTimeRequest): Promise<DelayTicketExpireTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.delayTicketExpireTimeWithOptions(request, runtime);
  }

  /**
    * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","delModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
    *
    * @param request DeleteDataLevelPermissionRuleUsersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDataLevelPermissionRuleUsersResponse
   */
  async deleteDataLevelPermissionRuleUsersWithOptions(request: DeleteDataLevelPermissionRuleUsersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataLevelPermissionRuleUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deleteUserModel)) {
      query["DeleteUserModel"] = request.deleteUserModel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteDataLevelPermissionRuleUsersResponse>(await this.callApi(params, req, runtime), new DeleteDataLevelPermissionRuleUsersResponse({}));
  }

  /**
    * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","delModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
    *
    * @param request DeleteDataLevelPermissionRuleUsersRequest
    * @return DeleteDataLevelPermissionRuleUsersResponse
   */
  async deleteDataLevelPermissionRuleUsers(request: DeleteDataLevelPermissionRuleUsersRequest): Promise<DeleteDataLevelPermissionRuleUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataLevelPermissionRuleUsersWithOptions(request, runtime);
  }

  /**
    * The ID of the training dataset that you want to remove from the specified custom linguistic model.
    *
    * @param request DeleteDataLevelRuleConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDataLevelRuleConfigResponse
   */
  async deleteDataLevelRuleConfigWithOptions(request: DeleteDataLevelRuleConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataLevelRuleConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteDataLevelRuleConfigResponse>(await this.callApi(params, req, runtime), new DeleteDataLevelRuleConfigResponse({}));
  }

  /**
    * The ID of the training dataset that you want to remove from the specified custom linguistic model.
    *
    * @param request DeleteDataLevelRuleConfigRequest
    * @return DeleteDataLevelRuleConfigResponse
   */
  async deleteDataLevelRuleConfig(request: DeleteDataLevelRuleConfigRequest): Promise<DeleteDataLevelRuleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataLevelRuleConfigWithOptions(request, runtime);
  }

  async deleteTicketWithOptions(request: DeleteTicketRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTicketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteTicketResponse>(await this.callApi(params, req, runtime), new DeleteTicketResponse({}));
  }

  async deleteTicket(request: DeleteTicketRequest): Promise<DeleteTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTicketWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.transferUserId)) {
      query["TransferUserId"] = request.transferUserId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deleteUserFromWorkspaceWithOptions(request: DeleteUserFromWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserFromWorkspaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteUserFromWorkspaceResponse>(await this.callApi(params, req, runtime), new DeleteUserFromWorkspaceResponse({}));
  }

  async deleteUserFromWorkspace(request: DeleteUserFromWorkspaceRequest): Promise<DeleteUserFromWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserFromWorkspaceWithOptions(request, runtime);
  }

  async deleteUserGroupWithOptions(request: DeleteUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteUserGroupResponse>(await this.callApi(params, req, runtime), new DeleteUserGroupResponse({}));
  }

  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  async deleteUserGroupMemberWithOptions(request: DeleteUserGroupMemberRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserGroupMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteUserGroupMemberResponse>(await this.callApi(params, req, runtime), new DeleteUserGroupMemberResponse({}));
  }

  async deleteUserGroupMember(request: DeleteUserGroupMemberRequest): Promise<DeleteUserGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupMemberWithOptions(request, runtime);
  }

  async deleteUserGroupMembersWithOptions(request: DeleteUserGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserGroupMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteUserGroupMembersResponse>(await this.callApi(params, req, runtime), new DeleteUserGroupMembersResponse({}));
  }

  async deleteUserGroupMembers(request: DeleteUserGroupMembersRequest): Promise<DeleteUserGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupMembersWithOptions(request, runtime);
  }

  async deleteUserTagMetaWithOptions(request: DeleteUserTagMetaRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserTagMetaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteUserTagMetaResponse>(await this.callApi(params, req, runtime), new DeleteUserTagMetaResponse({}));
  }

  async deleteUserTagMeta(request: DeleteUserTagMetaRequest): Promise<DeleteUserTagMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserTagMetaWithOptions(request, runtime);
  }

  async getUserGroupInfoWithOptions(request: GetUserGroupInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserGroupInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetUserGroupInfoResponse>(await this.callApi(params, req, runtime), new GetUserGroupInfoResponse({}));
  }

  async getUserGroupInfo(request: GetUserGroupInfoRequest): Promise<GetUserGroupInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserGroupInfoWithOptions(request, runtime);
  }

  async listApiDatasourceWithOptions(request: ListApiDatasourceRequest, runtime: $Util.RuntimeOptions): Promise<ListApiDatasourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListApiDatasourceResponse>(await this.callApi(params, req, runtime), new ListApiDatasourceResponse({}));
  }

  async listApiDatasource(request: ListApiDatasourceRequest): Promise<ListApiDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApiDatasourceWithOptions(request, runtime);
  }

  async listByUserGroupIdWithOptions(request: ListByUserGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<ListByUserGroupIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userGroupIds)) {
      query["UserGroupIds"] = request.userGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListByUserGroupIdResponse>(await this.callApi(params, req, runtime), new ListByUserGroupIdResponse({}));
  }

  async listByUserGroupId(request: ListByUserGroupIdRequest): Promise<ListByUserGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listByUserGroupIdWithOptions(request, runtime);
  }

  async listCollectionsWithOptions(request: ListCollectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListCollectionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListCollectionsResponse>(await this.callApi(params, req, runtime), new ListCollectionsResponse({}));
  }

  async listCollections(request: ListCollectionsRequest): Promise<ListCollectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCollectionsWithOptions(request, runtime);
  }

  /**
    * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
    *
    * @param request ListCubeDataLevelPermissionConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListCubeDataLevelPermissionConfigResponse
   */
  async listCubeDataLevelPermissionConfigWithOptions(request: ListCubeDataLevelPermissionConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListCubeDataLevelPermissionConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListCubeDataLevelPermissionConfigResponse>(await this.callApi(params, req, runtime), new ListCubeDataLevelPermissionConfigResponse({}));
  }

  /**
    * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
    *
    * @param request ListCubeDataLevelPermissionConfigRequest
    * @return ListCubeDataLevelPermissionConfigResponse
   */
  async listCubeDataLevelPermissionConfig(request: ListCubeDataLevelPermissionConfigRequest): Promise<ListCubeDataLevelPermissionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCubeDataLevelPermissionConfigWithOptions(request, runtime);
  }

  async listDataLevelPermissionWhiteListWithOptions(request: ListDataLevelPermissionWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ListDataLevelPermissionWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListDataLevelPermissionWhiteListResponse>(await this.callApi(params, req, runtime), new ListDataLevelPermissionWhiteListResponse({}));
  }

  async listDataLevelPermissionWhiteList(request: ListDataLevelPermissionWhiteListRequest): Promise<ListDataLevelPermissionWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataLevelPermissionWhiteListWithOptions(request, runtime);
  }

  async listFavoriteReportsWithOptions(request: ListFavoriteReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListFavoriteReportsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.treeType)) {
      query["TreeType"] = request.treeType;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListFavoriteReportsResponse>(await this.callApi(params, req, runtime), new ListFavoriteReportsResponse({}));
  }

  async listFavoriteReports(request: ListFavoriteReportsRequest): Promise<ListFavoriteReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFavoriteReportsWithOptions(request, runtime);
  }

  async listPortalMenuAuthorizationWithOptions(request: ListPortalMenuAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<ListPortalMenuAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListPortalMenuAuthorizationResponse>(await this.callApi(params, req, runtime), new ListPortalMenuAuthorizationResponse({}));
  }

  async listPortalMenuAuthorization(request: ListPortalMenuAuthorizationRequest): Promise<ListPortalMenuAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPortalMenuAuthorizationWithOptions(request, runtime);
  }

  async listPortalMenusWithOptions(request: ListPortalMenusRequest, runtime: $Util.RuntimeOptions): Promise<ListPortalMenusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataPortalId)) {
      query["DataPortalId"] = request.dataPortalId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListPortalMenusResponse>(await this.callApi(params, req, runtime), new ListPortalMenusResponse({}));
  }

  async listPortalMenus(request: ListPortalMenusRequest): Promise<ListPortalMenusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPortalMenusWithOptions(request, runtime);
  }

  async listRecentViewReportsWithOptions(request: ListRecentViewReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListRecentViewReportsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.offsetDay)) {
      query["OffsetDay"] = request.offsetDay;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!Util.isUnset(request.treeType)) {
      query["TreeType"] = request.treeType;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListRecentViewReportsResponse>(await this.callApi(params, req, runtime), new ListRecentViewReportsResponse({}));
  }

  async listRecentViewReports(request: ListRecentViewReportsRequest): Promise<ListRecentViewReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecentViewReportsWithOptions(request, runtime);
  }

  async listSharedReportsWithOptions(request: ListSharedReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListSharedReportsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.treeType)) {
      query["TreeType"] = request.treeType;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListSharedReportsResponse>(await this.callApi(params, req, runtime), new ListSharedReportsResponse({}));
  }

  async listSharedReports(request: ListSharedReportsRequest): Promise<ListSharedReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSharedReportsWithOptions(request, runtime);
  }

  async listUserGroupsByUserIdWithOptions(request: ListUserGroupsByUserIdRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGroupsByUserIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListUserGroupsByUserIdResponse>(await this.callApi(params, req, runtime), new ListUserGroupsByUserIdResponse({}));
  }

  async listUserGroupsByUserId(request: ListUserGroupsByUserIdRequest): Promise<ListUserGroupsByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsByUserIdWithOptions(request, runtime);
  }

  async modifyApiDatasourceParametersWithOptions(request: ModifyApiDatasourceParametersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyApiDatasourceParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyApiDatasourceParametersResponse>(await this.callApi(params, req, runtime), new ModifyApiDatasourceParametersResponse({}));
  }

  async modifyApiDatasourceParameters(request: ModifyApiDatasourceParametersRequest): Promise<ModifyApiDatasourceParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiDatasourceParametersWithOptions(request, runtime);
  }

  async queryComponentPerformanceWithOptions(request: QueryComponentPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<QueryComponentPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.costTimeAvgMin)) {
      query["CostTimeAvgMin"] = request.costTimeAvgMin;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryComponentPerformanceResponse>(await this.callApi(params, req, runtime), new QueryComponentPerformanceResponse({}));
  }

  async queryComponentPerformance(request: QueryComponentPerformanceRequest): Promise<QueryComponentPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryComponentPerformanceWithOptions(request, runtime);
  }

  async queryCubeOptimizationWithOptions(request: QueryCubeOptimizationRequest, runtime: $Util.RuntimeOptions): Promise<QueryCubeOptimizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryCubeOptimizationResponse>(await this.callApi(params, req, runtime), new QueryCubeOptimizationResponse({}));
  }

  async queryCubeOptimization(request: QueryCubeOptimizationRequest): Promise<QueryCubeOptimizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCubeOptimizationWithOptions(request, runtime);
  }

  async queryCubePerformanceWithOptions(request: QueryCubePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<QueryCubePerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.costTimeAvgMin)) {
      query["CostTimeAvgMin"] = request.costTimeAvgMin;
    }

    if (!Util.isUnset(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryCubePerformanceResponse>(await this.callApi(params, req, runtime), new QueryCubePerformanceResponse({}));
  }

  async queryCubePerformance(request: QueryCubePerformanceRequest): Promise<QueryCubePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCubePerformanceWithOptions(request, runtime);
  }

  /**
    * f4cc43bc3***
    *
    * @param request QueryDataServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryDataServiceResponse
   */
  async queryDataServiceWithOptions(request: QueryDataServiceRequest, runtime: $Util.RuntimeOptions): Promise<QueryDataServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!Util.isUnset(request.conditions)) {
      query["Conditions"] = request.conditions;
    }

    if (!Util.isUnset(request.returnFields)) {
      query["ReturnFields"] = request.returnFields;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryDataServiceResponse>(await this.callApi(params, req, runtime), new QueryDataServiceResponse({}));
  }

  /**
    * f4cc43bc3***
    *
    * @param request QueryDataServiceRequest
    * @return QueryDataServiceResponse
   */
  async queryDataService(request: QueryDataServiceRequest): Promise<QueryDataServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDataServiceWithOptions(request, runtime);
  }

  /**
    * The data source, directory, and dataset model (including dimensions, measures, physical fields, custom SQL text, and association relationships).
    *
    * @param request QueryDatasetDetailInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryDatasetDetailInfoResponse
   */
  async queryDatasetDetailInfoWithOptions(request: QueryDatasetDetailInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryDatasetDetailInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryDatasetDetailInfoResponse>(await this.callApi(params, req, runtime), new QueryDatasetDetailInfoResponse({}));
  }

  /**
    * The data source, directory, and dataset model (including dimensions, measures, physical fields, custom SQL text, and association relationships).
    *
    * @param request QueryDatasetDetailInfoRequest
    * @return QueryDatasetDetailInfoResponse
   */
  async queryDatasetDetailInfo(request: QueryDatasetDetailInfoRequest): Promise<QueryDatasetDetailInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetDetailInfoWithOptions(request, runtime);
  }

  async queryDatasetInfoWithOptions(request: QueryDatasetInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryDatasetInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryDatasetInfoResponse>(await this.callApi(params, req, runtime), new QueryDatasetInfoResponse({}));
  }

  async queryDatasetInfo(request: QueryDatasetInfoRequest): Promise<QueryDatasetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetInfoWithOptions(request, runtime);
  }

  async queryDatasetListWithOptions(request: QueryDatasetListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDatasetListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.withChildren)) {
      query["WithChildren"] = request.withChildren;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryDatasetListResponse>(await this.callApi(params, req, runtime), new QueryDatasetListResponse({}));
  }

  async queryDatasetList(request: QueryDatasetListRequest): Promise<QueryDatasetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetListWithOptions(request, runtime);
  }

  async queryDatasetSwitchInfoWithOptions(request: QueryDatasetSwitchInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryDatasetSwitchInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryDatasetSwitchInfoResponse>(await this.callApi(params, req, runtime), new QueryDatasetSwitchInfoResponse({}));
  }

  async queryDatasetSwitchInfo(request: QueryDatasetSwitchInfoRequest): Promise<QueryDatasetSwitchInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetSwitchInfoWithOptions(request, runtime);
  }

  async queryEmbeddedInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryEmbeddedInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryEmbeddedInfoResponse>(await this.callApi(params, req, runtime), new QueryEmbeddedInfoResponse({}));
  }

  async queryEmbeddedInfo(): Promise<QueryEmbeddedInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEmbeddedInfoWithOptions(runtime);
  }

  async queryEmbeddedStatusWithOptions(request: QueryEmbeddedStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryEmbeddedStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryEmbeddedStatusResponse>(await this.callApi(params, req, runtime), new QueryEmbeddedStatusResponse({}));
  }

  async queryEmbeddedStatus(request: QueryEmbeddedStatusRequest): Promise<QueryEmbeddedStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEmbeddedStatusWithOptions(request, runtime);
  }

  async queryOrganizationWorkspaceListWithOptions(request: QueryOrganizationWorkspaceListRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrganizationWorkspaceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryOrganizationWorkspaceListResponse>(await this.callApi(params, req, runtime), new QueryOrganizationWorkspaceListResponse({}));
  }

  async queryOrganizationWorkspaceList(request: QueryOrganizationWorkspaceListRequest): Promise<QueryOrganizationWorkspaceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrganizationWorkspaceListWithOptions(request, runtime);
  }

  async queryReadableResourcesListByUserIdWithOptions(request: QueryReadableResourcesListByUserIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryReadableResourcesListByUserIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryReadableResourcesListByUserIdResponse>(await this.callApi(params, req, runtime), new QueryReadableResourcesListByUserIdResponse({}));
  }

  async queryReadableResourcesListByUserId(request: QueryReadableResourcesListByUserIdRequest): Promise<QueryReadableResourcesListByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReadableResourcesListByUserIdWithOptions(request, runtime);
  }

  async queryReportPerformanceWithOptions(request: QueryReportPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<QueryReportPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.costTimeAvgMin)) {
      query["CostTimeAvgMin"] = request.costTimeAvgMin;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryReportPerformanceResponse>(await this.callApi(params, req, runtime), new QueryReportPerformanceResponse({}));
  }

  async queryReportPerformance(request: QueryReportPerformanceRequest): Promise<QueryReportPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReportPerformanceWithOptions(request, runtime);
  }

  async queryShareListWithOptions(request: QueryShareListRequest, runtime: $Util.RuntimeOptions): Promise<QueryShareListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryShareListResponse>(await this.callApi(params, req, runtime), new QueryShareListResponse({}));
  }

  async queryShareList(request: QueryShareListRequest): Promise<QueryShareListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryShareListWithOptions(request, runtime);
  }

  async querySharesToUserListWithOptions(request: QuerySharesToUserListRequest, runtime: $Util.RuntimeOptions): Promise<QuerySharesToUserListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QuerySharesToUserListResponse>(await this.callApi(params, req, runtime), new QuerySharesToUserListResponse({}));
  }

  async querySharesToUserList(request: QuerySharesToUserListRequest): Promise<QuerySharesToUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySharesToUserListWithOptions(request, runtime);
  }

  async queryTicketInfoWithOptions(request: QueryTicketInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryTicketInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryTicketInfoResponse>(await this.callApi(params, req, runtime), new QueryTicketInfoResponse({}));
  }

  async queryTicketInfo(request: QueryTicketInfoRequest): Promise<QueryTicketInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTicketInfoWithOptions(request, runtime);
  }

  async queryUserGroupListByParentIdWithOptions(request: QueryUserGroupListByParentIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserGroupListByParentIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.parentUserGroupId)) {
      query["ParentUserGroupId"] = request.parentUserGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryUserGroupListByParentIdResponse>(await this.callApi(params, req, runtime), new QueryUserGroupListByParentIdResponse({}));
  }

  async queryUserGroupListByParentId(request: QueryUserGroupListByParentIdRequest): Promise<QueryUserGroupListByParentIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserGroupListByParentIdWithOptions(request, runtime);
  }

  async queryUserGroupMemberWithOptions(request: QueryUserGroupMemberRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserGroupMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryUserGroupMemberResponse>(await this.callApi(params, req, runtime), new QueryUserGroupMemberResponse({}));
  }

  async queryUserGroupMember(request: QueryUserGroupMemberRequest): Promise<QueryUserGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserGroupMemberWithOptions(request, runtime);
  }

  async queryUserInfoByAccountWithOptions(request: QueryUserInfoByAccountRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserInfoByAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryUserInfoByAccountResponse>(await this.callApi(params, req, runtime), new QueryUserInfoByAccountResponse({}));
  }

  async queryUserInfoByAccount(request: QueryUserInfoByAccountRequest): Promise<QueryUserInfoByAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserInfoByAccountWithOptions(request, runtime);
  }

  async queryUserInfoByUserIdWithOptions(request: QueryUserInfoByUserIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserInfoByUserIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryUserInfoByUserIdResponse>(await this.callApi(params, req, runtime), new QueryUserInfoByUserIdResponse({}));
  }

  async queryUserInfoByUserId(request: QueryUserInfoByUserIdRequest): Promise<QueryUserInfoByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserInfoByUserIdWithOptions(request, runtime);
  }

  async queryUserListWithOptions(request: QueryUserListRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryUserListResponse>(await this.callApi(params, req, runtime), new QueryUserListResponse({}));
  }

  async queryUserList(request: QueryUserListRequest): Promise<QueryUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserListWithOptions(request, runtime);
  }

  async queryUserRoleInfoInWorkspaceWithOptions(request: QueryUserRoleInfoInWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserRoleInfoInWorkspaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryUserRoleInfoInWorkspaceResponse>(await this.callApi(params, req, runtime), new QueryUserRoleInfoInWorkspaceResponse({}));
  }

  async queryUserRoleInfoInWorkspace(request: QueryUserRoleInfoInWorkspaceRequest): Promise<QueryUserRoleInfoInWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserRoleInfoInWorkspaceWithOptions(request, runtime);
  }

  async queryUserTagMetaListWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryUserTagMetaListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryUserTagMetaListResponse>(await this.callApi(params, req, runtime), new QueryUserTagMetaListResponse({}));
  }

  async queryUserTagMetaList(): Promise<QueryUserTagMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserTagMetaListWithOptions(runtime);
  }

  async queryUserTagValueListWithOptions(request: QueryUserTagValueListRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserTagValueListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryUserTagValueListResponse>(await this.callApi(params, req, runtime), new QueryUserTagValueListResponse({}));
  }

  async queryUserTagValueList(request: QueryUserTagValueListRequest): Promise<QueryUserTagValueListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserTagValueListWithOptions(request, runtime);
  }

  async queryWorksWithOptions(request: QueryWorksRequest, runtime: $Util.RuntimeOptions): Promise<QueryWorksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryWorksResponse>(await this.callApi(params, req, runtime), new QueryWorksResponse({}));
  }

  async queryWorks(request: QueryWorksRequest): Promise<QueryWorksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWorksWithOptions(request, runtime);
  }

  async queryWorksBloodRelationshipWithOptions(request: QueryWorksBloodRelationshipRequest, runtime: $Util.RuntimeOptions): Promise<QueryWorksBloodRelationshipResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryWorksBloodRelationshipResponse>(await this.callApi(params, req, runtime), new QueryWorksBloodRelationshipResponse({}));
  }

  async queryWorksBloodRelationship(request: QueryWorksBloodRelationshipRequest): Promise<QueryWorksBloodRelationshipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWorksBloodRelationshipWithOptions(request, runtime);
  }

  async queryWorksByOrganizationWithOptions(request: QueryWorksByOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<QueryWorksByOrganizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.thirdPartAuthFlag)) {
      query["ThirdPartAuthFlag"] = request.thirdPartAuthFlag;
    }

    if (!Util.isUnset(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryWorksByOrganizationResponse>(await this.callApi(params, req, runtime), new QueryWorksByOrganizationResponse({}));
  }

  async queryWorksByOrganization(request: QueryWorksByOrganizationRequest): Promise<QueryWorksByOrganizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWorksByOrganizationWithOptions(request, runtime);
  }

  async queryWorksByWorkspaceWithOptions(request: QueryWorksByWorkspaceRequest, runtime: $Util.RuntimeOptions): Promise<QueryWorksByWorkspaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.thirdPartAuthFlag)) {
      query["ThirdPartAuthFlag"] = request.thirdPartAuthFlag;
    }

    if (!Util.isUnset(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryWorksByWorkspaceResponse>(await this.callApi(params, req, runtime), new QueryWorksByWorkspaceResponse({}));
  }

  async queryWorksByWorkspace(request: QueryWorksByWorkspaceRequest): Promise<QueryWorksByWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWorksByWorkspaceWithOptions(request, runtime);
  }

  async queryWorkspaceUserListWithOptions(request: QueryWorkspaceUserListRequest, runtime: $Util.RuntimeOptions): Promise<QueryWorkspaceUserListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryWorkspaceUserListResponse>(await this.callApi(params, req, runtime), new QueryWorkspaceUserListResponse({}));
  }

  async queryWorkspaceUserList(request: QueryWorkspaceUserListRequest): Promise<QueryWorkspaceUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWorkspaceUserListWithOptions(request, runtime);
  }

  async resultCallbackWithOptions(request: ResultCallbackRequest, runtime: $Util.RuntimeOptions): Promise<ResultCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.handleReason)) {
      query["HandleReason"] = request.handleReason;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ResultCallbackResponse>(await this.callApi(params, req, runtime), new ResultCallbackResponse({}));
  }

  async resultCallback(request: ResultCallbackRequest): Promise<ResultCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resultCallbackWithOptions(request, runtime);
  }

  async saveFavoritesWithOptions(request: SaveFavoritesRequest, runtime: $Util.RuntimeOptions): Promise<SaveFavoritesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SaveFavoritesResponse>(await this.callApi(params, req, runtime), new SaveFavoritesResponse({}));
  }

  async saveFavorites(request: SaveFavoritesRequest): Promise<SaveFavoritesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveFavoritesWithOptions(request, runtime);
  }

  async setDataLevelPermissionExtraConfigWithOptions(request: SetDataLevelPermissionExtraConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetDataLevelPermissionExtraConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!Util.isUnset(request.missHitPolicy)) {
      query["MissHitPolicy"] = request.missHitPolicy;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetDataLevelPermissionExtraConfigResponse>(await this.callApi(params, req, runtime), new SetDataLevelPermissionExtraConfigResponse({}));
  }

  async setDataLevelPermissionExtraConfig(request: SetDataLevelPermissionExtraConfigRequest): Promise<SetDataLevelPermissionExtraConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDataLevelPermissionExtraConfigWithOptions(request, runtime);
  }

  async setDataLevelPermissionRuleConfigWithOptions(request: SetDataLevelPermissionRuleConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetDataLevelPermissionRuleConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleModel)) {
      query["RuleModel"] = request.ruleModel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetDataLevelPermissionRuleConfigResponse>(await this.callApi(params, req, runtime), new SetDataLevelPermissionRuleConfigResponse({}));
  }

  async setDataLevelPermissionRuleConfig(request: SetDataLevelPermissionRuleConfigRequest): Promise<SetDataLevelPermissionRuleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDataLevelPermissionRuleConfigWithOptions(request, runtime);
  }

  /**
    * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
    *
    * @param request SetDataLevelPermissionWhiteListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDataLevelPermissionWhiteListResponse
   */
  async setDataLevelPermissionWhiteListWithOptions(request: SetDataLevelPermissionWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<SetDataLevelPermissionWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.whiteListModel)) {
      query["WhiteListModel"] = request.whiteListModel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetDataLevelPermissionWhiteListResponse>(await this.callApi(params, req, runtime), new SetDataLevelPermissionWhiteListResponse({}));
  }

  /**
    * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
    *
    * @param request SetDataLevelPermissionWhiteListRequest
    * @return SetDataLevelPermissionWhiteListResponse
   */
  async setDataLevelPermissionWhiteList(request: SetDataLevelPermissionWhiteListRequest): Promise<SetDataLevelPermissionWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDataLevelPermissionWhiteListWithOptions(request, runtime);
  }

  /**
    * The execution result of the interface. Valid values:
    * *   true: The request was successful.
    * *   false: The request failed.
    *
    * @param request UpdateDataLevelPermissionStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateDataLevelPermissionStatusResponse
   */
  async updateDataLevelPermissionStatusWithOptions(request: UpdateDataLevelPermissionStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataLevelPermissionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cubeId)) {
      query["CubeId"] = request.cubeId;
    }

    if (!Util.isUnset(request.isOpen)) {
      query["IsOpen"] = request.isOpen;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateDataLevelPermissionStatusResponse>(await this.callApi(params, req, runtime), new UpdateDataLevelPermissionStatusResponse({}));
  }

  /**
    * The execution result of the interface. Valid values:
    * *   true: The request was successful.
    * *   false: The request failed.
    *
    * @param request UpdateDataLevelPermissionStatusRequest
    * @return UpdateDataLevelPermissionStatusResponse
   */
  async updateDataLevelPermissionStatus(request: UpdateDataLevelPermissionStatusRequest): Promise<UpdateDataLevelPermissionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataLevelPermissionStatusWithOptions(request, runtime);
  }

  async updateEmbeddedStatusWithOptions(request: UpdateEmbeddedStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEmbeddedStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.thirdPartAuthFlag)) {
      query["ThirdPartAuthFlag"] = request.thirdPartAuthFlag;
    }

    if (!Util.isUnset(request.worksId)) {
      query["WorksId"] = request.worksId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateEmbeddedStatusResponse>(await this.callApi(params, req, runtime), new UpdateEmbeddedStatusResponse({}));
  }

  async updateEmbeddedStatus(request: UpdateEmbeddedStatusRequest): Promise<UpdateEmbeddedStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEmbeddedStatusWithOptions(request, runtime);
  }

  async updateTicketNumWithOptions(request: UpdateTicketNumRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTicketNumResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    if (!Util.isUnset(request.ticketNum)) {
      query["TicketNum"] = request.ticketNum;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateTicketNumResponse>(await this.callApi(params, req, runtime), new UpdateTicketNumResponse({}));
  }

  async updateTicketNum(request: UpdateTicketNumRequest): Promise<UpdateTicketNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTicketNumWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adminUser)) {
      query["AdminUser"] = request.adminUser;
    }

    if (!Util.isUnset(request.authAdminUser)) {
      query["AuthAdminUser"] = request.authAdminUser;
    }

    if (!Util.isUnset(request.nickName)) {
      query["NickName"] = request.nickName;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  async updateUserGroupWithOptions(request: UpdateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userGroupDescription)) {
      query["UserGroupDescription"] = request.userGroupDescription;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!Util.isUnset(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateUserGroupResponse>(await this.callApi(params, req, runtime), new UpdateUserGroupResponse({}));
  }

  async updateUserGroup(request: UpdateUserGroupRequest): Promise<UpdateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  async updateUserTagMetaWithOptions(request: UpdateUserTagMetaRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserTagMetaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tagDescription)) {
      query["TagDescription"] = request.tagDescription;
    }

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateUserTagMetaResponse>(await this.callApi(params, req, runtime), new UpdateUserTagMetaResponse({}));
  }

  async updateUserTagMeta(request: UpdateUserTagMetaRequest): Promise<UpdateUserTagMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserTagMetaWithOptions(request, runtime);
  }

  async updateUserTagValueWithOptions(request: UpdateUserTagValueRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserTagValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!Util.isUnset(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateUserTagValueResponse>(await this.callApi(params, req, runtime), new UpdateUserTagValueResponse({}));
  }

  async updateUserTagValue(request: UpdateUserTagValueRequest): Promise<UpdateUserTagValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserTagValueWithOptions(request, runtime);
  }

  async updateWorkspaceUserRoleWithOptions(request: UpdateWorkspaceUserRoleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkspaceUserRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateWorkspaceUserRoleResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceUserRoleResponse({}));
  }

  async updateWorkspaceUserRole(request: UpdateWorkspaceUserRoleRequest): Promise<UpdateWorkspaceUserRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkspaceUserRoleWithOptions(request, runtime);
  }

  async updateWorkspaceUsersRoleWithOptions(request: UpdateWorkspaceUsersRoleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkspaceUsersRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateWorkspaceUsersRoleResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceUsersRoleResponse({}));
  }

  async updateWorkspaceUsersRole(request: UpdateWorkspaceUsersRoleRequest): Promise<UpdateWorkspaceUsersRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkspaceUsersRoleWithOptions(request, runtime);
  }

  async withdrawAllUserGroupsWithOptions(request: WithdrawAllUserGroupsRequest, runtime: $Util.RuntimeOptions): Promise<WithdrawAllUserGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<WithdrawAllUserGroupsResponse>(await this.callApi(params, req, runtime), new WithdrawAllUserGroupsResponse({}));
  }

  async withdrawAllUserGroups(request: WithdrawAllUserGroupsRequest): Promise<WithdrawAllUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.withdrawAllUserGroupsWithOptions(request, runtime);
  }

}
