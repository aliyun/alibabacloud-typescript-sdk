// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHistoricalSkillGroupReportResponseBodyDataListInboundAccessChannelTypeDetails } from "./ListHistoricalSkillGroupReportResponseBodyDataListInboundAccessChannelTypeDetails";


export class ListHistoricalSkillGroupReportResponseBodyDataListInbound extends $dara.Model {
  /**
   * @example
   * 0
   */
  abandonRate?: number;
  accessChannelTypeDetails?: ListHistoricalSkillGroupReportResponseBodyDataListInboundAccessChannelTypeDetails[];
  /**
   * @example
   * 0
   */
  averageAbandonTime?: number;
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
   * 5
   */
  averageRingTime?: number;
  /**
   * @example
   * 64
   */
  averageTalkTime?: number;
  /**
   * @example
   * 5
   */
  averageWaitTime?: number;
  /**
   * @example
   * 13
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
  callsAttendedTransferIn?: number;
  /**
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferIn?: number;
  /**
   * @example
   * 0
   */
  callsBlindTransferOut?: number;
  /**
   * @example
   * 7
   */
  callsHandled?: number;
  /**
   * @example
   * 0
   */
  callsHold?: number;
  /**
   * @example
   * 7
   */
  callsOffered?: number;
  /**
   * @example
   * 0
   */
  callsOverflow?: number;
  /**
   * @example
   * 7
   */
  callsQueued?: number;
  callsQueuingFailed?: number;
  callsQueuingOverflow?: number;
  callsQueuingTimeout?: number;
  /**
   * @example
   * 7
   */
  callsRinged?: number;
  /**
   * @example
   * 0
   */
  callsTimeout?: number;
  /**
   * @example
   * 1
   */
  handleRate?: number;
  /**
   * @example
   * 0
   */
  maxAbandonTime?: number;
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
   * 12
   */
  maxRingTime?: number;
  /**
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @example
   * 13
   */
  maxWaitTime?: number;
  /**
   * @example
   * 12
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
   * 32
   */
  totalRingTime?: number;
  /**
   * @example
   * 447
   */
  totalTalkTime?: number;
  /**
   * @example
   * 34
   */
  totalWaitTime?: number;
  /**
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

