// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFundAccountCreditAmountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 500
   */
  creditAmount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
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

