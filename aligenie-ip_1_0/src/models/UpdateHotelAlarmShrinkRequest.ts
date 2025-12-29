// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHotelAlarmShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarmsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a381a668bc485980bed3876a75e013
   */
  hotelId?: string;
  scheduleInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      alarmsShrink: 'Alarms',
      hotelId: 'HotelId',
      scheduleInfoShrink: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmsShrink: 'string',
      hotelId: 'string',
      scheduleInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

