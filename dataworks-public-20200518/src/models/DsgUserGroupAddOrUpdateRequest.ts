// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUserGroupAddOrUpdateRequestUserGroups extends $dara.Model {
  /**
   * @remarks
   * The users in the group.
   * 
   * *   If a user group is created by using an Alibaba Cloud account and a RAM role, you can call the [DsgUserGroupQueryUserList](https://help.aliyun.com/document_detail/2786445.html) operation to query the users in the group.
   * *   If a user group is created by using a MaxCompute role, you can call the [DsgUserGroupQueryUserList](https://help.aliyun.com/document_detail/2785695.html) operation to query the users in the group.
   * 
   * This parameter is required.
   */
  accounts?: string[];
  /**
   * @remarks
   * The user group ID.
   * 
   * *   If you do not configure this parameter, the current operation is to add a user group.
   * *   If you configure this parameter, the current operation is to modify a user group. You can call the [DsgUserGroupQueryList](https://help.aliyun.com/document_detail/2786441.html) operation to query the user group ID.
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
   * The name of the MaxCompute project. You must configure this parameter when you create a MaxCompute user group.
   * 
   * @example
   * dev_project
   */
  projectName?: string;
  /**
   * @remarks
   * The type of the user group. Valid values:
   * 
   * *   1: Alibaba Cloud account
   * *   2: RAM role
   * *   3: MaxCompute role
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userGroupType?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      projectName: 'ProjectName',
      userGroupType: 'UserGroupType',
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
   * The information about the user group.
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

