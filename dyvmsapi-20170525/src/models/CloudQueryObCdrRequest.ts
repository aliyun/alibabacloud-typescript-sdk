// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryObCdrRequest extends $dara.Model {
  /**
   * @remarks
   * 座席姓名
   * 
   * @example
   * name3
   */
  agentName?: string;
  /**
   * @remarks
   * 座席号码
   * 
   * @example
   * 41008502
   */
  agentNumber?: string;
  /**
   * @remarks
   * 呼叫类型；为空表示全部，可选值为：4:预览外呼 6:主叫外呼 9:内部呼叫
   * 
   * @example
   * 4
   */
  callType?: number;
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
   * 客户侧外显号码过滤条件
   * 
   * @example
   * 4100
   */
  clid?: string;
  /**
   * @remarks
   * 座席工号，单个座席工号3-10位，支持一个或多个座席工号查询，多个座席工号以英文逗号隔开，一次最多支持100个。不支持模糊匹配。
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 客户号码，支持一个或多个客户号码查询，多个客户号码以英文逗号隔开，一次最多支持100个。不支持模糊匹配。
   * 
   * @example
   * 13322223333
   */
  customerNumber?: string;
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
   * 座席所属外呼组 单个外呼组号2-20位，支持一个或多个座席工号查询，多个座席工号以英文逗号隔开，一次最多支持10个。不支持模糊匹配。
   * 
   * @example
   * 455
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
   * 客户侧真实外显号码过滤条件，当使用虚拟号进行AXB外呼且开关打开时，实际过滤的客户侧真实外显号码是虚拟号
   * 
   * @example
   * 2000
   */
  leftDisplayNumber?: string;
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
   * 排序方式；取值说明：0: 按照记录产生的时序顺序排序，1：按照记录产生的时序逆序排序，2: 按照结束时间的时序顺序排序，3：按照结束时间的时序逆序排序
   * 
   * @example
   * 0
   */
  order?: number;
  /**
   * @remarks
   * 客户电话归属省份；为空表示全部，如"四川"，此参数需要URLEncode
   * 
   * @example
   * 示例值示例值
   */
  province?: string;
  /**
   * @remarks
   * 查询请求唯一id对应的记录信息，默认查询当前月，如requestUniqueId不属于当前月，查询时请传递查询参数 查询开始时间(startTime)
   * 
   * @example
   * req_uniq_1-162046xxxx.12
   */
  requestUniqueId?: string;
  /**
   * @remarks
   * 是否返回总条数；取值说明：0: 不返回，1：返回，不传默认为1
   * 
   * @example
   * 1
   */
  returnCount?: number;
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
   * 呼叫结果；参数说明：30 座席未接听; 31 座席接听,未呼叫客户; 32 座席接听,客户未接听; 33 双方接听; 50 主叫外呼接听; 51 主叫外呼,客户未接听; 52 主叫外呼,双方接听。
   * 
   * @example
   * 33
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
   * 用户自定义参数指定查询value；传递该参数时必须传递userFieldKey，仅查询一个字段，不支持模糊匹配，构造的自定义字段查询条件为:{"userFieldkey":"userFieldvalue"}，此参数需要URLEncode
   * 
   * @example
   * {"userFieldkey":"userFieldvalue"}
   */
  userFieldValue?: string;
  /**
   * @remarks
   * 用户自定义参数指定查询key；传递该参数时必须传递userFieldValue，仅查询一个字段，不支持模糊匹配，构造的自定义字段查询条件为:{"userFieldkey":"userFieldvalue"}，此参数需要URLEncode
   * 
   * @example
   * {"userFieldkey":"userFieldvalue"}
   */
  userFieldkey?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      agentNumber: 'AgentNumber',
      callType: 'CallType',
      city: 'City',
      clid: 'Clid',
      cno: 'Cno',
      customerNumber: 'CustomerNumber',
      downGrade: 'DownGrade',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      gno: 'Gno',
      isRealAnswer: 'IsRealAnswer',
      leftDisplayNumber: 'LeftDisplayNumber',
      limit: 'Limit',
      order: 'Order',
      province: 'Province',
      requestUniqueId: 'RequestUniqueId',
      returnCount: 'ReturnCount',
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
      agentName: 'string',
      agentNumber: 'string',
      callType: 'number',
      city: 'string',
      clid: 'string',
      cno: 'string',
      customerNumber: 'string',
      downGrade: 'number',
      endTime: 'number',
      enterpriseId: 'number',
      gno: 'string',
      isRealAnswer: 'number',
      leftDisplayNumber: 'string',
      limit: 'number',
      order: 'number',
      province: 'string',
      requestUniqueId: 'string',
      returnCount: 'number',
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

