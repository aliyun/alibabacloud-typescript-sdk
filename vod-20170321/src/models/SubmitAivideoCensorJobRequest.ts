// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIVideoCensorJobRequest extends $dara.Model {
  AIVideoCensorConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoCensorConfig: 'AIVideoCensorConfig',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoCensorConfig: 'string',
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

