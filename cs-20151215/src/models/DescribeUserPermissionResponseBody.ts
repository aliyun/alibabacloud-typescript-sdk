// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization setting. Valid values:
   * 
   * *   `{cluster_id}` is returned if the permissions are scoped to a cluster.
   * *   `{cluster_id}/{namespace}` is returned if the permissions are scoped to a namespace of a cluster.
   * *   `all-clusters` is returned if the permissions are scoped to all clusters.
   * 
   * @example
   * c1b542****
   */
  resourceId?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * *   `cluster`: indicates that the permissions are scoped to a cluster.
   * *   `namespace`: indicates that the permissions are scoped to a namespace of a cluster.
   * *   `console`: indicates that the permissions are scoped to all clusters. This value was displayed only in the console.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The name of the custom role. If a custom role is assigned, the value is the name of the assigned custom role.
   * 
   * @example
   * view
   */
  roleName?: string;
  /**
   * @remarks
   * The type of predefined role. Valid values:
   * 
   * *   `admin`: administrator
   * *   `ops`: O\\&M engineer
   * *   `dev`: developer
   * *   `restricted`: restricted user
   * *   `custom`: custom role
   * 
   * @example
   * admin
   */
  roleType?: string;
  /**
   * @remarks
   * Indicates whether the permissions are granted to the cluster owner.
   * 
   * *   `0`: indicates that the permissions are not granted to the cluster owner.
   * *   `1`: indicates that the permissions are granted to the cluster owner. The cluster owner is the administrator.
   * 
   * @example
   * 1
   */
  isOwner?: number;
  /**
   * @remarks
   * Indicates whether the permissions are granted to the RAM role. Valid values:
   * 
   * *   `0`: indicates that the permissions are not granted to the RAM role.
   * *   `1`: indicates that the permissions are granted to the RAM role.
   * 
   * @example
   * 1
   */
  isRamRole?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resource_id',
      resourceType: 'resource_type',
      roleName: 'role_name',
      roleType: 'role_type',
      isOwner: 'is_owner',
      isRamRole: 'is_ram_role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      roleName: 'string',
      roleType: 'string',
      isOwner: 'number',
      isRamRole: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

