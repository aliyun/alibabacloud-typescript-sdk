// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserGroupListByParentIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the sub-user group was created.
   * 
   * @example
   * 2020-10-30 10:03:09
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the sub-user group. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * @example
   * 136516262323****
   */
  createUser?: string;
  /**
   * @remarks
   * Directory level of the sub-user group.
   */
  identifiedPath?: string;
  /**
   * @remarks
   * The time when the sub-user group was last modified.
   * 
   * @example
   * 2020-11-16 15:49:08
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The user who modified the subgroup. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * @example
   * 136516262323****
   */
  modifyUser?: string;
  /**
   * @remarks
   * The ID of the parent user group.
   * 
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  parentUserGroupId?: string;
  /**
   * @remarks
   * The description of the sub-user group.
   * 
   * @example
   * User Group for Testing
   */
  userGroupDescription?: string;
  /**
   * @remarks
   * The ID of the sub-user group.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the sub-user group.
   * 
   * @example
   * popapi test group
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      identifiedPath: 'IdentifiedPath',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      parentUserGroupId: 'ParentUserGroupId',
      userGroupDescription: 'UserGroupDescription',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      identifiedPath: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      parentUserGroupId: 'string',
      userGroupDescription: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

