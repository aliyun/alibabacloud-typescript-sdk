// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

