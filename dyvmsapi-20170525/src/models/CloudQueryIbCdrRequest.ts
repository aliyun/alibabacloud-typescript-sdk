// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryIbCdrRequest extends $dara.Model {
  /**
   * @remarks
   * 座席号码
   * 
   * @example
   * 41008502
   */
  calleeNumber?: string;
  /**
   * @remarks
   * 客户电话归属城市；为空表示全部，如"成都"，此参数需要URLEncode
   * 
   * @example
   * 示例值
   */
  city?: string;
  /**
   * @remarks
   * 座席工号,此字段支持传入多个座席工号，使用英文半角逗号隔开
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 客户号码
   * 
   * @example
   * 17750247753
   */
  customerNumber?: string;
  /**
   * @remarks
   * 查询结束时间；时间戳格式,精确到s。startTime与endTime不允许跨月，默认值取当前月份最后一天
   * 
   * @example
   * 1775030413
   */
  endTime?: number;
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
   * 热线号码
   * 
   * @example
   * 10003221
   */
  hotline?: string;
  /**
   * @remarks
   * 未进入队列原因 参数说明： 4: 无座席未进入队列 , 3: 队列满未进入队列
   * 
   * @example
   * 3
   */
  joinQueueCode?: number;
  /**
   * @remarks
   * 离开队列原因 参数说明： 2: 队列中放弃 , 3: 队列中超时溢出 , 4: 队列中无座席溢出
   * 
   * @example
   * 2
   */
  leaveQueueCode?: number;
  /**
   * @remarks
   * 需要取出的数据条数；大于0，最大不能超过1000，默认10
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * 客户电话归属省份；为空表示全部，如"四川"，此参数需要URLEncode
   * 
   * @example
   * 示例值
   */
  province?: string;
  /**
   * @remarks
   * 队列号 参数说明：-1: 未进入队列
   * 
   * @example
   * 566
   */
  qno?: string;
  /**
   * @remarks
   * 从第几条开始取；大于等于0，默认0
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * 查询开始时间；时间戳格式,精确到s。startTime与endTime不允许跨月，默认值取当前月份第一天
   * 
   * @example
   * 1775024775
   */
  startTime?: number;
  /**
   * @remarks
   * 呼叫结果；参数说明： 1:座席接听 2:已呼叫座席，座席未接听 3:系统接听 4:系统未接听-IVR配置错误 5:系统未接听-停机 6:系统未接听-欠费 7:系统未接听-黑名单 8:系统未接听-未注册 9:系统未接听-彩铃 11:系统未接听-呼叫超出营帐中设置的最大限制 12:系统未接听-客户呼入系统后在系统未应答前挂机 13:其他错误 14:未进入队列 15:队列中放弃 16:队列中超时溢出 17:队列中无座席溢出 18:无座席未进入队列 19:队列满未进入队列
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * 查询时间开始结束范围生效类型；通话记录startTime和endTime时间范围生效类型，当startTime和endTime不为空时生效；取值：1.呼叫开始时间 2.呼叫结束时间； 默认为1
   * 
   * @example
   * 1
   */
  timeRangeType?: string;
  /**
   * @remarks
   * 如果uniqueId值不为空，则以下其它参数无效，即仅查询电话唯一标识为uniqueId的记录信息
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  uniqueId?: string;
  /**
   * @remarks
   * 用户自定义参数指定查询value；传递该参数时必须传递userFieldKey，仅查询一个字段，不支持模糊匹配， 构造的自定义字段查询条件为:{"userFieldkey":"userFieldvalue"}，此参数需要URLEncode
   * 
   * @example
   * userFieldvalue
   */
  userFieldValue?: string;
  /**
   * @remarks
   * 用户自定义参数指定查询key；传递该参数时必须传递userFieldValue，仅查询一个字段，不支持模糊匹配， 构造的自定义字段查询条件为:{"userFieldkey":"userFieldvalue"}，此参数需要URLEncode
   * 
   * @example
   * userFieldkey
   */
  userFieldkey?: string;
  static names(): { [key: string]: string } {
    return {
      calleeNumber: 'CalleeNumber',
      city: 'City',
      cno: 'Cno',
      customerNumber: 'CustomerNumber',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      hotline: 'Hotline',
      joinQueueCode: 'JoinQueueCode',
      leaveQueueCode: 'LeaveQueueCode',
      limit: 'Limit',
      province: 'Province',
      qno: 'Qno',
      start: 'Start',
      startTime: 'StartTime',
      status: 'Status',
      timeRangeType: 'TimeRangeType',
      uniqueId: 'UniqueId',
      userFieldValue: 'UserFieldValue',
      userFieldkey: 'UserFieldkey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calleeNumber: 'string',
      city: 'string',
      cno: 'string',
      customerNumber: 'string',
      endTime: 'number',
      enterpriseId: 'number',
      hotline: 'string',
      joinQueueCode: 'number',
      leaveQueueCode: 'number',
      limit: 'number',
      province: 'string',
      qno: 'string',
      start: 'number',
      startTime: 'number',
      status: 'number',
      timeRangeType: 'string',
      uniqueId: 'string',
      userFieldValue: 'string',
      userFieldkey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

