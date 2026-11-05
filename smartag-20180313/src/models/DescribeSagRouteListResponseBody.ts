// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagRouteListResponseBodyRoutes extends $dara.Model {
  /**
   * @remarks
   * The list of conflicting CIDR blocks.
   */
  conflictCidrs?: string[];
  /**
   * @remarks
   * The routing cost value. The number to the left of the forward slash (/) represents the administrative distance (AD) of the routable protocol. The number to the right of the forward slash (/) represents the metric.
   * 
   * @example
   * [110/11]
   */
  cost?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * @example
   * 6.XX.XX.6/32
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The next hop.
   * 
   * @example
   * 192.XX.XX.1
   */
  nextHop?: string;
  /**
   * @remarks
   * The port name. A port name of -1 indicates that data traffic enters Alibaba Cloud through a VPN connection.
   * 
   * @example
   * 2
   */
  portName?: string;
  /**
   * @remarks
   * The routable protocol type. Valid values:
   * - **STATIC**: Static routable protocol.
   * - **OSPF**: OSPF dynamic routable protocol.
   * - **BGP**: BGP dynamic routable protocol.
   * 
   * @example
   * STATIC
   */
  routeProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      conflictCidrs: 'ConflictCidrs',
      cost: 'Cost',
      destinationCidr: 'DestinationCidr',
      nextHop: 'NextHop',
      portName: 'PortName',
      routeProtocol: 'RouteProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictCidrs: { 'type': 'array', 'itemType': 'string' },
      cost: 'string',
      destinationCidr: 'string',
      nextHop: 'string',
      portName: 'string',
      routeProtocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conflictCidrs)) {
      $dara.Model.validateArray(this.conflictCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE6642D4-21EB-4168-9BF9-F217953F9892
   */
  requestId?: string;
  /**
   * @remarks
   * The route list.
   */
  routes?: DescribeSagRouteListResponseBodyRoutes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routes: 'Routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routes: { 'type': 'array', 'itemType': DescribeSagRouteListResponseBodyRoutes },
    };
  }

  validate() {
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

