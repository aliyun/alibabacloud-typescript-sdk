// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserPermissionsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the target cluster for authorization.
   * 
   * If the `role_type` parameter is set to `all-clusters`, you do not need to specify this parameter.
   * 
   * @example
   * c796c60***
   */
  cluster?: string;
  /**
   * @remarks
   * Specifies whether the authorization is a custom authorization (the `role_name` uses a custom ClusterRole name).
   * 
   * - true: The authorized role is a custom cluster role.
   * 
   * - false: The authorized role is a cluster preset role.
   * 
   * @example
   * false
   */
  isCustom?: boolean;
  /**
   * @remarks
   * Specifies whether the authorization is for a RAM role.
   * 
   * - true: The authorization is for a RAM role.
   * 
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
   * The name of the preset role. Valid values:
   * 
   * - `admin`: administrator.
   * - `admin-view`: read-only administrator.
   * - `ops`: O&M engineer.
   * - `dev`: developer.
   * - `restricted`: restricted user.
   * - A custom ClusterRole name.
   * 
   * 
   * > - `admin`, `admin-view`, `ops`: These roles cannot be granted at the **namespace** level.
   * > - `admin-view`: This role cannot be granted at the **all-clusters** level.
   * 
   * @example
   * ops
   */
  roleName?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * - `cluster`: cluster level.
   * - `namespace`: namespace level.
   * - `all-clusters`: all-clusters level.
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
   * The authorization mode. Valid values:
   * 
   * - `apply`: full update. A full update overwrites all existing cluster permissions of the target RAM user or RAM role. The request must include all permission configurations that you want to grant to the target RAM user or RAM role.
   * - `delete`: delete permissions. Only the cluster authorization information included in the request is deleted. Other cluster Resource Access Management (RAM) user or RAM role are not affected.
   * - `patch`: add permissions. Only the cluster authorization information included in the request is added. Other cluster Resource Access Management (RAM) user or RAM role are not affected.
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

