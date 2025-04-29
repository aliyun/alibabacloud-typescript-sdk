// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules } from "./DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules";


export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the special retention period is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The special retention rules.
   */
  rules?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules },
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

