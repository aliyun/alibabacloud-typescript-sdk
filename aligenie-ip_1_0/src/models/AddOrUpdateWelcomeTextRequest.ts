// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOrUpdateWelcomeTextRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://ailabsaicloudservice.alicdn.com/tmp/a.wav
   */
  musicUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  welcomeText?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      musicUrl: 'MusicUrl',
      welcomeText: 'WelcomeText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      musicUrl: 'string',
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

