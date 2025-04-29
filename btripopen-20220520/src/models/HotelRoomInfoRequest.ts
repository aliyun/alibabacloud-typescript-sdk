// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelRoomInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  roomIds?: number[];
  static names(): { [key: string]: string } {
    return {
      roomIds: 'room_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.roomIds)) {
      $dara.Model.validateArray(this.roomIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

