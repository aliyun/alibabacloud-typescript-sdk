// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddProjectMemberRequestAddCommandUserList extends $dara.Model {
  /**
   * @remarks
   * The list of role codes for members. System and custom project roles are supported and can be obtained from ListProjectRoles. Only one role is supported. If this parameter is not empty, it takes precedence over RoleList. You must specify at least one of RoleList and RoleCodeList.
   */
  roleCodeList?: string[];
  /**
   * @remarks
   * The member role. Valid values: 1 (Project administrator), 2 (Developer), 3 (Guest), 4 (Analyst), and 5 (O&M engineer).
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

export class AddProjectMemberRequestAddCommand extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values: DEV and PROD.
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
  userList?: AddProjectMemberRequestAddCommandUserList[];
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      userList: { 'type': 'array', 'itemType': AddProjectMemberRequestAddCommandUserList },
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

export class AddProjectMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The command to add members.
   * 
   * This parameter is required.
   */
  addCommand?: AddProjectMemberRequestAddCommand;
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
   * The operator user ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      addCommand: 'AddCommand',
      id: 'Id',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommand: AddProjectMemberRequestAddCommand,
      id: 'number',
      opTenantId: 'number',
      opUserId: 'string',
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

