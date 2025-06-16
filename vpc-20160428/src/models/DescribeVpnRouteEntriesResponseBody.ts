// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnRouteEntriesResponseBodyVpnRouteCounts } from "./DescribeVpnRouteEntriesResponseBodyVpnRouteCounts";
import { DescribeVpnRouteEntriesResponseBodyVpnRouteEntries } from "./DescribeVpnRouteEntriesResponseBodyVpnRouteEntries";


export class DescribeVpnRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BF3995A6-FA4F-4C74-B90F-89ECF4BFF4D5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about route entries of the VPN gateway in dual-tunnel mode.
   * 
   * > This parameter is returned only if the VPN gateway supports IPsec-VPN connections in dual-tunnel mode.
   */
  vpnRouteCounts?: DescribeVpnRouteEntriesResponseBodyVpnRouteCounts;
  /**
   * @remarks
   * The route entry list.
   */
  vpnRouteEntries?: DescribeVpnRouteEntriesResponseBodyVpnRouteEntries;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnRouteCounts: 'VpnRouteCounts',
      vpnRouteEntries: 'VpnRouteEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpnRouteCounts: DescribeVpnRouteEntriesResponseBodyVpnRouteCounts,
      vpnRouteEntries: DescribeVpnRouteEntriesResponseBodyVpnRouteEntries,
    };
  }

  validate() {
    if(this.vpnRouteCounts && typeof (this.vpnRouteCounts as any).validate === 'function') {
      (this.vpnRouteCounts as any).validate();
    }
    if(this.vpnRouteEntries && typeof (this.vpnRouteEntries as any).validate === 'function') {
      (this.vpnRouteEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

