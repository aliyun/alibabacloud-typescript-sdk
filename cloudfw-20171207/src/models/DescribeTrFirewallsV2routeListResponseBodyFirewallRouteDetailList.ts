// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallsV2RouteListResponseBodyFirewallRouteDetailList extends $dara.Model {
  /**
   * @remarks
   * The destination address of the route.
   * 
   * @example
   * 192.168.10.0/25
   */
  trFirewallRouteDestination?: string;
  /**
   * @remarks
   * The ID of the next hop for the route.
   * 
   * @example
   * tr-attach-hnxab1y0pxn16p****
   */
  trFirewallRouteNexthop?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-04ecbbc6720d4f90****
   */
  trFirewallRoutePolicyId?: string;
  /**
   * @remarks
   * The ID of the route table to which the route entry belongs.
   * 
   * @example
   * vtb-2zeockxxxorv0mnhz****
   */
  trFirewallRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      trFirewallRouteDestination: 'TrFirewallRouteDestination',
      trFirewallRouteNexthop: 'TrFirewallRouteNexthop',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
      trFirewallRouteTableId: 'TrFirewallRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trFirewallRouteDestination: 'string',
      trFirewallRouteNexthop: 'string',
      trFirewallRoutePolicyId: 'string',
      trFirewallRouteTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

