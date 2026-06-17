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
   * The ID of the ACK cluster connector. You can obtain this value from the following operation:
   * 
   * - [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~): Queries a list of ACK cluster connectors.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab1
   */
  ackClusterConnectorId?: string;
  /**
   * @remarks
   * The list of ACK cluster pod labels.
   * 
   * > You can specify a maximum of 10 labels.
   */
  ackLabels?: AddAddressBookRequestAckLabels[];
  /**
   * @remarks
   * The list of ACK cluster pod namespaces.
   * 
   * > You can specify a maximum of 10 namespaces.
   */
  ackNamespaces?: string[];
  /**
   * @remarks
   * The list of addresses in the address book. Separate multiple addresses with commas (,). For each address, separate the address and its description with a space.
   * 
   * > This parameter is required when GroupType is set to `ip`, `port`, or `domain`.
   * 
   * - If you set GroupType to `ip`, enter IP addresses in the list. Example: 192.0.XX.XX/32 development segment,10.0.0.X/24,192.0.XX.XX/24 test segment.
   * 
   * - If you set GroupType to `port`, enter ports or port ranges in the list. Example: 80 HTTP port,100/200,3306 database port.
   * 
   * - If you set GroupType to `domain`, enter domain names in the list. Example: example.com test domain name,aliyundoc.com,www\\.aliyun.com Alibaba Cloud official website.
   * 
   * @example
   * 192.0.XX.XX/32 ,192.0.XX.XX/24
   */
  addressList?: string;
  /**
   * @remarks
   * Specifies whether to automatically add the public IP addresses of ECS instances that match the specified tags to the address book.
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
   * The source IP address of the visitor.
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
  tagList?: AddAddressBookRequestTagList[];
  /**
   * @remarks
   * The logical relationship between multiple ECS tags.
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
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

