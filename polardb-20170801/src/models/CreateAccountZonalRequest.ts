// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountZonalRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account. The description must meet the following requirements:
   * 
   * - Cannot start with `http://` or `https://`.
   * 
   * - Be 2 to 256 characters in length.
   * 
   * @example
   * testdes
   */
  accountDescription?: string;
  /**
   * @remarks
   * The account name. The name must meet the following requirements:
   * 
   * - Start with a lowercase letter and end with a letter or a digit.
   * 
   * - Contain only lowercase letters, digits, and underscores (_).
   * 
   * - Be 2 to 16 characters in length.
   * 
   * - Cannot be a reserved username, such as root or admin.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The account password. The password must meet the following requirements:
   * 
   * - Contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - Be 8 to 32 characters in length.
   * 
   * - Special characters are `!@#$%^&*()_+-=`.
   * 
   * This parameter is required.
   * 
   * @example
   * Test1111
   */
  accountPassword?: string;
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
   * - ReadIndex: read and index permissions.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The account type. Valid values:
   * 
   * - Normal: a standard account.
   * 
   * - Super: a privileged account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token is case-sensitive and can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
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
   * The name of the database that the destination account can access. You can specify multiple database names. Separate them with commas (,).
   * 
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * Normal
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to grant permissions on all current and future databases in the cluster. Valid values:
   * 
   * - 0 or empty: Does not grant permissions.
   * 
   * - 1: Grants permissions.
   * 
   * @example
   * 0
   */
  privForAllDB?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountPrivilege: 'AccountPrivilege',
      accountType: 'AccountType',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      nodeType: 'NodeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privForAllDB: 'PrivForAllDB',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountPrivilege: 'string',
      accountType: 'string',
      clientToken: 'string',
      DBClusterId: 'string',
      DBName: 'string',
      nodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privForAllDB: 'string',
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

