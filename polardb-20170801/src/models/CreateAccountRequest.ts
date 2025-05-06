// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account. The description must meet the following requirements:
   * 
   * *   It cannot start with `http://` or `https://`.
   * *   It must be 2 to 256 characters in length.
   * 
   * @example
   * testdes
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account. The name must meet the following requirements:
   * 
   * *   It must start with a lowercase letter and end with a letter or a digit.
   * *   It can contain lowercase letters, digits, and underscores (_).
   * *   It must be 2 to 16 characters in length.
   * *   It cannot be root, admin, or another username that is reserved by the system.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account. The password must meet the following requirements:
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   The password must be 8 to 32 characters in length.
   * *   Special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * 
   * This parameter is required.
   * 
   * @example
   * Test1111
   */
  accountPassword?: string;
  /**
   * @remarks
   * The permissions that are granted to the account. Valid values:
   * 
   * *   **ReadWrite**: read and write permissions.
   * *   **ReadOnly**: read-only permissions.
   * *   **DMLOnly**: the permissions to execute only DML statements.
   * *   **DDLOnly**: the permissions to execute only DDL statements.
   * *   **ReadIndex**: the read-only and index permissions.
   * 
   * > 
   * 
   * *   `AccountPrivilege` is valid only after you specify `DBName`.
   * 
   * *   If multiple database names are specified by the `DBName` parameter, you must grant permissions on the databases. Separate multiple permissions with commas (,), and make sure that the length of the value of `AccountPrivilege` does not exceed 900. For example, if you want to grant the account the read and write permissions on DB1 and the read-only permissions on DB2, set `DBName` to `DB1,DB2` and set `AccountPrivilege` to `ReadWrite,ReadOnly`.
   * 
   * *   This parameter is valid only for standard accounts of PolarDB for MySQL clusters.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * *   **Normal**: standard account
   * *   **Super**: privileged account.
   * 
   * > 
   * 
   * *   If you leave this parameter empty, the default value **Super** is used.
   * 
   * *   You can create multiple privileged accounts for a PolarDB for PostgreSQL (Compatible with Oracle) cluster or a PolarDB for PostgreSQL cluster. A privileged account has more permissions than a standard account. For more information, see [Create a database account](https://help.aliyun.com/document_detail/68508.html).
   * 
   * *   You can create only one privileged account for a PolarDB for MySQL cluster. A privileged account has more permissions than a standard account. For more information, see [Create a database account](https://help.aliyun.com/document_detail/68508.html).
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. The token is case-sensitive.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database that can be accessed by the account. To enter multiple database names, separate the names with commas (,).
   * 
   * >  This parameter is valid only for standard accounts of PolarDB for MySQL clusters.
   * 
   * @example
   * testdb
   */
  DBName?: string;
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
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

