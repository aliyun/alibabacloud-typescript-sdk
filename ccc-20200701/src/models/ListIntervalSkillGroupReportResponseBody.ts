// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalSkillGroupReportResponseBodyDataBack2Back extends $dara.Model {
  agentHandleRate?: number;
  answerRate?: string;
  averageCustomerRingTime?: number;
  averageRingTime?: number;
  averageTalkTime?: string;
  callsAgentHandled?: number;
  callsAnswered?: number;
  callsCustomerAnswered?: number;
  callsDialed?: number;
  customerAnswerRate?: number;
  maxCustomerRingTime?: number;
  maxRingTime?: number;
  maxTalkTime?: string;
  totalCustomerRingTime?: number;
  totalRingTime?: number;
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentHandleRate: 'AgentHandleRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAgentHandled: 'CallsAgentHandled',
      callsAnswered: 'CallsAnswered',
      callsCustomerAnswered: 'CallsCustomerAnswered',
      callsDialed: 'CallsDialed',
      customerAnswerRate: 'CustomerAnswerRate',
      maxCustomerRingTime: 'MaxCustomerRingTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      totalCustomerRingTime: 'TotalCustomerRingTime',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentHandleRate: 'number',
      answerRate: 'string',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'string',
      callsAgentHandled: 'number',
      callsAnswered: 'number',
      callsCustomerAnswered: 'number',
      callsDialed: 'number',
      customerAnswerRate: 'number',
      maxCustomerRingTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'string',
      totalCustomerRingTime: 'number',
      totalRingTime: 'number',
      totalTalkTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBodyDataInbound extends $dara.Model {
  /**
   * @example
   * 0
   */
  abandonRate?: number;
  /**
   * @example
   * 0
   */
  averageAbandonTime?: number;
  /**
   * @example
   * 0
   */
  averageAbandonedInQueueTime?: number;
  /**
   * @example
   * 0
   */
  averageAbandonedInRingTime?: number;
  averageFirstResponseTime?: number;
  /**
   * @example
   * 0
   */
  averageHoldTime?: number;
  averageResponseTime?: number;
  /**
   * @example
   * 11
   */
  averageRingTime?: number;
  /**
   * @example
   * 5
   */
  averageTalkTime?: number;
  /**
   * @example
   * 11
   */
  averageWaitTime?: number;
  /**
   * @example
   * 8
   */
  averageWorkTime?: number;
  /**
   * @example
   * 0
   */
  callsAbandoned?: number;
  /**
   * @example
   * 0
   */
  callsAbandonedInQueue?: number;
  /**
   * @example
   * 0
   */
  callsAbandonedInRing?: number;
  /**
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @example
   * 2
   */
  callsHandled?: number;
  /**
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @example
   * 3
   */
  callsOffered?: number;
  /**
   * @example
   * 0
   */
  callsOverflow?: number;
  /**
   * @example
   * 3
   */
  callsQueued?: number;
  callsQueuingOverflow?: number;
  callsQueuingTimeout?: number;
  /**
   * @example
   * 3
   */
  callsRinged?: number;
  /**
   * @example
   * 0
   */
  callsTimeout?: number;
  /**
   * @example
   * 0.6666666666666666
   */
  handleRate?: number;
  /**
   * @example
   * 0
   */
  maxAbandonTime?: number;
  /**
   * @example
   * 0
   */
  maxAbandonedInQueueTime?: number;
  /**
   * @example
   * 0
   */
  maxAbandonedInRingTime?: number;
  /**
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @example
   * 18
   */
  maxRingTime?: number;
  /**
   * @example
   * 6
   */
  maxTalkTime?: number;
  /**
   * @example
   * 18
   */
  maxWaitTime?: number;
  /**
   * @example
   * 19
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
  satisfactionRate?: number;
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
  totalAbandonTime?: number;
  /**
   * @example
   * 0
   */
  totalAbandonedInQueueTime?: number;
  /**
   * @example
   * 0
   */
  totalAbandonedInRingTime?: number;
  /**
   * @example
   * 0
   */
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: number;
  /**
   * @example
   * 33
   */
  totalRingTime?: number;
  /**
   * @example
   * 9
   */
  totalTalkTime?: number;
  /**
   * @example
   * 33
   */
  totalWaitTime?: number;
  /**
   * @example
   * 23
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      abandonRate: 'AbandonRate',
      averageAbandonTime: 'AverageAbandonTime',
      averageAbandonedInQueueTime: 'AverageAbandonedInQueueTime',
      averageAbandonedInRingTime: 'AverageAbandonedInRingTime',
      averageFirstResponseTime: 'AverageFirstResponseTime',
      averageHoldTime: 'AverageHoldTime',
      averageResponseTime: 'AverageResponseTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWaitTime: 'AverageWaitTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandoned: 'CallsAbandoned',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsHandled: 'CallsHandled',
      callsHold: 'CallsHold',
      callsOffered: 'CallsOffered',
      callsOverflow: 'CallsOverflow',
      callsQueued: 'CallsQueued',
      callsQueuingOverflow: 'CallsQueuingOverflow',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      callsRinged: 'CallsRinged',
      callsTimeout: 'CallsTimeout',
      handleRate: 'HandleRate',
      maxAbandonTime: 'MaxAbandonTime',
      maxAbandonedInQueueTime: 'MaxAbandonedInQueueTime',
      maxAbandonedInRingTime: 'MaxAbandonedInRingTime',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWaitTime: 'MaxWaitTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalAbandonTime: 'TotalAbandonTime',
      totalAbandonedInQueueTime: 'TotalAbandonedInQueueTime',
      totalAbandonedInRingTime: 'TotalAbandonedInRingTime',
      totalHoldTime: 'TotalHoldTime',
      totalMessagesSent: 'TotalMessagesSent',
      totalMessagesSentByAgent: 'TotalMessagesSentByAgent',
      totalMessagesSentByCustomer: 'TotalMessagesSentByCustomer',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWaitTime: 'TotalWaitTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonRate: 'number',
      averageAbandonTime: 'number',
      averageAbandonedInQueueTime: 'number',
      averageAbandonedInRingTime: 'number',
      averageFirstResponseTime: 'number',
      averageHoldTime: 'number',
      averageResponseTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWaitTime: 'number',
      averageWorkTime: 'number',
      callsAbandoned: 'number',
      callsAbandonedInQueue: 'number',
      callsAbandonedInRing: 'number',
      callsAttendedTransferIn: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferIn: 'number',
      callsBlindTransferOut: 'number',
      callsHandled: 'number',
      callsHold: 'number',
      callsOffered: 'number',
      callsOverflow: 'number',
      callsQueued: 'number',
      callsQueuingOverflow: 'number',
      callsQueuingTimeout: 'number',
      callsRinged: 'number',
      callsTimeout: 'number',
      handleRate: 'number',
      maxAbandonTime: 'number',
      maxAbandonedInQueueTime: 'number',
      maxAbandonedInRingTime: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWaitTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
      totalAbandonTime: 'number',
      totalAbandonedInQueueTime: 'number',
      totalAbandonedInRingTime: 'number',
      totalHoldTime: 'number',
      totalMessagesSent: 'number',
      totalMessagesSentByAgent: 'number',
      totalMessagesSentByCustomer: 'number',
      totalRingTime: 'number',
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

export class ListIntervalSkillGroupReportResponseBodyDataOutbound extends $dara.Model {
  /**
   * @example
   * 0
   */
  answerRate?: number;
  /**
   * @example
   * 30
   */
  averageDialingTime?: number;
  /**
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @example
   * 0
   */
  averageRingTime?: number;
  /**
   * @example
   * 5
   */
  averageTalkTime?: number;
  /**
   * @example
   * 3
   */
  averageWorkTime?: number;
  /**
   * @example
   * 1
   */
  callsAnswered?: number;
  /**
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @example
   * 2
   */
  callsDialed?: number;
  /**
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @example
   * 0
   */
  callsRinged?: number;
  /**
   * @example
   * 49
   */
  maxDialingTime?: number;
  /**
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @example
   * 0
   */
  maxRingTime?: number;
  /**
   * @example
   * 5
   */
  maxTalkTime?: number;
  /**
   * @example
   * 4
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
  satisfactionRate?: number;
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
   * 60
   */
  totalDialingTime?: number;
  /**
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @example
   * 0
   */
  totalRingTime?: number;
  /**
   * @example
   * 5
   */
  totalTalkTime?: number;
  /**
   * @example
   * 5
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      answerRate: 'AnswerRate',
      averageDialingTime: 'AverageDialingTime',
      averageHoldTime: 'AverageHoldTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAnswered: 'CallsAnswered',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsDialed: 'CallsDialed',
      callsHold: 'CallsHold',
      callsRinged: 'CallsRinged',
      maxDialingTime: 'MaxDialingTime',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalDialingTime: 'TotalDialingTime',
      totalHoldTime: 'TotalHoldTime',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerRate: 'number',
      averageDialingTime: 'number',
      averageHoldTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAnswered: 'number',
      callsAttendedTransferIn: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferIn: 'number',
      callsBlindTransferOut: 'number',
      callsDialed: 'number',
      callsHold: 'number',
      callsRinged: 'number',
      maxDialingTime: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalDialingTime: 'number',
      totalHoldTime: 'number',
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

export class ListIntervalSkillGroupReportResponseBodyDataOverallBreakCodeDetailList extends $dara.Model {
  breakCode?: string;
  count?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      count: 'Count',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      count: 'number',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBodyDataOverall extends $dara.Model {
  /**
   * @example
   * 0
   */
  averageBreakTime?: number;
  /**
   * @example
   * 0
   */
  averageHoldTime?: number;
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
   * 6
   */
  averageWorkTime?: number;
  breakCodeDetailList?: ListIntervalSkillGroupReportResponseBodyDataOverallBreakCodeDetailList[];
  /**
   * @example
   * 1
   */
  maxBreakTime?: number;
  /**
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @example
   * 4927
   */
  maxReadyTime?: number;
  /**
   * @example
   * 6
   */
  maxTalkTime?: number;
  /**
   * @example
   * 19
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0.00422315148470254
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
  satisfactionRate?: number;
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
   * 5
   */
  totalBreakTime?: number;
  /**
   * @example
   * 5
   */
  totalCalls?: number;
  /**
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @example
   * 9236
   */
  totalLoggedInTime?: number;
  /**
   * @example
   * 9106
   */
  totalReadyTime?: number;
  /**
   * @example
   * 13
   */
  totalTalkTime?: number;
  /**
   * @example
   * 27
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageBreakTime: 'AverageBreakTime',
      averageHoldTime: 'AverageHoldTime',
      averageReadyTime: 'AverageReadyTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      breakCodeDetailList: 'BreakCodeDetailList',
      maxBreakTime: 'MaxBreakTime',
      maxHoldTime: 'MaxHoldTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalHoldTime: 'TotalHoldTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalReadyTime: 'TotalReadyTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageBreakTime: 'number',
      averageHoldTime: 'number',
      averageReadyTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      breakCodeDetailList: { 'type': 'array', 'itemType': ListIntervalSkillGroupReportResponseBodyDataOverallBreakCodeDetailList },
      maxBreakTime: 'number',
      maxHoldTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalHoldTime: 'number',
      totalLoggedInTime: 'number',
      totalReadyTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.breakCodeDetailList)) {
      $dara.Model.validateArray(this.breakCodeDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalSkillGroupReportResponseBodyData extends $dara.Model {
  back2Back?: ListIntervalSkillGroupReportResponseBodyDataBack2Back;
  inbound?: ListIntervalSkillGroupReportResponseBodyDataInbound;
  outbound?: ListIntervalSkillGroupReportResponseBodyDataOutbound;
  overall?: ListIntervalSkillGroupReportResponseBodyDataOverall;
  /**
   * @example
   * 1604639129000
   */
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      back2Back: 'Back2Back',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      back2Back: ListIntervalSkillGroupReportResponseBodyDataBack2Back,
      inbound: ListIntervalSkillGroupReportResponseBodyDataInbound,
      outbound: ListIntervalSkillGroupReportResponseBodyDataOutbound,
      overall: ListIntervalSkillGroupReportResponseBodyDataOverall,
      statsTime: 'number',
    };
  }

  validate() {
    if(this.back2Back && typeof (this.back2Back as any).validate === 'function') {
      (this.back2Back as any).validate();
    }
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

export class ListIntervalSkillGroupReportResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListIntervalSkillGroupReportResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 943D8EF3-3321-471F-A104-51C96FCA94D6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListIntervalSkillGroupReportResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

