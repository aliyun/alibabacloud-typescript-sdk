// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the protection rule. You can specify only one ID in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

