// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpv6GatewaysResponseBodyIpv6Gateways } from "./DescribeIpv6gatewaysResponseBodyIpv6gateways";


export class DescribeIpv6GatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the IPv6 gateway.
   */
  ipv6Gateways?: DescribeIpv6GatewaysResponseBodyIpv6Gateways;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * E3A06196-3E7C-490D-8F39-CB4B5A0CE8AD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipv6Gateways: 'Ipv6Gateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Gateways: DescribeIpv6GatewaysResponseBodyIpv6Gateways,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipv6Gateways && typeof (this.ipv6Gateways as any).validate === 'function') {
      (this.ipv6Gateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

