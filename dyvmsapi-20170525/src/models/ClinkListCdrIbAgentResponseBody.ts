// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListCdrIbAgentResponseBodyDataCdrIbAgent extends $dara.Model {
  /**
   * @remarks
   * 及时应答
   * 
   * @example
   * 1
   */
  agentAnswerInTime?: number;
  /**
   * @remarks
   * 接听时间
   * 
   * @example
   * 1775024775
   */
  answerTime?: number;
  /**
   * @remarks
   * 接听设备
   * 
   * @example
   * 1
   */
  bindType?: number;
  /**
   * @remarks
   * 通话时长
   * 
   * @example
   * 30
   */
  bridgeDuration?: number;
  /**
   * @remarks
   * 接听状态
   * 
   * @example
   * 示例值示例值
   */
  bridgeStatus?: string;
  /**
   * @remarks
   * 呼叫结果
   * 
   * @example
   * -
   */
  bridgeStatusDetail?: string;
  /**
   * @remarks
   * CallID
   * 
   * @example
   * xxx
   */
  callId?: string;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * ClientName
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
   * 座席号
   * 
   * @example
   * 1122
   */
  cno?: string;
  /**
   * @remarks
   * 客户号码城市
   * 
   * @example
   * 示例值
   */
  customerCity?: string;
  /**
   * @remarks
   * 客户号码，带区号
   * 
   * @example
   * xxx
   */
  customerNumber?: string;
  /**
   * @remarks
   * 客户号码加密串
   * 
   * @example
   * xxx
   */
  customerNumberEncrypt?: string;
  /**
   * @remarks
   * 客户号码省份
   * 
   * @example
   * 示例值示例值
   */
  customerProvince?: string;
  /**
   * @remarks
   * 呼叫类型
   * 
   * @example
   * 示例值示例值
   */
  detailCallType?: string;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 82
   */
  endTime?: number;
  /**
   * @remarks
   * 热线号码
   * 
   * @example
   * Hotline
   */
  hotline?: string;
  /**
   * @remarks
   * 热线别名
   * 
   * @example
   * HotlineName
   */
  hotlineName?: string;
  /**
   * @remarks
   * 振铃时长
   * 
   * @example
   * 3
   */
  ibRingingDuration?: number;
  /**
   * @remarks
   * 通话ID
   * 
   * @example
   * medias_1-162046xxxx.12
   */
  mainUniqueId?: string;
  /**
   * @remarks
   * 座席接起时间
   * 
   * @example
   * 1775024775
   */
  offhookTime?: number;
  /**
   * @remarks
   * 挂断方
   * 
   * @example
   * 示例值
   */
  onHookSource?: string;
  /**
   * @remarks
   * 来电队列名称
   * 
   * @example
   * 示例值示例值示例值
   */
  qname?: string;
  /**
   * @remarks
   * 来电队列号
   * 
   * @example
   * 2233
   */
  qno?: string;
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
   * 主叫记忆。obRemember: 外呼主叫记忆，ibRemember: 来电主叫记忆
   * 
   * @example
   * obRemember
   */
  remember?: string;
  /**
   * @remarks
   * 振铃时间
   * 
   * @example
   * 1775024775
   */
  ringTime?: number;
  /**
   * @remarks
   * 语音播报时长
   * 
   * @example
   * 51
   */
  sayVoiceDuration?: number;
  /**
   * @remarks
   * 呼叫情况
   * 
   * @example
   * 示例值
   */
  sipCauseDesc?: string;
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
   * 唯一标识
   * 
   * @example
   * xxx
   */
  uniqueId?: string;
  /**
   * @remarks
   * WebRTCCallID
   * 
   * @example
   * xxx
   */
  webrtcCallId?: string;
  static names(): { [key: string]: string } {
    return {
      agentAnswerInTime: 'AgentAnswerInTime',
      answerTime: 'AnswerTime',
      bindType: 'BindType',
      bridgeDuration: 'BridgeDuration',
      bridgeStatus: 'BridgeStatus',
      bridgeStatusDetail: 'BridgeStatusDetail',
      callId: 'CallId',
      clientName: 'ClientName',
      clientNumber: 'ClientNumber',
      cno: 'Cno',
      customerCity: 'CustomerCity',
      customerNumber: 'CustomerNumber',
      customerNumberEncrypt: 'CustomerNumberEncrypt',
      customerProvince: 'CustomerProvince',
      detailCallType: 'DetailCallType',
      endTime: 'EndTime',
      hotline: 'Hotline',
      hotlineName: 'HotlineName',
      ibRingingDuration: 'IbRingingDuration',
      mainUniqueId: 'MainUniqueId',
      offhookTime: 'OffhookTime',
      onHookSource: 'OnHookSource',
      qname: 'Qname',
      qno: 'Qno',
      recordFile: 'RecordFile',
      remember: 'Remember',
      ringTime: 'RingTime',
      sayVoiceDuration: 'SayVoiceDuration',
      sipCauseDesc: 'SipCauseDesc',
      startTime: 'StartTime',
      uniqueId: 'UniqueId',
      webrtcCallId: 'WebrtcCallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAnswerInTime: 'number',
      answerTime: 'number',
      bindType: 'number',
      bridgeDuration: 'number',
      bridgeStatus: 'string',
      bridgeStatusDetail: 'string',
      callId: 'string',
      clientName: 'string',
      clientNumber: 'string',
      cno: 'string',
      customerCity: 'string',
      customerNumber: 'string',
      customerNumberEncrypt: 'string',
      customerProvince: 'string',
      detailCallType: 'string',
      endTime: 'number',
      hotline: 'string',
      hotlineName: 'string',
      ibRingingDuration: 'number',
      mainUniqueId: 'string',
      offhookTime: 'number',
      onHookSource: 'string',
      qname: 'string',
      qno: 'string',
      recordFile: 'string',
      remember: 'string',
      ringTime: 'number',
      sayVoiceDuration: 'number',
      sipCauseDesc: 'string',
      startTime: 'number',
      uniqueId: 'string',
      webrtcCallId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListCdrIbAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [座席接听记录列表] #座席接听记录列表
   */
  cdrIbAgent?: ClinkListCdrIbAgentResponseBodyDataCdrIbAgent[];
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * xxx
   */
  clinkRequestId?: string;
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 一页展示条数
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 滚动查询ID
   * 
   * @example
   * xxx
   */
  scrollId?: string;
  /**
   * @remarks
   * 总条数
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cdrIbAgent: 'CdrIbAgent',
      clinkRequestId: 'ClinkRequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scrollId: 'ScrollId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrIbAgent: { 'type': 'array', 'itemType': ClinkListCdrIbAgentResponseBodyDataCdrIbAgent },
      clinkRequestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scrollId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cdrIbAgent)) {
      $dara.Model.validateArray(this.cdrIbAgent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListCdrIbAgentResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkListCdrIbAgentResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
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
      data: ClinkListCdrIbAgentResponseBodyData,
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

