// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFundAccountCreditAmountRequest extends $dara.Model {
  /**
   * @remarks
   * Credit limit
   * 
   * This parameter is required.
   * 
   * @example
   * 500
   */
  creditAmount?: string;
  /**
   * @remarks
   * Currency for the credit control limit. Currently, only CNY is supported in mainland China, and only USD is supported for international use.
   * 
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * Fund account ID. If not specified, the account owned by the current account (owner) is used by default.
   * 
   * @example
   * 1232312
   */
  fundAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      creditAmount: 'CreditAmount',
      currency: 'Currency',
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

