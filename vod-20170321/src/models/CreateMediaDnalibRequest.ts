// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMediaDNALibRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  libRegion?: string;
  modelType?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      libRegion: 'LibRegion',
      modelType: 'ModelType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libRegion: 'string',
      modelType: 'string',
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

