// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProhibitedPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The software prohibition policy ID. You can obtain this value from the following operations:
   * - [ListProhibitedPolicies](~~ListProhibitedPolicies~~): Lists software prohibition policies.
   * - [CreateProhibitedPolicy](~~CreateProhibitedPolicy~~): Creates a software prohibition policy.
   * 
   * This parameter is required.
   * 
   * @example
   * pid-7da5ea4192c1****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

