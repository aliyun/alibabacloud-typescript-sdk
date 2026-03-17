// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagRouteListResponseBodyRoutes extends $dara.Model {
  /**
   * @remarks
   * The list of CIDR blocks that overlap with each other.
   */
  conflictCidrs?: string[];
  /**
   * @remarks
   * The cost of the route.
   * 
   * The number on the left side of the forward slash (/) indicates the administrative distance (AD) of the routing protocol.
   * 
   * The number on the right side of the forward slash (/) indicates the metric value.
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
   * The name of the port. If the port name is -1, data is transferred through a VPN tunnel to Alibaba Cloud.
   * 
   * @example
   * 2
   */
  portName?: string;
  /**
   * @remarks
   * The routing protocol. Valid values:
   * 
   * *   **STATIC**: a static routing protocol.
   * *   **OSPF**: the Open Shortest Path First (OSPF) dynamic routing protocol.
   * *   **BGP**: the Border Gateway Protocol (BGP) dynamic routing protocol.
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
   * The ID of the request.
   * 
   * @example
   * CE6642D4-21EB-4168-9BF9-F217953F9892
   */
  requestId?: string;
  /**
   * @remarks
   * The routes.
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

