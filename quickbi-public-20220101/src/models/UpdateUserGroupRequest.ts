// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * Description
   */
  userGroupDescription?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * *   Format verification: Maximum length 255
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * pop0001
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupDescription: 'UserGroupDescription',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

