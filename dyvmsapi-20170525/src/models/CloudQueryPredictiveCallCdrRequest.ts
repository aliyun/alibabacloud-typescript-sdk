// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryPredictiveCallCdrRequest extends $dara.Model {
  /**
   * @remarks
   * 座席姓名
   * 
   * @example
   * 示例值示例值
   */
  agentName?: string;
  /**
   * @remarks
   * 客户电话归属城市；为空表示全部，如"成都"，此参数需要URLEncode
   * 
   * @example
   * 示例值示例值
   */
  city?: string;
  /**
   * @remarks
   * 外显号码；外显的号码
   * 
   * @example
   * 02138276106
   */
  clid?: string;
  /**
   * @remarks
   * 座席工号，3-10位数字
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 客户电话；客户号码，如：18012345678
   * 
   * @example
   * 18012345678
   */
  customerNumber?: string;
  /**
   * @remarks
   * 客户侧真实外显号码，当使用AXB场景进行外呼时，客户侧的真实外显号码为虚拟号
   * 
   * @example
   * 02138276106
   */
  displayNumber?: string;
  /**
   * @remarks
   * 是否呼叫降级；0-否, 1-是
   * 
   * @example
   * 0
   */
  downGrade?: number;
  /**
   * @remarks
   * 查询结束时间；时间戳格式,精确到s。startTime与endTime不允许跨月，默认值取当前月份最后一天
   * 
   * @example
   * 1775024775
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
   * 座席所属外呼组 单个外呼组号2-20位，支持一个或多个座席工号查询，多个座席工号以英文逗号隔开，一次最多支持10个。不支持模糊匹配。
   * 
   * @example
   * WH13
   */
  gno?: string;
  /**
   * @remarks
   * 真人接听；取值说明：1-是、0-否
   * 
   * @example
   * 1
   */
  isRealAnswer?: number;
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
   * 示例值示例值示例值
   */
  province?: string;
  /**
   * @remarks
   * 查询请求唯一id对应的记录信息，默认查询当前月，如requestUniqueId不属于当前月，查询时请传递查询参数 查询开始时间(startTime)
   * 
   * @example
   * req-uniq_1-162046xxxx.12
   */
  requestUniqueId?: string;
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
   * 呼叫结果；参数说明：40:预测外呼, 客户未接听； 41:预测外呼, 客户接听； 42: 预测外呼,已呼叫； 43: 预测外呼, 双方接听
   * 
   * @example
   * 41
   */
  status?: number;
  /**
   * @remarks
   * 批次id
   * 
   * @example
   * 133
   */
  taskFileId?: number;
  /**
   * @remarks
   * 外呼任务id
   * 
   * @example
   * 31111
   */
  taskId?: number;
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
   * 用户自定义参数指定查询value；传递该参数时必须传递userFieldKey，仅查询一个字段，不支持模糊匹配，构造的自定义字段查询条件为:{"userFieldkey":"userFieldvalue"}，此参数需要URLEncode
   * 
   * @example
   * userFieldvalue
   */
  userFieldValue?: string;
  /**
   * @remarks
   * 用户自定义参数指定查询key；传递该参数时必须传递userFieldValue，仅查询一个字段，不支持模糊匹配，构造的自定义字段查询条件为:{"userFieldkey":"userFieldvalue"}，此参数需要URLEncode
   * 
   * @example
   * userFieldkey
   */
  userFieldkey?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      city: 'City',
      clid: 'Clid',
      cno: 'Cno',
      customerNumber: 'CustomerNumber',
      displayNumber: 'DisplayNumber',
      downGrade: 'DownGrade',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      gno: 'Gno',
      isRealAnswer: 'IsRealAnswer',
      limit: 'Limit',
      province: 'Province',
      requestUniqueId: 'RequestUniqueId',
      start: 'Start',
      startTime: 'StartTime',
      status: 'Status',
      taskFileId: 'TaskFileId',
      taskId: 'TaskId',
      timeRangeType: 'TimeRangeType',
      uniqueId: 'UniqueId',
      userFieldValue: 'UserFieldValue',
      userFieldkey: 'UserFieldkey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      city: 'string',
      clid: 'string',
      cno: 'string',
      customerNumber: 'string',
      displayNumber: 'string',
      downGrade: 'number',
      endTime: 'number',
      enterpriseId: 'number',
      gno: 'string',
      isRealAnswer: 'number',
      limit: 'number',
      province: 'string',
      requestUniqueId: 'string',
      start: 'number',
      startTime: 'number',
      status: 'number',
      taskFileId: 'number',
      taskId: 'number',
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

