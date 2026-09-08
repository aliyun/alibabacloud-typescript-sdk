// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back extends $dara.Model {
  /**
   * @remarks
   * The answer rate on the agent side.
   * 
   * @example
   * 100
   */
  agentAnswerRate?: number;
  /**
   * @remarks
   * The agent answer rate.
   * 
   * @example
   * 1
   */
  agentHandleRate?: number;
  /**
   * @remarks
   * The connection rate. Formula: CallsAnswered / CallsDialed. The result may exceed 100% because the connection event and the answer event may occur in different time ranges.
   * 
   * @example
   * 0.5
   */
  answerRate?: number;
  /**
   * @remarks
   * The average ring duration on the customer side, in seconds.
   * 
   * @example
   * 100
   */
  averageCustomerRingTime?: number;
  /**
   * @remarks
   * The average ring duration, in seconds.
   * 
   * @example
   * 100
   */
  averageRingTime?: number;
  /**
   * @remarks
   * The average talk duration, in seconds.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The number of calls answered by the agent.
   * 
   * @example
   * 5
   */
  callsAgentHandled?: number;
  /**
   * @remarks
   * The number of connected calls.
   * 
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @remarks
   * The number of calls answered by the customer.
   * 
   * @example
   * 12
   */
  callsCustomerAnswered?: number;
  /**
   * @remarks
   * The number of calls answered on the customer side.
   * 
   * @example
   * 100
   */
  callsCustomerHandled?: number;
  /**
   * @remarks
   * The number of dialed calls.
   * 
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @remarks
   * The customer connection rate.
   * 
   * @example
   * 0.6
   */
  customerAnswerRate?: number;
  /**
   * @remarks
   * The answer rate on the customer side.
   * 
   * @example
   * 100
   */
  customerHandleRate?: number;
  /**
   * @remarks
   * The maximum ring duration on the customer side, in seconds.
   * 
   * @example
   * 100
   */
  maxCustomerRingTime?: number;
  /**
   * @remarks
   * The maximum ring duration, in seconds.
   * 
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @remarks
   * The maximum talk duration, in seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The total ring duration on the customer side, in seconds.
   * 
   * @example
   * 100
   */
  totalCustomerRingTime?: number;
  /**
   * @remarks
   * The total ring duration, in seconds.
   * 
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @remarks
   * The total talk duration, in seconds.
   * 
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
  /**
   * @remarks
   * The average first response time for chat sessions, in seconds.
   * 
   * @example
   * 6
   */
  averageFirstResponseTime?: number;
  /**
   * @remarks
   * The average hold duration, in seconds. Formula: TotalHoldTime / CallsHold.
   * 
   * @example
   * 100
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * The average response time for chat sessions.
   * 
   * @example
   * 18
   */
  averageResponseTime?: number;
  /**
   * @remarks
   * The average ring duration, in seconds.
   * 
   * @example
   * 11
   */
  averageRingTime?: number;
  /**
   * @remarks
   * The average talk duration, in seconds. Formula: TotalTalkTime / CallsHandled.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average post-processing duration, in seconds. Formula: TotalWorkTime / CallsHandled.
   * 
   * @example
   * 100
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * The number of consulted transfers-in. If a call is transferred to the agent multiple times, each transfer is counted as one.
   * 
   * @example
   * 100
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * The number of consulted transfers-out. If a call is transferred to other agents multiple times, each transfer is counted as one.
   * 
   * @example
   * 10
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * The number of blind transfers-in. If a call is transferred to the agent multiple times, each transfer is counted as one.
   * 
   * @example
   * 100
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * The number of blind transfers-out. If a call is transferred to other agents multiple times, each transfer is counted as one.
   * 
   * @example
   * 100
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * The number of answered calls. This is the number of times the agent answered a call.
   * 
   * @example
   * 7
   */
  callsHandled?: number;
  /**
   * @remarks
   * The number of held calls. This is the number of times a call was put on hold.
   * 
   * @example
   * 100
   */
  callsHold?: number;
  /**
   * @remarks
   * The number of calls assigned to the agent. This includes calls that are blind transferred or consult transferred to the agent.
   * 
   * @example
   * 100
   */
  callsOffered?: number;
  /**
   * @remarks
   * The number of calls that rang for the agent.
   * 
   * @example
   * 100
   */
  callsRinged?: number;
  /**
   * @remarks
   * The answer rate. Formula: CallsHandled / CallsOffered. The result may exceed 100% because the answer event and the assignment event may occur in different time ranges.
   * 
   * @example
   * 0.5
   */
  handleRate?: number;
  /**
   * @remarks
   * The maximum hold duration, in seconds.
   * 
   * @example
   * 100
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * The maximum ring duration, in seconds.
   * 
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @remarks
   * The maximum talk duration, in seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum post-processing duration, in seconds.
   * 
   * @example
   * 100
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The satisfaction index. This is the average value of the single-digit numbers pressed for satisfaction surveys.
   * 
   * @example
   * 100
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The satisfaction rate. Formula: Number of satisfactory ratings / Number of satisfaction survey responses.
   * 
   * @example
   * 0.5
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * The number of satisfaction surveys sent.
   * 
   * @example
   * 100
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction survey responses.
   * 
   * @example
   * 100
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * The total hold duration, in seconds.
   * 
   * @example
   * 100
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * The total number of messages sent in chat sessions.
   * 
   * @example
   * 12
   */
  totalMessagesSent?: number;
  /**
   * @remarks
   * The total number of messages sent by the agent in chat sessions.
   * 
   * @example
   * 8
   */
  totalMessagesSentByAgent?: number;
  /**
   * @remarks
   * The total number of messages sent by the customer in chat sessions.
   * 
   * @example
   * 5
   */
  totalMessagesSentByCustomer?: number;
  /**
   * @remarks
   * The total ring duration, in seconds.
   * 
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @remarks
   * The total talk duration, in seconds.
   * 
   * @example
   * 100
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * The total post-processing duration, in seconds.
   * 
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
   * @remarks
   * The average talk duration, in seconds.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The number of connected calls.
   * 
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @remarks
   * The number of dialed calls.
   * 
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @remarks
   * The number of answered calls. This is the number of times the agent answered a call. If a call enters a queue and is answered by multiple agents, it is counted as one.
   * 
   * @example
   * 100
   */
  callsHandled?: number;
  /**
   * @remarks
   * The number of calls assigned to the agent. This includes calls that are blind transferred or consult transferred to the agent.
   * 
   * @example
   * 100
   */
  callsOffered?: number;
  /**
   * @remarks
   * This parameter is deprecated. Use CallsTalked instead.
   * 
   * @example
   * 100
   */
  callsTalk?: number;
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
   * The maximum talk duration, in seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The total talk duration, in seconds.
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
   * @remarks
   * The connection rate. Formula: CallsAnswered / CallsDialed. The result may exceed 100% because the connection event and the answer event may occur in different time ranges.
   * 
   * @example
   * 0.5
   */
  answerRate?: number;
  /**
   * @remarks
   * The average dialing duration, in seconds. Formula: TotalDialingTime / CallsDialed.
   * 
   * @example
   * 100
   */
  averageDialingTime?: number;
  /**
   * @remarks
   * The average hold duration, in seconds. Formula: TotalHoldTime / CallsHold.
   * 
   * @example
   * 100
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * The average ring duration, in seconds.
   * 
   * @example
   * 100
   */
  averageRingTime?: number;
  /**
   * @remarks
   * The average talk duration, in seconds. Formula: TotalTalkTime / CallsAnswered.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average post-processing duration, in seconds. Formula: TotalWorkTime / CallsDialed.
   * 
   * @example
   * 100
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * The number of connected calls.
   * 
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @remarks
   * The number of consulted transfers-in. If a call is transferred to the agent multiple times, each transfer is counted as one.
   * 
   * @example
   * 100
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * The number of consulted transfers-out. If a call is transferred to other agents multiple times, each transfer is counted as one.
   * 
   * @example
   * 100
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * The number of blind transfers-in. If a call is transferred to the agent multiple times, each transfer is counted as one.
   * 
   * @example
   * 100
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * The number of blind transfers-out. If a call is transferred to other agents multiple times, each transfer is counted as one.
   * 
   * @example
   * 100
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * The number of dialed calls.
   * 
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @remarks
   * The number of held calls. This is the number of times a call was put on hold.
   * 
   * @example
   * 100
   */
  callsHold?: number;
  /**
   * @remarks
   * The number of calls that rang for the agent.
   * 
   * @example
   * 100
   */
  callsRinged?: number;
  /**
   * @remarks
   * The maximum dialing duration, in seconds.
   * 
   * @example
   * 100
   */
  maxDialingTime?: number;
  /**
   * @remarks
   * The maximum hold duration, in seconds.
   * 
   * @example
   * 100
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * The maximum ring duration, in seconds.
   * 
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @remarks
   * The maximum talk duration, in seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum post-processing duration, in seconds.
   * 
   * @example
   * 100
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The satisfaction index. This is the average value of the single-digit numbers pressed for satisfaction surveys.
   * 
   * @example
   * 100
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The satisfaction rate. Formula: Number of satisfactory ratings / Number of satisfaction survey responses.
   * 
   * @example
   * 100
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * The number of satisfaction surveys sent.
   * 
   * @example
   * 100
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction survey responses.
   * 
   * @example
   * 100
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * The total dialing duration, in seconds.
   * 
   * @example
   * 100
   */
  totalDialingTime?: number;
  /**
   * @remarks
   * The total hold duration, in seconds.
   * 
   * @example
   * 100
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * The total ring duration, in seconds.
   * 
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @remarks
   * The total talk duration, in seconds.
   * 
   * @example
   * 100
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * The total post-processing duration, in seconds.
   * 
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
  /**
   * @remarks
   * The break code.
   * 
   * @example
   * 开会
   */
  breakCode?: string;
  /**
   * @remarks
   * The number of times.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The duration, in seconds.
   * 
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
   * @remarks
   * The average break duration, in seconds.
   * 
   * @example
   * 100
   */
  averageBreakTime?: number;
  /**
   * @remarks
   * The average hold duration, in seconds. Formula: TotalHoldTime / (Inbound.CallsHold + Outbound.CallsHold).
   * 
   * @example
   * 100
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * The average ready duration, in seconds. Formula: TotalReadyTime / Number of times in Ready state. The number of times in the Ready state is not a statistical field of the API.
   * 
   * @example
   * 100
   */
  averageReadyTime?: number;
  /**
   * @remarks
   * The average talk duration, in seconds. Formula: TotalTalkTime / (CallsAnswered + CallsHandled).
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average post-processing duration, in seconds. Formula: TotalWorkTime / TotalCalls.
   * 
   * @example
   * 100
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * The list of break details.
   */
  breakCodeDetailList?: ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList[];
  /**
   * @remarks
   * This parameter has a value only when Interval is set to Daily. It indicates the first up time of the day.
   * 
   * @example
   * 100
   */
  firstCheckInTime?: number;
  /**
   * @remarks
   * The last check-out time. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1712548421000
   */
  lastCheckOutTime?: number;
  /**
   * @remarks
   * The last check-out time. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 100
   */
  lastCheckoutTime?: number;
  /**
   * @remarks
   * The maximum break duration, in seconds.
   * 
   * @example
   * 100
   */
  maxBreakTime?: number;
  /**
   * @remarks
   * The maximum hold duration, in seconds.
   * 
   * @example
   * 100
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * The maximum ready duration, in seconds.
   * 
   * @example
   * 100
   */
  maxReadyTime?: number;
  /**
   * @remarks
   * The maximum talk duration, in seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum post-processing duration, in seconds.
   * 
   * @example
   * 100
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The agent occupancy rate.
   * 
   * @example
   * 0.4
   */
  occupancyRate?: number;
  /**
   * @remarks
   * The satisfaction index. This is the average value of the single-digit numbers pressed for satisfaction surveys.
   * 
   * @example
   * 1.4
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The satisfaction rate. Formula: Number of satisfactory ratings / Number of satisfaction survey responses.
   * 
   * @example
   * 100
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * The number of satisfaction surveys sent.
   * 
   * @example
   * 100
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction survey responses.
   * 
   * @example
   * 100
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * The total break duration, in seconds.
   * 
   * @example
   * 100
   */
  totalBreakTime?: number;
  /**
   * @remarks
   * The total number of calls. Formula: CallsOffered + CallsDialed.
   * 
   * @example
   * 100
   */
  totalCalls?: number;
  /**
   * @remarks
   * The total hold duration, in seconds.
   * 
   * @example
   * 100
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * The total logon duration, in seconds. *Note: This does not include offline and break durations.*
   * 
   * @example
   * 100
   */
  totalLoggedInTime?: number;
  /**
   * @remarks
   * The total off-site online duration, in seconds.
   * 
   * @example
   * 100
   */
  totalOffSiteLoggedInTime?: string;
  /**
   * @remarks
   * The online duration of the office phone, in seconds.
   * 
   * @example
   * 100
   */
  totalOfficePhoneLoggedInTime?: string;
  /**
   * @remarks
   * The total on-site online duration, in seconds.
   * 
   * @example
   * 100
   */
  totalOnSiteLoggedInTime?: string;
  /**
   * @remarks
   * The total online duration in outbound-only scenarios, in seconds.
   * 
   * @example
   * 100
   */
  totalOutboundScenarioLoggedInTime?: number;
  /**
   * @remarks
   * The total idle duration in outbound-only scenarios, in seconds.
   * 
   * @example
   * 100
   */
  totalOutboundScenarioReadyTime?: number;
  /**
   * @remarks
   * The total duration of outbound-only scenarios, in seconds.
   * 
   * @example
   * 100
   */
  totalOutboundScenarioTime?: number;
  /**
   * @remarks
   * The total ready duration, in seconds.
   * 
   * @example
   * 100
   */
  totalReadyTime?: number;
  /**
   * @remarks
   * The total talk duration, in seconds.
   * 
   * @example
   * 100
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * The total post-processing duration, in seconds.
   * 
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
  /**
   * @remarks
   * Back-to-back call metrics.
   */
  back2Back?: ListIntervalAgentSkillGroupReportResponseBodyDataBack2Back;
  /**
   * @remarks
   * Inbound metrics.
   */
  inbound?: ListIntervalAgentSkillGroupReportResponseBodyDataInbound;
  /**
   * @remarks
   * Internal call metrics.
   */
  internal?: ListIntervalAgentSkillGroupReportResponseBodyDataInternal;
  /**
   * @remarks
   * Outbound metrics.
   */
  outbound?: ListIntervalAgentSkillGroupReportResponseBodyDataOutbound;
  /**
   * @remarks
   * Overall metrics.
   */
  overall?: ListIntervalAgentSkillGroupReportResponseBodyDataOverall;
  /**
   * @remarks
   * The start time of the time range. This is a UNIX timestamp in milliseconds.
   * 
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
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A list of interval-based statistical data for the agent in the skill group.
   */
  data?: ListIntervalAgentSkillGroupReportResponseBodyData[];
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
   * The request ID.
   * 
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

