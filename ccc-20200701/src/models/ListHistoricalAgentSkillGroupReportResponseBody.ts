// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalAgentSkillGroupReportResponseBodyDataListBack2Back extends $dara.Model {
  /**
   * @remarks
   * Agent-side answer rate.
   * 
   * @example
   * 已弃用，请使用AgentHandleRate代替此参数
   */
  agentAnswerRate?: number;
  /**
   * @remarks
   * Agent handle rate.
   * 
   * @example
   * 0.5
   */
  agentHandleRate?: number;
  /**
   * @remarks
   * Answer rate. Formula: CallsAnswered/CallsDialed (Because answer events and offered events might fall into different time ranges, the result might sometimes exceed 100%).
   * 
   * @example
   * 0.6
   */
  answerRate?: number;
  /**
   * @remarks
   * Average customer-side ring time in seconds.
   * 
   * @example
   * 100
   */
  averageCustomerRingTime?: number;
  /**
   * @remarks
   * Average ring time in seconds.
   * 
   * @example
   * 100
   */
  averageRingTime?: number;
  /**
   * @remarks
   * Average talk time in seconds.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Number of calls handled by agents.
   * 
   * @example
   * 100
   */
  callsAgentHandled?: number;
  /**
   * @remarks
   * Number of calls answered.
   * 
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Number of calls answered by customers.
   * 
   * @example
   * 100
   */
  callsCustomerAnswered?: number;
  /**
   * @remarks
   * Number of customer-side pickups.
   * 
   * @example
   * 已弃用，请使用CallsCustomerAnswered代替此参数
   */
  callsCustomerHandled?: number;
  /**
   * @remarks
   * Number of calls dialed.
   * 
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @remarks
   * Customer answer rate.
   * 
   * @example
   * 0.5
   */
  customerAnswerRate?: number;
  /**
   * @remarks
   * Customer-side handle rate.
   * 
   * @example
   * 已弃用，请使用CustomerAnswerRate代替此参数
   */
  customerHandleRate?: number;
  /**
   * @remarks
   * Maximum customer-side ring time in seconds.
   * 
   * @example
   * 100
   */
  maxCustomerRingTime?: number;
  /**
   * @remarks
   * Maximum ring time in seconds.
   * 
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @remarks
   * Maximum talk time in seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Total customer-side ring time in seconds.
   * 
   * @example
   * 100
   */
  totalCustomerRingTime?: number;
  /**
   * @remarks
   * Total ring time in seconds.
   * 
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @remarks
   * Total talk time in seconds.
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

export class ListHistoricalAgentSkillGroupReportResponseBodyDataListInbound extends $dara.Model {
  /**
   * @remarks
   * Average first response time in chat sessions, in seconds.
   * 
   * @example
   * 8
   */
  averageFirstResponseTime?: number;
  /**
   * @remarks
   * Average call hold time in seconds. Formula: TotalHoldTime/CallsHold.
   * 
   * @example
   * 100
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * Average response time in chat sessions.
   * 
   * @example
   * 9
   */
  averageResponseTime?: number;
  /**
   * @remarks
   * Average ring time in seconds. Formula: TotalRingTime/CallsRinged.
   * 
   * @example
   * 100
   */
  averageRingTime?: number;
  /**
   * @remarks
   * Average talk time in seconds. Formula: TotalTalkTime/CallsHandled.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average after-call work time in seconds. Formula: TotalWorkTime/CallsHandled.
   * 
   * @example
   * 100
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Number of attended transfers in. If a call is transferred multiple times to this agent, each transfer counts as one.
   * 
   * @example
   * 100
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * Number of attended transfers out. If a call is transferred multiple times to other agents, each transfer counts as one.
   * 
   * @example
   * 100
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * Number of blind transfers in. If a call is transferred multiple times to this agent, each transfer counts as one.
   * 
   * @example
   * 100
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * Number of blind transfers out. If a call is transferred multiple times to other agents, each transfer counts as one.
   * 
   * @example
   * 100
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * Number of calls handled, which is the number of times an agent answered a call.
   * 
   * @example
   * 100
   */
  callsHandled?: number;
  /**
   * @remarks
   * Number of calls on hold, which is the number of times a call was put on hold.
   * 
   * @example
   * 100
   */
  callsHold?: number;
  /**
   * @remarks
   * Number of calls offered, which is the number of times calls were assigned to this agent, including blind transfers and attended transfers from other agents.
   * 
   * @example
   * 100
   */
  callsOffered?: number;
  /**
   * @remarks
   * Number of calls that rang for the agent.
   * 
   * @example
   * 100
   */
  callsRinged?: number;
  /**
   * @remarks
   * Handle rate. Formula: CallsHandled/CallsOffered (Because answer events and offered events might fall into different time ranges, the result might sometimes exceed 100%).
   * 
   * @example
   * 100
   */
  handleRate?: number;
  /**
   * @remarks
   * Maximum call hold time in seconds.
   * 
   * @example
   * 100
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * Maximum ring time in seconds.
   * 
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @remarks
   * Maximum talk time in seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Maximum after-call work time in seconds.
   * 
   * @example
   * 100
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Satisfaction index, which is the average value of the single-digit satisfaction key presses.
   * 
   * @example
   * 100
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Satisfaction rate. Formula: Number of satisfied ratings/Number of satisfaction survey responses.
   * 
   * @example
   * 0.5
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * Number of satisfaction surveys offered.
   * 
   * @example
   * 100
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * Number of satisfaction survey responses.
   * 
   * @example
   * 100
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * Total call hold time in seconds.
   * 
   * @example
   * 100
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * Total messages sent in chat sessions.
   * 
   * @example
   * 12
   */
  totalMessagesSent?: number;
  /**
   * @remarks
   * Total messages sent by agents in chat sessions.
   * 
   * @example
   * 6
   */
  totalMessagesSentByAgent?: number;
  /**
   * @remarks
   * Total messages sent by customers in chat sessions.
   * 
   * @example
   * 6
   */
  totalMessagesSentByCustomer?: number;
  /**
   * @remarks
   * Total ring time in seconds.
   * 
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @remarks
   * Total talk time in seconds.
   * 
   * @example
   * 100
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total after-call work time in seconds.
   * 
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

export class ListHistoricalAgentSkillGroupReportResponseBodyDataListInternal extends $dara.Model {
  /**
   * @remarks
   * Average talk time in seconds.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Number of calls answered.
   * 
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Number of calls dialed.
   * 
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @remarks
   * Number of calls handled.
   * 
   * @example
   * 100
   */
  callsHandled?: number;
  /**
   * @remarks
   * Number of calls offered.
   * 
   * @example
   * 100
   */
  callsOffered?: number;
  /**
   * @remarks
   * Number of calls the agent participated in.
   * 
   * @example
   * 100
   */
  callsTalk?: number;
  /**
   * @remarks
   * Number of calls participated in.
   * 
   * @example
   * 5
   */
  callsTalked?: number;
  /**
   * @remarks
   * Maximum talk time in seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Total talk time in seconds.
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

export class ListHistoricalAgentSkillGroupReportResponseBodyDataListOutbound extends $dara.Model {
  /**
   * @remarks
   * Answer rate. Formula: CallsAnswered/CallsDialed (Because answer events and offered events might fall into different time ranges, the result might sometimes exceed 100%).
   * 
   * @example
   * 0.5
   */
  answerRate?: number;
  /**
   * @remarks
   * Average dialing time in seconds. Formula: TotalDialingTime/CallsDialed.
   * 
   * @example
   * 100
   */
  averageDialingTime?: number;
  /**
   * @remarks
   * Average call hold time in seconds. Formula: TotalHoldTime/CallsHold.
   * 
   * @example
   * 100
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * Average ring time in seconds.
   * 
   * @example
   * 100
   */
  averageRingTime?: number;
  /**
   * @remarks
   * Average talk time in seconds. Formula: TotalTalkTime/CallsAnswered.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average after-call work time in seconds. Formula: TotalWorkTime/CallsDialed.
   * 
   * @example
   * 100
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Number of calls answered.
   * 
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Number of attended transfers in. If a call is transferred multiple times to this agent, each transfer counts as one.
   * 
   * @example
   * 100
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * Number of attended transfers out. If a call is transferred multiple times to other agents, each transfer counts as one.
   * 
   * @example
   * 100
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * Number of blind transfers in. If a call is transferred multiple times to this agent, each transfer counts as one.
   * 
   * @example
   * 100
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * Number of blind transfers out. If a call is transferred multiple times to other agents, each transfer counts as one.
   * 
   * @example
   * 100
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * Number of calls dialed.
   * 
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @remarks
   * Number of calls on hold, which is the number of times a call was put on hold.
   * 
   * @example
   * 100
   */
  callsHold?: number;
  /**
   * @remarks
   * Number of calls that rang for the agent.
   * 
   * @example
   * 100
   */
  callsRinged?: number;
  /**
   * @remarks
   * Maximum dialing time in seconds.
   * 
   * @example
   * 100
   */
  maxDialingTime?: number;
  /**
   * @remarks
   * Maximum call hold time in seconds.
   * 
   * @example
   * 100
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * Maximum ring time in seconds.
   * 
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @remarks
   * Maximum talk time in seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Maximum after-call work time in seconds.
   * 
   * @example
   * 100
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Satisfaction index, which is the average value of the single-digit satisfaction key presses.
   * 
   * @example
   * 1.4
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Satisfaction rate. Formula: Number of satisfied ratings/Number of satisfaction survey responses.
   * 
   * @example
   * 0.5
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * Number of satisfaction surveys offered.
   * 
   * @example
   * 100
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * Number of satisfaction survey responses.
   * 
   * @example
   * 100
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * Total dialing time in seconds.
   * 
   * @example
   * 100
   */
  totalDialingTime?: number;
  /**
   * @remarks
   * Total call hold time in seconds.
   * 
   * @example
   * 100
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * Total ring time in seconds.
   * 
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @remarks
   * Total talk time in seconds.
   * 
   * @example
   * 100
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total after-call work time in seconds.
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

export class ListHistoricalAgentSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList extends $dara.Model {
  /**
   * @remarks
   * Break code.
   * 
   * @example
   * 开会
   */
  breakCode?: string;
  /**
   * @remarks
   * Count.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Duration in seconds.
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

export class ListHistoricalAgentSkillGroupReportResponseBodyDataListOverall extends $dara.Model {
  /**
   * @remarks
   * Average break time in seconds.
   * 
   * @example
   * 100
   */
  averageBreakTime?: number;
  /**
   * @remarks
   * Average call hold time in seconds. Formula: TotalHoldTime/(Inbound CallsHold + Outbound CallsHold).
   * 
   * @example
   * 100
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * Average ready time in seconds. Formula: TotalReadyTime/Number of ready events. The number of ready events is not an API statistical field.
   * 
   * @example
   * 100
   */
  averageReadyTime?: number;
  /**
   * @remarks
   * Average talk time in seconds. Formula: TotalTalkTime/(CallsAnswered+CallsHandled).
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average after-call work time in seconds. Formula: TotalWorkTime/TotalCalls.
   * 
   * @example
   * 100
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * List of break code details.
   */
  breakCodeDetailList?: ListHistoricalAgentSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList[];
  /**
   * @remarks
   * Earliest check-in time. Format is UNIX timestamp in milliseconds.
   * 
   * @example
   * 1686030515000
   */
  firstCheckInTime?: number;
  /**
   * @remarks
   * Latest check-out time. Format is UNIX timestamp in milliseconds.
   * 
   * @example
   * 1686030515000
   */
  lastCheckOutTime?: number;
  /**
   * @remarks
   * Maximum break time in seconds.
   * 
   * @example
   * 100
   */
  maxBreakTime?: number;
  /**
   * @remarks
   * Maximum call hold time in seconds.
   * 
   * @example
   * 100
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * Maximum ready time in seconds.
   * 
   * @example
   * 100
   */
  maxReadyTime?: number;
  /**
   * @remarks
   * Maximum talk time in seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Maximum after-call work time in seconds.
   * 
   * @example
   * 100
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Agent occupancy rate.
   * 
   * @example
   * 0.5
   */
  occupancyRate?: number;
  /**
   * @remarks
   * Satisfaction index, which is the average value of the single-digit satisfaction key presses.
   * 
   * @example
   * 1.4
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Satisfaction rate. Formula: Number of satisfied ratings/Number of satisfaction survey responses.
   * 
   * @example
   * 0.5
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * Number of satisfaction surveys offered.
   * 
   * @example
   * 100
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * Number of satisfaction survey responses.
   * 
   * @example
   * 100
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * Total break time in seconds.
   * 
   * @example
   * 100
   */
  totalBreakTime?: number;
  /**
   * @remarks
   * Total number of calls. Formula: CallsOffered + CallsDialed.
   * 
   * @example
   * 100
   */
  totalCalls?: number;
  /**
   * @remarks
   * Total hold time in seconds.
   * 
   * @example
   * 100
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * Total logged-in time in seconds.
   * *Note: This does not include offline or break time.*
   * 
   * @example
   * 100
   */
  totalLoggedInTime?: number;
  /**
   * @remarks
   * Total off-site logged-in time in seconds.
   * 
   * @example
   * 120
   */
  totalOffSiteLggedInTime?: number;
  /**
   * @remarks
   * Total office phone logged-in time in seconds.
   * 
   * @example
   * 120
   */
  totalOfficePhoneLoggedInTime?: number;
  /**
   * @remarks
   * Total on-site logged-in time in seconds.
   * 
   * @example
   * 120
   */
  totalOnSiteLoggedInTime?: string;
  /**
   * @remarks
   * Total outbound-only logged-in time in seconds.
   * 
   * @example
   * 120
   */
  totalOutboundScenarioLoggedInTime?: number;
  /**
   * @remarks
   * Total outbound-only idle time in seconds.
   * 
   * @example
   * 100
   */
  totalOutboundScenarioReadyTime?: number;
  /**
   * @remarks
   * Total outbound-only online time in seconds.
   * 
   * @example
   * 100
   */
  totalOutboundScenarioTime?: number;
  /**
   * @remarks
   * Total ready time in seconds.
   * 
   * @example
   * 100
   */
  totalReadyTime?: number;
  /**
   * @remarks
   * Total talk time in seconds.
   * 
   * @example
   * 100
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total after-call work time in seconds.
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
      totalOffSiteLggedInTime: 'TotalOffSiteLggedInTime',
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
      breakCodeDetailList: { 'type': 'array', 'itemType': ListHistoricalAgentSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList },
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
      totalOffSiteLggedInTime: 'number',
      totalOfficePhoneLoggedInTime: 'number',
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

export class ListHistoricalAgentSkillGroupReportResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent1@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * Agent name.
   * 
   * @example
   * 云呼测试坐席
   */
  agentName?: string;
  /**
   * @remarks
   * Back-to-back call metrics.
   */
  back2Back?: ListHistoricalAgentSkillGroupReportResponseBodyDataListBack2Back;
  /**
   * @remarks
   * Agent\\"s employee ID.
   * 
   * @example
   * 1001
   */
  displayId?: string;
  /**
   * @remarks
   * Inbound metrics.
   */
  inbound?: ListHistoricalAgentSkillGroupReportResponseBodyDataListInbound;
  /**
   * @remarks
   * Internal call metrics.
   */
  internal?: ListHistoricalAgentSkillGroupReportResponseBodyDataListInternal;
  /**
   * @remarks
   * Outbound metrics.
   */
  outbound?: ListHistoricalAgentSkillGroupReportResponseBodyDataListOutbound;
  /**
   * @remarks
   * Overall metrics.
   */
  overall?: ListHistoricalAgentSkillGroupReportResponseBodyDataListOverall;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * skillgroup1@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Skill group name.
   * 
   * @example
   * Default
   */
  skillGroupName?: string;
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
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      back2Back: ListHistoricalAgentSkillGroupReportResponseBodyDataListBack2Back,
      displayId: 'string',
      inbound: ListHistoricalAgentSkillGroupReportResponseBodyDataListInbound,
      internal: ListHistoricalAgentSkillGroupReportResponseBodyDataListInternal,
      outbound: ListHistoricalAgentSkillGroupReportResponseBodyDataListOutbound,
      overall: ListHistoricalAgentSkillGroupReportResponseBodyDataListOverall,
      skillGroupId: 'string',
      skillGroupName: 'string',
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

export class ListHistoricalAgentSkillGroupReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of historical agent skill group data.
   */
  list?: ListHistoricalAgentSkillGroupReportResponseBodyDataList[];
  /**
   * @remarks
   * Page number. Valid values are 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size. Valid values are 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count. Data is available only when PageNumber is 1. Otherwise, the value is 0.
   * 
   * @example
   * 11
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
      list: { 'type': 'array', 'itemType': ListHistoricalAgentSkillGroupReportResponseBodyDataList },
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

export class ListHistoricalAgentSkillGroupReportResponseBody extends $dara.Model {
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
   * List of historical agent skill group data.
   */
  data?: ListHistoricalAgentSkillGroupReportResponseBodyData;
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
   * Request ID.
   * 
   * @example
   * BA03159C-E808-4FF1-B27E-A61B6E888D7F
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
      data: ListHistoricalAgentSkillGroupReportResponseBodyData,
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

