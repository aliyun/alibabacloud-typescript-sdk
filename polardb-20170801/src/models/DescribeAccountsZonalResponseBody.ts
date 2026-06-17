// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsZonalResponseBodyAccountsDatabasePrivileges extends $dara.Model {
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

export class DescribeAccountsZonalResponseBodyAccounts extends $dara.Model {
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
   * The lock state of the account. Valid values:
   * 
   * - UnLock: The account is not locked.
   * 
   * - Lock: The account is locked.
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
   * The time when the password expires.
   * 
   * @example
   * undefined
   */
  accountPasswordValidTime?: string;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * Creating: The account is being created.
   * 
   * Available: The account is active.
   * 
   * Deleting: The account is being deleted.
   * 
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * - Normal: A standard account.
   * 
   * - Super: A privileged account.
   * 
   * - ReadOnly: A global read-only account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The details of the database permissions that the account has.
   */
  databasePrivileges?: DescribeAccountsZonalResponseBodyAccountsDatabasePrivileges[];
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
      databasePrivileges: { 'type': 'array', 'itemType': DescribeAccountsZonalResponseBodyAccountsDatabasePrivileges },
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

export class DescribeAccountsZonalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the accounts.
   */
  accounts?: DescribeAccountsZonalResponseBodyAccounts[];
  /**
   * @remarks
   * The maximum number of entries returned in the request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If the results are not fully returned, this token is returned. You can use this token in the next request to retrieve the remaining results.
   * 
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeAccountsZonalResponseBodyAccounts },
      maxResults: 'number',
      nextToken: 'string',
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

