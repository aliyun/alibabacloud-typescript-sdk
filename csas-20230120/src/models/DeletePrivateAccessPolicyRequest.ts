// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePrivateAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the private network access policy. Obtain this ID from:
   * 
   * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): Batch query private network access policies.
   * 
   * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~): Create a private network access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-policy-867ef4007c8a****
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

