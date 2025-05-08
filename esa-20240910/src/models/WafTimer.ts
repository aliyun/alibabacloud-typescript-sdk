// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafTimerPeriods } from "./WafTimerPeriods";
import { WafTimerWeeklyPeriods } from "./WafTimerWeeklyPeriods";


export class WafTimer extends $dara.Model {
  periods?: WafTimerPeriods[];
  scopes?: string;
  weeklyPeriods?: WafTimerWeeklyPeriods[];
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      periods: 'Periods',
      scopes: 'Scopes',
      weeklyPeriods: 'WeeklyPeriods',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periods: { 'type': 'array', 'itemType': WafTimerPeriods },
      scopes: 'string',
      weeklyPeriods: { 'type': 'array', 'itemType': WafTimerWeeklyPeriods },
      zone: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.periods)) {
      $dara.Model.validateArray(this.periods);
    }
    if(Array.isArray(this.weeklyPeriods)) {
      $dara.Model.validateArray(this.weeklyPeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

