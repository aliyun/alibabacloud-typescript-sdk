// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceAutoScalerResponseBodyCurrentMetrics extends $dara.Model {
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   QPS
   * *   CPU
   * 
   * @example
   * qps
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 10
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
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

