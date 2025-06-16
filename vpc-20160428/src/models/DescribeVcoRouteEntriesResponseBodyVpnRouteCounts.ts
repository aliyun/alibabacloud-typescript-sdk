// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

