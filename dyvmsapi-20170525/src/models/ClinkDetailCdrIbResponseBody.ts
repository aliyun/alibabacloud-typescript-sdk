// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkDetailCdrIbResponseBodyDataCdrIbDetailInvestigation extends $dara.Model {
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * 示例值示例值
   */
  clientName?: string;
  /**
   * @remarks
   * 座席号
   * 
   * @example
   * 11221
   */
  cno?: string;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1731483979
   */
  endTime?: number;
  /**
   * @remarks
   * 满意度导航
   * 
   * @example
   * 示例值
   */
  investigationName?: string;
  /**
   * @remarks
   * 按键值
   * 
   * @example
   * 7
   */
  keys?: number;
  /**
   * @remarks
   * 多按键值
   * 
   * @example
   * 3
   */
  multiKeys?: string;
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 1731483974
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientName: 'ClientName',
      cno: 'Cno',
      endTime: 'EndTime',
      investigationName: 'InvestigationName',
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
      investigationName: 'string',
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

export class ClinkDetailCdrIbResponseBodyDataCdrIbDetailIvrFlows extends $dara.Model {
  /**
   * @remarks
   * 执行动作
   * 
   * @example
   * 3
   */
  action?: number;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1731483927
   */
  endTime?: number;
  /**
   * @remarks
   * ivr 名称
   * 
   * @example
   * 78
   */
  name?: number;
  /**
   * @remarks
   * 节点 id
   * 
   * @example
   * xxx
   */
  path?: string;
  /**
   * @remarks
   * 节点名称
   * 
   * @example
   * 示例值示例值
   */
  pathName?: string;
  /**
   * @remarks
   * 按键值
   * 
   * @example
   * -
   */
  pressKey?: string;
  /**
   * @remarks
   * 按键时间
   * 
   * @example
   * 1731483814
   */
  pressTime?: number;
  /**
   * @remarks
   * 路由结束时间
   * 
   * @example
   * 1731483897
   */
  routerEndTime?: number;
  /**
   * @remarks
   * 路由名称
   * 
   * @example
   * 78
   */
  routerName?: number;
  /**
   * @remarks
   * 路由开始时间
   * 
   * @example
   * 1731483814
   */
  routerStartTime?: number;
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 1731483814
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      endTime: 'EndTime',
      name: 'Name',
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
      name: 'number',
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

export class ClinkDetailCdrIbResponseBodyDataCdrIbDetail extends $dara.Model {
  /**
   * @remarks
   * 首次及时应答
   * 
   * @example
   * ""
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
   * 17
   */
  bridgeDuration?: number;
  /**
   * @remarks
   * 首次接听时间
   * 
   * @example
   * 1713848599
   */
  bridgeTime?: number;
  /**
   * @remarks
   * CallID
   * 
   * @example
   * null
   */
  callId?: string;
  /**
   * @remarks
   * 客户号码城市
   * 
   * @example
   * 示例值示例值示例值
   */
  customerCity?: string;
  /**
   * @remarks
   * 客户号码
   * 
   * @example
   * 138xxxx8888
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
   * 示例值
   */
  customerProvince?: string;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1713848599
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
   * zhangsan
   */
  firstCallCname?: string;
  /**
   * @remarks
   * 首呼座席工号
   * 
   * @example
   * 2233
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
   * xxx
   */
  firstCallQname?: string;
  /**
   * @remarks
   * 首呼队列号
   * 
   * @example
   * 223
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
   * 1713848595
   */
  firstLeaveQueueTime?: number;
  /**
   * @remarks
   * 首呼队列排队时长
   * 
   * @example
   * 12233
   */
  firstQueueDuration?: number;
  /**
   * @remarks
   * 热线号码
   * 
   * @example
   * xxx
   */
  hotline?: string;
  /**
   * @remarks
   * 热线别名
   * 
   * @example
   * hotline3
   */
  hotlineName?: string;
  /**
   * @remarks
   * [满意度记录] #满意度记录
   */
  investigation?: ClinkDetailCdrIbResponseBodyDataCdrIbDetailInvestigation;
  /**
   * @remarks
   * 满意度评价
   * 
   * @example
   * 38
   */
  investigationKeys?: number;
  /**
   * @remarks
   * [路由和IVR] #路由和IVR
   */
  ivrFlows?: ClinkDetailCdrIbResponseBodyDataCdrIbDetailIvrFlows[];
  /**
   * @remarks
   * IVR名称
   * 
   * @example
   * xxx
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
   * mark
   */
  markData?: string;
  /**
   * @remarks
   * 挂断方
   * 
   * @example
   * 示例值示例值
   */
  onHookSource?: string;
  /**
   * @remarks
   * 录音文件
   * 
   * @example
   * null
   */
  recordFile?: string;
  /**
   * @remarks
   * rtcUid
   * 
   * @example
   * xxx
   */
  rtcUid?: string;
  /**
   * @remarks
   * 语音播报时长
   * 
   * @example
   * 10
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
   * 示例值示例值
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
   * 总时长
   * 
   * @example
   * 98
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
   * null
   */
  webrtcCallId?: string;
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
      agentAnswerInTime: 'AgentAnswerInTime',
      bindType: 'BindType',
      bridgeDuration: 'BridgeDuration',
      bridgeTime: 'BridgeTime',
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
      investigation: 'Investigation',
      investigationKeys: 'InvestigationKeys',
      ivrFlows: 'IvrFlows',
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
      investigation: ClinkDetailCdrIbResponseBodyDataCdrIbDetailInvestigation,
      investigationKeys: 'number',
      ivrFlows: { 'type': 'array', 'itemType': ClinkDetailCdrIbResponseBodyDataCdrIbDetailIvrFlows },
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
      totalDuration: 'number',
      userField: 'string',
      webrtcCallId: 'string',
      xnumber: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDetailCdrIbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [客户来电记录详情] #客户来电记录详情
   */
  cdrIbDetail?: ClinkDetailCdrIbResponseBodyDataCdrIbDetail[];
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * 示例值
   */
  clinkRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      cdrIbDetail: 'CdrIbDetail',
      clinkRequestId: 'ClinkRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrIbDetail: { 'type': 'array', 'itemType': ClinkDetailCdrIbResponseBodyDataCdrIbDetail },
      clinkRequestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cdrIbDetail)) {
      $dara.Model.validateArray(this.cdrIbDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDetailCdrIbResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkDetailCdrIbResponseBodyData;
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
      data: ClinkDetailCdrIbResponseBodyData,
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

