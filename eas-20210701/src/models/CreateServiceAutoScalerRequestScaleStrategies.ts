// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceAutoScalerRequestScaleStrategies extends $dara.Model {
  /**
   * @remarks
   * The name of the metric for triggering auto scaling. Valid values:
   * 
   * *   qps: the queries per second (qps) for an individual instance.
   * *   cpu: the cpu utilization.
   * * gpu[util]: gpu utilization.
   * 
   * This parameter is required.
   * 
   * @example
   * qps
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
   * *   If you set metricName to qps, scale-out is triggered when the average qps for a single instance is greater than this threshold.
   * *   If you set metricName to cpu, scale-out is triggered when the average cpu utilization for a single instance is greater than this threshold.
   * *   If you set metricName to gpu, scale-out is triggered when the average gpu utilization for a single instance is greater than this threshold.
   * 
   * This parameter is required.
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

