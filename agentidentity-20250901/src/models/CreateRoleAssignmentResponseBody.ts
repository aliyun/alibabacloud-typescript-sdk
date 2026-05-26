// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoleAssignmentResponseBodyRoleAssignment extends $dara.Model {
  /**
   * @example
   * 2026-05-07T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * user_xxxxxxxxxxxxxxxxxxxx
   */
  principalId?: string;
  /**
   * @example
   * alice
   */
  principalName?: string;
  /**
   * @example
   * User
   */
  principalType?: string;
  /**
   * @example
   * role_xxxxxxxxxxxxxxxxxxxx
   */
  roleId?: string;
  /**
   * @example
   * Analyst
   */
  roleName?: string;
  /**
   * @example
   * up_xxxxxxxxxxxxxxxxxxxx
   */
  userPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      roleId: 'RoleId',
      roleName: 'RoleName',
      userPoolId: 'UserPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      roleId: 'string',
      roleName: 'string',
      userPoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleAssignmentResponseBody extends $dara.Model {
  /**
   * @example
   * AABD6E03-4B3A-5687-88FF-72232670ED0C
   */
  requestId?: string;
  roleAssignment?: CreateRoleAssignmentResponseBodyRoleAssignment;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roleAssignment: 'RoleAssignment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roleAssignment: CreateRoleAssignmentResponseBodyRoleAssignment,
    };
  }

  validate() {
    if(this.roleAssignment && typeof (this.roleAssignment as any).validate === 'function') {
      (this.roleAssignment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

