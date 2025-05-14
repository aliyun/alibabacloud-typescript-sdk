// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PatchEventResponseBodyAttendees } from "./PatchEventResponseBodyAttendees";
import { PatchEventResponseBodyEnd } from "./PatchEventResponseBodyEnd";
import { PatchEventResponseBodyLocation } from "./PatchEventResponseBodyLocation";
import { PatchEventResponseBodyOrganizer } from "./PatchEventResponseBodyOrganizer";
import { PatchEventResponseBodyRecurrence } from "./PatchEventResponseBodyRecurrence";
import { PatchEventResponseBodyReminders } from "./PatchEventResponseBodyReminders";
import { PatchEventResponseBodyStart } from "./PatchEventResponseBodyStart";


export class PatchEventResponseBody extends $dara.Model {
  attendees?: PatchEventResponseBodyAttendees[];
  /**
   * @example
   * 2022-10-25T02:26:14Z
   */
  createTime?: string;
  description?: string;
  end?: PatchEventResponseBodyEnd;
  /**
   * @example
   * 123456
   */
  id?: string;
  /**
   * @example
   * true
   */
  isAllDay?: boolean;
  location?: PatchEventResponseBodyLocation;
  organizer?: PatchEventResponseBodyOrganizer;
  recurrence?: PatchEventResponseBodyRecurrence;
  reminders?: PatchEventResponseBodyReminders[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 4248DCC9-785F-5A14-8BE0-830FD52E1261
   */
  requestId?: string;
  start?: PatchEventResponseBodyStart;
  summary?: string;
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      attendees: 'attendees',
      createTime: 'createTime',
      description: 'description',
      end: 'end',
      id: 'id',
      isAllDay: 'isAllDay',
      location: 'location',
      organizer: 'organizer',
      recurrence: 'recurrence',
      reminders: 'reminders',
      requestId: 'requestId',
      start: 'start',
      summary: 'summary',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendees: { 'type': 'array', 'itemType': PatchEventResponseBodyAttendees },
      createTime: 'string',
      description: 'string',
      end: PatchEventResponseBodyEnd,
      id: 'string',
      isAllDay: 'boolean',
      location: PatchEventResponseBodyLocation,
      organizer: PatchEventResponseBodyOrganizer,
      recurrence: PatchEventResponseBodyRecurrence,
      reminders: { 'type': 'array', 'itemType': PatchEventResponseBodyReminders },
      requestId: 'string',
      start: PatchEventResponseBodyStart,
      summary: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attendees)) {
      $dara.Model.validateArray(this.attendees);
    }
    if(this.end && typeof (this.end as any).validate === 'function') {
      (this.end as any).validate();
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(this.organizer && typeof (this.organizer as any).validate === 'function') {
      (this.organizer as any).validate();
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

