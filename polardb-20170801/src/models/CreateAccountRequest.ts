// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account. The description must meet the following requirements:
   * 
   * - Cannot start with `http://` or `https://`.
   * - Is 2 to 256 characters in length.
   * 
   * @example
   * testdes
   */
  accountDescription?: string;
  /**
   * @remarks
   * The account name. The name must meet the following requirements:
   * 
   * * Starts with a lowercase letter and ends with a letter or digit.
   * * Contains only lowercase letters, digits, or underscores (_).
   * * Is 2 to 16 characters in length.
   * * Cannot use certain reserved usernames such as root or admin.
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
   * * Contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * * Is 8 to 32 characters in length.
   * * Special characters include `!@#$%^&*()_+-=`.
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
   * * **ReadWrite**: read and write
   * * **ReadOnly**: read-only
   * * **DMLOnly**: DML only
   * * **DDLOnly**: DDL only
   * * **ReadIndex**: read-only and index
   * 
   * >* The DBName parameter must be specified for AccountPrivilege to take effect.
   * >* If you specify multiple database names for the DBName parameter, you must grant the corresponding permissions to each database. Separate multiple permissions with commas (,) and make sure that the total length of the AccountPrivilege string does not exceed 900 characters. For example, to grant read and write permissions on database DB1 and read-only permissions on database DB2, set DBName to `DB1,DB2` and set AccountPrivilege to `ReadWrite,ReadOnly`.
   * > * This parameter is supported only for standard accounts of PolarDB for MySQL clusters.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The account type. Valid values:
   * 
   * - **Normal**: standard account. 
   * - **Super**: privileged account. 
   * - **DynamoDB**: DynamoDB account. 
   * 
   * 
   *  
   * > * If this parameter is left empty, a **Super** account is created by default.
   * > * If the cluster is a PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL cluster, you can create multiple privileged accounts for each cluster. Privileged accounts have more permissions than standard accounts. For more information, see [Create a database account](https://help.aliyun.com/document_detail/68508.html).
   * > * If the cluster is a PolarDB for MySQL cluster, you can create at most one privileged account for each cluster. Privileged accounts have more permissions than standard accounts. For more information, see [Create a database account](https://help.aliyun.com/document_detail/68508.html).
   * > * DynamoDB accounts are dedicated accounts created for the DynamoDB compatibility feature of PolarDB for PostgreSQL. For more information, see [DynamoDB usage instructions](https://help.aliyun.com/document_detail/2979941.html).
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value. Make sure that the value is unique among different requests. The token is case-sensitive and cannot exceed 64 ASCII characters in length.
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
   * The name of the database that the account is authorized to access. You can specify multiple database names separated by commas (,).
   * 
   * > This parameter is supported only for standard accounts of PolarDB for MySQL clusters.
   * 
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - Search: required when creating an account for a PolarDB Search node
   * 
   * @example
   * Search
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to grant permissions on all existing databases and all new databases in the current cluster. Valid values:
   * 
   * - **0 or empty**: does not grant permissions.
   * 
   * - **1**: grants permissions.
   * >* The AccountPrivilege parameter must be specified for this parameter to take effect.
   * >* If this parameter is set to `1`, the permissions specified by AccountPrivilege are granted on all databases.
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

