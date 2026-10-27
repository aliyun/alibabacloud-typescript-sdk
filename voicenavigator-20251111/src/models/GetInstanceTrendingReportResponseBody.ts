// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceTrendingReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of answered sessions.
   * 
   * @example
   * 7
   */
  callsHandled?: number;
  /**
   * @remarks
   * The number of incoming sessions.
   * 
   * @example
   * 10
   */
  callsOffered?: number;
  /**
   * @remarks
   * The number of rejected sessions.
   * 
   * @example
   * 3
   */
  callsRejected?: number;
  /**
   * @remarks
   * The number of resolved sessions, based on the model evaluation results.
   * 
   * @example
   * 4
   */
  callsResolved?: number;
  /**
   * @remarks
   * The latest configured concurrency.
   * 
   * @example
   * 13
   */
  configuredConcurrency?: number;
  /**
   * @remarks
   * The distribution of labels.
   * 
   * @example
   * {
   *   "label1":{ 
   *      "label1_sub1":10,
   *      "label1_sub2":2
   * }
   * }
   */
  labelBreakdown?: string;
  /**
   * @remarks
   * The maximum talk time, in milliseconds.
   * 
   * @example
   * 20
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The distribution of rejection reasons.
   * 
   * @example
   * {
   *   "ConcurrentLimitExceeded":3
   * }
   */
  rejectionBreakdown?: string;
  /**
   * @remarks
   * The distribution of hang-up reasons after a session is connected.
   * 
   * @example
   * {
   *   "SilenceTimeout":1,
   *   "TurnsLimitExceeded":1,
   *    "Exception":1,
   *    "Transferred":1,
   *    "Normal":1
   * }
   */
  releaseReasonBreakdown?: string;
  /**
   * @remarks
   * The statistical time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1774881208361
   */
  statsTime?: number;
  /**
   * @remarks
   * The distribution of dialog turns.
   * 
   * @example
   * {
   *   "1":2,
   *   "10":3
   * }
   */
  talkTurnsDistribution?: string;
  /**
   * @remarks
   * Reserved for future use.
   * 
   * @example
   * 0
   */
  totalInputTokens?: number;
  /**
   * @remarks
   * Reserved for future use.
   * 
   * @example
   * 0
   */
  totalOutputTokens?: number;
  /**
   * @remarks
   * The total talk time, in milliseconds.
   * 
   * @example
   * 100
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Reserved for future use.
   * 
   * @example
   * 0
   */
  totalTokens?: number;
  /**
   * @remarks
   * The maximum concurrency used.
   * 
   * @example
   * 10
   */
  usedConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsRejected: 'CallsRejected',
      callsResolved: 'CallsResolved',
      configuredConcurrency: 'ConfiguredConcurrency',
      labelBreakdown: 'LabelBreakdown',
      maxTalkTime: 'MaxTalkTime',
      rejectionBreakdown: 'RejectionBreakdown',
      releaseReasonBreakdown: 'ReleaseReasonBreakdown',
      statsTime: 'StatsTime',
      talkTurnsDistribution: 'TalkTurnsDistribution',
      totalInputTokens: 'TotalInputTokens',
      totalOutputTokens: 'TotalOutputTokens',
      totalTalkTime: 'TotalTalkTime',
      totalTokens: 'TotalTokens',
      usedConcurrency: 'UsedConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callsHandled: 'number',
      callsOffered: 'number',
      callsRejected: 'number',
      callsResolved: 'number',
      configuredConcurrency: 'number',
      labelBreakdown: 'string',
      maxTalkTime: 'number',
      rejectionBreakdown: 'string',
      releaseReasonBreakdown: 'string',
      statsTime: 'number',
      talkTurnsDistribution: 'string',
      totalInputTokens: 'number',
      totalOutputTokens: 'number',
      totalTalkTime: 'number',
      totalTokens: 'number',
      usedConcurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTrendingReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The scenario ID.
   */
  data?: GetInstanceTrendingReportResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetInstanceTrendingReportResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

