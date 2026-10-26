// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * Keyword for the username or nickname of the user group member.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * User group ID.
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

