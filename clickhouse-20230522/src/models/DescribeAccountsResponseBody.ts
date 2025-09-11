// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyDataAccounts extends $dara.Model {
  /**
   * @remarks
   * The username of the database account.
   * 
   * @example
   * test
   */
  account?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * *   **1**: standard account
   * *   **6**: privileged account
   * 
   * @example
   * NormalAccount
   */
  accountType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Used for test
   */
  description?: string;
  /**
   * @remarks
   * The state of the database account. Valid values:
   * 
   * *   **0**: The database account is being created.
   * *   **1**: The database account is in use.
   * *   **3**: The database account is being deleted.
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountType: 'AccountType',
      description: 'Description',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountType: 'string',
      description: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The database accounts.
   */
  accounts?: DescribeAccountsResponseBodyDataAccounts[];
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
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyDataAccounts },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class DescribeAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returned.
   */
  data?: DescribeAccountsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAccountsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

