// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRolesResponseBodyRoleList extends $dara.Model {
  role?: string[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.role)) {
      $dara.Model.validateArray(this.role);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The roles.
   */
  roleList?: DescribeRolesResponseBodyRoleList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roleList: 'RoleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roleList: DescribeRolesResponseBodyRoleList,
    };
  }

  validate() {
    if(this.roleList && typeof (this.roleList as any).validate === 'function') {
      (this.roleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

