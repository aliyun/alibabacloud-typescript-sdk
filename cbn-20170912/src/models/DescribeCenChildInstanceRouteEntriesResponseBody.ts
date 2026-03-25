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
  destinationCidrBlock?: string;
  instanceId?: string;
  instanceType?: string;
  regionId?: string;
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
  asPaths?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths;
  cenRouteMapRecords?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords;
  communities?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities;
  conflicts?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflicts;
  destinationCidrBlock?: string;
  nextHopInstanceId?: string;
  nextHopRegionId?: string;
  nextHopType?: string;
  operationalMode?: boolean;
  publishStatus?: string;
  routeTableId?: string;
  status?: string;
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

