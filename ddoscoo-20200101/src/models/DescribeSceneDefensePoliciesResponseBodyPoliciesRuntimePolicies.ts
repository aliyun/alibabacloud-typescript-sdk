// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies extends $dara.Model {
  /**
   * @remarks
   * The protection rule that is applied when the policy takes effect.
   * 
   * If you set **PolicyType** to **1**, the value is **{"cc_rule_enable": false }**. The value indicates that the Frequency Control policy is disabled.
   * 
   * If you set **PolicyType** to **2**, the value is **{"ai_rule_enable": 0}**. The value indicates that the Intelligent Protection policy is disabled.
   * 
   * @example
   * {"cc_rule_enable": false }
   */
  newValue?: string;
  /**
   * @remarks
   * The protection policy whose status is changed when the policy takes effect. Valid values:
   * 
   * *   **1**: indicates that the Frequency Control policy is changed.
   * *   **2**: indicates that the Intelligent Protection policy is changed.
   * 
   * @example
   * 1
   */
  policyType?: number;
  /**
   * @remarks
   * The running status of the policy. Valid values:
   * 
   * *   **0**: The policy has not been issued or is restored.
   * *   **1**: The policy is pending.
   * *   **2**: The policy is being restored.
   * *   **3**: The policy takes effect.
   * *   **4**: The policy fails to take effect.
   * *   **5**:The policy fails to be restored.
   * *   **6**: The configurations of the protected objects for the policy does not exist because the configurations may be deleted.
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The protection rule that is applied before the policy takes effect.
   * 
   * If you set **PolicyType** to **1**, the value is **{"cc_rule_enable": true}**. The value indicates that the Frequency Control policy is enabled.
   * 
   * If you set **PolicyType** to **2**, the value is **{"ai_rule_enable": 1}**. The value indicates that the Intelligent Protection policy is enabled.
   * 
   * @example
   * {"cc_rule_enable": true}
   */
  oldValue?: string;
  static names(): { [key: string]: string } {
    return {
      newValue: 'NewValue',
      policyType: 'PolicyType',
      status: 'Status',
      oldValue: 'oldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newValue: 'string',
      policyType: 'number',
      status: 'number',
      oldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

