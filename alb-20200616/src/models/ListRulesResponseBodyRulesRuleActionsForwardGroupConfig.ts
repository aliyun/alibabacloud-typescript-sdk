// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupStickySession } from "./ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupStickySession";
import { ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples } from "./ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples";


export class ListRulesResponseBodyRulesRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The session persistence configurations of the server group.
   */
  serverGroupStickySession?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The server groups to which requests are forwarded.
   */
  serverGroupTuples?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples },
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

