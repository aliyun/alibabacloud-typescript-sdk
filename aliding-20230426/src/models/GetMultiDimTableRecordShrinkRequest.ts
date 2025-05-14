// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiDimTableRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101114
   */
  baseId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  recordId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  sheetIdOrName?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      recordId: 'RecordId',
      sheetIdOrName: 'SheetIdOrName',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      recordId: 'string',
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

