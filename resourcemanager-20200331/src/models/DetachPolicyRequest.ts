// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy name.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the access policy. Valid values:
   * 
   * - Custom: custom policy.
   * - System: system policy.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the principal.
   * 
   * This parameter is required.
   * 
   * @example
   * alice@demo.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The object type of the principal to which the authorization is granted. Valid values:
   * 
   * - IMSUser: Resource Access Management (RAM) user.
   * - IMSGroup: RAM user group.
   * - ServiceRole: RAM role.
   * 
   * This parameter is required.
   * 
   * @example
   * IMSUser
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs. Specifies the resource group or account from which to remove the authorization.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

