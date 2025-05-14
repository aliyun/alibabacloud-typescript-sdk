// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsertRowsBeforeRequestTenantContext } from "./InsertRowsBeforeRequestTenantContext";


export class InsertRowsBeforeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  row?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  rowCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Sheet1
   */
  sheetId?: string;
  tenantContext?: InsertRowsBeforeRequestTenantContext;
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
      row: 'Row',
      rowCount: 'RowCount',
      sheetId: 'SheetId',
      tenantContext: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: 'number',
      rowCount: 'number',
      sheetId: 'string',
      tenantContext: InsertRowsBeforeRequestTenantContext,
      workbookId: 'string',
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

