// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSchedulerRuleRequest extends $dara.Model {
  param?: string;
  resourceGroupId?: string;
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
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'Param',
      resourceGroupId: 'ResourceGroupId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
      resourceGroupId: 'string',
      ruleName: 'string',
      ruleType: 'number',
      rules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

