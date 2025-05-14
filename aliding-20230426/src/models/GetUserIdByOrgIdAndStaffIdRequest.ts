// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserIdByOrgIdAndStaffIdRequestTenantContext } from "./GetUserIdByOrgIdAndStaffIdRequestTenantContext";


export class GetUserIdByOrgIdAndStaffIdRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  orgId?: number;
  tenantContext?: GetUserIdByOrgIdAndStaffIdRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'number',
      tenantContext: GetUserIdByOrgIdAndStaffIdRequestTenantContext,
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

