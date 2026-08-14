// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchSchedulerRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  switchData?: string;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      switchData: 'SwitchData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      ruleType: 'number',
      switchData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

