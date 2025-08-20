// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReminderResponseBodyModelRemindResponsesRecurrenceRule extends $dara.Model {
  /**
   * @example
   * 27
   */
  day?: number;
  daysOfMonth?: number[];
  daysOfWeek?: number[];
  /**
   * @example
   * 1661598000000
   */
  endDateTime?: string;
  /**
   * @example
   * WEEKLY
   */
  freq?: string;
  /**
   * @example
   * 18
   */
  hour?: number;
  /**
   * @example
   * 0
   */
  minute?: number;
  /**
   * @example
   * 8
   */
  month?: number;
  /**
   * @example
   * 0
   */
  second?: number;
  /**
   * @example
   * 1630054800000
   */
  startDateTime?: string;
  /**
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
   * @example
   * 宝宝快去刷牙
   */
  actionTopic?: string;
  /**
   * @example
   * 每天
   */
  dayDesc?: string;
  recurrenceRule?: GetReminderResponseBodyModelRemindResponsesRecurrenceRule;
  /**
   * @example
   * 20*****1
   */
  remindId?: number;
  /**
   * @example
   * 1629850800000
   */
  remindTime?: string;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  /**
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
   * @example
   * 400
   */
  errorCode?: number;
  /**
   * @example
   * 参数不合法。
   */
  errorMsg?: string;
  model?: GetReminderResponseBodyModel;
  /**
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

