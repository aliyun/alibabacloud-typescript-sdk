// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMultiDimTableRecordsRequestRecordIds } from "./UpdateMultiDimTableRecordsRequestRecordIds";
import { UpdateMultiDimTableRecordsRequestTenantContext } from "./UpdateMultiDimTableRecordsRequestTenantContext";


export class UpdateMultiDimTableRecordsRequest extends $dara.Model {
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
  recordIds?: UpdateMultiDimTableRecordsRequestRecordIds[];
  /**
   * @remarks
   * This parameter is required.
   */
  sheetIdOrName?: string;
  tenantContext?: UpdateMultiDimTableRecordsRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      recordIds: 'RecordIds',
      sheetIdOrName: 'SheetIdOrName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      recordIds: { 'type': 'array', 'itemType': UpdateMultiDimTableRecordsRequestRecordIds },
      sheetIdOrName: 'string',
      tenantContext: UpdateMultiDimTableRecordsRequestTenantContext,
    };
  }

  validate() {
    if(Array.isArray(this.recordIds)) {
      $dara.Model.validateArray(this.recordIds);
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

