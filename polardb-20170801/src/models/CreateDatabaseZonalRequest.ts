// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseZonalRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account that is authorized to access the database.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The permissions of the account. Valid values:
   * 
   * - ReadWrite: read and write permissions.
   * 
   * - ReadOnly: read-only permissions.
   * 
   * - DMLOnly: DML permissions only.
   * 
   * - DDLOnly: DDL permissions only.
   * 
   * - ReadIndex: read-only and index permissions.
   * 
   * If you do not specify this parameter, the default value is ReadWrite.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The character set.
   * 
   * This parameter is required.
   * 
   * @example
   * utf8
   */
  characterSetName?: string;
  /**
   * @remarks
   * A client token to ensure request idempotence. The client generates this token. The token must be unique across requests. It is case-sensitive and can be up to 64 ASCII characters long.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The locale setting. This specifies the collation for the new database.
   * 
   * @example
   * C
   */
  collate?: string;
  /**
   * @remarks
   * The locale setting. This specifies the character classification for the database.
   * 
   * @example
   * C
   */
  ctype?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the database. The description must meet the following requirements:
   * 
   * - It cannot start with `http://` or `https://`.
   * 
   * - It must be 2 to 256 characters in length.
   * 
   * @example
   * testdesc
   */
  DBDescription?: string;
  /**
   * @remarks
   * The name of the database. The name must meet the following requirements:
   * 
   * - It must consist of lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * - It must start with a letter and end with a letter or a digit. The name can be up to 64 characters long.
   * 
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

