// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantResponseBodyTenant } from "./DescribeTenantResponseBodyTenant";


export class DescribeTenantResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the tenant.
   */
  tenant?: DescribeTenantResponseBodyTenant;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenant: 'Tenant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenant: DescribeTenantResponseBodyTenant,
    };
  }

  validate() {
    if(this.tenant && typeof (this.tenant as any).validate === 'function') {
      (this.tenant as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

