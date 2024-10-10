// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDataLevelPermissionRuleUsersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","addModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface. Valid values:\\n\\n*   true: The request was successful.\\n*   false: The request failed.\\n
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:\\n\\n*   true: The request was successful.\\n*   false: The request failed.\\n
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDataLevelPermissionRuleUsersResponseBody;
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
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-***-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * Operation Type: You can set this parameter to one of the following values.
   * 
   * *   ADD: Add a whitelist
   * *   DELETE: deletes a whitelist.
   * 
   * @example
   * ADD
   */
  operateType?: string;
  /**
   * @remarks
   * The type of row-level permissions.
   * 
   * *   ROW_LEVEL: row-level permissions,
   * *   COLUMN_LEVEL: column-level permissions
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  /**
   * @example
   * 43342***435,1553a****41231
   */
  targetIds?: string;
  /**
   * @remarks
   * Modify the type of the whitelist:
   * 
   * *   1: user
   * *   2: user group
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDataLevelPermissionWhiteListResponseBody;
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
  /**
   * @remarks
   * The scope of authorization. Valid values:
   * 
   * *   1: view only
   * *   3: View and export
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  authPoint?: number;
  /**
   * @remarks
   * The validity period of the share. The value is a timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1608202110838
   */
  expireDate?: number;
  /**
   * @remarks
   * The ID of the person to be shared, which may be the user ID of the Quick BI or the user group ID.
   * 
   * *   If ShareToType is 0 (user), ShareTo is the user ID.
   * *   When ShareToType is set to 1 (user group), ShareTo is the user group ID.
   * *   When ShareToType=2 (organization), ShareTo is the ID of the organization.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  shareToId?: string;
  /**
   * @remarks
   * The share type of the template. Valid values:
   * 
   * *   0: user
   * *   1: user group
   * *   2: organization
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  shareToType?: number;
  /**
   * @remarks
   * The ID of the shared work. The works here include BI portal, dashboards, spreadsheets, and self-service access.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 05739b8e-3de0-4204-9669-7f04f02522b9
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddShareReportResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxx@163.com
   */
  accountName?: string;
  /**
   * @remarks
   * Add organization members.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  adminUser?: boolean;
  /**
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  nickName?: string;
  roleIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      nickName: 'NickName',
      roleIds: 'RoleIds',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      nickName: 'string',
      roleIds: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserResponseBody extends $tea.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: AddUserResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserResponseBody;
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
  /**
   * @remarks
   * The result of adding members to a user group is returned. Valid values:
   * 
   * *   true: The task is added.
   * *   false: The tag failed to be added.
   * 
   * This parameter is required.
   * 
   * @example
   * 555c4cd****
   */
  userGroupId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e537a5****,3dadsu****
   */
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
  /**
   * @example
   * B6141A5A-A9EF-5F16-BF34-EFB9C1CCE4F3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserGroupMemberResponseBody;
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
  /**
   * @remarks
   * The IDs of the user groups. Separate the IDs with commas (,). Example: aGroupId,bGroupId,cGroupIds
   * 
   * This parameter is required.
   * 
   * @example
   * 0d5fb19b-****-****-99da-1248fc27ca51
   */
  userGroupIds?: string;
  /**
   * @remarks
   * The user ID of the Quick BI.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e5****37a5
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserGroupMembersResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * 0822a7d9-****-****-****-f20163ab9b0d
   */
  result?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserTagMetaResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserToWorkspaceResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @example
   * 7AAB95D7-2E11-4FE2-94BC-858E4FC0C976
   */
  requestId?: string;
  result?: AddWorkspaceUsersResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddWorkspaceUsersResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
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
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllotDatasetAccelerationTaskResponseBody;
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
  /**
   * @remarks
   * Authorizes the permissions of the menu. Valid values:
   * 
   * *   1: view
   * *   3: View + Export (default)
   * 
   * @example
   * 3
   */
  authPointsValue?: number;
  /**
   * @remarks
   * The ID of the BI portal.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * The menu ID of the BI portal leaf node.
   * 
   * *   The directory menu cannot be authorized.
   * *   You can upload multiple parameters at a time. Separate multiple IDs with commas (,). The maximum number of parameters that can be modified at a time is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 54kqgoa****,pg1n135****
   */
  menuIds?: string;
  /**
   * @remarks
   * The IDs of the user groups.
   * 
   * *   You can upload multiple parameters at a time. Separate multiple IDs with commas (,). The maximum number of parameters that can be modified at a time is 200.
   * *   UserGroupIds and UserIds cannot be empty at the same time
   * 
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  userGroupIds?: string;
  /**
   * @remarks
   * The IDs of the end users. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * *   You can upload multiple parameters at a time. Separate multiple IDs with commas (,). The maximum number of parameters that can be modified at a time is 200.
   * 
   * @example
   * 204627493484****,121344444790****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 188F0B12-00EF-41B3-944A-FB7EF06C9F43
   */
  requestId?: string;
  /**
   * @remarks
   * The number of authorized menus.
   * 
   * @example
   * 2
   */
  result?: number;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeMenuResponseBody;
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
  /**
   * @example
   * False
   */
  isAdmin?: boolean;
  /**
   * @example
   * true
   */
  isAuthAdmin?: boolean;
  /**
   * @example
   * "0d5fb19b-5555-41f0-99da-1248fc27ca51,0f868dd6_68dd_4d13_8422_c5dca3bd4b61"
   */
  userGroupIds?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: BatchAddFeishuUsersResponseBodyResult;
  /**
   * @example
   * True
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchAddFeishuUsersResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 54kqgoa****,pg1n135****
   */
  menuIds?: string;
  /**
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  userGroupIds?: string;
  /**
   * @example
   * 204627493484****,121344444790****
   */
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
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  result?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelAuthorizationMenuResponseBody;
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
  /**
   * @remarks
   * The ID of the favorite user. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 121344444790****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the work to cancel the collection.
   * 
   * This parameter is required.
   * 
   * @example
   * 5d6ae4e7-cede-43cd-b4d3-d2fd442a9202
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelCollectionResponseBody;
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
  /**
   * @remarks
   * The ID of the work. The works here include BI portal, dashboards, spreadsheets, and self-service access.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the person to be shared, which may be the user ID of the Quick BI or the user group ID.
   * 
   * *   If ShareToType is 0 (user), ShareTo is the user ID.
   * *   When ShareToType is set to 1 (user group), ShareTo is the user group ID.
   * *   When ShareToType=2 (organization), ShareTo is the ID of the organization.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  shareToIds?: string;
  /**
   * @remarks
   * The deletion method. Valid values:
   * 
   * *   0: Delete by user
   * *   1: Delete by user group
   * *   2: Delete by organization
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelReportShareResponseBody;
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
  /**
   * @remarks
   * The number of menus that are successfully modified.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * This parameter is required.
   * 
   * @example
   * 54kqgoa****,pg1n135****
   */
  menuIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  result?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeVisibilityModelResponseBody;
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
  /**
   * @remarks
   * The user ID of the Quick BI to be checked.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the work. Resources here include BI portal, dashboards, spreadsheets, and self-service access.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckReadableResponseBody;
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
  /**
   * @example
   * 1
   */
  accountType?: number;
  /**
   * @example
   * 0fc6a275c7f64f17b1****a306ce0f31
   */
  cmptId?: string;
  /**
   * @example
   * 200
   */
  expireTime?: number;
  /**
   * @example
   * [{"paramKey":"price","joinType":"and","conditionList":[{"operate":">","value":"0"}]}]
   */
  globalParam?: string;
  /**
   * @example
   * 1
   */
  ticketNum?: number;
  /**
   * @example
   * 46e537466****92704c8
   */
  userId?: string;
  watermarkParam?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a206f5f3-****-e9b17c835b03
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * ccd3428c-****-****-a608-26bae29dffee
   */
  result?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTicketResponseBody;
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

