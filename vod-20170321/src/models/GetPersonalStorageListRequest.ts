// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPersonalStorageListRequest extends $dara.Model {
  maxKeys?: string;
  ownerAccount?: string;
  ownerId?: string;
  prefix?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  resourceRealOwnerId?: number;
  storageRegion?: string;
  static names(): { [key: string]: string } {
    return {
      maxKeys: 'MaxKeys',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      prefix: 'Prefix',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      storageRegion: 'StorageRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxKeys: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      prefix: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      resourceRealOwnerId: 'number',
      storageRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

