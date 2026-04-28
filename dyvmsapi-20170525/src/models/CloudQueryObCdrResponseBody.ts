// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryObCdrResponseBodyDataListRecordFile extends $dara.Model {
  /**
   * @remarks
   * 录音文件名
   * 
   * @example
   * record_file_name.
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

export class CloudQueryObCdrResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 座席侧外显号码
   * 
   * @example
   * 02138276106
   */
  agentClid?: string;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * name3
   */
  agentName?: string;
  /**
   * @remarks
   * 座席电话 区号 +7或8位的固话号码，区号与固话号码之间无\\"-\\"；或11位长度的手机号码。0104100596
   * 
   * @example
   * 0104100596
   */
  agentNumber?: string;
  /**
   * @remarks
   * 座席接听时间，时间戳，精确到s，如1480904471
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
   * 10
   */
  bridgeDuration?: string;
  /**
   * @remarks
   * 双方接听时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  bridgeTime?: string;
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
   * 呼叫类型：4、预览外呼; 6、主叫外呼
   * 
   * @example
   * 4
   */
  callType?: string;
  /**
   * @remarks
   * 客户侧响铃时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  calleeRingingTime?: string;
  /**
   * @remarks
   * 客户侧外显号码，当使用虚拟号进行AXB外呼且开关打开时，实际返回的客户侧外显号码是虚拟号
   * 
   * @example
   * 41008502
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
   * 客户号码区号
   * 
   * @example
   * 028
   */
  customerAreaCode?: string;
  /**
   * @remarks
   * 客户号码归属城市,北京
   * 
   * @example
   * 示例值示例值
   */
  customerCity?: string;
  /**
   * @remarks
   * 客户号码 国内固话或手机，区号 + 7或8位的固话号码，区号与固话号码之间无\\"-\\"；或11位长度的手机号码。如 01041005968或18701051984 或虚拟号-分机号场景格式，如 18701051984-7538
   * 
   * @example
   * 01041005968
   */
  customerNumber?: string;
  /**
   * @remarks
   * 客户号码归属省份，如 北京
   * 
   * @example
   * 示例值示例值
   */
  customerProvince?: string;
  /**
   * @remarks
   * 座席侧真实外显号码，当使用AXB场景进行外呼时，座席侧真实外显号码为虚拟号
   * 
   * @example
   * 41008502
   */
  displayNumber?: string;
  /**
   * @remarks
   * 是否呼叫降级, 0-否, 1-是
   * 
   * @example
   * 1
   */
  downGrade?: string;
  /**
   * @remarks
   * 降级次数
   * 
   * @example
   * 1
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
   * 1775024875
   */
  endTime?: string;
  /**
   * @example
   * 133
   */
  gno?: string;
  /**
   * @example
   * 0
   */
  hangupReason?: string;
  /**
   * @remarks
   * Id
   * 
   * @example
   * 9075217226
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
   * 客户侧真实外显号码，当使用AXB场景进行外呼时，客户侧真实外显号码为虚拟号
   * 
   * @example
   * 13322225555
   */
  leftDisplayNumber?: string;
  /**
   * @remarks
   * 分机外呼，话机响铃时间
   * 
   * @example
   * 1775024775
   */
  mainRingingTime?: string;
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
   * 通话记录录音数组，json格式
   */
  recordFile?: CloudQueryObCdrResponseBodyDataListRecordFile[];
  /**
   * @remarks
   * 请求唯一id
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  requestUniqueId?: string;
  /**
   * @remarks
   * RTC总通话时长秒数，单位是s，在呼叫类型为主叫外呼(RTC)时有效，计算规则：endTime-startTime
   * 
   * @example
   * 133
   */
  rtcTotalDuration?: string;
  /**
   * @remarks
   * SIP响应码：200 ~ 699 详见 注：主叫外呼RTC座席侧没有SIP协商的概念，并未发起呼叫，因此该值默认为0
   * 
   * @example
   * 200
   */
  sipCause?: string;
  /**
   * @remarks
   * 座席开始外呼时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  startTime?: string;
  /**
   * @remarks
   * 外呼结果：30 座席未接听; 31 座席接听,未呼叫客户; 32 座席接听,客户未接听; 33 双方接听; 50 主叫外呼接听; 51 主叫外呼,客户未接听; 52 主叫外呼,双方接听。
   * 
   * @example
   * 33
   */
  status?: string;
  /**
   * @example
   * 33
   */
  statusCode?: string;
  /**
   * @remarks
   * 通话状态原因（主叫外呼）描述：1 - 企业黑名单; 2 - 风控系统拦截; 20001 - 呼叫限制；20002 - 黑名单或非白名单；20003 - 禁拨时间段； 3 - 无效的外显号码; 4 - 错误的语音导航; 5 - 企业停机; 6 - 无权限外呼; 7 - 超出呼叫次数限制; 8 - 错误号码; 9 - 其他错误；
   * 
   * @example
   * 9
   */
  statusReason?: string;
  /**
   * @remarks
   * 座席自动外呼任务id
   * 
   * @example
   * 333
   */
  taskId?: string;
  /**
   * @remarks
   * 总通话时长秒数，单位是s
   * 
   * @example
   * 30
   */
  totalDuration?: string;
  /**
   * @remarks
   * 中继群组代号
   * 
   * @example
   * 30020
   */
  trunkGroupKey?: string;
  /**
   * @remarks
   * 彩铃文件名称
   * 
   * @example
   * name2
   */
  tsiFile?: string;
  /**
   * @remarks
   * 彩铃文件类型
   * 
   * @example
   * mp3
   */
  tsiFileFormat?: string;
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
   * 通话质量百分比,数据是0-100之间，in方向说话占用的百分比
   * 
   * @example
   * 30
   */
  vadIn?: string;
  /**
   * @remarks
   * 通话质量百分比,数据是0-100之间，out方向说话占用的百分比
   * 
   * @example
   * 70
   */
  vadOut?: string;
  /**
   * @remarks
   * 客户等待时长秒数，单位是s
   * 
   * @example
   * 5
   */
  waitDuration?: string;
  /**
   * @remarks
   * 虚拟号码
   * 
   * @example
   * 13322444
   */
  XNumber?: string;
  static names(): { [key: string]: string } {
    return {
      agentClid: 'AgentClid',
      agentName: 'AgentName',
      agentNumber: 'AgentNumber',
      answerTime: 'AnswerTime',
      bridgeDuration: 'BridgeDuration',
      bridgeTime: 'BridgeTime',
      callId: 'CallId',
      callType: 'CallType',
      calleeRingingTime: 'CalleeRingingTime',
      clid: 'Clid',
      cno: 'Cno',
      customerAreaCode: 'CustomerAreaCode',
      customerCity: 'CustomerCity',
      customerNumber: 'CustomerNumber',
      customerProvince: 'CustomerProvince',
      displayNumber: 'DisplayNumber',
      downGrade: 'DownGrade',
      downGradeCounts: 'DownGradeCounts',
      endReason: 'EndReason',
      endTime: 'EndTime',
      gno: 'Gno',
      hangupReason: 'HangupReason',
      id: 'Id',
      isRealAnswer: 'IsRealAnswer',
      leftDisplayNumber: 'LeftDisplayNumber',
      mainRingingTime: 'MainRingingTime',
      realAnswerTime: 'RealAnswerTime',
      recordFile: 'RecordFile',
      requestUniqueId: 'RequestUniqueId',
      rtcTotalDuration: 'RtcTotalDuration',
      sipCause: 'SipCause',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      statusReason: 'StatusReason',
      taskId: 'TaskId',
      totalDuration: 'TotalDuration',
      trunkGroupKey: 'TrunkGroupKey',
      tsiFile: 'TsiFile',
      tsiFileFormat: 'TsiFileFormat',
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
      agentClid: 'string',
      agentName: 'string',
      agentNumber: 'string',
      answerTime: 'string',
      bridgeDuration: 'string',
      bridgeTime: 'string',
      callId: 'string',
      callType: 'string',
      calleeRingingTime: 'string',
      clid: 'string',
      cno: 'string',
      customerAreaCode: 'string',
      customerCity: 'string',
      customerNumber: 'string',
      customerProvince: 'string',
      displayNumber: 'string',
      downGrade: 'string',
      downGradeCounts: 'string',
      endReason: 'string',
      endTime: 'string',
      gno: 'string',
      hangupReason: 'string',
      id: 'string',
      isRealAnswer: 'string',
      leftDisplayNumber: 'string',
      mainRingingTime: 'string',
      realAnswerTime: 'string',
      recordFile: { 'type': 'array', 'itemType': CloudQueryObCdrResponseBodyDataListRecordFile },
      requestUniqueId: 'string',
      rtcTotalDuration: 'string',
      sipCause: 'string',
      startTime: 'string',
      status: 'string',
      statusCode: 'string',
      statusReason: 'string',
      taskId: 'string',
      totalDuration: 'string',
      trunkGroupKey: 'string',
      tsiFile: 'string',
      tsiFileFormat: 'string',
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

export class CloudQueryObCdrResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席外呼通话记录数组
   */
  list?: CloudQueryObCdrResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudQueryObCdrResponseBodyDataList },
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

export class CloudQueryObCdrResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudQueryObCdrResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
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
      data: CloudQueryObCdrResponseBodyData,
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

