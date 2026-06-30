// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTransitRouterRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request.
   * 
   * The token must be unique for each request and can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. A dry run checks for potential issues, such as missing parameter values, incorrect request syntax, and service limits. Valid values:
   * 
   * - **false** (default): Sends the request. If the request passes the check, the route entry is deleted.
   * 
   * - **true**: Performs only a dry run. The system checks the request for potential issues. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
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
   * The destination CIDR block of the route.
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
   * The ID of the network instance connection that serves as the next hop.
   * 
   * @example
   * tr-attach-nls9fzkfat8934****
   */
  transitRouterRouteEntryNextHopId?: string;
  /**
   * @remarks
   * The type of the next hop. Valid values:
   * 
   * - **BlackHole**: The route is a blackhole route. You do not need to specify a next hop.
   * 
   * - **Attachment**: The next hop is a network instance connection. You must specify the ID of the network instance connection.
   * 
   * @example
   * BlackHole
   */
  transitRouterRouteEntryNextHopType?: string;
  /**
   * @remarks
   * The ID of the route table of the Enterprise Edition transit router.
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

