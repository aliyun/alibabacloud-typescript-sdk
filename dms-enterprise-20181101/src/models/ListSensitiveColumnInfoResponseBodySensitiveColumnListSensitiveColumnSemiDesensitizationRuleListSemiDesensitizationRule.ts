// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleListSemiDesensitizationRule extends $dara.Model {
  /**
   * @example
   * 10***
   */
  ruleId?: number;
  /**
   * @example
   * test01
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
      ruleId: 'number',
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

