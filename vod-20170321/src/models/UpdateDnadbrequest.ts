// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDNADBRequest extends $dara.Model {
  DBDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBId?: string;
  DBName?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      DBDescription: 'DBDescription',
      DBId: 'DBId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBDescription: 'string',
      DBId: 'string',
      DBName: 'string',
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

