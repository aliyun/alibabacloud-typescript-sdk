// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAttendeeRequestAttendeesToAdd extends $dara.Model {
  id?: string;
  isOptional?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isOptional: 'isOptional',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isOptional: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAttendeeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attendeesToAdd?: AddAttendeeRequestAttendeesToAdd[];
  /**
   * @remarks
   * This parameter is required.
   */
  calendarId?: string;
  /**
   * @remarks
   * This parameter is required.
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

