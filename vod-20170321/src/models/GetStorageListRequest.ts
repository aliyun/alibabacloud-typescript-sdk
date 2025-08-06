// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageListRequest extends $dara.Model {
  appId?: string;
  division?: string;
  ownerAccount?: string;
  ownerId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  resourceRealOwnerId?: number;
  storageRegion?: string;
  storageStatus?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      division: 'Division',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      storageRegion: 'StorageRegion',
      storageStatus: 'StorageStatus',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      division: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      resourceRealOwnerId: 'number',
      storageRegion: 'string',
      storageStatus: 'string',
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

