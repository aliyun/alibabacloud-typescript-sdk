// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpv6AddressesResponseBodyIpv6Addresses } from "./DescribeIpv6addressesResponseBodyIpv6addresses";


export class DescribeIpv6AddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the IPv6 address.
   */
  ipv6Addresses?: DescribeIpv6AddressesResponseBodyIpv6Addresses;
  /**
   * @remarks
   * The page number of the returned page. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AA4486A8-B6AE-469E-AB09-820EF8ECFA2B
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipv6Addresses: 'Ipv6Addresses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Addresses: DescribeIpv6AddressesResponseBodyIpv6Addresses,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipv6Addresses && typeof (this.ipv6Addresses as any).validate === 'function') {
      (this.ipv6Addresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

