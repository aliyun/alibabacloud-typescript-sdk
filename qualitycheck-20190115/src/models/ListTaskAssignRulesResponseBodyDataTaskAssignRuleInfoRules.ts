// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo } from "./ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo";


export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules extends $dara.Model {
  ruleBasicInfo?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleBasicInfo: 'RuleBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleBasicInfo: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleBasicInfo)) {
      $dara.Model.validateArray(this.ruleBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

