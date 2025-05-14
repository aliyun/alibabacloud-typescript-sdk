// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultiDimTableRecordRequestTenantContext } from "./GetMultiDimTableRecordRequestTenantContext";


export class GetMultiDimTableRecordRequest extends $dara.Model {
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
  tenantContext?: GetMultiDimTableRecordRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      recordId: 'RecordId',
      sheetIdOrName: 'SheetIdOrName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      recordId: 'string',
      sheetIdOrName: 'string',
      tenantContext: GetMultiDimTableRecordRequestTenantContext,
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

