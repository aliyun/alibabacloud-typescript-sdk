// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDNADBRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media fingerprint library that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * fb712a6890464059b1b2ea7c8647****
   */
  DBId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBId: 'DBId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBId: 'string',
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

