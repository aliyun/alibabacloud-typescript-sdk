// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup } from "./ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup";


export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups extends $dara.Model {
  skillGroup?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup[];
  static names(): { [key: string]: string } {
    return {
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroup: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroup)) {
      $dara.Model.validateArray(this.skillGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

