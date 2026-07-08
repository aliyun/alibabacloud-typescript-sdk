// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAddressBookRequestAckLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the ACK cluster pod label.
   * 
   * @example
   * app
   */
  key?: string;
  /**
   * @remarks
   * The value of the ACK cluster pod label.
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

export class AddAddressBookRequestAssetRegionResourceTypesResourceTypeIpv4 extends $dara.Model {
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

export class AddAddressBookRequestAssetRegionResourceTypesResourceTypeIpv6 extends $dara.Model {
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

export class AddAddressBookRequestAssetRegionResourceTypesResourceType extends $dara.Model {
  /**
   * @remarks
   * The IPv4 asset type.
   */
  ipv4?: AddAddressBookRequestAssetRegionResourceTypesResourceTypeIpv4;
  /**
   * @remarks
   * The IPv6 asset type.
   */
  ipv6?: AddAddressBookRequestAssetRegionResourceTypesResourceTypeIpv6;
  static names(): { [key: string]: string } {
    return {
      ipv4: 'Ipv4',
      ipv6: 'Ipv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4: AddAddressBookRequestAssetRegionResourceTypesResourceTypeIpv4,
      ipv6: AddAddressBookRequestAssetRegionResourceTypesResourceTypeIpv6,
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

export class AddAddressBookRequestAssetRegionResourceTypes extends $dara.Model {
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
  resourceType?: AddAddressBookRequestAssetRegionResourceTypesResourceType;
  static names(): { [key: string]: string } {
    return {
      assetRegionId: 'AssetRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetRegionId: 'string',
      resourceType: AddAddressBookRequestAssetRegionResourceTypesResourceType,
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

export class AddAddressBookRequestTagList extends $dara.Model {
  /**
   * @remarks
   * The key of the ECS tag.
   * 
   * @example
   * TXY
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the ECS tag.
   * 
   * @example
   * 1
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

export class AddAddressBookRequest extends $dara.Model {
  /**
   * @remarks
   * The ACK cluster connector ID. You can obtain the value from the following operation:
   * - [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~): Lists ACK cluster connectors.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab1
   */
  ackClusterConnectorId?: string;
  /**
   * @remarks
   * The list of ACK cluster pod labels.
   * 
   * > A maximum of 10 labels are supported.
   */
  ackLabels?: AddAddressBookRequestAckLabels[];
  /**
   * @remarks
   * The list of ACK cluster pod namespaces.
   * > A maximum of 10 namespaces are supported.
   */
  ackNamespaces?: string[];
  /**
   * @remarks
   * The addresses in the address book. Separate multiple addresses with commas (,). Use a space to separate an address from its description within a single address element.
   * 
   * > This parameter is required when GroupType is set to `ip`, `port`, or `domain`.
   * 
   * - When GroupType is set to `ip`, enter IP addresses in the address list. Example: 192.0.XX.XX/32 Development CIDR block,10.0.0.X/24,192.0.XX.XX/24 Test CIDR block.
   * 
   * - When GroupType is set to `port`, enter ports or port ranges in the address list. Example: 80 HTTP port,100/200,3306 Database port.
   * 
   * - When GroupType is set to `domain`, enter domain names in the address list. Example: example.com Test domain name,aliyundoc.com,www.aliyun.com Alibaba Cloud official website.
   * 
   * @example
   * 192.0.XX.XX/32 ,192.0.XX.XX/24
   */
  addressList?: string;
  /**
   * @remarks
   * The list of member accounts for the asset address book.
   */
  assetMemberUids?: number[];
  /**
   * @remarks
   * The list of regions and resource types for the asset address book.
   */
  assetRegionResourceTypes?: AddAddressBookRequestAssetRegionResourceTypes[];
  /**
   * @remarks
   * Indicates whether to automatically add the public IP addresses of Elastic Compute Service (ECS) instances that match the specified tags to the address book.
   * 
   * @example
   * 1
   */
  autoAddTagEcs?: string;
  /**
   * @remarks
   * The description of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * sz-001
   */
  description?: string;
  /**
   * @remarks
   * The name of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * sz-001
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The language type of the address book description.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ECS tag list.
   */
  tagList?: AddAddressBookRequestTagList[];
  /**
   * @remarks
   * The logical relationship among multiple ECS tags to match.
   * 
   * @example
   * and
   */
  tagRelation?: string;
  static names(): { [key: string]: string } {
    return {
      ackClusterConnectorId: 'AckClusterConnectorId',
      ackLabels: 'AckLabels',
      ackNamespaces: 'AckNamespaces',
      addressList: 'AddressList',
      assetMemberUids: 'AssetMemberUids',
      assetRegionResourceTypes: 'AssetRegionResourceTypes',
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
      ackClusterConnectorId: 'string',
      ackLabels: { 'type': 'array', 'itemType': AddAddressBookRequestAckLabels },
      ackNamespaces: { 'type': 'array', 'itemType': 'string' },
      addressList: 'string',
      assetMemberUids: { 'type': 'array', 'itemType': 'number' },
      assetRegionResourceTypes: { 'type': 'array', 'itemType': AddAddressBookRequestAssetRegionResourceTypes },
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

  validate() {
    if(Array.isArray(this.ackLabels)) {
      $dara.Model.validateArray(this.ackLabels);
    }
    if(Array.isArray(this.ackNamespaces)) {
      $dara.Model.validateArray(this.ackNamespaces);
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

