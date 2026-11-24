// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlarmRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension information associated with the metric. Valid values vary based on the monitoring type of the event-triggered task:
   * - If the event-triggered task is of the custom monitoring type (MetricType=custom), the valid values are not limited and can be specified by you.
   * 
   * - If the event-triggered task is of the system monitoring type (MetricType=system), valid values:
   * 
   *     - user_id: the ID of your account.
   *     - scaling_group: the monitored scaling group.
   *     - device: the type of the network interface controller (NIC) device.
   *     - state: the state of the TCP connection.
   *     - rulePool: the ALB server group specified for the QPS monitoring metrics.
   * 
   * @example
   * device
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the dimension information associated with the metric. Valid values vary based on Dimensions.DimensionKey:
   * - If Dimensions.DimensionKey is custom, which means the event-triggered task is of the custom monitoring type (MetricType=custom), the valid values are not limited and can be specified by you.
   * 
   * - If Dimensions.DimensionKey is within the system-specified range, which means the event-triggered task is of the system monitoring type (MetricType=system), valid values:
   * 
   *     - user_id: automatically populated by the system.
   * 
   *     - scaling_group: automatically populated by the system.
   * 
   *     - device:
   * 
   *         - eth0: For classic network instances, eth0 represents the internal NIC. For VPC-connected instances, only the eth0 NIC exists.
   * 
   *         - eth1: For classic network instances, eth1 represents the public NIC.
   * 
   *     - state:
   * 
   *         - TCP_TOTAL: the total number of TCP connections.
   * 
   *         - ESTABLISHED: the number of established TCP connections.
   * 
   *     - rulePool: the ID of the ALB server group. Example: sgp-xxxxx.
   * 
   * @example
   * eth0
   */
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestExpressions extends $dara.Model {
  /**
   * @remarks
   * The comparison operator used to compare the aggregated metric value with the threshold for the multi-metric alert rule. This operator specifies the condition under which the threshold is met. Valid values:
   * 
   * - >=: The aggregated metric value is greater than or equal to the threshold.
   * - <=: The aggregated metric value is less than or equal to the threshold.
   * - >: The aggregated metric value is greater than the threshold.
   * - <: The aggregated metric value is less than the threshold.
   * 
   * Default value: >=.
   * 
   * @example
   * >=
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The name of the monitoring metrics for the multi-metric alert rule. Valid values vary based on the monitoring type of the event-triggered task:
   * 
   * - If the event-triggered task is of the custom monitoring type (MetricType=custom), the valid values are your custom metrics.
   * 
   * - If the event-triggered task is of the system monitoring type (MetricType=system), valid values: 
   *     
   *     - CpuUtilization: the CPU utilization of an ECS instance (%).
   * 
   *     - ConcurrentConnections: the number of concurrent connections to an ECS instance.
   * 
   *     - IntranetTx: the outbound internal network traffic of an ECS instance (Kb/min).
   * 
   *     - IntranetRx: the inbound internal network traffic of an ECS instance (Kb/min).
   * 
   *     - VpcInternetTx: the outbound Internet traffic of an ECS instance (Kb/min).
   * 
   *     - VpcInternetRx: the inbound Internet traffic of an ECS instance (Kb/min).
   * 
   *     - SystemDiskReadBps: the read BPS of the system cloud disk (Byte/s).
   * 
   *     - SystemDiskWriteBps: the write BPS of the system cloud disk (Byte/s).
   * 
   *     - SystemDiskReadOps: the read IOPS of the system cloud disk (operations/s).
   * 
   *     - SystemDiskWriteOps: the write IOPS of the system cloud disk (operations/s).
   * 
   *     - CpuUtilizationAgent: the CPU utilization monitored by the agent (%).
   * 
   *     - GpuUtilizationAgent: the GPU utilization monitored by the agent (%).
   * 
   *     - GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory monitored by the agent (%).
   * 
   *     - GpuMemoryUtilizationAgent: the GPU memory utilization monitored by the agent (%).
   * 
   *     - MemoryUtilization: the memory utilization monitored by the agent (%).
   * 
   *     - LoadAverage: the average system load monitored by the agent.
   * 
   *     - TcpConnection: the total number of TCP connections monitored by the agent.
   *     
   *     - TcpConnection: the number of established TCP connections monitored by the agent.
   * 
   *     - PackagesNetOut: the number of packets sent by the internal network interface controller (NIC) per second monitored by the agent (packets/s).
   * 
   *     - PackagesNetIn: the number of packets received by the internal network interface controller (NIC) per second monitored by the agent (packets/s).
   * 
   *     - PackagesNetOut: the number of packets sent by the public network interface controller (NIC) per second monitored by the agent (packets/s).
   * 
   *     - PackagesNetIn: the number of packets received by the public network interface controller (NIC) per second monitored by the agent (packets/s).
   *    
   *     - EciPodCpuUtilization: the CPU utilization (%).
   * 
   *     - EciPodMemoryUtilization: the memory utilization (%).
   * 
   *     - LoadBalancerRealServerAverageQps: the average QPS per backend server in an ALB server group (queries/s).
   * 
   * For more information, see [System monitoring event-triggered tasks](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The epoch for aggregating monitoring metric data in the multi-metric alert rule. Unit: seconds. Valid values:
   * 
   * - 15
   * - 60
   * - 120
   * - 300
   * - 900
   * 
   * > Only scaling groups of the ECS instance type support a 15-second statistical period.
   * 
   * Default value: 300.
   * 
   * @example
   * 900
   */
  period?: number;
  /**
   * @remarks
   * The method for aggregating metric data in the multi-metric alert rule. Valid values:
   * 
   * - Average: the average value.
   * - Minimum: the minimum value.
   * - Maximum: the maximum value.
   * 
   * Default value: Average.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold of the monitoring metrics in the multi-metric alert rule. When the monitoring threshold expression is met for a specified number of times, it triggers the execution of a scaling rule.
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

export class CreateAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The list of unique identifiers of the scaling rules associated with the event-triggered task.
   */
  alarmActions?: string[];
  /**
   * @remarks
   * The comparison operator used to compare the aggregated metric value with the threshold. This operator specifies the condition under which the threshold is met. Valid values:
   * 
   * - >=: The aggregated metric value is greater than or equal to the threshold.
   * - <=: The aggregated metric value is less than or equal to the threshold.
   * - >: The aggregated metric value is greater than the threshold.
   * - <: The aggregated metric value is less than the threshold.
   * 
   * Default value: >=.
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
   * The dimension information associated with the metric.
   */
  dimensions?: CreateAlarmRequestDimensions[];
  /**
   * @remarks
   * Specifies the effective period of the event-triggered task. By default, the task takes effect at all times.
   * 
   * This parameter follows the cron expression format. The default format is `X X X X X ?`, which is described as follows:
   * - X: a placeholder for a field, representing seconds, minutes, hours, day of month, and month in sequence. X can be a specific value or a special character with logical meaning. For more information about the valid values of X, see [Cron expressions](https://help.aliyun.com/document_detail/25907.html).
   * 
   * - ?: indicates that no value is specified.
   * 
   * > The specified value of this parameter **defaults to the UTC+8 time zone**. You can add the time zone information `TZ=+yy` before the cron expression to specify a time zone, where y represents the time zone offset. For example, `TZ=+00 * * 1-2 * * ?` indicates that the event-triggered task takes effect between 01:00 and 02:59 every day in the UTC+0 time zone.
   * 
   * Examples and their meanings:
   * 
   * - `* * * * * ?`: takes effect at all times.
   * 
   * - `* * 17-18 * * ?`: takes effect between 17:00 and 18:59 every day in the UTC+8 time zone.
   * 
   * - `TZ=+00 * * 1-2 * * ?`: takes effect between 01:00 and 02:59 every day in the UTC+0 time zone.
   * 
   * @example
   * TZ=+00 * * 1-2 * * ?
   */
  effective?: string;
  /**
   * @remarks
   * The number of times that the threshold expression must be met to trigger a scaling rule. For example, if this parameter is set to 3, the scaling rule is triggered when the average CPU utilization is greater than or equal to 80% for three consecutive times.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The information about the multi-metric alert rule.
   */
  expressions?: CreateAlarmRequestExpressions[];
  /**
   * @remarks
   * The logical operator between multiple metric alert conditions. Valid values:
   * 
   * - `&&`: An alert is triggered only when all monitoring metrics meet the alert conditions. That is, an alert is triggered only when all expressions in the multi-metric alert rule evaluate to `true`.
   * - `||`: An alert is triggered if any one of the metrics meets the alert condition.
   * 
   * Default value: `&&`.
   * 
   * @example
   * &&
   */
  expressionsLogicOperator?: string;
  /**
   * @remarks
   * The ID of the CloudMonitor application group to which the custom metric belongs. This parameter is required only when the metric type is custom.
   * 
   * @example
   * 4055401
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the metric. The valid values vary based on the monitoring type of the event-triggered task:
   * 
   * - If the event-triggered task is of the custom monitoring type (MetricType=custom), the valid values are your custom metrics.
   * 
   * - If the event-triggered task is of the system monitoring type (MetricType=system), valid values: 
   *     - CpuUtilization: the CPU utilization of an ECS instance (%).
   * 
   *     - ConcurrentConnections: the number of concurrent connections to an ECS instance.
   * 
   *     - IntranetTx: the outbound internal network traffic of an ECS instance (Kb/min).
   * 
   *     - IntranetRx: the inbound internal network traffic of an ECS instance (Kb/min).
   * 
   *     - VpcInternetTx: the outbound Internet traffic of an ECS instance (Kb/min).
   * 
   *     - VpcInternetRx: the inbound Internet traffic of an ECS instance (Kb/min).
   * 
   *     - SystemDiskReadBps: the read BPS of the system cloud disk (Byte/s).
   * 
   *     - SystemDiskWriteBps: the write BPS of the system cloud disk (Byte/s).
   * 
   *     - SystemDiskReadOps: the read IOPS of the system cloud disk (operations/s).
   * 
   *     - SystemDiskWriteOps: the write IOPS of the system cloud disk (operations/s).
   * 
   *     - CpuUtilizationAgent: the CPU utilization monitored by the agent (%).
   * 
   *     - GpuUtilizationAgent: the GPU utilization monitored by the agent (%).
   * 
   *     - GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory monitored by the agent (%).
   * 
   *     - GpuMemoryUtilizationAgent: the GPU memory utilization monitored by the agent (%).
   * 
   *     - MemoryUtilization: the memory utilization monitored by the agent (%).
   * 
   *     - LoadAverage: the average system load monitored by the agent.
   * 
   *     - TcpConnection: the total number of TCP connections monitored by the agent.
   *     
   *     - TcpConnection: the number of established TCP connections monitored by the agent.
   * 
   *     - PackagesNetOut: the number of packets sent by the internal NIC per second monitored by the agent (packets/s).
   * 
   *     - PackagesNetIn: the number of packets received by the internal NIC per second monitored by the agent (packets/s).
   *    
   *     - PackagesNetOut: the number of packets sent by the public NIC per second monitored by the agent (packets/s).
   * 
   *     - PackagesNetIn: the number of packets received by the public NIC per second monitored by the agent (packets/s).
   * 
   *     - EciPodCpuUtilization: the CPU utilization (%).
   * 
   *     - EciPodMemoryUtilization: the memory utilization (%).
   * 
   *     - LoadBalancerRealServerAverageQps: the average QPS per backend server in an ALB server group (queries/s).
   * 
   * For more information, see [System monitoring event-triggered tasks](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The type of the metric. Valid values:
   * - system: uses system metrics of CloudMonitor.
   * - custom: uses custom metrics reported to CloudMonitor.
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
  ownerId?: number;
  /**
   * @remarks
   * The epoch for aggregating monitoring metric data. Unit: seconds. Valid values:
   * 
   * - 15
   * - 60
   * - 120
   * - 300
   * - 900
   * 
   * > Only scaling groups of the ECS instance type support a 15-second statistical period.
   * 
   * Default value: 300.
   * 
   * @example
   * 300
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group associated with the event-triggered task.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The method for aggregating metric data. Valid values:
   * 
   * - Average: the average value.
   * - Minimum: the minimum value.
   * - Maximum: the maximum value.
   * 
   * Default value: Average.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold of the monitoring metrics. When the monitoring threshold expression is met for a specified number of times, it triggers the execution of a scaling rule.
   * 
   * @example
   * 80.0
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      alarmActions: 'AlarmActions',
      comparisonOperator: 'ComparisonOperator',
      description: 'Description',
      dimensions: 'Dimensions',
      effective: 'Effective',
      evaluationCount: 'EvaluationCount',
      expressions: 'Expressions',
      expressionsLogicOperator: 'ExpressionsLogicOperator',
      groupId: 'GroupId',
      metricName: 'MetricName',
      metricType: 'MetricType',
      name: 'Name',
      ownerId: 'OwnerId',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmActions: { 'type': 'array', 'itemType': 'string' },
      comparisonOperator: 'string',
      description: 'string',
      dimensions: { 'type': 'array', 'itemType': CreateAlarmRequestDimensions },
      effective: 'string',
      evaluationCount: 'number',
      expressions: { 'type': 'array', 'itemType': CreateAlarmRequestExpressions },
      expressionsLogicOperator: 'string',
      groupId: 'number',
      metricName: 'string',
      metricType: 'string',
      name: 'string',
      ownerId: 'number',
      period: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

