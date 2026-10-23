// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAppResourcePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The permission to check.
   * 
   * This parameter is required.
   * 
   * @example
   * APP/VIEW
   */
  permission?: string;
  /**
   * @remarks
   * The dot-separated resource key. The first segment is the APP application key.
   * 
   * This parameter is required.
   * 
   * @example
   * app.demo.resource_1
   */
  resourceKey?: string;
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
   * The ID of the tenant to which the target user belongs. This parameter is required for cross-tenant targets.
   * 
   * @example
   * 10000
   */
  targetUserTenantId?: string;
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
      permission: 'permission',
      resourceKey: 'resourceKey',
      resourceTenantId: 'resourceTenantId',
      resourceType: 'resourceType',
      targetUserId: 'targetUserId',
      targetUserTenantId: 'targetUserTenantId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: 'string',
      resourceKey: 'string',
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

