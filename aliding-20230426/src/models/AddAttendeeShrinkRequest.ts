// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAttendeeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attendeesToAddShrink?: string;
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
      attendeesToAddShrink: 'AttendeesToAdd',
      calendarId: 'CalendarId',
      eventId: 'EventId',
      chatNotification: 'chatNotification',
      pushNotification: 'pushNotification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendeesToAddShrink: 'string',
      calendarId: 'string',
      eventId: 'string',
      chatNotification: 'boolean',
      pushNotification: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

