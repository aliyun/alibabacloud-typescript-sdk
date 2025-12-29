// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelSettingResponseBodyResultHotelScreenSaver extends $dara.Model {
  /**
   * @example
   * https://a***png
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

export class GetHotelSettingResponseBodyResultNightMode extends $dara.Model {
  /**
   * @remarks
   * 夜间模式下的默认亮度
   */
  defaultBright?: string;
  /**
   * @remarks
   * 夜间模式下的默认音量
   */
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
   * 07:00
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

export class GetHotelSettingResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 0
   */
  deleteToken?: number;
  /**
   * @example
   * {}
   */
  extInfo?: string;
  hotelDeviceModeList?: string[];
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  hotelScreenSaver?: GetHotelSettingResponseBodyResultHotelScreenSaver;
  nightMode?: GetHotelSettingResponseBodyResultNightMode;
  /**
   * @example
   * SCREENSAVER
   */
  settingType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      deleteToken: 'DeleteToken',
      extInfo: 'ExtInfo',
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
      deleteToken: 'number',
      extInfo: 'string',
      hotelDeviceModeList: { 'type': 'array', 'itemType': 'string' },
      hotelId: 'string',
      hotelScreenSaver: GetHotelSettingResponseBodyResultHotelScreenSaver,
      nightMode: GetHotelSettingResponseBodyResultNightMode,
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

export class GetHotelSettingResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
  result?: GetHotelSettingResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetHotelSettingResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

