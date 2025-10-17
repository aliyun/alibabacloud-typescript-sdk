// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseZonalRequest extends $dara.Model {
  /**
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * utf8
   */
  characterSetName?: string;
  /**
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @example
   * C
   */
  collate?: string;
  /**
   * @example
   * C
   */
  ctype?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * testdesc
   */
  DBDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      characterSetName: 'CharacterSetName',
      clientToken: 'ClientToken',
      collate: 'Collate',
      ctype: 'Ctype',
      DBClusterId: 'DBClusterId',
      DBDescription: 'DBDescription',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      characterSetName: 'string',
      clientToken: 'string',
      collate: 'string',
      ctype: 'string',
      DBClusterId: 'string',
      DBDescription: 'string',
      DBName: 'string',
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

