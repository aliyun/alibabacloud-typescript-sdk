// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths extends $dara.Model {
  asPath?: string[];
  static names(): { [key: string]: string } {
    return {
      asPath: 'AsPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.asPath)) {
      $dara.Model.validateArray(this.asPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord extends $dara.Model {
  /**
   * @remarks
   * The region ID of the routing policy.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The routing policy ID.
   * 
   * @example
   * cenrmap-w4yf7toozfol3q****
   */
  routeMapId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeMapId: 'RouteMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeMapId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords extends $dara.Model {
  cenRouteMapRecord?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord[];
  static names(): { [key: string]: string } {
    return {
      cenRouteMapRecord: 'CenRouteMapRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteMapRecord: { 'type': 'array', 'itemType': DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord },
    };
  }

  validate() {
    if(Array.isArray(this.cenRouteMapRecord)) {
      $dara.Model.validateArray(this.cenRouteMapRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities extends $dara.Model {
  community?: string[];
  static names(): { [key: string]: string } {
    return {
      community: 'Community',
    };
  }

  static types(): { [key: string]: any } {
    return {
      community: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.community)) {
      $dara.Model.validateArray(this.community);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflictsConflict extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the overlapping route.
   * 
   * @example
   * 192.168.1.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the peer network instance on which the overlapping routes are found.
   * 
   * @example
   * ccn-0q3b7oviikmm9h****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the peer network instance on which the overlapping routes are found. Valid values:
   * 
   * *   **VPC**: VPC
   * *   **VBR**: VBR
   * *   **CCN**: CCN instance
   * *   **ECR**: ECR
   * 
   * @example
   * CCN
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID of the peer network instance on which the overlapping routes are found.
   * 
   * @example
   * ccn-cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The cause of the route error. Valid values:
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

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflicts extends $dara.Model {
  conflict?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflictsConflict[];
  static names(): { [key: string]: string } {
    return {
      conflict: 'Conflict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflict: { 'type': 'array', 'itemType': DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflictsConflict },
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

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry extends $dara.Model {
  /**
   * @remarks
   * The AS paths of the routes.
   */
  asPaths?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths;
  /**
   * @remarks
   * The routing policy that the routes match.
   */
  cenRouteMapRecords?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords;
  /**
   * @remarks
   * The community attributes of the route entries.
   */
  communities?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities;
  /**
   * @remarks
   * A list of overlapping routes.
   */
  conflicts?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflicts;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the instance specified as the next hop in the route.
   * 
   * @example
   * vbr-bp13gtbhdp0pfqg6s****
   */
  nextHopInstanceId?: string;
  /**
   * @remarks
   * The region ID of the instance specified as the next hop in the route.
   * 
   * @example
   * cn-hangzhou
   */
  nextHopRegionId?: string;
  /**
   * @remarks
   * The type of the instance specified as the next hop in the route. Valid values:
   * 
   * *   **Instance**: an ECS instance
   * *   **HaVip**: an HAVIP
   * *   **RouterInterface**: a router interface
   * *   **NetworkInterface**: an ENI
   * *   **VpnGateway**: a VPN gateway
   * *   **IPv6Gateway**: an IPv6 gateway
   * *   **Ipv4Gateway**: an IPv4 gateway
   * *   **NatGateway**: a NAT gateway
   * *   **Attachment**: a network instance connection
   * *   **service**: a cloud service
   * *   **VBR**: a VBR
   * *   **CCN**: a CCN instance
   * *   **VPC**: a VPC
   * *   **local**: a system route (no next hop is specified)
   * *   **TR**: a transit router
   * *   **BlackHole**: a blackhole route (no next hop is specified)
   * *   **EcRouterInterface**: a router interface for Express Connect
   * *   **HealthCheck**: a health check
   * *   **AS**: an access gateway for CCN
   * *   **classic**: a classic network-type instance
   * *   **GatewayEndpoint**: a gateway endpoint
   * *   **CPE**: a data center connected to a VBR
   * 
   * @example
   * VBR
   */
  nextHopType?: string;
  /**
   * @remarks
   * Indicates whether the route is allowed to be advertised to or withdrawn from the CEN instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  operationalMode?: boolean;
  /**
   * @remarks
   * Indicates whether the route is advertised to the CEN instance. Valid values:
   * 
   * *   **Published**
   * *   **NonPublished**
   * 
   * @example
   * Published
   */
  publishStatus?: string;
  /**
   * @remarks
   * The route table ID.
   * 
   * @example
   * vtb-bp1r9pvl4xen8s9ju****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The route status. Valid values:
   * 
   * *   **Active**: available routes
   * *   **Candidate**: standby routes
   * *   **Rejected**: rejected routes
   * *   **Prohibited**: prohibited routes
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **CEN**: route that is advertised through CEN
   * *   **System**: system route
   * *   **Custom**: custom route
   * 
   * @example
   * CEN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      asPaths: 'AsPaths',
      cenRouteMapRecords: 'CenRouteMapRecords',
      communities: 'Communities',
      conflicts: 'Conflicts',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopInstanceId: 'NextHopInstanceId',
      nextHopRegionId: 'NextHopRegionId',
      nextHopType: 'NextHopType',
      operationalMode: 'OperationalMode',
      publishStatus: 'PublishStatus',
      routeTableId: 'RouteTableId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPaths: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths,
      cenRouteMapRecords: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords,
      communities: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities,
      conflicts: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflicts,
      destinationCidrBlock: 'string',
      nextHopInstanceId: 'string',
      nextHopRegionId: 'string',
      nextHopType: 'string',
      operationalMode: 'boolean',
      publishStatus: 'string',
      routeTableId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.asPaths && typeof (this.asPaths as any).validate === 'function') {
      (this.asPaths as any).validate();
    }
    if(this.cenRouteMapRecords && typeof (this.cenRouteMapRecords as any).validate === 'function') {
      (this.cenRouteMapRecords as any).validate();
    }
    if(this.communities && typeof (this.communities as any).validate === 'function') {
      (this.communities as any).validate();
    }
    if(this.conflicts && typeof (this.conflicts as any).validate === 'function') {
      (this.conflicts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntries extends $dara.Model {
  cenRouteEntry?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      cenRouteEntry: 'CenRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteEntry: { 'type': 'array', 'itemType': DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry },
    };
  }

  validate() {
    if(Array.isArray(this.cenRouteEntry)) {
      $dara.Model.validateArray(this.cenRouteEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenChildInstanceRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the route.
   */
  cenRouteEntries?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntries;
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
   * The ID of the request.
   * 
   * @example
   * 17A57456-EF48-419D-9AE6-9B03D9996018
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cenRouteEntries: 'CenRouteEntries',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteEntries: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntries,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.cenRouteEntries && typeof (this.cenRouteEntries as any).validate === 'function') {
      (this.cenRouteEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

