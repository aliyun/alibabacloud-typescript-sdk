// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyRulesRule extends $dara.Model {
  /**
   * @remarks
   * The description of the promotion rule.
   * 
   * @example
   * Activity Description
   */
  description?: string;
  /**
   * @remarks
   * The name of the promotion rule.
   * 
   * @example
   * Rule1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the promotion rule.
   * 
   * @example
   * 1020021003939076
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