export class CreateTicket4CopilotRequest extends $tea.Model {
  accountName?: string;
  /**
   * @example
   * 1
   */
  accountType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccd3428c-dd23-460c-a608-26bae29dffee
   */
  copilotId?: string;
  /**
   * @example
   * 200
   */
  expireTime?: number;
  /**
   * @example
   * 1
   */
  ticketNum?: number;
  /**
   * @example
   * 9c-asdawf-casxcasd-asdasd
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      copilotId: 'CopilotId',
      expireTime: 'ExpireTime',
      ticketNum: 'TicketNum',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'number',
      copilotId: 'string',
      expireTime: 'number',
      ticketNum: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicket4CopilotResponseBody extends $tea.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  result?: string;
  /**
   * @example
   * true
   */
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

export class CreateTicket4CopilotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTicket4CopilotResponseBody;
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
      body: CreateTicket4CopilotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the parent user group. You can add new user groups to this group:
   * 
   * *   If you enter the ID of a parent user group, the new user group is added to the user group with the ID.
   * *   If you enter -1, the new user group is added to the root directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  parentUserGroupId?: string;
  /**
   * @remarks
   * The description of the user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * User group description
   */
  userGroupDescription?: string;
  /**
   * @remarks
   * The unique ID of the user group.
   * 
   * *   If you specify the UserGroupId parameter, the system automatically generates the UserGroupId parameter. If you specify the UserGroupId parameter, the user ID is used as the user group ID. You must ensure that the user ID is unique within the organization.
   * *   Format verification: Maximum length 64, cannot be -1,
   * 
   * @example
   * pop0001
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou Financial Report
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36829379-0C38-5BC0-830A-92665BF77D4F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the added user group is returned. An empty string \\"\\" is returned if the add fails.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserGroupResponseBody;
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

export class DataSetBloodRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234235234,234235235,234235235
   */
  dataSetIds?: string;
  /**
   * @example
   * dasasgaj342351
   */
  userId?: string;
  /**
   * @example
   * PAGE
   */
  worksType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSetIds: 'DataSetIds',
      userId: 'UserId',
      worksType: 'WorksType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetIds: 'string',
      userId: 'string',
      worksType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSetBloodResponseBody extends $tea.Model {
  /**
   * @example
   * 46e537a5****,3dadsu****
   */
  requestId?: string;
  result?: DataSetBloodResponseBodyResult[];
  /**
   * @example
   * true
   */
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
      result: { 'type': 'array', 'itemType': DataSetBloodResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSetBloodResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DataSetBloodResponseBody;
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
      body: DataSetBloodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSourceBloodRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 44051300991327000048
   */
  dataSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSourceBloodResponseBody extends $tea.Model {
  /**
   * @example
   * 46e537a5****,3dadsu****
   */
  requestId?: string;
  result?: string[];
  /**
   * @example
   * true
   */
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
      result: { 'type': 'array', 'itemType': 'string' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSourceBloodResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DataSourceBloodResponseBody;
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
      body: DataSourceBloodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayTicketExpireTimeRequest extends $tea.Model {
  /**
   * @remarks
   * The time to postpone.
   * 
   * *   Unit: minutes. Valid values: 0 to 240. Unit: minutes. Valid values: 4 hours.
   * *   Expired bills cannot be extended.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  expireTime?: number;
  /**
   * @remarks
   * The value of the third-party embedded ticket, that is, the accessTicket value in the URL.
   * 
   * This parameter is required.
   * 
   * @example
   * 040e6f79d33444838e*****c7206c070
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the extension is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DelayTicketExpireTimeResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","delModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
   */
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
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataLevelPermissionRuleUsersResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a5bb24da-****-a891683e14da
   */
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
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataLevelRuleConfigResponseBody;
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
  /**
   * @remarks
   * Deletes a specified ticket from an embedded report.
   * 
   * This parameter is required.
   * 
   * @example
   * 040e6f79d****7d283c7206c070
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTicketResponseBody;
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
  /**
   * @example
   * f5****afccd9e434a274
   */
  transferUserId?: string;
  /**
   * @remarks
   * Deletes a user from a specified organization.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
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
  /**
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserFromWorkspaceResponseBody;
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
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F2775AB6-DE99-5FA6-86A4-72EA0A8AFEE3
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserGroupResponseBody;
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
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e537****
   */
  userGroupId?: string;
  /**
   * @remarks
   * The user ID of the Quick BI.
   * 
   * This parameter is required.
   * 
   * @example
   * 2fe4fbd8****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of deleting a user group member. Valid values:
   * 
   * *   true: The task is deleted.
   * *   false: The deletion failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserGroupMemberResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  userGroupIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 204627493484****
   */
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
  /**
   * @example
   * ABBAD906-3925-5D18-B23D-714053AB0AA2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserGroupMembersResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pop_001
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserTagMetaResponseBody;
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

export class GetMailTaskStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d5a59a898b634d75be5584f8dc159c62
   */
  mailId?: string;
  /**
   * @example
   * 7218865303929605212
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      mailId: 'MailId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailTaskStatusResponseBody extends $tea.Model {
  /**
   * @example
   * 38C0FEC8-1510-415C-A9F1-9AE9422BDB65
   */
  requestId?: string;
  result?: GetMailTaskStatusResponseBodyResult[];
  /**
   * @example
   * true
   */
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
      result: { 'type': 'array', 'itemType': GetMailTaskStatusResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMailTaskStatusResponseBody;
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
      body: GetMailTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * The user group modifier. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   */
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
  /**
   * @example
   * D7980306-1F08-5A88-9FE7-ECB8B9C4C0F5
   */
  requestId?: string;
  result?: GetUserGroupInfoResponseBodyResult[];
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserGroupInfoResponseBody;
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

export class GetWorksEmbedListRequest extends $tea.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * page
   */
  worksType?: string;
  /**
   * @example
   * 919818-***-*****-wdasd
   */
  wsId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      worksType: 'WorksType',
      wsId: 'WsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      worksType: 'string',
      wsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorksEmbedListResponseBody extends $tea.Model {
  /**
   * @example
   * 38C0F*****0-415****9F1-*****422BDB65
   */
  requestId?: string;
  result?: GetWorksEmbedListResponseBodyResult;
  /**
   * @example
   * true
   */
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
      result: GetWorksEmbedListResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorksEmbedListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorksEmbedListResponseBody;
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
      body: GetWorksEmbedListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceRequest extends $tea.Model {
  keyWord?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: ListApiDatasourceResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApiDatasourceResponseBody;
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
  /**
   * @remarks
   * The ID of the user group that you want to query. Separate multiple user groups with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 34fe-***-6dcb,84q9-****-4a274
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The user group query result is returned.
   */
  result?: ListByUserGroupIdResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListByUserGroupIdResponseBody;
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
  /**
   * @remarks
   * The ID of the user. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 162A632E-0A88-51CF-98F8-94FDEE82DB7D
   */
  requestId?: string;
  result?: ListCollectionsResponseBodyResult[];
  /**
   * @remarks
   * The primary key ID of the favorite record.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCollectionsResponseBody;
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
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The type of the dataset row and column permission. Valid values:
   * 
   * *   ROW_LEVEL: row-level permissions
   * *   COLUMN_LEVEL: column-level permissions
   * 
   * This parameter is required.
   * 
   * @example
   * ROW_LEVEL
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * { "isOpen": 1, "extraConfigModel": { // Additional configuration information "ruleType": "ROW_LEVEL", // The row-level permission type. "missHitPolicy": "NONE", // The hit rule policy: NONE has no permissions, and ALL has permissions. "cubeId": "7c7223 ae-31d1-4d2f-b11f-3c744528014b" // The ID of the dataset. }, "ruleType": "ROW_LEVEL", // Row-column permission type\\
   * "ruleModels": [ { "ruleUsersModel": { // The target population. "userGroups": [ "0d5fb19b- ****-1248 fc27ca51", // The ID of the user group. "4aa3f089-****-85f0-0e8ac7c2dee9" ], "users": [ "HuangJia ***2e3fa822", // The ID of the user. "4334***84358" ] }, "ruleContentModel": { "ruleContentType": "ROW_FIELD", // The row-column permission type. "ruleContentJson": "{"conditionNode":{"caption": " Period ","isMeasure":false,"pathId":"7d3b073bc6","relationOperator":"not-null","name":"7d3b073bc6","value":{"value":[""}UM]," ENueType "} // The JSON string of the row-column permission rule. "ruleOriginConfigJson": "{"operator":"and","operands":[{"labelName": " Period ","isValid":true,"uniqueId":"5","fieldId":"7d3b073bc6","error":false,"fieldType":"string",": default "" value":{"conditionOp":"not-null","conditionValue":""},"valueType":"ENUM"}}],"isRelation":true}" }, // The fixed-format JSON string required by the frontend "isOpen": 1, // The status of the row-column permission configuration. 1. On. 0. Off. "hitTakeEffect": 1, // Specifies whether the rule takes effect after a column-level permission is hit. 1 takes effect and 0 takes effect. "ruleName": "Test row-level permission_Do not delete", // The name of the row-column permission rule. "ruleLevelType": "ROW_LEVEL", // The row-column permission type. "ruleId": "a5bb24 da-772f-45e8-a43c-a891683e14da", // The ID of the row-column permission rule. "cubeId": "7c7223 ae-31d1-4d2f-b11f-3c744528014b", // The ID of the dataset. "ruleTargetScope": "OTHERS" rule takes effect: ALL owner and OTHERS designated owner. } ], "cubeId": "7c7223 ae-31d1-4d2f-b11f-3c744528014b" // The ID of the dataset. }
   * 
   * @example
   * The JSON string of the row-column permission list. For more information, see the description.
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCubeDataLevelPermissionConfigResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3d5db23c-e4f2-49dd-a883-92285b48e14a
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROW_LEVEL
   */
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
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  result?: ListDataLevelPermissionWhiteListResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataLevelPermissionWhiteListResponseBody;
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
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * PAGE
   */
  treeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: ListFavoriteReportsResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFavoriteReportsResponseBody;
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

export class ListOrganizationRoleUsersRequest extends $tea.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111111111
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRoleUsersResponseBody extends $tea.Model {
  /**
   * @example
   * BCE45E6D-9304-4F94-86BB-5A772B1615FF
   */
  requestId?: string;
  result?: ListOrganizationRoleUsersResponseBodyResult;
  /**
   * @example
   * true
   */
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
      result: ListOrganizationRoleUsersResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRoleUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOrganizationRoleUsersResponseBody;
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
      body: ListOrganizationRoleUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRolesResponseBody extends $tea.Model {
  /**
   * @example
   * 7AAB95D7-2E11-4FE2-94BC-858E4FC0C976
   */
  requestId?: string;
  result?: ListOrganizationRolesResponseBodyResult[];
  /**
   * @example
   * true
   */
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
      result: { 'type': 'array', 'itemType': ListOrganizationRolesResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOrganizationRolesResponseBody;
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
      body: ListOrganizationRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the BI portal.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The list of authorization details of the portal menu.
   */
  result?: ListPortalMenuAuthorizationResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPortalMenuAuthorizationResponseBody;
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
  /**
   * @remarks
   * The ID of the BI portal.
   * 
   * This parameter is required.
   * 
   * @example
   * 0d173abb53e84c8ca7495429163b****
   */
  dataPortalId?: string;
  /**
   * @remarks
   * The user ID in the Quick BI. When passed in, the list displays only the menus that the user has permissions on.
   * 
   * @example
   * 1234567***
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 75912036-5527-4B7E-9265-B481D6651AC2
   */
  requestId?: string;
  /**
   * @remarks
   * A JSON string that levels the details of the portal menu list. Valid values:
   * 
   * *   menuType: the type of the menu.
   * 
   *     *   0: dashboard
   *     *   1: outer chain
   *     *   2: workbook
   *     *   4: directory folder
   *     *   5: form filling
   *     *   6: self-service data retrieval
   * 
   * *   menuId: menu ID
   * 
   * *   uri: ID or URL of the resource associated with the menu
   * 
   * *   showOnlyWithAccess: Authorized Only Visible
   * 
   * *   menuName: menu display name
   * 
   * *   dependentPermisson: whether the report resource associated with the menu has permissions
   * 
   * *   children: submenu
   * 
   * @example
   * [{"children":[{"children":[{"children":[{"menuId":"54kqgoa\\*\\*\\*\\*","menuName":"Report menu","menuType":0,"showOnlyWithAccess":true,"dependentPermisson":false,"uri":"e5da4a3f-d7f9-4262-a39e-a840043c\\*\\*\\*\\*"},{\\*\\*\\*\\* "menu1nId":"pName" 135 "Directory menu","menuType":4,"showOnlyWithAccess":false,"dependentPermisson":true}],"menuId":"23a7d5d8-e55a-4737-b6a1-3c585505\\*\\*\\*\\*","menuName":"pop level -3 menu","menuType":4,"showOnlyWithAccess":true,"dependentPermisson":true}],"menuId":"80764 f3c-affd-45a1-aaa1-bb039d8a\\*\\*\\*\\*","menuName":"pop menu","menuType":4,"showOnlyWithAccess":false,"dependentPermisson":true}],"menuId":"277 f968a-22 ff-4ce6-83f0-a82950f4\\*\\*\\*\\*","menuName":"pop menu","menuType":4,"showOnlyWithAccess":false,"dependentPermisson":true}]
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPortalMenusResponseBody;
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
  /**
   * @example
   * 10
   */
  offsetDay?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  queryMode?: string;
  /**
   * @example
   * PAGE
   */
  treeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: ListRecentViewReportsResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRecentViewReportsResponseBody;
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
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * PAGE
   */
  treeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: ListSharedReportsResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSharedReportsResponseBody;
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
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
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
  /**
   * @example
   * E2440604-3059-561A-AD68-DEDBC870EB2B
   */
  requestId?: string;
  result?: ListUserGroupsByUserIdResponseBodyResult[];
  /**
   * @remarks
   * The user group modifier. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupsByUserIdResponseBody;
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

export class ListWorkspaceRoleUsersRequest extends $tea.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 726bee5a-****-43e1-9a8e-b550f0120f35
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      roleId: 'RoleId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      roleId: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRoleUsersResponseBody extends $tea.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: ListWorkspaceRoleUsersResponseBodyResult;
  /**
   * @example
   * true
   */
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
      result: ListWorkspaceRoleUsersResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRoleUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkspaceRoleUsersResponseBody;
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
      body: ListWorkspaceRoleUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRolesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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

export class ListWorkspaceRolesResponseBody extends $tea.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: ListWorkspaceRolesResponseBodyResult[];
  /**
   * @example
   * true
   */
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
      result: { 'type': 'array', 'itemType': ListWorkspaceRolesResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkspaceRolesResponseBody;
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
      body: ListWorkspaceRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualRunMailTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3423423sdfa****sdadw
   */
  mailId?: string;
  static names(): { [key: string]: string } {
    return {
      mailId: 'MailId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManualRunMailTaskResponseBody extends $tea.Model {
  /**
   * @example
   * a4d1a221d-41za1-****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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

export class ManualRunMailTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManualRunMailTaskResponseBody;
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
      body: ManualRunMailTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApiDatasourceParametersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b66a66de51f24d149116c17718138194
   */
  apiId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"name":"token","value":"xxxxxxxxxxxx"},{"name":"pageSize","value":100}]
   */
  parameters?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 726bee5a-****-43e1-9a8e-b550f0120f35
   */
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
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyApiDatasourceParametersResponseBody;
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

export class ModifyCopilotEmbedConfigRequest extends $tea.Model {
  agentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccd3428c-dd2xxxxxxxxxxxxdffee
   */
  copilotId?: string;
  /**
   * @example
   * Map<String,Object> data=new HashMap<>();
   *         data.put("allTheme",true);
   *         //data.put("allCube",true);
   *         //data.put("themes",Lists.newArrayList("1111","22222"));
   *         //data.put("llmCubes",Lists.newArrayList("33333","44444"));
   *         request.setDataRange(JSON.toJSONString(data));
   */
  dataRange?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      copilotId: 'CopilotId',
      dataRange: 'DataRange',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      copilotId: 'string',
      dataRange: 'string',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCopilotEmbedConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 4BAA4694-CC27-555F-B15A-688AA9289FEE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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

export class ModifyCopilotEmbedConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCopilotEmbedConfigResponseBody;
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
      body: ModifyCopilotEmbedConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApprovalInfoRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12352fasdavsa
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      status: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApprovalInfoResponseBody extends $tea.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryApprovalInfoResponseBodyResult;
  /**
   * @example
   * true
   */
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
      result: QueryApprovalInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApprovalInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryApprovalInfoResponseBody;
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
      body: QueryApprovalInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditLogRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1715856218001
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * function
   */
  logType?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0***
   */
  operatorId?: string;
  /**
   * @example
   * MODIFY
   */
  operatorTypes?: string;
  /**
   * @example
   * cube
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1715856218001
   */
  startDate?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      logType: 'LogType',
      operatorId: 'OperatorId',
      operatorTypes: 'OperatorTypes',
      resourceType: 'ResourceType',
      startDate: 'StartDate',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      logType: 'string',
      operatorId: 'string',
      operatorTypes: 'string',
      resourceType: 'string',
      startDate: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditLogResponseBody extends $tea.Model {
  /**
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  result?: QueryAuditLogResponseBodyResult[];
  /**
   * @example
   * true
   */
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
      result: { 'type': 'array', 'itemType': QueryAuditLogResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAuditLogResponseBody;
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
      body: QueryAuditLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryComponentPerformanceRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  costTimeAvgMin?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sevenDays
   */
  queryType?: string;
  /**
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @example
   * report
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
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
  /**
   * @example
   * BCE45E6D-9304-4F94-86BB-5A772B1615FF
   */
  requestId?: string;
  result?: QueryComponentPerformanceResponseBodyResult[];
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryComponentPerformanceResponseBody;
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

export class QueryCopilotEmbedConfigRequest extends $tea.Model {
  /**
   * @example
   * 06-ELive
   */
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

export class QueryCopilotEmbedConfigResponseBody extends $tea.Model {
  /**
   * @example
   * 1FC71085-D5FD-08E0-813A-4D4BD1031BC5
   */
  requestId?: string;
  result?: QueryCopilotEmbedConfigResponseBodyResult[];
  /**
   * @example
   * true
   */
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
      result: { 'type': 'array', 'itemType': QueryCopilotEmbedConfigResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopilotEmbedConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCopilotEmbedConfigResponseBody;
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
      body: QueryCopilotEmbedConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryCubeOptimizationResponseBodyResult[];
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCubeOptimizationResponseBody;
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
  /**
   * @example
   * 1
   */
  costTimeAvgMin?: number;
  /**
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sevenDays
   */
  queryType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @example
   * 685072a0-1fd5-40ef-ae6b-cf94e79e718f
   */
  requestId?: string;
  result?: QueryCubePerformanceResponseBodyResult[];
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCubePerformanceResponseBody;
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

export class QueryDataRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f4cc43bc3***
   */
  apiId?: string;
  conditions?: string;
  /**
   * @example
   * ["area", "city", "price", "date"]
   */
  returnFields?: string;
  /**
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      conditions: 'Conditions',
      returnFields: 'ReturnFields',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      conditions: 'string',
      returnFields: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataResponseBody extends $tea.Model {
  /**
   * @example
   * a4d1a221d-41za1-****
   */
  requestId?: string;
  result?: QueryDataResponseBodyResult;
  /**
   * @example
   * true
   */
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
      result: QueryDataResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDataResponseBody;
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
      body: QueryDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeRequest extends $tea.Model {
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llmCube
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBody extends $tea.Model {
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryDataRangeResponseBodyResult;
  /**
   * @example
   * true
   */
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
      result: QueryDataRangeResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDataRangeResponseBody;
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
      body: QueryDataRangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceRequest extends $tea.Model {
  /**
   * @remarks
   * Call an API that is created in DataService Studio.
   * 
   * This parameter is required.
   * 
   * @example
   * f4cc43bc3***
   */
  apiId?: string;
  /**
   * @remarks
   * # Prerequisites
   * 
   * You can use the Quick BI data service to create an API for the data service. For more information, see [Data service](https://help.aliyun.com/document_detail/144980.html).
   * 
   * # Limits
   * 
   * *   The Data Service feature is available only to Professional customers.
   * *   The timeout period for API calls is 60s. The QPS of a single API is 10 times per second.
   * *   If row-level permissions are enabled for datasets that are referenced by a Data Service API, the API may be blocked by row-level permission policies.
   * 
   * @example
   * For more information about API IDs in DataService, see [Data Service](https://help.aliyun.com/document_detail/144980.html).
   */
  conditions?: string;
  /**
   * @remarks
   * The query conditions of the data service. The query conditions are specified in the form of keys and values. A string of the map type. Key is the name of the request parameters parameter, and Value is the value of the request parameters parameter. Key and Value must appear in pairs.
   * 
   * **Note:**
   * 
   * *   If a value contains multiple values, the value is a List in the JSON format. Example: `area=["East China","North China","South China"]`
   * 
   * *   For dates, different input parameter formats are provided based on different types:
   * 
   *     *   Year: 2019
   *     *   Season: 2019Q1
   *     *   Month: 201901 (carry 0)
   *     *   Week: 2019-52
   *     *   Day: 20190101
   *     *   Hours: 14:00:00 (minutes and seconds are 00)
   *     *   Minutes: 14:12:00 (seconds are 00)
   *     *   Seconds: 14:34:34
   * 
   * @example
   * ["area", "city", "price", "date"]
   */
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
  /**
   * @remarks
   * The list of parameter names of the returned parameters. The value is a string of the List type.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   */
  result?: QueryDataServiceResponseBodyResult;
  /**
   * @remarks
   * { "area": ["East China", "North China"], "shopping_date": "2019Q1", }
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDataServiceResponseBody;
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

export class QueryDataServiceListRequest extends $tea.Model {
  name?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * dasdfdsa-csddf-dsadsa
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBody extends $tea.Model {
  /**
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  result?: QueryDataServiceListResponseBodyResult;
  /**
   * @example
   * true
   */
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
      result: QueryDataServiceListResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDataServiceListResponseBody;
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
      body: QueryDataServiceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetDetailInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * This parameter is required.
   * 
   * @example
   * 5820f58c-c734-4d8a-baf1-7979af4f****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the dataset data in JSON format: `{ "cube": { "dimensions": [ { "caption": "customer name", "dataType": "string", "dimensionType": "standard_dimension", "factColumn": "customer_name", "uid": "N5820f5_customer_name" }, { "caption": "datastring", "" standard_dimension", "factColumn": "order_id", "uid": "N5820f5_order_id" }, ], "measures": [ { "caption": "order amount ", "dataType": "number", "factColumn": "order_amt", "measureType": "standard_measure ": " Nderamid " }, " { "customsql": false, "dsId": "261b252d-c3c3-498a-a0a7-5d1ec6cd****", "tableName": "company_sales_record_copy" } }, "datasetId": "5820f58c-c734-4d8a-baf1-7979af4f****", "datasetName": "company_sales_record_copy12", "datasource": { "dsId": "261b252d-c3c3-498a-a0a7-5d1ec6cd****", "dsName": "Self-use", "dsType": "mysql" }, "directory" { "id": "schemaad8aad00-9c55-4984-a767-b4e0ec60****", "name": "My dataset", "pathId": "schemaad8aad00-9c55-4984-a767-b4e0ec60****", "pathName": "My dataset" }, "ownerId": "13651626232****", "ownerName": "Zhang San", "rowLevel": false, "workspaceId": "95296e95-ca89-4c7d-8af9-dedf0ad0****", "workspaceName": "Test Workspace" }`
   * 
   * @example
   * A JSON dataset is returned. For more information, see the description on the left.
   */
  result?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDatasetDetailInfoResponseBody;
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
  /**
   * @remarks
   * Queries information about a specified dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * a201c85c-******
   */
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
  /**
   * @remarks
   * Whether the operation is successfully returned. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * a4d1a221d-41za1-****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the request.
   */
  result?: QueryDatasetInfoResponseBodyResult;
  /**
   * @remarks
   * The unique ID of the dataset.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDatasetInfoResponseBody;
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  directoryId?: string;
  /**
   * @remarks
   * Information about the directory where the dataset is located
   * 
   * @example
   * Queries the datasets of a specified workspace. The datasets are sorted in descending order by creation time.
   */
  keyword?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Specifies the directory ID.
   * 
   * *   If this field is not empty, all datasets in the directory are obtained.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * true
   */
  withChildren?: boolean;
  /**
   * @remarks
   * The name of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @remarks
   * The keyword used to search for the dataset name.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Test dataset
   */
  result?: QueryDatasetListResponseBodyResult;
  /**
   * @remarks
   * Whether to recursively wrap the dataset in the subdirectory. Valid values:
   * 
   * *   true: returns datasets in all recursive subdirectories in the directoryId directory.
   * *   false: Only datasets in the directory specified by directoryId are returned, excluding subdirectories.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDatasetListResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
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
  /**
   * @example
   * FAECEFA8-09BB-58AB-BC58-C8ACEFE4D232
   */
  requestId?: string;
  result?: QueryDatasetSwitchInfoResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDatasetSwitchInfoResponseBody;
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryEmbeddedInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEmbeddedInfoResponseBody;
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
  /**
   * @remarks
   * The work ID of the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the work is enabled for embedding. Valid values:
   * 
   * *   true: embedded
   * *   false: not embedded
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEmbeddedStatusResponseBody;
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

export class QueryOrganizationRoleConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111111111
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationRoleConfigResponseBody extends $tea.Model {
  /**
   * @example
   * BCE45E6D-9304-4F94-86BB-5A772B1615FF
   */
  requestId?: string;
  result?: QueryOrganizationRoleConfigResponseBodyResult;
  /**
   * @example
   * true
   */
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
      result: QueryOrganizationRoleConfigResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationRoleConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOrganizationRoleConfigResponseBody;
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
      body: QueryOrganizationRoleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListRequest extends $tea.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryOrganizationWorkspaceListResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOrganizationWorkspaceListResponseBody;
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
  /**
   * @remarks
   * Quick BI the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The list of works that the user has permission to view.
   */
  result?: QueryReadableResourcesListByUserIdResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryReadableResourcesListByUserIdResponseBody;
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
  /**
   * @example
   * 1
   */
  costTimeAvgMin?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sevenDays
   */
  queryType?: string;
  /**
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @example
   * report
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @example
   * 1FC71085-D5FD-08E0-813A-4D4BD1031BC5
   */
  requestId?: string;
  result?: QueryReportPerformanceResponseBodyResult[];
  /**
   * @example
   * True
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryReportPerformanceResponseBody;
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
  /**
   * @remarks
   * The type of work being shared. Valid values:
   * 
   * *   product: BI portal
   * *   dashboard: dashboard
   * *   worksheet: workbook
   * *   dashboardOfflineQuery: self-service data retrieval
   * *   Analysis: Ad hoc analysis
   * *   DATAFORM
   * *   SCREEN: Data dashboard
   * 
   * This parameter is required.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
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
  /**
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  result?: QueryShareListResponseBodyResult[];
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryShareListResponseBody;
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
  /**
   * @remarks
   * The ID of the user. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e53****5ba4b679ee22e2a2927****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * Returns a list of works authorized to the user.
   */
  result?: QuerySharesToUserListResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySharesToUserListResponseBody;
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
  /**
   * @remarks
   * Obtains the details of a specified ticket for a report that is not embedded in the report.
   * 
   * This parameter is required.
   * 
   * @example
   * a27a9aec-****-****-bd40-1a21ea41d7c5
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryTicketInfoResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTicketInfoResponseBody;
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
  /**
   * @remarks
   * The ID of the parent user group.
   * 
   * *   If you enter the ID of the parent user group, you can obtain the information of the child user group under this ID.
   * *   If you enter -1, you can obtain the sub-user group information under the root directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72B19D61-B37A-5C7A-9389-0856CD7935B3
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the sub-user group.
   */
  result?: QueryUserGroupListByParentIdResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserGroupListByParentIdResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
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
  /**
   * @example
   * 48C930FF-DFCF-5986-902B-E24C202E2443
   */
  requestId?: string;
  result?: QueryUserGroupMemberResponseBodyResult[];
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserGroupMemberResponseBody;
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
  /**
   * @remarks
   * Enter the name or ID of the Alibaba Cloud account that you want to query.
   * 
   * *   When you enter an account name:
   * 
   *     *   If the organization user is a master account, such as main_account, the query account format is master account. That is, the main account main_account to be entered.
   *     *   If the organization user is a RAM user, such as a <zhangsan@test.onaliyun.com>, the query account format is the head of the RAM user, that is, the RAM user to be entered is zhangsan.
   * 
   * *   ID：
   * 
   *     *   Enter the UID of the account to query the account information.
   * 
   * This parameter is required.
   * 
   * @example
   * 1386587****@163.com
   */
  account?: string;
  parentAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      parentAccountName: 'ParentAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      parentAccountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The returned organization user information.
   */
  result?: QueryUserInfoByAccountResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserInfoByAccountResponseBody;
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
  /**
   * @remarks
   * The ID of the user. The UserID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The returned organization user information.
   */
  result?: QueryUserInfoByUserIdResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserInfoByUserIdResponseBody;
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
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryUserListResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserListResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f5698bedeb384b1986afccd9e434****
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryUserRoleInfoInWorkspaceResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserRoleInfoInWorkspaceResponseBody;
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryUserTagMetaListResponseBodyResult[];
  /**
   * @remarks
   * Queries the metadata list of member tags in an organization.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserTagMetaListResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryUserTagValueListResponseBodyResult[];
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUserTagValueListResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abcd****
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryWorksResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorksResponseBody;
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
  /**
   * @remarks
   * Obtains the kinship of a data work, including the datasets referenced by each component and query field information. Currently, only supported data works include dashboards, workbooks, and self-service data retrieval.
   * 
   * This parameter is required.
   * 
   * @example
   * abcd****
   */
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
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the request.
   */
  result?: QueryWorksBloodRelationshipResponseBodyResult[];
  /**
   * @remarks
   * The response.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorksBloodRelationshipResponseBody;
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page set when the interface is requested.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Returns a list of all works in the organization that meet the requested criteria.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * PAGE
   */
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
  /**
   * @remarks
   * The details of the list of works.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the report. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   */
  result?: QueryWorksByOrganizationResponseBodyResult;
  /**
   * @remarks
   * The total number of rows in the table.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorksByOrganizationResponseBody;
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the work. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: The embed service is not enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 0
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * 
   * @example
   * PAGE
   */
  worksType?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns a list of all works in the organization workspace that meet the requested criteria.
   */
  result?: QueryWorksByWorkspaceResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorksByWorkspaceResponseBody;
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

export class QueryWorkspaceRoleConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceRoleConfigResponseBody extends $tea.Model {
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  result?: QueryWorkspaceRoleConfigResponseBodyResult;
  /**
   * @example
   * true
   */
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
      result: QueryWorkspaceRoleConfigResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceRoleConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorkspaceRoleConfigResponseBody;
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
      body: QueryWorkspaceRoleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListRequest extends $tea.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  result?: QueryWorkspaceUserListResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryWorkspaceUserListResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c5ea0db8-****-****-9081-04bc0df4c6a3
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  handleReason?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResultCallbackResponseBody;
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
  /**
   * @remarks
   * The user ID of the collection. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 121344444790****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the collection.
   * 
   * This parameter is required.
   * 
   * @example
   * d23e84a1-82a0-4292-bfdb-521306c3****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveFavoritesResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-******-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  missHitPolicy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROW_LEVEL
   */
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
  /**
   * @example
   * B70E1FBD-E533-52F2-A7A1-E02B92F78DDF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDataLevelPermissionExtraConfigResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  result?: string;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDataLevelPermissionRuleConfigResponseBody;
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
  /**
   * @remarks
   * { "ruleType": "ROW_LEVEL", // The row-level permission type. "usersModel": { "userGroups": [ "0d5fb19b- ***-1248 fc27ca51", // The ID of the user group. "3d2c23d4-***-f6390f325c2d" ], "users": [ "4334 ***358", // Quick BI the UserID of the user. "Huang***3fa822" ] }, "cubeId": "7c7223ae-31d1-4d2f-b11f-3c744528014b" }
   * 
   * This parameter is required.
   * 
   * @example
   * {"ruleType":"ROW_LEVEL","usersModel":{"userGroups":["26edcb76-****-bdbab78267cb","187e6dd5-1611-4cf7-a034-1a93bd5fecf9"],"users":["4334***358","Huang***3fa822"]},"cubeId":"7c7223ae-****44528014b"}
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDataLevelPermissionWhiteListResponseBody;
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
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  isOpen?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROW_LEVEL
   */
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
  /**
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDataLevelPermissionStatusResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  thirdPartAuthFlag?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 897ce25e-f993-4abd-af84-d13c5610****
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  result?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEmbeddedStatusResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 040e6f79d33444838***83c7206c070
   */
  ticket?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTicketNumResponseBody;
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
  /**
   * @remarks
   * Indicates whether the organization administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Indicate whether the RAM user is a permission administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  isDeleted?: boolean;
  /**
   * @remarks
   * The nickname of the account.
   * 
   * *   Format check: The value can be up to 50 characters in length.
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * Xiao Zhang
   */
  nickName?: string;
  roleIds?: string;
  /**
   * @remarks
   * The ID of the user to be updated. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @remarks
   * The role type of the organization member. Valid values:
   * 
   * *   1 : developer
   * *   2 : visitors
   * *   3 : Analyst
   * 
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      isDeleted: 'IsDeleted',
      nickName: 'NickName',
      roleIds: 'RoleIds',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      isDeleted: 'boolean',
      nickName: 'string',
      roleIds: 'string',
      userId: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
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
  /**
   * @remarks
   * The description of the user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * Description
   */
  userGroupDescription?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * pop0001
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4AEF8C5C-D5D2-55D3-BB2F-9D3AA1B6F4FA
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the interface is successfully executed. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserGroupResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e82f6c6c0333431bad0225b2f85e****
   */
  tagId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserTagMetaResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pop_001
   */
  tagId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tagValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
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
  /**
   * @example
   * 46e5374665ba4b679ee22e2a29270
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserTagValueResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f5698bedeb384b1986afccd9e434****
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkspaceUserRoleResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 136516262323****,124498444445****
   */
  userIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
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
  /**
   * @example
   * 7AAB95D7-2E11-4FE2-94BC-858E4FC0C976
   */
  requestId?: string;
  result?: UpdateWorkspaceUsersRoleResponseBodyResult;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkspaceUsersRoleResponseBody;
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
  /**
   * @remarks
   * The ID of the user. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the interface is returned. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WithdrawAllUserGroupsResponseBody;
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
  /**
   * @example
   * xxxxxx@163.com
   */
  accountName?: string;
  /**
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @example
   * true
   */
  authAdminUser?: boolean;
  nickName?: string;
  roleIdList?: number[];
  /**
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      nickName: 'NickName',
      roleIdList: 'RoleIdList',
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
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWorkspaceUsersResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2
   */
  failure?: number;
  /**
   * @example
   * {"2046274934845893" : "AE0150010001: This user already exists.", "1213444447906552" : "AE0150010001: This user already exists."}
   */
  failureDetail?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  success?: number;
  /**
   * @example
   * 3
   */
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
  /**
   * @example
   * ACCOUNT_EXIST
   */
  code?: string;
  codeDesc?: string;
  /**
   * @example
   * 20
   */
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
  /**
   * @example
   * 10
   */
  failCount?: number;
  failResults?: BatchAddFeishuUsersResponseBodyResultFailResults[];
  /**
   * @example
   * 1
   */
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

export class DataSetBloodResponseBodyResult extends $tea.Model {
  /**
   * @example
   * ccd3428c-****-****-a608-26bae29dffee
   */
  worksId?: string;
  /**
   * @example
   * PAGE
   */
  worksType?: string;
  static names(): { [key: string]: string } {
    return {
      worksId: 'WorksId',
      worksType: 'WorksType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      worksId: 'string',
      worksType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMailTaskStatusResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2024-10-09 17:34:11
   */
  execTime?: string;
  /**
   * @example
   * c38f73f4c5xxxxxc808c41b3f4d23b7852
   */
  mailId?: string;
  /**
   * @example
   * SENT
   */
  status?: string;
  /**
   * @example
   * 1282xxx610816
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      execTime: 'execTime',
      mailId: 'mailId',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execTime: 'string',
      mailId: 'string',
      status: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupInfoResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2021-03-15 17:13:55
   */
  createTime?: string;
  /**
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  createUser?: string;
  identifiedPath?: string;
  /**
   * @example
   * 2021-03-15 20:36:40
   */
  modifiedTime?: string;
  /**
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  modifyUser?: string;
  /**
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  parentUsergroupId?: string;
  usergroupDesc?: string;
  /**
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****
   */
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

export class GetWorksEmbedListResponseBodyResultData extends $tea.Model {
  /**
   * @example
   * YYYY-mm-DD hh:MM:ss
   */
  embedTime?: string;
  /**
   * @example
   * 897ce25e-****-****-af84-d13c5610****
   */
  worksId?: string;
  worksName?: string;
  /**
   * @example
   * page
   */
  worksType?: string;
  /**
   * @example
   * 87c6b145-****-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      embedTime: 'EmbedTime',
      worksId: 'WorksId',
      worksName: 'WorksName',
      worksType: 'WorksType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedTime: 'string',
      worksId: 'string',
      worksName: 'string',
      worksType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorksEmbedListResponseBodyResult extends $tea.Model {
  data?: GetWorksEmbedListResponseBodyResultData[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 18
   */
  totalNum?: number;
  /**
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetWorksEmbedListResponseBodyResultData },
      pageNo: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceResponseBodyResultData extends $tea.Model {
  /**
   * @example
   * 0f2c3c6409be4dc0810f2a5785e816a8
   */
  apiId?: string;
  /**
   * @example
   * {"key1":"value1"}
   */
  body?: string;
  /**
   * @example
   * 0.39746094
   */
  dataSize?: number;
  /**
   * @example
   * 2022-05-25 16:19:43
   */
  dateUpdateTime?: string;
  /**
   * @example
   * 2022-05-25 16:19:43
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-25 16:19:43
   */
  gmtModified?: string;
  /**
   * @example
   * REST_API_SYNC_0f2c3c6409be4dc0810f2a5785e816a8
   */
  jobId?: string;
  /**
   * @example
   * [{"name":"token","value":"xxxxxxxxxxxx"},{"name":"pageSize","value":100}]
   */
  parameters?: string;
  showName?: string;
  /**
   * @example
   * 2
   */
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
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The time when the Secret was created.
   * 
   * @example
   * 2021-03-15 17:13:55
   */
  createTime?: string;
  /**
   * @remarks
   * The UserID of the creator in the Quick BI.
   * 
   * @example
   * 46e5*******ee22e2a292704c8
   */
  createUser?: string;
  /**
   * @remarks
   * The path of the user group.
   * 
   * @example
   * 2fe4fbd8-****-af083ea/34fd1-****-dcbc33f
   */
  identifiedPath?: string;
  /**
   * @remarks
   * The time when the protection policy was last modified.
   * 
   * @example
   * 2021-03-15 20:36:40
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The UserID of the modifier in the Quick BI.
   * 
   * @example
   * 46e5*******ee22e2a292704c8
   */
  modifyUser?: string;
  /**
   * @remarks
   * The ID of the parent user group.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af083ea
   */
  parentUsergroupId?: string;
  /**
   * @remarks
   * The description of the user group.
   * 
   * @example
   * Description
   */
  usergroupDesc?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * 34fd141d-****-4093-8c33-8e066dcbc33f
   */
  usergroupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * Test user group
   */
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
  /**
   * @remarks
   * The details of the user group that was queried.
   */
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
  /**
   * @example
   * 12373
   */
  favoriteId?: number;
  /**
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  ownerId?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  worksId?: string;
  worksName?: string;
  /**
   * @example
   * dashboardOfflineQuery
   */
  worksType?: string;
  /**
   * @example
   * 9337d121-a78f-4c1b-a8bc-f81de117****
   */
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
  /**
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @example
   * ROW_LEVEL
   */
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
  /**
   * @example
   * true
   */
  favorite?: boolean;
  favoriteDate?: string;
  /**
   * @example
   * 1640088615000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1640595729000
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  hasEditAuth?: boolean;
  /**
   * @example
   * true
   */
  hasViewAuth?: boolean;
  name?: string;
  ownerName?: string;
  /**
   * @example
   * 1365*****238860
   */
  ownerNum?: string;
  /**
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @example
   * 977c7698-****-****-****-44b7304d20fc
   */
  treeId?: string;
  /**
   * @example
   * PAGE
   */
  type?: string;
  /**
   * @example
   * 523793cb-****-****-****-aa71c65ffa39
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      favorite: 'Favorite',
      favoriteDate: 'FavoriteDate',
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
      favoriteDate: 'string',
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
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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

export class ListOrganizationRoleUsersResponseBodyResultData extends $tea.Model {
  nickName?: string;
  /**
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRoleUsersResponseBodyResult extends $tea.Model {
  data?: ListOrganizationRoleUsersResponseBodyResultData[];
  /**
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
      data: { 'type': 'array', 'itemType': ListOrganizationRoleUsersResponseBodyResultData },
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

export class ListOrganizationRolesResponseBodyResultAuthConfigList extends $tea.Model {
  /**
   * @example
   * enterprise_safety
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRolesResponseBodyResult extends $tea.Model {
  authConfigList?: ListOrganizationRolesResponseBodyResultAuthConfigList[];
  /**
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @example
   * 111111111
   */
  roleId?: number;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigList: 'AuthConfigList',
      isSystemRole: 'IsSystemRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigList: { 'type': 'array', 'itemType': ListOrganizationRolesResponseBodyResultAuthConfigList },
      isSystemRole: 'boolean',
      roleId: 'number',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalMenuAuthorizationResponseBodyResultReceivers extends $tea.Model {
  /**
   * @remarks
   * The ID of the authorization object.
   * 
   * @example
   * 121344444790****
   */
  receiverId?: string;
  /**
   * @remarks
   * The type of the authorization object. Valid values:
   * 
   * *   0: user
   * *   1: user group
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The menu ID of the BI portal leaf node.
   * 
   * @example
   * 54kqgoa****
   */
  menuId?: string;
  /**
   * @remarks
   * The details of the object to which the menu is authorized.
   */
  receivers?: ListPortalMenuAuthorizationResponseBodyResultReceivers[];
  /**
   * @remarks
   * Whether only authorization is visible. Valid values:
   * 
   * *   true: Only the authorization is visible.
   * *   false: Both are visible.
   * 
   * @example
   * true
   */
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
  /**
   * @example
   * true
   */
  favorite?: boolean;
  /**
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1640595729000
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  hasEditAuth?: boolean;
  /**
   * @example
   * true
   */
  hasViewAuth?: boolean;
  /**
   * @example
   * 1642067498000
   */
  latestViewTime?: string;
  name?: string;
  ownerName?: string;
  /**
   * @example
   * 1365*****238860
   */
  ownerNum?: string;
  /**
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @example
   * 977c7698-****-****-****-44b7304d20fc
   */
  treeId?: string;
  /**
   * @example
   * PAGE
   */
  type?: string;
  /**
   * @example
   * 7
   */
  viewCount?: number;
  /**
   * @example
   * 523793cb-****-****-****-aa71c65ffa39
   */
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
  /**
   * @example
   * 当前API返回的分页参数如TotalNum等即将下线，如有使用请及时修改
   */
  attention?: string;
  data?: ListRecentViewReportsResponseBodyResultData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * true
   */
  favorite?: boolean;
  /**
   * @example
   * 1640088615000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1644373980000
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  hasEditAuth?: boolean;
  /**
   * @example
   * true
   */
  hasViewAuth?: boolean;
  name?: string;
  ownerName?: string;
  /**
   * @example
   * 1365*****238860
   */
  ownerNum?: string;
  /**
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @example
   * 977c7698-****-****-****-44b7304d20fc
   */
  treeId?: string;
  /**
   * @example
   * PAGE
   */
  type?: string;
  /**
   * @example
   * gfidm145-****-****-9426-8f93be23****
   */
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
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 2021-03-15 17:13:55
   */
  createTime?: string;
  /**
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  createUser?: string;
  identifiedPath?: string;
  /**
   * @example
   * 2021-03-15 20:36:40
   */
  modifiedTime?: string;
  /**
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  modifyUser?: string;
  /**
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  parentUsergroupId?: string;
  usergroupDesc?: string;
  /**
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****
   */
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

export class ListWorkspaceRoleUsersResponseBodyResultData extends $tea.Model {
  nickName?: string;
  /**
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  /**
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      userId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRoleUsersResponseBodyResult extends $tea.Model {
  data?: ListWorkspaceRoleUsersResponseBodyResultData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
      data: { 'type': 'array', 'itemType': ListWorkspaceRoleUsersResponseBodyResultData },
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

export class ListWorkspaceRolesResponseBodyResultAuthConfigList extends $tea.Model {
  actionAuthKeys?: string[];
  /**
   * @example
   * portal_create
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      actionAuthKeys: 'ActionAuthKeys',
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionAuthKeys: { 'type': 'array', 'itemType': 'string' },
      authKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceRolesResponseBodyResult extends $tea.Model {
  authConfigList?: ListWorkspaceRolesResponseBodyResultAuthConfigList[];
  /**
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @example
   * 25
   */
  roleId?: number;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigList: 'AuthConfigList',
      isSystemRole: 'IsSystemRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigList: { 'type': 'array', 'itemType': ListWorkspaceRolesResponseBodyResultAuthConfigList },
      isSystemRole: 'boolean',
      roleId: 'number',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApprovalInfoResponseBodyResultData extends $tea.Model {
  /**
   * @example
   * 1359508
   */
  applicantId?: string;
  applicantName?: string;
  /**
   * @example
   * 64813ef6da58e80eef8ed2f9
   */
  applicationId?: string;
  applyReason?: string;
  /**
   * @example
   * sdasascasxasd
   */
  approverId?: string;
  /**
   * @example
   * data_fusion_002
   */
  approverName?: string;
  /**
   * @example
   * true
   */
  deleteFlag?: boolean;
  /**
   * @example
   * 1708568097135
   */
  expireDate?: number;
  /**
   * @example
   * 0
   */
  flagStatus?: number;
  /**
   * @example
   * 1687315758
   */
  gmtCreate?: number;
  /**
   * @example
   * 1640595729000
   */
  gmtModified?: number;
  handleReason?: string;
  /**
   * @example
   * acl-ct4t2e4u2x4ej1bzur
   */
  resourceId?: string;
  resourceName?: string;
  /**
   * @example
   * DASHBOARD
   */
  resourceType?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
      applicantName: 'ApplicantName',
      applicationId: 'ApplicationId',
      applyReason: 'ApplyReason',
      approverId: 'ApproverId',
      approverName: 'ApproverName',
      deleteFlag: 'DeleteFlag',
      expireDate: 'ExpireDate',
      flagStatus: 'FlagStatus',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      handleReason: 'HandleReason',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'string',
      applicantName: 'string',
      applicationId: 'string',
      applyReason: 'string',
      approverId: 'string',
      approverName: 'string',
      deleteFlag: 'boolean',
      expireDate: 'number',
      flagStatus: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      handleReason: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApprovalInfoResponseBodyResult extends $tea.Model {
  data?: QueryApprovalInfoResponseBodyResultData[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  start?: number;
  /**
   * @example
   * 3
   */
  total?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      pageSize: 'PageSize',
      start: 'Start',
      total: 'Total',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryApprovalInfoResponseBodyResultData },
      page: 'number',
      pageSize: 'number',
      start: 'number',
      total: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuditLogResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 2024-04-16 13:17:39
   */
  gmtCreate?: string;
  /**
   * @example
   * wukaibis
   */
  operatorAccountName?: string;
  /**
   * @example
   * buc_344078
   */
  operatorName?: string;
  /**
   * @example
   * CREATE
   */
  operatorType?: string;
  targetName?: string;
  /**
   * @example
   * USER
   */
  targetType?: string;
  /**
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      operatorAccountName: 'OperatorAccountName',
      operatorName: 'OperatorName',
      operatorType: 'OperatorType',
      targetName: 'TargetName',
      targetType: 'TargetType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      operatorAccountName: 'string',
      operatorName: 'string',
      operatorType: 'string',
      targetName: 'string',
      targetType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryComponentPerformanceResponseBodyResult extends $tea.Model {
  /**
   * @example
   * 0.3
   */
  cacheCostTimeAvg?: number;
  /**
   * @example
   * 3
   */
  cacheQueryCount?: number;
  /**
   * @example
   * 0696083a-ca72-4d89-8e7a-c017910e0***
   */
  componentId?: string;
  componentName?: string;
  /**
   * @example
   * 0.3
   */
  costTimeAvg?: number;
  /**
   * @example
   * 5
   */
  queryCount?: number;
  /**
   * @example
   * 0.3
   */
  queryCountAvg?: number;
  /**
   * @example
   * 5
   */
  queryOverFivePercentNum?: number;
  /**
   * @example
   * 0.3
   */
  queryOverFiveSecPercent?: string;
  /**
   * @example
   * 0.3
   */
  queryOverTenSecPercent?: string;
  /**
   * @example
   * 0.3
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @example
   * 1
   */
  queryTimeoutCount?: number;
  /**
   * @example
   * 0.3
   */
  queryTimeoutCountPercent?: number;
  /**
   * @example
   * 0.3
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @example
   * 3
   */
  quickIndexQueryCount?: number;
  /**
   * @example
   * 0.3
   */
  repeatQueryPercent?: string;
  /**
   * @example
   * 2
   */
  repeatQueryPercentNum?: number;
  /**
   * @example
   * 5
   */
  repeatSqlQueryCount?: number;
  /**
   * @example
   * 0.3
   */
  repeatSqlQueryPercent?: string;
  /**
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @example
   * ClusterRiskReport
   */
  reportName?: string;
  /**
   * @example
   * report
   */
  reportType?: string;
  /**
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
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

export class QueryCopilotEmbedConfigResponseBodyResultDataRange extends $tea.Model {
  /**
   * @example
   * true/false
   */
  allCube?: boolean;
  /**
   * @example
   * true/false
   */
  allTheme?: boolean;
  llmCubes?: string[];
  themes?: string[];
  static names(): { [key: string]: string } {
    return {
      allCube: 'AllCube',
      allTheme: 'AllTheme',
      llmCubes: 'LlmCubes',
      themes: 'Themes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCube: 'boolean',
      allTheme: 'boolean',
      llmCubes: { 'type': 'array', 'itemType': 'string' },
      themes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopilotEmbedConfigResponseBodyResult extends $tea.Model {
  agentName?: string;
  /**
   * @example
   * 9c079710-ddbe-48b3-b495-7c83c8d57cc4
   */
  copilotId?: string;
  /**
   * @example
   * qweqw12312423521
   */
  createUser?: string;
  createUserName?: string;
  dataRange?: QueryCopilotEmbedConfigResponseBodyResultDataRange;
  /**
   * @example
   * asda1231231dfs
   */
  modifyUser?: string;
  moduleName?: string;
  /**
   * @example
   * 0327
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      copilotId: 'CopilotId',
      createUser: 'CreateUser',
      createUserName: 'CreateUserName',
      dataRange: 'DataRange',
      modifyUser: 'ModifyUser',
      moduleName: 'ModuleName',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      copilotId: 'string',
      createUser: 'string',
      createUserName: 'string',
      dataRange: QueryCopilotEmbedConfigResponseBodyResultDataRange,
      modifyUser: 'string',
      moduleName: 'string',
      showName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubeOptimizationResponseBodyResultCubePerformanceDiagnoseModel extends $tea.Model {
  /**
   * @example
   * 1
   */
  cacheCostTimeAvg?: number;
  /**
   * @example
   * 2
   */
  cacheQueryCount?: number;
  /**
   * @example
   * 1.0
   */
  costTimeAvg?: number;
  /**
   * @example
   * 3e45b61a-9ba8-4c7c-8248-8dbe69945636
   */
  cubeId?: string;
  /**
   * @example
   * test
   */
  cubeName?: string;
  /**
   * @example
   * 50
   */
  queryCount?: number;
  /**
   * @example
   * 2
   */
  queryCountAvg?: number;
  /**
   * @example
   * 0.1
   */
  queryOverFivePercentNum?: number;
  /**
   * @example
   * 0.5
   */
  queryOverFiveSecPercent?: string;
  /**
   * @example
   * 0.1
   */
  queryOverTenSecPercent?: string;
  /**
   * @example
   * 0.3
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @example
   * 1
   */
  queryTimeoutCount?: number;
  /**
   * @example
   * 0.3
   */
  queryTimeoutCountPercent?: number;
  /**
   * @example
   * 1
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @example
   * 2
   */
  quickIndexQueryCount?: number;
  /**
   * @example
   * 0.1
   */
  repeatQueryPercent?: string;
  /**
   * @example
   * 2
   */
  repeatQueryPercentNum?: number;
  /**
   * @example
   * 2
   */
  repeatSqlQueryCount?: number;
  /**
   * @example
   * 0.3
   */
  repeatSqlQueryPercent?: string;
  /**
   * @example
   * 6ea74bff-c818-4188-b462-dbb45a24dbac
   */
  workspaceId?: string;
  /**
   * @example
   * eco0sh0prods
   */
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
  /**
   * @example
   * OPENQUICKENGINE
   */
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
  /**
   * @example
   * 1
   */
  cacheCostTimeAvg?: number;
  /**
   * @example
   * 1
   */
  cacheQueryCount?: number;
  /**
   * @example
   * 1
   */
  costTimeAvg?: number;
  /**
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @example
   * test
   */
  cubeName?: string;
  /**
   * @example
   * 50
   */
  queryCount?: number;
  /**
   * @example
   * 1
   */
  queryCountAvg?: number;
  /**
   * @example
   * 1.0
   */
  queryOverFivePercentNum?: number;
  /**
   * @example
   * 1.0
   */
  queryOverFiveSecPercent?: string;
  /**
   * @example
   * 1.0
   */
  queryOverTenSecPercent?: string;
  /**
   * @example
   * 1.0
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @example
   * 1
   */
  queryTimeoutCount?: number;
  /**
   * @example
   * 1
   */
  queryTimeoutCountPercent?: number;
  /**
   * @example
   * 1
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @example
   * 1
   */
  quickIndexQueryCount?: number;
  /**
   * @example
   * 0.3
   */
  repeatQueryPercent?: string;
  /**
   * @example
   * 1
   */
  repeatQueryPercentNum?: number;
  /**
   * @example
   * 1
   */
  repeatSqlQueryCount?: number;
  /**
   * @example
   * 1
   */
  repeatSqlQueryPercent?: string;
  /**
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
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

export class QueryDataResponseBodyResultHeaders extends $tea.Model {
  /**
   * @example
   * SUM
   */
  aggregator?: string;
  column?: string;
  /**
   * @example
   * string
   */
  dataType?: string;
  /**
   * @example
   * REGION
   */
  granularity?: string;
  /**
   * @example
   * area
   */
  label?: string;
  /**
   * @example
   * Dimension
   */
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

export class QueryDataResponseBodyResult extends $tea.Model {
  headers?: QueryDataResponseBodyResultHeaders[];
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
      headers: { 'type': 'array', 'itemType': QueryDataResponseBodyResultHeaders },
      sql: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels extends $tea.Model {
  alias?: string;
  createUser?: string;
  /**
   * @example
   * sdasdafas23342342342
   */
  llmCubeId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      createUser: 'CreateUser',
      llmCubeId: 'LlmCubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createUser: 'string',
      llmCubeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBodyResultApiCopilotThemeModelsApiCopilotLlmCubeModels extends $tea.Model {
  alias?: string;
  createUser?: string;
  /**
   * @example
   * 1231242231asdasda
   */
  llmCubeId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      createUser: 'CreateUser',
      llmCubeId: 'LlmCubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createUser: 'string',
      llmCubeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBodyResultApiCopilotThemeModels extends $tea.Model {
  apiCopilotLlmCubeModels?: QueryDataRangeResponseBodyResultApiCopilotThemeModelsApiCopilotLlmCubeModels[];
  createUser?: string;
  /**
   * @example
   * 36631232342312312
   */
  themeId?: string;
  themeName?: string;
  static names(): { [key: string]: string } {
    return {
      apiCopilotLlmCubeModels: 'ApiCopilotLlmCubeModels',
      createUser: 'CreateUser',
      themeId: 'ThemeId',
      themeName: 'ThemeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCopilotLlmCubeModels: { 'type': 'array', 'itemType': QueryDataRangeResponseBodyResultApiCopilotThemeModelsApiCopilotLlmCubeModels },
      createUser: 'string',
      themeId: 'string',
      themeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataRangeResponseBodyResult extends $tea.Model {
  apiCopilotLlmCubeModels?: QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels[];
  apiCopilotThemeModels?: QueryDataRangeResponseBodyResultApiCopilotThemeModels[];
  static names(): { [key: string]: string } {
    return {
      apiCopilotLlmCubeModels: 'ApiCopilotLlmCubeModels',
      apiCopilotThemeModels: 'ApiCopilotThemeModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCopilotLlmCubeModels: { 'type': 'array', 'itemType': QueryDataRangeResponseBodyResultApiCopilotLlmCubeModels },
      apiCopilotThemeModels: { 'type': 'array', 'itemType': QueryDataRangeResponseBodyResultApiCopilotThemeModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceResponseBodyResultHeaders extends $tea.Model {
  /**
   * @remarks
   * The field name, which corresponds to the physical table field name.
   * 
   * @example
   * SUM
   */
  aggregator?: string;
  /**
   * @remarks
   * The granularity of the dimension field. This field is returned only when the requested field is a date dimension or a geographical dimension. Valid values:
   * 
   * *   Date granularity: yearRegion (year), monthRegion (month), weekRegion (week), dayRegion (day), hourRegion (hour), minRegion (minute), secRegion (second)
   * *   Geographic information granularity: COUNTRY (international level), PROVINCE (provincial level), CITY (municipal level), XIAN (district /county), and REGION (regional level)
   * 
   * @example
   * The alias of the field. The key of the map data row in the result parameter values.
   */
  column?: string;
  /**
   * @remarks
   * The column header.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The field type, which is used to distinguish whether the field type is a dimension or a measure.
   * 
   * @example
   * yearRegion
   */
  granularity?: string;
  /**
   * @remarks
   * The data type of the field. generally have number, string, date, datetime, time, and geographic.
   * 
   * @example
   * area
   */
  label?: string;
  /**
   * @remarks
   * SELECT COMPANY_T_1_.\\"area\\" AS D_AREA_2_, COMPANY_T_1_.\\"city\\" AS D_CITY_3_, SUM(COMPANY_T_1_.\\"profit_amt\\") AS D_PROFIT_4_ FROM \\"quickbi_test\\".\\"company_sales_record_copy\\" AS COMPANY_T_1_ WHERE COMPANY_T_1_.\\"area\\" LIKE \\"% China East %\\" GROUP BY COMPANY_T_1_.\\"area\\", COMPANY_T_1_.\\"city\\" HAVING SUM(COMPANY_T_1_.\\"order_amt\\") > 1 LIMIT 0,10
   * 
   * @example
   * StandardDimension
   */
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
  /**
   * @remarks
   * The SQL of the request query.
   */
  headers?: QueryDataServiceResponseBodyResultHeaders[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * The query result of the API operation is returned.
   */
  sql?: string;
  /**
   * @remarks
   * Physical Field Name
   */
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

export class QueryDataServiceListResponseBodyResultDataContentFilter extends $tea.Model {
  filters?: { [key: string]: any }[];
  /**
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      logicalOperator: 'LogicalOperator',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      logicalOperator: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultDataContentReturnFieldsField extends $tea.Model {
  caption?: string;
  /**
   * @example
   * shid_star
   */
  column?: string;
  /**
   * @example
   * datetime
   */
  dataType?: string;
  /**
   * @example
   * 1c1f88cb7d
   */
  fid?: string;
  /**
   * @example
   * yearRegion
   */
  granularity?: string;
  /**
   * @example
   * sss
   */
  name?: string;
  /**
   * @example
   * dimension
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      column: 'Column',
      dataType: 'DataType',
      fid: 'Fid',
      granularity: 'Granularity',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      column: 'string',
      dataType: 'string',
      fid: 'string',
      granularity: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultDataContentReturnFields extends $tea.Model {
  /**
   * @example
   * SUM
   */
  aggregator?: string;
  /**
   * @example
   * s_number
   */
  alias?: string;
  desc?: string;
  field?: QueryDataServiceListResponseBodyResultDataContentReturnFieldsField;
  /**
   * @example
   * no
   */
  orderby?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      alias: 'Alias',
      desc: 'Desc',
      field: 'Field',
      orderby: 'Orderby',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      alias: 'string',
      desc: 'string',
      field: QueryDataServiceListResponseBodyResultDataContentReturnFieldsField,
      orderby: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultDataContent extends $tea.Model {
  /**
   * @example
   * 56f9f34a-bdba-496a-91a3-a18b1ff73a80
   */
  cubeId?: string;
  cubeName?: string;
  /**
   * @example
   * true
   */
  detail?: boolean;
  filter?: QueryDataServiceListResponseBodyResultDataContentFilter;
  returnFields?: QueryDataServiceListResponseBodyResultDataContentReturnFields[];
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      detail: 'Detail',
      filter: 'Filter',
      returnFields: 'ReturnFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      cubeName: 'string',
      detail: 'boolean',
      filter: QueryDataServiceListResponseBodyResultDataContentFilter,
      returnFields: { 'type': 'array', 'itemType': QueryDataServiceListResponseBodyResultDataContentReturnFields },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultData extends $tea.Model {
  content?: QueryDataServiceListResponseBodyResultDataContent;
  /**
   * @example
   * 7cb94cd48701
   */
  creatorId?: string;
  creatorName?: string;
  /**
   * @example
   * d14e7448-0eb3-40d3-9375-4afef8de29fd
   */
  cubeId?: string;
  cubeName?: string;
  desc?: string;
  /**
   * @example
   * 2023-05-18 14:00:02.0
   */
  gmtCreate?: string;
  /**
   * @example
   * 2023-03-21 18:02:36
   */
  gmtModified?: string;
  /**
   * @example
   * 7cb94cd48701
   */
  modifierId?: string;
  modifierName?: string;
  name?: string;
  /**
   * @example
   * 862801339
   */
  ownerId?: string;
  ownerName?: string;
  /**
   * @example
   * dtsuq3i31f5j8v848b
   */
  sid?: string;
  /**
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      desc: 'Desc',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      modifierId: 'ModifierId',
      modifierName: 'ModifierName',
      name: 'Name',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      sid: 'Sid',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: QueryDataServiceListResponseBodyResultDataContent,
      creatorId: 'string',
      creatorName: 'string',
      cubeId: 'string',
      cubeName: 'string',
      desc: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modifierId: 'string',
      modifierName: 'string',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      sid: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResult extends $tea.Model {
  data?: QueryDataServiceListResponseBodyResultData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
      data: { 'type': 'array', 'itemType': QueryDataServiceListResponseBodyResultData },
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

export class QueryDatasetInfoResponseBodyResultCubeTableList extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the data source table is valid. Valid values:
   * 
   * *   true: data source table
   * *   false: custom table
   * 
   * @example
   * odps_40
   */
  caption?: string;
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * false
   */
  customsql?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * dfefd7f4-fc6e-42c9-b4******
   */
  datasourceId?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * maxcompute
   */
  dsType?: string;
  /**
   * @remarks
   * The unique ID of the table.
   * 
   * @example
   * true
   */
  factTable?: boolean;
  /**
   * @remarks
   * Indicates whether the table is a custom SQL table. Valid values:
   * 
   * *   true: custom SQL table
   * *   false: non-custom SQL table
   * 
   * @example
   * select * from ****
   */
  sql?: string;
  /**
   * @remarks
   * The list of tables used by the dataset.
   * 
   * @example
   * viewdasb8494aab2612473cb74992159fe****
   */
  tableName?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   mysql
   * *   odps
   * *   oracle
   * *   ... and other data source types supported by Quick BI
   * 
   * @example
   * 7a62530b36
   */
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
  /**
   * @remarks
   * The unique ID of the field that is referenced by the group measure. Non-NULL if and only if the metric is a grouping metric.
   * 
   * @example
   * city
   */
  caption?: string;
  /**
   * @remarks
   * A list of all dimensions in the dataset.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The actual physical field.
   * 
   * @example
   * group_dimension
   */
  dimensionType?: string;
  /**
   * @remarks
   * Data type; value:
   * 
   * *   string: character
   * *   number: a number
   * *   datetime: time
   * 
   * @example
   * example_expression
   */
  expression?: string;
  /**
   * @remarks
   * Expression for a calculated dimension; valid only for calculated dimensions.
   * 
   * @example
   * city
   */
  factColumn?: string;
  /**
   * @example
   * hhhh
   */
  fieldDescription?: string;
  /**
   * @remarks
   * The type of the dimension. Valid values:
   * 
   * *   standard_dimension: General Dimension
   * *   calculate_dimension: calculating dimensions
   * *   group_dimension: grouping dimensions
   * 
   * @example
   * example_granularity
   */
  granularity?: string;
  /**
   * @remarks
   * The granularity.
   * 
   * @example
   * 308f7****
   */
  refUid?: string;
  /**
   * @remarks
   * The ARN.
   * 
   * @example
   * 7a62530***
   */
  tableUniqueId?: string;
  /**
   * @remarks
   * The display name of the dimension.
   * 
   * @example
   * a69774***
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      dataType: 'DataType',
      dimensionType: 'DimensionType',
      expression: 'Expression',
      factColumn: 'FactColumn',
      fieldDescription: 'FieldDescription',
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
      fieldDescription: 'string',
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
  /**
   * @remarks
   * Test directory
   * 
   * @example
   * a3eecab7-618d-4f9f-*****
   */
  id?: string;
  /**
   * @remarks
   * Test directory
   * 
   * @example
   * The name of the directory.
   */
  name?: string;
  /**
   * @remarks
   * The information about the directory to which the dataset belongs.
   * 
   * @example
   * 88b680****
   */
  pathId?: string;
  /**
   * @remarks
   * The path of the directory ID, for example, aa/bb/cc/dd.
   * 
   * @example
   * The path name of the directory ID, for example, one-level directory /two-level directory.
   */
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
  /**
   * @remarks
   * The actual physical field.
   * 
   * @example
   * profit_amt
   */
  caption?: string;
  /**
   * @remarks
   * A list of all measures for the dataset.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * Data type; value:
   * 
   * *   string: character
   * *   number: a number
   * *   datetime: time
   * 
   * @example
   * example_expression
   */
  expression?: string;
  /**
   * @remarks
   * The type of the measure. Valid values:
   * 
   * *   standard_measure: General Metrics
   * *   calculate_measure: Calculating Measures
   * 
   * @example
   * profit_amt
   */
  factColumn?: string;
  /**
   * @example
   * hhhh
   */
  fieldDescription?: string;
  /**
   * @remarks
   * An expression that calculates a measure; valid only for calculated measures.
   * 
   * @example
   * calculate_measure
   */
  measureType?: string;
  /**
   * @remarks
   * The display name of the metric.
   * 
   * @example
   * 7a62530b36
   */
  tableUniqueId?: string;
  /**
   * @remarks
   * The unique ID of the table to which the table belongs, which corresponds to the UniqueId of the CubeTypeList.
   * 
   * @example
   * 88b680****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      dataType: 'DataType',
      expression: 'Expression',
      factColumn: 'FactColumn',
      fieldDescription: 'FieldDescription',
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
      fieldDescription: 'string',
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
  /**
   * @remarks
   * The unique ID of the dataset.
   */
  cubeTableList?: QueryDatasetInfoResponseBodyResultCubeTableList[];
  /**
   * @remarks
   * The unique ID of the workspace to which the dataset belongs.
   * 
   * @example
   * false
   */
  custimzeSql?: boolean;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   mysql
   * *   odps
   * *   oracle
   * *   ... Data source types supported by Quick BI such as
   * 
   * @example
   * a201c85c-******
   */
  datasetId?: string;
  /**
   * @remarks
   * The user ID of the dataset owner in the Quick BI.
   * 
   * @example
   * opds_40
   */
  datasetName?: string;
  /**
   * @remarks
   * If it is a custom SQL table, this is the specific SQL.
   */
  dimensionList?: QueryDatasetInfoResponseBodyResultDimensionList[];
  /**
   * @remarks
   * The unique ID of the metric.
   */
  directory?: QueryDatasetInfoResponseBodyResultDirectory;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * a201c85c-******
   */
  dsId?: string;
  /**
   * @remarks
   * The time when the dataset was last modified.
   * 
   * @example
   * odps
   */
  dsName?: string;
  /**
   * @remarks
   * The point in time when the training dataset was created.
   * 
   * @example
   * odps
   */
  dsType?: string;
  /**
   * @remarks
   * Indicates whether to customize SQL statements. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * 1629450382000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The information about the dataset.
   * 
   * @example
   * 1629450382000
   */
  gmtModify?: string;
  /**
   * @remarks
   * The unique ID of the table to which the table belongs, which corresponds to the UniqueId of the CubeTypeList.
   */
  measureList?: QueryDatasetInfoResponseBodyResultMeasureList[];
  openOfflineAcceleration?: boolean;
  /**
   * @remarks
   * Test Space
   * 
   * @example
   * b8494aab26124*****
   */
  ownerId?: string;
  /**
   * @remarks
   * The unique ID of the data source.
   * 
   * @example
   * The name of the dataset owner.
   */
  ownerName?: string;
  /**
   * @remarks
   * The name of the training dataset.
   * 
   * @example
   * false
   */
  rowLevel?: boolean;
  /**
   * @remarks
   * Whether row-level permissions are enabled. Valid values:
   * 
   * *   true: The VIP Netty channel is enabled.
   * *   false: The VIP Netty channel is disabled.
   * 
   * @example
   * 420abef4-a79b-4289-b12****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Big Baby
   * 
   * @example
   * The name of the workspace in which the dataset resides.
   */
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
      openOfflineAcceleration: 'OpenOfflineAcceleration',
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
      openOfflineAcceleration: 'boolean',
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
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * @example
   * 261b252d-c3c3-498a-a0a7-5d1ec6cd****
   */
  dsId?: string;
  /**
   * @remarks
   * The time when the scaling group was modified.
   * 
   * @example
   * The name of the training dataset.
   */
  dsName?: string;
  /**
   * @remarks
   * The user ID of the dataset owner in the Quick BI.
   * 
   * @example
   * mysql
   */
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
  /**
   * @remarks
   * The ID of the directory path.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * Information about the directory where the dataset is located
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  pathId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * Test a data source
   */
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
  /**
   * @remarks
   * The details of the dataset list.
   * 
   * @example
   * 2020-11-02 10:36:05
   */
  createTime?: string;
  /**
   * @remarks
   * Test Space
   */
  dataSource?: QueryDatasetListResponseBodyResultDataDataSource;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * 5820f58c-c734-4d8a-baf1-7979af4f****
   */
  datasetId?: string;
  /**
   * @remarks
   * Tom
   * 
   * @example
   * company_sales_record_copy12
   */
  datasetName?: string;
  /**
   * @remarks
   * The number of rows per page set when the interface is requested.
   * 
   * @example
   * The total number of rows in the table.
   */
  description?: string;
  /**
   * @remarks
   * The information about the data source to which the dataset belongs.
   */
  directory?: QueryDatasetListResponseBodyResultDataDirectory;
  /**
   * @remarks
   * The nickname of the dataset owner.
   * 
   * @example
   * 2020-11-02 10:36:05
   */
  modifyTime?: string;
  openOfflineAcceleration?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 136516262323****
   */
  ownerId?: string;
  /**
   * @remarks
   * Whether to enable row-level permissions. Valid values:
   * 
   * *   true: The VIP Netty channel is enabled.
   * *   false: The incremental log backup feature is disabled.
   * 
   * @example
   * The ID of the workspace.
   */
  ownerName?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * true
   */
  rowLevel?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad06adf
   */
  workspaceId?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * Test dataset
   */
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
      openOfflineAcceleration: 'OpenOfflineAcceleration',
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
      openOfflineAcceleration: 'boolean',
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
  /**
   * @remarks
   * Returns the pagination results of the dataset list. The detailed information of the dataset list is stored in the response parameter Data.
   */
  data?: QueryDatasetListResponseBodyResultData[];
  /**
   * @remarks
   * The number of rows per page in a paged query.
   * 
   * *   Default value: 10.
   * *   Maximum value: 1,000.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Current page number for dataset list:
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @example
   * 1
   */
  isOpenColumnLevelPermission?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 1
   */
  dashboardOfflineQuery?: number;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 3
   */
  embeddedCount?: number;
  /**
   * @example
   * 100
   */
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

export class QueryOrganizationRoleConfigResponseBodyResultAuthConfigList extends $tea.Model {
  /**
   * @example
   * quick_monitor
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationRoleConfigResponseBodyResult extends $tea.Model {
  authConfigList?: QueryOrganizationRoleConfigResponseBodyResultAuthConfigList[];
  /**
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @example
   * 111111111
   */
  roleId?: number;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigList: 'AuthConfigList',
      isSystemRole: 'IsSystemRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigList: { 'type': 'array', 'itemType': QueryOrganizationRoleConfigResponseBodyResultAuthConfigList },
      isSystemRole: 'boolean',
      roleId: 'number',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrganizationWorkspaceListResponseBodyResultData extends $tea.Model {
  /**
   * @example
   * true
   */
  allowPublishOperation?: boolean;
  /**
   * @example
   * true
   */
  allowShareOperation?: boolean;
  /**
   * @example
   * 2020-11-10 17:51:07
   */
  createTime?: string;
  /**
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  createUser?: string;
  /**
   * @example
   * pop****@aliyun.com
   */
  createUserAccountName?: string;
  /**
   * @example
   * 2020-11-10 17:51:07
   */
  modifiedTime?: string;
  /**
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  modifyUser?: string;
  /**
   * @example
   * pop****@aliyun.com
   */
  modifyUserAccountName?: string;
  /**
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  organizationId?: string;
  /**
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  owner?: string;
  /**
   * @example
   * pop****@aliyun.com
   */
  ownerAccountName?: string;
  workspaceDescription?: string;
  /**
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
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
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * e4276ea5-b232-4fb1-8f0f-efcee4a2****
   */
  id?: string;
  name?: string;
  /**
   * @example
   * e4276ea5-b232-4fb1-8f0f-efcee4a2****
   */
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
  /**
   * @remarks
   * The timestamp of the creation time in milliseconds.
   * 
   * @example
   * 1611023338000
   */
  createTime?: string;
  /**
   * @remarks
   * Remarks on the work.
   * 
   * @example
   * Description
   */
  description?: string;
  directory?: QueryReadableResourcesListByUserIdResponseBodyResultDirectory;
  /**
   * @remarks
   * The name of the Alibaba Cloud account to which the modifier belongs.
   * 
   * @example
   * Li Si
   */
  modifyName?: string;
  /**
   * @example
   * 1611023338000
   */
  modifyTime?: string;
  /**
   * @remarks
   * The Quick BI UserID of the work owner.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the owner.
   * 
   * @example
   * Tom
   */
  ownerName?: string;
  /**
   * @remarks
   * Security policies for collaborative authorization of works. Valid values:
   * 
   * *   0: private
   * *   12: Authorize specified members
   * *   1 or 11: Authorize all workspace members
   * 
   * > 
   * 
   * *   If you use legacy permissions, the return value is 1.
   * 
   * *   If you use the new permissions, the return value is 11.
   * 
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @remarks
   * The status of the report. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: The embed service is not enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 1
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The name of the work.
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * 
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 03366b16-69ce-43c8-b782-56c2f6ec****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * Test Workspace
   */
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
  /**
   * @example
   * 2.2
   */
  cacheCostTimeAvg?: number;
  /**
   * @example
   * 1
   */
  cacheQueryCount?: number;
  /**
   * @example
   * 1
   */
  componentQueryCount?: number;
  /**
   * @example
   * 2.0
   */
  componentQueryCountAvg?: number;
  /**
   * @example
   * 0.2
   */
  costTimeAvg?: number;
  /**
   * @example
   * 50
   */
  queryCount?: number;
  /**
   * @example
   * 3.3
   */
  queryCountAvg?: number;
  /**
   * @example
   * 0.5
   */
  queryOverFivePercentNum?: number;
  /**
   * @example
   * 0.5
   */
  queryOverFiveSecPercent?: string;
  /**
   * @example
   * 0.5
   */
  queryOverTenSecPercent?: string;
  /**
   * @example
   * 0.5
   */
  queryOverTenSecPercentNum?: number;
  /**
   * @example
   * 8
   */
  queryTimeoutCount?: number;
  /**
   * @example
   * 0.5
   */
  queryTimeoutCountPercent?: number;
  /**
   * @example
   * 10
   */
  quickIndexCostTimeAvg?: number;
  /**
   * @example
   * 5
   */
  quickIndexQueryCount?: number;
  /**
   * @example
   * 0.8
   */
  repeatQueryPercent?: string;
  /**
   * @example
   * 3
   */
  repeatQueryPercentNum?: number;
  /**
   * @example
   * 1
   */
  repeatSqlQueryCount?: number;
  /**
   * @example
   * 0.7
   */
  repeatSqlQueryPercent?: string;
  /**
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @example
   * ClusterAddonUpgradeReport
   */
  reportName?: string;
  /**
   * @example
   * report
   */
  reportType?: string;
  /**
   * @example
   * ab46ed33-6278-4ef7-8013-8c1335f266ee
   */
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
  /**
   * @example
   * 3
   */
  authPoint?: number;
  /**
   * @example
   * 1640102400000
   */
  expireDate?: number;
  /**
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @example
   * 0ab9659e-29cf-47d7-a364-3a91553b****
   */
  shareId?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  shareToId?: string;
  shareToName?: string;
  /**
   * @example
   * 0
   */
  shareToType?: number;
  /**
   * @example
   * product
   */
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
  /**
   * @remarks
   * The ID of the directory where the resource is located.
   * 
   * @example
   * f7f6e22b-83be-47fd-b49d-9ca686a9****
   */
  id?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * Chart Report
   */
  name?: string;
  /**
   * @remarks
   * The path ID of the directory where the resource is located.
   */
  pathId?: string;
  /**
   * @remarks
   * The path name of the directory where the resource is located.
   * 
   * @example
   * Level -1 Directory /Level -2 Directory
   */
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
  /**
   * @remarks
   * The timestamp of the creation time in milliseconds.
   * 
   * @example
   * 1530078690000
   */
  createTime?: string;
  /**
   * @remarks
   * Remarks on the work.
   * 
   * @example
   * Description of the test report
   */
  description?: string;
  /**
   * @remarks
   * Information about the directory where the work is located.
   */
  directory?: QuerySharesToUserListResponseBodyResultDirectory;
  /**
   * @remarks
   * The name of the Alibaba Cloud account to which the modifier belongs.
   * 
   * @example
   * 13855265****@163.com
   */
  modifyName?: string;
  /**
   * @remarks
   * The timestamp of the modification time in milliseconds.
   * 
   * @example
   * 1530078690000
   */
  modifyTime?: string;
  /**
   * @remarks
   * The UserID of the work owner in Quickbi.
   * 
   * @example
   * 74f5527216d14e9892245320ebf2****
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the work owner.
   * 
   * @example
   * w****@aliyun.com
   */
  ownerName?: string;
  /**
   * @remarks
   * Security policies for collaborative authorization of works. Valid values:
   * 
   * *   0: private
   * *   12: Authorize specified members
   * *   1 or 11: Authorize all workspace members
   * 
   * > 
   * 
   * *   If you use legacy permissions, the return value is 1.
   * 
   * *   If you use the new permissions, the return value is 11.
   * 
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @remarks
   * The publishing status of the report. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: No embedding is enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 0
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The name of the report.
   * 
   * @example
   * Test report
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * *   dashboardOfflineQuery: self-service data retrieval
   * 
   * @example
   * DATAFORM
   */
  workType?: string;
  /**
   * @remarks
   * The ID of the operations report.
   * 
   * @example
   * 97f7f4c1-543a-4069-8e8d-a56cfcd6****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the report belongs.
   * 
   * @example
   * c5f86ad2-ef53-4c51-8720-162ecfdb****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the report belongs.
   * 
   * @example
   * Return to Professional Edition
   */
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
  /**
   * @example
   * a27a9aec-****-****-bd40-1a21ea41d7c5
   */
  accessTicket?: string;
  /**
   * @example
   * sfdgsds-****-****-a608-mghdgd
   */
  cmptId?: string;
  globalParam?: string;
  /**
   * @example
   * 2022-01-30 03:03:49
   */
  invalidTime?: string;
  /**
   * @example
   * 9999
   */
  maxTicketNum?: number;
  /**
   * @example
   * 2fe4fbd8-****-****-b3e1-e92c7af083ea
   */
  organizationId?: string;
  /**
   * @example
   * 2022-01-09 22:23:49
   */
  registerTime?: string;
  /**
   * @example
   * 47
   */
  usedTicketNum?: number;
  /**
   * @example
   * 974e50**********9033f46
   */
  userId?: string;
  watermarkParam?: string;
  /**
   * @example
   * ccd3428c-****-****-a608-26bae29dffee
   */
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
  /**
   * @remarks
   * The time when the sub-user group was created.
   * 
   * @example
   * 2020-10-30 10:03:09
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the sub-user group. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * @example
   * 136516262323****
   */
  createUser?: string;
  /**
   * @remarks
   * Directory level of the sub-user group.
   */
  identifiedPath?: string;
  /**
   * @remarks
   * The time when the sub-user group was last modified.
   * 
   * @example
   * 2020-11-16 15:49:08
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The user who modified the subgroup. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * @example
   * 136516262323****
   */
  modifyUser?: string;
  /**
   * @remarks
   * The ID of the parent user group.
   * 
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  parentUserGroupId?: string;
  /**
   * @remarks
   * The description of the sub-user group.
   * 
   * @example
   * User Group for Testing
   */
  userGroupDescription?: string;
  /**
   * @remarks
   * The ID of the sub-user group.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the sub-user group.
   * 
   * @example
   * popapi test group
   */
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
  /**
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  id?: string;
  /**
   * @example
   * true
   */
  isUserGroup?: boolean;
  name?: string;
  /**
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
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
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 135****5848
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that corresponds to the member. (If you use a RAM user, the domain name information that follows @ is removed. For example, if you use a <test@test.com>, test is returned.)
   * 
   * @example
   * 1386587****@163.com
   */
  accountName?: string;
  /**
   * @remarks
   * Whether you are an administrator of the organization. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Whether you are a permission administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * 1386587****@163.com
   */
  email?: string;
  /**
   * @remarks
   * The nickname of the account.
   * 
   * @example
   * Test user
   */
  nickName?: string;
  /**
   * @remarks
   * The phone number of the alert contact.
   * 
   * @example
   * 1386587****
   */
  phone?: string;
  roleIdList?: number[];
  /**
   * @remarks
   * The UserID in the Quick BI.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @remarks
   * The role type of the organization member. Valid values:
   * 
   * *   1 : developer
   * *   2 : visitors
   * *   3 : Analyst
   * 
   * @example
   * 1
   */
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
      roleIdList: 'RoleIdList',
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
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByUserIdResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 135****5848
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that corresponds to the member.
   * 
   * @example
   * 1386587****@163.com
   */
  accountName?: string;
  /**
   * @remarks
   * Whether you are an administrator of the organization. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Whether you are a permission administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * 1386587****@163.com
   */
  email?: string;
  /**
   * @remarks
   * The nickname of the account.
   * 
   * @example
   * Test user
   */
  nickName?: string;
  /**
   * @remarks
   * The phone number of the alert contact.
   * 
   * @example
   * 1386587****
   */
  phone?: string;
  roleIdList?: number[];
  /**
   * @remarks
   * The UserID in the Quick BI.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @remarks
   * The role type of the organization member. Valid values:
   * 
   * *   1 : developer
   * *   2 : visitors
   * *   3 : Analyst
   * 
   * @example
   * 1
   */
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
      roleIdList: 'RoleIdList',
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
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
      userType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListResponseBodyResultData extends $tea.Model {
  /**
   * @example
   * 1355********
   */
  accountId?: string;
  accountName?: string;
  /**
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @example
   * true
   */
  authAdminUser?: boolean;
  joinedDate?: number;
  lastLoginTime?: number;
  nickName?: string;
  roleIdList?: number[];
  /**
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      joinedDate: 'JoinedDate',
      lastLoginTime: 'LastLoginTime',
      nickName: 'NickName',
      roleIdList: 'RoleIdList',
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
      joinedDate: 'number',
      lastLoginTime: 'number',
      nickName: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
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
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * role_workspace_admin
   */
  roleCode?: string;
  /**
   * @example
   * 25
   */
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
  /**
   * @example
   * pop_001
   */
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
  /**
   * @example
   * pop_001
   */
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
  /**
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
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
  /**
   * @example
   * 0
   */
  auth3rdFlag?: number;
  description?: string;
  directory?: QueryWorksResponseBodyResultDirectory;
  /**
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1496651577000
   */
  gmtModify?: string;
  modifyName?: string;
  /**
   * @example
   * 9187a612aa474e2a8ac1414d5529****
   */
  ownerId?: string;
  ownerName?: string;
  publicFlag?: boolean;
  publicInvalidTime?: number;
  /**
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  workName?: string;
  /**
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  worksId?: string;
  /**
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
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
      publicFlag: 'PublicFlag',
      publicInvalidTime: 'PublicInvalidTime',
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
      publicFlag: 'boolean',
      publicInvalidTime: 'number',
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
  /**
   * @remarks
   * Indices whether the metric. Valid values:
   * 
   * true false
   * 
   * @example
   * area_column
   */
  areaId?: string;
  /**
   * @remarks
   * The ID of the owning location.
   * 
   * @example
   * The name of the owning location.
   */
  areaName?: string;
  /**
   * @remarks
   * The globally unique PathId.
   * 
   * @example
   * order_number
   */
  caption?: string;
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * number
   */
  dataType?: string;
  /**
   * @remarks
   * The type of the field. Valid values:
   * 
   * *   string: string type
   * *   date: a date type that contains only the year, month, and day parts
   * *   datetime: a common date type
   * *   time: a date type that contains only hours, minutes, and seconds.
   * *   number: numeric
   * *   boolean: Boolean type
   * *   geographical: geographical location
   * *   url: string type
   * *   imageUrl: the type of the image link.
   * *   multivalue: a multi-value column
   * 
   * @example
   * true
   */
  isMeasure?: boolean;
  /**
   * @remarks
   * The unique ID of the field.
   * 
   * @example
   * schema7d1944eb-443e-48c6-8123-bf45a99e7e74.dc78a4ed-880d-452e-b017-90cfc10c83e5_company_sales_record.[Ndc78a4_order_level].[Ndc78a4_order_level].[Ndc78a4_order_level]
   */
  pathId?: string;
  /**
   * @remarks
   * A list of query parameter reference columns.
   * 
   * @example
   * Ndc78a4_order_number
   */
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
  /**
   * @remarks
   * List of work blood information.
   * 
   * @example
   * 0696083a-ca72-4d89-8e7a-c017910e0***
   */
  componentId?: string;
  /**
   * @remarks
   * The ID of the component that you want to modify.
   * 
   * @example
   * The name of the component.
   */
  componentName?: string;
  /**
   * @remarks
   * Line
   * 
   * @example
   * 3
   */
  componentType?: number;
  /**
   * @remarks
   * The type of the image component.
   * 
   * @example
   * LINE
   */
  componentTypeName?: string;
  /**
   * @remarks
   * Column (Measure)
   * 
   * @example
   * dc78a4ed-880d-452e-b017-90cfc10c83e5_company_sales_record
   */
  datasetId?: string;
  /**
   * @remarks
   * The name of the component type.
   */
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
  /**
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
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
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * 1
   */
  auth3rdFlag?: number;
  /**
   * @remarks
   * The hierarchical structure of the directory ID to which the directory belongs. Separate the hierarchical structure with a /.
   * 
   * @example
   * The hierarchical structure of the directory to which the directory belongs. Separate the hierarchical structure with a (/).
   */
  description?: string;
  /**
   * @remarks
   * The ID of the directory.
   */
  directory?: QueryWorksByOrganizationResponseBodyResultDataDirectory;
  /**
   * @remarks
   * Test directory
   * 
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Test Workspace
   * 
   * @example
   * 1572334870000
   */
  gmtModify?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * The name of the work.
   */
  modifyName?: string;
  /**
   * @remarks
   * Security policies for collaborative authorization of works. Valid values:
   * 
   * *   0: private
   * *   12: Authorize specified members
   * *   1 or 11: Authorize all workspace members
   * 
   * > 
   * 
   * *   If you use legacy permissions, the return value is 1.
   * 
   * *   If you use the new permissions, the return value is 11.
   * 
   * @example
   * Remarks on the work.
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the person who modified the work.
   * 
   * @example
   * Tom
   */
  ownerName?: string;
  publicFlag?: boolean;
  publicInvalidTime?: number;
  /**
   * @remarks
   * The directory to which the work belongs.
   * 
   * @example
   * 1
   */
  securityLevel?: string;
  /**
   * @remarks
   * Li Si
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Test directory
   * 
   * @example
   * The name of the directory.
   */
  workName?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @remarks
   * The user ID of the work owner in the Quick BI.
   * 
   * @example
   * 897ce25e-****-****-af84-d13c5610****
   */
  worksId?: string;
  /**
   * @remarks
   * Test report
   * 
   * @example
   * The timestamp of the creation of the work in milliseconds.
   */
  workspaceId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * The name of the Alibaba Cloud account that modified the work.
   */
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
      publicFlag: 'PublicFlag',
      publicInvalidTime: 'PublicInvalidTime',
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
      publicFlag: 'boolean',
      publicInvalidTime: 'number',
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
  /**
   * @remarks
   * The Alibaba Cloud account name of the work owner.
   */
  data?: QueryWorksByOrganizationResponseBodyResultData[];
  /**
   * @remarks
   * The timestamp of the modification of the work in milliseconds.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: The embed service is not enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  id?: string;
  name?: string;
  /**
   * @remarks
   * The hierarchical structure of the directory ID to which the directory belongs. Separate the hierarchical structure with a /.
   * 
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  pathId?: string;
  /**
   * @remarks
   * The hierarchical structure of the directory to which the directory belongs. Separate the hierarchical structure with a (/).
   * 
   * @example
   * Test directory
   */
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
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: The embed service is not enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 1
   */
  auth3rdFlag?: number;
  /**
   * @remarks
   * Remarks on the work.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The directory to which the work belongs.
   */
  directory?: QueryWorksByWorkspaceResponseBodyResultDataDirectory;
  /**
   * @remarks
   * The timestamp of the creation of the work in milliseconds.
   * 
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp of the modification of the work in milliseconds.
   * 
   * @example
   * 1572334870000
   */
  gmtModify?: string;
  /**
   * @remarks
   * Nickname of the work modifier.
   * 
   * @example
   * Tom
   */
  modifyName?: string;
  /**
   * @remarks
   * The user ID of the work owner in the Quick BI.
   * 
   * @example
   * The name of the workspace to which the work belongs.
   */
  ownerId?: string;
  /**
   * @remarks
   * The nickname of the work owner.
   * 
   * @example
   * Li Si
   */
  ownerName?: string;
  publicFlag?: boolean;
  publicInvalidTime?: number;
  /**
   * @remarks
   * Security policies for collaborative authorization of works. Valid values:
   * 
   * *   0: private
   * *   12: Authorize specified members
   * *   1 or 11: Authorize all workspace members
   * 
   * > 
   * 
   * *   If you use legacy permissions, the return value is 1.
   * 
   * *   If you use the new permissions, the return value is 11.
   * 
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @remarks
   * Status of dashboards, full-screen dashboards, spreadsheets. The default value of other work types is 1. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The name of the work.
   * 
   * @example
   * Test report
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * *   dashboardOfflineQuery: self-service data retrieval
   * *   Analysis: Ad hoc analysis
   * *   DATAFORM: form filling
   * 
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 897ce25e-f993-4abd-af84-d13c5610****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * Test Workspace
   */
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
      publicFlag: 'PublicFlag',
      publicInvalidTime: 'PublicInvalidTime',
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
      publicFlag: 'boolean',
      publicInvalidTime: 'number',
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
  /**
   * @remarks
   * The details of the list of works.
   */
  data?: QueryWorksByWorkspaceResponseBodyResultData[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page set when the interface is requested.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rows in the table.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
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

export class QueryWorkspaceRoleConfigResponseBodyResultAuthConfigList extends $tea.Model {
  actionAuthKeys?: string[];
  /**
   * @example
   * portal_create
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      actionAuthKeys: 'ActionAuthKeys',
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionAuthKeys: { 'type': 'array', 'itemType': 'string' },
      authKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceRoleConfigResponseBodyResult extends $tea.Model {
  authConfigList?: QueryWorkspaceRoleConfigResponseBodyResultAuthConfigList[];
  /**
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @example
   * 25
   */
  roleId?: number;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigList: 'AuthConfigList',
      isSystemRole: 'IsSystemRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigList: { 'type': 'array', 'itemType': QueryWorkspaceRoleConfigResponseBodyResultAuthConfigList },
      isSystemRole: 'boolean',
      roleId: 'number',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceUserListResponseBodyResultDataRole extends $tea.Model {
  /**
   * @example
   * role_workspace_admin
   */
  roleCode?: string;
  /**
   * @example
   * 25
   */
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
  /**
   * @example
   * 16020915****8429
   */
  accountId?: string;
  /**
   * @example
   * pop****@aliyunid.test
   */
  accountName?: string;
  nickName?: string;
  role?: QueryWorkspaceUserListResponseBodyResultDataRole;
  /**
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
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
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 0
   */
  failure?: number;
  failureDetail?: { [key: string]: any };
  /**
   * @example
   * 2
   */
  success?: number;
  /**
   * @example
   * 2
   */
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
   * Add selected groups of people incrementally for a single row and column permission rule.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.\\n
   * 
   * @param request - AddDataLevelPermissionRuleUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataLevelPermissionRuleUsersResponse
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
   * Add selected groups of people incrementally for a single row and column permission rule.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.\\n
   * 
   * @param request - AddDataLevelPermissionRuleUsersRequest
   * @returns AddDataLevelPermissionRuleUsersResponse
   */
  async addDataLevelPermissionRuleUsers(request: AddDataLevelPermissionRuleUsersRequest): Promise<AddDataLevelPermissionRuleUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
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
   * 43342***435,1553a****41231
   * 
   * @remarks
   * ROW_LEVEL
   * 
   * @param request - AddDataLevelPermissionWhiteListRequest
   * @returns AddDataLevelPermissionWhiteListResponse
   */
  async addDataLevelPermissionWhiteList(request: AddDataLevelPermissionWhiteListRequest): Promise<AddDataLevelPermissionWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDataLevelPermissionWhiteListWithOptions(request, runtime);
  }

  /**
   * Add a sharing configuration for data works.
   * 
   * @param request - AddShareReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddShareReportResponse
   */
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

  /**
   * Add a sharing configuration for data works.
   * 
   * @param request - AddShareReportRequest
   * @returns AddShareReportResponse
   */
  async addShareReport(request: AddShareReportRequest): Promise<AddShareReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addShareReportWithOptions(request, runtime);
  }

  /**
   * auditing
   * 
   * @param request - AddUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserResponse
   */
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleIds)) {
      body["RoleIds"] = request.roleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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

  /**
   * auditing
   * 
   * @param request - AddUserRequest
   * @returns AddUserResponse
   */
  async addUser(request: AddUserRequest): Promise<AddUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @param request - AddUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserGroupMemberResponse
   */
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

  /**
   * The ID of the request.
   * 
   * @param request - AddUserGroupMemberRequest
   * @returns AddUserGroupMemberResponse
   */
  async addUserGroupMember(request: AddUserGroupMemberRequest): Promise<AddUserGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * Add users to a specified user group at a time.
   * 
   * @param request - AddUserGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserGroupMembersResponse
   */
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

  /**
   * Add users to a specified user group at a time.
   * 
   * @param request - AddUserGroupMembersRequest
   * @returns AddUserGroupMembersResponse
   */
  async addUserGroupMembers(request: AddUserGroupMembersRequest): Promise<AddUserGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserGroupMembersWithOptions(request, runtime);
  }

  /**
   * Add the metadata of an organization member tag.
   * 
   * @param request - AddUserTagMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserTagMetaResponse
   */
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

  /**
   * Add the metadata of an organization member tag.
   * 
   * @param request - AddUserTagMetaRequest
   * @returns AddUserTagMetaResponse
   */
  async addUserTagMeta(request: AddUserTagMetaRequest): Promise<AddUserTagMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserTagMetaWithOptions(request, runtime);
  }

  /**
   * 添加成员到指定工作空间。
   * 
   * @param request - AddUserToWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToWorkspaceResponse
   */
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

  /**
   * 添加成员到指定工作空间。
   * 
   * @param request - AddUserToWorkspaceRequest
   * @returns AddUserToWorkspaceResponse
   */
  async addUserToWorkspace(request: AddUserToWorkspaceRequest): Promise<AddUserToWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToWorkspaceWithOptions(request, runtime);
  }

  /**
   * 批量添加成员到工作空间。
   * 
   * @param request - AddWorkspaceUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWorkspaceUsersResponse
   */
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

  /**
   * 批量添加成员到工作空间。
   * 
   * @param request - AddWorkspaceUsersRequest
   * @returns AddWorkspaceUsersResponse
   */
  async addWorkspaceUsers(request: AddWorkspaceUsersRequest): Promise<AddWorkspaceUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addWorkspaceUsersWithOptions(request, runtime);
  }

  /**
   * 触发数据集抽取加速。
   * 
   * @param request - AllotDatasetAccelerationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllotDatasetAccelerationTaskResponse
   */
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

  /**
   * 触发数据集抽取加速。
   * 
   * @param request - AllotDatasetAccelerationTaskRequest
   * @returns AllotDatasetAccelerationTaskResponse
   */
  async allotDatasetAccelerationTask(request: AllotDatasetAccelerationTaskRequest): Promise<AllotDatasetAccelerationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allotDatasetAccelerationTaskWithOptions(request, runtime);
  }

  /**
   * Batch authorization of BI portal menu will be skipped automatically.
   * 
   * @param request - AuthorizeMenuRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeMenuResponse
   */
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

  /**
   * Batch authorization of BI portal menu will be skipped automatically.
   * 
   * @param request - AuthorizeMenuRequest
   * @returns AuthorizeMenuResponse
   */
  async authorizeMenu(request: AuthorizeMenuRequest): Promise<AuthorizeMenuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeMenuWithOptions(request, runtime);
  }

  /**
   * 批量添加飞书用户。
   * 
   * @param request - BatchAddFeishuUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddFeishuUsersResponse
   */
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

  /**
   * 批量添加飞书用户。
   * 
   * @param request - BatchAddFeishuUsersRequest
   * @returns BatchAddFeishuUsersResponse
   */
  async batchAddFeishuUsers(request: BatchAddFeishuUsersRequest): Promise<BatchAddFeishuUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddFeishuUsersWithOptions(request, runtime);
  }

  /**
   * 根据门户菜单ID，取消指定用户、用户组的授权记录。
   * 
   * @param request - CancelAuthorizationMenuRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAuthorizationMenuResponse
   */
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

  /**
   * 根据门户菜单ID，取消指定用户、用户组的授权记录。
   * 
   * @param request - CancelAuthorizationMenuRequest
   * @returns CancelAuthorizationMenuResponse
   */
  async cancelAuthorizationMenu(request: CancelAuthorizationMenuRequest): Promise<CancelAuthorizationMenuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelAuthorizationMenuWithOptions(request, runtime);
  }

  /**
   * Cancel the data works from the user\\"s collection.
   * 
   * @param request - CancelCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCollectionResponse
   */
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

  /**
   * Cancel the data works from the user\\"s collection.
   * 
   * @param request - CancelCollectionRequest
   * @returns CancelCollectionResponse
   */
  async cancelCollection(request: CancelCollectionRequest): Promise<CancelCollectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCollectionWithOptions(request, runtime);
  }

  /**
   * Delete a share authorization for a data work.
   * 
   * @param request - CancelReportShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelReportShareResponse
   */
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

  /**
   * Delete a share authorization for a data work.
   * 
   * @param request - CancelReportShareRequest
   * @returns CancelReportShareResponse
   */
  async cancelReportShare(request: CancelReportShareRequest): Promise<CancelReportShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelReportShareWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @param request - ChangeVisibilityModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeVisibilityModelResponse
   */
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

  /**
   * The ID of the request.
   * 
   * @param request - ChangeVisibilityModelRequest
   * @returns ChangeVisibilityModelResponse
   */
  async changeVisibilityModel(request: ChangeVisibilityModelRequest): Promise<ChangeVisibilityModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeVisibilityModelWithOptions(request, runtime);
  }

  /**
   * Queries whether a user has permissions to view data works, such as dashboards and workbooks.
   * 
   * @param request - CheckReadableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckReadableResponse
   */
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

  /**
   * Queries whether a user has permissions to view data works, such as dashboards and workbooks.
   * 
   * @param request - CheckReadableRequest
   * @returns CheckReadableResponse
   */
  async checkReadable(request: CheckReadableRequest): Promise<CheckReadableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkReadableWithOptions(request, runtime);
  }

  /**
   * 生成三方嵌入的ticket。
   * 
   * @param request - CreateTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicketResponse
   */
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

  /**
   * 生成三方嵌入的ticket。
   * 
   * @param request - CreateTicketRequest
   * @returns CreateTicketResponse
   */
  async createTicket(request: CreateTicketRequest): Promise<CreateTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTicketWithOptions(request, runtime);
  }

  /**
   * 生成智能小Q嵌入ticket。
   * 
   * @param request - CreateTicket4CopilotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicket4CopilotResponse
   */
  async createTicket4CopilotWithOptions(request: CreateTicket4CopilotRequest, runtime: $Util.RuntimeOptions): Promise<CreateTicket4CopilotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.copilotId)) {
      query["CopilotId"] = request.copilotId;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.ticketNum)) {
      query["TicketNum"] = request.ticketNum;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateTicket4CopilotResponse>(await this.callApi(params, req, runtime), new CreateTicket4CopilotResponse({}));
  }

  /**
   * 生成智能小Q嵌入ticket。
   * 
   * @param request - CreateTicket4CopilotRequest
   * @returns CreateTicket4CopilotResponse
   */
  async createTicket4Copilot(request: CreateTicket4CopilotRequest): Promise<CreateTicket4CopilotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTicket4CopilotWithOptions(request, runtime);
  }

  /**
   * Create a user group. You can specify a parent user group.
   * 
   * @param request - CreateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserGroupResponse
   */
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

  /**
   * Create a user group. You can specify a parent user group.
   * 
   * @param request - CreateUserGroupRequest
   * @returns CreateUserGroupResponse
   */
  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  /**
   * 查询引用指定数据集下的作品信息。
   * 
   * @param request - DataSetBloodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DataSetBloodResponse
   */
  async dataSetBloodWithOptions(request: DataSetBloodRequest, runtime: $Util.RuntimeOptions): Promise<DataSetBloodResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSetIds)) {
      query["DataSetIds"] = request.dataSetIds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DataSetBloodResponse>(await this.callApi(params, req, runtime), new DataSetBloodResponse({}));
  }

  /**
   * 查询引用指定数据集下的作品信息。
   * 
   * @param request - DataSetBloodRequest
   * @returns DataSetBloodResponse
   */
  async dataSetBlood(request: DataSetBloodRequest): Promise<DataSetBloodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dataSetBloodWithOptions(request, runtime);
  }

  /**
   * 查询引用指定数据源下的数据集信息。
   * 
   * @param request - DataSourceBloodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DataSourceBloodResponse
   */
  async dataSourceBloodWithOptions(request: DataSourceBloodRequest, runtime: $Util.RuntimeOptions): Promise<DataSourceBloodResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DataSourceBloodResponse>(await this.callApi(params, req, runtime), new DataSourceBloodResponse({}));
  }

  /**
   * 查询引用指定数据源下的数据集信息。
   * 
   * @param request - DataSourceBloodRequest
   * @returns DataSourceBloodResponse
   */
  async dataSourceBlood(request: DataSourceBloodRequest): Promise<DataSourceBloodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dataSourceBloodWithOptions(request, runtime);
  }

  /**
   * Update the expiration time of the ticket embedded in the report.
   * 
   * @param request - DelayTicketExpireTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelayTicketExpireTimeResponse
   */
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

  /**
   * Update the expiration time of the ticket embedded in the report.
   * 
   * @param request - DelayTicketExpireTimeRequest
   * @returns DelayTicketExpireTimeResponse
   */
  async delayTicketExpireTime(request: DelayTicketExpireTimeRequest): Promise<DelayTicketExpireTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
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
   * { "ruleId": "a5bb24da- ***-a891683e14da", // The ID of the row-column permission rule. "cubeId": "7c7223ae- ***-3c744528014b", // The ID of the dataset. "delModel": { "userGroups": [ "0d5fb19b- ***-1248 fc27ca51", // Delete the user group ID of the user group. "3d2c23d4-***-f6390f325c2d" ], "users": [ "4334 ***358", // Delete the UserID of the user group. "Huang***3fa822" ] } }
   * 
   * @remarks
   * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","delModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
   * 
   * @param request - DeleteDataLevelPermissionRuleUsersRequest
   * @returns DeleteDataLevelPermissionRuleUsersResponse
   */
  async deleteDataLevelPermissionRuleUsers(request: DeleteDataLevelPermissionRuleUsersRequest): Promise<DeleteDataLevelPermissionRuleUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
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
   * The ID of the request.
   * 
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * @param request - DeleteDataLevelRuleConfigRequest
   * @returns DeleteDataLevelRuleConfigResponse
   */
  async deleteDataLevelRuleConfig(request: DeleteDataLevelRuleConfigRequest): Promise<DeleteDataLevelRuleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataLevelRuleConfigWithOptions(request, runtime);
  }

  /**
   * auditing
   * 
   * @param request - DeleteTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTicketResponse
   */
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

  /**
   * auditing
   * 
   * @param request - DeleteTicketRequest
   * @returns DeleteTicketResponse
   */
  async deleteTicket(request: DeleteTicketRequest): Promise<DeleteTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTicketWithOptions(request, runtime);
  }

  /**
   * auditing
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
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

  /**
   * auditing
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * 删除指定工作空间的成员。
   * 
   * @param request - DeleteUserFromWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserFromWorkspaceResponse
   */
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

  /**
   * 删除指定工作空间的成员。
   * 
   * @param request - DeleteUserFromWorkspaceRequest
   * @returns DeleteUserFromWorkspaceResponse
   */
  async deleteUserFromWorkspace(request: DeleteUserFromWorkspaceRequest): Promise<DeleteUserFromWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserFromWorkspaceWithOptions(request, runtime);
  }

  /**
   * Deletes a user group in an organization.
   * 
   * @param request - DeleteUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupResponse
   */
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

  /**
   * Deletes a user group in an organization.
   * 
   * @param request - DeleteUserGroupRequest
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a specified member from a specified user group.
   * 
   * @param request - DeleteUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupMemberResponse
   */
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

  /**
   * Deletes a specified member from a specified user group.
   * 
   * @param request - DeleteUserGroupMemberRequest
   * @returns DeleteUserGroupMemberResponse
   */
  async deleteUserGroupMember(request: DeleteUserGroupMemberRequest): Promise<DeleteUserGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * Indicates whether the request is successful. Valid values:
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @param request - DeleteUserGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupMembersResponse
   */
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

  /**
   * Indicates whether the request is successful. Valid values:
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @param request - DeleteUserGroupMembersRequest
   * @returns DeleteUserGroupMembersResponse
   */
  async deleteUserGroupMembers(request: DeleteUserGroupMembersRequest): Promise<DeleteUserGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupMembersWithOptions(request, runtime);
  }

  /**
   * Deletes the tag metadata of an organization member.
   * 
   * @param request - DeleteUserTagMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserTagMetaResponse
   */
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

  /**
   * Deletes the tag metadata of an organization member.
   * 
   * @param request - DeleteUserTagMetaRequest
   * @returns DeleteUserTagMetaResponse
   */
  async deleteUserTagMeta(request: DeleteUserTagMetaRequest): Promise<DeleteUserTagMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserTagMetaWithOptions(request, runtime);
  }

  /**
   * 组织内查看邮件任务运行状态
   * 
   * @param request - GetMailTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMailTaskStatusResponse
   */
  async getMailTaskStatusWithOptions(request: GetMailTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetMailTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mailId)) {
      query["MailId"] = request.mailId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetMailTaskStatusResponse>(await this.callApi(params, req, runtime), new GetMailTaskStatusResponse({}));
  }

  /**
   * 组织内查看邮件任务运行状态
   * 
   * @param request - GetMailTaskStatusRequest
   * @returns GetMailTaskStatusResponse
   */
  async getMailTaskStatus(request: GetMailTaskStatusRequest): Promise<GetMailTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMailTaskStatusWithOptions(request, runtime);
  }

  /**
   * Test description
   * 
   * @param request - GetUserGroupInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserGroupInfoResponse
   */
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

  /**
   * Test description
   * 
   * @param request - GetUserGroupInfoRequest
   * @returns GetUserGroupInfoResponse
   */
  async getUserGroupInfo(request: GetUserGroupInfoRequest): Promise<GetUserGroupInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserGroupInfoWithOptions(request, runtime);
  }

  /**
   * 查询已嵌入报表列表
   * 
   * @param request - GetWorksEmbedListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorksEmbedListResponse
   */
  async getWorksEmbedListWithOptions(request: GetWorksEmbedListRequest, runtime: $Util.RuntimeOptions): Promise<GetWorksEmbedListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.worksType)) {
      query["WorksType"] = request.worksType;
    }

    if (!Util.isUnset(request.wsId)) {
      query["WsId"] = request.wsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetWorksEmbedListResponse>(await this.callApi(params, req, runtime), new GetWorksEmbedListResponse({}));
  }

  /**
   * 查询已嵌入报表列表
   * 
   * @param request - GetWorksEmbedListRequest
   * @returns GetWorksEmbedListResponse
   */
  async getWorksEmbedList(request: GetWorksEmbedListRequest): Promise<GetWorksEmbedListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorksEmbedListWithOptions(request, runtime);
  }

  /**
   * 查询API数据源列表。
   * 
   * @param request - ListApiDatasourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiDatasourceResponse
   */
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

  /**
   * 查询API数据源列表。
   * 
   * @param request - ListApiDatasourceRequest
   * @returns ListApiDatasourceResponse
   */
  async listApiDatasource(request: ListApiDatasourceRequest): Promise<ListApiDatasourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApiDatasourceWithOptions(request, runtime);
  }

  /**
   * Queries user group information at a time by user group ID.
   * 
   * @param request - ListByUserGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListByUserGroupIdResponse
   */
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

  /**
   * Queries user group information at a time by user group ID.
   * 
   * @param request - ListByUserGroupIdRequest
   * @returns ListByUserGroupIdResponse
   */
  async listByUserGroupId(request: ListByUserGroupIdRequest): Promise<ListByUserGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listByUserGroupIdWithOptions(request, runtime);
  }

  /**
   * The ID of the work.
   * 
   * @param request - ListCollectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCollectionsResponse
   */
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

  /**
   * The ID of the work.
   * 
   * @param request - ListCollectionsRequest
   * @returns ListCollectionsResponse
   */
  async listCollections(request: ListCollectionsRequest): Promise<ListCollectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
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
   * You can this operation to obtain a list of row and column permission configurations for a specified dataset.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
   * 
   * @param request - ListCubeDataLevelPermissionConfigRequest
   * @returns ListCubeDataLevelPermissionConfigResponse
   */
  async listCubeDataLevelPermissionConfig(request: ListCubeDataLevelPermissionConfigRequest): Promise<ListCubeDataLevelPermissionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCubeDataLevelPermissionConfigWithOptions(request, runtime);
  }

  /**
   * 根据行列权限种类，获取数据集行列权限的白名单列表。
   * 
   * @param request - ListDataLevelPermissionWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLevelPermissionWhiteListResponse
   */
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

  /**
   * 根据行列权限种类，获取数据集行列权限的白名单列表。
   * 
   * @param request - ListDataLevelPermissionWhiteListRequest
   * @returns ListDataLevelPermissionWhiteListResponse
   */
  async listDataLevelPermissionWhiteList(request: ListDataLevelPermissionWhiteListRequest): Promise<ListDataLevelPermissionWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataLevelPermissionWhiteListWithOptions(request, runtime);
  }

  /**
   * 获取指定用户在首页看板中展示的收藏作品列表。
   * 
   * @param request - ListFavoriteReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFavoriteReportsResponse
   */
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

  /**
   * 获取指定用户在首页看板中展示的收藏作品列表。
   * 
   * @param request - ListFavoriteReportsRequest
   * @returns ListFavoriteReportsResponse
   */
  async listFavoriteReports(request: ListFavoriteReportsRequest): Promise<ListFavoriteReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFavoriteReportsWithOptions(request, runtime);
  }

  /**
   * 获取指定组织角色下的用户列表。
   * 
   * @param request - ListOrganizationRoleUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationRoleUsersResponse
   */
  async listOrganizationRoleUsersWithOptions(request: ListOrganizationRoleUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListOrganizationRoleUsersResponse> {
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

    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListOrganizationRoleUsersResponse>(await this.callApi(params, req, runtime), new ListOrganizationRoleUsersResponse({}));
  }

  /**
   * 获取指定组织角色下的用户列表。
   * 
   * @param request - ListOrganizationRoleUsersRequest
   * @returns ListOrganizationRoleUsersResponse
   */
  async listOrganizationRoleUsers(request: ListOrganizationRoleUsersRequest): Promise<ListOrganizationRoleUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrganizationRoleUsersWithOptions(request, runtime);
  }

  /**
   * 获取组织级别自定义角色列表。
   * 
   * @param request - ListOrganizationRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationRolesResponse
   */
  async listOrganizationRolesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListOrganizationRolesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListOrganizationRolesResponse>(await this.callApi(params, req, runtime), new ListOrganizationRolesResponse({}));
  }

  /**
   * 获取组织级别自定义角色列表。
   * @returns ListOrganizationRolesResponse
   */
  async listOrganizationRoles(): Promise<ListOrganizationRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrganizationRolesWithOptions(runtime);
  }

  /**
   * Obtains the list of authorization details for a BI portal menu.
   * 
   * @param request - ListPortalMenuAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPortalMenuAuthorizationResponse
   */
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

  /**
   * Obtains the list of authorization details for a BI portal menu.
   * 
   * @param request - ListPortalMenuAuthorizationRequest
   * @returns ListPortalMenuAuthorizationResponse
   */
  async listPortalMenuAuthorization(request: ListPortalMenuAuthorizationRequest): Promise<ListPortalMenuAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPortalMenuAuthorizationWithOptions(request, runtime);
  }

  /**
   * Gets a hierarchical list of menus under a specific BI portal.
   * 
   * @param request - ListPortalMenusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPortalMenusResponse
   */
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

  /**
   * Gets a hierarchical list of menus under a specific BI portal.
   * 
   * @param request - ListPortalMenusRequest
   * @returns ListPortalMenusResponse
   */
  async listPortalMenus(request: ListPortalMenusRequest): Promise<ListPortalMenusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPortalMenusWithOptions(request, runtime);
  }

  /**
   * 获取首页看板常看和足迹列表。
   * 
   * @param request - ListRecentViewReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecentViewReportsResponse
   */
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

  /**
   * 获取首页看板常看和足迹列表。
   * 
   * @param request - ListRecentViewReportsRequest
   * @returns ListRecentViewReportsResponse
   */
  async listRecentViewReports(request: ListRecentViewReportsRequest): Promise<ListRecentViewReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRecentViewReportsWithOptions(request, runtime);
  }

  /**
   * 获取指定用户在首页看板中展示的被授权的作品列表。
   * 
   * @param request - ListSharedReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSharedReportsResponse
   */
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

  /**
   * 获取指定用户在首页看板中展示的被授权的作品列表。
   * 
   * @param request - ListSharedReportsRequest
   * @returns ListSharedReportsResponse
   */
  async listSharedReports(request: ListSharedReportsRequest): Promise<ListSharedReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSharedReportsWithOptions(request, runtime);
  }

  /**
   * Description
   * 
   * @param request - ListUserGroupsByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsByUserIdResponse
   */
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

  /**
   * Description
   * 
   * @param request - ListUserGroupsByUserIdRequest
   * @returns ListUserGroupsByUserIdResponse
   */
  async listUserGroupsByUserId(request: ListUserGroupsByUserIdRequest): Promise<ListUserGroupsByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsByUserIdWithOptions(request, runtime);
  }

  /**
   * 获取指定空间角色下的用户列表。
   * 
   * @param request - ListWorkspaceRoleUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceRoleUsersResponse
   */
  async listWorkspaceRoleUsersWithOptions(request: ListWorkspaceRoleUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkspaceRoleUsersResponse> {
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

    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListWorkspaceRoleUsersResponse>(await this.callApi(params, req, runtime), new ListWorkspaceRoleUsersResponse({}));
  }

  /**
   * 获取指定空间角色下的用户列表。
   * 
   * @param request - ListWorkspaceRoleUsersRequest
   * @returns ListWorkspaceRoleUsersResponse
   */
  async listWorkspaceRoleUsers(request: ListWorkspaceRoleUsersRequest): Promise<ListWorkspaceRoleUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkspaceRoleUsersWithOptions(request, runtime);
  }

  /**
   * 获取空间角色列表。
   * 
   * @param request - ListWorkspaceRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceRolesResponse
   */
  async listWorkspaceRolesWithOptions(request: ListWorkspaceRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkspaceRolesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListWorkspaceRolesResponse>(await this.callApi(params, req, runtime), new ListWorkspaceRolesResponse({}));
  }

  /**
   * 获取空间角色列表。
   * 
   * @param request - ListWorkspaceRolesRequest
   * @returns ListWorkspaceRolesResponse
   */
  async listWorkspaceRoles(request: ListWorkspaceRolesRequest): Promise<ListWorkspaceRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkspaceRolesWithOptions(request, runtime);
  }

  /**
   * 手动执行邮件任务
   * 
   * @param request - ManualRunMailTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManualRunMailTaskResponse
   */
  async manualRunMailTaskWithOptions(request: ManualRunMailTaskRequest, runtime: $Util.RuntimeOptions): Promise<ManualRunMailTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mailId)) {
      query["MailId"] = request.mailId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ManualRunMailTaskResponse>(await this.callApi(params, req, runtime), new ManualRunMailTaskResponse({}));
  }

  /**
   * 手动执行邮件任务
   * 
   * @param request - ManualRunMailTaskRequest
   * @returns ManualRunMailTaskResponse
   */
  async manualRunMailTask(request: ManualRunMailTaskRequest): Promise<ManualRunMailTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manualRunMailTaskWithOptions(request, runtime);
  }

  /**
   * 修改指定API数据源参数值。
   * 
   * @param request - ModifyApiDatasourceParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApiDatasourceParametersResponse
   */
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

  /**
   * 修改指定API数据源参数值。
   * 
   * @param request - ModifyApiDatasourceParametersRequest
   * @returns ModifyApiDatasourceParametersResponse
   */
  async modifyApiDatasourceParameters(request: ModifyApiDatasourceParametersRequest): Promise<ModifyApiDatasourceParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyApiDatasourceParametersWithOptions(request, runtime);
  }

  /**
   * 修改智能问数嵌入配置。
   * 
   * @param request - ModifyCopilotEmbedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCopilotEmbedConfigResponse
   */
  async modifyCopilotEmbedConfigWithOptions(request: ModifyCopilotEmbedConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCopilotEmbedConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!Util.isUnset(request.copilotId)) {
      query["CopilotId"] = request.copilotId;
    }

    if (!Util.isUnset(request.dataRange)) {
      query["DataRange"] = request.dataRange;
    }

    if (!Util.isUnset(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyCopilotEmbedConfigResponse>(await this.callApi(params, req, runtime), new ModifyCopilotEmbedConfigResponse({}));
  }

  /**
   * 修改智能问数嵌入配置。
   * 
   * @param request - ModifyCopilotEmbedConfigRequest
   * @returns ModifyCopilotEmbedConfigResponse
   */
  async modifyCopilotEmbedConfig(request: ModifyCopilotEmbedConfigRequest): Promise<ModifyCopilotEmbedConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCopilotEmbedConfigWithOptions(request, runtime);
  }

  /**
   * 根据审批人获取相应的审批流信息。
   * 
   * @param request - QueryApprovalInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryApprovalInfoResponse
   */
  async queryApprovalInfoWithOptions(request: QueryApprovalInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryApprovalInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryApprovalInfoResponse>(await this.callApi(params, req, runtime), new QueryApprovalInfoResponse({}));
  }

  /**
   * 根据审批人获取相应的审批流信息。
   * 
   * @param request - QueryApprovalInfoRequest
   * @returns QueryApprovalInfoResponse
   */
  async queryApprovalInfo(request: QueryApprovalInfoRequest): Promise<QueryApprovalInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryApprovalInfoWithOptions(request, runtime);
  }

  /**
   * 查询审计日志信息。
   * 
   * @param request - QueryAuditLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAuditLogResponse
   */
  async queryAuditLogWithOptions(request: QueryAuditLogRequest, runtime: $Util.RuntimeOptions): Promise<QueryAuditLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.operatorId)) {
      query["OperatorId"] = request.operatorId;
    }

