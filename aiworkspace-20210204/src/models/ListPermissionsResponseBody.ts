// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionsResponseBodyPermissionsPermissionRules extends $dara.Model {
  /**
   * @remarks
   * The accessibility of the permission rule. Valid values:
   * 
   * *   PUBLIC: All members in the workspace can access the permission rule.
   * *   PRIVATE: Only the creator can access the permission rule.
   * *   ANY: All users can access the permission rule.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The type of access. If you set Accessibility to PUBLIC, all users can access the workspace. This parameter is invalid. If you set Accessibility to PRIVATE, the permissions are determined based on the value of EntityAccessType. The value of EntityAccessType can be:
   * 
   * *   CREATOR: Only the creator can access the workspace.
   * *   ANY: All users can access the workspace.
   * 
   * @example
   * CREATOR
   */
  entityAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      entityAccessType: 'EntityAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      entityAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBodyPermissions extends $dara.Model {
  /**
   * @remarks
   * The permission name, which is unique in a region. For more information about permissions, see [Appendix: Roles and permissions](https://help.aliyun.com/document_detail/2840449.html). The example value PaiDLC:GetTensorboard indicates the permission to view details about a TensorBoard job on the Deep Learning Containers (DLC) page.
   * 
   * @example
   * PaiDLC:GetTensorboard
   */
  permissionCode?: string;
  /**
   * @remarks
   * The permission rules.
   */
  permissionRules?: ListPermissionsResponseBodyPermissionsPermissionRules[];
  static names(): { [key: string]: string } {
    return {
      permissionCode: 'PermissionCode',
      permissionRules: 'PermissionRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCode: 'string',
      permissionRules: { 'type': 'array', 'itemType': ListPermissionsResponseBodyPermissionsPermissionRules },
    };
  }

  validate() {
    if(Array.isArray(this.permissionRules)) {
      $dara.Model.validateArray(this.permissionRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permissions.
   */
  permissions?: ListPermissionsResponseBodyPermissions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2AE63638-5420-56DC-B******8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of permissions that meet the filter conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': ListPermissionsResponseBodyPermissions },
      requestId: 'string',
      totalCount: 'number',
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

