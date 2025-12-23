// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchEventRequestAttendees extends $dara.Model {
  /**
   * @example
   * 123456
   */
  id?: string;
  /**
   * @example
   * false
   */
  isOptional?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isOptional: 'isOptional',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isOptional: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchEventRequestCardInstances extends $dara.Model {
  outTrackId?: string;
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      outTrackId: 'OutTrackId',
      scenario: 'Scenario',
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

export class PatchEventRequestEnd extends $dara.Model {
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
      date: 'date',
      dateTime: 'dateTime',
      timeZone: 'timeZone',
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

export class PatchEventRequestLocation extends $dara.Model {
  /**
   * @example
   * room 1-2-3
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
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

export class PatchEventRequestRecurrencePattern extends $dara.Model {
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
   * last
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
      dayOfMonth: 'dayOfMonth',
      daysOfWeek: 'daysOfWeek',
      index: 'index',
      interval: 'interval',
      type: 'type',
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

export class PatchEventRequestRecurrenceRange extends $dara.Model {
  /**
   * @example
   * 2021-12-31T10:15:30+08:00
   */
  endDate?: string;
  /**
   * @example
   * 1
   */
  numberOfOccurrences?: number;
  /**
   * @example
   * endDate
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      numberOfOccurrences: 'numberOfOccurrences',
      type: 'type',
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

export class PatchEventRequestRecurrence extends $dara.Model {
  pattern?: PatchEventRequestRecurrencePattern;
  range?: PatchEventRequestRecurrenceRange;
  static names(): { [key: string]: string } {
    return {
      pattern: 'pattern',
      range: 'range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pattern: PatchEventRequestRecurrencePattern,
      range: PatchEventRequestRecurrenceRange,
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

export class PatchEventRequestReminders extends $dara.Model {
  /**
   * @example
   * dingtalk
   */
  method?: string;
  /**
   * @example
   * 15
   */
  minutes?: number;
  static names(): { [key: string]: string } {
    return {
      method: 'method',
      minutes: 'minutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      minutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchEventRequestStart extends $dara.Model {
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
      date: 'date',
      dateTime: 'dateTime',
      timeZone: 'timeZone',
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

export class PatchEventRequestCategories extends $dara.Model {
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

export class PatchEventRequestOnlineMeetingInfo extends $dara.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class PatchEventRequestRichTextDescription extends $dara.Model {
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

export class PatchEventRequestUiConfigs extends $dara.Model {
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

export class PatchEventRequest extends $dara.Model {
  attendees?: PatchEventRequestAttendees[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * primary
   */
  calendarId?: string;
  cardInstances?: PatchEventRequestCardInstances[];
  description?: string;
  end?: PatchEventRequestEnd;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * iiiP35sJadba8aBSgjrwPRKgiEiF
   */
  eventId?: string;
  extra?: { [key: string]: string };
  /**
   * @example
   * true
   */
  isAllDay?: boolean;
  location?: PatchEventRequestLocation;
  recurrence?: PatchEventRequestRecurrence;
  reminders?: PatchEventRequestReminders[];
  start?: PatchEventRequestStart;
  summary?: string;
  categories?: PatchEventRequestCategories[];
  freeBusyStatus?: string;
  onlineMeetingInfo?: PatchEventRequestOnlineMeetingInfo;
  richTextDescription?: PatchEventRequestRichTextDescription;
  uiConfigs?: PatchEventRequestUiConfigs[];
  static names(): { [key: string]: string } {
    return {
      attendees: 'Attendees',
      calendarId: 'CalendarId',
      cardInstances: 'CardInstances',
      description: 'Description',
      end: 'End',
      eventId: 'EventId',
      extra: 'Extra',
      isAllDay: 'IsAllDay',
      location: 'Location',
      recurrence: 'Recurrence',
      reminders: 'Reminders',
      start: 'Start',
      summary: 'Summary',
      categories: 'categories',
      freeBusyStatus: 'freeBusyStatus',
      onlineMeetingInfo: 'onlineMeetingInfo',
      richTextDescription: 'richTextDescription',
      uiConfigs: 'uiConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attendees: { 'type': 'array', 'itemType': PatchEventRequestAttendees },
      calendarId: 'string',
      cardInstances: { 'type': 'array', 'itemType': PatchEventRequestCardInstances },
      description: 'string',
      end: PatchEventRequestEnd,
      eventId: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isAllDay: 'boolean',
      location: PatchEventRequestLocation,
      recurrence: PatchEventRequestRecurrence,
      reminders: { 'type': 'array', 'itemType': PatchEventRequestReminders },
      start: PatchEventRequestStart,
      summary: 'string',
      categories: { 'type': 'array', 'itemType': PatchEventRequestCategories },
      freeBusyStatus: 'string',
      onlineMeetingInfo: PatchEventRequestOnlineMeetingInfo,
      richTextDescription: PatchEventRequestRichTextDescription,
      uiConfigs: { 'type': 'array', 'itemType': PatchEventRequestUiConfigs },
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
    if(this.recurrence && typeof (this.recurrence as any).validate === 'function') {
      (this.recurrence as any).validate();
    }
    if(Array.isArray(this.reminders)) {
      $dara.Model.validateArray(this.reminders);
    }
    if(this.start && typeof (this.start as any).validate === 'function') {
      (this.start as any).validate();
    }
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(this.onlineMeetingInfo && typeof (this.onlineMeetingInfo as any).validate === 'function') {
      (this.onlineMeetingInfo as any).validate();
    }
    if(this.richTextDescription && typeof (this.richTextDescription as any).validate === 'function') {
      (this.richTextDescription as any).validate();
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

