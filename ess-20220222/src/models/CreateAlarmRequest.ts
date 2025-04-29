// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAlarmRequestDimensions } from "./CreateAlarmRequestDimensions";
import { CreateAlarmRequestExpressions } from "./CreateAlarmRequestExpressions";


export class CreateAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The list of unique identifiers of the scaling rules that are associated with the event-triggered task.
   */
  alarmActions?: string[];
  /**
   * @remarks
   * The operator that you want to use to compare the metric value and the threshold. Valid values:
   * 
   * *   If the metric value is greater than or equal to the threshold, set the value to >=.
   * *   If the metric value is less than or equal to the metric threshold, set the value to <=.
   * *   If the metric value is greater than the metric threshold, set the value to >.
   * *   If the metric value is less than the metric threshold, set the value to <.
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
   * The metric dimensions.
   */
  dimensions?: CreateAlarmRequestDimensions[];
  /**
   * @remarks
   * The effective period of the event-triggered task. By default, the event-triggered task is in effect all the time.
   * 
   * This parameter follows the cron expression format. The default format is `X X X X X ?`. In the format:
   * 
   * *   X: a placeholder for a field, which represents seconds, minutes, hours, days, and months in sequence. X can be a definite value or a special character that has logical meaning. For information about the valid values of X, see [Cron expression](https://help.aliyun.com/document_detail/25907.html).
   * *   ?: No value is specified.
   * 
   * > By default, this parameter value is specified in **UTC+8**. You can specify the time zone in the `TZ=+yy` format before a cron expression. y indicates the time zone. For example, `TZ=+00 * * 1-2 * * ?` specifies that the event-triggered task is in effect between 01:00 and 02:59 (UTC+0) every day.
   * 
   * Sample values:
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
   * The number of consecutive times that the threshold must be reached before a scaling rule is executed. For example, if you set this parameter to 3, the average CPU utilization must reach or exceed 80% three times in a row before the scaling rule is executed.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The information about the multi-metric alert rules.
   */
  expressions?: CreateAlarmRequestExpressions[];
  /**
   * @remarks
   * The relationship between the trigger conditions in the multi-metric alert rule. Valid values:
   * 
   * *   `&&`: An alert is triggered only if all metrics in the multi-metric alert rule meet the trigger conditions. In this case, an alert is triggered only if the results of all trigger conditions that are specified in the multi-metric alert rule are `true`.
   * *   `||`: An alert is triggered if one of the metrics in the multi-metric alert rule meets the trigger conditions.
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
   * The metric name. The valid values of this parameter vary based on the metric type.
   * 
   * *   If you set MetricType to custom, the valid values are the metrics that you have.
   * 
   * *   If you set MetricType to system, this parameter has the following valid values:
   * 
   *     *   CpuUtilization: the CPU utilization. Unit: %.
   *     *   ConcurrentConnections: the number of concurrent connections.
   *     *   IntranetTx: the outbound traffic over an internal network. Unit: KB/min.
   *     *   IntranetRx: the inbound traffic over an internal network. Unit: KB/min.
   *     *   VpcInternetTx: the outbound traffic over a virtual private cloud (VPC). Unit: KB/min.
   *     *   VpcInternetRx: the inbound traffic over a VPC. Unit: KB/min.
   *     *   SystemDiskReadBps: the number of bytes read from the system disk per second.
   *     *   SystemDiskWriteBps: the number of bytes written to the system disk per second.
   *     *   SystemDiskReadOps: the read IOPS of the system disk. Unit: counts/s.
   *     *   SystemDiskWriteOps: the write IOPS of the system disk. Unit: counts/s.
   *     *   CpuUtilizationAgent: the CPU utilization. Unit: %.
   *     *   GpuUtilizationAgent: the GPU utilization. Unit: %.
   *     *   GpuMemoryFreeUtilizationAgent: the idle GPU memory usage. Unit: %.
   *     *   GpuMemoryUtilizationAgent: the GPU memory usage. Unit: %.
   *     *   MemoryUtilization: the memory usage. Unit: %.
   *     *   LoadAverage: the average system load.
   *     *   TcpConnection: the total number of TCP connections.
   *     *   TcpConnection: the number of established TCP connections.
   *     *   PackagesNetOut: the number of packets sent by the internal network interface controller (NIC). Unit: counts/s.
   *     *   PackagesNetIn: the number of packets received by the internal NIC. Unit: counts/s.
   *     *   PackagesNetOut: the number of packets sent by the public NIC. Unit: counts/s.
   *     *   PackagesNetIn: the number of packets received by the public NIC. Unit: counts/s.
   *     *   EciPodCpuUtilization: the CPU utilization. Unit: %.
   *     *   EciPodMemoryUtilization: the memory usage. Unit: %.
   *     *   LoadBalancerRealServerAverageQps: the queries per second (QPS) of an instance.
   * 
   * For more information, see [Event-triggered tasks of the system monitoring type](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * *   system: system metrics of CloudMonitor.
   * *   custom: custom metrics that are reported to CloudMonitor.
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
   * The statistical period of the metric data. Unit: seconds. Valid values:
   * 
   * *   15
   * *   60
   * *   120
   * *   300
   * *   900
   * 
   * >  You can set this parameter to 15 seconds only for scaling groups of the ECS type.
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
   * The scaling group ID of the event-triggered task.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The statistical method of the metric data. Valid values:
   * 
   * *   Average: calculates the average value of the metric data.
   * *   Minimum: calculates the minimum value of the metric data.
   * *   Maximum: calculates the maximum value of the metric data.
   * 
   * Default value: Average.
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

