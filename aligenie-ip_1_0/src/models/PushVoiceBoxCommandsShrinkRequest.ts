// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushVoiceBoxCommandsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  commandsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      commandsShrink: 'Commands',
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandsShrink: 'string',
      hotelId: 'string',
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

