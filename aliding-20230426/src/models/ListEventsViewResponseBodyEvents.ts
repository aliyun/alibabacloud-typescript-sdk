// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventsViewResponseBodyEventsAttendees } from "./ListEventsViewResponseBodyEventsAttendees";
import { ListEventsViewResponseBodyEventsCategories } from "./ListEventsViewResponseBodyEventsCategories";
import { ListEventsViewResponseBodyEventsEnd } from "./ListEventsViewResponseBodyEventsEnd";
import { ListEventsViewResponseBodyEventsExtendedProperties } from "./ListEventsViewResponseBodyEventsExtendedProperties";
import { ListEventsViewResponseBodyEventsLocation } from "./ListEventsViewResponseBodyEventsLocation";
import { ListEventsViewResponseBodyEventsMeetingRooms } from "./ListEventsViewResponseBodyEventsMeetingRooms";
import { ListEventsViewResponseBodyEventsOnlineMeetingInfo } from "./ListEventsViewResponseBodyEventsOnlineMeetingInfo";
import { ListEventsViewResponseBodyEventsOrganizer } from "./ListEventsViewResponseBodyEventsOrganizer";
import { ListEventsViewResponseBodyEventsOriginStart } from "./ListEventsViewResponseBodyEventsOriginStart";
import { ListEventsViewResponseBodyEventsRecurrence } from "./ListEventsViewResponseBodyEventsRecurrence";
import { ListEventsViewResponseBodyEventsRichTextDescription } from "./ListEventsViewResponseBodyEventsRichTextDescription";
import { ListEventsViewResponseBodyEventsStart } from "./ListEventsViewResponseBodyEventsStart";


export class ListEventsViewResponseBodyEvents extends $dara.Model {
  attendees?: ListEventsViewResponseBodyEventsAttendees[];
  categories?: ListEventsViewResponseBodyEventsCategories[];
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
  end?: ListEventsViewResponseBodyEventsEnd;
  extendedProperties?: ListEventsViewResponseBodyEventsExtendedProperties;
  /**
   * @example
   * iiiP35xxx
   */
  id?: string;
  /**
   * @example
   * false
   */
  isAllDay?: boolean;
  location?: ListEventsViewResponseBodyEventsLocation;
  meetingRooms?: ListEventsViewResponseBodyEventsMeetingRooms[];
  onlineMeetingInfo?: ListEventsViewResponseBodyEventsOnlineMeetingInfo;
  organizer?: ListEventsViewResponseBodyEventsOrganizer;
  originStart?: ListEventsViewResponseBodyEventsOriginStart;
  recurrence?: ListEventsViewResponseBodyEventsRecurrence;
  richTextDescription?: ListEventsViewResponseBodyEventsRichTextDescription;
  /**
   * @example
   * cnNTbxxx
   */
  seriesMasterId?: string;
  start?: ListEventsViewResponseBodyEventsStart;
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
      attendees: { 'type': 'array', 'itemType': ListEventsViewResponseBodyEventsAttendees },
      categories: { 'type': 'array', 'itemType': ListEventsViewResponseBodyEventsCategories },
      createTime: 'string',
      description: 'string',
      end: ListEventsViewResponseBodyEventsEnd,
      extendedProperties: ListEventsViewResponseBodyEventsExtendedProperties,
      id: 'string',
      isAllDay: 'boolean',
      location: ListEventsViewResponseBodyEventsLocation,
      meetingRooms: { 'type': 'array', 'itemType': ListEventsViewResponseBodyEventsMeetingRooms },
      onlineMeetingInfo: ListEventsViewResponseBodyEventsOnlineMeetingInfo,
      organizer: ListEventsViewResponseBodyEventsOrganizer,
      originStart: ListEventsViewResponseBodyEventsOriginStart,
      recurrence: ListEventsViewResponseBodyEventsRecurrence,
      richTextDescription: ListEventsViewResponseBodyEventsRichTextDescription,
      seriesMasterId: 'string',
      start: ListEventsViewResponseBodyEventsStart,
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

