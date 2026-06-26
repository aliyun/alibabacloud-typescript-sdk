// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoleAssignmentResponseBodyRoleAssignment extends $dara.Model {
  createTime?: string;
  principalId?: string;
  principalName?: string;
  principalType?: string;
  roleId?: string;
  roleName?: string;
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

