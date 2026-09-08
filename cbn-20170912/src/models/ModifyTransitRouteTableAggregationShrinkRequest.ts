// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTransitRouteTableAggregationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, including permission and instance status validation. Valid values:
   * 
   * - **false** (default): sends a normal request. If the request passes the check, the aggregate route is modified.
   * - **true**: sends a check request. Only validation is performed, and the aggregate route is not modified. The system checks whether required parameters are specified and whether the request format is valid. If the check fails, the corresponding error is returned. If the check passes, the error code `DryRunOperation` is returned.
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
   * The description can be empty or 0 to 256 characters in length and cannot start with http:// or https://.
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
   * Set the value to **VPC**, which indicates that the aggregate route is propagated to all VPC-connected instances that have established associated forwarding relationships with the current Enterprise Edition transit router route table and have the route synchronization feature enabled.
   * 
   * @example
   * VPC
   */
  transitRouteTableAggregationScope?: string;
  /**
   * @remarks
   * The list of propagation scopes for the aggregate route.
   * >You must specify at least one of the aggregate route propagation scope or the aggregate route propagation scope list. We recommend that you use the aggregate route propagation scope list. The elements in the aggregate route propagation scope list cannot duplicate the value of the aggregate route propagation scope.
   */
  transitRouteTableAggregationScopeListShrink?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router route table.
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

