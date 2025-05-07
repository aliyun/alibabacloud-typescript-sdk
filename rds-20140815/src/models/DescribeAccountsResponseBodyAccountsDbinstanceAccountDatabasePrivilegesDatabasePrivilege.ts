// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege extends $dara.Model {
  /**
   * @remarks
   * The type of the permissions. Valid values:
   * 
   * *   **ReadWrite**: read and write permissions.
   * *   **ReadOnly**: read-only permissions.
   * *   **DDLOnly**: DDL-only permissions.
   * *   **DMLOnly**: DML-only permissions.
   * *   **Custom**: custom permissions. You can modify the permissions of the account by using SQL commands.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The permissions that are granted to the account. For more information, see [Account permissions](https://help.aliyun.com/document_detail/146395.html).
   * 
   * @example
   * SELECT,INSERT
   */
  accountPrivilegeDetail?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test1
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      accountPrivilege: 'AccountPrivilege',
      accountPrivilegeDetail: 'AccountPrivilegeDetail',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilege: 'string',
      accountPrivilegeDetail: 'string',
      DBName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

