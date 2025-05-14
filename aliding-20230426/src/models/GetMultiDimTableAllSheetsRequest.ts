// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultiDimTableAllSheetsRequestTenantContext } from "./GetMultiDimTableAllSheetsRequestTenantContext";


export class GetMultiDimTableAllSheetsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 144972
   */
  baseId?: string;
  tenantContext?: GetMultiDimTableAllSheetsRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      tenantContext: GetMultiDimTableAllSheetsRequestTenantContext,
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

