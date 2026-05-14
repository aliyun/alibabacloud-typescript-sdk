// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkCdrObDetailsResponseBodyDataCdrObDetails extends $dara.Model {
  /**
   * @remarks
   * 客户接听时间
   * 
   * @example
   * 1717583928
   */
  answerTime?: number;
  /**
   * @remarks
   * 通话时长
   * 
   * @example
   * 43
   */
  bridgeDuration?: number;
  /**
   * @remarks
   * CallID
   * 
   * @example
   * 1d7acd5d-xxxx-xxxx-xxxx-0d3c08317140
   */
  callId?: string;
  /**
   * @remarks
   * 通话类型，说明参考 通用字段 #通用字段
   * 
   * @example
   * 4
   */
  callType?: number;
  /**
   * @remarks
   * 通话类型描述
   * 
   * @example
   * 示例值示例值示例值
   */
  callTypeDesc?: string;
  /**
   * @remarks
   * 客户响铃时间
   * 
   * @example
   * 1717583922
   */
  calleeRingingTime?: number;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * xxx
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
   * 呼叫类型，说明参考 通用字段 #通用字段
   * 
   * @example
   * 208
   */
  detailCallType?: number;
  /**
   * @remarks
   * 呼叫类型描述
   * 
   * @example
   * 示例值示例值
   */
  detailCallTypeDesc?: string;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1717583950
   */
  endTime?: number;
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
   * 呼叫结果
   * 
   * @example
   * 示例值示例值
   */
  obSipCause?: string;
  /**
   * @remarks
   * 被叫状态
   * 
   * @example
   * 示例值示例值
   */
  obSipCauseRaw?: string;
  /**
   * @remarks
   * 录音
   * 
   * @example
   * null
   */
  recordFile?: string;
  /**
   * @remarks
   * 呼叫情况
   * 
   * @example
   * 200
   */
  sipCause?: number;
  /**
   * @remarks
   * 呼叫情况描述
   * 
   * @example
   * success
   */
  sipCauseDesc?: string;
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 1717583916
   */
  startTime?: number;
  /**
   * @remarks
   * 客户彩铃录音
   * 
   * @example
   * null
   */
  tsiFile?: string;
  /**
   * @remarks
   * 通话唯一ID
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  uniqueId?: string;
  /**
   * @remarks
   * WebRTCCallID
   * 
   * @example
   * ""
   */
  webrtcCallId?: string;
  static names(): { [key: string]: string } {
    return {
      answerTime: 'AnswerTime',
      bridgeDuration: 'BridgeDuration',
      callId: 'CallId',
      callType: 'CallType',
      callTypeDesc: 'CallTypeDesc',
      calleeRingingTime: 'CalleeRingingTime',
      clientName: 'ClientName',
      clientNumber: 'ClientNumber',
      cno: 'Cno',
      detailCallType: 'DetailCallType',
      detailCallTypeDesc: 'DetailCallTypeDesc',
      endTime: 'EndTime',
      mainUniqueId: 'MainUniqueId',
      obSipCause: 'ObSipCause',
      obSipCauseRaw: 'ObSipCauseRaw',
      recordFile: 'RecordFile',
      sipCause: 'SipCause',
      sipCauseDesc: 'SipCauseDesc',
      startTime: 'StartTime',
      tsiFile: 'TsiFile',
      uniqueId: 'UniqueId',
      webrtcCallId: 'WebrtcCallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerTime: 'number',
      bridgeDuration: 'number',
      callId: 'string',
      callType: 'number',
      callTypeDesc: 'string',
      calleeRingingTime: 'number',
      clientName: 'string',
      clientNumber: 'string',
      cno: 'string',
      detailCallType: 'number',
      detailCallTypeDesc: 'string',
      endTime: 'number',
      mainUniqueId: 'string',
      obSipCause: 'string',
      obSipCauseRaw: 'string',
      recordFile: 'string',
      sipCause: 'number',
      sipCauseDesc: 'string',
      startTime: 'number',
      tsiFile: 'string',
      uniqueId: 'string',
      webrtcCallId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkCdrObDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [外呼详情] #外呼详情
   */
  cdrObDetails?: ClinkCdrObDetailsResponseBodyDataCdrObDetails[];
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
      cdrObDetails: { 'type': 'array', 'itemType': ClinkCdrObDetailsResponseBodyDataCdrObDetails },
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

export class ClinkCdrObDetailsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkCdrObDetailsResponseBodyData;
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
      data: ClinkCdrObDetailsResponseBodyData,
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

