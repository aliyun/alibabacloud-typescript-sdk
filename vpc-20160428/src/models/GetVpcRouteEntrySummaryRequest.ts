// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcRouteEntrySummaryRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the route table.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the route. Valid values:
   * 
   * *   **All**: all route types
   * *   **Custom**: a custom route
   * *   **System**: a system route
   * *   **BGP**: a BGP route
   * *   **CEN**: a Cloud Enterprise Network (CEN) route
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  routeEntryType?: string;
  /**
   * @remarks
   * The ID of the route table that you want to query.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the route table belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp15zckdt37pq72****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeEntryType: 'RouteEntryType',
      routeTableId: 'RouteTableId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeEntryType: 'string',
      routeTableId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

