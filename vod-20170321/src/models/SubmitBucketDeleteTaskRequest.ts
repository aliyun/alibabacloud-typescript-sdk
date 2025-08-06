// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBucketDeleteTaskRequest extends $dara.Model {
  deleteFiles?: boolean;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  resourceRealOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  storageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      deleteFiles: 'DeleteFiles',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      storageLocation: 'StorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteFiles: 'boolean',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      resourceRealOwnerId: 'number',
      storageLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

