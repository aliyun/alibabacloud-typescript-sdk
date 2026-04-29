// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudCreateEnterpriseTimeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 创建时间，格式为： yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * 星期 周一：2、周二：3、周三：4、周四：5、周五：6、周六：7、周日：1、使用","进行分割、type=2时为空串
   * 
   * @example
   * 2,3,4
   */
  dayOfWeek?: string;
  /**
   * @remarks
   * 结束时间 格式为 HH:mm startTime不能大于endTime
   * 
   * @example
   * 19:00
   */
  endTime?: string;
  /**
   * @remarks
   * 呼叫中心编号
   * 
   * @example
   * 7000002
   */
  enterpriseId?: string;
  /**
   * @remarks
   * 起始日期 格式为：yyyy-MM-dd、type=1时为空串 fromDay不能大于toDay
   * 
   * @example
   * 2026-04-20
   */
  fromDay?: string;
  /**
   * @remarks
   * 时间条件id
   * 
   * @example
   * 236
   */
  id?: string;
  /**
   * @remarks
   * 时间条件名称 、同一呼叫中心下不能重复
   * 
   * @example
   * demo01
   */
  name?: string;
  /**
   * @remarks
   * 优先级、同一呼叫中心下不能重复，值从1开始，值越小优先级越高
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * 开始时间 格式为 HH:mm startTime不能大于endTime
   * 
   * @example
   * 06:00
   */
  startTime?: string;
  /**
   * @remarks
   * 时间类型 1.连续 2.间隔
   * 
   * @example
   * 1
   */
  timeType?: string;
  /**
   * @remarks
   * 终止日期 格式为：yyyy-MM-dd、type=1时为空串 fromDay不能大于toDay
   * 
   * @example
   * 2026-04-25
   */
  toDay?: string;
  /**
   * @remarks
   * 时间条件类型 1:按照星期配置 2:按照固定时间配置
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dayOfWeek: 'DayOfWeek',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      fromDay: 'FromDay',
      id: 'Id',
      name: 'Name',
      priority: 'Priority',
      startTime: 'StartTime',
      timeType: 'TimeType',
      toDay: 'ToDay',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dayOfWeek: 'string',
      endTime: 'string',
      enterpriseId: 'string',
      fromDay: 'string',
      id: 'string',
      name: 'string',
      priority: 'string',
      startTime: 'string',
      timeType: 'string',
      toDay: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudCreateEnterpriseTimeResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudCreateEnterpriseTimeResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * ED18A5AE-9BBC-5851-1111-8E5B8C23CEDE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudCreateEnterpriseTimeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

