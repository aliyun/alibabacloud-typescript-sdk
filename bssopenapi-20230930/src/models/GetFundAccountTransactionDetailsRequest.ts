// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountTransactionDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The transaction order number.
   * 
   * @example
   * 2023212312321
   */
  billNumber?: string;
  /**
   * @remarks
   * The transaction channel serial number.
   * 
   * @example
   * 20250312334312322
   */
  channelTransactionNumber?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1735664561000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the fund account. If this parameter is not specified, the ID of the fund account owned by the current account is used by default.
   * 
   * @example
   * 123221232
   */
  fundAccountId?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1735664461000
   */
  startTime?: number;
  /**
   * @remarks
   * The list of transaction channels. If you specify transaction channels, the query returns results of the specified channels. If this parameter is not specified, all transaction channels are queried by default. Valid values:
   * - ACCT_CASH: Account balance.
   * - ALIPAY: Alipay.
   * - ALIPAY_ZHIFUTONG: Alipay Zhifutong.
   * - OFFLINE_REMIT: Offline remittance.
   * - REFUND: Credit limit refund.
   * - UNION_PAY_BANK: Online banking.
   * - CREDIT_CARD: Credit card. (Available only on the international site.)
   * - PAYPAL: PayPal. (Available only on the international site.)
   */
  transactionChannelList?: string[];
  /**
   * @remarks
   * The direction of the transaction. Valid values:
   * - IN: Fund inflow.
   * - OUT: Fund outflow.
   * 
   * @example
   * IN
   */
  transactionDirection?: string;
  /**
   * @remarks
   * The transaction number.
   * 
   * @example
   * 543231231
   */
  transactionNumber?: number;
  /**
   * @remarks
   * The transaction type. If you specify a transaction type, the query returns results of the specified type. If no results exist, an empty result is returned. If this parameter is not specified, all transaction types are returned by default. Valid values:
   * - CHARGE: Top-up.
   * - WITHDRAW: Withdrawal.
   * - REFUND: Refund.
   * - PAY: Payment.
   * - TRANSFER: Transfer.
   * - ADJUST: Adjustment.
   * - PAY_FAILED: Refund for an invalid order.
   * 
   * @example
   * CHARGE
   */
  transactionType?: string;
  /**
   * @remarks
   * The list of transaction types. Supports multiple parameter query.
   */
  transactionTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      billNumber: 'BillNumber',
      channelTransactionNumber: 'ChannelTransactionNumber',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      fundAccountId: 'FundAccountId',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      transactionChannelList: 'TransactionChannelList',
      transactionDirection: 'TransactionDirection',
      transactionNumber: 'TransactionNumber',
      transactionType: 'TransactionType',
      transactionTypeList: 'TransactionTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billNumber: 'string',
      channelTransactionNumber: 'string',
      currentPage: 'number',
      endTime: 'number',
      fundAccountId: 'number',
      pageSize: 'number',
      startTime: 'number',
      transactionChannelList: { 'type': 'array', 'itemType': 'string' },
      transactionDirection: 'string',
      transactionNumber: 'number',
      transactionType: 'string',
      transactionTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.transactionChannelList)) {
      $dara.Model.validateArray(this.transactionChannelList);
    }
    if(Array.isArray(this.transactionTypeList)) {
      $dara.Model.validateArray(this.transactionTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

