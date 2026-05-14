// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListCdrObsResponseBodyDataCdrObs extends $dara.Model {
  /**
   * @remarks
   * 接通时长
   * 
   * @example
   * 87
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
   * 通话记录ID
   * 
   * @example
   * CallId
   */
  callId?: string;
  /**
   * @remarks
   * 外呼类型，预览外呼、预测外呼、直接外呼
   * 
   * @example
   * 示例值示例值示例值
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
   * 座席响铃时间
   * 
   * @example
   * 1775024775
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
   * 客户城市
   * 
   * @example
   * 示例值示例值
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
   * 客户省份
   * 
   * @example
   * 示例值
   */
  customerProvince?: string;
  /**
   * @remarks
   * 客户响铃时间
   * 
   * @example
   * 1775024775
   */
  customerRingingTime?: number;
  /**
   * @remarks
   * 挂机方
   * 
   * @example
   * 示例值示例值
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
   * 热线号码
   * 
   * @example
   * Hotline
   */
  hotline?: string;
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
   * 2222
   */
  qname?: string;
  /**
   * @remarks
   * 来电队列号
   * 
   * @example
   * 1212
   */
  qno?: string;
  /**
   * @remarks
   * 队列及时应答
   * 
   * @example
   * 1775024775
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
   * 呼叫结果
   * 
   * @example
   * 示例值示例值示例值
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
   * 示例值
   */
  status?: string;
  /**
   * @remarks
   * 接听状态映射
   * 
   * @example
   * 示例值示例值
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
   * 81
   */
  totalDuration?: number;
  /**
   * @remarks
   * 通话记录唯一标识
   * 
   * @example
   * UniqueId
   */
  uniqueId?: string;
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
      bridgeDuration: 'BridgeDuration',
      bridgeTime: 'BridgeTime',
      callId: 'CallId',
      callType: 'CallType',
      clientName: 'ClientName',
      clientNumber: 'ClientNumber',
      clientRingingTime: 'ClientRingingTime',
      cno: 'Cno',
      customerCity: 'CustomerCity',
      customerNumber: 'CustomerNumber',
      customerNumberEncrypt: 'CustomerNumberEncrypt',
      customerProvince: 'CustomerProvince',
      customerRingingTime: 'CustomerRingingTime',
      endReason: 'EndReason',
      endTime: 'EndTime',
      evaluation: 'Evaluation',
      hotline: 'Hotline',
      ivrName: 'IvrName',
      mark: 'Mark',
      markData: 'MarkData',
      qname: 'Qname',
      qno: 'Qno',
      queueAnswerInTime: 'QueueAnswerInTime',
      recordFile: 'RecordFile',
      sipCause: 'SipCause',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      tagNames: 'TagNames',
      tags: 'Tags',
      totalDuration: 'TotalDuration',
      uniqueId: 'UniqueId',
      xnumber: 'Xnumber',
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
      clientRingingTime: 'number',
      cno: 'string',
      customerCity: 'string',
      customerNumber: 'string',
      customerNumberEncrypt: 'string',
      customerProvince: 'string',
      customerRingingTime: 'number',
      endReason: 'string',
      endTime: 'number',
      evaluation: 'number',
      hotline: 'string',
      ivrName: 'string',
      mark: 'number',
      markData: 'string',
      qname: 'string',
      qno: 'string',
      queueAnswerInTime: 'number',
      recordFile: 'string',
      sipCause: 'string',
      startTime: 'number',
      status: 'string',
      statusCode: 'string',
      tagNames: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': 'string' },
      totalDuration: 'number',
      uniqueId: 'string',
      xnumber: 'string',
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

export class ClinkListCdrObsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [外呼通话记录列表] #外呼通话记录列表
   */
  cdrObs?: ClinkListCdrObsResponseBodyDataCdrObs[];
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
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cdrObs: 'CdrObs',
      clinkRequestId: 'ClinkRequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrObs: { 'type': 'array', 'itemType': ClinkListCdrObsResponseBodyDataCdrObs },
      clinkRequestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cdrObs)) {
      $dara.Model.validateArray(this.cdrObs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListCdrObsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkListCdrObsResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 4B52E871-0F7C-59FC-9C7E-94B550953BA9
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
      data: ClinkListCdrObsResponseBodyData,
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

