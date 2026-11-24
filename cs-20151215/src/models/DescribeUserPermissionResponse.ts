// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster access configuration. The format is as follows:
   * 
   * - For cluster-level authorization, the format is `{cluster_id}`.
   * - For namespace-level authorization, the format is `{cluster_id}/{namespace}`.
   * - For authorization across all clusters, the value is fixed as `all-clusters`.
   * 
   * @example
   * c1b542****
   */
  resourceId?: string;
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * - `cluster`: cluster level.
   * - `namespace`: namespace level.
   * - `console`: authorization across all clusters.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The name of the custom role. When a custom role is authorized, this field specifies the name of the custom cluster management role.
   * 
   * @example
   * terway-pod-reader
   */
  roleName?: string;
  /**
   * @remarks
   * The preset role type. Valid values:
   * 
   * - `admin`: administrator.
   * - `ops`: O&M engineer.
   * - `dev`: developer.
   * - `restricted`: restricted user.
   * - `custom`: custom cluster management role.
   * 
   * @example
   * admin
   */
  roleType?: string;
  /**
   * @remarks
   * Indicates whether the authorization is granted to the cluster creator. Valid values:
   * 
   * - `0`: The authorization record does not belong to the cluster creator.
   * - `1`: The authorization record grants administrator permissions to the cluster creator.
   * 
   * @example
   * 1
   */
  isOwner?: number;
  /**
   * @remarks
   * Indicates whether the authorization is granted to a RAM role. Valid values:
   * 
   * - `0`: The current record is not a RAM role authorization.
   * - `1`: The current record is a RAM role authorization.
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

export class DescribeUserPermissionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserPermissionResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeUserPermissionResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

