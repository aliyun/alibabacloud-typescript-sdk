// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRowsVisibilityRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRowsVisibilityRequest extends $dara.Model {
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
  tenantContext?: SetRowsVisibilityRequestTenantContext;
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
      tenantContext: 'TenantContext',
      visibility: 'Visibility',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: 'number',
      rowCount: 'number',
      sheetId: 'string',
      tenantContext: SetRowsVisibilityRequestTenantContext,
      visibility: 'string',
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

