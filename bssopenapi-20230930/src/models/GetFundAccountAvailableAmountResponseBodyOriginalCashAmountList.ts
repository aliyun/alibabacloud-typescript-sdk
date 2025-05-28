// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountAvailableAmountResponseBodyOriginalCashAmountList extends $dara.Model {
  /**
   * @example
   * 10
   */
  amount?: string;
  /**
   * @example
   * USD
   */
  currency?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

