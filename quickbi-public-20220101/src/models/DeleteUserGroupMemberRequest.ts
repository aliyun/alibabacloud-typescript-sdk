// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e537****
   */
  userGroupId?: string;
  /**
   * @remarks
   * The user ID of the Quick BI.
   * 
   * This parameter is required.
   * 
   * @example
   * 2fe4fbd8****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

