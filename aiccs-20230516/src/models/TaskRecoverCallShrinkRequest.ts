// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskRecoverCallShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 查询开始导入时间
   * 
   * @example
   * "2023-01-09 18:58:19"
   */
  beginImportTime?: string;
  /**
   * @remarks
   * 查询结束导入时间
   * 
   * @example
   * "2023-01-09 18:58:19"
   */
  endImportTime?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbersShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 用户自定义标签列表
   */
  tagsShrink?: string;
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 93
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      beginImportTime: 'BeginImportTime',
      endImportTime: 'EndImportTime',
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagsShrink: 'Tags',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginImportTime: 'string',
      endImportTime: 'string',
      numbersShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagsShrink: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

