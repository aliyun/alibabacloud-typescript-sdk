// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisablePolicyTypeRequest extends $dara.Model {
  openType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      openType: 'OpenType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

