// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProhibitedPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the prohibited software policy. You can obtain the value from the following operations:
   * - [ListProhibitedPolicies](~~ListProhibitedPolicies~~): Lists prohibited software policies.
   * - [CreateProhibitedPolicy](~~CreateProhibitedPolicy~~): Creates a prohibited software policy.
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

