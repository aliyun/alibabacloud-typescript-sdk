// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The access policy name.
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
   * The access policy type. Valid values:
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
   * The name of the principal for authorization. The format is as follows:
   * 
   * - RAM user: <UserName>@<AccountAlias>.onaliyun.com, where <UserName> is the RAM username and <AccountAlias> is the account alias.
   * - RAM user group: <GroupName>@group.<AccountAlias>.onaliyun.com, where <GroupName> is the RAM user group name and <AccountAlias> is the account alias.
   * - RAM role: <RoleName>@role.<AccountAlias>.onaliyunservice.com, where <RoleName> is the RAM role name and <AccountAlias> is the account alias.
   * 
   * > The account alias is a part of the default domain name. You can invoke the [GetDefaultDomain](https://help.aliyun.com/document_detail/186720.html) operation to obtain the account alias.
   * 
   * This parameter is required.
   * 
   * @example
   * alice@demo.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the principal for authorization. Valid values:
   * 
   * - IMSUser: RAM user.
   * - IMSGroup: RAM user group.
   * - ServiceRole: RAM role.
   * 
   * > ServiceRole refers to a regular RAM role. The access policy of a service-linked role is predefined by the cloud service and cannot be modified, nor can you associate an access policy with it by calling this operation.
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
   * - Resource group ID: The policy takes effect only within the specified resource group.
   * - Alibaba Cloud account ID: The ID of the Alibaba Cloud account to which the principal belongs. The policy takes effect within the Alibaba Cloud account.
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

