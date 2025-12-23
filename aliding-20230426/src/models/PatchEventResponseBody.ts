// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchEventResponseBodyAttendees extends $dara.Model {
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

export class PatchEventResponseBodyCardInstances extends $dara.Model {
  outTrackId?: string;
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      outTrackId: 'outTrackId',
      scenario: 'scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outTrackId: 'string',
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchEventResponseBodyCategories extends $dara.Model {
  categoryId?: string;
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'categoryId',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
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

export class PatchEventResponseBodyEnd extends $dara.Model {
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

export class PatchEventResponseBodyLocation extends $dara.Model {
  /**
   * @example
   * true
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

export class PatchEventResponseBodyOnlineMeetingInfo extends $dara.Model {
  conferenceId?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'conferenceId',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchEventResponseBodyOrganizer extends $dara.Model {
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

export class PatchEventResponseBodyRecurrencePattern extends $dara.Model {
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

export class PatchEventResponseBodyRecurrenceRange extends $dara.Model {
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

export class PatchEventResponseBodyRecurrence extends $dara.Model {
  pattern?: PatchEventResponseBodyRecurrencePattern;
  range?: PatchEventResponseBodyRecurrenceRange;
  static names(): { [key: string]: string } {
    return {
      pattern: 'Pattern',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pattern: PatchEventResponseBodyRecurrencePattern,
      range: PatchEventResponseBodyRecurrenceRange,
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

export class PatchEventResponseBodyReminders extends $dara.Model {
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

export class PatchEventResponseBodyRichTextDescription extends $dara.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
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

export class PatchEventResponseBodyStart extends $dara.Model {
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

export class PatchEventResponseBodyUiConfigs extends $dara.Model {
  uiName?: string;
  uiStatus?: string;
  static names(): { [key: string]: string } {
    return {
      uiName: 'uiName',
      uiStatus: 'uiStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uiName: 'string',
      uiStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchEventResponseBody extends $dara.Model {
  attendees?: PatchEventResponseBodyAttendees[];
  cardInstances?: PatchEventResponseBodyCardInstances[];
  categories?: PatchEventResponseBodyCategories[];
  /**
   * @example
   * 2022-10-25T02:26:14Z
   */
  createTime?: string;
  description?: string;
  end?: PatchEventResponseBodyEnd;
  freeBusyStatus?: string;
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
  onlineMeetingInfo?: PatchEventResponseBodyOnlineMeetingInfo;
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
  richTextDescription?: PatchEventResponseBodyRichTextDescription;
  start?: PatchEventResponseBodyStart;
  summary?: string;
  uiConfigs?: PatchEventResponseBodyUiConfigs[];
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      attendees: 'attendees',
      cardInstances: 'cardInstances',
      categories: 'categories',
      createTime: 'createTime',
      description: 'description',
      end: 'end',
      freeBusyStatus: 'freeBusyStatus',
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
      attendees: { 'type': 'array', 'itemType': PatchEventResponseBodyAttendees },
      cardInstances: { 'type': 'array', 'itemType': PatchEventResponseBodyCardInstances },
      categories: { 'type': 'array', 'itemType': PatchEventResponseBodyCategories },
      createTime: 'string',
      description: 'string',
      end: PatchEventResponseBodyEnd,
      freeBusyStatus: 'string',
      id: 'string',
      isAllDay: 'boolean',
      location: PatchEventResponseBodyLocation,
      onlineMeetingInfo: PatchEventResponseBodyOnlineMeetingInfo,
      organizer: PatchEventResponseBodyOrganizer,
      recurrence: PatchEventResponseBodyRecurrence,
      reminders: { 'type': 'array', 'itemType': PatchEventResponseBodyReminders },
      requestId: 'string',
      richTextDescription: PatchEventResponseBodyRichTextDescription,
      start: PatchEventResponseBodyStart,
      summary: 'string',
      uiConfigs: { 'type': 'array', 'itemType': PatchEventResponseBodyUiConfigs },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attendees)) {
      $dara.Model.validateArray(this.attendees);
    }
    if(Array.isArray(this.cardInstances)) {
      $dara.Model.validateArray(this.cardInstances);
    }
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
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

