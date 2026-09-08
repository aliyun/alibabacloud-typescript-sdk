// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalSkillGroupReportResponseBodyDataBack2Back extends $dara.Model {
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
   * Answer rate. Calculation Formula: CallsAnswered / CallsDialed. (Because management events for answering and acknowledgement may fall into different Time Ranges, the Result may exceed 100% in certain cases.)
   * 
   * @example
   * 0.5
   */
  answerRate?: string;
  /**
   * @remarks
   * Average ring time on the Customer side, in seconds.
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
  averageTalkTime?: string;
  /**
   * @remarks
   * Quantity of calls handled by agents.
   * 
   * @example
   * 5
   */
  callsAgentHandled?: number;
  /**
   * @remarks
   * Call connection volume.
   * 
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Quantity of calls answered by the Customer.
   * 
   * @example
   * 12
   */
  callsCustomerAnswered?: number;
  /**
   * @remarks
   * Dial-up volume.
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
   * 0.6
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
  maxTalkTime?: string;
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
   * @remarks
   * Abandon rate. Calculation Formula: CallsAbandoned / CallsOffered (because management events related to abandonment and assignment may fall into different time ranges, the result may exceed 100% in certain cases).
   * 
   * @example
   * 0
   */
  abandonRate?: number;
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
   * Average abandoned-in-queue duration, in seconds. Calculation Formula: TotalAbandonedInQueueTime / CallsAbandonedInQueue.
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
   * 18
   */
  averageResponseTime?: number;
  /**
   * @remarks
   * Average ring time, in seconds. Calculation Formula: TotalRingTime / CallsRinged.
   * 
   * @example
   * 11
   */
  averageRingTime?: number;
  /**
   * @remarks
   * Average talk duration, in seconds. Calculation Formula: TotalTalkTime / CallsHandled.
   * 
   * @example
   * 5
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average wait time, which is the average duration a caller waits before an agent answers the call. Calculation Formula: TotalWaitTime / CallsHandled.
   * 
   * @example
   * 11
   */
  averageWaitTime?: number;
  /**
   * @remarks
   * Average post-processing duration, in seconds. Calculation Formula: TotalWorkTime / CallsHandled.
   * 
   * @example
   * 8
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Abandoned call quantity. Calculation Formula: CallsAbandonedInQueue + CallsAbandonedInRing.
   * 
   * @example
   * 0
   */
  callsAbandoned?: number;
  /**
   * @remarks
   * Quantity of abandoned calls in queue, which refers to the number of calls where the customer hung up after entering the queue but before being answered.
   * 
   * @example
   * 0
   */
  callsAbandonedInQueue?: number;
  /**
   * @remarks
   * Ring abandonment count, which refers to the number of calls abandoned by customers while ringing to an agent.
   * 
   * @example
   * 0
   */
  callsAbandonedInRing?: number;
  /**
   * @remarks
   * Attended transfer-in count, which is the number of calls transferred to this skill group via attended transfers initiated from other skill groups. Transfers between agents within the same skill group are not counted. If an agent signs in to multiple skill groups simultaneously, the call is attributed to the first skill group the agent signed in to. If a single call is transferred from another skill group to this skill group multiple times, each transfer is counted separately. The same rule applies below.
   * 
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * Attended transfer-out count, which refers to the number of calls transferred from this skill group to another skill group for consultation. Transfers between agents within the same skill group are not counted.
   * 
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * Quantity of blind transfer-in calls, which refers to the number of calls directly transferred into this skill group from other skill groups. Transfers between agents within the same skill group are not counted. If an agent is signed into multiple skill groups simultaneously, the call is attributed to the first skill group the agent signed into. If a single call is transferred multiple times from other skill groups into this skill group, each transfer is counted separately. The same rule applies below.
   * 
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * Quantity of blind transfer-out calls, which refers to the number of calls directly transferred out from this skill group to other skill groups. Transfers between agents within the same skill group are not counted.
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
   * 2
   */
  callsHandled?: number;
  /**
   * @remarks
   * Hold count, which is the number of times calls were placed on hold. If a single call enters the queue and is placed on hold multiple times, it is counted as one.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * Assigned call volume, which is the number of calls assigned to this skill group, including calls assigned through queues and calls assigned via transfers (consultation transfers and direct transfers). Calculation formula: CallsQueued + CallsBlindTransferIn + CallsAttendedTransferIn.
   * 
   * @example
   * 3
   */
  callsOffered?: number;
  /**
   * @remarks
   * Overflow count, which is the number of calls that overflowed from a queue (skill group). If a single call enters the same queue multiple times, each overflow is counted separately.
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
   * 3
   */
  callsQueued?: number;
  /**
   * @remarks
   * Number of calls that overflowed from the queue, meaning calls that experienced queue overflow while waiting in the IVR queue.
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
   * Number of calls that rang to agents. Each time a call enters the queue and is assigned to multiple agents, resulting in ringing, it is counted as one occurrence.
   * 
   * @example
   * 3
   */
  callsRinged?: number;
  /**
   * @remarks
   * Timeout count, which is the number of calls that timed out in a queue (skill group). If a single call enters the same queue multiple times, each timeout is counted separately.
   * 
   * @example
   * 0
   */
  callsTimeout?: number;
  /**
   * @remarks
   * Acknowledgement rate. Calculation Formula: CallsHandled / CallsOffered (because acknowledgement events and assignment events may fall into different time ranges, the result may exceed 100% in certain cases).
   * 
   * @example
   * 0.6666666666666666
   */
  handleRate?: number;
  /**
   * @remarks
   * Maximum abandonment time, in seconds.
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
   * Maximum hold duration, in seconds.
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
   * 18
   */
  maxRingTime?: number;
  /**
   * @remarks
   * Maximum talk duration, in seconds.
   * 
   * @example
   * 6
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Maximum wait time, in seconds.
   * 
   * @example
   * 18
   */
  maxWaitTime?: number;
  /**
   * @remarks
   * Maximum post-processing duration, in seconds.
   * 
   * @example
   * 19
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Satisfaction index, which is the average value of the satisfaction rating digits (single-digit numbers) entered by callers.
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Satisfaction rate. Calculation Formula: Number of evaluations marked as satisfied divided by the count of satisfaction survey responses.
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
   * Service level within 20 seconds: the number of calls with waiting time less than or equal to 20 seconds divided by CallsQueued.
   * 
   * @example
   * 0
   */
  serviceLevel20?: number;
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
   * Total ringing abandonment duration, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonedInRingTime?: number;
  /**
   * @remarks
   * Total call hold time, in seconds.
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
   * 7
   */
  totalMessagesSentByAgent?: number;
  /**
   * @remarks
   * Total number of messages sent by the Customer in chat sessions.
   * 
   * @example
   * 5
   */
  totalMessagesSentByCustomer?: number;
  /**
   * @remarks
   * Total ringing duration, in seconds.
   * 
   * @example
   * 33
   */
  totalRingTime?: number;
  /**
   * @remarks
   * Total talk duration, in seconds.
   * 
   * @example
   * 9
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total wait time, in seconds.
   * 
   * @example
   * 33
   */
  totalWaitTime?: number;
  /**
   * @remarks
   * Total post-processing time, in seconds.
   * 
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
   * @remarks
   * Answer rate. Calculation Formula: CallsAnswered / CallsDialed (because management events for answering and acknowledgement may fall into different Time Ranges, the Result may exceed 100% in certain cases).
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
   * Average hold time during calls, in seconds. Calculation formula: TotalHoldTime / CallsHold.
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
   * 5
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average post-processing time in seconds. Calculation Formula: TotalWorkTime / CallsDialed.
   * 
   * @example
   * 3
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Answered call count.
   * 
   * @example
   * 1
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Transfer-in calls, which refer to the number of calls transferred to this skill group from other skill groups. Transfers between agents within the same skill group are not counted. If an agent is signed into multiple skill groups simultaneously, the call is attributed to the first skill group the agent signed into. If a single call is transferred multiple times from other skill groups to this skill group, each transfer is counted separately. The same rule applies below.
   * 
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * Transfer-out call volume, which refers to the number of calls initiated by this skill group and transferred to other skill groups. Transfers between agents within the same skill group are not counted.
   * 
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * Direct transfer-in calls, which refer to the number of calls directly transferred to this skill group from other skill groups. Transfers between agents within the same skill group are not counted. If an agent is signed into multiple skill groups simultaneously, the call is attributed to the first skill group the agent signed into. If a single call is transferred multiple times from other skill groups to this skill group, each transfer is counted separately. The same rule applies below.
   * 
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * Direct transfer-out calls, which refer to the number of calls directly transferred from this skill group to other skill groups. Transfers between agents within the same skill group are not counted.
   * 
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * Dialed call count.
   * 
   * @example
   * 2
   */
  callsDialed?: number;
  /**
   * @remarks
   * Hold count, which is the number of calls that were placed on hold. If a single call was placed on hold multiple times before being transferred out of the current skill group, it is counted as one.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * Number of calls that rang to agents. Each call is counted once per queue entry, even if it was assigned to multiple agents and rang multiple times.
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
   * 49
   */
  maxDialingTime?: number;
  /**
   * @remarks
   * Maximum hold time during a call, in seconds.
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
   * 5
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Maximum post-processing time in seconds.
   * 
   * @example
   * 4
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
   * Satisfaction rate. Calculation Formula: number of evaluations marked as satisfied / Count of satisfaction survey responses.
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
   * 60
   */
  totalDialingTime?: number;
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
   * 5
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total post-processing duration, in seconds.
   * 
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
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Total duration of this break type, in seconds.
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

