// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelAlarmResponseBodyResultScheduleInfoOnce extends $dara.Model {
  /**
   * @example
   * 20
   */
  day?: number;
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
   * @example
   * 30
   */
  minute?: number;
  /**
   * @example
   * 9
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

export class ListHotelAlarmResponseBodyResultScheduleInfoWeekly extends $dara.Model {
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

export class ListHotelAlarmResponseBodyResultScheduleInfo extends $dara.Model {
  once?: ListHotelAlarmResponseBodyResultScheduleInfoOnce;
  /**
   * @remarks
   * ONCE, WEEKLY
   * 
   * @example
   * ONCE
   */
  type?: string;
  weekly?: ListHotelAlarmResponseBodyResultScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: ListHotelAlarmResponseBodyResultScheduleInfoOnce,
      type: 'string',
      weekly: ListHotelAlarmResponseBodyResultScheduleInfoWeekly,
    };
  }

  validate() {
    if(this.once && typeof (this.once as any).validate === 'function') {
      (this.once as any).validate();
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

export class ListHotelAlarmResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 5039
   */
  alarmId?: number;
  /**
   * @example
   * PvkB****VVTA==
   */
  deviceOpenId?: string;
  scheduleInfo?: ListHotelAlarmResponseBodyResultScheduleInfo;
  /**
   * @example
   * mgw/k***HQd
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      deviceOpenId: 'DeviceOpenId',
      scheduleInfo: 'ScheduleInfo',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      deviceOpenId: 'string',
      scheduleInfo: ListHotelAlarmResponseBodyResultScheduleInfo,
      userOpenId: 'string',
    };
  }

  validate() {
    if(this.scheduleInfo && typeof (this.scheduleInfo as any).validate === 'function') {
      (this.scheduleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelAlarmResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  message?: string;
  /**
   * @example
   * 43***881
   */
  requestId?: string;
  result?: ListHotelAlarmResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListHotelAlarmResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

