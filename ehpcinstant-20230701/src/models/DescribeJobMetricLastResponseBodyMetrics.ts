// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobMetricLastResponseBodyMetrics extends $dara.Model {
  /**
   * @example
   * 1
   */
  arrayIndex?: number;
  /**
   * @example
   * {"memory_utilization": 37.42,"cpu_utilization": 1.008, "disk_utilization": 3.562}
   */
  metric?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      metric: 'Metric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: 'number',
      metric: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

