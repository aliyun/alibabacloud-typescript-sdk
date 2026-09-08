// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalInstanceReportResponseBodyDataInbound extends $dara.Model {
  /**
   * @remarks
   * Abandon rate. Calculation Formula: CallsAbandoned / CallsOffered (because management events related to abandonment and assignment may fall into different Time Ranges, the Result may exceed 100% in certain cases).
   * 
   * @example
   * 0
   */
  abandonRate?: number;
  /**
   * @remarks
   * Deprecated. Refer to the AbandonRate field instead.
   * 
   * @example
   * 0
   */
  abandonedRate?: number;
  /**
   * @remarks
   * The average abandon time, in seconds. Calculation Formula: TotalAbandonTime / CallsAbandoned.
   * 
   * @example
   * 0
   */
  averageAbandonTime?: number;
  /**
   * @remarks
   * Average IVR abandonment time, in seconds. Calculation Formula: TotalAbandonedInIVRTime / CallsAbandonedInIVR.
   * 
   * @example
   * 0
   */
  averageAbandonedInIVRTime?: number;
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
   * Average abandoned-in-ring time, in seconds. Calculation Formula: TotalAbandonedInRingTime / CallsAbandonedInRing.
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
   * Average response time (RT) of chat sessions.
   * 
   * @example
   * 15
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
   * Average wait time, which is the average duration callers wait before an agent answers a call. Calculation Formula: TotalWaitTime / CallsHandled.
   * 
   * @example
   * 5
   */
  averageWaitTime?: number;
  /**
   * @remarks
   * Average post-processing time, in seconds. Calculation Formula: TotalWorkTime / CallsHandled.
   * 
   * @example
   * 13
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Total abandoned calls. Calculation Formula: CallsAbandonedInIVR + CallsAbandonedInQueue + CallsAbandonedInRing.
   * 
   * @example
   * 0
   */
  callsAbandoned?: number;
  /**
   * @remarks
   * Number of calls abandoned in IVR, which refers to the count of calls where the Customer hung up during the IVR flow after entering the IVR process.
   * 
   * @example
   * 0
   */
  callsAbandonedInIVR?: number;
  /**
   * @remarks
   * The number of calls abandoned in the queue, which refers to calls where the customer hung up while waiting in the queue after entering it.
   * 
   * @example
   * 0
   */
  callsAbandonedInQueue?: number;
  /**
   * @remarks
   * Number of calls abandoned during ringing, which refers to the Quantity of calls where the Customer hung up while the agent\\"s phone was ringing.
   * 
   * @example
   * 0
   */
  callsAbandonedInRing?: number;
  /**
   * @remarks
   * The number of calls abandoned in the Intelligent Navigation module.
   * 
   * @example
   * 0
   */
  callsAbandonedInVoiceNavigator?: number;
  /**
   * @remarks
   * Number of consult transfers, which refers to the Count of calls that involved a consult transfer. If a single call initiated multiple transfers, it is counted as one.
   * 
   * @example
   * 0
   */
  callsAttendedTransferred?: number;
  /**
   * @remarks
   * Quantity of blind transfers, which is the number of calls that were directly transferred. If a single call was transferred multiple times, it is counted as one.
   * 
   * @example
   * 0
   */
  callsBlindTransferred?: number;
  /**
   * @remarks
   * Number of calls that caused IVR exceptions.
   * 
   * @example
   * 0
   */
  callsCausedIVRException?: number;
  /**
   * @remarks
   * The number of calls forwarded to an external number.
   * 
   * @example
   * 0
   */
  callsForwardToOutsideNumber?: number;
  /**
   * @remarks
   * The acknowledgement count, which refers to the number of calls answered by agents. If a single call is answered by multiple agents, it is counted as one.
   * 
   * @example
   * 7
   */
  callsHandled?: number;
  /**
   * @remarks
   * Number of calls placed on hold. If a single call is placed on hold multiple times, it is counted as one.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * The number of calls with IVR exceptions. A call is counted when the IVR enters a hang-up reason node and the hang-up reason configured for that node is "failed transfer to agent." In this case, the count increases by 1.
   * 
   * @example
   * 0
   */
  callsIVRException?: number;
  /**
   * @remarks
   * Number of calls offered to Cloud Contact Center.
   * 
   * @example
   * 7
   */
  callsOffered?: number;
  /**
   * @remarks
   * Number of calls that entered the queue. If a single call entered the queue multiple times, it is counted as one.
   * 
   * @example
   * 7
   */
  callsQueued?: number;
  /**
   * @remarks
   * Queue Failure quantity, which refers to the number of calls where the customer hung up during queuing after the call entered the queue.
   * 
   * @example
   * 0
   */
  callsQueuingFailed?: number;
  /**
   * @remarks
   * Quantity of calls that overflowed from the queue, meaning calls that encountered queue overflow while waiting in the IVR queue.
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
   * Number of calls that rang to agents. If a single call was assigned to multiple agents and rang for each, it is counted as one.
   * 
   * @example
   * 7
   */
  callsRinged?: number;
  /**
   * @remarks
   * Quantity of calls transferred to voicemail.
   * 
   * @example
   * 1
   */
  callsToVoicemail?: number;
  /**
   * @remarks
   * The number of calls directed to voicemail.
   * 
   * @example
   * 0
   */
  callsVoicemail?: number;
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
   * The maximum abandon time, in seconds.
   * 
   * @example
   * 0
   */
  maxAbandonTime?: number;
  /**
   * @remarks
   * Maximum IVR abandonment duration, in seconds.
   * 
   * @example
   * 0
   */
  maxAbandonedInIVRTime?: number;
  /**
   * @remarks
   * Maximum abandoned-in-queue time, in seconds.
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
   * Maximum hold time, in seconds.
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
   * Maximum talk time, in seconds.
   * 
   * @example
   * 219
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum wait time, in seconds.
   * 
   * @example
   * 13
   */
  maxWaitTime?: number;
  /**
   * @remarks
   * Maximum post-processing time, in seconds.
   * 
   * @example
   * 17
   */
  maxWorkTime?: number;
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
   * The count of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * Service level within 20 seconds, calculated as the number of calls with wait time less than or equal to 20 seconds divided by CallsQueued.
   * 
   * @example
   * 1
   */
  serviceLevel20?: number;
  /**
   * @remarks
   * Total abandon time, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonTime?: number;
  /**
   * @remarks
   * Total IVR abandonment duration, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonedInIVRTime?: number;
  /**
   * @remarks
   * Total abandoned-in-queue time, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonedInQueueTime?: number;
  /**
   * @remarks
   * Total abandoned-in-ring time, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonedInRingTime?: number;
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
   * Total number of messages sent by agents in chat sessions.
   * 
   * @example
   * 8
   */
  totalMessagesSentByAgent?: number;
  /**
   * @remarks
   * Total number of messages sent by the Customer in chat sessions.
   * 
   * @example
   * 4
   */
  totalMessagesSentByCustomer?: number;
  /**
   * @remarks
   * Total ring time, in seconds.
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
   * The total wait time, in seconds.
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
      abandonedRate: 'AbandonedRate',
      averageAbandonTime: 'AverageAbandonTime',
      averageAbandonedInIVRTime: 'AverageAbandonedInIVRTime',
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
      callsAbandonedInIVR: 'CallsAbandonedInIVR',
      callsAbandonedInQueue: 'CallsAbandonedInQueue',
      callsAbandonedInRing: 'CallsAbandonedInRing',
      callsAbandonedInVoiceNavigator: 'CallsAbandonedInVoiceNavigator',
      callsAttendedTransferred: 'CallsAttendedTransferred',
      callsBlindTransferred: 'CallsBlindTransferred',
      callsCausedIVRException: 'CallsCausedIVRException',
      callsForwardToOutsideNumber: 'CallsForwardToOutsideNumber',
      callsHandled: 'CallsHandled',
      callsHold: 'CallsHold',
      callsIVRException: 'CallsIVRException',
      callsOffered: 'CallsOffered',
      callsQueued: 'CallsQueued',
      callsQueuingFailed: 'CallsQueuingFailed',
      callsQueuingOverflow: 'CallsQueuingOverflow',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      callsRinged: 'CallsRinged',
      callsToVoicemail: 'CallsToVoicemail',
      callsVoicemail: 'CallsVoicemail',
      handleRate: 'HandleRate',
      maxAbandonTime: 'MaxAbandonTime',
      maxAbandonedInIVRTime: 'MaxAbandonedInIVRTime',
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
      totalAbandonedInIVRTime: 'TotalAbandonedInIVRTime',
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
      abandonedRate: 'number',
      averageAbandonTime: 'number',
      averageAbandonedInIVRTime: 'number',
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
      callsAbandonedInIVR: 'number',
      callsAbandonedInQueue: 'number',
      callsAbandonedInRing: 'number',
      callsAbandonedInVoiceNavigator: 'number',
      callsAttendedTransferred: 'number',
      callsBlindTransferred: 'number',
      callsCausedIVRException: 'number',
      callsForwardToOutsideNumber: 'number',
      callsHandled: 'number',
      callsHold: 'number',
      callsIVRException: 'number',
      callsOffered: 'number',
      callsQueued: 'number',
      callsQueuingFailed: 'number',
      callsQueuingOverflow: 'number',
      callsQueuingTimeout: 'number',
      callsRinged: 'number',
      callsToVoicemail: 'number',
      callsVoicemail: 'number',
      handleRate: 'number',
      maxAbandonTime: 'number',
      maxAbandonedInIVRTime: 'number',
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
      totalAbandonedInIVRTime: 'number',
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

export class ListIntervalInstanceReportResponseBodyDataOutbound extends $dara.Model {
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
   * 0
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
   * The number of calls transferred via consultation, which refers to the quantity of calls that underwent consultation-based transfer. If a single call was transferred multiple times, it is counted as one.
   * 
   * @example
   * 0
   */
  callsAttendedTransferred?: number;
  /**
   * @remarks
   * Quantity of blind transfers, which refers to the number of calls that were directly transferred. If a single call is transferred multiple times, it counts as one.
   * 
   * @example
   * 0
   */
  callsBlindTransferred?: number;
  /**
   * @remarks
   * Number of dialed calls.
   * 
   * @example
   * 0
   */
  callsDialed?: number;
  /**
   * @remarks
   * Number of calls placed on hold. If a single call is placed on hold multiple times, it is counted as one.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * Number of calls that rang for agents. If a single call is assigned to multiple agents and rings for each, it is counted as one.
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
   * 0
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
   * Satisfaction rate. Calculation Formula: Quantity of evaluations marked as satisfied / Count of satisfaction survey responses.
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
   * 0
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
      callsAttendedTransferred: 'CallsAttendedTransferred',
      callsBlindTransferred: 'CallsBlindTransferred',
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
      callsAttendedTransferred: 'number',
      callsBlindTransferred: 'number',
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

export class ListIntervalInstanceReportResponseBodyDataOverall extends $dara.Model {
  /**
   * @remarks
   * Average break time, in seconds. Calculation Formula: TotalBreakTime / Break Count. Break Count is not an API statistics field.
   * 
   * @example
   * 0
   */
  averageBreakTime?: number;
  /**
   * @remarks
   * Average call hold time, in seconds. Calculation Formula: TotalHoldTime / (Inbound Calls on Hold + Outbound Calls on Hold).
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * Average ready time, in seconds. Calculation Formula: TotalReadyTime / Ready Count. Ready Count is not an API statistics field.
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
   * Average post-processing time per call, in seconds. Calculation Formula: TotalWorkTime / TotalCalls.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Maximum break time, in seconds.
   * 
   * @example
   * 0
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
   * 0
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
   * Maximum post-processing time, in seconds.
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
   * Satisfaction index, which is the average value of the satisfaction keypress digits (single-digit numbers).
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
   * Response Count of satisfaction surveys.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * Total break time in seconds.
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
   * Total hold time, in seconds.
   * 
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * Total logon duration, in seconds. Exclude break time.
   * 
   * @example
   * 0
   */
  totalLoggedInTime?: number;
  /**
   * @remarks
   * Total ready time in seconds.
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
   * Total post-processing time in seconds.
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervalInstanceReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Inbound metrics.
   */
  inbound?: ListIntervalInstanceReportResponseBodyDataInbound;
  /**
   * @remarks
   * Outbound metrics.
   */
  outbound?: ListIntervalInstanceReportResponseBodyDataOutbound;
  /**
   * @remarks
   * Overall metrics.
   */
  overall?: ListIntervalInstanceReportResponseBodyDataOverall;
  /**
   * @remarks
   * Start Time, formatted as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1620230400000
   */
  statsTime?: number;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      outbound: 'Outbound',
      overall: 'Overall',
      statsTime: 'StatsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: ListIntervalInstanceReportResponseBodyDataInbound,
      outbound: ListIntervalInstanceReportResponseBodyDataOutbound,
      overall: ListIntervalInstanceReportResponseBodyDataOverall,
      statsTime: 'number',
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

export class ListIntervalInstanceReportResponseBody extends $dara.Model {
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
   * List of instance segment statistics data.
   */
  data?: ListIntervalInstanceReportResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListIntervalInstanceReportResponseBodyData },
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

