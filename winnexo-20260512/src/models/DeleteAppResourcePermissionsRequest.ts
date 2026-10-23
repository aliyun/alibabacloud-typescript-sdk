// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppResourcePermissionsRequestItems extends $dara.Model {
  /**
   * @remarks
   * The list of grantee principal IDs.
   */
  granteeIds?: string[];
  /**
   * @remarks
   * The ID of the tenant to which the grantee user belongs. This parameter is optional if the user and the resource belong to the same tenant, and is required for cross-tenant users.
   * 
   * @example
   * 10000
   */
  granteeTenantId?: string;
  /**
   * @remarks
   * The grantee principal type.
   * 
   * @example
   * USER
   */
  granteeType?: string;
  /**
   * @remarks
   * Specifies whether to include dot-separated descendant resources for the RESOURCE. Default value: false.
   * 
   * @example
   * false
   */
  includeDescendants?: boolean;
  /**
   * @remarks
   * The dot-separated resource key whose first segment is the application key of the APP.
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
  /**
   * @remarks
   * The deletion scope: by resource or by principal.
   * 
   * This parameter is required.
   * 
   * @example
   * RESOURCE
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      granteeIds: 'granteeIds',
      granteeTenantId: 'granteeTenantId',
      granteeType: 'granteeType',
      includeDescendants: 'includeDescendants',
      resourceKey: 'resourceKey',
      resourceType: 'resourceType',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granteeIds: { 'type': 'array', 'itemType': 'string' },
      granteeTenantId: 'string',
      granteeType: 'string',
      includeDescendants: 'boolean',
      resourceKey: 'string',
      resourceType: 'string',
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.granteeIds)) {
      $dara.Model.validateArray(this.granteeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResourcePermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of the permissions to be revoked.
   * 
   * This parameter is required.
   */
  items?: DeleteAppResourcePermissionsRequestItems[];
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
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
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
      items: { 'type': 'array', 'itemType': DeleteAppResourcePermissionsRequestItems },
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

