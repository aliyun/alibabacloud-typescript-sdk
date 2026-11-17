// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchSecurityProxyRequestNatRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route entry. When RouteAction is specified, only the default route 0.0.0.0/0 is supported. If other CIDR blocks are passed, a parameter error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The ID of the NAT gateway to which the route entry pointed before traffic redirection. You can obtain the ID by calling the DescribeSecurityProxyResources operation. When RouteAction is specified, this value must be consistent with the NAT gateway involved in the current operation. When traffic redirection is disabled, you must still pass this NAT gateway ID instead of the current next hop ID of the firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1a2b3c4d5e6f7g8h9i0
   */
  nextHopId?: string;
  /**
   * @remarks
   * The next hop type of the route entry before traffic redirection. When RouteAction is specified, this value is fixed to NatGateway and must be passed in pairs with NextHopId. If other values are passed, a parameter error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * NatGateway
   */
  nextHopType?: string;
  /**
   * @remarks
   * The ID of the route table to which the route entry belongs. The route table must exist in the user\\"s VPC. This parameter and DestinationCidr are used together to locate a route. If the route does not exist, the task fails and a message indicating that the route entry does not exist is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp1a2b3c4d5e6f7g8h9i0
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      routeTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSecurityProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The route entry list for routing to be redirected or un-redirected. Maximum number of entries: 10,000. When RouteAction (divert or undivert) is specified, a non-empty list must be provided and used according to the incremental semantics. Each entry must include the RouteTableId, DestinationCidr, NextHopId, and NextHopType fields, and the combination of RouteTableId and DestinationCidr must be unique. In the Gateway Load Balancer (GWLB) architecture, when committed together with Switch=open, this parameter is used to specify the route entry for which traffic redirection is enabled in the current request. If no list is provided, the saved list is used. If no active list exists, a parameter error is returned.
   */
  natRouteEntryList?: SwitchSecurityProxyRequestNatRouteEntryList[];
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * proxy-natbf******
   */
  proxyId?: string;
  /**
   * @remarks
   * Makes incremental traffic redirection changes to the route entry passed in this request. Other redirected route tables in the list are not affected. Valid values: divert (enables traffic redirection for the passed route entry) and undivert (shutdown of traffic redirection for the passed route entry). This parameter is active only when the firewall is in the traffic redirection state (normal). This parameter and Switch are mutually exclusive and cannot be both set to non-empty values at the same time. If this parameter is not specified or is set to an empty string, the incremental semantics are not used.
   * 
   * @example
   * divert
   */
  routeAction?: string;
  /**
   * @remarks
   * The security protection switch. Valid values:
   * - open: Enabled.
   * - close: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  switch?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      natRouteEntryList: 'NatRouteEntryList',
      proxyId: 'ProxyId',
      routeAction: 'RouteAction',
      switch: 'Switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      natRouteEntryList: { 'type': 'array', 'itemType': SwitchSecurityProxyRequestNatRouteEntryList },
      proxyId: 'string',
      routeAction: 'string',
      switch: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natRouteEntryList)) {
      $dara.Model.validateArray(this.natRouteEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

