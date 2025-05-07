// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo } from "./ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo";


export class ListTaskAssignRulesResponseBodyData extends $dara.Model {
  taskAssignRuleInfo?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      taskAssignRuleInfo: 'TaskAssignRuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAssignRuleInfo: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.taskAssignRuleInfo)) {
      $dara.Model.validateArray(this.taskAssignRuleInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

