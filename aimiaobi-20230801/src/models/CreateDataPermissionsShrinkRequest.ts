// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataPermissionsShrinkRequest extends $dara.Model {
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
  permissionUserInfosShrink?: string;
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

