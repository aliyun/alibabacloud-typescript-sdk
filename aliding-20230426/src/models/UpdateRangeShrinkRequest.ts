// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRangeShrinkRequest extends $dara.Model {
  /**
   * @example
   * [["#ff0000","#ff0000","#ff0000"]]
   */
  backgroundColorsShrink?: string;
  /**
   * @example
   * [["type": "path","link": "https://www.dingtalk.com","text": "test"]]
   */
  hyperlinksShrink?: string;
  /**
   * @example
   * General
   */
  numberFormat?: string;
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
   * @example
   * [["1","2","3"]]
   */
  valuesShrink?: string;
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
      backgroundColorsShrink: 'BackgroundColors',
      hyperlinksShrink: 'Hyperlinks',
      numberFormat: 'NumberFormat',
      rangeAddress: 'RangeAddress',
      sheetId: 'SheetId',
      tenantContextShrink: 'TenantContext',
      valuesShrink: 'Values',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundColorsShrink: 'string',
      hyperlinksShrink: 'string',
      numberFormat: 'string',
      rangeAddress: 'string',
      sheetId: 'string',
      tenantContextShrink: 'string',
      valuesShrink: 'string',
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

