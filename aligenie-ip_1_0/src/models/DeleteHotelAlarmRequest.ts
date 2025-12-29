// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHotelAlarmRequestAlarms extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5029
   */
  alarmId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PvkB***TA==
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
   * mgw/k***HQd
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

export class DeleteHotelAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alarms?: DeleteHotelAlarmRequestAlarms[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: { 'type': 'array', 'itemType': DeleteHotelAlarmRequestAlarms },
      hotelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alarms)) {
      $dara.Model.validateArray(this.alarms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

