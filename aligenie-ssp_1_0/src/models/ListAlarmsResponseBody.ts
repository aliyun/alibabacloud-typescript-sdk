// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmsResponseBodyResultModelMusicInfo extends $dara.Model {
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
   * Music URL
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

export class ListAlarmsResponseBodyResultModelScheduleInfoOnce extends $dara.Model {
  /**
   * @remarks
   * Trigger time: day
   * 
   * @example
   * 29
   */
  day?: number;
  /**
   * @remarks
   * Trigger time: hour
   * 
   * @example
   * 10
   */
  hour?: number;
  /**
   * @remarks
   * Trigger time: minute
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

export class ListAlarmsResponseBodyResultModelScheduleInfoStatutoryWorkingDay extends $dara.Model {
  /**
   * @remarks
   * Trigger time: hour
   * 
   * @example
   * 10
   */
  hour?: number;
  /**
   * @remarks
   * Trigger time: minute
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

export class ListAlarmsResponseBodyResultModelScheduleInfoWeekly extends $dara.Model {
  /**
   * @remarks
   * Collection of days of the week to trigger
   */
  daysOfWeek?: number[];
  /**
   * @remarks
   * Trigger time: hour
   * 
   * @example
   * 10
   */
  hour?: number;
  /**
   * @remarks
   * Trigger time: minute
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

export class ListAlarmsResponseBodyResultModelScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * One-time: This property is active when the loop type is ONCE.
   */
  once?: ListAlarmsResponseBodyResultModelScheduleInfoOnce;
  /**
   * @remarks
   * Statutory working day: This property is active when the loop Type is STATUTORYWORKINGDAY.
   */
  statutoryWorkingDay?: ListAlarmsResponseBodyResultModelScheduleInfoStatutoryWorkingDay;
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
  weekly?: ListAlarmsResponseBodyResultModelScheduleInfoWeekly;
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
      once: ListAlarmsResponseBodyResultModelScheduleInfoOnce,
      statutoryWorkingDay: ListAlarmsResponseBodyResultModelScheduleInfoStatutoryWorkingDay,
      type: 'string',
      weekly: ListAlarmsResponseBodyResultModelScheduleInfoWeekly,
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

export class ListAlarmsResponseBodyResultModel extends $dara.Model {
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
   * Music information
   */
  musicInfo?: ListAlarmsResponseBodyResultModelMusicInfo;
  /**
   * @remarks
   * Schedule information
   */
  scheduleInfo?: ListAlarmsResponseBodyResultModelScheduleInfo;
  /**
   * @remarks
   * Chinese description of loop type
   * 
   * @example
   * 单次
   */
  scheduleTypeDesc?: string;
  /**
   * @remarks
   * Status: 0 Normal, 1 Deleted, 2 Shutdown
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
   * Ringtone volume, default 40
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
      musicInfo: ListAlarmsResponseBodyResultModelMusicInfo,
      scheduleInfo: ListAlarmsResponseBodyResultModelScheduleInfo,
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

export class ListAlarmsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * current page
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * alarm list
   */
  model?: ListAlarmsResponseBodyResultModel[];
  /**
   * @remarks
   * total number of pages
   * 
   * @example
   * 10
   */
  pageCount?: number;
  /**
   * @remarks
   * number of entries per page: maximum is 100; values exceeding 100 are treated as 100
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * total number of entries
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      model: 'Model',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      model: { 'type': 'array', 'itemType': ListAlarmsResponseBodyResultModel },
      pageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * status code returned by the alarm service
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
   * 设备账号未关联
   */
  message?: string;
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 43***28C-A810-5***-8747-EC226A086881
   */
  requestId?: string;
  /**
   * @remarks
   * collection of alarm list results
   */
  result?: ListAlarmsResponseBodyResult;
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
      result: ListAlarmsResponseBodyResult,
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

