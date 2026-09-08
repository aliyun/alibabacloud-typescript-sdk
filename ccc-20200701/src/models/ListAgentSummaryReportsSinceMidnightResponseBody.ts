// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListInbound extends $dara.Model {
  /**
   * @remarks
   * Average ring time, in seconds. Calculation Formula: TotalRingTime / CallsRinged.
   * 
   * @example
   * 0
   */
  averageRingTime?: number;
  /**
   * @remarks
   * Average talk time, in seconds.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average post-processing time, in seconds.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Acknowledgement Count, which is the number of times the agent answered calls.
   * 
   * @example
   * 0
   */
  callsHandled?: number;
  /**
   * @remarks
   * Assign Count, which is the number of calls assigned to this agent, including calls blindly transferred or consultation-transferred from other agents.
   * 
   * @example
   * 0
   */
  callsOffered?: number;
  /**
   * @remarks
   * Acknowledgement rate. Calculation Formula: CallsHandled / CallsOffered (because acknowledgement events and assign events may fall into different Time Ranges, the Result may exceed 100% in certain cases).
   * 
   * @example
   * 0
   */
  handleRate?: number;
  /**
   * @remarks
   * Maximum ring time, in seconds.
   * 
   * @example
   * 0
   */
  maxRingTime?: number;
  /**
   * @remarks
   * Maximum talk time, in seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Maximum post-processing time, in seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Satisfaction Index, which is the average value of the single-digit satisfaction rating entered by customers.
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Sending Count of satisfaction surveys.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * Response Count of satisfaction surveys.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * Answer rate within 20 seconds, in percent (%).
   * 
   * @example
   * 0
   */
  serviceLevel20?: number;
  /**
   * @remarks
   * Total ring time, in seconds.
   * 
   * @example
   * 0
   */
  totalRingTime?: number;
  /**
   * @remarks
   * Total talk time, in seconds.
   * 
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total post-processing time, in seconds.
   * 
   * @example
   * 0
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      handleRate: 'HandleRate',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
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
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      handleRate: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
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

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOutbound extends $dara.Model {
  /**
   * @remarks
   * Answer rate. Calculation Formula: CallsAnswered / CallsDialed. (Because management events for answering and acknowledgement may fall into different Time Ranges, the Result may exceed 100% in some cases.)
   * 
   * @example
   * 0
   */
  answerRate?: number;
  /**
   * @remarks
   * Average dial-up time, in seconds.
   * 
   * @example
   * 0
   */
  averageDialingTime?: number;
  /**
   * @remarks
   * Average talk time, in seconds.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average post-processing duration, in seconds.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Number of answered calls.
   * 
   * @example
   * 0
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Number of dial-up calls.
   * 
   * @example
   * 0
   */
  callsDialed?: number;
  /**
   * @remarks
   * Maximum dial-up duration, in seconds.
   * 
   * @example
   * 0
   */
  maxDialingTime?: number;
  /**
   * @remarks
   * Maximum talk time, in seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Maximum post-processing duration, in seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: string;
  /**
   * @remarks
   * Satisfaction index, which is the average value of the satisfaction rating digits (single-digit numbers).
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Sending Count of satisfaction surveys.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * Response Count of satisfaction surveys.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * Total dial-up time, in seconds.
   * 
   * @example
   * 0
   */
  totalDialingTime?: number;
  /**
   * @remarks
   * Total talk time, in seconds.
   * 
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total post-processing time, in seconds.
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
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      maxDialingTime: 'MaxDialingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      maxDialingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'string',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
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

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOverall extends $dara.Model {
  /**
   * @remarks
   * Average ready time. Calculation Formula: TotalReadyTime divided by the Count of ready events. The Count of ready events is a non-API statistical field, in seconds.
   * 
   * @example
   * 0
   */
  averageReadyTime?: number;
  /**
   * @remarks
   * Average talk time. Calculation Formula: TotalTalkTime / (CallsAnswered + CallsHandled), in seconds.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average post-processing time. Calculation Formula: TotalWorkTime divided by TotalCalls, in seconds.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Maximum ready time, in seconds.
   * 
   * @example
   * 37
   */
  maxReadyTime?: number;
  /**
   * @remarks
   * Maximum talk time, in seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Maximum post-processing time after a call, in seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Agent occupancy rate. Calculation Formula: (TotalWorkTime + TotalTalkTime) / TotalLoggedInTime.
   * 
   * @example
   * 0
   */
  occupancyRate?: number;
  /**
   * @remarks
   * Quantity of directly transferred calls.
   * 
   * @example
   * 0
   */
  oneTransferCalls?: number;
  /**
   * @remarks
   * Satisfaction index, which is the average of the satisfaction rating digits (single-digit numbers).
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Sending Count of satisfaction surveys.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * Count of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * Total break time, in seconds.
   * 
   * @example
   * 0
   */
  totalBreakTime?: number;
  /**
   * @remarks
   * Total call volume. Calculation Formula: CallsOffered + CallsDialed.
   * 
   * @example
   * 0
   */
  totalCalls?: number;
  /**
   * @remarks
   * Total logon time, excluding break time, in seconds.
   * 
   * @example
   * 0
   */
  totalLoggedInTime?: number;
  /**
   * @remarks
   * Total ready time, in seconds.
   * 
   * @example
   * 0
   */
  totalReadyTime?: number;
  /**
   * @remarks
   * Total talk time, in seconds.
   * 
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total post-processing time, in seconds.
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
      oneTransferCalls: 'OneTransferCalls',
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
      oneTransferCalls: 'number',
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

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportList extends $dara.Model {
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * Agent name.
   * 
   * @example
   * 坐席小王。
   */
  agentName?: string;
  /**
   * @remarks
   * Inbound metrics.
   */
  inbound?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListInbound;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Agent logon name.
   * 
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @remarks
   * Outbound metrics.
   */
  outbound?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOutbound;
  /**
   * @remarks
   * Overall metric.
   */
  overall?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOverall;
  /**
   * @remarks
   * List of skill group IDs to which the agent belongs, formatted as a JSON array string, where each array element is a skill group ID.
   * 
   * @example
   * ["skillgroup1@ccc-test","skillgroup2@ccc-test"]
   */
  skillGroupIds?: string;
  /**
   * @remarks
   * List of skill group names to which the agent belongs, formatted as a JSON array string, where each array element is a skill group name.
   * 
   * @example
   * ["测试技能组1","测试技能组2"]
   */
  skillGroupNames?: string;
  /**
   * @remarks
   * The timestamp of the statistics data point.
   * 
   * @example
   * 2018-09-13 00:00:00
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      inbound: 'Inbound',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      inbound: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListInbound,
      instanceId: 'string',
      loginName: 'string',
      outbound: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOutbound,
      overall: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListOverall,
      skillGroupIds: 'string',
      skillGroupNames: 'string',
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

export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport extends $dara.Model {
  /**
   * @remarks
   * List of agent summary data.
   */
  list?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportList[];
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 2
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
      list: { 'type': 'array', 'itemType': ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportList },
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

export class ListAgentSummaryReportsSinceMidnightResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Data.
   */
  pagedAgentSummaryReport?: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 27DD30C4-CAE2-481A-97CC-D3C54625341D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
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
      pagedAgentSummaryReport: 'PagedAgentSummaryReport',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pagedAgentSummaryReport: ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReport,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagedAgentSummaryReport && typeof (this.pagedAgentSummaryReport as any).validate === 'function') {
      (this.pagedAgentSummaryReport as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

