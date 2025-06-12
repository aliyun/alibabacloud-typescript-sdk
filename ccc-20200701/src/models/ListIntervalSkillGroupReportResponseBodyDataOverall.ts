// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIntervalSkillGroupReportResponseBodyDataOverallBreakCodeDetailList } from "./ListIntervalSkillGroupReportResponseBodyDataOverallBreakCodeDetailList";


export class ListIntervalSkillGroupReportResponseBodyDataOverall extends $dara.Model {
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
   * 6
   */
  averageWorkTime?: number;
  breakCodeDetailList?: ListIntervalSkillGroupReportResponseBodyDataOverallBreakCodeDetailList[];
  /**
   * @example
   * 1
   */
  maxBreakTime?: number;
  /**
   * @example
   * 0
   */
  maxHoldTime?: number;
  /**
   * @example
   * 4927
   */
  maxReadyTime?: number;
  /**
   * @example
   * 6
   */
  maxTalkTime?: number;
  /**
   * @example
   * 19
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0.00422315148470254
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
   * 5
   */
  totalBreakTime?: number;
  /**
   * @example
   * 5
   */
  totalCalls?: number;
  /**
   * @example
   * 0
   */
  totalHoldTime?: number;
  /**
   * @example
   * 9236
   */
  totalLoggedInTime?: number;
  /**
   * @example
   * 9106
   */
  totalReadyTime?: number;
  /**
   * @example
   * 13
   */
  totalTalkTime?: number;
  /**
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

