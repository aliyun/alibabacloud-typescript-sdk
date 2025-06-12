// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all versions of the policy. Valid values:
   * 
   * *   true: deletes all versions of the policy.
   * *   false: does not delete all versions of the policy. If you set the parameter to false, the non-default versions of the policy are not deleted. Before you delete the policy, you must manually delete all non-default versions of the policy.
   * 
   * @example
   * true
   */
  cascadingDelete?: boolean;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      cascadingDelete: 'CascadingDelete',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadingDelete: 'boolean',
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

