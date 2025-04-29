// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk that you want to release.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp14k9cxvr5uzy5****
   */
  diskId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

