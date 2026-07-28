// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcRouteEntrySummaryRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the route table resides.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * - **all**: all route types.
   * - **custom**: custom route.
   * - **system**: system route.
   * - **bgp**: BGP route.
   * - **cen**: Cloud Enterprise Network (CEN) route.
   * - **type_vpn_bgp_internal**: VPN BGP route.
   * - **ECR**: Express Connect Router (ECR) route.
   * 
   * This parameter is required.
   * 
   * @example
   * custom
   */
  routeEntryType?: string;
  /**
   * @remarks
   * The ID of the route table to query.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the route table belongs.
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

