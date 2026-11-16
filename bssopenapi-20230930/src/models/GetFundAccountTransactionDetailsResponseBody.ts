// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountTransactionDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The balance after the operation.
   * 
   * @example
   * 5
   */
  balance?: string;
  /**
   * @remarks
   * The order number or bill number.
   * 
   * @example
   * 2323203243
   */
  billNumber?: string;
  /**
   * @remarks
   * The external transaction reference number.
   * 
   * @example
   * 20244389232
   */
  channelTransactionNumber?: string;
  /**
   * @remarks
   * The currency of the transaction amount.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The enterprise entity ID.
   * 
   * @example
   * 23473943
   */
  fundAccountEcid?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 1232121
   */
  fundAccountId?: number;
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * Name of the user
   */
  fundAccountName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the account owner.
   * 
   * @example
   * 32343231
   */
  fundAccountOwnerAccountId?: number;
  /**
   * @remarks
   * The fund type.
   * 
   * @example
   * ACCT_BOOK
   */
  fundType?: string;
  /**
   * @remarks
   * The primary sales channel.
   * 
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * Order remark
   */
  remark?: string;
  /**
   * @remarks
   * The site.
   * 
   * @example
   * 26842
   */
  site?: string;
  /**
   * @remarks
   * The corresponding transaction account, such as the Alipay top-up account or the peer account for transfers.
   * 
   * @example
   * 186****3975
   */
  transactionAccount?: string;
  /**
   * @remarks
   * The transaction amount.
   * 
   * @example
   * 10
   */
  transactionAmount?: string;
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
   * 
   * @example
   * ALIPAY
   */
  transactionChannel?: string;
  /**
   * @remarks
   * The transaction direction. Valid values: in (income) and out (expense).
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
   * 5423121
   */
  transactionNumber?: number;
  /**
   * @remarks
   * The formatted string of the transaction time.
   * 
   * @example
   * 2024-12-01 12:00:00
   */
  transactionTime?: string;
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
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data list.
   */
  data?: GetFundAccountTransactionDetailsResponseBodyData[];
  /**
   * @remarks
   * The metadata of the response structure.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
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

