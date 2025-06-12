// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachPolicyFromGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * dev
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values: `System` and `Custom`.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

