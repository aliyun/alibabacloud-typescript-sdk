// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCalendarsRequest extends $dara.Model {
  /**
   * @example
   * workday
   */
  calendarName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * false
   */
  fetchCalendarDetail?: boolean;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
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

