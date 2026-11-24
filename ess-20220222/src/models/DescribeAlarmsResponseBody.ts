// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmsResponseBodyAlarmListDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension associated with the metric. Valid values:
   * 
   * - user_id: the ID of your account.
   * - scaling_group: the monitored scaling group.
   * - device: the type of the NIC device.
   * - state: the state of the TCP connection.
   * 
   * @example
   * device
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the dimension associated with the metric. The valid values vary based on the dimension key.
   * 
   * - `user_id`: automatically populated by the system.
   * 
   * - `scaling_group`: automatically populated by the system.
   * 
   * - Valid values for `device`:
   *     - eth0: For classic network instances, eth0 represents the internal NIC. For VPC-connected instances, only the eth0 NIC exists.
   *     - eth1: For classic network instances, eth1 represents the public NIC.
   * 
   * - Valid values for `state`:
   *     - TCP_TOTAL: the total number of TCP connections.
   *     - ESTABLISHED: the number of established TCP connections.
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

export class DescribeAlarmsResponseBodyAlarmListExpressions extends $dara.Model {
  /**
   * @remarks
   * The comparison operator used to compare the metric value with the threshold in the multi-metric alert rule. Valid values:
   * 
   * - >=: The metric value is greater than or equal to the threshold.
   * - <=: The metric value is less than or equal to the threshold.
   * - >: The metric value is greater than the threshold.
   * - <: The metric value is less than the threshold.
   * 
   * @example
   * >=
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The name of the monitoring metrics in the multi-metric alert rule. Valid values: 
   * 
   * - CpuUtilization: the CPU utilization of an ECS instance. Unit: %.
   * - ConcurrentConnections: the number of concurrent connections to an ECS instance.
   * - IntranetTx: the outbound internal network traffic of an ECS instance. Unit: Kbit/min.
   * - IntranetRx: the inbound internal network traffic of an ECS instance. Unit: Kbit/min.
   * - VpcInternetTx: the outbound Internet traffic of an ECS instance. Unit: Kbit/min.
   * - VpcInternetRx: the inbound Internet traffic of an ECS instance. Unit: Kbit/min.
   * - SystemDiskReadBps: the number of bytes read from the system cloud disk per second. Unit: Byte/s.
   * - SystemDiskWriteBps: the number of bytes written to the system cloud disk per second. Unit: Byte/s.
   * - SystemDiskReadOps: the number of read operations on the system cloud disk per second. Unit: IOPS.
   * - SystemDiskWriteOps: the number of write operations on the system cloud disk per second. Unit: IOPS.
   * - CpuUtilizationAgent: the CPU utilization collected by the CloudMonitor agent. Unit: %.
   * - GpuUtilizationAgent: the GPU utilization collected by the CloudMonitor agent. Unit: %.
   * - GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory collected by the CloudMonitor agent. Unit: %.
   * - GpuMemoryUtilizationAgent: the GPU memory utilization collected by the CloudMonitor agent. Unit: %.
   * - MemoryUtilization: the memory utilization collected by the CloudMonitor agent. Unit: %.
   * - LoadAverage: the average system load collected by the CloudMonitor agent.
   * - TcpConnection: the total number of TCP connections collected by the CloudMonitor agent.
   * - TcpConnection: the number of established TCP connections collected by the CloudMonitor agent.
   * - PackagesNetOut: the number of packets sent by the internal network interface controller (NIC) per second collected by the CloudMonitor agent. Unit: packets/s.
   * - PackagesNetIn: the number of packets received by the internal network interface controller (NIC) per second collected by the CloudMonitor agent. Unit: packets/s.
   * - PackagesNetOut: the number of packets sent by the public network interface controller (NIC) per second collected by the CloudMonitor agent. Unit: packets/s.
   * - PackagesNetIn: the number of packets received by the public network interface controller (NIC) per second collected by the CloudMonitor agent. Unit: packets/s.
   * - EciPodCpuUtilization: the CPU utilization. Unit: %.
   * - EciPodMemoryUtilization: the memory utilization. Unit: %.
   * - LoadBalancerRealServerAverageQps: the average QPS per backend server in an ALB server group. Unit: queries/s.
   * 
   * For more information, see [Event-triggered nodes for system monitoring](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The period at which metric data is collected in the multi-metric alert rule. Unit: seconds. Valid values:
   * 
   * - 15
   * - 60
   * - 120
   * - 300
   * - 900
   * 
   * > A statistical period of 15 seconds is supported only when you monitor a scaling group that contains ECS instances and use metrics collected by the CloudMonitor agent (metrics whose names start with Agent).
   * 
   * @example
   * 900
   */
  period?: number;
  /**
   * @remarks
   * The statistical method used for metric data in the multi-metric alert rule. Valid values:
   * - Average: the average value.
   * - Minimum: the minimum value.
   * - Maximum: the maximum value.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold of the monitoring metrics in the multi-metric alert rule. The scaling rule is triggered when the threshold expression is met for the specified number of times.
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

export class DescribeAlarmsResponseBodyAlarmListHybridMetricsDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the metric dimension.
   * 
   * @example
   * queue
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the metric dimension.
   * 
   * @example
   * testQueue
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

export class DescribeAlarmsResponseBodyAlarmListHybridMetrics extends $dara.Model {
  /**
   * @remarks
   * The dimensions of the metric. This is used to specify the resources monitored by the metric.
   */
  dimensions?: DescribeAlarmsResponseBodyAlarmListHybridMetricsDimensions[];
  /**
   * @remarks
   * The metric calculation expression for multiple Hybrid Cloud Monitoring metrics. The calculation result of the expression is used to trigger scaling activities. The calculation expression must comply with the Reverse Polish Notation (RPN) specification, and only the `+`, `-`, `*`, and `/` operators are supported.
   * 
   * @example
   * (a+b)/2
   */
  expression?: string;
  /**
   * @remarks
   * The reference ID of the metric in the metric calculation expression.
   * 
   * @example
   * a
   */
  id?: string;
  /**
   * @remarks
   * The name of the monitoring metrics in the Hybrid Cloud Monitoring metrics repository.
   * 
   * @example
   * AliyunSmq_NumberOfMessagesVisible
   */
  metricName?: string;
  /**
   * @remarks
   * The statistical method of the metric. Valid values:
   * - Average: the average value of all data points in the specified period.
   * - Minimum: the minimum value of all data points in the specified period.
   * - Maximum: the maximum value of all data points in the specified period.
   * 
   * @example
   * Average
   */
  statistic?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      expression: 'Expression',
      id: 'Id',
      metricName: 'MetricName',
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmListHybridMetricsDimensions },
      expression: 'string',
      id: 'string',
      metricName: 'string',
      statistic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBodyAlarmList extends $dara.Model {
  /**
   * @remarks
   * The list of unique identifiers of the scaling rules associated with the event-triggered task.
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
   * The comparison operator used to compare the metric value with the threshold. Valid values:
   * 
   * - >=: The metric value is greater than or equal to the threshold.
   * - <=: The metric value is less than or equal to the threshold.
   * - >: The metric value is greater than the threshold.
   * - <: The metric value is less than the threshold.
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
  dimensions?: DescribeAlarmsResponseBodyAlarmListDimensions[];
  /**
   * @remarks
   * The effective period of the event-triggered node.
   * 
   * @example
   * * * * * * ?
   */
  effective?: string;
  /**
   * @remarks
   * Indicates whether the event-triggered task is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The number of times that the threshold condition must be met before the scaling rule is triggered. For example, if this parameter is set to 3, the scaling rule is triggered only when the average CPU utilization is greater than or equal to 80% for three consecutive times.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The information about the multi-metric alert rule.
   */
  expressions?: DescribeAlarmsResponseBodyAlarmListExpressions[];
  /**
   * @remarks
   * The logical operator that specifies the relationship among multiple monitoring alert conditions. Valid values:
   * - `&&`: An alert is triggered only when all monitoring metrics meet the alert conditions. That is, an alert is triggered only when all expressions in the multi-metric alert rule evaluate to `true`.
   * - `||`: An alert is triggered when any of the monitoring metrics meets the alert condition.
   * 
   * @example
   * &&
   */
  expressionsLogicOperator?: string;
  /**
   * @remarks
   * The monitoring metrics settings of Hybrid Cloud Monitoring. For more information about how to configure the settings, see [Use formulas to customize target tracking scaling rules](https://help.aliyun.com/document_detail/2852162.html).
   */
  hybridMetrics?: DescribeAlarmsResponseBodyAlarmListHybridMetrics[];
  /**
   * @remarks
   * The ID of the Hybrid Cloud Monitoring metrics repository.
   * 
   * For more information about how to manage metrics repositories, see [Manage metrics repositories](https://help.aliyun.com/document_detail/217606.html).
   * 
   * @example
   * aliyun-test
   */
  hybridMonitorNamespace?: string;
  /**
   * @remarks
   * The name of the metric. Valid values: 
   * 
   * - CpuUtilization: the CPU utilization of an ECS instance. Unit: %.
   * - ConcurrentConnections: the number of concurrent connections to an ECS instance.
   * - IntranetTx: the outbound internal traffic of an ECS instance. Unit: Kbit/min.
   * - IntranetRx: the inbound internal traffic of an ECS instance. Unit: Kbit/min.
   * - VpcInternetTx: the outbound Internet traffic of an ECS instance. Unit: Kbit/min.
   * - VpcInternetRx: the inbound Internet traffic of an ECS instance. Unit: Kbit/min.
   * - SystemDiskReadBps: the number of bytes read from the system cloud disk per second. Unit: Byte/s.
   * - SystemDiskWriteBps: the number of bytes written to the system cloud disk per second. Unit: Byte/s.
   * - SystemDiskReadOps: the number of read operations on the system cloud disk per second. Unit: IOPS.
   * - SystemDiskWriteOps: the number of write operations on the system cloud disk per second. Unit: IOPS.
   * - CpuUtilizationAgent: the CPU utilization collected by the CloudMonitor agent. Unit: %.
   * - GpuUtilizationAgent: the GPU utilization collected by the CloudMonitor agent. Unit: %.
   * - GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory collected by the CloudMonitor agent. Unit: %.
   * - GpuMemoryUtilizationAgent: the GPU memory utilization collected by the CloudMonitor agent. Unit: %.
   * - MemoryUtilization: the memory utilization collected by the CloudMonitor agent. Unit: %.
   * - LoadAverage: the average system load collected by the CloudMonitor agent.
   * - TcpConnection: the total number of TCP connections collected by the CloudMonitor agent.
   * - TcpConnection: the number of established TCP connections collected by the CloudMonitor agent.
   * - PackagesNetOut: the number of packets sent by the internal NIC per second collected by the CloudMonitor agent. Unit: packets/s.
   * - PackagesNetIn: the number of packets received by the internal NIC per second collected by the CloudMonitor agent. Unit: packets/s.
   * - PackagesNetOut: the number of packets sent by the public NIC per second collected by the CloudMonitor agent. Unit: packets/s.
   * - PackagesNetIn: the number of packets received by the public NIC per second collected by the CloudMonitor agent. Unit: packets/s.
   * - EciPodCpuUtilization: the CPU utilization. Unit: %.
   * - EciPodMemoryUtilization: the memory utilization. Unit: %.
   * - LoadBalancerRealServerAverageQps: the average QPS per backend server in an ALB server group. Unit: queries/s.
   * 
   * For more information, see [Event-triggered tasks for system monitoring](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The type of the metric. Valid values:
   * 
   * - system: system metrics of CloudMonitor.
   * - custom: custom metrics reported to CloudMonitor.
   * - hybrid: metrics of Hybrid Cloud Monitoring.
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
   * The period at which metric data is collected. Unit: seconds. Valid values:
   * 
   * - 15
   * - 60
   * - 120
   * - 300
   * - 900
   * 
   * > A statistical period of 15 seconds is supported only for scaling groups that contain ECS instances.
   * 
   * @example
   * 300
   */
  period?: number;
  /**
   * @remarks
   * The PromQL query statement for Hybrid Cloud Monitoring.
   * 
   * @example
   * (avg(last_over_time(AliyunMnsnew_ActiveMessages{region=\\"cn-hangzhou\\",userId=\\"123456****\\",queue=\\"testQueue\\"}[900s])) by (userId))/(avg(last_over_time(AliyunEss_RunningInstanceCount{instanceId=\\"asg-bp1****\\"}[900s])) by (userId) != 0)
   */
  promQL?: string;
  /**
   * @remarks
   * The ID of the scaling group with which the event-triggered task is associated.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The state of the event-triggered task. Valid values:
   * 
   * - ALARM: Alerting. The alert condition is met.
   * - OK: Normal. The alert condition is not met.
   * - INSUFFICIENT_DATA: Insufficient data. The data is insufficient to determine whether the alert condition is met.
   * 
   * @example
   * ALARM
   */
  state?: string;
  /**
   * @remarks
   * The statistical method used for metric data. Valid values:
   * 
   * - Average: the average value.
   * - Minimum: the minimum value.
   * - Maximum: the maximum value.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold of the monitoring metrics. The scaling rule is triggered when the threshold expression is met for the specified number of times.
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

export class DescribeAlarmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of event-triggered tasks.
   */
  alarmList?: DescribeAlarmsResponseBodyAlarmList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 871C7C53-34A4-45AA-8C14-4B72FA6A****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of event-triggered tasks.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmList: 'AlarmList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmList: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmList)) {
      $dara.Model.validateArray(this.alarmList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

