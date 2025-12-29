// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteHotelRoomShrinkRequest extends $dara.Model {
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
  roomNoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNoListShrink: 'RoomNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNoListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

