// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics extends $dara.Model {
  /**
   * @remarks
   * The limit on the metric.
   * 
   * *   The limit on the CPU utilization. Unit: percentage.
   * *   The limit on the memory usage. Unit: percentage.
   * *   The limit on the average number of active TCP connections per second.
   * *   The limit on the queries per second (QPS) of the Internet-facing Server Load Balancer (SLB) instance.
   * *   The limit on the response time of the Internet-facing SLB instance. Unit: milliseconds.
   * 
   * @example
   * 20
   */
  metricTargetAverageUtilization?: number;
  /**
   * @remarks
   * The metric that is used to trigger the auto scaling policy. Valid values:
   * 
   * *   **CPU**: the CPU utilization.
   * *   **MEMORY**: the memory usage.
   * *   **tcpActiveConn**: the average number of active TCP connections per second of an application instance in 30 seconds.
   * *   **SLB_QPS**: the average QPS of the Internet-facing SLB instance associated with an application instance in 15 seconds.
   * *   **SLB_RT**: the average response time of the Internet-facing SLB instance in 15 seconds.
   * 
   * @example
   * CPU
   */
  metricType?: string;
  /**
   * @example
   * lb-xxx
   */
  slbId?: string;
  /**
   * @example
   * test
   */
  slbLogstore?: string;
  /**
   * @example
   * test
   */
  slbProject?: string;
  /**
   * @example
   * 80
   */
  vport?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
      slbId: 'SlbId',
      slbLogstore: 'SlbLogstore',
      slbProject: 'SlbProject',
      vport: 'Vport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
      slbId: 'string',
      slbLogstore: 'string',
      slbProject: 'string',
      vport: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

