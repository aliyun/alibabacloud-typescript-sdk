// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyUserScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy to modify.
   * > You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  policyId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user scope for the control policy. Valid values:
   * 
   * - **All**: The policy applies to all users.
   * - **User**: The policy applies to selected users.
   * - **UserGroup**: The policy applies to selected user groups.
   * 
   * This parameter is required.
   * 
   * @example
   * All
   */
  scopeType?: string;
  /**
   * @remarks
   * The user group scope for the control policy.
   * 
   * > This parameter is required when ScopeType is set to UserGroup. A maximum of 100 user groups can be specified.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The user scope for the control policy.
   * 
   * > This parameter is required when ScopeType is set to User. A maximum of 500 users can be specified.
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      projectId: 'ProjectId',
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
      projectId: 'number',
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

