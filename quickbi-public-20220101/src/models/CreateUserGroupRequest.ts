// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the parent user group. You can add new user groups to this group:
   * 
   * *   If you enter the ID of a parent user group, the new user group is added to the user group with the ID.
   * *   If you enter -1, the new user group is added to the root directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  parentUserGroupId?: string;
  /**
   * @remarks
   * The description of the user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * User group description
   */
  userGroupDescription?: string;
  /**
   * @remarks
   * The unique ID of the user group.
   * 
   * *   If you specify the UserGroupId parameter, the system automatically generates the UserGroupId parameter. If you specify the UserGroupId parameter, the user ID is used as the user group ID. You must ensure that the user ID is unique within the organization.
   * *   Format verification: Maximum length 64, cannot be -1,
   * 
   * @example
   * pop0001
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou Financial Report
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      parentUserGroupId: 'ParentUserGroupId',
      userGroupDescription: 'UserGroupDescription',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

