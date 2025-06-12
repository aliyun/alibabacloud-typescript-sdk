// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSummaryReportsSinceMidnightResponseBodyPagedAgentSummaryReportListInbound extends $dara.Model {
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
  callsHandled?: number;
  /**
   * @example
   * 0
   */
  callsOffered?: number;
  /**
   * @example
   * 0
   */
  handleRate?: number;
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
      averageRingTime: 'AverageRingTime',
      averageTalkTime: 'AverageTalkTime',
      averageWorkTime: 'AverageWorkTime',
      callsHandled: 'CallsHandled',
      callsOffered: 'CallsOffered',
      handleRate: 'HandleRate',
      maxRingTime: 'MaxRingTime',
      maxTalkTime: 'MaxTalkTime',
      maxWorkTime: 'MaxWorkTime',
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
      averageRingTime: 'number',
      averageTalkTime: 'number',
      averageWorkTime: 'number',
      callsHandled: 'number',
      callsOffered: 'number',
      handleRate: 'number',
      maxRingTime: 'number',
      maxTalkTime: 'number',
      maxWorkTime: 'number',
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

