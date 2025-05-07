// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateApplicationScalingRuleResponseBodyDataTimerSchedules } from "./CreateApplicationScalingRuleResponseBodyDataTimerSchedules";


export class CreateApplicationScalingRuleResponseBodyDataTimer extends $dara.Model {
  /**
   * @example
   * 2021-03-25
   */
  beginDate?: string;
  /**
   * @example
   * 2021-04-25
   */
  endDate?: string;
  /**
   * @example
   * * * *
   */
  period?: string;
  schedules?: CreateApplicationScalingRuleResponseBodyDataTimerSchedules[];
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      period: 'Period',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      period: 'string',
      schedules: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyDataTimerSchedules },
    };
  }

  validate() {
    if(Array.isArray(this.schedules)) {
      $dara.Model.validateArray(this.schedules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

