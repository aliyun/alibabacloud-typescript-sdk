// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDcdnWafPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the protection policy that you want to modify. You can specify only one ID in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  policyId?: number;
  /**
   * @remarks
   * The new name of the protection policy.
   * 
   * > You must specify PolicyName or PolicyStatus.
   * 
   * @example
   * policy_test
   */
  policyName?: string;
  /**
   * @remarks
   * The new status of the protection policy. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * > You must specify PolicyName or PolicyStatus.
   * 
   * @example
   * on
   */
  policyStatus?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

