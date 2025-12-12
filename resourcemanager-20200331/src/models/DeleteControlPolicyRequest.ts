// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cp-SImPt8GCEwiq****
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

