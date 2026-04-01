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
   * test1
   */
  accountName?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the account. The number of permissions must be the same as the number of databases that you specify for the DBName parameter. You can specify this parameter based on your business requirements. Valid values:
   * 
   * *   **ReadWrite**: read and write permissions
   * *   **ReadOnly**: read-only permissions
   * *   **DDLOnly**: DDL-only permissions
   * *   **DMLOnly**: DML-only permissions
   * *   **DBOwner**: database owner permissions
   * 
   * > 
   * 
   * *   If the instance runs MySQL or MariaDB, you can set this parameter to **ReadWrite**, **ReadOnly**, **DDLOnly**, or **DMLOnly**.
   * 
   * *   If the instance runs SQL Server, you can set this parameter to **ReadWrite**, **ReadOnly**, or **DBOwner**.
   * *   If the instance runs PostgreSQL and uses cloud disks, you can set this parameter to **DBOwner**.
   * 
   * This parameter is required.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database on which you want to grant permissions. Separate multiple database names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * testDB1
   */
  DBName?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
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

