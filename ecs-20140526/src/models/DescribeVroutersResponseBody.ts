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
  creationTime?: string;
  description?: string;
  regionId?: string;
  routeTableIds?: DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds;
  VRouterId?: string;
  VRouterName?: string;
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
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

