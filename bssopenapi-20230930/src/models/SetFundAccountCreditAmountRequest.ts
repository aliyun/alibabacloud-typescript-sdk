// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFundAccountCreditAmountRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to cancel credit control. Valid values:
   * - true: Cancel credit control.
   * - false or empty: Set credit control.
   * 
   * When canceling credit control, CreditAmount must be set to 0.
   * 
   * @example
   * false
   */
  cancelCredit?: string;
  /**
   * @remarks
   * The credit limit.
   * 
   * This parameter is required.
   * 
   * @example
   * 500
   */
  creditAmount?: string;
  /**
   * @remarks
   * The currency of the credit limit. Currently, only CNY is supported for Chinese mainland accounts, and only USD is supported for international accounts.
   * 
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The fund account ID. If this parameter is not specified, the account owned by the current account is used by default.
   * 
   * @example
   * 1232312
   */
  fundAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      cancelCredit: 'CancelCredit',
      creditAmount: 'CreditAmount',
      currency: 'Currency',
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelCredit: 'string',
      creditAmount: 'string',
      currency: 'string',
      fundAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

