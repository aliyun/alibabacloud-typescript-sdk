// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModelsNextHops extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the route is available. Valid values:
   * 
   * - **0**: unavailable.
   * - **1**: available.
   * 
   * @example
   * 1
   */
  enabled?: string;
  /**
   * @remarks
   * The instance ID of the next hop.
   * 
   * @example
   * vpn-bp10zyaph5cc8b7c7****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * - **Instance** (default): ECS instance.
   * - **HaVip**: high-availability virtual IP address (HaVip).
   * - **VpnGateway**: VPN gateway.
   * - **NatGateway**: NAT gateway.
   * - **NetworkInterface**: secondary elastic network interfaces (ENIs).
   * - **RouterInterface**: vRouter interface.
   * - **IPv6Gateway**: IPv6 gateway.
   * - **Attachment**: transit router.
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The weight of the route entry.
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
   * The description of the route entry.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry.
   * 
   * @example
   * 192.168.0.5
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The name of the route entry.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The instance ID of the next hop.
   * 
   * @example
   * i-bp11gcl0sm85t9bi****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * - **EcsInstance**: ECS instance.
   * - **NetworkInterface**: elastic network interfaces (ENIs).
   * - **Local**: local.
   * 
   * @example
   * EcsInstance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The next hop information.
   */
  nextHops?: ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModelsNextHops[];
  /**
   * @remarks
   * The status of the route entry.
   * 
   * - **Pending**: being configured.
   * - **Available**: available.
   * - **Modifying**: being modified.
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
   * The details of route entries in the gateway route table.
   */
  gatewayRouteEntryModels?: ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModels[];
  /**
   * @remarks
   * The pagination token. Valid values:
   * - If **NextToken** is empty, no subsequent query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
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

