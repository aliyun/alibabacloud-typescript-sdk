// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventRequestAttendees } from "./CreateEventRequestAttendees";
import { CreateEventRequestCardInstances } from "./CreateEventRequestCardInstances";
import { CreateEventRequestEnd } from "./CreateEventRequestEnd";
import { CreateEventRequestLocation } from "./CreateEventRequestLocation";
import { CreateEventRequestOnlineMeetingInfo } from "./CreateEventRequestOnlineMeetingInfo";
import { CreateEventRequestRecurrence } from "./CreateEventRequestRecurrence";
import { CreateEventRequestReminders } from "./CreateEventRequestReminders";
import { CreateEventRequestRichTextDescription } from "./CreateEventRequestRichTextDescription";
import { CreateEventRequestUiConfigs } from "./CreateEventRequestUiConfigs";
import { CreateEventRequestStart } from "./CreateEventRequestStart";


export class CreateEventRequest extends $dara.Model {
  attendees?: CreateEventRequestAttendees[];
  cardInstances?: CreateEventRequestCardInstances[];
  description?: string;
  end?: CreateEventRequestEnd;
  extra?: { [key: string]: string };
  /**
   * @example
   * true
   */
  isAllDay?: boolean;
  location?: CreateEventRequestLocation;
  onlineMeetingInfo?: CreateEventRequestOnlineMeetingInfo;
  recurrence?: CreateEventRequestRecurrence;
  /**
   * **if can be null:**
   * false
   */
  reminders?: CreateEventRequestReminders[];
  richTextDescription?: CreateEventRequestRichTextDescription;
  /**
   * @remarks
   * This parameter is required.
   */
  summary?: string;
  uiConfigs?: CreateEventRequestUiConfigs[];
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
   */
  start?: CreateEventRequestStart;
  static names(): { [key: string]: string } {
    return {
      attendees: 'Attendees',
      cardInstances: 'CardInstances',
      description: 'Description',
      end: 'End',
      extra: 'Extra',
      isAllDay: 'IsAllDay',
      location: 'Location',
      onlineMeetingInfo: 'OnlineMeetingInfo',
      recurrence: 'Recurrence',
      reminders: 'Reminders',
      richTextDescription: 'RichTextDescription',
      summary: 'Summary',
      uiConfigs: 'UiConfigs',
      calendarId: 'calendarId',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendees: { 'type': 'array', 'itemType': CreateEventRequestAttendees },
      cardInstances: { 'type': 'array', 'itemType': CreateEventRequestCardInstances },
      description: 'string',
      end: CreateEventRequestEnd,
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isAllDay: 'boolean',
      location: CreateEventRequestLocation,
      onlineMeetingInfo: CreateEventRequestOnlineMeetingInfo,
      recurrence: CreateEventRequestRecurrence,
      reminders: { 'type': 'array', 'itemType': CreateEventRequestReminders },
      richTextDescription: CreateEventRequestRichTextDescription,
      summary: 'string',
      uiConfigs: { 'type': 'array', 'itemType': CreateEventRequestUiConfigs },
      calendarId: 'string',
      start: CreateEventRequestStart,
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
    if(this.onlineMeetingInfo && typeof (this.onlineMeetingInfo as any).validate === 'function') {
      (this.onlineMeetingInfo as any).validate();
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
    if(Array.isArray(this.uiConfigs)) {
      $dara.Model.validateArray(this.uiConfigs);
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

