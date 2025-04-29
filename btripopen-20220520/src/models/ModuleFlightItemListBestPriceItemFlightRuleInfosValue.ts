// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleFlightItemListBestPriceItemFlightRuleInfosValue extends $dara.Model {
  refundChangeRuleDesc?: string;
  baggageDesc?: string;
  static names(): { [key: string]: string } {
    return {
      refundChangeRuleDesc: 'refund_change_rule_desc',
      baggageDesc: 'baggage_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundChangeRuleDesc: 'string',
      baggageDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

