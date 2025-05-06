// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRenewInstancePriceResponseBodyPriceInfoRules extends $dara.Model {
  /**
   * @example
   * 买满1年，立享官网价格8.5折优惠。
   */
  description?: string;
  /**
   * @example
   * 587
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

