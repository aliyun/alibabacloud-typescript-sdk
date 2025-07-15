// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back extends $dara.Model {
  /**
   * @example
   * 100
   */
  agentAnswerRate?: number;
  agentHandleRate?: number;
  /**
   * @example
   * 0.5
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
  callsAgentHandled?: number;
  /**
   * @example
   * 100
   */
  callsAnswered?: number;
  callsCustomerAnswered?: number;
  /**
   * @example
   * 100
   */
  callsCustomerHandled?: number;
  /**
   * @example
   * 100
   */
  callsDialed?: number;
  customerAnswerRate?: number;
  /**
   * @example
   * 100
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
      agentHandleRate: 'AgentHandleRate',
      answerRate: 'AnswerRate',
      averageCustomerRingTime: 'AverageCustomerRingTime',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      callsAgentHandled: 'CallsAgentHandled',
      callsAnswered: 'CallsAnswered',
      callsCustomerAnswered: 'CallsCustomerAnswered',
      callsCustomerHandled: 'CallsCustomerHandled',
      callsDialed: 'CallsDialed',
      customerAnswerRate: 'CustomerAnswerRate',
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
      agentHandleRate: 'number',
      answerRate: 'number',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      callsAgentHandled: 'number',
      callsAnswered: 'number',
      callsCustomerAnswered: 'number',
      callsCustomerHandled: 'number',
      callsDialed: 'number',
      customerAnswerRate: 'number',
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
   * 11
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
   * 100
   */
  callsAttendedTransferIn?: number;
  /**
   * @example
   * 10
   */
  callsAttendedTransferOut?: number;
  /**
   * @example
   * 100
   */
  callsBlindTransferIn?: number;
  /**
   * @example
   * 100
   */
  callsBlindTransferOut?: number;
  /**
   * @example
   * 7
   */
  callsHandled?: number;
  /**
   * @example
   * 100
   */
  callsHold?: number;
  /**
   * @example
   * 100
   */
  callsOffered?: number;
  /**
   * @example
   * 100
   */
  callsRinged?: number;
  /**
   * @example
   * 0.5
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
  /**
   * @example
   * 100
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 0.5
   */
  satisfactionRate?: number;
  /**
   * @example
   * 100
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 100
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
   * 85
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
   * 100
   */
  callsAnswered?: number;
  /**
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @example
   * 100
   */
  callsHandled?: number;
  /**
   * @example
   * 100
   */
  callsOffered?: number;
  /**
   * @example
   * 100
   */
  callsTalk?: number;
  callsTalked?: number;
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
      callsTalked: 'CallsTalked',
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
      callsTalked: 'number',
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
   * 100
   */
  callsAnswered?: number;
  /**
   * @example
   * 100
   */
  callsAttendedTransferIn?: number;
  /**
   * @example
   * 100
   */
  callsAttendedTransferOut?: number;
  /**
   * @example
   * 100
   */
  callsBlindTransferIn?: number;
  /**
   * @example
   * 100
   */
  callsBlindTransferOut?: number;
  /**
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @example
   * 100
   */
  callsHold?: number;
  /**
   * @example
   * 100
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
   * 0
   */
  maxTalkTime?: number;
  /**
   * @example
   * 100
   */
  maxWorkTime?: number;
  /**
   * @example
   * 100
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 100
   */
  satisfactionRate?: number;
  /**
   * @example
   * 100
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 100
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

export class ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList extends $dara.Model {
  breakCode?: string;
  /**
   * @example
   * 1
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
   * 100
   */
  firstCheckInTime?: number;
  lastCheckOutTime?: number;
  /**
   * @example
   * 100
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
  /**
   * @example
   * 1.4
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 100
   */
  satisfactionRate?: number;
  /**
   * @example
   * 100
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 100
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
  totalOffSiteLoggedInTime?: string;
  totalOfficePhoneLoggedInTime?: string;
  totalOnSiteLoggedInTime?: string;
  totalOutboundScenarioLoggedInTime?: number;
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
      lastCheckOutTime: 'LastCheckOutTime',
      lastCheckoutTime: 'LastCheckoutTime',
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
      totalOffSiteLoggedInTime: 'TotalOffSiteLoggedInTime',
      totalOfficePhoneLoggedInTime: 'TotalOfficePhoneLoggedInTime',
      totalOnSiteLoggedInTime: 'TotalOnSiteLoggedInTime',
      totalOutboundScenarioLoggedInTime: 'TotalOutboundScenarioLoggedInTime',
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
      lastCheckOutTime: 'number',
      lastCheckoutTime: 'number',
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
      totalOffSiteLoggedInTime: 'string',
      totalOfficePhoneLoggedInTime: 'string',
      totalOnSiteLoggedInTime: 'string',
      totalOutboundScenarioLoggedInTime: 'number',
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
   * 2778FA12-EDD6-42AA-9B15-AF855072E5E5
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

