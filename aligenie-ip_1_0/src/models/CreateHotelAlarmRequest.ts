// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHotelAlarmRequestScheduleInfoOnce extends $dara.Model {
  /**
   * @example
   * 20
   */
  day?: number;
  /**
   * @example
   * 19
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

export class CreateHotelAlarmRequestScheduleInfoWeekly extends $dara.Model {
  daysOfWeek?: number[];
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

export class CreateHotelAlarmRequestScheduleInfo extends $dara.Model {
  once?: CreateHotelAlarmRequestScheduleInfoOnce;
  /**
   * @remarks
   * ONCE, WEEKLY
   * 
   * This parameter is required.
   */
  type?: string;
  weekly?: CreateHotelAlarmRequestScheduleInfoWeekly;
  static names(): { [key: string]: string } {
    return {
      once: 'Once',
      type: 'Type',
      weekly: 'Weekly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      once: CreateHotelAlarmRequestScheduleInfoOnce,
      type: 'string',
      weekly: CreateHotelAlarmRequestScheduleInfoWeekly,
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

export class CreateHotelAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  /**
   * @example
   * DOU_YIN
   */
  musicType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rooms?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  scheduleInfo?: CreateHotelAlarmRequestScheduleInfo;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicType: 'MusicType',
      rooms: 'Rooms',
      scheduleInfo: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicType: 'string',
      rooms: { 'type': 'array', 'itemType': 'string' },
      scheduleInfo: CreateHotelAlarmRequestScheduleInfo,
    };
  }

  validate() {
    if(Array.isArray(this.rooms)) {
      $dara.Model.validateArray(this.rooms);
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

