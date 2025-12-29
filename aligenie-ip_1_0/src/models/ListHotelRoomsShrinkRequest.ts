// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelRoomsShrinkRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelAdminRoomShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  static names(): { [key: string]: string } {
    return {
      hotelAdminRoomShrink: 'HotelAdminRoom',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelAdminRoomShrink: 'string',
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

