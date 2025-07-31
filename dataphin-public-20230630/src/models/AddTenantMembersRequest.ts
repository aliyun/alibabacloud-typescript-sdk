// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTenantMembersRequestAddCommandUserList extends $dara.Model {
  /**
   * @example
   * 1323241
   */
  id?: string;
  roleList?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      roleList: 'RoleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      roleList: { 'type': 'array', 'itemType': 'string' },
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

export class AddTenantMembersRequestAddCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userList?: AddTenantMembersRequestAddCommandUserList[];
  static names(): { [key: string]: string } {
    return {
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userList: { 'type': 'array', 'itemType': AddTenantMembersRequestAddCommandUserList },
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

export class AddTenantMembersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addCommand?: AddTenantMembersRequestAddCommand;
  /**
   * @remarks
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
      addCommand: AddTenantMembersRequestAddCommand,
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

