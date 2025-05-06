// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPoints } from "./DescribeDbclusterPerformanceResponseBodyPerformanceKeysPerformanceItemPoints";


export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster node.
   * 
   * >  The value of this parameter is not returned if the `Key` parameter is set to `PolarDBDiskUsage`.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The performance metrics that are returned.
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
   * mean_data_size
   */
  metricName?: string;
  /**
   * @remarks
   * The performance metrics.
   */
  points?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      measurement: 'Measurement',
      metricName: 'MetricName',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      measurement: 'string',
      metricName: 'string',
      points: DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
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

