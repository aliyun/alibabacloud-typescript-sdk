// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds extends $dara.Model {
  routeTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routeTableId)) {
      $dara.Model.validateArray(this.routeTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponseBodyVRoutersVRouter extends $dara.Model {
  /**
   * @remarks
   * The time when the vRouter was created.
   * 
   * @example
   * 2018-03-22T07:46:20Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the vRouter.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The region to which the vRouter belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the route tables.
   */
  routeTableIds?: DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds;
  /**
   * @remarks
   * The ID of the vRouter.
   * 
   * @example
   * vrt-rj98khsezfqpjrxmv****
   */
  VRouterId?: string;
  /**
   * @remarks
   * The name of the vRouter.
   * 
   * @example
   * doctest
   */
  VRouterName?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the vRouter belongs.
   * 
   * @example
   * vpc-rj905wotv6y030t1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      regionId: 'RegionId',
      routeTableIds: 'RouteTableIds',
      VRouterId: 'VRouterId',
      VRouterName: 'VRouterName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      regionId: 'string',
      routeTableIds: DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds,
      VRouterId: 'string',
      VRouterName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.routeTableIds && typeof (this.routeTableIds as any).validate === 'function') {
      (this.routeTableIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponseBodyVRouters extends $dara.Model {
  VRouter?: DescribeVRoutersResponseBodyVRoutersVRouter[];
  static names(): { [key: string]: string } {
    return {
      VRouter: 'VRouter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VRouter: { 'type': 'array', 'itemType': DescribeVRoutersResponseBodyVRoutersVRouter },
    };
  }

  validate() {
    if(Array.isArray(this.VRouter)) {
      $dara.Model.validateArray(this.VRouter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponseBody extends $dara.Model {
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
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The details about the vRouters.
   */
  VRouters?: DescribeVRoutersResponseBodyVRouters;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      VRouters: 'VRouters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      VRouters: DescribeVRoutersResponseBodyVRouters,
    };
  }

  validate() {
    if(this.VRouters && typeof (this.VRouters as any).validate === 'function') {
      (this.VRouters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

