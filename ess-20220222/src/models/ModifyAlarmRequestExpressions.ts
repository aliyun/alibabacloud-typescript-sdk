// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAlarmRequestExpressions extends $dara.Model {
  /**
   * @remarks
   * The operator that is used to compare the metric value and the threshold. Valid values:
   * 
   * *   If the metric value is greater than or equal to the threshold, set the value to `>=`.
   * *   If the metric value is less than or equal to the threshold, set the value to `<=`.
   * *   If the metric value is greater than the threshold, set the value to `>`.
   * *   If the metric value is less than the threshold, set the value to `<`.
   * 
   * Default value: >=.
   * 
   * @example
   * >=
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The name of the metric that is specified in the multi-metric alert rule. The valid values vary based on the metric type.
   * 
   * *   If you set the MetricType parameter to custom, the valid values are your custom metrics.
   * 
   * *   If you set the MetricType parameter to system, the MetricName parameter has the following valid values:
   * 
   *     *   CpuUtilization: the CPU utilization of an ECS instance. Unit: %.
   *     *   IntranetTx: the outbound traffic over the internal network from an ECS instance. Unit: KB/min.
   *     *   IntranetRx: the inbound traffic over the Internet to an ECS instance that resides in a VPC. Unit: KB/min.
   *     *   VpcInternetTx: the outbound traffic over the Internet from an ECS instance that resides in a VPC. Unit: KB/min.
   *     *   VpcInternetRx: the inbound traffic over the Internet to an ECS instance that resides in a VPC. Unit: KB/min.
   *     *   SystemDiskReadBps: the number of bytes read from the system disk used by an ECS instance per second.
   *     *   SystemDiskWriteBps: the number of bytes written to the system disk used by an ECS instance per second.
   *     *   SystemDiskReadOps: the number of read operations on the system disk used by an ECS instance per second.
   *     *   SystemDiskWriteOps: the number of write operations on the system disk used by an ECS instance per second.
   *     *   CpuUtilizationAgent: the CPU utilization of an agent. Unit: %.
   *     *   GpuUtilizationAgent: the GPU utilization of an agent. Unit: %.
   *     *   GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory of an agent.
   *     *   GpuMemoryUtilizationAgent: the GPU memory usage of an agent. Unit: %.
   *     *   MemoryUtilization: the memory usage of an agent. Unit: %.
   *     *   LoadAverage: the average system load of an agent.
   *     *   TcpConnection: the total number of TCP connections of an agent.
   *     *   TcpConnection: the number of established TCP connections of an agent.
   *     *   PackagesNetOut: the number of packets that are sent by the internal NIC used by an agent.
   *     *   PackagesNetIn: the number of packets that are received by the internal NIC used by an agent.
   *     *   EciPodCpuUtilization: the CPU utilization of an elastic container instance. Unit: %.
   *     *   EciPodMemoryUtilization: the memory usage of an elastic container instance. Unit: %.
   * 
   * For more information, see [Event-triggered task for system monitoring](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The period of time during which statistics about the metrics in the multi-metric alert rule is collected. Unit: seconds. Valid values:
   * 
   * *   15
   * *   60
   * *   120
   * *   300
   * *   900
   * 
   * > If your scaling group is of the ECS type and the event-triggered task associated with your scaling group monitors CloudMonitor metrics, you can set the Period parameter to 15. In other cases, you can set the Period parameter to 60, 120, 300, or 900. In most cases, the name of a CloudMonitor metric contains Agent.
   * 
   * Default value: 300.
   * 
   * @example
   * 300
   */
  period?: number;
  /**
   * @remarks
   * The method that is used to aggregate statistics about the metrics that are specified in the multi-metric alert rule. Valid values:
   * 
   * *   Average
   * *   Minimum
   * *   Maximum
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The thresholds of the metric values in the multi-metric alert rule. If the thresholds are reached the specified number of times within the specified period, a scaling rule is executed.
   * 
   * @example
   * 40.0
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      statistics: 'string',
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

