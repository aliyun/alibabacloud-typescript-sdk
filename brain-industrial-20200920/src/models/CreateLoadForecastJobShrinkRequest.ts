// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadForecastJobShrinkRequest extends $dara.Model {
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
  historyDataShrink?: string;
  /**
   * @example
   * latest
   */
  modelVersion?: string;
  /**
   * @example
   * 2025-12-12
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
      deviceType: 'DeviceType',
      duration: 'Duration',
      freq: 'Freq',
      historyDataShrink: 'HistoryData',
      modelVersion: 'ModelVersion',
      runDate: 'RunDate',
      systemType: 'SystemType',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessKey: 'string',
      deviceType: 'string',
      duration: 'number',
      freq: 'string',
      historyDataShrink: 'string',
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

