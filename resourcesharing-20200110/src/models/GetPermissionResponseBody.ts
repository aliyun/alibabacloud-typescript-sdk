// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionResponseBodyPermission extends $dara.Model {
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
   * The document of the policy related to the permission.
   * 
   * @example
   * {"Effect":"Allow","Action":["vpc:DescribeVSwitches","vpc:DescribeVSwitchAttributes"]}
   */
  permission?: string;
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
      permission: 'Permission',
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
      permission: 'string',
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

export class GetPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the permission.
   */
  permission?: GetPermissionResponseBodyPermission;
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
      permission: 'Permission',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: GetPermissionResponseBodyPermission,
      requestId: 'string',
    };
  }

  validate() {
    if(this.permission && typeof (this.permission as any).validate === 'function') {
      (this.permission as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

