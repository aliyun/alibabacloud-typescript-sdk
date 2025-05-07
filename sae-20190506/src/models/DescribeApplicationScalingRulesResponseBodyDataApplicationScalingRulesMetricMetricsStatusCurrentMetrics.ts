// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusCurrentMetrics extends $dara.Model {
  /**
   * @remarks
   * The current value of the metric.
   * 
   * @example
   * 0
   */
  currentValue?: number;
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
   * The type of the data. This parameter corresponds to the metric.
   * 
   * *   **Resource**: used when the metric is the **CPU utilization** or **memory usage**.
   * *   **Pods**: used when the metric is the **number of active TCP connections**.
   * *   **External**: used when the metric is about the **SLB** instance or from **Application Real-Time Monitoring Service (ARMS)**.
   * 
   * @example
   * Resource
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentValue: 'CurrentValue',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValue: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

