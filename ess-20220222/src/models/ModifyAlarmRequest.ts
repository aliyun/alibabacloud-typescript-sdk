// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAlarmRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension. The valid values vary based on the metric type.
   * 
   * *   If you set the MetricType parameter to custom, you can specify this parameter based on your business requirements.
   * 
   * *   If you set the MetricType parameter to system, this parameter has the following valid values:
   * 
   *     *   user_id: the ID of your Alibaba Cloud account
   *     *   scaling_group: the scaling group that you want to monitor
   *     *   device: the type of the NIC
   *     *   state: the status of the TCP connection
   * 
   * @example
   * device
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the dimension. The valid values vary based on the value of the DimensionKey parameter.
   * 
   * *   If you set the MetricType parameter to custom, you can specify this parameter based on your business requirements.
   * 
   * *   If you set the MetricType parameter to system, this parameter has the following valid values:
   * 
   *     *   If you set the DimensionKey parameter to user_id, the system specifies the value
   * 
   *     *   scaling_group: The system specifies the value of the DimensionValue parameter.
   * 
   *     *   If you set the DimensionKey parameter to device, you can set the DimensionValue parameter to eth0 or eth1.
   * 
   *         *   For instances that reside in the classic network type, eth0 specifies the internal NIC. Only one eth0 NIC exists on each instance that resides in a VPC.
   *         *   For instances that reside in the classic network, eth1 specifies the public NIC.
   * 
   *     *   If you set the DimensionKey parameter to state, you can set the DimensionValue parameter to TCP_TOTAL or ESTABLISHED.
   * 
   *         *   TCP_TOTAL specifies the total number of TCP connections.
   *         *   ESTABLISHED specifies the number of established TCP connections.
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

export class ModifyAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The list of unique identifiers of the scaling rules that are associated with the event-triggered task.
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
   * The operator that is used to compare the metric value and the threshold. Valid values:
   * 
   * *   If the metric value is greater than or equal to the threshold, set the value to `>=`.
   * *   If the metric value is less than or equal to the threshold, set the value to `<=`.
   * *   If the metric value is greater than the threshold, set the value to `>`.
   * *   If the metric value is less than the threshold, set the value to `<`.
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
   * Details of the dimensions.
   */
  dimensions?: ModifyAlarmRequestDimensions[];
  /**
   * @remarks
   * The effective period of the event-triggered task.
   * 
   * This parameter follows the cron expression format. The default format is `X X X X X ?`, in which:
   * 
   * *   X: a placeholder for a field, which represents seconds, minutes, hours, days, and months in sequence. X can be a definite value or a special character that has logical meaning. For information about the valid values of X, see [Cron expression](https://help.aliyun.com/document_detail/25907.html).
   * *   ?: No value is specified.
   * 
   * > By default, the value of this parameter is specified in **UTC+8**. You can specify the time zone in the `TZ=+yy` format before a cron expression. y indicates the time zone. For example, `TZ=+00 * * 1-2 * * ?` specifies that the event-triggered task is in effect between 01:00 and 02:59 (UTC+0) every day.
   * 
   * Examples:
   * 
   * *   ` * * * * * ?  `: The event-triggered task is in effect all the time.
   * *   ` * * 17-18 * * ?  `: The event-triggered task is in effect between 17:00 and 18:59 (UTC+8) every day.
   * *   `TZ=+00 * * 1-2 * * ?`: The event-triggered task is in effect between 01:00 and 02:59 (UTC+0) every day.
   * 
   * @example
   * TZ=+00 * * 1-2 * * ?
   */
  effective?: string;
  /**
   * @remarks
   * The number of times that the threshold must be reached before a scaling rule can be executed. For example, if you set this parameter to 3, the average CPU utilization must reach or exceed 80% three times in a row before a scaling rule is triggered.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The expressions that are specified in the multi-metric alert rule.
   */
  expressions?: ModifyAlarmRequestExpressions[];
  /**
   * @remarks
   * The relationship between the trigger conditions in the multi-metric alert rule. Valid values:
   * 
   * *   `&&`: An alert is triggered only if all metrics in the multi-metric alert rule meet the trigger conditions. In this case, an alert is triggered only if the results of all trigger conditions that are specified in the multi-metric alert rule are `true`.
   * *   `||`: An alert is triggered if one of the metrics in the multi-metric alert rule meets the trigger condition.
   * 
   * Default value: `&&`.
   * 
   * @example
   * &&
   */
  expressionsLogicOperator?: string;
  /**
   * @remarks
   * The ID of the application group to which the custom metric belongs. If you set the MetricType parameter to custom, you must specify this parameter.
   * 
   * @example
   * 4055401
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the metric. The valid values vary based on the metric type.
   * 
   * *   If you set the MetricType parameter to custom, the valid values are your custom metrics.
   * 
   * *   If you set the MetricType parameter to system, the MetricName parameter has the following valid values:
   * 
   *     *   CpuUtilization: the CPU utilization of an ECS instance. Unit: %.
   *     *   IntranetTx: the outbound traffic over the internal network from an ECS instance. Unit: KB/min.
   *     *   IntranetRx: the inbound traffic over the Internet to an ECS instance that resides in a virtual private cloud (VPC). Unit: KB/min.
   *     *   VpcInternetTx: the outbound traffic over the Internet from an ECS instance that resides in a VPC. Unit: KB/min.
   *     *   VpcInternetRx: the inbound traffic over the Internet to an ECS instance that resides in a VPC. Unit: KB/min.
   *     *   SystemDiskReadBps: the number of bytes read from the system disk used by an ECS instance per second.
   *     *   SystemDiskWriteBps: the number of bytes written to the system disk used by an ECS instance per second.
   *     *   SystemDiskReadOps: the number of read operations on the system disk used by an ECS instance per second.
   *     *   SystemDiskWriteOps: the number of write operations on the system disk used by an ECS instance per second.
   *     *   CpuUtilizationAgent: the CPU utilization of an agent. Unit: %.
   *     *   GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory of an agent.
   *     *   GpuMemoryUtilizationAgent: the GPU memory usage of an agent. Unit: %.
   *     *   MemoryUtilization: the memory usage of an agent. Unit: %.
   *     *   LoadAverage: the average system load of an agent.
   *     *   TcpConnection: the total number of TCP connections of an agent.
   *     *   TcpConnection: the number of established TCP connections of an agent.
   *     *   PackagesNetOut: the number of packets that are sent by the internal network interface controller (NIC) used by an agent.
   *     *   PackagesNetIn: the number of packets that are received by the internal NIC used by an agent.
   *     *   EciPodCpuUtilization: the CPU utilization of an elastic container instance. Unit: %.
   *     *   EciPodMemoryUtilization: the memory usage of an elastic container instance. Unit: %.
   * 
   * For more information, see [Event-triggered task for system monitoring](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * MemoryUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * *   system: a system metric of CloudMonitor
   * *   custom: a custom metric that is reported to CloudMonitor.
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
   * The period of time during which statistics about the metric is collected. Unit: seconds. Valid values:
   * 
   * *   15
   * *   60
   * *   120
   * *   300
   * *   900
   * 
   * > If your scaling group is of the ECS type and uses CloudMonitor metrics, you can set the Period parameter to 15. In other cases, you can set the Period parameter to 60, 120, 300, or 900. In most cases, the name of a CloudMonitor metric contains Agent.
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
   * The method that is used to aggregate statistics for the metric. Valid values:
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

