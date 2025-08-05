// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyBindingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The data sources that you want to bind to the backup policy.
   */
  policyBindingListShrink?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * @example
   * po-000************8ep
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyBindingListShrink: 'PolicyBindingList',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyBindingListShrink: 'string',
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

