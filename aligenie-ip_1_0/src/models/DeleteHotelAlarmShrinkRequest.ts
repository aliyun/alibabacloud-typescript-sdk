// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHotelAlarmShrinkRequest extends $dara.Model {
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
   * a7***83
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmsShrink: 'Alarms',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmsShrink: 'string',
      hotelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

