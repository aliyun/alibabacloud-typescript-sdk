// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnDefaultDesensitizationRule extends $dara.Model {
  /**
   * @example
   * 101**
   */
  ruleId?: number;
  /**
   * @example
   * test
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

