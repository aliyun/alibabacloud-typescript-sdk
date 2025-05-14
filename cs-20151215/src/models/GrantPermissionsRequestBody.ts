// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantPermissionsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster on which you want to grant permissions to the RAM role or RAM role.
   * 
   * *   Set this parameter to an empty string if `role_type` is set to `all-clusters`.
   * 
   * This parameter is required.
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
   * *   You cannot grant namespace-level permissions to the `admin`, `admin-view`, and `ops` roles.
   * *   You cannot grant all cluster-level permissions to the `admin-view` role.
   * 
   * This parameter is required.
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
   * This parameter is required.
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

