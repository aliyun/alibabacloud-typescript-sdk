// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRulesRequestRulesRuleActions } from "./CreateRulesRequestRulesRuleActions";
import { CreateRulesRequestRulesRuleConditions } from "./CreateRulesRequestRulesRuleConditions";
import { CreateRulesRequestRulesTag } from "./CreateRulesRequestRulesTag";


export class CreateRulesRequestRules extends $dara.Model {
  direction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleActions?: CreateRulesRequestRulesRuleActions[];
  /**
   * @remarks
   * This parameter is required.
   */
  ruleConditions?: CreateRulesRequestRulesRuleConditions[];
  /**
   * @remarks
   * This parameter is required.
   */
  ruleName?: string;
  tag?: CreateRulesRequestRulesTag[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleName: 'RuleName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleConditions },
      ruleName: 'string',
      tag: { 'type': 'array', 'itemType': CreateRulesRequestRulesTag },
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

