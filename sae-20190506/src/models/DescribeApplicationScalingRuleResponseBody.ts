// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRuleResponseBodyDataMetricMetrics extends $dara.Model {
  /**
   * @remarks
   * The target value of the metric.
   * 
   * - The target CPU utilization. Unit: percent.
   * 
   * - The target memory usage. Unit: percent.
   * 
   * - The number of queries per second (QPS).
   * 
   * - The response time. Unit: milliseconds.
   * 
   * - The average number of active TCP connections per second.
   * 
   * - The QPS of a public-facing SLB instance.
   * 
   * - The response time of a public-facing SLB instance. Unit: milliseconds.
   * 
   * - The QPS of a private SLB instance.
   * 
   * - The response time of a private SLB instance. Unit: milliseconds.
   * 
   * @example
   * 20
   */
  metricTargetAverageUtilization?: number;
  /**
   * @remarks
   * The metric that is used to trigger the auto scaling policy. Valid values:
   * 
   * - **CPU**: CPU utilization.
   * 
   * - **MEMORY**: memory usage.
   * 
   * - **QPS**: the average QPS of a single instance of a Java application in one minute.
   * 
   * - **RT**: the average response time (RT) of all service interfaces of a Java application in one minute.
   * 
   * - **tcpActiveConn**: the average number of active TCP connections of a single instance in 30 seconds.
   * 
   * - **SLB_QPS**: the average QPS of a single instance for a public-facing SLB instance in 15 seconds.
   * 
   * - **SLB_RT**: the average RT of a public-facing SLB instance in 15 seconds.
   * 
   * - **INTRANET_SLB_QPS**: the average QPS of a single instance for a private SLB instance in 15 seconds.
   * 
   * - **INTRANET_SLB_RT**: the average RT of a private SLB instance in 15 seconds.
   * 
   * @example
   * CPU
   */
  metricType?: string;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-xxx
   */
  slbId?: string;
  /**
   * @remarks
   * The SLB access log Logstore.
   * 
   * @example
   * test
   */
  slbLogstore?: string;
  /**
   * @remarks
   * The SLB access log Project.
   * 
   * @example
   * test
   */
  slbProject?: string;
  /**
   * @remarks
   * The port of the SLB instance.
   * 
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

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics extends $dara.Model {
  /**
   * @remarks
   * The current value.
   * 
   * @example
   * 0
   */
  currentValue?: number;
  /**
   * @remarks
   * The name of the metric.
   * 
   * - **cpu**: CPU utilization.
   * 
   * - **memory**: memory usage.
   * 
   * - **arms_incall_qps**: the average QPS of a single instance of a Java application in one minute.
   * 
   * - **arms_incall_rt**: the average RT of all service interfaces of a Java application in one minute.
   * 
   * - **tcpActiveConn**: the number of active TCP connections.
   * 
   * - **slb_incall_qps**: the QPS of a public-facing SLB instance.
   * 
   * - **slb_incall_rt**: the RT of a public-facing SLB instance.
   * 
   * - **intranet_slb_incall_qps**: the QPS of a private SLB instance.
   * 
   * - **intranet_slb_incall_rt**: the RT of a private SLB instance.
   * 
   * @example
   * cpu
   */
  name?: string;
  /**
   * @remarks
   * The type of the metric. This parameter is associated with the monitoring metric.
   * 
   * - **Resource**: the metric value of **cpu** or **memory**.
   * 
   * - **Pods**: the metric value of **tcpActiveConn**.
   * 
   * - **External**: the metric value of **arms** or **slb**.
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

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics extends $dara.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * - **cpu**: CPU utilization.
   * 
   * - **memory**: memory usage.
   * 
   * - **arms_incall_qps**: the average QPS of a single instance of a Java application in one minute.
   * 
   * - **arms_incall_rt**: the average RT of all service interfaces of a Java application in one minute.
   * 
   * - **tcpActiveConn**: the number of active TCP connections.
   * 
   * - **slb_incall_qps**: the QPS of a public-facing SLB instance.
   * 
   * - **slb_incall_rt**: the RT of a public-facing SLB instance.
   * 
   * - **intranet_slb_incall_qps**: the QPS of a private SLB instance.
   * 
   * - **intranet_slb_incall_rt**: the RT of a private SLB instance.
   * 
   * @example
   * cpu
   */
  name?: string;
  /**
   * @remarks
   * The metric threshold for the next scale-in. The value is a percentage.
   * 
   * @example
   * 10
   */
  nextScaleInAverageUtilization?: number;
  /**
   * @remarks
   * The metric threshold for the next scale-out. The value is a percentage.
   * 
   * @example
   * 21
   */
  nextScaleOutAverageUtilization?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nextScaleInAverageUtilization: 'NextScaleInAverageUtilization',
      nextScaleOutAverageUtilization: 'NextScaleOutAverageUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nextScaleInAverageUtilization: 'number',
      nextScaleOutAverageUtilization: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus extends $dara.Model {
  /**
   * @remarks
   * The data of the current metric-based scaling.
   */
  currentMetrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics[];
  /**
   * @remarks
   * The current number of instances.
   * 
   * @example
   * 2
   */
  currentReplicas?: number;
  /**
   * @remarks
   * The target number of instances.
   * 
   * @example
   * 2
   */
  desiredReplicas?: number;
  /**
   * @remarks
   * The time of the last scaling activity.
   * 
   * @example
   * 2022-01-11T08:14:32Z
   */
  lastScaleTime?: string;
  /**
   * @remarks
   * The list of metrics for the next scaling activity.
   */
  nextScaleMetrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics[];
  /**
   * @remarks
   * The period of the next metric-based scaling.
   * 
   * @example
   * 3
   */
  nextScaleTimePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      currentMetrics: 'CurrentMetrics',
      currentReplicas: 'CurrentReplicas',
      desiredReplicas: 'DesiredReplicas',
      lastScaleTime: 'LastScaleTime',
      nextScaleMetrics: 'NextScaleMetrics',
      nextScaleTimePeriod: 'NextScaleTimePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics },
      currentReplicas: 'number',
      desiredReplicas: 'number',
      lastScaleTime: 'string',
      nextScaleMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics },
      nextScaleTimePeriod: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.currentMetrics)) {
      $dara.Model.validateArray(this.currentMetrics);
    }
    if(Array.isArray(this.nextScaleMetrics)) {
      $dara.Model.validateArray(this.nextScaleMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether scale-in is disabled. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * > If you enable this feature, the application is never scaled in. This prevents business risks that are caused by scale-ins during peak hours. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The cooldown period for scale-ins. The value can be an integer from 0 to 3600. Unit: seconds. Default value: 0.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  /**
   * @remarks
   * The scaling step size for scale-ins. The maximum number of instances that can be removed at a time.
   * 
   * @example
   * 100
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      stabilizationWindowSeconds: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether scale-in is disabled. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * > If you enable this feature, the application is never scaled in. This prevents business risks that are caused by scale-ins during peak hours. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The cooldown period for scale-outs. The value can be an integer from 0 to 3600. Unit: seconds. Default value: 0.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  /**
   * @remarks
   * The scaling step size for scale-outs. The maximum number of instances that can be added at a time.
   * 
   * @example
   * 100
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      stabilizationWindowSeconds: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetric extends $dara.Model {
  /**
   * @remarks
   * The maximum number of instances.
   * 
   * @example
   * 3
   */
  maxReplicas?: number;
  /**
   * @remarks
   * The list of metric-based scaling policies.
   */
  metrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetrics[];
  /**
   * @remarks
   * The status of the metric-based scaling policy.
   */
  metricsStatus?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus;
  /**
   * @remarks
   * The minimum number of instances.
   * 
   * @example
   * 1
   */
  minReplicas?: number;
  /**
   * @remarks
   * The scale-in rules.
   */
  scaleDownRules?: DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules;
  /**
   * @remarks
   * The scale-out rules.
   */
  scaleUpRules?: DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      metricsStatus: 'MetricsStatus',
      minReplicas: 'MinReplicas',
      scaleDownRules: 'ScaleDownRules',
      scaleUpRules: 'ScaleUpRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetrics },
      metricsStatus: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus,
      minReplicas: 'number',
      scaleDownRules: DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules,
      scaleUpRules: DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules,
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(this.metricsStatus && typeof (this.metricsStatus as any).validate === 'function') {
      (this.metricsStatus as any).validate();
    }
    if(this.scaleDownRules && typeof (this.scaleDownRules as any).validate === 'function') {
      (this.scaleDownRules as any).validate();
    }
    if(this.scaleUpRules && typeof (this.scaleUpRules as any).validate === 'function') {
      (this.scaleUpRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataTimerSchedules extends $dara.Model {
  /**
   * @remarks
   * The point in time. Format: **HH:mm**.
   * 
   * @example
   * 08:00
   */
  atTime?: string;
  /**
   * @remarks
   * The maximum number of instances.
   * 
   * @example
   * 10
   */
  maxReplicas?: number;
  /**
   * @remarks
   * The minimum number of instances.
   * 
   * @example
   * 1
   */
  minReplicas?: number;
  /**
   * @remarks
   * The target number of instances.
   * 
   * @example
   * 2
   */
  targetReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      atTime: 'AtTime',
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      targetReplicas: 'TargetReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atTime: 'string',
      maxReplicas: 'number',
      minReplicas: 'number',
      targetReplicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataTimer extends $dara.Model {
  /**
   * @remarks
   * The start date of a short-term scheduled scaling policy. The following list describes the valid values:
   * 
   * - If you leave both **BeginDate** and **EndDate** empty, the policy is a long-term policy. This is the default value.
   * 
   * - If you specify a date, for example, you set **BeginDate** to **2021-03-25** and **EndDate** to **2021-04-25**, the policy is effective for one month.
   * 
   * @example
   * 2021-03-25
   */
  beginDate?: string;
  /**
   * @remarks
   * The end date of a short-term scheduled scaling policy. The following list describes the valid values:
   * 
   * - If you leave both **BeginDate** and **EndDate** empty, the policy is a long-term policy. This is the default value.
   * 
   * - If you specify a date, for example, you set **BeginDate** to **2021-03-25** and **EndDate** to **2021-04-25**, the policy is effective for one month.
   * 
   * @example
   * 2021-04-25
   */
  endDate?: string;
  /**
   * @remarks
   * The period in which the scheduled scaling policy is executed. Valid values:
   * 
   * - **\\* \\* \\***: The policy is executed at a specified time every day.
   * 
   * - **\\* \\* Fri,Mon**: The policy is executed at a specified time on one or more days of a week. You can select multiple days. The time is in GMT+8. Valid values:
   * 
   *   - **Sun**: Sunday
   * 
   *   - **Mon**: Monday
   * 
   *   - **Tue**: Tuesday
   * 
   *   - **Wed**: Wednesday
   * 
   *   - **Thu**: Thursday
   * 
   *   - **Fri**: Friday
   * 
   *   - **Sat**: Saturday
   * 
   * - **1,2,3,28,31 \\* \\***: The policy is executed at a specified time on one or more days of a month. You can select multiple days. The value can be an integer from 1 to 31. If a month does not have a 31st day, the policy is not executed on that day.
   * 
   * @example
   * * * *
   */
  period?: string;
  /**
   * @remarks
   * The points in time when the auto scaling policy is triggered within a day.
   */
  schedules?: DescribeApplicationScalingRuleResponseBodyDataTimerSchedules[];
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      period: 'Period',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      period: 'string',
      schedules: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataTimerSchedules },
    };
  }

  validate() {
    if(Array.isArray(this.schedules)) {
      $dara.Model.validateArray(this.schedules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * a0d2e04c-159d-40a8-b240-d2f2c263****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the auto scaling policy was created. Unit: milliseconds.
   * 
   * @example
   * 1624329843790
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the auto scaling policy was last disabled.
   * 
   * @example
   * 1641882854484
   */
  lastDisableTime?: number;
  /**
   * @remarks
   * The metric-based scaling policy.
   */
  metric?: DescribeApplicationScalingRuleResponseBodyDataMetric;
  /**
   * @remarks
   * The percentage of the minimum number of ready instances. Valid values:
   * 
   * - **-1**: an initial value, which indicates that a percentage is not used.
   * 
   * - **0 to 100**: a percentage that is rounded up. For example, if you set this parameter to 50% and the current number of instances is 5, the minimum number of ready instances is 3.
   * 
   * > If you specify both MinReadyInstances and MinReadyInstanceRatio, and the value of **MinReadyInstanceRatio** is not **-1**, the value of **MinReadyInstanceRatio** prevails. For example, if **MinReadyInstances** is set to **5** and **MinReadyInstanceRatio** is set to **50**, the value **50** is used to calculate the minimum number of ready instances.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of ready instances. Valid values:
   * 
   * - If you set this parameter to **0**, the application is interrupted during an upgrade.
   * 
   * - If you set this parameter to -1, the system uses a recommended value for the minimum number of ready instances. The value is 25% of the current number of instances. For example, if the current number of instances is 5, the minimum number of ready instances is 2 after 5 × 25% = 1.25 is rounded up.
   * 
   * > Set the minimum number of ready instances to a value greater than or equal to 1 for each rolling deployment to ensure business continuity.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * Indicates whether the auto scaling policy is enabled. Valid values:
   * 
   * - **true**: The policy is enabled.
   * 
   * - **false**: The policy is disabled.
   * 
   * @example
   * true
   */
  scaleRuleEnabled?: boolean;
  /**
   * @remarks
   * The name of the auto scaling policy.
   * 
   * @example
   * test
   */
  scaleRuleName?: string;
  /**
   * @remarks
   * The type of the auto scaling policy. Valid values:
   * 
   * - **timing**: scheduled scaling.
   * 
   * - **metric**: metric-based scaling.
   * 
   * - **mix**: hybrid scaling.
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The scheduled scaling policy.
   */
  timer?: DescribeApplicationScalingRuleResponseBodyDataTimer;
  /**
   * @remarks
   * The time when the auto scaling policy was updated. Unit: milliseconds.
   * 
   * @example
   * 1624330075827
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      timer: 'Timer',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      metric: DescribeApplicationScalingRuleResponseBodyDataMetric,
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: DescribeApplicationScalingRuleResponseBodyDataTimer,
      updateTime: 'number',
    };
  }

  validate() {
    if(this.metric && typeof (this.metric as any).validate === 'function') {
      (this.metric as any).validate();
    }
    if(this.timer && typeof (this.timer as any).validate === 'function') {
      (this.timer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or a POP error code. Valid values:
   * 
   * - **2xx**: The operation is successful.
   * 
   * - **3xx**: A redirection is required.
   * 
   * - **4xx**: A request error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeApplicationScalingRuleResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** field is not returned.
   * 
   * - If the request fails, the **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, a specific error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 73404D3D-EE4F-4CB2-B197-5C46F6A1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the application instance was successfully restarted.
   * 
   * - **true**: The restart succeeded.
   * 
   * - **false**: The restart failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. Use this ID to query the details of a request.
   * 
   * @example
   * 0b57ff7e16243300839193068e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationScalingRuleResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

