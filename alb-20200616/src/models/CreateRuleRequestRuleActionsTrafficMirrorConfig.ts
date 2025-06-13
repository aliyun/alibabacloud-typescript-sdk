// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig } from "./CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig";


export class CreateRuleRequestRuleActionsTrafficMirrorConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of the server group to which traffic is mirrored.
   */
  mirrorGroupConfig?: CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The type of destination to which network traffic is mirrored. Valid values:
   * 
   * *   **ForwardGroupMirror**: a server group.
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
      mirrorGroupConfig: CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig,
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

