// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyUserScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The bastion host ID.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy that you want to modify.
   * 
   * >  You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to query the control policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scope of users to whom the control policy applies. Valid values:
   * 
   * * **All**: The control policy applies to all users.
   * * **User**: The control policy applies to specified users.
   * * **UserGroup**: The control policy applies to specified user groups.
   * 
   * This parameter is required.
   * 
   * @example
   * All
   */
  scopeType?: string;
  /**
   * @remarks
   * The user groups to which the control policy applies.
   * 
   * > This parameter is required if ScopeType is set to UserGroup. You can specify up to 100 user group IDs.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The users to whom the control policy applies.
   * 
   * > This parameter is required if ScopeType is set to User. You can specify up to 500 user IDs.
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      scopeType: 'ScopeType',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policyId: 'string',
      regionId: 'string',
      scopeType: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

