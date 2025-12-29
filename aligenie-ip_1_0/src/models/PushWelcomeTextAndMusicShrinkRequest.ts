// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushWelcomeTextAndMusicShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  roomName?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  templateVariableShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomName: 'RoomName',
      roomNo: 'RoomNo',
      templateVariableShrink: 'TemplateVariable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomName: 'string',
      roomNo: 'string',
      templateVariableShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

