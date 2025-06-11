// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyTenantUserRolesResponseBodyTenantUserUserRole } from "./ModifyTenantUserRolesResponseBodyTenantUserUserRole";


export class ModifyTenantUserRolesResponseBodyTenantUser extends $dara.Model {
  /**
   * @example
   * t33h8y08k****
   */
  tenantId?: string;
  /**
   * @example
   * pay_test
   */
  userName?: string;
  /**
   * @remarks
   * The name of the database (MySQL mode) or schema (Oracle mode).
   * 
   * @example
   * 账号具备的数据库权限信息列表。
   */
  userRole?: ModifyTenantUserRolesResponseBodyTenantUserUserRole[];
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      userName: 'UserName',
      userRole: 'UserRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      userName: 'string',
      userRole: { 'type': 'array', 'itemType': ModifyTenantUserRolesResponseBodyTenantUserUserRole },
    };
  }

  validate() {
    if(Array.isArray(this.userRole)) {
      $dara.Model.validateArray(this.userRole);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

