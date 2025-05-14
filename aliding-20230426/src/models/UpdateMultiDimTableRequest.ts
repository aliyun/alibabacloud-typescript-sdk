// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMultiDimTableRequestTenantContext } from "./UpdateMultiDimTableRequestTenantContext";


export class UpdateMultiDimTableRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * r1R7q3QmWew5lo02fxB7noNyJxxxxxx
   */
  baseId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sheetIdOrName?: string;
  tenantContext?: UpdateMultiDimTableRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      name: 'Name',
      sheetIdOrName: 'SheetIdOrName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      name: 'string',
      sheetIdOrName: 'string',
      tenantContext: UpdateMultiDimTableRequestTenantContext,
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

