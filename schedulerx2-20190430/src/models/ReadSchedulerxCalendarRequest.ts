// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadSchedulerxCalendarRequest extends $dara.Model {
  /**
   * @remarks
   * The calendar name.
   * 
   * @example
   * 2025workday
   */
  calendarName?: string;
  /**
   * @remarks
   * Specifies whether to retrieve calendar details. The default value is false.
   * 
   * *   false: Returns only basic information without the detailed list of days for each month.
   * *   true: Returns the detailed list of days for each month.
   * 
   * @example
   * false
   */
  fetchCalendarDetail?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve system calendars. The default value is false.
   * 
   * *   false: Returns only user-defined calendars.
   * *   true: Returns both system calendars and user-defined calendars.
   * 
   * @example
   * false
   */
  fetchSystemCalendar?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return on this call. The default value is 20.
   * 
   * @example
   * 15
   */
  maxResults?: number;
  /**
   * @remarks
   * A token that specifies the starting position for retrieving the next page of data. You do not need to provide this parameter for the first request. An empty value indicates that all data has been read.
   * 
   * @example
   * AAAAAdYzT97YjSXWT8TQmxIAI5g=
   */
  nextToken?: string;
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
   * @example
   * 2025
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      calendarName: 'CalendarName',
      fetchCalendarDetail: 'FetchCalendarDetail',
      fetchSystemCalendar: 'FetchSystemCalendar',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarName: 'string',
      fetchCalendarDetail: 'boolean',
      fetchSystemCalendar: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
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

