// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

