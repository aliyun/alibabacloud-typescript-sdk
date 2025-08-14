// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths extends $dara.Model {
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

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecordsCenOutRouteMapRecord extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the routing policy is applied.
   * 
   * @example
   * ccn-cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * cenrmap-dbarzidzp7ek4k****
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

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecords extends $dara.Model {
  cenOutRouteMapRecord?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecordsCenOutRouteMapRecord[];
  static names(): { [key: string]: string } {
    return {
      cenOutRouteMapRecord: 'CenOutRouteMapRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenOutRouteMapRecord: { 'type': 'array', 'itemType': DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecordsCenOutRouteMapRecord },
    };
  }

  validate() {
    if(Array.isArray(this.cenOutRouteMapRecord)) {
      $dara.Model.validateArray(this.cenOutRouteMapRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the routing policy is applied.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * cenrmap-cz5axczdxb7yfu****
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

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords extends $dara.Model {
  cenRouteMapRecord?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord[];
  static names(): { [key: string]: string } {
    return {
      cenRouteMapRecord: 'CenRouteMapRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteMapRecord: { 'type': 'array', 'itemType': DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecordsCenRouteMapRecord },
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

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities extends $dara.Model {
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

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry extends $dara.Model {
  /**
   * @remarks
   * The AS paths of the route.
   */
  asPaths?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths;
  /**
   * @remarks
   * The routing policy that the routes match in the outbound direction.
   */
  cenOutRouteMapRecords?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecords;
  /**
   * @remarks
   * The routing policy that the routes match in the inbound direction.
   */
  cenRouteMapRecords?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords;
  /**
   * @remarks
   * The communities of the route.
   */
  communities?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 192.168.1.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the instance specified as the next hop in the route.
   * 
   * @example
   * vpc-bp1j8728mm6pweeod****
   */
  nextHopInstanceId?: string;
  /**
   * @remarks
   * The ID of the region to which the network instance specified as the next hop in the route belongs.
   * 
   * @example
   * cn-hangzhou
   */
  nextHopRegionId?: string;
  /**
   * @remarks
   * The type of the instance specified as the next hop in the route. Valid values:
   * 
   * *   **VPC**: virtual private cloud (VPC)
   * *   **VBR**: virtual border router (VBR)
   * *   **CCN**: Cloud Connect Network (CCN) instance
   * *   **local_service**: system route. No next hop is specified.
   * 
   * @example
   * VPC
   */
  nextHopType?: string;
  /**
   * @remarks
   * The route priority.
   * 
   * A smaller value indicates a higher priority.
   * 
   * @example
   * 50
   */
  preference?: number;
  /**
   * @remarks
   * The route status. Valid values:
   * 
   * *   **Active**: available
   * *   **Candidate**: standby
   * *   **Rejected**: rejected
   * *   **Prohibited**: prohibited
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the route can be advertised to other regions. Valid values:
   * 
   * *   **Active**: The route can be advertised to other regions.
   * *   **Prohibited**: The route cannot be advertised to other regions.
   * 
   * @example
   * Active
   */
  toOtherRegionStatus?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **CEN**: route that is advertised through CEN
   * *   **Custom**: custom route
   * *   **System**: system route
   * 
   * @example
   * CEN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      asPaths: 'AsPaths',
      cenOutRouteMapRecords: 'CenOutRouteMapRecords',
      cenRouteMapRecords: 'CenRouteMapRecords',
      communities: 'Communities',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopInstanceId: 'NextHopInstanceId',
      nextHopRegionId: 'NextHopRegionId',
      nextHopType: 'NextHopType',
      preference: 'Preference',
      status: 'Status',
      toOtherRegionStatus: 'ToOtherRegionStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPaths: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths,
      cenOutRouteMapRecords: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecords,
      cenRouteMapRecords: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords,
      communities: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities,
      destinationCidrBlock: 'string',
      nextHopInstanceId: 'string',
      nextHopRegionId: 'string',
      nextHopType: 'string',
      preference: 'number',
      status: 'string',
      toOtherRegionStatus: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.asPaths && typeof (this.asPaths as any).validate === 'function') {
      (this.asPaths as any).validate();
    }
    if(this.cenOutRouteMapRecords && typeof (this.cenOutRouteMapRecords as any).validate === 'function') {
      (this.cenOutRouteMapRecords as any).validate();
    }
    if(this.cenRouteMapRecords && typeof (this.cenRouteMapRecords as any).validate === 'function') {
      (this.cenRouteMapRecords as any).validate();
    }
    if(this.communities && typeof (this.communities as any).validate === 'function') {
      (this.communities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries extends $dara.Model {
  cenRouteEntry?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      cenRouteEntry: 'CenRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteEntry: { 'type': 'array', 'itemType': DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry },
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

export class DescribeCenRegionDomainRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of route entries.
   */
  cenRouteEntries?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries;
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 004E99FB-E996-5777-888E-BA1D8F215407
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
      cenRouteEntries: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntries,
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

