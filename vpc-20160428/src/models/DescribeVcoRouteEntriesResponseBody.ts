// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVcoRouteEntriesResponseBodyVcoRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The list of autonomous system (AS) numbers that the BGP route goes through.
   * 
   * @example
   * [12000]
   */
  asPath?: string;
  /**
   * @remarks
   * The community value carried by the BGP route.
   * 
   * @example
   * 65535:65510
   */
  community?: string;
  /**
   * @remarks
   * The timestamp when the route was created.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1658217008000
   */
  createTime?: number;
  /**
   * @remarks
   * The next hop of the route.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  nextHop?: string;
  /**
   * @remarks
   * The list of next hops.
   * 
   * > - This parameter is returned only by dual-tunnel IPsec connections.
   * > - This parameter is returned only when the tunnel status is **Phase 2 Negotiation Successful**.
   */
  nextHopTunnelIdList?: string[];
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 192.168.10.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **custom**: a destination-based route
   * *   **bgp**: a BGP route
   * 
   * @example
   * custom
   */
  routeEntryType?: string;
  /**
   * @remarks
   * The source of the BGP route. Valid values:
   * 
   * *   **CLOUD**: indicates that the current BGP route is learned by the IPsec-VPN connection from the transit router.
   * *   **VPN_BGP**: indicates that the current BGP route is learned by the IPsec-VPN connection from the data center.
   * 
   * @example
   * CLOUD
   */
  source?: string;
  /**
   * @remarks
   * The status of the route.
   * 
   * *   **published**: indicates that the current route is advertised to the transit router.
   * *   **Active**: indicates that the current BGP route is available.
   * 
   * @example
   * published
   */
  state?: string;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  vpnConnectionId?: string;
  /**
   * @remarks
   * The weight of the destination-based route.
   * 
   * >  The current parameter has no effect.
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
      nextHopTunnelIdList: 'NextHopTunnelIdList',
      routeDest: 'RouteDest',
      routeEntryType: 'RouteEntryType',
      source: 'Source',
      state: 'State',
      vpnConnectionId: 'VpnConnectionId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPath: 'string',
      community: 'string',
      createTime: 'number',
      nextHop: 'string',
      nextHopTunnelIdList: { 'type': 'array', 'itemType': 'string' },
      routeDest: 'string',
      routeEntryType: 'string',
      source: 'string',
      state: 'string',
      vpnConnectionId: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nextHopTunnelIdList)) {
      $dara.Model.validateArray(this.nextHopTunnelIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVcoRouteEntriesResponseBodyVpnRouteCounts extends $dara.Model {
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
   * *   **custom**: destination-based route.
   * *   **bgp**: BGP route.
   * 
   * @example
   * bgp
   */
  routeEntryType?: string;
  /**
   * @remarks
   * The source of the BGP route. Valid values:
   * 
   * *   **CLOUD**: The current BGP route is learned by the IPsec connection from the transit router.
   * *   **VPN_BGP**: The current BGP route is learned by the IPsec connection from the data center.
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

