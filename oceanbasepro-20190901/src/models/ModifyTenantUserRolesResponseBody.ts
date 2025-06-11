// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyTenantUserRolesResponseBodyTenantUser } from "./ModifyTenantUserRolesResponseBodyTenantUser";


export class ModifyTenantUserRolesResponseBody extends $dara.Model {
  /**
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   */
  tenantUser?: ModifyTenantUserRolesResponseBodyTenantUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantUser: 'TenantUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantUser: ModifyTenantUserRolesResponseBodyTenantUser,
    };
  }

  validate() {
    if(this.tenantUser && typeof (this.tenantUser as any).validate === 'function') {
      (this.tenantUser as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

