// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventResponseBodyAttendees } from "./GetEventResponseBodyAttendees";
import { GetEventResponseBodyCategories } from "./GetEventResponseBodyCategories";
import { GetEventResponseBodyEnd } from "./GetEventResponseBodyEnd";
import { GetEventResponseBodyExtendedProperties } from "./GetEventResponseBodyExtendedProperties";
import { GetEventResponseBodyLocation } from "./GetEventResponseBodyLocation";
import { GetEventResponseBodyMeetingRooms } from "./GetEventResponseBodyMeetingRooms";
import { GetEventResponseBodyOnlineMeetingInfo } from "./GetEventResponseBodyOnlineMeetingInfo";
import { GetEventResponseBodyOrganizer } from "./GetEventResponseBodyOrganizer";
import { GetEventResponseBodyOriginStart } from "./GetEventResponseBodyOriginStart";
import { GetEventResponseBodyRecurrence } from "./GetEventResponseBodyRecurrence";
import { GetEventResponseBodyReminders } from "./GetEventResponseBodyReminders";
import { GetEventResponseBodyRichTextDescription } from "./GetEventResponseBodyRichTextDescription";
import { GetEventResponseBodyStart } from "./GetEventResponseBodyStart";


export class GetEventResponseBody extends $dara.Model {
  attendees?: GetEventResponseBodyAttendees[];
  categories?: GetEventResponseBodyCategories[];
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  createTime?: string;
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  description?: string;
  end?: GetEventResponseBodyEnd;
  extendedProperties?: GetEventResponseBodyExtendedProperties;
  /**
   * @example
   * iiiP35sJxxxxPRKgiEiF
   */
  id?: string;
  /**
   * @example
   * true
   */
  isAllDay?: boolean;
  location?: GetEventResponseBodyLocation;
  meetingRooms?: GetEventResponseBodyMeetingRooms[];
  onlineMeetingInfo?: GetEventResponseBodyOnlineMeetingInfo;
  organizer?: GetEventResponseBodyOrganizer;
  originStart?: GetEventResponseBodyOriginStart;
  recurrence?: GetEventResponseBodyRecurrence;
  reminders?: GetEventResponseBodyReminders[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * requestId
   */
  requestId?: string;
  richTextDescription?: GetEventResponseBodyRichTextDescription;
  /**
   * @example
   * cnNTbW1YbxxxxvdlQrQT09
   */
  seriesMasterId?: string;
  start?: GetEventResponseBodyStart;
  /**
   * @example
   * confirmed
   */
  status?: string;
  /**
   * @example
   * test event
   */
  summary?: string;
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      attendees: 'attendees',
      categories: 'categories',
      createTime: 'createTime',
      description: 'description',
      end: 'end',
      extendedProperties: 'extendedProperties',
      id: 'id',
      isAllDay: 'isAllDay',
      location: 'location',
      meetingRooms: 'meetingRooms',
      onlineMeetingInfo: 'onlineMeetingInfo',
      organizer: 'organizer',
      originStart: 'originStart',
      recurrence: 'recurrence',
      reminders: 'reminders',
      requestId: 'requestId',
      richTextDescription: 'richTextDescription',
      seriesMasterId: 'seriesMasterId',
      start: 'start',
      status: 'status',
      summary: 'summary',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendees: { 'type': 'array', 'itemType': GetEventResponseBodyAttendees },
      categories: { 'type': 'array', 'itemType': GetEventResponseBodyCategories },
      createTime: 'string',
      description: 'string',
      end: GetEventResponseBodyEnd,
      extendedProperties: GetEventResponseBodyExtendedProperties,
      id: 'string',
      isAllDay: 'boolean',
      location: GetEventResponseBodyLocation,
      meetingRooms: { 'type': 'array', 'itemType': GetEventResponseBodyMeetingRooms },
      onlineMeetingInfo: GetEventResponseBodyOnlineMeetingInfo,
      organizer: GetEventResponseBodyOrganizer,
      originStart: GetEventResponseBodyOriginStart,
      recurrence: GetEventResponseBodyRecurrence,
      reminders: { 'type': 'array', 'itemType': GetEventResponseBodyReminders },
      requestId: 'string',
      richTextDescription: GetEventResponseBodyRichTextDescription,
      seriesMasterId: 'string',
      start: GetEventResponseBodyStart,
      status: 'string',
      summary: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attendees)) {
      $dara.Model.validateArray(this.attendees);
    }
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(this.end && typeof (this.end as any).validate === 'function') {
      (this.end as any).validate();
    }
    if(this.extendedProperties && typeof (this.extendedProperties as any).validate === 'function') {
      (this.extendedProperties as any).validate();
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(Array.isArray(this.meetingRooms)) {
      $dara.Model.validateArray(this.meetingRooms);
    }
    if(this.onlineMeetingInfo && typeof (this.onlineMeetingInfo as any).validate === 'function') {
      (this.onlineMeetingInfo as any).validate();
    }
    if(this.organizer && typeof (this.organizer as any).validate === 'function') {
      (this.organizer as any).validate();
    }
    if(this.originStart && typeof (this.originStart as any).validate === 'function') {
      (this.originStart as any).validate();
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

