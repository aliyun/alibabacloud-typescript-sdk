// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddressBookResponseBodyAclsAckLabels extends $dara.Model {
  /**
   * @example
   * app
   */
  key?: string;
  /**
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
   * Address information in the address book.
   * 
   * @example
   * 192.168.0.1/32
   */
  address?: string;
  /**
   * @remarks
   * Single address description.
   * 
   * @example
   * description
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
   * admin
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
   * @example
   * ac-7c1bad6c3cc84c33baab1
   */
  ackClusterConnectorId?: string;
  /**
   * @example
   * ACK集群连接器
   */
  ackClusterConnectorName?: string;
  ackLabels?: DescribeAddressBookResponseBodyAclsAckLabels[];
  ackNamespaces?: string[];
  /**
   * @remarks
   * The addresses in the address book.
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
   * A list of addresses in the address book, each with a single address description.
   */
  addresses?: DescribeAddressBookResponseBodyAclsAddresses[];
  /**
   * @remarks
   * Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags. The setting takes effect on both newly purchased ECS instances whose tag settings are complete and ECS instances whose tag settings are modified. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
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
   * my address book
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
   * The type of the address book. Valid values:
   * 
   * *   **ip**: IP address book
   * *   **domain**: domain address book
   * *   **port**: port address book
   * *   **tag**: ECS tag-based address book
   * *   **allCloud**: cloud service address book
   * *   **threat**: threat intelligence address book
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The UUID of the address book.
   * 
   * @example
   * f04ac7ce-628b-4cb7-be61-310222b7****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The number of times that the address book is referenced.
   * 
   * @example
   * 3
   */
  referenceCount?: number;
  /**
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The details about the ECS tags that can be automatically added to the address book.
   */
  tagList?: DescribeAddressBookResponseBodyAclsTagList[];
  /**
   * @remarks
   * The logical relationship among ECS tags. Valid values:
   * 
   * *   **and**: Only the public IP addresses of ECS instances that match all the specified tags can be added to the address book.
   * *   **or**: The public IP addresses of ECS instances that match any of the specified tags can be added to the address book.
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
   * The information about the address book.
   */
  acls?: DescribeAddressBookResponseBodyAcls[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page.
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
   * The total number of the returned address books.
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

