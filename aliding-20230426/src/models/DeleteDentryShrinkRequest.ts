// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDentryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b9XJlZ44W3NeDGyA
   */
  dentryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nb9XJx4EPx16QGyA
   */
  spaceId?: string;
  tenantContextShrink?: string;
  toRecycleBin?: boolean;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      spaceId: 'SpaceId',
      tenantContextShrink: 'TenantContext',
      toRecycleBin: 'ToRecycleBin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'string',
      spaceId: 'string',
      tenantContextShrink: 'string',
      toRecycleBin: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

