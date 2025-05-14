// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePolicyInstancesStatusResponseBodyPolicyInstances } from "./DescribePolicyInstancesStatusResponseBodyPolicyInstances";


export class DescribePolicyInstancesStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of policy instances that are deployed in the cluster at different severity levels.
   * 
   * @example
   * { "high": 11,     "medium": 1  }
   */
  instancesSeverityCount?: { [key: string]: any };
  /**
   * @remarks
   * The number of policy instances of each policy type.
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

