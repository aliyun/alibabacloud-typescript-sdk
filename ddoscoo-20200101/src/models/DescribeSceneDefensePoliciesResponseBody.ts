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

export class DescribeSceneDefensePoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The execution status of the policy. Valid values:
   * 
   * *   **1**: not executed or execution completed
   * *   **0**: being executed
   * *   **-1**: execution failed
   * 
   * @example
   * 1
   */
  done?: number;
  /**
   * @remarks
   * The time at which the policy expires. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1586016000000
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * testpolicy
   */
  name?: string;
  /**
   * @remarks
   * The number of objects that are protected by the policy.
   * 
   * @example
   * 1
   */
  objectCount?: number;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 321a-fd31-df51-****
   */
  policyId?: string;
  /**
   * @remarks
   * The running rules of the policy.
   */
  runtimePolicies?: DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies[];
  /**
   * @remarks
   * The time at which the policy takes effect. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1585670400000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: pending enabling
   * *   **2**: enabled
   * *   **3**: expired
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the template that is used to create the policy. Valid values:
   * 
   * *   **promotion**: the Important Activity template
   * *   **bypass**: the Forward All template
   * 
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      done: 'Done',
      endTime: 'EndTime',
      name: 'Name',
      objectCount: 'ObjectCount',
      policyId: 'PolicyId',
      runtimePolicies: 'RuntimePolicies',
      startTime: 'StartTime',
      status: 'Status',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'number',
      endTime: 'number',
      name: 'string',
      objectCount: 'number',
      policyId: 'string',
      runtimePolicies: { 'type': 'array', 'itemType': DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies },
      startTime: 'number',
      status: 'number',
      template: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.runtimePolicies)) {
      $dara.Model.validateArray(this.runtimePolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefensePoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the configurations of the scenario-specific custom policy.
   */
  policies?: DescribeSceneDefensePoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F65DF043-E0EB-4796-9467-23DDCDF92C1D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': DescribeSceneDefensePoliciesResponseBodyPolicies },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

