// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntries } from "./DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntries";


export class DescribeVpnPbrRouteEntriesResponseBody extends $dara.Model {
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
   * 5BE01CD7-5A50-472D-AC14-CA181C5C03BE
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of policy-based routes.
   */
  vpnPbrRouteEntries?: DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntries;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnPbrRouteEntries: 'VpnPbrRouteEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpnPbrRouteEntries: DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntries,
    };
  }

  validate() {
    if(this.vpnPbrRouteEntries && typeof (this.vpnPbrRouteEntries as any).validate === 'function') {
      (this.vpnPbrRouteEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

