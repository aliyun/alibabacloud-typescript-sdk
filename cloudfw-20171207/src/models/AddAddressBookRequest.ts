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
   * The ACK cluster connector ID. You can obtain the value from:
   * - [DescribeAckClusterConnectors](~~DescribeAckClusterConnectors~~): queries a list of ACK cluster connectors.
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
   * The address list of the address book. Multiple addresses are separated by commas, and within each address element, the address and its description are separated by a space.
   * 
   * > This parameter is required when GroupType is set to `ip`, `port`, or `domain`.
   * 
   * - When GroupType is set to `ip`, enter IP addresses in the address list. Example: 192.0.XX.XX/32 development network segment, 10.0.0.X/24,192.0.XX.XX/24 test network segment.
   * 
   * - When GroupType is set to `port`, enter ports or port ranges in the address list. Example: 80 HTTP port, 100/200,3306 database port.
   * 
   * - When GroupType is set to `domain`, enter domain names in the address list. Example: example.com test domain, aliyundoc.com,www.aliyun.com Alibaba Cloud official website.
   * 
   * @example
   * 192.0.XX.XX/32 ,192.0.XX.XX/24
   */
  addressList?: string;
  /**
   * @remarks
   * Specifies whether to automatically add the public IP addresses of ECS instances that match new tags to the address book.
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
  tagList?: AddAddressBookRequestTagList[];
  /**
   * @remarks
   * The logical relationship among multiple ECS tags to be matched.
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

