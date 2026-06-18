// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of disks that can be attached.
   * 
   * @example
   * 17
   */
  diskQuantity?: number;
  /**
   * @remarks
   * The maximum number of network interfaces for high-density mode.
   * 
   * @example
   * 63
   */
  eniHighDenseQuantity?: number;
  /**
   * @remarks
   * The maximum number of IPv6 addresses that an ENI can have.
   * 
   * @example
   * 256
   */
  eniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The maximum number of IPv4 addresses that an ENI can have.
   * 
   * @example
   * 256
   */
  eniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The maximum number of supported elastic network interfaces (ENIs), including primary and secondary ENIs.
   * 
   * @example
   * 22
   */
  eniQuantity?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diskQuantity: 'DiskQuantity',
      eniHighDenseQuantity: 'EniHighDenseQuantity',
      eniIpv6AddressQuantity: 'EniIpv6AddressQuantity',
      eniPrivateIpAddressQuantity: 'EniPrivateIpAddressQuantity',
      eniQuantity: 'EniQuantity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskQuantity: 'number',
      eniHighDenseQuantity: 'number',
      eniIpv6AddressQuantity: 'number',
      eniPrivateIpAddressQuantity: 'number',
      eniQuantity: 'number',
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

