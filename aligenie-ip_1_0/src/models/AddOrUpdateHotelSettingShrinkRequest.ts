// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOrUpdateHotelSettingShrinkRequest extends $dara.Model {
  hotelDeviceModeListShrink?: string;
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  hotelScreenSaverShrink?: string;
  nightModeShrink?: string;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeListShrink: 'HotelDeviceModeList',
      hotelId: 'HotelId',
      hotelScreenSaverShrink: 'HotelScreenSaver',
      nightModeShrink: 'NightMode',
      settingType: 'SettingType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeListShrink: 'string',
      hotelId: 'string',
      hotelScreenSaverShrink: 'string',
      nightModeShrink: 'string',
      settingType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

