// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo } from "./GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo";


export class GetSkillGroupConfigResponseBodyDataRuleList extends $dara.Model {
  ruleNameInfo?: GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNameInfo)) {
      $dara.Model.validateArray(this.ruleNameInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

