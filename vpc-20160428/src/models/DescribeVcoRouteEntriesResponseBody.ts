// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVcoRouteEntriesResponseBodyVcoRouteEntries } from "./DescribeVcoRouteEntriesResponseBodyVcoRouteEntries";
import { DescribeVcoRouteEntriesResponseBodyVpnRouteCounts } from "./DescribeVcoRouteEntriesResponseBodyVpnRouteCounts";


export class DescribeVcoRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
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
   * E18980E8-C8C2-31BD-8156-AE2BBDEC87E1
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
   * The list of route entries.
   */
  vcoRouteEntries?: DescribeVcoRouteEntriesResponseBodyVcoRouteEntries[];
  /**
   * @remarks
   * The information on route entries of the dual-tunnel IPsec connection.
   * 
   * >  This parameter is returned only for IPsec connections in dual-tunnel mode.
   */
  vpnRouteCounts?: DescribeVcoRouteEntriesResponseBodyVpnRouteCounts[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vcoRouteEntries: 'VcoRouteEntries',
      vpnRouteCounts: 'VpnRouteCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vcoRouteEntries: { 'type': 'array', 'itemType': DescribeVcoRouteEntriesResponseBodyVcoRouteEntries },
      vpnRouteCounts: { 'type': 'array', 'itemType': DescribeVcoRouteEntriesResponseBodyVpnRouteCounts },
    };
  }

  validate() {
    if(Array.isArray(this.vcoRouteEntries)) {
      $dara.Model.validateArray(this.vcoRouteEntries);
    }
    if(Array.isArray(this.vpnRouteCounts)) {
      $dara.Model.validateArray(this.vpnRouteCounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

