// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateIpv6AddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IPv6 address.
   * 
   * @example
   * 2408:XXXX:153:3921:851c:c435:7b12:1c5f
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The ID of the IPv6 address.
   * 
   * @example
   * ipv6-2zen5j4axcp5l5qyy****
   */
  ipv6AddressId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazdjdhd****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
      ipv6AddressId: 'Ipv6AddressId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: 'string',
      ipv6AddressId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

