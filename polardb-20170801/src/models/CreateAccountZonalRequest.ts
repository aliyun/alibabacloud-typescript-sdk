// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountZonalRequest extends $dara.Model {
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
   * The name of the account. The name must meet the following requirements:
   * 
   * - It must start with a lowercase letter and end with a letter or a digit.
   * 
   * - It can contain lowercase letters, digits, and underscores (_).
   * 
   * - It must be 2 to 16 characters in length.
   * 
   * - It cannot be a reserved username, such as root or admin.
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
   * - It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - It must be 8 to 32 characters in length.
   * 
   * - Special characters include `!@#$%^&*()_+-=`.
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
   * - ReadWrite: read and write permissions
   * 
   * - ReadOnly: read-only permissions
   * 
   * - DMLOnly: DML-only permissions
   * 
   * - DDLOnly: DDL-only permissions
   * 
   * - ReadIndex: read and index permissions
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * - Normal: standard account
   * 
   * - Super: privileged account
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and is case-sensitive. It can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Note: Only edge cluster (Zonal) IDs are supported. You can query them by calling the DescribeDBClustersZonal operation. Standard PolarDB cluster IDs returned by DescribeDBClusters cannot be used for this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The names of the databases that the account is authorized to access. You can specify multiple database names separated by commas (,).
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
   * Specifies whether to grant the account permissions on all existing databases and all databases to be created in the cluster. Valid values:
   * 
   * - 0 or empty: no
   * 
   * - 1: yes
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

