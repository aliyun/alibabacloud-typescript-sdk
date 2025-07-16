// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveMeetingRoomsRequestMeetingRoomsToRemove extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * U5Kxxxxx
   */
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMeetingRoomsRequest extends $dara.Model {
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
  meetingRoomsToRemove?: RemoveMeetingRoomsRequestMeetingRoomsToRemove[];
  static names(): { [key: string]: string } {
    return {
      calendarId: 'CalendarId',
      eventId: 'EventId',
      meetingRoomsToRemove: 'MeetingRoomsToRemove',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarId: 'string',
      eventId: 'string',
      meetingRoomsToRemove: { 'type': 'array', 'itemType': RemoveMeetingRoomsRequestMeetingRoomsToRemove },
    };
  }

  validate() {
    if(Array.isArray(this.meetingRoomsToRemove)) {
      $dara.Model.validateArray(this.meetingRoomsToRemove);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

