// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantPermissionsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to be authorized.
   * 
   * - If the value of the `role_type` parameter is `all-clusters`, set this parameter to an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * c796c60***
   */
  cluster?: string;
  /**
   * @remarks
   * Specifies whether the authorization is a custom authorization, which means `role_name` uses a custom ClusterRole name.
   * 
   * @example
   * false
   */
  isCustom?: boolean;
  /**
   * @remarks
   * Specifies whether the authorization is for a RAM role.
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
   * - Custom ClusterRole name.
   * 
   * >Notice: 
   * 
   * - `admin`, `admin-view`, `ops`: cannot be granted at the namespace level.
   * - `admin-view`: cannot be granted at the all-clusters level.
   * .
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
   * - `cluster`: cluster level.
   * - `namespace`: namespace level.
   * - `all-clusters`: all-clusters level.
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

