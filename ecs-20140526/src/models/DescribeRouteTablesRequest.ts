// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteTablesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the [`DescribeRegions`](https://www.alibabacloud.com/help/en/doc-detail/40654.htm) operation to query the latest list of regions.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route table.
   */
  routeTableId?: string;
  /**
   * @remarks
   * The name of the route table.
   */
  routeTableName?: string;
  /**
   * @remarks
   * The ID of the router associated with the route table.
   */
  routerId?: string;
  /**
   * @remarks
   * The type of the router associated with the route table. Valid values:
   * 
   * - `VRouter`: VPC router
   * - `VBR`: virtual border router
   */
  routerType?: string;
  /**
   * @remarks
   * The ID of the VRouter.
   */
  VRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
      routeTableName: 'RouteTableName',
      routerId: 'RouterId',
      routerType: 'RouterType',
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
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
      routeTableName: 'string',
      routerId: 'string',
      routerType: 'string',
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

