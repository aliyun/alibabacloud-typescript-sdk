// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints } from "./DescribeDbproxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints";


export class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The performance metric.
   * 
   * @example
   * PolarProxy_CpuUsage
   */
  measurement?: string;
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * service_connections_ps
   */
  metricName?: string;
  /**
   * @remarks
   * The list of the performance metrics.
   */
  points?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
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
      points: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
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

