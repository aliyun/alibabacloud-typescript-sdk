// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeGatewayIds } from "./DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeGatewayIds";
import { DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTags } from "./DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTags";
import { DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeVSwitchIds } from "./DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeVswitchIds";


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

