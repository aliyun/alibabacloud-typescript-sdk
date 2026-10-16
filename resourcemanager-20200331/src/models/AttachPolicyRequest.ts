// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Policy Name of the access policy.
   * 
   * Policy Name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * AdministratorAccess
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the access policy. Valid values:
   * 
   * - Custom: custom access policy.
   * - System: system access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the authorization object. The format varies based on the object type:
   * 
   * - Resource Access Management (RAM) user: <UserName>@<AccountAlias>.onaliyun.com, where <UserName> is the RAM username and <AccountAlias> is the account alias.
   * - RAM user group: <GroupName>@group.<AccountAlias>.onaliyun.com, where <GroupName> is the RAM user group name and <AccountAlias> is the account alias.
   * - RAM role: <RoleName>@role.<AccountAlias>.onaliyunservice.com, where <RoleName> is the RAM role name and <AccountAlias> is the account alias.
   * 
   * > The account alias is part of the default domain name. Invoke [GetDefaultDomain](https://help.aliyun.com/document_detail/186720.html) to obtain the account alias.
   * 
   * This parameter is required.
   * 
   * @example
   * alice@demo.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The authorization object type. Valid values:
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
   * The authorization scope. Valid values:
   * 
   * - Resource group ID: The permissions take effect within the specified resource group.
   * - Alibaba Cloud account ID: The ID of the Alibaba Cloud account to which the principal belongs. The permissions take effect within the Alibaba Cloud account.
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

