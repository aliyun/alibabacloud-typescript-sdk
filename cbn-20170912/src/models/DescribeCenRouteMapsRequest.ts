// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-wx12mmlt17ld82****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the region where the route map is applied.
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
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route map.
   * 
   * @example
   * cenrmap-y40mxdvf7joc12****
   */
  routeMapId?: string;
  /**
   * @remarks
   * The ID of the transit router route table associated with the route map.
   * 
   * @example
   * vtb-gw8nx3515m1mbd1z1****
   */
  transitRouterRouteTableId?: string;
  /**
   * @remarks
   * The direction in which the route map is applied. Valid values:
   * 
   * - **RegionIn**: Routes are advertised to the regional gateway of the CEN instance.
   * 
   *  For example, routes are advertised from a network instance in the local region to the local regional gateway, or routes are advertised from a regional gateway in another region to the local regional gateway.
   * 
   * - **RegionOut**: Routes are advertised from the regional gateway of the CEN instance.
   * 
   *  For example, routes are advertised from the local regional gateway to network instances in the local region, or routes are advertised from the local regional gateway to regional gateways in other regions.
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

