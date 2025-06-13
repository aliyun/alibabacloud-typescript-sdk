// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig } from "./ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig";


export class ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of the server group to which traffic is mirrored.
   */
  mirrorGroupConfig?: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The destination to which traffic is mirrored. The destination can be a server group.
   * 
   * @example
   * ForwardGroupMirror
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      mirrorGroupConfig: 'MirrorGroupConfig',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mirrorGroupConfig: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig,
      targetType: 'string',
    };
  }

  validate() {
    if(this.mirrorGroupConfig && typeof (this.mirrorGroupConfig as any).validate === 'function') {
      (this.mirrorGroupConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

