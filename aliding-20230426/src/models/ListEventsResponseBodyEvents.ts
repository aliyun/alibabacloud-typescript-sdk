// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventsResponseBodyEventsAttendees } from "./ListEventsResponseBodyEventsAttendees";
import { ListEventsResponseBodyEventsCategories } from "./ListEventsResponseBodyEventsCategories";
import { ListEventsResponseBodyEventsEnd } from "./ListEventsResponseBodyEventsEnd";
import { ListEventsResponseBodyEventsExtendedProperties } from "./ListEventsResponseBodyEventsExtendedProperties";
import { ListEventsResponseBodyEventsLocation } from "./ListEventsResponseBodyEventsLocation";
import { ListEventsResponseBodyEventsMeetingRooms } from "./ListEventsResponseBodyEventsMeetingRooms";
import { ListEventsResponseBodyEventsOnlineMeetingInfo } from "./ListEventsResponseBodyEventsOnlineMeetingInfo";
import { ListEventsResponseBodyEventsOrganizer } from "./ListEventsResponseBodyEventsOrganizer";
import { ListEventsResponseBodyEventsOriginStart } from "./ListEventsResponseBodyEventsOriginStart";
import { ListEventsResponseBodyEventsRecurrence } from "./ListEventsResponseBodyEventsRecurrence";
import { ListEventsResponseBodyEventsReminders } from "./ListEventsResponseBodyEventsReminders";
import { ListEventsResponseBodyEventsRichTextDescription } from "./ListEventsResponseBodyEventsRichTextDescription";
import { ListEventsResponseBodyEventsStart } from "./ListEventsResponseBodyEventsStart";


export class ListEventsResponseBodyEvents extends $dara.Model {
  attendees?: ListEventsResponseBodyEventsAttendees[];
  categories?: ListEventsResponseBodyEventsCategories[];
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  createTime?: string;
  /**
   * @example
   * something about this event
   */
  description?: string;
  end?: ListEventsResponseBodyEventsEnd;
  extendedProperties?: ListEventsResponseBodyEventsExtendedProperties;
  /**
   * @example
   * cnNTbW1YbxxxxdEgvdlQrQT09
   */
  id?: string;
  /**
   * @example
   * true
   */
  isAllDay?: boolean;
  location?: ListEventsResponseBodyEventsLocation;
  meetingRooms?: ListEventsResponseBodyEventsMeetingRooms[];
  onlineMeetingInfo?: ListEventsResponseBodyEventsOnlineMeetingInfo;
  organizer?: ListEventsResponseBodyEventsOrganizer;
  originStart?: ListEventsResponseBodyEventsOriginStart;
  recurrence?: ListEventsResponseBodyEventsRecurrence;
  reminders?: ListEventsResponseBodyEventsReminders[];
  richTextDescription?: ListEventsResponseBodyEventsRichTextDescription;
  /**
   * @example
   * cnNTbWxxxxaFJZdEgvdlQrQT09
   */
  seriesMasterId?: string;
  start?: ListEventsResponseBodyEventsStart;
  /**
   * @example
   * confirmed
   */
  status?: string;
  summary?: string;
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      attendees: 'Attendees',
      categories: 'Categories',
      createTime: 'CreateTime',
      description: 'Description',
      end: 'End',
      extendedProperties: 'ExtendedProperties',
      id: 'Id',
      isAllDay: 'IsAllDay',
      location: 'Location',
      meetingRooms: 'MeetingRooms',
      onlineMeetingInfo: 'OnlineMeetingInfo',
      organizer: 'Organizer',
      originStart: 'OriginStart',
      recurrence: 'Recurrence',
      reminders: 'Reminders',
      richTextDescription: 'RichTextDescription',
      seriesMasterId: 'SeriesMasterId',
      start: 'Start',
      status: 'Status',
      summary: 'Summary',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendees: { 'type': 'array', 'itemType': ListEventsResponseBodyEventsAttendees },
      categories: { 'type': 'array', 'itemType': ListEventsResponseBodyEventsCategories },
      createTime: 'string',
      description: 'string',
      end: ListEventsResponseBodyEventsEnd,
      extendedProperties: ListEventsResponseBodyEventsExtendedProperties,
      id: 'string',
      isAllDay: 'boolean',
      location: ListEventsResponseBodyEventsLocation,
      meetingRooms: { 'type': 'array', 'itemType': ListEventsResponseBodyEventsMeetingRooms },
      onlineMeetingInfo: ListEventsResponseBodyEventsOnlineMeetingInfo,
      organizer: ListEventsResponseBodyEventsOrganizer,
      originStart: ListEventsResponseBodyEventsOriginStart,
      recurrence: ListEventsResponseBodyEventsRecurrence,
      reminders: { 'type': 'array', 'itemType': ListEventsResponseBodyEventsReminders },
      richTextDescription: ListEventsResponseBodyEventsRichTextDescription,
      seriesMasterId: 'string',
      start: ListEventsResponseBodyEventsStart,
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

