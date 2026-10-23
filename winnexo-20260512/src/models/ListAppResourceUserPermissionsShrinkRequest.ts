// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppResourceUserPermissionsShrinkRequest extends $dara.Model {
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
   * The permission points to filter.
   */
  permissionsShrink?: string;
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
   * The ID of the tenant to which the resource belongs. If you do not specify this parameter, the current tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The resource type. Set the value to APP_RESOURCE.
   * 
   * This parameter is required.
   * 
   * @example
   * APP_RESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the target platform user.
   * 
   * @example
   * 10086
   */
  targetUserId?: number;
  /**
   * @remarks
   * The tenant to which the target user belongs. This parameter is required for cross-tenant targets.
   * 
   * @example
   * 10000
   */
  targetUserTenantId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If you do not specify this parameter, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'pageSize',
      permissionsShrink: 'permissions',
      resourceKeyPrefix: 'resourceKeyPrefix',
      resourceTenantId: 'resourceTenantId',
      resourceType: 'resourceType',
      targetUserId: 'targetUserId',
      targetUserTenantId: 'targetUserTenantId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      permissionsShrink: 'string',
      resourceKeyPrefix: 'string',
      resourceTenantId: 'string',
      resourceType: 'string',
      targetUserId: 'number',
      targetUserTenantId: 'string',
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

