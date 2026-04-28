// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryPredictiveCallCdrResponseBodyDataListRecordFile extends $dara.Model {
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
   * 取值：record,voicemail 说明：record是录音， voicemail是留言
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

export class CloudQueryPredictiveCallCdrResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 座席姓名, 如\\"张三1010\\"
   * 
   * @example
   * 示例值
   */
  agentName?: string;
  /**
   * @remarks
   * 系统接听时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  answerTime?: string;
  /**
   * @remarks
   * 服务处理时长秒数，单位是s
   * 
   * @example
   * 50
   */
  bridgeDuration?: string;
  /**
   * @remarks
   * 座席接听时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1774822305
   */
  bridgeTime?: string;
  /**
   * @remarks
   * 通话唯一标识
   * 
   * @example
   * 3cdf8d08-0216-42df-bba5-0fd45c93c9b3
   */
  callId?: string;
  /**
   * @remarks
   * 呼叫类型 webcall
   * 
   * @example
   * 示例值
   */
  callType?: string;
  /**
   * @remarks
   * 第二侧外显号码
   * 
   * @example
   * 15553333
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
   * 1775024775
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
   * 1111
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
   * 话机后话机响铃时间，时间戳，精确到s；无或未转接时可能为 0；如1480904471
   * 
   * @example
   * 1775024775
   */
  detailRingingTime?: string;
  /**
   * @remarks
   * 客户侧真实外显号码，当使用AXB场景进行外呼时，客户侧的真实外显号码为虚拟号
   * 
   * @example
   * 1775024
   */
  displayNumber?: string;
  /**
   * @remarks
   * 是否呼叫降级, 0-否, 1-是
   * 
   * @example
   * 0
   */
  downGrade?: string;
  /**
   * @remarks
   * 降级次数
   * 
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
   * 1775024775
   */
  endTime?: string;
  /**
   * @remarks
   * 外呼组号：座席所属外呼组编号，如2000
   * 
   * @example
   * 2000
   */
  gno?: string;
  /**
   * @remarks
   * 通话记录主键标识；
   * 
   * @example
   * 123546546
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
   * IvrName
   */
  ivrName?: string;
  /**
   * @remarks
   * 中继号码
   * 
   * @example
   * 15322355
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
   * 1774904471
   */
  realAnswerTime?: string;
  /**
   * @remarks
   * 通话记录录音数组，json格式
   */
  recordFile?: CloudQueryPredictiveCallCdrResponseBodyDataListRecordFile[];
  /**
   * @remarks
   * 用户自定义通话标识字段
   * 
   * @example
   * 543252344
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
   * 示例值示例值示例值
   */
  sipCauseStr?: string;
  /**
   * @remarks
   * 电话进入系统时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1774822300
   */
  startTime?: string;
  /**
   * @remarks
   * 外呼结果， 如客户接听
   * 
   * @example
   * 示例值
   */
  status?: string;
  /**
   * @remarks
   * 外呼结果状态码：40 客户未接听；41 客户接听；42 已呼叫；43 双方接听；详见接口文档请求参数中 status 说明
   * 
   * @example
   * 41
   */
  statusCode?: string;
  /**
   * @remarks
   * 任务文件id
   * 
   * @example
   * 111
   */
  taskFileId?: string;
  /**
   * @remarks
   * 任务id
   * 
   * @example
   * 1234
   */
  taskId?: string;
  /**
   * @remarks
   * 任务名称
   * 
   * @example
   * name2
   */
  taskName?: string;
  /**
   * @remarks
   * 总通话时长秒数，单位是s
   * 
   * @example
   * 55
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
   * 电话唯一标识
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  uniqueId?: string;
  /**
   * @remarks
   * 通话记录自定义字段，json格式
   * 
   * @example
   * {}
   */
  userField?: { [key: string]: any };
  /**
   * @remarks
   * 通话质量百分比，0–100，in/out 方向说话占用百分比
   * 
   * @example
   * 23
   */
  vadIn?: string;
  /**
   * @remarks
   * 通话质量百分比，0–100，in/out 方向说话占用百分比
   * 
   * @example
   * 77
   */
  vadOut?: string;
  /**
   * @remarks
   * 客户等待时长秒数，单位是s
   * 
   * @example
   * 10
   */
  waitDuration?: string;
  /**
   * @remarks
   * 虚拟号
   * 
   * @example
   * 6677333
   */
  XNumber?: string;
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
      taskName: 'TaskName',
      totalDuration: 'TotalDuration',
      trunkGroupKey: 'TrunkGroupKey',
      uniqueId: 'UniqueId',
      userField: 'UserField',
      vadIn: 'VadIn',
      vadOut: 'VadOut',
      waitDuration: 'WaitDuration',
      XNumber: 'XNumber',
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
      recordFile: { 'type': 'array', 'itemType': CloudQueryPredictiveCallCdrResponseBodyDataListRecordFile },
      requestUniqueId: 'string',
      sipCause: 'string',
      sipCauseStr: 'string',
      startTime: 'string',
      status: 'string',
      statusCode: 'string',
      taskFileId: 'string',
      taskId: 'string',
      taskName: 'string',
      totalDuration: 'string',
      trunkGroupKey: 'string',
      uniqueId: 'string',
      userField: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      vadIn: 'string',
      vadOut: 'string',
      waitDuration: 'string',
      XNumber: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recordFile)) {
      $dara.Model.validateArray(this.recordFile);
    }
    if(this.userField) {
      $dara.Model.validateMap(this.userField);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudQueryPredictiveCallCdrResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 预测式外呼通话记录数组
   */
  list?: CloudQueryPredictiveCallCdrResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudQueryPredictiveCallCdrResponseBodyDataList },
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

export class CloudQueryPredictiveCallCdrResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudQueryPredictiveCallCdrResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
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
      data: CloudQueryPredictiveCallCdrResponseBodyData,
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

