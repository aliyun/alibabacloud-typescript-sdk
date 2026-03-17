// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RoamClientUserRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the SAG app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-southeast-1
   */
  originRegionId?: string;
  /**
   * @remarks
   * The ID of the source SAG app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-m9uhqekwnqcnyy****
   */
  originSmartAGId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the SAG app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the destination SAG app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-ghwa10ko6ndwug****
   */
  targetSmartAGId?: string;
  /**
   * @remarks
   * The usernames of the client for which you want to enable roaming.
   * 
   * This parameter is required.
   * 
   * @example
   * nametest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      originRegionId: 'OriginRegionId',
      originSmartAGId: 'OriginSmartAGId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetSmartAGId: 'TargetSmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originRegionId: 'string',
      originSmartAGId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetSmartAGId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

