// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScriptTrendingReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of handled calls.
   * 
   * @example
   * 7
   */
  callsHandled?: number;
  /**
   * @remarks
   * The number of offered calls.
   * 
   * @example
   * 10
   */
  callsOffered?: number;
  /**
   * @remarks
   * The number of rejected calls.
   * 
   * @example
   * 3
   */
  callsRejected?: number;
  /**
   * @remarks
   * The number of resolved calls, based on the large model\\"s evaluation.
   * 
   * @example
   * 3
   */
  callsResolved?: number;
  /**
   * @remarks
   * The configured concurrency limit.
   * 
   * @example
   * 13
   */
  configuredConcurrency?: number;
  /**
   * @remarks
   * A JSON string that provides a breakdown of label distribution.
   * 
   * @example
   * {
   *   "label1":{ 
   *      "label1_sub1":10,
   *      "label1_sub2":2
   * }
   * }
   */
  labelBreakDown?: string;
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
   * A JSON string that provides a breakdown of rejection reasons.
   * 
   * @example
   * {
   *   "ConcurrentLimitExceeded":3
   * }
   */
  rejectionBreakdown?: string;
  /**
   * @remarks
   * A JSON string that provides a breakdown of call disconnection reasons.
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
   * The start time of the interval. The value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1774881208361
   */
  statsTime?: number;
  /**
   * @remarks
   * A JSON string that provides a breakdown of conversation turn distribution.
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
   * This parameter is reserved for future use.
   * 
   * @example
   * 0
   */
  totalInputTokens?: number;
  /**
   * @remarks
   * This parameter is reserved for future use.
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
   * This parameter is reserved for future use.
   * 
   * @example
   * 0
   */
  totalTokens?: number;
  /**
   * @remarks
   * The peak concurrency for the interval.
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
      labelBreakDown: 'LabelBreakDown',
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
      labelBreakDown: 'string',
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

export class GetScriptTrendingReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service-specific error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * An array of scenario template objects.
   */
  data?: GetScriptTrendingReportResponseBodyData[];
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
   * get upload tool url success
   */
  message?: string;
  /**
   * @remarks
   * An array of error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DB8BA95-4513-54B9-9C67-A28909CFB4AD
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
      data: { 'type': 'array', 'itemType': GetScriptTrendingReportResponseBodyData },
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

