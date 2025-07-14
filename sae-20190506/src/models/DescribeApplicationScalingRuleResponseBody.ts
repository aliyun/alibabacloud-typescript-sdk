// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRuleResponseBodyDataMetricMetrics extends $dara.Model {
  /**
   * @remarks
   * The limit on the metric.
   * 
   * *   The limit on the CPU utilization. Unit: percentage.
   * *   The limit on the memory usage. Unit: percentage.
   * *   The limit on the average number of active TCP connections per second.
   * *   The limit on the QPS of the Internet-facing SLB instance.
   * *   The limit on the response time of the Internet-facing SLB instance. Unit: milliseconds.
   * 
   * @example
   * 20
   */
  metricTargetAverageUtilization?: number;
  /**
   * @remarks
   * The metric that is used to trigger the auto scaling policy. Valid values:
   * 
   * *   **CPU**: the CPU utilization.
   * *   **MEMORY**: the memory usage.
   * *   **tcpActiveConn**: the average number of active TCP connections for an instance in 30 seconds.
   * *   **SLB_QPS**: the average QPS of the Internet-facing SLB instance associated with an application instance in 15 seconds.
   * *   **SLB_RT**: the average response time of the Internet-facing SLB instance in 15 seconds.
   * 
   * @example
   * CPU
   */
  metricType?: string;
  /**
   * @example
   * lb-xxx
   */
  slbId?: string;
  /**
   * @example
   * test
   */
  slbLogstore?: string;
  /**
   * @example
   * test
   */
  slbProject?: string;
  /**
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

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics extends $dara.Model {
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
   * The metric value as a percentage that triggers the application scale-in next time.
   * 
   * @example
   * 10
   */
  nextScaleInAverageUtilization?: number;
  /**
   * @remarks
   * The metric value as a percentage that triggers the application scale-out next time.
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
   * The metrics that is used to trigger the current auto scaling policy.
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
   * The expected number of instances.
   * 
   * @example
   * 2
   */
  desiredReplicas?: number;
  /**
   * @remarks
   * The time when the auto scaling policy was last triggered.
   * 
   * @example
   * 2022-01-11T08:14:32Z
   */
  lastScaleTime?: string;
  /**
   * @remarks
   * The metrics that are used to trigger the auto scaling policy next time.
   */
  nextScaleMetrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics[];
  /**
   * @remarks
   * The duration for which the metric-based auto scaling policy takes effect next time.
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
   * Indicates whether the application scale-in is disabled. Valid values:
   * 
   * *   **true**: disabled.
   * *   **false**: enabled.
   * 
   * >  When this parameter is set to true, the application instances are never reduced. This prevents risks to your business in peak hours. By default, this parameter is set to false.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The cooldown time of the scale-in. Valid values: 0 to 3600. Unit: seconds. Default value: 0.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  /**
   * @remarks
   * The step size for the scale-in. The maximum number of instances that can be reduced within a specific period of time.
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
   * Indicates whether the application scale-in is disabled. Valid values:
   * 
   * *   **true**: The application scale-in is disabled.
   * *   **false**: The application scale-in is enabled.
   * 
   * >  When this parameter is set to true, the application instances are never reduced. This prevents risks to your business in peak hours. By default, this parameter is set to false.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The cooldown time of the scale-out. Valid values: 0 to 3600. Unit: seconds. Default value: 0.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  /**
   * @remarks
   * The step size for the scale-out. The maximum number of instances that can be added within a specific period of time.
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
   * The list of metrics that are used to trigger the auto scaling policy.
   */
  metrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetrics[];
  /**
   * @remarks
   * The execution status of the metric-based auto scaling policy.
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
   * Rules that determine the application scale-in.
   */
  scaleDownRules?: DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules;
  /**
   * @remarks
   * Rules that determine the application scale-out.
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
   * The point in time. Format: **Hour:Minute**.
   * 
   * @example
   * 08:00
   */
  atTime?: string;
  /**
   * @example
   * 10
   */
  maxReplicas?: number;
  /**
   * @example
   * 1
   */
  minReplicas?: number;
  /**
   * @remarks
   * The expected number of instances.
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
   * The start date of the validity period of the scheduled auto scaling policy. Valid values:
   * 
   * *   If both the **BeginDate** and **EndDate** parameters are set to **null**, the auto scaling policy can always be triggered. The default value for these parameters is null.
   * *   If the two parameters are set to specific dates, the scheduled auto scaling policy can be triggered during the period between the two dates. For example, if **BeginDate** is **2021-03-25** and **EndDate** is **2021-04-25**, the auto scaling policy is valid for one month.
   * 
   * @example
   * 2021-03-25
   */
  beginDate?: string;
  /**
   * @remarks
   * The end date of the validity period of the scheduled auto scaling policy. Valid values:
   * 
   * *   If both the **BeginDate** and **EndDate** parameters are set to **null**, the auto scaling policy can always be triggered. The default value for these parameters is null.
   * *   If the two parameters are set to specific dates, the scheduled auto scaling policy can be triggered during the period between the two dates. For example, if **BeginDate** is **2021-03-25** and **EndDate** is **2021-04-25**, the auto scaling policy is valid for one month.
   * 
   * @example
   * 2021-04-25
   */
  endDate?: string;
  /**
   * @remarks
   * The days on which the scheduled auto scaling policy takes effect. Valid values:
   * 
   * *   **\\* \\* \\***: The scheduled auto scaling policy takes effect at a specified time every day.
   * 
   * *   **\\* \\* Fri,Mon**: The scheduled auto scaling policy takes effect at a specified time on one or multiple days of a week. The specified time is in the GMT+8 time zone. Valid values:
   * 
   *     *   **Sun**: Sunday
   *     *   **Mon**: Monday
   *     *   **Tue**: Tuesday
   *     *   **Wed**: Wednesday
   *     *   **Thu**: Thursday
   *     *   **Fri**: Friday
   *     *   **Sat**: Saturday
   * 
   * *   **1,2,3,28,31 \\* \\***: The scheduled auto scaling policy takes effect at a specified time on one or multiple days of a month. Valid values: 1 to 31. If the month does not have a 31st day, the auto scaling policy takes effect on the specified days other than the 31st day.
   * 
   * @example
   * * * *
   */
  period?: string;
  /**
   * @remarks
   * The points in time when the auto scaling policy is triggered within one day.
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
   * The ID of the application.
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
   * The details of the metric-based auto scaling policy.
   */
  metric?: DescribeApplicationScalingRuleResponseBodyDataMetric;
  /**
   * @remarks
   * The ratio of the minimum number of available instances to the current number of instances. Valid values:
   * 
   * *   **-1** (default value): The minimum number of available instances is not determined based on this parameter.
   * *   **0 to 100**: The minimum number of available instances is calculated by using the following formula: Number of existing instances × Value of MinReadyInstanceRatio × 100%. The calculation result is rounded up to the nearest integer. For example, if the number of existing instances is 5 and MinReadyInstanceRatio is set to 50, the minimum number of available instances is 3.
   * 
   * >  If the **MinReadyInstanceRatio** and **MinReadyInstanceRatio** parameters are configured and the **MinReadyInstanceRatio** parameter is set to a number from 0 to 100, the value of the MinReadyInstanceRatio parameter takes precedence. For example, if the **MinReadyInstances** parameter is set to **5**, and the **MinReadyInstanceRatio** parameter is set to **50**, the minimum number of available instances is set to the nearest integer rounded up from the calculated result of the following formula: Nmber of existing instances × **50**.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of available instances. Valid values:
   * 
   * *   If you set the value to **0**, business is interrupted when the application is updated.
   * *   If you set this property to -1, the system calculates a recommended value as the minimum number of available instances by using the following formula: Recommended value = Number of existing instances × 25%. The calculation result is rounded up to the nearest integer. For example, if the number of existing instances is 5, the recommended value is calculated by using the following formula: 5 × 25% = 1.25. In this case, the minimum number of available instances is 2.
   * 
   * >  To ensure business continuity, make sure that at least one instance is available during application deployment and rollback.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * Indicates whether the auto scaling policy is enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
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
   * *   **timing**: the scheduled auto scaling policy.
   * *   **metric**: the metric-based auto scaling policy.
   * *   **mix**: the hybrid auto scaling policy.
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The details of the scheduled auto scaling policy.
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeApplicationScalingRuleResponseBodyData;
  errorCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 73404D3D-EE4F-4CB2-B197-5C46F6A1****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. The ID is used to query the details of a request.
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

