// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies } from "./DescribeSceneDefensePoliciesResponseBodyPoliciesRuntimePolicies";


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

