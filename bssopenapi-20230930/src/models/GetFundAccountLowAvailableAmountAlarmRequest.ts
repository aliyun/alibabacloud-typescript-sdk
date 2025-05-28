// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFundAccountLowAvailableAmountAlarmRequest extends $dara.Model {
  /**
   * @example
   * 12332112
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

