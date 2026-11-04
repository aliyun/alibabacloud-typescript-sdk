// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveFaceUserFromUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The isolation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TestIsolationId
   */
  isolationId?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TestUserGroupId
   */
  userGroupId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TestUserId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userGroupId: 'UserGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
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

