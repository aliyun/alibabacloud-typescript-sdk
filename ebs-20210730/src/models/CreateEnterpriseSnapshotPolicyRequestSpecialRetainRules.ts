// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules } from "./CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules";


export class CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the special retention is enabled.
   * 
   * *   true: enable
   * *   false: disable
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The special retention rules.
   */
  rules?: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules },
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

