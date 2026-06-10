// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantPermissionsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the target cluster.
   * 
   * - If you set the `role_type` parameter to `all-clusters`, set this parameter to an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * c796c60***
   */
  cluster?: string;
  /**
   * @remarks
   * Set to true if `role_name` specifies a custom ClusterRole.
   * 
   * @example
   * false
   */
  isCustom?: boolean;
  /**
   * @remarks
   * Set to true if you are granting permissions to a RAM role.
   * 
   * @example
   * false
   */
  isRamRole?: boolean;
  /**
   * @remarks
   * The name of the namespace. This parameter is required only when `role_type` is set to `namespace`.
   * 
   * @example
   * test
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the role to grant. Valid values:
   * 
   * - `admin`: The administrator role.
   * 
   * - `admin-view`: The read-only administrator role.
   * 
   * - `ops`: The operations role.
   * 
   * - `dev`: The developer role.
   * 
   * - `restricted`: The restricted role.
   * 
   * - The name of a custom ClusterRole.
   * 
   * >Notice: 
   * 
   * - The `admin`, `admin-view`, and `ops` roles cannot be granted at the namespace scope.
   * 
   * - The `admin-view` role is not currently supported for the all-clusters scope.
   * 
   * This parameter is required.
   * 
   * @example
   * ops
   */
  roleName?: string;
  /**
   * @remarks
   * The authorization scope. Valid values:
   * 
   * - `cluster`: Grants permissions at the cluster scope.
   * 
   * - `namespace`: Grants permissions at the namespace scope.
   * 
   * - `all-clusters`: Grants permissions at the all-clusters scope.
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

export class GrantPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   */
  body?: GrantPermissionsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': GrantPermissionsRequestBody },
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

