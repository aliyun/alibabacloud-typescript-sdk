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
   * The number of entries per page during paging. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the VPC to which the route table belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * ap-southeast-6
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the route table belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route table to query.
   * 
   * >You must specify at least one of the following parameters: VRouterId, RouteTableId, RouterId, and RouteTableName. You cannot specify both VRouterId and RouterId at the same time.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The name of the route table to query.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * >You must specify at least one of the following parameters: VRouterId, RouteTableId, RouterId, and RouteTableName. You cannot specify both VRouterId and RouterId at the same time.
   * 
   * @example
   * doctest
   */
  routeTableName?: string;
  /**
   * @remarks
   * The ID of the router to which the route table belongs.
   * 
   * >You must specify at least one of the following parameters: VRouterId, RouteTableId, RouterId, and RouteTableName. You cannot specify both VRouterId and RouterId at the same time.
   * 
   * @example
   * vrt-bp1lhl0taikrteen8****
   */
  routerId?: string;
  /**
   * @remarks
   * The type of the router to which the route table belongs. Valid values:
   * 
   * - **VRouter** (default): vRouter.
   * - **VBR**: Virtual Border Router.
   * 
   * @example
   * VRouter
   */
  routerType?: string;
  /**
   * @remarks
   * The destination type of the route to query. Valid values:
   * 
   * - **Custom**: custom route.
   * - **System**: system route.
   * - **BGP**: BGP route.
   * - **CEN**: Cloud Enterprise Network (CEN) route.
   * - **ECR**: Express Connect Router (ECR) route.
   * 
   * @example
   * Custom
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vRouter to query.
   * 
   * >You must specify at least one of the following parameters: VRouterId, RouteTableId, RouterId, and RouteTableName. You cannot specify both VRouterId and RouterId at the same time.
   * 
   * @example
   * vrt-bp1lhl0taikrteen****
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

