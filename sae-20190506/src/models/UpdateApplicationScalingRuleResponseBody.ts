// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationScalingRuleResponseBodyDataMetricMetrics extends $dara.Model {
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
   * *   **tcpActiveConn**: the average number of active TCP connections of an application instance within 30 seconds.
   * *   **SLB_QPS**: the average QPS of the Internet-facing SLB instance associated with an application instance within 15 seconds.
   * *   **SLB_RT**: the average response time of the Internet-facing SLB instance within 15 seconds.
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
   * The metrics that are used to trigger the auto scaling policy.
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
   * The start date of the validity period of the scheduled auto scaling policy. Parameter description:
   * 
   * *   If **BeginDate** and **EndDate** are set to **null**, the auto scaling policy is a long-term policy. Default values of the beginDate and endDate parameters: null.
   * *   If the two parameters are set to specific dates, the scheduled auto scaling policy can be triggered during the period between the two dates. For example, if **BeginDate** is set to 2021-03-25 and **EndDate** is set to 2021-04-25, the auto scaling policy is valid for one month.
   * 
   * @example
   * 2021-03-25
   */
  beginDate?: string;
  /**
   * @remarks
   * The end date of the validity period of the scheduled auto scaling policy. Take note of the following rules:
   * 
   * *   If **BeginDate** and **EndDate** are set to **null**, the auto scaling policy is a long-term policy. Default values of the beginDate and endDate parameters: null.
   * *   If the two parameters are set to specific dates, the scheduled auto scaling policy can be triggered during the period between the two dates. For example, if **BeginDate** is set to 2021-03-25 and **EndDate** is set to 2021-04-25, the auto scaling policy is valid for one month.
   * 
   * @example
   * 2021-04-25
   */
  endDate?: string;
  /**
   * @remarks
   * The frequency at which the scheduled auto scaling policy is executed. Valid values:
   * 
   * *   **\\* \\* \\***: The scheduled auto scaling policy is executed at a specified point in time every day.
   * 
   * *   **\\* \\* Fri,Mon**: The scheduled auto scaling policy is executed at a specified point in time on one or more days of each week. GMT+8 is used. Valid values:
   * 
   *     *   **Sun**
   *     *   **Mon**
   *     *   **Tue**
   *     *   **Wed**
   *     *   **Thu**
   *     *   **Fri**
   *     *   **Sat**
   * 
   * *   **1,2,3,28,31 \\* \\***: The scheduled auto scaling policy is executed at a specified point in time on one or more days of each month. Valid values: 1 to 31. If the month does not have a 31st day, the auto scaling policy is executed on the specified days other than the 31st day.
   * 
   * @example
   * * * *
   */
  period?: string;
  /**
   * @remarks
   * The points in time at which the auto scaling policy is triggered within one day.
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
   * The time when the auto scaling policy was created. Unit: milliseconds.
   * 
   * @example
   * 1616642248938
   */
  createTime?: number;
  enableIdle?: boolean;
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
  metric?: UpdateApplicationScalingRuleResponseBodyDataMetric;
  /**
   * @remarks
   * Specifies whether to enable the auto scaling policy. Valid values:
   * 
   * *   **true**: The auto scaling policy is enabled.
   * *   **false**: The auto scaling policy is disabled.
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
   * *   **timing**: a scheduled auto scaling policy
   * *   **metric**: a metric-based auto scaling policy
   * *   **mix**: a hybrid auto scaling policy
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The details of the scheduled auto scaling policy.
   */
  timer?: UpdateApplicationScalingRuleResponseBodyDataTimer;
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
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: UpdateApplicationScalingRuleResponseBodyData;
  /**
   * @remarks
   * The error code returned. Take note of the following rules:
   * 
   * *   If the call is successful, **ErrorCode** is not returned.
   * *   If the call fails, **ErrorCode** is returned. For more information, see the "**Error codes**" section in this topic.
   * 
   * @example
   * Null
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Take note of the following rules:
   * 
   * *   If the call is successful, **success** is returned.
   * *   If the call fails, an error code is returned.
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
   * Specifies whether the instances are successfully restarted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
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

