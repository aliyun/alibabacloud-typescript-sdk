// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataPermissionsRequestPermissionUserInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  permissionUserId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * SystemSearch.QuarkCommonNews
   */
  dataId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dataset
   */
  dataType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  permissionUserInfos?: CreateDataPermissionsRequestPermissionUserInfos[];
  /**
   * @remarks
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

