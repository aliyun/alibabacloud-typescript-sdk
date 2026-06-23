// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyInstancesStatusResponseBodyPolicyInstances extends $dara.Model {
  /**
   * @remarks
   * The policy type. For more information about supported policy types and their descriptions, see [Container security policy rule library](https://help.aliyun.com/document_detail/359819.html).
   * 
   * @example
   * compliance
   */
  policyCategory?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * Restricts use of the cluster-admin role.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The number of deployed policy instances. If this field is empty, no policy instances of this type are deployed.
   * 
   * @example
   * 1
   */
  policyInstancesCount?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * ACKRestrictRoleBindings
   */
  policyName?: string;
  /**
   * @remarks
   * The governance level of the policy.
   * 
   * @example
   * medium
   */
  policySeverity?: string;
  static names(): { [key: string]: string } {
    return {
      policyCategory: 'policy_category',
      policyDescription: 'policy_description',
      policyInstancesCount: 'policy_instances_count',
      policyName: 'policy_name',
      policySeverity: 'policy_severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyCategory: 'string',
      policyDescription: 'string',
      policyInstancesCount: 'number',
      policyName: 'string',
      policySeverity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyInstancesStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of policy instances deployed in the cluster at different governance levels.
   * 
   * @example
   * { "high": 11,     "medium": 1  }
   */
  instancesSeverityCount?: { [key: string]: any };
  /**
   * @remarks
   * The list of policy instance counts for different policy types.
   */
  policyInstances?: DescribePolicyInstancesStatusResponseBodyPolicyInstances[];
  static names(): { [key: string]: string } {
    return {
      instancesSeverityCount: 'instances_severity_count',
      policyInstances: 'policy_instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancesSeverityCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      policyInstances: { 'type': 'array', 'itemType': DescribePolicyInstancesStatusResponseBodyPolicyInstances },
    };
  }

  validate() {
    if(this.instancesSeverityCount) {
      $dara.Model.validateMap(this.instancesSeverityCount);
    }
    if(Array.isArray(this.policyInstances)) {
      $dara.Model.validateArray(this.policyInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

