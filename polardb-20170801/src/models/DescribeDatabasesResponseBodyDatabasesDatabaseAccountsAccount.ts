// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount extends $dara.Model {
  /**
   * @remarks
   * The username of the account.
   * 
   * > A PolarDB for MySQL cluster does not support privileged accounts.
   * 
   * @example
   * test_acc
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
   * @example
   * ReadOnly
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The state of the account. Valid values:
   * 
   * *   **Creating**
   * *   **Available**
   * *   **Deleting**
   * 
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @remarks
   * The authorization state of the account. Valid values:
   * 
   * *   **Empowering**: The system is granting permissions to the account.
   * *   **Empowered**: Permissions are granted to the account.
   * *   **Removing**: The system is revoking permissions from the account.
   * 
   * @example
   * Empowered
   */
  privilegeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      accountStatus: 'AccountStatus',
      privilegeStatus: 'PrivilegeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      accountStatus: 'string',
      privilegeStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

