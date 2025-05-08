// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafTimerWeeklyPeriodsDailyPeriods } from "./WafTimerWeeklyPeriodsDailyPeriods";


export class WafTimerWeeklyPeriods extends $dara.Model {
  dailyPeriods?: WafTimerWeeklyPeriodsDailyPeriods[];
  days?: string;
  static names(): { [key: string]: string } {
    return {
      dailyPeriods: 'DailyPeriods',
      days: 'Days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyPeriods: { 'type': 'array', 'itemType': WafTimerWeeklyPeriodsDailyPeriods },
      days: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dailyPeriods)) {
      $dara.Model.validateArray(this.dailyPeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

