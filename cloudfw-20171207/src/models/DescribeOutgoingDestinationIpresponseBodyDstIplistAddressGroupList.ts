// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPResponseBodyDstIPListAddressGroupList extends $dara.Model {
  /**
   * @remarks
   * The name of the address book.
   * 
   * @example
   * IP address book
   */
  addressGroupName?: string;
  /**
   * @remarks
   * The UUID of the address book.
   * 
   * @example
   * f04ac7ce-628b-4cb7-be61-310222b7****
   */
  addressGroupUUID?: string;
  static names(): { [key: string]: string } {
    return {
      addressGroupName: 'AddressGroupName',
      addressGroupUUID: 'AddressGroupUUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressGroupName: 'string',
      addressGroupUUID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

