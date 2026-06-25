// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics extends $dara.Model {
  /**
   * @remarks
   * The target value for the metric. The unit varies based on the value of `MetricType`.
   * 
   * - Target CPU usage, in percent.
   * 
   * - Target memory usage, in percent.
   * 
   * - Target QPS, in queries per second.
   * 
   * - Target response time, in milliseconds.
   * 
   * - Target number of active TCP connections.
   * 
   * - Target QPS of a public-facing SLB instance, in queries per second.
   * 
   * - Target response time of a public-facing SLB instance, in milliseconds.
   * 
   * - Target QPS of a private SLB instance, in queries per second.
   * 
   * - Target response time of a private SLB instance, in milliseconds.
   * 
   * @example
   * 20
   */
  metricTargetAverageUtilization?: number;
  /**
   * @remarks
   * The metric used to trigger the auto scaling policy. Valid values:
   * 
   * - **CPU**: CPU usage.
   * 
   * - **MEMORY**: memory usage.
   * 
   * - **QPS**: Average queries per second (QPS) per instance over a 1-minute period. This metric applies to Java applications only.
   * 
   * - **RT**: Average response time of all service interfaces in a Java application over a 1-minute period.
   * 
   * - **tcpActiveConn**: Average number of active TCP connections per instance over a 30-second period.
   * 
   * - **SLB_QPS**: Average QPS per instance for a public-facing SLB instance over a 15-second period.
   * 
   * - **SLB_RT**: Average response time of a public-facing SLB instance over a 15-second period.
   * 
   * - **INTRANET_SLB_QPS**: Average QPS per instance for a private SLB instance over a 15-second period.
   * 
   * - **INTRANET_SLB_RT**: Average response time of a private SLB instance over a 15-second period.
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
   * The Logstore in Log Service that stores SLB access logs.
   * 
   * @example
   * test
   */
  slbLogstore?: string;
  /**
   * @remarks
   * The project in Log Service that stores SLB access logs.
   * 
   * @example
   * test
   */
  slbProject?: string;
  /**
   * @remarks
   * The monitored port of the SLB instance.
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

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusCurrentMetrics extends $dara.Model {
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
   * The name of the trigger condition.
   * 
   * - **cpu**: CPU usage.
   * 
   * - **memory**: memory usage.
   * 
   * - **arms_incall_qps_v2**: QPS of a Java application.
   * 
   * - **arms_incall_rt**: Response time of a Java application.
   * 
   * - **tcpActiveConn**: The number of active TCP connections.
   * 
   * - **slb_incall_qps**: QPS of a public-facing SLB instance.
   * 
   * - **slb_incall_rt**: Response time of a public-facing SLB instance.
   * 
   * - **intranet_slb_incall_qps**: QPS of a private SLB instance.
   * 
   * - **intranet_slb_incall_rt**: Response time of a private SLB instance.
   * 
   * @example
   * cpu
   */
  name?: string;
  /**
   * @remarks
   * The data type. This parameter is associated with the specified metric.
   * 
   * - **Resource**: The metric value for **cpu** or **memory**.
   * 
   * - **Pods**: The metric value for **tcpActiveConn**.
   * 
   * - **External**: The metric value for **arms** or **slb**.
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
   * The name of the trigger condition.
   * 
   * - **cpu**: CPU usage.
   * 
   * - **memory**: memory usage.
   * 
   * - **arms_incall_qps_v2**: QPS of a Java application.
   * 
   * - **arms_incall_rt**: Response time of a Java application.
   * 
   * - **tcpActiveConn**: The number of active TCP connections.
   * 
   * - **slb_incall_qps**: QPS of a public-facing SLB instance.
   * 
   * - **slb_incall_rt**: Response time of a public-facing SLB instance.
   * 
   * - **intranet_slb_incall_qps**: QPS of a private SLB instance.
   * 
   * - **intranet_slb_incall_rt**: Response time of a private SLB instance.
   * 
   * @example
   * cpu
   */
  name?: string;
  /**
   * @remarks
   * The metric value that triggers the next scale-in event. The value is a percentage.
   * 
   * @example
   * 10
   */
  nextScaleInAverageUtilization?: number;
  /**
   * @remarks
   * The metric value that triggers the next scale-out event. The value is a percentage.
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
   * A list of the current metrics for scaling.
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
   * A list of metrics for the next scaling activity.
   */
  nextScaleMetrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusNextScaleMetrics[];
  /**
   * @remarks
   * The next period for metric-based scaling.
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
  /**
   * @remarks
   * The Prometheus query.
   */
  prometheusQuery?: string;
  /**
   * @remarks
   * The target value for the Prometheus query that triggers a scaling event.
   */
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
   * Specifies whether to disable scale-in. Valid values:
   * 
   * - **true**: Disables scale-in.
   * 
   * - **false**: Enables scale-in.
   * 
   * > Setting this to `true` prevents the application from scaling in, which can be useful to avoid service disruptions from unexpected capacity reduction during peak hours. Default: `false`.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The cooldown time for scale-in events, in seconds. During this period, no further scaling events are triggered. The value must be an integer from 0 to 3,600. The default value is 0.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  /**
   * @remarks
   * The number of instances to remove in a single scale-in event.
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
   * Specifies whether to disable scale-out. Valid values:
   * 
   * - **true**: Disables scale-out.
   * 
   * - **false**: Enables scale-out.
   * 
   * > If this parameter is set to `true`, application instances are never scaled out. This can be useful to freeze the application capacity during specific events. By default, this parameter is set to `false`.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The cooldown time for scale-out events, in seconds. During this period, no further scaling events are triggered. The value must be an integer from 0 to 3,600. The default value is 0.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  /**
   * @remarks
   * The number of instances to add in a single scale-out event.
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
  /**
   * @remarks
   * The source of the metrics.
   */
  metricSource?: string;
  /**
   * @remarks
   * The metric-based conditions that trigger scaling.
   */
  metrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics[];
  /**
   * @remarks
   * The status of the metric-based scaling policy.
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
  /**
   * @remarks
   * The Prometheus metrics.
   */
  prometheusMetrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricPrometheusMetrics[];
  /**
   * @remarks
   * The Prometheus token.
   */
  prometheusToken?: string;
  /**
   * @remarks
   * The endpoint of the Prometheus service.
   */
  prometheusUrl?: string;
  /**
   * @remarks
   * Configuration for scale-in events.
   */
  scaleDownRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules;
  /**
   * @remarks
   * Configuration for scale-out events.
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
   * The trigger time in `HH:mm` format.
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
   * The target number of instances.
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
   * The start date of the short-term scheduled scaling policy. The following rules apply:
   * 
   * - If **BeginDate** and **EndDate** are not specified, the policy is long-term by default.
   * 
   * - If you specify a `BeginDate` and an `EndDate`, the policy is short-term and applies only within that date range.
   * 
   * @example
   * 2021-03-25
   */
  beginDate?: string;
  /**
   * @remarks
   * The end date of the short-term scheduled scaling policy. The following rules apply:
   * 
   * - If **BeginDate** and **EndDate** are not specified, the policy is long-term by default.
   * 
   * - If you specify a `BeginDate` and an `EndDate`, the policy is short-term and applies only within that date range.
   * 
   * @example
   * 2021-04-25
   */
  endDate?: string;
  /**
   * @remarks
   * The days on which the scheduled scaling policy runs. Valid values:
   * 
   * - **\\* \\* \\***: The policy is executed at a specified time every day.
   * 
   * - **\\* \\* Fri,Mon**: Executes the policy on specified days of the week. The time zone is GMT+8. Valid days are listed below:
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
   * - **1,2,3,28,31 \\* \\***: Executes the policy on specified days of the month (1-31). If a specified day does not exist in a given month (e.g., the 31st), the policy does not run on that day.
   * 
   * @example
   * * * *
   */
  period?: string;
  /**
   * @remarks
   * The daily trigger schedule for the policy.
   */
  schedules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimerSchedules[];
  /**
   * @remarks
   * The time zone.
   */
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
   * The application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The timestamp of the policy\\"s creation, in milliseconds.
   * 
   * @example
   * 1616642248938
   */
  createTime?: number;
  /**
   * @remarks
   * The timestamp of when the policy was last disabled.
   * 
   * @example
   * 1641882854484
   */
  lastDisableTime?: number;
  /**
   * @remarks
   * The metric-based scaling policy.
   */
  metric?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetric;
  /**
   * @remarks
   * The minimum number of available instances, specified as a percentage. Valid values:
   * 
   * - **-1**: Indicates that this parameter is not used.
   * 
   * - **0 to 100**: a percentage that is rounded up to the nearest integer. For example, if you set this parameter to 50% and you have five instances, the minimum number of available instances is 3.
   * 
   * > If you specify both **MinReadyInstances** and **MinReadyInstanceRatio**, the value of **MinReadyInstanceRatio** takes precedence, unless it is set to **-1**.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of available instances. Valid values:
   * 
   * - If you set this parameter to **0**, the application may be interrupted during an upgrade.
   * 
   * - If you set this parameter to **-1**, a recommended value is used, which is 25% of the current number of instances, rounded up to the nearest integer. For example, if an application has five instances, the minimum number of available instances is 2 (5 \\* 25% = 1.25, rounded up).
   * 
   * > To ensure business continuity during a rolling deployment, we recommend that you set this parameter to a value greater than or equal to 1.
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
   * - **timing**: A scheduled scaling policy.
   * 
   * - **metric**: A metric-based scaling policy.
   * 
   * - **mix**: A hybrid scaling policy.
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The scheduled scaling policy.
   */
  timer?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimer;
  /**
   * @remarks
   * The timestamp of the last policy update, in milliseconds.
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
   * A list of auto scaling policies for the application.
   */
  applicationScalingRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The total number of auto scaling policies for the application.
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
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: The request was invalid.
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
  data?: DescribeApplicationScalingRulesResponseBodyData;
  /**
   * @remarks
   * The error code. This parameter is returned only when the request fails.
   * 
   * -
   * 
   * - For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message. Valid values:
   * 
   * - Returns **success** if the request is successful.
   * 
   * - Returns an error message if the request fails.
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
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query the details of a request.
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

