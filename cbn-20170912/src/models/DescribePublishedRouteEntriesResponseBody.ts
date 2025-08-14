// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflictsConflict extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the conflicting route.
   * 
   * @example
   * 192.168.20.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the peer network instance on which conflicting routes are found.
   * 
   * @example
   * ccn-0q3b7oviikmm9h****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the peer network instance on which the conflicting routes are found. Valid values:
   * 
   * *   **VPC**: VPC
   * *   **VBR**: VBR
   * *   **CCN**: CCN instance
   * 
   * @example
   * CCN
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the region where the peer network instance on which the conflicting routes are found is deployed.
   * 
   * @example
   * ccn-cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The cause of the route confliction. Valid values:
   * 
   * *   **conflict**: The routes have the same destination CIDR block.
   * *   **overflow**: The number of routes in the route table configured on another network instance has reached the upper limit.
   * 
   * @example
   * conflict
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflicts extends $dara.Model {
  conflict?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflictsConflict[];
  static names(): { [key: string]: string } {
    return {
      conflict: 'Conflict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflict: { 'type': 'array', 'itemType': DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflictsConflict },
    };
  }

  validate() {
    if(Array.isArray(this.conflict)) {
      $dara.Model.validateArray(this.conflict);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries extends $dara.Model {
  publishedRouteEntry?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      publishedRouteEntry: 'PublishedRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishedRouteEntry: { 'type': 'array', 'itemType': DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntry },
    };
  }

  validate() {
    if(Array.isArray(this.publishedRouteEntry)) {
      $dara.Model.validateArray(this.publishedRouteEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishedRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of routes.
   */
  publishedRouteEntries?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FF1A7B2A-677F-4F71-96EA-6002B329F437
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publishedRouteEntries: 'PublishedRouteEntries',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      publishedRouteEntries: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.publishedRouteEntries && typeof (this.publishedRouteEntries as any).validate === 'function') {
      (this.publishedRouteEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

