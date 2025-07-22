// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountTransactionDetailsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 5
   */
  balance?: string;
  /**
   * @example
   * 2323203243
   */
  billNumber?: string;
  /**
   * @example
   * 20244389232
   */
  channelTransactionNumber?: string;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
   * @example
   * 23473943
   */
  fundAccountEcid?: string;
  /**
   * @example
   * 1232121
   */
  fundAccountId?: number;
  /**
   * @example
   * 云某的名称
   */
  fundAccountName?: string;
  /**
   * @example
   * 32343231
   */
  fundAccountOwnerAccountId?: number;
  /**
   * @example
   * ACCT_BOOK
   */
  fundType?: string;
  /**
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @example
   * 订单备注
   */
  remark?: string;
  /**
   * @example
   * 26842
   */
  site?: string;
  /**
   * @example
   * 186****3975
   */
  transactionAccount?: string;
  /**
   * @example
   * 10
   */
  transactionAmount?: string;
  /**
   * @example
   * ALIPAY
   */
  transactionChannel?: string;
  /**
   * @example
   * IN
   */
  transactionDirection?: string;
  /**
   * @example
   * 5423121
   */
  transactionNumber?: number;
  /**
   * @example
   * 2024-12-01 12:00:00
   */
  transactionTime?: string;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  data?: GetFundAccountTransactionDetailsResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  /**
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

