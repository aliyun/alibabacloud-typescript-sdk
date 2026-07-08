// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddressBookResponseBodyAclsAckLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the pod label in the ACK cluster.
   * 
   * @example
   * app
   */
  key?: string;
  /**
   * @remarks
   * The value of the pod label in the ACK cluster.
   * 
   * @example
   * storage-operator
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAclsAddresses extends $dara.Model {
  /**
   * @remarks
   * The address information of the address book.
   * 
   * @example
   * 192.168.0.1/32
   */
  address?: string;
  /**
   * @remarks
   * The description of the individual address.
   * 
   * @example
   * Single Address Description
   */
  note?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      note: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAclsAssetRegionResourceTypesResourceTypeIpv4 extends $dara.Model {
  /**
   * @remarks
   * The asset type: AIGatewayEIP.
   * 
   * @example
   * false
   */
  aiGatewayEIP?: boolean;
  /**
   * @remarks
   * The asset type: AlbEIP.
   * 
   * @example
   * false
   */
  albEIP?: boolean;
  /**
   * @remarks
   * The asset type: ApigEIP.
   * 
   * @example
   * false
   */
  apiGatewayEIP?: boolean;
  /**
   * @remarks
   * The asset type: BastionHostEgressIP.
   * 
   * @example
   * false
   */
  bastionHostEgressIP?: boolean;
  /**
   * @remarks
   * The asset type: BastionHostIP.
   * 
   * @example
   * false
   */
  bastionHostIP?: boolean;
  /**
   * @remarks
   * The asset type: BastionHostIngressIP.
   * 
   * @example
   * false
   */
  bastionHostIngressIP?: boolean;
  /**
   * @remarks
   * The asset type: EIP.
   * 
   * @example
   * false
   */
  EIP?: boolean;
  /**
   * @remarks
   * The asset type: EcsEIP.
   * 
   * @example
   * false
   */
  ecsEIP?: boolean;
  /**
   * @remarks
   * The asset type: EcsPublicIP.
   * 
   * @example
   * false
   */
  ecsPublicIP?: boolean;
  /**
   * @remarks
   * The asset type: EniEIP.
   * 
   * @example
   * false
   */
  eniEIP?: boolean;
  /**
   * @remarks
   * The asset type: GaEIP.
   * 
   * @example
   * false
   */
  gaEIP?: boolean;
  /**
   * @remarks
   * The asset type: HAVIP.
   * 
   * @example
   * false
   */
  HAVIP?: boolean;
  /**
   * @remarks
   * The asset type: NatEIP.
   * 
   * @example
   * false
   */
  natEIP?: boolean;
  /**
   * @remarks
   * The asset type: NatPublicIP.
   * 
   * @example
   * false
   */
  natPublicIP?: boolean;
  /**
   * @remarks
   * The asset type: NlbEIP.
   * 
   * @example
   * false
   */
  nlbEIP?: boolean;
  /**
   * @remarks
   * The asset type: SlbEIP.
   * 
   * @example
   * true
   */
  slbEIP?: boolean;
  /**
   * @remarks
   * The asset type: SlbPublicIP.
   * 
   * @example
   * false
   */
  slbPublicIP?: boolean;
  static names(): { [key: string]: string } {
    return {
      aiGatewayEIP: 'AiGatewayEIP',
      albEIP: 'AlbEIP',
      apiGatewayEIP: 'ApiGatewayEIP',
      bastionHostEgressIP: 'BastionHostEgressIP',
      bastionHostIP: 'BastionHostIP',
      bastionHostIngressIP: 'BastionHostIngressIP',
      EIP: 'EIP',
      ecsEIP: 'EcsEIP',
      ecsPublicIP: 'EcsPublicIP',
      eniEIP: 'EniEIP',
      gaEIP: 'GaEIP',
      HAVIP: 'HAVIP',
      natEIP: 'NatEIP',
      natPublicIP: 'NatPublicIP',
      nlbEIP: 'NlbEIP',
      slbEIP: 'SlbEIP',
      slbPublicIP: 'SlbPublicIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiGatewayEIP: 'boolean',
      albEIP: 'boolean',
      apiGatewayEIP: 'boolean',
      bastionHostEgressIP: 'boolean',
      bastionHostIP: 'boolean',
      bastionHostIngressIP: 'boolean',
      EIP: 'boolean',
      ecsEIP: 'boolean',
      ecsPublicIP: 'boolean',
      eniEIP: 'boolean',
      gaEIP: 'boolean',
      HAVIP: 'boolean',
      natEIP: 'boolean',
      natPublicIP: 'boolean',
      nlbEIP: 'boolean',
      slbEIP: 'boolean',
      slbPublicIP: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAclsAssetRegionResourceTypesResourceTypeIpv6 extends $dara.Model {
  /**
   * @remarks
   * The asset type: AIGatewayEIPv6.
   * 
   * @example
   * false
   */
  aiGatewayEIPv6?: boolean;
  /**
   * @remarks
   * The asset type: AlbIPv6.
   * 
   * @example
   * false
   */
  albIPv6?: boolean;
  /**
   * @remarks
   * The asset type: ApigEIPv6.
   * 
   * @example
   * false
   */
  apiGatewayEIPv6?: boolean;
  /**
   * @remarks
   * The asset type: EcsIPv6.
   * 
   * @example
   * false
   */
  ecsIPv6?: boolean;
  /**
   * @remarks
   * The asset type: EniEIPv6.
   * 
   * @example
   * false
   */
  eniEIPv6?: boolean;
  /**
   * @remarks
   * The asset type: GaEIPv6.
   * 
   * @example
   * false
   */
  gaEIPv6?: boolean;
  /**
   * @remarks
   * The asset type: NlbIPv6.
   * 
   * @example
   * false
   */
  nlbIPv6?: boolean;
  /**
   * @remarks
   * The asset type: SlbIPv6.
   * 
   * @example
   * false
   */
  slbIPv6?: boolean;
  static names(): { [key: string]: string } {
    return {
      aiGatewayEIPv6: 'AiGatewayEIPv6',
      albIPv6: 'AlbIPv6',
      apiGatewayEIPv6: 'ApiGatewayEIPv6',
      ecsIPv6: 'EcsIPv6',
      eniEIPv6: 'EniEIPv6',
      gaEIPv6: 'GaEIPv6',
      nlbIPv6: 'NlbIPv6',
      slbIPv6: 'SlbIPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiGatewayEIPv6: 'boolean',
      albIPv6: 'boolean',
      apiGatewayEIPv6: 'boolean',
      ecsIPv6: 'boolean',
      eniEIPv6: 'boolean',
      gaEIPv6: 'boolean',
      nlbIPv6: 'boolean',
      slbIPv6: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAclsAssetRegionResourceTypesResourceType extends $dara.Model {
  /**
   * @remarks
   * The IPv4 asset type.
   */
  ipv4?: DescribeAddressBookResponseBodyAclsAssetRegionResourceTypesResourceTypeIpv4;
  /**
   * @remarks
   * The IPv6 asset type.
   */
  ipv6?: DescribeAddressBookResponseBodyAclsAssetRegionResourceTypesResourceTypeIpv6;
  static names(): { [key: string]: string } {
    return {
      ipv4: 'Ipv4',
      ipv6: 'Ipv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4: DescribeAddressBookResponseBodyAclsAssetRegionResourceTypesResourceTypeIpv4,
      ipv6: DescribeAddressBookResponseBodyAclsAssetRegionResourceTypesResourceTypeIpv6,
    };
  }

  validate() {
    if(this.ipv4 && typeof (this.ipv4 as any).validate === 'function') {
      (this.ipv4 as any).validate();
    }
    if(this.ipv6 && typeof (this.ipv6 as any).validate === 'function') {
      (this.ipv6 as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAclsAssetRegionResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * all
   */
  assetRegionId?: string;
  /**
   * @remarks
   * The asset type.
   */
  resourceType?: DescribeAddressBookResponseBodyAclsAssetRegionResourceTypesResourceType;
  static names(): { [key: string]: string } {
    return {
      assetRegionId: 'AssetRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetRegionId: 'string',
      resourceType: DescribeAddressBookResponseBodyAclsAssetRegionResourceTypesResourceType,
    };
  }

  validate() {
    if(this.resourceType && typeof (this.resourceType as any).validate === 'function') {
      (this.resourceType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAclsTagList extends $dara.Model {
  /**
   * @remarks
   * The key of the ECS tag.
   * 
   * @example
   * company
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the ECS tag.
   * 
   * @example
   * ALL VALUE
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBodyAcls extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster connector.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab
   */
  ackClusterConnectorId?: string;
  /**
   * @remarks
   * The name of the ACK cluster connector.
   * 
   * @example
   * ack-cluster-connector-name
   */
  ackClusterConnectorName?: string;
  /**
   * @remarks
   * The list of pod labels in the ACK cluster.
   */
  ackLabels?: DescribeAddressBookResponseBodyAclsAckLabels[];
  /**
   * @remarks
   * The list of pod namespaces in the ACK cluster.
   */
  ackNamespaces?: string[];
  /**
   * @remarks
   * The address list of the address book.
   */
  addressList?: string[];
  /**
   * @remarks
   * The number of addresses in the address book.
   * 
   * @example
   * 2
   */
  addressListCount?: number;
  /**
   * @remarks
   * The address list of the address book that includes descriptions for individual addresses.
   */
  addresses?: DescribeAddressBookResponseBodyAclsAddresses[];
  /**
   * @remarks
   * The list of member accounts for the asset address book.
   */
  assetMemberUids?: number[];
  /**
   * @remarks
   * The list of regions and resource types for the asset address book.
   */
  assetRegionResourceTypes?: DescribeAddressBookResponseBodyAclsAssetRegionResourceTypes[];
  /**
   * @remarks
   * Indicates whether the public IP addresses of ECS instances that match new tags are automatically added to the address book. Valid values:
   * - **0**: The public IP addresses are not automatically added.
   * - **1**: The public IP addresses are automatically added.
   * 
   * @example
   * 1
   */
  autoAddTagEcs?: number;
  /**
   * @remarks
   * The description of the address book.
   * 
   * @example
   * DEMO
   */
  description?: string;
  /**
   * @remarks
   * The name of the address book.
   * 
   * @example
   * demo_address_book
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the address book.
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The unique ID of the address book.
   * 
   * @example
   * f04ac7ce-628b-4cb7-be61-310222b7****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The number of times the address book is referenced.
   * 
   * @example
   * 3
   */
  referenceCount?: number;
  /**
   * @remarks
   * The region of the ACK cluster connector to which the address book belongs when GroupType is an ACK address book.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The list of ECS tags.
   */
  tagList?: DescribeAddressBookResponseBodyAclsTagList[];
  /**
   * @remarks
   * The relationship between multiple ECS tags. Valid values:
   * - **or**: The relationship between multiple tags is OR. The public IP address of an ECS instance that matches any tag is added to the address book.
   * - **and**: The relationship between multiple tags is AND. The public IP address of an ECS instance that matches all tags is added to the address book.
   * 
   * @example
   * and
   */
  tagRelation?: string;
  static names(): { [key: string]: string } {
    return {
      ackClusterConnectorId: 'AckClusterConnectorId',
      ackClusterConnectorName: 'AckClusterConnectorName',
      ackLabels: 'AckLabels',
      ackNamespaces: 'AckNamespaces',
      addressList: 'AddressList',
      addressListCount: 'AddressListCount',
      addresses: 'Addresses',
      assetMemberUids: 'AssetMemberUids',
      assetRegionResourceTypes: 'AssetRegionResourceTypes',
      autoAddTagEcs: 'AutoAddTagEcs',
      description: 'Description',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUuid: 'GroupUuid',
      referenceCount: 'ReferenceCount',
      regionNo: 'RegionNo',
      tagList: 'TagList',
      tagRelation: 'TagRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackClusterConnectorId: 'string',
      ackClusterConnectorName: 'string',
      ackLabels: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAclsAckLabels },
      ackNamespaces: { 'type': 'array', 'itemType': 'string' },
      addressList: { 'type': 'array', 'itemType': 'string' },
      addressListCount: 'number',
      addresses: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAclsAddresses },
      assetMemberUids: { 'type': 'array', 'itemType': 'number' },
      assetRegionResourceTypes: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAclsAssetRegionResourceTypes },
      autoAddTagEcs: 'number',
      description: 'string',
      groupName: 'string',
      groupType: 'string',
      groupUuid: 'string',
      referenceCount: 'number',
      regionNo: 'string',
      tagList: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAclsTagList },
      tagRelation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ackLabels)) {
      $dara.Model.validateArray(this.ackLabels);
    }
    if(Array.isArray(this.ackNamespaces)) {
      $dara.Model.validateArray(this.ackNamespaces);
    }
    if(Array.isArray(this.addressList)) {
      $dara.Model.validateArray(this.addressList);
    }
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.assetMemberUids)) {
      $dara.Model.validateArray(this.assetMemberUids);
    }
    if(Array.isArray(this.assetRegionResourceTypes)) {
      $dara.Model.validateArray(this.assetRegionResourceTypes);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressBookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of address books.
   */
  acls?: DescribeAddressBookResponseBodyAcls[];
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of address books on each page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B36F150A-1E27-43AA-B72C-D2AC712F09DA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of address books.
   * 
   * @example
   * 100
   */
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

  validate() {
    if(Array.isArray(this.acls)) {
      $dara.Model.validateArray(this.acls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

