// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession } from "./CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession";
import { CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples } from "./CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples";


export class CreateRuleRequestRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of session persistence for the server groups.
   */
  serverGroupStickySession?: CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The server groups to which requests are forwarded. You can specify at most five server groups for each forwarding rule.
   */
  serverGroupTuples?: CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples },
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

