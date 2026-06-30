// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouteTableAggregationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a value from your client to make sure that the value is unique among different requests. The ClientToken can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for the request. A dry run checks permissions and instance status. Valid values:
   * 
   * - **false** (default): sends a normal request. If the request passes the check, an aggregate route is created.
   * 
   * - **true**: sends a check request to verify the required parameters and the request format. The aggregate route is not created. If the request fails the check, an error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The destination CIDR block of the aggregate route.
   * 
   * > The following CIDR blocks are not supported:
   * 
   * - CIDR blocks that start with 0 or 100.64
   * 
   * - Multicast addresses (224.0.0.1 to 239.255.255.254)
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.10.0/24
   */
  transitRouteTableAggregationCidr?: string;
  /**
   * @remarks
   * The description of the aggregate route.
   * 
   * The description can be empty or 1 to 256 characters in length. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * desctest
   */
  transitRouteTableAggregationDescription?: string;
  /**
   * @remarks
   * The name of the aggregate route.
   * 
   * The name can be empty or 1 to 128 characters in length. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * nametest
   */
  transitRouteTableAggregationName?: string;
  /**
   * @remarks
   * The propagation scope of the aggregate route.
   * 
   * The only valid value is **VPC**. This value indicates that the aggregate route is propagated to all VPC instances that are associated with the route table of the Enterprise Edition transit router and have route synchronization enabled.
   * 
   * @example
   * VPC
   */
  transitRouteTableAggregationScope?: string;
  /**
   * @remarks
   * The list of propagation scopes for the aggregate route.
   * 
   * > You must specify either this parameter or TransitRouteTableAggregationScope. We recommend that you use this parameter. The elements in this list cannot be the same as the value of TransitRouteTableAggregationScope.
   */
  transitRouteTableAggregationScopeList?: string[];
  /**
   * @remarks
   * The ID of the route table of the Enterprise Edition transit router.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-iq8qgruq1ry8jc7vt****
   */
  transitRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouteTableAggregationCidr: 'TransitRouteTableAggregationCidr',
      transitRouteTableAggregationDescription: 'TransitRouteTableAggregationDescription',
      transitRouteTableAggregationName: 'TransitRouteTableAggregationName',
      transitRouteTableAggregationScope: 'TransitRouteTableAggregationScope',
      transitRouteTableAggregationScopeList: 'TransitRouteTableAggregationScopeList',
      transitRouteTableId: 'TransitRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouteTableAggregationCidr: 'string',
      transitRouteTableAggregationDescription: 'string',
      transitRouteTableAggregationName: 'string',
      transitRouteTableAggregationScope: 'string',
      transitRouteTableAggregationScopeList: { 'type': 'array', 'itemType': 'string' },
      transitRouteTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.transitRouteTableAggregationScopeList)) {
      $dara.Model.validateArray(this.transitRouteTableAggregationScopeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

