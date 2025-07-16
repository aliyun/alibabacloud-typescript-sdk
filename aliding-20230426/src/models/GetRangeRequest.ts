// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRangeRequestTenantContext extends $dara.Model {
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

export class GetRangeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A3:C3
   */
  rangeAddress?: string;
  /**
   * @example
   * values
   */
  select?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Sheet1
   */
  sheetId?: string;
  tenantContext?: GetRangeRequestTenantContext;
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
      rangeAddress: 'RangeAddress',
      select: 'Select',
      sheetId: 'SheetId',
      tenantContext: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rangeAddress: 'string',
      select: 'string',
      sheetId: 'string',
      tenantContext: GetRangeRequestTenantContext,
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

