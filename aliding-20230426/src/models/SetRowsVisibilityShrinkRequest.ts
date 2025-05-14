// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRowsVisibilityShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  row?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
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
   * hidden
   */
  visibility?: string;
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
      visibility: 'Visibility',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: 'number',
      rowCount: 'number',
      sheetId: 'string',
      tenantContextShrink: 'string',
      visibility: 'string',
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

