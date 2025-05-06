// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantAccountPrivilegeRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The permissions that are granted to the account. Valid values:
   * 
   * *   **ReadWrite**: read and write permissions
   * *   **ReadOnly**: read-only permissions
   * *   **DMLOnly**: The account is granted the permissions to execute only DML statements on the database.
   * *   **DDLOnly**: The account is granted the permissions to execute only DDL statements on the database.
   * *   **ReadIndex**: The account has the read and index permissions on the database.
   * 
   * > The number of **AccountPrivilege** values must be the consistent with the number of **DBName** values. Each account permission must correspond to a database name in sequence. For example, you can set **DBName** to `testdb_1,testdb_2` and set **AccountPrivilege** to `ReadWrite,ReadOnly`. In this case, the specified standard account is granted the **read and write** permissions on the **testdb_1** database and the **read** permission on the **testdb_2** database.
   * 
   * This parameter is required.
   * 
   * @example
   * ReadWrite,ReadOnly
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The names of the databases that the account can access. You can grant the access permissions on one or more databases to the specified standard account. If you need to specify multiple database names, separate the database names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * testdb_1,testdb_2
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
      DBClusterId: 'DBClusterId',
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
      DBClusterId: 'string',
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

