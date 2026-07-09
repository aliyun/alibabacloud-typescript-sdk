// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountTransactionDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Balance after the operation
   * 
   * @example
   * 5
   */
  balance?: string;
  /**
   * @remarks
   * Order number or bill number
   * 
   * @example
   * 2323203243
   */
  billNumber?: string;
  /**
   * @remarks
   * External transaction serial number
   * 
   * @example
   * 20244389232
   */
  channelTransactionNumber?: string;
  /**
   * @remarks
   * Transaction amount currency
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * Enterprise entity ID
   * 
   * @example
   * 23473943
   */
  fundAccountEcid?: string;
  /**
   * @remarks
   * Account ID
   * 
   * @example
   * 1232121
   */
  fundAccountId?: number;
  /**
   * @remarks
   * Account name
   * 
   * @example
   * 云某的名称
   */
  fundAccountName?: string;
  /**
   * @remarks
   * Alibaba Cloud account ID of the account owner
   * 
   * @example
   * 32343231
   */
  fundAccountOwnerAccountId?: number;
  /**
   * @remarks
   * Fund type
   * 
   * @example
   * ACCT_BOOK
   */
  fundType?: string;
  /**
   * @remarks
   * Primary marketplace
   * 
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @remarks
   * Remarks
   * 
   * @example
   * 订单备注
   */
  remark?: string;
  /**
   * @remarks
   * Site
   * 
   * @example
   * 26842
   */
  site?: string;
  /**
   * @remarks
   * Corresponding transaction account, such as the Alipay top-up account or the counterparty account for transfers.
   * 
   * @example
   * 186****3975
   */
  transactionAccount?: string;
  /**
   * @remarks
   * Transaction amount
   * 
   * @example
   * 10
   */
  transactionAmount?: string;
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
   * 
   * @example
   * ALIPAY
   */
  transactionChannel?: string;
  /**
   * @remarks
   * Transaction direction: in/out (income/expenditure)
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
   * 5423121
   */
  transactionNumber?: number;
  /**
   * @remarks
   * Formatted transaction time string
   * 
   * @example
   * 2024-12-01 12:00:00
   */
  transactionTime?: string;
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
  static names(): { [key: string]: string } {
    return {
      balance: 'Balance',
      billNumber: 'BillNumber',
      channelTransactionNumber: 'ChannelTransactionNumber',
      currency: 'Currency',
      fundAccountEcid: 'FundAccountEcid',
      fundAccountId: 'FundAccountId',
      fundAccountName: 'FundAccountName',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      fundType: 'FundType',
      nbid: 'Nbid',
      remark: 'Remark',
      site: 'Site',
      transactionAccount: 'TransactionAccount',
      transactionAmount: 'TransactionAmount',
      transactionChannel: 'TransactionChannel',
      transactionDirection: 'TransactionDirection',
      transactionNumber: 'TransactionNumber',
      transactionTime: 'TransactionTime',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balance: 'string',
      billNumber: 'string',
      channelTransactionNumber: 'string',
      currency: 'string',
      fundAccountEcid: 'string',
      fundAccountId: 'number',
      fundAccountName: 'string',
      fundAccountOwnerAccountId: 'number',
      fundType: 'string',
      nbid: 'string',
      remark: 'string',
      site: 'string',
      transactionAccount: 'string',
      transactionAmount: 'string',
      transactionChannel: 'string',
      transactionDirection: 'string',
      transactionNumber: 'number',
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

export class GetFundAccountTransactionDetailsResponseBody extends $dara.Model {
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
   * Data list
   */
  data?: GetFundAccountTransactionDetailsResponseBodyData[];
  /**
   * @remarks
   * Response structure metadata
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      metadata: 'Metadata',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': GetFundAccountTransactionDetailsResponseBodyData },
      metadata: 'any',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

