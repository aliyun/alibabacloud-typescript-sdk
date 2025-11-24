// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserPermissionsResponseBodyPermissions extends $dara.Model {
  /**
   * @remarks
   * The entity to which the permissions are granted. A value of `true` indicates that the permissions are granted to a RAM user. A value of `false` indicates that the permissions are granted to a RAM role.
   * 
   * @example
   * false
   */
  isRamRole?: string;
  /**
   * @remarks
   * The value is fixed as `0`.
   * 
   * @example
   * 0
   */
  parentId?: string;
  /**
   * @remarks
   * The ID of the ASM instance.
   * 
   * @example
   * c57b848115458460583a4260cb713****
   */
  resourceId?: string;
  /**
   * @remarks
   * The value is fixed as `cluster`.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The name of the permissions. Valid values:
   * 
   * *   `istio-admin`: the permissions of ASM administrators.
   * *   `istio-ops`: the permissions of ASM restricted users.
   * *   `istio-readonly`: the read-only permissions.
   * 
   * @example
   * istio-admin
   */
  roleName?: string;
  /**
   * @remarks
   * The value is fixed as `custom`.
   * 
   * @example
   * custom
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      isRamRole: 'IsRamRole',
      parentId: 'ParentId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      roleName: 'RoleName',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isRamRole: 'string',
      parentId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      roleName: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserPermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permissions that are granted to an entity.
   */
  permissions?: DescribeUserPermissionsResponseBodyPermissions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A7C9E37-C171-584F-9A99-869B48C4196D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': DescribeUserPermissionsResponseBodyPermissions },
      requestId: 'string',
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

