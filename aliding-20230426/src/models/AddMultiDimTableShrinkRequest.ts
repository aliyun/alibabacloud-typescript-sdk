// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMultiDimTableShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * r1R7q3QmWew5lo02fxB7nxxxxxxxx
   */
  baseId?: string;
  fieldsShrink?: string;
  name?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      baseId: 'BaseId',
      fieldsShrink: 'Fields',
      name: 'Name',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseId: 'string',
      fieldsShrink: 'string',
      name: 'string',
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

