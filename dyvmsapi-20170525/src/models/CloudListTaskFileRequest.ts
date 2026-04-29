// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListTaskFileRequest extends $dara.Model {
  /**
   * @remarks
   * 说明：统计日期的结束时间，格式：yyyy-MM-dd HH:mm:ss, 最大查询范围1个月
   * 
   * @example
   * 2026-05-20 10:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 查询条数；取值：最大不能超过5000，默认10
   * 
   * @example
   * 10
   */
  limit?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 查询起始位置；取值：大于等于0，默认0
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * 说明：统计日期的开始时间，格式：yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * 批次状态；说明：0：未导入，1：导入完成 ，2：加载到缓存，3：呼叫完
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * 任务Id
   * 
   * This parameter is required.
   * 
   * @example
   * 27
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      limit: 'Limit',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      start: 'Start',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      enterpriseId: 'number',
      limit: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      start: 'number',
      startTime: 'string',
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

