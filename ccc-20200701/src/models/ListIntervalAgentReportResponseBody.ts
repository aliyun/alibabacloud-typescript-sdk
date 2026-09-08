// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalAgentReportResponseBodyDataBack2Back extends $dara.Model {
  /**
   * @remarks
   * Agent acknowledgement rate.
   * 
   * @example
   * 1
   */
  agentHandleRate?: number;
  /**
   * @remarks
   * Answer rate. Calculation Formula: CallsAnswered / CallsDialed. (Because answer events and acknowledgement events may fall into different time ranges, the result may exceed 100% in certain cases.)
   * 
   * @example
   * 0.5
   */
  answerRate?: number;
  /**
   * @remarks
   * Average customer-side ring duration in seconds.
   * 
   * @example
   * 100
   */
  averageCustomerRingTime?: number;
  /**
   * @remarks
   * Average ring time, in seconds.
   * 
   * @example
   * 100
   */
  averageRingTime?: number;
  /**
   * @remarks
   * Average talk time, in seconds.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Number of calls answered by agents.
   * 
   * @example
   * 12
   */
  callsAgentHandled?: number;
  /**
   * @remarks
   * Number of answered calls.
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
   * 9
   */
  callsCustomerAnswered?: number;
  /**
   * @remarks
   * Number of dial-up calls.
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
   * 0.75
   */
  customerAnswerRate?: number;
  /**
   * @remarks
   * Maximum customer-side ring time, in seconds.
   * 
   * @example
   * 100
   */
  maxCustomerRingTime?: number;
  /**
   * @remarks
   * Maximum ring duration in seconds.
   * 
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @remarks
   * Maximum talk time, in seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Total customer-side ring time, in seconds.
   * 
   * @example
   * 100
   */
  totalCustomerRingTime?: number;
  /**
   * @remarks
   * Total ring time, in seconds.
   * 
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @remarks
   * Total talk time, in seconds.
   * 
   * @example
   * 100
   */
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
      answerRate: 'number',
      averageCustomerRingTime: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      callsAgentHandled: 'number',
      callsAnswered: 'number',
      callsCustomerAnswered: 'number',
      callsDialed: 'number',
      customerAnswerRate: 'number',
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

