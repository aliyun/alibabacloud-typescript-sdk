// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventResponseBodyAttendees } from "./CreateEventResponseBodyAttendees";
import { CreateEventResponseBodyEnd } from "./CreateEventResponseBodyEnd";
import { CreateEventResponseBodyLocation } from "./CreateEventResponseBodyLocation";
import { CreateEventResponseBodyOnlineMeetingInfo } from "./CreateEventResponseBodyOnlineMeetingInfo";
import { CreateEventResponseBodyOrganizer } from "./CreateEventResponseBodyOrganizer";
import { CreateEventResponseBodyRecurrence } from "./CreateEventResponseBodyRecurrence";
import { CreateEventResponseBodyReminders } from "./CreateEventResponseBodyReminders";
import { CreateEventResponseBodyRichTextDescription } from "./CreateEventResponseBodyRichTextDescription";
import { CreateEventResponseBodyStart } from "./CreateEventResponseBodyStart";
import { CreateEventResponseBodyUiConfigs } from "./CreateEventResponseBodyUiConfigs";


export class CreateEventResponseBody extends $dara.Model {
  attendees?: CreateEventResponseBodyAttendees[];
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  createTime?: string;
  description?: string;
  end?: CreateEventResponseBodyEnd;
  /**
   * @example
   * iiiP35sJadba8aBSgjrwPRKgiEiF
   */
  id?: string;
  /**
   * @example
   * true
   */
  isAllDay?: boolean;
  location?: CreateEventResponseBodyLocation;
  onlineMeetingInfo?: CreateEventResponseBodyOnlineMeetingInfo;
  organizer?: CreateEventResponseBodyOrganizer;
  recurrence?: CreateEventResponseBodyRecurrence;
  reminders?: CreateEventResponseBodyReminders[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 4248DCC9-785F-5A14-8BE0-830FD52E1261
   */
  requestId?: string;
  richTextDescription?: CreateEventResponseBodyRichTextDescription;
  start?: CreateEventResponseBodyStart;
  summary?: string;
  uiConfigs?: CreateEventResponseBodyUiConfigs[];
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
      onlineMeetingInfo: 'onlineMeetingInfo',
      organizer: 'organizer',
      recurrence: 'recurrence',
      reminders: 'reminders',
      requestId: 'requestId',
      richTextDescription: 'richTextDescription',
      start: 'start',
      summary: 'summary',
      uiConfigs: 'uiConfigs',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendees: { 'type': 'array', 'itemType': CreateEventResponseBodyAttendees },
      createTime: 'string',
      description: 'string',
      end: CreateEventResponseBodyEnd,
      id: 'string',
      isAllDay: 'boolean',
      location: CreateEventResponseBodyLocation,
      onlineMeetingInfo: CreateEventResponseBodyOnlineMeetingInfo,
      organizer: CreateEventResponseBodyOrganizer,
      recurrence: CreateEventResponseBodyRecurrence,
      reminders: { 'type': 'array', 'itemType': CreateEventResponseBodyReminders },
      requestId: 'string',
      richTextDescription: CreateEventResponseBodyRichTextDescription,
      start: CreateEventResponseBodyStart,
      summary: 'string',
      uiConfigs: { 'type': 'array', 'itemType': CreateEventResponseBodyUiConfigs },
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
    if(this.onlineMeetingInfo && typeof (this.onlineMeetingInfo as any).validate === 'function') {
      (this.onlineMeetingInfo as any).validate();
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
    if(this.richTextDescription && typeof (this.richTextDescription as any).validate === 'function') {
      (this.richTextDescription as any).validate();
    }
    if(this.start && typeof (this.start as any).validate === 'function') {
      (this.start as any).validate();
    }
    if(Array.isArray(this.uiConfigs)) {
      $dara.Model.validateArray(this.uiConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

