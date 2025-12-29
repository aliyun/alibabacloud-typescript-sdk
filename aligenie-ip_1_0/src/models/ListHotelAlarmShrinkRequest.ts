// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelAlarmShrinkRequest extends $dara.Model {
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  roomsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomsShrink: 'Rooms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

