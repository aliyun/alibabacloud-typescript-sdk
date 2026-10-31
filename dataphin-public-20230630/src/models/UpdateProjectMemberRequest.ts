// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectMemberRequestUpdateCommandUserList extends $dara.Model {
  /**
   * @remarks
   * The list of role codes for the member. Supports system and custom project roles obtained from ListProjectRoles. Only one role is supported. If this list is not empty, it takes precedence over RoleList. You must specify at least one of RoleList and RoleCodeList.
   */
  roleCodeList?: string[];
  /**
   * @remarks
   * The member role. Valid values: 1: project administrator. 2: developer. 3: guest. 4: analyst. 5: O&M engineer.
   */
  roleList?: number[];
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30012011
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      roleCodeList: 'RoleCodeList',
      roleList: 'RoleList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleCodeList: { 'type': 'array', 'itemType': 'string' },
      roleList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roleCodeList)) {
      $dara.Model.validateArray(this.roleCodeList);
    }
    if(Array.isArray(this.roleList)) {
      $dara.Model.validateArray(this.roleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectMemberRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The environment identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The user members.
   * 
   * This parameter is required.
   */
  userList?: UpdateProjectMemberRequestUpdateCommandUserList[];
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      userList: { 'type': 'array', 'itemType': UpdateProjectMemberRequestUpdateCommandUserList },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 711833
   */
  id?: number;
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
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateProjectMemberRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateProjectMemberRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

