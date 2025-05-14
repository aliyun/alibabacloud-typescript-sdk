// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAttendeeShrinkRequest extends $dara.Model {
  attendeesToRemoveShrink?: string;
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
      attendeesToRemoveShrink: 'AttendeesToRemove',
      calendarId: 'CalendarId',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendeesToRemoveShrink: 'string',
      calendarId: 'string',
      eventId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

