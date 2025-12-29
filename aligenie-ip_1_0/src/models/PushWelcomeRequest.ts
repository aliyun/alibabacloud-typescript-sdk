// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushWelcomeRequest extends $dara.Model {
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
  /**
   * @example
   * http://ailabsaicloudservice.alicdn.com/tmp/a.wav
   */
  welcomeMusicUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  welcomeText?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomName: 'RoomName',
      roomNo: 'RoomNo',
      welcomeMusicUrl: 'WelcomeMusicUrl',
      welcomeText: 'WelcomeText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomName: 'string',
      roomNo: 'string',
      welcomeMusicUrl: 'string',
      welcomeText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

