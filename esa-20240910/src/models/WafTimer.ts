// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafTimerPeriods extends $dara.Model {
  /**
   * @remarks
   * The end time in RFC 3339 UTC format.
   * 
   * @example
   * 2025-01-01T01:00:00Z
   */
  end?: string;
  /**
   * @remarks
   * The start time in RFC 3339 UTC format.
   * 
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
   * @remarks
   * The end time in HH:mm:ss format.
   * 
   * @example
   * 01:00:00
   */
  end?: string;
  /**
   * @remarks
   * The start time in HH:mm:ss format.
   * 
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
  /**
   * @remarks
   * The effective period within the epoch.
   */
  dailyPeriods?: WafTimerWeeklyPeriodsDailyPeriods[];
  /**
   * @remarks
   * The days of the week, separated by commas. Values 1-7 represent Monday through Sunday.<br>Example: Monday and Wednesday is "1,3".
   * 
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
  /**
   * @remarks
   * The effective periods.
   */
  periods?: WafTimerPeriods[];
  /**
   * @remarks
   * The timer type: permanently effective (permanent/empty), effective during time periods (periods), or periodically effective (weekly).
   * 
   * @example
   * permanent
   */
  scopes?: string;
  /**
   * @remarks
   * The weekly effective periods.
   */
  weeklyPeriods?: WafTimerWeeklyPeriods[];
  /**
   * @remarks
   * The time zone. Default value: UTC+00:00.<br>Example: 8 indicates UTC+8, -8 indicates UTC-8.<br>Valid range: -12 to +14.
   * 
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

