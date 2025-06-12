// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachPolicyFromRoleRequest extends $dara.Model {
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
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * OSSAdminRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

