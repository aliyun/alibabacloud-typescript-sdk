// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the route is available. Valid values:
   * 
   * *   **0**: unavailable
   * *   **1**: available
   * 
   * @example
   * 0
   */
  enabled?: number;
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * @example
   * ri-2zeo3xzyf38r4urzdpvqw
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of the next hop. Valid values:
   * 
   * *   **Instance**: an ECS instance
   * *   **HaVip**: an HAVIP
   * *   **VpnGateway**: a VPN gateway
   * *   **NatGateway**: a NAT gateway
   * *   **NetworkInterface**: a secondary ENI
   * *   **RouterInterface**: a router interface
   * *   **IPv6Gateway**: an IPv6 gateway
   * *   **Attachment**: a transit router
   * 
   * @example
   * HaVip
   */
  nextHopType?: string;
  /**
   * @remarks
   * The weight of the route.
   * 
   * @example
   * 80
   */
  weight?: number;
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
      enabled: 'number',
      nextHopId: 'string',
      nextHopType: 'string',
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

