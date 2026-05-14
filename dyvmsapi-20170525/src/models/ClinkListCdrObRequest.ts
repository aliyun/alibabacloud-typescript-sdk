// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListCdrObRequest extends $dara.Model {
  /**
   * @remarks
   * 通话时长范围查询最小值，和bridgeDurationEnd配合使用
   * 
   * @example
   * 10
   */
  bridgeDuration?: number;
  /**
   * @remarks
   * 通话时长范围查询最大值
   * 
   * @example
   * 11
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
   * 通话类型  4: 预览外呼，6: 主叫外呼， 默认全部
   * 
   * @example
   * 4
   */
  callType?: number;
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
   * 座席工号
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
   * 是否隐藏号码。  0: 不隐藏，1: 中间四位，2: 最后八位，3: 全部号码，4: 最后四位。默认值为 0
   * 
   * @example
   * 0
   */
  hiddenType?: number;
  /**
   * @remarks
   * 外显号码
   * 
   * @example
   * xxx
   */
  leftClid?: string;
  /**
   * @remarks
   * 查询条数，范围 10-100。默认值为 10。注：limit + offset 不允许超过100000
   * 
   * @example
   * 19
   */
  limit?: number;
  /**
   * @remarks
   * 通话记录唯一标识
   * 
   * @example
   * MainUniqueId
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
   * 外呼组
   * 
   * @example
   * 2222
   */
  qnos?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 滚动查询ID。配合scrollSearch使用，第一次查询时不需要传递此参数，后续查询可从返回列表中取值，并传参数。当scrollId为空时，代表滚动查询结束。
   * 
   * @example
   * ScrollId
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
   * 接听状态。取值范围如下：  1: 客户未接听  2: 座席未接听  3: 客户接听  4: 座席接听  默认全部
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * 呼叫任务名称
   * 
   * @example
   * TaskName
   */
  taskName?: string;
  /**
   * @remarks
   * 总时长范围查询最小值，和totalDurationEnd配合使用
   * 
   * @example
   * 80
   */
  totalDuration?: number;
  /**
   * @remarks
   * 总时长范围查询最大值
   * 
   * @example
   * 86
   */
  totalDurationEnd?: number;
  /**
   * @remarks
   * 虚拟号码
   * 
   * @example
   * xxx
   */
  xnumber?: string;
  static names(): { [key: string]: string } {
    return {
      bridgeDuration: 'BridgeDuration',
      bridgeDurationEnd: 'BridgeDurationEnd',
      bridgeTime: 'BridgeTime',
      bridgeTimeEnd: 'BridgeTimeEnd',
      callType: 'CallType',
      clientNumber: 'ClientNumber',
      cnos: 'Cnos',
      customerNumber: 'CustomerNumber',
      endTime: 'EndTime',
      endTimeEnd: 'EndTimeEnd',
      enterpriseId: 'EnterpriseId',
      hiddenType: 'HiddenType',
      leftClid: 'LeftClid',
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
      status: 'Status',
      taskName: 'TaskName',
      totalDuration: 'TotalDuration',
      totalDurationEnd: 'TotalDurationEnd',
      xnumber: 'Xnumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridgeDuration: 'number',
      bridgeDurationEnd: 'number',
      bridgeTime: 'number',
      bridgeTimeEnd: 'number',
      callType: 'number',
      clientNumber: 'string',
      cnos: 'string',
      customerNumber: 'string',
      endTime: 'number',
      endTimeEnd: 'number',
      enterpriseId: 'number',
      hiddenType: 'number',
      leftClid: 'string',
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
      status: 'number',
      taskName: 'string',
      totalDuration: 'number',
      totalDurationEnd: 'number',
      xnumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

