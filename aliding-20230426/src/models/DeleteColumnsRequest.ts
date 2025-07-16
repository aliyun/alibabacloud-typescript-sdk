// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteColumnsRequestTenantContext extends $dara.Model {
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

export class DeleteColumnsRequest extends $dara.Model {
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
   * 10
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
  tenantContext?: DeleteColumnsRequestTenantContext;
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
      tenantContext: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'number',
      columnCount: 'number',
      sheetId: 'string',
      tenantContext: DeleteColumnsRequestTenantContext,
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

