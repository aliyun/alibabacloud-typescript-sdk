// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalScriptReportResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of calls handled.
   * 
   * @example
   * 7
   */
  callsHandled?: number;
  /**
   * @remarks
   * The number of calls offered.
   * 
   * @example
   * 10
   */
  callsOffered?: number;
  /**
   * @remarks
   * The number of calls rejected.
   * 
   * @example
   * 3
   */
  callsRejected?: number;
  /**
   * @remarks
   * The number of calls that a large language model (LLM) determined to be resolved.
   * 
   * @example
   * 4
   */
  callsResolved?: number;
  /**
   * @remarks
   * The most recent concurrency setting.
   * 
   * @example
   * 3
   */
  configuredConcurrency?: number;
  /**
   * @remarks
   * A breakdown of call labels.
   * 
   * @example
   * {
   *   "1":2,
   *   "10":3
   * }
   */
  labelDistribution?: string;
  /**
   * @remarks
   * The maximum talk time, in milliseconds.
   * 
   * @example
   * 30
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * A breakdown of call rejection reasons.
   * 
   * @example
   * {
   *   "ConcurrentLimitExceeded":3
   * }
   */
  rejectionBreakdown?: string;
  /**
   * @remarks
   * A breakdown of disconnection reasons for answered calls.
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
   * The script ID.
   * 
   * @example
   * 891264b9-5883-4068-94a6-241ceb8d51e4
   */
  scriptId?: string;
  /**
   * @remarks
   * A breakdown of conversation turns.
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
   * The peak concurrency.
   * 
   * @example
   * 2
   */
  usedConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsRejected: 'CallsRejected',
      callsResolved: 'CallsResolved',
      configuredConcurrency: 'ConfiguredConcurrency',
      labelDistribution: 'LabelDistribution',
      maxTalkTime: 'MaxTalkTime',
      rejectionBreakdown: 'RejectionBreakdown',
      releaseReasonBreakdown: 'ReleaseReasonBreakdown',
      scriptId: 'ScriptId',
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
      labelDistribution: 'string',
      maxTalkTime: 'number',
      rejectionBreakdown: 'string',
      releaseReasonBreakdown: 'string',
      scriptId: 'string',
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

export class ListHistoricalScriptReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of script reports.
   */
  list?: ListHistoricalScriptReportResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListHistoricalScriptReportResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalScriptReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The cloned voice ID.
   */
  data?: ListHistoricalScriptReportResponseBodyData;
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
   * Success
   */
  message?: string;
  /**
   * @remarks
   * A list of invalid parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9ab43460-c0b9-40e2-8447-48d82c97fc67
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
      data: ListHistoricalScriptReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
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

