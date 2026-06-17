// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAddressBookRequestAckLabels extends $dara.Model {
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

export class ModifyAddressBookRequestTagList extends $dara.Model {
  /**
   * @remarks
   * The tag key of the ECS instance.
   * 
   * @example
   * TXY
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the ECS instance.
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
   * A list of ACK cluster pod labels.
   * 
   * > Up to 10 labels are allowed.
   */
  ackLabels?: ModifyAddressBookRequestAckLabels[];
  /**
   * @remarks
   * A list of ACK cluster pod namespaces.
   * 
   * > Up to 10 namespaces are allowed.
   */
  ackNamespaces?: string[];
  /**
   * @remarks
   * A list of addresses in the address book. Separate multiple addresses with commas. Within each address element, separate the address and its description with a space. You must specify this parameter when GroupType is **ip**, **port**, or **domain**.
   * 
   * - When GroupType is **ip**, specify IP addresses. Example: 1.2.XX.XX/32 development CIDR block, 10.0.0.X/24,1.2.XX.XX/24 test CIDR block.
   * 
   * - When GroupType is **port**, specify ports or port ranges. Example: 80/80 HTTP port, 100/200,3306 database port.
   * 
   * - When GroupType is **domain**, specify domain names. Example: demo1.aliyun.com test domain, demo2.aliyun.com,www\\.aliyun.com Alibaba Cloud official website.
   * 
   * @example
   * 192.0.XX.XX/32 ,192.0.XX.XX/24
   */
  addressList?: string;
  /**
   * @remarks
   * Specifies whether to automatically add public IP addresses of new ECS instances that match the specified tags to the address book.
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
   * bj-001
   */
  description?: string;
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
   * The unique ID of the address book.
   * 
   * > Obtain this value from [DescribeAddressBook](~~DescribeAddressBook~~).
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
   * > When GroupType is **ip**, **ipv6**, **port**, or **domain**, the default mode is **Cover** if this parameter is not specified.
   * > >Notice: When GroupType is **tag**, this parameter must be empty.
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
   * A list of ECS tags.
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
      autoAddTagEcs: 'AutoAddTagEcs',
      description: 'Description',
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
      autoAddTagEcs: 'string',
      description: 'string',
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
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

