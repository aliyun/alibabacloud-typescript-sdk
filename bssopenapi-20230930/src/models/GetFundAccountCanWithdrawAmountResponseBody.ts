// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanWithdrawAmountResponseBody extends $dara.Model {
  /**
   * @example
   * 400
   */
  canOriginalWithdrawAmount?: string;
  /**
   * @example
   * 500
   */
  canWithdrawAmount?: string;
  /**
   * @example
   * 100
   */
  cannotOriginalWithdrawAmount?: string;
  /**
   * @example
   * 1000
   */
  cashAmount?: string;
  /**
   * @example
   * 100
   */
  creditMemoAmount?: string;
  /**
   * @example
   * 200
   */
  currentMonthUnclearedAmount?: string;
  /**
   * @example
   * 100
   */
  historyMonthUnclearedAmount?: string;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 100
   */
  payAsYouGoReversedAmount?: string;
  /**
   * @example
   * DF58589C-A06C-4224-8615-7797E6474FA3
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  transferAmount?: string;
  static names(): { [key: string]: string } {
    return {
      canOriginalWithdrawAmount: 'CanOriginalWithdrawAmount',
      canWithdrawAmount: 'CanWithdrawAmount',
      cannotOriginalWithdrawAmount: 'CannotOriginalWithdrawAmount',
      cashAmount: 'CashAmount',
      creditMemoAmount: 'CreditMemoAmount',
      currentMonthUnclearedAmount: 'CurrentMonthUnclearedAmount',
      historyMonthUnclearedAmount: 'HistoryMonthUnclearedAmount',
      metadata: 'Metadata',
      payAsYouGoReversedAmount: 'PayAsYouGoReversedAmount',
      requestId: 'RequestId',
      transferAmount: 'TransferAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canOriginalWithdrawAmount: 'string',
      canWithdrawAmount: 'string',
      cannotOriginalWithdrawAmount: 'string',
      cashAmount: 'string',
      creditMemoAmount: 'string',
      currentMonthUnclearedAmount: 'string',
      historyMonthUnclearedAmount: 'string',
      metadata: 'any',
      payAsYouGoReversedAmount: 'string',
      requestId: 'string',
      transferAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

