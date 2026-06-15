// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHaVipRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The token must be unique across requests, contain only ASCII characters, and be no more than 64 characters long.
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the HaVip. The description must be 2 to 256 characters long and cannot start with `http://` or `https://`.
   */
  description?: string;
  /**
   * @remarks
   * The IP address of the HaVip. The IP address must be available and fall within the CIDR block of the vSwitch. If this parameter is not specified, an available IP address is randomly allocated from the CIDR block of the vSwitch.
   */
  ipAddress?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region in which to create the HaVip. You can call the operation to get the latest list of regions.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the HaVip belongs.
   * 
   * This parameter is required.
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      ipAddress: 'IpAddress',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      ipAddress: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

