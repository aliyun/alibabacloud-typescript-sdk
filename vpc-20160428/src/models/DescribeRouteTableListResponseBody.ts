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
  /**
   * @remarks
   * The key of the tag that is added to the route table.
   * 
   * @example
   * type
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is added to the route table.
   * 
   * @example
   * ingress
   */
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
  /**
   * @remarks
   * The type of the cloud resource with which the route table is associated. Valid values:
   * 
   * *   **VSwitch**: vSwitch
   * *   **Gateway**: IPv4 gateway
   * 
   * @example
   * VSwitch
   */
  associateType?: string;
  /**
   * @remarks
   * The time when the route table was created.
   * 
   * @example
   * 2021-08-22T10:40:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The information about the route table.
   * 
   * @example
   * This is Route Table.
   */
  description?: string;
  /**
   * @remarks
   * The detailed information about the IPv4 gateway.
   */
  gatewayIds?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeGatewayIds;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the route table belongs.
   * 
   * @example
   * 253460731706911258
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group to which the route table belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Whether to receive the propagation routes. Valid Values:
   * 
   * *   **true**: received.
   * 
   * *   **false**: not received.
   * 
   * @example
   * true
   */
  routePropagationEnable?: boolean;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The name of the route table.
   * 
   * @example
   * doctest
   */
  routeTableName?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * *   **Custom**
   * *   **System**
   * 
   * @example
   * System
   */
  routeTableType?: string;
  /**
   * @remarks
   * The ID of the vRouter to which the route table belongs.
   * 
   * @example
   * vrt-bp1lhl0taikrteen8****
   */
  routerId?: string;
  /**
   * @remarks
   * The type of the vRouter to which the route table belongs. Valid values:
   * 
   * - **VRouter**: a vRouter.
   * 
   * - **VBR**: a VBR.
   * 
   * @example
   * VRouter
   */
  routerType?: string;
  /**
   * @remarks
   * The status of the route table. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * *   **Deleting**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTags;
  /**
   * @remarks
   * The vSwitch IDs.
   */
  vSwitchIds?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeVSwitchIds;
  /**
   * @remarks
   * The ID of the VPC to which the route table belongs.
   * 
   * @example
   * vpc-bp15zckdt37pq72****
   */
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
  /**
   * @remarks
   * The detailed information about the route tables.
   */
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

