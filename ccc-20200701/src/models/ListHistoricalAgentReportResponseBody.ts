// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalAgentReportResponseBodyDataListBack2Back extends $dara.Model {
  /**
   * @remarks
   * The agent answer rate.
   * 
   * @example
   * 1
   */
  agentHandleRate?: string;
  /**
   * @remarks
   * The answer rate. Formula: CallsAnswered/CallsDialed. Because the answer event and the dial event may fall within different time ranges, the result may exceed 100% in some cases.
   * 
   * @example
   * 0.6
   */
  answerRate?: string;
  /**
   * @remarks
   * The average customer-side ring duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  averageCustomerRingTime?: string;
  /**
   * @remarks
   * The average ring duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  averageRingTime?: string;
  /**
   * @remarks
   * The average talk duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  averageTalkTime?: string;
  /**
   * @remarks
   * The number of calls answered by the agent.
   * 
   * @example
   * 10
   */
  callsAgentHandled?: string;
  /**
   * @remarks
   * The number of calls answered.
   * 
   * @example
   * 100
   */
  callsAnswered?: string;
  /**
   * @remarks
   * The number of calls answered by the customer.
   * 
   * @example
   * 7
   */
  callsCustomerAnswered?: string;
  /**
   * @remarks
   * The number of calls dialed.
   * 
   * @example
   * 100
   */
  callsDialed?: string;
  /**
   * @remarks
   * The customer answer rate.
   * 
   * @example
   * 0.7
   */
  customerAnswerRate?: string;
  /**
   * @remarks
   * The maximum customer-side ring duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  maxCustomerRingTime?: string;
  /**
   * @remarks
   * The maximum ring time. Unit: seconds.
   * 
   * @example
   * 100
   */
  maxRingTime?: string;
  /**
   * @remarks
   * The maximum talk time. Unit: seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: string;
  /**
   * @remarks
   * The total customer-side ring duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  totalCustomerRingTime?: string;
  /**
   * @remarks
   * The total ring time. Unit: seconds.
   * 
   * @example
   * 100
   */
  totalRingTime?: string;
  /**
   * @remarks
   * The total talk time. Unit: seconds.
   * 
   * @example
   * 100
   */
  totalTalkTime?: string;
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
      agentHandleRate: 'string',
      answerRate: 'string',
      averageCustomerRingTime: 'string',
      averageRingTime: 'string',
      averageTalkTime: 'string',
      callsAgentHandled: 'string',
      callsAnswered: 'string',
      callsCustomerAnswered: 'string',
      callsDialed: 'string',
      customerAnswerRate: 'string',
      maxCustomerRingTime: 'string',
      maxRingTime: 'string',
      maxTalkTime: 'string',
      totalCustomerRingTime: 'string',
      totalRingTime: 'string',
      totalTalkTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataListInboundAccessChannelTypeDetails extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * Web
   */
  accessChannelType?: string;
  /**
   * @remarks
   * The number of sessions offered.
   * 
   * @example
   * 3
   */
  callsOffered?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelType: 'AccessChannelType',
      callsOffered: 'CallsOffered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelType: 'string',
      callsOffered: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataListInbound extends $dara.Model {
  /**
   * @remarks
   * The statistics by channel.
   */
  accessChannelTypeDetails?: ListHistoricalAgentReportResponseBodyDataListInboundAccessChannelTypeDetails[];
  /**
   * @remarks
   * The average first response time for chat sessions. Unit: seconds.
   * 
   * @example
   * 10
   */
  averageFirstResponseTime?: number;
  /**
   * @remarks
   * The average hold time. Formula: TotalHoldTime/CallsHold. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * The average response time for chat sessions.
   * 
   * @example
   * 12
   */
  averageResponseTime?: number;
  /**
   * @remarks
   * The average ring time. Formula: TotalRingTime/CallsRinged. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageRingTime?: number;
  /**
   * @remarks
   * The average talk time. Formula: TotalTalkTime/CallsHandled. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average after-call work (ACW) time. Formula: TotalWorkTime/CallsHandled. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * The number of attended transfers in. If a call is transferred in to this agent multiple times, each transfer is counted separately.
   * 
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * The number of attended transfers out. If a call is transferred out to other agents multiple times, each transfer is counted separately.
   * 
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * The number of blind transfers in. If a call is transferred in to this agent multiple times, each transfer is counted separately.
   * 
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * The number of blind transfers out. If a call is transferred out to other agents multiple times, each transfer is counted separately.
   * 
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * The number of calls answered by the agent.
   * 
   * @example
   * 0
   */
  callsHandled?: number;
  /**
   * @remarks
   * The number of holds, which is the number of times calls were placed on hold.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * The number of calls offered, which is the number of calls assigned to this agent, including calls blind-transferred and attended-transferred from other agents.
   * 
   * @example
   * 0
   */
  callsOffered?: number;
  /**
   * @remarks
   * The number of calls that rang the agent.
   * 
   * @example
   * 0
   */
  callsRinged?: number;
  /**
   * @remarks
   * The handle rate. Formula: CallsHandled/CallsOffered. Because the answer event and the offered event may fall within different time ranges, the result may exceed 100% in some cases.
   * 
   * @example
   * 0
   */
  handleRate?: number;
  /**
   * @remarks
   * The maximum hold time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * The maximum ring time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxRingTime?: number;
  /**
   * @remarks
   * The maximum talk time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum after-call work (ACW) time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The satisfaction index, which is the average value of satisfaction survey key presses (single-digit numbers).
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The satisfaction rate. Formula: number of satisfied ratings/number of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * The number of satisfaction surveys sent.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * The 15-second service level.
   * 
   * @example
   * 0.85
   */
  serviceLevel15?: number;
  /**
   * @remarks
   * The total hold time. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * The total number of messages sent in chat sessions.
   * 
   * @example
   * 16
   */
  totalMessagesSent?: number;
  /**
   * @remarks
   * The total number of messages sent by the agent in chat sessions.
   * 
   * @example
   * 7
   */
  totalMessagesSentByAgent?: number;
  /**
   * @remarks
   * The total number of messages sent by the customer in chat sessions.
   * 
   * @example
   * 9
   */
  totalMessagesSentByCustomer?: string;
  /**
   * @remarks
   * The total ring time. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalRingTime?: number;
  /**
   * @remarks
   * The total talk time. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * The total after-call work (ACW) time. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelTypeDetails: 'AccessChannelTypeDetails',
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
      serviceLevel15: 'ServiceLevel15',
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
      accessChannelTypeDetails: { 'type': 'array', 'itemType': ListHistoricalAgentReportResponseBodyDataListInboundAccessChannelTypeDetails },
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
      serviceLevel15: 'number',
      totalHoldTime: 'number',
      totalMessagesSent: 'number',
      totalMessagesSentByAgent: 'number',
      totalMessagesSentByCustomer: 'string',
      totalRingTime: 'number',
      totalTalkTime: 'number',
      totalWorkTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessChannelTypeDetails)) {
      $dara.Model.validateArray(this.accessChannelTypeDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalAgentReportResponseBodyDataListInternal extends $dara.Model {
  /**
   * @remarks
   * The average talk duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The number of calls answered.
   * 
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @remarks
   * The number of calls dialed.
   * 
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @remarks
   * The number of calls answered.
   * 
   * @example
   * 100
   */
  callsHandled?: number;
  /**
   * @remarks
   * The number of inbound calls.
   * 
   * @example
   * 100
   */
  callsOffered?: number;
  /**
   * @remarks
   * The number of calls participated in.
   * 
   * @example
   * 100
   */
  callsTalked?: number;
  /**
   * @remarks
   * The maximum talk time. Unit: seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The total talk time. Unit: seconds.
   * 
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

export class ListHistoricalAgentReportResponseBodyDataListOutbound extends $dara.Model {
  /**
   * @remarks
   * The answer rate. Formula: CallsAnswered/CallsDialed. Because the answer event and the dial event may fall within different time ranges, the result may exceed 100% in some cases.
   * 
   * @example
   * 0
   */
  answerRate?: number;
  /**
   * @remarks
   * The average dialing time. Formula: TotalDialingTime/CallsDialed. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageDialingTime?: number;
  /**
   * @remarks
   * The average hold time. Formula: TotalHoldTime/CallsHold. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * The average ring time. Formula: TotalRingTime/CallsRinged. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageRingTime?: number;
  /**
   * @remarks
   * The average talk time. Formula: TotalTalkTime/CallsAnswered. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average after-call work (ACW) time. Formula: TotalWorkTime/CallsDialed. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * The number of calls answered.
   * 
   * @example
   * 0
   */
  callsAnswered?: number;
  /**
   * @remarks
   * The number of attended transfers in. If a call is transferred in to this agent multiple times, each transfer is counted separately.
   * 
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * The number of attended transfers out. If a call is transferred out to other agents multiple times, each transfer is counted separately.
   * 
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * The number of blind transfers in. If a call is transferred in to this agent multiple times, each transfer is counted separately.
   * 
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * The number of blind transfers out. If a call is transferred out to other agents multiple times, each transfer is counted separately.
   * 
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * The number of calls dialed.
   * 
   * @example
   * 0
   */
  callsDialed?: number;
  /**
   * @remarks
   * The number of holds, which is the number of times calls were placed on hold.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * The number of calls that rang the agent.
   * 
   * @example
   * 0
   */
  callsRinged?: number;
  /**
   * @remarks
   * The maximum dialing time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxDialingTime?: number;
  /**
   * @remarks
   * The maximum hold time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * The maximum ring time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxRingTime?: number;
  /**
   * @remarks
   * The maximum talk time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum after-call work (ACW) time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The satisfaction index, which is the average value of satisfaction survey key presses (single-digit numbers).
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The satisfaction rate. Formula: number of satisfied ratings/number of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * The number of satisfaction surveys sent.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * The total dialing time. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalDialingTime?: number;
  /**
   * @remarks
   * The total hold time. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * The total ring time. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalRingTime?: number;
  /**
   * @remarks
   * The total talk time. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * The total after-call work (ACW) time. Unit: seconds.
   * 
   * @example
   * 0
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

export class ListHistoricalAgentReportResponseBodyDataListOverallBreakCodeDetailList extends $dara.Model {
  /**
   * @remarks
   * The break type code.
   * 
   * @example
   * Meeting.
   */
  breakCode?: string;
  /**
   * @remarks
   * The number of occurrences of this break type.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The total duration of this break type. Unit: seconds.
   * 
   * @example
   * 120
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

export class ListHistoricalAgentReportResponseBodyDataListOverall extends $dara.Model {
  /**
   * @remarks
   * The average break duration. Formula: TotalBreakTime / number of breaks. The number of breaks is a non-API statistical field. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageBreakTime?: number;
  /**
   * @remarks
   * The average hold duration. Unit: seconds. Formula: TotalHoldTime / (inbound CallsHold + outbound CallsHold).
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * The average ready duration. Formula: TotalReadyTime / number of ready states. The number of ready states is a non-API statistical field. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageReadyTime?: number;
  /**
   * @remarks
   * The average talk duration. Formula: TotalTalkTime / (CallsAnswered + CallsHandled). Unit: seconds.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average after-call work duration. Formula: TotalWorkTime / TotalCalls. Unit: seconds.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * The statistics for each break type.
   */
  breakCodeDetailList?: ListHistoricalAgentReportResponseBodyDataListOverallBreakCodeDetailList[];
  /**
   * @remarks
   * The earliest check-in time. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1686030515000
   */
  firstCheckInTime?: number;
  /**
   * @remarks
   * The last check-out time. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1686030515000
   */
  lastCheckOutTime?: number;
  /**
   * @remarks
   * The maximum break duration. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxBreakTime?: number;
  /**
   * @remarks
   * The maximum hold time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * The maximum ready duration. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxReadyTime?: number;
  /**
   * @remarks
   * The maximum talk time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum after-call work (ACW) time. Unit: seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The agent occupancy rate. Formula: (TotalWorkTime + TotalTalkTime) / TotalLoggedInTime.
   * 
   * @example
   * 0
   */
  occupancyRate?: number;
  /**
   * @remarks
   * The satisfaction index, which is the average value of satisfaction survey key presses (single-digit numbers).
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The satisfaction rate. Formula: number of satisfied ratings/number of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * The number of satisfaction surveys sent.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * The total break duration. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalBreakTime?: number;
  /**
   * @remarks
   * The total number of calls. Formula: CallsOffered + CallsDialed.
   * 
   * @example
   * 0
   */
  totalCalls?: number;
  /**
   * @remarks
   * The total hold duration. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * The total logged-in duration, excluding break time. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalLoggedInTime?: number;
  /**
   * @remarks
   * The total off-site online duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  totalOffSiteLoggedInTime?: number;
  /**
   * @remarks
   * The total off-site online duration. Unit: seconds.
   * 
   * @example
   * Deprecated. Use TotalOffSiteLoggedInTime instead.
   */
  totalOffSiteOnlineTime?: number;
  /**
   * @remarks
   * The total online duration in office phone mode. Unit: seconds.
   * 
   * @example
   * 3600
   */
  totalOfficePhoneLoggedInTime?: number;
  /**
   * @remarks
   * The total online duration in office phone mode. Unit: seconds.
   * 
   * @example
   * Deprecated. Use TotalOfficePhoneLoggedInTime instead.
   */
  totalOfficePhoneOnlineTime?: number;
  /**
   * @remarks
   * The total on-site online duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  totalOnSiteLoggedInTime?: number;
  /**
   * @remarks
   * The total on-site online duration. Unit: seconds.
   * 
   * @example
   * Deprecated. Use TotalOnSiteLoggedInTime instead.
   */
  totalOnSiteOnlineTime?: number;
  /**
   * @remarks
   * The total outbound-only online duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  totalOutboundScenarioLoggedInTime?: number;
  /**
   * @remarks
   * The total outbound-only idle duration. Unit: seconds.
   * 
   * @example
   * 100
   */
  totalOutboundScenarioReadyTime?: number;
  /**
   * @remarks
   * The total outbound-only online duration. Unit: seconds.
   * 
   * @example
   * Deprecated. Use TotalOutboundScenarioLoggedInTime instead.
   */
  totalOutboundScenarioTime?: number;
  /**
   * @remarks
   * The total ready duration. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalReadyTime?: number;
  /**
   * @remarks
   * The total talk time. Unit: seconds.
   * 
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * The total after-call work (ACW) time. Unit: seconds.
   * 
   * @example
   * 0
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
      totalOffSiteOnlineTime: 'TotalOffSiteOnlineTime',
      totalOfficePhoneLoggedInTime: 'TotalOfficePhoneLoggedInTime',
      totalOfficePhoneOnlineTime: 'TotalOfficePhoneOnlineTime',
      totalOnSiteLoggedInTime: 'TotalOnSiteLoggedInTime',
      totalOnSiteOnlineTime: 'TotalOnSiteOnlineTime',
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
      breakCodeDetailList: { 'type': 'array', 'itemType': ListHistoricalAgentReportResponseBodyDataListOverallBreakCodeDetailList },
      firstCheckInTime: 'number',
      lastCheckOutTime: 'number',
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
      totalOffSiteLoggedInTime: 'number',
      totalOffSiteOnlineTime: 'number',
      totalOfficePhoneLoggedInTime: 'number',
      totalOfficePhoneOnlineTime: 'number',
      totalOnSiteLoggedInTime: 'number',
      totalOnSiteOnlineTime: 'number',
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

export class ListHistoricalAgentReportResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agent1@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * Agent Wang.
   */
  agentName?: string;
  /**
   * @remarks
   * The back-to-back call metrics.
   */
  back2Back?: ListHistoricalAgentReportResponseBodyDataListBack2Back;
  /**
   * @remarks
   * The agent display ID.
   * 
   * @example
   * 001
   */
  displayId?: string;
  /**
   * @remarks
   * The inbound data.
   */
  inbound?: ListHistoricalAgentReportResponseBodyDataListInbound;
  /**
   * @remarks
   * The internal call metrics.
   */
  internal?: ListHistoricalAgentReportResponseBodyDataListInternal;
  /**
   * @remarks
   * The outbound data.
   */
  outbound?: ListHistoricalAgentReportResponseBodyDataListOutbound;
  /**
   * @remarks
   * The overall data.
   */
  overall?: ListHistoricalAgentReportResponseBodyDataListOverall;
  /**
   * @remarks
   * The list of skill group IDs to which the agent belongs. The format is a JSON array character string. Each array element is a skill group ID.
   * 
   * @example
   * ["skillgroup1@ccc-test","skillgroup2@ccc-test"]
   */
  skillGroupIds?: string;
  /**
   * @remarks
   * The list of skill group names to which the agent belongs. The format is a JSON array character string. Each array element is a skill group name.
   * 
   * @example
   * ["TestSkillGroup1","TestSkillGroup2"]
   */
  skillGroupNames?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      back2Back: 'Back2Back',
      displayId: 'DisplayId',
      inbound: 'Inbound',
      internal: 'Internal',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupIds: 'SkillGroupIds',
      skillGroupNames: 'SkillGroupNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      back2Back: ListHistoricalAgentReportResponseBodyDataListBack2Back,
      displayId: 'string',
      inbound: ListHistoricalAgentReportResponseBodyDataListInbound,
      internal: ListHistoricalAgentReportResponseBodyDataListInternal,
      outbound: ListHistoricalAgentReportResponseBodyDataListOutbound,
      overall: ListHistoricalAgentReportResponseBodyDataListOverall,
      skillGroupIds: 'string',
      skillGroupNames: 'string',
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

export class ListHistoricalAgentReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of agent historical data.
   */
  list?: ListHistoricalAgentReportResponseBodyDataList[];
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 10
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
      list: { 'type': 'array', 'itemType': ListHistoricalAgentReportResponseBodyDataList },
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

export class ListHistoricalAgentReportResponseBody extends $dara.Model {
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
   * The data.
   */
  data?: ListHistoricalAgentReportResponseBodyData;
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
   * None.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
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
      data: ListHistoricalAgentReportResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

