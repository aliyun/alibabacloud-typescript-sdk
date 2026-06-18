// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafTimerPeriods extends $dara.Model {
  /**
   * @remarks
   * 结束时间，值为RFC3339格式的UTC时间。
   * 
   * @example
   * 2025-01-01T01:00:00Z
   */
  end?: string;
  /**
   * @remarks
   * 起始时间，值为RFC3339格式的UTC时间。
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
   * 结束时间，格式为HH:mm:ss。
   * 
   * @example
   * 01:00:00
   */
  end?: string;
  /**
   * @remarks
   * 起始时间，格式为HH:mm:ss。
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
   * 该周期内的生效时间。
   */
  dailyPeriods?: WafTimerWeeklyPeriodsDailyPeriods[];
  /**
   * @remarks
   * 周期，多个使用逗号分隔，1-7分别代表周一-周日。<br>例：周一，周三值为"1,3"。
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
   * 生效时间段。
   */
  periods?: WafTimerPeriods[];
  /**
   * @remarks
   * 定时类型：永久生效（permanent/<空>）/时间段生效（periods）/weekly（周期生效）。
   * 
   * @example
   * permanent
   */
  scopes?: string;
  /**
   * @remarks
   * 每周生效时间段。
   */
  weeklyPeriods?: WafTimerWeeklyPeriods[];
  /**
   * @remarks
   * 时区，不填则默认为UTC+00:00。<br>例：8表示东8区，-8表示西8区<br>范围：-12 - +14。
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

