// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolicyDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the policy.
   * 
   * The description must be 1 to 1,024 characters in length.
   * 
   * @example
   * This is a test policy.
   */
  newDescription?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * TestPolicy
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      newDescription: 'NewDescription',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDescription: 'string',
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

