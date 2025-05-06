// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountsResponseBodyAccountsDatabasePrivileges } from "./DescribeAccountsResponseBodyAccountsDatabasePrivileges";


export class DescribeAccountsResponseBodyAccounts extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * test
   */
  accountDescription?: string;
  /**
   * @remarks
   * The locking state of the account. Valid values:
   * 
   * *   **UnLock**
   * *   **Lock**
   * 
   * @example
   * UnLock
   */
  accountLockState?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * test_acc
   */
  accountName?: string;
  /**
   * @remarks
   * The validity period of the password.
   * 
   * @example
   * undefined
   */
  accountPasswordValidTime?: string;
  /**
   * @remarks
   * The state of the account. Valid values:
   * 
   * *   **Creating**: The account is being created.
   * *   **Available**: The account is available.
   * *   **Deleting**: The account is being deleted
   * 
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * *   **Normal**: standard account.
   * *   **Super**: privileged account.
   * *   **ReadOnly**: global read-only account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The list of database permissions that are granted to the account.
   */
  databasePrivileges?: DescribeAccountsResponseBodyAccountsDatabasePrivileges[];
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountLockState: 'AccountLockState',
      accountName: 'AccountName',
      accountPasswordValidTime: 'AccountPasswordValidTime',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      databasePrivileges: 'DatabasePrivileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountLockState: 'string',
      accountName: 'string',
      accountPasswordValidTime: 'string',
      accountStatus: 'string',
      accountType: 'string',
      databasePrivileges: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDatabasePrivileges },
    };
  }

  validate() {
    if(Array.isArray(this.databasePrivileges)) {
      $dara.Model.validateArray(this.databasePrivileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

