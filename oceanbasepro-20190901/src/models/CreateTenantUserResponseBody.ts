// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTenantUserResponseBodyTenantUser } from "./CreateTenantUserResponseBodyTenantUser";


export class CreateTenantUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The list of database accounts in the tenant.
   */
  tenantUser?: CreateTenantUserResponseBodyTenantUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantUser: 'TenantUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantUser: CreateTenantUserResponseBodyTenantUser,
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

