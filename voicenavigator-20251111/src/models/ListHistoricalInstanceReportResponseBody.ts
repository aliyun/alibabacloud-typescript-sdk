// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalInstanceReportResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of answered calls.
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
   * The number of calls classified as resolved by the large language model (LLM).
   * 
   * @example
   * 4
   */
  callsResolved?: number;
  /**
   * @remarks
   * The most recent concurrency configuration.
   * 
   * @example
   * 2
   */
  configuredConcurrency?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 38d5fb05092b469e86b6061ad7945437
   */
  instanceId?: string;
  /**
   * @remarks
   * The breakdown of labels.
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
   * The maximum talk time in milliseconds (ms).
   * 
   * @example
   * 20
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The breakdown of rejection reasons.
   * 
   * @example
   * {
   *   "ConcurrentLimitExceeded":3
   * }
   */
  rejectionBreakdown?: string;
  /**
   * @remarks
   * A breakdown of release reasons for answered calls.
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
   * The distribution of conversation turns.
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
   * The total talk time in milliseconds (ms).
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
   * The peak number of concurrent calls.
   * 
   * @example
   * 11
   */
  usedConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsRejected: 'CallsRejected',
      callsResolved: 'CallsResolved',
      configuredConcurrency: 'ConfiguredConcurrency',
      instanceId: 'InstanceId',
      labelBreakdown: 'LabelBreakdown',
      maxTalkTime: 'MaxTalkTime',
      rejectionBreakdown: 'RejectionBreakdown',
      releaseReasonBreakdown: 'ReleaseReasonBreakdown',
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
      instanceId: 'string',
      labelBreakdown: 'string',
      maxTalkTime: 'number',
      rejectionBreakdown: 'string',
      releaseReasonBreakdown: 'string',
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

export class ListHistoricalInstanceReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of historical reports for the instances.
   */
  list?: ListHistoricalInstanceReportResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListHistoricalInstanceReportResponseBodyDataList },
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

export class ListHistoricalInstanceReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListHistoricalInstanceReportResponseBodyData;
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
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The list of error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The ID of the request.
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
      data: ListHistoricalInstanceReportResponseBodyData,
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

