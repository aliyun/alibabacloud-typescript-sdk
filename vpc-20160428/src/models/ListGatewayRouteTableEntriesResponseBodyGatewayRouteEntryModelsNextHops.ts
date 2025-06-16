// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModelsNextHops extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the route is available. Valid values:
   * 
   * *   **0**: unavailable
   * *   **1**: available
   * 
   * @example
   * 1
   */
  enabled?: string;
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * @example
   * vpn-bp10zyaph5cc8b7c7****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of the next hop. Valid values:
   * 
   * *   **Instance** (default): an ECS instance
   * *   **HaVip**: a high-availability virtual IP address (HAVIP).
   * *   **VpnGateway**: a VPN gateway
   * *   **NatGateway**: a NAT gateway
   * *   **NetworkInterface**: a secondary ENI
   * *   **RouterInterface**: a router interface
   * *   **IPv6Gateway**: an IPv6 gateway
   * *   **Attachment**: a transit router
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The weight of the route.
   * 
   * @example
   * 100
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

