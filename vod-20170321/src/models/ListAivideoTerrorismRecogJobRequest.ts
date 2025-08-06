// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIVideoTerrorismRecogJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  AIVideoTerrorismRecogJobIds?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoTerrorismRecogJobIds: 'AIVideoTerrorismRecogJobIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoTerrorismRecogJobIds: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

