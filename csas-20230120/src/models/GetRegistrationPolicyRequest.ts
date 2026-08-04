// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegistrationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the device registration policy. Valid values are obtained from the following sources:
   * - [ListRegistrationPolicies](~~ListRegistrationPolicies~~): Queries device registration policies in batches.
   * - [GetRegistrationPolicy](~~GetRegistrationPolicy~~): Queries the details of a device registration policy.
   * - [CreateRegistrationPolicy](~~CreateRegistrationPolicy~~): Creates a device registration policy.
   * - [UpdateRegistrationPolicy](~~UpdateRegistrationPolicy~~): Updates a device registration policy.
   * 
   * This parameter is required.
   * 
   * @example
   * reg-policy-dcbfd33cb004****
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

