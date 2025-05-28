// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountTransactionDetailsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2023212312321
   */
  billNumber?: string;
  /**
   * @example
   * 20250312334312322
   */
  channelTransactionNumber?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1735664561000
   */
  endTime?: number;
  /**
   * @example
   * 123221232
   */
  fundAccountId?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1735664461000
   */
  startTime?: number;
  transactionChannelListShrink?: string;
  /**
   * @example
   * IN
   */
  transactionDirection?: string;
  /**
   * @example
   * 543231231
   */
  transactionNumber?: number;
  /**
   * @example
   * CHARGE
   */
  transactionType?: string;
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

