// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRequestAttendees extends $dara.Model {
  /**
   * @example
   * 7845
   */
  id?: string;
  /**
   * @example
   * true
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

export class CreateEventRequestCardInstances extends $dara.Model {
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

export class CreateEventRequestEnd extends $dara.Model {
  /**
   * @example
   * "2020-09-21"
   */
  date?: string;
  /**
   * @example
   * "2021-09-20T10:15:30+08:00"
   */
  dateTime?: string;
  /**
   * @example
   * "Asia/Shanghai"
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

export class CreateEventRequestLocation extends $dara.Model {
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

export class CreateEventRequestOnlineMeetingInfo extends $dara.Model {
  /**
   * @example
   * dingtalk
   */
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

export class CreateEventRequestRecurrencePattern extends $dara.Model {
  /**
   * @example
   * 1
   */
  dayOfMonth?: number;
  /**
   * @example
   * "monday"
   */
  daysOfWeek?: string;
  /**
   * @example
   * "last"
   */
  index?: string;
  /**
   * @example
   * 1
   */
  interval?: number;
  /**
   * @example
   * "daily"
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

export class CreateEventRequestRecurrenceRange extends $dara.Model {
  /**
   * @example
   * "2021-12-31T10:15:30+08:00"
   */
  endDate?: string;
  /**
   * @example
   * 5
   */
  numberOfOccurrences?: number;
  /**
   * @example
   * "endDate"
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

export class CreateEventRequestRecurrence extends $dara.Model {
  pattern?: CreateEventRequestRecurrencePattern;
  range?: CreateEventRequestRecurrenceRange;
  static names(): { [key: string]: string } {
    return {
      pattern: 'pattern',
      range: 'range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pattern: CreateEventRequestRecurrencePattern,
      range: CreateEventRequestRecurrenceRange,
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

export class CreateEventRequestReminders extends $dara.Model {
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

export class CreateEventRequestRichTextDescription extends $dara.Model {
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

export class CreateEventRequestUiConfigs extends $dara.Model {
  /**
   * @example
   * "updateEventButton"
   */
  uiName?: string;
  /**
   * @example
   * "hide"
   */
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

export class CreateEventRequestStart extends $dara.Model {
  /**
   * @example
   * "2021-09-20"
   */
  date?: string;
  /**
   * @example
   * "2021-09-20T10:15:30+08:00"
   */
  dateTime?: string;
  /**
   * @example
   * "Asia/Shanghai"
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

