// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachPolicyRequest extends $dara.Model {
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
  /**
   * @remarks
   * The type of the permission policy. Valid values:
   * 
   * *   Custom
   * *   System
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the object to which you want to attach the permission policy.
   * 
   * This parameter is required.
   * 
   * @example
   * alice@demo.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the object to which you want to attach the permission policy. Valid values:
   * 
   * *   IMSUser: RAM user
   * *   IMSGroup: RAM user group
   * *   ServiceRole: RAM role
   * 
   * This parameter is required.
   * 
   * @example
   * IMSUser
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
   * 
   * This parameter specifies the resource group or Alibaba Cloud account for which you want to revoke permissions.
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

