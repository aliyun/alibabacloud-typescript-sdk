// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationScalingRuleResponseBodyDataMetricMetrics extends $dara.Model {
  /**
   * @remarks
   * The target value for the specified metric. The unit varies based on the metric type.
   * 
   * - Target CPU utilization, in percentage.
   * 
   * - Target memory usage, in percentage.
   * 
   * - Target queries per second (QPS).
   * 
   * - Target response time, in milliseconds.
   * 
   * - The target number of active TCP connections.
   * 
   * - Target QPS for the public-facing SLB instance.
   * 
   * - Target response time of the public-facing SLB instance, in milliseconds.
   * 
   * - Target QPS for the internal SLB instance.
   * 
   * - Target response time of the internal SLB instance, in milliseconds.
   * 
   * @example
   * 20
   */
  metricTargetAverageUtilization?: number;
  /**
   * @remarks
   * The metric that triggers the scaling policy. Valid values:
   * 
   * - **CPU**: CPU utilization.
   * 
   * - **MEMORY**: memory usage.
   * 
   * - **QPS**: The average queries per second (QPS) per instance over the last minute. This applies only to Java applications.
   * 
   * - **RT**: The average response time (RT) of all service interfaces in the application over the last minute. This applies only to Java applications.
   * 
   * - **tcpActiveConn**: The average number of active TCP connections per instance over the last 30 seconds.
   * 
   * - **SLB_QPS**: The average QPS from the public-facing SLB, per instance, over the last 15 seconds.
   * 
   * - **SLB_RT**: The average response time of a public-facing SLB instance over the last 15 seconds.
   * 
   * - **INTRANET_SLB_QPS**: The average QPS from the internal SLB, per instance, over the last 15 seconds.
   * 
   * - **INTRANET_SLB_RT**: The average response time of an internal SLB instance over the last 15 seconds.
   * 
   * @example
   * CPU
   */
  metricType?: string;
  /**
   * @remarks
   * The SLB instance ID.
   * 
   * @example
   * lb-xxx
   */
  slbId?: string;
  /**
   * @remarks
   * The name of the Logstore for SLB access logs.
   * 
   * @example
   * test
   */
  slbLogstore?: string;
  /**
   * @remarks
   * The name of the Log Service Project for SLB access logs.
   * 
   * @example
   * test
   */
  slbProject?: string;
  /**
   * @remarks
   * The SLB port.
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

export class UpdateApplicationScalingRuleResponseBodyDataMetric extends $dara.Model {
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
   * The metrics that trigger scaling actions.
   */
  metrics?: UpdateApplicationScalingRuleResponseBodyDataMetricMetrics[];
  /**
   * @remarks
   * The minimum number of instances.
   * 
   * @example
   * 1
   */
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyDataMetricMetrics },
      minReplicas: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyDataTimerSchedules extends $dara.Model {
  /**
   * @remarks
   * The time at which the scaling action is triggered. Format: **HH:mm**.
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

export class UpdateApplicationScalingRuleResponseBodyDataTimer extends $dara.Model {
  /**
   * @remarks
   * The start date of the short-term scheduled scaling policy.
   * 
   * - If **BeginDate** and **EndDate** are both set to **null**, the policy is long-term by default.
   * 
   * - If you specify a date range, for example, **BeginDate** is set to 2021-03-25 and **EndDate** is set to 2021-04-25, the policy is effective for one month.
   * 
   * @example
   * 2021-03-25
   */
  beginDate?: string;
  /**
   * @remarks
   * The end date of the short-term scheduled scaling policy.
   * 
   * - If **BeginDate** and **EndDate** are both set to **null**, the policy is long-term by default.
   * 
   * - If you specify a date range, for example, **BeginDate** is set to 2021-03-25 and **EndDate** is set to 2021-04-25, the policy is effective for one month.
   * 
   * @example
   * 2021-04-25
   */
  endDate?: string;
  /**
   * @remarks
   * The recurrence schedule for the scaling policy.
   * 
   * - **\\* \\* \\***: The policy runs at a specified time every day.
   * 
   * - **\\* \\* Fri,Mon**: The policy runs at a specified time on specific days of a week. You can select multiple days. The time is in the GMT+8 time zone. Valid values:
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
   * - **1,2,3,28,31 \\* \\***: The policy runs at a specified time on specific days of a month. You can select multiple days. If a month does not have a specific day, such as the 31st, the policy skips that day.
   * 
   * @example
   * * * *
   */
  period?: string;
  /**
   * @remarks
   * The schedules for the scaling policy.
   */
  schedules?: UpdateApplicationScalingRuleResponseBodyDataTimerSchedules[];
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
      schedules: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyDataTimerSchedules },
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

export class UpdateApplicationScalingRuleResponseBodyData extends $dara.Model {
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
   * The time when the scaling policy was created, in milliseconds.
   * 
   * @example
   * 1616642248938
   */
  createTime?: number;
  /**
   * @remarks
   * Specifies whether to enable idle mode.
   */
  enableIdle?: boolean;
  /**
   * @remarks
   * The time when the scaling policy was last disabled, in milliseconds.
   * 
   * @example
   * 1641882854484
   */
  lastDisableTime?: number;
  /**
   * @remarks
   * The configuration for metric-based scaling.
   */
  metric?: UpdateApplicationScalingRuleResponseBodyDataMetric;
  /**
   * @remarks
   * Specifies whether the scaling policy is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  scaleRuleEnabled?: boolean;
  /**
   * @remarks
   * The name of the scaling policy.
   * 
   * @example
   * test
   */
  scaleRuleName?: string;
  /**
   * @remarks
   * The type of the scaling policy. Valid values:
   * 
   * - **timing**: scheduled scaling
   * 
   * - **metric**: metric-based scaling
   * 
   * - **mix**: hybrid scaling
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The configuration for scheduled scaling.
   */
  timer?: UpdateApplicationScalingRuleResponseBodyDataTimer;
  /**
   * @remarks
   * The time when the scaling policy was updated, in milliseconds.
   * 
   * @example
   * 1616642248938
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      enableIdle: 'EnableIdle',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
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
      enableIdle: 'boolean',
      lastDisableTime: 'number',
      metric: UpdateApplicationScalingRuleResponseBodyDataMetric,
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: UpdateApplicationScalingRuleResponseBodyDataTimer,
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

export class UpdateApplicationScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or a POP error code.
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A client-side error occurred.
   * 
   * - **5xx**: A server-side error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: UpdateApplicationScalingRuleResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is returned only if the request fails.
   * 
   * - For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
   * 
   * - **success** is returned if the request is successful.
   * 
   * - An error message is returned if the request fails.
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
   * Specifies whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query call details.
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
      data: UpdateApplicationScalingRuleResponseBodyData,
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

