// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusNextScaleMetrics extends $dara.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * *   **cpu**: the CPU utilization.
   * *   **memory**: the memory usage.
   * *   **tcpActiveConn**: the number of active TCP connections.
   * *   **slb_incall_qps**: the QPS of the Internet-facing SLB instance.
   * *   **slb_incall_rt**: the response time of the Internet-facing SLB instance.
   * 
   * @example
   * cpu
   */
  name?: string;
  /**
   * @remarks
   * The metric value as a percentage that triggers the application scale-in next time.
   * 
   * @example
   * 10
   */
  nextScaleInAverageUtilization?: number;
  /**
   * @remarks
   * The metric value as a percentage that triggers the application scale-out next time.
   * 
   * @example
   * 21
   */
  nextScaleOutAverageUtilization?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nextScaleInAverageUtilization: 'NextScaleInAverageUtilization',
      nextScaleOutAverageUtilization: 'NextScaleOutAverageUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nextScaleInAverageUtilization: 'number',
      nextScaleOutAverageUtilization: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

