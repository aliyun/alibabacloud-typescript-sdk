// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddAttendeeRequestAttendeesToAdd } from "./AddAttendeeRequestAttendeesToAdd";


export class AddAttendeeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attendeesToAdd?: AddAttendeeRequestAttendeesToAdd[];
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
   * cnNTbW1YbU9sL2p6aFJZdEgvdlQrQT08
   */
  eventId?: string;
  chatNotification?: boolean;
  pushNotification?: boolean;
  static names(): { [key: string]: string } {
    return {
      attendeesToAdd: 'AttendeesToAdd',
      calendarId: 'CalendarId',
      eventId: 'EventId',
      chatNotification: 'chatNotification',
      pushNotification: 'pushNotification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendeesToAdd: { 'type': 'array', 'itemType': AddAttendeeRequestAttendeesToAdd },
      calendarId: 'string',
      eventId: 'string',
      chatNotification: 'boolean',
      pushNotification: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.attendeesToAdd)) {
      $dara.Model.validateArray(this.attendeesToAdd);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

