// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadForecastJobRequestHistoryData extends $dara.Model {
  /**
   * @example
   * 2025-12-12 00:00:00
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

export class CreateLoadForecastJobRequest extends $dara.Model {
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
  historyData?: CreateLoadForecastJobRequestHistoryData[];
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
      historyData: 'HistoryData',
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
      historyData: { 'type': 'array', 'itemType': CreateLoadForecastJobRequestHistoryData },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

