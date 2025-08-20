// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountListDBAccount extends $dara.Model {
  /**
   * @remarks
   * The description of the database account.
   * 
   * @example
   * test_accout_des
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the database account. Valid values:
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
   * The type of the database account. Valid values:
   * 
   * *   **Normal**: standard account.
   * *   **Super**: privileged account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB**: the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user.
   * 
   * @example
   * 1958134230****
   */
  ramUsers?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      engine: 'Engine',
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
      ramUsers: 'string',
    };
  }

  validate() {
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
  /**
   * @remarks
   * The queried database accounts.
   */
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

