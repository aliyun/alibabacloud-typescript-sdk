// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTenantConfigResponseBodyTenantConfigModel } from "./ListTenantConfigResponseBodyTenantConfigModel";


export class ListTenantConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The user configurations.
   */
  tenantConfigModel?: ListTenantConfigResponseBodyTenantConfigModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantConfigModel: 'TenantConfigModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantConfigModel: ListTenantConfigResponseBodyTenantConfigModel,
    };
  }

  validate() {
    if(this.tenantConfigModel && typeof (this.tenantConfigModel as any).validate === 'function') {
      (this.tenantConfigModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

