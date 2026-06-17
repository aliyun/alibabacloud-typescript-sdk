// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddressBookResponseBodyAclsAckLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the ACK pod label.
   * 
   * @example
   * app
   */
  key?: string;
  /**
   * @remarks
   * The value of the ACK pod label.
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
   * The IP address or CIDR block.
   * 
   * @example
   * 192.168.0.1/32
   */
  address?: string;
  /**
   * @remarks
   * The note for the address.
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

export class DescribeAddressBookResponseBodyAclsTagList extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * company
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * A list of ACK pod labels.
   */
  ackLabels?: DescribeAddressBookResponseBodyAclsAckLabels[];
  /**
   * @remarks
   * A list of ACK namespaces.
   */
  ackNamespaces?: string[];
  /**
   * @remarks
   * A list of CIDR blocks in the address book.
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
   * A list of addresses, each with a description.
   */
  addresses?: DescribeAddressBookResponseBodyAclsAddresses[];
  /**
   * @remarks
   * Indicates whether to automatically add the public IPs of tagged ECS instances to the address book. This applies to newly purchased instances and existing instances whose tags are modified to match.
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
   * The type of the address book. Valid values:
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
   * The number of times the address book is referenced.
   * 
   * @example
   * 3
   */
  referenceCount?: number;
  /**
   * @remarks
   * The region where the ACK cluster connector is deployed. This parameter is returned only when the GroupType parameter is "ack".
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * A list of ECS tags.
   */
  tagList?: DescribeAddressBookResponseBodyAclsTagList[];
  /**
   * @remarks
   * The logical relationship among multiple ECS tags. Valid values:
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
   * A list of address books.
   */
  acls?: DescribeAddressBookResponseBodyAcls[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of address books returned per page.
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

