// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryWebcallCdrResponseBodyDataListRecordFile extends $dara.Model {
  /**
   * @remarks
   * 录音文件名
   * 
   * @example
   * name3
   */
  file?: string;
  /**
   * @remarks
   * 1. 混音 2. 分线录音（保留2个单声道WAV） 3.留言 5. 分线录音（保留1个双声道WAV）
   * 
   * @example
   * 1
   */
  monitorType?: number;
  /**
   * @remarks
   * 取值：record,voicemail说明：record是录音， voicemail是留言
   * 
   * @example
   * record
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      file: 'File',
      monitorType: 'Monitor_type',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: 'string',
      monitorType: 'number',
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

export class CloudQueryWebcallCdrResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  agentName?: string;
  /**
   * @remarks
   * 系统接听时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1774822302
   */
  answerTime?: string;
  /**
   * @remarks
   * 服务处理时长秒数，单位是s
   * 
   * @example
   * 4
   */
  bridgeDuration?: string;
  /**
   * @remarks
   * 座席接听时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1774822308
   */
  bridgeTime?: string;
  /**
   * @remarks
   * 通话唯一标识
   * 
   * @example
   * 4e18e73a-af6a-4a77-92ea-628a6effd64b
   */
  callId?: string;
  /**
   * @remarks
   * 呼叫类型 webcall
   * 
   * @example
   * webcall
   */
  callType?: string;
  /**
   * @remarks
   * 第二侧外显号码
   * 
   * @example
   * 02138276106
   */
  calleeClid?: string;
  /**
   * @remarks
   * 第二侧真实外显号码
   * 
   * @example
   * 02138276106
   */
  calleeDisplayNumber?: string;
  /**
   * @remarks
   * 座席电话 区号 +7或8位的固话号码，区号与固话号码之间无\\"-\\"；或11位长度的手机号码。0104100596
   * 
   * @example
   * 0104100596
   */
  calleeNumber?: string;
  /**
   * @remarks
   * 客户响铃时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1774822302
   */
  calleeRingingTime?: string;
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
   * 2000
   */
  cno?: string;
  /**
   * @remarks
   * 客户号码归属城市,北京
   * 
   * @example
   * 示例值示例值示例值
   */
  customerCity?: string;
  /**
   * @remarks
   * 客户号码 国内固话或手机，区号 + 7或8位的固话号码，区号与固话号码之间无\\"-\\"；或11位长度的手机号码。如 01041005968或18701051984 或虚拟号-分机号场景格式，如 18701051984-7538
   * 
   * @example
   * 18701051984
   */
  customerNumber?: string;
  /**
   * @remarks
   * 客户号码归属省份，如 北京
   * 
   * @example
   * 示例值示例值示例值
   */
  customerProvince?: string;
  /**
   * @remarks
   * 转话机后,话机响铃时间
   * 
   * @example
   * 1774822303
   */
  detailRingingTime?: string;
  /**
   * @remarks
   * 真实外显号码，当使用AXB场景进行外呼时，真实外显号码为虚拟号
   * 
   * @example
   * 02138276106
   */
  displayNumber?: string;
  /**
   * @example
   * 0
   */
  downGrade?: string;
  /**
   * @example
   * 0
   */
  downGradeCounts?: string;
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
   * 1774822312
   */
  endTime?: string;
  /**
   * @example
   * WH333
   */
  gno?: string;
  /**
   * @remarks
   * Id
   * 
   * @example
   * 14454
   */
  id?: string;
  /**
   * @remarks
   * 是否真人接听：1 - 是、0 - 否、空值
   * 
   * @example
   * 1
   */
  isRealAnswer?: string;
  /**
   * @remarks
   * IVR名称，默认自定义
   * 
   * @example
   * webcall
   */
  ivrName?: string;
  /**
   * @remarks
   * 中继号码
   * 
   * @example
   * 42003255
   */
  numberTrunk?: string;
  /**
   * @remarks
   * 队列号，如1000
   * 
   * @example
   * 1000
   */
  qno?: string;
  /**
   * @remarks
   * 真人接听时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  realAnswerTime?: string;
  /**
   * @remarks
   * 通话记录录音数组
   */
  recordFile?: CloudQueryWebcallCdrResponseBodyDataListRecordFile[];
  /**
   * @remarks
   * 用户自定义通话标识字段
   * 
   * @example
   * 214b76605a43d02f4aab4e61cfa63128
   */
  requestUniqueId?: string;
  /**
   * @remarks
   * 号码状态识别编码，详见
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
   * 示例值示例值
   */
  sipCauseStr?: string;
  /**
   * @remarks
   * 电话进入系统时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1774822302
   */
  startTime?: string;
  /**
   * @remarks
   * 外呼结果， 如客户接听
   * 
   * @example
   * 示例值示例值
   */
  status?: string;
  /**
   * @remarks
   * status对应的状态码
   * 
   * @example
   * 24
   */
  statusCode?: string;
  /**
   * @remarks
   * 任务文件id
   * 
   * @example
   * 12144
   */
  taskFileId?: string;
  /**
   * @remarks
   * 任务id
   * 
   * @example
   * 13354
   */
  taskId?: string;
  /**
   * @remarks
   * 总通话时长秒数，单位是s
   * 
   * @example
   * 10
   */
  totalDuration?: string;
  /**
   * @remarks
   * 中继组标识
   * 
   * @example
   * 30019
   */
  trunkGroupKey?: string;
  /**
   * @remarks
   * 电话唯一标识
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  uniqueId?: string;
  /**
   * @example
   * 6
   */
  waitDuration?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      answerTime: 'AnswerTime',
      bridgeDuration: 'BridgeDuration',
      bridgeTime: 'BridgeTime',
      callId: 'CallId',
      callType: 'CallType',
      calleeClid: 'CalleeClid',
      calleeDisplayNumber: 'CalleeDisplayNumber',
      calleeNumber: 'CalleeNumber',
      calleeRingingTime: 'CalleeRingingTime',
      clid: 'Clid',
      cno: 'Cno',
      customerCity: 'CustomerCity',
      customerNumber: 'CustomerNumber',
      customerProvince: 'CustomerProvince',
      detailRingingTime: 'DetailRingingTime',
      displayNumber: 'DisplayNumber',
      downGrade: 'DownGrade',
      downGradeCounts: 'DownGradeCounts',
      endReason: 'EndReason',
      endTime: 'EndTime',
      gno: 'Gno',
      id: 'Id',
      isRealAnswer: 'IsRealAnswer',
      ivrName: 'IvrName',
      numberTrunk: 'NumberTrunk',
      qno: 'Qno',
      realAnswerTime: 'RealAnswerTime',
      recordFile: 'RecordFile',
      requestUniqueId: 'RequestUniqueId',
      sipCause: 'SipCause',
      sipCauseStr: 'SipCauseStr',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      taskFileId: 'TaskFileId',
      taskId: 'TaskId',
      totalDuration: 'TotalDuration',
      trunkGroupKey: 'TrunkGroupKey',
      uniqueId: 'UniqueId',
      waitDuration: 'WaitDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      answerTime: 'string',
      bridgeDuration: 'string',
      bridgeTime: 'string',
      callId: 'string',
      callType: 'string',
      calleeClid: 'string',
      calleeDisplayNumber: 'string',
      calleeNumber: 'string',
      calleeRingingTime: 'string',
      clid: 'string',
      cno: 'string',
      customerCity: 'string',
      customerNumber: 'string',
      customerProvince: 'string',
      detailRingingTime: 'string',
      displayNumber: 'string',
      downGrade: 'string',
      downGradeCounts: 'string',
      endReason: 'string',
      endTime: 'string',
      gno: 'string',
      id: 'string',
      isRealAnswer: 'string',
      ivrName: 'string',
      numberTrunk: 'string',
      qno: 'string',
      realAnswerTime: 'string',
      recordFile: { 'type': 'array', 'itemType': CloudQueryWebcallCdrResponseBodyDataListRecordFile },
      requestUniqueId: 'string',
      sipCause: 'string',
      sipCauseStr: 'string',
      startTime: 'string',
      status: 'string',
      statusCode: 'string',
      taskFileId: 'string',
      taskId: 'string',
      totalDuration: 'string',
      trunkGroupKey: 'string',
      uniqueId: 'string',
      waitDuration: 'string',
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

export class CloudQueryWebcallCdrResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * webcall通话记录数组
   */
  list?: CloudQueryWebcallCdrResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudQueryWebcallCdrResponseBodyDataList },
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

export class CloudQueryWebcallCdrResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudQueryWebcallCdrResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
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
      data: CloudQueryWebcallCdrResponseBodyData,
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

