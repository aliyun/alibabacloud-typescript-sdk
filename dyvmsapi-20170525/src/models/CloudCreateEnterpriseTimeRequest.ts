// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudCreateEnterpriseTimeRequest extends $dara.Model {
  /**
   * @remarks
   * 当type=1 时必选,周一：2、周二：3、周三：4、周四：5、周五：6、周六：7、周日：1。星期值以,分隔 例如： 2,3,4代表周一周二周三、type=2时为空串
   * 
   * @example
   * 2,3,4
   */
  dayOfWeek?: string;
  /**
   * @remarks
   * 结束时间；格式为 HH:mm 例如、 19:00 startTime不能大于endTime
   * 
   * This parameter is required.
   * 
   * @example
   * 19:00
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
   * 起始日期；当type=2 时必选，格式为：yyyy-MM-dd 、type=1时为空串 fromDay不能大于toDay
   * 
   * @example
   * 2026-04-20
   */
  fromDay?: string;
  /**
   * @remarks
   * 时间条件名称；同一呼叫中心下不能重复
   * 
   * This parameter is required.
   * 
   * @example
   * demo01
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * 时间条件优先级；同一呼叫中心下不能重复，值从1开始，值越小优先级越高
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 开始时间；格式为 HH:mm 例如、 06:00 startTime不能大于endTime
   * 
   * This parameter is required.
   * 
   * @example
   * 06:00
   */
  startTime?: string;
  /**
   * @remarks
   * 时间类型 1.连续 2.间隔
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * 终止日期；当type=2 时必选，格式为：yyyy-MM-dd 、type=1时为空串 fromDay不能大于toDay
   * 
   * @example
   * 2026-04-25
   */
  toDay?: string;
  /**
   * @remarks
   * 条件类型 1:按照星期配置 2:按照固定时间配置
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'DayOfWeek',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      fromDay: 'FromDay',
      name: 'Name',
      ownerId: 'OwnerId',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      timeType: 'TimeType',
      toDay: 'ToDay',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: 'string',
      endTime: 'string',
      enterpriseId: 'number',
      fromDay: 'string',
      name: 'string',
      ownerId: 'number',
      priority: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      timeType: 'number',
      toDay: 'string',
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

