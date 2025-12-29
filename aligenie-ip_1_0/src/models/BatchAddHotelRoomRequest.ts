// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddHotelRoomRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e6dd44fd16084db8a60d69fd625d9f0f
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNoList?: string[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNoList: 'RoomNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNoList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.roomNoList)) {
      $dara.Model.validateArray(this.roomNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

