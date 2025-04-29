// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOtaItemDetailResponseBodyModuleGroupItemFlightRuleInfoListFlightRuleInfo extends $dara.Model {
  baggageDesc?: string;
  refundChangeRuleDesc?: string;
  static names(): { [key: string]: string } {
    return {
      baggageDesc: 'baggage_desc',
      refundChangeRuleDesc: 'refund_change_rule_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDesc: 'string',
      refundChangeRuleDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

