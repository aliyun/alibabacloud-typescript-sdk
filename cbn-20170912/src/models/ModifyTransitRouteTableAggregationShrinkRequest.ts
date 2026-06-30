// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTransitRouteTableAggregationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a token from your client to make sure that the token is unique among different requests. The \\`ClientToken\\` parameter can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **false** (default): sends a normal request and modifies the aggregate route after the request passes the check.
   * 
   * - **true**: sends a check request to perform a dry run. The system checks the required parameters, request format, and permissions. If the check fails, the corresponding error is returned. If the check passes, the \\`DryRunOperation\\` error code is returned. In this case, the aggregate route is not modified.
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
   * The description can be empty or 0 to 256 characters in length. It cannot start with http\\:// or https\\://.
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
   * The only valid value is **VPC**. This value specifies that the aggregate route is propagated to all VPC instances that are associated with the route table of the Enterprise Edition transit router and have route synchronization enabled.
   * 
   * @example
   * VPC
   */
  transitRouteTableAggregationScope?: string;
  /**
   * @remarks
   * The list of propagation scopes for the aggregate route.
   * 
   * > You must specify this parameter or \\`TransitRouteTableAggregationScope\\`. We recommend that you specify this parameter. The elements in this list cannot be the same as the value of \\`TransitRouteTableAggregationScope\\`.
   */
  transitRouteTableAggregationScopeListShrink?: string;
  /**
   * @remarks
   * The ID of the route table of the Enterprise Edition transit router.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-6ehgc262hr170qgyc****
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
      transitRouteTableAggregationScopeListShrink: 'TransitRouteTableAggregationScopeList',
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
      transitRouteTableAggregationScopeListShrink: 'string',
      transitRouteTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

