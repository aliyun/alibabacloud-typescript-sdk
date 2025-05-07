// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceResponseBodyRulesRule extends $dara.Model {
  /**
   * @remarks
   * The description of the activity.
   * 
   * @example
   * Content
   */
  description?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the promotion rule.
   * 
   * @example
   * 1001199213
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
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

