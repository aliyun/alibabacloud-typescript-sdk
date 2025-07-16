// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventResponseBodyAttendees extends $dara.Model {
  /**
   * @example
   * jack
   */
  displayName?: string;
  /**
   * @example
   * 123456
   */
  id?: string;
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

export class GetEventResponseBodyCategories extends $dara.Model {
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

export class GetEventResponseBodyEnd extends $dara.Model {
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

export class GetEventResponseBodyExtendedPropertiesSharedProperties extends $dara.Model {
  /**
   * @example
   * dingd*****1231231
   */
  belongCorpId?: string;
  /**
   * @example
   * zxcvasdfvb123====
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

export class GetEventResponseBodyExtendedProperties extends $dara.Model {
  sharedProperties?: GetEventResponseBodyExtendedPropertiesSharedProperties;
  static names(): { [key: string]: string } {
    return {
      sharedProperties: 'SharedProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedProperties: GetEventResponseBodyExtendedPropertiesSharedProperties,
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

export class GetEventResponseBodyLocation extends $dara.Model {
  displayName?: string;
  /**
   * @remarks
   * --
   */
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

export class GetEventResponseBodyMeetingRooms extends $dara.Model {
  /**
   * @example
   * room 1-2-3
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

export class GetEventResponseBodyOnlineMeetingInfo extends $dara.Model {
  /**
   * @example
   * 5c4df21d-xxxx-a6db402b9f3a
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
   * dingtalk://dingtalkclient/page/videoxxxxalendar?confId=5c4df21d-xxxx9f3f&calendarId=127xxxx124
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

export class GetEventResponseBodyOrganizer extends $dara.Model {
  /**
   * @example
   * tony
   */
  displayName?: string;
  /**
   * @example
   * 123456
   */
  id?: string;
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

export class GetEventResponseBodyOriginStart extends $dara.Model {
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

export class GetEventResponseBodyRecurrencePattern extends $dara.Model {
  /**
   * @example
   * 14
   */
  dayOfMonth?: number;
  /**
   * @example
   * monday
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

export class GetEventResponseBodyRecurrenceRange extends $dara.Model {
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

export class GetEventResponseBodyRecurrence extends $dara.Model {
  pattern?: GetEventResponseBodyRecurrencePattern;
  range?: GetEventResponseBodyRecurrenceRange;
  static names(): { [key: string]: string } {
    return {
      pattern: 'Pattern',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pattern: GetEventResponseBodyRecurrencePattern,
      range: GetEventResponseBodyRecurrenceRange,
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

export class GetEventResponseBodyReminders extends $dara.Model {
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

export class GetEventResponseBodyRichTextDescription extends $dara.Model {
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

export class GetEventResponseBodyStart extends $dara.Model {
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

