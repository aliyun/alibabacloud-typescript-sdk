// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeGatewayIds extends $dara.Model {
  gatewayIds?: string[];
  static names(): { [key: string]: string } {
    return {
      gatewayIds: 'GatewayIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.gatewayIds)) {
      $dara.Model.validateArray(this.gatewayIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTags extends $dara.Model {
  tag?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeVSwitchIds extends $dara.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchId)) {
      $dara.Model.validateArray(this.vSwitchId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBodyRouterTableListRouterTableListType extends $dara.Model {
  associateType?: string;
  creationTime?: string;
  description?: string;
  gatewayIds?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeGatewayIds;
  ownerId?: number;
  resourceGroupId?: string;
  routePropagationEnable?: boolean;
  routeTableId?: string;
  routeTableName?: string;
  routeTableType?: string;
  routerId?: string;
  routerType?: string;
  status?: string;
  tags?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTags;
  vSwitchIds?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeVSwitchIds;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      creationTime: 'CreationTime',
      description: 'Description',
      gatewayIds: 'GatewayIds',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      routePropagationEnable: 'RoutePropagationEnable',
      routeTableId: 'RouteTableId',
      routeTableName: 'RouteTableName',
      routeTableType: 'RouteTableType',
      routerId: 'RouterId',
      routerType: 'RouterType',
      status: 'Status',
      tags: 'Tags',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      creationTime: 'string',
      description: 'string',
      gatewayIds: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeGatewayIds,
      ownerId: 'number',
      resourceGroupId: 'string',
      routePropagationEnable: 'boolean',
      routeTableId: 'string',
      routeTableName: 'string',
      routeTableType: 'string',
      routerId: 'string',
      routerType: 'string',
      status: 'string',
      tags: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTags,
      vSwitchIds: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeVSwitchIds,
      vpcId: 'string',
    };
  }

  validate() {
    if(this.gatewayIds && typeof (this.gatewayIds as any).validate === 'function') {
      (this.gatewayIds as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBodyRouterTableList extends $dara.Model {
  routerTableListType?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListType[];
  static names(): { [key: string]: string } {
    return {
      routerTableListType: 'RouterTableListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerTableListType: { 'type': 'array', 'itemType': DescribeRouteTableListResponseBodyRouterTableListRouterTableListType },
    };
  }

  validate() {
    if(Array.isArray(this.routerTableListType)) {
      $dara.Model.validateArray(this.routerTableListType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
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
   * DC668356-BCB4-42FD-9BC3-FA2B2E04B634
   */
  requestId?: string;
  routerTableList?: DescribeRouteTableListResponseBodyRouterTableList;
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
      routerTableList: 'RouterTableList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routerTableList: DescribeRouteTableListResponseBodyRouterTableList,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.routerTableList && typeof (this.routerTableList as any).validate === 'function') {
      (this.routerTableList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

