// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPermissionsRequestOption } from "./ListPermissionsRequestOption";
import { ListPermissionsRequestTenantContext } from "./ListPermissionsRequestTenantContext";


export class ListPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * KGZLxjv9VGkoG9YwHE5wx7k2V6EDybno
   */
  dentryUuid?: string;
  option?: ListPermissionsRequestOption;
  tenantContext?: ListPermissionsRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      option: 'Option',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      option: ListPermissionsRequestOption,
      tenantContext: ListPermissionsRequestTenantContext,
    };
  }

  validate() {
    if(this.option && typeof (this.option as any).validate === 'function') {
      (this.option as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

