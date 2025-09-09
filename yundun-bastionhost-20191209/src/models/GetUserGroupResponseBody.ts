// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserGroupResponseBodyUserGroup extends $dara.Model {
  /**
   * @remarks
   * The description of the user group.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * 1
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * UserGroup01
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
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

export class GetUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the user group returned.
   */
  userGroup?: GetUserGroupResponseBodyUserGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroup: GetUserGroupResponseBodyUserGroup,
    };
  }

  validate() {
    if(this.userGroup && typeof (this.userGroup as any).validate === 'function') {
      (this.userGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

