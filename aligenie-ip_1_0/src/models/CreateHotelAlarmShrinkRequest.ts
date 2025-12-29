// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHotelAlarmShrinkRequest extends $dara.Model {
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
  roomsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scheduleInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicType: 'MusicType',
      roomsShrink: 'Rooms',
      scheduleInfoShrink: 'ScheduleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicType: 'string',
      roomsShrink: 'string',
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

