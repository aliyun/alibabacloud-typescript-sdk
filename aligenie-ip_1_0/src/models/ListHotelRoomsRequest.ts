// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelRoomsRequestHotelAdminRoom extends $dara.Model {
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelRoomsRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  hotelAdminRoom?: ListHotelRoomsRequestHotelAdminRoom;
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
      hotelAdminRoom: 'HotelAdminRoom',
      hotelId: 'HotelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelAdminRoom: ListHotelRoomsRequestHotelAdminRoom,
      hotelId: 'string',
    };
  }

  validate() {
    if(this.hotelAdminRoom && typeof (this.hotelAdminRoom as any).validate === 'function') {
      (this.hotelAdminRoom as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

