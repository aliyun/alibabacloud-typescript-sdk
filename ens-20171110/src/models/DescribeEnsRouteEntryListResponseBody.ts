// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRouteEntryListResponseBodyRouteEntrysNextHops extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the next hop.
   * 
   * @example
   * i-bp1111yup9991890woxq
   */
  nextHopId?: string;
  /**
   * @remarks
   * The name of the next hop instance.
   * 
   * @example
   * testInstance
   */
  nextHopName?: string;
  /**
   * @remarks
   * The next hop type.
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      nextHopName: 'NextHopName',
      nextHopType: 'NextHopType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      nextHopName: 'string',
      nextHopType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRouteEntryListResponseBodyRouteEntrys extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2023-02-16T03:50:05Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the route entry.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry.
   * 
   * @example
   * 101.0.45.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The next hop information.
   */
  nextHops?: DescribeEnsRouteEntryListResponseBodyRouteEntrysNextHops[];
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * rte-2zeksx7h436f5unk349m1
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The name of the route entry.
   * 
   * @example
   * test0
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-uf62p9o5cn35fi8xgurnm
   */
  routeTableId?: string;
  /**
   * @remarks
   * The source CIDR block. This parameter is used when you configure a routing entry in a gateway route table and is not supported in a vSwitch route table.
   * 
   * @example
   * 10.XXX.XXX.0/24
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The status of the route entry.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The type of the routing entry.
   * 
   * @example
   * Custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHops: 'NextHops',
      routeEntryId: 'RouteEntryId',
      routeEntryName: 'RouteEntryName',
      routeTableId: 'RouteTableId',
      sourceCidrBlock: 'SourceCidrBlock',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      nextHops: { 'type': 'array', 'itemType': DescribeEnsRouteEntryListResponseBodyRouteEntrysNextHops },
      routeEntryId: 'string',
      routeEntryName: 'string',
      routeTableId: 'string',
      sourceCidrBlock: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nextHops)) {
      $dara.Model.validateArray(this.nextHops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRouteEntryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The route entry information.
   */
  routeEntrys?: DescribeEnsRouteEntryListResponseBodyRouteEntrys[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routeEntrys: 'RouteEntrys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeEntrys: { 'type': 'array', 'itemType': DescribeEnsRouteEntryListResponseBodyRouteEntrys },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeEntrys)) {
      $dara.Model.validateArray(this.routeEntrys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

