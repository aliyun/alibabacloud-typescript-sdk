// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * 定时开始；0.关闭 1.开启
   * 
   * @example
   * 0
   */
  autoStart?: number;
  /**
   * @remarks
   * 定时结束；0.关闭 1.开启
   * 
   * @example
   * 0
   */
  autoStop?: number;
  /**
   * @remarks
   * 查询结束时间；格式说明："2019-10-11 23:59:59"
   * 
   * @example
   * 2026-04-20 20:00:00
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
   * 需要取出的数据条数；大于0，最大不能超过100，默认10
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * 任务名称；需进行UTF-8格式的URLEncode编码
   * 
   * @example
   * name1
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 从第几条开始获取；大于等于0，默认0
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * 查询开始时间；格式说明："2019-10-11 00:00:00"
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * 任务状态；0.初始 1.运行中 2.暂停 3.结束
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * 时间过滤条件；1.任务启动时间 2.任务结束时间 3.任务创建时间
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * 任务类型；1.预测外呼任务 2.自动外呼任务
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      autoStart: 'AutoStart',
      autoStop: 'AutoStop',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      limit: 'Limit',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      start: 'Start',
      startTime: 'StartTime',
      status: 'Status',
      timeType: 'TimeType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStart: 'number',
      autoStop: 'number',
      endTime: 'string',
      enterpriseId: 'number',
      limit: 'number',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      start: 'number',
      startTime: 'string',
      status: 'number',
      timeType: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

