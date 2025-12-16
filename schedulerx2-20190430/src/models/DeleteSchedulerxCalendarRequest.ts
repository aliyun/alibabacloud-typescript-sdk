// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSchedulerxCalendarRequest extends $dara.Model {
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
      regionId: 'RegionId',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarName: 'string',
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

