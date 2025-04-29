// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteRouteEntryRequestNextHopList } from "./DeleteRouteEntryRequestNextHopList";


export class DeleteRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  destinationCidrBlock?: string;
  nextHopId?: string;
  nextHopList?: DeleteRouteEntryRequestNextHopList[];
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
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

