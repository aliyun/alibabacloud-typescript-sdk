// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMultiDimTableFieldRequestTenantContext extends $dara.Model {
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

export class DeleteMultiDimTableFieldRequest extends $dara.Model {
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
  fieldIdOrName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sheetIdOrName?: string;
  tenantContext?: DeleteMultiDimTableFieldRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      fieldIdOrName: 'FieldIdOrName',
      sheetIdOrName: 'SheetIdOrName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      fieldIdOrName: 'string',
      sheetIdOrName: 'string',
      tenantContext: DeleteMultiDimTableFieldRequestTenantContext,
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

