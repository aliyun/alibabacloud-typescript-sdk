// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationScalingRuleResponseBodyDataMetricMetrics extends $dara.Model {
  /**
   * @remarks
   * The target value for the metric.
   * 
   * - The target CPU utilization, in percentage.
   * 
   * - The target memory utilization, in percentage.
   * 
   * - The target QPS.
   * 
   * - The target response time, in milliseconds.
   * 
   * - The target average number of active TCP connections per second.
   * 
   * - The target QPS for a public-facing SLB instance.
   * 
   * - The target response time for a public-facing SLB instance, in milliseconds.
   * 
   * - The target QPS for an internal-facing SLB instance.
   * 
   * - The target response time for an internal-facing SLB instance, in milliseconds.
   * 
   * @example
   * 20
   */
  metricTargetAverageUtilization?: number;
  /**
   * @remarks
   * The type of the metric that triggers the auto scaling policy. Valid values:
   * 
   * - **CPU**: CPU utilization.
   * 
   * - **MEMORY**: memory utilization.
   * 
   * - **QPS**: The average QPS per instance over 1 minute for a Java application.
   * 
   * - **RT**: The average response time across all service endpoints over 1 minute for a Java application.
   * 
   * - **tcpActiveConn**: The average number of TCP active connections per instance over 30 seconds.
   * 
   * - **SLB_QPS**: The average QPS per instance for a public SLB instance, measured over 15 seconds.
   * 
   * - **SLB_RT**: The average response time for a public SLB instance, measured over 15 seconds.
   * 
   * - **INTRANET_SLB_QPS**: The average QPS per instance for an internal-facing SLB instance, measured over 15 seconds.
   * 
   * - **INTRANET_SLB_RT**: The average response time for an internal-facing SLB instance, measured over 15 seconds.
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
   * The Log Service Logstore for SLB access logs.
   * 
   * @example
   * test
   */
  slbLogstore?: string;
  /**
   * @remarks
   * The Log Service project for SLB access logs.
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

export class CreateApplicationScalingRuleResponseBodyDataMetric extends $dara.Model {
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
   * An array of objects that define the metrics for the metric-based auto scaling policy.
   */
  metrics?: CreateApplicationScalingRuleResponseBodyDataMetricMetrics[];
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
      metrics: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyDataMetricMetrics },
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

export class CreateApplicationScalingRuleResponseBodyDataTimerSchedules extends $dara.Model {
  /**
   * @remarks
   * The trigger time. The format is **HH:mm**.
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
   * 5
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

export class CreateApplicationScalingRuleResponseBodyDataTimer extends $dara.Model {
  /**
   * @remarks
   * The start date of the scheduled auto scaling policy.
   * 
   * - If both **BeginDate** and **EndDate** are **null**, the policy is a long-term policy. This is the default.
   * 
   * - For example, if you set **BeginDate** to 2021-03-25 and **EndDate** to 2021-04-25, the policy is active for one month.
   * 
   * @example
   * 2021-03-25
   */
  beginDate?: string;
  /**
   * @remarks
   * The end date of the scheduled auto scaling policy.
   * 
   * - If both **BeginDate** and **EndDate** are **null**, the policy is a long-term policy. This is the default.
   * 
   * - For example, if you set **BeginDate** to 2021-03-25 and **EndDate** to 2021-04-25, the policy is active for one month.
   * 
   * @example
   * 2021-04-25
   */
  endDate?: string;
  /**
   * @remarks
   * The recurrence pattern for the scheduled auto scaling policy. Valid values:
   * 
   * - **\\* \\* \\***: The policy is executed at a specified time every day.
   * 
   * - **\\* \\* Fri,Mon**: The policy is executed at a specified time on specific days of the week. You can select multiple days. The time is in the GMT+8 time zone. Valid values:
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
   * - **1,2,3,28,31 \\* \\***: The policy is executed at a specified time on specific days of a month. You can select multiple days. The value can be from 1 to 31. If a specified day does not exist in a given month (for example, the 31st), the policy is not executed on that day.
   * 
   * @example
   * * * *
   */
  period?: string;
  /**
   * @remarks
   * The trigger points for the scheduled auto scaling policy.
   */
  schedules?: CreateApplicationScalingRuleResponseBodyDataTimerSchedules[];
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
      schedules: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyDataTimerSchedules },
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

export class CreateApplicationScalingRuleResponseBodyData extends $dara.Model {
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
   * The time when the policy was created, in milliseconds.
   * 
   * @example
   * 1616642248938
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether idle mode is enabled.
   */
  enableIdle?: boolean;
  /**
   * @remarks
   * The time when the auto scaling policy was last disabled, in milliseconds.
   * 
   * @example
   * 1641882854484
   */
  lastDisableTime?: number;
  /**
   * @remarks
   * The configurations for the metric-based auto scaling policy.
   */
  metric?: CreateApplicationScalingRuleResponseBodyDataMetric;
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
   * - **timing**: scheduled auto scaling.
   * 
   * - **metric**: metric-based auto scaling.
   * 
   * - **mix**: mixed auto scaling.
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The configurations for the scheduled auto scaling policy.
   */
  timer?: CreateApplicationScalingRuleResponseBodyDataTimer;
  /**
   * @remarks
   * The time when the policy was last updated, in milliseconds.
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
      metric: CreateApplicationScalingRuleResponseBodyDataMetric,
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: CreateApplicationScalingRuleResponseBodyDataTimer,
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

export class CreateApplicationScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A client error occurred.
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
  data?: CreateApplicationScalingRuleResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - An error code is returned if the request fails. For more information, see the **Error codes** section in this topic.
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
   * - **true**: The API call was successful.
   * 
   * - **false**: The API call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. You can use this ID to query the details of a request.
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
      data: CreateApplicationScalingRuleResponseBodyData,
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

