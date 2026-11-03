// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAddressBookShrinkRequestAckLabels extends $dara.Model {
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

export class AddAddressBookShrinkRequestTagList extends $dara.Model {
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

export class AddAddressBookShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster connector. You can obtain the value from the following operation:
   * - [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~): Queries the list of ACK cluster connectors.
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
  ackLabels?: AddAddressBookShrinkRequestAckLabels[];
  /**
   * @remarks
   * The list of ACK cluster pod namespaces.
   * > A maximum of 10 namespaces are supported.
   */
  ackNamespaces?: string[];
  /**
   * @remarks
   * The list of addresses in the address book. Separate multiple addresses with commas (,). For each address element, separate the address and the description with a space.
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
  assetMemberUidsShrink?: string;
  /**
   * @remarks
   * The asset address book, region, and resource type list.
   */
  assetRegionResourceTypesShrink?: string;
  /**
   * @remarks
   * Specifies whether the address book is automatically updated to include the public IP addresses of Elastic Compute Service (ECS) instances that match new labels.
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
   * The language of the address book description.
   * 
   * @example
   * zh
   */
  lang?: string;
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
  tagList?: AddAddressBookShrinkRequestTagList[];
  /**
   * @remarks
   * The relationship between multiple ECS tags to be matched.
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
      assetMemberUidsShrink: 'AssetMemberUids',
      assetRegionResourceTypesShrink: 'AssetRegionResourceTypes',
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
      ackLabels: { 'type': 'array', 'itemType': AddAddressBookShrinkRequestAckLabels },
      ackNamespaces: { 'type': 'array', 'itemType': 'string' },
      addressList: 'string',
      assetMemberUidsShrink: 'string',
      assetRegionResourceTypesShrink: 'string',
      autoAddTagEcs: 'string',
      description: 'string',
      groupName: 'string',
      groupType: 'string',
      lang: 'string',
      sourceIp: 'string',
      tagList: { 'type': 'array', 'itemType': AddAddressBookShrinkRequestTagList },
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
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

