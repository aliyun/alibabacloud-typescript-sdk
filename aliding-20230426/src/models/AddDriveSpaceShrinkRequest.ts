// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDriveSpaceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

