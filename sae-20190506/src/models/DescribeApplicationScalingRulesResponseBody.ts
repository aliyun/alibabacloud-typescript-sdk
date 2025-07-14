// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics extends $dara.Model {
  /**
   * @remarks
   * The limit on the metric.
   * 
   * *   The limit on the CPU utilization. Unit: percentage.
   * *   The limit on the memory usage. Unit: percentage.
   * *   The limit on the average number of active TCP connections per second.
   * *   The limit on the queries per second (QPS) of the Internet-facing Server Load Balancer (SLB) instance.
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
   * *   **tcpActiveConn**: the average number of active TCP connections per second of an application instance in 30 seconds.
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

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusCurrentMetrics extends $dara.Model {
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

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusNextScaleMetrics extends $dara.Model {
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

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus extends $dara.Model {
  /**
   * @remarks
   * The metrics that are used to trigger the auto scaling policy this time.
   */
  currentMetrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusCurrentMetrics[];
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
   * The maximum number of instances.
   * 
   * @example
   * 3
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
   * The metrics that are used to trigger the auto scaling policy next time.
   */
  nextScaleMetrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusNextScaleMetrics[];
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
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      nextScaleMetrics: 'NextScaleMetrics',
      nextScaleTimePeriod: 'NextScaleTimePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusCurrentMetrics },
      currentReplicas: 'number',
      desiredReplicas: 'number',
      lastScaleTime: 'string',
      maxReplicas: 'number',
      minReplicas: 'number',
      nextScaleMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusNextScaleMetrics },
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

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricPrometheusMetrics extends $dara.Model {
  prometheusQuery?: string;
  targetMetricValue?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusQuery: 'PrometheusQuery',
      targetMetricValue: 'TargetMetricValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusQuery: 'string',
      targetMetricValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the application scale-in was disabled. Valid values:
   * 
   * *   **true**: The application scale-in was disabled.
   * *   **false**: The application scale-in was enabled.
   * 
   * >  When this parameter is set to true, the application instances will never be reduced. This prevents risks to your business in peak hours. By default, this parameter is set to false.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The cooldown time of the scale-in. Valid values: 0 to 3600. Unit: seconds. The default value is 0.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  /**
   * @remarks
   * The step size for the scale-in. The maximum number of instances that can be reduced in a unit of time.
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

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the application scale-in was disabled. Valid values:
   * 
   * *   **true**: The application scale-in was disabled.
   * *   **false**: The application scale-in was enabled.
   * 
   * >  When this parameter is set to true, the application instances will never be reduced. This prevents risks to your business in peak hours. By default, this parameter is set to false.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The cooldown time of the scale-out. Valid values: 0 to 3600. Unit: seconds. The default value is 0.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  /**
   * @remarks
   * The step size for the scale-out. The maximum number of instances that can be added in a unit of time.
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

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetric extends $dara.Model {
  /**
   * @remarks
   * The maximum number of instances.
   * 
   * @example
   * 3
   */
  maxReplicas?: number;
  metricSource?: string;
  /**
   * @remarks
   * The list of metrics that are used to trigger the auto scaling policy.
   */
  metrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics[];
  /**
   * @remarks
   * The execution status of the metric-based auto scaling policy.
   */
  metricsStatus?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus;
  /**
   * @remarks
   * The minimum number of instances.
   * 
   * @example
   * 1
   */
  minReplicas?: number;
  prometheusMetrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricPrometheusMetrics[];
  prometheusToken?: string;
  prometheusUrl?: string;
  /**
   * @remarks
   * Rules that determine the application scale-in.
   */
  scaleDownRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules;
  /**
   * @remarks
   * Rules that determine the application scale-out.
   */
  scaleUpRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metricSource: 'MetricSource',
      metrics: 'Metrics',
      metricsStatus: 'MetricsStatus',
      minReplicas: 'MinReplicas',
      prometheusMetrics: 'PrometheusMetrics',
      prometheusToken: 'PrometheusToken',
      prometheusUrl: 'PrometheusUrl',
      scaleDownRules: 'ScaleDownRules',
      scaleUpRules: 'ScaleUpRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metricSource: 'string',
      metrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics },
      metricsStatus: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus,
      minReplicas: 'number',
      prometheusMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricPrometheusMetrics },
      prometheusToken: 'string',
      prometheusUrl: 'string',
      scaleDownRules: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules,
      scaleUpRules: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules,
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(this.metricsStatus && typeof (this.metricsStatus as any).validate === 'function') {
      (this.metricsStatus as any).validate();
    }
    if(Array.isArray(this.prometheusMetrics)) {
      $dara.Model.validateArray(this.prometheusMetrics);
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

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimerSchedules extends $dara.Model {
  /**
   * @remarks
   * The point in time. Format: **Hour:Minute**.
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
   * 50
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
   * The expected number of instances.
   * 
   * @example
   * 3
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

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimer extends $dara.Model {
  /**
   * @remarks
   * The start date of the validity period of the scheduled auto scaling policy. Valid values:
   * 
   * *   If both the **BeginDate** and **EndDate** parameters are set to **null**, the auto scaling policy can always be triggered. The default value for these parameters is null.
   * *   If the two parameters are set to specific dates, the scheduled auto scaling policy can be triggered during the period between the two dates. For example, if **BeginDate** is 2021-03-25 and **EndDate** is 2021-04-25, the auto scaling policy is valid for one month.
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
   * *   If the two parameters are set to specific dates, the scheduled auto scaling policy can be triggered during the period between the two dates. For example, if **BeginDate** is 2021-03-25 and **EndDate** is 2021-04-25, the auto scaling policy is valid for one month.
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
  schedules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimerSchedules[];
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      period: 'Period',
      schedules: 'Schedules',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      period: 'string',
      schedules: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimerSchedules },
      timeZone: 'string',
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

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the auto scaling policy was created. Unit: milliseconds.
   * 
   * @example
   * 1616642248938
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
  metric?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetric;
  /**
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
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
  timer?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimer;
  /**
   * @remarks
   * The time when the auto scaling policy was updated. Unit: milliseconds.
   * 
   * @example
   * 1616642248938
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
      metric: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetric,
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimer,
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

export class DescribeApplicationScalingRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The auto scaling policies of the application.
   */
  applicationScalingRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules[];
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of auto scaling policies.
   * 
   * @example
   * 3
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationScalingRules: 'ApplicationScalingRules',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationScalingRules: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationScalingRules)) {
      $dara.Model.validateArray(this.applicationScalingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeApplicationScalingRulesResponseBodyData;
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
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
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
   * 0a98a02315955564772843261e****
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
      data: DescribeApplicationScalingRulesResponseBodyData,
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

