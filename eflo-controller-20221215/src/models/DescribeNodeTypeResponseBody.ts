// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeTypeResponseBody extends $dara.Model {
  diskQuantity?: number;
  /**
   * @example
   * 63
   */
  eniHighDenseQuantity?: number;
  /**
   * @example
   * 256
   */
  eniIpv6AddressQuantity?: number;
  /**
   * @example
   * 256
   */
  eniPrivateIpAddressQuantity?: number;
  /**
   * @example
   * 22
   */
  eniQuantity?: number;
  /**
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

