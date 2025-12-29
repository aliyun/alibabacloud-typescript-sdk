// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddOrUpdateHotelSettingRequestHotelScreenSaver extends $dara.Model {
  /**
   * @example
   * https://a****jpg
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

export class AddOrUpdateHotelSettingRequestNightMode extends $dara.Model {
  defaultBright?: string;
  defaultVolume?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 22:00
   */
  end?: string;
  /**
   * @example
   * screenoff
   */
  standbyAction?: string;
  /**
   * @example
   * 7:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      defaultBright: 'DefaultBright',
      defaultVolume: 'DefaultVolume',
      enable: 'Enable',
      end: 'End',
      standbyAction: 'StandbyAction',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultBright: 'string',
      defaultVolume: 'string',
      enable: 'boolean',
      end: 'string',
      standbyAction: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrUpdateHotelSettingRequest extends $dara.Model {
  hotelDeviceModeList?: string[];
  /**
   * @example
   * a7a3***013
   */
  hotelId?: string;
  hotelScreenSaver?: AddOrUpdateHotelSettingRequestHotelScreenSaver;
  nightMode?: AddOrUpdateHotelSettingRequestNightMode;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      hotelDeviceModeList: 'HotelDeviceModeList',
      hotelId: 'HotelId',
      hotelScreenSaver: 'HotelScreenSaver',
      nightMode: 'NightMode',
      settingType: 'SettingType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelDeviceModeList: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
      hotelScreenSaver: AddOrUpdateHotelSettingRequestHotelScreenSaver,
      nightMode: AddOrUpdateHotelSettingRequestNightMode,
      settingType: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hotelDeviceModeList)) {
      $dara.Model.validateArray(this.hotelDeviceModeList);
    }
    if(this.hotelScreenSaver && typeof (this.hotelScreenSaver as any).validate === 'function') {
      (this.hotelScreenSaver as any).validate();
    }
    if(this.nightMode && typeof (this.nightMode as any).validate === 'function') {
      (this.nightMode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

