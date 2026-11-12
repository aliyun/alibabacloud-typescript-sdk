// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountsDatabasePrivileges extends $dara.Model {
  /**
   * @remarks
   * The permissions of the account.
   * 
   * @example
   * ReadOnly
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * DBtest
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      accountPrivilege: 'AccountPrivilege',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilege: 'string',
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
   * The lock status of the account. Valid values:
   * 
   * - **UnLock**: The account is not locked.
   * - **Lock**: The account is locked.
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
   * The validity period of the account password. A value of `undefined` indicates that no validity period is set. A value of `infinity` indicates that the password never expires. A value of `-infinity` indicates that the password has expired. If an expiration time is specified, a UTC time string in the ISO 8601 format (`YYYY-MM-DDThh:mm:ssZ`) is returned instead of a timestamp.
   * 
   * @example
   * undefined
   */
  accountPasswordValidTime?: string;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * - **Creating**: The account is being created.
   * - **Available**: The account is available.
   * - **Deleting**: The account is being deleted.
   * 
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * - **Normal**: standard account
   * - **Super**: privileged account
   * - **ReadOnly**: global read-only account
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The details of the database permissions owned by the account.
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

export class DescribeAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the account information.
   */
  accounts?: DescribeAccountsResponseBodyAccounts[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 155462B9-205F-4FFC-BB43-4855FE******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccounts },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

