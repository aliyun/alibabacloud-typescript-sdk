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
  regionId?: string;
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
  regionId?: string;
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
  asPaths?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths;
  cenOutRouteMapRecords?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecords;
  cenRouteMapRecords?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords;
  communities?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities;
  destinationCidrBlock?: string;
  nextHopInstanceId?: string;
  nextHopRegionId?: string;
  nextHopType?: string;
  preference?: number;
  status?: string;
  toOtherRegionStatus?: string;
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

