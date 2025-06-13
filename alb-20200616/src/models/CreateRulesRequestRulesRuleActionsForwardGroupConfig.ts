// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession } from "./CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession";
import { CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples } from "./CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples";


export class CreateRulesRequestRulesRuleActionsForwardGroupConfig extends $dara.Model {
  serverGroupStickySession?: CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  serverGroupTuples?: CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  validate() {
    if(this.serverGroupStickySession && typeof (this.serverGroupStickySession as any).validate === 'function') {
      (this.serverGroupStickySession as any).validate();
    }
    if(Array.isArray(this.serverGroupTuples)) {
      $dara.Model.validateArray(this.serverGroupTuples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

