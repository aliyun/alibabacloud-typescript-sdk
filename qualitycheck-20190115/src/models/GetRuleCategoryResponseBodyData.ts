// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleCategoryResponseBodyDataRuleCountInfo } from "./GetRuleCategoryResponseBodyDataRuleCountInfo";


export class GetRuleCategoryResponseBodyData extends $dara.Model {
  ruleCountInfo?: GetRuleCategoryResponseBodyDataRuleCountInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleCountInfo: 'RuleCountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCountInfo: { 'type': 'array', 'itemType': GetRuleCategoryResponseBodyDataRuleCountInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleCountInfo)) {
      $dara.Model.validateArray(this.ruleCountInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

