// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnRouteEntriesResponseBodyVpnRouteCountsVpnRouteCount extends $dara.Model {
  /**
   * @remarks
   * The number of route entries.
   * 
   * @example
   * 3
   */
  routeCount?: number;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **custom** (default): destination-based route.
   * *   **bgp** : BGP route entry.
   * 
   * @example
   * bgp
   */
  routeEntryType?: string;
  /**
   * @remarks
   * The source of the BGP route. Valid values:
   * 
   * *   **CLOUD**: advertised from a cloud service associated with the VPN gateway.
   * *   **VPN_BGP**: indicates that the current route is learned by using BGP of the VPN gateway. For example, the BGP is used to learn the route of the on-premises data center.
   * 
   * @example
   * VPN_BGP
   */
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
  /**
   * @remarks
   * The AS path of the route entry.
   * 
   * @example
   * 65501,65001,60011
   */
  asPath?: string;
  /**
   * @remarks
   * The community attributes of the route entry.
   * 
   * @example
   * 65001:1000,65501:2000
   */
  community?: string;
  /**
   * @remarks
   * The timestamp when the route entry was created.
   * 
   * @example
   * 1563874074000
   */
  createTime?: number;
  /**
   * @remarks
   * The next hop of the route entry.
   * 
   * @example
   * vco-bp1tui07ob10fmuro****
   */
  nextHop?: string;
  /**
   * @remarks
   * The ID of the tunnel associated with the next hop. 
   * 
   * 
   * > This parameter is returned only if the VPN gateway supports the dual-tunnel mode.
   * 
   * @example
   * tun-36cfgpwjn58axj****
   */
  nextHopTunnelId?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry.
   * 
   * @example
   * 10.0.0.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The type of the route entry. Valid values:
   * 
   * *   **Custom**: custom
   * *   **System**: system
   * 
   * @example
   * System
   */
  routeEntryType?: string;
  /**
   * @remarks
   * The source of the BGP route. Valid values:
   * 
   * *   **CLOUD**: advertised from a cloud service associated with the VPN gateway.
   * *   **VPN_BGP**: indicates that the current route is learned by using BGP of the VPN gateway. For example, the BGP is used to learn the route of the on-premises data center.
   * 
   * @example
   * 192.168.10.0/24
   */
  source?: string;
  /**
   * @remarks
   * The status of the route entry. Valid values:
   * 
   * *   **published**: advertised
   * *   **normal**: not advertised
   * 
   * @example
   * normal
   */
  state?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1cmw7jh1nfe43m9****
   */
  vpnInstanceId?: string;
  /**
   * @remarks
   * The weight of the route entry. Valid values: **0** and **100**.
   * 
   * *   **0**: a low priority
   * *   **100**: a high priority
   * 
   * @example
   * 100
   */
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

