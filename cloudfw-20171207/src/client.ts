// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAddressBookRequest extends $tea.Model {
  addressList?: string;
  autoAddTagEcs?: string;
  description?: string;
  groupName?: string;
  groupType?: string;
  lang?: string;
  sourceIp?: string;
  tagList?: AddAddressBookRequestTagList[];
  tagRelation?: string;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      autoAddTagEcs: 'AutoAddTagEcs',
      description: 'Description',
      groupName: 'GroupName',
      groupType: 'GroupType',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      tagList: 'TagList',
      tagRelation: 'TagRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: 'string',
      autoAddTagEcs: 'string',
      description: 'string',
      groupName: 'string',
      groupType: 'string',
      lang: 'string',
      sourceIp: 'string',
      tagList: { 'type': 'array', 'itemType': AddAddressBookRequestTagList },
      tagRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressBookResponseBody extends $tea.Model {
  groupUuid?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupUuid: 'GroupUuid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupUuid: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressBookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddControlPolicyRequest extends $tea.Model {
  aclAction?: string;
  applicationName?: string;
  applicationNameList?: string[];
  description?: string;
  destPort?: string;
  destPortGroup?: string;
  destPortType?: string;
  destination?: string;
  destinationType?: string;
  direction?: string;
  ipVersion?: string;
  lang?: string;
  newOrder?: string;
  proto?: string;
  release?: string;
  source?: string;
  sourceIp?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      newOrder: 'NewOrder',
      proto: 'Proto',
      release: 'Release',
      source: 'Source',
      sourceIp: 'SourceIp',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      ipVersion: 'string',
      lang: 'string',
      newOrder: 'string',
      proto: 'string',
      release: 'string',
      source: 'string',
      sourceIp: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddControlPolicyResponseBody extends $tea.Model {
  aclUuid?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddInstanceMembersRequest extends $tea.Model {
  members?: AddInstanceMembersRequestMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': AddInstanceMembersRequestMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddInstanceMembersResponseBody extends $tea.Model {
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

export class AddInstanceMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddInstanceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddInstanceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCopyVpcFirewallControlPolicyRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  sourceVpcFirewallId?: string;
  targetVpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      sourceVpcFirewallId: 'SourceVpcFirewallId',
      targetVpcFirewallId: 'TargetVpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      sourceVpcFirewallId: 'string',
      targetVpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCopyVpcFirewallControlPolicyResponseBody extends $tea.Model {
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

export class BatchCopyVpcFirewallControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchCopyVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchCopyVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallCenConfigureRequest extends $tea.Model {
  cenId?: string;
  firewallSwitch?: string;
  lang?: string;
  memberUid?: string;
  networkInstanceId?: string;
  vpcFirewallName?: string;
  vpcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      memberUid: 'MemberUid',
      networkInstanceId: 'NetworkInstanceId',
      vpcFirewallName: 'VpcFirewallName',
      vpcRegion: 'VpcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      firewallSwitch: 'string',
      lang: 'string',
      memberUid: 'string',
      networkInstanceId: 'string',
      vpcFirewallName: 'string',
      vpcRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallCenConfigureResponseBody extends $tea.Model {
  requestId?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallCenConfigureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVpcFirewallCenConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpcFirewallCenConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallConfigureRequest extends $tea.Model {
  firewallSwitch?: string;
  lang?: string;
  localVpcCidrTableList?: string;
  localVpcId?: string;
  localVpcRegion?: string;
  memberUid?: string;
  peerVpcCidrTableList?: string;
  peerVpcId?: string;
  peerVpcRegion?: string;
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      localVpcCidrTableList: 'LocalVpcCidrTableList',
      localVpcId: 'LocalVpcId',
      localVpcRegion: 'LocalVpcRegion',
      memberUid: 'MemberUid',
      peerVpcCidrTableList: 'PeerVpcCidrTableList',
      peerVpcId: 'PeerVpcId',
      peerVpcRegion: 'PeerVpcRegion',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallSwitch: 'string',
      lang: 'string',
      localVpcCidrTableList: 'string',
      localVpcId: 'string',
      localVpcRegion: 'string',
      memberUid: 'string',
      peerVpcCidrTableList: 'string',
      peerVpcId: 'string',
      peerVpcRegion: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallConfigureResponseBody extends $tea.Model {
  requestId?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallConfigureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVpcFirewallConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpcFirewallConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallControlPolicyRequest extends $tea.Model {
  aclAction?: string;
  applicationName?: string;
  description?: string;
  destPort?: string;
  destPortGroup?: string;
  destPortType?: string;
  destination?: string;
  destinationType?: string;
  lang?: string;
  memberUid?: string;
  newOrder?: string;
  proto?: string;
  release?: string;
  source?: string;
  sourceType?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      applicationName: 'ApplicationName',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      lang: 'Lang',
      memberUid: 'MemberUid',
      newOrder: 'NewOrder',
      proto: 'Proto',
      release: 'Release',
      source: 'Source',
      sourceType: 'SourceType',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      applicationName: 'string',
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      lang: 'string',
      memberUid: 'string',
      newOrder: 'string',
      proto: 'string',
      release: 'string',
      source: 'string',
      sourceType: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallControlPolicyResponseBody extends $tea.Model {
  aclUuid?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAddressBookRequest extends $tea.Model {
  groupUuid?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      groupUuid: 'GroupUuid',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupUuid: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAddressBookResponseBody extends $tea.Model {
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

export class DeleteAddressBookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyRequest extends $tea.Model {
  aclUuid?: string;
  direction?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      direction: 'Direction',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      direction: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyResponseBody extends $tea.Model {
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

export class DeleteControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceMembersRequest extends $tea.Model {
  memberUids?: number[];
  static names(): { [key: string]: string } {
    return {
      memberUids: 'MemberUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceMembersResponseBody extends $tea.Model {
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

export class DeleteInstanceMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteInstanceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallCenConfigureRequest extends $tea.Model {
  lang?: string;
  memberUid?: string;
  vpcFirewallIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallIdList: 'VpcFirewallIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'string',
      vpcFirewallIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallCenConfigureResponseBody extends $tea.Model {
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

export class DeleteVpcFirewallCenConfigureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVpcFirewallCenConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpcFirewallCenConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallConfigureRequest extends $tea.Model {
  lang?: string;
  memberUid?: string;
  vpcFirewallIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallIdList: 'VpcFirewallIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'string',
      vpcFirewallIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallConfigureResponseBody extends $tea.Model {
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

export class DeleteVpcFirewallConfigureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVpcFirewallConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpcFirewallConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallControlPolicyRequest extends $tea.Model {
  aclUuid?: string;
  lang?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallControlPolicyResponseBody extends $tea.Model {
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

export class DeleteVpcFirewallControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookRequest extends $tea.Model {
  containPort?: string;
  currentPage?: string;
  groupType?: string;
  lang?: string;
  pageSize?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      containPort: 'ContainPort',
      currentPage: 'CurrentPage',
      groupType: 'GroupType',
      lang: 'Lang',
      pageSize: 'PageSize',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containPort: 'string',
      currentPage: 'string',
      groupType: 'string',
      lang: 'string',
      pageSize: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBody extends $tea.Model {
  acls?: DescribeAddressBookResponseBodyAcls[];
  pageNo?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAcls },
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListRequest extends $tea.Model {
  currentPage?: string;
  ipVersion?: string;
  lang?: string;
  memberUid?: number;
  pageSize?: string;
  regionNo?: string;
  resourceType?: string;
  searchItem?: string;
  sgStatus?: string;
  status?: string;
  type?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      resourceType: 'ResourceType',
      searchItem: 'SearchItem',
      sgStatus: 'SgStatus',
      status: 'Status',
      type: 'Type',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      ipVersion: 'string',
      lang: 'string',
      memberUid: 'number',
      pageSize: 'string',
      regionNo: 'string',
      resourceType: 'string',
      searchItem: 'string',
      sgStatus: 'string',
      status: 'string',
      type: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListResponseBody extends $tea.Model {
  assets?: DescribeAssetListResponseBodyAssets[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': DescribeAssetListResponseBodyAssets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAssetListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAssetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyRequest extends $tea.Model {
  aclAction?: string;
  aclUuid?: string;
  currentPage?: string;
  description?: string;
  destination?: string;
  direction?: string;
  ipVersion?: string;
  lang?: string;
  pageSize?: string;
  proto?: string;
  release?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      pageSize: 'PageSize',
      proto: 'Proto',
      release: 'Release',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      direction: 'string',
      ipVersion: 'string',
      lang: 'string',
      pageSize: 'string',
      proto: 'string',
      release: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyResponseBody extends $tea.Model {
  pageNo?: string;
  pageSize?: string;
  policys?: DescribeControlPolicyResponseBodyPolicys[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      policys: 'Policys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'string',
      pageSize: 'string',
      policys: { 'type': 'array', 'itemType': DescribeControlPolicyResponseBodyPolicys },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveRequest extends $tea.Model {
  domain?: string;
  ipVersion?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ipVersion: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveResponseBody extends $tea.Model {
  requestId?: string;
  resolveResult?: DescribeDomainResolveResponseBodyResolveResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resolveResult: 'ResolveResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resolveResult: DescribeDomainResolveResponseBodyResolveResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainResolveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainResolveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersRequest extends $tea.Model {
  currentPage?: string;
  memberDesc?: string;
  memberDisplayName?: string;
  memberUid?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      memberDesc: 'MemberDesc',
      memberDisplayName: 'MemberDisplayName',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      memberDesc: 'string',
      memberDisplayName: 'string',
      memberUid: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersResponseBody extends $tea.Model {
  members?: DescribeInstanceMembersResponseBodyMembers[];
  pageInfo?: DescribeInstanceMembersResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': DescribeInstanceMembersResponseBodyMembers },
      pageInfo: DescribeInstanceMembersResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListRequest extends $tea.Model {
  assetsIP?: string;
  assetsInstanceId?: string;
  assetsInstanceName?: string;
  currentPage?: string;
  endTime?: string;
  eventKey?: string;
  eventName?: string;
  eventUuid?: string;
  isIgnore?: string;
  lang?: string;
  memberUid?: number;
  pageSize?: string;
  processStatusList?: number[];
  riskLevel?: number[];
  sourceIp?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetsIP: 'AssetsIP',
      assetsInstanceId: 'AssetsInstanceId',
      assetsInstanceName: 'AssetsInstanceName',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      eventKey: 'EventKey',
      eventName: 'EventName',
      eventUuid: 'EventUuid',
      isIgnore: 'IsIgnore',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      processStatusList: 'ProcessStatusList',
      riskLevel: 'RiskLevel',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsIP: 'string',
      assetsInstanceId: 'string',
      assetsInstanceName: 'string',
      currentPage: 'string',
      endTime: 'string',
      eventKey: 'string',
      eventName: 'string',
      eventUuid: 'string',
      isIgnore: 'string',
      lang: 'string',
      memberUid: 'number',
      pageSize: 'string',
      processStatusList: { 'type': 'array', 'itemType': 'number' },
      riskLevel: { 'type': 'array', 'itemType': 'number' },
      sourceIp: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListResponseBody extends $tea.Model {
  eventList?: DescribeInvadeEventListResponseBodyEventList[];
  highLevelPercent?: number;
  lowLevelPercent?: number;
  middleLevelPercent?: number;
  pageInfo?: DescribeInvadeEventListResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      highLevelPercent: 'HighLevelPercent',
      lowLevelPercent: 'LowLevelPercent',
      middleLevelPercent: 'MiddleLevelPercent',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeInvadeEventListResponseBodyEventList },
      highLevelPercent: 'number',
      lowLevelPercent: 'number',
      middleLevelPercent: 'number',
      pageInfo: DescribeInvadeEventListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInvadeEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInvadeEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPRequest extends $tea.Model {
  currentPage?: string;
  dstIP?: string;
  endTime?: string;
  lang?: string;
  order?: string;
  pageSize?: string;
  port?: string;
  privateIP?: string;
  publicIP?: string;
  sort?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dstIP: 'DstIP',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      port: 'Port',
      privateIP: 'PrivateIP',
      publicIP: 'PublicIP',
      sort: 'Sort',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      dstIP: 'string',
      endTime: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
      port: 'string',
      privateIP: 'string',
      publicIP: 'string',
      sort: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBody extends $tea.Model {
  dstIPList?: DescribeOutgoingDestinationIPResponseBodyDstIPList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dstIPList: 'DstIPList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIPList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOutgoingDestinationIPResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOutgoingDestinationIPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainRequest extends $tea.Model {
  currentPage?: string;
  domain?: string;
  endTime?: string;
  lang?: string;
  order?: string;
  pageSize?: string;
  publicIP?: string;
  sort?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      domain: 'Domain',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
      pageSize: 'PageSize',
      publicIP: 'PublicIP',
      sort: 'Sort',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      domain: 'string',
      endTime: 'string',
      lang: 'string',
      order: 'string',
      pageSize: 'string',
      publicIP: 'string',
      sort: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainResponseBody extends $tea.Model {
  domainList?: DescribeOutgoingDomainResponseBodyDomainList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainList: 'DomainList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainList: { 'type': 'array', 'itemType': DescribeOutgoingDomainResponseBodyDomainList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOutgoingDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOutgoingDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyAdvancedConfigRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyAdvancedConfigResponseBody extends $tea.Model {
  internetSwitch?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      internetSwitch: 'InternetSwitch',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetSwitch: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyAdvancedConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePolicyAdvancedConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyAdvancedConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyPriorUsedRequest extends $tea.Model {
  direction?: string;
  ipVersion?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      ipVersion: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyPriorUsedResponseBody extends $tea.Model {
  end?: number;
  requestId?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      requestId: 'RequestId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      requestId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyPriorUsedResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePolicyPriorUsedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyPriorUsedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupRequest extends $tea.Model {
  attackApp?: string[];
  attackType?: string;
  buyVersion?: number;
  currentPage?: string;
  dataType?: string;
  direction?: string;
  dstIP?: string;
  dstNetworkInstanceId?: string;
  endTime?: string;
  firewallType?: string;
  lang?: string;
  noLocation?: string;
  order?: string;
  pageSize?: string;
  ruleResult?: string;
  ruleSource?: string;
  sort?: string;
  srcIP?: string;
  srcNetworkInstanceId?: string;
  startTime?: string;
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      attackApp: 'AttackApp',
      attackType: 'AttackType',
      buyVersion: 'BuyVersion',
      currentPage: 'CurrentPage',
      dataType: 'DataType',
      direction: 'Direction',
      dstIP: 'DstIP',
      dstNetworkInstanceId: 'DstNetworkInstanceId',
      endTime: 'EndTime',
      firewallType: 'FirewallType',
      lang: 'Lang',
      noLocation: 'NoLocation',
      order: 'Order',
      pageSize: 'PageSize',
      ruleResult: 'RuleResult',
      ruleSource: 'RuleSource',
      sort: 'Sort',
      srcIP: 'SrcIP',
      srcNetworkInstanceId: 'SrcNetworkInstanceId',
      startTime: 'StartTime',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApp: { 'type': 'array', 'itemType': 'string' },
      attackType: 'string',
      buyVersion: 'number',
      currentPage: 'string',
      dataType: 'string',
      direction: 'string',
      dstIP: 'string',
      dstNetworkInstanceId: 'string',
      endTime: 'string',
      firewallType: 'string',
      lang: 'string',
      noLocation: 'string',
      order: 'string',
      pageSize: 'string',
      ruleResult: 'string',
      ruleSource: 'string',
      sort: 'string',
      srcIP: 'string',
      srcNetworkInstanceId: 'string',
      startTime: 'string',
      vulLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBody extends $tea.Model {
  dataList?: DescribeRiskEventGroupResponseBodyDataList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeRiskEventGroupResponseBodyDataList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRiskEventGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRiskEventGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAssetIPTrafficInfoRequest extends $tea.Model {
  assetIP?: string;
  lang?: string;
  trafficTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetIP: 'AssetIP',
      lang: 'Lang',
      trafficTime: 'TrafficTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetIP: 'string',
      lang: 'string',
      trafficTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAssetIPTrafficInfoResponseBody extends $tea.Model {
  endTime?: number;
  inBps?: number;
  inPps?: number;
  newConn?: number;
  outBps?: number;
  outPps?: number;
  requestId?: string;
  sessionCount?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inBps: 'InBps',
      inPps: 'InPps',
      newConn: 'NewConn',
      outBps: 'OutBps',
      outPps: 'OutPps',
      requestId: 'RequestId',
      sessionCount: 'SessionCount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      inBps: 'number',
      inPps: 'number',
      newConn: 'number',
      outBps: 'number',
      outPps: 'number',
      requestId: 'string',
      sessionCount: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAssetIPTrafficInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserAssetIPTrafficInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserAssetIPTrafficInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListRequest extends $tea.Model {
  currentPage?: string;
  firewallConfigureStatus?: string;
  lang?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      firewallConfigureStatus: 'FirewallConfigureStatus',
      lang: 'Lang',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      firewallConfigureStatus: 'string',
      lang: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListResponseBody extends $tea.Model {
  aclGroupList?: DescribeVpcFirewallAclGroupListResponseBodyAclGroupList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aclGroupList: 'AclGroupList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclGroupList: { 'type': 'array', 'itemType': DescribeVpcFirewallAclGroupListResponseBodyAclGroupList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVpcFirewallAclGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallAclGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailRequest extends $tea.Model {
  lang?: string;
  networkInstanceId?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      networkInstanceId: 'NetworkInstanceId',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      networkInstanceId: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBody extends $tea.Model {
  connectType?: string;
  firewallSwitchStatus?: string;
  localVpc?: DescribeVpcFirewallCenDetailResponseBodyLocalVpc;
  requestId?: string;
  vpcFirewallId?: string;
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      localVpc: 'LocalVpc',
      requestId: 'RequestId',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectType: 'string',
      firewallSwitchStatus: 'string',
      localVpc: DescribeVpcFirewallCenDetailResponseBodyLocalVpc,
      requestId: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVpcFirewallCenDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallCenDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListRequest extends $tea.Model {
  cenId?: string;
  currentPage?: string;
  firewallSwitchStatus?: string;
  lang?: string;
  memberUid?: string;
  networkInstanceId?: string;
  ownerId?: string;
  pageSize?: string;
  regionNo?: string;
  routeMode?: string;
  transitRouterType?: string;
  vpcFirewallId?: string;
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      currentPage: 'CurrentPage',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      lang: 'Lang',
      memberUid: 'MemberUid',
      networkInstanceId: 'NetworkInstanceId',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      transitRouterType: 'TransitRouterType',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      currentPage: 'string',
      firewallSwitchStatus: 'string',
      lang: 'string',
      memberUid: 'string',
      networkInstanceId: 'string',
      ownerId: 'string',
      pageSize: 'string',
      regionNo: 'string',
      routeMode: 'string',
      transitRouterType: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  vpcFirewalls?: DescribeVpcFirewallCenListResponseBodyVpcFirewalls[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcFirewalls: 'VpcFirewalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vpcFirewalls: { 'type': 'array', 'itemType': DescribeVpcFirewallCenListResponseBodyVpcFirewalls },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVpcFirewallCenListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallCenListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyRequest extends $tea.Model {
  aclAction?: string;
  aclUuid?: string;
  currentPage?: string;
  description?: string;
  destination?: string;
  lang?: string;
  memberUid?: string;
  pageSize?: string;
  proto?: string;
  release?: string;
  source?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      proto: 'Proto',
      release: 'Release',
      source: 'Source',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      lang: 'string',
      memberUid: 'string',
      pageSize: 'string',
      proto: 'string',
      release: 'string',
      source: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyResponseBody extends $tea.Model {
  policys?: DescribeVpcFirewallControlPolicyResponseBodyPolicys[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      policys: 'Policys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policys: { 'type': 'array', 'itemType': DescribeVpcFirewallControlPolicyResponseBodyPolicys },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDefaultIPSConfigRequest extends $tea.Model {
  memberUid?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUid: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDefaultIPSConfigResponseBody extends $tea.Model {
  basicRules?: number;
  enableAllPatch?: number;
  requestId?: string;
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      requestId: 'RequestId',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      enableAllPatch: 'number',
      requestId: 'string',
      runMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDefaultIPSConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVpcFirewallDefaultIPSConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallDefaultIPSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailRequest extends $tea.Model {
  lang?: string;
  localVpcId?: string;
  peerVpcId?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      localVpcId: 'LocalVpcId',
      peerVpcId: 'PeerVpcId',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      localVpcId: 'string',
      peerVpcId: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBody extends $tea.Model {
  bandwidth?: number;
  connectType?: string;
  firewallSwitchStatus?: string;
  localVpc?: DescribeVpcFirewallDetailResponseBodyLocalVpc;
  peerVpc?: DescribeVpcFirewallDetailResponseBodyPeerVpc;
  requestId?: string;
  vpcFirewallId?: string;
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      localVpc: 'LocalVpc',
      peerVpc: 'PeerVpc',
      requestId: 'RequestId',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      connectType: 'string',
      firewallSwitchStatus: 'string',
      localVpc: DescribeVpcFirewallDetailResponseBodyLocalVpc,
      peerVpc: DescribeVpcFirewallDetailResponseBodyPeerVpc,
      requestId: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVpcFirewallDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListRequest extends $tea.Model {
  currentPage?: string;
  firewallSwitchStatus?: string;
  lang?: string;
  memberUid?: string;
  pageSize?: string;
  regionNo?: string;
  vpcFirewallId?: string;
  vpcFirewallName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      firewallSwitchStatus: 'string',
      lang: 'string',
      memberUid: 'string',
      pageSize: 'string',
      regionNo: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  vpcFirewalls?: DescribeVpcFirewallListResponseBodyVpcFirewalls[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcFirewalls: 'VpcFirewalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vpcFirewalls: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewalls },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVpcFirewallListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallPolicyPriorUsedRequest extends $tea.Model {
  lang?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallPolicyPriorUsedResponseBody extends $tea.Model {
  end?: number;
  requestId?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      requestId: 'RequestId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      requestId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallPolicyPriorUsedResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVpcFirewallPolicyPriorUsedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVpcFirewallPolicyPriorUsedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAddressBookRequest extends $tea.Model {
  addressList?: string;
  autoAddTagEcs?: string;
  description?: string;
  groupName?: string;
  groupUuid?: string;
  lang?: string;
  sourceIp?: string;
  tagList?: ModifyAddressBookRequestTagList[];
  tagRelation?: string;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      autoAddTagEcs: 'AutoAddTagEcs',
      description: 'Description',
      groupName: 'GroupName',
      groupUuid: 'GroupUuid',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      tagList: 'TagList',
      tagRelation: 'TagRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: 'string',
      autoAddTagEcs: 'string',
      description: 'string',
      groupName: 'string',
      groupUuid: 'string',
      lang: 'string',
      sourceIp: 'string',
      tagList: { 'type': 'array', 'itemType': ModifyAddressBookRequestTagList },
      tagRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAddressBookResponseBody extends $tea.Model {
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

export class ModifyAddressBookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyRequest extends $tea.Model {
  aclAction?: string;
  aclUuid?: string;
  applicationName?: string;
  applicationNameList?: string[];
  description?: string;
  destPort?: string;
  destPortGroup?: string;
  destPortType?: string;
  destination?: string;
  destinationType?: string;
  direction?: string;
  lang?: string;
  messageType?: string;
  proto?: string;
  release?: string;
  source?: string;
  sourceIp?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      direction: 'Direction',
      lang: 'Lang',
      messageType: 'MessageType',
      proto: 'Proto',
      release: 'Release',
      source: 'Source',
      sourceIp: 'SourceIp',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      lang: 'string',
      messageType: 'string',
      proto: 'string',
      release: 'string',
      source: 'string',
      sourceIp: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyResponseBody extends $tea.Model {
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

export class ModifyControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyPositionRequest extends $tea.Model {
  direction?: string;
  lang?: string;
  newOrder?: string;
  oldOrder?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      lang: 'Lang',
      newOrder: 'NewOrder',
      oldOrder: 'OldOrder',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      lang: 'string',
      newOrder: 'string',
      oldOrder: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyPositionResponseBody extends $tea.Model {
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

export class ModifyControlPolicyPositionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyControlPolicyPositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyControlPolicyPositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMemberAttributesRequest extends $tea.Model {
  members?: ModifyInstanceMemberAttributesRequestMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': ModifyInstanceMemberAttributesRequestMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMemberAttributesResponseBody extends $tea.Model {
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

export class ModifyInstanceMemberAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceMemberAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceMemberAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyAdvancedConfigRequest extends $tea.Model {
  internetSwitch?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      internetSwitch: 'InternetSwitch',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetSwitch: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyAdvancedConfigResponseBody extends $tea.Model {
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

export class ModifyPolicyAdvancedConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyPolicyAdvancedConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPolicyAdvancedConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallCenConfigureRequest extends $tea.Model {
  lang?: string;
  memberUid?: string;
  vpcFirewallId?: string;
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallCenConfigureResponseBody extends $tea.Model {
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

export class ModifyVpcFirewallCenConfigureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyVpcFirewallCenConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallCenConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallCenSwitchStatusRequest extends $tea.Model {
  firewallSwitch?: string;
  lang?: string;
  memberUid?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallSwitch: 'string',
      lang: 'string',
      memberUid: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallCenSwitchStatusResponseBody extends $tea.Model {
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

export class ModifyVpcFirewallCenSwitchStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyVpcFirewallCenSwitchStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallCenSwitchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallConfigureRequest extends $tea.Model {
  lang?: string;
  localVpcCidrTableList?: string;
  memberUid?: string;
  peerVpcCidrTableList?: string;
  vpcFirewallId?: string;
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      localVpcCidrTableList: 'LocalVpcCidrTableList',
      memberUid: 'MemberUid',
      peerVpcCidrTableList: 'PeerVpcCidrTableList',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      localVpcCidrTableList: 'string',
      memberUid: 'string',
      peerVpcCidrTableList: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallConfigureResponseBody extends $tea.Model {
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

export class ModifyVpcFirewallConfigureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyVpcFirewallConfigureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallConfigureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyRequest extends $tea.Model {
  aclAction?: string;
  aclUuid?: string;
  applicationName?: string;
  description?: string;
  destPort?: string;
  destPortGroup?: string;
  destPortType?: string;
  destination?: string;
  destinationType?: string;
  lang?: string;
  proto?: string;
  release?: string;
  source?: string;
  sourceType?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationName: 'ApplicationName',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationType: 'DestinationType',
      lang: 'Lang',
      proto: 'Proto',
      release: 'Release',
      source: 'Source',
      sourceType: 'SourceType',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationName: 'string',
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortType: 'string',
      destination: 'string',
      destinationType: 'string',
      lang: 'string',
      proto: 'string',
      release: 'string',
      source: 'string',
      sourceType: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyResponseBody extends $tea.Model {
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

export class ModifyVpcFirewallControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyPositionRequest extends $tea.Model {
  lang?: string;
  newOrder?: string;
  oldOrder?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newOrder: 'NewOrder',
      oldOrder: 'OldOrder',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newOrder: 'string',
      oldOrder: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyPositionResponseBody extends $tea.Model {
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

export class ModifyVpcFirewallControlPolicyPositionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyVpcFirewallControlPolicyPositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallControlPolicyPositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallDefaultIPSConfigRequest extends $tea.Model {
  basicRules?: string;
  enableAllPatch?: string;
  lang?: string;
  memberUid?: string;
  runMode?: string;
  sourceIp?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      lang: 'Lang',
      memberUid: 'MemberUid',
      runMode: 'RunMode',
      sourceIp: 'SourceIp',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'string',
      enableAllPatch: 'string',
      lang: 'string',
      memberUid: 'string',
      runMode: 'string',
      sourceIp: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallDefaultIPSConfigResponseBody extends $tea.Model {
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

export class ModifyVpcFirewallDefaultIPSConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyVpcFirewallDefaultIPSConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallDefaultIPSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallSwitchStatusRequest extends $tea.Model {
  firewallSwitch?: string;
  lang?: string;
  memberUid?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallSwitch: 'string',
      lang: 'string',
      memberUid: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallSwitchStatusResponseBody extends $tea.Model {
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

export class ModifyVpcFirewallSwitchStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyVpcFirewallSwitchStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyVpcFirewallSwitchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableAllFwSwitchRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableAllFwSwitchResponseBody extends $tea.Model {
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

export class PutDisableAllFwSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PutDisableAllFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutDisableAllFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableFwSwitchRequest extends $tea.Model {
  ipaddrList?: string[];
  lang?: string;
  regionList?: string[];
  resourceTypeList?: string[];
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipaddrList: 'IpaddrList',
      lang: 'Lang',
      regionList: 'RegionList',
      resourceTypeList: 'ResourceTypeList',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipaddrList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      regionList: { 'type': 'array', 'itemType': 'string' },
      resourceTypeList: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableFwSwitchResponseBody extends $tea.Model {
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

export class PutDisableFwSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PutDisableFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutDisableFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableAllFwSwitchRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableAllFwSwitchResponseBody extends $tea.Model {
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

export class PutEnableAllFwSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PutEnableAllFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutEnableAllFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableFwSwitchRequest extends $tea.Model {
  ipaddrList?: string[];
  lang?: string;
  regionList?: string[];
  resourceTypeList?: string[];
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipaddrList: 'IpaddrList',
      lang: 'Lang',
      regionList: 'RegionList',
      resourceTypeList: 'ResourceTypeList',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipaddrList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      regionList: { 'type': 'array', 'itemType': 'string' },
      resourceTypeList: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableFwSwitchResponseBody extends $tea.Model {
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

export class PutEnableFwSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PutEnableFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutEnableFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetVpcFirewallRuleHitCountRequest extends $tea.Model {
  aclUuid?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetVpcFirewallRuleHitCountResponseBody extends $tea.Model {
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

export class ResetVpcFirewallRuleHitCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetVpcFirewallRuleHitCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetVpcFirewallRuleHitCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressBookRequestTagList extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddInstanceMembersRequestMembers extends $tea.Model {
  memberDesc?: string;
  memberUid?: number;
  static names(): { [key: string]: string } {
    return {
      memberDesc: 'MemberDesc',
      memberUid: 'MemberUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberDesc: 'string',
      memberUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAclsTagList extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAcls extends $tea.Model {
  addressList?: string[];
  addressListCount?: number;
  autoAddTagEcs?: number;
  description?: string;
  groupName?: string;
  groupType?: string;
  groupUuid?: string;
  referenceCount?: number;
  tagList?: DescribeAddressBookResponseBodyAclsTagList[];
  tagRelation?: string;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      addressListCount: 'AddressListCount',
      autoAddTagEcs: 'AutoAddTagEcs',
      description: 'Description',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUuid: 'GroupUuid',
      referenceCount: 'ReferenceCount',
      tagList: 'TagList',
      tagRelation: 'TagRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: { 'type': 'array', 'itemType': 'string' },
      addressListCount: 'number',
      autoAddTagEcs: 'number',
      description: 'string',
      groupName: 'string',
      groupType: 'string',
      groupUuid: 'string',
      referenceCount: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAclsTagList },
      tagRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListResponseBodyAssets extends $tea.Model {
  aliUid?: number;
  bindInstanceId?: string;
  bindInstanceName?: string;
  internetAddress?: string;
  intranetAddress?: string;
  ipVersion?: number;
  memberUid?: number;
  name?: string;
  note?: string;
  protectStatus?: string;
  regionID?: string;
  regionStatus?: string;
  resourceInstanceId?: string;
  resourceType?: string;
  riskLevel?: string;
  sgStatus?: string;
  sgStatusTime?: number;
  syncStatus?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bindInstanceId: 'BindInstanceId',
      bindInstanceName: 'BindInstanceName',
      internetAddress: 'InternetAddress',
      intranetAddress: 'IntranetAddress',
      ipVersion: 'IpVersion',
      memberUid: 'MemberUid',
      name: 'Name',
      note: 'Note',
      protectStatus: 'ProtectStatus',
      regionID: 'RegionID',
      regionStatus: 'RegionStatus',
      resourceInstanceId: 'ResourceInstanceId',
      resourceType: 'ResourceType',
      riskLevel: 'RiskLevel',
      sgStatus: 'SgStatus',
      sgStatusTime: 'SgStatusTime',
      syncStatus: 'SyncStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bindInstanceId: 'string',
      bindInstanceName: 'string',
      internetAddress: 'string',
      intranetAddress: 'string',
      ipVersion: 'number',
      memberUid: 'number',
      name: 'string',
      note: 'string',
      protectStatus: 'string',
      regionID: 'string',
      regionStatus: 'string',
      resourceInstanceId: 'string',
      resourceType: 'string',
      riskLevel: 'string',
      sgStatus: 'string',
      sgStatusTime: 'number',
      syncStatus: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyResponseBodyPolicys extends $tea.Model {
  aclAction?: string;
  aclUuid?: string;
  applicationId?: string;
  applicationName?: string;
  applicationNameList?: string[];
  createTime?: number;
  description?: string;
  destPort?: string;
  destPortGroup?: string;
  destPortGroupPorts?: string[];
  destPortType?: string;
  destination?: string;
  destinationGroupCidrs?: string[];
  destinationGroupType?: string;
  destinationType?: string;
  direction?: string;
  dnsResult?: string;
  dnsResultTime?: number;
  hitLastTime?: number;
  hitTimes?: number;
  ipVersion?: number;
  modifyTime?: number;
  order?: number;
  proto?: string;
  release?: string;
  source?: string;
  sourceGroupCidrs?: string[];
  sourceGroupType?: string;
  sourceType?: string;
  spreadCnt?: number;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      applicationNameList: 'ApplicationNameList',
      createTime: 'CreateTime',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortGroupPorts: 'DestPortGroupPorts',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationGroupCidrs: 'DestinationGroupCidrs',
      destinationGroupType: 'DestinationGroupType',
      destinationType: 'DestinationType',
      direction: 'Direction',
      dnsResult: 'DnsResult',
      dnsResultTime: 'DnsResultTime',
      hitLastTime: 'HitLastTime',
      hitTimes: 'HitTimes',
      ipVersion: 'IpVersion',
      modifyTime: 'ModifyTime',
      order: 'Order',
      proto: 'Proto',
      release: 'Release',
      source: 'Source',
      sourceGroupCidrs: 'SourceGroupCidrs',
      sourceGroupType: 'SourceGroupType',
      sourceType: 'SourceType',
      spreadCnt: 'SpreadCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationId: 'string',
      applicationName: 'string',
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortGroupPorts: { 'type': 'array', 'itemType': 'string' },
      destPortType: 'string',
      destination: 'string',
      destinationGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      destinationGroupType: 'string',
      destinationType: 'string',
      direction: 'string',
      dnsResult: 'string',
      dnsResultTime: 'number',
      hitLastTime: 'number',
      hitTimes: 'number',
      ipVersion: 'number',
      modifyTime: 'number',
      order: 'number',
      proto: 'string',
      release: 'string',
      source: 'string',
      sourceGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      sourceGroupType: 'string',
      sourceType: 'string',
      spreadCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveResponseBodyResolveResult extends $tea.Model {
  ipAddrs?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      ipAddrs: 'IpAddrs',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddrs: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersResponseBodyMembers extends $tea.Model {
  createTime?: number;
  memberDesc?: string;
  memberDisplayName?: string;
  memberStatus?: string;
  memberUid?: number;
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      memberDesc: 'MemberDesc',
      memberDisplayName: 'MemberDisplayName',
      memberStatus: 'MemberStatus',
      memberUid: 'MemberUid',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      memberDesc: 'string',
      memberDisplayName: 'string',
      memberStatus: 'string',
      memberUid: 'number',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListResponseBodyEventList extends $tea.Model {
  assetsInstanceId?: string;
  assetsInstanceName?: string;
  assetsType?: string;
  eventKey?: string;
  eventName?: string;
  eventSrc?: string;
  eventUuid?: string;
  firstTime?: number;
  isIgnore?: boolean;
  lastTime?: number;
  memberUid?: string;
  privateIP?: string;
  processStatus?: number;
  publicIP?: string;
  publicIpType?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      assetsInstanceId: 'AssetsInstanceId',
      assetsInstanceName: 'AssetsInstanceName',
      assetsType: 'AssetsType',
      eventKey: 'EventKey',
      eventName: 'EventName',
      eventSrc: 'EventSrc',
      eventUuid: 'EventUuid',
      firstTime: 'FirstTime',
      isIgnore: 'IsIgnore',
      lastTime: 'LastTime',
      memberUid: 'MemberUid',
      privateIP: 'PrivateIP',
      processStatus: 'ProcessStatus',
      publicIP: 'PublicIP',
      publicIpType: 'PublicIpType',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsInstanceId: 'string',
      assetsInstanceName: 'string',
      assetsType: 'string',
      eventKey: 'string',
      eventName: 'string',
      eventSrc: 'string',
      eventUuid: 'string',
      firstTime: 'number',
      isIgnore: 'boolean',
      lastTime: 'number',
      memberUid: 'string',
      privateIP: 'string',
      processStatus: 'number',
      publicIP: 'string',
      publicIpType: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvadeEventListResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList extends $tea.Model {
  addressGroupName?: string;
  addressGroupUUID?: string;
  static names(): { [key: string]: string } {
    return {
      addressGroupName: 'AddressGroupName',
      addressGroupUUID: 'AddressGroupUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressGroupName: 'string',
      addressGroupUUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList extends $tea.Model {
  applicationName?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBodyDstIPListTagList extends $tea.Model {
  classId?: string;
  riskLevel?: number;
  tagDescribe?: string;
  tagId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      riskLevel: 'RiskLevel',
      tagDescribe: 'TagDescribe',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      riskLevel: 'number',
      tagDescribe: 'string',
      tagId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDestinationIPResponseBodyDstIPList extends $tea.Model {
  aclCoverage?: string;
  aclRecommendDetail?: string;
  aclStatus?: string;
  addressGroupList?: DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList[];
  applicationPortList?: DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList[];
  categoryClassId?: string;
  categoryId?: string;
  categoryName?: string;
  dstIP?: string;
  groupName?: string;
  hasAcl?: string;
  hasAclRecommend?: boolean;
  inBytes?: number;
  isMarkNormal?: boolean;
  outBytes?: number;
  ruleId?: string;
  ruleName?: string;
  securityReason?: string;
  securitySuggest?: string;
  sessionCount?: number;
  tagList?: DescribeOutgoingDestinationIPResponseBodyDstIPListTagList[];
  totalBytes?: string;
  static names(): { [key: string]: string } {
    return {
      aclCoverage: 'AclCoverage',
      aclRecommendDetail: 'AclRecommendDetail',
      aclStatus: 'AclStatus',
      addressGroupList: 'AddressGroupList',
      applicationPortList: 'ApplicationPortList',
      categoryClassId: 'CategoryClassId',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      dstIP: 'DstIP',
      groupName: 'GroupName',
      hasAcl: 'HasAcl',
      hasAclRecommend: 'HasAclRecommend',
      inBytes: 'InBytes',
      isMarkNormal: 'IsMarkNormal',
      outBytes: 'OutBytes',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      securityReason: 'SecurityReason',
      securitySuggest: 'SecuritySuggest',
      sessionCount: 'SessionCount',
      tagList: 'TagList',
      totalBytes: 'TotalBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCoverage: 'string',
      aclRecommendDetail: 'string',
      aclStatus: 'string',
      addressGroupList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList },
      applicationPortList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList },
      categoryClassId: 'string',
      categoryId: 'string',
      categoryName: 'string',
      dstIP: 'string',
      groupName: 'string',
      hasAcl: 'string',
      hasAclRecommend: 'boolean',
      inBytes: 'number',
      isMarkNormal: 'boolean',
      outBytes: 'number',
      ruleId: 'string',
      ruleName: 'string',
      securityReason: 'string',
      securitySuggest: 'string',
      sessionCount: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeOutgoingDestinationIPResponseBodyDstIPListTagList },
      totalBytes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainResponseBodyDomainListTagList extends $tea.Model {
  classId?: string;
  riskLevel?: number;
  tagDescribe?: string;
  tagId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      riskLevel: 'RiskLevel',
      tagDescribe: 'TagDescribe',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      riskLevel: 'number',
      tagDescribe: 'string',
      tagId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutgoingDomainResponseBodyDomainList extends $tea.Model {
  aclCoverage?: string;
  aclRecommendDetail?: string;
  aclStatus?: string;
  addressGroupName?: string;
  addressGroupUUID?: string;
  business?: string;
  categoryClassId?: string;
  categoryId?: string;
  categoryName?: string;
  domain?: string;
  groupName?: string;
  hasAcl?: string;
  hasAclRecommend?: boolean;
  inBytes?: number;
  isMarkNormal?: boolean;
  organization?: string;
  outBytes?: number;
  ruleId?: string;
  ruleName?: string;
  securityReason?: string;
  securitySuggest?: string;
  sessionCount?: number;
  tagList?: DescribeOutgoingDomainResponseBodyDomainListTagList[];
  totalBytes?: string;
  static names(): { [key: string]: string } {
    return {
      aclCoverage: 'AclCoverage',
      aclRecommendDetail: 'AclRecommendDetail',
      aclStatus: 'AclStatus',
      addressGroupName: 'AddressGroupName',
      addressGroupUUID: 'AddressGroupUUID',
      business: 'Business',
      categoryClassId: 'CategoryClassId',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      domain: 'Domain',
      groupName: 'GroupName',
      hasAcl: 'HasAcl',
      hasAclRecommend: 'HasAclRecommend',
      inBytes: 'InBytes',
      isMarkNormal: 'IsMarkNormal',
      organization: 'Organization',
      outBytes: 'OutBytes',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      securityReason: 'SecurityReason',
      securitySuggest: 'SecuritySuggest',
      sessionCount: 'SessionCount',
      tagList: 'TagList',
      totalBytes: 'TotalBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclCoverage: 'string',
      aclRecommendDetail: 'string',
      aclStatus: 'string',
      addressGroupName: 'string',
      addressGroupUUID: 'string',
      business: 'string',
      categoryClassId: 'string',
      categoryId: 'string',
      categoryName: 'string',
      domain: 'string',
      groupName: 'string',
      hasAcl: 'string',
      hasAclRecommend: 'boolean',
      inBytes: 'number',
      isMarkNormal: 'boolean',
      organization: 'string',
      outBytes: 'number',
      ruleId: 'string',
      ruleName: 'string',
      securityReason: 'string',
      securitySuggest: 'string',
      sessionCount: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeOutgoingDomainResponseBodyDomainListTagList },
      totalBytes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListIPLocationInfo extends $tea.Model {
  cityId?: string;
  cityName?: string;
  countryId?: string;
  countryName?: string;
  static names(): { [key: string]: string } {
    return {
      cityId: 'CityId',
      cityName: 'CityName',
      countryId: 'CountryId',
      countryName: 'CountryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityId: 'string',
      cityName: 'string',
      countryId: 'string',
      countryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList extends $tea.Model {
  regionNo?: string;
  resourceInstanceId?: string;
  resourceInstanceName?: string;
  resourcePrivateIP?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      resourcePrivateIP: 'ResourcePrivateIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      resourcePrivateIP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListVpcDstInfo extends $tea.Model {
  ecsInstanceId?: string;
  ecsInstanceName?: string;
  networkInstanceId?: string;
  networkInstanceName?: string;
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      ecsInstanceName: 'EcsInstanceName',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      regionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo extends $tea.Model {
  ecsInstanceId?: string;
  ecsInstanceName?: string;
  networkInstanceId?: string;
  networkInstanceName?: string;
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      ecsInstanceName: 'EcsInstanceName',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      regionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataList extends $tea.Model {
  attackApp?: string;
  attackType?: number;
  description?: string;
  direction?: string;
  dstIP?: string;
  eventCount?: number;
  eventId?: string;
  eventName?: string;
  firstEventTime?: number;
  IPLocationInfo?: DescribeRiskEventGroupResponseBodyDataListIPLocationInfo;
  lastEventTime?: number;
  resourcePrivateIPList?: DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList[];
  resourceType?: string;
  ruleId?: string;
  ruleResult?: number;
  ruleSource?: number;
  srcIP?: string;
  srcPrivateIPList?: string[];
  tag?: string;
  vpcDstInfo?: DescribeRiskEventGroupResponseBodyDataListVpcDstInfo;
  vpcSrcInfo?: DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo;
  vulLevel?: number;
  static names(): { [key: string]: string } {
    return {
      attackApp: 'AttackApp',
      attackType: 'AttackType',
      description: 'Description',
      direction: 'Direction',
      dstIP: 'DstIP',
      eventCount: 'EventCount',
      eventId: 'EventId',
      eventName: 'EventName',
      firstEventTime: 'FirstEventTime',
      IPLocationInfo: 'IPLocationInfo',
      lastEventTime: 'LastEventTime',
      resourcePrivateIPList: 'ResourcePrivateIPList',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      ruleResult: 'RuleResult',
      ruleSource: 'RuleSource',
      srcIP: 'SrcIP',
      srcPrivateIPList: 'SrcPrivateIPList',
      tag: 'Tag',
      vpcDstInfo: 'VpcDstInfo',
      vpcSrcInfo: 'VpcSrcInfo',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApp: 'string',
      attackType: 'number',
      description: 'string',
      direction: 'string',
      dstIP: 'string',
      eventCount: 'number',
      eventId: 'string',
      eventName: 'string',
      firstEventTime: 'number',
      IPLocationInfo: DescribeRiskEventGroupResponseBodyDataListIPLocationInfo,
      lastEventTime: 'number',
      resourcePrivateIPList: { 'type': 'array', 'itemType': DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList },
      resourceType: 'string',
      ruleId: 'string',
      ruleResult: 'number',
      ruleSource: 'number',
      srcIP: 'string',
      srcPrivateIPList: { 'type': 'array', 'itemType': 'string' },
      tag: 'string',
      vpcDstInfo: DescribeRiskEventGroupResponseBodyDataListVpcDstInfo,
      vpcSrcInfo: DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo,
      vulLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListResponseBodyAclGroupList extends $tea.Model {
  aclGroupId?: string;
  aclGroupName?: string;
  memberUid?: string;
  static names(): { [key: string]: string } {
    return {
      aclGroupId: 'AclGroupId',
      aclGroupName: 'AclGroupName',
      memberUid: 'MemberUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclGroupId: 'string',
      aclGroupName: 'string',
      memberUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList extends $tea.Model {
  eniId?: string;
  eniPrivateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniPrivateIpAddress: 'EniPrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniPrivateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  destinationCidr?: string;
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList extends $tea.Model {
  routeEntryList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList[];
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenDetailResponseBodyLocalVpc extends $tea.Model {
  attachmentId?: string;
  attachmentName?: string;
  defendCidrList?: string[];
  eniList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList[];
  manualVSwitchId?: string;
  networkInstanceId?: string;
  networkInstanceName?: string;
  networkInstanceType?: string;
  ownerId?: string;
  regionNo?: string;
  routeMode?: string;
  supportManualMode?: string;
  transitRouterId?: string;
  transitRouterType?: string;
  vpcCidrTableList?: DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList[];
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentId: 'AttachmentId',
      attachmentName: 'AttachmentName',
      defendCidrList: 'DefendCidrList',
      eniList: 'EniList',
      manualVSwitchId: 'ManualVSwitchId',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceType: 'NetworkInstanceType',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      supportManualMode: 'SupportManualMode',
      transitRouterId: 'TransitRouterId',
      transitRouterType: 'TransitRouterType',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      attachmentName: 'string',
      defendCidrList: { 'type': 'array', 'itemType': 'string' },
      eniList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcEniList },
      manualVSwitchId: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      networkInstanceType: 'string',
      ownerId: 'string',
      regionNo: 'string',
      routeMode: 'string',
      supportManualMode: 'string',
      transitRouterId: 'string',
      transitRouterType: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenDetailResponseBodyLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig extends $tea.Model {
  basicRules?: number;
  enableAllPatch?: number;
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      enableAllPatch: 'number',
      runMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  destinationCidr?: string;
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList extends $tea.Model {
  routeEntryList?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList[];
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc extends $tea.Model {
  authorizationStatus?: string;
  defendCidrList?: string[];
  manualVSwitchId?: string;
  networkInstanceId?: string;
  networkInstanceName?: string;
  networkInstanceType?: string;
  ownerId?: number;
  regionNo?: string;
  routeMode?: string;
  supportManualMode?: string;
  transitRouterType?: string;
  vpcCidrTableList?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList[];
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'AuthorizationStatus',
      defendCidrList: 'DefendCidrList',
      manualVSwitchId: 'ManualVSwitchId',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceType: 'NetworkInstanceType',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      supportManualMode: 'SupportManualMode',
      transitRouterType: 'TransitRouterType',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      defendCidrList: { 'type': 'array', 'itemType': 'string' },
      manualVSwitchId: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      networkInstanceType: 'string',
      ownerId: 'number',
      regionNo: 'string',
      routeMode: 'string',
      supportManualMode: 'string',
      transitRouterType: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallCenListResponseBodyVpcFirewalls extends $tea.Model {
  cenId?: string;
  cenName?: string;
  connectType?: string;
  firewallSwitchStatus?: string;
  ipsConfig?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig;
  localVpc?: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc;
  memberUid?: string;
  precheckStatus?: string;
  regionStatus?: string;
  resultCode?: string;
  vpcFirewallId?: string;
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenName: 'CenName',
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      ipsConfig: 'IpsConfig',
      localVpc: 'LocalVpc',
      memberUid: 'MemberUid',
      precheckStatus: 'PrecheckStatus',
      regionStatus: 'RegionStatus',
      resultCode: 'ResultCode',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenName: 'string',
      connectType: 'string',
      firewallSwitchStatus: 'string',
      ipsConfig: DescribeVpcFirewallCenListResponseBodyVpcFirewallsIpsConfig,
      localVpc: DescribeVpcFirewallCenListResponseBodyVpcFirewallsLocalVpc,
      memberUid: 'string',
      precheckStatus: 'string',
      regionStatus: 'string',
      resultCode: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyResponseBodyPolicys extends $tea.Model {
  aclAction?: string;
  aclUuid?: string;
  applicationId?: string;
  applicationName?: string;
  description?: string;
  destPort?: string;
  destPortGroup?: string;
  destPortGroupPorts?: string[];
  destPortType?: string;
  destination?: string;
  destinationGroupCidrs?: string[];
  destinationType?: string;
  hitTimes?: number;
  memberUid?: string;
  order?: number;
  proto?: string;
  release?: string;
  source?: string;
  sourceGroupCidrs?: string[];
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      description: 'Description',
      destPort: 'DestPort',
      destPortGroup: 'DestPortGroup',
      destPortGroupPorts: 'DestPortGroupPorts',
      destPortType: 'DestPortType',
      destination: 'Destination',
      destinationGroupCidrs: 'DestinationGroupCidrs',
      destinationType: 'DestinationType',
      hitTimes: 'HitTimes',
      memberUid: 'MemberUid',
      order: 'Order',
      proto: 'Proto',
      release: 'Release',
      source: 'Source',
      sourceGroupCidrs: 'SourceGroupCidrs',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      applicationId: 'string',
      applicationName: 'string',
      description: 'string',
      destPort: 'string',
      destPortGroup: 'string',
      destPortGroupPorts: { 'type': 'array', 'itemType': 'string' },
      destPortType: 'string',
      destination: 'string',
      destinationGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      destinationType: 'string',
      hitTimes: 'number',
      memberUid: 'string',
      order: 'number',
      proto: 'string',
      release: 'string',
      source: 'string',
      sourceGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  destinationCidr?: string;
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableList extends $tea.Model {
  routeEntryList?: DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList[];
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyLocalVpc extends $tea.Model {
  eniId?: string;
  eniPrivateIpAddress?: string;
  regionNo?: string;
  routerInterfaceId?: string;
  vpcCidrTableList?: DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableList[];
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniPrivateIpAddress: 'EniPrivateIpAddress',
      regionNo: 'RegionNo',
      routerInterfaceId: 'RouterInterfaceId',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniPrivateIpAddress: 'string',
      regionNo: 'string',
      routerInterfaceId: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallDetailResponseBodyLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  destinationCidr?: string;
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableList extends $tea.Model {
  routeEntryList?: DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableListRouteEntryList[];
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDetailResponseBodyPeerVpc extends $tea.Model {
  eniId?: string;
  eniPrivateIpAddress?: string;
  regionNo?: string;
  routerInterfaceId?: string;
  vpcCidrTableList?: DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableList[];
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      eniPrivateIpAddress: 'EniPrivateIpAddress',
      regionNo: 'RegionNo',
      routerInterfaceId: 'RouterInterfaceId',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      eniPrivateIpAddress: 'string',
      regionNo: 'string',
      routerInterfaceId: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallDetailResponseBodyPeerVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig extends $tea.Model {
  basicRules?: number;
  enableAllPatch?: number;
  runMode?: number;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      runMode: 'RunMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      enableAllPatch: 'number',
      runMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  destinationCidr?: string;
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList extends $tea.Model {
  routeEntryList?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList[];
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc extends $tea.Model {
  authorizationStatus?: string;
  ownerId?: number;
  regionNo?: string;
  vpcCidrTableList?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList[];
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'AuthorizationStatus',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      ownerId: 'number',
      regionNo: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList extends $tea.Model {
  destinationCidr?: string;
  nextHopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopInstanceId: 'NextHopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList extends $tea.Model {
  routeEntryList?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList[];
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryList: 'RouteEntryList',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableListRouteEntryList },
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc extends $tea.Model {
  authorizationStatus?: string;
  ownerId?: number;
  regionNo?: string;
  vpcCidrTableList?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList[];
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'AuthorizationStatus',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      vpcCidrTableList: 'VpcCidrTableList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      ownerId: 'number',
      regionNo: 'string',
      vpcCidrTableList: { 'type': 'array', 'itemType': DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpcVpcCidrTableList },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallListResponseBodyVpcFirewalls extends $tea.Model {
  bandwidth?: number;
  connectType?: string;
  firewallSwitchStatus?: string;
  ipsConfig?: DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig;
  localVpc?: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc;
  memberUid?: string;
  peerVpc?: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc;
  regionStatus?: string;
  vpcFirewallId?: string;
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      connectType: 'ConnectType',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      ipsConfig: 'IpsConfig',
      localVpc: 'LocalVpc',
      memberUid: 'MemberUid',
      peerVpc: 'PeerVpc',
      regionStatus: 'RegionStatus',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      connectType: 'string',
      firewallSwitchStatus: 'string',
      ipsConfig: DescribeVpcFirewallListResponseBodyVpcFirewallsIpsConfig,
      localVpc: DescribeVpcFirewallListResponseBodyVpcFirewallsLocalVpc,
      memberUid: 'string',
      peerVpc: DescribeVpcFirewallListResponseBodyVpcFirewallsPeerVpc,
      regionStatus: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAddressBookRequestTagList extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMemberAttributesRequestMembers extends $tea.Model {
  memberDesc?: string;
  memberUid?: number;
  static names(): { [key: string]: string } {
    return {
      memberDesc: 'MemberDesc',
      memberUid: 'MemberUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberDesc: 'string',
      memberUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-southeast-1': "cloudfw.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou': "cloudfw.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudfw", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addAddressBookWithOptions(request: AddAddressBookRequest, runtime: $Util.RuntimeOptions): Promise<AddAddressBookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressList)) {
      query["AddressList"] = request.addressList;
    }

    if (!Util.isUnset(request.autoAddTagEcs)) {
      query["AutoAddTagEcs"] = request.autoAddTagEcs;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.tagList)) {
      query["TagList"] = request.tagList;
    }

    if (!Util.isUnset(request.tagRelation)) {
      query["TagRelation"] = request.tagRelation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAddressBookResponse>(await this.callApi(params, req, runtime), new AddAddressBookResponse({}));
  }

  async addAddressBook(request: AddAddressBookRequest): Promise<AddAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAddressBookWithOptions(request, runtime);
  }

  async addControlPolicyWithOptions(request: AddControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<AddControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!Util.isUnset(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!Util.isUnset(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddControlPolicyResponse>(await this.callApi(params, req, runtime), new AddControlPolicyResponse({}));
  }

  async addControlPolicy(request: AddControlPolicyRequest): Promise<AddControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addControlPolicyWithOptions(request, runtime);
  }

  async addInstanceMembersWithOptions(request: AddInstanceMembersRequest, runtime: $Util.RuntimeOptions): Promise<AddInstanceMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.members)) {
      query["Members"] = request.members;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddInstanceMembers",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddInstanceMembersResponse>(await this.callApi(params, req, runtime), new AddInstanceMembersResponse({}));
  }

  async addInstanceMembers(request: AddInstanceMembersRequest): Promise<AddInstanceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addInstanceMembersWithOptions(request, runtime);
  }

  async batchCopyVpcFirewallControlPolicyWithOptions(request: BatchCopyVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<BatchCopyVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.sourceVpcFirewallId)) {
      query["SourceVpcFirewallId"] = request.sourceVpcFirewallId;
    }

    if (!Util.isUnset(request.targetVpcFirewallId)) {
      query["TargetVpcFirewallId"] = request.targetVpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchCopyVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchCopyVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new BatchCopyVpcFirewallControlPolicyResponse({}));
  }

  async batchCopyVpcFirewallControlPolicy(request: BatchCopyVpcFirewallControlPolicyRequest): Promise<BatchCopyVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCopyVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  async createVpcFirewallCenConfigureWithOptions(request: CreateVpcFirewallCenConfigureRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcFirewallCenConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.networkInstanceId)) {
      query["NetworkInstanceId"] = request.networkInstanceId;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    if (!Util.isUnset(request.vpcRegion)) {
      query["VpcRegion"] = request.vpcRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVpcFirewallCenConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVpcFirewallCenConfigureResponse>(await this.callApi(params, req, runtime), new CreateVpcFirewallCenConfigureResponse({}));
  }

  async createVpcFirewallCenConfigure(request: CreateVpcFirewallCenConfigureRequest): Promise<CreateVpcFirewallCenConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcFirewallCenConfigureWithOptions(request, runtime);
  }

  async createVpcFirewallConfigureWithOptions(request: CreateVpcFirewallConfigureRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcFirewallConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.localVpcCidrTableList)) {
      query["LocalVpcCidrTableList"] = request.localVpcCidrTableList;
    }

    if (!Util.isUnset(request.localVpcId)) {
      query["LocalVpcId"] = request.localVpcId;
    }

    if (!Util.isUnset(request.localVpcRegion)) {
      query["LocalVpcRegion"] = request.localVpcRegion;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.peerVpcCidrTableList)) {
      query["PeerVpcCidrTableList"] = request.peerVpcCidrTableList;
    }

    if (!Util.isUnset(request.peerVpcId)) {
      query["PeerVpcId"] = request.peerVpcId;
    }

    if (!Util.isUnset(request.peerVpcRegion)) {
      query["PeerVpcRegion"] = request.peerVpcRegion;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVpcFirewallConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVpcFirewallConfigureResponse>(await this.callApi(params, req, runtime), new CreateVpcFirewallConfigureResponse({}));
  }

  async createVpcFirewallConfigure(request: CreateVpcFirewallConfigureRequest): Promise<CreateVpcFirewallConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcFirewallConfigureWithOptions(request, runtime);
  }

  async createVpcFirewallControlPolicyWithOptions(request: CreateVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!Util.isUnset(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!Util.isUnset(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new CreateVpcFirewallControlPolicyResponse({}));
  }

  async createVpcFirewallControlPolicy(request: CreateVpcFirewallControlPolicyRequest): Promise<CreateVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  async deleteAddressBookWithOptions(request: DeleteAddressBookRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAddressBookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupUuid)) {
      query["GroupUuid"] = request.groupUuid;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAddressBookResponse>(await this.callApi(params, req, runtime), new DeleteAddressBookResponse({}));
  }

  async deleteAddressBook(request: DeleteAddressBookRequest): Promise<DeleteAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAddressBookWithOptions(request, runtime);
  }

  async deleteControlPolicyWithOptions(request: DeleteControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteControlPolicyResponse>(await this.callApi(params, req, runtime), new DeleteControlPolicyResponse({}));
  }

  async deleteControlPolicy(request: DeleteControlPolicyRequest): Promise<DeleteControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteControlPolicyWithOptions(request, runtime);
  }

  async deleteInstanceMembersWithOptions(request: DeleteInstanceMembersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.memberUids)) {
      query["MemberUids"] = request.memberUids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceMembers",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceMembersResponse>(await this.callApi(params, req, runtime), new DeleteInstanceMembersResponse({}));
  }

  async deleteInstanceMembers(request: DeleteInstanceMembersRequest): Promise<DeleteInstanceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceMembersWithOptions(request, runtime);
  }

  async deleteVpcFirewallCenConfigureWithOptions(request: DeleteVpcFirewallCenConfigureRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcFirewallCenConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallIdList)) {
      query["VpcFirewallIdList"] = request.vpcFirewallIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVpcFirewallCenConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVpcFirewallCenConfigureResponse>(await this.callApi(params, req, runtime), new DeleteVpcFirewallCenConfigureResponse({}));
  }

  async deleteVpcFirewallCenConfigure(request: DeleteVpcFirewallCenConfigureRequest): Promise<DeleteVpcFirewallCenConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcFirewallCenConfigureWithOptions(request, runtime);
  }

  async deleteVpcFirewallConfigureWithOptions(request: DeleteVpcFirewallConfigureRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcFirewallConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallIdList)) {
      query["VpcFirewallIdList"] = request.vpcFirewallIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVpcFirewallConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVpcFirewallConfigureResponse>(await this.callApi(params, req, runtime), new DeleteVpcFirewallConfigureResponse({}));
  }

  async deleteVpcFirewallConfigure(request: DeleteVpcFirewallConfigureRequest): Promise<DeleteVpcFirewallConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcFirewallConfigureWithOptions(request, runtime);
  }

  async deleteVpcFirewallControlPolicyWithOptions(request: DeleteVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new DeleteVpcFirewallControlPolicyResponse({}));
  }

  async deleteVpcFirewallControlPolicy(request: DeleteVpcFirewallControlPolicyRequest): Promise<DeleteVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  async describeAddressBookWithOptions(request: DescribeAddressBookRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAddressBookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.containPort)) {
      query["ContainPort"] = request.containPort;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAddressBookResponse>(await this.callApi(params, req, runtime), new DescribeAddressBookResponse({}));
  }

  async describeAddressBook(request: DescribeAddressBookRequest): Promise<DescribeAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAddressBookWithOptions(request, runtime);
  }

  async describeAssetListWithOptions(request: DescribeAssetListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssetListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.searchItem)) {
      query["SearchItem"] = request.searchItem;
    }

    if (!Util.isUnset(request.sgStatus)) {
      query["SgStatus"] = request.sgStatus;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAssetList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAssetListResponse>(await this.callApi(params, req, runtime), new DescribeAssetListResponse({}));
  }

  async describeAssetList(request: DescribeAssetListRequest): Promise<DescribeAssetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetListWithOptions(request, runtime);
  }

  async describeControlPolicyWithOptions(request: DescribeControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeControlPolicyResponse>(await this.callApi(params, req, runtime), new DescribeControlPolicyResponse({}));
  }

  async describeControlPolicy(request: DescribeControlPolicyRequest): Promise<DescribeControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeControlPolicyWithOptions(request, runtime);
  }

  async describeDomainResolveWithOptions(request: DescribeDomainResolveRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainResolveResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainResolve",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainResolveResponse>(await this.callApi(params, req, runtime), new DescribeDomainResolveResponse({}));
  }

  async describeDomainResolve(request: DescribeDomainResolveRequest): Promise<DescribeDomainResolveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainResolveWithOptions(request, runtime);
  }

  async describeInstanceMembersWithOptions(request: DescribeInstanceMembersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.memberDesc)) {
      query["MemberDesc"] = request.memberDesc;
    }

    if (!Util.isUnset(request.memberDisplayName)) {
      query["MemberDisplayName"] = request.memberDisplayName;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceMembers",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceMembersResponse>(await this.callApi(params, req, runtime), new DescribeInstanceMembersResponse({}));
  }

  async describeInstanceMembers(request: DescribeInstanceMembersRequest): Promise<DescribeInstanceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceMembersWithOptions(request, runtime);
  }

  async describeInvadeEventListWithOptions(request: DescribeInvadeEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvadeEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetsIP)) {
      query["AssetsIP"] = request.assetsIP;
    }

    if (!Util.isUnset(request.assetsInstanceId)) {
      query["AssetsInstanceId"] = request.assetsInstanceId;
    }

    if (!Util.isUnset(request.assetsInstanceName)) {
      query["AssetsInstanceName"] = request.assetsInstanceName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventKey)) {
      query["EventKey"] = request.eventKey;
    }

    if (!Util.isUnset(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.eventUuid)) {
      query["EventUuid"] = request.eventUuid;
    }

    if (!Util.isUnset(request.isIgnore)) {
      query["IsIgnore"] = request.isIgnore;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.processStatusList)) {
      query["ProcessStatusList"] = request.processStatusList;
    }

    if (!Util.isUnset(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInvadeEventList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInvadeEventListResponse>(await this.callApi(params, req, runtime), new DescribeInvadeEventListResponse({}));
  }

  async describeInvadeEventList(request: DescribeInvadeEventListRequest): Promise<DescribeInvadeEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvadeEventListWithOptions(request, runtime);
  }

  async describeOutgoingDestinationIPWithOptions(request: DescribeOutgoingDestinationIPRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOutgoingDestinationIPResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dstIP)) {
      query["DstIP"] = request.dstIP;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.privateIP)) {
      query["PrivateIP"] = request.privateIP;
    }

    if (!Util.isUnset(request.publicIP)) {
      query["PublicIP"] = request.publicIP;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOutgoingDestinationIP",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOutgoingDestinationIPResponse>(await this.callApi(params, req, runtime), new DescribeOutgoingDestinationIPResponse({}));
  }

  async describeOutgoingDestinationIP(request: DescribeOutgoingDestinationIPRequest): Promise<DescribeOutgoingDestinationIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOutgoingDestinationIPWithOptions(request, runtime);
  }

  async describeOutgoingDomainWithOptions(request: DescribeOutgoingDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOutgoingDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.publicIP)) {
      query["PublicIP"] = request.publicIP;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOutgoingDomain",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOutgoingDomainResponse>(await this.callApi(params, req, runtime), new DescribeOutgoingDomainResponse({}));
  }

  async describeOutgoingDomain(request: DescribeOutgoingDomainRequest): Promise<DescribeOutgoingDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOutgoingDomainWithOptions(request, runtime);
  }

  async describePolicyAdvancedConfigWithOptions(request: DescribePolicyAdvancedConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyAdvancedConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyAdvancedConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyAdvancedConfigResponse>(await this.callApi(params, req, runtime), new DescribePolicyAdvancedConfigResponse({}));
  }

  async describePolicyAdvancedConfig(request: DescribePolicyAdvancedConfigRequest): Promise<DescribePolicyAdvancedConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyAdvancedConfigWithOptions(request, runtime);
  }

  async describePolicyPriorUsedWithOptions(request: DescribePolicyPriorUsedRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyPriorUsedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyPriorUsed",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyPriorUsedResponse>(await this.callApi(params, req, runtime), new DescribePolicyPriorUsedResponse({}));
  }

  async describePolicyPriorUsed(request: DescribePolicyPriorUsedRequest): Promise<DescribePolicyPriorUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyPriorUsedWithOptions(request, runtime);
  }

  async describeRiskEventGroupWithOptions(request: DescribeRiskEventGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskEventGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attackApp)) {
      query["AttackApp"] = request.attackApp;
    }

    if (!Util.isUnset(request.attackType)) {
      query["AttackType"] = request.attackType;
    }

    if (!Util.isUnset(request.buyVersion)) {
      query["BuyVersion"] = request.buyVersion;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.dstIP)) {
      query["DstIP"] = request.dstIP;
    }

    if (!Util.isUnset(request.dstNetworkInstanceId)) {
      query["DstNetworkInstanceId"] = request.dstNetworkInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.firewallType)) {
      query["FirewallType"] = request.firewallType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.noLocation)) {
      query["NoLocation"] = request.noLocation;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.ruleResult)) {
      query["RuleResult"] = request.ruleResult;
    }

    if (!Util.isUnset(request.ruleSource)) {
      query["RuleSource"] = request.ruleSource;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.srcIP)) {
      query["SrcIP"] = request.srcIP;
    }

    if (!Util.isUnset(request.srcNetworkInstanceId)) {
      query["SrcNetworkInstanceId"] = request.srcNetworkInstanceId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.vulLevel)) {
      query["VulLevel"] = request.vulLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskEventGroup",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskEventGroupResponse>(await this.callApi(params, req, runtime), new DescribeRiskEventGroupResponse({}));
  }

  async describeRiskEventGroup(request: DescribeRiskEventGroupRequest): Promise<DescribeRiskEventGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskEventGroupWithOptions(request, runtime);
  }

  async describeUserAssetIPTrafficInfoWithOptions(request: DescribeUserAssetIPTrafficInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserAssetIPTrafficInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserAssetIPTrafficInfo",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserAssetIPTrafficInfoResponse>(await this.callApi(params, req, runtime), new DescribeUserAssetIPTrafficInfoResponse({}));
  }

  async describeUserAssetIPTrafficInfo(request: DescribeUserAssetIPTrafficInfoRequest): Promise<DescribeUserAssetIPTrafficInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserAssetIPTrafficInfoWithOptions(request, runtime);
  }

  async describeVpcFirewallAclGroupListWithOptions(request: DescribeVpcFirewallAclGroupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallAclGroupListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.firewallConfigureStatus)) {
      query["FirewallConfigureStatus"] = request.firewallConfigureStatus;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallAclGroupList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallAclGroupListResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallAclGroupListResponse({}));
  }

  async describeVpcFirewallAclGroupList(request: DescribeVpcFirewallAclGroupListRequest): Promise<DescribeVpcFirewallAclGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallAclGroupListWithOptions(request, runtime);
  }

  async describeVpcFirewallCenDetailWithOptions(request: DescribeVpcFirewallCenDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallCenDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.networkInstanceId)) {
      query["NetworkInstanceId"] = request.networkInstanceId;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallCenDetail",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallCenDetailResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallCenDetailResponse({}));
  }

  async describeVpcFirewallCenDetail(request: DescribeVpcFirewallCenDetailRequest): Promise<DescribeVpcFirewallCenDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallCenDetailWithOptions(request, runtime);
  }

  async describeVpcFirewallCenListWithOptions(request: DescribeVpcFirewallCenListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallCenListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.firewallSwitchStatus)) {
      query["FirewallSwitchStatus"] = request.firewallSwitchStatus;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.networkInstanceId)) {
      query["NetworkInstanceId"] = request.networkInstanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.routeMode)) {
      query["RouteMode"] = request.routeMode;
    }

    if (!Util.isUnset(request.transitRouterType)) {
      query["TransitRouterType"] = request.transitRouterType;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallCenList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallCenListResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallCenListResponse({}));
  }

  async describeVpcFirewallCenList(request: DescribeVpcFirewallCenListRequest): Promise<DescribeVpcFirewallCenListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallCenListWithOptions(request, runtime);
  }

  async describeVpcFirewallControlPolicyWithOptions(request: DescribeVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallControlPolicyResponse({}));
  }

  async describeVpcFirewallControlPolicy(request: DescribeVpcFirewallControlPolicyRequest): Promise<DescribeVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  async describeVpcFirewallDefaultIPSConfigWithOptions(request: DescribeVpcFirewallDefaultIPSConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallDefaultIPSConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallDefaultIPSConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallDefaultIPSConfigResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallDefaultIPSConfigResponse({}));
  }

  async describeVpcFirewallDefaultIPSConfig(request: DescribeVpcFirewallDefaultIPSConfigRequest): Promise<DescribeVpcFirewallDefaultIPSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallDefaultIPSConfigWithOptions(request, runtime);
  }

  async describeVpcFirewallDetailWithOptions(request: DescribeVpcFirewallDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.localVpcId)) {
      query["LocalVpcId"] = request.localVpcId;
    }

    if (!Util.isUnset(request.peerVpcId)) {
      query["PeerVpcId"] = request.peerVpcId;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallDetail",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallDetailResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallDetailResponse({}));
  }

  async describeVpcFirewallDetail(request: DescribeVpcFirewallDetailRequest): Promise<DescribeVpcFirewallDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallDetailWithOptions(request, runtime);
  }

  async describeVpcFirewallListWithOptions(request: DescribeVpcFirewallListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.firewallSwitchStatus)) {
      query["FirewallSwitchStatus"] = request.firewallSwitchStatus;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallList",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallListResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallListResponse({}));
  }

  async describeVpcFirewallList(request: DescribeVpcFirewallListRequest): Promise<DescribeVpcFirewallListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallListWithOptions(request, runtime);
  }

  async describeVpcFirewallPolicyPriorUsedWithOptions(request: DescribeVpcFirewallPolicyPriorUsedRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallPolicyPriorUsedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcFirewallPolicyPriorUsed",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcFirewallPolicyPriorUsedResponse>(await this.callApi(params, req, runtime), new DescribeVpcFirewallPolicyPriorUsedResponse({}));
  }

  async describeVpcFirewallPolicyPriorUsed(request: DescribeVpcFirewallPolicyPriorUsedRequest): Promise<DescribeVpcFirewallPolicyPriorUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallPolicyPriorUsedWithOptions(request, runtime);
  }

  async modifyAddressBookWithOptions(request: ModifyAddressBookRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAddressBookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressList)) {
      query["AddressList"] = request.addressList;
    }

    if (!Util.isUnset(request.autoAddTagEcs)) {
      query["AutoAddTagEcs"] = request.autoAddTagEcs;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupUuid)) {
      query["GroupUuid"] = request.groupUuid;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.tagList)) {
      query["TagList"] = request.tagList;
    }

    if (!Util.isUnset(request.tagRelation)) {
      query["TagRelation"] = request.tagRelation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAddressBook",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAddressBookResponse>(await this.callApi(params, req, runtime), new ModifyAddressBookResponse({}));
  }

  async modifyAddressBook(request: ModifyAddressBookRequest): Promise<ModifyAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAddressBookWithOptions(request, runtime);
  }

  async modifyControlPolicyWithOptions(request: ModifyControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.applicationNameList)) {
      query["ApplicationNameList"] = request.applicationNameList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!Util.isUnset(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!Util.isUnset(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyControlPolicyResponse>(await this.callApi(params, req, runtime), new ModifyControlPolicyResponse({}));
  }

  async modifyControlPolicy(request: ModifyControlPolicyRequest): Promise<ModifyControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyControlPolicyWithOptions(request, runtime);
  }

  async modifyControlPolicyPositionWithOptions(request: ModifyControlPolicyPositionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyControlPolicyPositionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!Util.isUnset(request.oldOrder)) {
      query["OldOrder"] = request.oldOrder;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyControlPolicyPosition",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyControlPolicyPositionResponse>(await this.callApi(params, req, runtime), new ModifyControlPolicyPositionResponse({}));
  }

  async modifyControlPolicyPosition(request: ModifyControlPolicyPositionRequest): Promise<ModifyControlPolicyPositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyControlPolicyPositionWithOptions(request, runtime);
  }

  async modifyInstanceMemberAttributesWithOptions(request: ModifyInstanceMemberAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceMemberAttributesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.members)) {
      query["Members"] = request.members;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceMemberAttributes",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceMemberAttributesResponse>(await this.callApi(params, req, runtime), new ModifyInstanceMemberAttributesResponse({}));
  }

  async modifyInstanceMemberAttributes(request: ModifyInstanceMemberAttributesRequest): Promise<ModifyInstanceMemberAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceMemberAttributesWithOptions(request, runtime);
  }

  async modifyPolicyAdvancedConfigWithOptions(request: ModifyPolicyAdvancedConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyAdvancedConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.internetSwitch)) {
      query["InternetSwitch"] = request.internetSwitch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPolicyAdvancedConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPolicyAdvancedConfigResponse>(await this.callApi(params, req, runtime), new ModifyPolicyAdvancedConfigResponse({}));
  }

  async modifyPolicyAdvancedConfig(request: ModifyPolicyAdvancedConfigRequest): Promise<ModifyPolicyAdvancedConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyAdvancedConfigWithOptions(request, runtime);
  }

  async modifyVpcFirewallCenConfigureWithOptions(request: ModifyVpcFirewallCenConfigureRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallCenConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallCenConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallCenConfigureResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallCenConfigureResponse({}));
  }

  async modifyVpcFirewallCenConfigure(request: ModifyVpcFirewallCenConfigureRequest): Promise<ModifyVpcFirewallCenConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallCenConfigureWithOptions(request, runtime);
  }

  async modifyVpcFirewallCenSwitchStatusWithOptions(request: ModifyVpcFirewallCenSwitchStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallCenSwitchStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallCenSwitchStatus",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallCenSwitchStatusResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallCenSwitchStatusResponse({}));
  }

  async modifyVpcFirewallCenSwitchStatus(request: ModifyVpcFirewallCenSwitchStatusRequest): Promise<ModifyVpcFirewallCenSwitchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallCenSwitchStatusWithOptions(request, runtime);
  }

  async modifyVpcFirewallConfigureWithOptions(request: ModifyVpcFirewallConfigureRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallConfigureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.localVpcCidrTableList)) {
      query["LocalVpcCidrTableList"] = request.localVpcCidrTableList;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.peerVpcCidrTableList)) {
      query["PeerVpcCidrTableList"] = request.peerVpcCidrTableList;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    if (!Util.isUnset(request.vpcFirewallName)) {
      query["VpcFirewallName"] = request.vpcFirewallName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallConfigure",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallConfigureResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallConfigureResponse({}));
  }

  async modifyVpcFirewallConfigure(request: ModifyVpcFirewallConfigureRequest): Promise<ModifyVpcFirewallConfigureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallConfigureWithOptions(request, runtime);
  }

  async modifyVpcFirewallControlPolicyWithOptions(request: ModifyVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclAction)) {
      query["AclAction"] = request.aclAction;
    }

    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destPort)) {
      query["DestPort"] = request.destPort;
    }

    if (!Util.isUnset(request.destPortGroup)) {
      query["DestPortGroup"] = request.destPortGroup;
    }

    if (!Util.isUnset(request.destPortType)) {
      query["DestPortType"] = request.destPortType;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.proto)) {
      query["Proto"] = request.proto;
    }

    if (!Util.isUnset(request.release)) {
      query["Release"] = request.release;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallControlPolicy",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallControlPolicyResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallControlPolicyResponse({}));
  }

  async modifyVpcFirewallControlPolicy(request: ModifyVpcFirewallControlPolicyRequest): Promise<ModifyVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  async modifyVpcFirewallControlPolicyPositionWithOptions(request: ModifyVpcFirewallControlPolicyPositionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallControlPolicyPositionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newOrder)) {
      query["NewOrder"] = request.newOrder;
    }

    if (!Util.isUnset(request.oldOrder)) {
      query["OldOrder"] = request.oldOrder;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallControlPolicyPosition",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallControlPolicyPositionResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallControlPolicyPositionResponse({}));
  }

  async modifyVpcFirewallControlPolicyPosition(request: ModifyVpcFirewallControlPolicyPositionRequest): Promise<ModifyVpcFirewallControlPolicyPositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallControlPolicyPositionWithOptions(request, runtime);
  }

  async modifyVpcFirewallDefaultIPSConfigWithOptions(request: ModifyVpcFirewallDefaultIPSConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallDefaultIPSConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.basicRules)) {
      query["BasicRules"] = request.basicRules;
    }

    if (!Util.isUnset(request.enableAllPatch)) {
      query["EnableAllPatch"] = request.enableAllPatch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.runMode)) {
      query["RunMode"] = request.runMode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallDefaultIPSConfig",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallDefaultIPSConfigResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallDefaultIPSConfigResponse({}));
  }

  async modifyVpcFirewallDefaultIPSConfig(request: ModifyVpcFirewallDefaultIPSConfigRequest): Promise<ModifyVpcFirewallDefaultIPSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallDefaultIPSConfigWithOptions(request, runtime);
  }

  async modifyVpcFirewallSwitchStatusWithOptions(request: ModifyVpcFirewallSwitchStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallSwitchStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.firewallSwitch)) {
      query["FirewallSwitch"] = request.firewallSwitch;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.vpcFirewallId)) {
      query["VpcFirewallId"] = request.vpcFirewallId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcFirewallSwitchStatus",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcFirewallSwitchStatusResponse>(await this.callApi(params, req, runtime), new ModifyVpcFirewallSwitchStatusResponse({}));
  }

  async modifyVpcFirewallSwitchStatus(request: ModifyVpcFirewallSwitchStatusRequest): Promise<ModifyVpcFirewallSwitchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallSwitchStatusWithOptions(request, runtime);
  }

  async putDisableAllFwSwitchWithOptions(request: PutDisableAllFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutDisableAllFwSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutDisableAllFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutDisableAllFwSwitchResponse>(await this.callApi(params, req, runtime), new PutDisableAllFwSwitchResponse({}));
  }

  async putDisableAllFwSwitch(request: PutDisableAllFwSwitchRequest): Promise<PutDisableAllFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putDisableAllFwSwitchWithOptions(request, runtime);
  }

  async putDisableFwSwitchWithOptions(request: PutDisableFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutDisableFwSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipaddrList)) {
      query["IpaddrList"] = request.ipaddrList;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionList)) {
      query["RegionList"] = request.regionList;
    }

    if (!Util.isUnset(request.resourceTypeList)) {
      query["ResourceTypeList"] = request.resourceTypeList;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutDisableFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutDisableFwSwitchResponse>(await this.callApi(params, req, runtime), new PutDisableFwSwitchResponse({}));
  }

  async putDisableFwSwitch(request: PutDisableFwSwitchRequest): Promise<PutDisableFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putDisableFwSwitchWithOptions(request, runtime);
  }

  async putEnableAllFwSwitchWithOptions(request: PutEnableAllFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutEnableAllFwSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutEnableAllFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutEnableAllFwSwitchResponse>(await this.callApi(params, req, runtime), new PutEnableAllFwSwitchResponse({}));
  }

  async putEnableAllFwSwitch(request: PutEnableAllFwSwitchRequest): Promise<PutEnableAllFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEnableAllFwSwitchWithOptions(request, runtime);
  }

  async putEnableFwSwitchWithOptions(request: PutEnableFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutEnableFwSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipaddrList)) {
      query["IpaddrList"] = request.ipaddrList;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionList)) {
      query["RegionList"] = request.regionList;
    }

    if (!Util.isUnset(request.resourceTypeList)) {
      query["ResourceTypeList"] = request.resourceTypeList;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutEnableFwSwitch",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutEnableFwSwitchResponse>(await this.callApi(params, req, runtime), new PutEnableFwSwitchResponse({}));
  }

  async putEnableFwSwitch(request: PutEnableFwSwitchRequest): Promise<PutEnableFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEnableFwSwitchWithOptions(request, runtime);
  }

  async resetVpcFirewallRuleHitCountWithOptions(request: ResetVpcFirewallRuleHitCountRequest, runtime: $Util.RuntimeOptions): Promise<ResetVpcFirewallRuleHitCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclUuid)) {
      query["AclUuid"] = request.aclUuid;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetVpcFirewallRuleHitCount",
      version: "2017-12-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetVpcFirewallRuleHitCountResponse>(await this.callApi(params, req, runtime), new ResetVpcFirewallRuleHitCountResponse({}));
  }

  async resetVpcFirewallRuleHitCount(request: ResetVpcFirewallRuleHitCountRequest): Promise<ResetVpcFirewallRuleHitCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetVpcFirewallRuleHitCountWithOptions(request, runtime);
  }

}
