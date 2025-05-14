// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultiDimTableSheetRequestTenantContext } from "./GetMultiDimTableSheetRequestTenantContext";


export class GetMultiDimTableSheetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 169899
   */
  baseId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  sheetIdOrName?: string;
  tenantContext?: GetMultiDimTableSheetRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      sheetIdOrName: 'SheetIdOrName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      sheetIdOrName: 'string',
      tenantContext: GetMultiDimTableSheetRequestTenantContext,
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

