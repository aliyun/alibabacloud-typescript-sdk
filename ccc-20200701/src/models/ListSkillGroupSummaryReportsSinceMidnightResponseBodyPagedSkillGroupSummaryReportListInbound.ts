// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupSummaryReportsSinceMidnightResponseBodyPagedSkillGroupSummaryReportListInbound extends $dara.Model {
  /**
   * @example
   * 0
   */
  abandonedInQueueOfQueueCount?: number;
  /**
   * @example
   * 0
   */
  answeredByAgentOfQueueCount?: number;
  /**
   * @example
   * 0
   */
  answeredByAgentOfQueueMaxWaitTimeDuration?: number;
  /**
   * @example
   * 0
   */
  answeredByAgentOfQueueWaitTimeDuration?: number;
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
  callsAbandoned?: number;
  /**
   * @example
   * 0
   */
  callsAttendedTransferOut?: number;
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
  callsOffered?: number;
  callsOverflow?: string;
  callsQueuingCanceled?: string;
  callsQueuingFailure?: string;
  callsQueuingRerouted?: string;
  callsQueuingTimeout?: number;
  /**
   * @example
   * 0
   */
  callsServiceLevel10?: number;
  /**
   * @example
   * 0
   */
  callsServiceLevel20?: number;
  /**
   * @example
   * 0
   */
  callsServiceLevel30?: number;
  callsTimeout?: number;
  /**
   * @example
   * 0
   */
  giveUpByAgentOfQueueCount?: number;
  /**
   * @example
   * 0
   */
  handleRate?: number;
  /**
   * @example
   * 0
   */
  inComingQueueOfQueueCount?: number;
  /**
   * @example
   * 0
   */
  maxRingTime?: number;
  /**
   * @example
   * 0
   */
  maxTalkTime?: string;
  /**
   * @example
   * 0
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0
   */
  overFlowInQueueOfQueueCount?: number;
  /**
   * @example
   * 0
   */
  queueMaxWaitTimeDuration?: number;
  /**
   * @example
   * 0
   */
  queueWaitTimeDuration?: number;
  /**
   * @example
   * 0
   */
  satisfactionIndex?: number;
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
  serviceLevel20?: number;
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
      abandonedInQueueOfQueueCount: 'AbandonedInQueueOfQueueCount',
      answeredByAgentOfQueueCount: 'AnsweredByAgentOfQueueCount',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'AnsweredByAgentOfQueueMaxWaitTimeDuration',
      answeredByAgentOfQueueWaitTimeDuration: 'AnsweredByAgentOfQueueWaitTimeDuration',
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsAbandoned: 'CallsAbandoned',
      callsAttendedTransferOut: 'CallsAttendedTransferOut',
      callsBlindTransferOut: 'CallsBlindTransferOut',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      callsOverflow: 'CallsOverflow',
      callsQueuingCanceled: 'CallsQueuingCanceled',
      callsQueuingFailure: 'CallsQueuingFailure',
      callsQueuingRerouted: 'CallsQueuingRerouted',
      callsQueuingTimeout: 'CallsQueuingTimeout',
      callsServiceLevel10: 'CallsServiceLevel10',
      callsServiceLevel20: 'CallsServiceLevel20',
      callsServiceLevel30: 'CallsServiceLevel30',
      callsTimeout: 'CallsTimeout',
      giveUpByAgentOfQueueCount: 'GiveUpByAgentOfQueueCount',
      handleRate: 'HandleRate',
      inComingQueueOfQueueCount: 'InComingQueueOfQueueCount',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
      overFlowInQueueOfQueueCount: 'OverFlowInQueueOfQueueCount',
      queueMaxWaitTimeDuration: 'QueueMaxWaitTimeDuration',
      queueWaitTimeDuration: 'QueueWaitTimeDuration',
      satisfactionIndex: 'SatisfactionIndex',
      satisfactionSurveysOffered: 'SatisfactionSurveysOffered',
      satisfactionSurveysResponded: 'SatisfactionSurveysResponded',
      serviceLevel20: 'ServiceLevel20',
      totalRingTime: 'TotalRingTime',
      totalTalkTime: 'TotalTalkTime',
      totalWorkTime: 'TotalWorkTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonedInQueueOfQueueCount: 'number',
      answeredByAgentOfQueueCount: 'number',
      answeredByAgentOfQueueMaxWaitTimeDuration: 'number',
      answeredByAgentOfQueueWaitTimeDuration: 'number',
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsAbandoned: 'number',
      callsAttendedTransferOut: 'number',
      callsBlindTransferOut: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      callsOverflow: 'string',
      callsQueuingCanceled: 'string',
      callsQueuingFailure: 'string',
      callsQueuingRerouted: 'string',
      callsQueuingTimeout: 'number',
      callsServiceLevel10: 'number',
      callsServiceLevel20: 'number',
      callsServiceLevel30: 'number',
      callsTimeout: 'number',
      giveUpByAgentOfQueueCount: 'number',
      handleRate: 'number',
      inComingQueueOfQueueCount: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'string',
      maxWorkTime: 'number',
      overFlowInQueueOfQueueCount: 'number',
      queueMaxWaitTimeDuration: 'number',
      queueWaitTimeDuration: 'number',
      satisfactionIndex: 'number',
      satisfactionSurveysOffered: 'number',
      satisfactionSurveysResponded: 'number',
      serviceLevel20: 'number',
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

