// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCalendarsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the calendar.
   * 
   * @example
   * workday
   */
  calendarName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to return calendar details. The default value is `false`.
   * 
   * - `false`: Does not return the detailed list of days for each month. Only basic information is returned.
   * 
   * - `true`: Returns the detailed list of days for each month.
   * 
   * @example
   * false
   */
  fetchCalendarDetail?: boolean;
  /**
   * @remarks
   * The maximum number of entries returned per page. The default value is 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. Set this parameter to the `NextToken` value from the previous response. Omit this parameter for the first request.
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

