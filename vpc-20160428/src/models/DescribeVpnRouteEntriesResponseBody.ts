// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnRouteEntriesResponseBodyVpnRouteCountsVpnRouteCount extends $dara.Model {
  routeCount?: number;
  routeEntryType?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      routeCount: 'RouteCount',
      routeEntryType: 'RouteEntryType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeCount: 'number',
      routeEntryType: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnRouteEntriesResponseBodyVpnRouteCounts extends $dara.Model {
  vpnRouteCount?: DescribeVpnRouteEntriesResponseBodyVpnRouteCountsVpnRouteCount[];
  static names(): { [key: string]: string } {
    return {
      vpnRouteCount: 'VpnRouteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnRouteCount: { 'type': 'array', 'itemType': DescribeVpnRouteEntriesResponseBodyVpnRouteCountsVpnRouteCount },
    };
  }

  validate() {
    if(Array.isArray(this.vpnRouteCount)) {
      $dara.Model.validateArray(this.vpnRouteCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnRouteEntriesResponseBodyVpnRouteEntriesVpnRouteEntry extends $dara.Model {
  asPath?: string;
  community?: string;
  createTime?: number;
  nextHop?: string;
  nextHopTunnelId?: string;
  routeDest?: string;
  routeEntryType?: string;
  source?: string;
  state?: string;
  vpnInstanceId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      asPath: 'AsPath',
      community: 'Community',
      createTime: 'CreateTime',
      nextHop: 'NextHop',
      nextHopTunnelId: 'NextHopTunnelId',
      routeDest: 'RouteDest',
      routeEntryType: 'RouteEntryType',
      source: 'Source',
      state: 'State',
      vpnInstanceId: 'VpnInstanceId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPath: 'string',
      community: 'string',
      createTime: 'number',
      nextHop: 'string',
      nextHopTunnelId: 'string',
      routeDest: 'string',
      routeEntryType: 'string',
      source: 'string',
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

export class DescribeVpnRouteEntriesResponseBodyVpnRouteEntries extends $dara.Model {
  vpnRouteEntry?: DescribeVpnRouteEntriesResponseBodyVpnRouteEntriesVpnRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      vpnRouteEntry: 'VpnRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnRouteEntry: { 'type': 'array', 'itemType': DescribeVpnRouteEntriesResponseBodyVpnRouteEntriesVpnRouteEntry },
    };
  }

  validate() {
    if(Array.isArray(this.vpnRouteEntry)) {
      $dara.Model.validateArray(this.vpnRouteEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  vpnRouteCounts?: DescribeVpnRouteEntriesResponseBodyVpnRouteCounts;
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

