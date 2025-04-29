// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightSearchListResponseBodyModuleFlightListFlightRuleListChangeRuleItemRefundSubItemsRefundSubContents extends $dara.Model {
  feeDesc?: string;
  feeRange?: string;
  /**
   * @example
   * 1
   */
  style?: number;
  static names(): { [key: string]: string } {
    return {
      feeDesc: 'fee_desc',
      feeRange: 'fee_range',
      style: 'style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeDesc: 'string',
      feeRange: 'string',
      style: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

