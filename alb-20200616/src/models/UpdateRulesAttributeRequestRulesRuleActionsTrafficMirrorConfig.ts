// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig } from "./UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig";


export class UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig extends $dara.Model {
  mirrorGroupConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      mirrorGroupConfig: 'MirrorGroupConfig',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mirrorGroupConfig: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig,
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

