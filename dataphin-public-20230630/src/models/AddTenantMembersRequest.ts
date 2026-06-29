// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTenantMembersRequestAddCommandUserList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1323241
   */
  id?: string;
  /**
   * @remarks
   * The list of roles. Valid values:
   * - SYSTEM_ADMIN
   * - DATASOURCE_MANAGER
   * - SECURITY_ADMIN
   * - QUALITY_MANAGER
   * - EXPORT_ADMIN
   * - DATA_STANDARD_MANAGER
   * - LABELS_BUSINESS_PLANNER
   * - BUSINESS_MEMBER.
   */
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
   * The list of members.
   * 
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
   * The request command.
   * 
   * This parameter is required.
   */
  addCommand?: AddTenantMembersRequestAddCommand;
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

