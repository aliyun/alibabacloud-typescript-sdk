// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafTimerPeriods extends $dara.Model {
  /**
   * @example
   * 2025-01-01T01:00:00Z
   */
  end?: string;
  /**
   * @example
   * 2025-01-01T00:00:00Z
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafTimerWeeklyPeriodsDailyPeriods extends $dara.Model {
  /**
   * @example
   * 01:00:00
   */
  end?: string;
  /**
   * @example
   * 00:00:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafTimerWeeklyPeriods extends $dara.Model {
  dailyPeriods?: WafTimerWeeklyPeriodsDailyPeriods[];
  /**
   * @example
   * 1
   */
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

export class WafTimer extends $dara.Model {
  periods?: WafTimerPeriods[];
  /**
   * @example
   * permanent
   */
  scopes?: string;
  weeklyPeriods?: WafTimerWeeklyPeriods[];
  /**
   * @example
   * 8
   */
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

