// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAppResourcePermissionsBatchRequestChecks extends $dara.Model {
  /**
   * @remarks
   * The target permission.
   * 
   * This parameter is required.
   * 
   * @example
   * APP/VIEW
   */
  permission?: string;
  /**
   * @remarks
   * The dot-separated resource key whose first segment is the APP application key.
   * 
   * This parameter is required.
   * 
   * @example
   * app.demo.resource_1
   */
  resourceKey?: string;
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
  static names(): { [key: string]: string } {
    return {
      permission: 'permission',
      resourceKey: 'resourceKey',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: 'string',
      resourceKey: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAppResourcePermissionsBatchRequest extends $dara.Model {
  /**
   * @remarks
   * The check items.
   * 
   * This parameter is required.
   */
  checks?: CheckAppResourcePermissionsBatchRequestChecks[];
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
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      checks: 'checks',
      resourceTenantId: 'resourceTenantId',
      targetUserId: 'targetUserId',
      targetUserTenantId: 'targetUserTenantId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checks: { 'type': 'array', 'itemType': CheckAppResourcePermissionsBatchRequestChecks },
      resourceTenantId: 'string',
      targetUserId: 'number',
      targetUserTenantId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checks)) {
      $dara.Model.validateArray(this.checks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

