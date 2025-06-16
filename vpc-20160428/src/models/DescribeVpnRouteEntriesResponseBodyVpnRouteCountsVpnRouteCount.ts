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

