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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddControlPolicyResponseBody extends $tea.Model {
  requestId?: string;
  aclUuid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aclUuid: 'AclUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aclUuid: 'string',
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

export class CreateVpcFirewallControlPolicyRequest extends $tea.Model {
  sourceIp?: string;
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
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  requestId?: string;
  aclUuid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aclUuid: 'AclUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aclUuid: 'string',
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

export class DeleteVpcFirewallControlPolicyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  aclUuid?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      aclUuid: 'AclUuid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class DescribePolicyPriorUsedRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  direction?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      direction: 'Direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      direction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyPriorUsedResponseBody extends $tea.Model {
  requestId?: string;
  start?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      start: 'Start',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      start: 'number',
      end: 'number',
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

export class DescribeVpcFirewallControlPolicyRequest extends $tea.Model {
  sourceIp?: string;
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
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  sourceIp?: string;
  lang?: string;
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      vpcFirewallId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallPolicyPriorUsedResponseBody extends $tea.Model {
  requestId?: string;
  start?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      start: 'Start',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      start: 'number',
      end: 'number',
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
  sourceIp?: string;
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
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  sourceIp?: string;
  lang?: string;
  vpcFirewallId?: string;
  newOrder?: string;
  oldOrder?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      vpcFirewallId: 'VpcFirewallId',
      newOrder: 'NewOrder',
      oldOrder: 'OldOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  lang?: string;
  aclUuid?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      aclUuid: 'AclUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class DescribeVpcFirewallControlPolicyResponseBodyPolicys extends $tea.Model {
  direction?: string;
  destination?: string;
  order?: number;
  applicationName?: string;
  sourceType?: string;
  destPortGroup?: string;
  aclUuid?: string;
  destPortGroupPorts?: string[];
  destPortType?: string;
  source?: string;
  destinationType?: string;
  hitTimes?: number;
  sourceGroupCidrs?: string[];
  destPort?: string;
  destinationGroupCidrs?: string[];
  description?: string;
  aclAction?: string;
  applicationId?: string;
  proto?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      destination: 'Destination',
      order: 'Order',
      applicationName: 'ApplicationName',
      sourceType: 'SourceType',
      destPortGroup: 'DestPortGroup',
      aclUuid: 'AclUuid',
      destPortGroupPorts: 'DestPortGroupPorts',
      destPortType: 'DestPortType',
      source: 'Source',
      destinationType: 'DestinationType',
      hitTimes: 'HitTimes',
      sourceGroupCidrs: 'SourceGroupCidrs',
      destPort: 'DestPort',
      destinationGroupCidrs: 'DestinationGroupCidrs',
      description: 'Description',
      aclAction: 'AclAction',
      applicationId: 'ApplicationId',
      proto: 'Proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      destination: 'string',
      order: 'number',
      applicationName: 'string',
      sourceType: 'string',
      destPortGroup: 'string',
      aclUuid: 'string',
      destPortGroupPorts: { 'type': 'array', 'itemType': 'string' },
      destPortType: 'string',
      source: 'string',
      destinationType: 'string',
      hitTimes: 'number',
      sourceGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      destPort: 'string',
      destinationGroupCidrs: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      aclAction: 'string',
      applicationId: 'string',
      proto: 'string',
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
