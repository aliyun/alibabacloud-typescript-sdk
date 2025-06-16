// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateIpv6InternetBandwidthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Internet bandwidth that you purchased for the IPv6 gateway.
   * 
   * @example
   * ipv6bw-uf6hcyzu65v98v3du****
   */
  internetBandwidthId?: string;
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
   * 6972A26E-99B1-4367-9890-FBDEBB0F5E7D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      internetBandwidthId: 'InternetBandwidthId',
      ipv6AddressId: 'Ipv6AddressId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetBandwidthId: 'string',
      ipv6AddressId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

