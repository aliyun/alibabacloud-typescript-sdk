// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRangeRequestHyperlinks } from "./UpdateRangeRequestHyperlinks";
import { UpdateRangeRequestTenantContext } from "./UpdateRangeRequestTenantContext";


export class UpdateRangeRequest extends $dara.Model {
  /**
   * @example
   * [["#ff0000","#ff0000","#ff0000"]]
   */
  backgroundColors?: string[][];
  /**
   * @example
   * [["type": "path","link": "https://www.dingtalk.com","text": "test"]]
   */
  hyperlinks?: UpdateRangeRequestHyperlinks[][];
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
  tenantContext?: UpdateRangeRequestTenantContext;
  /**
   * @example
   * [["1","2","3"]]
   */
  values?: string[][];
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
      backgroundColors: 'BackgroundColors',
      hyperlinks: 'Hyperlinks',
      numberFormat: 'NumberFormat',
      rangeAddress: 'RangeAddress',
      sheetId: 'SheetId',
      tenantContext: 'TenantContext',
      values: 'Values',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundColors: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      hyperlinks: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': UpdateRangeRequestHyperlinks } },
      numberFormat: 'string',
      rangeAddress: 'string',
      sheetId: 'string',
      tenantContext: UpdateRangeRequestTenantContext,
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      workbookId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backgroundColors)) {
      $dara.Model.validateArray(this.backgroundColors);
    }
    if(Array.isArray(this.hyperlinks)) {
      $dara.Model.validateArray(this.hyperlinks);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

