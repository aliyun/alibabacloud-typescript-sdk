// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsertDropDownListRequestOptions } from "./InsertDropDownListRequestOptions";
import { InsertDropDownListRequestTenantContext } from "./InsertDropDownListRequestTenantContext";


export class InsertDropDownListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  options?: InsertDropDownListRequestOptions[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A3:C3
   */
  rangeAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Sheet1
   */
  sheetId?: string;
  tenantContext?: InsertDropDownListRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * stxxxx
   */
  workbookId?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'Options',
      rangeAddress: 'RangeAddress',
      sheetId: 'SheetId',
      tenantContext: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: { 'type': 'array', 'itemType': InsertDropDownListRequestOptions },
      rangeAddress: 'string',
      sheetId: 'string',
      tenantContext: InsertDropDownListRequestTenantContext,
      workbookId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
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

