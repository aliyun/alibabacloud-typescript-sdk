// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoricalInstanceReportResponseBodyDataInboundAccessChannelTypeDetailList extends $dara.Model {
  accessChannelType?: string;
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
   * @example
   * 0
   */
  abandonRate?: number;
  accessChannelTypeDetailList?: GetHistoricalInstanceReportResponseBodyDataInboundAccessChannelTypeDetailList[];
  /**
   * @example
   * 0
   */
  averageAbandonTime?: number;
  /**
   * @example
   * 0
   */
  averageAbandonedInIVRTime?: number;
  /**
   * @example
   * 0
   */
  averageAbandonedInQueueTime?: number;
  /**
   * @example
   * 0
   */
  averageAbandonedInRingTime?: number;
  averageFirstResponseTime?: number;
  /**
   * @example
   * 0
   */
  averageHoldTime?: number;
  averageResponseTime?: number;
  /**
   * @example
   * 0
   */
  averageRingTime?: number;
  /**
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @example
   * 0
   */
  averageWaitTime?: number;
  /**
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @example
   * 0
   */
  callsAbandoned?: number;
  /**
   * @example
   * 0
   */
  callsAbandonedInIVR?: number;
  /**
   * @example
   * 0
   */
  callsAbandonedInQueue?: number;
  /**
   * @example
   * 0
   */
  callsAbandonedInRing?: number;
  /**
   * @example
   * 0
   */
  callsAbandonedInVoiceNavigator?: number;
  /**
   * @example
   * 0
   */
  callsAttendedTransferred?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferred?: number;
  callsCausedIVRException?: number;
  /**
   * @example
   * 0
   */
  callsForwardToOutsideNumber?: number;
  /**
   * @example
   * 0
   */
  callsHandled?: number;
  /**
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @example
   * 0
   */
  callsIVRException?: number;
  /**
   * @example
   * 0
   */
  callsOffered?: number;
  /**
   * @example
   * 0
   */
  callsQueued?: number;
  /**
   * @example
   * 0
   */
  callsQueuingFailed?: number;
  /**
   * @example
   * 0
   */
  callsQueuingOverflow?: number;
  /**
   * @example
   * 0
   */
  callsQueuingTimeout?: number;
  /**
   * @example
   * 0
   */
  callsRinged?: number;
  callsToVoicemail?: number;
  /**
   * @example
   * 0
   */
  callsVoicemail?: number;
  /**
   * @example
   * 0
   */
  handleRate?: number;
  /**
   * @example
   * 0
   */
  maxAbandonTime?: number;
  /**
   * @example
   * 100
   */
  maxAbandonedInIVRTime?: number;
  /**
   * @example
   * 0
   */
  maxAbandonedInQueueTime?: number;
  /**
   * @example
   * 0
   */
  maxAbandonedInRingTime?: number;
  /**
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @example
   * 0
   */
  maxRingTime?: number;
  /**
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @example
   * 0
   */
  maxWaitTime?: number;
  /**
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 0
   */
  satisfactionRate?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  serviceLevel15?: number;
  /**
   * @example
   * 0
   */
  serviceLevel20?: number;
  serviceLevel30?: number;
  /**
   * @example
   * 0
   */
  totalAbandonTime?: number;
  /**
   * @example
   * 0
   */
  totalAbandonedInIVRTime?: number;
  /**
   * @example
   * 0
   */
  totalAbandonedInQueueTime?: number;
  /**
   * @example
   * 0
   */
  totalAbandonedInRingTime?: number;
  /**
   * @example
   * 0
   */
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: number;
  /**
   * @example
   * 0
   */
  totalRingTime?: number;
  /**
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @example
   * 0
   */
  totalWaitTime?: number;
  /**
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
  callsAnswered?: number;
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
   * @example
   * 0
   */
  answerRate?: number;
  /**
   * @example
   * 0
   */
  averageDialingTime?: number;
  /**
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @example
   * 0
   */
  averageRingTime?: number;
  /**
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @example
   * 0
   */
  callsAnswered?: number;
  /**
   * @example
   * 0
   */
  callsAttendedTransferred?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferred?: number;
  /**
   * @example
   * 0
   */
  callsDialed?: number;
  /**
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @example
   * 0
   */
  callsRinged?: number;
  /**
   * @example
   * 0
   */
  maxDialingTime?: number;
  /**
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @example
   * 0
   */
  maxRingTime?: number;
  /**
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 0
   */
  satisfactionRate?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @example
   * 0
   */
  totalDialingTime?: number;
  /**
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @example
   * 0
   */
  totalRingTime?: number;
  /**
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
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
   * @example
   * 0
   */
  averageBreakTime?: number;
  /**
   * @example
   * 0
   */
  averageHoldTime?: number;
  /**
   * @example
   * 0
   */
  averageReadyTime?: number;
  /**
   * @example
   * 0
   */
  averageTalkTime?: number;
  /**
   * @example
   * 0
   */
  averageWorkTime?: number;
  /**
   * @example
   * 0
   */
  maxBreakTime?: number;
  /**
   * @example
   * 0
   */
  maxHoldTime?: number;
  maxLoggedInAgents?: number;
  /**
   * @example
   * 0
   */
  maxReadyTime?: number;
  /**
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0
   */
  occupancyRate?: number;
  /**
   * @example
   * 0
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 0
   */
  satisfactionRate?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 0
   */
  satisfactionSurveysResponded?: number;
  /**
   * @example
   * 0
   */
  totalBreakTime?: number;
  /**
   * @example
   * 0
   */
  totalCalls?: number;
  /**
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @example
   * 0
   */
  totalLoggedInTime?: number;
  /**
   * @example
   * 0
   */
  totalReadyTime?: number;
  /**
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
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
  inbound?: GetHistoricalInstanceReportResponseBodyDataInbound;
  internal?: GetHistoricalInstanceReportResponseBodyDataInternal;
  outbound?: GetHistoricalInstanceReportResponseBodyDataOutbound;
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
   * @example
   * OK
   */
  code?: string;
  data?: GetHistoricalInstanceReportResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

