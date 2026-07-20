// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleItemListFlightRuleInfosValue extends $dara.Model {
  /**
   * @example
   * 退改规则简述
   */
  refundChangeRuleDesc?: string;
  /**
   * @example
   * 行李额规则简述
   */
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

