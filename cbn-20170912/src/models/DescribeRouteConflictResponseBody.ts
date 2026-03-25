// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteConflictResponseBodyRouteConflictsRouteConflict extends $dara.Model {
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

export class DescribeRouteConflictResponseBodyRouteConflicts extends $dara.Model {
  routeConflict?: DescribeRouteConflictResponseBodyRouteConflictsRouteConflict[];
  static names(): { [key: string]: string } {
    return {
      routeConflict: 'RouteConflict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeConflict: { 'type': 'array', 'itemType': DescribeRouteConflictResponseBodyRouteConflictsRouteConflict },
    };
  }

  validate() {
    if(Array.isArray(this.routeConflict)) {
      $dara.Model.validateArray(this.routeConflict);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteConflictResponseBody extends $dara.Model {
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
   * EE3A2CC7-41F1-58DB-8306-CFC99D9C747B
   */
  requestId?: string;
  routeConflicts?: DescribeRouteConflictResponseBodyRouteConflicts;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routeConflicts: 'RouteConflicts',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeConflicts: DescribeRouteConflictResponseBodyRouteConflicts,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.routeConflicts && typeof (this.routeConflicts as any).validate === 'function') {
      (this.routeConflicts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

