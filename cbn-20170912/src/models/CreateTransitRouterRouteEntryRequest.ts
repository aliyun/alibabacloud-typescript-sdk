// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **false** (default): sends a normal request. The route entry is created after the request passes the check.
   * 
   * - **true**: sends a dry run request to check the request. The route entry is not created. The system checks the required parameters, request format, and service limits. If the request fails the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
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
   * The description of the route entry.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http\\:// or https\\://.
   * 
   * @example
   * testdesc
   */
  transitRouterRouteEntryDescription?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry. IPv4 and IPv6 CIDR blocks are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/24
   */
  transitRouterRouteEntryDestinationCidrBlock?: string;
  /**
   * @remarks
   * The name of the route entry.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http\\:// or https\\://.
   * 
   * @example
   * testname
   */
  transitRouterRouteEntryName?: string;
  /**
   * @remarks
   * The ID of the network instance connection that is associated with the next hop.
   * 
   * @example
   * tr-attach-nls9fzkfat8934****
   */
  transitRouterRouteEntryNextHopId?: string;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * - **BlackHole**: The route is a blackhole route. All packets to the destination CIDR block are dropped. You do not need to specify a next hop.
   * 
   * - **Attachment**: The next hop of the route is a network instance connection. You must specify the ID of the network instance connection. All packets to the destination CIDR block are forwarded to the specified network instance connection.
   * 
   * This parameter is required.
   * 
   * @example
   * BlackHole
   */
  transitRouterRouteEntryNextHopType?: string;
  /**
   * @remarks
   * The ID of the route table of the Enterprise Edition transit router.
   * 
   * This parameter is required.
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
      transitRouterRouteEntryDescription: 'TransitRouterRouteEntryDescription',
      transitRouterRouteEntryDestinationCidrBlock: 'TransitRouterRouteEntryDestinationCidrBlock',
      transitRouterRouteEntryName: 'TransitRouterRouteEntryName',
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
      transitRouterRouteEntryDescription: 'string',
      transitRouterRouteEntryDestinationCidrBlock: 'string',
      transitRouterRouteEntryName: 'string',
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

