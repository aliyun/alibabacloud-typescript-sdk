// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyPriceInfoRules extends $dara.Model {
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Receive a 15% discount on a one-year subscription.
   */
  description?: string;
  /**
   * @remarks
   * The rule ID.
   * 
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

