// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountListDBAccountRamUserList extends $dara.Model {
  ramUserList?: string[];
  static names(): { [key: string]: string } {
    return {
      ramUserList: 'RamUserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ramUserList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ramUserList)) {
      $dara.Model.validateArray(this.ramUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountListDBAccount extends $dara.Model {
  accountDescription?: string;
  accountName?: string;
  accountStatus?: string;
  accountType?: string;
  engine?: string;
  ramUserList?: DescribeAccountsResponseBodyAccountListDBAccountRamUserList;
  ramUsers?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      engine: 'Engine',
      ramUserList: 'RamUserList',
      ramUsers: 'RamUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      engine: 'string',
      ramUserList: DescribeAccountsResponseBodyAccountListDBAccountRamUserList,
      ramUsers: 'string',
    };
  }

  validate() {
    if(this.ramUserList && typeof (this.ramUserList as any).validate === 'function') {
      (this.ramUserList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountList extends $dara.Model {
  DBAccount?: DescribeAccountsResponseBodyAccountListDBAccount[];
  static names(): { [key: string]: string } {
    return {
      DBAccount: 'DBAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBAccount: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountListDBAccount },
    };
  }

  validate() {
    if(Array.isArray(this.DBAccount)) {
      $dara.Model.validateArray(this.DBAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $dara.Model {
  accountList?: DescribeAccountsResponseBodyAccountList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9CCFAAB4-97B7-5800-B9F2-685EB596E3EF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountList: 'AccountList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountList: DescribeAccountsResponseBodyAccountList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountList && typeof (this.accountList as any).validate === 'function') {
      (this.accountList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

