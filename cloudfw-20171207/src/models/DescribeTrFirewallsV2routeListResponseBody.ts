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

export class DescribeTrFirewallsV2RouteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The route tables of Cloud Firewall.
   */
  firewallRouteDetailList?: DescribeTrFirewallsV2RouteListResponseBodyFirewallRouteDetailList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABF190A2-B4D0-53F6-995A-5690A721F91C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallRouteDetailList: 'FirewallRouteDetailList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallRouteDetailList: { 'type': 'array', 'itemType': DescribeTrFirewallsV2RouteListResponseBodyFirewallRouteDetailList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallRouteDetailList)) {
      $dara.Model.validateArray(this.firewallRouteDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

