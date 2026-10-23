// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppResourcePermissionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The grantee ID filter.
   * 
   * @example
   * 10086
   */
  granteeId?: string;
  /**
   * @remarks
   * The tenant ID filter for cross-tenant users.
   * 
   * @example
   * 10000
   */
  granteeTenantId?: string;
  /**
   * @remarks
   * The grantee type filter.
   * 
   * @example
   * USER
   */
  granteeType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The application key or its subpath.
   * 
   * This parameter is required.
   * 
   * @example
   * app.demo
   */
  resourceKeyPrefix?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs. If not specified, the current tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The resource type. Set this parameter to APP_RESOURCE.
   * 
   * This parameter is required.
   * 
   * @example
   * APP_RESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
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

