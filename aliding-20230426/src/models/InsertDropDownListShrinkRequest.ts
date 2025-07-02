// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertDropDownListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  optionsShrink?: string;
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
      optionsShrink: 'Options',
      rangeAddress: 'RangeAddress',
      sheetId: 'SheetId',
      tenantContextShrink: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionsShrink: 'string',
      rangeAddress: 'string',
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

