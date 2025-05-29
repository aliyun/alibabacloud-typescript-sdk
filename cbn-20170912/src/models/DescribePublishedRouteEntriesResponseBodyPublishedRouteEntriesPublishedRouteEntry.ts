// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflicts } from "./DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflicts";


export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntry extends $dara.Model {
  /**
   * @remarks
   * The ID of the route table configured on the network instance.
   * 
   * @example
   * vtb-il7qut3mjgtlcbpk2****
   */
  childInstanceRouteTableId?: string;
  /**
   * @remarks
   * A list of conflicting routes.
   */
  conflicts?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflicts;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 172.16.0.0/16
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the instance specified as the next hop in the route.
   * 
   * @example
   * ecs-bp18sth14qii3pn****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of the instance specified as the next hop in the route.
   * 
   * *   **Instance**: ECS instance
   * *   **HaVip**: high-availability virtual IP address (HAVIP).
   * *   **RouterInterface**: router interface.
   * *   **NetworkInterface**: elastic network interface (ENI).
   * *   **VpnGateway**: VPN gateway.
   * *   **IPv6Gateway**: IPv6 gateway.
   * *   **NatGateway**: NAT gateway.
   * *   **Attachment**: network instance connection
   * *   **service**: cloud service
   * *   **VBR**: VBR
   * *   **CCN**: CCN instance
   * *   **VPC**: VPC
   * *   **local**: system route. No next hop is specified.
   * *   **TR**: transit router
   * *   **BlackHole**: blackhole route. No next hop is specified.
   * *   **EcRouterInterface**: router interface for Express Connect
   * *   **HealthCheck**: health check
   * *   **AS**: access gateway for CCN
   * *   **classicLink**: classic network-type instance
   * *   **GatewayEndpoint**: gateway endpoint
   * *   **CPE**: data center connected to the VBR
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  /**
   * @remarks
   * Indicates whether the route is allowed to be advertised to or withdrawn from the CEN instance. Valid values:
   * 
   * *   **true**: The route is allowed to be advertised to or withdrawn from the CEN instance.
   * *   **false**: The route is not allowed to be advertised to or withdrawn from the CEN instance.
   * 
   * @example
   * true
   */
  operationalMode?: boolean;
  /**
   * @remarks
   * Indicates whether the route is advertised to the CEN instance. Valid values:
   * 
   * *   **Published**: The route is advertised to the CEN instance.
   * *   **NonPublished**: The route is not advertised to the CEN instance.
   * 
   * @example
   * Published
   */
  publishStatus?: string;
  /**
   * @remarks
   * The type of the route. Valid values:
   * 
   * *   **CEN**: route that is advertised through CEN
   * *   **System**: system route
   * *   **Custom**: custom route
   * 
   * @example
   * System
   */
  routeType?: string;
  static names(): { [key: string]: string } {
    return {
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      conflicts: 'Conflicts',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      operationalMode: 'OperationalMode',
      publishStatus: 'PublishStatus',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstanceRouteTableId: 'string',
      conflicts: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflicts,
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      operationalMode: 'boolean',
      publishStatus: 'string',
      routeType: 'string',
    };
  }

  validate() {
    if(this.conflicts && typeof (this.conflicts as any).validate === 'function') {
      (this.conflicts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

