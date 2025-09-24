// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsListAccountTransactionsList extends $dara.Model {
  /**
   * @remarks
   * The amount of the transaction.
   * 
   * @example
   * 1.00
   */
  amount?: string;
  /**
   * @remarks
   * The balance of the account.
   * 
   * @example
   * 0
   */
  balance?: string;
  /**
   * @remarks
   * The billing cycle.
   * 
   * @example
   * 2022-10
   */
  billingCycle?: string;
  /**
   * @remarks
   * The type of transaction payment. Valid values:
   * 
   * Cash: pay for the transaction in cash. Deposit: pay for the transaction with deposit. RegularBankCreditRefund: pay for the transaction with credit refund controlled by a bank. DirectPay: directly pay for the transaction.
   * 
   * @example
   * Cash
   */
  fundType?: string;
  /**
   * @remarks
   * The ID of the order or bill.
   * 
   * @example
   * 2022120336190912
   */
  recordID?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Test
   */
  remarks?: string;
  /**
   * @remarks
   * The transaction account.
   * 
   * @example
   * fortune_test@xxx.com
   */
  transactionAccount?: string;
  /**
   * @remarks
   * The transaction channel.
   * 
   * @example
   * ALIPAY
   */
  transactionChannel?: string;
  /**
   * @remarks
   * The serial number of the transaction channel.
   * 
   * @example
   * 123232434343532
   */
  transactionChannelSN?: string;
  /**
   * @remarks
   * Indicates whether the transaction is of the income type or the expenditure type. If one of the following types is specified, results for the specific type are returned. If the type that you specified for the parameter does not belong to the following types, no result is returned. If the parameter is left empty, results for transactions of the income and expenditure types are all returned. Valid values:
   * 
   * Income and Expense.
   * 
   * @example
   * Income
   */
  transactionFlow?: string;
  /**
   * @remarks
   * The number of the transaction.
   * 
   * @example
   * 43342334
   */
  transactionNumber?: string;
  /**
   * @remarks
   * The time when the transaction was made.
   * 
   * @example
   * 2022-10-01
   */
  transactionTime?: string;
  /**
   * @remarks
   * The type of the transaction. If one of the following transaction types is specified, results for the specified transaction type are returned. If the transaction type that you specified does not belong to the following transaction types, no result is returned. If the parameter is left empty, results for all transaction types are returned. Valid values:
   * 
   * Payment, Withdraw, Refund, Consumption, Transfer, and Adjust.
   * 
   * @example
   * Consumption
   */
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      balance: 'Balance',
      billingCycle: 'BillingCycle',
      fundType: 'FundType',
      recordID: 'RecordID',
      remarks: 'Remarks',
      transactionAccount: 'TransactionAccount',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      transactionFlow: 'TransactionFlow',
      transactionNumber: 'TransactionNumber',
      transactionTime: 'TransactionTime',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      balance: 'string',
      billingCycle: 'string',
      fundType: 'string',
      recordID: 'string',
      remarks: 'string',
      transactionAccount: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      transactionFlow: 'string',
      transactionNumber: 'string',
      transactionTime: 'string',
      transactionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList extends $dara.Model {
  accountTransactionsList?: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsListAccountTransactionsList[];
  static names(): { [key: string]: string } {
    return {
      accountTransactionsList: 'AccountTransactionsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountTransactionsList: { 'type': 'array', 'itemType': QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsListAccountTransactionsList },
    };
  }

  validate() {
    if(Array.isArray(this.accountTransactionsList)) {
      $dara.Model.validateArray(this.accountTransactionsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * yidi
   */
  accountName?: string;
  /**
   * @remarks
   * The details of the transactions within the account.
   */
  accountTransactionsList?: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList;
  /**
   * @remarks
   * This parameter is invalid.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for paging.
   * 
   * @example
   * ASHDADS
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountTransactionsList: 'AccountTransactionsList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountTransactionsList: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList,
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accountTransactionsList && typeof (this.accountTransactionsList as any).validate === 'function') {
      (this.accountTransactionsList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryAccountTransactionDetailsResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * asadadad-edafafafaasd
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAccountTransactionDetailsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

