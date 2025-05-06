// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints } from "./DescribeDbnodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints";


export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
  /**
   * @remarks
   * The performance metrics that you want to query.
   * 
   * @example
   * PolarDBDiskUsage
   */
  measurement?: string;
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * mean_sys_dir_size
   */
  metricName?: string;
  /**
   * @remarks
   * The performance metrics.
   */
  points?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
  static names(): { [key: string]: string } {
    return {
      measurement: 'Measurement',
      metricName: 'MetricName',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurement: 'string',
      metricName: 'string',
      points: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
    };
  }

  validate() {
    if(this.points && typeof (this.points as any).validate === 'function') {
      (this.points as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

