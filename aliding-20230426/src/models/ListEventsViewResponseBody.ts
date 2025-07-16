// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsViewResponseBodyEventsAttendees extends $dara.Model {
  /**
   * @example
   * tony
   */
  displayName?: string;
  /**
   * @example
   * 012345
   */
  id?: string;
  /**
   * @example
   * false
   */
  isOptional?: boolean;
  /**
   * @example
   * accepted
   */
  responseStatus?: string;
  /**
   * @example
   * false
   */
  self?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      isOptional: 'IsOptional',
      responseStatus: 'ResponseStatus',
      self: 'Self',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
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

export class ListEventsViewResponseBodyEventsCategories extends $dara.Model {
  /**
   * @example
   * tony
   */
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

export class ListEventsViewResponseBodyEventsEnd extends $dara.Model {
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

export class ListEventsViewResponseBodyEventsExtendedPropertiesSharedProperties extends $dara.Model {
  /**
   * @example
   * dingd8*****1231
   */
  belongCorpId?: string;
  /**
   * @example
   * zxcvasdfa123===
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

export class ListEventsViewResponseBodyEventsExtendedProperties extends $dara.Model {
  sharedProperties?: ListEventsViewResponseBodyEventsExtendedPropertiesSharedProperties;
  static names(): { [key: string]: string } {
    return {
      sharedProperties: 'SharedProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedProperties: ListEventsViewResponseBodyEventsExtendedPropertiesSharedProperties,
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

export class ListEventsViewResponseBodyEventsLocation extends $dara.Model {
  /**
   * @example
   * tony
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

export class ListEventsViewResponseBodyEventsMeetingRooms extends $dara.Model {
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

export class ListEventsViewResponseBodyEventsOnlineMeetingInfo extends $dara.Model {
  /**
   * @example
   * 5c4df2xxx
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
   * dingtalk://dingtalkclient/page/xxx?confId=xxx&calendarId=xxx
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

export class ListEventsViewResponseBodyEventsOrganizer extends $dara.Model {
  /**
   * @example
   * tony
   */
  displayName?: string;
  /**
   * @example
   * 012345
   */
  id?: string;
  /**
   * @example
   * accepted
   */
  responseStatus?: string;
  /**
   * @example
   * false
   */
  self?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      responseStatus: 'ResponseStatus',
      self: 'Self',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
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

export class ListEventsViewResponseBodyEventsOriginStart extends $dara.Model {
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
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

export class ListEventsViewResponseBodyEventsRecurrencePattern extends $dara.Model {
  /**
   * @example
   * 14
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
   * dingtalk
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

export class ListEventsViewResponseBodyEventsRecurrenceRange extends $dara.Model {
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
   * dingtalk
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

export class ListEventsViewResponseBodyEventsRecurrence extends $dara.Model {
  pattern?: ListEventsViewResponseBodyEventsRecurrencePattern;
  range?: ListEventsViewResponseBodyEventsRecurrenceRange;
  static names(): { [key: string]: string } {
    return {
      pattern: 'Pattern',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pattern: ListEventsViewResponseBodyEventsRecurrencePattern,
      range: ListEventsViewResponseBodyEventsRecurrenceRange,
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

export class ListEventsViewResponseBodyEventsRichTextDescription extends $dara.Model {
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

export class ListEventsViewResponseBodyEventsStart extends $dara.Model {
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

export class ListEventsViewResponseBody extends $dara.Model {
  events?: ListEventsViewResponseBodyEvents[];
  /**
   * @example
   * cnNTbWxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': ListEventsViewResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
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

