// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceSharePermissionsResponseBodyPermissions extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the permission is the default permission. Valid values:
   * 
   * *   false: The permission is not the default permission.
   * *   true: The permission is the default permission.
   * 
   * @example
   * true
   */
  defaultPermission?: boolean;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * 
   * *   false: The version is not the default version.
   * *   true: The version is the default version.
   * 
   * @example
   * true
   */
  defaultVersion?: boolean;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
  /**
   * @remarks
   * The version of the permission.
   * 
   * @example
   * v1
   */
  permissionVersion?: string;
  /**
   * @remarks
   * The type of the shared resources.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultPermission: 'DefaultPermission',
      defaultVersion: 'DefaultVersion',
      permissionName: 'PermissionName',
      permissionVersion: 'PermissionVersion',
      resourceType: 'ResourceType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultPermission: 'boolean',
      defaultVersion: 'boolean',
      permissionName: 'string',
      permissionVersion: 'string',
      resourceType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharePermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the permissions.
   */
  permissions?: ListResourceSharePermissionsResponseBodyPermissions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      permissions: 'Permissions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      permissions: { 'type': 'array', 'itemType': ListResourceSharePermissionsResponseBodyPermissions },
      requestId: 'string',
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