    if (!Util.isUnset(request.operatorTypes)) {
      query["OperatorTypes"] = request.operatorTypes;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryAuditLogResponse>(await this.callApi(params, req, runtime), new QueryAuditLogResponse({}));
  }

  /**
   * 查询审计日志信息。
   * 
   * @param request - QueryAuditLogRequest
   * @returns QueryAuditLogResponse
   */
  async queryAuditLog(request: QueryAuditLogRequest): Promise<QueryAuditLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAuditLogWithOptions(request, runtime);
  }

  /**
   * 查询组件性能列表。
   * 
   * @param request - QueryComponentPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryComponentPerformanceResponse
   */
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

  /**
   * 查询组件性能列表。
   * 
   * @param request - QueryComponentPerformanceRequest
   * @returns QueryComponentPerformanceResponse
   */
  async queryComponentPerformance(request: QueryComponentPerformanceRequest): Promise<QueryComponentPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryComponentPerformanceWithOptions(request, runtime);
  }

  /**
   * 获取开通小Q嵌入的配置列表。
   * 
   * @param request - QueryCopilotEmbedConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCopilotEmbedConfigResponse
   */
  async queryCopilotEmbedConfigWithOptions(request: QueryCopilotEmbedConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryCopilotEmbedConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryCopilotEmbedConfigResponse>(await this.callApi(params, req, runtime), new QueryCopilotEmbedConfigResponse({}));
  }

  /**
   * 获取开通小Q嵌入的配置列表。
   * 
   * @param request - QueryCopilotEmbedConfigRequest
   * @returns QueryCopilotEmbedConfigResponse
   */
  async queryCopilotEmbedConfig(request: QueryCopilotEmbedConfigRequest): Promise<QueryCopilotEmbedConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCopilotEmbedConfigWithOptions(request, runtime);
  }

  /**
   * 查询数据集优化建议。
   * 
   * @param request - QueryCubeOptimizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCubeOptimizationResponse
   */
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

  /**
   * 查询数据集优化建议。
   * 
   * @param request - QueryCubeOptimizationRequest
   * @returns QueryCubeOptimizationResponse
   */
  async queryCubeOptimization(request: QueryCubeOptimizationRequest): Promise<QueryCubeOptimizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCubeOptimizationWithOptions(request, runtime);
  }

  /**
   * 查询数据集性能。
   * 
   * @param request - QueryCubePerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCubePerformanceResponse
   */
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

  /**
   * 查询数据集性能。
   * 
   * @param request - QueryCubePerformanceRequest
   * @returns QueryCubePerformanceResponse
   */
  async queryCubePerformance(request: QueryCubePerformanceRequest): Promise<QueryCubePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCubePerformanceWithOptions(request, runtime);
  }

  /**
   * 调用开放数据服务API。
   * 
   * @param request - QueryDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataResponse
   */
  async queryDataWithOptions(request: QueryDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDataResponse> {
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

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryDataResponse>(await this.callApi(params, req, runtime), new QueryDataResponse({}));
  }

  /**
   * 调用开放数据服务API。
   * 
   * @param request - QueryDataRequest
   * @returns QueryDataResponse
   */
  async queryData(request: QueryDataRequest): Promise<QueryDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDataWithOptions(request, runtime);
  }

  /**
   * 获取数据范围目录列表。
   * 
   * @param request - QueryDataRangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataRangeResponse
   */
  async queryDataRangeWithOptions(request: QueryDataRangeRequest, runtime: $Util.RuntimeOptions): Promise<QueryDataRangeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryDataRangeResponse>(await this.callApi(params, req, runtime), new QueryDataRangeResponse({}));
  }

  /**
   * 获取数据范围目录列表。
   * 
   * @param request - QueryDataRangeRequest
   * @returns QueryDataRangeResponse
   */
  async queryDataRange(request: QueryDataRangeRequest): Promise<QueryDataRangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDataRangeWithOptions(request, runtime);
  }

  /**
   * The operator for the aggregate operation. Metric fields are available, such as SUM, AVG, and MAX.
   * 
   * @remarks
   * f4cc43bc3***
   * 
   * @param request - QueryDataServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataServiceResponse
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
   * The operator for the aggregate operation. Metric fields are available, such as SUM, AVG, and MAX.
   * 
   * @remarks
   * f4cc43bc3***
   * 
   * @param request - QueryDataServiceRequest
   * @returns QueryDataServiceResponse
   */
  async queryDataService(request: QueryDataServiceRequest): Promise<QueryDataServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDataServiceWithOptions(request, runtime);
  }

  /**
   * 查询数据服务API列表。
   * 
   * @param request - QueryDataServiceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDataServiceListResponse
   */
  async queryDataServiceListWithOptions(request: QueryDataServiceListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDataServiceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
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
    return $tea.cast<QueryDataServiceListResponse>(await this.callApi(params, req, runtime), new QueryDataServiceListResponse({}));
  }

  /**
   * 查询数据服务API列表。
   * 
   * @param request - QueryDataServiceListRequest
   * @returns QueryDataServiceListResponse
   */
  async queryDataServiceList(request: QueryDataServiceListRequest): Promise<QueryDataServiceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
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
   * Queries the details of a specified dataset, including the data source, directory, and dataset model.
   * 
   * @remarks
   * The data source, directory, and dataset model (including dimensions, measures, physical fields, custom SQL text, and association relationships).
   * 
   * @param request - QueryDatasetDetailInfoRequest
   * @returns QueryDatasetDetailInfoResponse
   */
  async queryDatasetDetailInfo(request: QueryDatasetDetailInfoRequest): Promise<QueryDatasetDetailInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetDetailInfoWithOptions(request, runtime);
  }

  /**
   * Indicates whether the table is a custom SQL table. Valid values:
   * *   true: custom SQL table
   * *   false: non-custom SQL table
   * 
   * @param request - QueryDatasetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetInfoResponse
   */
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

  /**
   * Indicates whether the table is a custom SQL table. Valid values:
   * *   true: custom SQL table
   * *   false: non-custom SQL table
   * 
   * @param request - QueryDatasetInfoRequest
   * @returns QueryDatasetInfoResponse
   */
  async queryDatasetInfo(request: QueryDatasetInfoRequest): Promise<QueryDatasetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetInfoWithOptions(request, runtime);
  }

  /**
   * The name of the training dataset.
   * 
   * @param request - QueryDatasetListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetListResponse
   */
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

  /**
   * The name of the training dataset.
   * 
   * @param request - QueryDatasetListRequest
   * @returns QueryDatasetListResponse
   */
  async queryDatasetList(request: QueryDatasetListRequest): Promise<QueryDatasetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetListWithOptions(request, runtime);
  }

  /**
   * 获取指定数据集的行级权限开关状态。
   * 
   * @param request - QueryDatasetSwitchInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDatasetSwitchInfoResponse
   */
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

  /**
   * 获取指定数据集的行级权限开关状态。
   * 
   * @param request - QueryDatasetSwitchInfoRequest
   * @returns QueryDatasetSwitchInfoResponse
   */
  async queryDatasetSwitchInfo(request: QueryDatasetSwitchInfoRequest): Promise<QueryDatasetSwitchInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetSwitchInfoWithOptions(request, runtime);
  }

  /**
   * The number of reports that are currently embedded.
   * 
   * @param request - QueryEmbeddedInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEmbeddedInfoResponse
   */
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

  /**
   * The number of reports that are currently embedded.
   * @returns QueryEmbeddedInfoResponse
   */
  async queryEmbeddedInfo(): Promise<QueryEmbeddedInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEmbeddedInfoWithOptions(runtime);
  }

  /**
   * Queries whether embedding is enabled for a report.
   * 
   * @param request - QueryEmbeddedStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEmbeddedStatusResponse
   */
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

  /**
   * Queries whether embedding is enabled for a report.
   * 
   * @param request - QueryEmbeddedStatusRequest
   * @returns QueryEmbeddedStatusResponse
   */
  async queryEmbeddedStatus(request: QueryEmbeddedStatusRequest): Promise<QueryEmbeddedStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEmbeddedStatusWithOptions(request, runtime);
  }

  /**
   * 获取指定组织角色的配置信息
   * 
   * @param request - QueryOrganizationRoleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrganizationRoleConfigResponse
   */
  async queryOrganizationRoleConfigWithOptions(request: QueryOrganizationRoleConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrganizationRoleConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryOrganizationRoleConfigResponse>(await this.callApi(params, req, runtime), new QueryOrganizationRoleConfigResponse({}));
  }

  /**
   * 获取指定组织角色的配置信息
   * 
   * @param request - QueryOrganizationRoleConfigRequest
   * @returns QueryOrganizationRoleConfigResponse
   */
  async queryOrganizationRoleConfig(request: QueryOrganizationRoleConfigRequest): Promise<QueryOrganizationRoleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrganizationRoleConfigWithOptions(request, runtime);
  }

  /**
   * 获取当前组织下的工作空间列表信息。
   * 
   * @param request - QueryOrganizationWorkspaceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrganizationWorkspaceListResponse
   */
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

  /**
   * 获取当前组织下的工作空间列表信息。
   * 
   * @param request - QueryOrganizationWorkspaceListRequest
   * @returns QueryOrganizationWorkspaceListResponse
   */
  async queryOrganizationWorkspaceList(request: QueryOrganizationWorkspaceListRequest): Promise<QueryOrganizationWorkspaceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrganizationWorkspaceListWithOptions(request, runtime);
  }

  /**
   * The Alibaba Cloud account name of the owner.
   * 
   * @param request - QueryReadableResourcesListByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReadableResourcesListByUserIdResponse
   */
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

  /**
   * The Alibaba Cloud account name of the owner.
   * 
   * @param request - QueryReadableResourcesListByUserIdRequest
   * @returns QueryReadableResourcesListByUserIdResponse
   */
  async queryReadableResourcesListByUserId(request: QueryReadableResourcesListByUserIdRequest): Promise<QueryReadableResourcesListByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReadableResourcesListByUserIdWithOptions(request, runtime);
  }

  /**
   * 查询报表性能列表
   * 
   * @param request - QueryReportPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReportPerformanceResponse
   */
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

  /**
   * 查询报表性能列表
   * 
   * @param request - QueryReportPerformanceRequest
   * @returns QueryReportPerformanceResponse
   */
  async queryReportPerformance(request: QueryReportPerformanceRequest): Promise<QueryReportPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryReportPerformanceWithOptions(request, runtime);
  }

  /**
   * Xiao Zhang
   * 
   * @param request - QueryShareListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryShareListResponse
   */
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

  /**
   * Xiao Zhang
   * 
   * @param request - QueryShareListRequest
   * @returns QueryShareListResponse
   */
  async queryShareList(request: QueryShareListRequest): Promise<QueryShareListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryShareListWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the list of works authorized to a user.
   * 
   * @param request - QuerySharesToUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySharesToUserListResponse
   */
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

  /**
   * You can call this operation to query the list of works authorized to a user.
   * 
   * @param request - QuerySharesToUserListRequest
   * @returns QuerySharesToUserListResponse
   */
  async querySharesToUserList(request: QuerySharesToUserListRequest): Promise<QuerySharesToUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySharesToUserListWithOptions(request, runtime);
  }

  /**
   * auditing
   * 
   * @param request - QueryTicketInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTicketInfoResponse
   */
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

  /**
   * auditing
   * 
   * @param request - QueryTicketInfoRequest
   * @returns QueryTicketInfoResponse
   */
  async queryTicketInfo(request: QueryTicketInfoRequest): Promise<QueryTicketInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTicketInfoWithOptions(request, runtime);
  }

  /**
   * You can this operation to obtain information about child user groups under a specified parent user group.
   * 
   * @param request - QueryUserGroupListByParentIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserGroupListByParentIdResponse
   */
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

  /**
   * You can this operation to obtain information about child user groups under a specified parent user group.
   * 
   * @param request - QueryUserGroupListByParentIdRequest
   * @returns QueryUserGroupListByParentIdResponse
   */
  async queryUserGroupListByParentId(request: QueryUserGroupListByParentIdRequest): Promise<QueryUserGroupListByParentIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserGroupListByParentIdWithOptions(request, runtime);
  }

  /**
   * 获取用户组下的成员列表信息。
   * 
   * @param request - QueryUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserGroupMemberResponse
   */
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

  /**
   * 获取用户组下的成员列表信息。
   * 
   * @param request - QueryUserGroupMemberRequest
   * @returns QueryUserGroupMemberResponse
   */
  async queryUserGroupMember(request: QueryUserGroupMemberRequest): Promise<QueryUserGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * Queries user information based on the Alibaba Cloud ID or Alibaba Cloud account name.
   * 
   * @param request - QueryUserInfoByAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserInfoByAccountResponse
   */
  async queryUserInfoByAccountWithOptions(request: QueryUserInfoByAccountRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserInfoByAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.parentAccountName)) {
      query["ParentAccountName"] = request.parentAccountName;
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

  /**
   * Queries user information based on the Alibaba Cloud ID or Alibaba Cloud account name.
   * 
   * @param request - QueryUserInfoByAccountRequest
   * @returns QueryUserInfoByAccountResponse
   */
  async queryUserInfoByAccount(request: QueryUserInfoByAccountRequest): Promise<QueryUserInfoByAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserInfoByAccountWithOptions(request, runtime);
  }

  /**
   * Queries user information based on the user ID.
   * 
   * @param request - QueryUserInfoByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserInfoByUserIdResponse
   */
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

  /**
   * Queries user information based on the user ID.
   * 
   * @param request - QueryUserInfoByUserIdRequest
   * @returns QueryUserInfoByUserIdResponse
   */
  async queryUserInfoByUserId(request: QueryUserInfoByUserIdRequest): Promise<QueryUserInfoByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserInfoByUserIdWithOptions(request, runtime);
  }

  /**
   * 查询组织成员列表信息。
   * 
   * @param request - QueryUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserListResponse
   */
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

  /**
   * 查询组织成员列表信息。
   * 
   * @param request - QueryUserListRequest
   * @returns QueryUserListResponse
   */
  async queryUserList(request: QueryUserListRequest): Promise<QueryUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserListWithOptions(request, runtime);
  }

  /**
   * 获取指定工作空间成员的预置空间角色信息。
   * 
   * @param request - QueryUserRoleInfoInWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserRoleInfoInWorkspaceResponse
   */
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

  /**
   * 获取指定工作空间成员的预置空间角色信息。
   * 
   * @param request - QueryUserRoleInfoInWorkspaceRequest
   * @returns QueryUserRoleInfoInWorkspaceResponse
   */
  async queryUserRoleInfoInWorkspace(request: QueryUserRoleInfoInWorkspaceRequest): Promise<QueryUserRoleInfoInWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserRoleInfoInWorkspaceWithOptions(request, runtime);
  }

  /**
   * auditing
   * 
   * @param request - QueryUserTagMetaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserTagMetaListResponse
   */
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

  /**
   * auditing
   * @returns QueryUserTagMetaListResponse
   */
  async queryUserTagMetaList(): Promise<QueryUserTagMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserTagMetaListWithOptions(runtime);
  }

  /**
   * Queries the list of tag values for a specific user.
   * 
   * @param request - QueryUserTagValueListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserTagValueListResponse
   */
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

  /**
   * Queries the list of tag values for a specific user.
   * 
   * @param request - QueryUserTagValueListRequest
   * @returns QueryUserTagValueListResponse
   */
  async queryUserTagValueList(request: QueryUserTagValueListRequest): Promise<QueryUserTagValueListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserTagValueListWithOptions(request, runtime);
  }

  /**
   * 获取报表详情
   * 
   * @param request - QueryWorksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksResponse
   */
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

  /**
   * 获取报表详情
   * 
   * @param request - QueryWorksRequest
   * @returns QueryWorksResponse
   */
  async queryWorks(request: QueryWorksRequest): Promise<QueryWorksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWorksWithOptions(request, runtime);
  }

  /**
   * abcd****
   * 
   * @param request - QueryWorksBloodRelationshipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksBloodRelationshipResponse
   */
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

  /**
   * abcd****
   * 
   * @param request - QueryWorksBloodRelationshipRequest
   * @returns QueryWorksBloodRelationshipResponse
   */
  async queryWorksBloodRelationship(request: QueryWorksBloodRelationshipRequest): Promise<QueryWorksBloodRelationshipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWorksBloodRelationshipWithOptions(request, runtime);
  }

  /**
   * The total number of rows in the table.
   * 
   * @param request - QueryWorksByOrganizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksByOrganizationResponse
   */
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

  /**
   * The total number of rows in the table.
   * 
   * @param request - QueryWorksByOrganizationRequest
   * @returns QueryWorksByOrganizationResponse
   */
  async queryWorksByOrganization(request: QueryWorksByOrganizationRequest): Promise<QueryWorksByOrganizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWorksByOrganizationWithOptions(request, runtime);
  }

  /**
   * The name of the directory.
   * 
   * @param request - QueryWorksByWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorksByWorkspaceResponse
   */
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

  /**
   * The name of the directory.
   * 
   * @param request - QueryWorksByWorkspaceRequest
   * @returns QueryWorksByWorkspaceResponse
   */
  async queryWorksByWorkspace(request: QueryWorksByWorkspaceRequest): Promise<QueryWorksByWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWorksByWorkspaceWithOptions(request, runtime);
  }

  /**
   * 获取指定空间角色的配置信息
   * 
   * @param request - QueryWorkspaceRoleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorkspaceRoleConfigResponse
   */
  async queryWorkspaceRoleConfigWithOptions(request: QueryWorkspaceRoleConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryWorkspaceRoleConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryWorkspaceRoleConfigResponse>(await this.callApi(params, req, runtime), new QueryWorkspaceRoleConfigResponse({}));
  }

  /**
   * 获取指定空间角色的配置信息
   * 
   * @param request - QueryWorkspaceRoleConfigRequest
   * @returns QueryWorkspaceRoleConfigResponse
   */
  async queryWorkspaceRoleConfig(request: QueryWorkspaceRoleConfigRequest): Promise<QueryWorkspaceRoleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWorkspaceRoleConfigWithOptions(request, runtime);
  }

  /**
   * 查询指定工作空间下的成员列表信息。
   * 
   * @param request - QueryWorkspaceUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorkspaceUserListResponse
   */
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

  /**
   * 查询指定工作空间下的成员列表信息。
   * 
   * @param request - QueryWorkspaceUserListRequest
   * @returns QueryWorkspaceUserListResponse
   */
  async queryWorkspaceUserList(request: QueryWorkspaceUserListRequest): Promise<QueryWorkspaceUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWorkspaceUserListWithOptions(request, runtime);
  }

  /**
   * 第三方资源审批回调接口
   * 
   * @param request - ResultCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResultCallbackResponse
   */
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

  /**
   * 第三方资源审批回调接口
   * 
   * @param request - ResultCallbackRequest
   * @returns ResultCallbackResponse
   */
  async resultCallback(request: ResultCallbackRequest): Promise<ResultCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resultCallbackWithOptions(request, runtime);
  }

  /**
   * Add the user\\"s collection data works.
   * 
   * @param request - SaveFavoritesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveFavoritesResponse
   */
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

  /**
   * Add the user\\"s collection data works.
   * 
   * @param request - SaveFavoritesRequest
   * @returns SaveFavoritesResponse
   */
  async saveFavorites(request: SaveFavoritesRequest): Promise<SaveFavoritesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveFavoritesWithOptions(request, runtime);
  }

  /**
   * 设置行列权限的额外配置
   * 
   * @param request - SetDataLevelPermissionExtraConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDataLevelPermissionExtraConfigResponse
   */
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

  /**
   * 设置行列权限的额外配置
   * 
   * @param request - SetDataLevelPermissionExtraConfigRequest
   * @returns SetDataLevelPermissionExtraConfigResponse
   */
  async setDataLevelPermissionExtraConfig(request: SetDataLevelPermissionExtraConfigRequest): Promise<SetDataLevelPermissionExtraConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDataLevelPermissionExtraConfigWithOptions(request, runtime);
  }

  /**
   * 设置单条数据集行列权限配置信息（新增和更新）
   * 
   * @param request - SetDataLevelPermissionRuleConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDataLevelPermissionRuleConfigResponse
   */
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

  /**
   * 设置单条数据集行列权限配置信息（新增和更新）
   * 
   * @param request - SetDataLevelPermissionRuleConfigRequest
   * @returns SetDataLevelPermissionRuleConfigResponse
   */
  async setDataLevelPermissionRuleConfig(request: SetDataLevelPermissionRuleConfigRequest): Promise<SetDataLevelPermissionRuleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
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
   * Sets the whitelist for the specified row-level permissions.
   * 
   * @remarks
   * > : You can only Quick BI the new row-column permission model. If you are still using the old row-column permission model, migrate to the new row-column permission model before you call this operation. To migrate row-level permissions to the new row-level permission model, perform the following steps: Choose Organizations> Security Configurations> Upgrade Row-Level Permissions. On the Upgrade Row-Level Permissions page, click **Upgrade**.
   * 
   * @param request - SetDataLevelPermissionWhiteListRequest
   * @returns SetDataLevelPermissionWhiteListResponse
   */
  async setDataLevelPermissionWhiteList(request: SetDataLevelPermissionWhiteListRequest): Promise<SetDataLevelPermissionWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDataLevelPermissionWhiteListWithOptions(request, runtime);
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
  async updateDataLevelPermissionStatus(request: UpdateDataLevelPermissionStatusRequest): Promise<UpdateDataLevelPermissionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataLevelPermissionStatusWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @param request - UpdateEmbeddedStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEmbeddedStatusResponse
   */
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

  /**
   * The ID of the request.
   * 
   * @param request - UpdateEmbeddedStatusRequest
   * @returns UpdateEmbeddedStatusResponse
   */
  async updateEmbeddedStatus(request: UpdateEmbeddedStatusRequest): Promise<UpdateEmbeddedStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEmbeddedStatusWithOptions(request, runtime);
  }

  /**
   * 更新三方嵌入ticket的票据数量
   * 
   * @param request - UpdateTicketNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTicketNumResponse
   */
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

  /**
   * 更新三方嵌入ticket的票据数量
   * 
   * @param request - UpdateTicketNumRequest
   * @returns UpdateTicketNumResponse
   */
  async updateTicketNum(request: UpdateTicketNumRequest): Promise<UpdateTicketNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTicketNumWithOptions(request, runtime);
  }

  /**
   * Updates the information of a specified member in an organization.
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adminUser)) {
      query["AdminUser"] = request.adminUser;
    }

    if (!Util.isUnset(request.authAdminUser)) {
      query["AuthAdminUser"] = request.authAdminUser;
    }

    if (!Util.isUnset(request.isDeleted)) {
      query["IsDeleted"] = request.isDeleted;
    }

    if (!Util.isUnset(request.nickName)) {
      query["NickName"] = request.nickName;
    }

    if (!Util.isUnset(request.roleIds)) {
      query["RoleIds"] = request.roleIds;
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

  /**
   * Updates the information of a specified member in an organization.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Updates information about a specified user group in an organization.
   * 
   * @param request - UpdateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserGroupResponse
   */
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

  /**
   * Updates information about a specified user group in an organization.
   * 
   * @param request - UpdateUserGroupRequest
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroup(request: UpdateUserGroupRequest): Promise<UpdateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  /**
   * 用于更新组织成员标签元信息
   * 
   * @param request - UpdateUserTagMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserTagMetaResponse
   */
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

  /**
   * 用于更新组织成员标签元信息
   * 
   * @param request - UpdateUserTagMetaRequest
   * @returns UpdateUserTagMetaResponse
   */
  async updateUserTagMeta(request: UpdateUserTagMetaRequest): Promise<UpdateUserTagMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserTagMetaWithOptions(request, runtime);
  }

  /**
   * 更新组织成员标签值
   * 
   * @param request - UpdateUserTagValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserTagValueResponse
   */
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

  /**
   * 更新组织成员标签值
   * 
   * @param request - UpdateUserTagValueRequest
   * @returns UpdateUserTagValueResponse
   */
  async updateUserTagValue(request: UpdateUserTagValueRequest): Promise<UpdateUserTagValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserTagValueWithOptions(request, runtime);
  }

  /**
   * 修改工作空间下指定成员的角色，已有的角色会被覆盖
   * 
   * @param request - UpdateWorkspaceUserRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceUserRoleResponse
   */
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

  /**
   * 修改工作空间下指定成员的角色，已有的角色会被覆盖
   * 
   * @param request - UpdateWorkspaceUserRoleRequest
   * @returns UpdateWorkspaceUserRoleResponse
   */
  async updateWorkspaceUserRole(request: UpdateWorkspaceUserRoleRequest): Promise<UpdateWorkspaceUserRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkspaceUserRoleWithOptions(request, runtime);
  }

  /**
   * 批量更新工作空间成员的角色信息，已有角色会被覆盖
   * 
   * @param request - UpdateWorkspaceUsersRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceUsersRoleResponse
   */
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

  /**
   * 批量更新工作空间成员的角色信息，已有角色会被覆盖
   * 
   * @param request - UpdateWorkspaceUsersRoleRequest
   * @returns UpdateWorkspaceUsersRoleResponse
   */
  async updateWorkspaceUsersRole(request: UpdateWorkspaceUsersRoleRequest): Promise<UpdateWorkspaceUsersRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkspaceUsersRoleWithOptions(request, runtime);
  }

  /**
   * Make the user exit all user groups. This process is irreversible. Exercise caution when performing this operation.
   * 
   * @param request - WithdrawAllUserGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WithdrawAllUserGroupsResponse
   */
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

  /**
   * Make the user exit all user groups. This process is irreversible. Exercise caution when performing this operation.
   * 
   * @param request - WithdrawAllUserGroupsRequest
   * @returns WithdrawAllUserGroupsResponse
   */
  async withdrawAllUserGroups(request: WithdrawAllUserGroupsRequest): Promise<WithdrawAllUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.withdrawAllUserGroupsWithOptions(request, runtime);
  }

}
