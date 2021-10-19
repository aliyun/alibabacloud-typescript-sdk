// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAddressBookRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  addressList?: string;
  description?: string;
  groupName?: string;
  groupType?: string;
  autoAddTagEcs?: string;
  tagRelation?: string;
  tagList?: AddAddressBookRequestTagList[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      addressList: 'AddressList',
      description: 'Description',
      groupName: 'GroupName',
      groupType: 'GroupType',
      autoAddTagEcs: 'AutoAddTagEcs',
      tagRelation: 'TagRelation',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      addressList: 'string',
      description: 'string',
      groupName: 'string',
      groupType: 'string',
      autoAddTagEcs: 'string',
      tagRelation: 'string',
      tagList: { 'type': 'array', 'itemType': AddAddressBookRequestTagList },
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
  body: AddAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddControlPolicyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  aclAction?: string;
  applicationName?: string;
  description?: string;
  destPort?: string;
  destination?: string;
  destinationType?: string;
  direction?: string;
  proto?: string;
  source?: string;
  sourceType?: string;
  newOrder?: string;
  destPortType?: string;
  destPortGroup?: string;
  release?: string;
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      aclAction: 'AclAction',
      applicationName: 'ApplicationName',
      description: 'Description',
      destPort: 'DestPort',
      destination: 'Destination',
      destinationType: 'DestinationType',
      direction: 'Direction',
      proto: 'Proto',
      source: 'Source',
      sourceType: 'SourceType',
      newOrder: 'NewOrder',
      destPortType: 'DestPortType',
      destPortGroup: 'DestPortGroup',
      release: 'Release',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      aclAction: 'string',
      applicationName: 'string',
      description: 'string',
      destPort: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      proto: 'string',
      source: 'string',
      sourceType: 'string',
      newOrder: 'string',
      destPortType: 'string',
      destPortGroup: 'string',
      release: 'string',
      ipVersion: 'string',
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
  body: AddControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: AddInstanceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddInstanceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcFirewallControlPolicyRequest extends $tea.Model {
  lang?: string;
  aclAction?: string;
  applicationName?: string;
  description?: string;
  destPort?: string;
  destination?: string;
  destinationType?: string;
  vpcFirewallId?: string;
  proto?: string;
  source?: string;
  sourceType?: string;
  newOrder?: string;
  destPortType?: string;
  destPortGroup?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      aclAction: 'AclAction',
      applicationName: 'ApplicationName',
      description: 'Description',
      destPort: 'DestPort',
      destination: 'Destination',
      destinationType: 'DestinationType',
      vpcFirewallId: 'VpcFirewallId',
      proto: 'Proto',
      source: 'Source',
      sourceType: 'SourceType',
      newOrder: 'NewOrder',
      destPortType: 'DestPortType',
      destPortGroup: 'DestPortGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      aclAction: 'string',
      applicationName: 'string',
      description: 'string',
      destPort: 'string',
      destination: 'string',
      destinationType: 'string',
      vpcFirewallId: 'string',
      proto: 'string',
      source: 'string',
      sourceType: 'string',
      newOrder: 'string',
      destPortType: 'string',
      destPortGroup: 'string',
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
  body: CreateVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAddressBookRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  groupUuid?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      groupUuid: 'GroupUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      groupUuid: 'string',
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
  body: DeleteAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  aclUuid?: string;
  direction?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      aclUuid: 'AclUuid',
      direction: 'Direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      aclUuid: 'string',
      direction: 'string',
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
  body: DeleteControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteInstanceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcFirewallControlPolicyRequest extends $tea.Model {
  lang?: string;
  aclUuid?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      aclUuid: 'AclUuid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      aclUuid: 'string',
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
  body: DeleteVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  currentPage?: string;
  pageSize?: string;
  query?: string;
  groupType?: string;
  containPort?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      query: 'Query',
      groupType: 'GroupType',
      containPort: 'ContainPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      currentPage: 'string',
      pageSize: 'string',
      query: 'string',
      groupType: 'string',
      containPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBody extends $tea.Model {
  pageNo?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  acls?: DescribeAddressBookResponseBodyAcls[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      acls: 'Acls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
      acls: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAcls },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  currentPage?: string;
  pageSize?: string;
  regionNo?: string;
  status?: string;
  searchItem?: string;
  type?: string;
  resourceType?: string;
  sgStatus?: string;
  ipVersion?: string;
  memberUid?: number;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      status: 'Status',
      searchItem: 'SearchItem',
      type: 'Type',
      resourceType: 'ResourceType',
      sgStatus: 'SgStatus',
      ipVersion: 'IpVersion',
      memberUid: 'MemberUid',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      currentPage: 'string',
      pageSize: 'string',
      regionNo: 'string',
      status: 'string',
      searchItem: 'string',
      type: 'string',
      resourceType: 'string',
      sgStatus: 'string',
      ipVersion: 'string',
      memberUid: 'number',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  assets?: DescribeAssetListResponseBodyAssets[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      assets: 'Assets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      assets: { 'type': 'array', 'itemType': DescribeAssetListResponseBodyAssets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAssetListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAssetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  direction?: string;
  currentPage?: string;
  pageSize?: string;
  source?: string;
  destination?: string;
  description?: string;
  proto?: string;
  aclAction?: string;
  release?: string;
  aclUuid?: string;
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      direction: 'Direction',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      source: 'Source',
      destination: 'Destination',
      description: 'Description',
      proto: 'Proto',
      aclAction: 'AclAction',
      release: 'Release',
      aclUuid: 'AclUuid',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      direction: 'string',
      currentPage: 'string',
      pageSize: 'string',
      source: 'string',
      destination: 'string',
      description: 'string',
      proto: 'string',
      aclAction: 'string',
      release: 'string',
      aclUuid: 'string',
      ipVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyResponseBody extends $tea.Model {
  pageNo?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  policys?: DescribeControlPolicyResponseBodyPolicys[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      policys: 'Policys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
      policys: { 'type': 'array', 'itemType': DescribeControlPolicyResponseBodyPolicys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      ipVersion: 'string',
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
  body: DescribeDomainResolveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainResolveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersRequest extends $tea.Model {
  currentPage?: string;
  pageSize?: string;
  memberUid?: string;
  memberDisplayName?: string;
  memberDesc?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      memberUid: 'MemberUid',
      memberDisplayName: 'MemberDisplayName',
      memberDesc: 'MemberDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      pageSize: 'string',
      memberUid: 'string',
      memberDisplayName: 'string',
      memberDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeInstanceMembersResponseBodyPageInfo;
  members?: DescribeInstanceMembersResponseBodyMembers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeInstanceMembersResponseBodyPageInfo,
      members: { 'type': 'array', 'itemType': DescribeInstanceMembersResponseBodyMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyAdvancedConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
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
  body: DescribePolicyAdvancedConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePolicyAdvancedConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyPriorUsedRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  direction?: string;
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      direction: 'Direction',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      direction: 'string',
      ipVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyPriorUsedResponseBody extends $tea.Model {
  end?: number;
  start?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      start: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyPriorUsedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePolicyPriorUsedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePolicyPriorUsedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupRequest extends $tea.Model {
  lang?: string;
  startTime?: string;
  endTime?: string;
  direction?: string;
  pageSize?: string;
  currentPage?: string;
  dataType?: string;
  ruleSource?: string;
  ruleResult?: string;
  srcIP?: string;
  dstIP?: string;
  vulLevel?: string;
  firewallType?: string;
  srcNetworkInstanceId?: string;
  dstNetworkInstanceId?: string;
  attackType?: string;
  noLocation?: string;
  attackApp?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
      direction: 'Direction',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      dataType: 'DataType',
      ruleSource: 'RuleSource',
      ruleResult: 'RuleResult',
      srcIP: 'SrcIP',
      dstIP: 'DstIP',
      vulLevel: 'VulLevel',
      firewallType: 'FirewallType',
      srcNetworkInstanceId: 'SrcNetworkInstanceId',
      dstNetworkInstanceId: 'DstNetworkInstanceId',
      attackType: 'AttackType',
      noLocation: 'NoLocation',
      attackApp: 'AttackApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      startTime: 'string',
      endTime: 'string',
      direction: 'string',
      pageSize: 'string',
      currentPage: 'string',
      dataType: 'string',
      ruleSource: 'string',
      ruleResult: 'string',
      srcIP: 'string',
      dstIP: 'string',
      vulLevel: 'string',
      firewallType: 'string',
      srcNetworkInstanceId: 'string',
      dstNetworkInstanceId: 'string',
      attackType: 'string',
      noLocation: 'string',
      attackApp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  dataList?: DescribeRiskEventGroupResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      dataList: 'DataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      dataList: { 'type': 'array', 'itemType': DescribeRiskEventGroupResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRiskEventGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRiskEventGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListRequest extends $tea.Model {
  lang?: string;
  firewallConfigureStatus?: string;
  currentPage?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      firewallConfigureStatus: 'FirewallConfigureStatus',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      firewallConfigureStatus: 'string',
      currentPage: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  aclGroupList?: DescribeVpcFirewallAclGroupListResponseBodyAclGroupList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      aclGroupList: 'AclGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      aclGroupList: { 'type': 'array', 'itemType': DescribeVpcFirewallAclGroupListResponseBodyAclGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpcFirewallAclGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpcFirewallAclGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyRequest extends $tea.Model {
  lang?: string;
  vpcFirewallId?: string;
  currentPage?: string;
  pageSize?: string;
  source?: string;
  destination?: string;
  description?: string;
  proto?: string;
  aclAction?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      vpcFirewallId: 'VpcFirewallId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      source: 'Source',
      destination: 'Destination',
      description: 'Description',
      proto: 'Proto',
      aclAction: 'AclAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      vpcFirewallId: 'string',
      currentPage: 'string',
      pageSize: 'string',
      source: 'string',
      destination: 'string',
      description: 'string',
      proto: 'string',
      aclAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyResponseBody extends $tea.Model {
  totalCount?: string;
  requestId?: string;
  policys?: DescribeVpcFirewallControlPolicyResponseBodyPolicys[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      policys: 'Policys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      requestId: 'string',
      policys: { 'type': 'array', 'itemType': DescribeVpcFirewallControlPolicyResponseBodyPolicys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpcFirewallControlPolicyResponseBody,
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
  start?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      start: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallPolicyPriorUsedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpcFirewallPolicyPriorUsedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpcFirewallPolicyPriorUsedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAddressBookRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  addressList?: string;
  description?: string;
  groupName?: string;
  groupUuid?: string;
  autoAddTagEcs?: string;
  tagRelation?: string;
  tagList?: ModifyAddressBookRequestTagList[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      addressList: 'AddressList',
      description: 'Description',
      groupName: 'GroupName',
      groupUuid: 'GroupUuid',
      autoAddTagEcs: 'AutoAddTagEcs',
      tagRelation: 'TagRelation',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      addressList: 'string',
      description: 'string',
      groupName: 'string',
      groupUuid: 'string',
      autoAddTagEcs: 'string',
      tagRelation: 'string',
      tagList: { 'type': 'array', 'itemType': ModifyAddressBookRequestTagList },
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
  body: ModifyAddressBookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAddressBookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  aclAction?: string;
  applicationName?: string;
  description?: string;
  destPort?: string;
  destination?: string;
  destinationType?: string;
  direction?: string;
  proto?: string;
  source?: string;
  aclUuid?: string;
  sourceType?: string;
  destPortType?: string;
  destPortGroup?: string;
  release?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      aclAction: 'AclAction',
      applicationName: 'ApplicationName',
      description: 'Description',
      destPort: 'DestPort',
      destination: 'Destination',
      destinationType: 'DestinationType',
      direction: 'Direction',
      proto: 'Proto',
      source: 'Source',
      aclUuid: 'AclUuid',
      sourceType: 'SourceType',
      destPortType: 'DestPortType',
      destPortGroup: 'DestPortGroup',
      release: 'Release',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      aclAction: 'string',
      applicationName: 'string',
      description: 'string',
      destPort: 'string',
      destination: 'string',
      destinationType: 'string',
      direction: 'string',
      proto: 'string',
      source: 'string',
      aclUuid: 'string',
      sourceType: 'string',
      destPortType: 'string',
      destPortGroup: 'string',
      release: 'string',
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
  body: ModifyControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyControlPolicyPositionRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  direction?: string;
  newOrder?: string;
  oldOrder?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      direction: 'Direction',
      newOrder: 'NewOrder',
      oldOrder: 'OldOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      direction: 'string',
      newOrder: 'string',
      oldOrder: 'string',
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
  body: ModifyControlPolicyPositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ModifyInstanceMemberAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceMemberAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyAdvancedConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  internetSwitch?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      internetSwitch: 'InternetSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      internetSwitch: 'string',
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
  body: ModifyPolicyAdvancedConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPolicyAdvancedConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyRequest extends $tea.Model {
  lang?: string;
  aclAction?: string;
  applicationName?: string;
  description?: string;
  destPort?: string;
  destination?: string;
  destinationType?: string;
  vpcFirewallId?: string;
  proto?: string;
  source?: string;
  aclUuid?: string;
  sourceType?: string;
  destPortType?: string;
  destPortGroup?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      aclAction: 'AclAction',
      applicationName: 'ApplicationName',
      description: 'Description',
      destPort: 'DestPort',
      destination: 'Destination',
      destinationType: 'DestinationType',
      vpcFirewallId: 'VpcFirewallId',
      proto: 'Proto',
      source: 'Source',
      aclUuid: 'AclUuid',
      sourceType: 'SourceType',
      destPortType: 'DestPortType',
      destPortGroup: 'DestPortGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      aclAction: 'string',
      applicationName: 'string',
      description: 'string',
      destPort: 'string',
      destination: 'string',
      destinationType: 'string',
      vpcFirewallId: 'string',
      proto: 'string',
      source: 'string',
      aclUuid: 'string',
      sourceType: 'string',
      destPortType: 'string',
      destPortGroup: 'string',
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
  body: ModifyVpcFirewallControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVpcFirewallControlPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcFirewallControlPolicyPositionRequest extends $tea.Model {
  lang?: string;
  vpcFirewallId?: string;
  newOrder?: string;
  oldOrder?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      vpcFirewallId: 'VpcFirewallId',
      newOrder: 'NewOrder',
      oldOrder: 'OldOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      vpcFirewallId: 'string',
      newOrder: 'string',
      oldOrder: 'string',
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
  body: ModifyVpcFirewallControlPolicyPositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVpcFirewallControlPolicyPositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableAllFwSwitchRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
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
  body: PutDisableAllFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutDisableAllFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDisableFwSwitchRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ipaddrList?: string[];
  regionList?: string[];
  resourceTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ipaddrList: 'IpaddrList',
      regionList: 'RegionList',
      resourceTypeList: 'ResourceTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ipaddrList: { 'type': 'array', 'itemType': 'string' },
      regionList: { 'type': 'array', 'itemType': 'string' },
      resourceTypeList: { 'type': 'array', 'itemType': 'string' },
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
  body: PutDisableFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutDisableFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableAllFwSwitchRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
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
  body: PutEnableAllFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutEnableAllFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnableFwSwitchRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ipaddrList?: string[];
  regionList?: string[];
  resourceTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ipaddrList: 'IpaddrList',
      regionList: 'RegionList',
      resourceTypeList: 'ResourceTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ipaddrList: { 'type': 'array', 'itemType': 'string' },
      regionList: { 'type': 'array', 'itemType': 'string' },
      resourceTypeList: { 'type': 'array', 'itemType': 'string' },
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
  body: PutEnableFwSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutEnableFwSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetVpcFirewallRuleHitCountRequest extends $tea.Model {
  lang?: string;
  aclUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      aclUuid: 'AclUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      aclUuid: 'string',
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
  body: ResetVpcFirewallRuleHitCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetVpcFirewallRuleHitCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressBookRequestTagList extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
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
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAcls extends $tea.Model {
  addressListCount?: number;
  groupUuid?: string;
  autoAddTagEcs?: number;
  description?: string;
  groupName?: string;
  referenceCount?: number;
  groupType?: string;
  tagRelation?: string;
  global?: number;
  tagList?: DescribeAddressBookResponseBodyAclsTagList[];
  addressList?: string[];
  static names(): { [key: string]: string } {
    return {
      addressListCount: 'AddressListCount',
      groupUuid: 'GroupUuid',
      autoAddTagEcs: 'AutoAddTagEcs',
      description: 'Description',
      groupName: 'GroupName',
      referenceCount: 'ReferenceCount',
      groupType: 'GroupType',
      tagRelation: 'TagRelation',
      global: 'Global',
      tagList: 'TagList',
      addressList: 'AddressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressListCount: 'number',
      groupUuid: 'string',
      autoAddTagEcs: 'number',
      description: 'string',
      groupName: 'string',
      referenceCount: 'number',
      groupType: 'string',
      tagRelation: 'string',
      global: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAclsTagList },
      addressList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetListResponseBodyAssets extends $tea.Model {
  riskLevel?: string;
  bindInstanceName?: string;
  type?: string;
  sgStatusTime?: number;
  resourceInstanceId?: string;
  memberUid?: number;
  intranetAddress?: string;
  syncStatus?: string;
  aliUid?: number;
  protectStatus?: string;
  internetAddress?: string;
  bindInstanceId?: string;
  regionID?: string;
  regionStatus?: string;
  resourceType?: string;
  ipVersion?: number;
  sgStatus?: string;
  note?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      bindInstanceName: 'BindInstanceName',
      type: 'Type',
      sgStatusTime: 'SgStatusTime',
      resourceInstanceId: 'ResourceInstanceId',
      memberUid: 'MemberUid',
      intranetAddress: 'IntranetAddress',
      syncStatus: 'SyncStatus',
      aliUid: 'AliUid',
      protectStatus: 'ProtectStatus',
      internetAddress: 'InternetAddress',
      bindInstanceId: 'BindInstanceId',
      regionID: 'RegionID',
      regionStatus: 'RegionStatus',
      resourceType: 'ResourceType',
      ipVersion: 'IpVersion',
      sgStatus: 'SgStatus',
      note: 'Note',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      bindInstanceName: 'string',
      type: 'string',
      sgStatusTime: 'number',
      resourceInstanceId: 'string',
      memberUid: 'number',
      intranetAddress: 'string',
      syncStatus: 'string',
      aliUid: 'number',
      protectStatus: 'string',
      internetAddress: 'string',
      bindInstanceId: 'string',
      regionID: 'string',
      regionStatus: 'string',
      resourceType: 'string',
      ipVersion: 'number',
      sgStatus: 'string',
      note: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeControlPolicyResponseBodyPolicys extends $tea.Model {
  direction?: string;
  order?: number;
  sourceType?: string;
  applicationName?: string;
  hitTimes?: number;
  description?: string;
  sourceGroupType?: string;
  dnsResultTime?: number;
  dnsResult?: string;
  proto?: string;
  destinationGroupType?: string;
  destination?: string;
  hitLastTime?: number;
  destPortGroup?: string;
  aclUuid?: string;
  destPortType?: string;
  source?: string;
  destinationType?: string;
  destPort?: string;
  ipVersion?: number;
  aclAction?: string;
  release?: string;
  applicationId?: string;
  destinationGroupCidrs?: string[];
  destPortGroupPorts?: string[];
  sourceGroupCidrs?: string[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      order: 'Order',
      sourceType: 'SourceType',
      applicationName: 'ApplicationName',
      hitTimes: 'HitTimes',
      description: 'Description',
      sourceGroupType: 'SourceGroupType',
      dnsResultTime: 'DnsResultTime',
      dnsResult: 'DnsResult',
      proto: 'Proto',
      destinationGroupType: 'DestinationGroupType',
      destination: 'Destination',
      hitLastTime: 'HitLastTime',
      destPortGroup: 'DestPortGroup',
      aclUuid: 'AclUuid',
      destPortType: 'DestPortType',
      source: 'Source',
      destinationType: 'DestinationType',
      destPort: 'DestPort',
      ipVersion: 'IpVersion',
      aclAction: 'AclAction',
      release: 'Release',
      applicationId: 'ApplicationId',
      destinationGroupCidrs: 'DestinationGroupCidrs',
      destPortGroupPorts: 'DestPortGroupPorts',
      sourceGroupCidrs: 'SourceGroupCidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      order: 'number',
      sourceType: 'string',
      applicationName: 'string',
      hitTimes: 'number',
      description: 'string',
      sourceGroupType: 'string',
      dnsResultTime: 'number',
      dnsResult: 'string',
      proto: 'string',
      destinationGroupType: 'string',
      destination: 'string',
      hitLastTime: 'number',
      destPortGroup: 'string',
      aclUuid: 'string',
      destPortType: 'string',
      source: 'string',
      destinationType: 'string',
      destPort: 'string',
      ipVersion: 'number',
      aclAction: 'string',
      release: 'string',
      applicationId: 'string',
      destinationGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      destPortGroupPorts: { 'type': 'array', 'itemType': 'string' },
      sourceGroupCidrs: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeInstanceMembersResponseBodyMembers extends $tea.Model {
  memberDesc?: string;
  memberDisplayName?: string;
  createTime?: number;
  memberUid?: number;
  memberStatus?: string;
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      memberDesc: 'MemberDesc',
      memberDisplayName: 'MemberDisplayName',
      createTime: 'CreateTime',
      memberUid: 'MemberUid',
      memberStatus: 'MemberStatus',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberDesc: 'string',
      memberDisplayName: 'string',
      createTime: 'number',
      memberUid: 'number',
      memberStatus: 'string',
      modifyTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList extends $tea.Model {
  resourceInstanceName?: string;
  resourcePrivateIP?: string;
  resourceInstanceId?: string;
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      resourceInstanceName: 'ResourceInstanceName',
      resourcePrivateIP: 'ResourcePrivateIP',
      resourceInstanceId: 'ResourceInstanceId',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceInstanceName: 'string',
      resourcePrivateIP: 'string',
      resourceInstanceId: 'string',
      regionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo extends $tea.Model {
  ecsInstanceName?: string;
  networkInstanceName?: string;
  networkInstanceId?: string;
  ecsInstanceId?: string;
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceName: 'EcsInstanceName',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceId: 'NetworkInstanceId',
      ecsInstanceId: 'EcsInstanceId',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceName: 'string',
      networkInstanceName: 'string',
      networkInstanceId: 'string',
      ecsInstanceId: 'string',
      regionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListVpcDstInfo extends $tea.Model {
  ecsInstanceName?: string;
  networkInstanceName?: string;
  networkInstanceId?: string;
  ecsInstanceId?: string;
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceName: 'EcsInstanceName',
      networkInstanceName: 'NetworkInstanceName',
      networkInstanceId: 'NetworkInstanceId',
      ecsInstanceId: 'EcsInstanceId',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceName: 'string',
      networkInstanceName: 'string',
      networkInstanceId: 'string',
      ecsInstanceId: 'string',
      regionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListIPLocationInfo extends $tea.Model {
  cityId?: string;
  countryName?: string;
  cityName?: string;
  countryId?: string;
  static names(): { [key: string]: string } {
    return {
      cityId: 'CityId',
      countryName: 'CountryName',
      cityName: 'CityName',
      countryId: 'CountryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityId: 'string',
      countryName: 'string',
      cityName: 'string',
      countryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataList extends $tea.Model {
  direction?: string;
  eventName?: string;
  dstIP?: string;
  attackType?: number;
  tag?: string;
  ruleId?: string;
  eventId?: string;
  resourceType?: string;
  firstEventTime?: number;
  description?: string;
  eventCount?: number;
  vulLevel?: number;
  attackApp?: string;
  ruleSource?: number;
  ruleResult?: number;
  srcIP?: string;
  lastEventTime?: number;
  resourcePrivateIPList?: DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList[];
  srcPrivateIPList?: string[];
  vpcSrcInfo?: DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo;
  vpcDstInfo?: DescribeRiskEventGroupResponseBodyDataListVpcDstInfo;
  IPLocationInfo?: DescribeRiskEventGroupResponseBodyDataListIPLocationInfo;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      eventName: 'EventName',
      dstIP: 'DstIP',
      attackType: 'AttackType',
      tag: 'Tag',
      ruleId: 'RuleId',
      eventId: 'EventId',
      resourceType: 'ResourceType',
      firstEventTime: 'FirstEventTime',
      description: 'Description',
      eventCount: 'EventCount',
      vulLevel: 'VulLevel',
      attackApp: 'AttackApp',
      ruleSource: 'RuleSource',
      ruleResult: 'RuleResult',
      srcIP: 'SrcIP',
      lastEventTime: 'LastEventTime',
      resourcePrivateIPList: 'ResourcePrivateIPList',
      srcPrivateIPList: 'SrcPrivateIPList',
      vpcSrcInfo: 'VpcSrcInfo',
      vpcDstInfo: 'VpcDstInfo',
      IPLocationInfo: 'IPLocationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      eventName: 'string',
      dstIP: 'string',
      attackType: 'number',
      tag: 'string',
      ruleId: 'string',
      eventId: 'string',
      resourceType: 'string',
      firstEventTime: 'number',
      description: 'string',
      eventCount: 'number',
      vulLevel: 'number',
      attackApp: 'string',
      ruleSource: 'number',
      ruleResult: 'number',
      srcIP: 'string',
      lastEventTime: 'number',
      resourcePrivateIPList: { 'type': 'array', 'itemType': DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList },
      srcPrivateIPList: { 'type': 'array', 'itemType': 'string' },
      vpcSrcInfo: DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo,
      vpcDstInfo: DescribeRiskEventGroupResponseBodyDataListVpcDstInfo,
      IPLocationInfo: DescribeRiskEventGroupResponseBodyDataListIPLocationInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListResponseBodyAclGroupList extends $tea.Model {
  aclGroupId?: string;
  aclGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      aclGroupId: 'AclGroupId',
      aclGroupName: 'AclGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclGroupId: 'string',
      aclGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallControlPolicyResponseBodyPolicys extends $tea.Model {
  direction?: string;
  destination?: string;
  order?: number;
  destPortGroup?: string;
  sourceType?: string;
  applicationName?: string;
  aclUuid?: string;
  destPortType?: string;
  source?: string;
  destinationType?: string;
  hitTimes?: number;
  destPort?: string;
  description?: string;
  aclAction?: string;
  applicationId?: string;
  proto?: string;
  destinationGroupCidrs?: string[];
  destPortGroupPorts?: string[];
  sourceGroupCidrs?: string[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      destination: 'Destination',
      order: 'Order',
      destPortGroup: 'DestPortGroup',
      sourceType: 'SourceType',
      applicationName: 'ApplicationName',
      aclUuid: 'AclUuid',
      destPortType: 'DestPortType',
      source: 'Source',
      destinationType: 'DestinationType',
      hitTimes: 'HitTimes',
      destPort: 'DestPort',
      description: 'Description',
      aclAction: 'AclAction',
      applicationId: 'ApplicationId',
      proto: 'Proto',
      destinationGroupCidrs: 'DestinationGroupCidrs',
      destPortGroupPorts: 'DestPortGroupPorts',
      sourceGroupCidrs: 'SourceGroupCidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      destination: 'string',
      order: 'number',
      destPortGroup: 'string',
      sourceType: 'string',
      applicationName: 'string',
      aclUuid: 'string',
      destPortType: 'string',
      source: 'string',
      destinationType: 'string',
      hitTimes: 'number',
      destPort: 'string',
      description: 'string',
      aclAction: 'string',
      applicationId: 'string',
      proto: 'string',
      destinationGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      destPortGroupPorts: { 'type': 'array', 'itemType': 'string' },
      sourceGroupCidrs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAddressBookRequestTagList extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAddressBookResponse>(await this.doRPCRequest("AddAddressBook", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new AddAddressBookResponse({}));
  }

  async addAddressBook(request: AddAddressBookRequest): Promise<AddAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAddressBookWithOptions(request, runtime);
  }

  async addControlPolicyWithOptions(request: AddControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<AddControlPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddControlPolicyResponse>(await this.doRPCRequest("AddControlPolicy", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new AddControlPolicyResponse({}));
  }

  async addControlPolicy(request: AddControlPolicyRequest): Promise<AddControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addControlPolicyWithOptions(request, runtime);
  }

  async addInstanceMembersWithOptions(request: AddInstanceMembersRequest, runtime: $Util.RuntimeOptions): Promise<AddInstanceMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddInstanceMembersResponse>(await this.doRPCRequest("AddInstanceMembers", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new AddInstanceMembersResponse({}));
  }

  async addInstanceMembers(request: AddInstanceMembersRequest): Promise<AddInstanceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addInstanceMembersWithOptions(request, runtime);
  }

  async createVpcFirewallControlPolicyWithOptions(request: CreateVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVpcFirewallControlPolicyResponse>(await this.doRPCRequest("CreateVpcFirewallControlPolicy", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVpcFirewallControlPolicyResponse({}));
  }

  async createVpcFirewallControlPolicy(request: CreateVpcFirewallControlPolicyRequest): Promise<CreateVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  async deleteAddressBookWithOptions(request: DeleteAddressBookRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAddressBookResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAddressBookResponse>(await this.doRPCRequest("DeleteAddressBook", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAddressBookResponse({}));
  }

  async deleteAddressBook(request: DeleteAddressBookRequest): Promise<DeleteAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAddressBookWithOptions(request, runtime);
  }

  async deleteControlPolicyWithOptions(request: DeleteControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteControlPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteControlPolicyResponse>(await this.doRPCRequest("DeleteControlPolicy", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteControlPolicyResponse({}));
  }

  async deleteControlPolicy(request: DeleteControlPolicyRequest): Promise<DeleteControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteControlPolicyWithOptions(request, runtime);
  }

  async deleteInstanceMembersWithOptions(request: DeleteInstanceMembersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceMembersResponse>(await this.doRPCRequest("DeleteInstanceMembers", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceMembersResponse({}));
  }

  async deleteInstanceMembers(request: DeleteInstanceMembersRequest): Promise<DeleteInstanceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceMembersWithOptions(request, runtime);
  }

  async deleteVpcFirewallControlPolicyWithOptions(request: DeleteVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVpcFirewallControlPolicyResponse>(await this.doRPCRequest("DeleteVpcFirewallControlPolicy", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVpcFirewallControlPolicyResponse({}));
  }

  async deleteVpcFirewallControlPolicy(request: DeleteVpcFirewallControlPolicyRequest): Promise<DeleteVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  async describeAddressBookWithOptions(request: DescribeAddressBookRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAddressBookResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAddressBookResponse>(await this.doRPCRequest("DescribeAddressBook", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAddressBookResponse({}));
  }

  async describeAddressBook(request: DescribeAddressBookRequest): Promise<DescribeAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAddressBookWithOptions(request, runtime);
  }

  async describeAssetListWithOptions(request: DescribeAssetListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssetListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAssetListResponse>(await this.doRPCRequest("DescribeAssetList", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAssetListResponse({}));
  }

  async describeAssetList(request: DescribeAssetListRequest): Promise<DescribeAssetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetListWithOptions(request, runtime);
  }

  async describeControlPolicyWithOptions(request: DescribeControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeControlPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeControlPolicyResponse>(await this.doRPCRequest("DescribeControlPolicy", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeControlPolicyResponse({}));
  }

  async describeControlPolicy(request: DescribeControlPolicyRequest): Promise<DescribeControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeControlPolicyWithOptions(request, runtime);
  }

  async describeDomainResolveWithOptions(request: DescribeDomainResolveRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainResolveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainResolveResponse>(await this.doRPCRequest("DescribeDomainResolve", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainResolveResponse({}));
  }

  async describeDomainResolve(request: DescribeDomainResolveRequest): Promise<DescribeDomainResolveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainResolveWithOptions(request, runtime);
  }

  async describeInstanceMembersWithOptions(request: DescribeInstanceMembersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceMembersResponse>(await this.doRPCRequest("DescribeInstanceMembers", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceMembersResponse({}));
  }

  async describeInstanceMembers(request: DescribeInstanceMembersRequest): Promise<DescribeInstanceMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceMembersWithOptions(request, runtime);
  }

  async describePolicyAdvancedConfigWithOptions(request: DescribePolicyAdvancedConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyAdvancedConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePolicyAdvancedConfigResponse>(await this.doRPCRequest("DescribePolicyAdvancedConfig", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePolicyAdvancedConfigResponse({}));
  }

  async describePolicyAdvancedConfig(request: DescribePolicyAdvancedConfigRequest): Promise<DescribePolicyAdvancedConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyAdvancedConfigWithOptions(request, runtime);
  }

  async describePolicyPriorUsedWithOptions(request: DescribePolicyPriorUsedRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyPriorUsedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePolicyPriorUsedResponse>(await this.doRPCRequest("DescribePolicyPriorUsed", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePolicyPriorUsedResponse({}));
  }

  async describePolicyPriorUsed(request: DescribePolicyPriorUsedRequest): Promise<DescribePolicyPriorUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyPriorUsedWithOptions(request, runtime);
  }

  async describeRiskEventGroupWithOptions(request: DescribeRiskEventGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskEventGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRiskEventGroupResponse>(await this.doRPCRequest("DescribeRiskEventGroup", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRiskEventGroupResponse({}));
  }

  async describeRiskEventGroup(request: DescribeRiskEventGroupRequest): Promise<DescribeRiskEventGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskEventGroupWithOptions(request, runtime);
  }

  async describeVpcFirewallAclGroupListWithOptions(request: DescribeVpcFirewallAclGroupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallAclGroupListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpcFirewallAclGroupListResponse>(await this.doRPCRequest("DescribeVpcFirewallAclGroupList", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpcFirewallAclGroupListResponse({}));
  }

  async describeVpcFirewallAclGroupList(request: DescribeVpcFirewallAclGroupListRequest): Promise<DescribeVpcFirewallAclGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallAclGroupListWithOptions(request, runtime);
  }

  async describeVpcFirewallControlPolicyWithOptions(request: DescribeVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpcFirewallControlPolicyResponse>(await this.doRPCRequest("DescribeVpcFirewallControlPolicy", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpcFirewallControlPolicyResponse({}));
  }

  async describeVpcFirewallControlPolicy(request: DescribeVpcFirewallControlPolicyRequest): Promise<DescribeVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  async describeVpcFirewallPolicyPriorUsedWithOptions(request: DescribeVpcFirewallPolicyPriorUsedRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcFirewallPolicyPriorUsedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpcFirewallPolicyPriorUsedResponse>(await this.doRPCRequest("DescribeVpcFirewallPolicyPriorUsed", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpcFirewallPolicyPriorUsedResponse({}));
  }

  async describeVpcFirewallPolicyPriorUsed(request: DescribeVpcFirewallPolicyPriorUsedRequest): Promise<DescribeVpcFirewallPolicyPriorUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcFirewallPolicyPriorUsedWithOptions(request, runtime);
  }

  async modifyAddressBookWithOptions(request: ModifyAddressBookRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAddressBookResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAddressBookResponse>(await this.doRPCRequest("ModifyAddressBook", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAddressBookResponse({}));
  }

  async modifyAddressBook(request: ModifyAddressBookRequest): Promise<ModifyAddressBookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAddressBookWithOptions(request, runtime);
  }

  async modifyControlPolicyWithOptions(request: ModifyControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyControlPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyControlPolicyResponse>(await this.doRPCRequest("ModifyControlPolicy", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyControlPolicyResponse({}));
  }

  async modifyControlPolicy(request: ModifyControlPolicyRequest): Promise<ModifyControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyControlPolicyWithOptions(request, runtime);
  }

  async modifyControlPolicyPositionWithOptions(request: ModifyControlPolicyPositionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyControlPolicyPositionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyControlPolicyPositionResponse>(await this.doRPCRequest("ModifyControlPolicyPosition", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyControlPolicyPositionResponse({}));
  }

  async modifyControlPolicyPosition(request: ModifyControlPolicyPositionRequest): Promise<ModifyControlPolicyPositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyControlPolicyPositionWithOptions(request, runtime);
  }

  async modifyInstanceMemberAttributesWithOptions(request: ModifyInstanceMemberAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceMemberAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceMemberAttributesResponse>(await this.doRPCRequest("ModifyInstanceMemberAttributes", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceMemberAttributesResponse({}));
  }

  async modifyInstanceMemberAttributes(request: ModifyInstanceMemberAttributesRequest): Promise<ModifyInstanceMemberAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceMemberAttributesWithOptions(request, runtime);
  }

  async modifyPolicyAdvancedConfigWithOptions(request: ModifyPolicyAdvancedConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyAdvancedConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPolicyAdvancedConfigResponse>(await this.doRPCRequest("ModifyPolicyAdvancedConfig", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPolicyAdvancedConfigResponse({}));
  }

  async modifyPolicyAdvancedConfig(request: ModifyPolicyAdvancedConfigRequest): Promise<ModifyPolicyAdvancedConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyAdvancedConfigWithOptions(request, runtime);
  }

  async modifyVpcFirewallControlPolicyWithOptions(request: ModifyVpcFirewallControlPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallControlPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVpcFirewallControlPolicyResponse>(await this.doRPCRequest("ModifyVpcFirewallControlPolicy", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVpcFirewallControlPolicyResponse({}));
  }

  async modifyVpcFirewallControlPolicy(request: ModifyVpcFirewallControlPolicyRequest): Promise<ModifyVpcFirewallControlPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallControlPolicyWithOptions(request, runtime);
  }

  async modifyVpcFirewallControlPolicyPositionWithOptions(request: ModifyVpcFirewallControlPolicyPositionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcFirewallControlPolicyPositionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVpcFirewallControlPolicyPositionResponse>(await this.doRPCRequest("ModifyVpcFirewallControlPolicyPosition", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVpcFirewallControlPolicyPositionResponse({}));
  }

  async modifyVpcFirewallControlPolicyPosition(request: ModifyVpcFirewallControlPolicyPositionRequest): Promise<ModifyVpcFirewallControlPolicyPositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcFirewallControlPolicyPositionWithOptions(request, runtime);
  }

  async putDisableAllFwSwitchWithOptions(request: PutDisableAllFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutDisableAllFwSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutDisableAllFwSwitchResponse>(await this.doRPCRequest("PutDisableAllFwSwitch", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new PutDisableAllFwSwitchResponse({}));
  }

  async putDisableAllFwSwitch(request: PutDisableAllFwSwitchRequest): Promise<PutDisableAllFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putDisableAllFwSwitchWithOptions(request, runtime);
  }

  async putDisableFwSwitchWithOptions(request: PutDisableFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutDisableFwSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutDisableFwSwitchResponse>(await this.doRPCRequest("PutDisableFwSwitch", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new PutDisableFwSwitchResponse({}));
  }

  async putDisableFwSwitch(request: PutDisableFwSwitchRequest): Promise<PutDisableFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putDisableFwSwitchWithOptions(request, runtime);
  }

  async putEnableAllFwSwitchWithOptions(request: PutEnableAllFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutEnableAllFwSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutEnableAllFwSwitchResponse>(await this.doRPCRequest("PutEnableAllFwSwitch", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new PutEnableAllFwSwitchResponse({}));
  }

  async putEnableAllFwSwitch(request: PutEnableAllFwSwitchRequest): Promise<PutEnableAllFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEnableAllFwSwitchWithOptions(request, runtime);
  }

  async putEnableFwSwitchWithOptions(request: PutEnableFwSwitchRequest, runtime: $Util.RuntimeOptions): Promise<PutEnableFwSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutEnableFwSwitchResponse>(await this.doRPCRequest("PutEnableFwSwitch", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new PutEnableFwSwitchResponse({}));
  }

  async putEnableFwSwitch(request: PutEnableFwSwitchRequest): Promise<PutEnableFwSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEnableFwSwitchWithOptions(request, runtime);
  }

  async resetVpcFirewallRuleHitCountWithOptions(request: ResetVpcFirewallRuleHitCountRequest, runtime: $Util.RuntimeOptions): Promise<ResetVpcFirewallRuleHitCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetVpcFirewallRuleHitCountResponse>(await this.doRPCRequest("ResetVpcFirewallRuleHitCount", "2017-12-07", "HTTPS", "POST", "AK", "json", req, runtime), new ResetVpcFirewallRuleHitCountResponse({}));
  }

  async resetVpcFirewallRuleHitCount(request: ResetVpcFirewallRuleHitCountRequest): Promise<ResetVpcFirewallRuleHitCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetVpcFirewallRuleHitCountWithOptions(request, runtime);
  }

}
