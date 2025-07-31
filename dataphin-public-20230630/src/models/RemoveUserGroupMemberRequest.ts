// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserGroupMemberRequestRemoveCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2311
   */
  userGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class RemoveUserGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  removeCommand?: RemoveUserGroupMemberRequestRemoveCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      removeCommand: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      removeCommand: RemoveUserGroupMemberRequestRemoveCommand,
    };
  }

  validate() {
    if(this.removeCommand && typeof (this.removeCommand as any).validate === 'function') {
      (this.removeCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

