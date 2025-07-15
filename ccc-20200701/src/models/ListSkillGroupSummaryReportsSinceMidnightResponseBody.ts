// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound extends $dara.Model {
  /**
   * @example
   * 0
   */
  abandonedInQueueOfQueueCount?: number;
  /**
   * @example
   * 0
   */
  answeredByAgentOfQueueCount?: number;
  /**
   * @example
   * 0
   */
  answeredByAgentOfQueueMaxWaitTimeDuration?: number;
  /**
   * @example
   * 0
   */
  answeredByAgentOfQueueWaitTimeDuration?: number;
  /**
   * @example
   * 0
   */
  averageRingTime?: number;
  /**
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @example
   * 0
   */
  averageWorkTime?: number;
  callsAbandoned?: number;
  /**
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @example
   * 0
   */
  callsHandled?: number;
  /**
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
   * @example
   * 0
   */
  callsServiceLevel10?: number;
  /**
   * @example
   * 0
   */
  callsServiceLevel20?: number;
  /**
   * @example
   * 0
   */
  callsServiceLevel30?: number;
  callsTimeout?: number;
  /**
   * @example
   * 0
   */
  giveUpByAgentOfQueueCount?: number;
  /**
   * @example
   * 0
   */
  handleRate?: number;
  /**
   * @example
   * 0
   */
  inComingQueueOfQueueCount?: number;
  /**
   * @example
   * 0
   */
  maxRingTime?: number;
  /**
   * @example
   * 0
   */
  maxTalkTime?: string;
  /**
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0
   */
  overFlowInQueueOfQueueCount?: number;
  /**
   * @example
   * 0
   */
  queueMaxWaitTimeDuration?: number;
  /**
   * @example
   * 0
   */
  queueWaitTimeDuration?: number;
  /**
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @example
   * 0
   */
  serviceLevel20?: number;
  /**
   * @example
   * 0
   */
  totalRingTime?: number;
  /**
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
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
   * @example
   * 0
   */
  answerRate?: number;
  /**
   * @example
   * 0
   */
  averageDialingTime?: number;
  /**
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @example
   * 0
   */
  averageWorkTime?: number;
  callsAbandoned?: number;
  callsAgentHandled?: number;
  /**
   * @example
   * 0
   */
  callsAnswered?: number;
  /**
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
   * @example
   * 0
   */
  callsServiceLevel30?: string;
  callsServiceLevel30V2?: number;
  /**
   * @example
   * 0
   */
  maxDialingTime?: number;
  /**
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @example
   * 0
   */
  totalDialingTime?: number;
  /**
   * @example
   * 0
   */
  totalTalkTime?: number;
  totalWaitTime?: number;
  /**
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
   * @example
   * 0
   */
  averageReadyTime?: number;
  /**
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @example
   * 0
   */
  maxReadyTime?: number;
  /**
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0
   */
  occupancyRate?: number;
  /**
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @example
   * 0
   */
  totalBreakTime?: number;
  /**
   * @example
   * 0
   */
  totalCalls?: number;
  /**
   * @example
   * 0
   */
  totalLoggedInTime?: number;
  /**
   * @example
   * 0
   */
  totalReadyTime?: number;
  /**
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
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
  inbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  outbound?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOutbound;
  overall?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListOverall;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  skillGroupName?: string;
  /**
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
  list?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  pagedSkillGroupSummaryReport?: ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReport;
  /**
   * @example
   * 2B36CEBC-6D11-5451-9E6B-C6D1927841C5
   */
  requestId?: string;
  /**
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

