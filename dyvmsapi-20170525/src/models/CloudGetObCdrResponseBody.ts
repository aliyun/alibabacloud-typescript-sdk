// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetObCdrResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * name1
   */
  agentName?: string;
  /**
   * @remarks
   * 客户接听时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  answerTime?: string;
  /**
   * @remarks
   * 通话唯一标识
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  callId?: string;
  /**
   * @remarks
   * 呼叫类型 转移
   * 
   * @example
   * 示例值示例值
   */
  callType?: string;
  /**
   * @remarks
   * 呼叫类型编码，如102
   * 
   * @example
   * 102
   */
  callTypeCode?: string;
  /**
   * @remarks
   * 被叫号码区号
   * 
   * @example
   * 010
   */
  calleeAreaCode?: string;
  /**
   * @remarks
   * 呼叫的号码，可能是座席也可能是普通电话
   * 
   * @example
   * 01041003090
   */
  calleeNumber?: string;
  /**
   * @remarks
   * 外显号码
   * 
   * @example
   * 02138276106
   */
  clid?: string;
  /**
   * @remarks
   * 座席工号，如2000
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 客户侧真实外显号码，当使用AXB场景进行外呼时，客户侧真实外显号码为虚拟号
   * 
   * @example
   * 02138276106
   */
  displayNumber?: string;
  /**
   * @remarks
   * 结束原因,接听之后的挂机原因 1000:主通道挂机 1001:非主通道挂机 1002:被强拆
   * 
   * @example
   * 1000
   */
  endReason?: string;
  /**
   * @remarks
   * 电话结束时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  endTime?: string;
  /**
   * @example
   * WH514097
   */
  gno?: string;
  /**
   * @remarks
   * Id
   * 
   * @example
   * 797880898
   */
  id?: string;
  /**
   * @remarks
   * 入队列时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  joinQueueTime?: string;
  /**
   * @remarks
   * 主通话记录来电类型 主叫外呼
   * 
   * @example
   * 示例值示例值
   */
  mainCallType?: string;
  /**
   * @remarks
   * 主外呼通话记录唯一标识
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  mainUniqueId?: string;
  /**
   * @remarks
   * 队列号
   * 
   * @example
   * 131
   */
  qno?: string;
  /**
   * @remarks
   * 进入队列时间
   * 
   * @example
   * 1775024775
   */
  queueName?: string;
  recordFile?: string[];
  /**
   * @remarks
   * 响铃时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  ringingTime?: string;
  /**
   * @remarks
   * SIP响应码：200 ~ 699
   * 
   * @example
   * 200
   */
  sipCause?: string;
  /**
   * @remarks
   * 呼叫结果
   * 
   * @example
   * 示例值示例值示例值
   */
  sipCauseStr?: string;
  /**
   * @remarks
   * 呼叫客户时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  startTime?: string;
  /**
   * @remarks
   * 外呼结果，如接听
   * 
   * @example
   * 示例值示例值
   */
  status?: string;
  /**
   * @example
   * 2
   */
  statusCode?: string;
  /**
   * @example
   * 示例值
   */
  taskName?: string;
  /**
   * @remarks
   * 总通话时长秒数，单位是s
   * 
   * @example
   * 50
   */
  totalDuration?: string;
  /**
   * @remarks
   * 中继群组代号
   * 
   * @example
   * 30019
   */
  trunkGroupKey?: string;
  /**
   * @remarks
   * 号码状态识别录音文件名
   * 
   * @example
   * name5
   */
  tsiFile?: string;
  /**
   * @remarks
   * 从通道唯一标识
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  uniqueId?: string;
  /**
   * @example
   * 示例值
   */
  XNumber?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      answerTime: 'AnswerTime',
      callId: 'CallId',
      callType: 'CallType',
      callTypeCode: 'CallTypeCode',
      calleeAreaCode: 'CalleeAreaCode',
      calleeNumber: 'CalleeNumber',
      clid: 'Clid',
      cno: 'Cno',
      displayNumber: 'DisplayNumber',
      endReason: 'EndReason',
      endTime: 'EndTime',
      gno: 'Gno',
      id: 'Id',
      joinQueueTime: 'JoinQueueTime',
      mainCallType: 'MainCallType',
      mainUniqueId: 'MainUniqueId',
      qno: 'Qno',
      queueName: 'QueueName',
      recordFile: 'RecordFile',
      ringingTime: 'RingingTime',
      sipCause: 'SipCause',
      sipCauseStr: 'SipCauseStr',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      taskName: 'TaskName',
      totalDuration: 'TotalDuration',
      trunkGroupKey: 'TrunkGroupKey',
      tsiFile: 'TsiFile',
      uniqueId: 'UniqueId',
      XNumber: 'XNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      answerTime: 'string',
      callId: 'string',
      callType: 'string',
      callTypeCode: 'string',
      calleeAreaCode: 'string',
      calleeNumber: 'string',
      clid: 'string',
      cno: 'string',
      displayNumber: 'string',
      endReason: 'string',
      endTime: 'string',
      gno: 'string',
      id: 'string',
      joinQueueTime: 'string',
      mainCallType: 'string',
      mainUniqueId: 'string',
      qno: 'string',
      queueName: 'string',
      recordFile: { 'type': 'array', 'itemType': 'string' },
      ringingTime: 'string',
      sipCause: 'string',
      sipCauseStr: 'string',
      startTime: 'string',
      status: 'string',
      statusCode: 'string',
      taskName: 'string',
      totalDuration: 'string',
      trunkGroupKey: 'string',
      tsiFile: 'string',
      uniqueId: 'string',
      XNumber: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recordFile)) {
      $dara.Model.validateArray(this.recordFile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetObCdrResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席外呼通话记录详情
   */
  list?: CloudGetObCdrResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudGetObCdrResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetObCdrResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudGetObCdrResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 9FF70B74-1B3C-44C1-ACDF-8DF962988F0E
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
      data: CloudGetObCdrResponseBodyData,
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

