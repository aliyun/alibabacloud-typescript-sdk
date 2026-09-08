// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalSkillGroupReportResponseBodyDataListBack2Back extends $dara.Model {
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
   * Answer rate. Calculation Formula: CallsAnswered / CallsDialed. (Because acknowledgement events and answer events may fall into different time ranges, the result may exceed 100% in certain cases.)
   * 
   * @example
   * 0.6
   */
  answerRate?: number;
  /**
   * @remarks
   * Average customer-side ring time, in seconds.
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
   * Number of answered calls.
   * 
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Number of calls answered by the customer.
   * 
   * @example
   * 8
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
   * 0.8
   */
  customerAnswerRate?: number;
  /**
   * @remarks
   * Maximum Customer-side ring time, in seconds.
   * 
   * @example
   * 100
   */
  maxCustomerRingTime?: number;
  /**
   * @remarks
   * Maximum ring time, in seconds.
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
   * Total Customer-side ring time, in seconds.
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

export class ListHistoricalSkillGroupReportResponseBodyDataListInboundAccessChannelTypeDetails extends $dara.Model {
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
   * Quantity of assigned sessions.
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

export class ListHistoricalSkillGroupReportResponseBodyDataListInbound extends $dara.Model {
  /**
   * @remarks
   * Abandon rate. Calculation Formula: CallsAbandoned / CallsOffered (Because abandonment events and assignment events may fall into different time ranges, the result may exceed 100% in certain cases).
   * 
   * @example
   * 0
   */
  abandonRate?: number;
  /**
   * @remarks
   * Statistics for each channel.
   */
  accessChannelTypeDetails?: ListHistoricalSkillGroupReportResponseBodyDataListInboundAccessChannelTypeDetails[];
  /**
   * @remarks
   * Average abandonment duration, in seconds. Calculation Formula: TotalAbandonTime / CallsAbandoned.
   * 
   * @example
   * 0
   */
  averageAbandonTime?: number;
  /**
   * @remarks
   * Average queue abandonment duration, in seconds. Calculation Formula: TotalAbandonedInQueueTime / CallsAbandonedInQueue.
   * 
   * @example
   * 0
   */
  averageAbandonedInQueueTime?: number;
  /**
   * @remarks
   * Average ringing abandonment duration, in seconds. Calculation Formula: TotalAbandonedInRingTime / CallsAbandonedInRing.
   * 
   * @example
   * 0
   */
  averageAbandonedInRingTime?: number;
  /**
   * @remarks
   * Average first response time for chat sessions, in seconds.
   * 
   * @example
   * 6
   */
  averageFirstResponseTime?: number;
  /**
   * @remarks
   * Average call hold duration, in seconds. Calculation Formula: TotalHoldTime / CallsHold.
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
   * 8
   */
  averageResponseTime?: number;
  /**
   * @remarks
   * Average ring time, in seconds. Calculation Formula: TotalRingTime / CallsRinged.
   * 
   * @example
   * 5
   */
  averageRingTime?: number;
  /**
   * @remarks
   * Average talk time, in seconds. Calculation Formula: TotalTalkTime / CallsHandled.
   * 
   * @example
   * 64
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average wait time, which is the average duration a caller waits before an agent answers the call. Calculation Formula: TotalWaitTime / CallsHandled.
   * 
   * @example
   * 5
   */
  averageWaitTime?: number;
  /**
   * @remarks
   * Average post-processing duration, in seconds. Calculation Formula: TotalWorkTime / CallsHandled.
   * 
   * @example
   * 13
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Quantity of abandoned calls. Calculation Formula: CallsAbandonedInQueue + CallsAbandonedInRing.
   * 
   * @example
   * 0
   */
  callsAbandoned?: number;
  /**
   * @remarks
   * Number of calls abandoned in queue, which refers to the number of calls where the customer hung up after entering the queue but before being answered.
   * 
   * @example
   * 0
   */
  callsAbandonedInQueue?: number;
  /**
   * @remarks
   * Ring abandonment count, which is the number of calls where the customer hung up while the agent\\"s phone was ringing.
   * 
   * @example
   * 0
   */
  callsAbandonedInRing?: number;
  /**
   * @remarks
   * Transfer-in volume, which refers to the number of calls transferred to this skill group from other skill groups. Transfers between agents within the same skill group are not counted. If an agent is signed into multiple skill groups simultaneously, the call is attributed to the first skill group the agent signed into. If a single call is transferred multiple times from other skill groups to this skill group, each transfer is counted separately. The same rule applies below.
   * 
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * Quantity of attended transfer-out calls, which refers to the number of calls transferred from this skill group to another skill group via consultation. Transfers between agents within the same skill group are not counted.
   * 
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * Number of blind transfer-in calls, which refers to the number of calls directly transferred to this skill group from other skill groups. Transfers between agents within the same skill group are not counted. If an agent is signed into multiple skill groups simultaneously, the call is attributed to the first skill group the agent signed into. If a single call is transferred multiple times from other skill groups to this skill group, each transfer is counted separately. The same rule applies below.
   * 
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * Number of blind transfer-out calls, which refers to the number of calls directly transferred from this skill group to another skill group. Transfers between agents within the same skill group are not counted.
   * 
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * Acknowledgement count, which is the number of times agents answered calls. For a single call that enters a queue multiple times, if it is answered by multiple agents after one queue entry, it is counted as one.
   * 
   * @example
   * 7
   */
  callsHandled?: number;
  /**
   * @remarks
   * Hold count, which is the number of times calls were placed on hold. Each time a call enters the queue and experiences multiple holds, it counts as one.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * Assigned call volume, which is the number of calls assigned to this skill group, including calls assigned through queues and calls assigned via transfers (consultation transfers and direct transfers). Calculation Formula: CallsQueued + CallsBlindTransferIn + CallsAttendedTransferIn.
   * 
   * @example
   * 7
   */
  callsOffered?: number;
  /**
   * @remarks
   * Overflow count, which is the number of calls that experienced queue (skill group) overflow. If a single call enters the same queue multiple times, each overflow is counted separately.
   * 
   * @example
   * 0
   */
  callsOverflow?: number;
  /**
   * @remarks
   * Number of inbound calls entering a queue (skill group). If a single call enters the same queue multiple times, each entry is counted separately.
   * 
   * @example
   * 7
   */
  callsQueued?: number;
  /**
   * @remarks
   * Queue Failure Quantity, which is the number of calls where the customer hung up after entering the queue but before being answered.
   * 
   * @example
   * 0
   */
  callsQueuingFailed?: number;
  /**
   * @remarks
   * Quantity of calls that overflowed from the queue. Queue overflow refers to calls that overflow while queuing in IVR.
   * 
   * @example
   * 0
   */
  callsQueuingOverflow?: number;
  /**
   * @remarks
   * Number of calls that timed out during the queuing phase.
   * 
   * @example
   * 0
   */
  callsQueuingTimeout?: number;
  /**
   * @remarks
   * Number of calls that rang to agents. Each time a call enters the queue and is assigned to multiple agents, resulting in ringing, it counts as one.
   * 
   * @example
   * 7
   */
  callsRinged?: number;
  /**
   * @remarks
   * Timeout count, which is the number of calls that experienced queue (skill group) timeout. If a single call enters the same queue multiple times, each timeout is counted separately.
   * 
   * @example
   * 0
   */
  callsTimeout?: number;
  /**
   * @remarks
   * Acknowledgement rate. Calculation Formula: CallsHandled / CallsOffered (because acknowledgement events and assign events may fall into different time ranges, the result may exceed 100% in certain cases).
   * 
   * @example
   * 1
   */
  handleRate?: number;
  /**
   * @remarks
   * Maximum abandonment duration, in seconds.
   * 
   * @example
   * 0
   */
  maxAbandonTime?: number;
  /**
   * @remarks
   * Maximum queue abandonment duration, in seconds.
   * 
   * @example
   * 0
   */
  maxAbandonedInQueueTime?: number;
  /**
   * @remarks
   * Maximum ring abandonment duration, in seconds.
   * 
   * @example
   * 0
   */
  maxAbandonedInRingTime?: number;
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
   * Maximum ring duration, in seconds.
   * 
   * @example
   * 12
   */
  maxRingTime?: number;
  /**
   * @remarks
   * Maximum talk duration, in seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Maximum wait time, in seconds.
   * 
   * @example
   * 13
   */
  maxWaitTime?: number;
  /**
   * @remarks
   * Maximum post-processing duration, in seconds.
   * 
   * @example
   * 12
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Satisfaction index, which is the average of the satisfaction keypress digits (single-digit numbers).
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
   * Service level within 15 seconds.
   * 
   * @example
   * 0.7
   */
  serviceLevel15?: number;
  /**
   * @remarks
   * Service level within 20 seconds: number of calls with wait time less than or equal to 20 seconds divided by CallsQueued.
   * 
   * @example
   * 0
   */
  serviceLevel20?: number;
  /**
   * @remarks
   * Service level within 30 seconds.
   * 
   * @example
   * 0.9
   */
  serviceLevel30?: number;
  /**
   * @remarks
   * Total abandonment duration, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonTime?: number;
  /**
   * @remarks
   * Total queue abandonment duration, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonedInQueueTime?: number;
  /**
   * @remarks
   * Total ring abandonment duration, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonedInRingTime?: number;
  /**
   * @remarks
   * Total call hold duration, in seconds.
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
   * Total number of messages sent by agents in chat sessions.
   * 
   * @example
   * 9
   */
  totalMessagesSentByAgent?: number;
  /**
   * @remarks
   * Total number of messages sent by the customer in chat sessions.
   * 
   * @example
   * 3
   */
  totalMessagesSentByCustomer?: number;
  /**
   * @remarks
   * Total ringing duration, in seconds.
   * 
   * @example
   * 32
   */
  totalRingTime?: number;
  /**
   * @remarks
   * Total talk time, in seconds.
   * 
   * @example
   * 447
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total waiting duration, in seconds.
   * 
   * @example
   * 34
   */
  totalWaitTime?: number;
  /**
   * @remarks
   * Total post-processing time, in seconds.
   * 
   * @example
   * 85
   */
  totalWorkTime?: number;
  static names(): { [key: string]: string } {
    return {
      abandonRate: 'AbandonRate',
      accessChannelTypeDetails: 'AccessChannelTypeDetails',
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
      callsQueuingFailed: 'CallsQueuingFailed',
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
      serviceLevel15: 'ServiceLevel15',
      serviceLevel20: 'ServiceLevel20',
      serviceLevel30: 'ServiceLevel30',
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
      accessChannelTypeDetails: { 'type': 'array', 'itemType': ListHistoricalSkillGroupReportResponseBodyDataListInboundAccessChannelTypeDetails },
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
      callsQueuingFailed: 'number',
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
      serviceLevel15: 'number',
      serviceLevel20: 'number',
      serviceLevel30: 'number',
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
    if(Array.isArray(this.accessChannelTypeDetails)) {
      $dara.Model.validateArray(this.accessChannelTypeDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHistoricalSkillGroupReportResponseBodyDataListOutbound extends $dara.Model {
  /**
   * @remarks
   * Answer rate. Calculation Formula: CallsAnswered / CallsDialed. (Because the call answering event and the acknowledgement event may fall into different time ranges, the result may exceed 100% in certain cases.)
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
   * 37
   */
  averageDialingTime?: number;
  /**
   * @remarks
   * Average call hold duration, in seconds. Calculation Formula: TotalHoldTime / CallsHold.
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
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
   * Average talk time, in seconds. Calculation Formula: TotalTalkTime / CallsAnswered.
   * 
   * @example
   * 3
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average post-processing duration per call, in seconds. Calculation Formula: TotalWorkTime / CallsDialed
   * 
   * @example
   * 2
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Number of answered calls.
   * 
   * @example
   * 1
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Transfer-in volume for consultation, which refers to the number of calls transferred to this skill group from other skill groups for consultation. Transfers between agents within the same skill group are not counted. If an agent joins multiple skill groups simultaneously, the call is attributed to the first skill group the agent signed into. If a single call is transferred multiple times from other skill groups to this skill group, each transfer is counted separately. The same rule applies below.
   * 
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * Quantity of attended transfer-out calls, which refers to the number of calls transferred from this skill group to another skill group for consultation. Transfers between agents within the same skill group are not counted.
   * 
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * Quantity of direct transfer-in calls, which refers to the number of calls directly transferred to this skill group from other skill groups. Transfers between agents within the same skill group are not counted. If an agent is signed into multiple skill groups simultaneously, the call is attributed to the first skill group the agent signed into. If a single call is transferred multiple times from other skill groups to this skill group, each transfer is counted separately. The same rule applies below.
   * 
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * Quantity of direct transfer-out calls, which refers to the number of calls directly transferred from this skill group to other skill groups. Transfers between agents within the same skill group are not counted.
   * 
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * Number of dialed calls.
   * 
   * @example
   * 6
   */
  callsDialed?: number;
  /**
   * @remarks
   * Number of calls placed on hold. If a call is placed on hold multiple times before being transfer-out from the current skill group, it counts as one occurrence.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * Number of calls that rang to agents. Each time a call enters the queue and is assigned to multiple agents, resulting in ringing, it counts as one occurrence.
   * 
   * @example
   * 0
   */
  callsRinged?: number;
  /**
   * @remarks
   * Maximum dialing time, in seconds.
   * 
   * @example
   * 12
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
   * Maximum ring duration, in seconds.
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
   * Maximum post-processing duration per call, in seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Satisfaction index, which is the average value of the single-digit satisfaction key presses.
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Satisfaction rate. Calculation Formula: Quantity of evaluations marked as satisfied divided by the Count of satisfaction survey responses.
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
   * Total dial-up duration, in seconds.
   * 
   * @example
   * 218
   */
  totalDialingTime?: number;
  /**
   * @remarks
   * Total call hold duration, in seconds.
   * 
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * Total ring duration, in seconds.
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
   * 3
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total post-processing duration, in seconds.
   * 
   * @example
   * 9
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

export class ListHistoricalSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList extends $dara.Model {
  /**
   * @remarks
   * Break type code.
   * 
   * @example
   * 会议
   */
  breakCode?: string;
  /**
   * @remarks
   * Number of occurrences of this break type.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * Total duration of this break type, in seconds.
   * 
   * @example
   * 3600
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

export class ListHistoricalSkillGroupReportResponseBodyDataListOverall extends $dara.Model {
  /**
   * @remarks
   * Average break duration, in seconds. Calculation Formula: TotalBreakTime / Break Count. Break Count is a non-API statistical field.
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
   * Average ready time, in seconds. Calculation Formula: TotalReadyTime / Count of ready events. The count of ready events is not an API statistics field.
   * 
   * @example
   * 0
   */
  averageReadyTime?: number;
  /**
   * @remarks
   * Average talk time, in seconds. Calculation formula: TotalTalkTime / (CallsAnswered + CallsHandled).
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average post-processing time, in seconds. Calculation Formula: TotalWorkTime / TotalCalls.
   * 
   * @example
   * 8
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * List of break details.
   */
  breakCodeDetailList?: ListHistoricalSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList[];
  /**
   * @remarks
   * Maximum break duration, in seconds.
   * 
   * @example
   * 1
   */
  maxBreakTime?: number;
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
   * Maximum ready time, in seconds.
   * 
   * @example
   * 19328
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
   * Maximum post-processing duration, in seconds.
   * 
   * @example
   * 12
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Agent occupancy rate. Calculation formula: (TotalWorkTime + TotalTalkTime) / TotalLoggedInTime.
   * 
   * @example
   * 0.02332222293912065
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
   * Satisfaction rate. Calculation Formula: Number of responses marked as satisfied / Count of satisfaction survey responses.
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
   * Total break time, in seconds.
   * 
   * @example
   * 3
   */
  totalBreakTime?: number;
  /**
   * @remarks
   * Total call volume. Calculation Formula: CallsOffered + CallsDialed.
   * 
   * @example
   * 13
   */
  totalCalls?: number;
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
   * Total logon time, in seconds.  
   * _Note: Excludes offline and short break durations._
   * 
   * @example
   * 23218
   */
  totalLoggedInTime?: number;
  /**
   * @remarks
   * Total ready time, in seconds.
   * 
   * @example
   * 22428
   */
  totalReadyTime?: number;
  /**
   * @remarks
   * Total talk time, in seconds.
   * 
   * @example
   * 449
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total post-processing duration, in seconds.
   * 
   * @example
   * 94
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
      breakCodeDetailList: { 'type': 'array', 'itemType': ListHistoricalSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList },
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

export class ListHistoricalSkillGroupReportResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Back-to-back metric.
   */
  back2Back?: ListHistoricalSkillGroupReportResponseBodyDataListBack2Back;
  /**
   * @remarks
   * Inbound metrics.
   */
  inbound?: ListHistoricalSkillGroupReportResponseBodyDataListInbound;
  /**
   * @remarks
   * Outbound metrics.
   */
  outbound?: ListHistoricalSkillGroupReportResponseBodyDataListOutbound;
  /**
   * @remarks
   * Overall metrics.
   */
  overall?: ListHistoricalSkillGroupReportResponseBodyDataListOverall;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Skill group name.
   * 
   * @example
   * skillgroup
   */
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      back2Back: 'Back2Back',
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      back2Back: ListHistoricalSkillGroupReportResponseBodyDataListBack2Back,
      inbound: ListHistoricalSkillGroupReportResponseBodyDataListInbound,
      outbound: ListHistoricalSkillGroupReportResponseBodyDataListOutbound,
      overall: ListHistoricalSkillGroupReportResponseBodyDataListOverall,
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

export class ListHistoricalSkillGroupReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of historical data for skill groups.
   */
  list?: ListHistoricalSkillGroupReportResponseBodyDataList[];
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
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 4
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
      list: { 'type': 'array', 'itemType': ListHistoricalSkillGroupReportResponseBodyDataList },
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

export class ListHistoricalSkillGroupReportResponseBody extends $dara.Model {
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
   * Data.
   */
  data?: ListHistoricalSkillGroupReportResponseBodyData;
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
   * 26A34338-5CD9-4C95-A7A6-5BDCE76C6B94
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
      data: ListHistoricalSkillGroupReportResponseBodyData,
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

