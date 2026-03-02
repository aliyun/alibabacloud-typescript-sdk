// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorMetricMeasurePointData extends $dara.Model {
  /**
   * @example
   * youngGcCount
   */
  measure?: string;
  /**
   * @example
   * 08-22 17:25
   */
  timeStamp?: string;
  /**
   * @example
   * 1
   */
  value?: string;
  /**
   * @example
   * 1M
   */
  valueWithUnit?: string;
  static names(): { [key: string]: string } {
    return {
      measure: 'measure',
      timeStamp: 'timeStamp',
      value: 'value',
      valueWithUnit: 'valueWithUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measure: 'string',
      timeStamp: 'string',
      value: 'string',
      valueWithUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

