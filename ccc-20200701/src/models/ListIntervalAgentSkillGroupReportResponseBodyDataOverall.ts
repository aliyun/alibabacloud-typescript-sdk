// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList } from "./ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList";


export class ListIntervalAgentSkillGroupReportResponseBodyDataOverall extends $dara.Model {
  /**
   * @example
   * 100
   */
  averageBreakTime?: number;
  /**
   * @example
   * 100
   */
  averageHoldTime?: number;
  /**
   * @example
   * 100
   */
  averageReadyTime?: number;
  /**
   * @example
   * 100
   */
  averageTalkTime?: number;
  /**
   * @example
   * 100
   */
  averageWorkTime?: number;
  breakCodeDetailList?: ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList[];
  /**
   * @example
   * 100
   */
  firstCheckInTime?: number;
  lastCheckOutTime?: number;
  /**
   * @example
   * 100
   */
  lastCheckoutTime?: number;
  /**
   * @example
   * 100
   */
  maxBreakTime?: number;
  /**
   * @example
   * 100
   */
  maxHoldTime?: number;
  /**
   * @example
   * 100
   */
  maxReadyTime?: number;
  /**
   * @example
   * 100
   */
  maxTalkTime?: number;
  /**
   * @example
   * 100
   */
  maxWorkTime?: number;
  /**
   * @example
   * 0.4
   */
  occupancyRate?: number;
  /**
   * @example
   * 1.4
   */
  satisfactionIndex?: number;
  /**
   * @example
   * 100
   */
  satisfactionRate?: number;
  /**
   * @example
   * 100
   */
  satisfactionSurveysOffered?: number;
  /**
   * @example
   * 100
   */
  satisfactionSurveysResponded?: number;
  /**
   * @example
   * 100
   */
  totalBreakTime?: number;
  /**
   * @example
   * 100
   */
  totalCalls?: number;
  /**
   * @example
   * 100
   */
  totalHoldTime?: number;
  /**
   * @example
   * 100
   */
  totalLoggedInTime?: number;
  totalOffSiteLoggedInTime?: string;
  totalOfficePhoneLoggedInTime?: string;
  totalOnSiteLoggedInTime?: string;
  totalOutboundScenarioLoggedInTime?: number;
  /**
   * @example
   * 100
   */
  totalOutboundScenarioReadyTime?: number;
  /**
   * @example
   * 100
   */
  totalOutboundScenarioTime?: number;
  /**
   * @example
   * 100
   */
  totalReadyTime?: number;
  /**
   * @example
   * 100
   */
  totalTalkTime?: number;
  /**
   * @example
   * 100
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
      firstCheckInTime: 'FirstCheckInTime',
      lastCheckOutTime: 'LastCheckOutTime',
      lastCheckoutTime: 'LastCheckoutTime',
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
      totalOffSiteLoggedInTime: 'TotalOffSiteLoggedInTime',
      totalOfficePhoneLoggedInTime: 'TotalOfficePhoneLoggedInTime',
      totalOnSiteLoggedInTime: 'TotalOnSiteLoggedInTime',
      totalOutboundScenarioLoggedInTime: 'TotalOutboundScenarioLoggedInTime',
      totalOutboundScenarioReadyTime: 'TotalOutboundScenarioReadyTime',
      totalOutboundScenarioTime: 'TotalOutboundScenarioTime',
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
      breakCodeDetailList: { 'type': 'array', 'itemType': ListIntervalAgentSkillGroupReportResponseBodyDataOverallBreakCodeDetailList },
      firstCheckInTime: 'number',
      lastCheckOutTime: 'number',
      lastCheckoutTime: 'number',
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
      totalOffSiteLoggedInTime: 'string',
      totalOfficePhoneLoggedInTime: 'string',
      totalOnSiteLoggedInTime: 'string',
      totalOutboundScenarioLoggedInTime: 'number',
      totalOutboundScenarioReadyTime: 'number',
      totalOutboundScenarioTime: 'number',
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

