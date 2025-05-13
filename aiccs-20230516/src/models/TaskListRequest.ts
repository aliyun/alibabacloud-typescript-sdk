// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskListRequest extends $dara.Model {
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2023-04-05 12:11:11
   */
  createTime?: string;
  /**
   * @remarks
   * 最后外呼时间
   * 
   * @example
   * 2023-04-05 12:11:11
   */
  lastCallTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务状态。1 未启用，2 启用中，4 已停止
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 2
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastCallTime: 'LastCallTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastCallTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
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

