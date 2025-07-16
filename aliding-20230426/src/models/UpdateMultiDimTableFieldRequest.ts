// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMultiDimTableFieldRequestTenantContext extends $dara.Model {
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

export class UpdateMultiDimTableFieldRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * r1R7q3QmWew5lo02fxB7noNyJxxxxxx
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
  name?: string;
  property?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  sheetIdOrName?: string;
  tenantContext?: UpdateMultiDimTableFieldRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      fieldIdOrName: 'FieldIdOrName',
      name: 'Name',
      property: 'Property',
      sheetIdOrName: 'SheetIdOrName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      fieldIdOrName: 'string',
      name: 'string',
      property: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sheetIdOrName: 'string',
      tenantContext: UpdateMultiDimTableFieldRequestTenantContext,
    };
  }

  validate() {
    if(this.property) {
      $dara.Model.validateMap(this.property);
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

