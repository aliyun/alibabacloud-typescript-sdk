// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsertMultiDimTableRecordRequestRecords } from "./InsertMultiDimTableRecordRequestRecords";
import { InsertMultiDimTableRecordRequestTenantContext } from "./InsertMultiDimTableRecordRequestTenantContext";


export class InsertMultiDimTableRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * r1R7q3QmWew5lo02fxB7nxxxxxxxx
   */
  baseId?: string;
  records?: InsertMultiDimTableRecordRequestRecords[];
  sheetIdOrName?: string;
  tenantContext?: InsertMultiDimTableRecordRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      records: 'Records',
      sheetIdOrName: 'SheetIdOrName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      records: { 'type': 'array', 'itemType': InsertMultiDimTableRecordRequestRecords },
      sheetIdOrName: 'string',
      tenantContext: InsertMultiDimTableRecordRequestTenantContext,
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

