// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntriesVpnPbrRouteEntry extends $dara.Model {
  /**
   * @remarks
   * The time when the policy-based route was created. Unit: millisecond.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1492747187000
   */
  createTime?: number;
  /**
   * @remarks
   * The next hop of the policy-based route.
   * 
   * @example
   * vco-bp15oes1py4i66rmd****
   */
  nextHop?: string;
  /**
   * @remarks
   * The ID of the tunnel associated with the next hop of the policy-based route.
   * 
   * This parameter is returned only if the VPN gateway supports IPsec-VPN connections in dual-tunnel mode.
   * 
   * @example
   * tun-opsqc4d97wni2****
   */
  nextHopTunnelId?: string;
  /**
   * @remarks
   * The priority of the policy-based route.
   * 
   * A smaller value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The destination CIDR block of the policy-based route.
   * 
   * @example
   * 10.0.0.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The source CIDR block of the policy-based route.
   * 
   * @example
   * 192.168.0.0/24
   */
  routeSource?: string;
  /**
   * @remarks
   * The status of the policy-based route. Valid values:
   * 
   * *   **published**: advertised to the VPC route table.
   * *   **normal**: not advertised to the VPC route table.
   * 
   * @example
   * published
   */
  state?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1a3kqjiiq9legfx****
   */
  vpnInstanceId?: string;
  /**
   * @remarks
   * The weight of the policy-based route.
   * 
   * For a VPN gateway that supports IPsec-VPN connections in single-tunnel mode, the weight of a policy-based route indicates the priority of the route.
   * 
   * *   **100**: a high priority If multiple policy-based routes with the same source CIDR block and destination CIDR block exist, the IPsec-VPN connection associated with the policy-based route is the active connection.
   * *   **0**: a low priority If multiple policy-based routes with the same source CIDR block and destination CIDR block exist, the IPsec-VPN connection associated with the policy-based route is the standby connection.
   * 
   * >  For a VPN gateway that does not support IPsec-VPN connections in single-tunnel mode, this parameter does not take effect.
   * 
   * @example
   * 0
   */
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

