// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanTransferAmountRequest extends $dara.Model {
  /**
   * @remarks
   * The currency.
   * 
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the source fund account. If you do not specify this parameter, the ID of the fund account owned by the current account is used by default.
   * 
   * @example
   * 123212
   */
  fundAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      fundAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

