// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserPermissionsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster on which you want to grant permissions to the RAM role or RAM role.
   * 
   * *   Set this parameter to an empty string if `role_type` is set to `all-clusters`.
   * 
   * @example
   * c796c60***
   */
  cluster?: string;
  /**
   * @remarks
   * Specifies whether to assign a custom role to the RAM user or RAM role. If you want to assign a custom role to the RAM user or RAM role, set `role_name` to the name of the custom role.
   * 
   * @example
   * false
   */
  isCustom?: boolean;
  /**
   * @remarks
   * Specifies whether to use a RAM role to grant permissions.
   * 
   * @example
   * false
   */
  isRamRole?: boolean;
  /**
   * @remarks
   * The namespace that you want to authorize the RAM user or RAM role to manage. This parameter is required only if you set role_type to namespace.
   * 
   * @example
   * test
   */
  namespace?: string;
  /**
   * @remarks
   * The predefined role name. Valid values:
   * 
   * *   `admin`: administrator
   * *   `admin-view`: read-only administrator
   * *   `ops`: O\\&M engineer
   * *   `dev`: developer
   * *   `restricted`: restricted user
   * *   Custom role
   * 
   * Note:
   * 
   * *   You cannot grant **namespace-level** permissions to the `admin`, `admin-view`, and `ops` roles.
   * *   You cannot grant **all cluster-level** permissions to the `admin-view` role.
   * 
   * @example
   * ops
   */
  roleName?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * *   `cluster`: authorizes the RAM user or RAM role to manage the specified clusters.
   * *   `namespace`: authorizes the RAM user or RAM role to manage the specified namespaces.
   * *   `all-clusters`: authorizes the RAM user or RAM role to manage all clusters.
   * 
   * @example
   * cluster
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      isCustom: 'is_custom',
      isRamRole: 'is_ram_role',
      namespace: 'namespace',
      roleName: 'role_name',
      roleType: 'role_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      isCustom: 'boolean',
      isRamRole: 'boolean',
      namespace: 'string',
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

export class UpdateUserPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateUserPermissionsRequestBody[];
  /**
   * @remarks
   * The authorization method. Valid values:
   * 
   * *   `apply`: The global update mode. Overwrites all existing permissions of the RAM user or RAM role on the cluster. You must specify all the permissions you want to grant to the RAM user or RAM role in the request parameters when you call this operation.
   * *   `delete`: The deletion mode. Revokes only the cluster permissions specified in the request, preserving other existing permissions of the RAM user or RAM role.
   * *   `patch`: The incremental mode. Adds only the cluster permissions specified in the request, preserving other existing permissions of the RAM user or RAM role.
   * 
   * Default value: `apply`.
   * 
   * @example
   * apply
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdateUserPermissionsRequestBody },
      mode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

