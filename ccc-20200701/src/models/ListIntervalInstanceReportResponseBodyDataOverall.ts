// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalInstanceReportResponseBodyDataOverall extends $dara.Model {
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

