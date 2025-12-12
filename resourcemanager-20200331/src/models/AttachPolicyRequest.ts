// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * AdministratorAccess
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
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the object to which you want to attach the permission policy.
   * 
   * *   If you want to attach the permission policy to a RAM user, specify the name in the @.onaliyun.com format. indicates the name of the RAM user, and indicates the alias of the Alibaba Cloud account to which the RAM user belongs.
   * *   If you want to attach the permission policy to a RAM user group, specify the name in the @group..onaliyun.com format. indicates the name of the RAM user group, and indicates the alias of the Alibaba Cloud account to which the RAM user group belongs.
   * *   If you want to attach the permission policy to a RAM role, specify the name in the @role..onaliyunservice.com format. indicates the name of the RAM role, and indicates the alias of the Alibaba Cloud account to which the RAM role belongs.
   * 
   * >  The alias of an Alibaba Cloud account is a part of the default domain name. You can call the [GetDefaultDomain](https://help.aliyun.com/document_detail/186720.html) operation to obtain the alias of an Alibaba Cloud account.
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
   * The effective scope of the permission policy. Valid values:
   * 
   * *   ID of a resource group: indicates that the permission policy takes effect for the resources in the resource group.
   * *   ID of the Alibaba Cloud account to which the authorized object belongs: indicates that the permission policy takes effect for the resources within the Alibaba Cloud account.
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

