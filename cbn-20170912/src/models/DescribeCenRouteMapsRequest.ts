// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-wx12mmlt17ld82****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the region where the routing policy is applied.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  cenRegionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * cenrmap-y40mxdvf7joc12****
   */
  routeMapId?: string;
  /**
   * @remarks
   * The ID of the route table of the transit router that is associated with the routing policy.
   * 
   * @example
   * vtb-gw8nx3515m1mbd1z1****
   */
  transitRouterRouteTableId?: string;
  /**
   * @remarks
   * The direction in which the routing policy is applied. Valid values:
   * 
   * - **RegionIn**: Inbound. The routing policy is applied to routes that are advertised to the gateway of a region.
   * 
   * For example, routes are advertised from network instances in the current region to the gateway of the current region, or routes from other regions are advertised to the gateway of the current region.
   * 
   * - **RegionOut**: Outbound. The routing policy is applied to routes that are advertised from the gateway of a region.
   * 
   * For example, routes are advertised from the gateway of the current region to network instances in the current region, or to gateways in other regions.
   * 
   * @example
   * RegionOut
   */
  transmitDirection?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeMapId: 'RouteMapId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
      transmitDirection: 'TransmitDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenRegionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeMapId: 'string',
      transitRouterRouteTableId: 'string',
      transmitDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

