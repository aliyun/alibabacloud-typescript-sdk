// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListCdrIbsResponseBodyDataCdrIbs extends $dara.Model {
  /**
   * @remarks
   * 接通时长
   * 
   * @example
   * 19
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
   * 通话记录 Id
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
   * 示例值
   */
  callType?: string;
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
   * 1537329247
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
   * xxx
   */
  customerNumber?: string;
  /**
   * @remarks
   * 客户来电号码加密串
   * 
   * @example
   * TNjljZjZlNjgxYmIwNjMxGEwMzA3MmQ0MDQzYWEyMjY
   */
  customerNumberEncrypt?: string;
  /**
   * @remarks
   * 客户来电省份
   * 
   * @example
   * 示例值
   */
  customerProvince?: string;
  /**
   * @remarks
   * 挂机方
   * 
   * @example
   * 示例值
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
   * 是否邀评
   * 
   * @example
   * 0
   */
  evaluation?: number;
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
   * xxx
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
   * 座席振铃时长
   * 
   * @example
   * 10
   */
  ibRingingDuration?: number;
  /**
   * @remarks
   * 排队时长
   * 
   * @example
   * 18
   */
  ibWaitDuration?: number;
  /**
   * @remarks
   * IVR名称
   * 
   * @example
   * IvrName
   */
  ivrName?: string;
  /**
   * @remarks
   * 加入队列时间
   * 
   * @example
   * 1647255885
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
   * 3
   */
  mark?: number;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 3
   */
  markData?: string;
  /**
   * @remarks
   * 来电队列名称
   * 
   * @example
   * Qname
   */
  qname?: string;
  /**
   * @remarks
   * 来电队列号
   * 
   * @example
   * 2332
   */
  qno?: string;
  /**
   * @remarks
   * 队列及时应答
   * 
   * @example
   * 0
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
   * 30
   */
  sayVoiceDuration?: number;
  /**
   * @remarks
   * 呼叫结果
   * 
   * @example
   * 示例值示例值
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
   * 示例值示例值示例值
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
   * 56
   */
  totalDuration?: number;
  /**
   * @remarks
   * 通话记录唯一标识
   * 
   * @example
   * AWS_DEV_MEDIA_SERVER_8-1537329247.6
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
      firstJoinQueueTime: 'FirstJoinQueueTime',
      hotline: 'Hotline',
      hotlineName: 'HotlineName',
      ibRingingDuration: 'IbRingingDuration',
      ibWaitDuration: 'IbWaitDuration',
      ivrName: 'IvrName',
      joinQueueTime: 'JoinQueueTime',
      leaveQueueTime: 'LeaveQueueTime',
      mark: 'Mark',
      markData: 'MarkData',
      qname: 'Qname',
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
      firstJoinQueueTime: 'number',
      hotline: 'string',
      hotlineName: 'string',
      ibRingingDuration: 'number',
      ibWaitDuration: 'number',
      ivrName: 'string',
      joinQueueTime: 'number',
      leaveQueueTime: 'number',
      mark: 'number',
      markData: 'string',
      qname: 'string',
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

export class ClinkListCdrIbsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [呼入通话记录列表] #呼入通话记录列表
   */
  cdrIbs?: ClinkListCdrIbsResponseBodyDataCdrIbs[];
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
   * 总条数
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cdrIbs: 'CdrIbs',
      clinkRequestId: 'ClinkRequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrIbs: { 'type': 'array', 'itemType': ClinkListCdrIbsResponseBodyDataCdrIbs },
      clinkRequestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cdrIbs)) {
      $dara.Model.validateArray(this.cdrIbs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListCdrIbsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkListCdrIbsResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
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
      data: ClinkListCdrIbsResponseBodyData,
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

