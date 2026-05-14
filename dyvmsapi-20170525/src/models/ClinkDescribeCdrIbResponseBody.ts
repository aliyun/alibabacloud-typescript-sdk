// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkDescribeCdrIbResponseBodyDataCdrIbInvestigation extends $dara.Model {
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * xxx
   */
  clientName?: string;
  /**
   * @remarks
   * 座席号
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1775024775
   */
  endTime?: number;
  /**
   * @remarks
   * 按键值
   * 
   * @example
   * 9
   */
  keys?: number;
  /**
   * @remarks
   * 多按键值
   * 
   * @example
   * xxx
   */
  multiKeys?: string;
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 1775024775
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientName: 'ClientName',
      cno: 'Cno',
      endTime: 'EndTime',
      keys: 'Keys',
      multiKeys: 'MultiKeys',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientName: 'string',
      cno: 'string',
      endTime: 'number',
      keys: 'number',
      multiKeys: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeCdrIbResponseBodyDataCdrIbIvrFlows extends $dara.Model {
  /**
   * @remarks
   * 执行动作
   * 
   * @example
   * 1
   */
  action?: number;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1775024775
   */
  endTime?: number;
  /**
   * @remarks
   * ivr 名称
   * 
   * @example
   * --
   */
  ivrName?: number;
  /**
   * @remarks
   * 节点 id
   * 
   * @example
   * 13321
   */
  path?: string;
  /**
   * @remarks
   * 节点名称
   * 
   * @example
   * -
   */
  pathName?: string;
  /**
   * @remarks
   * 按键值
   * 
   * @example
   * 6
   */
  pressKey?: string;
  /**
   * @remarks
   * 按键时间
   * 
   * @example
   * 1775024775
   */
  pressTime?: number;
  /**
   * @remarks
   * 路由结束时间
   * 
   * @example
   * 1775024775
   */
  routerEndTime?: number;
  /**
   * @remarks
   * 路由名称
   * 
   * @example
   * 8
   */
  routerName?: number;
  /**
   * @remarks
   * 路由开始时间
   * 
   * @example
   * 1775024775
   */
  routerStartTime?: number;
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 1775024775
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      endTime: 'EndTime',
      ivrName: 'IvrName',
      path: 'Path',
      pathName: 'PathName',
      pressKey: 'PressKey',
      pressTime: 'PressTime',
      routerEndTime: 'RouterEndTime',
      routerName: 'RouterName',
      routerStartTime: 'RouterStartTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'number',
      endTime: 'number',
      ivrName: 'number',
      path: 'string',
      pathName: 'string',
      pressKey: 'string',
      pressTime: 'number',
      routerEndTime: 'number',
      routerName: 'number',
      routerStartTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeCdrIbResponseBodyDataCdrIb extends $dara.Model {
  /**
   * @remarks
   * 接通时长
   * 
   * @example
   * 33
   */
  bridgeDuration?: number;
  /**
   * @remarks
   * 接通时间
   * 
   * @example
   * 1775024775
   */
  bridgeTime?: number;
  /**
   * @remarks
   * 通话记录ID
   * 
   * @example
   * b1651313-0e70-487c-99fd-3ea342b35b00
   */
  callId?: string;
  /**
   * @remarks
   * 呼入类型
   * 
   * @example
   * 4
   */
  callType?: string;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * 示例值
   */
  clientName?: string;
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
   * 座席接起时间
   * 
   * @example
   * 1775024775
   */
  clientOffhookTime?: number;
  /**
   * @remarks
   * 座席响铃时间
   * 
   * @example
   * 1775024775
   */
  clientRingingTime?: number;
  /**
   * @remarks
   * 座席号
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 客户来电城市
   * 
   * @example
   * 示例值示例值
   */
  customerCity?: string;
  /**
   * @remarks
   * 客户来电号码，带区号
   * 
   * @example
   * 010xxx
   */
  customerNumber?: string;
  /**
   * @remarks
   * 客户来电号码加密串
   * 
   * @example
   * xxx
   */
  customerNumberEncrypt?: string;
  /**
   * @remarks
   * 客户来电省份
   * 
   * @example
   * xxx
   */
  customerProvince?: string;
  /**
   * @remarks
   * 挂机方
   * 
   * @example
   * 示例值示例值
   */
  endReason?: string;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1775024775
   */
  endTime?: number;
  /**
   * @remarks
   * 是否邀评 0: 否 1: 是
   * 
   * @example
   * 39
   */
  evaluation?: number;
  /**
   * @remarks
   * 客户速挂，true：是；false：否
   * 
   * @example
   * true
   */
  fastHangUp?: boolean;
  /**
   * @remarks
   * 首次进入队列时间
   * 
   * @example
   * 1775024775
   */
  firstJoinQueueTime?: number;
  /**
   * @remarks
   * 来电热线号码
   * 
   * @example
   * 02788xxx888
   */
  hotline?: string;
  /**
   * @remarks
   * 热线别名
   * 
   * @example
   * 示例值
   */
  hotlineName?: string;
  /**
   * @remarks
   * 座席振铃时长
   * 
   * @example
   * 3
   */
  ibRingingDuration?: number;
  /**
   * @remarks
   * 排队时长
   * 
   * @example
   * 96
   */
  ibWaitDuration?: number;
  /**
   * @remarks
   * [满意度记录] #满意度记录
   */
  investigation?: ClinkDescribeCdrIbResponseBodyDataCdrIbInvestigation;
  /**
   * @remarks
   * [路由和IVR] #路由和IVR
   */
  ivrFlows?: ClinkDescribeCdrIbResponseBodyDataCdrIbIvrFlows[];
  /**
   * @remarks
   * IVR名称
   * 
   * @example
   * 示例值示例值示例值
   */
  ivrName?: string;
  /**
   * @remarks
   * 进入队列时间
   * 
   * @example
   * 1775024775
   */
  joinQueueTime?: number;
  /**
   * @remarks
   * 离开队列时间
   * 
   * @example
   * 1775024775
   */
  leaveQueueTime?: number;
  /**
   * @remarks
   * 标记
   * 
   * @example
   * 77
   */
  mark?: number;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值示例值
   */
  markData?: string;
  /**
   * @remarks
   * 来电队列号
   * 
   * @example
   * 1122
   */
  qno?: string;
  /**
   * @remarks
   * 队列及时应答
   * 
   * @example
   * 1775024775
   */
  queueAnswerInTime?: number;
  /**
   * @remarks
   * 录音文件名
   * 
   * @example
   * null
   */
  recordFile?: string;
  /**
   * @remarks
   * 语音播报时长
   * 
   * @example
   * 3
   */
  sayVoiceDuration?: number;
  /**
   * @remarks
   * 呼叫结果
   * 
   * @example
   * 示例值
   */
  sipCause?: string;
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 1775024775
   */
  startTime?: number;
  /**
   * @remarks
   * 接听状态
   * 
   * @example
   * 示例值示例值
   */
  status?: string;
  /**
   * @remarks
   * 接听状态映射
   * 
   * @example
   * 示例值
   */
  statusCode?: string;
  /**
   * @remarks
   * 展示通话标签详情,当请求参数fields中包含tagNames时返回
   */
  tagNames?: string[];
  /**
   * @remarks
   * 标签
   */
  tags?: string[];
  /**
   * @remarks
   * 总时长
   * 
   * @example
   * 87
   */
  totalDuration?: number;
  /**
   * @remarks
   * 通话记录唯一标识
   * 
   * @example
   * 示例值
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      bridgeDuration: 'BridgeDuration',
      bridgeTime: 'BridgeTime',
      callId: 'CallId',
      callType: 'CallType',
      clientName: 'ClientName',
      clientNumber: 'ClientNumber',
      clientOffhookTime: 'ClientOffhookTime',
      clientRingingTime: 'ClientRingingTime',
      cno: 'Cno',
      customerCity: 'CustomerCity',
      customerNumber: 'CustomerNumber',
      customerNumberEncrypt: 'CustomerNumberEncrypt',
      customerProvince: 'CustomerProvince',
      endReason: 'EndReason',
      endTime: 'EndTime',
      evaluation: 'Evaluation',
      fastHangUp: 'FastHangUp',
      firstJoinQueueTime: 'FirstJoinQueueTime',
      hotline: 'Hotline',
      hotlineName: 'HotlineName',
      ibRingingDuration: 'IbRingingDuration',
      ibWaitDuration: 'IbWaitDuration',
      investigation: 'Investigation',
      ivrFlows: 'IvrFlows',
      ivrName: 'IvrName',
      joinQueueTime: 'JoinQueueTime',
      leaveQueueTime: 'LeaveQueueTime',
      mark: 'Mark',
      markData: 'MarkData',
      qno: 'Qno',
      queueAnswerInTime: 'QueueAnswerInTime',
      recordFile: 'RecordFile',
      sayVoiceDuration: 'SayVoiceDuration',
      sipCause: 'SipCause',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      tagNames: 'TagNames',
      tags: 'Tags',
      totalDuration: 'TotalDuration',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridgeDuration: 'number',
      bridgeTime: 'number',
      callId: 'string',
      callType: 'string',
      clientName: 'string',
      clientNumber: 'string',
      clientOffhookTime: 'number',
      clientRingingTime: 'number',
      cno: 'string',
      customerCity: 'string',
      customerNumber: 'string',
      customerNumberEncrypt: 'string',
      customerProvince: 'string',
      endReason: 'string',
      endTime: 'number',
      evaluation: 'number',
      fastHangUp: 'boolean',
      firstJoinQueueTime: 'number',
      hotline: 'string',
      hotlineName: 'string',
      ibRingingDuration: 'number',
      ibWaitDuration: 'number',
      investigation: ClinkDescribeCdrIbResponseBodyDataCdrIbInvestigation,
      ivrFlows: { 'type': 'array', 'itemType': ClinkDescribeCdrIbResponseBodyDataCdrIbIvrFlows },
      ivrName: 'string',
      joinQueueTime: 'number',
      leaveQueueTime: 'number',
      mark: 'number',
      markData: 'string',
      qno: 'string',
      queueAnswerInTime: 'number',
      recordFile: 'string',
      sayVoiceDuration: 'number',
      sipCause: 'string',
      startTime: 'number',
      status: 'string',
      statusCode: 'string',
      tagNames: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': 'string' },
      totalDuration: 'number',
      uniqueId: 'string',
    };
  }

  validate() {
    if(this.investigation && typeof (this.investigation as any).validate === 'function') {
      (this.investigation as any).validate();
    }
    if(Array.isArray(this.ivrFlows)) {
      $dara.Model.validateArray(this.ivrFlows);
    }
    if(Array.isArray(this.tagNames)) {
      $dara.Model.validateArray(this.tagNames);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeCdrIbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [呼入通话记录] #呼入通话记录
   */
  cdrIb?: ClinkDescribeCdrIbResponseBodyDataCdrIb;
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * xxxx
   */
  clinkRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      cdrIb: 'CdrIb',
      clinkRequestId: 'ClinkRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrIb: ClinkDescribeCdrIbResponseBodyDataCdrIb,
      clinkRequestId: 'string',
    };
  }

  validate() {
    if(this.cdrIb && typeof (this.cdrIb as any).validate === 'function') {
      (this.cdrIb as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeCdrIbResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkDescribeCdrIbResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 088A4C31-A613-5339-B9E7-E4C4B8BE0F00
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
      data: ClinkDescribeCdrIbResponseBodyData,
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

