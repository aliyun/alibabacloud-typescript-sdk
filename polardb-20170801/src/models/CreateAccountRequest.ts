// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account. The description must meet the following requirements:
   * 
   * - It cannot start with `http://` or `https://`.
   * 
   * - It must be 2 to 256 characters in length.
   * 
   * @example
   * testdes
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account. The name must meet the following requirements:
   * 
   * - It must start with a lowercase letter and end with a letter or a digit.
   * 
   * - It can contain lowercase letters, digits, and underscores (_).
   * 
   * - It must be 2 to 16 characters in length.
   * 
   * - It cannot be a reserved keyword, such as root or admin.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account. The password must meet the following requirements:
   * 
   * - It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - It must be 8 to 32 characters in length.
   * 
   * - The special characters are `!@#$%^&*()_+-=`.
   * 
   * This parameter is required.
   * 
   * @example
   * Test1111
   */
  accountPassword?: string;
  /**
   * @remarks
   * The privilege level to grant on the specified databases. Valid values:
   * 
   * - **ReadWrite**: read and write permissions
   * 
   * - **ReadOnly**: read-only permissions
   * 
   * - **DMLOnly**: DML permissions only
   * 
   * - **DDLOnly**: DDL permissions only
   * 
   * - **ReadIndex**: read-only and index permissions
   * 
   * > * This parameter takes effect only when you specify the `DBName` parameter.
   * >
   * > * If you specify multiple databases in `DBName`, you must specify a corresponding permission for each in `AccountPrivilege`, separated by commas. The `AccountPrivilege` string cannot exceed 900 characters. For example, to grant read and write permissions to database DB1 and read-only permissions to database DB2, set `DBName` to `DB1,DB2` and set `AccountPrivilege` to `ReadWrite,ReadOnly`.
   * >
   * > * This parameter applies only to standard accounts on PolarDB for MySQL clusters.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * - **Normal**: a standard account.
   * 
   * - **Super**: a privileged account.
   * 
   * > * If you do not specify this parameter, the system creates a **Super** account by default.
   * >
   * > * You can create multiple privileged accounts on PolarDB for PostgreSQL (Oracle-Compatible) and PolarDB for PostgreSQL clusters. A privileged account has more permissions than a standard account. For more information, see [Create database accounts](https://help.aliyun.com/document_detail/68508.html).
   * >
   * > * For a PolarDB for MySQL cluster, you can create only one privileged account. For more information, see [Create database accounts](https://help.aliyun.com/document_detail/68508.html).
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * A client-generated token to ensure request idempotency. The token must be unique across requests. It is case-sensitive and can be up to 64 ASCII characters long.
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
   * The name of the database that the account can access. To specify multiple databases, separate the database names with a comma (,).
   * 
   * > This parameter applies only to standard accounts on PolarDB for MySQL clusters.
   * 
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * - **Search**: For creating an account on a PolarDB Search node.
   * 
   * @example
   * Search
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to grant the account permissions on all current and future databases in the cluster. Valid values:
   * 
   * - **0 or do not specify**: The specified permissions are not granted to all databases.
   * 
   * - **1**: Grants the specified permissions to all current and future databases.
   * 
   * > * This parameter takes effect only when you specify the `AccountPrivilege` parameter.
   * >
   * > * If you set this parameter to `1`, the permissions specified in `AccountPrivilege` are granted to all databases.
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

