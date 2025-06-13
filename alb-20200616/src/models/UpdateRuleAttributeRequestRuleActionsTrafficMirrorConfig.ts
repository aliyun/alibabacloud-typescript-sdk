// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig } from "./UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig";


export class UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig extends $dara.Model {
  /**
   * @remarks
   * The server group to which network traffic is mirrored.
   */
  mirrorGroupConfig?: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The type of destination to which network traffic is mirrored. Valid values:
   * 
   * *   **ForwardGroupMirror**: a server group
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
      mirrorGroupConfig: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig,
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

