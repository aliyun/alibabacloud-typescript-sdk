// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmsResponseBodyResultModelMusicInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  musicId?: number;
  musicName?: string;
  /**
   * @example
   * 1
   */
  musicType?: number;
  musicTypeName?: string;
  /**
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
   * @example
   * 29
   */
  day?: number;
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
   * @example
   * 0
   */
  minute?: number;
  /**
   * @example
   * 7
   */
  month?: number;
  /**
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
   * @example
   * 10
   */
  hour?: number;
  /**
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
  daysOfWeek?: number[];
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
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
  once?: ListAlarmsResponseBodyResultModelScheduleInfoOnce;
  statutoryWorkingDay?: ListAlarmsResponseBodyResultModelScheduleInfoStatutoryWorkingDay;
  /**
   * @example
   * ONCE
   */
  type?: string;
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
   * @example
   * 1234567
   */
  alarmId?: number;
  musicInfo?: ListAlarmsResponseBodyResultModelMusicInfo;
  scheduleInfo?: ListAlarmsResponseBodyResultModelScheduleInfo;
  scheduleTypeDesc?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 2022-07-29
   */
  triggerDateDesc?: string;
  /**
   * @example
   * 10:00
   */
  triggerTimeDesc?: string;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  model?: ListAlarmsResponseBodyResultModel[];
  /**
   * @example
   * 10
   */
  pageCount?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * 200
   */
  code?: number;
  message?: string;
  /**
   * @example
   * 43***28C-A810-5***-8747-EC226A086881
   */
  requestId?: string;
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

