// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAddressBookRequestAckLabels extends $dara.Model {
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

export class ModifyAddressBookRequestAssetRegionResourceTypesResourceTypeIpv4 extends $dara.Model {
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

export class ModifyAddressBookRequestAssetRegionResourceTypesResourceTypeIpv6 extends $dara.Model {
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

export class ModifyAddressBookRequestAssetRegionResourceTypesResourceType extends $dara.Model {
  /**
   * @remarks
   * The IPv4 asset type.
   */
  ipv4?: ModifyAddressBookRequestAssetRegionResourceTypesResourceTypeIpv4;
  /**
   * @remarks
   * The IPv6 asset type.
   */
  ipv6?: ModifyAddressBookRequestAssetRegionResourceTypesResourceTypeIpv6;
  static names(): { [key: string]: string } {
    return {
      ipv4: 'Ipv4',
      ipv6: 'Ipv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4: ModifyAddressBookRequestAssetRegionResourceTypesResourceTypeIpv4,
      ipv6: ModifyAddressBookRequestAssetRegionResourceTypesResourceTypeIpv6,
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

export class ModifyAddressBookRequestAssetRegionResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The asset region ID.
   * 
   * @example
   * all
   */
  assetRegionId?: string;
  /**
   * @remarks
   * The asset type.
   */
  resourceType?: ModifyAddressBookRequestAssetRegionResourceTypesResourceType;
  static names(): { [key: string]: string } {
    return {
      assetRegionId: 'AssetRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetRegionId: 'string',
      resourceType: ModifyAddressBookRequestAssetRegionResourceTypesResourceType,
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

export class ModifyAddressBookRequestTagList extends $dara.Model {
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

export class ModifyAddressBookRequest extends $dara.Model {
  /**
   * @remarks
   * The list of pod labels in the ACK cluster.
   * 
   * > A maximum of 10 labels are supported.
   */
  ackLabels?: ModifyAddressBookRequestAckLabels[];
  /**
   * @remarks
   * The list of pod namespaces in the ACK cluster.
   * > A maximum of 10 namespaces are supported.
   */
  ackNamespaces?: string[];
  /**
   * @remarks
   * The list of addresses in the address book. Separate multiple addresses with commas (,). For each address element, separate the address and the description with a space. You must specify this parameter when GroupType is set to **ip**, **port**, or **domain**.
   * 
   * - If GroupType is set to **ip**, enter IP addresses in the address list. Example: 1.2.XX.XX/32 Development CIDR block,10.0.0.X/24,1.2.XX.XX/24 Test CIDR block.
   * 
   * - If GroupType is set to **port**, enter ports or port ranges in the address list. Example: 80/80 HTTP port,100/200,3306 Database port.
   * 
   * - If GroupType is set to **domain**, enter domain names in the address list. Example: demo1.aliyun.com Test domain name,demo2.aliyun.com,www.aliyun.com Alibaba Cloud official website.
   * 
   * @example
   * 192.0.XX.XX/32 ,192.0.XX.XX/24
   */
  addressList?: string;
  /**
   * @remarks
   * The list of member accounts in the asset address book.
   */
  assetMemberUids?: number[];
  /**
   * @remarks
   * The asset address book, region, and resource type list.
   */
  assetRegionResourceTypes?: ModifyAddressBookRequestAssetRegionResourceTypes[];
  /**
   * @remarks
   * Specifies if the automatic addition of the public IP addresses of Elastic Compute Service (ECS) instances that match the new labels to the address book is enabled.
   * 
   * @example
   * 1
   */
  autoAddTagEcs?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * ddadxefexxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * bj-001
   */
  description?: string;
  /**
   * @remarks
   * The dry run mode.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * bj-001
   */
  groupName?: string;
  /**
   * @remarks
   * The UUID of the address book.
   * 
   * > To obtain the value, call the [DescribeAddressBook](~~DescribeAddressBook~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 0657ab9d-fe8b-4174-b2a6-6baf358e****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The modification mode.
   * 
   * > If GroupType is set to **ip**, **ipv6**, **port**, or **domain** and this parameter is not specified, the **Cover** mode is used by default to modify the address book.
   * >Notice: If GroupType is set to **tag**, this parameter must be left empty.</notice>
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  /**
   * @remarks
   * The source IP address of the requester.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The list of ECS tags.
   */
  tagList?: ModifyAddressBookRequestTagList[];
  /**
   * @remarks
   * The relationship between multiple ECS tags.
   * 
   * @example
   * and
   */
  tagRelation?: string;
  static names(): { [key: string]: string } {
    return {
      ackLabels: 'AckLabels',
      ackNamespaces: 'AckNamespaces',
      addressList: 'AddressList',
      assetMemberUids: 'AssetMemberUids',
      assetRegionResourceTypes: 'AssetRegionResourceTypes',
      autoAddTagEcs: 'AutoAddTagEcs',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      groupName: 'GroupName',
      groupUuid: 'GroupUuid',
      lang: 'Lang',
      modifyMode: 'ModifyMode',
      sourceIp: 'SourceIp',
      tagList: 'TagList',
      tagRelation: 'TagRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackLabels: { 'type': 'array', 'itemType': ModifyAddressBookRequestAckLabels },
      ackNamespaces: { 'type': 'array', 'itemType': 'string' },
      addressList: 'string',
      assetMemberUids: { 'type': 'array', 'itemType': 'number' },
      assetRegionResourceTypes: { 'type': 'array', 'itemType': ModifyAddressBookRequestAssetRegionResourceTypes },
      autoAddTagEcs: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      groupName: 'string',
      groupUuid: 'string',
      lang: 'string',
      modifyMode: 'string',
      sourceIp: 'string',
      tagList: { 'type': 'array', 'itemType': ModifyAddressBookRequestTagList },
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

