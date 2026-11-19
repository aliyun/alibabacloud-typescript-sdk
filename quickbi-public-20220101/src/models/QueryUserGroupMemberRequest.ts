// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to search for the username or nickname of a user group member.
   * 
   * @example
   * Xiao Liu
   */
  keyword?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

