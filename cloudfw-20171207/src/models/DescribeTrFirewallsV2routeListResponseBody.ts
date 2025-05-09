// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrFirewallsV2RouteListResponseBodyFirewallRouteDetailList } from "./DescribeTrFirewallsV2routeListResponseBodyFirewallRouteDetailList";


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

