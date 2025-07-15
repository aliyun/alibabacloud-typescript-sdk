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
   * *   **HaVip**: a high-availability virtual IP address (HaVip).
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

export class ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModels extends $dara.Model {
  /**
   * @remarks
   * The name of the route entry.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 192.168.0.5
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The name of the route entry.
   * 
   * The name must be 2 to 128 characters in length and can contain letter, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * @example
   * i-bp11gcl0sm85t9bi****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of the next hop. Valid values:
   * 
   * *   **EcsInstance**: Elastic Compute Service (ECS) instance
   * *   **NetworkInterface**: elastic network interfaces (ENIs).
   * *   **Local**: local next hop
   * 
   * @example
   * EcsInstance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The information about the next hop.
   */
  nextHops?: ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModelsNextHops[];
  /**
   * @remarks
   * The status of the route entry. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * *   **Modifying**
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      name: 'Name',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      nextHops: 'NextHops',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      name: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      nextHops: { 'type': 'array', 'itemType': ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModelsNextHops },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nextHops)) {
      $dara.Model.validateArray(this.nextHops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteTableEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the routes in the gateway route table.
   */
  gatewayRouteEntryModels?: ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModels[];
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayRouteEntryModels: 'GatewayRouteEntryModels',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayRouteEntryModels: { 'type': 'array', 'itemType': ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModels },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gatewayRouteEntryModels)) {
      $dara.Model.validateArray(this.gatewayRouteEntryModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

