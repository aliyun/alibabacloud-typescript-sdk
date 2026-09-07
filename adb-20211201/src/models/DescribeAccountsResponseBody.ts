// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountListDBAccountPromqlInsertPrivileges extends $dara.Model {
  promqlInsertPrivileges?: string[];
  static names(): { [key: string]: string } {
    return {
      promqlInsertPrivileges: 'PromqlInsertPrivileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promqlInsertPrivileges: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.promqlInsertPrivileges)) {
      $dara.Model.validateArray(this.promqlInsertPrivileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountListDBAccountPromqlSelectNodes extends $dara.Model {
  promqlSelectNodes?: string[];
  static names(): { [key: string]: string } {
    return {
      promqlSelectNodes: 'PromqlSelectNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promqlSelectNodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.promqlSelectNodes)) {
      $dara.Model.validateArray(this.promqlSelectNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountListDBAccountPromqlSelectPrivileges extends $dara.Model {
  promqlSelectPrivileges?: string[];
  static names(): { [key: string]: string } {
    return {
      promqlSelectPrivileges: 'PromqlSelectPrivileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promqlSelectPrivileges: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.promqlSelectPrivileges)) {
      $dara.Model.validateArray(this.promqlSelectPrivileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  promqlInsertPrivileges?: DescribeAccountsResponseBodyAccountListDBAccountPromqlInsertPrivileges;
  promqlSelectNodes?: DescribeAccountsResponseBodyAccountListDBAccountPromqlSelectNodes;
  promqlSelectPrivileges?: DescribeAccountsResponseBodyAccountListDBAccountPromqlSelectPrivileges;
  ramUserList?: DescribeAccountsResponseBodyAccountListDBAccountRamUserList;
  ramUsers?: string;
  promqlSelectNodePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      engine: 'Engine',
      promqlInsertPrivileges: 'PromqlInsertPrivileges',
      promqlSelectNodes: 'PromqlSelectNodes',
      promqlSelectPrivileges: 'PromqlSelectPrivileges',
      ramUserList: 'RamUserList',
      ramUsers: 'RamUsers',
      promqlSelectNodePercentage: 'promqlSelectNodePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      engine: 'string',
      promqlInsertPrivileges: DescribeAccountsResponseBodyAccountListDBAccountPromqlInsertPrivileges,
      promqlSelectNodes: DescribeAccountsResponseBodyAccountListDBAccountPromqlSelectNodes,
      promqlSelectPrivileges: DescribeAccountsResponseBodyAccountListDBAccountPromqlSelectPrivileges,
      ramUserList: DescribeAccountsResponseBodyAccountListDBAccountRamUserList,
      ramUsers: 'string',
      promqlSelectNodePercentage: 'number',
    };
  }

  validate() {
    if(this.promqlInsertPrivileges && typeof (this.promqlInsertPrivileges as any).validate === 'function') {
      (this.promqlInsertPrivileges as any).validate();
    }
    if(this.promqlSelectNodes && typeof (this.promqlSelectNodes as any).validate === 'function') {
      (this.promqlSelectNodes as any).validate();
    }
    if(this.promqlSelectPrivileges && typeof (this.promqlSelectPrivileges as any).validate === 'function') {
      (this.promqlSelectPrivileges as any).validate();
    }
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

