// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * primary
   */
  calendarId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 311525211
   */
  eventId?: string;
  /**
   * @example
   * 100
   */
  maxAttendees?: number;
  static names(): { [key: string]: string } {
    return {
      calendarId: 'CalendarId',
      eventId: 'EventId',
      maxAttendees: 'MaxAttendees',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarId: 'string',
      eventId: 'string',
      maxAttendees: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

