// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVcoRouteEntriesResponseBodyVcoRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The list of autonomous system (AS) numbers that the BGP route passes through.
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
   * The timestamp when the destination route was created.
   * 
   * The timestamp is in the UNIX format and represents the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * The list of next-hop tunnels.
   * 
   * > - This information is returned only for IPsec-VPN connections in dual-tunnel mode.
   * > - Tunnel information is returned only when the tunnel status is **Phase 2 negotiations succeeded**.
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
   * The type of the route.
   * 
   * - **custom**: The route is a destination route.
   * - **bgp**: The route is a BGP route.
   * 
   * @example
   * custom
   */
  routeEntryType?: string;
  /**
   * @remarks
   * The source of the BGP route.
   * 
   * - **CLOUD**: The BGP route is learned by the IPsec-VPN connection from the transit router.
   * - **VPN_BGP**: The BGP route is learned by the IPsec-VPN connection from the on-premises data center.
   * 
   * @example
   * CLOUD
   */
  source?: string;
  /**
   * @remarks
   * The status of the route.
   * 
   * - **published**: The destination route has been published to the transit router instance.
   * - **Active**: The BGP route is available.
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
   * The weight of the destination route.
   * 
   * > This parameter is not in use.
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
   * The number of routes.
   * 
   * @example
   * 3
   */
  routeCount?: number;
  /**
   * @remarks
   * The type of the route.
   * 
   * - **custom**: destination route.
   * - **bgp**: BGP route.
   * 
   * @example
   * bgp
   */
  routeEntryType?: string;
  /**
   * @remarks
   * The source of the BGP route.
   * 
   * - **CLOUD**: The BGP route is learned by the IPsec-VPN connection from the transit router.
   * - **VPN_BGP**: The BGP route is learned by the IPsec-VPN connection from the on-premises data center.
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
   * The page number of the list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging queries.
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
   * E18980E8-C8C2-31BD-8156-AE2BBDEC87E1
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
   * The list of routes.
   */
  vcoRouteEntries?: DescribeVcoRouteEntriesResponseBodyVcoRouteEntries[];
  /**
   * @remarks
   * The route statistics for the IPsec-VPN connection in dual-tunnel mode.
   * 
   * > This information is returned only for IPsec-VPN connections in dual-tunnel mode.
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

