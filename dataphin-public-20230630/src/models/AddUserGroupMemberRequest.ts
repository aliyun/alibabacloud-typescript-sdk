// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserGroupMemberRequestAddCommand extends $dara.Model {
  /**
   * @remarks
   * The user group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 132331
   */
  userGroupId?: string;
  /**
   * @remarks
   * The list of user IDs.
   */
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The command to add user group members.
   */
  addCommand?: AddUserGroupMemberRequestAddCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      addCommand: 'AddCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommand: AddUserGroupMemberRequestAddCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.addCommand && typeof (this.addCommand as any).validate === 'function') {
      (this.addCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

