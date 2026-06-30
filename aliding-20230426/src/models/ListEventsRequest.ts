// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  calendarId?: string;
  maxAttendees?: number;
  maxResults?: number;
  nextToken?: string;
  seriesMasterId?: string;
  showDeleted?: boolean;
  syncToken?: string;
  timeMax?: string;
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

