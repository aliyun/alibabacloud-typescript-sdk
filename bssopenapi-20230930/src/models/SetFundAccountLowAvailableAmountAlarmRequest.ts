// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFundAccountLowAvailableAmountAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * Fund account ID. If not specified, the account ID owned by the current account (owner) is used by default.
   * 
   * @example
   * 12321213
   */
  fundAccountId?: number;
  /**
   * @remarks
   * Low balance alert threshold.
   * 
   * This parameter is required.
   * 
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

