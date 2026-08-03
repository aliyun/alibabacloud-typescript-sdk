// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWeatherResponseBodyResultCurrentMeteorologyTemperature extends $dara.Model {
  /**
   * @remarks
   * Current temperature value
   * 
   * @example
   * 36
   */
  current?: string;
  /**
   * @remarks
   * Description of the current temperature value
   * 
   * @example
   * 36度
   */
  currentDesc?: string;
  /**
   * @remarks
   * Maximum temperature value
   * 
   * @example
   * 37
   */
  high?: string;
  /**
   * @remarks
   * Description of the maximum temperature value
   * 
   * @example
   * 37度
   */
  highDesc?: string;
  /**
   * @remarks
   * Temperature with logic, as follows:
   * 
   * @example
   * 41
   */
  logical?: string;
  /**
   * @remarks
   * Lowest temperature
   * 
   * @example
   * 28
   */
  low?: string;
  /**
   * @remarks
   * Description of the lowest temperature
   * 
   * @example
   * 28度
   */
  lowDesc?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      currentDesc: 'CurrentDesc',
      high: 'High',
      highDesc: 'HighDesc',
      logical: 'Logical',
      low: 'Low',
      lowDesc: 'LowDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'string',
      currentDesc: 'string',
      high: 'string',
      highDesc: 'string',
      logical: 'string',
      low: 'string',
      lowDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherResponseBodyResultCurrentMeteorologyWeather extends $dara.Model {
  /**
   * @remarks
   * Weather code: for example, "000,100"
   * 
   * @example
   * 000
   */
  code?: string;
  /**
   * @remarks
   * Weather name description: "Sunny (000), Multicloud (100), Overcast (101), Rain (200), Light rain (201), Light to moderate rain (202), Moderate rain (203), Moderate to heavy rain (204), Heavy rain (205), Heavy to storm rain (206), Storm rain (207), Heavy storm rain (209), Severe storm rain (211), Showers (212), Thunderstorms (213), Freezing rain (214), Snow (300), Sleet (301), Snow showers (302), Light snow (303), Light to moderate snow (304), Moderate snow (305), Heavy snow (307), Blizzard (309), Fog (400), Dust (501), Sand blowing (502), Sandstorm (503), Severe sandstorm (504), Mostly sunny (000), Partly cloudy (100), Light showers (212), Lightning (213), Ice pellets (214), Thunderstorms with hail (215), Light snow showers (302), Freezing fog (400), Haze (500), Dust whirls (502), Localized showers (212), Thunderstorm (213), Ice needles (214), Hail (215), Intense showers (212)"
   * 
   * @example
   * 晴
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherResponseBodyResultCurrentMeteorology extends $dara.Model {
  /**
   * @remarks
   * Temperature
   */
  temperature?: GetWeatherResponseBodyResultCurrentMeteorologyTemperature;
  /**
   * @remarks
   * Daytime weather
   */
  weather?: GetWeatherResponseBodyResultCurrentMeteorologyWeather;
  static names(): { [key: string]: string } {
    return {
      temperature: 'Temperature',
      weather: 'Weather',
    };
  }

  static types(): { [key: string]: any } {
    return {
      temperature: GetWeatherResponseBodyResultCurrentMeteorologyTemperature,
      weather: GetWeatherResponseBodyResultCurrentMeteorologyWeather,
    };
  }

  validate() {
    if(this.temperature && typeof (this.temperature as any).validate === 'function') {
      (this.temperature as any).validate();
    }
    if(this.weather && typeof (this.weather as any).validate === 'function') {
      (this.weather as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Current weather
   */
  currentMeteorology?: GetWeatherResponseBodyResultCurrentMeteorology;
  static names(): { [key: string]: string } {
    return {
      currentMeteorology: 'CurrentMeteorology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMeteorology: GetWeatherResponseBodyResultCurrentMeteorology,
    };
  }

  validate() {
    if(this.currentMeteorology && typeof (this.currentMeteorology as any).validate === 'function') {
      (this.currentMeteorology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWeatherResponseBody extends $dara.Model {
  /**
   * @remarks
   * HttpCode
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * error message
   * 
   * @example
   * 调用成功
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
  /**
   * @remarks
   * model data
   */
  result?: GetWeatherResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetWeatherResponseBodyResult,
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

