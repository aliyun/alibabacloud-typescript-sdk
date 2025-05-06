// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
  /**
   * @remarks
   * The time when the metric value was collected. This value is a timestamp in milliseconds.
   * 
   * @example
   * 1600822800000
   */
  timestamp?: number;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 10
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

