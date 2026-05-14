// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListCdrIbResponseBodyDataCdrIb extends $dara.Model {
  /**
   * @remarks
   * 首次及时应答
   * 
   * @example
   * 1775024775
   */
  agentAnswerInTime?: string;
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
   * 32
   */
  bridgeDuration?: number;
  /**
   * @remarks
   * 首次接听时间
   * 
   * @example
   * 6
   */
  bridgeTime?: number;
  /**
   * @remarks
   * 业务记录ID
   */
  businessIds?: string[];
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
   * 客户号码城市
   * 
   * @example
   * 示例值示例值
   */
  customerCity?: string;
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
   * xxx
   */
  customerProvince?: string;
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
   * 是否邀评
   * 
   * @example
   * null
   */
  evaluation?: string;
  /**
   * @remarks
   * 首呼座席姓名
   * 
   * @example
   * xxx
   */
  firstCallCname?: string;
  /**
   * @remarks
   * 首呼座席工号
   * 
   * @example
   * 1212
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
   * 首呼队列名称
   * 
   * @example
   * 示例值示例值
   */
  firstCallQname?: string;
  /**
   * @remarks
   * 首呼队列号
   * 
   * @example
   * 1111
   */
  firstCallQno?: string;
  /**
   * @remarks
   * 首次进入队列时间
   * 
   * @example
   * 1713848594
   */
  firstJoinQueueTime?: number;
  /**
   * @remarks
   * 首次离开队列时间
   * 
   * @example
   * 19
   */
  firstLeaveQueueTime?: number;
  /**
   * @remarks
   * 首呼队列排队时长
   * 
   * @example
   * 30
   */
  firstQueueDuration?: number;
  /**
   * @remarks
   * 热线号码
   * 
   * @example
   * 示例值示例值示例值
   */
  hotline?: string;
  /**
   * @remarks
   * 热线别名
   * 
   * @example
   * 示例值示例值
   */
  hotlineName?: string;
  /**
   * @remarks
   * 满意度评价
   * 
   * @example
   * 59
   */
  investigationKeys?: number;
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
   * 通话ID
   * 
   * @example
   * medias_1-162046xxxx.12
   */
  mainUniqueId?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值
   */
  markData?: string;
  /**
   * @remarks
   * 挂断方
   * 
   * @example
   * xxx
   */
  onHookSource?: string;
  /**
   * @remarks
   * 录音文件
   * 
   * @example
   * xxx
   */
  recordFile?: string;
  /**
   * @remarks
   * rtcUid
   * 
   * @example
   * null
   */
  rtcUid?: string;
  /**
   * @remarks
   * 语音播报时长
   * 
   * @example
   * 43
   */
  sayVoiceDuration?: number;
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 1713848570
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
   * 呼叫结果
   * 
   * @example
   * 示例值
   */
  statusResult?: string;
  /**
   * @remarks
   * 机器人接听状态
   * 
   * @example
   * null
   */
  statusRobot?: string;
  /**
   * @remarks
   * 通话标签
   */
  tagNames?: string[];
  /**
   * @remarks
   * 工单ID
   */
  ticketIds?: string[];
  /**
   * @remarks
   * 总时长
   * 
   * @example
   * 73
   */
  totalDuration?: number;
  /**
   * @remarks
   * 自定义字段
   * 
   * @example
   * xxx
   */
  userField?: string;
  /**
   * @remarks
   * WebRTCCallID
   * 
   * @example
   * xxx
   */
  webrtcCallId?: string;
  /**
   * @remarks
   * 虚拟号码
   * 
   * @example
   * 示例值示例值
   */
  xnumber?: string;
  static names(): { [key: string]: string } {
    return {
      agentAnswerInTime: 'AgentAnswerInTime',
      bindType: 'BindType',
      bridgeDuration: 'BridgeDuration',
      bridgeTime: 'BridgeTime',
      businessIds: 'BusinessIds',
      callId: 'CallId',
      customerCity: 'CustomerCity',
      customerNumber: 'CustomerNumber',
      customerNumberEncrypt: 'CustomerNumberEncrypt',
      customerProvince: 'CustomerProvince',
      endTime: 'EndTime',
      evaluation: 'Evaluation',
      firstCallCname: 'FirstCallCname',
      firstCallCno: 'FirstCallCno',
      firstCallNumber: 'FirstCallNumber',
      firstCallQname: 'FirstCallQname',
      firstCallQno: 'FirstCallQno',
      firstJoinQueueTime: 'FirstJoinQueueTime',
      firstLeaveQueueTime: 'FirstLeaveQueueTime',
      firstQueueDuration: 'FirstQueueDuration',
      hotline: 'Hotline',
      hotlineName: 'HotlineName',
      investigationKeys: 'InvestigationKeys',
      ivrName: 'IvrName',
      mainUniqueId: 'MainUniqueId',
      markData: 'MarkData',
      onHookSource: 'OnHookSource',
      recordFile: 'RecordFile',
      rtcUid: 'RtcUid',
      sayVoiceDuration: 'SayVoiceDuration',
      startTime: 'StartTime',
      status: 'Status',
      statusResult: 'StatusResult',
      statusRobot: 'StatusRobot',
      tagNames: 'TagNames',
      ticketIds: 'TicketIds',
      totalDuration: 'TotalDuration',
      userField: 'UserField',
      webrtcCallId: 'WebrtcCallId',
      xnumber: 'Xnumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAnswerInTime: 'string',
      bindType: 'number',
      bridgeDuration: 'number',
      bridgeTime: 'number',
      businessIds: { 'type': 'array', 'itemType': 'string' },
      callId: 'string',
      customerCity: 'string',
      customerNumber: 'string',
      customerNumberEncrypt: 'string',
      customerProvince: 'string',
      endTime: 'number',
      evaluation: 'string',
      firstCallCname: 'string',
      firstCallCno: 'string',
      firstCallNumber: 'string',
      firstCallQname: 'string',
      firstCallQno: 'string',
      firstJoinQueueTime: 'number',
      firstLeaveQueueTime: 'number',
      firstQueueDuration: 'number',
      hotline: 'string',
      hotlineName: 'string',
      investigationKeys: 'number',
      ivrName: 'string',
      mainUniqueId: 'string',
      markData: 'string',
      onHookSource: 'string',
      recordFile: 'string',
      rtcUid: 'string',
      sayVoiceDuration: 'number',
      startTime: 'number',
      status: 'string',
      statusResult: 'string',
      statusRobot: 'string',
      tagNames: { 'type': 'array', 'itemType': 'string' },
      ticketIds: { 'type': 'array', 'itemType': 'string' },
      totalDuration: 'number',
      userField: 'string',
      webrtcCallId: 'string',
      xnumber: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessIds)) {
      $dara.Model.validateArray(this.businessIds);
    }
    if(Array.isArray(this.tagNames)) {
      $dara.Model.validateArray(this.tagNames);
    }
    if(Array.isArray(this.ticketIds)) {
      $dara.Model.validateArray(this.ticketIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListCdrIbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [客户来电记录列表] #客户来电记录列表
   */
  cdrIb?: ClinkListCdrIbResponseBodyDataCdrIb[];
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * 1713848594
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
   * 69
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cdrIb: 'CdrIb',
      clinkRequestId: 'ClinkRequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scrollId: 'ScrollId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrIb: { 'type': 'array', 'itemType': ClinkListCdrIbResponseBodyDataCdrIb },
      clinkRequestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scrollId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cdrIb)) {
      $dara.Model.validateArray(this.cdrIb);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListCdrIbResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkListCdrIbResponseBodyData;
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
      data: ClinkListCdrIbResponseBodyData,
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

