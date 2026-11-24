// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAlarmRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension information associated with the metric. Valid values vary based on the monitoring type of the event-triggered node:
   * 
   * - If the event-triggered task is of the custom monitoring type (MetricType=custom), valid values are not restricted. You can specify custom values.
   * 
   * 
   * - If the event-triggered task is of the system monitoring type (MetricType=system), valid values:
   * 
   *     - user_id: your account ID.
   *     - scaling_group: the scaling group to be monitored.
   *     - device: the type of the network interface controller (NIC) device.
   *     - state: the state of the TCP connection.
   *     - rulePool: the server group specified for the ALB QPS monitoring metrics.
   * 
   * @example
   * device
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the dimension information associated with the metric. Valid values are determined by Dimension.N.DimensionKey:
   * 
   * - If Dimension.N.DimensionKey is set to a custom value, which means the event-triggered task is of the custom monitoring type (MetricType=custom), valid values are not restricted. You can specify custom values.
   * 
   * - If Dimension.N.DimensionKey is set to a system-specified value, which means the event-triggered task is of the system monitoring type (MetricType=system), valid values:
   * 
   *     - user_id: automatically populated by the system.
   * 
   *     - scaling_group: automatically populated by the system.
   * 
   *     - device:
   * 
   *         - eth0: for classic network instances, eth0 represents the internal NIC. For VPC-connected instances, only the eth0 NIC exists.
   *         - eth1: for classic network instances, eth1 represents the public NIC.
   * 
   *     - state:
   * 
   *         - TCP_TOTAL: the total number of TCP connections.
   *         - ESTABLISHED: the number of established TCP connections.
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

