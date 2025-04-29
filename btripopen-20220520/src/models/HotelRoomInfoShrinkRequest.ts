// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelRoomInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  roomIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      roomIdsShrink: 'room_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

