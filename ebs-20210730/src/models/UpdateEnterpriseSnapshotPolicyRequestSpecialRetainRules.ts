// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules } from "./UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules";


export class UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the special retention is enabled.
   * 
   * *   true: enable
   * *   false: disable
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The special retention rules.
   */
  rules?: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

