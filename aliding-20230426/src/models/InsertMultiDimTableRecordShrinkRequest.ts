// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertMultiDimTableRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * r1R7q3QmWew5lo02fxB7nxxxxxxxx
   */
  baseId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sheetIdOrName?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      recordsShrink: 'Records',
      sheetIdOrName: 'SheetIdOrName',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      recordsShrink: 'string',
      sheetIdOrName: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

