// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAttendeeRequest extends $dara.Model {
  attendeesToRemove?: string[];
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
   * iiiP35sJadba8aBSgjrwPRKgiEiF
   */
  eventId?: string;
  static names(): { [key: string]: string } {
    return {
      attendeesToRemove: 'AttendeesToRemove',
      calendarId: 'CalendarId',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendeesToRemove: { 'type': 'array', 'itemType': 'string' },
      calendarId: 'string',
      eventId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attendeesToRemove)) {
      $dara.Model.validateArray(this.attendeesToRemove);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

