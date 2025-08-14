// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteConflictResponseBodyRouteConflictsRouteConflict extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the overlapping route.
   * 
   * @example
   * 172.16.0.0/16
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
   * The type of the peer network instance on which the overlapping routes are found.
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
   * The region ID of the peer network instance on which the overlapping routes are found is deployed.
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
  /**
   * @remarks
   * A list of overlapping routes.
   */
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

