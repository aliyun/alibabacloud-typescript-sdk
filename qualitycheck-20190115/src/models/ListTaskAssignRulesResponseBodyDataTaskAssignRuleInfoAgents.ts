// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent } from "./ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent";


export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents extends $dara.Model {
  agent?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent[];
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent },
    };
  }

  validate() {
    if(Array.isArray(this.agent)) {
      $dara.Model.validateArray(this.agent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

