// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHotelSettingRequest extends $dara.Model {
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      settingType: 'SettingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      settingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

