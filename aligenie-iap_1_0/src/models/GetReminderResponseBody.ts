// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReminderResponseBodyModelRemindResponsesRecurrenceRule extends $dara.Model {
  /**
   * @remarks
   * The date on which the reminder is triggered.
   * 
   * @example
   * 27
   */
  day?: number;
  /**
   * @remarks
   * Information for monthly reminders.
   */
  daysOfMonth?: number[];
  /**
   * @remarks
   * Information for weekly reminders.
   */
  daysOfWeek?: number[];
  /**
   * @remarks
   * The end time when the reminder becomes inactive.
   * 
   * @example
   * 1661598000000
   */
  endDateTime?: string;
  /**
   * @remarks
   * The loop epoch of the reminder.
   * 
   * @example
   * WEEKLY
   */
  freq?: string;
  /**
   * @remarks
   * The hour of the time when the reminder is triggered.
   * 
   * @example
   * 18
   */
  hour?: number;
  /**
   * @remarks
   * The minute when the reminder is triggered.
   * 
   * @example
   * 0
   */
  minute?: number;
  /**
   * @remarks
   * Month in which the reminder is triggered.
   * 
   * @example
   * 8
   */
  month?: number;
  /**
   * @remarks
   * The second of the time when the reminder is triggered.
   * 
   * @example
   * 0
   */
  second?: number;
  /**
   * @remarks
   * The start time when the reminder becomes effective.
   * 
   * @example
   * 1630054800000
   */
  startDateTime?: string;
  /**
   * @remarks
   * The year when the reminder is triggered.
   * 
   * @example
   * 2021
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      daysOfMonth: 'DaysOfMonth',
      daysOfWeek: 'DaysOfWeek',
      endDateTime: 'EndDateTime',
      freq: 'Freq',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      second: 'Second',
      startDateTime: 'StartDateTime',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      daysOfMonth: { 'type': 'array', 'itemType': 'number' },
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      endDateTime: 'string',
      freq: 'string',
      hour: 'number',
      minute: 'number',
      month: 'number',
      second: 'number',
      startDateTime: 'string',
      year: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.daysOfMonth)) {
      $dara.Model.validateArray(this.daysOfMonth);
    }
    if(Array.isArray(this.daysOfWeek)) {
      $dara.Model.validateArray(this.daysOfWeek);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReminderResponseBodyModelRemindResponses extends $dara.Model {
  /**
   * @remarks
   * The topic of the action executed by the reminder.
   * 
   * @example
   * 宝宝快去刷牙
   */
  actionTopic?: string;
  /**
   * @remarks
   * Description of the trigger condition for the reminder.
   * 
   * @example
   * 每天
   */
  dayDesc?: string;
  /**
   * @remarks
   * Schedule information list, which contains detailed timing information for the reminder.
   */
  recurrenceRule?: GetReminderResponseBodyModelRemindResponsesRecurrenceRule;
  /**
   * @remarks
   * The ID of the reminder message.
   * 
   * @example
   * 20*****1
   */
  remindId?: number;
  /**
   * @remarks
   * Next reminder time.
   * 
   * @example
   * 1629850800000
   */
  remindTime?: string;
  /**
   * @remarks
   * The number of times the reminder repeats.
   * 
   * @example
   * 1
   */
  repeatCount?: number;
  /**
   * @remarks
   * The day of the week on which the reminder is triggered, indicating which day of the week the reminder occurs.
   * 
   * @example
   * 周三
   */
  week?: string;
  static names(): { [key: string]: string } {
    return {
      actionTopic: 'ActionTopic',
      dayDesc: 'DayDesc',
      recurrenceRule: 'RecurrenceRule',
      remindId: 'RemindId',
      remindTime: 'RemindTime',
      repeatCount: 'RepeatCount',
      week: 'Week',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionTopic: 'string',
      dayDesc: 'string',
      recurrenceRule: GetReminderResponseBodyModelRemindResponsesRecurrenceRule,
      remindId: 'number',
      remindTime: 'string',
      repeatCount: 'number',
      week: 'string',
    };
  }

  validate() {
    if(this.recurrenceRule && typeof (this.recurrenceRule as any).validate === 'function') {
      (this.recurrenceRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReminderResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * List of reminder information returned by invoking this API.
   */
  remindResponses?: GetReminderResponseBodyModelRemindResponses[];
  static names(): { [key: string]: string } {
    return {
      remindResponses: 'RemindResponses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindResponses: { 'type': 'array', 'itemType': GetReminderResponseBodyModelRemindResponses },
    };
  }

  validate() {
    if(Array.isArray(this.remindResponses)) {
      $dara.Model.validateArray(this.remindResponses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReminderResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 400
   */
  errorCode?: number;
  /**
   * @remarks
   * Detailed description of the error message.
   * 
   * @example
   * 参数不合法。
   */
  errorMsg?: string;
  /**
   * @remarks
   * Reminder information.
   */
  model?: GetReminderResponseBodyModel;
  /**
   * @remarks
   * Indicates the result of the API call. true means succeeded, and false means failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMsg: 'string',
      model: GetReminderResponseBodyModel,
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

