// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterAppResourcePermissionsRequestItemsGrantees extends $dara.Model {
  /**
   * @remarks
   * The principal ID. Omit this parameter for ALL_USERS.
   * 
   * @example
   * 10086
   */
  granteeId?: string;
  /**
   * @remarks
   * The tenant to which the cross-tenant USER belongs.
   * 
   * @example
   * 10000
   */
  granteeTenantId?: string;
  /**
   * @remarks
   * The principal type.
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  granteeType?: string;
  static names(): { [key: string]: string } {
    return {
      granteeId: 'granteeId',
      granteeTenantId: 'granteeTenantId',
      granteeType: 'granteeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granteeId: 'string',
      granteeTenantId: 'string',
      granteeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAppResourcePermissionsRequestItems extends $dara.Model {
  /**
   * @remarks
   * The expiration time with a time zone. If omitted, the permissions never expire.
   * 
   * @example
   * 2026-12-31T23:59:59+08:00
   */
  expireAt?: string;
  /**
   * @remarks
   * The authorized principals.
   * 
   * This parameter is required.
   */
  grantees?: RegisterAppResourcePermissionsRequestItemsGrantees[];
  /**
   * @remarks
   * The granted permissions.
   * 
   * This parameter is required.
   */
  permissions?: string[];
  /**
   * @remarks
   * The dot-separated resource key with the first segment as the APP application key.
   * 
   * This parameter is required.
   * 
   * @example
   * app.demo.resource_1
   */
  resourceKey?: string;
  /**
   * @remarks
   * The resource type. Fixed to APP_RESOURCE.
   * 
   * This parameter is required.
   * 
   * @example
   * APP_RESOURCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      expireAt: 'expireAt',
      grantees: 'grantees',
      permissions: 'permissions',
      resourceKey: 'resourceKey',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      grantees: { 'type': 'array', 'itemType': RegisterAppResourcePermissionsRequestItemsGrantees },
      permissions: { 'type': 'array', 'itemType': 'string' },
      resourceKey: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.grantees)) {
      $dara.Model.validateArray(this.grantees);
    }
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAppResourcePermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The batch authorization item.
   * 
   * This parameter is required.
   */
  items?: RegisterAppResourcePermissionsRequestItems[];
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
      items: 'items',
      resourceTenantId: 'resourceTenantId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': RegisterAppResourcePermissionsRequestItems },
      resourceTenantId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

