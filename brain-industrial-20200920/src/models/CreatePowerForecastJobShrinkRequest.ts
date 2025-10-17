// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePowerForecastJobShrinkRequest extends $dara.Model {
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
  historyDataShrink?: string;
  locationShrink?: string;
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
      historyDataShrink: 'HistoryData',
      locationShrink: 'Location',
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
      historyDataShrink: 'string',
      locationShrink: 'string',
      modelVersion: 'string',
      runDate: 'string',
      systemType: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

