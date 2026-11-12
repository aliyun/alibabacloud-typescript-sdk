// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCalendarsRequest extends $dara.Model {
  /**
   * @remarks
   * The calendar name.
   * 
   * @example
   * workday
   */
  calendarName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to retrieve calendar details. Default value: false.
   * - false: The detailed list of days for each month is not returned. Only basic information is returned.
   * - true: The detailed list of days for each month is returned.
   * 
   * @example
   * false
   */
  fetchCalendarDetail?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return for the current request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the position where the current call starts to read data. An empty value indicates that all data has been read. You do not need to specify this parameter for the first query.
   * 
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The year.
   * 
   * @example
   * 2024
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      calendarName: 'CalendarName',
      clusterId: 'ClusterId',
      fetchCalendarDetail: 'FetchCalendarDetail',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarName: 'string',
      clusterId: 'string',
      fetchCalendarDetail: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
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

