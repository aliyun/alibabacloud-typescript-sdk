// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo extends $dara.Model {
  /**
   * @remarks
   * The account username.
   * 
   * @example
   * test
   */
  account?: string;
  /**
   * @remarks
   * The permissions that the account has on the database. Valid values:
   * 
   * *   **ReadWrite**: read and write permissions
   * *   **ReadOnly**: read-only permissions
   * *   **DMLOnly**: DML-only permissions
   * *   **DDLOnly**: DDL-only permissions
   * 
   * @example
   * DMLOnly
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The permission that the account has on the database.
   * 
   * @example
   * SELECT
   */
  accountPrivilegeDetail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountPrivilege: 'AccountPrivilege',
      accountPrivilegeDetail: 'AccountPrivilegeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountPrivilege: 'string',
      accountPrivilegeDetail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

