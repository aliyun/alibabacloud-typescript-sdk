// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlarmsResponseBodyAlarmListDimensions } from "./DescribeAlarmsResponseBodyAlarmListDimensions";
import { DescribeAlarmsResponseBodyAlarmListExpressions } from "./DescribeAlarmsResponseBodyAlarmListExpressions";
import { DescribeAlarmsResponseBodyAlarmListHybridMetrics } from "./DescribeAlarmsResponseBodyAlarmListHybridMetrics";


export class DescribeAlarmsResponseBodyAlarmList extends $dara.Model {
  /**
   * @remarks
   * The unique identifiers of the scaling rules that are associated with the event-triggered task.
   */
  alarmActions?: string[];
  /**
   * @remarks
   * The ID of the event-triggered task.
   * 
   * @example
   * asg-bp1hvbnmkl10vll5****_f95ce797-dc2e-4bad-9618-14fee7d1****
   */
  alarmTaskId?: string;
  /**
   * @remarks
   * The operator that is used to compare the metric value and the metric threshold.
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
   * The description of the event-triggered task.
   * 
   * @example
   * Test alarm task.
   */
  description?: string;
  /**
   * @remarks
   * The metric dimensions.
   */
  dimensions?: DescribeAlarmsResponseBodyAlarmListDimensions[];
  /**
   * @remarks
   * The effective period of the event-triggered task.
   * 
   * @example
   * Test
   */
  effective?: string;
  /**
   * @remarks
   * Indicates whether the event-triggered task feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The number of consecutive times that the threshold must be reached before a scaling rule is executed. For example, if you set this parameter to 3, the average CPU utilization must reach or exceed 80% three times in a row before a scaling rule is executed.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The alert conditions of the multi-metric alert rule.
   */
  expressions?: DescribeAlarmsResponseBodyAlarmListExpressions[];
  /**
   * @remarks
   * The relationship between the trigger conditions that are specified in the multi-metric alert rule. Valid values:
   * 
   * *   `&&`: An alert is triggered only if all metrics in the multi-metric alert rule meet their trigger conditions. In this case, an alert is triggered only if the results of all trigger conditions that are specified in the multi-metric alert rule are `true`.
   * *   `||`: An alert is triggered only if one of the metrics in the multi-metric alert rule meets its trigger condition.
   * 
   * @example
   * &&
   */
  expressionsLogicOperator?: string;
  /**
   * @remarks
   * The Hybrid Cloud Monitoring metrics.
   */
  hybridMetrics?: DescribeAlarmsResponseBodyAlarmListHybridMetrics[];
  /**
   * @remarks
   * The ID of the Hybrid Cloud Monitoring namespace.
   * 
   * For information about how to manage Hybrid Cloud Monitoring namespaces, see [Manage namespaces](https://help.aliyun.com/document_detail/217606.html).
   * 
   * @example
   * aliyun-test
   */
  hybridMonitorNamespace?: string;
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   CpuUtilization: the CPU utilization of an Elastic Compute Service (ECS) instance. Unit: %.
   * *   ConcurrentConnections: the number of current connections to an ECS instance.
   * *   IntranetTx: the outbound traffic over an internal network. Unit: KB/min.
   * *   IntranetRx: the inbound traffic over an internal network. Unit: KB/min.
   * *   VpcInternetTx: the outbound traffic over a virtual private cloud (VPC). Unit: KB/min.
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
   * *   LoadBalancerRealServerAverageQps: the queries per second (QPS) of an instance.
   * 
   * For more information, see [Event-triggered tasks of the system monitoring type](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The type of the metric. Valid values:
   * 
   * *   system: system metrics of CloudMonitor
   * *   custom: custom metrics that are reported to CloudMonitor.
   * *   hybrid: metrics of Hybrid Cloud Monitoring.
   * 
   * @example
   * system
   */
  metricType?: string;
  /**
   * @remarks
   * The name of the event-triggered task.
   * 
   * @example
   * TestAlarmTask
   */
  name?: string;
  /**
   * @remarks
   * The statistical period of the metric data. Unit: seconds. Valid values:
   * 
   * *   15
   * *   60
   * *   120
   * *   300
   * *   900
   * 
   * >  You can set the value of this parameter to 15 Seconds only for scaling groups of the ECS type.
   * 
   * @example
   * 300
   */
  period?: number;
  /**
   * @remarks
   * The PromQL statement of Hybrid Cloud Monitoring.
   * 
   * @example
   * (avg(last_over_time(AliyunMnsnew_ActiveMessages{region=\\"cn-hangzhou\\",userId=\\"123456****\\",queue=\\"testQueue\\"}[900s])) by (userId))/(avg(last_over_time(AliyunEss_RunningInstanceCount{instanceId=\\"asg-bp1****\\"}[900s])) by (userId) != 0)
   */
  promQL?: string;
  /**
   * @remarks
   * The ID of the scaling group to which the event-triggered task is associated.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The status of the event-triggered task. Valid values:
   * 
   * *   ALARM: The alert condition is met and an alert is triggered.
   * *   OK: The alert condition is not met.
   * *   INSUFFICIENT_DATA: Auto Scaling cannot determine whether the alert condition is met due to insufficient data.
   * 
   * @example
   * ALARM
   */
  state?: string;
  /**
   * @remarks
   * The method that is used to aggregate the metric data. Valid values:
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
   * The threshold of the metric. If the threshold is reached the specified number of times within the statistical period, a scaling rule is executed.
   * 
   * @example
   * 80.0
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      alarmActions: 'AlarmActions',
      alarmTaskId: 'AlarmTaskId',
      comparisonOperator: 'ComparisonOperator',
      description: 'Description',
      dimensions: 'Dimensions',
      effective: 'Effective',
      enable: 'Enable',
      evaluationCount: 'EvaluationCount',
      expressions: 'Expressions',
      expressionsLogicOperator: 'ExpressionsLogicOperator',
      hybridMetrics: 'HybridMetrics',
      hybridMonitorNamespace: 'HybridMonitorNamespace',
      metricName: 'MetricName',
      metricType: 'MetricType',
      name: 'Name',
      period: 'Period',
      promQL: 'PromQL',
      scalingGroupId: 'ScalingGroupId',
      state: 'State',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmActions: { 'type': 'array', 'itemType': 'string' },
      alarmTaskId: 'string',
      comparisonOperator: 'string',
      description: 'string',
      dimensions: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmListDimensions },
      effective: 'string',
      enable: 'boolean',
      evaluationCount: 'number',
      expressions: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmListExpressions },
      expressionsLogicOperator: 'string',
      hybridMetrics: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmListHybridMetrics },
      hybridMonitorNamespace: 'string',
      metricName: 'string',
      metricType: 'string',
      name: 'string',
      period: 'number',
      promQL: 'string',
      scalingGroupId: 'string',
      state: 'string',
      statistics: 'string',
      threshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmActions)) {
      $dara.Model.validateArray(this.alarmActions);
    }
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(Array.isArray(this.expressions)) {
      $dara.Model.validateArray(this.expressions);
    }
    if(Array.isArray(this.hybridMetrics)) {
      $dara.Model.validateArray(this.hybridMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

