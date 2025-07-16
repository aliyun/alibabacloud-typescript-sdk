// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsResponseBodyEventsAttendees extends $dara.Model {
  /**
   * @example
   * tony
   */
  displayName?: string;
  /**
   * @example
   * true
   */
  isOptional?: boolean;
  /**
   * @example
   * accepted
   */
  responseStatus?: string;
  /**
   * @example
   * true
   */
  self?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      isOptional: 'IsOptional',
      responseStatus: 'ResponseStatus',
      self: 'Self',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      isOptional: 'boolean',
      responseStatus: 'string',
      self: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsCategories extends $dara.Model {
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsEnd extends $dara.Model {
  /**
   * @example
   * 2020-01-01
   */
  date?: string;
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  dateTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dateTime: 'DateTime',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dateTime: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsExtendedPropertiesSharedProperties extends $dara.Model {
  /**
   * @example
   * ding*********31
   */
  belongCorpId?: string;
  /**
   * @example
   * zxcv90asdf123===
   */
  sourceOpenCid?: string;
  static names(): { [key: string]: string } {
    return {
      belongCorpId: 'BelongCorpId',
      sourceOpenCid: 'SourceOpenCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongCorpId: 'string',
      sourceOpenCid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsExtendedProperties extends $dara.Model {
  sharedProperties?: ListEventsResponseBodyEventsExtendedPropertiesSharedProperties;
  static names(): { [key: string]: string } {
    return {
      sharedProperties: 'SharedProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedProperties: ListEventsResponseBodyEventsExtendedPropertiesSharedProperties,
    };
  }

  validate() {
    if(this.sharedProperties && typeof (this.sharedProperties as any).validate === 'function') {
      (this.sharedProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsLocation extends $dara.Model {
  /**
   * @example
   * room 1-2-3
   */
  displayName?: string;
  meetingRooms?: string[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      meetingRooms: 'MeetingRooms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      meetingRooms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.meetingRooms)) {
      $dara.Model.validateArray(this.meetingRooms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsMeetingRooms extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * accepted
   */
  responseStatus?: string;
  /**
   * @example
   * c10315a8b4e740a317813ab6fxxxxxx
   */
  roomId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      responseStatus: 'ResponseStatus',
      roomId: 'RoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      responseStatus: 'string',
      roomId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsOnlineMeetingInfo extends $dara.Model {
  /**
   * @example
   * 5c4df21dxxxx-a6db402b9f3a
   */
  conferenceId?: string;
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * dingtalk
   */
  type?: string;
  /**
   * @example
   * dingtalk://dingtalkclient/page/videoCoxxxxndar?confId=5c4df21dxxxx2b9f3a&calendarId=92xxxx36
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      extraInfo: 'ExtraInfo',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsOrganizer extends $dara.Model {
  /**
   * @example
   * tony
   */
  displayName?: string;
  /**
   * @example
   * accepted
   */
  responseStatus?: string;
  /**
   * @example
   * true
   */
  self?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      responseStatus: 'ResponseStatus',
      self: 'Self',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      responseStatus: 'string',
      self: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsOriginStart extends $dara.Model {
  /**
   * @example
   * 2023-01-01T00:00:00Z
   */
  dateTime?: string;
  static names(): { [key: string]: string } {
    return {
      dateTime: 'DateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsRecurrencePattern extends $dara.Model {
  /**
   * @example
   * 1
   */
  dayOfMonth?: number;
  /**
   * @example
   * sunday
   */
  daysOfWeek?: string;
  /**
   * @example
   * first
   */
  index?: string;
  /**
   * @example
   * 1
   */
  interval?: number;
  /**
   * @example
   * daily
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dayOfMonth: 'DayOfMonth',
      daysOfWeek: 'DaysOfWeek',
      index: 'Index',
      interval: 'Interval',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfMonth: 'number',
      daysOfWeek: 'string',
      index: 'string',
      interval: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsRecurrenceRange extends $dara.Model {
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  endDate?: string;
  /**
   * @example
   * 5
   */
  numberOfOccurrences?: number;
  /**
   * @example
   * noEnd
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      numberOfOccurrences: 'NumberOfOccurrences',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      numberOfOccurrences: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsRecurrence extends $dara.Model {
  pattern?: ListEventsResponseBodyEventsRecurrencePattern;
  range?: ListEventsResponseBodyEventsRecurrenceRange;
  static names(): { [key: string]: string } {
    return {
      pattern: 'Pattern',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pattern: ListEventsResponseBodyEventsRecurrencePattern,
      range: ListEventsResponseBodyEventsRecurrenceRange,
    };
  }

  validate() {
    if(this.pattern && typeof (this.pattern as any).validate === 'function') {
      (this.pattern as any).validate();
    }
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsReminders extends $dara.Model {
  /**
   * @example
   * dingtalk
   */
  method?: string;
  /**
   * @example
   * 15
   */
  minutes?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'Method',
      minutes: 'Minutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      minutes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsRichTextDescription extends $dara.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyEventsStart extends $dara.Model {
  /**
   * @example
   * 2020-01-01
   */
  date?: string;
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  dateTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dateTime: 'DateTime',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dateTime: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListEventsResponseBody extends $dara.Model {
  events?: ListEventsResponseBodyEvents[];
  /**
   * @example
   * cnNTbW1YbxxxxdlQrQT09
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 4248DCC9-785F-5A14-8BE0-830FD52E1261
   */
  requestId?: string;
  /**
   * @example
   * zxcasdfvc000009
   */
  syncToken?: string;
  vendorRequestId?: string;
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      nextToken: 'nextToken',
      requestId: 'requestId',
      syncToken: 'syncToken',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': ListEventsResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
      syncToken: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

