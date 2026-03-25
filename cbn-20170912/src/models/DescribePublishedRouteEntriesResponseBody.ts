// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflictsConflict extends $dara.Model {
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
  childInstanceRouteTableId?: string;
  conflicts?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntryConflicts;
  destinationCidrBlock?: string;
  nextHopId?: string;
  nextHopType?: string;
  operationalMode?: boolean;
  publishStatus?: string;
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

