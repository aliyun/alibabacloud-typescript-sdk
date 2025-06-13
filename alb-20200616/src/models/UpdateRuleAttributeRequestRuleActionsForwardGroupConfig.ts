// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession } from "./UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession";
import { UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples } from "./UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples";


export class UpdateRuleAttributeRequestRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of session persistence for server groups.
   */
  serverGroupStickySession?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The server groups to which requests are forwarded.
   */
  serverGroupTuples?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples },
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

