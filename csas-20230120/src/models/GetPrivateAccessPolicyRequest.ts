// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrivateAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Intranet access policy ID. The value can be obtained from:
   * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): Query multiple intranet access policies in bulk.
   * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~): Create an intranet access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-policy-63b2f1844b86****
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

