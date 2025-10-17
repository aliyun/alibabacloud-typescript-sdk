// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePowerForecastByFileUrlJobRequestLocation extends $dara.Model {
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

export class CreatePowerForecastByFileUrlJobRequest extends $dara.Model {
  /**
   * @example
   * stationA
   */
  businessKey?: string;
  /**
   * @example
   * FULL
   */
  dataMode?: string;
  /**
   * @example
   * solarInverter
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
  /**
   * @example
   * https://bucket.oss-cn-hangzhou.aliyuncs.com/dir/target_file.csv
   */
  historyUrl?: string;
  location?: CreatePowerForecastByFileUrlJobRequestLocation;
  /**
   * @example
   * latest
   */
  modelVersion?: string;
  /**
   * @example
   * 2025-01-01
   */
  runDate?: string;
  /**
   * @example
   * solar
   */
  systemType?: string;
  /**
   * @example
   * runTime
   */
  timeColumn?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @example
   * value
   */
  valueColumn?: string;
  static names(): { [key: string]: string } {
    return {
      businessKey: 'BusinessKey',
      dataMode: 'DataMode',
      deviceType: 'DeviceType',
      duration: 'Duration',
      forecastHorizon: 'ForecastHorizon',
      freq: 'Freq',
      historyUrl: 'HistoryUrl',
      location: 'Location',
      modelVersion: 'ModelVersion',
      runDate: 'RunDate',
      systemType: 'SystemType',
      timeColumn: 'TimeColumn',
      timeZone: 'TimeZone',
      valueColumn: 'ValueColumn',
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
      historyUrl: 'string',
      location: CreatePowerForecastByFileUrlJobRequestLocation,
      modelVersion: 'string',
      runDate: 'string',
      systemType: 'string',
      timeColumn: 'string',
      timeZone: 'string',
      valueColumn: 'string',
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

