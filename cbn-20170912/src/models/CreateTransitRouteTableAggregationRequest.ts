// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouteTableAggregationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. The dry run checks items such as permissions and instance status. Valid values:
   * 
   * - **false** (default): sends a normal request and directly creates the aggregate route after the request passes the check.
   * - **true**: sends a check request without creating the aggregate route. The check items include required parameters and request format. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
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
   * - CIDR blocks that start with "0" or "100.64"
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
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  transitRouteTableAggregationDescription?: string;
  /**
   * @remarks
   * The name of the aggregate route.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  transitRouteTableAggregationName?: string;
  /**
   * @remarks
   * The propagation scope of the aggregate route.
   * 
   * Set the value to **VPC**, which indicates that the aggregate route is propagated to all VPC-connected instances that have established an associated forwarding relationship with the current Enterprise Edition transit router route table and have the route synchronization feature enabled.
   * 
   * @example
   * VPC
   */
  transitRouteTableAggregationScope?: string;
  /**
   * @remarks
   * The propagation scope list of the aggregate route.
   * >You must specify at least one of the propagation scope and the propagation scope list. We recommend that you use the propagation scope list. The elements in the propagation scope list cannot duplicate the value of the propagation scope.
   */
  transitRouteTableAggregationScopeList?: string[];
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router route table.
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

