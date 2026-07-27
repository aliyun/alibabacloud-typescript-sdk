// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUserGroupAddOrUpdateRequestUserGroups extends $dara.Model {
  /**
   * @remarks
   * The users in the user group.
   * 
   * - For user groups created based on Alibaba Cloud accounts and Resource Access Management (RAM) roles, call the [DsgUserGroupQueryUserList](https://help.aliyun.com/document_detail/2786445.html) API to query the user list.
   * 
   * - For user groups created based on MaxCompute roles, call the [DsgUserGroupGetOdpsRoleGroups](https://help.aliyun.com/document_detail/2785695.html) API to query the user list.
   */
  accounts?: string[];
  /**
   * @remarks
   * The ID of the user group.
   * 
   * - If you do not specify this parameter, a new user group is created.
   * 
   * - If you specify this parameter, the specified user group is modified. You can call the [DsgUserGroupQueryList](https://help.aliyun.com/document_detail/2786441.html) operation to query the ID of the user group.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * yun_group
   */
  name?: string;
  /**
   * @remarks
   * The owner of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * user1
   */
  owner?: string;
  /**
   * @remarks
   * The name of the MaxCompute project. Set this parameter when you create a MaxCompute user group.
   * 
   * @example
   * dev_project
   */
  projectName?: string;
  /**
   * @remarks
   * The type of the user group. The following values are valid:
   * 
   * - 1: Alibaba Cloud user
   * 
   * - 2: RAM Role
   * 
   * - 3: MaxCompute Role
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userGroupType?: number;
  projects?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      projectName: 'ProjectName',
      userGroupType: 'UserGroupType',
      projects: 'projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      name: 'string',
      owner: 'string',
      projectName: 'string',
      userGroupType: 'number',
      projects: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgUserGroupAddOrUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * The user groups.
   * 
   * This parameter is required.
   */
  userGroups?: DsgUserGroupAddOrUpdateRequestUserGroups[];
  static names(): { [key: string]: string } {
    return {
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroups: { 'type': 'array', 'itemType': DsgUserGroupAddOrUpdateRequestUserGroups },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

