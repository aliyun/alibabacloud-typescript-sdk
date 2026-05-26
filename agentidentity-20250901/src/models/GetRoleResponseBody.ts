// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoleResponseBodyRole extends $dara.Model {
  /**
   * @example
   * 2026-05-07T06:19:17Z
   */
  createTime?: string;
  description?: string;
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
   * Manual
   */
  type?: string;
  /**
   * @example
   * 2026-05-07T06:19:17Z
   */
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

export class GetRoleResponseBody extends $dara.Model {
  /**
   * @example
   * AABD6E03-4B3A-5687-88FF-72232670ED0C
   */
  requestId?: string;
  role?: GetRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: GetRoleResponseBodyRole,
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

