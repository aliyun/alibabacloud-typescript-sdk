// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteEntryRequestNextHopList extends $dara.Model {
  /**
   * @remarks
   * The ID of a next hop in the ECMP route.
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of a next hop in the ECMP route. Set the value to `Instance`.
   */
  nextHopType?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      nextHopType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route entry.
   * 
   * This parameter is required.
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * > `NextHopId` and `NextHopList` are mutually exclusive. You can specify one but not both.
   */
  nextHopId?: string;
  /**
   * @remarks
   * A list of next hops for an ECMP route.
   * 
   * > `NextHopId` and `NextHopList` are mutually exclusive. You can specify one but not both.
   */
  nextHopList?: DeleteRouteEntryRequestNextHopList[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route table that contains the route entry.
   * 
   * This parameter is required.
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      nextHopList: 'NextHopList',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      nextHopList: { 'type': 'array', 'itemType': DeleteRouteEntryRequestNextHopList },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nextHopList)) {
      $dara.Model.validateArray(this.nextHopList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

