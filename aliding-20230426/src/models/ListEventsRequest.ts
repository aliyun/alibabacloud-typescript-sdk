// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsRequest extends $dara.Model {
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
   * cnNTbW1YbxxxxdlQrQT09
   */
  nextToken?: string;
  /**
   * @example
   * cnNTbWxxxxaFJZdEgvdlQrQT09
   */
  seriesMasterId?: string;
  /**
   * @example
   * true
   */
  showDeleted?: boolean;
  /**
   * @example
   * zxcasdfvc000009
   */
  syncToken?: string;
  /**
   * @example
   * 2023-06-21T00:00:00+08:00
   */
  timeMax?: string;
  /**
   * @example
   * 2023-06-20T00:00:00+08:00
   */
  timeMin?: string;
  static names(): { [key: string]: string } {
    return {
      calendarId: 'CalendarId',
      maxAttendees: 'MaxAttendees',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      seriesMasterId: 'SeriesMasterId',
      showDeleted: 'ShowDeleted',
      syncToken: 'SyncToken',
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
      seriesMasterId: 'string',
      showDeleted: 'boolean',
      syncToken: 'string',
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

