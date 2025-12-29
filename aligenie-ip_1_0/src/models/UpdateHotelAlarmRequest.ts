// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHotelAlarmRequestAlarms extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  alarmId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Pvk***VTA==
   */
  deviceOpenId?: string;
  /**
   * @example
   * 101
   */
  roomNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mgw/***dHQd
   */
  userOpenId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      deviceOpenId: 'DeviceOpenId',
      roomNo: 'RoomNo',
      userOpenId: 'UserOpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      deviceOpenId: 'string',
      roomNo: 'string',
      userOpenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotelAlarmRequestScheduleInfoOnce extends $dara.Model {
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
   * 0
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

export class UpdateHotelAlarmRequestScheduleInfoWeekly extends $dara.Model {
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

export class UpdateHotelAlarmRequestScheduleInfo extends $dara.Model {
  once?: UpdateHotelAlarmRequestScheduleInfoOnce;
  /**
   * @remarks
   * ONCE, WEEKLY
   * 
   * @example
   * ONCE
   */
  type?: string;
  weekly?: UpdateHotelAlarmRequestScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: UpdateHotelAlarmRequestScheduleInfoOnce,
      type: 'string',
      weekly: UpdateHotelAlarmRequestScheduleInfoWeekly,
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

export class UpdateHotelAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarms?: UpdateHotelAlarmRequestAlarms[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a381a668bc485980bed3876a75e013
   */
  hotelId?: string;
  scheduleInfo?: UpdateHotelAlarmRequestScheduleInfo;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      hotelId: 'HotelId',
      scheduleInfo: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: { 'type': 'array', 'itemType': UpdateHotelAlarmRequestAlarms },
      hotelId: 'string',
      scheduleInfo: UpdateHotelAlarmRequestScheduleInfo,
    };
  }

  validate() {
    if(Array.isArray(this.alarms)) {
      $dara.Model.validateArray(this.alarms);
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

