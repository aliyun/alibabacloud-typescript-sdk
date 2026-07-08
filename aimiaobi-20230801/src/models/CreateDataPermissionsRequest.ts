// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataPermissionsRequestPermissionUserInfos extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * - For a RAM user: The ID of the RAM user.
   * 
   * - For a role user: The user identity in the format AssumedRoleUser${roleId}.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  permissionUserId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xxx
   */
  permissionUsername?: string;
  static names(): { [key: string]: string } {
    return {
      permissionUserId: 'PermissionUserId',
      permissionUsername: 'PermissionUsername',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionUserId: 'string',
      permissionUsername: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * A unique identifier for the permission.
   * 
   * This parameter is required.
   * 
   * @example
   * SystemSearch.QuarkCommonNews
   */
  dataId?: string;
  /**
   * @remarks
   * The permission type. Currently, only \\`dataset\\` is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * dataset
   */
  dataType?: string;
  /**
   * @remarks
   * The users to whom you want to assign permissions.
   * 
   * This parameter is required.
   */
  permissionUserInfos?: CreateDataPermissionsRequestPermissionUserInfos[];
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. For more information, see [Get workspaceId](https://help.aliyun.com/document_detail/2587495.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      dataType: 'DataType',
      permissionUserInfos: 'PermissionUserInfos',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataType: 'string',
      permissionUserInfos: { 'type': 'array', 'itemType': CreateDataPermissionsRequestPermissionUserInfos },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissionUserInfos)) {
      $dara.Model.validateArray(this.permissionUserInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

