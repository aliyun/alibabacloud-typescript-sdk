// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadForecastByFileUrlJobRequest extends $dara.Model {
  /**
   * @example
   * stationA
   */
  businessKey?: string;
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
   * FIFTEEN_MIN
   */
  freq?: string;
  /**
   * @example
   * https://bucket.oss-cn-hangzhou.aliyuncs.com/dir/target_file.csv
   */
  historyUrl?: string;
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
   * load
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
      deviceType: 'DeviceType',
      duration: 'Duration',
      freq: 'Freq',
      historyUrl: 'HistoryUrl',
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
      deviceType: 'string',
      duration: 'number',
      freq: 'string',
      historyUrl: 'string',
      modelVersion: 'string',
      runDate: 'string',
      systemType: 'string',
      timeColumn: 'string',
      timeZone: 'string',
      valueColumn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

