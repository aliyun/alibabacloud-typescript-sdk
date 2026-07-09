// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountTransactionDetailsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Transaction order number
   * 
   * @example
   * 2023212312321
   */
  billNumber?: string;
  /**
   * @remarks
   * Transaction channel serial number
   * 
   * @example
   * 20250312334312322
   */
  channelTransactionNumber?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Query end timestamp (milliseconds)
   * 
   * @example
   * 1735664561000
   */
  endTime?: number;
  /**
   * @remarks
   * Fund account ID. If not specified, the account ID owned by the current account (owner) is used by default.
   * 
   * @example
   * 123221232
   */
  fundAccountId?: number;
  /**
   * @remarks
   * Page size (maximum 200)
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Query start timestamp (milliseconds)
   * 
   * @example
   * 1735664461000
   */
  startTime?: number;
  /**
   * @remarks
   * Transaction channel. If specified, the query filters by transaction channel. If not specified, all channels are queried by default.
   * 
   * User balance: ACCT_CASH.
   * 
   * Alipay: ALIPAY.
   * 
   * Alipay Zhifutong: ALIPAY_ZHIFUTONG.
   * 
   * Offline remittance: OFFLINE_REMIT.
   * 
   * Credit control quota refund: REFUND.
   * 
   * Online banking: UNION_PAY_BANK.
   * 
   * Credit card: CREDIT_CARD. (International site only)
   * 
   * PayPal: PAYPAL. (International site only)
   */
  transactionChannelListShrink?: string;
  /**
   * @remarks
   * Transaction direction: in/out (fund inflow/outflow)
   * 
   * @example
   * IN
   */
  transactionDirection?: string;
  /**
   * @remarks
   * Transaction serial number
   * 
   * @example
   * 543231231
   */
  transactionNumber?: number;
  /**
   * @remarks
   * Transaction type. If a transaction type is specified, only results of that type are returned. If the specified type does not exist, the result is empty. If not specified, all types are returned by default.
   * 
   * Top-up: CHARGE.
   * 
   * Withdrawal: WITHDRAW.
   * 
   * Refund: REFUND.
   * 
   * Payment: PAY.
   * 
   * Transfer: TRANSFER.
   * 
   * Adjustment: ADJUST.
   * 
   * Order expiration refund: PAY_FAILED.
   * 
   * @example
   * CHARGE
   */
  transactionType?: string;
  /**
   * @remarks
   * Transaction type list. Supports querying with multiple parameters.
   */
  transactionTypeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      billNumber: 'BillNumber',
      channelTransactionNumber: 'ChannelTransactionNumber',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      fundAccountId: 'FundAccountId',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      transactionChannelListShrink: 'TransactionChannelList',
      transactionDirection: 'TransactionDirection',
      transactionNumber: 'TransactionNumber',
      transactionType: 'TransactionType',
      transactionTypeListShrink: 'TransactionTypeList',
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
      transactionChannelListShrink: 'string',
      transactionDirection: 'string',
      transactionNumber: 'number',
      transactionType: 'string',
      transactionTypeListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

