// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the metric. This value is a UNIX timestamp. Unit: millisecond.
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
   * 9.33
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

