// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMultiDimTableFieldRequestTenantContext } from "./CreateMultiDimTableFieldRequestTenantContext";


export class CreateMultiDimTableFieldRequest extends $dara.Model {
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
  name?: string;
  property?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  sheetIdOrName?: string;
  tenantContext?: CreateMultiDimTableFieldRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      name: 'Name',
      property: 'Property',
      sheetIdOrName: 'SheetIdOrName',
      tenantContext: 'TenantContext',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      name: 'string',
      property: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sheetIdOrName: 'string',
      tenantContext: CreateMultiDimTableFieldRequestTenantContext,
      type: 'string',
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

