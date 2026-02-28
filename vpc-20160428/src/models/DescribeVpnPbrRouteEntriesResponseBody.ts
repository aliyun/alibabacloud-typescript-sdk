// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntriesVpnPbrRouteEntry extends $dara.Model {
  createTime?: number;
  nextHop?: string;
  nextHopTunnelId?: string;
  priority?: number;
  routeDest?: string;
  routeSource?: string;
  state?: string;
  vpnInstanceId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      nextHop: 'NextHop',
      nextHopTunnelId: 'NextHopTunnelId',
      priority: 'Priority',
      routeDest: 'RouteDest',
      routeSource: 'RouteSource',
      state: 'State',
      vpnInstanceId: 'VpnInstanceId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      nextHop: 'string',
      nextHopTunnelId: 'string',
      priority: 'number',
      routeDest: 'string',
      routeSource: 'string',
      state: 'string',
      vpnInstanceId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntries extends $dara.Model {
  vpnPbrRouteEntry?: DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntriesVpnPbrRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      vpnPbrRouteEntry: 'VpnPbrRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnPbrRouteEntry: { 'type': 'array', 'itemType': DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntriesVpnPbrRouteEntry },
    };
  }

  validate() {
    if(Array.isArray(this.vpnPbrRouteEntry)) {
      $dara.Model.validateArray(this.vpnPbrRouteEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

