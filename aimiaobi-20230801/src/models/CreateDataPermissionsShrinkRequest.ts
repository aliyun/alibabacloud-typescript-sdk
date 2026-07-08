// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataPermissionsShrinkRequest extends $dara.Model {
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
  permissionUserInfosShrink?: string;
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
      permissionUserInfosShrink: 'PermissionUserInfos',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataType: 'string',
      permissionUserInfosShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

