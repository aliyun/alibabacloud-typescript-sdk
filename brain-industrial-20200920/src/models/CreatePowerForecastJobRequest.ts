// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePowerForecastJobRequestHistoryData extends $dara.Model {
  /**
   * @example
   * 2025-02-12 00:00:00
   */
  runTime?: string;
  /**
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      runTime: 'RunTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runTime: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePowerForecastJobRequestLocation extends $dara.Model {
  /**
   * @example
   * 10.123
   */
  altitude?: number;
  /**
   * @example
   * 40.027
   */
  latitude?: number;
  /**
   * @example
   * 120.042
   */
  longitude?: number;
  static names(): { [key: string]: string } {
    return {
      altitude: 'Altitude',
      latitude: 'Latitude',
      longitude: 'Longitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      altitude: 'number',
      latitude: 'number',
      longitude: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePowerForecastJobRequest extends $dara.Model {
  businessKey?: string;
  /**
   * @example
   * FULL
   */
  dataMode?: string;
  /**
   * @example
   * electricityMeter
   */
  deviceType?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * DAY_AHEAD
   */
  forecastHorizon?: string;
  /**
   * @example
   * FIFTEEN_MIN
   */
  freq?: string;
  historyData?: CreatePowerForecastJobRequestHistoryData[];
  location?: CreatePowerForecastJobRequestLocation;
  /**
   * @example
   * latest
   */
  modelVersion?: string;
  /**
   * @example
   * 2025-02-12
   */
  runDate?: string;
  /**
   * @example
   * load
   */
  systemType?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      businessKey: 'BusinessKey',
      dataMode: 'DataMode',
      deviceType: 'DeviceType',
      duration: 'Duration',
      forecastHorizon: 'ForecastHorizon',
      freq: 'Freq',
      historyData: 'HistoryData',
      location: 'Location',
      modelVersion: 'ModelVersion',
      runDate: 'RunDate',
      systemType: 'SystemType',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessKey: 'string',
      dataMode: 'string',
      deviceType: 'string',
      duration: 'number',
      forecastHorizon: 'string',
      freq: 'string',
      historyData: { 'type': 'array', 'itemType': CreatePowerForecastJobRequestHistoryData },
      location: CreatePowerForecastJobRequestLocation,
      modelVersion: 'string',
      runDate: 'string',
      systemType: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyData)) {
      $dara.Model.validateArray(this.historyData);
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

