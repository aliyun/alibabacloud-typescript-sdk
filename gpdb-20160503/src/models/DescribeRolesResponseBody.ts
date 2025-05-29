// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRolesResponseBodyRoleList } from "./DescribeRolesResponseBodyRoleList";


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

