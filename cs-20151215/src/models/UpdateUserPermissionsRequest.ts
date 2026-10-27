// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserPermissionsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the target cluster.
   * 
   * This parameter is not required when the role_type parameter is set to all-clusters.
   * 
   * @example
   * c796c60***
   */
  cluster?: string;
  /**
   * @remarks
   * Specifies whether the authorization is custom. A custom authorization uses a custom ClusterRole name for the role_name parameter.
   * 
   * Valid values:
   * - true: The authorized role is a custom cluster role.
   * - false: The authorized role is a preset cluster role.
   * 
   * @example
   * false
   */
  isCustom?: boolean;
  /**
   * @remarks
   * Specifies whether the authorized entity is a RAM role.
   * 
   * Valid values:
   * - true: The authorization is for a RAM role.
   * - false: The authorization is for a Resource Access Management (RAM) user.
   * 
   * @example
   * false
   */
  isRamRole?: boolean;
  /**
   * @remarks
   * The namespace name. This parameter is empty by default for cluster-level authorization.
   * 
   * @example
   * test
   */
  namespace?: string;
  /**
   * @remarks
   * The preset role name. Valid values:
   * 
   * - admin: administrator.
   * - admin-view: read-only administrator.
   * - ops: O&M engineer.
   * - dev: developer.
   * - restricted: restricted user.
   * - A custom ClusterRole name.
   * 
   * > - The admin, admin-view, and ops roles do not support authorization at the **namespace level**.
   * > - The admin-view role does not support authorization at the **all-clusters level**.
   * 
   * @example
   * ops
   */
  roleName?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * - cluster: cluster level.
   * - namespace: namespace level.
   * - all-clusters: all-clusters level.
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
   * The request body parameters.
   */
  body?: UpdateUserPermissionsRequestBody[];
  /**
   * @remarks
   * The authorization method. Valid values:
   * 
   * - `apply`: Fully updates permissions. This operation overwrites the existing cluster permissions of the target RAM user or RAM role. The request must include all permission configurations to be granted to the target RAM user or RAM role.
   * - `delete`: Deletes permissions. This operation deletes only the cluster authorization information specified in the request and does not affect other cluster permissions of the RAM user or RAM role.
   * - `patch`: Adds permissions. This operation adds only the cluster authorization information specified in the request and does not affect other cluster permissions of the RAM user or RAM role.
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

