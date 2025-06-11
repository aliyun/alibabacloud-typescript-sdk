// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyTenantUserStatusResponseBodyTenantUser } from "./ModifyTenantUserStatusResponseBodyTenantUser";


export class ModifyTenantUserStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Example 1
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  tenantUser?: ModifyTenantUserStatusResponseBodyTenantUser[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantUser: 'TenantUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantUser: { 'type': 'array', 'itemType': ModifyTenantUserStatusResponseBodyTenantUser },
    };
  }

  validate() {
    if(Array.isArray(this.tenantUser)) {
      $dara.Model.validateArray(this.tenantUser);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

