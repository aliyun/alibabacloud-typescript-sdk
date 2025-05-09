// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAddressBookResponseBodyAclsAddresses } from "./DescribeAddressBookResponseBodyAclsAddresses";
import { DescribeAddressBookResponseBodyAclsTagList } from "./DescribeAddressBookResponseBodyAclsTagList";


export class DescribeAddressBookResponseBodyAcls extends $dara.Model {
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
      addressList: 'AddressList',
      addressListCount: 'AddressListCount',
      addresses: 'Addresses',
      autoAddTagEcs: 'AutoAddTagEcs',
      description: 'Description',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUuid: 'GroupUuid',
      referenceCount: 'ReferenceCount',
      tagList: 'TagList',
      tagRelation: 'TagRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: { 'type': 'array', 'itemType': 'string' },
      addressListCount: 'number',
      addresses: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAclsAddresses },
      autoAddTagEcs: 'number',
      description: 'string',
      groupName: 'string',
      groupType: 'string',
      groupUuid: 'string',
      referenceCount: 'number',
      tagList: { 'type': 'array', 'itemType': DescribeAddressBookResponseBodyAclsTagList },
      tagRelation: 'string',
    };
  }

  validate() {
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

