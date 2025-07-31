// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectMemberRequestUpdateCommandUserList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  roleList?: number[];
  /**
   * @remarks
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

export class UpdateProjectMemberRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 711833
   */
  id?: number;
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
  updateCommand?: UpdateProjectMemberRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
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

