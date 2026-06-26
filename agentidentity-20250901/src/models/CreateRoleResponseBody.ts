// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoleResponseBodyRole extends $dara.Model {
  createTime?: string;
  description?: string;
  roleId?: string;
  roleName?: string;
  type?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      roleId: 'RoleId',
      roleName: 'RoleName',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      roleId: 'string',
      roleName: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBody extends $dara.Model {
  requestId?: string;
  role?: CreateRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: CreateRoleResponseBodyRole,
    };
  }

  validate() {
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

