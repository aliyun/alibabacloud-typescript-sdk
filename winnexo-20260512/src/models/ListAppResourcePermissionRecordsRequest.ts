// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppResourcePermissionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant filter for cross-tenant users.
   * 
   * @example
   * 10086
   */
  granteeId?: string;
  /**
   * @remarks
   * The permission filter.
   * 
   * @example
   * 10000
   */
  granteeTenantId?: string;
  /**
   * @remarks
   * The principal ID filter.
   * 
   * @example
   * USER
   */
  granteeType?: string;
  /**
   * @remarks
   * The number of items per page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The principal type filter.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The permission filter.
   */
  permissions?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * app.demo
   */
  resourceKeyPrefix?: string;
  /**
   * @remarks
   * The resource tenant ID. This parameter is fixed to APP_RESOURCE.
   * 
   * @example
   * 10000
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The application key or its subpath.
   * 
   * This parameter is required.
   * 
   * @example
   * APP_RESOURCE
   */
  resourceType?: string;
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
      granteeId: 'granteeId',
      granteeTenantId: 'granteeTenantId',
      granteeType: 'granteeType',
      page: 'page',
      pageSize: 'pageSize',
      permissions: 'permissions',
      resourceKeyPrefix: 'resourceKeyPrefix',
      resourceTenantId: 'resourceTenantId',
      resourceType: 'resourceType',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granteeId: 'string',
      granteeTenantId: 'string',
      granteeType: 'string',
      page: 'number',
      pageSize: 'number',
      permissions: { 'type': 'array', 'itemType': 'string' },
      resourceKeyPrefix: 'string',
      resourceTenantId: 'string',
      resourceType: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

