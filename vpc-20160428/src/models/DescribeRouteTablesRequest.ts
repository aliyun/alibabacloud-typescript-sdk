// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteTablesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the VPC to which the route table belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the route table to be queried belongs.
   * 
   * @example
   * rg-acfmxazccb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route table that you want to query.
   * 
   * @example
   * rtb-bp12mw1f8k3jgygk9****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The name of the route table that you want to query.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * RouteTable-1
   */
  routeTableName?: string;
  /**
   * @remarks
   * The ID of the router to which the route table belongs.
   * 
   * @example
   * vtb-bp1krxxzp0c29fmon****
   */
  routerId?: string;
  /**
   * @remarks
   * The type of the router to which the route table belongs. Valid values:
   * 
   * *   **VRouter** (default)
   * *   **VBR**
   * 
   * @example
   * VRouter
   */
  routerType?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **Custom**
   * *   **System**
   * *   **BGP**
   * *   **CEN**
   * 
   * @example
   * custom
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vRouter.
   * 
   * @example
   * vtb-bp1krxxzp0c29fmon****
   */
  VRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
      routeTableName: 'RouteTableName',
      routerId: 'RouterId',
      routerType: 'RouterType',
      type: 'Type',
      VRouterId: 'VRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
      routeTableName: 'string',
      routerId: 'string',
      routerType: 'string',
      type: 'string',
      VRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

