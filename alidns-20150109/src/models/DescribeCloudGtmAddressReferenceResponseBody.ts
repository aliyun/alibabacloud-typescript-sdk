// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmAddressReferenceResponseBodyAddressPools } from "./DescribeCloudGtmAddressReferenceResponseBodyAddressPools";


export class DescribeCloudGtmAddressReferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * IP address or domain name.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The address ID. This ID uniquely identifies the address.
   * 
   * @example
   * addr-89564584963974**40
   */
  addressId?: string;
  /**
   * @remarks
   * The address pools.
   */
  addressPools?: DescribeCloudGtmAddressReferenceResponseBodyAddressPools;
  /**
   * @remarks
   * Address name.
   * 
   * @example
   * Address-1
   */
  name?: string;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressId: 'AddressId',
      addressPools: 'AddressPools',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressId: 'string',
      addressPools: DescribeCloudGtmAddressReferenceResponseBodyAddressPools,
      name: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.addressPools && typeof (this.addressPools as any).validate === 'function') {
      (this.addressPools as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

