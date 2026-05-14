// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkDescribeCdrIbDetailsResponseBodyDataCdrIbDetails extends $dara.Model {
  /**
   * @remarks
   * 接听时间
   * 
   * @example
   * 1536115382
   */
  answerTime?: number;
  /**
   * @remarks
   * 呼叫类型
   * 
   * @example
   * 示例值示例值
   */
  callType?: string;
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
   * 1536115379
   */
  clientRingingTime?: number;
  /**
   * @remarks
   * 座席号
   * 
   * @example
   * 2005
   */
  cno?: string;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1536115391
   */
  endTime?: number;
  /**
   * @remarks
   * 通话记录主通道唯一标识
   * 
   * @example
   * AWS_DEV_MEDIA_SERVER_8-1536115322.0
   */
  mainUniqueId?: string;
  /**
   * @remarks
   * 队列号
   * 
   * @example
   * 2233
   */
  qno?: string;
  /**
   * @remarks
   * 录音文件
   * 
   * @example
   * 8888888-20220406155839-15108207489-6666--record-medias_6-777788888.666
   */
  recordFile?: string;
  /**
   * @remarks
   * 是否开启主叫记忆
   * 
   * @example
   * 示例值示例值示例值
   */
  remember?: string;
  /**
   * @remarks
   * 呼叫情况
   * 
   * @example
   * 示例值示例值示例值
   */
  sipCause?: string;
  /**
   * @remarks
   * 接起时间
   * 
   * @example
   * 1536115379
   */
  startTime?: number;
  /**
   * @remarks
   * 呼叫结果
   * 
   * @example
   * 示例值示例值
   */
  status?: string;
  /**
   * @remarks
   * 通话时长
   * 
   * @example
   * 47
   */
  totalDuration?: number;
  /**
   * @remarks
   * 通话记录详情唯一标识
   * 
   * @example
   * AWS_DEV_MEDIA_SERVER_8-1536115379.4
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      answerTime: 'AnswerTime',
      callType: 'CallType',
      clientName: 'ClientName',
      clientNumber: 'ClientNumber',
      clientRingingTime: 'ClientRingingTime',
      cno: 'Cno',
      endTime: 'EndTime',
      mainUniqueId: 'MainUniqueId',
      qno: 'Qno',
      recordFile: 'RecordFile',
      remember: 'Remember',
      sipCause: 'SipCause',
      startTime: 'StartTime',
      status: 'Status',
      totalDuration: 'TotalDuration',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerTime: 'number',
      callType: 'string',
      clientName: 'string',
      clientNumber: 'string',
      clientRingingTime: 'number',
      cno: 'string',
      endTime: 'number',
      mainUniqueId: 'string',
      qno: 'string',
      recordFile: 'string',
      remember: 'string',
      sipCause: 'string',
      startTime: 'number',
      status: 'string',
      totalDuration: 'number',
      uniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeCdrIbDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [呼入通话记录明细] #呼入通话记录明细
   */
  cdrIbDetails?: ClinkDescribeCdrIbDetailsResponseBodyDataCdrIbDetails[];
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * xxx
   */
  clinkRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      cdrIbDetails: 'CdrIbDetails',
      clinkRequestId: 'ClinkRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrIbDetails: { 'type': 'array', 'itemType': ClinkDescribeCdrIbDetailsResponseBodyDataCdrIbDetails },
      clinkRequestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cdrIbDetails)) {
      $dara.Model.validateArray(this.cdrIbDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeCdrIbDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkDescribeCdrIbDetailsResponseBodyData;
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
      data: ClinkDescribeCdrIbDetailsResponseBodyData,
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

