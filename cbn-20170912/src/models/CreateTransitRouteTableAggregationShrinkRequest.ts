// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouteTableAggregationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **false** (default): performs a dry run and sends the request.
   * *   **true**: performs a dry run. The system checks the required parameters and request syntax. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
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
   * >  The following CIDR blocks are not supported:
   * >*   CIDR blocks that start with 0 or 100.64.
   * >*   Multicast CIDR blocks, including 224.0.0.1 to 239.255.255.254.
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
   * This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  transitRouteTableAggregationDescription?: string;
  /**
   * @remarks
   * The name of the aggregate route.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  transitRouteTableAggregationName?: string;
  /**
   * @remarks
   * The scope of networks to which the aggregate route is advertised.
   * 
   * The valid value is **VPC**, which indicates that the aggregate route is advertised to all VPCs that are in associated forwarding correlation with the Enterprise Edition transit router and have route synchronization enabled.
   * 
   * @example
   * VPC
   */
  transitRouteTableAggregationScope?: string;
  /**
   * @remarks
   * The list of propagation ranges of the aggregation route.
   * 
   * >  You must specify at least one of the following attributes: Aggregation Scope and Aggregate Scope List. We recommend that you specify the latter. The elements in the two attributes cannot be duplicate.
   */
  transitRouteTableAggregationScopeListShrink?: string;
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

