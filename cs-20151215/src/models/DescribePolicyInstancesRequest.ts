// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy instance that you want to query.
   * 
   * @example
   * allowed-repos-cz4s2
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the policy that you want to query.
   * 
   * @example
   * ACKPSPCapabilities
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'instance_name',
      policyName: 'policy_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

