// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountCanWithdrawAmountRequest extends $dara.Model {
  /**
   * @example
   * 123212232
   */
  fundAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

