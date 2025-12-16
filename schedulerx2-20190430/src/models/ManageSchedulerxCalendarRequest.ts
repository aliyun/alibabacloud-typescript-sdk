// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageSchedulerxCalendarRequest extends $dara.Model {
  /**
   * @remarks
   * The calendar name.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025workday
   */
  calendarName?: string;
  /**
   * @remarks
   * Specifies whether to perform an incremental update. Default value: false.
   * 
   * *   false: Updates the specified months and removes configurations for all other months.
   * *   true: Updates only the specified months and preserves existing configurations for other months.
   * 
   * @example
   * false
   */
  incremental?: boolean;
  /**
   * @remarks
   * The month and days.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *   {"month":1,"days":[3,4,5,6,9,10,11,12,13,16,17,18,19,20,28,29,30,31]},
   *   {"month":2,"days":[1,2,3,6,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28]},
   *   {"month":3,"days":[1,2,3,6,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28,29,30,31]},
   *   {"month":4,"days":[3,4,6,7,10,11,12,13,14,17,18,19,20,21,23,24,25,26,27,28]},
   *   {"month":5,"days":[4,5,6,8,9,10,11,12,15,16,17,18,19,22,23,24,25,26,29,30,31]},
   *   {"month":6,"days":[1,2,5,6,7,8,9,12,13,14,15,16,19,20,21,25,26,27,28,29,30]},
   *   {"month":7,"days":[3,4,5,6,7,10,11,12,13,14,17,18,19,20,21,24,25,26,27,28,31]},
   *   {"month":8,"days":[1,2,3,4,7,8,9,10,11,14,15,16,17,18,21,22,23,24,25,28,29,30,31]},
   *   {"month":9,"days":[1,4,5,6,7,8,11,12,13,14,15,18,19,20,21,22,25,26,27,28]},
   *   {"month":10,"days":[7,8,9,10,11,12,13,16,17,18,19,20,23,24,25,26,27,30,31]},
   *   {"month":11,"days":[1,2,3,6,7,8,9,10,13,14,15,16,17,20,21,22,23,24,27,28,29,30]},
   *   {"month":12,"days":[1,4,5,6,7,8,11,12,13,14,15,18,19,20,21,22,25,26,27,28,29]}
   * ]
   */
  monthDaysContent?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The year.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      calendarName: 'CalendarName',
      incremental: 'Incremental',
      monthDaysContent: 'MonthDaysContent',
      regionId: 'RegionId',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarName: 'string',
      incremental: 'boolean',
      monthDaysContent: 'string',
      regionId: 'string',
      year: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

