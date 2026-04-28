// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryIbCdrResponseBodyDataListRecordFile extends $dara.Model {
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

export class CloudQueryIbCdrResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * name1
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
   * 10
   */
  bridgeDuration?: string;
  /**
   * @remarks
   * 座席接听时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  bridgeTime?: string;
  /**
   * @remarks
   * 呼叫类型 呼入
   * 
   * @example
   * 示例值示例值示例值
   */
  callType?: string;
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
   * 座席工号，如2000
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 客户号码区号
   * 
   * @example
   * 010
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
   * 客户号码 国内固话或手机，区号 + 7或8位的固话号码，区号与固话号码之间无\\"-\\"；或11位长度的手机号码。如 01041005968或18701051984
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
   * 热线号码
   * 
   * @example
   * 89193631
   */
  hotline?: string;
  /**
   * @remarks
   * IVR名称，默认自定义
   * 
   * @example
   * ivrname
   */
  ivrName?: string;
  /**
   * @remarks
   * 离开队列原因 参数说明：-1:该字段没值, 1:呼转座席接听 , 2: 队列中放弃 , 3: 队列中超时溢出 , 4: 队列中无座席溢出
   * 
   * @example
   * -1
   */
  leaveQueueCode?: number;
  /**
   * @remarks
   * 中继号码
   * 
   * @example
   * 89193631
   */
  numberTrunk?: string;
  /**
   * @remarks
   * 中继号码区号
   * 
   * @example
   * 010
   */
  numberTrunkAreaCode?: string;
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
   * 通话记录录音数组，json格式
   */
  recordFile?: CloudQueryIbCdrResponseBodyDataListRecordFile[];
  /**
   * @remarks
   * 电话进入系统时间，时间戳，精确到s，如1480904471
   * 
   * @example
   * 1775024775
   */
  startTime?: string;
  /**
   * @remarks
   * 外呼结果， 如人工接听
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
   * 3
   */
  statusCode?: string;
  /**
   * @remarks
   * 总通话时长秒数，单位是s
   * 
   * @example
   * 133
   */
  totalDuration?: string;
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
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      answerTime: 'AnswerTime',
      bridgeDuration: 'BridgeDuration',
      bridgeTime: 'BridgeTime',
      callType: 'CallType',
      calleeNumber: 'CalleeNumber',
      cno: 'Cno',
      customerAreaCode: 'CustomerAreaCode',
      customerCity: 'CustomerCity',
      customerNumber: 'CustomerNumber',
      customerProvince: 'CustomerProvince',
      endReason: 'EndReason',
      endTime: 'EndTime',
      hotline: 'Hotline',
      ivrName: 'IvrName',
      leaveQueueCode: 'LeaveQueueCode',
      numberTrunk: 'NumberTrunk',
      numberTrunkAreaCode: 'NumberTrunkAreaCode',
      qno: 'Qno',
      recordFile: 'RecordFile',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      totalDuration: 'TotalDuration',
      uniqueId: 'UniqueId',
      userField: 'UserField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      answerTime: 'string',
      bridgeDuration: 'string',
      bridgeTime: 'string',
      callType: 'string',
      calleeNumber: 'string',
      cno: 'string',
      customerAreaCode: 'string',
      customerCity: 'string',
      customerNumber: 'string',
      customerProvince: 'string',
      endReason: 'string',
      endTime: 'string',
      hotline: 'string',
      ivrName: 'string',
      leaveQueueCode: 'number',
      numberTrunk: 'string',
      numberTrunkAreaCode: 'string',
      qno: 'string',
      recordFile: { 'type': 'array', 'itemType': CloudQueryIbCdrResponseBodyDataListRecordFile },
      startTime: 'string',
      status: 'string',
      statusCode: 'string',
      totalDuration: 'string',
      uniqueId: 'string',
      userField: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class CloudQueryIbCdrResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 来电通话记录数组
   */
  list?: CloudQueryIbCdrResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudQueryIbCdrResponseBodyDataList },
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

export class CloudQueryIbCdrResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudQueryIbCdrResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
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
      data: CloudQueryIbCdrResponseBodyData,
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

