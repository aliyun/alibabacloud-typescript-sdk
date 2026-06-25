// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionsResponseBodyPermissionsPermissionRules extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - PUBLIC: All members in the current workspace can perform the operation.
   * 
   * - PRIVATE: Only the creator can perform the operation.
   * 
   * - ANY: Both the creator and non-creators can perform the operation.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The entity access type.
   * This parameter is invalid if Accessibility is set to PUBLIC. In this case, all users can perform the operation.
   * If Accessibility is set to PRIVATE, the permission is determined by the value of EntityAccessType. Valid values:
   * 
   * - CREATOR: Only the creator can perform the operation.
   * 
   * - ANY: Both the creator and non-creators can perform the operation.
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
   * The name of the permission point. The name is unique within the same region. For more information about permission points, see [Appendix: Roles and permissions](https://help.aliyun.com/document_detail/2840449.html).
   * For example, the value PaiDLC:GetTensorboard grants the permission to view Tensorboard details for the DLC feature.
   * 
   * @example
   * PaiDLC:GetTensorboard
   */
  permissionCode?: string;
  /**
   * @remarks
   * The list of permission rules.
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
   * The list of permissions.
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
   * The number of entries that meet the filter conditions.
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

