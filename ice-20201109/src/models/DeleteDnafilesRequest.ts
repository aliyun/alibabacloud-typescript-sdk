// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDNAFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media fingerprint library from which you want to delete files.
   * 
   * This parameter is required.
   * 
   * @example
   * fb712a6890464059b1b2ea7c8647****
   */
  DBId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The primary key values of the files that you want to delete. Separate multiple values with commas (,). You can delete up to 50 files at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 41e6536e4f2250e2e9bf26cdea19****
   */
  primaryKeys?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBId: 'DBId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      primaryKeys: 'PrimaryKeys',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      primaryKeys: 'string',
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

