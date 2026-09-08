// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoricalInstanceReportResponseBodyDataInboundAccessChannelTypeDetailList extends $dara.Model {
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
   * 5
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

export class GetHistoricalInstanceReportResponseBodyDataInbound extends $dara.Model {
  /**
   * @remarks
   * Abandon rate. Calculation Formula: CallsAbandoned / CallsOffered (because abandonment events and assignment events may fall into different time ranges, the result may exceed 100% in certain cases).
   * 
   * @example
   * 0
   */
  abandonRate?: number;
  /**
   * @remarks
   * Statistics for each channel.
   */
  accessChannelTypeDetailList?: GetHistoricalInstanceReportResponseBodyDataInboundAccessChannelTypeDetailList[];
  /**
   * @remarks
   * Average abandon time, in seconds. Calculation formula: TotalAbandonTime / CallsAbandoned.
   * 
   * @example
   * 0
   */
  averageAbandonTime?: number;
  /**
   * @remarks
   * Average IVR abandonment duration, in seconds. Calculation Formula: TotalAbandonedInIVRTime / CallsAbandonedInIVR.
   * 
   * @example
   * 0
   */
  averageAbandonedInIVRTime?: number;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_Inbound_properties_MaxAbandonedInQueueTime_type]integer
   * 
   * @example
   * 0
   */
  averageAbandonedInQueueTime?: number;
  /**
   * @remarks
   * Average ring-time abandon duration, in seconds. Calculation formula: TotalAbandonedInRingTime / CallsAbandonedInRing.
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
   * 12
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
   * Average response time (RT) for chat sessions.
   * 
   * @example
   * 15
   */
  averageResponseTime?: number;
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
   * Average talk time, in seconds. Calculation Formula: TotalTalkTime / CallsHandled.
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_Inbound_properties_AverageFirstResponseTime_type]number
   * 
   * @example
   * 0
   */
  averageWaitTime?: number;
  /**
   * @remarks
   * Average post-processing time, in seconds. Calculation formula: TotalWorkTime / CallsHandled.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Total number of abandoned calls. Calculation Formula: CallsAbandonedInIVR + CallsAbandonedInQueue + CallsAbandonedInRing.
   * 
   * @example
   * 0
   */
  callsAbandoned?: number;
  /**
   * @remarks
   * Number of calls abandoned in IVR, which refers to the count of calls where the customer hung up during the IVR flow after entering it. This is determined by the hang-up reason in call details being marked as "IVR abandoned."
   * 
   * @example
   * 0
   */
  callsAbandonedInIVR?: number;
  /**
   * @remarks
   * Number of calls abandoned in queue, which refers to the number of calls where the customer hung up while waiting in the queue after the call entered the queue.
   * 
   * @example
   * 0
   */
  callsAbandonedInQueue?: number;
  /**
   * @remarks
   * Number of calls abandoned during ringing, which refers to the quantity of calls where the customer hung up while the agent\\"s phone was ringing.
   * 
   * @example
   * 0
   */
  callsAbandonedInRing?: number;
  /**
   * @remarks
   * Number of calls abandoned in the Intelligent Voice Navigator module.
   * 
   * @example
   * 0
   */
  callsAbandonedInVoiceNavigator?: number;
  /**
   * @remarks
   * Number of consultative transfers, which refers to the number of calls that were transferred via consultative transfer. If a single call is transferred multiple times, it is counted as one.
   * 
   * @example
   * 0
   */
  callsAttendedTransferred?: number;
  /**
   * @remarks
   * The number of blind transfers, which refers to the count of calls directly transferred without consultation. If a single call is transferred multiple times, it is counted as one.
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
   * Number of calls forwarded to an external number.
   * 
   * @example
   * 0
   */
  callsForwardToOutsideNumber?: number;
  /**
   * @remarks
   * Acknowledgement count, which refers to the number of calls answered by agents. If a single call is answered by multiple agents, it is counted only once.
   * 
   * @example
   * 0
   */
  callsHandled?: number;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_Inbound_properties_TotalAbandonTime_type]integer
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * Number of calls with IVR exceptions. A call is counted when the IVR enters a hang-up reason node and the hang-up reason configured in that node is "transfer to agent failed."
   * 
   * @example
   * 0
   */
  callsIVRException?: number;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_Inbound_properties_TotalAbandonedInRingTime_type]integer
   * 
   * @example
   * 0
   */
  callsOffered?: number;
  /**
   * @remarks
   * Number of calls entering the queue. If a single call enters the queue multiple times, it is counted once.
   * 
   * @example
   * 0
   */
  callsQueued?: number;
  /**
   * @remarks
   * The number of queue failures, which refers to the count of calls where the customer hung up while waiting in the queue after entering it.
   * 
   * @example
   * 0
   */
  callsQueuingFailed?: number;
  /**
   * @remarks
   * The number of calls that overflowed from the queue, where queue overflow refers to calls exceeding the queue capacity while waiting in the IVR queue.
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
   * Number of calls that rang agents. If a single call is assigned to multiple agents and rings, it is counted once.
   * 
   * @example
   * 0
   */
  callsRinged?: number;
  /**
   * @remarks
   * The number of calls routed to voicemail.
   * 
   * @example
   * 3
   */
  callsToVoicemail?: number;
  /**
   * @remarks
   * Number of calls transferred to voicemail. The count increases by 1 when a call enters the voicemail module configured in IVR.
   * 
   * @example
   * 0
   */
  callsVoicemail?: number;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_Inbound_properties_CallsBlindTransferred_type]integer
   * 
   * @example
   * 0
   */
  handleRate?: number;
  /**
   * @remarks
   * Maximum abandon time, in seconds. A call is considered abandoned if the customer hangs up after entering the IVR but before an agent answers.
   * 
   * @example
   * 0
   */
  maxAbandonTime?: number;
  /**
   * @remarks
   * Maximum IVR abandonment duration, in seconds. IVR abandonment is defined as a customer hanging up during IVR interaction. This does not include hang-ups while waiting in queue or during agent ringing after call assignment.
   * 
   * @example
   * 100
   */
  maxAbandonedInIVRTime?: number;
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
   * Maximum ringing abandonment duration, in seconds. Ringing abandonment is defined as the customer hanging up while the call is ringing on the agent\\"s side after being assigned to the agent.
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
   * Maximum wait time, in seconds.
   * 
   * @example
   * 0
   */
  maxWaitTime?: number;
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
   * [responses_200_schema_properties_Data_properties_Inbound_properties_CallsQueuingOverflow_type]integer
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
   * Service level within 15 seconds.
   * 
   * @example
   * 0.78
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
   * Total IVR abandonment duration, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonedInIVRTime?: number;
  /**
   * @remarks
   * Total queue abandon time, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonedInQueueTime?: number;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_Inbound_properties_SatisfactionSurveysOffered_type]integer
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
   * 8
   */
  totalMessagesSentByAgent?: number;
  /**
   * @remarks
   * Total number of messages sent by the customer in chat sessions.
   * 
   * @example
   * 4
   */
  totalMessagesSentByCustomer?: number;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_Inbound_properties_CallsQueuingFailed_type]integer
   * 
   * @example
   * 0
   */
  totalRingTime?: number;
  /**
   * @remarks
   * [responses_200_schema_properties_Data_properties_Inbound_properties_CallsToVoicemail_type]integer
   * 
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * Total wait time, in seconds.
   * 
   * @example
   * 0
   */
  totalWaitTime?: number;
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
      abandonRate: 'AbandonRate',
      accessChannelTypeDetailList: 'AccessChannelTypeDetailList',
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
      serviceLevel15: 'ServiceLevel15',
      serviceLevel20: 'ServiceLevel20',
      serviceLevel30: 'ServiceLevel30',
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
      accessChannelTypeDetailList: { 'type': 'array', 'itemType': GetHistoricalInstanceReportResponseBodyDataInboundAccessChannelTypeDetailList },
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
      serviceLevel15: 'number',
      serviceLevel20: 'number',
      serviceLevel30: 'number',
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
    if(Array.isArray(this.accessChannelTypeDetailList)) {
      $dara.Model.validateArray(this.accessChannelTypeDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBodyDataInternal extends $dara.Model {
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
   * Dial-up volume.
   * 
   * @example
   * 100
   */
  callsDialed?: number;
  static names(): { [key: string]: string } {
    return {
      callsAnswered: 'CallsAnswered',
      callsDialed: 'CallsDialed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callsAnswered: 'number',
      callsDialed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoricalInstanceReportResponseBodyDataOutbound extends $dara.Model {
  /**
   * @remarks
   * Answer rate. Calculation Formula: CallsAnswered / CallsDialed. (Because the answering event and the acknowledgement event may fall into different time ranges, the result may exceed 100% in certain cases.)
   * 
   * @example
   * 0
   */
  answerRate?: number;
  /**
   * @remarks
   * Average Dial-up Time, in seconds. Calculation Formula: TotalDialingTime / CallsDialed.
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
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * Average post-processing time per call, in seconds. Calculation Formula: TotalWorkTime / CallsDialed.
   * 
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * Answered Call Count.
   * 
   * @example
   * 0
   */
  callsAnswered?: number;
  /**
   * @remarks
   * Number of attended transfers, which refers to the quantity of calls that underwent attended transfer. If a single call is transferred multiple times, it is counted as one.
   * 
   * @example
   * 0
   */
  callsAttendedTransferred?: number;
  /**
   * @remarks
   * Number of blind transfers, which refers to the quantity of calls that underwent blind transfer. If a single call is transferred multiple times, it is counted as one.
   * 
   * @example
   * 0
   */
  callsBlindTransferred?: number;
  /**
   * @remarks
   * Dial-up Call Count.
   * 
   * @example
   * 0
   */
  callsDialed?: number;
  /**
   * @remarks
   * Hold Count, which is the number of calls that were placed on hold. If a single call was put on hold multiple times, it is counted as one.
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
   * Maximum Dial-up Time, in seconds.
   * 
   * @example
   * 0
   */
  maxDialingTime?: number;
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
   * Maximum ring duration, in seconds.
   * 
   * @example
   * 0
   */
  maxRingTime?: number;
  /**
   * @remarks
   * Maximum Talk Time, in seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * Maximum post-processing time per call, in seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * Satisfaction Index, which is the average of the satisfaction keypress digits (single-digit numbers).
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * Satisfaction Rate. Calculation Formula: Number of responses marked as satisfied / Count of satisfaction survey responses.
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
   * Total Ring Time, in seconds.
   * 
   * @example
   * 0
   */
  totalRingTime?: number;
  /**
   * @remarks
   * Total Talk Time, in seconds.
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

export class GetHistoricalInstanceReportResponseBodyDataOverall extends $dara.Model {
  /**
   * @remarks
   * Average break duration, in seconds. Calculation Formula: TotalBreakTime / Count of breaks. The count of breaks is not an exposed API field.
   * 
   * @example
   * 0
   */
  averageBreakTime?: number;
  /**
   * @remarks
   * Average call hold duration, in seconds. Calculation Formula: TotalHoldTime / (InboundCallsHold + OutboundCallsHold).
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * Average ready duration, in seconds. Calculation Formula: TotalReadyTime / Count of ready events. The count of ready events is not currently exposed externally.
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
   * Maximum short break duration, in seconds.
   * 
   * @example
   * 0
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
   * Maximum number of agents simultaneously logged on during the Time Range.
   * 
   * @example
   * 102
   */
  maxLoggedInAgents?: number;
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
   * Maximum post-processing time per call, in seconds.
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
   * Total ready time, in seconds.
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
   * Total post-processing time, in seconds.
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
      maxLoggedInAgents: 'MaxLoggedInAgents',
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
      maxLoggedInAgents: 'number',
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

export class GetHistoricalInstanceReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Inbound data.
   */
  inbound?: GetHistoricalInstanceReportResponseBodyDataInbound;
  /**
   * @remarks
   * Internal call metrics.
   */
  internal?: GetHistoricalInstanceReportResponseBodyDataInternal;
  /**
   * @remarks
   * Outbound metrics.
   */
  outbound?: GetHistoricalInstanceReportResponseBodyDataOutbound;
  /**
   * @remarks
   * Overall metrics.
   */
  overall?: GetHistoricalInstanceReportResponseBodyDataOverall;
  static names(): { [key: string]: string } {
    return {
      inbound: 'Inbound',
      internal: 'Internal',
      outbound: 'Outbound',
      overall: 'Overall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inbound: GetHistoricalInstanceReportResponseBodyDataInbound,
      internal: GetHistoricalInstanceReportResponseBodyDataInternal,
      outbound: GetHistoricalInstanceReportResponseBodyDataOutbound,
      overall: GetHistoricalInstanceReportResponseBodyDataOverall,
    };
  }

  validate() {
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

export class GetHistoricalInstanceReportResponseBody extends $dara.Model {
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
  data?: GetHistoricalInstanceReportResponseBodyData;
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
      data: GetHistoricalInstanceReportResponseBodyData,
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

