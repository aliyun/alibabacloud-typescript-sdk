// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertRowsBeforeShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
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
      tenantContextShrink: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: 'number',
      rowCount: 'number',
      sheetId: 'string',
      tenantContextShrink: 'string',
      workbookId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

