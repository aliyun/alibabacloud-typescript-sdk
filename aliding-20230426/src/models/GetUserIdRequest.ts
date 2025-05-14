// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserIdRequestTenantContext } from "./GetUserIdRequestTenantContext";


export class GetUserIdRequest extends $dara.Model {
  tenantContext?: GetUserIdRequestTenantContext;
  /**
   * @remarks
   * unionId
   * 
   * @example
   * ****iE
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetUserIdRequestTenantContext,
      unionId: 'string',
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

