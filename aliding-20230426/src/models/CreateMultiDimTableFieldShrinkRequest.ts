// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultiDimTableFieldShrinkRequest extends $dara.Model {
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
  propertyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sheetIdOrName?: string;
  tenantContextShrink?: string;
  /**
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      name: 'Name',
      propertyShrink: 'Property',
      sheetIdOrName: 'SheetIdOrName',
      tenantContextShrink: 'TenantContext',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      name: 'string',
      propertyShrink: 'string',
      sheetIdOrName: 'string',
      tenantContextShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

