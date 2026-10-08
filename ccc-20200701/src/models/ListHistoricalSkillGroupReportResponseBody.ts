// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalSkillGroupReportResponseBodyDataListBack2Back extends $dara.Model {
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
   * The answer rate. Calculation formula: CallsAnswered/CallsDialed. The result may exceed 100% in some cases because answer events and response events may fall into different time ranges.
   * 
   * @example
   * 0.6
   */
  answerRate?: number;
  /**
   * @remarks
   * The average ring time on the customer side, in seconds.
   * 
   * @example
   * 100
   */
  averageCustomerRingTime?: number;
  /**
   * @remarks
   * The average ring time, in seconds.
   * 
   * @example
   * 100
   */
  averageRingTime?: number;
  /**
   * @remarks
   * The average talk time, in seconds.
   * 
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The number of answered calls.
   * 
   * @example
   * 100
   */
  callsAnswered?: number;
  /**
   * @remarks
   * The number of calls answered by customers.
   * 
   * @example
   * 8
   */
  callsCustomerAnswered?: number;
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
   * The customer answer rate.
   * 
   * @example
   * 0.8
   */
  customerAnswerRate?: number;
  /**
   * @remarks
   * The maximum ring time on the customer side, in seconds.
   * 
   * @example
   * 100
   */
  maxCustomerRingTime?: number;
  /**
   * @remarks
   * The maximum ring time, in seconds.
   * 
   * @example
   * 100
   */
  maxRingTime?: number;
  /**
   * @remarks
   * The maximum talk time, in seconds.
   * 
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The total ring time on the customer side, in seconds.
   * 
   * @example
   * 100
   */
  totalCustomerRingTime?: number;
  /**
   * @remarks
   * The total ring time, in seconds.
   * 
   * @example
   * 100
   */
  totalRingTime?: number;
  /**
   * @remarks
   * The total talk time, in seconds.
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
   * The channel type.
   * 
   * @example
   * Web
   */
  accessChannelType?: string;
  /**
   * @remarks
   * The number of offered sessions.
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
   * The abandon rate. Calculation formula: CallsAbandoned/CallsOffered. The result may exceed 100% in some cases because abandon events and allocation events may fall into different time ranges.
   * 
   * @example
   * 0
   */
  abandonRate?: number;
  /**
   * @remarks
   * The statistical data for each channel.
   */
  accessChannelTypeDetails?: ListHistoricalSkillGroupReportResponseBodyDataListInboundAccessChannelTypeDetails[];
  /**
   * @remarks
   * The average abandon time, in seconds. Calculation formula: TotalAbandonTime/CallsAbandoned.
   * 
   * @example
   * 0
   */
  averageAbandonTime?: number;
  /**
   * @remarks
   * The average abandon time in queue, in seconds. Calculation formula: TotalAbandonedInQueueTime/CallsAbandonedInQueue.
   * 
   * @example
   * 0
   */
  averageAbandonedInQueueTime?: number;
  /**
   * @remarks
   * The average abandon time during ringing, in seconds. Calculation formula: TotalAbandonedInRingTime/CallsAbandonedInRing.
   * 
   * @example
   * 0
   */
  averageAbandonedInRingTime?: number;
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
   * The average hold time, in seconds. Calculation formula: TotalHoldTime/CallsHold.
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
   * 8
   */
  averageResponseTime?: number;
  /**
   * @remarks
   * The average ring time, in seconds. Calculation formula: TotalRingTime/CallsRinged.
   * 
   * @example
   * 5
   */
  averageRingTime?: number;
  /**
   * @remarks
   * The average talk time, in seconds. Calculation formula: TotalTalkTime/CallsHandled.
   * 
   * @example
   * 64
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average wait time, which is the average time a caller waits before an agent answers the call. Calculation formula: TotalWaitTime/CallsHandled.
   * 
   * @example
   * 5
   */
  averageWaitTime?: number;
  /**
   * @remarks
   * The average after-call work time, in seconds. Calculation formula: TotalWorkTime/CallsHandled.
   * 
   * @example
   * 13
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * The number of abandoned calls. Calculation formula: CallsAbandonedInQueue + CallsAbandonedInRing.
   * 
   * @example
   * 0
   */
  callsAbandoned?: number;
  /**
   * @remarks
   * The number of calls abandoned in queue, which refers to the number of calls hung up by customers while waiting in the queue after entering it.
   * 
   * @example
   * 0
   */
  callsAbandonedInQueue?: number;
  /**
   * @remarks
   * The number of calls abandoned during ringing, which refers to the number of calls hung up by customers while the agent is ringing.
   * 
   * @example
   * 0
   */
  callsAbandonedInRing?: number;
  /**
   * @remarks
   * The number of attended transfers in, which refers to the number of calls transferred to this skill group from other skill groups through attended transfers. Transfers between agents within the same skill group are not counted. If an agent is signed in to multiple skill groups at the same time, the call is attributed to the first skill group the agent signed in to. If a call is transferred to this skill group multiple times from other skill groups, each transfer is counted as one. The same rule applies to similar metrics below.
   * 
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * The number of attended transfers out, which refers to the number of calls transferred from this skill group to other skill groups through attended transfers. Transfers between agents within the same skill group are not counted.
   * 
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * The number of blind transfers in, which refers to the number of calls transferred to this skill group from other skill groups through blind transfers. Transfers between agents within the same skill group are not counted. If an agent is signed in to multiple skill groups at the same time, the call is attributed to the first skill group the agent signed in to. If a call is transferred to this skill group multiple times from other skill groups, each transfer is counted as one. The same rule applies to similar metrics below.
   * 
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * The number of blind transfers out, which refers to the number of calls transferred from this skill group to other skill groups through blind transfers. Transfers between agents within the same skill group are not counted.
   * 
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * The number of handled calls, which refers to the number of times agents answer calls. If a call is answered by multiple agents after entering the queue each time, it is counted as one.
   * 
   * @example
   * 7
   */
  callsHandled?: number;
  /**
   * @remarks
   * The number of held calls, which refers to the number of times calls are put on hold. If a call is put on hold multiple times after entering the queue each time, it is counted as one.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * The number of offered calls, which refers to the number of calls assigned to this skill group, including calls assigned through queues and calls assigned through transfers (attended transfers and blind transfers). Calculation formula: CallsQueued + CallsBlindTransferIn + CallsAttendedTransferIn.
   * 
   * @example
   * 7
   */
  callsOffered?: number;
  /**
   * @remarks
   * The number of overflowed calls, which refers to the number of calls that overflow from the queue or skill group. If a call enters the same queue multiple times and overflows each time, each overflow is counted as one.
   * 
   * @example
   * 0
   */
  callsOverflow?: number;
  /**
   * @remarks
   * The number of queued calls in inbound scenarios, which refers to the number of calls that enter the queue or skill group. If a call enters the same queue multiple times, each entry is counted as one.
   * 
   * @example
   * 7
   */
  callsQueued?: number;
  /**
   * @remarks
   * The number of failed queue calls, which refers to the number of calls hung up by customers while waiting in the queue after entering it.
   * 
   * @example
   * 0
   */
  callsQueuingFailed?: number;
  /**
   * @remarks
   * The number of calls that overflow from the queue, which refers to calls that overflow while waiting in the IVR queue.
   * 
   * @example
   * 0
   */
  callsQueuingOverflow?: number;
  /**
   * @remarks
   * The number of calls that time out during the queuing phase.
   * 
   * @example
   * 0
   */
  callsQueuingTimeout?: number;
  /**
   * @remarks
   * The number of ringing calls, which refers to the number of calls that trigger agent ringing. If a call is assigned to multiple agents and triggers ringing after entering the queue each time, it is counted as one.
   * 
   * @example
   * 7
   */
  callsRinged?: number;
  /**
   * @remarks
   * The number of timed-out calls, which refers to the number of calls that time out in the queue or skill group. If a call enters the same queue multiple times and times out each time, each timeout is counted as one.
   * 
   * @example
   * 0
   */
  callsTimeout?: number;
  /**
   * @remarks
   * The handle rate. Calculation formula: CallsHandled/CallsOffered. The result may exceed 100% in some cases because handle events and offer events may fall into different time ranges.
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
   * The maximum abandon time in queue, in seconds.
   * 
   * @example
   * 0
   */
  maxAbandonedInQueueTime?: number;
  /**
   * @remarks
   * The maximum abandon time during ringing, in seconds.
   * 
   * @example
   * 0
   */
  maxAbandonedInRingTime?: number;
  /**
   * @remarks
   * The maximum hold time, in seconds.
   * 
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * The maximum ring time, in seconds.
   * 
   * @example
   * 12
   */
  maxRingTime?: number;
  /**
   * @remarks
   * The maximum talk time, in seconds.
   * 
   * @example
   * 0
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
   * The maximum after-call work time, in seconds.
   * 
   * @example
   * 12
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The satisfaction index, which is the average value of the satisfaction rating digits.
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The satisfaction rate. Calculation formula: Number of satisfied ratings / Number of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * The number of satisfaction surveys offered.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction surveys responded to.
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
   * 0.7
   */
  serviceLevel15?: number;
  /**
   * @remarks
   * The 20-second service level. Calculation formula: Number of calls with a wait time of less than or equal to 20 seconds / CallsQueued.
   * 
   * @example
   * 0
   */
  serviceLevel20?: number;
  /**
   * @remarks
   * The 30-second service level.
   * 
   * @example
   * 0.9
   */
  serviceLevel30?: number;
  /**
   * @remarks
   * The total abandon time, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonTime?: number;
  /**
   * @remarks
   * The total abandon time in queue, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonedInQueueTime?: number;
  /**
   * @remarks
   * The total abandon time during ringing, in seconds.
   * 
   * @example
   * 0
   */
  totalAbandonedInRingTime?: number;
  /**
   * @remarks
   * The total hold time, in seconds.
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
   * 12
   */
  totalMessagesSent?: number;
  /**
   * @remarks
   * The total number of messages sent by agents in chat sessions.
   * 
   * @example
   * 9
   */
  totalMessagesSentByAgent?: number;
  /**
   * @remarks
   * The total number of messages sent by customers in chat sessions.
   * 
   * @example
   * 3
   */
  totalMessagesSentByCustomer?: number;
  /**
   * @remarks
   * The total ring time, in seconds.
   * 
   * @example
   * 32
   */
  totalRingTime?: number;
  /**
   * @remarks
   * The total talk time, in seconds.
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
   * The total after-call work time, in seconds.
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
   * The answer rate. Calculation formula: CallsAnswered/CallsDialed. The result may exceed 100% in some cases because answer events and response events may fall into different time ranges.
   * 
   * @example
   * 0
   */
  answerRate?: number;
  /**
   * @remarks
   * The average dialing time in seconds. Formula: TotalDialingTime/CallsDialed.
   * 
   * @example
   * 37
   */
  averageDialingTime?: number;
  /**
   * @remarks
   * The average hold time, in seconds. Calculation formula: TotalHoldTime/CallsHold.
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * The average ring time, in seconds. Calculation formula: TotalRingTime/CallsRinged.
   * 
   * @example
   * 0
   */
  averageRingTime?: number;
  /**
   * @remarks
   * The average talk time in seconds. Formula: TotalTalkTime/CallsAnswered.
   * 
   * @example
   * 3
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average after-call work time in seconds. Formula: TotalWorkTime/CallsDialed.
   * 
   * @example
   * 2
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * The number of answered calls.
   * 
   * @example
   * 1
   */
  callsAnswered?: number;
  /**
   * @remarks
   * The number of attended transfers in, which refers to the number of calls transferred to this skill group from other skill groups through attended transfers. Transfers between agents within the same skill group are not counted. If an agent is signed in to multiple skill groups at the same time, the call is attributed to the first skill group the agent signed in to. If a call is transferred to this skill group multiple times from other skill groups, each transfer is counted as one. The same rule applies to similar metrics below.
   * 
   * @example
   * 0
   */
  callsAttendedTransferIn?: number;
  /**
   * @remarks
   * The number of attended transfers out, which refers to the number of calls transferred from this skill group to other skill groups through attended transfers. Transfers between agents within the same skill group are not counted.
   * 
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @remarks
   * The number of blind transfers in, which refers to the number of calls transferred to this skill group from other skill groups through blind transfers. Transfers between agents within the same skill group are not counted. If an agent is signed in to multiple skill groups at the same time, the call is attributed to the first skill group the agent signed in to. If a call is transferred to this skill group multiple times from other skill groups, each transfer is counted as one. The same rule applies to similar metrics below.
   * 
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @remarks
   * The number of blind transfers out, which refers to the number of calls transferred from this skill group to other skill groups through blind transfers. Transfers between agents within the same skill group are not counted.
   * 
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @remarks
   * The number of dialed calls.
   * 
   * @example
   * 6
   */
  callsDialed?: number;
  /**
   * @remarks
   * The number of calls placed on hold. If a call is placed on hold multiple times before being transferred out of the current skill group, it is counted as one.
   * 
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @remarks
   * The number of ringing calls, which refers to the number of calls that trigger agent ringing. If a call is assigned to multiple agents and triggers ringing after entering the queue each time, it is counted as one.
   * 
   * @example
   * 0
   */
  callsRinged?: number;
  /**
   * @remarks
   * The maximum dialing time in seconds.
   * 
   * @example
   * 12
   */
  maxDialingTime?: number;
  /**
   * @remarks
   * The maximum hold time, in seconds.
   * 
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * The maximum ring time, in seconds.
   * 
   * @example
   * 0
   */
  maxRingTime?: number;
  /**
   * @remarks
   * The maximum talk time, in seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum after-call work time, in seconds.
   * 
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The satisfaction index, which is the average value of the satisfaction rating digits.
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The satisfaction rate. Calculation formula: Number of satisfied ratings / Number of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * The number of satisfaction surveys offered.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction surveys responded to.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * The total dialing time in seconds.
   * 
   * @example
   * 218
   */
  totalDialingTime?: number;
  /**
   * @remarks
   * The total hold time, in seconds.
   * 
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * The total ring time, in seconds.
   * 
   * @example
   * 0
   */
  totalRingTime?: number;
  /**
   * @remarks
   * The total talk time, in seconds.
   * 
   * @example
   * 3
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * The total after-call work time, in seconds.
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
   * The break type code.
   * 
   * @example
   * Meeting
   */
  breakCode?: string;
  /**
   * @remarks
   * The number of occurrences of this break type.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The total duration of this break type in seconds.
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
   * The average break time in seconds. Formula: TotalBreakTime/Number of breaks. The number of breaks is not a statistical field returned by the API.
   * 
   * @example
   * 0
   */
  averageBreakTime?: number;
  /**
   * @remarks
   * The average hold time in seconds. Formula: TotalHoldTime/(Inbound CallsHold + Outbound CallsHold).
   * 
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @remarks
   * The average ready time in seconds. Formula: TotalReadyTime/Number of ready states. The number of ready states is not a statistical field returned by the API.
   * 
   * @example
   * 0
   */
  averageReadyTime?: number;
  /**
   * @remarks
   * The average talk time in seconds. Formula: TotalTalkTime/(CallsAnswered + CallsHandled).
   * 
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @remarks
   * The average after-call work time in seconds. Formula: TotalWorkTime/TotalCalls.
   * 
   * @example
   * 8
   */
  averageWorkTime?: number;
  /**
   * @remarks
   * The list of break details.
   */
  breakCodeDetailList?: ListHistoricalSkillGroupReportResponseBodyDataListOverallBreakCodeDetailList[];
  /**
   * @remarks
   * The maximum break time in seconds.
   * 
   * @example
   * 1
   */
  maxBreakTime?: number;
  /**
   * @remarks
   * The maximum hold time, in seconds.
   * 
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @remarks
   * The maximum ready time in seconds.
   * 
   * @example
   * 19328
   */
  maxReadyTime?: number;
  /**
   * @remarks
   * The maximum talk time, in seconds.
   * 
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @remarks
   * The maximum after-call work time, in seconds.
   * 
   * @example
   * 12
   */
  maxWorkTime?: number;
  /**
   * @remarks
   * The agent occupancy rate. Formula: (TotalWorkTime + TotalTalkTime) / TotalLoggedInTime.
   * 
   * @example
   * 0.02332222293912065
   */
  occupancyRate?: number;
  /**
   * @remarks
   * The satisfaction index, which is the average value of the satisfaction rating digits.
   * 
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @remarks
   * The satisfaction rate. Calculation formula: Number of satisfied ratings / Number of satisfaction survey responses.
   * 
   * @example
   * 0
   */
  satisfactionRate?: number;
  /**
   * @remarks
   * The number of satisfaction surveys offered.
   * 
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @remarks
   * The number of satisfaction surveys responded to.
   * 
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @remarks
   * The total break time in seconds.
   * 
   * @example
   * 3
   */
  totalBreakTime?: number;
  /**
   * @remarks
   * The total number of calls. Formula: CallsOffered + CallsDialed.
   * 
   * @example
   * 13
   */
  totalCalls?: number;
  /**
   * @remarks
   * The total hold time in seconds.
   * 
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @remarks
   * The total logged-in time in seconds.
   * _Note: Excludes offline and break time._
   * 
   * @example
   * 23218
   */
  totalLoggedInTime?: number;
  /**
   * @remarks
   * The total ready time in seconds.
   * 
   * @example
   * 22428
   */
  totalReadyTime?: number;
  /**
   * @remarks
   * The total talk time, in seconds.
   * 
   * @example
   * 449
   */
  totalTalkTime?: number;
  /**
   * @remarks
   * The total after-call work time, in seconds.
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
   * The back-to-back call metrics.
   */
  back2Back?: ListHistoricalSkillGroupReportResponseBodyDataListBack2Back;
  /**
   * @remarks
   * The inbound call metrics.
   */
  inbound?: ListHistoricalSkillGroupReportResponseBodyDataListInbound;
  /**
   * @remarks
   * The outbound metrics.
   */
  outbound?: ListHistoricalSkillGroupReportResponseBodyDataListOutbound;
  /**
   * @remarks
   * The overall metrics.
   */
  overall?: ListHistoricalSkillGroupReportResponseBodyDataListOverall;
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The skill group name.
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
   * The list of historical data for the skill group.
   */
  list?: ListHistoricalSkillGroupReportResponseBodyDataList[];
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
   * The number of entries per page. Valid values: 1 to 100.
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
  data?: ListHistoricalSkillGroupReportResponseBodyData;
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
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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