export class ListIntervalAgentReportResponseBodyDataInboundAccessChannelTypeDetails extends $dara.Model {
  /**
   * @remarks
   * Channel Type.
   * 
   * @example
   * Web
   */
  accessChannelType?: string;
  /**
   * @remarks
   * Number of assigned sessions.
   * 
   * @example
   * 2
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

export class ListIntervalAgentReportResponseBodyDataInbound extends $dara.Model {
  /**
   * @remarks
   * Statistics for each Channel.
   */
  accessChannelTypeDetails?: ListIntervalAgentReportResponseBodyDataInboundAccessChannelTypeDetails[];
  /**
   * @remarks
   * Average first response time for chat sessions, in seconds.
   * 
   * @example
   * 8
   */
  averageFirstResponseTime?: number;
  /**
   * @remarks
   * Average hold time during calls, in seconds. Calculation Formula: TotalHoldTime / CallsHold.
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * Average response time for chat sessions.
   * 
   * @example
   * 10
   */
  averageResponseTime?: number;
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
   * Average talk time, in seconds. Calculation Formula: TotalTalkTime / CallsHandled.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average post-processing time, in seconds. Calculation Formula: TotalWorkTime / CallsHandled.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Number of attended transfer-ins. If a single call is transferred to the agent multiple times, each transfer counts as one.
   * 
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * Number of transfer-out calls. If a single call is transferred to other agents multiple times, each transfer counts as one.
   * 
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * Number of blind transfer-in calls. If a single call is transferred in to this agent multiple times, each transfer counts as one.
   * 
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * Number of blind transfer-out calls. If a single call is transferred out to other agents multiple times, each transfer counts as one.
   * 
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * Acknowledgement count, which is the number of times agents answered calls.
   * 
   * @example
   * 0
   */
  callsHandled?: number;
  /**
   * @remarks
   * Number of calls placed on hold, that is, the count of occurrences where a call was held.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * Assigned count, which refers to the number of calls assigned to this agent, including calls blindly transferred or consultatively transferred from other agents.
   * 
   * @example
   * 0
   */
  callsOffered?: number;
  /**
   * @remarks
   * Number of calls that rang to the agent.
   * 
   * @example
   * 0
   */
  callsRinged?: number;
  /**
   * @remarks
   * Acknowledgement rate. Calculation Formula: CallsHandled / CallsOffered (because acknowledgement events and assign events may fall into different time ranges, the result may exceed 100% in certain cases).
   * 
   * @example
   * 0
   */
  handleRate?: number;
  /**
   * @remarks
   * Maximum call hold duration, in seconds.
   * 
   * @example
   * 0
   */
  maxHoldTime?: number;
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
   * Maximum post-processing duration, in seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Satisfaction Index, which is the average of the satisfaction rating digits (single-digit numbers) entered by users.
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Satisfaction rate. Calculation Formula: Number of evaluations marked as satisfied / Count of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionRate?: number;
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
   * Service level within 15 seconds.
   * 
   * @example
   * 0.6
   */
  serviceLevel15?: number;
  /**
   * @remarks
   * Total hold time during calls, in seconds.
   * 
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * Total number of messages sent in chat sessions.
   * 
   * @example
   * 12
   */
  totalMessagesSent?: number;
  /**
   * @remarks
   * Total number of messages sent by the agent in chat sessions.
   * 
   * @example
   * 10
   */
  totalMessagesSentByAgent?: number;
  /**
   * @remarks
   * Total number of messages sent by the Customer in chat sessions.
   * 
   * @example
   * 2
   */
  totalMessagesSentByCustomer?: number;
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
      accessChannelTypeDetails: { 'type': 'array', 'itemType': ListIntervalAgentReportResponseBodyDataInboundAccessChannelTypeDetails },
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
      totalMessagesSentByCustomer: 'number',
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

export class ListIntervalAgentReportResponseBodyDataInternal extends $dara.Model {
  /**
   * @remarks
   * Average talk time, in seconds.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Number of answered calls.
   * 
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Number of dial-up calls.
   * 
   * @example
   * 100
   */
  callsDialed?: number;
  /**
   * @remarks
   * Number of acknowledgements, which refers to the number of times the agent acknowledged a call.
   * 
   * @example
   * 100
   */
  callsHandled?: number;
  /**
   * @remarks
   * Number of assigned calls, which refers to the count of calls assigned to this agent, including calls blindly transferred or consultatively transferred from other agents.
   * 
   * @example
   * 100
   */
  callsOffered?: number;
  /**
   * @remarks
   * Number of calls participated in.
   * 
   * @example
   * 80
   */
  callsTalked?: number;
  static names(): { [key: string]: string } {
    return {
      averageTalkTime: 'AverageTalkTime',
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsTalked: 'CallsTalked',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalAgentReportResponseBodyDataOutbound extends $dara.Model {
  /**
   * @remarks
   * Answer rate. Calculation Formula: CallsAnswered / CallsDialed. (Because answering events and acknowledgement events may fall into different Time Ranges, the Result may exceed 100% in certain cases.)
   * 
   * @example
   * 0
   */
  answerRate?: number;
  /**
   * @remarks
   * Average dial-up duration, in seconds. Calculation Formula: TotalDialingTime / CallsDialed.
   * 
   * @example
   * 30
   */
  averageDialingTime?: number;
  /**
   * @remarks
   * Average hold duration, in seconds. Calculation formula: TotalHoldTime / CallsHold.
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * Average ring time in seconds. Calculation Formula: TotalRingTime / CallsRinged.
   * 
   * @example
   * 0
   */
  averageRingTime?: number;
  /**
   * @remarks
   * Average talk time, in seconds. Calculation Formula: TotalTalkTime / CallsAnswered.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average post-processing time in seconds. Calculation Formula: TotalWorkTime / CallsDialed.
   * 
   * @example
   * 1
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Answered call count.
   * 
   * @example
   * 0
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Number of attended transfer-in calls. If a single call is transferred to the agent multiple times, each transfer counts as one.
   * 
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * Number of transfer-out calls. If a single call is transferred out to other agents multiple times, each transfer-out counts as one.
   * 
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * Number of blind transfer-in calls. If a single call is transferred to the agent multiple times, each transfer counts as one.
   * 
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * Number of blind transfer-out calls. If a single call is transferred to other agents multiple times, each transfer counts as one.
   * 
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * Dial-up count.
   * 
   * @example
   * 5
   */
  callsDialed?: number;
  /**
   * @remarks
   * Hold count, which is the number of times call hold occurred.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * Number of calls that rang for the agent.
   * 
   * @example
   * 0
   */
  callsRinged?: number;
  /**
   * @remarks
   * Maximum dial-up duration, in seconds.
   * 
   * @example
   * 60
   */
  maxDialingTime?: number;
  /**
   * @remarks
   * Maximum hold time during calls, in seconds.
   * 
   * @example
   * 0
   */
  maxHoldTime?: number;
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
   * Maximum post-processing time in seconds.
   * 
   * @example
   * 2
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Satisfaction index, which is the average value of the satisfaction key digits (single-digit numbers).
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Satisfaction rate. Calculation Formula: Count of evaluations marked as satisfied / Count of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionRate?: number;
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
   * Total dial-up duration, in seconds.
   * 
   * @example
   * 148
   */
  totalDialingTime?: number;
  /**
   * @remarks
   * Total hold duration, in seconds.
   * 
   * @example
   * 0
   */
  totalHoldTime?: number;
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
   * Total post-processing duration, in seconds.
   * 
   * @example
   * 4
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

export class ListIntervalAgentReportResponseBodyDataOverallBreakCodeDetailList extends $dara.Model {
  /**
   * @remarks
   * Break code.
   * 
   * @example
   * 会议
   */
  breakCode?: string;
  /**
   * @remarks
   * Quantity.
   * 
   * @example
   * 10
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

export class ListIntervalAgentReportResponseBodyDataOverall extends $dara.Model {
  /**
   * @remarks
   * Average break duration, in seconds. Calculation Formula: TotalBreakTime / Count of breaks. The count of breaks is not an API statistics field.
   * 
   * @example
   * 0
   */
  averageBreakTime?: number;
  /**
   * @remarks
   * Average call hold duration, in seconds. Calculation Formula: TotalHoldTime / (Inbound CallsHold + Outbound CallsHold).
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * Average ready time, in seconds. Calculation Formula: TotalReadyTime / Count of ready events. The count of ready events is a non-API statistical field.
   * 
   * @example
   * 0
   */
  averageReadyTime?: number;
  /**
   * @remarks
   * Average talk time, in seconds. Calculation Formula: TotalTalkTime / (CallsAnswered + CallsHandled).
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average post-processing duration per call, in seconds. Calculation Formula: TotalWorkTime / TotalCalls.
   * 
   * @example
   * 1
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * List of break details.
   */
  breakCodeDetailList?: ListIntervalAgentReportResponseBodyDataOverallBreakCodeDetailList[];
  /**
   * @remarks
   * This field has a value only when the input parameter Interval is Daily, representing the first publish time of the day.
   * 
   * @example
   * 0
   */
  firstCheckInTime?: number;
  /**
   * @remarks
   * This field has a value only when the input parameter Interval is Daily, representing the last unpublish time of the day.
   * 
   * @example
   * 0
   */
  lastCheckOutTime?: number;
  /**
   * @remarks
   * This value is available only when the input parameter Interval is set to Daily, indicating the last unpublish time on that day.
   * 
   * @example
   * 已弃用，请使用LastCheckOutTime代替此参数。
   */
  lastCheckoutTime?: number;
  /**
   * @remarks
   * Maximum break time, in seconds.
   * 
   * @example
   * 1
   */
  maxBreakTime?: number;
  /**
   * @remarks
   * Maximum call hold time, in seconds.
   * 
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * Maximum ready time, in seconds.
   * 
   * @example
   * 435
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
   * Maximum post-processing duration in seconds.
   * 
   * @example
   * 2
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
   * Satisfaction index, which is the average value of the satisfaction keypress digits (single-digit numbers).
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Satisfaction rate. Calculation Formula: Number of evaluations marked as satisfied / Count of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionRate?: number;
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
   * Total break time, in seconds.
   * 
   * @example
   * 1
   */
  totalBreakTime?: number;
  /**
   * @remarks
   * Total call volume. Calculation Formula: CallsOffered + CallsDialed.
   * 
   * @example
   * 5
   */
  totalCalls?: number;
  /**
   * @remarks
   * Total hold time in seconds.
   * 
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * Total logon duration, in seconds. Note: Exclude offline and break durations.
   * 
   * @example
   * 914
   */
  totalLoggedInTime?: number;
  /**
   * @remarks
   * Total off-site logged-in duration, in seconds.
   * 
   * @example
   * 100
   */
  totalOffSiteLoggedInTime?: number;
  /**
   * @remarks
   * Total off-site online duration, in seconds.
   * 
   * @example
   * 已弃用，请使用TotalOffSiteLoggedInTime代替此参数
   */
  totalOffSiteOnlineTime?: number;
  /**
   * @remarks
   * Total office phone logged-in time, in seconds.
   * 
   * @example
   * 100
   */
  totalOfficePhoneLoggedInTime?: number;
  /**
   * @remarks
   * Total office phone online time, in seconds.
   * 
   * @example
   * 已弃用，请使用TotalOfficePhoneLoggedInTime代替此参数
   */
  totalOfficePhoneOnlineTime?: number;
  /**
   * @remarks
   * Total on-site logged-in duration, in seconds.
   * 
   * @example
   * 100
   */
  totalOnSiteLoggedInTime?: number;
  /**
   * @remarks
   * Total on-site online duration, in seconds.
   * 
   * @example
   * 已弃用，请使用TotalOnSiteLoggedInTime代替此参数
   */
  totalOnSiteOnlineTime?: number;
  /**
   * @remarks
   * Total online time for outbound-only scenarios, in seconds.
   * 
   * @example
   * 100
   */
  totalOutboundScenarioLoggedInTime?: number;
  /**
   * @remarks
   * Total idle time for outbound-only scenarios, in seconds.
   * 
   * @example
   * 100
   */
  totalOutboundScenarioReadyTime?: number;
  /**
   * @remarks
   * Total outbound-only scenario duration, in seconds.
   * 
   * @example
   * 已弃用，请使用TotalOutboundScenarioLoggedInTime代替此参数
   */
  totalOutboundScenarioTime?: number;
  /**
   * @remarks
   * Total ready time, in seconds.
   * 
   * @example
   * 763
   */
  totalReadyTime?: number;
  /**
   * @remarks
   * Total talk duration, in seconds.
   * 
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total post-processing time in seconds.
   * 
   * @example
   * 4
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
      breakCodeDetailList: { 'type': 'array', 'itemType': ListIntervalAgentReportResponseBodyDataOverallBreakCodeDetailList },
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

export class ListIntervalAgentReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Back-to-back call metric.
   */
  back2Back?: ListIntervalAgentReportResponseBodyDataBack2Back;
  /**
   * @remarks
   * Inbound metrics.
   */
  inbound?: ListIntervalAgentReportResponseBodyDataInbound;
  /**
   * @remarks
   * Internal call metrics.
   */
  internal?: ListIntervalAgentReportResponseBodyDataInternal;
  /**
   * @remarks
   * Outbound metrics.
   */
  outbound?: ListIntervalAgentReportResponseBodyDataOutbound;
  /**
   * @remarks
   * Overall metrics.
   */
  overall?: ListIntervalAgentReportResponseBodyDataOverall;
  /**
   * @remarks
   * Start time of the time segment, formatted as a UNIX timestamp in milliseconds.
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
      back2Back: ListIntervalAgentReportResponseBodyDataBack2Back,
      inbound: ListIntervalAgentReportResponseBodyDataInbound,
      internal: ListIntervalAgentReportResponseBodyDataInternal,
      outbound: ListIntervalAgentReportResponseBodyDataOutbound,
      overall: ListIntervalAgentReportResponseBodyDataOverall,
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

export class ListIntervalAgentReportResponseBody extends $dara.Model {
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
   * List of agent segment statistics.
   */
  data?: ListIntervalAgentReportResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListIntervalAgentReportResponseBodyData },
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

