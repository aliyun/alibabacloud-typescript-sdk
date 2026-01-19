// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back extends $dara.Model {
  /**
   * @example
   * 0.4
   */
  agentAnswerRate?: number;
  /**
   * @example
   * 0.4
   */
  answerRate?: number;
  /**
   * @example
   * 100
   */
  averageCustomerRingTime?: number;
  /**
   * @example
   * 100
   */
  averageRingTime?: number;
  /**
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @example
   * 10
   */
  callsAnswered?: number;
  /**
   * @example
   * 10
   */
  callsCustomerHandled?: number;
  /**
   * @example
   * 10
   */
  callsDialed?: number;
  /**
   * @example
   * 0.4
   */
  customerHandleRate?: number;
  /**
   * @example
   * 100
   */
  maxCustomerRingTime?: number;
  /**
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @example
   * 100
   */
  totalCustomerRingTime?: number;
  /**
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @example
   * 100
   */
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentAnswerRate: 'AgentAnswerRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsCustomerHandled: 'CallsCustomerHandled',
      callsDialed: 'CallsDialed',
      customerHandleRate: 'CustomerHandleRate',
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
      agentAnswerRate: 'number',
      answerRate: 'number',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      callsAnswered: 'number',
      callsCustomerHandled: 'number',
      callsDialed: 'number',
      customerHandleRate: 'number',
      maxCustomerRingTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
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

