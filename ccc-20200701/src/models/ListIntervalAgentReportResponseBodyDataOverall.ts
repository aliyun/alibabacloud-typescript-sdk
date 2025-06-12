// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIntervalAgentReportResponseBodyDataOverallBreakCodeDetailList } from "./ListIntervalAgentReportResponseBodyDataOverallBreakCodeDetailList";


export class ListIntervalAgentReportResponseBodyDataOverall extends $dara.Model {
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
   * 1
   */
  averageWorkTime?: number;
  breakCodeDetailList?: ListIntervalAgentReportResponseBodyDataOverallBreakCodeDetailList[];
  /**
   * @example
   * 0
   */
  firstCheckInTime?: number;
  lastCheckOutTime?: number;
  /**
   * @example
   * 0
   */
  lastCheckoutTime?: number;
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
   * 435
   */
  maxReadyTime?: number;
  /**
   * @example
   * 0
   */
  maxTalkTime?: number;
  /**
   * @example
   * 2
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
   * 1
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
   * 914
   */
  totalLoggedInTime?: number;
  totalOffSiteLoggedInTime?: number;
  /**
   * @example
   * 已弃用，请使用TotalOffSiteLoggedInTime代替此参数
   */
  totalOffSiteOnlineTime?: number;
  totalOfficePhoneLoggedInTime?: number;
  /**
   * @example
   * 已弃用，请使用TotalOfficePhoneLoggedInTime代替此参数
   */
  totalOfficePhoneOnlineTime?: number;
  totalOnSiteLoggedInTime?: number;
  /**
   * @example
   * 已弃用，请使用TotalOnSiteLoggedInTime代替此参数
   */
  totalOnSiteOnlineTime?: number;
  totalOutboundScenarioLoggedInTime?: number;
  totalOutboundScenarioReadyTime?: number;
  /**
   * @example
   * 已弃用，请使用TotalOutboundScenarioLoggedInTime代替此参数
   */
  totalOutboundScenarioTime?: number;
  /**
   * @example
   * 763
   */
  totalReadyTime?: number;
  /**
   * @example
   * 0
   */
  totalTalkTime?: number;
  /**
   * @example
   * 4
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
      totalOffSiteOnlineTime: 'TotalOffSiteOnlineTime',
      totalOfficePhoneLoggedInTime: 'TotalOfficePhoneLoggedInTime',
      totalOfficePhoneOnlineTime: 'TotalOfficePhoneOnlineTime',
      totalOnSiteLoggedInTime: 'TotalOnSiteLoggedInTime',
      totalOnSiteOnlineTime: 'TotalOnSiteOnlineTime',
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
      breakCodeDetailList: { 'type': 'array', 'itemType': ListIntervalAgentReportResponseBodyDataOverallBreakCodeDetailList },
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
      totalOffSiteLoggedInTime: 'number',
      totalOffSiteOnlineTime: 'number',
      totalOfficePhoneLoggedInTime: 'number',
      totalOfficePhoneOnlineTime: 'number',
      totalOnSiteLoggedInTime: 'number',
      totalOnSiteOnlineTime: 'number',
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

