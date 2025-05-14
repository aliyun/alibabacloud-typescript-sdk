// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsViewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * primary
   */
  calendarId?: string;
  /**
   * @example
   * 100
   */
  maxAttendees?: number;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * cnNTbW1xxx
   */
  nextToken?: string;
  /**
   * @example
   * 2022-11-28T00:00:00+08:00
   */
  timeMax?: string;
  /**
   * @example
   * 2022-11-27T00:00:00+08:00
   */
  timeMin?: string;
  static names(): { [key: string]: string } {
    return {
      calendarId: 'CalendarId',
      maxAttendees: 'MaxAttendees',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      timeMax: 'TimeMax',
      timeMin: 'TimeMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarId: 'string',
      maxAttendees: 'number',
      maxResults: 'number',
      nextToken: 'string',
      timeMax: 'string',
      timeMin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

