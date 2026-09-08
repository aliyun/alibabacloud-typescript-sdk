// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTransitRouterRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, including permission and instance status validation. Valid values:
   * 
   * - **false** (default): Sends a normal request and directly deletes the route entry after the request passes the validation.
   * - **true**: Sends a check request. Only the validation is performed. The route entry is not deleted. The system checks required parameters, request format, and other conditions. If the check fails, the corresponding error is returned. If the check succeeds, the corresponding request ID is returned.
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
   * The destination CIDR block.
   * 
   * @example
   * 192.168.0.0/24
   */
  transitRouterRouteEntryDestinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * rte-75eg4jprkvk0pw****
   */
  transitRouterRouteEntryId?: string;
  /**
   * @remarks
   * The ID of the network instance connection associated with the next hop of the route entry.
   * 
   * @example
   * tr-attach-nls9fzkfat8934****
   */
  transitRouterRouteEntryNextHopId?: string;
  /**
   * @remarks
   * The next hop type of the route entry. Valid values:
   * 
   * - **BlackHole**: The route entry is a blackhole route. You do not need to specify the next-hop information.
   * - **Attachment**: The next hop of the route entry is a network instance connection. You must also specify the ID of the network instance connection as the next hop.
   * 
   * @example
   * BlackHole
   */
  transitRouterRouteEntryNextHopType?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router route table.
   * 
   * @example
   * vtb-bp1dudbh2d5na6b50****
   */
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterRouteEntryDestinationCidrBlock: 'TransitRouterRouteEntryDestinationCidrBlock',
      transitRouterRouteEntryId: 'TransitRouterRouteEntryId',
      transitRouterRouteEntryNextHopId: 'TransitRouterRouteEntryNextHopId',
      transitRouterRouteEntryNextHopType: 'TransitRouterRouteEntryNextHopType',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
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
      transitRouterRouteEntryDestinationCidrBlock: 'string',
      transitRouterRouteEntryId: 'string',
      transitRouterRouteEntryNextHopId: 'string',
      transitRouterRouteEntryNextHopType: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

