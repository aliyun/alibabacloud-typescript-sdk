// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterAppResourcePermissionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The batch authorization item.
   * 
   * This parameter is required.
   */
  itemsShrink?: string;
  /**
   * @remarks
   * The batch authorization item.
   * 
   * @example
   * 10000
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs. If omitted, the current tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      itemsShrink: 'items',
      resourceTenantId: 'resourceTenantId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemsShrink: 'string',
      resourceTenantId: 'string',
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

