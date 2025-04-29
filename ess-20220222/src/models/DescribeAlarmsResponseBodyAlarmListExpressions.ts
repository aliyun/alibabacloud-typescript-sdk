// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmsResponseBodyAlarmListExpressions extends $dara.Model {
  /**
   * @remarks
   * The operator that is used to compare the metric value and the threshold.
   * 
   * *   Valid value if the metric value is greater than or equal to the threshold: >=.
   * *   Valid value if the metric value is less than or equal to the threshold: <=.
   * *   Valid value if the metric value is greater than the threshold: >.
   * *   Valid value if the metric value is less than the threshold: <.
   * 
   * @example
   * >=
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The name of the metric that is specified in the multi-metric alert rule. Valid values:
   * 
   * *   CpuUtilization: the CPU utilization of an ECS instance. Unit: %.
   * *   ConcurrentConnections: the number of current connections to an ECS instance.
   * *   IntranetTx: the outbound traffic over an internal network. Unit: KB/min.
   * *   IntranetRx: the inbound traffic over an internal network. Unit: KB/min.
   * *   VpcInternetTx: the outbound traffic over a VPC. Unit: KB/min.
   * *   VpcInternetRx: the inbound traffic over a VPC. Unit: KB/min.
   * *   SystemDiskReadBps: the number of bytes read from the system disk per second.
   * *   SystemDiskWriteBps: the number of bytes written to the system disk per second.
   * *   SystemDiskReadOps: the read IOPS of the system disk. Unit: counts/s.
   * *   SystemDiskWriteOps: the write IOPS of the system disk. Unit: counts/s.
   * *   CpuUtilizationAgent: the CPU utilization. Unit: %.
   * *   GpuUtilizationAgent: the GPU utilization. Unit: %.
   * *   GpuMemoryFreeUtilizationAgent: the idle GPU memory usage. Unit: %.
   * *   GpuMemoryUtilizationAgent: the GPU memory usage. Unit: %.
   * *   MemoryUtilization: the memory usage. Unit: %.
   * *   LoadAverage: the average system load.
   * *   TcpConnection: the total number of TCP connections.
   * *   TcpConnection: the number of established TCP connections.
   * *   PackagesNetOut: the number of packets sent by the internal NIC. Unit: counts/s.
   * *   PackagesNetIn: the number of packets received by the internal NIC. Unit: counts/s.
   * *   PackagesNetOut: the number of packets sent by the public NIC. Unit: counts/s.
   * *   PackagesNetIn: the number of packets received by the public NIC. Unit: counts/s.
   * *   EciPodCpuUtilization: the CPU utilization. Unit: %.
   * *   EciPodMemoryUtilization: the memory usage. Unit: %.
   * *   LoadBalancerRealServerAverageQps: the QPS of an instance.
   * 
   * For more information, see [Event-triggered tasks of the system monitoring type](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The statistical period of the metric data in the multi-metric alert rule. Unit: seconds. Valid values:
   * 
   * *   15
   * *   60
   * *   120
   * *   300
   * *   900
   * 
   * >  If your scaling group is of the ECS type and the event-triggered task that is associated with your scaling group monitors CloudMonitor metrics, you can set Period to 15. In most cases, the name of a CloudMonitor metric contains Agent.
   * 
   * @example
   * 900
   */
  period?: number;
  /**
   * @remarks
   * The method that is used to aggregate statistics about the metrics in the multi-metric alert rule. Valid values:
   * 
   * *   Average: the average value
   * *   Minimum: the minimum value
   * *   Maximum: the maximum value
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold of the metric value. If the threshold is reached the specified number of times within the specified period, a scaling rule is executed.
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

