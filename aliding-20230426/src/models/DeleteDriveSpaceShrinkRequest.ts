// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDriveSpaceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  spaceId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
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

