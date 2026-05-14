// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListCdrObResponseBodyDataCdrOb extends $dara.Model {
  /**
   * @remarks
   * 转写记录标识 1：存在，0：不存在
   * 
   * @example
   * 0
   */
  asrRecord?: number;
  /**
   * @remarks
   * 通话时长
   * 
   * @example
   * 76
   */
  bridgeDuration?: number;
  /**
   * @remarks
   * 客户接听时间
   * 
   * @example
   * 1715326248
   */
  bridgeTime?: number;
  /**
   * @remarks
   * 业务记录ID
   */
  businessIds?: number[];
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
   * 通话类型
   * 
   * @example
   * 示例值
   */
  callType?: string;
  /**
   * @remarks
   * 通话类型Key值
   * 
   * @example
   * 4
   */
  callTypeKey?: number;
  /**
   * @remarks
   * 客户响铃时长
   * 
   * @example
   * 29
   */
  calleeRingingDuration?: number;
  /**
   * @remarks
   * 客户响铃时间
   * 
   * @example
   * 1715326251
   */
  calleeRingingTime?: number;
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
   * 座席工号
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 客户地区，省份/城市
   * 
   * @example
   * 示例值
   */
  customerArea?: string;
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
   * 追加客户邮编
   * 
   * @example
   * xxx
   */
  customerPostCode?: string;
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
   * 客户VIP标识
   * 
   * @example
   * 1
   */
  customerVip?: number;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1715326248
   */
  endTime?: number;
  /**
   * @remarks
   * 企业号
   * 
   * @example
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 是否邀评
   * 
   * @example
   * 0
   */
  evaluation?: string;
  /**
   * @remarks
   * 是否存在业务记录
   * 
   * @example
   * 0
   */
  existBusiness?: number;
  /**
   * @remarks
   * 是否存在客户资料
   * 
   * @example
   * true
   */
  existCustomer?: boolean;
  /**
   * @remarks
   * 是否存在工单
   * 
   * @example
   * 0
   */
  existTicket?: number;
  /**
   * @remarks
   * 满意度评价
   * 
   * @example
   * null
   */
  investigationKeys?: number;
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
   * 外显号码归属地区，省份/城市
   * 
   * @example
   * 示例值示例值
   */
  leftClidArea?: string;
  /**
   * @remarks
   * 外显号码归属城市
   * 
   * @example
   * 示例值示例值示例值
   */
  leftClidCity?: string;
  /**
   * @remarks
   * 外显号码归属省份
   * 
   * @example
   * 示例值示例值
   */
  leftClidProvince?: string;
  /**
   * @remarks
   * 通话ID
   * 
   * @example
   * medias_1-171532xxxx.53
   */
  mainUniqueId?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 2
   */
  markData?: string;
  /**
   * @remarks
   * 呼叫结果
   * 
   * @example
   * 示例值
   */
  obSipCause?: string;
  /**
   * @remarks
   * 被叫状态
   * 
   * @example
   * 示例值示例值示例值
   */
  obSipCauseRaw?: string;
  /**
   * @remarks
   * 外呼等待时长
   * 
   * @example
   * 24
   */
  obWaitDuration?: number;
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
   * 响铃前等待时长
   * 
   * @example
   * 10
   */
  preRingWaitDuration?: number;
  /**
   * @remarks
   * 录音文件
   * 
   * @example
   * RecordFile
   */
  recordFile?: string;
  /**
   * @remarks
   * 通话唯一ID
   * 
   * @example
   * xxx
   */
  requestUniqueId?: string;
  /**
   * @remarks
   * RtcUid
   * 
   * @example
   * xxx
   */
  rtcUid?: string;
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 1715326248
   */
  startTime?: number;
  /**
   * @remarks
   * 接听状态值
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * 接听状态描述
   * 
   * @example
   * 示例值示例值
   */
  statusDesc?: string;
  /**
   * @remarks
   * 通话标签
   */
  tagNames?: string[];
  /**
   * @remarks
   * 外呼任务id
   * 
   * @example
   * 85
   */
  taskId?: number;
  /**
   * @remarks
   * 外呼任务详情id
   * 
   * @example
   * 83
   */
  taskInventoryId?: number;
  /**
   * @remarks
   * 外呼任务名称
   * 
   * @example
   * TaskName
   */
  taskName?: string;
  /**
   * @remarks
   * 工单id
   */
  ticketIds?: number[];
  /**
   * @remarks
   * 总时长
   * 
   * @example
   * 27
   */
  totalDuration?: number;
  /**
   * @remarks
   * 中继组号
   * 
   * @example
   * 10088
   */
  trunkGroupKey?: string;
  /**
   * @remarks
   * 座席接起时间
   * 
   * @example
   * 1715326251
   */
  upTime?: number;
  /**
   * @remarks
   * WebRTCCallID
   * 
   * @example
   * xxxx
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
  /**
   * @remarks
   * 虚拟号码归属地区，省份/城市
   * 
   * @example
   * xxx
   */
  xnumberArea?: string;
  /**
   * @remarks
   * 虚拟号码归属城市
   * 
   * @example
   * 示例值示例值
   */
  xnumberCity?: string;
  /**
   * @remarks
   * 虚拟号码归属省份
   * 
   * @example
   * null
   */
  xnumberProvince?: string;
  static names(): { [key: string]: string } {
    return {
      asrRecord: 'AsrRecord',
      bridgeDuration: 'BridgeDuration',
      bridgeTime: 'BridgeTime',
      businessIds: 'BusinessIds',
      callId: 'CallId',
      callType: 'CallType',
      callTypeKey: 'CallTypeKey',
      calleeRingingDuration: 'CalleeRingingDuration',
      calleeRingingTime: 'CalleeRingingTime',
      clientName: 'ClientName',
      clientNumber: 'ClientNumber',
      cno: 'Cno',
      customerArea: 'CustomerArea',
      customerAreaCode: 'CustomerAreaCode',
      customerCity: 'CustomerCity',
      customerNumber: 'CustomerNumber',
      customerNumberEncrypt: 'CustomerNumberEncrypt',
      customerPostCode: 'CustomerPostCode',
      customerProvince: 'CustomerProvince',
      customerVip: 'CustomerVip',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      evaluation: 'Evaluation',
      existBusiness: 'ExistBusiness',
      existCustomer: 'ExistCustomer',
      existTicket: 'ExistTicket',
      investigationKeys: 'InvestigationKeys',
      leftClid: 'LeftClid',
      leftClidArea: 'LeftClidArea',
      leftClidCity: 'LeftClidCity',
      leftClidProvince: 'LeftClidProvince',
      mainUniqueId: 'MainUniqueId',
      markData: 'MarkData',
      obSipCause: 'ObSipCause',
      obSipCauseRaw: 'ObSipCauseRaw',
      obWaitDuration: 'ObWaitDuration',
      onHookSource: 'OnHookSource',
      preRingWaitDuration: 'PreRingWaitDuration',
      recordFile: 'RecordFile',
      requestUniqueId: 'RequestUniqueId',
      rtcUid: 'RtcUid',
      startTime: 'StartTime',
      status: 'Status',
      statusDesc: 'StatusDesc',
      tagNames: 'TagNames',
      taskId: 'TaskId',
      taskInventoryId: 'TaskInventoryId',
      taskName: 'TaskName',
      ticketIds: 'TicketIds',
      totalDuration: 'TotalDuration',
      trunkGroupKey: 'TrunkGroupKey',
      upTime: 'UpTime',
      webrtcCallId: 'WebrtcCallId',
      xnumber: 'Xnumber',
      xnumberArea: 'XnumberArea',
      xnumberCity: 'XnumberCity',
      xnumberProvince: 'XnumberProvince',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrRecord: 'number',
      bridgeDuration: 'number',
      bridgeTime: 'number',
      businessIds: { 'type': 'array', 'itemType': 'number' },
      callId: 'string',
      callType: 'string',
      callTypeKey: 'number',
      calleeRingingDuration: 'number',
      calleeRingingTime: 'number',
      clientName: 'string',
      clientNumber: 'string',
      cno: 'string',
      customerArea: 'string',
      customerAreaCode: 'string',
      customerCity: 'string',
      customerNumber: 'string',
      customerNumberEncrypt: 'string',
      customerPostCode: 'string',
      customerProvince: 'string',
      customerVip: 'number',
      endTime: 'number',
      enterpriseId: 'number',
      evaluation: 'string',
      existBusiness: 'number',
      existCustomer: 'boolean',
      existTicket: 'number',
      investigationKeys: 'number',
      leftClid: 'string',
      leftClidArea: 'string',
      leftClidCity: 'string',
      leftClidProvince: 'string',
      mainUniqueId: 'string',
      markData: 'string',
      obSipCause: 'string',
      obSipCauseRaw: 'string',
      obWaitDuration: 'number',
      onHookSource: 'string',
      preRingWaitDuration: 'number',
      recordFile: 'string',
      requestUniqueId: 'string',
      rtcUid: 'string',
      startTime: 'number',
      status: 'number',
      statusDesc: 'string',
      tagNames: { 'type': 'array', 'itemType': 'string' },
      taskId: 'number',
      taskInventoryId: 'number',
      taskName: 'string',
      ticketIds: { 'type': 'array', 'itemType': 'number' },
      totalDuration: 'number',
      trunkGroupKey: 'string',
      upTime: 'number',
      webrtcCallId: 'string',
      xnumber: 'string',
      xnumberArea: 'string',
      xnumberCity: 'string',
      xnumberProvince: 'string',
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

export class ClinkListCdrObResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [外呼记录列表] #外呼记录列表
   */
  cdrOb?: ClinkListCdrObResponseBodyDataCdrOb[];
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
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * 滚动查询ID
   * 
   * @example
   * ScrollId
   */
  scrollId?: string;
  /**
   * @remarks
   * 总条数
   * 
   * @example
   * 31
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cdrOb: 'CdrOb',
      clinkRequestId: 'ClinkRequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scrollId: 'ScrollId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrOb: { 'type': 'array', 'itemType': ClinkListCdrObResponseBodyDataCdrOb },
      clinkRequestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scrollId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cdrOb)) {
      $dara.Model.validateArray(this.cdrOb);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListCdrObResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkListCdrObResponseBodyData;
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
      data: ClinkListCdrObResponseBodyData,
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

