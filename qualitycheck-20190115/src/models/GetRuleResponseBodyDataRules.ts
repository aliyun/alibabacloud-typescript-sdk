// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleResponseBodyDataRulesRuleInfo } from "./GetRuleResponseBodyDataRulesRuleInfo";


export class GetRuleResponseBodyDataRules extends $dara.Model {
  ruleInfo?: GetRuleResponseBodyDataRulesRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleInfo: 'RuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleInfo: { 'type': 'array', 'itemType': GetRuleResponseBodyDataRulesRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleInfo)) {
      $dara.Model.validateArray(this.ruleInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

