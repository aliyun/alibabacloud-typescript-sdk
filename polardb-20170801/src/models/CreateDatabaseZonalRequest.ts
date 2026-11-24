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
   * - ReadWrite: read and write permissions
   * - ReadOnly: read-only permissions
   * - DMLOnly: DML-only permissions
   * - DDLOnly: DDL-only permissions
   * - ReadIndex: read-only and index permissions
   * 
   * If this parameter is not specified, the default value is ReadWrite.
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
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, and ensure that the value is unique across different requests. The value is case-sensitive and can be up to 64 ASCII characters in length.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The locale setting used to specify the collation of the new database.
   * 
   * @example
   * C
   */
  collate?: string;
  /**
   * @remarks
   * The locale setting used to specify the character classification of the database.
   * 
   * @example
   * C
   */
  ctype?: string;
  /**
   * @remarks
   * The ID of the PolarDB on ENS edge cluster. Regular PolarDB cluster IDs are not supported.
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
   * - cannot start with `http://` or `https://`
   * - must be 2 to 256 characters in length
   * 
   * @example
   * testdesc
   */
  DBDescription?: string;
  /**
   * @remarks
   * The name of the database. The name must meet the following requirements:
   * 
   * - consists of lowercase letters, digits, hyphens (-), and underscores (_)
   * - starts with a letter and ends with a letter or digit, and can be up to 64 characters in length
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

