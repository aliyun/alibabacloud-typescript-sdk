// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession } from "./UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession";
import { UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupTuples } from "./UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupTuples";


export class UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig extends $dara.Model {
  serverGroupStickySession?: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  serverGroupTuples?: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupTuples },
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

