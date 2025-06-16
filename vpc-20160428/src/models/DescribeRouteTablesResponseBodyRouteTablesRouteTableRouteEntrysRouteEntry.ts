// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops } from "./DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops";


export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the route. The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * RouteEntryDescription
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the route. The destination CIDR block supports IPv4 and IPv6. Make sure that the destination CIDR block meets the following requirements:
   * 
   * *   The destination CIDR block is not 100.64.0.0/10 or a subset of 100.64.0.0/10.
   * *   The destination CIDR block of each route in the route table is unique.
   * 
   * @example
   * 192.168.0.1/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the instance associated with the next hop.
   * 
   * @example
   * ri-2zeo3xzyf38r4urzd****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the next hop. Valid values:
   * 
   * *   **Instance** (default): an Elastic Compute Service (ECS) instance
   * *   **HaVip**: a high-availability virtual IP address (HAVIP).
   * *   **VpnGateway**: a VPN gateway
   * *   **NatGateway**: a NAT gateway
   * *   **NetworkInterface**: a secondary elastic network interface (ENI)
   * *   **RouterInterface**: a router interface
   * *   **IPv6Gateway**: an IPv6 gateway
   * *   **Attachment**: a transit router
   * 
   * @example
   * local
   */
  nextHopType?: string;
  /**
   * @remarks
   * The information about the next hop.
   */
  nextHops?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops;
  /**
   * @remarks
   * The ID of the route.
   * 
   * @example
   * rte-bp1mnnr2al0naomnpxxx
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The route name.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The route table ID.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The route status. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * *   **Modifying**
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **Custom**
   * *   **System**
   * *   **BGP**
   * *   **CEN**
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      instanceId: 'InstanceId',
      nextHopType: 'NextHopType',
      nextHops: 'NextHops',
      routeEntryId: 'RouteEntryId',
      routeEntryName: 'RouteEntryName',
      routeTableId: 'RouteTableId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      instanceId: 'string',
      nextHopType: 'string',
      nextHops: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops,
      routeEntryId: 'string',
      routeEntryName: 'string',
      routeTableId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.nextHops && typeof (this.nextHops as any).validate === 'function') {
      (this.nextHops as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

