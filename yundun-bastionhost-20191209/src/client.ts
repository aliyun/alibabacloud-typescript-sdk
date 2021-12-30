// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  headers: { [key: string]: string };
  body: AddHostsToGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: AddUsersToGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUsersToGroupResponseBody,
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
  headers: { [key: string]: string };
  body: AttachHostAccountsToHostShareKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: AttachHostAccountsToUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: AttachHostAccountsToUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: AttachHostGroupAccountsToUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: AttachHostGroupAccountsToUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ConfigInstanceSecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ConfigInstanceWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigInstanceWhiteListResponseBody,
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
  headers: { [key: string]: string };
  body: CreateHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: CreateHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: CreateHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: CreateHostShareKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHostShareKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  comment?: string;
  displayName?: string;
  email?: string;
  instanceId?: string;
  mobile?: string;
  mobileCountryCode?: string;
  password?: string;
  regionId?: string;
  source?: string;
  sourceUserId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
      password: 'Password',
      regionId: 'RegionId',
      source: 'Source',
      sourceUserId: 'SourceUserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayName: 'string',
      email: 'string',
      instanceId: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
      password: 'string',
      regionId: 'string',
      source: 'string',
      sourceUserId: 'string',
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
  headers: { [key: string]: string };
  body: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: CreateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserGroupResponseBody,
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
  headers: { [key: string]: string };
  body: DeleteHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DeleteHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DeleteHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DeleteHostShareKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHostShareKeyResponseBody,
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
  headers: { [key: string]: string };
  body: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DeleteUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserGroupResponseBody,
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
  headers: { [key: string]: string };
  body: DescribeInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
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
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
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
  headers: { [key: string]: string };
  body: DetachHostAccountsFromHostShareKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DetachHostAccountsFromUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DetachHostAccountsFromUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DetachHostGroupAccountsFromUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DetachHostGroupAccountsFromUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DisableInstancePublicAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableInstancePublicAccessResponseBody,
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
  headers: { [key: string]: string };
  body: EnableInstancePublicAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableInstancePublicAccessResponseBody,
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
  headers: { [key: string]: string };
  body: GetHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: GetHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: GetHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: GetHostShareKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: GetInstanceADAuthServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: GetInstanceLDAPAuthServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: GetInstanceTwoFactorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceTwoFactorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpgradeInfoRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpgradeInfoResponseBody extends $tea.Model {
  instanceUpgradeInfo?: GetInstanceUpgradeInfoResponseBodyInstanceUpgradeInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceUpgradeInfo: 'InstanceUpgradeInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceUpgradeInfo: GetInstanceUpgradeInfoResponseBodyInstanceUpgradeInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpgradeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceUpgradeInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceUpgradeInfoResponseBody,
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
  headers: { [key: string]: string };
  body: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: GetUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserGroupResponseBody,
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
  headers: { [key: string]: string };
  body: ListHostAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostAccountsForHostShareKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostAccountsForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostAccountsForUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostGroupAccountNamesForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostGroupAccountNamesForUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostGroupsForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostGroupsForUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostShareKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostsForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListHostsForUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHostsForUserGroupResponseBody,
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
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListUserGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserGroupsResponseBody,
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
  headers: { [key: string]: string };
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: LockUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LockUsersResponseBody,
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
  headers: { [key: string]: string };
  body: ModifyHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ModifyHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ModifyHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ModifyHostShareKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ModifyHostsActiveAddressTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ModifyHostsPortResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ModifyInstanceADAuthServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ModifyInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ModifyInstanceLDAPAuthServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceLDAPAuthServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTwoFactorRequest extends $tea.Model {
  dingTalkConfig?: string;
  enableTwoFactor?: string;
  instanceId?: string;
  messageLanguage?: string;
  regionId?: string;
  skipTwoFactorTime?: string;
  twoFactorMethods?: string;
  static names(): { [key: string]: string } {
    return {
      dingTalkConfig: 'DingTalkConfig',
      enableTwoFactor: 'EnableTwoFactor',
      instanceId: 'InstanceId',
      messageLanguage: 'MessageLanguage',
      regionId: 'RegionId',
      skipTwoFactorTime: 'SkipTwoFactorTime',
      twoFactorMethods: 'TwoFactorMethods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingTalkConfig: 'string',
      enableTwoFactor: 'string',
      instanceId: 'string',
      messageLanguage: 'string',
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
  headers: { [key: string]: string };
  body: ModifyInstanceTwoFactorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceTwoFactorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceUpgradePeriodRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  regionId?: string;
  upgradeMode?: string;
  upgradeStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      regionId: 'RegionId',
      upgradeMode: 'UpgradeMode',
      upgradeStartTime: 'UpgradeStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      regionId: 'string',
      upgradeMode: 'string',
      upgradeStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceUpgradePeriodResponseBody extends $tea.Model {
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

export class ModifyInstanceUpgradePeriodResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceUpgradePeriodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceUpgradePeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserRequest extends $tea.Model {
  comment?: string;
  displayName?: string;
  email?: string;
  instanceId?: string;
  mobile?: string;
  mobileCountryCode?: string;
  password?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
      password: 'Password',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayName: 'string',
      email: 'string',
      instanceId: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
      password: 'string',
      regionId: 'string',
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
  headers: { [key: string]: string };
  body: ModifyUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ModifyUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUserGroupResponseBody,
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
  headers: { [key: string]: string };
  body: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveResourceGroupResponseBody,
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
  headers: { [key: string]: string };
  body: RemoveHostsFromGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: RemoveUsersFromGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveUsersFromGroupResponseBody,
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
  headers: { [key: string]: string };
  body: ResetHostAccountCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetHostAccountCredentialResponseBody,
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
  headers: { [key: string]: string };
  body: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: UnlockUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceImageVersionRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceImageVersionResponseBody extends $tea.Model {
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

export class UpgradeInstanceImageVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeInstanceImageVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeInstanceImageVersionResponseBody,
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
  headers: { [key: string]: string };
  body: VerifyInstanceADAuthServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: VerifyInstanceLDAPAuthServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyInstanceLDAPAuthServerResponseBody,
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

export class GetInstanceTwoFactorResponseBodyConfigDingTalkConfig extends $tea.Model {
  agentId?: string;
  appKey?: string;
  hasAppSecret?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      appKey: 'AppKey',
      hasAppSecret: 'HasAppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appKey: 'string',
      hasAppSecret: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTwoFactorResponseBodyConfig extends $tea.Model {
  dingTalkConfig?: GetInstanceTwoFactorResponseBodyConfigDingTalkConfig;
  enableTwoFactor?: boolean;
  messageLanguage?: string;
  skipTwoFactorTime?: number;
  twoFactorMethods?: string[];
  static names(): { [key: string]: string } {
    return {
      dingTalkConfig: 'DingTalkConfig',
      enableTwoFactor: 'EnableTwoFactor',
      messageLanguage: 'MessageLanguage',
      skipTwoFactorTime: 'SkipTwoFactorTime',
      twoFactorMethods: 'TwoFactorMethods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingTalkConfig: GetInstanceTwoFactorResponseBodyConfigDingTalkConfig,
      enableTwoFactor: 'boolean',
      messageLanguage: 'string',
      skipTwoFactorTime: 'number',
      twoFactorMethods: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpgradeInfoResponseBodyInstanceUpgradeInfoCandidatePeriodList extends $tea.Model {
  candidateEndTime?: number;
  candidateStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      candidateEndTime: 'CandidateEndTime',
      candidateStartTime: 'CandidateStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateEndTime: 'number',
      candidateStartTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpgradeInfoResponseBodyInstanceUpgradeInfoInvalidPeriodList extends $tea.Model {
  invalidEndTime?: number;
  invalidStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      invalidEndTime: 'InvalidEndTime',
      invalidStartTime: 'InvalidStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidEndTime: 'number',
      invalidStartTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpgradeInfoResponseBodyInstanceUpgradeInfo extends $tea.Model {
  aliUid?: number;
  candidatePeriodList?: GetInstanceUpgradeInfoResponseBodyInstanceUpgradeInfoCandidatePeriodList[];
  imageVersion?: string;
  instanceId?: string;
  invalidPeriodList?: GetInstanceUpgradeInfoResponseBodyInstanceUpgradeInfoInvalidPeriodList[];
  latestStartTime?: number;
  operable?: boolean;
  periodInterval?: number;
  upgradeEndTime?: number;
  upgradeMode?: string;
  upgradeStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      candidatePeriodList: 'CandidatePeriodList',
      imageVersion: 'ImageVersion',
      instanceId: 'InstanceId',
      invalidPeriodList: 'InvalidPeriodList',
      latestStartTime: 'LatestStartTime',
      operable: 'Operable',
      periodInterval: 'PeriodInterval',
      upgradeEndTime: 'UpgradeEndTime',
      upgradeMode: 'UpgradeMode',
      upgradeStartTime: 'UpgradeStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      candidatePeriodList: { 'type': 'array', 'itemType': GetInstanceUpgradeInfoResponseBodyInstanceUpgradeInfoCandidatePeriodList },
      imageVersion: 'string',
      instanceId: 'string',
      invalidPeriodList: { 'type': 'array', 'itemType': GetInstanceUpgradeInfoResponseBodyInstanceUpgradeInfoInvalidPeriodList },
      latestStartTime: 'number',
      operable: 'boolean',
      periodInterval: 'number',
      upgradeEndTime: 'number',
      upgradeMode: 'string',
      upgradeStartTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  comment?: string;
  displayName?: string;
  email?: string;
  mobile?: string;
  mobileCountryCode?: string;
  source?: string;
  sourceUserId?: string;
  userId?: string;
  userName?: string;
  userState?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayName: 'DisplayName',
      email: 'Email',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
      source: 'Source',
      sourceUserId: 'SourceUserId',
      userId: 'UserId',
      userName: 'UserName',
      userState: 'UserState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayName: 'string',
      email: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
      source: 'string',
      sourceUserId: 'string',
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

export class ListUsersResponseBodyUsers extends $tea.Model {
  comment?: string;
  displayName?: string;
  email?: string;
  mobile?: string;
  mobileCountryCode?: string;
  source?: string;
  sourceUserId?: string;
  userId?: string;
  userName?: string;
  userState?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayName: 'DisplayName',
      email: 'Email',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
      source: 'Source',
      sourceUserId: 'SourceUserId',
      userId: 'UserId',
      userName: 'UserName',
      userState: 'UserState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayName: 'string',
      email: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
      source: 'string',
      sourceUserId: 'string',
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

  async addHostsToGroup(request: AddHostsToGroupRequest): Promise<AddHostsToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addHostsToGroupWithOptions(request, runtime);
  }

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

  async addUsersToGroup(request: AddUsersToGroupRequest): Promise<AddUsersToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUsersToGroupWithOptions(request, runtime);
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

  async configInstanceWhiteList(request: ConfigInstanceWhiteListRequest): Promise<ConfigInstanceWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceWhiteListWithOptions(request, runtime);
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

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.mobileCountryCode)) {
      query["MobileCountryCode"] = request.mobileCountryCode;
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

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

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

  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
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

  async deleteHostAccount(request: DeleteHostAccountRequest): Promise<DeleteHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHostAccountWithOptions(request, runtime);
  }

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

  async getInstanceTwoFactor(request: GetInstanceTwoFactorRequest): Promise<GetInstanceTwoFactorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceTwoFactorWithOptions(request, runtime);
  }

  async getInstanceUpgradeInfoWithOptions(request: GetInstanceUpgradeInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceUpgradeInfoResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "GetInstanceUpgradeInfo",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceUpgradeInfoResponse>(await this.callApi(params, req, runtime), new GetInstanceUpgradeInfoResponse({}));
  }

  async getInstanceUpgradeInfo(request: GetInstanceUpgradeInfoRequest): Promise<GetInstanceUpgradeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceUpgradeInfoWithOptions(request, runtime);
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

  async lockUsers(request: LockUsersRequest): Promise<LockUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockUsersWithOptions(request, runtime);
  }

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
    if (!Util.isUnset(request.dingTalkConfig)) {
      query["DingTalkConfig"] = request.dingTalkConfig;
    }

    if (!Util.isUnset(request.enableTwoFactor)) {
      query["EnableTwoFactor"] = request.enableTwoFactor;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.messageLanguage)) {
      query["MessageLanguage"] = request.messageLanguage;
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

  async modifyInstanceUpgradePeriodWithOptions(request: ModifyInstanceUpgradePeriodRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceUpgradePeriodResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.upgradeMode)) {
      query["UpgradeMode"] = request.upgradeMode;
    }

    if (!Util.isUnset(request.upgradeStartTime)) {
      query["UpgradeStartTime"] = request.upgradeStartTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceUpgradePeriod",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceUpgradePeriodResponse>(await this.callApi(params, req, runtime), new ModifyInstanceUpgradePeriodResponse({}));
  }

  async modifyInstanceUpgradePeriod(request: ModifyInstanceUpgradePeriodRequest): Promise<ModifyInstanceUpgradePeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceUpgradePeriodWithOptions(request, runtime);
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

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.mobileCountryCode)) {
      query["MobileCountryCode"] = request.mobileCountryCode;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
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

  async removeUsersFromGroup(request: RemoveUsersFromGroupRequest): Promise<RemoveUsersFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersFromGroupWithOptions(request, runtime);
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

  async upgradeInstanceImageVersionWithOptions(request: UpgradeInstanceImageVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceImageVersionResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "UpgradeInstanceImageVersion",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeInstanceImageVersionResponse>(await this.callApi(params, req, runtime), new UpgradeInstanceImageVersionResponse({}));
  }

  async upgradeInstanceImageVersion(request: UpgradeInstanceImageVersionRequest): Promise<UpgradeInstanceImageVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeInstanceImageVersionWithOptions(request, runtime);
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
