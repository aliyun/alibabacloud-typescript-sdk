// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFundAccountLowAvailableAmountAlarmRequest extends $dara.Model {
  /**
   * @example
   * 12321213
   */
  fundAccountId?: number;
  /**
   * @example
   * 100
   */
  thresholdAmount?: string;
  static names(): { [key: string]: string } {
    return {
      fundAccountId: 'FundAccountId',
      thresholdAmount: 'ThresholdAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAccountId: 'number',
      thresholdAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

