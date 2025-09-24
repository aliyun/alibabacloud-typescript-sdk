// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountTransactionsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the creation time range to query. By default, the transactions in the last month are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. Example: 2018-01-01T00:00:00Z.
   * 
   * @example
   * 2020-03-06T01:55:00Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The beginning of the creation time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. Example: 2018-01-01T00:00:00Z.
   * 
   * @example
   * 2020-03-05T01:46:09Z
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The number of the page to return. Default value is 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value is 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the order or bill.
   * 
   * @example
   * 20200302
   */
  recordID?: string;
  /**
   * @remarks
   * The transaction channel. If you specify one of the following transaction channels for this parameter, the results for the specified transaction channel are returned. If the transaction channel that you specify does not belong to the following transaction channels, no result is returned. If you leave this parameter empty, the results for all the following transaction channels are returned by default. Valid values:
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
   * 12342134
   */
  transactionChannelSN?: string;
  /**
   * @remarks
   * The type of the transaction flow. If you specify one of the following types for this parameter, the results for the specified type are returned. If the type that you specify does not belong to the following types, no result is returned. If you leave this parameter empty, the results for the following two types are returned by default. Valid values:
   * 
   * *   Income
   * *   Expense
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
   * 133314076
   */
  transactionNumber?: string;
  /**
   * @remarks
   * The type of the transaction. If you specify one of the following transaction types for this parameter, the results for the specified transaction type are returned. If the transaction type that you specify does not belong to the following types, no result is returned. If you leave this parameter empty, the results for all the following transaction types are returned by default. Valid values:
   * 
   * *   Payment
   * *   Withdraw
   * *   Refund
   * *   Consumption
   * *   Transfer
   * *   Adjust
   * 
   * @example
   * Payment
   */
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      recordID: 'RecordID',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      transactionFlow: 'TransactionFlow',
      transactionNumber: 'TransactionNumber',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      pageNum: 'number',
      pageSize: 'number',
      recordID: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      transactionFlow: 'string',
      transactionNumber: 'string',
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

