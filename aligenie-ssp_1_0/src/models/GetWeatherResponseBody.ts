// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWeatherResponseBodyResultCurrentMeteorologyTemperature extends $dara.Model {
  /**
   * @example
   * 36
   */
  current?: string;
  currentDesc?: string;
  /**
   * @example
   * 37
   */
  high?: string;
  highDesc?: string;
  /**
   * @example
   * 41
   */
  logical?: string;
  /**
   * @example
   * 28
   */
  low?: string;
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
   * @example
   * 000
   */
  code?: string;
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
  temperature?: GetWeatherResponseBodyResultCurrentMeteorologyTemperature;
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
  message?: string;
  /**
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
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

