// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskCallListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 导入号码时返回的批次号
   * 
   * @example
   * 1
   */
  batchId?: string;
  /**
   * @remarks
   * 开始外呼时间
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-25 00:00:00
   */
  callDate?: string;
  /**
   * @remarks
   * 结束外呼时间
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-25 00:00:00
   */
  endCallDate?: string;
  /**
   * @remarks
   * 意向标签
   */
  intentTagsShrink?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbersShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * 页数
   * 
   * This parameter is required.
   * 
   * @example
   * 39
   */
  page?: number;
  /**
   * @remarks
   * 每页外呼记录数,正整数，默认10000
   * 
   * @example
   * 97
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
      batchId: 'BatchId',
      callDate: 'CallDate',
      endCallDate: 'EndCallDate',
      intentTagsShrink: 'IntentTags',
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      page: 'Page',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      callDate: 'string',
      endCallDate: 'string',
      intentTagsShrink: 'string',
      numbersShrink: 'string',
      ownerId: 'number',
      page: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

