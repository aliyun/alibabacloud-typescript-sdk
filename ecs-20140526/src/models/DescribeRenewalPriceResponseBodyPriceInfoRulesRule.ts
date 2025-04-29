// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceResponseBodyPriceInfoRulesRule extends $dara.Model {
  /**
   * @remarks
   * The description of the promotion rule.
   * 
   * @example
   * Receive a 15% discount on a 1-year subscription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the promotion rule.
   * 
   * @example
   * 1234567890
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

