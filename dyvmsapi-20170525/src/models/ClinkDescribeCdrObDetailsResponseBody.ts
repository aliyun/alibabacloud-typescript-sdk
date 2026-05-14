// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkDescribeCdrObDetailsResponseBodyDataCdrObDetails extends $dara.Model {
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
   * 示例值
   */
  callType?: string;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * zhangsan
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
   * 录音文件名
   * 
   * @example
   * xxx
   */
  recordFile?: string;
  /**
   * @remarks
   * 是否开启主叫记忆
   * 
   * @example
   * 示例值示例值
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
   * 示例值示例值示例值
   */
  status?: string;
  /**
   * @remarks
   * 通话时长
   * 
   * @example
   * 12
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
      cno: 'Cno',
      endTime: 'EndTime',
      mainUniqueId: 'MainUniqueId',
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
      cno: 'string',
      endTime: 'number',
      mainUniqueId: 'string',
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

export class ClinkDescribeCdrObDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [外呼通话记录明细] #外呼通话记录明细
   */
  cdrObDetails?: ClinkDescribeCdrObDetailsResponseBodyDataCdrObDetails[];
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
      cdrObDetails: 'CdrObDetails',
      clinkRequestId: 'ClinkRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdrObDetails: { 'type': 'array', 'itemType': ClinkDescribeCdrObDetailsResponseBodyDataCdrObDetails },
      clinkRequestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cdrObDetails)) {
      $dara.Model.validateArray(this.cdrObDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkDescribeCdrObDetailsResponseBody extends $dara.Model {
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
  data?: ClinkDescribeCdrObDetailsResponseBodyData;
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
      data: ClinkDescribeCdrObDetailsResponseBodyData,
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

