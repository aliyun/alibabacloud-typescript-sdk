// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddProjectMemberRequestAddCommandUserList extends $dara.Model {
  /**
   * @remarks
   * The member role. Valid values: 1: project administrator. 2: developer. 3: visitor. 4: analyst. 5: O&M engineer.
   * 
   * This parameter is required.
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
      roleList: 'RoleList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
    };
  }

  validate() {
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
   * The list of user members.
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
  static names(): { [key: string]: string } {
    return {
      addCommand: 'AddCommand',
      id: 'Id',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommand: AddProjectMemberRequestAddCommand,
      id: 'number',
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

