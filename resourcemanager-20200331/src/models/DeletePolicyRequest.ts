// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