export class ModifyAlarmRequestExpressions extends $dara.Model {
  /**
   * @remarks
   * The comparison operator between the statistical value and the threshold of the metric. The comparison operator indicates the relationship in which the statistical value and the threshold can satisfy the condition. Valid values:
   * 
   * - The statistical value is greater than or equal to the threshold. Value: `>=`.
   * - The statistical value is less than or equal to the threshold. Value: `<=`.
   * - The statistical value is greater than the threshold. Value: `>`.
   * - The statistical value is less than the threshold. Value: `<`.
   * 
   * Default value: >=.
   * 
   * @example
   * >=
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The name of the monitoring metric in the multi-metric event-triggered node. Valid values vary based on the monitoring type of the event-triggered task: 
   * 
   * - If the event-triggered task is of the custom monitoring type (MetricType=custom), valid values are your custom monitoring metrics.
   * 
   * - If the event-triggered task is of the system monitoring type (MetricType=system), valid values: 
   * 
   *     - CpuUtilization: (ECS) CPU utilization (%).
   * 
   *     - IntranetTx: (ECS) outbound traffic over the internal network (KByte/min).
   * 
   *     - IntranetRx: (ECS) inbound traffic over the internal network (KByte/min).
   * 
   *     - VpcInternetTx: (ECS) outbound traffic over the Internet (KByte/min).
   * 
   *     - VpcInternetRx: (ECS) inbound traffic over the Internet (KByte/min).
   * 
   *     - SystemDiskReadBps: (ECS) system cloud disk read BPS (Byte/s).
   * 
   *     - SystemDiskWriteBps: (ECS) system cloud disk write BPS (Byte/s).
   * 
   *     - SystemDiskReadOps: (ECS) system cloud disk read IOPS (count/s).
   * 
   *     - SystemDiskWriteOps: (ECS) system cloud disk write IOPS (count/s).
   * 
   *     - CpuUtilizationAgent: (Agent) CPU utilization (%).
   * 
   *     - GpuUtilizationAgent: (Agent) GPU utilization (%).
   * 
   *     - GpuMemoryFreeUtilizationAgent: (Agent) GPU memory idle rate (%).
   * 
   *     - GpuMemoryUtilizationAgent: (Agent) GPU memory utilization (%).
   * 
   *     - MemoryUtilization: (Agent) memory utilization (%).
   * 
   *     - LoadAverage: (Agent) average system load.
   * 
   *     - TcpConnection: (Agent) total number of TCP connections.
   * 
   *     - TcpConnection: (Agent) number of established TCP connections.
   * 
   *     - PackagesNetOut: (Agent) number of packets sent by the network interface controller (NIC).
   * 
   *     - PackagesNetIn: (Agent) number of packets received by the network interface controller (NIC).
   * 
   *     - EciPodCpuUtilization: CPU utilization (%).
   * 
   *     - EciPodMemoryUtilization: memory utilization (%).
   * 
   * For more information, see [Event-triggered tasks for system monitoring](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The statistical period for the metric data in the multi-metric event-triggered task, in seconds. Valid values:
   * 
   * - 15.
   * - 60.
   * - 120.
   * - 300.
   * - 900.
   * 
   * > A statistical period of 15 seconds is applicable only to metrics collected by the CloudMonitor agent (metrics that start with Agent) when monitoring ECS-type scaling groups. For all other metrics, the statistical period can be set to 60, 120, 300, or 900 seconds.
   * 
   * Default value: 300.
   * 
   * @example
   * 300
   */
  period?: number;
  /**
   * @remarks
   * The method used to aggregate the metric data in the multi-metric event-triggered task. Valid values:
   * 
   * - Average: average value.
   * - Minimum: minimum value.
   * - Maximum: maximum value.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold of the monitoring metrics in a multi-metric event-triggered task. The scaling rule is executed when the threshold expression is met the specified number of times.
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

export class ModifyAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The list of unique identifiers of the scaling rules associated with the event-triggered task.
   */
  alarmActions?: string[];
  /**
   * @remarks
   * The ID of the event-triggered task.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1hvbnmkl10vll5****_f95ce797-dc2e-4bad-9618-14fee7d1****
   */
  alarmTaskId?: string;
  /**
   * @remarks
   * The comparison operator between the statistical value and the threshold of the metric. The comparison operator indicates the relationship in which the statistical value and the threshold can satisfy the condition. Valid values:
   * 
   * - The statistical value is greater than or equal to the threshold. Value: `>=`.
   * - The statistical value is less than or equal to the threshold. Value: `<=`.
   * - The statistical value is greater than the threshold. Value: `>`.
   * - The statistical value is less than the threshold. Value: `<`.
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
  dimensions?: ModifyAlarmRequestDimensions[];
  /**
   * @remarks
   * Specifies the effective period of the event-triggered task.
   * 
   * This parameter follows cron expressions. The default format is `X X X X X ?`, where:
   * - X: a placeholder for a field, which sequentially represents seconds, minutes, hours, day, and month. X can be a specific value or a special character with logical meaning. For more information about the valid values of X, see [Cron expression](https://help.aliyun.com/document_detail/25907.html).
   * 
   * - ?: specifies no value.
   * 
   * > The value of this parameter is **in the UTC+8 time zone by default**. You can add time zone information `TZ=+yy` before the cron expression to specify a time zone, where y represents the numeric value of the time zone. For example, `TZ=+00 * * 1-2 * * ?` indicates that the event-triggered task takes effect between 01:00 and 02:59 every day in the UTC+0 time zone.
   * 
   * Examples and descriptions:
   * 
   * -  `* * * * * ?  `: takes effect at all times.
   * 
   * -  `* * 17-18 * * ? `: takes effect between 17:00 and 18:59 every day in the UTC+8 time zone.
   * 
   * - `TZ=+00 * * 1-2 * * ?`: takes effect between 01:00 and 02:59 every day in the UTC+0 time zone.
   * 
   * @example
   * TZ=+00 * * 1-2 * * ?
   */
  effective?: string;
  /**
   * @remarks
   * The number of times that the threshold expression must be met before the scaling rule is triggered. For example, the average CPU utilization must be greater than or equal to 80% in three consecutive statistical results.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The monitoring metrics of the multi-metric event-triggered task.
   */
  expressions?: ModifyAlarmRequestExpressions[];
  /**
   * @remarks
   * The relationship between multiple monitoring metrics conditions. Valid values:
   * 
   * - `&&`: An alert is triggered only when all monitoring metrics meet the alert conditions. An alert is triggered only when all expressions in the multi-metric event-triggered task evaluate to `true`.
   * - `||`: An alert is triggered when any monitoring metric meets the alert condition.
   * 
   * Default value: `&&`.
   * 
   * @example
   * &&
   */
  expressionsLogicOperator?: string;
  /**
   * @remarks
   * The ID of the CloudMonitor application group to which the custom metric belongs. This parameter is required only when MetricType is set to custom.
   * 
   * @example
   * 4055401
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the metric. Valid values vary based on the monitoring type of the event-triggered task: 
   * 
   * - If the event-triggered task is of the custom monitoring type (MetricType=custom), valid values are your custom metrics.
   * 
   * - If the event-triggered task is of the system monitoring type (MetricType=system), valid values: 
   * 
   *     - CpuUtilization: (ECS) CPU utilization (%).
   * 
   *     - IntranetTx: (ECS) outbound traffic over the internal network (KByte/min).
   * 
   *     - IntranetRx: (ECS) inbound traffic over the internal network (KByte/min).
   * 
   *     - VpcInternetTx: (ECS) outbound traffic over the Internet (KByte/min).
   * 
   *     - VpcInternetRx: (ECS) inbound traffic over the Internet (KByte/min).
   * 
   *     - SystemDiskReadBps: (ECS) system cloud disk read BPS (Byte/s).
   * 
   *     - SystemDiskWriteBps: (ECS) system cloud disk write BPS (Byte/s).
   * 
   *     - SystemDiskReadOps: (ECS) system cloud disk read IOPS (count/s).
   * 
   *     - SystemDiskWriteOps: (ECS) system cloud disk write IOPS (count/s).
   * 
   *     - CpuUtilizationAgent: (Agent) CPU utilization (%).
   * 
   *     - GpuMemoryFreeUtilizationAgent: (Agent) GPU memory idle rate (%).
   * 
   *     - GpuMemoryUtilizationAgent: (Agent) GPU memory utilization (%).
   * 
   *     - MemoryUtilization: (Agent) memory utilization (%).
   * 
   *     - LoadAverage: (Agent) average system load.
   * 
   *     - TcpConnection: (Agent) total number of TCP connections.
   * 
   *     - TcpConnection: (Agent) number of established TCP connections.
   * 
   *     - PackagesNetOut: (Agent) number of packets sent by the NIC.
   * 
   *     - PackagesNetIn: (Agent) number of packets received by the NIC.
   * 
   *     - EciPodCpuUtilization: CPU utilization (%).
   * 
   *     - EciPodMemoryUtilization: memory utilization (%).
   * 
   * For more information, see [Event-triggered tasks for system monitoring](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * MemoryUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The type of the metric. Valid values:
   * - system: uses CloudMonitor system metrics.
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
   * alarmtask****
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The statistical period for the metric data, in seconds. Valid values:
   * 
   * - 15.
   * - 60.
   * - 120.
   * - 300.
   * - 900.
   * 
   * > A statistical period of 15 seconds is applicable only to metrics collected by the CloudMonitor agent (metrics that start with Agent) when monitoring ECS-type scaling groups. For all other metrics, the statistical period can be set to 60, 120, 300, or 900 seconds.
   * 
   * @example
   * 300
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the event-triggered task.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The method used to aggregate the metric data. Valid values:
   * 
   * - Average: average value.
   * - Minimum: minimum value.
   * - Maximum: maximum value.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold of the monitoring metrics in a multi-metric event-triggered task. The scaling rule is executed when the threshold expression is met the specified number of times.
   * 
   * @example
   * 80
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
      dimensions: { 'type': 'array', 'itemType': ModifyAlarmRequestDimensions },
      effective: 'string',
      evaluationCount: 'number',
      expressions: { 'type': 'array', 'itemType': ModifyAlarmRequestExpressions },
      expressionsLogicOperator: 'string',
      groupId: 'number',
      metricName: 'string',
      metricType: 'string',
      name: 'string',
      ownerId: 'number',
      period: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
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

