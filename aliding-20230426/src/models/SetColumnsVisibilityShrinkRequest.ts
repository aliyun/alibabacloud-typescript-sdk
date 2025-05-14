// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetColumnsVisibilityShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  column?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  columnCount?: number;
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
      column: 'Column',
      columnCount: 'ColumnCount',
      sheetId: 'SheetId',
      tenantContextShrink: 'TenantContext',
      visibility: 'Visibility',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'number',
      columnCount: 'number',
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

