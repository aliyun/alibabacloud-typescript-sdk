// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOrUpdateScreenSaverRequestHotelScreenSaver extends $dara.Model {
  /**
   * @example
   * xxx.png
   */
  screenSaverPicUrl?: string;
  /**
   * @example
   * common-weather
   */
  screenSaverStyle?: string;
  static names(): { [key: string]: string } {
    return {
      screenSaverPicUrl: 'ScreenSaverPicUrl',
      screenSaverStyle: 'ScreenSaverStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenSaverPicUrl: 'string',
      screenSaverStyle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateScreenSaverRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelScreenSaver?: AddOrUpdateScreenSaverRequestHotelScreenSaver;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      hotelScreenSaver: 'HotelScreenSaver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      hotelScreenSaver: AddOrUpdateScreenSaverRequestHotelScreenSaver,
    };
  }

  validate() {
    if(this.hotelScreenSaver && typeof (this.hotelScreenSaver as any).validate === 'function') {
      (this.hotelScreenSaver as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