export class ListIntervalSkillGroupReportResponseBodyDataOverall extends $dara.Model {
  /**
   * @remarks
   * Average break time, in seconds. Calculation Formula: TotalBreakTime / Count of breaks. The Count of breaks is not a field provided by the API.
   * 
   * @example
   * 0
   */
  averageBreakTime?: number;
  /**
   * @remarks
   * Average call hold time, in seconds. Calculation Formula: TotalHoldTime / (Inbound CallsHold + Outbound CallsHold).
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * Average ready time, in seconds. Calculation Formula: TotalReadyTime / Count of ready events. The count of ready events is not an API statistical field.
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
   * Average post-processing time, in seconds. Calculation Formula: TotalWorkTime / TotalCalls.
   * 
   * @example
   * 6
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Statistics for each break type.
   */
  breakCodeDetailList?: ListIntervalSkillGroupReportResponseBodyDataOverallBreakCodeDetailList[];
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
   * 4927
   */
  maxReadyTime?: number;
  /**
   * @remarks
   * Maximum talk time, in seconds.
   * 
   * @example
   * 6
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Maximum post-processing duration, in seconds.
   * 
   * @example
   * 19
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Agent occupancy rate, calculated using the formula: (TotalWorkTime + TotalTalkTime) / TotalLoggedInTime.
   * 
   * @example
   * 0.00422315148470254
   */
  occupancyRate?: number;
  /**
   * @remarks
   * Satisfaction index, which is the average value of the single-digit satisfaction rating entered by users.
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
   * 5
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
   * Total hold time, in seconds.
   * 
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * Total logon duration, in seconds.
   * 
   * @example
   * 9236
   */
  totalLoggedInTime?: number;
  /**
   * @remarks
   * Total ready time in seconds.
   * 
   * @example
   * 9106
   */
  totalReadyTime?: number;
  /**
   * @remarks
   * Total talk time, in seconds.
   * 
   * @example
   * 13
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total post-processing time, in seconds.
   * 
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
  /**
   * @remarks
   * Back-to-back call metric.
   */
  back2Back?: ListIntervalSkillGroupReportResponseBodyDataBack2Back;
  /**
   * @remarks
   * Inbound metrics.
   */
  inbound?: ListIntervalSkillGroupReportResponseBodyDataInbound;
  /**
   * @remarks
   * Outbound metrics.
   */
  outbound?: ListIntervalSkillGroupReportResponseBodyDataOutbound;
  /**
   * @remarks
   * Overall metrics.
   */
  overall?: ListIntervalSkillGroupReportResponseBodyDataOverall;
  /**
   * @remarks
   * Start Time of the time segment, formatted as a UNIX timestamp in milliseconds.
   * 
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
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * List of segment-based statistics for the skill group.
   */
  data?: ListIntervalSkillGroupReportResponseBodyData[];
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

