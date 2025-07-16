// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMeetingRoomsRequestMeetingRoomsToAdd extends $dara.Model {
  /**
   * @example
   * 4002fxxxxx
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

export class AddMeetingRoomsRequest extends $dara.Model {
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
  meetingRoomsToAdd?: AddMeetingRoomsRequestMeetingRoomsToAdd[];
  static names(): { [key: string]: string } {
    return {
      calendarId: 'CalendarId',
      eventId: 'EventId',
      meetingRoomsToAdd: 'MeetingRoomsToAdd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarId: 'string',
      eventId: 'string',
      meetingRoomsToAdd: { 'type': 'array', 'itemType': AddMeetingRoomsRequestMeetingRoomsToAdd },
    };
  }

  validate() {
    if(Array.isArray(this.meetingRoomsToAdd)) {
      $dara.Model.validateArray(this.meetingRoomsToAdd);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

