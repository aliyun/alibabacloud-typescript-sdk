// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlarmResponseBodyResultMusicInfo extends $dara.Model {
  /**
   * @remarks
   * Ringtone ID
   * 
   * @example
   * 1
   */
  musicId?: number;
  /**
   * @remarks
   * Ringtone Name
   * 
   * @example
   * xx铃声
   */
  musicName?: string;
  /**
   * @remarks
   * Ringtone Category ID
   * 
   * @example
   * 1
   */
  musicType?: number;
  /**
   * @remarks
   * Ringtone Category Name
   * 
   * @example
   * xx音乐
   */
  musicTypeName?: string;
  /**
   * @remarks
   * Ringtone URL
   * 
   * @example
   * http://xx
   */
  musicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      musicId: 'MusicId',
      musicName: 'MusicName',
      musicType: 'MusicType',
      musicTypeName: 'MusicTypeName',
      musicUrl: 'MusicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicId: 'number',
      musicName: 'string',
      musicType: 'number',
      musicTypeName: 'string',
      musicUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBodyResultScheduleInfoOnce extends $dara.Model {
  /**
   * @remarks
   * Trigger time: Day
   * 
   * @example
   * 29
   */
  day?: number;
  /**
   * @remarks
   * Trigger Time: Hour
   * 
   * @example
   * 10
   */
  hour?: number;
  /**
   * @remarks
   * Trigger Time: Minute
   * 
   * @example
   * 0
   */
  minute?: number;
  /**
   * @remarks
   * Trigger Time: Month
   * 
   * @example
   * 7
   */
  month?: number;
  /**
   * @remarks
   * Trigger Time: Year
   * 
   * @example
   * 2022
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      year: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBodyResultScheduleInfoStatutoryWorkingDay extends $dara.Model {
  /**
   * @remarks
   * Trigger Time: Hour
   * 
   * @example
   * 10
   */
  hour?: number;
  /**
   * @remarks
   * Trigger Time: Minute
   * 
   * @example
   * 0
   */
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hour: 'number',
      minute: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBodyResultScheduleInfoWeekly extends $dara.Model {
  /**
   * @remarks
   * Collection of days of the week to trigger: Numeric values between 1 and 7, where each number corresponds to a specific day of the week. If triggered every day, include all numbers.
   */
  daysOfWeek?: number[];
  /**
   * @remarks
   * Trigger time: Hour
   * 
   * @example
   * 10
   */
  hour?: number;
  /**
   * @remarks
   * Trigger time: Minute
   * 
   * @example
   * 0
   */
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.daysOfWeek)) {
      $dara.Model.validateArray(this.daysOfWeek);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBodyResultScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * One-time: This property is active when the loop type is ONCE.
   */
  once?: GetAlarmResponseBodyResultScheduleInfoOnce;
  /**
   * @remarks
   * Statutory working day: This property is active when the loop Type is STATUTORYWORKINGDAY.
   */
  statutoryWorkingDay?: GetAlarmResponseBodyResultScheduleInfoStatutoryWorkingDay;
  /**
   * @remarks
   * Schedule Type / Loop Type: ONCE -> One-time, WEEKLY -> Weekly loop, STATUTORYWORKINGDAY -> Statutory working day
   * 
   * @example
   * ONCE
   */
  type?: string;
  /**
   * @remarks
   * Weekly loop: This property is active when the loop Type is WEEKLY.
   */
  weekly?: GetAlarmResponseBodyResultScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      statutoryWorkingDay: 'StatutoryWorkingDay',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: GetAlarmResponseBodyResultScheduleInfoOnce,
      statutoryWorkingDay: GetAlarmResponseBodyResultScheduleInfoStatutoryWorkingDay,
      type: 'string',
      weekly: GetAlarmResponseBodyResultScheduleInfoWeekly,
    };
  }

  validate() {
    if(this.once && typeof (this.once as any).validate === 'function') {
      (this.once as any).validate();
    }
    if(this.statutoryWorkingDay && typeof (this.statutoryWorkingDay as any).validate === 'function') {
      (this.statutoryWorkingDay as any).validate();
    }
    if(this.weekly && typeof (this.weekly as any).validate === 'function') {
      (this.weekly as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Alarm ID
   * 
   * @example
   * 1234567
   */
  alarmId?: number;
  /**
   * @remarks
   * Ringtone Information
   */
  musicInfo?: GetAlarmResponseBodyResultMusicInfo;
  /**
   * @remarks
   * Schedule Information
   */
  scheduleInfo?: GetAlarmResponseBodyResultScheduleInfo;
  /**
   * @remarks
   * Chinese description of the loop type
   * 
   * @example
   * 单次
   */
  scheduleTypeDesc?: string;
  /**
   * @remarks
   * status: 0 Normal, 1 deleted, 2 shutdown
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Trigger date description (one-time)
   * 
   * @example
   * 2022-07-29
   */
  triggerDateDesc?: string;
  /**
   * @remarks
   * Trigger time description
   * 
   * @example
   * 10:00
   */
  triggerTimeDesc?: string;
  /**
   * @remarks
   * Ringtone volume
   * 
   * @example
   * 40
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      musicInfo: 'MusicInfo',
      scheduleInfo: 'ScheduleInfo',
      scheduleTypeDesc: 'ScheduleTypeDesc',
      status: 'Status',
      triggerDateDesc: 'TriggerDateDesc',
      triggerTimeDesc: 'TriggerTimeDesc',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      musicInfo: GetAlarmResponseBodyResultMusicInfo,
      scheduleInfo: GetAlarmResponseBodyResultScheduleInfo,
      scheduleTypeDesc: 'string',
      status: 'number',
      triggerDateDesc: 'string',
      triggerTimeDesc: 'string',
      volume: 'number',
    };
  }

  validate() {
    if(this.musicInfo && typeof (this.musicInfo as any).validate === 'function') {
      (this.musicInfo as any).validate();
    }
    if(this.scheduleInfo && typeof (this.scheduleInfo as any).validate === 'function') {
      (this.scheduleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code returned by the alarm service
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * error message
   * 
   * @example
   * id为空
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 43***28C-A810-5***-8747-EC226A086881
   */
  requestId?: string;
  /**
   * @remarks
   * Alarm details
   */
  result?: GetAlarmResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetAlarmResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

