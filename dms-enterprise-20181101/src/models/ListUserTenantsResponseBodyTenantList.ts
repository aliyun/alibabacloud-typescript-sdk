// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserTenantsResponseBodyTenantList extends $dara.Model {
  /**
   * @remarks
   * The status of the tenant. Valid values:
   * 
   * *   **ACTIVE**: The tenant is used to access DMS.
   * *   **IN_ACTIVE**: The tenant is not used.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * test_name
   */
  tenantName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      tenantName: 'TenantName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      tenantName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

