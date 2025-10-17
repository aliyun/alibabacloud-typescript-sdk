// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsZonalResponseBodyAccountsDatabasePrivileges extends $dara.Model {
  /**
   * @example
   * ReadOnly
   */
  accountPrivilege?: string;
  /**
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
   * @example
   * test
   */
  accountDescription?: string;
  /**
   * @example
   * UnLock
   */
  accountLockState?: string;
  /**
   * @example
   * test_acc
   */
  accountName?: string;
  /**
   * @example
   * undefined
   */
  accountPasswordValidTime?: string;
  /**
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @example
   * Normal
   */
  accountType?: string;
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
  accounts?: DescribeAccountsZonalResponseBodyAccounts[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
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

