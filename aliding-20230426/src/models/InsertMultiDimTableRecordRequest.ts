// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertMultiDimTableRecordRequestRecords extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.fields) {
      $dara.Model.validateMap(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertMultiDimTableRecordRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
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

export class InsertMultiDimTableRecordRequest extends $dara.Model {
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
  records?: InsertMultiDimTableRecordRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   */
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

