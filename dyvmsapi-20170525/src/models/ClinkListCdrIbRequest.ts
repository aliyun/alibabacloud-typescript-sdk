// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListCdrIbRequest extends $dara.Model {
  /**
   * @remarks
   * 通话时长范围查询最小值，和bridgeDurationEnd配合使用
   * 
   * @example
   * 40
   */
  bridgeDuration?: number;
  /**
   * @remarks
   * 通话时长范围查询最大值
   * 
   * @example
   * 60
   */
  bridgeDurationEnd?: number;
  /**
   * @remarks
   * 接听时间，时间戳格式精确到秒。
   * 
   * @example
   * 1775024775
   */
  bridgeTime?: number;
  /**
   * @remarks
   * 接听时间查询截止，时间戳格式精确到秒。
   * 
   * @example
   * 1775024775
   */
  bridgeTimeEnd?: number;
  /**
   * @remarks
   * 座席电话
   * 
   * @example
   * xxx
   */
  clientNumber?: string;
  /**
   * @remarks
   * 座席号
   * 
   * @example
   * 1111
   */
  cnos?: string;
  /**
   * @remarks
   * 客户号码
   * 
   * @example
   * xxx
   */
  customerNumber?: string;
  /**
   * @remarks
   * 结束时间，时间戳格式精确到秒。
   * 
   * @example
   * 1775024775
   */
  endTime?: number;
  /**
   * @remarks
   * 结束时间查询截止，时间戳格式精确到秒。
   * 
   * @example
   * 1775024775
   */
  endTimeEnd?: number;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 首呼座席
   * 
   * @example
   * 1122
   */
  firstCallCno?: string;
  /**
   * @remarks
   * 首呼座席电话
   * 
   * @example
   * xxx
   */
  firstCallNumber?: string;
  /**
   * @remarks
   * 首呼队列
   * 
   * @example
   * 2222
   */
  firstCallQno?: string;
  /**
   * @remarks
   * 是否隐藏号码。  0: 不隐藏，1: 中间四位，2: 最后八位，3: 全部号码，4: 最后四位。默认值为 0
   * 
   * @example
   * 0
   */
  hiddenType?: number;
  /**
   * @remarks
   * 查询条数，范围 10-100。默认值为 10。注：limit + offset 不允许超过100000
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * 通话记录唯一标识
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  mainUniqueId?: string;
  /**
   * @remarks
   * 偏移量，范围 0-99990。默认值为 0。注：limit + offset 不允许超过100000
   * 
   * @example
   * 0
   */
  offset?: number;
  ownerId?: number;
  /**
   * @remarks
   * 队列号
   * 
   * @example
   * 1122
   */
  qnos?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 滚动查询ID。配合scrollSearch使用，第一次查询时不需要传递此参数，后续查询可从返回列表中取值，并传参数。当scrollId为空时，代表滚动查询结束。
   * 
   * @example
   * xxx
   */
  scrollId?: string;
  /**
   * @remarks
   * 是否滚动查询。默认false，true代表使用滚动查询。
   * 
   * @example
   * false
   */
  scrollSearch?: string;
  /**
   * @remarks
   * 开始时间，时间戳格式精确到秒。默认值取当前月份第一天
   * 
   * @example
   * 1775024775
   */
  startTime?: number;
  /**
   * @remarks
   * 开始时间查询截止，时间戳格式精确到秒，开始时间和结束时间跨度不能超过一个月。默认值取当前时间
   * 
   * @example
   * 1775024775
   */
  startTimeEnd?: number;
  /**
   * @remarks
   * 接听状态。取值范围如下：  1: 人工接听  2: 人工未接听  3: 系统应答  4: 系统未应答  默认全部
   * 
   * @example
   * 1
   */
  statuses?: number;
  /**
   * @remarks
   * 总时长范围查询最小值，和totalDurationEnd配合使用
   * 
   * @example
   * 69
   */
  totalDuration?: number;
  /**
   * @remarks
   * 总时长范围查询最大值
   * 
   * @example
   * 47
   */
  totalDurationEnd?: number;
  static names(): { [key: string]: string } {
    return {
      bridgeDuration: 'BridgeDuration',
      bridgeDurationEnd: 'BridgeDurationEnd',
      bridgeTime: 'BridgeTime',
      bridgeTimeEnd: 'BridgeTimeEnd',
      clientNumber: 'ClientNumber',
      cnos: 'Cnos',
      customerNumber: 'CustomerNumber',
      endTime: 'EndTime',
      endTimeEnd: 'EndTimeEnd',
      enterpriseId: 'EnterpriseId',
      firstCallCno: 'FirstCallCno',
      firstCallNumber: 'FirstCallNumber',
      firstCallQno: 'FirstCallQno',
      hiddenType: 'HiddenType',
      limit: 'Limit',
      mainUniqueId: 'MainUniqueId',
      offset: 'Offset',
      ownerId: 'OwnerId',
      qnos: 'Qnos',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scrollId: 'ScrollId',
      scrollSearch: 'ScrollSearch',
      startTime: 'StartTime',
      startTimeEnd: 'StartTimeEnd',
      statuses: 'Statuses',
      totalDuration: 'TotalDuration',
      totalDurationEnd: 'TotalDurationEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridgeDuration: 'number',
      bridgeDurationEnd: 'number',
      bridgeTime: 'number',
      bridgeTimeEnd: 'number',
      clientNumber: 'string',
      cnos: 'string',
      customerNumber: 'string',
      endTime: 'number',
      endTimeEnd: 'number',
      enterpriseId: 'number',
      firstCallCno: 'string',
      firstCallNumber: 'string',
      firstCallQno: 'string',
      hiddenType: 'number',
      limit: 'number',
      mainUniqueId: 'string',
      offset: 'number',
      ownerId: 'number',
      qnos: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scrollId: 'string',
      scrollSearch: 'string',
      startTime: 'number',
      startTimeEnd: 'number',
      statuses: 'number',
      totalDuration: 'number',
      totalDurationEnd: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

