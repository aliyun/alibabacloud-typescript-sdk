// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PatchEventRequestAttendees } from "./PatchEventRequestAttendees";
import { PatchEventRequestCardInstances } from "./PatchEventRequestCardInstances";
import { PatchEventRequestEnd } from "./PatchEventRequestEnd";
import { PatchEventRequestLocation } from "./PatchEventRequestLocation";
import { PatchEventRequestRecurrence } from "./PatchEventRequestRecurrence";
import { PatchEventRequestReminders } from "./PatchEventRequestReminders";
import { PatchEventRequestStart } from "./PatchEventRequestStart";


export class PatchEventRequest extends $dara.Model {
  attendees?: PatchEventRequestAttendees[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * primary
   */
  calendarId?: string;
  cardInstances?: PatchEventRequestCardInstances[];
  description?: string;
  end?: PatchEventRequestEnd;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * iiiP35sJadba8aBSgjrwPRKgiEiF
   */
  eventId?: string;
  extra?: { [key: string]: string };
  /**
   * @example
   * true
   */
  isAllDay?: boolean;
  location?: PatchEventRequestLocation;
  recurrence?: PatchEventRequestRecurrence;
  reminders?: PatchEventRequestReminders[];
  start?: PatchEventRequestStart;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      attendees: 'Attendees',
      calendarId: 'CalendarId',
      cardInstances: 'CardInstances',
      description: 'Description',
      end: 'End',
      eventId: 'EventId',
      extra: 'Extra',
      isAllDay: 'IsAllDay',
      location: 'Location',
      recurrence: 'Recurrence',
      reminders: 'Reminders',
      start: 'Start',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendees: { 'type': 'array', 'itemType': PatchEventRequestAttendees },
      calendarId: 'string',
      cardInstances: { 'type': 'array', 'itemType': PatchEventRequestCardInstances },
      description: 'string',
      end: PatchEventRequestEnd,
      eventId: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isAllDay: 'boolean',
      location: PatchEventRequestLocation,
      recurrence: PatchEventRequestRecurrence,
      reminders: { 'type': 'array', 'itemType': PatchEventRequestReminders },
      start: PatchEventRequestStart,
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attendees)) {
      $dara.Model.validateArray(this.attendees);
    }
    if(Array.isArray(this.cardInstances)) {
      $dara.Model.validateArray(this.cardInstances);
    }
    if(this.end && typeof (this.end as any).validate === 'function') {
      (this.end as any).validate();
    }
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(this.recurrence && typeof (this.recurrence as any).validate === 'function') {
      (this.recurrence as any).validate();
    }
    if(Array.isArray(this.reminders)) {
      $dara.Model.validateArray(this.reminders);
    }
    if(this.start && typeof (this.start as any).validate === 'function') {
      (this.start as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

