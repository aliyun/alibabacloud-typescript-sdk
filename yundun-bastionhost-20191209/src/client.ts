// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddHostsToGroupRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostGroupId?: string;
  hostIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostGroupId: 'HostGroupId',
      hostIds: 'HostIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostGroupId: 'string',
      hostIds: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class AttachHostAccountsToUserRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  hosts?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
      hosts: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  hosts?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
      hosts: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  hostGroups?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
      hostGroups: 'HostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
      hostGroups: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  hostGroups?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      hostGroups: 'HostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
      hostGroups: 'string',
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
  sourceIp?: string;
  lang?: string;
  authorizedSecurityGroups?: string[];
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      authorizedSecurityGroups: 'AuthorizedSecurityGroups',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      authorizedSecurityGroups: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceSecurityGroupsResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
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
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  regionId?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
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
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostPrivateAddress?: string;
  hostPublicAddress?: string;
  activeAddressType?: string;
  hostName?: string;
  source?: string;
  OSType?: string;
  comment?: string;
  sourceInstanceId?: string;
  instanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      activeAddressType: 'ActiveAddressType',
      hostName: 'HostName',
      source: 'Source',
      OSType: 'OSType',
      comment: 'Comment',
      sourceInstanceId: 'SourceInstanceId',
      instanceRegionId: 'InstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      activeAddressType: 'string',
      hostName: 'string',
      source: 'string',
      OSType: 'string',
      comment: 'string',
      sourceInstanceId: 'string',
      instanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostResponseBody extends $tea.Model {
  requestId?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostId?: string;
  protocolName?: string;
  hostAccountName?: string;
  password?: string;
  privateKey?: string;
  passPhrase?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostId: 'HostId',
      protocolName: 'ProtocolName',
      hostAccountName: 'HostAccountName',
      password: 'Password',
      privateKey: 'PrivateKey',
      passPhrase: 'PassPhrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostId: 'string',
      protocolName: 'string',
      hostAccountName: 'string',
      password: 'string',
      privateKey: 'string',
      passPhrase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAccountResponseBody extends $tea.Model {
  requestId?: string;
  hostAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostAccountId: 'HostAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostAccountId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostGroupName?: string;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostGroupName: 'HostGroupName',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostGroupName: 'string',
      comment: 'string',
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

export class CreateUserRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  source?: string;
  userName?: string;
  password?: string;
  displayName?: string;
  comment?: string;
  email?: string;
  mobile?: string;
  sourceUserId?: string;
  mobileCountryCode?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      source: 'Source',
      userName: 'UserName',
      password: 'Password',
      displayName: 'DisplayName',
      comment: 'Comment',
      email: 'Email',
      mobile: 'Mobile',
      sourceUserId: 'SourceUserId',
      mobileCountryCode: 'MobileCountryCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      source: 'string',
      userName: 'string',
      password: 'string',
      displayName: 'string',
      comment: 'string',
      email: 'string',
      mobile: 'string',
      sourceUserId: 'string',
      mobileCountryCode: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupName?: string;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupName: 'UserGroupName',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupName: 'string',
      comment: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostAccountId: 'HostAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostAccountId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostGroupId: 'string',
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

export class DeleteUserRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  lang?: string;
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  instanceAttribute?: DescribeInstanceAttributeResponseBodyInstanceAttribute;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceAttribute: 'InstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceAttribute: DescribeInstanceAttributeResponseBodyInstanceAttribute,
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
  sourceIp?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  instanceStatus?: string;
  resourceGroupId?: string;
  instanceId?: string[];
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      instanceStatus: 'InstanceStatus',
      resourceGroupId: 'ResourceGroupId',
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      instanceStatus: 'string',
      resourceGroupId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      totalCount: 'number',
      requestId: 'string',
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
  sourceIp?: string;
  lang?: string;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
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

export class DetachHostAccountsFromUserRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  hosts?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
      hosts: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  hosts?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
      hosts: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  hostGroups?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
      hostGroups: 'HostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
      hostGroups: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  hostGroups?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      hostGroups: 'HostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
      hostGroups: 'string',
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
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInstancePublicAccessResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
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
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstancePublicAccessResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostResponseBody extends $tea.Model {
  requestId?: string;
  host?: GetHostResponseBodyHost;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      host: GetHostResponseBodyHost,
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostAccountId: 'HostAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostAccountResponseBody extends $tea.Model {
  requestId?: string;
  hostAccount?: GetHostAccountResponseBodyHostAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostAccount: 'HostAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostAccount: GetHostAccountResponseBodyHostAccount,
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  hostGroup?: GetHostGroupResponseBodyHostGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostGroup: 'HostGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostGroup: GetHostGroupResponseBodyHostGroup,
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

export class GetUserRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  user?: GetUserResponseBodyUser;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: GetUserResponseBodyUser,
      requestId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostId?: string;
  pageNumber?: string;
  pageSize?: string;
  hostAccountName?: string;
  protocolName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostId: 'HostId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      hostAccountName: 'HostAccountName',
      protocolName: 'ProtocolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      hostAccountName: 'string',
      protocolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  hostAccounts?: ListHostAccountsResponseBodyHostAccounts[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      hostAccounts: 'HostAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      hostAccounts: { 'type': 'array', 'itemType': ListHostAccountsResponseBodyHostAccounts },
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

export class ListHostAccountsForUserRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  hostId?: string;
  pageNumber?: string;
  pageSize?: string;
  hostAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
      hostId: 'HostId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      hostAccountName: 'HostAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
      hostId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      hostAccountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  hostAccounts?: ListHostAccountsForUserResponseBodyHostAccounts[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      hostAccounts: 'HostAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      hostAccounts: { 'type': 'array', 'itemType': ListHostAccountsForUserResponseBodyHostAccounts },
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  hostId?: string;
  pageNumber?: string;
  pageSize?: string;
  hostAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      hostId: 'HostId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      hostAccountName: 'HostAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
      hostId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      hostAccountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserGroupResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  hostAccounts?: ListHostAccountsForUserGroupResponseBodyHostAccounts[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      hostAccounts: 'HostAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      hostAccounts: { 'type': 'array', 'itemType': ListHostAccountsForUserGroupResponseBodyHostAccounts },
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupAccountNamesForUserResponseBody extends $tea.Model {
  requestId?: string;
  hostAccountNames?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostAccountNames: 'HostAccountNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostAccountNames: { 'type': 'array', 'itemType': 'string' },
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupAccountNamesForUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  hostAccountNames?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostAccountNames: 'HostAccountNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostAccountNames: { 'type': 'array', 'itemType': 'string' },
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  pageNumber?: string;
  pageSize?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  hostGroups?: ListHostGroupsResponseBodyHostGroups[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      hostGroups: 'HostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      hostGroups: { 'type': 'array', 'itemType': ListHostGroupsResponseBodyHostGroups },
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  mode?: string;
  userId?: string;
  pageNumber?: string;
  pageSize?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      mode: 'Mode',
      userId: 'UserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      mode: 'string',
      userId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsForUserResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  hostGroups?: ListHostGroupsForUserResponseBodyHostGroups[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      hostGroups: 'HostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      hostGroups: { 'type': 'array', 'itemType': ListHostGroupsForUserResponseBodyHostGroups },
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  mode?: string;
  userGroupId?: string;
  pageNumber?: string;
  pageSize?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      mode: 'Mode',
      userGroupId: 'UserGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      mode: 'string',
      userGroupId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsForUserGroupResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  hostGroups?: ListHostGroupsForUserGroupResponseBodyHostGroups[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      hostGroups: 'HostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      hostGroups: { 'type': 'array', 'itemType': ListHostGroupsForUserGroupResponseBodyHostGroups },
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

export class ListHostsRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  pageNumber?: string;
  pageSize?: string;
  OSType?: string;
  hostName?: string;
  hostAddress?: string;
  source?: string;
  sourceInstanceId?: string;
  sourceInstanceState?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      OSType: 'OSType',
      hostName: 'HostName',
      hostAddress: 'HostAddress',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      OSType: 'string',
      hostName: 'string',
      hostAddress: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceState: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsResponseBody extends $tea.Model {
  hosts?: ListHostsResponseBodyHosts[];
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListHostsResponseBodyHosts },
      totalCount: 'number',
      requestId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  mode?: string;
  userId?: string;
  pageNumber?: string;
  pageSize?: string;
  hostAddress?: string;
  hostName?: string;
  OSType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      mode: 'Mode',
      userId: 'UserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      hostAddress: 'HostAddress',
      hostName: 'HostName',
      OSType: 'OSType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      mode: 'string',
      userId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      hostAddress: 'string',
      hostName: 'string',
      OSType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserResponseBody extends $tea.Model {
  hosts?: ListHostsForUserResponseBodyHosts[];
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListHostsForUserResponseBodyHosts },
      totalCount: 'number',
      requestId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  mode?: string;
  userGroupId?: string;
  pageNumber?: string;
  pageSize?: string;
  hostAddress?: string;
  hostName?: string;
  OSType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      mode: 'Mode',
      userGroupId: 'UserGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      hostAddress: 'HostAddress',
      hostName: 'HostName',
      OSType: 'OSType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      mode: 'string',
      userGroupId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      hostAddress: 'string',
      hostName: 'string',
      OSType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserGroupResponseBody extends $tea.Model {
  hosts?: ListHostsForUserGroupResponseBodyHosts[];
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListHostsForUserGroupResponseBodyHosts },
      totalCount: 'number',
      requestId: 'string',
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
  sourceIp?: string;
  lang?: string;
  regionId?: string;
  resourceType?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      regionId: 'string',
      resourceType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  tagKeys?: ListTagKeysResponseBodyTagKeys[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTagKeys },
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
  sourceIp?: string;
  lang?: string;
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  pageNumber?: string;
  pageSize?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  userGroups?: ListUserGroupsResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  pageNumber?: string;
  pageSize?: string;
  userName?: string;
  displayName?: string;
  source?: string;
  mobile?: string;
  userState?: string;
  sourceUserId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userName: 'UserName',
      displayName: 'DisplayName',
      source: 'Source',
      mobile: 'Mobile',
      userState: 'UserState',
      sourceUserId: 'SourceUserId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      userName: 'string',
      displayName: 'string',
      source: 'string',
      mobile: 'string',
      userState: 'string',
      sourceUserId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  users?: ListUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostId?: string;
  hostPrivateAddress?: string;
  hostPublicAddress?: string;
  OSType?: string;
  hostName?: string;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostId: 'HostId',
      hostPrivateAddress: 'HostPrivateAddress',
      hostPublicAddress: 'HostPublicAddress',
      OSType: 'OSType',
      hostName: 'HostName',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostId: 'string',
      hostPrivateAddress: 'string',
      hostPublicAddress: 'string',
      OSType: 'string',
      hostName: 'string',
      comment: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostAccountId?: string;
  hostAccountName?: string;
  password?: string;
  privateKey?: string;
  passPhrase?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostAccountId: 'HostAccountId',
      hostAccountName: 'HostAccountName',
      password: 'Password',
      privateKey: 'PrivateKey',
      passPhrase: 'PassPhrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostAccountId: 'string',
      hostAccountName: 'string',
      password: 'string',
      privateKey: 'string',
      passPhrase: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
      comment: 'string',
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

export class ModifyHostsActiveAddressTypeRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostIds?: string;
  activeAddressType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostIds: 'HostIds',
      activeAddressType: 'ActiveAddressType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostIds: 'string',
      activeAddressType: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostIds?: string;
  protocolName?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostIds: 'HostIds',
      protocolName: 'ProtocolName',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostIds: 'string',
      protocolName: 'string',
      port: 'string',
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

export class ModifyInstanceAttributeRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  description?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      description: 'string',
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

export class ModifyUserRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userId?: string;
  password?: string;
  displayName?: string;
  comment?: string;
  email?: string;
  mobile?: string;
  mobileCountryCode?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
      password: 'Password',
      displayName: 'DisplayName',
      comment: 'Comment',
      email: 'Email',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
      password: 'string',
      displayName: 'string',
      comment: 'string',
      email: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  userGroupName?: string;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
      comment: 'string',
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
  sourceIp?: string;
  lang?: string;
  resourceId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceId: 'ResourceId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      regionId: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostGroupId?: string;
  hostIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostGroupId: 'HostGroupId',
      hostIds: 'HostIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostGroupId: 'string',
      hostIds: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userGroupId?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  hostAccountId?: string;
  credentialType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      hostAccountId: 'HostAccountId',
      credentialType: 'CredentialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
      hostAccountId: 'string',
      credentialType: 'string',
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
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  vswitchId?: string;
  regionId?: string;
  instanceSecurityGroups?: string[];
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      vswitchId: 'VswitchId',
      regionId: 'RegionId',
      instanceSecurityGroups: 'InstanceSecurityGroups',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      vswitchId: 'string',
      regionId: 'string',
      instanceSecurityGroups: { 'type': 'array', 'itemType': 'string' },
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
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
  sourceIp?: string;
  lang?: string;
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  lang?: string;
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      regionId: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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

export class AddHostsToGroupResponseBodyResults extends $tea.Model {
  code?: string;
  message?: string;
  hostGroupId?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostGroupId: 'HostGroupId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostGroupId: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToGroupResponseBodyResults extends $tea.Model {
  userGroupId?: string;
  userId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userId: 'UserId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserResponseBodyResultsHostAccounts extends $tea.Model {
  code?: string;
  message?: string;
  hostAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostAccountId: 'HostAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserResponseBodyResults extends $tea.Model {
  hostAccounts?: AttachHostAccountsToUserResponseBodyResultsHostAccounts[];
  userId?: string;
  code?: string;
  message?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccounts: 'HostAccounts',
      userId: 'UserId',
      code: 'Code',
      message: 'Message',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccounts: { 'type': 'array', 'itemType': AttachHostAccountsToUserResponseBodyResultsHostAccounts },
      userId: 'string',
      code: 'string',
      message: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserGroupResponseBodyResultsHostAccounts extends $tea.Model {
  code?: string;
  message?: string;
  hostAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostAccountId: 'HostAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToUserGroupResponseBodyResults extends $tea.Model {
  userGroupId?: string;
  hostAccounts?: AttachHostAccountsToUserGroupResponseBodyResultsHostAccounts[];
  code?: string;
  message?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      hostAccounts: 'HostAccounts',
      code: 'Code',
      message: 'Message',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      hostAccounts: { 'type': 'array', 'itemType': AttachHostAccountsToUserGroupResponseBodyResultsHostAccounts },
      code: 'string',
      message: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserResponseBodyResultsHostAccountNames extends $tea.Model {
  code?: string;
  message?: string;
  hostAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostAccountName: 'HostAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostAccountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserResponseBodyResults extends $tea.Model {
  hostAccountNames?: AttachHostGroupAccountsToUserResponseBodyResultsHostAccountNames[];
  userId?: string;
  code?: string;
  message?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountNames: 'HostAccountNames',
      userId: 'UserId',
      code: 'Code',
      message: 'Message',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountNames: { 'type': 'array', 'itemType': AttachHostGroupAccountsToUserResponseBodyResultsHostAccountNames },
      userId: 'string',
      code: 'string',
      message: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserGroupResponseBodyResultsHostAccountNames extends $tea.Model {
  code?: string;
  message?: string;
  hostAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostAccountName: 'HostAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostAccountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserGroupResponseBodyResults extends $tea.Model {
  hostAccountNames?: AttachHostGroupAccountsToUserGroupResponseBodyResultsHostAccountNames[];
  userGroupId?: string;
  code?: string;
  message?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountNames: 'HostAccountNames',
      userGroupId: 'UserGroupId',
      code: 'Code',
      message: 'Message',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountNames: { 'type': 'array', 'itemType': AttachHostGroupAccountsToUserGroupResponseBodyResultsHostAccountNames },
      userGroupId: 'string',
      code: 'string',
      message: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInstanceAttributePorts extends $tea.Model {
  standardPort?: number;
  customPort?: number;
  static names(): { [key: string]: string } {
    return {
      standardPort: 'StandardPort',
      customPort: 'CustomPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardPort: 'number',
      customPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInstanceAttribute extends $tea.Model {
  vpcId?: string;
  vswitchId?: string;
  ports?: DescribeInstanceAttributeResponseBodyInstanceAttributePorts[];
  authorizedSecurityGroups?: string[];
  description?: string;
  privateExportIps?: string[];
  privateWhiteList?: string[];
  expireTime?: number;
  eniInstanceId?: string;
  modifyPasswordModule?: string;
  internetEndpoint?: string;
  instanceId?: string;
  securityGroupIds?: string[];
  regionId?: string;
  intranetEndpoint?: string;
  publicExportIps?: string[];
  startTime?: number;
  publicWhiteList?: string[];
  webTerminalModule?: string;
  instanceStatus?: string;
  licenseCode?: string;
  publicIps?: string[];
  publicNetworkAccess?: boolean;
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      ports: 'Ports',
      authorizedSecurityGroups: 'AuthorizedSecurityGroups',
      description: 'Description',
      privateExportIps: 'PrivateExportIps',
      privateWhiteList: 'PrivateWhiteList',
      expireTime: 'ExpireTime',
      eniInstanceId: 'EniInstanceId',
      modifyPasswordModule: 'ModifyPasswordModule',
      internetEndpoint: 'InternetEndpoint',
      instanceId: 'InstanceId',
      securityGroupIds: 'SecurityGroupIds',
      regionId: 'RegionId',
      intranetEndpoint: 'IntranetEndpoint',
      publicExportIps: 'PublicExportIps',
      startTime: 'StartTime',
      publicWhiteList: 'PublicWhiteList',
      webTerminalModule: 'WebTerminalModule',
      instanceStatus: 'InstanceStatus',
      licenseCode: 'LicenseCode',
      publicIps: 'PublicIps',
      publicNetworkAccess: 'PublicNetworkAccess',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vswitchId: 'string',
      ports: { 'type': 'array', 'itemType': DescribeInstanceAttributeResponseBodyInstanceAttributePorts },
      authorizedSecurityGroups: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      privateExportIps: { 'type': 'array', 'itemType': 'string' },
      privateWhiteList: { 'type': 'array', 'itemType': 'string' },
      expireTime: 'number',
      eniInstanceId: 'string',
      modifyPasswordModule: 'string',
      internetEndpoint: 'string',
      instanceId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      intranetEndpoint: 'string',
      publicExportIps: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      publicWhiteList: { 'type': 'array', 'itemType': 'string' },
      webTerminalModule: 'string',
      instanceStatus: 'string',
      licenseCode: 'string',
      publicIps: { 'type': 'array', 'itemType': 'string' },
      publicNetworkAccess: 'boolean',
      storage: 'number',
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
  vpcId?: string;
  vswitchId?: string;
  imageVersion?: string;
  planCode?: string;
  description?: string;
  expireTime?: number;
  legacy?: boolean;
  internetEndpoint?: string;
  instanceId?: string;
  regionId?: string;
  intranetEndpoint?: string;
  startTime?: number;
  instanceStatus?: string;
  licenseCode?: string;
  publicNetworkAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      imageVersion: 'ImageVersion',
      planCode: 'PlanCode',
      description: 'Description',
      expireTime: 'ExpireTime',
      legacy: 'Legacy',
      internetEndpoint: 'InternetEndpoint',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      intranetEndpoint: 'IntranetEndpoint',
      startTime: 'StartTime',
      instanceStatus: 'InstanceStatus',
      licenseCode: 'LicenseCode',
      publicNetworkAccess: 'PublicNetworkAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vswitchId: 'string',
      imageVersion: 'string',
      planCode: 'string',
      description: 'string',
      expireTime: 'number',
      legacy: 'boolean',
      internetEndpoint: 'string',
      instanceId: 'string',
      regionId: 'string',
      intranetEndpoint: 'string',
      startTime: 'number',
      instanceStatus: 'string',
      licenseCode: 'string',
      publicNetworkAccess: 'boolean',
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

export class DetachHostAccountsFromUserResponseBodyResultsHostAccounts extends $tea.Model {
  code?: string;
  message?: string;
  hostAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostAccountId: 'HostAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserResponseBodyResults extends $tea.Model {
  hostAccounts?: DetachHostAccountsFromUserResponseBodyResultsHostAccounts[];
  userId?: string;
  code?: string;
  message?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccounts: 'HostAccounts',
      userId: 'UserId',
      code: 'Code',
      message: 'Message',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccounts: { 'type': 'array', 'itemType': DetachHostAccountsFromUserResponseBodyResultsHostAccounts },
      userId: 'string',
      code: 'string',
      message: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserGroupResponseBodyResultsHostAccounts extends $tea.Model {
  code?: string;
  message?: string;
  hostAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostAccountId: 'HostAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserGroupResponseBodyResults extends $tea.Model {
  userGroupId?: string;
  hostAccounts?: DetachHostAccountsFromUserGroupResponseBodyResultsHostAccounts[];
  code?: string;
  message?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      hostAccounts: 'HostAccounts',
      code: 'Code',
      message: 'Message',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      hostAccounts: { 'type': 'array', 'itemType': DetachHostAccountsFromUserGroupResponseBodyResultsHostAccounts },
      code: 'string',
      message: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserResponseBodyResultsHostAccountNames extends $tea.Model {
  code?: string;
  message?: string;
  hostAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostAccountName: 'HostAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostAccountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserResponseBodyResults extends $tea.Model {
  hostAccountNames?: DetachHostGroupAccountsFromUserResponseBodyResultsHostAccountNames[];
  userId?: string;
  code?: string;
  message?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountNames: 'HostAccountNames',
      userId: 'UserId',
      code: 'Code',
      message: 'Message',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountNames: { 'type': 'array', 'itemType': DetachHostGroupAccountsFromUserResponseBodyResultsHostAccountNames },
      userId: 'string',
      code: 'string',
      message: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserGroupResponseBodyResultsHostAccountNames extends $tea.Model {
  code?: string;
  message?: string;
  hostAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostAccountName: 'HostAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostAccountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostGroupAccountsFromUserGroupResponseBodyResults extends $tea.Model {
  hostAccountNames?: DetachHostGroupAccountsFromUserGroupResponseBodyResultsHostAccountNames[];
  userGroupId?: string;
  code?: string;
  message?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountNames: 'HostAccountNames',
      userGroupId: 'UserGroupId',
      code: 'Code',
      message: 'Message',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountNames: { 'type': 'array', 'itemType': DetachHostGroupAccountsFromUserGroupResponseBodyResultsHostAccountNames },
      userGroupId: 'string',
      code: 'string',
      message: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostResponseBodyHostProtocols extends $tea.Model {
  protocolName?: string;
  hostFingerPrint?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      protocolName: 'ProtocolName',
      hostFingerPrint: 'HostFingerPrint',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocolName: 'string',
      hostFingerPrint: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostResponseBodyHost extends $tea.Model {
  comment?: string;
  activeAddressType?: string;
  hostPublicAddress?: string;
  protocols?: GetHostResponseBodyHostProtocols[];
  hostName?: string;
  source?: string;
  hostPrivateAddress?: string;
  OSType?: string;
  hostId?: string;
  sourceInstanceState?: string;
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      activeAddressType: 'ActiveAddressType',
      hostPublicAddress: 'HostPublicAddress',
      protocols: 'Protocols',
      hostName: 'HostName',
      source: 'Source',
      hostPrivateAddress: 'HostPrivateAddress',
      OSType: 'OSType',
      hostId: 'HostId',
      sourceInstanceState: 'SourceInstanceState',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      activeAddressType: 'string',
      hostPublicAddress: 'string',
      protocols: { 'type': 'array', 'itemType': GetHostResponseBodyHostProtocols },
      hostName: 'string',
      source: 'string',
      hostPrivateAddress: 'string',
      OSType: 'string',
      hostId: 'string',
      sourceInstanceState: 'string',
      sourceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostAccountResponseBodyHostAccount extends $tea.Model {
  hasPassword?: boolean;
  privateKeyFingerprint?: string;
  protocolName?: string;
  hostAccountName?: string;
  hostAccountId?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hasPassword: 'HasPassword',
      privateKeyFingerprint: 'PrivateKeyFingerprint',
      protocolName: 'ProtocolName',
      hostAccountName: 'HostAccountName',
      hostAccountId: 'HostAccountId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPassword: 'boolean',
      privateKeyFingerprint: 'string',
      protocolName: 'string',
      hostAccountName: 'string',
      hostAccountId: 'string',
      hostId: 'string',
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

export class GetUserResponseBodyUser extends $tea.Model {
  displayName?: string;
  comment?: string;
  email?: string;
  mobile?: string;
  mobileCountryCode?: string;
  userId?: string;
  source?: string;
  userName?: string;
  userState?: string[];
  sourceUserId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      comment: 'Comment',
      email: 'Email',
      mobile: 'Mobile',
      mobileCountryCode: 'MobileCountryCode',
      userId: 'UserId',
      source: 'Source',
      userName: 'UserName',
      userState: 'UserState',
      sourceUserId: 'SourceUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      comment: 'string',
      email: 'string',
      mobile: 'string',
      mobileCountryCode: 'string',
      userId: 'string',
      source: 'string',
      userName: 'string',
      userState: { 'type': 'array', 'itemType': 'string' },
      sourceUserId: 'string',
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
  privateKeyFingerprint?: string;
  protocolName?: string;
  hostAccountName?: string;
  hostAccountId?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hasPassword: 'HasPassword',
      privateKeyFingerprint: 'PrivateKeyFingerprint',
      protocolName: 'ProtocolName',
      hostAccountName: 'HostAccountName',
      hostAccountId: 'HostAccountId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPassword: 'boolean',
      privateKeyFingerprint: 'string',
      protocolName: 'string',
      hostAccountName: 'string',
      hostAccountId: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserResponseBodyHostAccounts extends $tea.Model {
  isAuthorized?: boolean;
  protocolName?: string;
  hostAccountName?: string;
  hostAccountId?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      isAuthorized: 'IsAuthorized',
      protocolName: 'ProtocolName',
      hostAccountName: 'HostAccountName',
      hostAccountId: 'HostAccountId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAuthorized: 'boolean',
      protocolName: 'string',
      hostAccountName: 'string',
      hostAccountId: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostAccountsForUserGroupResponseBodyHostAccounts extends $tea.Model {
  isAuthorized?: boolean;
  protocolName?: string;
  hostAccountName?: string;
  hostAccountId?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      isAuthorized: 'IsAuthorized',
      protocolName: 'ProtocolName',
      hostAccountName: 'HostAccountName',
      hostAccountId: 'HostAccountId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAuthorized: 'boolean',
      protocolName: 'string',
      hostAccountName: 'string',
      hostAccountId: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsResponseBodyHostGroups extends $tea.Model {
  memberCount?: number;
  comment?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      memberCount: 'MemberCount',
      comment: 'Comment',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberCount: 'number',
      comment: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
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

export class ListHostsResponseBodyHosts extends $tea.Model {
  comment?: string;
  activeAddressType?: string;
  hostPublicAddress?: string;
  hostName?: string;
  hostAccountCount?: number;
  source?: string;
  hostPrivateAddress?: string;
  OSType?: string;
  hostId?: string;
  sourceInstanceState?: string;
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      activeAddressType: 'ActiveAddressType',
      hostPublicAddress: 'HostPublicAddress',
      hostName: 'HostName',
      hostAccountCount: 'HostAccountCount',
      source: 'Source',
      hostPrivateAddress: 'HostPrivateAddress',
      OSType: 'OSType',
      hostId: 'HostId',
      sourceInstanceState: 'SourceInstanceState',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      activeAddressType: 'string',
      hostPublicAddress: 'string',
      hostName: 'string',
      hostAccountCount: 'number',
      source: 'string',
      hostPrivateAddress: 'string',
      OSType: 'string',
      hostId: 'string',
      sourceInstanceState: 'string',
      sourceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserResponseBodyHosts extends $tea.Model {
  comment?: string;
  activeAddressType?: string;
  hostPublicAddress?: string;
  hostName?: string;
  hostPrivateAddress?: string;
  OSType?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      activeAddressType: 'ActiveAddressType',
      hostPublicAddress: 'HostPublicAddress',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      OSType: 'OSType',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      activeAddressType: 'string',
      hostPublicAddress: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      OSType: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostsForUserGroupResponseBodyHosts extends $tea.Model {
  comment?: string;
  activeAddressType?: string;
  hostPublicAddress?: string;
  hostName?: string;
  hostPrivateAddress?: string;
  OSType?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      activeAddressType: 'ActiveAddressType',
      hostPublicAddress: 'HostPublicAddress',
      hostName: 'HostName',
      hostPrivateAddress: 'HostPrivateAddress',
      OSType: 'OSType',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      activeAddressType: 'string',
      hostPublicAddress: 'string',
      hostName: 'string',
      hostPrivateAddress: 'string',
      OSType: 'string',
      hostId: 'string',
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
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBodyUserGroups extends $tea.Model {
  memberCount?: number;
  comment?: string;
  userGroupId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      memberCount: 'MemberCount',
      comment: 'Comment',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberCount: 'number',
      comment: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  displayName?: string;
  email?: string;
  comment?: string;
  mobileCountryCode?: string;
  mobile?: string;
  userId?: string;
  source?: string;
  userName?: string;
  userState?: string[];
  sourceUserId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      comment: 'Comment',
      mobileCountryCode: 'MobileCountryCode',
      mobile: 'Mobile',
      userId: 'UserId',
      source: 'Source',
      userName: 'UserName',
      userState: 'UserState',
      sourceUserId: 'SourceUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      comment: 'string',
      mobileCountryCode: 'string',
      mobile: 'string',
      userId: 'string',
      source: 'string',
      userName: 'string',
      userState: { 'type': 'array', 'itemType': 'string' },
      sourceUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponseBodyResults extends $tea.Model {
  userId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostsActiveAddressTypeResponseBodyResults extends $tea.Model {
  code?: string;
  message?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostsPortResponseBodyResults extends $tea.Model {
  code?: string;
  message?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveHostsFromGroupResponseBodyResults extends $tea.Model {
  code?: string;
  message?: string;
  hostGroupId?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      hostGroupId: 'HostGroupId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      hostGroupId: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromGroupResponseBodyResults extends $tea.Model {
  userGroupId?: string;
  userId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userId: 'UserId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userId: 'string',
      code: 'string',
      message: 'string',
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
  userId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      code: 'string',
      message: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddHostsToGroupResponse>(await this.doRPCRequest("AddHostsToGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddHostsToGroupResponse({}));
  }

  async addHostsToGroup(request: AddHostsToGroupRequest): Promise<AddHostsToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addHostsToGroupWithOptions(request, runtime);
  }

  async addUsersToGroupWithOptions(request: AddUsersToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUsersToGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUsersToGroupResponse>(await this.doRPCRequest("AddUsersToGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddUsersToGroupResponse({}));
  }

  async addUsersToGroup(request: AddUsersToGroupRequest): Promise<AddUsersToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUsersToGroupWithOptions(request, runtime);
  }

  async attachHostAccountsToUserWithOptions(request: AttachHostAccountsToUserRequest, runtime: $Util.RuntimeOptions): Promise<AttachHostAccountsToUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachHostAccountsToUserResponse>(await this.doRPCRequest("AttachHostAccountsToUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new AttachHostAccountsToUserResponse({}));
  }

  async attachHostAccountsToUser(request: AttachHostAccountsToUserRequest): Promise<AttachHostAccountsToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachHostAccountsToUserWithOptions(request, runtime);
  }

  async attachHostAccountsToUserGroupWithOptions(request: AttachHostAccountsToUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<AttachHostAccountsToUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachHostAccountsToUserGroupResponse>(await this.doRPCRequest("AttachHostAccountsToUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new AttachHostAccountsToUserGroupResponse({}));
  }

  async attachHostAccountsToUserGroup(request: AttachHostAccountsToUserGroupRequest): Promise<AttachHostAccountsToUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachHostAccountsToUserGroupWithOptions(request, runtime);
  }

  async attachHostGroupAccountsToUserWithOptions(request: AttachHostGroupAccountsToUserRequest, runtime: $Util.RuntimeOptions): Promise<AttachHostGroupAccountsToUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachHostGroupAccountsToUserResponse>(await this.doRPCRequest("AttachHostGroupAccountsToUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new AttachHostGroupAccountsToUserResponse({}));
  }

  async attachHostGroupAccountsToUser(request: AttachHostGroupAccountsToUserRequest): Promise<AttachHostGroupAccountsToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachHostGroupAccountsToUserWithOptions(request, runtime);
  }

  async attachHostGroupAccountsToUserGroupWithOptions(request: AttachHostGroupAccountsToUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<AttachHostGroupAccountsToUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachHostGroupAccountsToUserGroupResponse>(await this.doRPCRequest("AttachHostGroupAccountsToUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new AttachHostGroupAccountsToUserGroupResponse({}));
  }

  async attachHostGroupAccountsToUserGroup(request: AttachHostGroupAccountsToUserGroupRequest): Promise<AttachHostGroupAccountsToUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachHostGroupAccountsToUserGroupWithOptions(request, runtime);
  }

  async configInstanceSecurityGroupsWithOptions(request: ConfigInstanceSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ConfigInstanceSecurityGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigInstanceSecurityGroupsResponse>(await this.doRPCRequest("ConfigInstanceSecurityGroups", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigInstanceSecurityGroupsResponse({}));
  }

  async configInstanceSecurityGroups(request: ConfigInstanceSecurityGroupsRequest): Promise<ConfigInstanceSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceSecurityGroupsWithOptions(request, runtime);
  }

  async configInstanceWhiteListWithOptions(request: ConfigInstanceWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ConfigInstanceWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigInstanceWhiteListResponse>(await this.doRPCRequest("ConfigInstanceWhiteList", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigInstanceWhiteListResponse({}));
  }

  async configInstanceWhiteList(request: ConfigInstanceWhiteListRequest): Promise<ConfigInstanceWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceWhiteListWithOptions(request, runtime);
  }

  async createHostWithOptions(request: CreateHostRequest, runtime: $Util.RuntimeOptions): Promise<CreateHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHostResponse>(await this.doRPCRequest("CreateHost", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHostResponse({}));
  }

  async createHost(request: CreateHostRequest): Promise<CreateHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHostWithOptions(request, runtime);
  }

  async createHostAccountWithOptions(request: CreateHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateHostAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHostAccountResponse>(await this.doRPCRequest("CreateHostAccount", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHostAccountResponse({}));
  }

  async createHostAccount(request: CreateHostAccountRequest): Promise<CreateHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHostAccountWithOptions(request, runtime);
  }

  async createHostGroupWithOptions(request: CreateHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHostGroupResponse>(await this.doRPCRequest("CreateHostGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHostGroupResponse({}));
  }

  async createHostGroup(request: CreateHostGroupRequest): Promise<CreateHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHostGroupWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserResponse>(await this.doRPCRequest("CreateUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async createUserGroupWithOptions(request: CreateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserGroupResponse>(await this.doRPCRequest("CreateUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserGroupResponse({}));
  }

  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  async deleteHostWithOptions(request: DeleteHostRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHostResponse>(await this.doRPCRequest("DeleteHost", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHostResponse({}));
  }

  async deleteHost(request: DeleteHostRequest): Promise<DeleteHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHostWithOptions(request, runtime);
  }

  async deleteHostAccountWithOptions(request: DeleteHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHostAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHostAccountResponse>(await this.doRPCRequest("DeleteHostAccount", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHostAccountResponse({}));
  }

  async deleteHostAccount(request: DeleteHostAccountRequest): Promise<DeleteHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHostAccountWithOptions(request, runtime);
  }

  async deleteHostGroupWithOptions(request: DeleteHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHostGroupResponse>(await this.doRPCRequest("DeleteHostGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHostGroupResponse({}));
  }

  async deleteHostGroup(request: DeleteHostGroupRequest): Promise<DeleteHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHostGroupWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserResponse>(await this.doRPCRequest("DeleteUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deleteUserGroupWithOptions(request: DeleteUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserGroupResponse>(await this.doRPCRequest("DeleteUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserGroupResponse({}));
  }

  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  async describeInstanceAttributeWithOptions(request: DescribeInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAttributeResponse>(await this.doRPCRequest("DescribeInstanceAttribute", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAttributeResponse({}));
  }

  async describeInstanceAttribute(request: DescribeInstanceAttributeRequest): Promise<DescribeInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAttributeWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancesResponse>(await this.doRPCRequest("DescribeInstances", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async detachHostAccountsFromUserWithOptions(request: DetachHostAccountsFromUserRequest, runtime: $Util.RuntimeOptions): Promise<DetachHostAccountsFromUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachHostAccountsFromUserResponse>(await this.doRPCRequest("DetachHostAccountsFromUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DetachHostAccountsFromUserResponse({}));
  }

  async detachHostAccountsFromUser(request: DetachHostAccountsFromUserRequest): Promise<DetachHostAccountsFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachHostAccountsFromUserWithOptions(request, runtime);
  }

  async detachHostAccountsFromUserGroupWithOptions(request: DetachHostAccountsFromUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DetachHostAccountsFromUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachHostAccountsFromUserGroupResponse>(await this.doRPCRequest("DetachHostAccountsFromUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DetachHostAccountsFromUserGroupResponse({}));
  }

  async detachHostAccountsFromUserGroup(request: DetachHostAccountsFromUserGroupRequest): Promise<DetachHostAccountsFromUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachHostAccountsFromUserGroupWithOptions(request, runtime);
  }

  async detachHostGroupAccountsFromUserWithOptions(request: DetachHostGroupAccountsFromUserRequest, runtime: $Util.RuntimeOptions): Promise<DetachHostGroupAccountsFromUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachHostGroupAccountsFromUserResponse>(await this.doRPCRequest("DetachHostGroupAccountsFromUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DetachHostGroupAccountsFromUserResponse({}));
  }

  async detachHostGroupAccountsFromUser(request: DetachHostGroupAccountsFromUserRequest): Promise<DetachHostGroupAccountsFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachHostGroupAccountsFromUserWithOptions(request, runtime);
  }

  async detachHostGroupAccountsFromUserGroupWithOptions(request: DetachHostGroupAccountsFromUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DetachHostGroupAccountsFromUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachHostGroupAccountsFromUserGroupResponse>(await this.doRPCRequest("DetachHostGroupAccountsFromUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DetachHostGroupAccountsFromUserGroupResponse({}));
  }

  async detachHostGroupAccountsFromUserGroup(request: DetachHostGroupAccountsFromUserGroupRequest): Promise<DetachHostGroupAccountsFromUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachHostGroupAccountsFromUserGroupWithOptions(request, runtime);
  }

  async disableInstancePublicAccessWithOptions(request: DisableInstancePublicAccessRequest, runtime: $Util.RuntimeOptions): Promise<DisableInstancePublicAccessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableInstancePublicAccessResponse>(await this.doRPCRequest("DisableInstancePublicAccess", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new DisableInstancePublicAccessResponse({}));
  }

  async disableInstancePublicAccess(request: DisableInstancePublicAccessRequest): Promise<DisableInstancePublicAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableInstancePublicAccessWithOptions(request, runtime);
  }

  async enableInstancePublicAccessWithOptions(request: EnableInstancePublicAccessRequest, runtime: $Util.RuntimeOptions): Promise<EnableInstancePublicAccessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableInstancePublicAccessResponse>(await this.doRPCRequest("EnableInstancePublicAccess", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new EnableInstancePublicAccessResponse({}));
  }

  async enableInstancePublicAccess(request: EnableInstancePublicAccessRequest): Promise<EnableInstancePublicAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableInstancePublicAccessWithOptions(request, runtime);
  }

  async getHostWithOptions(request: GetHostRequest, runtime: $Util.RuntimeOptions): Promise<GetHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHostResponse>(await this.doRPCRequest("GetHost", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetHostResponse({}));
  }

  async getHost(request: GetHostRequest): Promise<GetHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHostWithOptions(request, runtime);
  }

  async getHostAccountWithOptions(request: GetHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetHostAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHostAccountResponse>(await this.doRPCRequest("GetHostAccount", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetHostAccountResponse({}));
  }

  async getHostAccount(request: GetHostAccountRequest): Promise<GetHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHostAccountWithOptions(request, runtime);
  }

  async getHostGroupWithOptions(request: GetHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHostGroupResponse>(await this.doRPCRequest("GetHostGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetHostGroupResponse({}));
  }

  async getHostGroup(request: GetHostGroupRequest): Promise<GetHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHostGroupWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserResponse>(await this.doRPCRequest("GetUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async getUserGroupWithOptions(request: GetUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserGroupResponse>(await this.doRPCRequest("GetUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserGroupResponse({}));
  }

  async getUserGroup(request: GetUserGroupRequest): Promise<GetUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserGroupWithOptions(request, runtime);
  }

  async listHostAccountsWithOptions(request: ListHostAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListHostAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostAccountsResponse>(await this.doRPCRequest("ListHostAccounts", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostAccountsResponse({}));
  }

  async listHostAccounts(request: ListHostAccountsRequest): Promise<ListHostAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostAccountsWithOptions(request, runtime);
  }

  async listHostAccountsForUserWithOptions(request: ListHostAccountsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListHostAccountsForUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostAccountsForUserResponse>(await this.doRPCRequest("ListHostAccountsForUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostAccountsForUserResponse({}));
  }

  async listHostAccountsForUser(request: ListHostAccountsForUserRequest): Promise<ListHostAccountsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostAccountsForUserWithOptions(request, runtime);
  }

  async listHostAccountsForUserGroupWithOptions(request: ListHostAccountsForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListHostAccountsForUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostAccountsForUserGroupResponse>(await this.doRPCRequest("ListHostAccountsForUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostAccountsForUserGroupResponse({}));
  }

  async listHostAccountsForUserGroup(request: ListHostAccountsForUserGroupRequest): Promise<ListHostAccountsForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostAccountsForUserGroupWithOptions(request, runtime);
  }

  async listHostGroupAccountNamesForUserWithOptions(request: ListHostGroupAccountNamesForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListHostGroupAccountNamesForUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostGroupAccountNamesForUserResponse>(await this.doRPCRequest("ListHostGroupAccountNamesForUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostGroupAccountNamesForUserResponse({}));
  }

  async listHostGroupAccountNamesForUser(request: ListHostGroupAccountNamesForUserRequest): Promise<ListHostGroupAccountNamesForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostGroupAccountNamesForUserWithOptions(request, runtime);
  }

  async listHostGroupAccountNamesForUserGroupWithOptions(request: ListHostGroupAccountNamesForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListHostGroupAccountNamesForUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostGroupAccountNamesForUserGroupResponse>(await this.doRPCRequest("ListHostGroupAccountNamesForUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostGroupAccountNamesForUserGroupResponse({}));
  }

  async listHostGroupAccountNamesForUserGroup(request: ListHostGroupAccountNamesForUserGroupRequest): Promise<ListHostGroupAccountNamesForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostGroupAccountNamesForUserGroupWithOptions(request, runtime);
  }

  async listHostGroupsWithOptions(request: ListHostGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListHostGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostGroupsResponse>(await this.doRPCRequest("ListHostGroups", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostGroupsResponse({}));
  }

  async listHostGroups(request: ListHostGroupsRequest): Promise<ListHostGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostGroupsWithOptions(request, runtime);
  }

  async listHostGroupsForUserWithOptions(request: ListHostGroupsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListHostGroupsForUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostGroupsForUserResponse>(await this.doRPCRequest("ListHostGroupsForUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostGroupsForUserResponse({}));
  }

  async listHostGroupsForUser(request: ListHostGroupsForUserRequest): Promise<ListHostGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostGroupsForUserWithOptions(request, runtime);
  }

  async listHostGroupsForUserGroupWithOptions(request: ListHostGroupsForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListHostGroupsForUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostGroupsForUserGroupResponse>(await this.doRPCRequest("ListHostGroupsForUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostGroupsForUserGroupResponse({}));
  }

  async listHostGroupsForUserGroup(request: ListHostGroupsForUserGroupRequest): Promise<ListHostGroupsForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostGroupsForUserGroupWithOptions(request, runtime);
  }

  async listHostsWithOptions(request: ListHostsRequest, runtime: $Util.RuntimeOptions): Promise<ListHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostsResponse>(await this.doRPCRequest("ListHosts", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostsResponse({}));
  }

  async listHosts(request: ListHostsRequest): Promise<ListHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostsWithOptions(request, runtime);
  }

  async listHostsForUserWithOptions(request: ListHostsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListHostsForUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostsForUserResponse>(await this.doRPCRequest("ListHostsForUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostsForUserResponse({}));
  }

  async listHostsForUser(request: ListHostsForUserRequest): Promise<ListHostsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostsForUserWithOptions(request, runtime);
  }

  async listHostsForUserGroupWithOptions(request: ListHostsForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListHostsForUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostsForUserGroupResponse>(await this.doRPCRequest("ListHostsForUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostsForUserGroupResponse({}));
  }

  async listHostsForUserGroup(request: ListHostsForUserGroupRequest): Promise<ListHostsForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostsForUserGroupWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listUserGroupsWithOptions(request: ListUserGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserGroupsResponse>(await this.doRPCRequest("ListUserGroups", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserGroupsResponse({}));
  }

  async listUserGroups(request: ListUserGroupsRequest): Promise<ListUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async lockUsersWithOptions(request: LockUsersRequest, runtime: $Util.RuntimeOptions): Promise<LockUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LockUsersResponse>(await this.doRPCRequest("LockUsers", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new LockUsersResponse({}));
  }

  async lockUsers(request: LockUsersRequest): Promise<LockUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockUsersWithOptions(request, runtime);
  }

  async modifyHostWithOptions(request: ModifyHostRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHostResponse>(await this.doRPCRequest("ModifyHost", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHostResponse({}));
  }

  async modifyHost(request: ModifyHostRequest): Promise<ModifyHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostWithOptions(request, runtime);
  }

  async modifyHostAccountWithOptions(request: ModifyHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHostAccountResponse>(await this.doRPCRequest("ModifyHostAccount", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHostAccountResponse({}));
  }

  async modifyHostAccount(request: ModifyHostAccountRequest): Promise<ModifyHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostAccountWithOptions(request, runtime);
  }

  async modifyHostGroupWithOptions(request: ModifyHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHostGroupResponse>(await this.doRPCRequest("ModifyHostGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHostGroupResponse({}));
  }

  async modifyHostGroup(request: ModifyHostGroupRequest): Promise<ModifyHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostGroupWithOptions(request, runtime);
  }

  async modifyHostsActiveAddressTypeWithOptions(request: ModifyHostsActiveAddressTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostsActiveAddressTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHostsActiveAddressTypeResponse>(await this.doRPCRequest("ModifyHostsActiveAddressType", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHostsActiveAddressTypeResponse({}));
  }

  async modifyHostsActiveAddressType(request: ModifyHostsActiveAddressTypeRequest): Promise<ModifyHostsActiveAddressTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostsActiveAddressTypeWithOptions(request, runtime);
  }

  async modifyHostsPortWithOptions(request: ModifyHostsPortRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostsPortResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHostsPortResponse>(await this.doRPCRequest("ModifyHostsPort", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHostsPortResponse({}));
  }

  async modifyHostsPort(request: ModifyHostsPortRequest): Promise<ModifyHostsPortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostsPortWithOptions(request, runtime);
  }

  async modifyInstanceAttributeWithOptions(request: ModifyInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceAttributeResponse>(await this.doRPCRequest("ModifyInstanceAttribute", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceAttributeResponse({}));
  }

  async modifyInstanceAttribute(request: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  async modifyUserWithOptions(request: ModifyUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUserResponse>(await this.doRPCRequest("ModifyUser", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUserResponse({}));
  }

  async modifyUser(request: ModifyUserRequest): Promise<ModifyUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserWithOptions(request, runtime);
  }

  async modifyUserGroupWithOptions(request: ModifyUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUserGroupResponse>(await this.doRPCRequest("ModifyUserGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUserGroupResponse({}));
  }

  async modifyUserGroup(request: ModifyUserGroupRequest): Promise<ModifyUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserGroupWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.doRPCRequest("MoveResourceGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async removeHostsFromGroupWithOptions(request: RemoveHostsFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveHostsFromGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveHostsFromGroupResponse>(await this.doRPCRequest("RemoveHostsFromGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveHostsFromGroupResponse({}));
  }

  async removeHostsFromGroup(request: RemoveHostsFromGroupRequest): Promise<RemoveHostsFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeHostsFromGroupWithOptions(request, runtime);
  }

  async removeUsersFromGroupWithOptions(request: RemoveUsersFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUsersFromGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveUsersFromGroupResponse>(await this.doRPCRequest("RemoveUsersFromGroup", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveUsersFromGroupResponse({}));
  }

  async removeUsersFromGroup(request: RemoveUsersFromGroupRequest): Promise<RemoveUsersFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersFromGroupWithOptions(request, runtime);
  }

  async resetHostAccountCredentialWithOptions(request: ResetHostAccountCredentialRequest, runtime: $Util.RuntimeOptions): Promise<ResetHostAccountCredentialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetHostAccountCredentialResponse>(await this.doRPCRequest("ResetHostAccountCredential", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new ResetHostAccountCredentialResponse({}));
  }

  async resetHostAccountCredential(request: ResetHostAccountCredentialRequest): Promise<ResetHostAccountCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetHostAccountCredentialWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartInstanceResponse>(await this.doRPCRequest("StartInstance", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async unlockUsersWithOptions(request: UnlockUsersRequest, runtime: $Util.RuntimeOptions): Promise<UnlockUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnlockUsersResponse>(await this.doRPCRequest("UnlockUsers", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new UnlockUsersResponse({}));
  }

  async unlockUsers(request: UnlockUsersRequest): Promise<UnlockUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockUsersWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2019-12-09", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
