// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcceptApproveCommandRequest extends $tea.Model {
  commandId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptApproveCommandResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptApproveCommandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AcceptApproveCommandResponseBody;
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
      body: AcceptApproveCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptOperationTicketRequest extends $tea.Model {
  effectCount?: string;
  effectEndTime?: string;
  effectStartTime?: string;
  instanceId?: string;
  operationTicketId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      effectCount: 'EffectCount',
      effectEndTime: 'EffectEndTime',
      effectStartTime: 'EffectStartTime',
      instanceId: 'InstanceId',
      operationTicketId: 'OperationTicketId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectCount: 'string',
      effectEndTime: 'string',
      effectStartTime: 'string',
      instanceId: 'string',
      operationTicketId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptOperationTicketResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptOperationTicketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AcceptOperationTicketResponseBody;
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
      body: AcceptOperationTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatabasesToGroupRequest extends $tea.Model {
  databaseIds?: string[];
  hostGroupId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseIds: 'DatabaseIds',
      hostGroupId: 'HostGroupId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseIds: { 'type': 'array', 'itemType': 'string' },
      hostGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatabasesToGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: AddDatabasesToGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AddDatabasesToGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatabasesToGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDatabasesToGroupResponseBody;
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
      body: AddDatabasesToGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHostsToGroupRequest extends $tea.Model {
  hostGroupId?: string;
  hostIds?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupId: 'HostGroupId',
      hostIds: 'HostIds',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupId: 'string',
      hostIds: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHostsToGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: AddHostsToGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AddHostsToGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHostsToGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddHostsToGroupResponseBody;
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
      body: AddHostsToGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToGroupRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
      userIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: AddUsersToGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AddUsersToGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUsersToGroupResponseBody;
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
      body: AddUsersToGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserRequest extends $tea.Model {
  databases?: AttachDatabaseAccountsToUserRequestDatabases[];
  instanceId?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserRequestDatabases },
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserResponseBody extends $tea.Model {
  requestId?: string;
  results?: AttachDatabaseAccountsToUserResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachDatabaseAccountsToUserResponseBody;
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
      body: AttachDatabaseAccountsToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserGroupRequest extends $tea.Model {
  databases?: AttachDatabaseAccountsToUserGroupRequestDatabases[];
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserGroupRequestDatabases },
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: AttachDatabaseAccountsToUserGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachDatabaseAccountsToUserGroupResponseBody;
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
      body: AttachDatabaseAccountsToUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToHostShareKeyRequest extends $tea.Model {
  hostAccountIds?: string;
  hostShareKeyId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountIds: 'HostAccountIds',
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountIds: 'string',
      hostShareKeyId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToHostShareKeyResponseBody extends $tea.Model {
  requestId?: string;
  results?: AttachHostAccountsToHostShareKeyResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachHostAccountsToHostShareKeyResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToHostShareKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachHostAccountsToHostShareKeyResponseBody;
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
      body: AttachHostAccountsToHostShareKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserRequest extends $tea.Model {
  hosts?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserResponseBody extends $tea.Model {
  requestId?: string;
  results?: AttachHostAccountsToUserResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachHostAccountsToUserResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachHostAccountsToUserResponseBody;
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
      body: AttachHostAccountsToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserGroupRequest extends $tea.Model {
  hosts?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: AttachHostAccountsToUserGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachHostAccountsToUserGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachHostAccountsToUserGroupResponseBody;
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
      body: AttachHostAccountsToUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserRequest extends $tea.Model {
  hostGroups?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroups: 'HostGroups',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroups: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserResponseBody extends $tea.Model {
  requestId?: string;
  results?: AttachHostGroupAccountsToUserResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachHostGroupAccountsToUserResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachHostGroupAccountsToUserResponseBody;
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
      body: AttachHostGroupAccountsToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserGroupRequest extends $tea.Model {
  hostGroups?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroups: 'HostGroups',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroups: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: AttachHostGroupAccountsToUserGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachHostGroupAccountsToUserGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachHostGroupAccountsToUserGroupResponseBody;
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
      body: AttachHostGroupAccountsToUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceSecurityGroupsRequest extends $tea.Model {
  authorizedSecurityGroups?: string[];
  instanceId?: string;
  lang?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedSecurityGroups: 'AuthorizedSecurityGroups',
      instanceId: 'InstanceId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedSecurityGroups: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceSecurityGroupsResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceSecurityGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigInstanceSecurityGroupsResponseBody;
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
      body: ConfigInstanceSecurityGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceWhiteListRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceWhiteListResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceWhiteListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigInstanceWhiteListResponseBody;
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
      body: ConfigInstanceWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseRequest extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  databaseName?: string;
  databasePort?: number;
  databasePrivateAddress?: string;
  databasePublicAddress?: string;
  databaseType?: string;
  instanceId?: string;
  networkDomainId?: string;
  polarDBEndpointType?: string;
  regionId?: string;
  source?: string;
  sourceInstanceId?: string;
  sourceInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      databaseName: 'DatabaseName',
      databasePort: 'DatabasePort',
      databasePrivateAddress: 'DatabasePrivateAddress',
      databasePublicAddress: 'DatabasePublicAddress',
      databaseType: 'DatabaseType',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      polarDBEndpointType: 'PolarDBEndpointType',
      regionId: 'RegionId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceRegionId: 'SourceInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      databaseName: 'string',
      databasePort: 'number',
      databasePrivateAddress: 'string',
      databasePublicAddress: 'string',
      databaseType: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
      polarDBEndpointType: 'string',
      regionId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseResponseBody extends $tea.Model {
  databaseId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatabaseResponseBody;
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
      body: CreateDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseAccountRequest extends $tea.Model {
  databaseAccountName?: string;
  databaseId?: string;
  databaseSchema?: string;
  instanceId?: string;
  loginAttribute?: string;
  password?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      databaseSchema: 'DatabaseSchema',
      instanceId: 'InstanceId',
      loginAttribute: 'LoginAttribute',
      password: 'Password',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountName: 'string',
      databaseId: 'string',
      databaseSchema: 'string',
      instanceId: 'string',
      loginAttribute: 'string',
      password: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseAccountResponseBody extends $tea.Model {
  databaseAccountId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatabaseAccountResponseBody;
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
      body: CreateDatabaseAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostRequest extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  hostName?: string;
  hostPrivateAddress?: string;
  hostPublicAddress?: string;
  instanceId?: string;
  instanceRegionId?: string;
  networkDomainId?: string;
  OSType?: string;
  regionId?: string;
  source?: string;
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      instanceId: 'InstanceId',
      instanceRegionId: 'InstanceRegionId',
      networkDomainId: 'NetworkDomainId',
      OSType: 'OSType',
      regionId: 'RegionId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      instanceId: 'string',
      instanceRegionId: 'string',
      networkDomainId: 'string',
      OSType: 'string',
      regionId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostResponseBody extends $tea.Model {
  hostId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHostResponseBody;
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
      body: CreateHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAccountRequest extends $tea.Model {
  hostAccountName?: string;
  hostId?: string;
  hostShareKeyId?: string;
  instanceId?: string;
  passPhrase?: string;
  password?: string;
  privateKey?: string;
  protocolName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      passPhrase: 'PassPhrase',
      password: 'Password',
      privateKey: 'PrivateKey',
      protocolName: 'ProtocolName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountName: 'string',
      hostId: 'string',
      hostShareKeyId: 'string',
      instanceId: 'string',
      passPhrase: 'string',
      password: 'string',
      privateKey: 'string',
      protocolName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAccountResponseBody extends $tea.Model {
  hostAccountId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountId: 'HostAccountId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHostAccountResponseBody;
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
      body: CreateHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostGroupRequest extends $tea.Model {
  comment?: string;
  hostGroupName?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupName: 'HostGroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupName: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostGroupResponseBody extends $tea.Model {
  hostGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupId: 'HostGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHostGroupResponseBody;
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
      body: CreateHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostShareKeyRequest extends $tea.Model {
  hostShareKeyName?: string;
  instanceId?: string;
  passPhrase?: string;
  privateKey?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKeyName: 'HostShareKeyName',
      instanceId: 'InstanceId',
      passPhrase: 'PassPhrase',
      privateKey: 'PrivateKey',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeyName: 'string',
      instanceId: 'string',
      passPhrase: 'string',
      privateKey: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostShareKeyResponseBody extends $tea.Model {
  hostShareKeyId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKeyId: 'HostShareKeyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeyId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostShareKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHostShareKeyResponseBody;
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
      body: CreateHostShareKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkDomainRequest extends $tea.Model {
  comment?: string;
  instanceId?: string;
  networkDomainName?: string;
  networkDomainType?: string;
  proxies?: CreateNetworkDomainRequestProxies[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      networkDomainName: 'NetworkDomainName',
      networkDomainType: 'NetworkDomainType',
      proxies: 'Proxies',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      networkDomainName: 'string',
      networkDomainType: 'string',
      proxies: { 'type': 'array', 'itemType': CreateNetworkDomainRequestProxies },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkDomainResponseBody extends $tea.Model {
  networkDomainId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkDomainId: 'NetworkDomainId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkDomainId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNetworkDomainResponseBody;
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
      body: CreateNetworkDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $tea.Model {
  comment?: string;
  instanceId?: string;
  policyName?: string;
  priority?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      policyName: 'PolicyName',
      priority: 'Priority',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      policyName: 'string',
      priority: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBody extends $tea.Model {
  policyId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyResponseBody;
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
      body: CreatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequest extends $tea.Model {
  comment?: string;
  databases?: CreateRuleRequestDatabases[];
  effectiveEndTime?: number;
  effectiveStartTime?: number;
  hostGroups?: CreateRuleRequestHostGroups[];
  hosts?: CreateRuleRequestHosts[];
  instanceId?: string;
  regionId?: string;
  ruleName?: string;
  userGroupIds?: string[];
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      databases: 'Databases',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      hostGroups: 'HostGroups',
      hosts: 'Hosts',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      databases: { 'type': 'array', 'itemType': CreateRuleRequestDatabases },
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      hostGroups: { 'type': 'array', 'itemType': CreateRuleRequestHostGroups },
      hosts: { 'type': 'array', 'itemType': CreateRuleRequestHosts },
      instanceId: 'string',
      regionId: 'string',
      ruleName: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  requestId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRuleResponseBody;
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
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  comment?: string;
  displayName?: string;
  effectiveEndTime?: number;
  effectiveStartTime?: number;
  email?: string;
  instanceId?: string;
  language?: string;
  languageStatus?: string;
  mobile?: string;
  mobileCountryCode?: string;
  needResetPassword?: boolean;
  password?: string;
  regionId?: string;
  source?: string;
  sourceUserId?: string;
  twoFactorMethods?: string;
  twoFactorStatus?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayName: 'DisplayName',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      email: 'Email',
      instanceId: 'InstanceId',
      language: 'Language',
      languageStatus: 'LanguageStatus',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
      needResetPassword: 'NeedResetPassword',
      password: 'Password',
      regionId: 'RegionId',
      source: 'Source',
      sourceUserId: 'SourceUserId',
      twoFactorMethods: 'TwoFactorMethods',
      twoFactorStatus: 'TwoFactorStatus',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayName: 'string',
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      email: 'string',
      instanceId: 'string',
      language: 'string',
      languageStatus: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
      needResetPassword: 'boolean',
      password: 'string',
      regionId: 'string',
      source: 'string',
      sourceUserId: 'string',
      twoFactorMethods: 'string',
      twoFactorStatus: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  requestId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserResponseBody;
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
      body: CreateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequest extends $tea.Model {
  comment?: string;
  instanceId?: string;
  regionId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroupId: 'string',
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

export class CreateUserPublicKeyRequest extends $tea.Model {
  comment?: string;
  instanceId?: string;
  publicKey?: string;
  publicKeyName?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      publicKey: 'PublicKey',
      publicKeyName: 'PublicKeyName',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      publicKey: 'string',
      publicKeyName: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserPublicKeyResponseBody extends $tea.Model {
  publicKeyId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      publicKeyId: 'PublicKeyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicKeyId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserPublicKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserPublicKeyResponseBody;
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
      body: CreateUserPublicKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseRequest extends $tea.Model {
  databaseId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatabaseResponseBody;
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
      body: DeleteDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseAccountRequest extends $tea.Model {
  databaseAccountId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseAccountResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatabaseAccountResponseBody;
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
      body: DeleteDatabaseAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostRequest extends $tea.Model {
  hostId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHostResponseBody;
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
      body: DeleteHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostAccountRequest extends $tea.Model {
  hostAccountId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountId: 'HostAccountId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostAccountResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHostAccountResponseBody;
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
      body: DeleteHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostGroupRequest extends $tea.Model {
  hostGroupId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupId: 'HostGroupId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHostGroupResponseBody;
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
      body: DeleteHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostShareKeyRequest extends $tea.Model {
  hostShareKeyId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeyId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostShareKeyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostShareKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHostShareKeyResponseBody;
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
      body: DeleteHostShareKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkDomainRequest extends $tea.Model {
  instanceId?: string;
  networkDomainId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkDomainId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkDomainResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNetworkDomainResponseBody;
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
      body: DeleteNetworkDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyRequest extends $tea.Model {
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyResponseBody;
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
      body: DeletePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRuleResponseBody;
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
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class DeleteUserGroupRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class DeleteUserPublicKeyRequest extends $tea.Model {
  instanceId?: string;
  publicKeyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      publicKeyId: 'PublicKeyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      publicKeyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserPublicKeyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserPublicKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserPublicKeyResponseBody;
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
      body: DeleteUserPublicKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBody extends $tea.Model {
  instanceAttribute?: DescribeInstanceAttributeResponseBodyInstanceAttribute;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceAttribute: 'InstanceAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAttribute: DescribeInstanceAttributeResponseBodyInstanceAttribute,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceAttributeResponseBody;
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
      body: DescribeInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  instanceId?: string[];
  instanceStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      instanceStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstancesResponseBody;
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
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserRequest extends $tea.Model {
  databases?: DetachDatabaseAccountsFromUserRequestDatabases[];
  instanceId?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserRequestDatabases },
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserResponseBody extends $tea.Model {
  requestId?: string;
  results?: DetachDatabaseAccountsFromUserResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachDatabaseAccountsFromUserResponseBody;
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
      body: DetachDatabaseAccountsFromUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserGroupRequest extends $tea.Model {
  databases?: DetachDatabaseAccountsFromUserGroupRequestDatabases[];
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserGroupRequestDatabases },
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: DetachDatabaseAccountsFromUserGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachDatabaseAccountsFromUserGroupResponseBody;
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
      body: DetachDatabaseAccountsFromUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromHostShareKeyRequest extends $tea.Model {
  hostAccountIds?: string;
  hostShareKeyId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountIds: 'HostAccountIds',
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountIds: 'string',
      hostShareKeyId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromHostShareKeyResponseBody extends $tea.Model {
  requestId?: string;
  results?: DetachHostAccountsFromHostShareKeyResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachHostAccountsFromHostShareKeyResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromHostShareKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachHostAccountsFromHostShareKeyResponseBody;
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
      body: DetachHostAccountsFromHostShareKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserRequest extends $tea.Model {
  hosts?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserResponseBody extends $tea.Model {
  requestId?: string;
  results?: DetachHostAccountsFromUserResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachHostAccountsFromUserResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachHostAccountsFromUserResponseBody;
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
      body: DetachHostAccountsFromUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserGroupRequest extends $tea.Model {
  hosts?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: DetachHostAccountsFromUserGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachHostAccountsFromUserGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachHostAccountsFromUserGroupResponseBody;
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
      body: DetachHostAccountsFromUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserRequest extends $tea.Model {
  hostGroups?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroups: 'HostGroups',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroups: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserResponseBody extends $tea.Model {
  requestId?: string;
  results?: DetachHostGroupAccountsFromUserResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachHostGroupAccountsFromUserResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachHostGroupAccountsFromUserResponseBody;
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
      body: DetachHostGroupAccountsFromUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserGroupRequest extends $tea.Model {
  hostGroups?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroups: 'HostGroups',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroups: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: DetachHostGroupAccountsFromUserGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachHostGroupAccountsFromUserGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachHostGroupAccountsFromUserGroupResponseBody;
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
      body: DetachHostGroupAccountsFromUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstancePublicAccessRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstancePublicAccessResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstancePublicAccessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableInstancePublicAccessResponseBody;
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
      body: DisableInstancePublicAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRuleRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableRuleResponseBody;
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
      body: DisableRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstancePublicAccessRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstancePublicAccessResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstancePublicAccessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableInstancePublicAccessResponseBody;
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
      body: EnableInstancePublicAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRuleRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableRuleResponseBody;
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
      body: EnableRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAssetOperationTokenRequest extends $tea.Model {
  assetAccountId?: string;
  assetAccountName?: string;
  assetAccountPassword?: string;
  assetAccountProtocolName?: string;
  assetId?: string;
  assetType?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetAccountId: 'AssetAccountId',
      assetAccountName: 'AssetAccountName',
      assetAccountPassword: 'AssetAccountPassword',
      assetAccountProtocolName: 'AssetAccountProtocolName',
      assetId: 'AssetId',
      assetType: 'AssetType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetAccountId: 'string',
      assetAccountName: 'string',
      assetAccountPassword: 'string',
      assetAccountProtocolName: 'string',
      assetId: 'string',
      assetType: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAssetOperationTokenResponseBody extends $tea.Model {
  assetOperationToken?: GenerateAssetOperationTokenResponseBodyAssetOperationToken;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetOperationToken: 'AssetOperationToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetOperationToken: GenerateAssetOperationTokenResponseBodyAssetOperationToken,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAssetOperationTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateAssetOperationTokenResponseBody;
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
      body: GenerateAssetOperationTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseRequest extends $tea.Model {
  databaseId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponseBody extends $tea.Model {
  database?: GetDatabaseResponseBodyDatabase;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: GetDatabaseResponseBodyDatabase,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatabaseResponseBody;
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
      body: GetDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseAccountRequest extends $tea.Model {
  databaseAccountId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseAccountResponseBody extends $tea.Model {
  databaseAccount?: GetDatabaseAccountResponseBodyDatabaseAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccount: 'DatabaseAccount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccount: GetDatabaseAccountResponseBodyDatabaseAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatabaseAccountResponseBody;
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
      body: GetDatabaseAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostRequest extends $tea.Model {
  hostId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostResponseBody extends $tea.Model {
  host?: GetHostResponseBodyHost;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: GetHostResponseBodyHost,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHostResponseBody;
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
      body: GetHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostAccountRequest extends $tea.Model {
  hostAccountId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountId: 'HostAccountId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostAccountResponseBody extends $tea.Model {
  hostAccount?: GetHostAccountResponseBodyHostAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccount: 'HostAccount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccount: GetHostAccountResponseBodyHostAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHostAccountResponseBody;
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
      body: GetHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupRequest extends $tea.Model {
  hostGroupId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupId: 'HostGroupId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponseBody extends $tea.Model {
  hostGroup?: GetHostGroupResponseBodyHostGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroup: 'HostGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroup: GetHostGroupResponseBodyHostGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHostGroupResponseBody;
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
      body: GetHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostShareKeyRequest extends $tea.Model {
  hostShareKeyId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeyId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostShareKeyResponseBody extends $tea.Model {
  hostShareKey?: GetHostShareKeyResponseBodyHostShareKey;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKey: 'HostShareKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKey: GetHostShareKeyResponseBodyHostShareKey,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostShareKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHostShareKeyResponseBody;
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
      body: GetHostShareKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceADAuthServerRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceADAuthServerResponseBody extends $tea.Model {
  AD?: GetInstanceADAuthServerResponseBodyAD;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AD: 'AD',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AD: GetInstanceADAuthServerResponseBodyAD,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceADAuthServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceADAuthServerResponseBody;
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
      body: GetInstanceADAuthServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLDAPAuthServerRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLDAPAuthServerResponseBody extends $tea.Model {
  LDAP?: GetInstanceLDAPAuthServerResponseBodyLDAP;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      LDAP: 'LDAP',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      LDAP: GetInstanceLDAPAuthServerResponseBodyLDAP,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLDAPAuthServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceLDAPAuthServerResponseBody;
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
      body: GetInstanceLDAPAuthServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTwoFactorRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTwoFactorResponseBody extends $tea.Model {
  config?: GetInstanceTwoFactorResponseBodyConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetInstanceTwoFactorResponseBodyConfig,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTwoFactorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceTwoFactorResponseBody;
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
      body: GetInstanceTwoFactorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkDomainRequest extends $tea.Model {
  instanceId?: string;
  networkDomainId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkDomainId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkDomainResponseBody extends $tea.Model {
  networkDomain?: GetNetworkDomainResponseBodyNetworkDomain;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkDomain: 'NetworkDomain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkDomain: GetNetworkDomainResponseBodyNetworkDomain,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNetworkDomainResponseBody;
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
      body: GetNetworkDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyRequest extends $tea.Model {
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBody extends $tea.Model {
  policy?: GetPolicyResponseBodyPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GetPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPolicyResponseBody;
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
      body: GetPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAssetScopeRequest extends $tea.Model {
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAssetScopeResponseBody extends $tea.Model {
  assetScope?: GetPolicyAssetScopeResponseBodyAssetScope;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetScope: 'AssetScope',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetScope: GetPolicyAssetScopeResponseBodyAssetScope,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAssetScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPolicyAssetScopeResponseBody;
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
      body: GetPolicyAssetScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyUserScopeRequest extends $tea.Model {
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyUserScopeResponseBody extends $tea.Model {
  requestId?: string;
  userScope?: GetPolicyUserScopeResponseBodyUserScope;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userScope: 'UserScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userScope: GetPolicyUserScopeResponseBodyUserScope,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyUserScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPolicyUserScopeResponseBody;
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
      body: GetPolicyUserScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBody extends $tea.Model {
  requestId?: string;
  rule?: GetRuleResponseBodyRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rule: GetRuleResponseBodyRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleResponseBody;
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
      body: GetRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  requestId?: string;
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserResponseBodyUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserResponseBody;
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
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  userGroup?: GetUserGroupResponseBodyUserGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroup: GetUserGroupResponseBodyUserGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserGroupResponseBody;
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
      body: GetUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApproveCommandsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApproveCommandsResponseBody extends $tea.Model {
  approveCommands?: ListApproveCommandsResponseBodyApproveCommands[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      approveCommands: 'ApproveCommands',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveCommands: { 'type': 'array', 'itemType': ListApproveCommandsResponseBodyApproveCommands },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApproveCommandsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApproveCommandsResponseBody;
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
      body: ListApproveCommandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsRequest extends $tea.Model {
  databaseAccountName?: string;
  databaseId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountName: 'string',
      databaseId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsResponseBody extends $tea.Model {
  databaseAccounts?: ListDatabaseAccountsResponseBodyDatabaseAccounts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseAccounts: 'DatabaseAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccounts: { 'type': 'array', 'itemType': ListDatabaseAccountsResponseBodyDatabaseAccounts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatabaseAccountsResponseBody;
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
      body: ListDatabaseAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsForUserRequest extends $tea.Model {
  databaseAccountName?: string;
  databaseId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountName: 'string',
      databaseId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsForUserResponseBody extends $tea.Model {
  databaseAccounts?: ListDatabaseAccountsForUserResponseBodyDatabaseAccounts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseAccounts: 'DatabaseAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccounts: { 'type': 'array', 'itemType': ListDatabaseAccountsForUserResponseBodyDatabaseAccounts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsForUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatabaseAccountsForUserResponseBody;
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
      body: ListDatabaseAccountsForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsForUserGroupRequest extends $tea.Model {
  databaseAccountName?: string;
  databaseId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountName: 'string',
      databaseId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsForUserGroupResponseBody extends $tea.Model {
  databaseAccounts?: ListDatabaseAccountsForUserGroupResponseBodyDatabaseAccounts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseAccounts: 'DatabaseAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccounts: { 'type': 'array', 'itemType': ListDatabaseAccountsForUserGroupResponseBodyDatabaseAccounts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsForUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatabaseAccountsForUserGroupResponseBody;
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
      body: ListDatabaseAccountsForUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesRequest extends $tea.Model {
  databaseType?: string;
  hostGroupId?: string;
  instanceId?: string;
  networkDomainId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      hostGroupId: 'HostGroupId',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      hostGroupId: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBody extends $tea.Model {
  databases?: ListDatabasesResponseBodyDatabases[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListDatabasesResponseBodyDatabases },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatabasesResponseBody;
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
      body: ListDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesForUserRequest extends $tea.Model {
  databaseAddress?: string;
  databaseName?: string;
  databaseType?: string;
  instanceId?: string;
  networkDomainId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAddress: 'DatabaseAddress',
      databaseName: 'DatabaseName',
      databaseType: 'DatabaseType',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAddress: 'string',
      databaseName: 'string',
      databaseType: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesForUserResponseBody extends $tea.Model {
  databases?: ListDatabasesForUserResponseBodyDatabases[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListDatabasesForUserResponseBodyDatabases },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesForUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatabasesForUserResponseBody;
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
      body: ListDatabasesForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesForUserGroupRequest extends $tea.Model {
  databaseAddress?: string;
  databaseName?: string;
  databaseType?: string;
  instanceId?: string;
  networkDomainId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAddress: 'DatabaseAddress',
      databaseName: 'DatabaseName',
      databaseType: 'DatabaseType',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAddress: 'string',
      databaseName: 'string',
      databaseType: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesForUserGroupResponseBody extends $tea.Model {
  databases?: ListDatabasesForUserGroupResponseBodyDatabases[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListDatabasesForUserGroupResponseBodyDatabases },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesForUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatabasesForUserGroupResponseBody;
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
      body: ListDatabasesForUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsRequest extends $tea.Model {
  hostAccountName?: string;
  hostId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  protocolName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protocolName: 'ProtocolName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountName: 'string',
      hostId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      protocolName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsResponseBody extends $tea.Model {
  hostAccounts?: ListHostAccountsResponseBodyHostAccounts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostAccounts: 'HostAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccounts: { 'type': 'array', 'itemType': ListHostAccountsResponseBodyHostAccounts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostAccountsResponseBody;
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
      body: ListHostAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForHostShareKeyRequest extends $tea.Model {
  hostShareKeyId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeyId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForHostShareKeyResponseBody extends $tea.Model {
  hostAccounts?: ListHostAccountsForHostShareKeyResponseBodyHostAccounts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostAccounts: 'HostAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccounts: { 'type': 'array', 'itemType': ListHostAccountsForHostShareKeyResponseBodyHostAccounts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForHostShareKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostAccountsForHostShareKeyResponseBody;
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
      body: ListHostAccountsForHostShareKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserRequest extends $tea.Model {
  hostAccountName?: string;
  hostId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountName: 'string',
      hostId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserResponseBody extends $tea.Model {
  hostAccounts?: ListHostAccountsForUserResponseBodyHostAccounts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostAccounts: 'HostAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccounts: { 'type': 'array', 'itemType': ListHostAccountsForUserResponseBodyHostAccounts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostAccountsForUserResponseBody;
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
      body: ListHostAccountsForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserGroupRequest extends $tea.Model {
  hostAccountName?: string;
  hostId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountName: 'string',
      hostId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserGroupResponseBody extends $tea.Model {
  hostAccounts?: ListHostAccountsForUserGroupResponseBodyHostAccounts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostAccounts: 'HostAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccounts: { 'type': 'array', 'itemType': ListHostAccountsForUserGroupResponseBodyHostAccounts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostAccountsForUserGroupResponseBody;
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
      body: ListHostAccountsForUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupAccountNamesForUserRequest extends $tea.Model {
  hostGroupId?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupId: 'HostGroupId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupAccountNamesForUserResponseBody extends $tea.Model {
  hostAccountNames?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountNames: 'HostAccountNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupAccountNamesForUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostGroupAccountNamesForUserResponseBody;
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
      body: ListHostGroupAccountNamesForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupAccountNamesForUserGroupRequest extends $tea.Model {
  hostGroupId?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupId: 'HostGroupId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupAccountNamesForUserGroupResponseBody extends $tea.Model {
  hostAccountNames?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountNames: 'HostAccountNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupAccountNamesForUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostGroupAccountNamesForUserGroupResponseBody;
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
      body: ListHostGroupAccountNamesForUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsRequest extends $tea.Model {
  hostGroupName?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupName: 'HostGroupName',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupName: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsResponseBody extends $tea.Model {
  hostGroups?: ListHostGroupsResponseBodyHostGroups[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostGroups: 'HostGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroups: { 'type': 'array', 'itemType': ListHostGroupsResponseBodyHostGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostGroupsResponseBody;
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
      body: ListHostGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsForUserRequest extends $tea.Model {
  hostGroupName?: string;
  instanceId?: string;
  mode?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupName: 'HostGroupName',
      instanceId: 'InstanceId',
      mode: 'Mode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupName: 'string',
      instanceId: 'string',
      mode: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsForUserResponseBody extends $tea.Model {
  hostGroups?: ListHostGroupsForUserResponseBodyHostGroups[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostGroups: 'HostGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroups: { 'type': 'array', 'itemType': ListHostGroupsForUserResponseBodyHostGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsForUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostGroupsForUserResponseBody;
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
      body: ListHostGroupsForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsForUserGroupRequest extends $tea.Model {
  hostGroupName?: string;
  instanceId?: string;
  mode?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupName: 'HostGroupName',
      instanceId: 'InstanceId',
      mode: 'Mode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupName: 'string',
      instanceId: 'string',
      mode: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsForUserGroupResponseBody extends $tea.Model {
  hostGroups?: ListHostGroupsForUserGroupResponseBodyHostGroups[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostGroups: 'HostGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroups: { 'type': 'array', 'itemType': ListHostGroupsForUserGroupResponseBodyHostGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsForUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostGroupsForUserGroupResponseBody;
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
      body: ListHostGroupsForUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostShareKeysRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostShareKeysResponseBody extends $tea.Model {
  hostShareKeys?: ListHostShareKeysResponseBodyHostShareKeys[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostShareKeys: 'HostShareKeys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeys: { 'type': 'array', 'itemType': ListHostShareKeysResponseBodyHostShareKeys },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostShareKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostShareKeysResponseBody;
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
      body: ListHostShareKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsRequest extends $tea.Model {
  hostAddress?: string;
  hostGroupId?: string;
  hostName?: string;
  instanceId?: string;
  OSType?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  source?: string;
  sourceInstanceId?: string;
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      hostGroupId: 'HostGroupId',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      OSType: 'OSType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      hostGroupId: 'string',
      hostName: 'string',
      instanceId: 'string',
      OSType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsResponseBody extends $tea.Model {
  hosts?: ListHostsResponseBodyHosts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListHostsResponseBodyHosts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostsResponseBody;
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
      body: ListHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserRequest extends $tea.Model {
  hostAddress?: string;
  hostName?: string;
  instanceId?: string;
  mode?: string;
  OSType?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      mode: 'Mode',
      OSType: 'OSType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      hostName: 'string',
      instanceId: 'string',
      mode: 'string',
      OSType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserResponseBody extends $tea.Model {
  hosts?: ListHostsForUserResponseBodyHosts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListHostsForUserResponseBodyHosts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostsForUserResponseBody;
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
      body: ListHostsForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserGroupRequest extends $tea.Model {
  hostAddress?: string;
  hostName?: string;
  instanceId?: string;
  mode?: string;
  OSType?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      mode: 'Mode',
      OSType: 'OSType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      hostName: 'string',
      instanceId: 'string',
      mode: 'string',
      OSType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserGroupResponseBody extends $tea.Model {
  hosts?: ListHostsForUserGroupResponseBodyHosts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListHostsForUserGroupResponseBodyHosts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHostsForUserGroupResponseBody;
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
      body: ListHostsForUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkDomainsRequest extends $tea.Model {
  instanceId?: string;
  networkDomainName?: string;
  networkDomainType?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkDomainName: 'NetworkDomainName',
      networkDomainType: 'NetworkDomainType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkDomainName: 'string',
      networkDomainType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkDomainsResponseBody extends $tea.Model {
  networkDomains?: ListNetworkDomainsResponseBodyNetworkDomains[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkDomains: 'NetworkDomains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkDomains: { 'type': 'array', 'itemType': ListNetworkDomainsResponseBodyNetworkDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkDomainsResponseBody;
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
      body: ListNetworkDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationDatabaseAccountsRequest extends $tea.Model {
  databaseAccountName?: string;
  databaseId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountName: 'string',
      databaseId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationDatabaseAccountsResponseBody extends $tea.Model {
  databaseAccounts?: ListOperationDatabaseAccountsResponseBodyDatabaseAccounts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseAccounts: 'DatabaseAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccounts: { 'type': 'array', 'itemType': ListOperationDatabaseAccountsResponseBodyDatabaseAccounts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationDatabaseAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOperationDatabaseAccountsResponseBody;
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
      body: ListOperationDatabaseAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationDatabasesRequest extends $tea.Model {
  databaseAddress?: string;
  databaseName?: string;
  databaseType?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  source?: string;
  sourceInstanceId?: string;
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAddress: 'DatabaseAddress',
      databaseName: 'DatabaseName',
      databaseType: 'DatabaseType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAddress: 'string',
      databaseName: 'string',
      databaseType: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationDatabasesResponseBody extends $tea.Model {
  databases?: ListOperationDatabasesResponseBodyDatabases[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListOperationDatabasesResponseBodyDatabases },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationDatabasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOperationDatabasesResponseBody;
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
      body: ListOperationDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHostAccountsRequest extends $tea.Model {
  hostAccountName?: string;
  hostId?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountName: 'string',
      hostId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHostAccountsResponseBody extends $tea.Model {
  hostAccounts?: ListOperationHostAccountsResponseBodyHostAccounts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostAccounts: 'HostAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccounts: { 'type': 'array', 'itemType': ListOperationHostAccountsResponseBodyHostAccounts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHostAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOperationHostAccountsResponseBody;
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
      body: ListOperationHostAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHostsRequest extends $tea.Model {
  hostAddress?: string;
  hostName?: string;
  instanceId?: string;
  OSType?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  source?: string;
  sourceInstanceId?: string;
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      OSType: 'OSType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      hostName: 'string',
      instanceId: 'string',
      OSType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHostsResponseBody extends $tea.Model {
  hosts?: ListOperationHostsResponseBodyHosts[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListOperationHostsResponseBodyHosts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHostsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOperationHostsResponseBody;
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
      body: ListOperationHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationTicketsRequest extends $tea.Model {
  assetAddress?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetAddress: 'AssetAddress',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetAddress: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationTicketsResponseBody extends $tea.Model {
  operationTickets?: ListOperationTicketsResponseBodyOperationTickets[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      operationTickets: 'OperationTickets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationTickets: { 'type': 'array', 'itemType': ListOperationTicketsResponseBodyOperationTickets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationTicketsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOperationTicketsResponseBody;
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
      body: ListOperationTicketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  policyName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyName: 'PolicyName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      policyName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $tea.Model {
  policies?: ListPoliciesResponseBodyPolicies[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoliciesResponseBody;
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
      body: ListPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  ruleName?: string;
  ruleState?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      ruleState: 'RuleState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      ruleName: 'string',
      ruleState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $tea.Model {
  requestId?: string;
  rules?: ListRulesResponseBodyRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRulesResponseBody;
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
      body: ListRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tagKeys?: ListTagKeysResponseBodyTagKeys[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTagKeys },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
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
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  userGroups?: ListUserGroupsResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      userGroups: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyUserGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupsResponseBody;
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
      body: ListUserGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPublicKeysRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPublicKeysResponseBody extends $tea.Model {
  publicKeys?: ListUserPublicKeysResponseBodyPublicKeys[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      publicKeys: 'PublicKeys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicKeys: { 'type': 'array', 'itemType': ListUserPublicKeysResponseBodyPublicKeys },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPublicKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserPublicKeysResponseBody;
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
      body: ListUserPublicKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  displayName?: string;
  instanceId?: string;
  mobile?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  source?: string;
  sourceUserId?: string;
  userGroupId?: string;
  userName?: string;
  userState?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      mobile: 'Mobile',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      source: 'Source',
      sourceUserId: 'SourceUserId',
      userGroupId: 'UserGroupId',
      userName: 'UserName',
      userState: 'UserState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      instanceId: 'string',
      mobile: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      source: 'string',
      sourceUserId: 'string',
      userGroupId: 'string',
      userName: 'string',
      userState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  users?: ListUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
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
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      userIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponseBody extends $tea.Model {
  requestId?: string;
  results?: LockUsersResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': LockUsersResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LockUsersResponseBody;
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
      body: LockUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseRequest extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  databaseId?: string;
  databaseName?: string;
  databasePort?: string;
  databasePrivateAddress?: string;
  databasePublicAddress?: string;
  instanceId?: string;
  networkDomainId?: string;
  regionId?: string;
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      databasePort: 'DatabasePort',
      databasePrivateAddress: 'DatabasePrivateAddress',
      databasePublicAddress: 'DatabasePublicAddress',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      regionId: 'RegionId',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      databaseId: 'string',
      databaseName: 'string',
      databasePort: 'string',
      databasePrivateAddress: 'string',
      databasePublicAddress: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
      regionId: 'string',
      sourceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDatabaseResponseBody;
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
      body: ModifyDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseAccountRequest extends $tea.Model {
  databaseAccountId?: string;
  databaseAccountName?: string;
  databaseSchema?: string;
  instanceId?: string;
  password?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      databaseAccountName: 'DatabaseAccountName',
      databaseSchema: 'DatabaseSchema',
      instanceId: 'InstanceId',
      password: 'Password',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      databaseAccountName: 'string',
      databaseSchema: 'string',
      instanceId: 'string',
      password: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseAccountResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDatabaseAccountResponseBody;
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
      body: ModifyDatabaseAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostRequest extends $tea.Model {
  comment?: string;
  hostId?: string;
  hostName?: string;
  hostPrivateAddress?: string;
  hostPublicAddress?: string;
  instanceId?: string;
  networkDomainId?: string;
  OSType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostId: 'HostId',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      OSType: 'OSType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostId: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
      OSType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHostResponseBody;
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
      body: ModifyHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAccountRequest extends $tea.Model {
  hostAccountId?: string;
  hostAccountName?: string;
  hostShareKeyId?: string;
  instanceId?: string;
  passPhrase?: string;
  password?: string;
  privateKey?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountId: 'HostAccountId',
      hostAccountName: 'HostAccountName',
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      passPhrase: 'PassPhrase',
      password: 'Password',
      privateKey: 'PrivateKey',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountId: 'string',
      hostAccountName: 'string',
      hostShareKeyId: 'string',
      instanceId: 'string',
      passPhrase: 'string',
      password: 'string',
      privateKey: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAccountResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHostAccountResponseBody;
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
      body: ModifyHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostGroupRequest extends $tea.Model {
  comment?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHostGroupResponseBody;
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
      body: ModifyHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostShareKeyRequest extends $tea.Model {
  hostShareKeyId?: string;
  hostShareKeyName?: string;
  instanceId?: string;
  passPhrase?: string;
  privateKey?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKeyId: 'HostShareKeyId',
      hostShareKeyName: 'HostShareKeyName',
      instanceId: 'InstanceId',
      passPhrase: 'PassPhrase',
      privateKey: 'PrivateKey',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeyId: 'string',
      hostShareKeyName: 'string',
      instanceId: 'string',
      passPhrase: 'string',
      privateKey: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostShareKeyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostShareKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHostShareKeyResponseBody;
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
      body: ModifyHostShareKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostsActiveAddressTypeRequest extends $tea.Model {
  activeAddressType?: string;
  hostIds?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      hostIds: 'HostIds',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      hostIds: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostsActiveAddressTypeResponseBody extends $tea.Model {
  requestId?: string;
  results?: ModifyHostsActiveAddressTypeResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ModifyHostsActiveAddressTypeResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostsActiveAddressTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHostsActiveAddressTypeResponseBody;
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
      body: ModifyHostsActiveAddressTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostsPortRequest extends $tea.Model {
  hostIds?: string;
  instanceId?: string;
  port?: string;
  protocolName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostIds: 'HostIds',
      instanceId: 'InstanceId',
      port: 'Port',
      protocolName: 'ProtocolName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostIds: 'string',
      instanceId: 'string',
      port: 'string',
      protocolName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostsPortResponseBody extends $tea.Model {
  requestId?: string;
  results?: ModifyHostsPortResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ModifyHostsPortResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostsPortResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHostsPortResponseBody;
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
      body: ModifyHostsPortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceADAuthServerRequest extends $tea.Model {
  account?: string;
  baseDN?: string;
  domain?: string;
  emailMapping?: string;
  filter?: string;
  instanceId?: string;
  isSSL?: string;
  mobileMapping?: string;
  nameMapping?: string;
  password?: string;
  port?: string;
  regionId?: string;
  server?: string;
  standbyServer?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      baseDN: 'BaseDN',
      domain: 'Domain',
      emailMapping: 'EmailMapping',
      filter: 'Filter',
      instanceId: 'InstanceId',
      isSSL: 'IsSSL',
      mobileMapping: 'MobileMapping',
      nameMapping: 'NameMapping',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      server: 'Server',
      standbyServer: 'StandbyServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      baseDN: 'string',
      domain: 'string',
      emailMapping: 'string',
      filter: 'string',
      instanceId: 'string',
      isSSL: 'string',
      mobileMapping: 'string',
      nameMapping: 'string',
      password: 'string',
      port: 'string',
      regionId: 'string',
      server: 'string',
      standbyServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceADAuthServerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceADAuthServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceADAuthServerResponseBody;
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
      body: ModifyInstanceADAuthServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceAttributeResponseBody;
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
      body: ModifyInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceLDAPAuthServerRequest extends $tea.Model {
  account?: string;
  baseDN?: string;
  emailMapping?: string;
  filter?: string;
  instanceId?: string;
  isSSL?: string;
  loginNameMapping?: string;
  mobileMapping?: string;
  nameMapping?: string;
  password?: string;
  port?: string;
  regionId?: string;
  server?: string;
  standbyServer?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      baseDN: 'BaseDN',
      emailMapping: 'EmailMapping',
      filter: 'Filter',
      instanceId: 'InstanceId',
      isSSL: 'IsSSL',
      loginNameMapping: 'LoginNameMapping',
      mobileMapping: 'MobileMapping',
      nameMapping: 'NameMapping',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      server: 'Server',
      standbyServer: 'StandbyServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      baseDN: 'string',
      emailMapping: 'string',
      filter: 'string',
      instanceId: 'string',
      isSSL: 'string',
      loginNameMapping: 'string',
      mobileMapping: 'string',
      nameMapping: 'string',
      password: 'string',
      port: 'string',
      regionId: 'string',
      server: 'string',
      standbyServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceLDAPAuthServerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceLDAPAuthServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceLDAPAuthServerResponseBody;
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
      body: ModifyInstanceLDAPAuthServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTwoFactorRequest extends $tea.Model {
  enableTwoFactor?: string;
  instanceId?: string;
  regionId?: string;
  skipTwoFactorTime?: string;
  twoFactorMethods?: string;
  static names(): { [key: string]: string } {
    return {
      enableTwoFactor: 'EnableTwoFactor',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      skipTwoFactorTime: 'SkipTwoFactorTime',
      twoFactorMethods: 'TwoFactorMethods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTwoFactor: 'string',
      instanceId: 'string',
      regionId: 'string',
      skipTwoFactorTime: 'string',
      twoFactorMethods: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTwoFactorResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTwoFactorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceTwoFactorResponseBody;
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
      body: ModifyInstanceTwoFactorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkDomainRequest extends $tea.Model {
  comment?: string;
  instanceId?: string;
  networkDomainId?: string;
  networkDomainName?: string;
  networkDomainType?: string;
  proxies?: ModifyNetworkDomainRequestProxies[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      networkDomainName: 'NetworkDomainName',
      networkDomainType: 'NetworkDomainType',
      proxies: 'Proxies',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      networkDomainId: 'string',
      networkDomainName: 'string',
      networkDomainType: 'string',
      proxies: { 'type': 'array', 'itemType': ModifyNetworkDomainRequestProxies },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkDomainResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNetworkDomainResponseBody;
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
      body: ModifyNetworkDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequest extends $tea.Model {
  comment?: string;
  instanceId?: string;
  policyId?: string;
  policyName?: string;
  priority?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      priority: 'Priority',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      policyId: 'string',
      policyName: 'string',
      priority: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolicyResponseBody;
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
      body: ModifyPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleRequest extends $tea.Model {
  comment?: string;
  databases?: ModifyRuleRequestDatabases[];
  effectiveEndTime?: number;
  effectiveStartTime?: number;
  hostGroups?: ModifyRuleRequestHostGroups[];
  hosts?: ModifyRuleRequestHosts[];
  instanceId?: string;
  regionId?: string;
  ruleId?: string;
  ruleName?: string;
  userGroupIds?: string[];
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      databases: 'Databases',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      hostGroups: 'HostGroups',
      hosts: 'Hosts',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      databases: { 'type': 'array', 'itemType': ModifyRuleRequestDatabases },
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      hostGroups: { 'type': 'array', 'itemType': ModifyRuleRequestHostGroups },
      hosts: { 'type': 'array', 'itemType': ModifyRuleRequestHosts },
      instanceId: 'string',
      regionId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRuleResponseBody;
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
      body: ModifyRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserRequest extends $tea.Model {
  comment?: string;
  displayName?: string;
  effectiveEndTime?: number;
  effectiveStartTime?: number;
  email?: string;
  instanceId?: string;
  language?: string;
  languageStatus?: string;
  mobile?: string;
  mobileCountryCode?: string;
  needResetPassword?: boolean;
  password?: string;
  regionId?: string;
  twoFactorMethods?: string;
  twoFactorStatus?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayName: 'DisplayName',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      email: 'Email',
      instanceId: 'InstanceId',
      language: 'Language',
      languageStatus: 'LanguageStatus',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
      needResetPassword: 'NeedResetPassword',
      password: 'Password',
      regionId: 'RegionId',
      twoFactorMethods: 'TwoFactorMethods',
      twoFactorStatus: 'TwoFactorStatus',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayName: 'string',
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      email: 'string',
      instanceId: 'string',
      language: 'string',
      languageStatus: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
      needResetPassword: 'boolean',
      password: 'string',
      regionId: 'string',
      twoFactorMethods: 'string',
      twoFactorStatus: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUserResponseBody;
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
      body: ModifyUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupRequest extends $tea.Model {
  comment?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUserGroupResponseBody;
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
      body: ModifyUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPublicKeyRequest extends $tea.Model {
  comment?: string;
  instanceId?: string;
  publicKey?: string;
  publicKeyId?: string;
  publicKeyName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      publicKey: 'PublicKey',
      publicKeyId: 'PublicKeyId',
      publicKeyName: 'PublicKeyName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      publicKey: 'string',
      publicKeyId: 'string',
      publicKeyName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPublicKeyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPublicKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUserPublicKeyResponseBody;
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
      body: ModifyUserPublicKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveDatabasesToNetworkDomainRequest extends $tea.Model {
  databaseIds?: string[];
  instanceId?: string;
  networkDomainId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseIds: 'DatabaseIds',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      networkDomainId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveDatabasesToNetworkDomainResponseBody extends $tea.Model {
  requestId?: string;
  results?: MoveDatabasesToNetworkDomainResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': MoveDatabasesToNetworkDomainResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveDatabasesToNetworkDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveDatabasesToNetworkDomainResponseBody;
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
      body: MoveDatabasesToNetworkDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveHostsToNetworkDomainRequest extends $tea.Model {
  hostIds?: string[];
  instanceId?: string;
  networkDomainId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostIds: 'HostIds',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      networkDomainId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveHostsToNetworkDomainResponseBody extends $tea.Model {
  requestId?: string;
  results?: MoveHostsToNetworkDomainResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': MoveHostsToNetworkDomainResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveHostsToNetworkDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveHostsToNetworkDomainResponseBody;
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
      body: MoveHostsToNetworkDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceGroupResponseBody;
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
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectApproveCommandRequest extends $tea.Model {
  commandId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectApproveCommandResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectApproveCommandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RejectApproveCommandResponseBody;
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
      body: RejectApproveCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectOperationTicketRequest extends $tea.Model {
  instanceId?: string;
  operationTicketId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operationTicketId: 'OperationTicketId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operationTicketId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectOperationTicketResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectOperationTicketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RejectOperationTicketResponseBody;
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
      body: RejectOperationTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDatabasesFromGroupRequest extends $tea.Model {
  databaseIds?: string[];
  hostGroupId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseIds: 'DatabaseIds',
      hostGroupId: 'HostGroupId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseIds: { 'type': 'array', 'itemType': 'string' },
      hostGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDatabasesFromGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: RemoveDatabasesFromGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': RemoveDatabasesFromGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDatabasesFromGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveDatabasesFromGroupResponseBody;
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
      body: RemoveDatabasesFromGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHostsFromGroupRequest extends $tea.Model {
  hostGroupId?: string;
  hostIds?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupId: 'HostGroupId',
      hostIds: 'HostIds',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupId: 'string',
      hostIds: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHostsFromGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: RemoveHostsFromGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': RemoveHostsFromGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHostsFromGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveHostsFromGroupResponseBody;
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
      body: RemoveHostsFromGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromGroupRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
      userIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromGroupResponseBody extends $tea.Model {
  requestId?: string;
  results?: RemoveUsersFromGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': RemoveUsersFromGroupResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUsersFromGroupResponseBody;
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
      body: RemoveUsersFromGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAssetOperationTokenRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      tokenId: 'TokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      tokenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAssetOperationTokenResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewAssetOperationTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewAssetOperationTokenResponseBody;
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
      body: RenewAssetOperationTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHostAccountCredentialRequest extends $tea.Model {
  credentialType?: string;
  hostAccountId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialType: 'CredentialType',
      hostAccountId: 'HostAccountId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialType: 'string',
      hostAccountId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHostAccountCredentialResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHostAccountCredentialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetHostAccountCredentialResponseBody;
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
      body: ResetHostAccountCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAccessTimeRangeConfigRequest extends $tea.Model {
  accessTimeRangeConfig?: SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfig;
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessTimeRangeConfig: 'AccessTimeRangeConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTimeRangeConfig: SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfig,
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAccessTimeRangeConfigShrinkRequest extends $tea.Model {
  accessTimeRangeConfigShrink?: string;
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessTimeRangeConfigShrink: 'AccessTimeRangeConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTimeRangeConfigShrink: 'string',
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAccessTimeRangeConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAccessTimeRangeConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPolicyAccessTimeRangeConfigResponseBody;
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
      body: SetPolicyAccessTimeRangeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyApprovalConfigRequest extends $tea.Model {
  approvalConfig?: SetPolicyApprovalConfigRequestApprovalConfig;
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalConfig: 'ApprovalConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalConfig: SetPolicyApprovalConfigRequestApprovalConfig,
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyApprovalConfigShrinkRequest extends $tea.Model {
  approvalConfigShrink?: string;
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalConfigShrink: 'ApprovalConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalConfigShrink: 'string',
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyApprovalConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyApprovalConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPolicyApprovalConfigResponseBody;
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
      body: SetPolicyApprovalConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAssetScopeRequest extends $tea.Model {
  databases?: SetPolicyAssetScopeRequestDatabases[];
  hostGroups?: SetPolicyAssetScopeRequestHostGroups[];
  hosts?: SetPolicyAssetScopeRequestHosts[];
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      hostGroups: 'HostGroups',
      hosts: 'Hosts',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': SetPolicyAssetScopeRequestDatabases },
      hostGroups: { 'type': 'array', 'itemType': SetPolicyAssetScopeRequestHostGroups },
      hosts: { 'type': 'array', 'itemType': SetPolicyAssetScopeRequestHosts },
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
      scopeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAssetScopeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAssetScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPolicyAssetScopeResponseBody;
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
      body: SetPolicyAssetScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyCommandConfigRequest extends $tea.Model {
  commandConfig?: SetPolicyCommandConfigRequestCommandConfig;
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandConfig: 'CommandConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandConfig: SetPolicyCommandConfigRequestCommandConfig,
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyCommandConfigShrinkRequest extends $tea.Model {
  commandConfigShrink?: string;
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandConfigShrink: 'CommandConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandConfigShrink: 'string',
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyCommandConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyCommandConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPolicyCommandConfigResponseBody;
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
      body: SetPolicyCommandConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyIPAclConfigRequest extends $tea.Model {
  IPAclConfig?: SetPolicyIPAclConfigRequestIPAclConfig;
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      IPAclConfig: 'IPAclConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPAclConfig: SetPolicyIPAclConfigRequestIPAclConfig,
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyIPAclConfigShrinkRequest extends $tea.Model {
  IPAclConfigShrink?: string;
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      IPAclConfigShrink: 'IPAclConfig',
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPAclConfigShrink: 'string',
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyIPAclConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyIPAclConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPolicyIPAclConfigResponseBody;
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
      body: SetPolicyIPAclConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyProtocolConfigRequest extends $tea.Model {
  instanceId?: string;
  policyId?: string;
  protocolConfig?: SetPolicyProtocolConfigRequestProtocolConfig;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      protocolConfig: 'ProtocolConfig',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
      protocolConfig: SetPolicyProtocolConfigRequestProtocolConfig,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyProtocolConfigShrinkRequest extends $tea.Model {
  instanceId?: string;
  policyId?: string;
  protocolConfigShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      protocolConfigShrink: 'ProtocolConfig',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
      protocolConfigShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyProtocolConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyProtocolConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPolicyProtocolConfigResponseBody;
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
      body: SetPolicyProtocolConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyUserScopeRequest extends $tea.Model {
  instanceId?: string;
  policyId?: string;
  regionId?: string;
  scopeType?: string;
  userGroupIds?: string[];
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      scopeType: 'ScopeType',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
      scopeType: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyUserScopeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyUserScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPolicyUserScopeResponseBody;
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
      body: SetPolicyUserScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  securityGroupIds?: string[];
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      securityGroupIds: 'SecurityGroupIds',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartInstanceResponseBody;
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
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      userIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponseBody extends $tea.Model {
  requestId?: string;
  results?: UnlockUsersResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': UnlockUsersResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnlockUsersResponseBody;
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
      body: UnlockUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyInstanceADAuthServerRequest extends $tea.Model {
  account?: string;
  baseDN?: string;
  domain?: string;
  filter?: string;
  instanceId?: string;
  isSSL?: string;
  password?: string;
  port?: string;
  regionId?: string;
  server?: string;
  standbyServer?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      baseDN: 'BaseDN',
      domain: 'Domain',
      filter: 'Filter',
      instanceId: 'InstanceId',
      isSSL: 'IsSSL',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      server: 'Server',
      standbyServer: 'StandbyServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      baseDN: 'string',
      domain: 'string',
      filter: 'string',
      instanceId: 'string',
      isSSL: 'string',
      password: 'string',
      port: 'string',
      regionId: 'string',
      server: 'string',
      standbyServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyInstanceADAuthServerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyInstanceADAuthServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyInstanceADAuthServerResponseBody;
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
      body: VerifyInstanceADAuthServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyInstanceLDAPAuthServerRequest extends $tea.Model {
  account?: string;
  baseDN?: string;
  filter?: string;
  instanceId?: string;
  isSSL?: string;
  password?: string;
  port?: string;
  regionId?: string;
  server?: string;
  standbyServer?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      baseDN: 'BaseDN',
      filter: 'Filter',
      instanceId: 'InstanceId',
      isSSL: 'IsSSL',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      server: 'Server',
      standbyServer: 'StandbyServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      baseDN: 'string',
      filter: 'string',
      instanceId: 'string',
      isSSL: 'string',
      password: 'string',
      port: 'string',
      regionId: 'string',
      server: 'string',
      standbyServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyInstanceLDAPAuthServerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyInstanceLDAPAuthServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyInstanceLDAPAuthServerResponseBody;
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
      body: VerifyInstanceLDAPAuthServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatabasesToGroupResponseBodyResults extends $tea.Model {
  code?: string;
  databaseId?: string;
  hostGroupId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseId: 'DatabaseId',
      hostGroupId: 'HostGroupId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseId: 'string',
      hostGroupId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHostsToGroupResponseBodyResults extends $tea.Model {
  code?: string;
  hostGroupId?: string;
  hostId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostGroupId: 'HostGroupId',
      hostId: 'HostId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostGroupId: 'string',
      hostId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToGroupResponseBodyResults extends $tea.Model {
  code?: string;
  message?: string;
  userGroupId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      userGroupId: 'UserGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      userGroupId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserRequestDatabases extends $tea.Model {
  databaseAccountIds?: string[];
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserResponseBodyResultsDatabaseAccounts extends $tea.Model {
  code?: string;
  databaseAccountId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccountId: 'DatabaseAccountId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccountId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserResponseBodyResults extends $tea.Model {
  code?: string;
  databaseAccounts?: AttachDatabaseAccountsToUserResponseBodyResultsDatabaseAccounts[];
  databaseId?: string;
  message?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccounts: 'DatabaseAccounts',
      databaseId: 'DatabaseId',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccounts: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserResponseBodyResultsDatabaseAccounts },
      databaseId: 'string',
      message: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserGroupRequestDatabases extends $tea.Model {
  databaseAccountIds?: string[];
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts extends $tea.Model {
  code?: string;
  databaseAccountId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccountId: 'DatabaseAccountId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccountId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserGroupResponseBodyResults extends $tea.Model {
  code?: string;
  databaseAccounts?: AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts[];
  databaseId?: string;
  message?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccounts: 'DatabaseAccounts',
      databaseId: 'DatabaseId',
      message: 'Message',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccounts: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts },
      databaseId: 'string',
      message: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToHostShareKeyResponseBodyResults extends $tea.Model {
  code?: string;
  hostAccountId?: string;
  hostShareKeyId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountId: 'HostAccountId',
      hostShareKeyId: 'HostShareKeyId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountId: 'string',
      hostShareKeyId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserResponseBodyResultsHostAccounts extends $tea.Model {
  code?: string;
  hostAccountId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountId: 'HostAccountId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserResponseBodyResults extends $tea.Model {
  code?: string;
  hostAccounts?: AttachHostAccountsToUserResponseBodyResultsHostAccounts[];
  hostId?: string;
  message?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccounts: 'HostAccounts',
      hostId: 'HostId',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccounts: { 'type': 'array', 'itemType': AttachHostAccountsToUserResponseBodyResultsHostAccounts },
      hostId: 'string',
      message: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserGroupResponseBodyResultsHostAccounts extends $tea.Model {
  code?: string;
  hostAccountId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountId: 'HostAccountId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserGroupResponseBodyResults extends $tea.Model {
  code?: string;
  hostAccounts?: AttachHostAccountsToUserGroupResponseBodyResultsHostAccounts[];
  hostId?: string;
  message?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccounts: 'HostAccounts',
      hostId: 'HostId',
      message: 'Message',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccounts: { 'type': 'array', 'itemType': AttachHostAccountsToUserGroupResponseBodyResultsHostAccounts },
      hostId: 'string',
      message: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserResponseBodyResultsHostAccountNames extends $tea.Model {
  code?: string;
  hostAccountName?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountName: 'HostAccountName',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountName: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserResponseBodyResults extends $tea.Model {
  code?: string;
  hostAccountNames?: AttachHostGroupAccountsToUserResponseBodyResultsHostAccountNames[];
  hostGroupId?: string;
  message?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountNames: 'HostAccountNames',
      hostGroupId: 'HostGroupId',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountNames: { 'type': 'array', 'itemType': AttachHostGroupAccountsToUserResponseBodyResultsHostAccountNames },
      hostGroupId: 'string',
      message: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserGroupResponseBodyResultsHostAccountNames extends $tea.Model {
  code?: string;
  hostAccountName?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountName: 'HostAccountName',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountName: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserGroupResponseBodyResults extends $tea.Model {
  code?: string;
  hostAccountNames?: AttachHostGroupAccountsToUserGroupResponseBodyResultsHostAccountNames[];
  hostGroupId?: string;
  message?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountNames: 'HostAccountNames',
      hostGroupId: 'HostGroupId',
      message: 'Message',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountNames: { 'type': 'array', 'itemType': AttachHostGroupAccountsToUserGroupResponseBodyResultsHostAccountNames },
      hostGroupId: 'string',
      message: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkDomainRequestProxies extends $tea.Model {
  address?: string;
  nodeType?: string;
  password?: string;
  port?: number;
  proxyType?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      nodeType: 'NodeType',
      password: 'Password',
      port: 'Port',
      proxyType: 'ProxyType',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      nodeType: 'string',
      password: 'string',
      port: 'number',
      proxyType: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestDatabases extends $tea.Model {
  databaseAccountIds?: string[];
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestHostGroups extends $tea.Model {
  hostAccountNames?: string[];
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountNames: 'HostAccountNames',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountNames: { 'type': 'array', 'itemType': 'string' },
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestHosts extends $tea.Model {
  hostAccountIds?: string[];
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountIds: 'HostAccountIds',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountIds: { 'type': 'array', 'itemType': 'string' },
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInstanceAttributePorts extends $tea.Model {
  customPort?: number;
  standardPort?: number;
  static names(): { [key: string]: string } {
    return {
      customPort: 'CustomPort',
      standardPort: 'StandardPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPort: 'number',
      standardPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInstanceAttribute extends $tea.Model {
  authorizedSecurityGroups?: string[];
  bandwidth?: string;
  bandwidthPackage?: string;
  dbOperationModule?: string;
  description?: string;
  eniInstanceId?: string;
  expireTime?: number;
  instanceId?: string;
  instanceStatus?: string;
  internetEndpoint?: string;
  intranetEndpoint?: string;
  licenseCode?: string;
  modifyPasswordModule?: string;
  networkProxyModule?: string;
  ports?: DescribeInstanceAttributeResponseBodyInstanceAttributePorts[];
  privateExportIps?: string[];
  privateWhiteList?: string[];
  publicExportIps?: string[];
  publicIps?: string[];
  publicNetworkAccess?: boolean;
  publicWhiteList?: string[];
  regionId?: string;
  resourceGroupId?: string;
  securityGroupIds?: string[];
  startTime?: number;
  storage?: number;
  vpcId?: string;
  vswitchId?: string;
  webTerminalModule?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedSecurityGroups: 'AuthorizedSecurityGroups',
      bandwidth: 'Bandwidth',
      bandwidthPackage: 'BandwidthPackage',
      dbOperationModule: 'DbOperationModule',
      description: 'Description',
      eniInstanceId: 'EniInstanceId',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      licenseCode: 'LicenseCode',
      modifyPasswordModule: 'ModifyPasswordModule',
      networkProxyModule: 'NetworkProxyModule',
      ports: 'Ports',
      privateExportIps: 'PrivateExportIps',
      privateWhiteList: 'PrivateWhiteList',
      publicExportIps: 'PublicExportIps',
      publicIps: 'PublicIps',
      publicNetworkAccess: 'PublicNetworkAccess',
      publicWhiteList: 'PublicWhiteList',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      startTime: 'StartTime',
      storage: 'Storage',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      webTerminalModule: 'WebTerminalModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedSecurityGroups: { 'type': 'array', 'itemType': 'string' },
      bandwidth: 'string',
      bandwidthPackage: 'string',
      dbOperationModule: 'string',
      description: 'string',
      eniInstanceId: 'string',
      expireTime: 'number',
      instanceId: 'string',
      instanceStatus: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      licenseCode: 'string',
      modifyPasswordModule: 'string',
      networkProxyModule: 'string',
      ports: { 'type': 'array', 'itemType': DescribeInstanceAttributeResponseBodyInstanceAttributePorts },
      privateExportIps: { 'type': 'array', 'itemType': 'string' },
      privateWhiteList: { 'type': 'array', 'itemType': 'string' },
      publicExportIps: { 'type': 'array', 'itemType': 'string' },
      publicIps: { 'type': 'array', 'itemType': 'string' },
      publicNetworkAccess: 'boolean',
      publicWhiteList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      storage: 'number',
      vpcId: 'string',
      vswitchId: 'string',
      webTerminalModule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  description?: string;
  expireTime?: number;
  imageVersion?: string;
  instanceId?: string;
  instanceStatus?: string;
  internetEndpoint?: string;
  intranetEndpoint?: string;
  legacy?: boolean;
  licenseCode?: string;
  planCode?: string;
  publicNetworkAccess?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  startTime?: number;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expireTime: 'ExpireTime',
      imageVersion: 'ImageVersion',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      legacy: 'Legacy',
      licenseCode: 'LicenseCode',
      planCode: 'PlanCode',
      publicNetworkAccess: 'PublicNetworkAccess',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expireTime: 'number',
      imageVersion: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      legacy: 'boolean',
      licenseCode: 'string',
      planCode: 'string',
      publicNetworkAccess: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserRequestDatabases extends $tea.Model {
  databaseAccountIds?: string[];
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserResponseBodyResultsDatabaseAccounts extends $tea.Model {
  code?: string;
  databaseAccountId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccountId: 'DatabaseAccountId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccountId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserResponseBodyResults extends $tea.Model {
  code?: string;
  databaseAccounts?: DetachDatabaseAccountsFromUserResponseBodyResultsDatabaseAccounts[];
  databaseId?: string;
  message?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccounts: 'DatabaseAccounts',
      databaseId: 'DatabaseId',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccounts: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserResponseBodyResultsDatabaseAccounts },
      databaseId: 'string',
      message: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserGroupRequestDatabases extends $tea.Model {
  databaseAccountIds?: string[];
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserGroupResponseBodyResultsDatabaseAccounts extends $tea.Model {
  code?: string;
  databaseAccountId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccountId: 'DatabaseAccountId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccountId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDatabaseAccountsFromUserGroupResponseBodyResults extends $tea.Model {
  code?: string;
  databaseAccounts?: DetachDatabaseAccountsFromUserGroupResponseBodyResultsDatabaseAccounts[];
  databaseId?: string;
  message?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccounts: 'DatabaseAccounts',
      databaseId: 'DatabaseId',
      message: 'Message',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccounts: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserGroupResponseBodyResultsDatabaseAccounts },
      databaseId: 'string',
      message: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromHostShareKeyResponseBodyResults extends $tea.Model {
  code?: string;
  hostAccountId?: string;
  hostShareKeyId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountId: 'HostAccountId',
      hostShareKeyId: 'HostShareKeyId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountId: 'string',
      hostShareKeyId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserResponseBodyResultsHostAccounts extends $tea.Model {
  code?: string;
  hostAccountId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountId: 'HostAccountId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserResponseBodyResults extends $tea.Model {
  code?: string;
  hostAccounts?: DetachHostAccountsFromUserResponseBodyResultsHostAccounts[];
  hostId?: string;
  message?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccounts: 'HostAccounts',
      hostId: 'HostId',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccounts: { 'type': 'array', 'itemType': DetachHostAccountsFromUserResponseBodyResultsHostAccounts },
      hostId: 'string',
      message: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserGroupResponseBodyResultsHostAccounts extends $tea.Model {
  code?: string;
  hostAccountId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountId: 'HostAccountId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserGroupResponseBodyResults extends $tea.Model {
  code?: string;
  hostAccounts?: DetachHostAccountsFromUserGroupResponseBodyResultsHostAccounts[];
  hostId?: string;
  message?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccounts: 'HostAccounts',
      hostId: 'HostId',
      message: 'Message',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccounts: { 'type': 'array', 'itemType': DetachHostAccountsFromUserGroupResponseBodyResultsHostAccounts },
      hostId: 'string',
      message: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserResponseBodyResultsHostAccountNames extends $tea.Model {
  code?: string;
  hostAccountName?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountName: 'HostAccountName',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountName: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserResponseBodyResults extends $tea.Model {
  code?: string;
  hostAccountNames?: DetachHostGroupAccountsFromUserResponseBodyResultsHostAccountNames[];
  hostGroupId?: string;
  message?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountNames: 'HostAccountNames',
      hostGroupId: 'HostGroupId',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountNames: { 'type': 'array', 'itemType': DetachHostGroupAccountsFromUserResponseBodyResultsHostAccountNames },
      hostGroupId: 'string',
      message: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserGroupResponseBodyResultsHostAccountNames extends $tea.Model {
  code?: string;
  hostAccountName?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountName: 'HostAccountName',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountName: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserGroupResponseBodyResults extends $tea.Model {
  code?: string;
  hostAccountNames?: DetachHostGroupAccountsFromUserGroupResponseBodyResultsHostAccountNames[];
  hostGroupId?: string;
  message?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountNames: 'HostAccountNames',
      hostGroupId: 'HostGroupId',
      message: 'Message',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountNames: { 'type': 'array', 'itemType': DetachHostGroupAccountsFromUserGroupResponseBodyResultsHostAccountNames },
      hostGroupId: 'string',
      message: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAssetOperationTokenResponseBodyAssetOperationToken extends $tea.Model {
  countLeft?: number;
  expireTime?: number;
  hasCountLimit?: boolean;
  maxRenewCount?: number;
  renewCount?: number;
  token?: string;
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      countLeft: 'CountLeft',
      expireTime: 'ExpireTime',
      hasCountLimit: 'HasCountLimit',
      maxRenewCount: 'MaxRenewCount',
      renewCount: 'RenewCount',
      token: 'Token',
      tokenId: 'TokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countLeft: 'number',
      expireTime: 'number',
      hasCountLimit: 'boolean',
      maxRenewCount: 'number',
      renewCount: 'number',
      token: 'string',
      tokenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponseBodyDatabase extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  databaseId?: string;
  databaseName?: string;
  databasePort?: number;
  databasePrivateAddress?: string;
  databasePublicAddress?: string;
  databaseType?: string;
  networkDomainId?: string;
  source?: string;
  sourceInstanceId?: string;
  sourceInstanceRegionId?: string;
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      databasePort: 'DatabasePort',
      databasePrivateAddress: 'DatabasePrivateAddress',
      databasePublicAddress: 'DatabasePublicAddress',
      databaseType: 'DatabaseType',
      networkDomainId: 'NetworkDomainId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceRegionId: 'SourceInstanceRegionId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      databaseId: 'string',
      databaseName: 'string',
      databasePort: 'number',
      databasePrivateAddress: 'string',
      databasePublicAddress: 'string',
      databaseType: 'string',
      networkDomainId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceRegionId: 'string',
      sourceInstanceState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseAccountResponseBodyDatabaseAccount extends $tea.Model {
  databaseAccountId?: string;
  databaseAccountName?: string;
  databaseSchema?: string;
  hasPassword?: boolean;
  loginAttribute?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      databaseAccountName: 'DatabaseAccountName',
      databaseSchema: 'DatabaseSchema',
      hasPassword: 'HasPassword',
      loginAttribute: 'LoginAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      databaseAccountName: 'string',
      databaseSchema: 'string',
      hasPassword: 'boolean',
      loginAttribute: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostResponseBodyHostProtocols extends $tea.Model {
  hostFingerPrint?: string;
  port?: number;
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      hostFingerPrint: 'HostFingerPrint',
      port: 'Port',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostFingerPrint: 'string',
      port: 'number',
      protocolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostResponseBodyHost extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  hostId?: string;
  hostName?: string;
  hostPrivateAddress?: string;
  hostPublicAddress?: string;
  networkDomainId?: string;
  OSType?: string;
  protocols?: GetHostResponseBodyHostProtocols[];
  source?: string;
  sourceInstanceId?: string;
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      hostId: 'HostId',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      networkDomainId: 'NetworkDomainId',
      OSType: 'OSType',
      protocols: 'Protocols',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      hostId: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      networkDomainId: 'string',
      OSType: 'string',
      protocols: { 'type': 'array', 'itemType': GetHostResponseBodyHostProtocols },
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostAccountResponseBodyHostAccount extends $tea.Model {
  hasPassword?: boolean;
  hostAccountId?: string;
  hostAccountName?: string;
  hostId?: string;
  hostShareKeyId?: string;
  hostShareKeyName?: string;
  privateKeyFingerprint?: string;
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      hasPassword: 'HasPassword',
      hostAccountId: 'HostAccountId',
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      hostShareKeyId: 'HostShareKeyId',
      hostShareKeyName: 'HostShareKeyName',
      privateKeyFingerprint: 'PrivateKeyFingerprint',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPassword: 'boolean',
      hostAccountId: 'string',
      hostAccountName: 'string',
      hostId: 'string',
      hostShareKeyId: 'string',
      hostShareKeyName: 'string',
      privateKeyFingerprint: 'string',
      protocolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponseBodyHostGroup extends $tea.Model {
  comment?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostShareKeyResponseBodyHostShareKey extends $tea.Model {
  hostShareKeyId?: string;
  hostShareKeyName?: string;
  lastModifyKeyAt?: number;
  privateKeyFingerPrint?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKeyId: 'HostShareKeyId',
      hostShareKeyName: 'HostShareKeyName',
      lastModifyKeyAt: 'LastModifyKeyAt',
      privateKeyFingerPrint: 'PrivateKeyFingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeyId: 'string',
      hostShareKeyName: 'string',
      lastModifyKeyAt: 'number',
      privateKeyFingerPrint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceADAuthServerResponseBodyAD extends $tea.Model {
  account?: string;
  baseDN?: string;
  domain?: string;
  emailMapping?: string;
  filter?: string;
  hasPassword?: boolean;
  isSSL?: boolean;
  mobileMapping?: string;
  nameMapping?: string;
  port?: number;
  server?: string;
  standbyServer?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      baseDN: 'BaseDN',
      domain: 'Domain',
      emailMapping: 'EmailMapping',
      filter: 'Filter',
      hasPassword: 'HasPassword',
      isSSL: 'IsSSL',
      mobileMapping: 'MobileMapping',
      nameMapping: 'NameMapping',
      port: 'Port',
      server: 'Server',
      standbyServer: 'StandbyServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      baseDN: 'string',
      domain: 'string',
      emailMapping: 'string',
      filter: 'string',
      hasPassword: 'boolean',
      isSSL: 'boolean',
      mobileMapping: 'string',
      nameMapping: 'string',
      port: 'number',
      server: 'string',
      standbyServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLDAPAuthServerResponseBodyLDAP extends $tea.Model {
  account?: string;
  baseDN?: string;
  emailMapping?: string;
  filter?: string;
  hasPassword?: string;
  isSSL?: boolean;
  loginNameMapping?: string;
  mobileMapping?: string;
  nameMapping?: string;
  port?: number;
  server?: string;
  standbyServer?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      baseDN: 'BaseDN',
      emailMapping: 'EmailMapping',
      filter: 'Filter',
      hasPassword: 'HasPassword',
      isSSL: 'IsSSL',
      loginNameMapping: 'LoginNameMapping',
      mobileMapping: 'MobileMapping',
      nameMapping: 'NameMapping',
      port: 'Port',
      server: 'Server',
      standbyServer: 'StandbyServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      baseDN: 'string',
      emailMapping: 'string',
      filter: 'string',
      hasPassword: 'string',
      isSSL: 'boolean',
      loginNameMapping: 'string',
      mobileMapping: 'string',
      nameMapping: 'string',
      port: 'number',
      server: 'string',
      standbyServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTwoFactorResponseBodyConfig extends $tea.Model {
  enableTwoFactor?: boolean;
  skipTwoFactorTime?: number;
  twoFactorMethods?: string[];
  static names(): { [key: string]: string } {
    return {
      enableTwoFactor: 'EnableTwoFactor',
      skipTwoFactorTime: 'SkipTwoFactorTime',
      twoFactorMethods: 'TwoFactorMethods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTwoFactor: 'boolean',
      skipTwoFactorTime: 'number',
      twoFactorMethods: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkDomainResponseBodyNetworkDomainProxies extends $tea.Model {
  address?: string;
  hasPassword?: boolean;
  nodeType?: string;
  port?: number;
  proxyState?: string;
  proxyStateErrorCode?: string;
  proxyType?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      hasPassword: 'HasPassword',
      nodeType: 'NodeType',
      port: 'Port',
      proxyState: 'ProxyState',
      proxyStateErrorCode: 'ProxyStateErrorCode',
      proxyType: 'ProxyType',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      hasPassword: 'boolean',
      nodeType: 'string',
      port: 'number',
      proxyState: 'string',
      proxyStateErrorCode: 'string',
      proxyType: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkDomainResponseBodyNetworkDomain extends $tea.Model {
  comment?: string;
  default?: boolean;
  networkDomainId?: string;
  networkDomainName?: string;
  networkDomainType?: string;
  proxies?: GetNetworkDomainResponseBodyNetworkDomainProxies[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      default: 'Default',
      networkDomainId: 'NetworkDomainId',
      networkDomainName: 'NetworkDomainName',
      networkDomainType: 'NetworkDomainType',
      proxies: 'Proxies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      default: 'boolean',
      networkDomainId: 'string',
      networkDomainName: 'string',
      networkDomainType: 'string',
      proxies: { 'type': 'array', 'itemType': GetNetworkDomainResponseBodyNetworkDomainProxies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyAccessTimeRangeConfigEffectiveTime extends $tea.Model {
  days?: string[];
  hours?: string[];
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      hours: 'Hours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'string' },
      hours: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyAccessTimeRangeConfig extends $tea.Model {
  effectiveTime?: GetPolicyResponseBodyPolicyAccessTimeRangeConfigEffectiveTime[];
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: { 'type': 'array', 'itemType': GetPolicyResponseBodyPolicyAccessTimeRangeConfigEffectiveTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyApprovalConfig extends $tea.Model {
  switchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyCommandConfigApproval extends $tea.Model {
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyCommandConfigDeny extends $tea.Model {
  aclType?: string;
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyCommandConfig extends $tea.Model {
  approval?: GetPolicyResponseBodyPolicyCommandConfigApproval;
  deny?: GetPolicyResponseBodyPolicyCommandConfigDeny;
  static names(): { [key: string]: string } {
    return {
      approval: 'Approval',
      deny: 'Deny',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approval: GetPolicyResponseBodyPolicyCommandConfigApproval,
      deny: GetPolicyResponseBodyPolicyCommandConfigDeny,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyIPAclConfig extends $tea.Model {
  aclType?: string;
  IPs?: string[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      IPs: 'IPs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      IPs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyProtocolConfigRDP extends $tea.Model {
  clipboardDownload?: string;
  clipboardUpload?: string;
  diskRedirection?: string;
  recordKeyboard?: string;
  static names(): { [key: string]: string } {
    return {
      clipboardDownload: 'ClipboardDownload',
      clipboardUpload: 'ClipboardUpload',
      diskRedirection: 'DiskRedirection',
      recordKeyboard: 'RecordKeyboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboardDownload: 'string',
      clipboardUpload: 'string',
      diskRedirection: 'string',
      recordKeyboard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyProtocolConfigSSH extends $tea.Model {
  execCommand?: string;
  SFTPChannel?: string;
  SFTPDownloadFile?: string;
  SFTPMkdir?: string;
  SFTPRemoveFile?: string;
  SFTPRenameFile?: string;
  SFTPRmdir?: string;
  SFTPUploadFile?: string;
  SSHChannel?: string;
  x11Forwarding?: string;
  static names(): { [key: string]: string } {
    return {
      execCommand: 'ExecCommand',
      SFTPChannel: 'SFTPChannel',
      SFTPDownloadFile: 'SFTPDownloadFile',
      SFTPMkdir: 'SFTPMkdir',
      SFTPRemoveFile: 'SFTPRemoveFile',
      SFTPRenameFile: 'SFTPRenameFile',
      SFTPRmdir: 'SFTPRmdir',
      SFTPUploadFile: 'SFTPUploadFile',
      SSHChannel: 'SSHChannel',
      x11Forwarding: 'X11Forwarding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execCommand: 'string',
      SFTPChannel: 'string',
      SFTPDownloadFile: 'string',
      SFTPMkdir: 'string',
      SFTPRemoveFile: 'string',
      SFTPRenameFile: 'string',
      SFTPRmdir: 'string',
      SFTPUploadFile: 'string',
      SSHChannel: 'string',
      x11Forwarding: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicyProtocolConfig extends $tea.Model {
  RDP?: GetPolicyResponseBodyPolicyProtocolConfigRDP;
  SSH?: GetPolicyResponseBodyPolicyProtocolConfigSSH;
  static names(): { [key: string]: string } {
    return {
      RDP: 'RDP',
      SSH: 'SSH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDP: GetPolicyResponseBodyPolicyProtocolConfigRDP,
      SSH: GetPolicyResponseBodyPolicyProtocolConfigSSH,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicy extends $tea.Model {
  accessTimeRangeConfig?: GetPolicyResponseBodyPolicyAccessTimeRangeConfig;
  approvalConfig?: GetPolicyResponseBodyPolicyApprovalConfig;
  commandConfig?: GetPolicyResponseBodyPolicyCommandConfig;
  comment?: string;
  IPAclConfig?: GetPolicyResponseBodyPolicyIPAclConfig;
  policyId?: string;
  policyName?: string;
  priority?: number;
  protocolConfig?: GetPolicyResponseBodyPolicyProtocolConfig;
  static names(): { [key: string]: string } {
    return {
      accessTimeRangeConfig: 'AccessTimeRangeConfig',
      approvalConfig: 'ApprovalConfig',
      commandConfig: 'CommandConfig',
      comment: 'Comment',
      IPAclConfig: 'IPAclConfig',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      priority: 'Priority',
      protocolConfig: 'ProtocolConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTimeRangeConfig: GetPolicyResponseBodyPolicyAccessTimeRangeConfig,
      approvalConfig: GetPolicyResponseBodyPolicyApprovalConfig,
      commandConfig: GetPolicyResponseBodyPolicyCommandConfig,
      comment: 'string',
      IPAclConfig: GetPolicyResponseBodyPolicyIPAclConfig,
      policyId: 'string',
      policyName: 'string',
      priority: 'number',
      protocolConfig: GetPolicyResponseBodyPolicyProtocolConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAssetScopeResponseBodyAssetScopeDatabases extends $tea.Model {
  accountScopeType?: string;
  databaseAccountIds?: string[];
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      accountScopeType: 'AccountScopeType',
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScopeType: 'string',
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAssetScopeResponseBodyAssetScopeHostGroups extends $tea.Model {
  accountNames?: string[];
  accountScopeType?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNames: 'AccountNames',
      accountScopeType: 'AccountScopeType',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNames: { 'type': 'array', 'itemType': 'string' },
      accountScopeType: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAssetScopeResponseBodyAssetScopeHosts extends $tea.Model {
  accountScopeType?: string;
  hostAccountIds?: string[];
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      accountScopeType: 'AccountScopeType',
      hostAccountIds: 'HostAccountIds',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScopeType: 'string',
      hostAccountIds: { 'type': 'array', 'itemType': 'string' },
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAssetScopeResponseBodyAssetScope extends $tea.Model {
  databases?: GetPolicyAssetScopeResponseBodyAssetScopeDatabases[];
  hostGroups?: GetPolicyAssetScopeResponseBodyAssetScopeHostGroups[];
  hosts?: GetPolicyAssetScopeResponseBodyAssetScopeHosts[];
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      hostGroups: 'HostGroups',
      hosts: 'Hosts',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': GetPolicyAssetScopeResponseBodyAssetScopeDatabases },
      hostGroups: { 'type': 'array', 'itemType': GetPolicyAssetScopeResponseBodyAssetScopeHostGroups },
      hosts: { 'type': 'array', 'itemType': GetPolicyAssetScopeResponseBodyAssetScopeHosts },
      scopeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyUserScopeResponseBodyUserScope extends $tea.Model {
  scopeType?: string;
  userGroupIds?: string[];
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      scopeType: 'ScopeType',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scopeType: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleDatabasesDatabaseAccounts extends $tea.Model {
  databaseAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleDatabases extends $tea.Model {
  databaseAccounts?: GetRuleResponseBodyRuleDatabasesDatabaseAccounts[];
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccounts: 'DatabaseAccounts',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccounts: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleDatabasesDatabaseAccounts },
      databaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleHostGroups extends $tea.Model {
  hostAccountNames?: string[];
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountNames: 'HostAccountNames',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountNames: { 'type': 'array', 'itemType': 'string' },
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleHostsHostAccounts extends $tea.Model {
  hostAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountId: 'HostAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleHosts extends $tea.Model {
  hostAccounts?: GetRuleResponseBodyRuleHostsHostAccounts[];
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccounts: 'HostAccounts',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccounts: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleHostsHostAccounts },
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleUserGroups extends $tea.Model {
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

export class GetRuleResponseBodyRuleUsers extends $tea.Model {
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

export class GetRuleResponseBodyRule extends $tea.Model {
  comment?: string;
  databases?: GetRuleResponseBodyRuleDatabases[];
  effectiveEndTime?: string;
  effectiveStartTime?: string;
  hostGroups?: GetRuleResponseBodyRuleHostGroups[];
  hosts?: GetRuleResponseBodyRuleHosts[];
  ruleId?: string;
  ruleName?: string;
  userGroups?: GetRuleResponseBodyRuleUserGroups[];
  users?: GetRuleResponseBodyRuleUsers[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      databases: 'Databases',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      hostGroups: 'HostGroups',
      hosts: 'Hosts',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      userGroups: 'UserGroups',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      databases: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleDatabases },
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      hostGroups: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleHostGroups },
      hosts: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleHosts },
      ruleId: 'string',
      ruleName: 'string',
      userGroups: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleUserGroups },
      users: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  comment?: string;
  displayName?: string;
  effectiveEndTime?: number;
  effectiveStartTime?: number;
  email?: string;
  language?: string;
  languageStatus?: string;
  mobile?: string;
  mobileCountryCode?: string;
  needResetPassword?: boolean;
  source?: string;
  sourceUserId?: string;
  twoFactorMethods?: string[];
  twoFactorStatus?: string;
  userId?: string;
  userName?: string;
  userState?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayName: 'DisplayName',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      email: 'Email',
      language: 'Language',
      languageStatus: 'LanguageStatus',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
      needResetPassword: 'NeedResetPassword',
      source: 'Source',
      sourceUserId: 'SourceUserId',
      twoFactorMethods: 'TwoFactorMethods',
      twoFactorStatus: 'TwoFactorStatus',
      userId: 'UserId',
      userName: 'UserName',
      userState: 'UserState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayName: 'string',
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      email: 'string',
      language: 'string',
      languageStatus: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
      needResetPassword: 'boolean',
      source: 'string',
      sourceUserId: 'string',
      twoFactorMethods: { 'type': 'array', 'itemType': 'string' },
      twoFactorStatus: 'string',
      userId: 'string',
      userName: 'string',
      userState: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBodyUserGroup extends $tea.Model {
  comment?: string;
  userGroupId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApproveCommandsResponseBodyApproveCommands extends $tea.Model {
  approveCommandId?: string;
  assetAccountName?: string;
  assetIp?: string;
  assetName?: string;
  clientIp?: string;
  clientUser?: string;
  command?: string;
  createTime?: string;
  protocolName?: string;
  sessionId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      approveCommandId: 'ApproveCommandId',
      assetAccountName: 'AssetAccountName',
      assetIp: 'AssetIp',
      assetName: 'AssetName',
      clientIp: 'ClientIp',
      clientUser: 'ClientUser',
      command: 'Command',
      createTime: 'CreateTime',
      protocolName: 'ProtocolName',
      sessionId: 'SessionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveCommandId: 'string',
      assetAccountName: 'string',
      assetIp: 'string',
      assetName: 'string',
      clientIp: 'string',
      clientUser: 'string',
      command: 'string',
      createTime: 'string',
      protocolName: 'string',
      sessionId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsResponseBodyDatabaseAccounts extends $tea.Model {
  databaseAccountId?: string;
  databaseAccountName?: string;
  databaseId?: string;
  databaseSchema?: string;
  hasPassword?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      databaseSchema: 'DatabaseSchema',
      hasPassword: 'HasPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      databaseAccountName: 'string',
      databaseId: 'string',
      databaseSchema: 'string',
      hasPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsForUserResponseBodyDatabaseAccounts extends $tea.Model {
  databaseAccountId?: string;
  databaseAccountName?: string;
  databaseId?: string;
  isAuthorized?: boolean;
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      isAuthorized: 'IsAuthorized',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      databaseAccountName: 'string',
      databaseId: 'string',
      isAuthorized: 'boolean',
      protocolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccountsForUserGroupResponseBodyDatabaseAccounts extends $tea.Model {
  databaseAccountId?: string;
  databaseAccountName?: string;
  databaseId?: string;
  isAuthorized?: boolean;
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      isAuthorized: 'IsAuthorized',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      databaseAccountName: 'string',
      databaseId: 'string',
      isAuthorized: 'boolean',
      protocolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBodyDatabases extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  databaseId?: string;
  databaseName?: string;
  databasePort?: number;
  databasePrivateAddress?: string;
  databasePublicAddress?: string;
  databaseType?: string;
  networkDomainId?: string;
  source?: string;
  sourceInstanceId?: string;
  sourceInstanceRegionId?: string;
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      databasePort: 'DatabasePort',
      databasePrivateAddress: 'DatabasePrivateAddress',
      databasePublicAddress: 'DatabasePublicAddress',
      databaseType: 'DatabaseType',
      networkDomainId: 'NetworkDomainId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceRegionId: 'SourceInstanceRegionId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      databaseId: 'string',
      databaseName: 'string',
      databasePort: 'number',
      databasePrivateAddress: 'string',
      databasePublicAddress: 'string',
      databaseType: 'string',
      networkDomainId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceRegionId: 'string',
      sourceInstanceState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesForUserResponseBodyDatabases extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  databaseId?: string;
  databaseName?: string;
  databasePort?: number;
  databasePrivateAddress?: string;
  databasePublicAddress?: string;
  databaseType?: string;
  networkDomainId?: string;
  source?: string;
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      databasePort: 'DatabasePort',
      databasePrivateAddress: 'DatabasePrivateAddress',
      databasePublicAddress: 'DatabasePublicAddress',
      databaseType: 'DatabaseType',
      networkDomainId: 'NetworkDomainId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      databaseId: 'string',
      databaseName: 'string',
      databasePort: 'number',
      databasePrivateAddress: 'string',
      databasePublicAddress: 'string',
      databaseType: 'string',
      networkDomainId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesForUserGroupResponseBodyDatabases extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  databaseAccountCount?: number;
  databaseId?: string;
  databaseName?: string;
  databasePort?: number;
  databasePrivateAddress?: string;
  databasePublicAddress?: string;
  databaseType?: string;
  networkDomainId?: string;
  source?: string;
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      databaseAccountCount: 'DatabaseAccountCount',
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      databasePort: 'DatabasePort',
      databasePrivateAddress: 'DatabasePrivateAddress',
      databasePublicAddress: 'DatabasePublicAddress',
      databaseType: 'DatabaseType',
      networkDomainId: 'NetworkDomainId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      databaseAccountCount: 'number',
      databaseId: 'string',
      databaseName: 'string',
      databasePort: 'number',
      databasePrivateAddress: 'string',
      databasePublicAddress: 'string',
      databaseType: 'string',
      networkDomainId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsResponseBodyHostAccounts extends $tea.Model {
  hasPassword?: boolean;
  hostAccountId?: string;
  hostAccountName?: string;
  hostId?: string;
  hostShareKeyId?: string;
  hostShareKeyName?: string;
  privateKeyFingerprint?: string;
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      hasPassword: 'HasPassword',
      hostAccountId: 'HostAccountId',
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      hostShareKeyId: 'HostShareKeyId',
      hostShareKeyName: 'HostShareKeyName',
      privateKeyFingerprint: 'PrivateKeyFingerprint',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPassword: 'boolean',
      hostAccountId: 'string',
      hostAccountName: 'string',
      hostId: 'string',
      hostShareKeyId: 'string',
      hostShareKeyName: 'string',
      privateKeyFingerprint: 'string',
      protocolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForHostShareKeyResponseBodyHostAccounts extends $tea.Model {
  hostAccountName?: string;
  hostId?: string;
  hostsAccountId?: string;
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      hostsAccountId: 'HostsAccountId',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountName: 'string',
      hostId: 'string',
      hostsAccountId: 'string',
      protocolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserResponseBodyHostAccounts extends $tea.Model {
  hostAccountId?: string;
  hostAccountName?: string;
  hostId?: string;
  isAuthorized?: boolean;
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountId: 'HostAccountId',
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      isAuthorized: 'IsAuthorized',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountId: 'string',
      hostAccountName: 'string',
      hostId: 'string',
      isAuthorized: 'boolean',
      protocolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserGroupResponseBodyHostAccounts extends $tea.Model {
  hostAccountId?: string;
  hostAccountName?: string;
  hostId?: string;
  isAuthorized?: boolean;
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountId: 'HostAccountId',
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      isAuthorized: 'IsAuthorized',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountId: 'string',
      hostAccountName: 'string',
      hostId: 'string',
      isAuthorized: 'boolean',
      protocolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsResponseBodyHostGroups extends $tea.Model {
  comment?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  memberCount?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
      memberCount: 'MemberCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
      memberCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsForUserResponseBodyHostGroups extends $tea.Model {
  comment?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsForUserGroupResponseBodyHostGroups extends $tea.Model {
  comment?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostShareKeysResponseBodyHostShareKeys extends $tea.Model {
  hostAccountCount?: number;
  hostShareKeyId?: string;
  hostShareKeyName?: string;
  lastModifyKeyAt?: number;
  privateKeyFingerPrint?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountCount: 'HostAccountCount',
      hostShareKeyId: 'HostShareKeyId',
      hostShareKeyName: 'HostShareKeyName',
      lastModifyKeyAt: 'LastModifyKeyAt',
      privateKeyFingerPrint: 'PrivateKeyFingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountCount: 'number',
      hostShareKeyId: 'string',
      hostShareKeyName: 'string',
      lastModifyKeyAt: 'number',
      privateKeyFingerPrint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsResponseBodyHosts extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  hostAccountCount?: number;
  hostId?: string;
  hostName?: string;
  hostPrivateAddress?: string;
  hostPublicAddress?: string;
  OSType?: string;
  source?: string;
  sourceInstanceId?: string;
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      hostAccountCount: 'HostAccountCount',
      hostId: 'HostId',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      OSType: 'OSType',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      hostAccountCount: 'number',
      hostId: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      OSType: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserResponseBodyHosts extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  hostId?: string;
  hostName?: string;
  hostPrivateAddress?: string;
  hostPublicAddress?: string;
  OSType?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      hostId: 'HostId',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      OSType: 'OSType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      hostId: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      OSType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserGroupResponseBodyHosts extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  hostId?: string;
  hostName?: string;
  hostPrivateAddress?: string;
  hostPublicAddress?: string;
  OSType?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      hostId: 'HostId',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      OSType: 'OSType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      hostId: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      OSType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkDomainsResponseBodyNetworkDomainsProxiesState extends $tea.Model {
  nodeType?: string;
  proxyState?: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
      proxyState: 'ProxyState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      proxyState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkDomainsResponseBodyNetworkDomains extends $tea.Model {
  comment?: string;
  default?: boolean;
  networkDomainId?: string;
  networkDomainName?: string;
  networkDomainType?: string;
  proxiesState?: ListNetworkDomainsResponseBodyNetworkDomainsProxiesState[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      default: 'Default',
      networkDomainId: 'NetworkDomainId',
      networkDomainName: 'NetworkDomainName',
      networkDomainType: 'NetworkDomainType',
      proxiesState: 'ProxiesState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      default: 'boolean',
      networkDomainId: 'string',
      networkDomainName: 'string',
      networkDomainType: 'string',
      proxiesState: { 'type': 'array', 'itemType': ListNetworkDomainsResponseBodyNetworkDomainsProxiesState },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationDatabaseAccountsResponseBodyDatabaseAccounts extends $tea.Model {
  DBName?: string;
  databaseAccountId?: string;
  databaseAccountName?: string;
  databaseId?: string;
  hasPassword?: string;
  loginAttribute?: string;
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      databaseAccountId: 'DatabaseAccountId',
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      hasPassword: 'HasPassword',
      loginAttribute: 'LoginAttribute',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      databaseAccountId: 'string',
      databaseAccountName: 'string',
      databaseId: 'string',
      hasPassword: 'string',
      loginAttribute: 'string',
      protocolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationDatabasesResponseBodyDatabases extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  databaseId?: string;
  databaseName?: string;
  databasePort?: number;
  databasePrivateAddress?: string;
  databasePublicAddress?: string;
  databaseType?: string;
  source?: string;
  sourceInstanceId?: string;
  sourceInstanceRegionId?: string;
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      databasePort: 'DatabasePort',
      databasePrivateAddress: 'DatabasePrivateAddress',
      databasePublicAddress: 'DatabasePublicAddress',
      databaseType: 'DatabaseType',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceRegionId: 'SourceInstanceRegionId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      databaseId: 'string',
      databaseName: 'string',
      databasePort: 'number',
      databasePrivateAddress: 'string',
      databasePublicAddress: 'string',
      databaseType: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceRegionId: 'string',
      sourceInstanceState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHostAccountsResponseBodyHostAccountsSSHConfig extends $tea.Model {
  enableSFTPChannel?: boolean;
  enableSSHChannel?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableSFTPChannel: 'EnableSFTPChannel',
      enableSSHChannel: 'EnableSSHChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSFTPChannel: 'boolean',
      enableSSHChannel: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHostAccountsResponseBodyHostAccounts extends $tea.Model {
  hasPassword?: boolean;
  hostAccountId?: string;
  hostAccountName?: string;
  hostId?: string;
  hostShareKeyId?: string;
  privateKeyFingerprint?: string;
  protocolName?: string;
  SSHConfig?: ListOperationHostAccountsResponseBodyHostAccountsSSHConfig;
  static names(): { [key: string]: string } {
    return {
      hasPassword: 'HasPassword',
      hostAccountId: 'HostAccountId',
      hostAccountName: 'HostAccountName',
      hostId: 'HostId',
      hostShareKeyId: 'HostShareKeyId',
      privateKeyFingerprint: 'PrivateKeyFingerprint',
      protocolName: 'ProtocolName',
      SSHConfig: 'SSHConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPassword: 'boolean',
      hostAccountId: 'string',
      hostAccountName: 'string',
      hostId: 'string',
      hostShareKeyId: 'string',
      privateKeyFingerprint: 'string',
      protocolName: 'string',
      SSHConfig: ListOperationHostAccountsResponseBodyHostAccountsSSHConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHostsResponseBodyHosts extends $tea.Model {
  activeAddressType?: string;
  comment?: string;
  hostId?: string;
  hostName?: string;
  hostPrivateAddress?: string;
  hostPublicAddress?: string;
  OSType?: string;
  source?: string;
  sourceInstanceId?: string;
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      hostId: 'HostId',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      OSType: 'OSType',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      hostId: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      OSType: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationTicketsResponseBodyOperationTickets extends $tea.Model {
  applyUserId?: string;
  applyUsername?: string;
  assetAccountId?: string;
  assetAccountName?: string;
  assetAddress?: string;
  assetId?: string;
  assetName?: string;
  assetNetworkDomainId?: string;
  assetOs?: string;
  assetSource?: string;
  assetSourceInstanceId?: string;
  createdTime?: number;
  operationTicketId?: string;
  protocolName?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      applyUserId: 'ApplyUserId',
      applyUsername: 'ApplyUsername',
      assetAccountId: 'AssetAccountId',
      assetAccountName: 'AssetAccountName',
      assetAddress: 'AssetAddress',
      assetId: 'AssetId',
      assetName: 'AssetName',
      assetNetworkDomainId: 'AssetNetworkDomainId',
      assetOs: 'AssetOs',
      assetSource: 'AssetSource',
      assetSourceInstanceId: 'AssetSourceInstanceId',
      createdTime: 'CreatedTime',
      operationTicketId: 'OperationTicketId',
      protocolName: 'ProtocolName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyUserId: 'string',
      applyUsername: 'string',
      assetAccountId: 'string',
      assetAccountName: 'string',
      assetAddress: 'string',
      assetId: 'string',
      assetName: 'string',
      assetNetworkDomainId: 'string',
      assetOs: 'string',
      assetSource: 'string',
      assetSourceInstanceId: 'string',
      createdTime: 'number',
      operationTicketId: 'string',
      protocolName: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPolicies extends $tea.Model {
  comment?: string;
  policyId?: string;
  policyName?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      policyId: 'string',
      policyName: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyRules extends $tea.Model {
  comment?: string;
  effectiveEndTime?: number;
  effectiveStartTime?: number;
  ruleId?: string;
  ruleName?: string;
  ruleState?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleState: 'RuleState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      ruleId: 'string',
      ruleName: 'string',
      ruleState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyTagKeys extends $tea.Model {
  tagCount?: number;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagCount: 'TagCount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCount: 'number',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBodyUserGroups extends $tea.Model {
  comment?: string;
  memberCount?: number;
  userGroupId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      memberCount: 'MemberCount',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      memberCount: 'number',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPublicKeysResponseBodyPublicKeys extends $tea.Model {
  comment?: string;
  fingerPrint?: string;
  publicKeyId?: string;
  publicKeyName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      fingerPrint: 'FingerPrint',
      publicKeyId: 'PublicKeyId',
      publicKeyName: 'PublicKeyName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fingerPrint: 'string',
      publicKeyId: 'string',
      publicKeyName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  comment?: string;
  displayName?: string;
  effectiveEndTime?: number;
  effectiveStartTime?: number;
  email?: string;
  language?: string;
  languageStatus?: string;
  mobile?: string;
  mobileCountryCode?: string;
  needResetPassword?: boolean;
  source?: string;
  sourceUserId?: string;
  twoFactorMethods?: string[];
  twoFactorStatus?: string;
  userId?: string;
  userName?: string;
  userState?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayName: 'DisplayName',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      email: 'Email',
      language: 'Language',
      languageStatus: 'LanguageStatus',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
      needResetPassword: 'NeedResetPassword',
      source: 'Source',
      sourceUserId: 'SourceUserId',
      twoFactorMethods: 'TwoFactorMethods',
      twoFactorStatus: 'TwoFactorStatus',
      userId: 'UserId',
      userName: 'UserName',
      userState: 'UserState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayName: 'string',
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      email: 'string',
      language: 'string',
      languageStatus: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
      needResetPassword: 'boolean',
      source: 'string',
      sourceUserId: 'string',
      twoFactorMethods: { 'type': 'array', 'itemType': 'string' },
      twoFactorStatus: 'string',
      userId: 'string',
      userName: 'string',
      userState: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponseBodyResults extends $tea.Model {
  code?: string;
  message?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostsActiveAddressTypeResponseBodyResults extends $tea.Model {
  code?: string;
  hostId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostId: 'HostId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostsPortResponseBodyResults extends $tea.Model {
  code?: string;
  hostId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostId: 'HostId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkDomainRequestProxies extends $tea.Model {
  address?: string;
  nodeType?: string;
  password?: string;
  port?: number;
  proxyType?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      nodeType: 'NodeType',
      password: 'Password',
      port: 'Port',
      proxyType: 'ProxyType',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      nodeType: 'string',
      password: 'string',
      port: 'number',
      proxyType: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleRequestDatabases extends $tea.Model {
  databaseAccountIds?: string[];
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleRequestHostGroups extends $tea.Model {
  hostAccountNames?: string[];
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountNames: 'HostAccountNames',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountNames: { 'type': 'array', 'itemType': 'string' },
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleRequestHosts extends $tea.Model {
  hostAccountIds?: string[];
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountIds: 'HostAccountIds',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountIds: { 'type': 'array', 'itemType': 'string' },
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveDatabasesToNetworkDomainResponseBodyResults extends $tea.Model {
  code?: string;
  databaseId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseId: 'DatabaseId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveHostsToNetworkDomainResponseBodyResults extends $tea.Model {
  code?: string;
  hostId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostId: 'HostId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDatabasesFromGroupResponseBodyResults extends $tea.Model {
  code?: string;
  databaseId?: string;
  hostGroupId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseId: 'DatabaseId',
      hostGroupId: 'HostGroupId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseId: 'string',
      hostGroupId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHostsFromGroupResponseBodyResults extends $tea.Model {
  code?: string;
  hostGroupId?: string;
  hostId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostGroupId: 'HostGroupId',
      hostId: 'HostId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostGroupId: 'string',
      hostId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromGroupResponseBodyResults extends $tea.Model {
  code?: string;
  message?: string;
  userGroupId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      userGroupId: 'UserGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      userGroupId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfigEffectiveTime extends $tea.Model {
  days?: number[];
  hours?: number[];
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      hours: 'Hours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'number' },
      hours: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfig extends $tea.Model {
  effectiveTime?: SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfigEffectiveTime[];
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: { 'type': 'array', 'itemType': SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfigEffectiveTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyApprovalConfigRequestApprovalConfig extends $tea.Model {
  switchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAssetScopeRequestDatabases extends $tea.Model {
  accountScopeType?: string;
  databaseAccountIds?: string[];
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      accountScopeType: 'AccountScopeType',
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScopeType: 'string',
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAssetScopeRequestHostGroups extends $tea.Model {
  accountNames?: string[];
  accountScopeType?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNames: 'AccountNames',
      accountScopeType: 'AccountScopeType',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNames: { 'type': 'array', 'itemType': 'string' },
      accountScopeType: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyAssetScopeRequestHosts extends $tea.Model {
  accountScopeType?: string;
  hostAccountIds?: string[];
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      accountScopeType: 'AccountScopeType',
      hostAccountIds: 'HostAccountIds',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScopeType: 'string',
      hostAccountIds: { 'type': 'array', 'itemType': 'string' },
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyCommandConfigRequestCommandConfigApproval extends $tea.Model {
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyCommandConfigRequestCommandConfigDeny extends $tea.Model {
  aclType?: string;
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyCommandConfigRequestCommandConfig extends $tea.Model {
  approval?: SetPolicyCommandConfigRequestCommandConfigApproval;
  deny?: SetPolicyCommandConfigRequestCommandConfigDeny;
  static names(): { [key: string]: string } {
    return {
      approval: 'Approval',
      deny: 'Deny',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approval: SetPolicyCommandConfigRequestCommandConfigApproval,
      deny: SetPolicyCommandConfigRequestCommandConfigDeny,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyIPAclConfigRequestIPAclConfig extends $tea.Model {
  aclType?: string;
  IPs?: string[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      IPs: 'IPs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      IPs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyProtocolConfigRequestProtocolConfigRDP extends $tea.Model {
  clipboardDownload?: string;
  clipboardUpload?: string;
  diskRedirection?: string;
  recordKeyboard?: string;
  static names(): { [key: string]: string } {
    return {
      clipboardDownload: 'ClipboardDownload',
      clipboardUpload: 'ClipboardUpload',
      diskRedirection: 'DiskRedirection',
      recordKeyboard: 'RecordKeyboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboardDownload: 'string',
      clipboardUpload: 'string',
      diskRedirection: 'string',
      recordKeyboard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyProtocolConfigRequestProtocolConfigSSH extends $tea.Model {
  execCommand?: string;
  SFTPChannel?: string;
  SFTPDownloadFile?: string;
  SFTPMkdir?: string;
  SFTPRemoveFile?: string;
  SFTPRenameFile?: string;
  SFTPRmdir?: string;
  SFTPUploadFile?: string;
  SSHChannel?: string;
  x11Forwarding?: string;
  static names(): { [key: string]: string } {
    return {
      execCommand: 'ExecCommand',
      SFTPChannel: 'SFTPChannel',
      SFTPDownloadFile: 'SFTPDownloadFile',
      SFTPMkdir: 'SFTPMkdir',
      SFTPRemoveFile: 'SFTPRemoveFile',
      SFTPRenameFile: 'SFTPRenameFile',
      SFTPRmdir: 'SFTPRmdir',
      SFTPUploadFile: 'SFTPUploadFile',
      SSHChannel: 'SSHChannel',
      x11Forwarding: 'X11Forwarding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execCommand: 'string',
      SFTPChannel: 'string',
      SFTPDownloadFile: 'string',
      SFTPMkdir: 'string',
      SFTPRemoveFile: 'string',
      SFTPRenameFile: 'string',
      SFTPRmdir: 'string',
      SFTPUploadFile: 'string',
      SSHChannel: 'string',
      x11Forwarding: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolicyProtocolConfigRequestProtocolConfig extends $tea.Model {
  RDP?: SetPolicyProtocolConfigRequestProtocolConfigRDP;
  SSH?: SetPolicyProtocolConfigRequestProtocolConfigSSH;
  static names(): { [key: string]: string } {
    return {
      RDP: 'RDP',
      SSH: 'SSH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDP: SetPolicyProtocolConfigRequestProtocolConfigRDP,
      SSH: SetPolicyProtocolConfigRequestProtocolConfigSSH,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponseBodyResults extends $tea.Model {
  code?: string;
  message?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      userId: 'string',
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
    this._endpoint = this.getEndpoint("yundun-bastionhost", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async acceptApproveCommandWithOptions(request: AcceptApproveCommandRequest, runtime: $Util.RuntimeOptions): Promise<AcceptApproveCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AcceptApproveCommandResponse>(await this.callApi(params, req, runtime), new AcceptApproveCommandResponse({}));
  }

  async acceptApproveCommand(request: AcceptApproveCommandRequest): Promise<AcceptApproveCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptApproveCommandWithOptions(request, runtime);
  }

  /**
    * You can call this operation as a Bastionhost administrator to approve an O\\&M application of an O\\&M engineer.
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request AcceptOperationTicketRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AcceptOperationTicketResponse
   */
  async acceptOperationTicketWithOptions(request: AcceptOperationTicketRequest, runtime: $Util.RuntimeOptions): Promise<AcceptOperationTicketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.effectCount)) {
      query["EffectCount"] = request.effectCount;
    }

    if (!Util.isUnset(request.effectEndTime)) {
      query["EffectEndTime"] = request.effectEndTime;
    }

    if (!Util.isUnset(request.effectStartTime)) {
      query["EffectStartTime"] = request.effectStartTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.operationTicketId)) {
      query["OperationTicketId"] = request.operationTicketId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AcceptOperationTicketResponse>(await this.callApi(params, req, runtime), new AcceptOperationTicketResponse({}));
  }

  /**
    * You can call this operation as a Bastionhost administrator to approve an O\\&M application of an O\\&M engineer.
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request AcceptOperationTicketRequest
    * @return AcceptOperationTicketResponse
   */
  async acceptOperationTicket(request: AcceptOperationTicketRequest): Promise<AcceptOperationTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptOperationTicketWithOptions(request, runtime);
  }

  async addDatabasesToGroupWithOptions(request: AddDatabasesToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddDatabasesToGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseIds)) {
      query["DatabaseIds"] = request.databaseIds;
    }

    if (!Util.isUnset(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddDatabasesToGroupResponse>(await this.callApi(params, req, runtime), new AddDatabasesToGroupResponse({}));
  }

  async addDatabasesToGroup(request: AddDatabasesToGroupRequest): Promise<AddDatabasesToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDatabasesToGroupWithOptions(request, runtime);
  }

  /**
    * You can call this operation to add one or more hosts to a host group. You can add multiple hosts to a host group to manage and grant permissions on the hosts in a centralized manner.
    * # Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
    *
    * @param request AddHostsToGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddHostsToGroupResponse
   */
  async addHostsToGroupWithOptions(request: AddHostsToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddHostsToGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!Util.isUnset(request.hostIds)) {
      query["HostIds"] = request.hostIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddHostsToGroupResponse>(await this.callApi(params, req, runtime), new AddHostsToGroupResponse({}));
  }

  /**
    * You can call this operation to add one or more hosts to a host group. You can add multiple hosts to a host group to manage and grant permissions on the hosts in a centralized manner.
    * # Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
    *
    * @param request AddHostsToGroupRequest
    * @return AddHostsToGroupResponse
   */
  async addHostsToGroup(request: AddHostsToGroupRequest): Promise<AddHostsToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addHostsToGroupWithOptions(request, runtime);
  }

  /**
    * #
    * You can call this operation to add one or more users to a user group. After you call the [CreateUserGroup](~~204596~~) operation to create a user group, you can call the AddUsersToGroup operation to add multiple users to the user group. Then, you can manage and grant permissions to the users at a time.
    * # Limit
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request AddUsersToGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddUsersToGroupResponse
   */
  async addUsersToGroupWithOptions(request: AddUsersToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUsersToGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddUsersToGroupResponse>(await this.callApi(params, req, runtime), new AddUsersToGroupResponse({}));
  }

  /**
    * #
    * You can call this operation to add one or more users to a user group. After you call the [CreateUserGroup](~~204596~~) operation to create a user group, you can call the AddUsersToGroup operation to add multiple users to the user group. Then, you can manage and grant permissions to the users at a time.
    * # Limit
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request AddUsersToGroupRequest
    * @return AddUsersToGroupResponse
   */
  async addUsersToGroup(request: AddUsersToGroupRequest): Promise<AddUsersToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUsersToGroupWithOptions(request, runtime);
  }

  async attachDatabaseAccountsToUserWithOptions(request: AttachDatabaseAccountsToUserRequest, runtime: $Util.RuntimeOptions): Promise<AttachDatabaseAccountsToUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AttachDatabaseAccountsToUserResponse>(await this.callApi(params, req, runtime), new AttachDatabaseAccountsToUserResponse({}));
  }

  async attachDatabaseAccountsToUser(request: AttachDatabaseAccountsToUserRequest): Promise<AttachDatabaseAccountsToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDatabaseAccountsToUserWithOptions(request, runtime);
  }

  async attachDatabaseAccountsToUserGroupWithOptions(request: AttachDatabaseAccountsToUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<AttachDatabaseAccountsToUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AttachDatabaseAccountsToUserGroupResponse>(await this.callApi(params, req, runtime), new AttachDatabaseAccountsToUserGroupResponse({}));
  }

  async attachDatabaseAccountsToUserGroup(request: AttachDatabaseAccountsToUserGroupRequest): Promise<AttachDatabaseAccountsToUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDatabaseAccountsToUserGroupWithOptions(request, runtime);
  }

  async attachHostAccountsToHostShareKeyWithOptions(request: AttachHostAccountsToHostShareKeyRequest, runtime: $Util.RuntimeOptions): Promise<AttachHostAccountsToHostShareKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAccountIds)) {
      query["HostAccountIds"] = request.hostAccountIds;
    }

    if (!Util.isUnset(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AttachHostAccountsToHostShareKeyResponse>(await this.callApi(params, req, runtime), new AttachHostAccountsToHostShareKeyResponse({}));
  }

  async attachHostAccountsToHostShareKey(request: AttachHostAccountsToHostShareKeyRequest): Promise<AttachHostAccountsToHostShareKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachHostAccountsToHostShareKeyWithOptions(request, runtime);
  }

  async attachHostAccountsToUserWithOptions(request: AttachHostAccountsToUserRequest, runtime: $Util.RuntimeOptions): Promise<AttachHostAccountsToUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AttachHostAccountsToUserResponse>(await this.callApi(params, req, runtime), new AttachHostAccountsToUserResponse({}));
  }

  async attachHostAccountsToUser(request: AttachHostAccountsToUserRequest): Promise<AttachHostAccountsToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachHostAccountsToUserWithOptions(request, runtime);
  }

  /**
    * After you authorize a user group to manage specific hosts and host accounts, all the users in the user group have access to the authorized hosts and host accounts.
    *
    * @param request AttachHostAccountsToUserGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachHostAccountsToUserGroupResponse
   */
  async attachHostAccountsToUserGroupWithOptions(request: AttachHostAccountsToUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<AttachHostAccountsToUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AttachHostAccountsToUserGroupResponse>(await this.callApi(params, req, runtime), new AttachHostAccountsToUserGroupResponse({}));
  }

  /**
    * After you authorize a user group to manage specific hosts and host accounts, all the users in the user group have access to the authorized hosts and host accounts.
    *
    * @param request AttachHostAccountsToUserGroupRequest
    * @return AttachHostAccountsToUserGroupResponse
   */
  async attachHostAccountsToUserGroup(request: AttachHostAccountsToUserGroupRequest): Promise<AttachHostAccountsToUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachHostAccountsToUserGroupWithOptions(request, runtime);
  }

  async attachHostGroupAccountsToUserWithOptions(request: AttachHostGroupAccountsToUserRequest, runtime: $Util.RuntimeOptions): Promise<AttachHostGroupAccountsToUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AttachHostGroupAccountsToUserResponse>(await this.callApi(params, req, runtime), new AttachHostGroupAccountsToUserResponse({}));
  }

  async attachHostGroupAccountsToUser(request: AttachHostGroupAccountsToUserRequest): Promise<AttachHostGroupAccountsToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachHostGroupAccountsToUserWithOptions(request, runtime);
  }

  async attachHostGroupAccountsToUserGroupWithOptions(request: AttachHostGroupAccountsToUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<AttachHostGroupAccountsToUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AttachHostGroupAccountsToUserGroupResponse>(await this.callApi(params, req, runtime), new AttachHostGroupAccountsToUserGroupResponse({}));
  }

  async attachHostGroupAccountsToUserGroup(request: AttachHostGroupAccountsToUserGroupRequest): Promise<AttachHostGroupAccountsToUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachHostGroupAccountsToUserGroupWithOptions(request, runtime);
  }

  async configInstanceSecurityGroupsWithOptions(request: ConfigInstanceSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ConfigInstanceSecurityGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizedSecurityGroups)) {
      query["AuthorizedSecurityGroups"] = request.authorizedSecurityGroups;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ConfigInstanceSecurityGroupsResponse>(await this.callApi(params, req, runtime), new ConfigInstanceSecurityGroupsResponse({}));
  }

  async configInstanceSecurityGroups(request: ConfigInstanceSecurityGroupsRequest): Promise<ConfigInstanceSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceSecurityGroupsWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * You can call this operation to configure a whitelist of public IP addresses for a bastion host. By default, a bastion host is accessible from all public IP addresses. If you want to allow the requests from specific public IP addresses, you can call this operation to add trusted IP addresses to the whitelist of the bastion host.  
    * ## Limits
    * You can call this operation up to 30 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ConfigInstanceWhiteListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ConfigInstanceWhiteListResponse
   */
  async configInstanceWhiteListWithOptions(request: ConfigInstanceWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ConfigInstanceWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.whiteList)) {
      query["WhiteList"] = request.whiteList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ConfigInstanceWhiteListResponse>(await this.callApi(params, req, runtime), new ConfigInstanceWhiteListResponse({}));
  }

  /**
    * ## Usage notes
    * You can call this operation to configure a whitelist of public IP addresses for a bastion host. By default, a bastion host is accessible from all public IP addresses. If you want to allow the requests from specific public IP addresses, you can call this operation to add trusted IP addresses to the whitelist of the bastion host.  
    * ## Limits
    * You can call this operation up to 30 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ConfigInstanceWhiteListRequest
    * @return ConfigInstanceWhiteListResponse
   */
  async configInstanceWhiteList(request: ConfigInstanceWhiteListRequest): Promise<ConfigInstanceWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceWhiteListWithOptions(request, runtime);
  }

  async createDatabaseWithOptions(request: CreateDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeAddressType)) {
      query["ActiveAddressType"] = request.activeAddressType;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.databasePort)) {
      query["DatabasePort"] = request.databasePort;
    }

    if (!Util.isUnset(request.databasePrivateAddress)) {
      query["DatabasePrivateAddress"] = request.databasePrivateAddress;
    }

    if (!Util.isUnset(request.databasePublicAddress)) {
      query["DatabasePublicAddress"] = request.databasePublicAddress;
    }

    if (!Util.isUnset(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.polarDBEndpointType)) {
      query["PolarDBEndpointType"] = request.polarDBEndpointType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!Util.isUnset(request.sourceInstanceRegionId)) {
      query["SourceInstanceRegionId"] = request.sourceInstanceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateDatabaseResponse>(await this.callApi(params, req, runtime), new CreateDatabaseResponse({}));
  }

  async createDatabase(request: CreateDatabaseRequest): Promise<CreateDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatabaseWithOptions(request, runtime);
  }

  async createDatabaseAccountWithOptions(request: CreateDatabaseAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatabaseAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!Util.isUnset(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!Util.isUnset(request.databaseSchema)) {
      query["DatabaseSchema"] = request.databaseSchema;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.loginAttribute)) {
      query["LoginAttribute"] = request.loginAttribute;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateDatabaseAccountResponse>(await this.callApi(params, req, runtime), new CreateDatabaseAccountResponse({}));
  }

  async createDatabaseAccount(request: CreateDatabaseAccountRequest): Promise<CreateDatabaseAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatabaseAccountWithOptions(request, runtime);
  }

  async createHostWithOptions(request: CreateHostRequest, runtime: $Util.RuntimeOptions): Promise<CreateHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeAddressType)) {
      query["ActiveAddressType"] = request.activeAddressType;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.hostPrivateAddress)) {
      query["HostPrivateAddress"] = request.hostPrivateAddress;
    }

    if (!Util.isUnset(request.hostPublicAddress)) {
      query["HostPublicAddress"] = request.hostPublicAddress;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceRegionId)) {
      query["InstanceRegionId"] = request.instanceRegionId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateHostResponse>(await this.callApi(params, req, runtime), new CreateHostResponse({}));
  }

  async createHost(request: CreateHostRequest): Promise<CreateHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHostWithOptions(request, runtime);
  }

  async createHostAccountWithOptions(request: CreateHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateHostAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!Util.isUnset(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!Util.isUnset(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.passPhrase)) {
      query["PassPhrase"] = request.passPhrase;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.protocolName)) {
      query["ProtocolName"] = request.protocolName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateHostAccountResponse>(await this.callApi(params, req, runtime), new CreateHostAccountResponse({}));
  }

  async createHostAccount(request: CreateHostAccountRequest): Promise<CreateHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHostAccountWithOptions(request, runtime);
  }

  async createHostGroupWithOptions(request: CreateHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateHostGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.hostGroupName)) {
      query["HostGroupName"] = request.hostGroupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateHostGroupResponse>(await this.callApi(params, req, runtime), new CreateHostGroupResponse({}));
  }

  async createHostGroup(request: CreateHostGroupRequest): Promise<CreateHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHostGroupWithOptions(request, runtime);
  }

  async createHostShareKeyWithOptions(request: CreateHostShareKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateHostShareKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostShareKeyName)) {
      query["HostShareKeyName"] = request.hostShareKeyName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.passPhrase)) {
      query["PassPhrase"] = request.passPhrase;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateHostShareKeyResponse>(await this.callApi(params, req, runtime), new CreateHostShareKeyResponse({}));
  }

  async createHostShareKey(request: CreateHostShareKeyRequest): Promise<CreateHostShareKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHostShareKeyWithOptions(request, runtime);
  }

  async createNetworkDomainWithOptions(request: CreateNetworkDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainName)) {
      query["NetworkDomainName"] = request.networkDomainName;
    }

    if (!Util.isUnset(request.networkDomainType)) {
      query["NetworkDomainType"] = request.networkDomainType;
    }

    if (!Util.isUnset(request.proxies)) {
      query["Proxies"] = request.proxies;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateNetworkDomainResponse>(await this.callApi(params, req, runtime), new CreateNetworkDomainResponse({}));
  }

  async createNetworkDomain(request: CreateNetworkDomainRequest): Promise<CreateNetworkDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkDomainWithOptions(request, runtime);
  }

  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreatePolicyResponse>(await this.callApi(params, req, runtime), new CreatePolicyResponse({}));
  }

  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!Util.isUnset(request.effectiveEndTime)) {
      query["EffectiveEndTime"] = request.effectiveEndTime;
    }

    if (!Util.isUnset(request.effectiveStartTime)) {
      query["EffectiveStartTime"] = request.effectiveStartTime;
    }

    if (!Util.isUnset(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!Util.isUnset(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
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
    return $tea.cast<CreateRuleResponse>(await this.callApi(params, req, runtime), new CreateRuleResponse({}));
  }

  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * You can call this operation to add a user to a bastion host. You can add local users and Resource Access Management (RAM) users. After a Bastionhost administrator adds a user to a bastion host, the O&M personnel can log on to the bastion host as the user to perform O&M operations on the host on which they have permissions.  
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateUserResponse
   */
  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.effectiveEndTime)) {
      query["EffectiveEndTime"] = request.effectiveEndTime;
    }

    if (!Util.isUnset(request.effectiveStartTime)) {
      query["EffectiveStartTime"] = request.effectiveStartTime;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.languageStatus)) {
      query["LanguageStatus"] = request.languageStatus;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.mobileCountryCode)) {
      query["MobileCountryCode"] = request.mobileCountryCode;
    }

    if (!Util.isUnset(request.needResetPassword)) {
      query["NeedResetPassword"] = request.needResetPassword;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceUserId)) {
      query["SourceUserId"] = request.sourceUserId;
    }

    if (!Util.isUnset(request.twoFactorMethods)) {
      query["TwoFactorMethods"] = request.twoFactorMethods;
    }

    if (!Util.isUnset(request.twoFactorStatus)) {
      query["TwoFactorStatus"] = request.twoFactorStatus;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateUserResponse>(await this.callApi(params, req, runtime), new CreateUserResponse({}));
  }

  /**
    * ## Usage notes
    * You can call this operation to add a user to a bastion host. You can add local users and Resource Access Management (RAM) users. After a Bastionhost administrator adds a user to a bastion host, the O&M personnel can log on to the bastion host as the user to perform O&M operations on the host on which they have permissions.  
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateUserRequest
    * @return CreateUserResponse
   */
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
    * You can call this operation to create a user group for a bastion host as an administrator. Then, you can call the [AddUsersToGroup](~~204600~~) operation to add users to the user group at a time. After you add the users to the user group, you can authorize and manage the users in a centralized manner.
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateUserGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateUserGroupResponse
   */
  async createUserGroupWithOptions(request: CreateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateUserGroupResponse>(await this.callApi(params, req, runtime), new CreateUserGroupResponse({}));
  }

  /**
    * You can call this operation to create a user group for a bastion host as an administrator. Then, you can call the [AddUsersToGroup](~~204600~~) operation to add users to the user group at a time. After you add the users to the user group, you can authorize and manage the users in a centralized manner.
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateUserGroupRequest
    * @return CreateUserGroupResponse
   */
  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  /**
    * You can call the CreateUserPublicKey operation to create a public key for the specified user of a bastion host.
    *
    * @param request CreateUserPublicKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateUserPublicKeyResponse
   */
  async createUserPublicKeyWithOptions(request: CreateUserPublicKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserPublicKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.publicKey)) {
      query["PublicKey"] = request.publicKey;
    }

    if (!Util.isUnset(request.publicKeyName)) {
      query["PublicKeyName"] = request.publicKeyName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateUserPublicKeyResponse>(await this.callApi(params, req, runtime), new CreateUserPublicKeyResponse({}));
  }

  /**
    * You can call the CreateUserPublicKey operation to create a public key for the specified user of a bastion host.
    *
    * @param request CreateUserPublicKeyRequest
    * @return CreateUserPublicKeyResponse
   */
  async createUserPublicKey(request: CreateUserPublicKeyRequest): Promise<CreateUserPublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserPublicKeyWithOptions(request, runtime);
  }

  async deleteDatabaseWithOptions(request: DeleteDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteDatabaseResponse>(await this.callApi(params, req, runtime), new DeleteDatabaseResponse({}));
  }

  async deleteDatabase(request: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  async deleteDatabaseAccountWithOptions(request: DeleteDatabaseAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatabaseAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseAccountId)) {
      query["DatabaseAccountId"] = request.databaseAccountId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteDatabaseAccountResponse>(await this.callApi(params, req, runtime), new DeleteDatabaseAccountResponse({}));
  }

  async deleteDatabaseAccount(request: DeleteDatabaseAccountRequest): Promise<DeleteDatabaseAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabaseAccountWithOptions(request, runtime);
  }

  async deleteHostWithOptions(request: DeleteHostRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteHostResponse>(await this.callApi(params, req, runtime), new DeleteHostResponse({}));
  }

  async deleteHost(request: DeleteHostRequest): Promise<DeleteHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHostWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * This interface is used to delete individual host accounts. If a host account is no longer in use, you can invoke this interface to delete the host account for that host that has been configured on the bastion.
    * >  After you remove the host account, you must enter the username and password of the host when you log on to the host in Bastionhost.  
    * ## QPS Limit
    * The single-user QPS limit of this interface is 10 times/second. If the limit is exceeded, the API call will be stream-limited, which may affect your business, please call reasonably.
    *
    * @param request DeleteHostAccountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteHostAccountResponse
   */
  async deleteHostAccountWithOptions(request: DeleteHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHostAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAccountId)) {
      query["HostAccountId"] = request.hostAccountId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteHostAccountResponse>(await this.callApi(params, req, runtime), new DeleteHostAccountResponse({}));
  }

  /**
    * ## Usage notes
    * This interface is used to delete individual host accounts. If a host account is no longer in use, you can invoke this interface to delete the host account for that host that has been configured on the bastion.
    * >  After you remove the host account, you must enter the username and password of the host when you log on to the host in Bastionhost.  
    * ## QPS Limit
    * The single-user QPS limit of this interface is 10 times/second. If the limit is exceeded, the API call will be stream-limited, which may affect your business, please call reasonably.
    *
    * @param request DeleteHostAccountRequest
    * @return DeleteHostAccountResponse
   */
  async deleteHostAccount(request: DeleteHostAccountRequest): Promise<DeleteHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHostAccountWithOptions(request, runtime);
  }

  /**
    * You can call this operation to delete a single host group. If you no longer need to perform O\\&M operations on all hosts in a host group, you can call this operation to delete the host group.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteHostGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteHostGroupResponse
   */
  async deleteHostGroupWithOptions(request: DeleteHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHostGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteHostGroupResponse>(await this.callApi(params, req, runtime), new DeleteHostGroupResponse({}));
  }

  /**
    * You can call this operation to delete a single host group. If you no longer need to perform O\\&M operations on all hosts in a host group, you can call this operation to delete the host group.
    * ### Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteHostGroupRequest
    * @return DeleteHostGroupResponse
   */
  async deleteHostGroup(request: DeleteHostGroupRequest): Promise<DeleteHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHostGroupWithOptions(request, runtime);
  }

  async deleteHostShareKeyWithOptions(request: DeleteHostShareKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHostShareKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteHostShareKeyResponse>(await this.callApi(params, req, runtime), new DeleteHostShareKeyResponse({}));
  }

  async deleteHostShareKey(request: DeleteHostShareKeyRequest): Promise<DeleteHostShareKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHostShareKeyWithOptions(request, runtime);
  }

  async deleteNetworkDomainWithOptions(request: DeleteNetworkDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteNetworkDomainResponse>(await this.callApi(params, req, runtime), new DeleteNetworkDomainResponse({}));
  }

  async deleteNetworkDomain(request: DeleteNetworkDomainRequest): Promise<DeleteNetworkDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkDomainWithOptions(request, runtime);
  }

  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeletePolicyResponse>(await this.callApi(params, req, runtime), new DeletePolicyResponse({}));
  }

  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteRuleResponse>(await this.callApi(params, req, runtime), new DeleteRuleResponse({}));
  }

  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deleteUserGroupWithOptions(request: DeleteUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteUserGroupResponse>(await this.callApi(params, req, runtime), new DeleteUserGroupResponse({}));
  }

  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  /**
    * You can call the DeleteUserPublicKey operation to delete a public key from the specified user of a bastion host.
    *
    * @param request DeleteUserPublicKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteUserPublicKeyResponse
   */
  async deleteUserPublicKeyWithOptions(request: DeleteUserPublicKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserPublicKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.publicKeyId)) {
      query["PublicKeyId"] = request.publicKeyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteUserPublicKeyResponse>(await this.callApi(params, req, runtime), new DeleteUserPublicKeyResponse({}));
  }

  /**
    * You can call the DeleteUserPublicKey operation to delete a public key from the specified user of a bastion host.
    *
    * @param request DeleteUserPublicKeyRequest
    * @return DeleteUserPublicKeyResponse
   */
  async deleteUserPublicKey(request: DeleteUserPublicKeyRequest): Promise<DeleteUserPublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserPublicKeyWithOptions(request, runtime);
  }

  async describeInstanceAttributeWithOptions(request: DescribeInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeInstanceAttributeResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAttributeResponse({}));
  }

  async describeInstanceAttribute(request: DescribeInstanceAttributeRequest): Promise<DescribeInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAttributeWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async detachDatabaseAccountsFromUserWithOptions(request: DetachDatabaseAccountsFromUserRequest, runtime: $Util.RuntimeOptions): Promise<DetachDatabaseAccountsFromUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetachDatabaseAccountsFromUserResponse>(await this.callApi(params, req, runtime), new DetachDatabaseAccountsFromUserResponse({}));
  }

  async detachDatabaseAccountsFromUser(request: DetachDatabaseAccountsFromUserRequest): Promise<DetachDatabaseAccountsFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDatabaseAccountsFromUserWithOptions(request, runtime);
  }

  async detachDatabaseAccountsFromUserGroupWithOptions(request: DetachDatabaseAccountsFromUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DetachDatabaseAccountsFromUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetachDatabaseAccountsFromUserGroupResponse>(await this.callApi(params, req, runtime), new DetachDatabaseAccountsFromUserGroupResponse({}));
  }

  async detachDatabaseAccountsFromUserGroup(request: DetachDatabaseAccountsFromUserGroupRequest): Promise<DetachDatabaseAccountsFromUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDatabaseAccountsFromUserGroupWithOptions(request, runtime);
  }

  async detachHostAccountsFromHostShareKeyWithOptions(request: DetachHostAccountsFromHostShareKeyRequest, runtime: $Util.RuntimeOptions): Promise<DetachHostAccountsFromHostShareKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAccountIds)) {
      query["HostAccountIds"] = request.hostAccountIds;
    }

    if (!Util.isUnset(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetachHostAccountsFromHostShareKeyResponse>(await this.callApi(params, req, runtime), new DetachHostAccountsFromHostShareKeyResponse({}));
  }

  async detachHostAccountsFromHostShareKey(request: DetachHostAccountsFromHostShareKeyRequest): Promise<DetachHostAccountsFromHostShareKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachHostAccountsFromHostShareKeyWithOptions(request, runtime);
  }

  async detachHostAccountsFromUserWithOptions(request: DetachHostAccountsFromUserRequest, runtime: $Util.RuntimeOptions): Promise<DetachHostAccountsFromUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetachHostAccountsFromUserResponse>(await this.callApi(params, req, runtime), new DetachHostAccountsFromUserResponse({}));
  }

  async detachHostAccountsFromUser(request: DetachHostAccountsFromUserRequest): Promise<DetachHostAccountsFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachHostAccountsFromUserWithOptions(request, runtime);
  }

  async detachHostAccountsFromUserGroupWithOptions(request: DetachHostAccountsFromUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DetachHostAccountsFromUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetachHostAccountsFromUserGroupResponse>(await this.callApi(params, req, runtime), new DetachHostAccountsFromUserGroupResponse({}));
  }

  async detachHostAccountsFromUserGroup(request: DetachHostAccountsFromUserGroupRequest): Promise<DetachHostAccountsFromUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachHostAccountsFromUserGroupWithOptions(request, runtime);
  }

  async detachHostGroupAccountsFromUserWithOptions(request: DetachHostGroupAccountsFromUserRequest, runtime: $Util.RuntimeOptions): Promise<DetachHostGroupAccountsFromUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetachHostGroupAccountsFromUserResponse>(await this.callApi(params, req, runtime), new DetachHostGroupAccountsFromUserResponse({}));
  }

  async detachHostGroupAccountsFromUser(request: DetachHostGroupAccountsFromUserRequest): Promise<DetachHostGroupAccountsFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachHostGroupAccountsFromUserWithOptions(request, runtime);
  }

  /**
    * ****
    *
    * @param request DetachHostGroupAccountsFromUserGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DetachHostGroupAccountsFromUserGroupResponse
   */
  async detachHostGroupAccountsFromUserGroupWithOptions(request: DetachHostGroupAccountsFromUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DetachHostGroupAccountsFromUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DetachHostGroupAccountsFromUserGroupResponse>(await this.callApi(params, req, runtime), new DetachHostGroupAccountsFromUserGroupResponse({}));
  }

  /**
    * ****
    *
    * @param request DetachHostGroupAccountsFromUserGroupRequest
    * @return DetachHostGroupAccountsFromUserGroupResponse
   */
  async detachHostGroupAccountsFromUserGroup(request: DetachHostGroupAccountsFromUserGroupRequest): Promise<DetachHostGroupAccountsFromUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachHostGroupAccountsFromUserGroupWithOptions(request, runtime);
  }

  async disableInstancePublicAccessWithOptions(request: DisableInstancePublicAccessRequest, runtime: $Util.RuntimeOptions): Promise<DisableInstancePublicAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DisableInstancePublicAccessResponse>(await this.callApi(params, req, runtime), new DisableInstancePublicAccessResponse({}));
  }

  async disableInstancePublicAccess(request: DisableInstancePublicAccessRequest): Promise<DisableInstancePublicAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableInstancePublicAccessWithOptions(request, runtime);
  }

  async disableRuleWithOptions(request: DisableRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DisableRuleResponse>(await this.callApi(params, req, runtime), new DisableRuleResponse({}));
  }

  async disableRule(request: DisableRuleRequest): Promise<DisableRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableRuleWithOptions(request, runtime);
  }

  async enableInstancePublicAccessWithOptions(request: EnableInstancePublicAccessRequest, runtime: $Util.RuntimeOptions): Promise<EnableInstancePublicAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<EnableInstancePublicAccessResponse>(await this.callApi(params, req, runtime), new EnableInstancePublicAccessResponse({}));
  }

  async enableInstancePublicAccess(request: EnableInstancePublicAccessRequest): Promise<EnableInstancePublicAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableInstancePublicAccessWithOptions(request, runtime);
  }

  async enableRuleWithOptions(request: EnableRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<EnableRuleResponse>(await this.callApi(params, req, runtime), new EnableRuleResponse({}));
  }

  async enableRule(request: EnableRuleRequest): Promise<EnableRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableRuleWithOptions(request, runtime);
  }

  async generateAssetOperationTokenWithOptions(request: GenerateAssetOperationTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAssetOperationTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetAccountId)) {
      query["AssetAccountId"] = request.assetAccountId;
    }

    if (!Util.isUnset(request.assetAccountName)) {
      query["AssetAccountName"] = request.assetAccountName;
    }

    if (!Util.isUnset(request.assetAccountPassword)) {
      query["AssetAccountPassword"] = request.assetAccountPassword;
    }

    if (!Util.isUnset(request.assetAccountProtocolName)) {
      query["AssetAccountProtocolName"] = request.assetAccountProtocolName;
    }

    if (!Util.isUnset(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!Util.isUnset(request.assetType)) {
      query["AssetType"] = request.assetType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GenerateAssetOperationTokenResponse>(await this.callApi(params, req, runtime), new GenerateAssetOperationTokenResponse({}));
  }

  async generateAssetOperationToken(request: GenerateAssetOperationTokenRequest): Promise<GenerateAssetOperationTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAssetOperationTokenWithOptions(request, runtime);
  }

  async getDatabaseWithOptions(request: GetDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<GetDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetDatabaseResponse>(await this.callApi(params, req, runtime), new GetDatabaseResponse({}));
  }

  async getDatabase(request: GetDatabaseRequest): Promise<GetDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatabaseWithOptions(request, runtime);
  }

  async getDatabaseAccountWithOptions(request: GetDatabaseAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetDatabaseAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseAccountId)) {
      query["DatabaseAccountId"] = request.databaseAccountId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetDatabaseAccountResponse>(await this.callApi(params, req, runtime), new GetDatabaseAccountResponse({}));
  }

  async getDatabaseAccount(request: GetDatabaseAccountRequest): Promise<GetDatabaseAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatabaseAccountWithOptions(request, runtime);
  }

  async getHostWithOptions(request: GetHostRequest, runtime: $Util.RuntimeOptions): Promise<GetHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetHostResponse>(await this.callApi(params, req, runtime), new GetHostResponse({}));
  }

  async getHost(request: GetHostRequest): Promise<GetHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHostWithOptions(request, runtime);
  }

  async getHostAccountWithOptions(request: GetHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetHostAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAccountId)) {
      query["HostAccountId"] = request.hostAccountId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetHostAccountResponse>(await this.callApi(params, req, runtime), new GetHostAccountResponse({}));
  }

  async getHostAccount(request: GetHostAccountRequest): Promise<GetHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHostAccountWithOptions(request, runtime);
  }

  async getHostGroupWithOptions(request: GetHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetHostGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetHostGroupResponse>(await this.callApi(params, req, runtime), new GetHostGroupResponse({}));
  }

  async getHostGroup(request: GetHostGroupRequest): Promise<GetHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHostGroupWithOptions(request, runtime);
  }

  async getHostShareKeyWithOptions(request: GetHostShareKeyRequest, runtime: $Util.RuntimeOptions): Promise<GetHostShareKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetHostShareKeyResponse>(await this.callApi(params, req, runtime), new GetHostShareKeyResponse({}));
  }

  async getHostShareKey(request: GetHostShareKeyRequest): Promise<GetHostShareKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHostShareKeyWithOptions(request, runtime);
  }

  /**
    * ###
    * You can call this operation to query the settings of AD authentication on a bastion host. After you configure AD authentication on a bastion host, you can import AD-authenticated users into the bastion host. After the AD-authenticated users are imported into the bastion host, the AD-authenticated users can log on to the bastion host to perform O\\&M operations on servers.
    * ### Limit
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetInstanceADAuthServerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetInstanceADAuthServerResponse
   */
  async getInstanceADAuthServerWithOptions(request: GetInstanceADAuthServerRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceADAuthServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetInstanceADAuthServerResponse>(await this.callApi(params, req, runtime), new GetInstanceADAuthServerResponse({}));
  }

  /**
    * ###
    * You can call this operation to query the settings of AD authentication on a bastion host. After you configure AD authentication on a bastion host, you can import AD-authenticated users into the bastion host. After the AD-authenticated users are imported into the bastion host, the AD-authenticated users can log on to the bastion host to perform O\\&M operations on servers.
    * ### Limit
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetInstanceADAuthServerRequest
    * @return GetInstanceADAuthServerResponse
   */
  async getInstanceADAuthServer(request: GetInstanceADAuthServerRequest): Promise<GetInstanceADAuthServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceADAuthServerWithOptions(request, runtime);
  }

  async getInstanceLDAPAuthServerWithOptions(request: GetInstanceLDAPAuthServerRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceLDAPAuthServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetInstanceLDAPAuthServerResponse>(await this.callApi(params, req, runtime), new GetInstanceLDAPAuthServerResponse({}));
  }

  async getInstanceLDAPAuthServer(request: GetInstanceLDAPAuthServerRequest): Promise<GetInstanceLDAPAuthServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceLDAPAuthServerWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the settings of two-factor authentication on a bastion host. After you enable two-factor authentication, Bastionhost sends a verification code to a local user when the local user logs on to a bastion host. A local user can log on to the bastion host only when the local user enters the valid username and password and the verification code. This reduces the security risks caused by account information leaks.
    * ### Limit
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetInstanceTwoFactorRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetInstanceTwoFactorResponse
   */
  async getInstanceTwoFactorWithOptions(request: GetInstanceTwoFactorRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceTwoFactorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetInstanceTwoFactorResponse>(await this.callApi(params, req, runtime), new GetInstanceTwoFactorResponse({}));
  }

  /**
    * You can call this operation to query the settings of two-factor authentication on a bastion host. After you enable two-factor authentication, Bastionhost sends a verification code to a local user when the local user logs on to a bastion host. A local user can log on to the bastion host only when the local user enters the valid username and password and the verification code. This reduces the security risks caused by account information leaks.
    * ### Limit
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetInstanceTwoFactorRequest
    * @return GetInstanceTwoFactorResponse
   */
  async getInstanceTwoFactor(request: GetInstanceTwoFactorRequest): Promise<GetInstanceTwoFactorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceTwoFactorWithOptions(request, runtime);
  }

  async getNetworkDomainWithOptions(request: GetNetworkDomainRequest, runtime: $Util.RuntimeOptions): Promise<GetNetworkDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetNetworkDomainResponse>(await this.callApi(params, req, runtime), new GetNetworkDomainResponse({}));
  }

  async getNetworkDomain(request: GetNetworkDomainRequest): Promise<GetNetworkDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNetworkDomainWithOptions(request, runtime);
  }

  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetPolicyResponse>(await this.callApi(params, req, runtime), new GetPolicyResponse({}));
  }

  async getPolicy(request: GetPolicyRequest): Promise<GetPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  async getPolicyAssetScopeWithOptions(request: GetPolicyAssetScopeRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyAssetScopeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetPolicyAssetScopeResponse>(await this.callApi(params, req, runtime), new GetPolicyAssetScopeResponse({}));
  }

  async getPolicyAssetScope(request: GetPolicyAssetScopeRequest): Promise<GetPolicyAssetScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyAssetScopeWithOptions(request, runtime);
  }

  async getPolicyUserScopeWithOptions(request: GetPolicyUserScopeRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyUserScopeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetPolicyUserScopeResponse>(await this.callApi(params, req, runtime), new GetPolicyUserScopeResponse({}));
  }

  async getPolicyUserScope(request: GetPolicyUserScopeRequest): Promise<GetPolicyUserScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyUserScopeWithOptions(request, runtime);
  }

  async getRuleWithOptions(request: GetRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetRuleResponse>(await this.callApi(params, req, runtime), new GetRuleResponse({}));
  }

  async getRule(request: GetRuleRequest): Promise<GetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async getUserGroupWithOptions(request: GetUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetUserGroupResponse>(await this.callApi(params, req, runtime), new GetUserGroupResponse({}));
  }

  async getUserGroup(request: GetUserGroupRequest): Promise<GetUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserGroupWithOptions(request, runtime);
  }

  async listApproveCommandsWithOptions(request: ListApproveCommandsRequest, runtime: $Util.RuntimeOptions): Promise<ListApproveCommandsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListApproveCommandsResponse>(await this.callApi(params, req, runtime), new ListApproveCommandsResponse({}));
  }

  async listApproveCommands(request: ListApproveCommandsRequest): Promise<ListApproveCommandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApproveCommandsWithOptions(request, runtime);
  }

  async listDatabaseAccountsWithOptions(request: ListDatabaseAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListDatabaseAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!Util.isUnset(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListDatabaseAccountsResponse>(await this.callApi(params, req, runtime), new ListDatabaseAccountsResponse({}));
  }

  async listDatabaseAccounts(request: ListDatabaseAccountsRequest): Promise<ListDatabaseAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabaseAccountsWithOptions(request, runtime);
  }

  async listDatabaseAccountsForUserWithOptions(request: ListDatabaseAccountsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListDatabaseAccountsForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!Util.isUnset(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListDatabaseAccountsForUserResponse>(await this.callApi(params, req, runtime), new ListDatabaseAccountsForUserResponse({}));
  }

  async listDatabaseAccountsForUser(request: ListDatabaseAccountsForUserRequest): Promise<ListDatabaseAccountsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabaseAccountsForUserWithOptions(request, runtime);
  }

  async listDatabaseAccountsForUserGroupWithOptions(request: ListDatabaseAccountsForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListDatabaseAccountsForUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!Util.isUnset(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListDatabaseAccountsForUserGroupResponse>(await this.callApi(params, req, runtime), new ListDatabaseAccountsForUserGroupResponse({}));
  }

  async listDatabaseAccountsForUserGroup(request: ListDatabaseAccountsForUserGroupRequest): Promise<ListDatabaseAccountsForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabaseAccountsForUserGroupWithOptions(request, runtime);
  }

  async listDatabasesWithOptions(request: ListDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<ListDatabasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!Util.isUnset(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListDatabasesResponse>(await this.callApi(params, req, runtime), new ListDatabasesResponse({}));
  }

  async listDatabases(request: ListDatabasesRequest): Promise<ListDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabasesWithOptions(request, runtime);
  }

  async listDatabasesForUserWithOptions(request: ListDatabasesForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListDatabasesForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseAddress)) {
      query["DatabaseAddress"] = request.databaseAddress;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListDatabasesForUserResponse>(await this.callApi(params, req, runtime), new ListDatabasesForUserResponse({}));
  }

  async listDatabasesForUser(request: ListDatabasesForUserRequest): Promise<ListDatabasesForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabasesForUserWithOptions(request, runtime);
  }

  async listDatabasesForUserGroupWithOptions(request: ListDatabasesForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListDatabasesForUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseAddress)) {
      query["DatabaseAddress"] = request.databaseAddress;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListDatabasesForUserGroupResponse>(await this.callApi(params, req, runtime), new ListDatabasesForUserGroupResponse({}));
  }

  async listDatabasesForUserGroup(request: ListDatabasesForUserGroupRequest): Promise<ListDatabasesForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabasesForUserGroupWithOptions(request, runtime);
  }

  async listHostAccountsWithOptions(request: ListHostAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListHostAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!Util.isUnset(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.protocolName)) {
      query["ProtocolName"] = request.protocolName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostAccountsResponse>(await this.callApi(params, req, runtime), new ListHostAccountsResponse({}));
  }

  async listHostAccounts(request: ListHostAccountsRequest): Promise<ListHostAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostAccountsWithOptions(request, runtime);
  }

  async listHostAccountsForHostShareKeyWithOptions(request: ListHostAccountsForHostShareKeyRequest, runtime: $Util.RuntimeOptions): Promise<ListHostAccountsForHostShareKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostAccountsForHostShareKeyResponse>(await this.callApi(params, req, runtime), new ListHostAccountsForHostShareKeyResponse({}));
  }

  async listHostAccountsForHostShareKey(request: ListHostAccountsForHostShareKeyRequest): Promise<ListHostAccountsForHostShareKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostAccountsForHostShareKeyWithOptions(request, runtime);
  }

  async listHostAccountsForUserWithOptions(request: ListHostAccountsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListHostAccountsForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!Util.isUnset(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostAccountsForUserResponse>(await this.callApi(params, req, runtime), new ListHostAccountsForUserResponse({}));
  }

  async listHostAccountsForUser(request: ListHostAccountsForUserRequest): Promise<ListHostAccountsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostAccountsForUserWithOptions(request, runtime);
  }

  async listHostAccountsForUserGroupWithOptions(request: ListHostAccountsForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListHostAccountsForUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!Util.isUnset(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostAccountsForUserGroupResponse>(await this.callApi(params, req, runtime), new ListHostAccountsForUserGroupResponse({}));
  }

  async listHostAccountsForUserGroup(request: ListHostAccountsForUserGroupRequest): Promise<ListHostAccountsForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostAccountsForUserGroupWithOptions(request, runtime);
  }

  async listHostGroupAccountNamesForUserWithOptions(request: ListHostGroupAccountNamesForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListHostGroupAccountNamesForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostGroupAccountNamesForUserResponse>(await this.callApi(params, req, runtime), new ListHostGroupAccountNamesForUserResponse({}));
  }

  async listHostGroupAccountNamesForUser(request: ListHostGroupAccountNamesForUserRequest): Promise<ListHostGroupAccountNamesForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostGroupAccountNamesForUserWithOptions(request, runtime);
  }

  async listHostGroupAccountNamesForUserGroupWithOptions(request: ListHostGroupAccountNamesForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListHostGroupAccountNamesForUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostGroupAccountNamesForUserGroupResponse>(await this.callApi(params, req, runtime), new ListHostGroupAccountNamesForUserGroupResponse({}));
  }

  async listHostGroupAccountNamesForUserGroup(request: ListHostGroupAccountNamesForUserGroupRequest): Promise<ListHostGroupAccountNamesForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostGroupAccountNamesForUserGroupWithOptions(request, runtime);
  }

  async listHostGroupsWithOptions(request: ListHostGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListHostGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroupName)) {
      query["HostGroupName"] = request.hostGroupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostGroupsResponse>(await this.callApi(params, req, runtime), new ListHostGroupsResponse({}));
  }

  async listHostGroups(request: ListHostGroupsRequest): Promise<ListHostGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostGroupsWithOptions(request, runtime);
  }

  async listHostGroupsForUserWithOptions(request: ListHostGroupsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListHostGroupsForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroupName)) {
      query["HostGroupName"] = request.hostGroupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostGroupsForUserResponse>(await this.callApi(params, req, runtime), new ListHostGroupsForUserResponse({}));
  }

  async listHostGroupsForUser(request: ListHostGroupsForUserRequest): Promise<ListHostGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostGroupsForUserWithOptions(request, runtime);
  }

  async listHostGroupsForUserGroupWithOptions(request: ListHostGroupsForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListHostGroupsForUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroupName)) {
      query["HostGroupName"] = request.hostGroupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostGroupsForUserGroupResponse>(await this.callApi(params, req, runtime), new ListHostGroupsForUserGroupResponse({}));
  }

  async listHostGroupsForUserGroup(request: ListHostGroupsForUserGroupRequest): Promise<ListHostGroupsForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostGroupsForUserGroupWithOptions(request, runtime);
  }

  async listHostShareKeysWithOptions(request: ListHostShareKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListHostShareKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostShareKeysResponse>(await this.callApi(params, req, runtime), new ListHostShareKeysResponse({}));
  }

  async listHostShareKeys(request: ListHostShareKeysRequest): Promise<ListHostShareKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostShareKeysWithOptions(request, runtime);
  }

  async listHostsWithOptions(request: ListHostsRequest, runtime: $Util.RuntimeOptions): Promise<ListHostsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!Util.isUnset(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!Util.isUnset(request.sourceInstanceState)) {
      query["SourceInstanceState"] = request.sourceInstanceState;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostsResponse>(await this.callApi(params, req, runtime), new ListHostsResponse({}));
  }

  async listHosts(request: ListHostsRequest): Promise<ListHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostsWithOptions(request, runtime);
  }

  async listHostsForUserWithOptions(request: ListHostsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListHostsForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostsForUserResponse>(await this.callApi(params, req, runtime), new ListHostsForUserResponse({}));
  }

  async listHostsForUser(request: ListHostsForUserRequest): Promise<ListHostsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostsForUserWithOptions(request, runtime);
  }

  async listHostsForUserGroupWithOptions(request: ListHostsForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListHostsForUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListHostsForUserGroupResponse>(await this.callApi(params, req, runtime), new ListHostsForUserGroupResponse({}));
  }

  async listHostsForUserGroup(request: ListHostsForUserGroupRequest): Promise<ListHostsForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostsForUserGroupWithOptions(request, runtime);
  }

  async listNetworkDomainsWithOptions(request: ListNetworkDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListNetworkDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainName)) {
      query["NetworkDomainName"] = request.networkDomainName;
    }

    if (!Util.isUnset(request.networkDomainType)) {
      query["NetworkDomainType"] = request.networkDomainType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListNetworkDomainsResponse>(await this.callApi(params, req, runtime), new ListNetworkDomainsResponse({}));
  }

  async listNetworkDomains(request: ListNetworkDomainsRequest): Promise<ListNetworkDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworkDomainsWithOptions(request, runtime);
  }

  async listOperationDatabaseAccountsWithOptions(request: ListOperationDatabaseAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListOperationDatabaseAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!Util.isUnset(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListOperationDatabaseAccountsResponse>(await this.callApi(params, req, runtime), new ListOperationDatabaseAccountsResponse({}));
  }

  async listOperationDatabaseAccounts(request: ListOperationDatabaseAccountsRequest): Promise<ListOperationDatabaseAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOperationDatabaseAccountsWithOptions(request, runtime);
  }

  async listOperationDatabasesWithOptions(request: ListOperationDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<ListOperationDatabasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseAddress)) {
      query["DatabaseAddress"] = request.databaseAddress;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.databaseType)) {
      query["DatabaseType"] = request.databaseType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!Util.isUnset(request.sourceInstanceState)) {
      query["SourceInstanceState"] = request.sourceInstanceState;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListOperationDatabasesResponse>(await this.callApi(params, req, runtime), new ListOperationDatabasesResponse({}));
  }

  async listOperationDatabases(request: ListOperationDatabasesRequest): Promise<ListOperationDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOperationDatabasesWithOptions(request, runtime);
  }

  async listOperationHostAccountsWithOptions(request: ListOperationHostAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListOperationHostAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!Util.isUnset(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListOperationHostAccountsResponse>(await this.callApi(params, req, runtime), new ListOperationHostAccountsResponse({}));
  }

  async listOperationHostAccounts(request: ListOperationHostAccountsRequest): Promise<ListOperationHostAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOperationHostAccountsWithOptions(request, runtime);
  }

  async listOperationHostsWithOptions(request: ListOperationHostsRequest, runtime: $Util.RuntimeOptions): Promise<ListOperationHostsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!Util.isUnset(request.sourceInstanceState)) {
      query["SourceInstanceState"] = request.sourceInstanceState;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListOperationHostsResponse>(await this.callApi(params, req, runtime), new ListOperationHostsResponse({}));
  }

  async listOperationHosts(request: ListOperationHostsRequest): Promise<ListOperationHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOperationHostsWithOptions(request, runtime);
  }

  async listOperationTicketsWithOptions(request: ListOperationTicketsRequest, runtime: $Util.RuntimeOptions): Promise<ListOperationTicketsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetAddress)) {
      query["AssetAddress"] = request.assetAddress;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListOperationTicketsResponse>(await this.callApi(params, req, runtime), new ListOperationTicketsResponse({}));
  }

  async listOperationTickets(request: ListOperationTicketsRequest): Promise<ListOperationTicketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOperationTicketsWithOptions(request, runtime);
  }

  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListPoliciesResponse>(await this.callApi(params, req, runtime), new ListPoliciesResponse({}));
  }

  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  async listRulesWithOptions(request: ListRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleState)) {
      query["RuleState"] = request.ruleState;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListRulesResponse>(await this.callApi(params, req, runtime), new ListRulesResponse({}));
  }

  async listRules(request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listUserGroupsWithOptions(request: ListUserGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListUserGroupsResponse>(await this.callApi(params, req, runtime), new ListUserGroupsResponse({}));
  }

  async listUserGroups(request: ListUserGroupsRequest): Promise<ListUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsWithOptions(request, runtime);
  }

  async listUserPublicKeysWithOptions(request: ListUserPublicKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListUserPublicKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListUserPublicKeysResponse>(await this.callApi(params, req, runtime), new ListUserPublicKeysResponse({}));
  }

  async listUserPublicKeys(request: ListUserPublicKeysRequest): Promise<ListUserPublicKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserPublicKeysWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceUserId)) {
      query["SourceUserId"] = request.sourceUserId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.userState)) {
      query["UserState"] = request.userState;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
    * # Description
    * You can call this operation to lock one or more users of a bastion host. If a user does not need to use a bastion host to perform O\\&M operations within a specific period of time, you can lock the user. The locked user can no longer log on to or perform O\\&M operations on the hosts on which the user is granted permissions. If you want to unlock the user later, you can call the [UnlockUsers](~~204590~~) operation.
    * # Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request LockUsersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return LockUsersResponse
   */
  async lockUsersWithOptions(request: LockUsersRequest, runtime: $Util.RuntimeOptions): Promise<LockUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<LockUsersResponse>(await this.callApi(params, req, runtime), new LockUsersResponse({}));
  }

  /**
    * # Description
    * You can call this operation to lock one or more users of a bastion host. If a user does not need to use a bastion host to perform O\\&M operations within a specific period of time, you can lock the user. The locked user can no longer log on to or perform O\\&M operations on the hosts on which the user is granted permissions. If you want to unlock the user later, you can call the [UnlockUsers](~~204590~~) operation.
    * # Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request LockUsersRequest
    * @return LockUsersResponse
   */
  async lockUsers(request: LockUsersRequest): Promise<LockUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockUsersWithOptions(request, runtime);
  }

  async modifyDatabaseWithOptions(request: ModifyDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeAddressType)) {
      query["ActiveAddressType"] = request.activeAddressType;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.databaseId)) {
      query["DatabaseId"] = request.databaseId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.databasePort)) {
      query["DatabasePort"] = request.databasePort;
    }

    if (!Util.isUnset(request.databasePrivateAddress)) {
      query["DatabasePrivateAddress"] = request.databasePrivateAddress;
    }

    if (!Util.isUnset(request.databasePublicAddress)) {
      query["DatabasePublicAddress"] = request.databasePublicAddress;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDatabaseResponse>(await this.callApi(params, req, runtime), new ModifyDatabaseResponse({}));
  }

  async modifyDatabase(request: ModifyDatabaseRequest): Promise<ModifyDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseWithOptions(request, runtime);
  }

  async modifyDatabaseAccountWithOptions(request: ModifyDatabaseAccountRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDatabaseAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseAccountId)) {
      query["DatabaseAccountId"] = request.databaseAccountId;
    }

    if (!Util.isUnset(request.databaseAccountName)) {
      query["DatabaseAccountName"] = request.databaseAccountName;
    }

    if (!Util.isUnset(request.databaseSchema)) {
      query["DatabaseSchema"] = request.databaseSchema;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDatabaseAccountResponse>(await this.callApi(params, req, runtime), new ModifyDatabaseAccountResponse({}));
  }

  async modifyDatabaseAccount(request: ModifyDatabaseAccountRequest): Promise<ModifyDatabaseAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseAccountWithOptions(request, runtime);
  }

  /**
    * You can call the ModifyHost operation to modify the basic information about a host in a data center, an Elastic Compute Service (ECS) instance, or a host in an ApsaraDB MyBase dedicated cluster.
    * > The basic information about ECS instances and hosts in ApsaraDB MyBase dedicated clusters within your Alibaba Cloud account is synchronized to Bastionhost on a regular basis. After you modify the basic information about an ECS instance or a host in an ApsaraDB MyBase dedicated cluster, the modification result may be overwritten by the synchronized information.
    *
    * @param request ModifyHostRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyHostResponse
   */
  async modifyHostWithOptions(request: ModifyHostRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.hostPrivateAddress)) {
      query["HostPrivateAddress"] = request.hostPrivateAddress;
    }

    if (!Util.isUnset(request.hostPublicAddress)) {
      query["HostPublicAddress"] = request.hostPublicAddress;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.OSType)) {
      query["OSType"] = request.OSType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyHostResponse>(await this.callApi(params, req, runtime), new ModifyHostResponse({}));
  }

  /**
    * You can call the ModifyHost operation to modify the basic information about a host in a data center, an Elastic Compute Service (ECS) instance, or a host in an ApsaraDB MyBase dedicated cluster.
    * > The basic information about ECS instances and hosts in ApsaraDB MyBase dedicated clusters within your Alibaba Cloud account is synchronized to Bastionhost on a regular basis. After you modify the basic information about an ECS instance or a host in an ApsaraDB MyBase dedicated cluster, the modification result may be overwritten by the synchronized information.
    *
    * @param request ModifyHostRequest
    * @return ModifyHostResponse
   */
  async modifyHost(request: ModifyHostRequest): Promise<ModifyHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostWithOptions(request, runtime);
  }

  async modifyHostAccountWithOptions(request: ModifyHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAccountId)) {
      query["HostAccountId"] = request.hostAccountId;
    }

    if (!Util.isUnset(request.hostAccountName)) {
      query["HostAccountName"] = request.hostAccountName;
    }

    if (!Util.isUnset(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.passPhrase)) {
      query["PassPhrase"] = request.passPhrase;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyHostAccountResponse>(await this.callApi(params, req, runtime), new ModifyHostAccountResponse({}));
  }

  async modifyHostAccount(request: ModifyHostAccountRequest): Promise<ModifyHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostAccountWithOptions(request, runtime);
  }

  async modifyHostGroupWithOptions(request: ModifyHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!Util.isUnset(request.hostGroupName)) {
      query["HostGroupName"] = request.hostGroupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyHostGroupResponse>(await this.callApi(params, req, runtime), new ModifyHostGroupResponse({}));
  }

  async modifyHostGroup(request: ModifyHostGroupRequest): Promise<ModifyHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostGroupWithOptions(request, runtime);
  }

  async modifyHostShareKeyWithOptions(request: ModifyHostShareKeyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostShareKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostShareKeyId)) {
      query["HostShareKeyId"] = request.hostShareKeyId;
    }

    if (!Util.isUnset(request.hostShareKeyName)) {
      query["HostShareKeyName"] = request.hostShareKeyName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.passPhrase)) {
      query["PassPhrase"] = request.passPhrase;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyHostShareKeyResponse>(await this.callApi(params, req, runtime), new ModifyHostShareKeyResponse({}));
  }

  async modifyHostShareKey(request: ModifyHostShareKeyRequest): Promise<ModifyHostShareKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostShareKeyWithOptions(request, runtime);
  }

  async modifyHostsActiveAddressTypeWithOptions(request: ModifyHostsActiveAddressTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostsActiveAddressTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeAddressType)) {
      query["ActiveAddressType"] = request.activeAddressType;
    }

    if (!Util.isUnset(request.hostIds)) {
      query["HostIds"] = request.hostIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyHostsActiveAddressTypeResponse>(await this.callApi(params, req, runtime), new ModifyHostsActiveAddressTypeResponse({}));
  }

  async modifyHostsActiveAddressType(request: ModifyHostsActiveAddressTypeRequest): Promise<ModifyHostsActiveAddressTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostsActiveAddressTypeWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * You can call this operation to change the port for the O&M protocol on one or more hosts. If the standard port for the O&M protocol on your host is vulnerable to attacks, you can call this operation to specify a custom port. For example, the standard port for SSH is port 22.  
    * >  Ports 0 to 1024 are reserved for Bastionhost. Do not change the port for the O&M protocol to a reserved port.  
    * ## QPS limit
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyHostsPortRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyHostsPortResponse
   */
  async modifyHostsPortWithOptions(request: ModifyHostsPortRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostsPortResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostIds)) {
      query["HostIds"] = request.hostIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.protocolName)) {
      query["ProtocolName"] = request.protocolName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyHostsPortResponse>(await this.callApi(params, req, runtime), new ModifyHostsPortResponse({}));
  }

  /**
    * ## Usage notes
    * You can call this operation to change the port for the O&M protocol on one or more hosts. If the standard port for the O&M protocol on your host is vulnerable to attacks, you can call this operation to specify a custom port. For example, the standard port for SSH is port 22.  
    * >  Ports 0 to 1024 are reserved for Bastionhost. Do not change the port for the O&M protocol to a reserved port.  
    * ## QPS limit
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ModifyHostsPortRequest
    * @return ModifyHostsPortResponse
   */
  async modifyHostsPort(request: ModifyHostsPortRequest): Promise<ModifyHostsPortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostsPortWithOptions(request, runtime);
  }

  async modifyInstanceADAuthServerWithOptions(request: ModifyInstanceADAuthServerRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceADAuthServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.baseDN)) {
      query["BaseDN"] = request.baseDN;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.emailMapping)) {
      query["EmailMapping"] = request.emailMapping;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isSSL)) {
      query["IsSSL"] = request.isSSL;
    }

    if (!Util.isUnset(request.mobileMapping)) {
      query["MobileMapping"] = request.mobileMapping;
    }

    if (!Util.isUnset(request.nameMapping)) {
      query["NameMapping"] = request.nameMapping;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.server)) {
      query["Server"] = request.server;
    }

    if (!Util.isUnset(request.standbyServer)) {
      query["StandbyServer"] = request.standbyServer;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyInstanceADAuthServerResponse>(await this.callApi(params, req, runtime), new ModifyInstanceADAuthServerResponse({}));
  }

  async modifyInstanceADAuthServer(request: ModifyInstanceADAuthServerRequest): Promise<ModifyInstanceADAuthServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceADAuthServerWithOptions(request, runtime);
  }

  async modifyInstanceAttributeWithOptions(request: ModifyInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyInstanceAttributeResponse>(await this.callApi(params, req, runtime), new ModifyInstanceAttributeResponse({}));
  }

  async modifyInstanceAttribute(request: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  async modifyInstanceLDAPAuthServerWithOptions(request: ModifyInstanceLDAPAuthServerRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceLDAPAuthServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.baseDN)) {
      query["BaseDN"] = request.baseDN;
    }

    if (!Util.isUnset(request.emailMapping)) {
      query["EmailMapping"] = request.emailMapping;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isSSL)) {
      query["IsSSL"] = request.isSSL;
    }

    if (!Util.isUnset(request.loginNameMapping)) {
      query["LoginNameMapping"] = request.loginNameMapping;
    }

    if (!Util.isUnset(request.mobileMapping)) {
      query["MobileMapping"] = request.mobileMapping;
    }

    if (!Util.isUnset(request.nameMapping)) {
      query["NameMapping"] = request.nameMapping;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.server)) {
      query["Server"] = request.server;
    }

    if (!Util.isUnset(request.standbyServer)) {
      query["StandbyServer"] = request.standbyServer;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyInstanceLDAPAuthServerResponse>(await this.callApi(params, req, runtime), new ModifyInstanceLDAPAuthServerResponse({}));
  }

  async modifyInstanceLDAPAuthServer(request: ModifyInstanceLDAPAuthServerRequest): Promise<ModifyInstanceLDAPAuthServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceLDAPAuthServerWithOptions(request, runtime);
  }

  async modifyInstanceTwoFactorWithOptions(request: ModifyInstanceTwoFactorRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceTwoFactorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableTwoFactor)) {
      query["EnableTwoFactor"] = request.enableTwoFactor;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.skipTwoFactorTime)) {
      query["SkipTwoFactorTime"] = request.skipTwoFactorTime;
    }

    if (!Util.isUnset(request.twoFactorMethods)) {
      query["TwoFactorMethods"] = request.twoFactorMethods;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyInstanceTwoFactorResponse>(await this.callApi(params, req, runtime), new ModifyInstanceTwoFactorResponse({}));
  }

  async modifyInstanceTwoFactor(request: ModifyInstanceTwoFactorRequest): Promise<ModifyInstanceTwoFactorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceTwoFactorWithOptions(request, runtime);
  }

  async modifyNetworkDomainWithOptions(request: ModifyNetworkDomainRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.networkDomainName)) {
      query["NetworkDomainName"] = request.networkDomainName;
    }

    if (!Util.isUnset(request.networkDomainType)) {
      query["NetworkDomainType"] = request.networkDomainType;
    }

    if (!Util.isUnset(request.proxies)) {
      query["Proxies"] = request.proxies;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyNetworkDomainResponse>(await this.callApi(params, req, runtime), new ModifyNetworkDomainResponse({}));
  }

  async modifyNetworkDomain(request: ModifyNetworkDomainRequest): Promise<ModifyNetworkDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkDomainWithOptions(request, runtime);
  }

  async modifyPolicyWithOptions(request: ModifyPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyPolicyResponse>(await this.callApi(params, req, runtime), new ModifyPolicyResponse({}));
  }

  async modifyPolicy(request: ModifyPolicyRequest): Promise<ModifyPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyWithOptions(request, runtime);
  }

  async modifyRuleWithOptions(request: ModifyRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!Util.isUnset(request.effectiveEndTime)) {
      query["EffectiveEndTime"] = request.effectiveEndTime;
    }

    if (!Util.isUnset(request.effectiveStartTime)) {
      query["EffectiveStartTime"] = request.effectiveStartTime;
    }

    if (!Util.isUnset(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!Util.isUnset(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
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
    return $tea.cast<ModifyRuleResponse>(await this.callApi(params, req, runtime), new ModifyRuleResponse({}));
  }

  async modifyRule(request: ModifyRuleRequest): Promise<ModifyRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRuleWithOptions(request, runtime);
  }

  async modifyUserWithOptions(request: ModifyUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.effectiveEndTime)) {
      query["EffectiveEndTime"] = request.effectiveEndTime;
    }

    if (!Util.isUnset(request.effectiveStartTime)) {
      query["EffectiveStartTime"] = request.effectiveStartTime;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.languageStatus)) {
      query["LanguageStatus"] = request.languageStatus;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.mobileCountryCode)) {
      query["MobileCountryCode"] = request.mobileCountryCode;
    }

    if (!Util.isUnset(request.needResetPassword)) {
      query["NeedResetPassword"] = request.needResetPassword;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.twoFactorMethods)) {
      query["TwoFactorMethods"] = request.twoFactorMethods;
    }

    if (!Util.isUnset(request.twoFactorStatus)) {
      query["TwoFactorStatus"] = request.twoFactorStatus;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyUserResponse>(await this.callApi(params, req, runtime), new ModifyUserResponse({}));
  }

  async modifyUser(request: ModifyUserRequest): Promise<ModifyUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserWithOptions(request, runtime);
  }

  async modifyUserGroupWithOptions(request: ModifyUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
    return $tea.cast<ModifyUserGroupResponse>(await this.callApi(params, req, runtime), new ModifyUserGroupResponse({}));
  }

  async modifyUserGroup(request: ModifyUserGroupRequest): Promise<ModifyUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserGroupWithOptions(request, runtime);
  }

  async modifyUserPublicKeyWithOptions(request: ModifyUserPublicKeyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserPublicKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.publicKey)) {
      query["PublicKey"] = request.publicKey;
    }

    if (!Util.isUnset(request.publicKeyId)) {
      query["PublicKeyId"] = request.publicKeyId;
    }

    if (!Util.isUnset(request.publicKeyName)) {
      query["PublicKeyName"] = request.publicKeyName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyUserPublicKeyResponse>(await this.callApi(params, req, runtime), new ModifyUserPublicKeyResponse({}));
  }

  async modifyUserPublicKey(request: ModifyUserPublicKeyRequest): Promise<ModifyUserPublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserPublicKeyWithOptions(request, runtime);
  }

  async moveDatabasesToNetworkDomainWithOptions(request: MoveDatabasesToNetworkDomainRequest, runtime: $Util.RuntimeOptions): Promise<MoveDatabasesToNetworkDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseIds)) {
      query["DatabaseIds"] = request.databaseIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<MoveDatabasesToNetworkDomainResponse>(await this.callApi(params, req, runtime), new MoveDatabasesToNetworkDomainResponse({}));
  }

  async moveDatabasesToNetworkDomain(request: MoveDatabasesToNetworkDomainRequest): Promise<MoveDatabasesToNetworkDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveDatabasesToNetworkDomainWithOptions(request, runtime);
  }

  async moveHostsToNetworkDomainWithOptions(request: MoveHostsToNetworkDomainRequest, runtime: $Util.RuntimeOptions): Promise<MoveHostsToNetworkDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostIds)) {
      query["HostIds"] = request.hostIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkDomainId)) {
      query["NetworkDomainId"] = request.networkDomainId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<MoveHostsToNetworkDomainResponse>(await this.callApi(params, req, runtime), new MoveHostsToNetworkDomainResponse({}));
  }

  async moveHostsToNetworkDomain(request: MoveHostsToNetworkDomainRequest): Promise<MoveHostsToNetworkDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveHostsToNetworkDomainWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async rejectApproveCommandWithOptions(request: RejectApproveCommandRequest, runtime: $Util.RuntimeOptions): Promise<RejectApproveCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RejectApproveCommandResponse>(await this.callApi(params, req, runtime), new RejectApproveCommandResponse({}));
  }

  async rejectApproveCommand(request: RejectApproveCommandRequest): Promise<RejectApproveCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectApproveCommandWithOptions(request, runtime);
  }

  /**
    * You can call this operation to reject an O\\&M application of an O\\&M engineer as a Bastionhost administrator.
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request RejectOperationTicketRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RejectOperationTicketResponse
   */
  async rejectOperationTicketWithOptions(request: RejectOperationTicketRequest, runtime: $Util.RuntimeOptions): Promise<RejectOperationTicketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.operationTicketId)) {
      query["OperationTicketId"] = request.operationTicketId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RejectOperationTicketResponse>(await this.callApi(params, req, runtime), new RejectOperationTicketResponse({}));
  }

  /**
    * You can call this operation to reject an O\\&M application of an O\\&M engineer as a Bastionhost administrator.
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request RejectOperationTicketRequest
    * @return RejectOperationTicketResponse
   */
  async rejectOperationTicket(request: RejectOperationTicketRequest): Promise<RejectOperationTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectOperationTicketWithOptions(request, runtime);
  }

  async removeDatabasesFromGroupWithOptions(request: RemoveDatabasesFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDatabasesFromGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseIds)) {
      query["DatabaseIds"] = request.databaseIds;
    }

    if (!Util.isUnset(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RemoveDatabasesFromGroupResponse>(await this.callApi(params, req, runtime), new RemoveDatabasesFromGroupResponse({}));
  }

  async removeDatabasesFromGroup(request: RemoveDatabasesFromGroupRequest): Promise<RemoveDatabasesFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDatabasesFromGroupWithOptions(request, runtime);
  }

  async removeHostsFromGroupWithOptions(request: RemoveHostsFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveHostsFromGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostGroupId)) {
      query["HostGroupId"] = request.hostGroupId;
    }

    if (!Util.isUnset(request.hostIds)) {
      query["HostIds"] = request.hostIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RemoveHostsFromGroupResponse>(await this.callApi(params, req, runtime), new RemoveHostsFromGroupResponse({}));
  }

  async removeHostsFromGroup(request: RemoveHostsFromGroupRequest): Promise<RemoveHostsFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeHostsFromGroupWithOptions(request, runtime);
  }

  /**
    * You can call this operation to remove one or more users from a user group. When users in a user group are transferred to a new position, resign, or are switched to another user group, you can call this operation to remove the users from the current user group at a time.  
    * ## QPS limit
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request RemoveUsersFromGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroupWithOptions(request: RemoveUsersFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUsersFromGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RemoveUsersFromGroupResponse>(await this.callApi(params, req, runtime), new RemoveUsersFromGroupResponse({}));
  }

  /**
    * You can call this operation to remove one or more users from a user group. When users in a user group are transferred to a new position, resign, or are switched to another user group, you can call this operation to remove the users from the current user group at a time.  
    * ## QPS limit
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request RemoveUsersFromGroupRequest
    * @return RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroup(request: RemoveUsersFromGroupRequest): Promise<RemoveUsersFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersFromGroupWithOptions(request, runtime);
  }

  async renewAssetOperationTokenWithOptions(request: RenewAssetOperationTokenRequest, runtime: $Util.RuntimeOptions): Promise<RenewAssetOperationTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tokenId)) {
      query["TokenId"] = request.tokenId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RenewAssetOperationTokenResponse>(await this.callApi(params, req, runtime), new RenewAssetOperationTokenResponse({}));
  }

  async renewAssetOperationToken(request: RenewAssetOperationTokenRequest): Promise<RenewAssetOperationTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewAssetOperationTokenWithOptions(request, runtime);
  }

  async resetHostAccountCredentialWithOptions(request: ResetHostAccountCredentialRequest, runtime: $Util.RuntimeOptions): Promise<ResetHostAccountCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.credentialType)) {
      query["CredentialType"] = request.credentialType;
    }

    if (!Util.isUnset(request.hostAccountId)) {
      query["HostAccountId"] = request.hostAccountId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ResetHostAccountCredentialResponse>(await this.callApi(params, req, runtime), new ResetHostAccountCredentialResponse({}));
  }

  async resetHostAccountCredential(request: ResetHostAccountCredentialRequest): Promise<ResetHostAccountCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetHostAccountCredentialWithOptions(request, runtime);
  }

  async setPolicyAccessTimeRangeConfigWithOptions(tmpReq: SetPolicyAccessTimeRangeConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetPolicyAccessTimeRangeConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new SetPolicyAccessTimeRangeConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accessTimeRangeConfig)) {
      request.accessTimeRangeConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accessTimeRangeConfig, "AccessTimeRangeConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accessTimeRangeConfigShrink)) {
      query["AccessTimeRangeConfig"] = request.accessTimeRangeConfigShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetPolicyAccessTimeRangeConfigResponse>(await this.callApi(params, req, runtime), new SetPolicyAccessTimeRangeConfigResponse({}));
  }

  async setPolicyAccessTimeRangeConfig(request: SetPolicyAccessTimeRangeConfigRequest): Promise<SetPolicyAccessTimeRangeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPolicyAccessTimeRangeConfigWithOptions(request, runtime);
  }

  async setPolicyApprovalConfigWithOptions(tmpReq: SetPolicyApprovalConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetPolicyApprovalConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new SetPolicyApprovalConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.approvalConfig)) {
      request.approvalConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approvalConfig, "ApprovalConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.approvalConfigShrink)) {
      query["ApprovalConfig"] = request.approvalConfigShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetPolicyApprovalConfigResponse>(await this.callApi(params, req, runtime), new SetPolicyApprovalConfigResponse({}));
  }

  async setPolicyApprovalConfig(request: SetPolicyApprovalConfigRequest): Promise<SetPolicyApprovalConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPolicyApprovalConfigWithOptions(request, runtime);
  }

  async setPolicyAssetScopeWithOptions(request: SetPolicyAssetScopeRequest, runtime: $Util.RuntimeOptions): Promise<SetPolicyAssetScopeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databases)) {
      query["Databases"] = request.databases;
    }

    if (!Util.isUnset(request.hostGroups)) {
      query["HostGroups"] = request.hostGroups;
    }

    if (!Util.isUnset(request.hosts)) {
      query["Hosts"] = request.hosts;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetPolicyAssetScopeResponse>(await this.callApi(params, req, runtime), new SetPolicyAssetScopeResponse({}));
  }

  async setPolicyAssetScope(request: SetPolicyAssetScopeRequest): Promise<SetPolicyAssetScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPolicyAssetScopeWithOptions(request, runtime);
  }

  async setPolicyCommandConfigWithOptions(tmpReq: SetPolicyCommandConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetPolicyCommandConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new SetPolicyCommandConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.commandConfig)) {
      request.commandConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commandConfig, "CommandConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.commandConfigShrink)) {
      query["CommandConfig"] = request.commandConfigShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetPolicyCommandConfigResponse>(await this.callApi(params, req, runtime), new SetPolicyCommandConfigResponse({}));
  }

  async setPolicyCommandConfig(request: SetPolicyCommandConfigRequest): Promise<SetPolicyCommandConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPolicyCommandConfigWithOptions(request, runtime);
  }

  async setPolicyIPAclConfigWithOptions(tmpReq: SetPolicyIPAclConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetPolicyIPAclConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new SetPolicyIPAclConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.IPAclConfig)) {
      request.IPAclConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.IPAclConfig, "IPAclConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.IPAclConfigShrink)) {
      query["IPAclConfig"] = request.IPAclConfigShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetPolicyIPAclConfigResponse>(await this.callApi(params, req, runtime), new SetPolicyIPAclConfigResponse({}));
  }

  async setPolicyIPAclConfig(request: SetPolicyIPAclConfigRequest): Promise<SetPolicyIPAclConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPolicyIPAclConfigWithOptions(request, runtime);
  }

  async setPolicyProtocolConfigWithOptions(tmpReq: SetPolicyProtocolConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetPolicyProtocolConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new SetPolicyProtocolConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.protocolConfig)) {
      request.protocolConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.protocolConfig, "ProtocolConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.protocolConfigShrink)) {
      query["ProtocolConfig"] = request.protocolConfigShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetPolicyProtocolConfigResponse>(await this.callApi(params, req, runtime), new SetPolicyProtocolConfigResponse({}));
  }

  async setPolicyProtocolConfig(request: SetPolicyProtocolConfigRequest): Promise<SetPolicyProtocolConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPolicyProtocolConfigWithOptions(request, runtime);
  }

  async setPolicyUserScopeWithOptions(request: SetPolicyUserScopeRequest, runtime: $Util.RuntimeOptions): Promise<SetPolicyUserScopeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
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
    return $tea.cast<SetPolicyUserScopeResponse>(await this.callApi(params, req, runtime), new SetPolicyUserScopeResponse({}));
  }

  async setPolicyUserScope(request: SetPolicyUserScopeRequest): Promise<SetPolicyUserScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPolicyUserScopeWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    if (!Util.isUnset(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StartInstanceResponse>(await this.callApi(params, req, runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
    * After you call the [LockUsers](~~204591~~) operation to lock one or more users of a bastion host, you can call this operation to unlock the users. After the users are unlocked, the users can perform O\\&M operations by using the bastion host.
    * # Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request UnlockUsersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UnlockUsersResponse
   */
  async unlockUsersWithOptions(request: UnlockUsersRequest, runtime: $Util.RuntimeOptions): Promise<UnlockUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UnlockUsersResponse>(await this.callApi(params, req, runtime), new UnlockUsersResponse({}));
  }

  /**
    * After you call the [LockUsers](~~204591~~) operation to lock one or more users of a bastion host, you can call this operation to unlock the users. After the users are unlocked, the users can perform O\\&M operations by using the bastion host.
    * # Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request UnlockUsersRequest
    * @return UnlockUsersResponse
   */
  async unlockUsers(request: UnlockUsersRequest): Promise<UnlockUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockUsersWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async verifyInstanceADAuthServerWithOptions(request: VerifyInstanceADAuthServerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyInstanceADAuthServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.baseDN)) {
      query["BaseDN"] = request.baseDN;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isSSL)) {
      query["IsSSL"] = request.isSSL;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.server)) {
      query["Server"] = request.server;
    }

    if (!Util.isUnset(request.standbyServer)) {
      query["StandbyServer"] = request.standbyServer;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<VerifyInstanceADAuthServerResponse>(await this.callApi(params, req, runtime), new VerifyInstanceADAuthServerResponse({}));
  }

  async verifyInstanceADAuthServer(request: VerifyInstanceADAuthServerRequest): Promise<VerifyInstanceADAuthServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyInstanceADAuthServerWithOptions(request, runtime);
  }

  async verifyInstanceLDAPAuthServerWithOptions(request: VerifyInstanceLDAPAuthServerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyInstanceLDAPAuthServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.baseDN)) {
      query["BaseDN"] = request.baseDN;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isSSL)) {
      query["IsSSL"] = request.isSSL;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.server)) {
      query["Server"] = request.server;
    }

    if (!Util.isUnset(request.standbyServer)) {
      query["StandbyServer"] = request.standbyServer;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<VerifyInstanceLDAPAuthServerResponse>(await this.callApi(params, req, runtime), new VerifyInstanceLDAPAuthServerResponse({}));
  }

  async verifyInstanceLDAPAuthServer(request: VerifyInstanceLDAPAuthServerRequest): Promise<VerifyInstanceLDAPAuthServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyInstanceLDAPAuthServerWithOptions(request, runtime);
  }

}
