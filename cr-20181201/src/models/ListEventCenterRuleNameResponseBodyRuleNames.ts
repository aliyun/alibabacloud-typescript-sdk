// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventCenterRuleNameResponseBodyRuleNames extends $dara.Model {
  /**
   * @remarks
   * The ID of the event notification rule.
   * 
   * @example
   * crecr-n6pbhgjxtl*****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the event notification rule.
   * 
   * @example
   * test-chain
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

