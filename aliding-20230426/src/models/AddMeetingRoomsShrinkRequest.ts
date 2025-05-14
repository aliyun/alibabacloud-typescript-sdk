// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMeetingRoomsShrinkRequest extends $dara.Model {
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
   * U5Kxxxxx
   */
  eventId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  meetingRoomsToAddShrink?: string;
  static names(): { [key: string]: string } {
    return {
      calendarId: 'CalendarId',
      eventId: 'EventId',
      meetingRoomsToAddShrink: 'MeetingRoomsToAdd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarId: 'string',
      eventId: 'string',
      meetingRoomsToAddShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

