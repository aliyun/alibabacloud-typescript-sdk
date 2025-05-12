// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceAutoScalerResponseBodyScaleStrategies extends $dara.Model {
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   QPS: the queries per second (QPS) for an individual instance.
   * *   CPU: the CPU utilization.
   * 
   * @example
   * QPS
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified. If you do not set this parameter, the current service is specified by default.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The threshold of the metric that triggers auto scaling.
   * 
   * *   If you set metricName to QPS, scale-out is triggered when the average QPS for a single instance is greater than this threshold.
   * *   If you set metricName to CPU, scale-out is triggered when the average CPU utilization for a single instance is greater than this threshold.
   * 
   * @example
   * 10
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

