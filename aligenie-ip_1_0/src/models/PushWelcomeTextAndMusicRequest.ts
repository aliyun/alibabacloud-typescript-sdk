// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushWelcomeTextAndMusicRequest extends $dara.Model {
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
  templateVariable?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomName: 'RoomName',
      roomNo: 'RoomNo',
      templateVariable: 'TemplateVariable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomName: 'string',
      roomNo: 'string',
      templateVariable: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.templateVariable) {
      $dara.Model.validateMap(this.templateVariable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

