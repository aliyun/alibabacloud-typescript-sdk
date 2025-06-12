// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHistoricalAgentReportResponseBodyDataListInboundAccessChannelTypeDetails } from "./ListHistoricalAgentReportResponseBodyDataListInboundAccessChannelTypeDetails";


export class ListHistoricalAgentReportResponseBodyDataListInbound extends $dara.Model {
  accessChannelTypeDetails?: ListHistoricalAgentReportResponseBodyDataListInboundAccessChannelTypeDetails[];
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
  averageWorkTime?: number;
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
  callsOffered?: number;
  /**
   * @example
   * 0
   */
  callsRinged?: number;
  /**
   * @example
   * 0
   */
  handleRate?: number;
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
  serviceLevel15?: number;
  /**
   * @example
   * 0
   */
  totalHoldTime?: number;
  totalMessagesSent?: number;
  totalMessagesSentByAgent?: number;
  totalMessagesSentByCustomer?: string;
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
      accessChannelTypeDetails: { 'type': 'array', 'itemType': ListHistoricalAgentReportResponseBodyDataListInboundAccessChannelTypeDetails },
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
      totalMessagesSentByCustomer: 'string',
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

