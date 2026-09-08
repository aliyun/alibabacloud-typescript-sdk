// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound extends $dara.Model {
  /**
   * @remarks
   * The number of calls abandoned while waiting in the skill group queue.
   * 
   * @example
   * 0
   */
  abandonedInQueueOfQueueCount?: number;
  /**
   * @remarks
   * The number of calls routed to the skill group and answered by an agent.
   * 
   * @example
   * 0
   */
  answeredByAgentOfQueueCount?: number;
  /**
   * @remarks
   * The maximum queue wait time for a call answered by an agent.
   * 
   * @example
   * 0
   */
  answeredByAgentOfQueueMaxWaitTimeDuration?: number;
  /**
   * @remarks
   * The total queue wait time for calls answered by an agent, in seconds.
   * 
   * @example
   * 0
   */
  answeredByAgentOfQueueWaitTimeDuration?: number;
  /**
   * @remarks
   * The average ring time, in seconds.
   * 
   * @example
   * 0
   */
  averageRingTime?: number;
  /**
   * @remarks
   * The average talk time, in seconds.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average after-call work time, in seconds (`TotalWorkTime` / `CallsHandled`).
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  callsAbandoned?: number;
  /**
   * @remarks
   * The number of attended transfers initiated. If a call is transferred multiple times, each transfer is counted separately.
   * 
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * The number of blind transfers initiated. If a call is transferred multiple times, each transfer is counted separately.
   * 
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * The number of handled inbound calls. Each call is counted once per queue entry, regardless of how many agents answer it.
   * 
   * @example
   * 0
   */
  callsHandled?: number;
  /**
   * @remarks
   * The number of calls offered to the skill group.
   * 
   * @example
   * 0
   */
  callsOffered?: number;
  callsOverflow?: string;
  callsQueuingCanceled?: string;
  callsQueuingFailure?: string;
  callsQueuingRerouted?: string;
  callsQueuingTimeout?: number;
  /**
   * @remarks
   * The number of calls answered by an agent within 10 seconds.
   * 
   * @example
   * 0
   */
  callsServiceLevel10?: number;
  /**
   * @remarks
   * The number of calls answered by an agent within 20 seconds.
   * 
   * @example
   * 0
   */
  callsServiceLevel20?: number;
  /**
   * @remarks
   * The number of calls answered by an agent within 30 seconds.
   * 
   * @example
   * 0
   */
  callsServiceLevel30?: number;
  callsTimeout?: number;
  /**
   * @remarks
   * The number of calls that were abandoned while an agent in the skill group was being alerted.
   * 
   * @example
   * 0
   */
  giveUpByAgentOfQueueCount?: number;
  /**
   * @remarks
   * The handle rate (`CallsHandled` / `CallsOffered`). The value can exceed 100% because the handle and offer events might occur in different time windows.
   * 
   * @example
   * 0
   */
  handleRate?: number;
  /**
   * @remarks
   * The number of calls that entered the skill group queue.
   * 
   * @example
   * 0
   */
  inComingQueueOfQueueCount?: number;
  /**
   * @remarks
   * The maximum ring time, in seconds.
   * 
   * @example
   * 0
   */
  maxRingTime?: number;
  /**
   * @remarks
   * The maximum talk time, in seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: string;
  /**
   * @remarks
   * The maximum after-call work time, in seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The number of calls that overflowed from the skill group queue.
   * 
   * @example
   * 0
   */
  overFlowInQueueOfQueueCount?: number;
  /**
   * @remarks
   * The maximum queue wait time, in seconds.
   * 
   * @example
   * 0
   */
  queueMaxWaitTimeDuration?: number;
  /**
   * @remarks
   * The queue wait time, in seconds.
   * 
   * @example
   * 0
   */
  queueWaitTimeDuration?: number;
  /**
   * @remarks
   * The satisfaction index, calculated as the average of single-digit keypad inputs from satisfaction surveys.
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The number of satisfaction surveys offered.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction surveys responded to.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * The percentage of calls answered within 20 seconds.
   * 
   * @example
   * 0
   */
  serviceLevel20?: number;
  /**
   * @remarks
   * The total ring time, in seconds.
   * 
   * @example
   * 0
   */
  totalRingTime?: number;
  /**
   * @remarks
   * The total talk time for inbound calls, in seconds.
   * 
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * The total after-call work time, in seconds.
   * 
   * @example
   * 0
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      abandonedInQueueOfQueueCount: 'AbandonedInQueueOfQueueCount',
      answeredByAgentOfQueueCount: 'AnsweredByAgentOfQueueCount',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'AnsweredByAgentOfQueueMaxWaitTimeDuration',
      answeredByAgentOfQueueWaitTimeDuration: 'AnsweredByAgentOfQueueWaitTimeDuration',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandoned: 'CallsAbandoned',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsOverflow: 'CallsOverflow',
      callsQueuingCanceled: 'CallsQueuingCanceled',
      callsQueuingFailure: 'CallsQueuingFailure',
      callsQueuingRerouted: 'CallsQueuingRerouted',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      callsServiceLevel10: 'CallsServiceLevel10',
      callsServiceLevel20: 'CallsServiceLevel20',
      callsServiceLevel30: 'CallsServiceLevel30',
      callsTimeout: 'CallsTimeout',
      giveUpByAgentOfQueueCount: 'GiveUpByAgentOfQueueCount',
      handleRate: 'HandleRate',
      inComingQueueOfQueueCount: 'InComingQueueOfQueueCount',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      overFlowInQueueOfQueueCount: 'OverFlowInQueueOfQueueCount',
      queueMaxWaitTimeDuration: 'QueueMaxWaitTimeDuration',
      queueWaitTimeDuration: 'QueueWaitTimeDuration',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonedInQueueOfQueueCount: 'number',
      answeredByAgentOfQueueCount: 'number',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'number',
      answeredByAgentOfQueueWaitTimeDuration: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAbandoned: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferOut: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      callsOverflow: 'string',
      callsQueuingCanceled: 'string',
      callsQueuingFailure: 'string',
      callsQueuingRerouted: 'string',
      callsQueuingTimeout: 'number',
      callsServiceLevel10: 'number',
      callsServiceLevel20: 'number',
      callsServiceLevel30: 'number',
      callsTimeout: 'number',
      giveUpByAgentOfQueueCount: 'number',
      handleRate: 'number',
      inComingQueueOfQueueCount: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'string',
      maxWorkTime: 'number',
      overFlowInQueueOfQueueCount: 'number',
      queueMaxWaitTimeDuration: 'number',
      queueWaitTimeDuration: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound extends $dara.Model {
  /**
   * @remarks
   * The answer rate, expressed as a percentage (%).
   * 
   * @example
   * 0
   */
  answerRate?: number;
  /**
   * @remarks
   * The average dialing time, in seconds.
   * 
   * @example
   * 0
   */
  averageDialingTime?: number;
  /**
   * @remarks
   * The average talk time, in seconds.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average after-call work time, in seconds.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  callsAbandoned?: number;
  callsAgentHandled?: number;
  /**
   * @remarks
   * The number of answered outbound calls.
   * 
   * @example
   * 0
   */
  callsAnswered?: number;
  /**
   * @remarks
   * The number of outbound calls dialed.
   * 
   * @example
   * 0
   */
  callsDialed?: number;
  callsOffered?: number;
  callsQueuingCancelled?: number;
  callsQueuingFailed?: number;
  callsQueuingFailure?: number;
  callsQueuingOverflow?: number;
  callsQueuingRerouted?: number;
  callsQueuingTimeout?: number;
  /**
   * @remarks
   * The number of calls answered by an agent within 30 seconds.
   * 
   * @example
   * 0
   */
  callsServiceLevel30?: string;
  callsServiceLevel30V2?: number;
  /**
   * @remarks
   * The maximum dialing time, in seconds.
   * 
   * @example
   * 0
   */
  maxDialingTime?: number;
  /**
   * @remarks
   * The maximum talk time, in seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum after-call work time, in seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The satisfaction index, calculated as the average of single-digit keypad inputs from satisfaction surveys.
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The number of satisfaction surveys offered.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction surveys responded to.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * The total dialing time, in seconds.
   * 
   * @example
   * 0
   */
  totalDialingTime?: number;
  /**
   * @remarks
   * The total talk time for outbound calls, in seconds.
   * 
   * @example
   * 0
   */
  totalTalkTime?: number;
  totalWaitTime?: number;
  /**
   * @remarks
   * The total after-call work time, in seconds.
   * 
   * @example
   * 0
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandoned: 'CallsAbandoned',
      callsAgentHandled: 'CallsAgentHandled',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      callsOffered: 'CallsOffered',
      callsQueuingCancelled: 'CallsQueuingCancelled',
      callsQueuingFailed: 'CallsQueuingFailed',
      callsQueuingFailure: 'CallsQueuingFailure',
      callsQueuingOverflow: 'CallsQueuingOverflow',
      callsQueuingRerouted: 'CallsQueuingRerouted',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      callsServiceLevel30: 'CallsServiceLevel30',
      callsServiceLevel30V2: 'CallsServiceLevel30V2',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWaitTime: 'TotalWaitTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAbandoned: 'number',
      callsAgentHandled: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      callsOffered: 'number',
      callsQueuingCancelled: 'number',
      callsQueuingFailed: 'number',
      callsQueuingFailure: 'number',
      callsQueuingOverflow: 'number',
      callsQueuingRerouted: 'number',
      callsQueuingTimeout: 'number',
      callsServiceLevel30: 'string',
      callsServiceLevel30V2: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalTalkTime: 'number',
      totalWaitTime: 'number',
      totalWorkTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOverall extends $dara.Model {
  /**
   * @remarks
   * The average ready time, in seconds.
   * 
   * @example
   * 0
   */
  averageReadyTime?: number;
  /**
   * @remarks
   * The average talk time, in seconds.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average after-call work time, in seconds.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * The maximum ready time, in seconds.
   * 
   * @example
   * 0
   */
  maxReadyTime?: number;
  /**
   * @remarks
   * The maximum talk time, in seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum after-call work time, in seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The agent occupancy rate, expressed as a percentage (%).
   * 
   * @example
   * 0
   */
  occupancyRate?: number;
  /**
   * @remarks
   * The satisfaction index, calculated as the average of single-digit keypad inputs from satisfaction surveys.
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The number of satisfaction surveys offered.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction surveys responded to.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * The total break time, in seconds.
   * 
   * @example
   * 0
   */
  totalBreakTime?: number;
  /**
   * @remarks
   * The total number of calls (`CallsOffered` + `CallsDialed`).
   * 
   * @example
   * 0
   */
  totalCalls?: number;
  /**
   * @remarks
   * The total logged-in time, in seconds.
   * 
   * @example
   * 0
   */
  totalLoggedInTime?: number;
  /**
   * @remarks
   * The total ready time, in seconds.
   * 
   * @example
   * 0
   */
  totalReadyTime?: number;
  /**
   * @remarks
   * The total talk time, in seconds.
   * 
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * The total after-call work time, in seconds.
   * 
   * @example
   * 0
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportList extends $dara.Model {
  /**
   * @remarks
   * Inbound call metrics.
   */
  inbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Outbound call metrics.
   */
  outbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound;
  /**
   * @remarks
   * Overall metrics.
   */
  overall?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOverall;
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The name of the skill group.
   * 
   * @example
   * 测试技能组
   */
  skillGroupName?: string;
  /**
   * @remarks
   * The timestamp when the metrics were collected.
   * 
   * @example
   * 2018-09-13 00:00:00
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound,
      instanceId: 'string',
      outbound: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound,
      overall: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOverall,
      skillGroupId: 'string',
      skillGroupName: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    if(this.inbound && typeof (this.inbound as any).validate === 'function') {
      (this.inbound as any).validate();
    }
    if(this.outbound && typeof (this.outbound as any).validate === 'function') {
      (this.outbound as any).validate();
    }
    if(this.overall && typeof (this.overall as any).validate === 'function') {
      (this.overall as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport extends $dara.Model {
  /**
   * @remarks
   * A list of skill group summary reports.
   */
  list?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportList[];
  /**
   * @remarks
   * The page number. The valid range is 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The valid range is 1 to 100.
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
   * 3
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
      list: { 'type': 'array', 'itemType': ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportList },
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

export class ListSkillGroupSummaryReportsSinceMidnightResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
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
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   */
  pagedSkillGroupSummaryReport?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2B36CEBC-6D11-5451-9E6B-C6D1927841C5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pagedSkillGroupSummaryReport: 'PagedSkillGroupSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedSkillGroupSummaryReport: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagedSkillGroupSummaryReport && typeof (this.pagedSkillGroupSummaryReport as any).validate === 'function') {
      (this.pagedSkillGroupSummaryReport as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

