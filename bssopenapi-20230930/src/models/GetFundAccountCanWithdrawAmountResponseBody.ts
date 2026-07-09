// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanWithdrawAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Amount withdrawable via original payment method
   * 
   * @example
   * 400
   */
  canOriginalWithdrawAmount?: string;
  /**
   * @remarks
   * Withdrawable amount = Cash balance - Transfer ledger amount - (Outstanding invoice amount + Historical months unsettled amount + Current month unsettled amount - Transfer ledger amount) - Pay-as-you-go reserved amount
   * 
   * @example
   * 500
   */
  canWithdrawAmount?: string;
  /**
   * @remarks
   * Amount not withdrawable via original payment method
   * 
   * @example
   * 100
   */
  cannotOriginalWithdrawAmount?: string;
  /**
   * @remarks
   * Cash balance
   * 
   * @example
   * 1000
   */
  cashAmount?: string;
  /**
   * @remarks
   * Outstanding invoice amount
   * 
   * @example
   * 100
   */
  creditMemoAmount?: string;
  /**
   * @remarks
   * Current month unsettled amount
   * 
   * @example
   * 200
   */
  currentMonthUnclearedAmount?: string;
  /**
   * @remarks
   * Historical months unsettled amount
   * 
   * @example
   * 100
   */
  historyMonthUnclearedAmount?: string;
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
   * Pay-as-you-go reserved amount
   * 
   * @example
   * 100
   */
  payAsYouGoReversedAmount?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * DF58589C-A06C-4224-8615-7797E6474FA3
   */
  requestId?: string;
  /**
   * @remarks
   * Transfer amount
   * 
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

