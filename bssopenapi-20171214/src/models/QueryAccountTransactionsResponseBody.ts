// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountTransactionsResponseBodyDataAccountTransactionsListAccountTransactionsList extends $dara.Model {
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 0
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
   * The billing cycle. Format: YYYY-MM.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The type of transaction payment. Valid values:
   * 
   * *   Cash: pay for the transaction in cash.
   * *   Deposit: pay for the transaction with deposit.
   * *   RegularBankCreditRefund: pay for the transaction with credit refund controlled by a bank.
   * *   DirectPay: directly pay for the transaction.
   * 
   * @example
   * Cash
   */
  fundType?: string;
  /**
   * @remarks
   * The number of the order or bill.
   * 
   * @example
   * 2020030242
   */
  recordID?: string;
  /**
   * @remarks
   * The remarks on the transaction.
   * 
   * @example
   * NAT_GW
   */
  remarks?: string;
  /**
   * @remarks
   * The transaction account. For example, the account is a recharge account in Alipay or a transfer account.
   * 
   * @example
   * 213562146
   */
  transactionAccount?: string;
  /**
   * @remarks
   * The transaction channel.
   * 
   * *   AccountBalance
   * *   BankTransfer
   * *   Alipay
   * *   AntCreditPay
   * *   OfflineRemittance
   * *   RegularBankCreditRefund
   * *   CreditCard
   * *   MyBankCredit
   * *   HuaxiaBankCInstallment
   * *   ApplePay
   * 
   * @example
   * AccountBalance
   */
  transactionChannel?: string;
  /**
   * @remarks
   * The serial number of the transaction channel.
   * 
   * @example
   * 1234354325
   */
  transactionChannelSN?: string;
  /**
   * @remarks
   * The type of the transaction flow.
   * 
   * *   Income
   * *   Expense
   * 
   * @example
   * Expense
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
   * 2020-03-10T02:03:20Z
   */
  transactionTime?: string;
  /**
   * @remarks
   * The type of the transaction.
   * 
   * *   Payment
   * *   Withdraw
   * *   Refund
   * *   Consumption
   * *   Transfer
   * *   Adjust
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

export class QueryAccountTransactionsResponseBodyDataAccountTransactionsList extends $dara.Model {
  accountTransactionsList?: QueryAccountTransactionsResponseBodyDataAccountTransactionsListAccountTransactionsList[];
  static names(): { [key: string]: string } {
    return {
      accountTransactionsList: 'AccountTransactionsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountTransactionsList: { 'type': 'array', 'itemType': QueryAccountTransactionsResponseBodyDataAccountTransactionsListAccountTransactionsList },
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

export class QueryAccountTransactionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of your Alibaba Cloud account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The information about transactions.
   */
  accountTransactionsList?: QueryAccountTransactionsResponseBodyDataAccountTransactionsList;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountTransactionsList: 'AccountTransactionsList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountTransactionsList: QueryAccountTransactionsResponseBodyDataAccountTransactionsList,
      pageNum: 'number',
      pageSize: 'number',
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

export class QueryAccountTransactionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryAccountTransactionsResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8634E02D-0942-4B1D-8295-5352FE9A1F39
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
      data: QueryAccountTransactionsResponseBodyData,
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

