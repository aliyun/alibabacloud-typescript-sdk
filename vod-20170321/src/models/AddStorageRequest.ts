// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddStorageRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  resourceRealOwnerId?: string;
  storageLocation?: string;
  storageRedundancyType?: string;
  storageRegion?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      storageLocation: 'StorageLocation',
      storageRedundancyType: 'StorageRedundancyType',
      storageRegion: 'StorageRegion',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      resourceRealOwnerId: 'string',
      storageLocation: 'string',
      storageRedundancyType: 'string',
      storageRegion: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

