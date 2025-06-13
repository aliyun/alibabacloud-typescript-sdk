// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRulesAttributeRequestRulesRuleActions } from "./UpdateRulesAttributeRequestRulesRuleActions";
import { UpdateRulesAttributeRequestRulesRuleConditions } from "./UpdateRulesAttributeRequestRulesRuleConditions";


export class UpdateRulesAttributeRequestRules extends $dara.Model {
  priority?: number;
  ruleActions?: UpdateRulesAttributeRequestRulesRuleActions[];
  ruleConditions?: UpdateRulesAttributeRequestRulesRuleConditions[];
  /**
   * @remarks
   * This parameter is required.
   */
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleConditions },
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