export class ListIntervalAgentSkillGroupReportResponseBodyDataInbound extends $dara.Model {
  averageFirstResponseTime?: number;
  /**
   * @example
   * 100
   */
  averageHoldTime?: number;
  averageResponseTime?: number;
  /**
   * @example
   * 100
   */
  averageRingTime?: number;
  /**
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @example
   * 100
   */
  averageWorkTime?: number;
  /**
   * @example
   * 10
   */
  callsAttendedTransferIn?: number;
  /**
   * @example
   * 10
   */
  callsAttendedTransferOut?: number;
  /**
   * @example
   * 10
   */
  callsBlindTransferIn?: number;
  /**
   * @example
   * 10
   */
  callsBlindTransferOut?: number;
  /**
   * @example
   * 10
   */
  callsHandled?: number;
  /**
   * @example
   * 10
   */
  callsHold?: number;
  /**
   * @example
   * 100
   */
  callsOffered?: number;
  /**
   * @example
   * 10
   */
  callsRinged?: number;
  /**
   * @example
   * 0.6
   */
  handleRate?: number;
  /**
   * @example
   * 100
   */
  maxHoldTime?: number;
  /**
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @example
   * 100
   */
  maxWorkTime?: number;
  satisfactionCount?: number;
  /**
   * @example
   * 1.4
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 0.8
   */
  satisfactionRate?: number;
  /**
   * @example
   * 10
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 10
   */
  satisfactionSurveysResponded?: number;
  /**
   * @example
   * 100
   */
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: number;
  /**
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @example
   * 100
   */
  totalTalkTime?: number;
  /**
   * @example
   * 100
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageFirstResponseTime: 'AverageFirstResponseTime',
      averageHoldTime: 'AverageHoldTime',
      averageResponseTime: 'AverageResponseTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAttendedTransferIn: 'CallsAttendedTransferIn',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferIn: 'CallsBlindTransferIn',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsHandled: 'CallsHandled',
      callsHold: 'CallsHold',
      callsOffered: 'CallsOffered',
      callsRinged: 'CallsRinged',
      handleRate: 'HandleRate',
      maxHoldTime: 'MaxHoldTime',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      satisfactionCount: 'SatisfactionCount',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalHoldTime: 'TotalHoldTime',
      totalMessagesSent: 'TotalMessagesSent',
      totalMessagesSentByAgent: 'TotalMessagesSentByAgent',
      totalMessagesSentByCustomer: 'TotalMessagesSentByCustomer',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageFirstResponseTime: 'number',
      averageHoldTime: 'number',
      averageResponseTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAttendedTransferIn: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferIn: 'number',
      callsBlindTransferOut: 'number',
      callsHandled: 'number',
      callsHold: 'number',
      callsOffered: 'number',
      callsRinged: 'number',
      handleRate: 'number',
      maxHoldTime: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      satisfactionCount: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalHoldTime: 'number',
      totalMessagesSent: 'number',
      totalMessagesSentByAgent: 'number',
      totalMessagesSentByCustomer: 'number',
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

export class ListIntervalAgentSkillGroupReportResponseBodyDataInternal extends $dara.Model {
  /**
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @example
   * 10
   */
  callsAnswered?: number;
  /**
   * @example
   * 10
   */
  callsDialed?: number;
  /**
   * @example
   * 10
   */
  callsHandled?: number;
  /**
   * @example
   * 10
   */
  callsOffered?: number;
  /**
   * @example
   * 10
   */
  callsTalk?: number;
  /**
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @example
   * 100
   */
  totalTalkTime?: number;
  static names(): { [key: string]: string } {
    return {
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsTalk: 'CallsTalk',
      maxTalkTime: 'MaxTalkTime',
      totalTalkTime: 'TotalTalkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageTalkTime: 'number',
      callsAnswered: 'number',
      callsDialed: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      callsTalk: 'number',
      maxTalkTime: 'number',
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

export class ListIntervalAgentSkillGroupReportResponseBodyDataOutbound extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  answerRate?: number;
  /**
   * @example
   * 100
   */
  averageDialingTime?: number;
  /**
   * @example
   * 100
   */
  averageHoldTime?: number;
  /**
   * @example
   * 100
   */
  averageRingTime?: number;
  /**
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @example
   * 100
   */
  averageWorkTime?: number;
  /**
   * @example
   * 10
   */
  callsAnswered?: number;
  /**
   * @example
   * 10
   */
  callsAttendedTransferIn?: number;
  /**
   * @example
   * 100
   */
  callsAttendedTransferOut?: number;
  /**
   * @example
   * 10
   */
  callsBlindTransferIn?: number;
  /**
   * @example
   * 10
   */
  callsBlindTransferOut?: number;
  /**
   * @example
   * 10
   */
  callsDialed?: number;
  /**
   * @example
   * 10
   */
  callsHold?: number;
  /**
   * @example
   * 10
   */
  callsRinged?: number;
  /**
   * @example
   * 100
   */
  maxDialingTime?: number;
  /**
   * @example
   * 100
   */
  maxHoldTime?: number;
  /**
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @example
   * 100
   */
  maxWorkTime?: number;
  satisfactionCount?: number;
  /**
   * @example
   * 1.4
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 0.5
   */
  satisfactionRate?: number;
  /**
   * @example
   * 10
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 10
   */
  satisfactionSurveysResponded?: number;
  /**
   * @example
   * 100
   */
  totalDialingTime?: number;
  /**
   * @example
   * 100
   */
  totalHoldTime?: number;
  /**
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @example
   * 100
   */
  totalTalkTime?: number;
  /**
   * @example
   * 100
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
      satisfactionCount: 'SatisfactionCount',
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
      satisfactionCount: 'number',
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

export class ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList extends $dara.Model {
  breakCode?: string;
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * 100
   */
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

export class ListIntervalAgentSkillGroupReportResponseBodyDataOverall extends $dara.Model {
  /**
   * @example
   * 100
   */
  averageBreakTime?: number;
  /**
   * @example
   * 100
   */
  averageHoldTime?: number;
  /**
   * @example
   * 100
   */
  averageReadyTime?: number;
  /**
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @example
   * 100
   */
  averageWorkTime?: number;
  breakCodeDetailList?: ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList[];
  /**
   * @example
   * 1620291600000
   */
  firstCheckInTime?: number;
  /**
   * @example
   * 1620291600000
   */
  lastCheckoutTime?: number;
  /**
   * @example
   * 100
   */
  maxBreakTime?: number;
  /**
   * @example
   * 100
   */
  maxHoldTime?: number;
  /**
   * @example
   * 100
   */
  maxReadyTime?: number;
  /**
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @example
   * 100
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0.4
   */
  occupancyRate?: number;
  satisfactionCount?: number;
  /**
   * @example
   * 1.5
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 0.4
   */
  satisfactionRate?: number;
  /**
   * @example
   * 10
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 10
   */
  satisfactionSurveysResponded?: number;
  /**
   * @example
   * 100
   */
  totalBreakTime?: number;
  /**
   * @example
   * 100
   */
  totalCalls?: number;
  /**
   * @example
   * 100
   */
  totalHoldTime?: number;
  /**
   * @example
   * 100
   */
  totalLoggedInTime?: number;
  /**
   * @example
   * 100
   */
  totalOffSiteOnlineTime?: number;
  /**
   * @example
   * 100
   */
  totalOfficePhoneOnlineTime?: number;
  /**
   * @example
   * 100
   */
  totalOnSiteOnlineTime?: number;
  /**
   * @example
   * 100
   */
  totalOutboundScenarioReadyTime?: number;
  /**
   * @example
   * 100
   */
  totalOutboundScenarioTime?: number;
  /**
   * @example
   * 100
   */
  totalReadyTime?: number;
  /**
   * @example
   * 100
   */
  totalTalkTime?: number;
  /**
   * @example
   * 100
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
      firstCheckInTime: 'FirstCheckInTime',
      lastCheckoutTime: 'LastCheckoutTime',
      maxBreakTime: 'MaxBreakTime',
      maxHoldTime: 'MaxHoldTime',
      maxReadyTime: 'MaxReadyTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      occupancyRate: 'OccupancyRate',
      satisfactionCount: 'SatisfactionCount',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionRate: 'SatisfactionRate',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      totalBreakTime: 'TotalBreakTime',
      totalCalls: 'TotalCalls',
      totalHoldTime: 'TotalHoldTime',
      totalLoggedInTime: 'TotalLoggedInTime',
      totalOffSiteOnlineTime: 'TotalOffSiteOnlineTime',
      totalOfficePhoneOnlineTime: 'TotalOfficePhoneOnlineTime',
      totalOnSiteOnlineTime: 'TotalOnSiteOnlineTime',
      totalOutboundScenarioReadyTime: 'TotalOutboundScenarioReadyTime',
      totalOutboundScenarioTime: 'TotalOutboundScenarioTime',
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
      breakCodeDetailList: { 'type': 'array', 'itemType': ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList },
      firstCheckInTime: 'number',
      lastCheckoutTime: 'number',
      maxBreakTime: 'number',
      maxHoldTime: 'number',
      maxReadyTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
      occupancyRate: 'number',
      satisfactionCount: 'number',
      satisfactionIndex: 'number',
      satisfactionRate: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      totalBreakTime: 'number',
      totalCalls: 'number',
      totalHoldTime: 'number',
      totalLoggedInTime: 'number',
      totalOffSiteOnlineTime: 'number',
      totalOfficePhoneOnlineTime: 'number',
      totalOnSiteOnlineTime: 'number',
      totalOutboundScenarioReadyTime: 'number',
      totalOutboundScenarioTime: 'number',
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

export class ListIntervalAgentSkillGroupReportResponseBodyData extends $dara.Model {
  back2Back?: ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back;
  inbound?: ListIntervalAgentSkillGroupReportResponseBodyDataInbound;
  internal?: ListIntervalAgentSkillGroupReportResponseBodyDataInternal;
  outbound?: ListIntervalAgentSkillGroupReportResponseBodyDataOutbound;
  overall?: ListIntervalAgentSkillGroupReportResponseBodyDataOverall;
  /**
   * @example
   * 1620291600000
   */
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      back2Back: 'Back2Back',
      inbound: 'Inbound',
      internal: 'Internal',
      outbound: 'Outbound',
      overall: 'Overall',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      back2Back: ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back,
      inbound: ListIntervalAgentSkillGroupReportResponseBodyDataInbound,
      internal: ListIntervalAgentSkillGroupReportResponseBodyDataInternal,
      outbound: ListIntervalAgentSkillGroupReportResponseBodyDataOutbound,
      overall: ListIntervalAgentSkillGroupReportResponseBodyDataOverall,
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
    if(this.internal && typeof (this.internal as any).validate === 'function') {
      (this.internal as any).validate();
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

export class ListIntervalAgentSkillGroupReportResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListIntervalAgentSkillGroupReportResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListIntervalAgentSkillGroupReportResponseBodyData },
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

