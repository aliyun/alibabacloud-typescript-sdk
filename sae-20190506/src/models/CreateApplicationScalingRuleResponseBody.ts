// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationScalingRuleResponseBodyDataMetricMetrics extends $dara.Model {
  /**
   * @remarks
   * The target value of the monitoring metric.
   * 
   * - Target CPU utilization, in percentage.
   * - Target memory utilization, in percentage.
   * - QPS.
   * - Response time, in milliseconds.
   * - Average number of active TCP connections, in connections per second.
   * - Public-Internet-facing SLB QPS.
   * - Public-Internet-facing SLB response time, in milliseconds.
   * - Private network SLB QPS.
   * - Private network SLB response time, in milliseconds.
   * 
   * @example
   * 20
   */
  metricTargetAverageUtilization?: number;
  /**
   * @remarks
   * The trigger condition for the monitoring metric. Valid values:
   * 
   * - **CPU**: CPU utilization.
   * - **MEMORY**: memory utilization.
   * - **QPS**: the average QPS of a single instance of a Java application within 1 minute.
   * - **RT**: the average RT of all service interfaces of a Java application within 1 minute.
   * - **tcpActiveConn**: the average number of active TCP connections of a single instance within 30 seconds.
   * - **SLB_QPS**: the average public-Internet-facing SLB QPS of a single instance within 15 seconds.
   * - **SLB_RT**: the average public-Internet-facing SLB response time within 15 seconds.
   * - **INTRANET_SLB_QPS**: the average private network SLB QPS of a single instance within 15 seconds.
   * - **INTRANET_SLB_RT**: the average private network SLB response time within 15 seconds.
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
   * The Simple Log Service Logstore for SLB access logs.
   * 
   * @example
   * test
   */
  slbLogstore?: string;
  /**
   * @remarks
   * The Simple Log Service project for SLB access logs.
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
   * The list of monitoring metric-based elastic scaling configurations.
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
   * The time point. Format: **HH:mm**.
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
   * The short-term start date of the scheduled elastic scaling policy.
   * 
   * - If both **BeginDate** and **EndDate** are **null**, the policy is executed on a long-term basis. This is the default value.
   * - If specific dates are specified, for example, **BeginDate** is 2021-03-25 and **EndDate** is 2021-04-25, the validity period is one month.
   * 
   * @example
   * 2021-03-25
   */
  beginDate?: string;
  /**
   * @remarks
   * The short-term end date of the scheduled elastic scaling policy.
   * 
   * - If both **BeginDate** and **EndDate** are **null**, the policy is executed on a long-term basis. This is the default value.
   * - If specific dates are specified, for example, **BeginDate** is 2021-03-25 and **EndDate** is 2021-04-25, the validity period is one month.
   * 
   * @example
   * 2021-04-25
   */
  endDate?: string;
  /**
   * @remarks
   * The epoch for executing the scheduled elastic scaling policy. Valid values:
   * 
   * - **\\* \\* \\***: executes the scheduled policy at the specified time every day.
   * - **\\* \\* Fri,Mon**: executes the scheduled policy at the specified time on the specified days of every week. Multiple days are supported. The time zone is GMT+8. Valid values: 
   * 
   *     - **Sun**: Sunday
   *     - **Mon**: Monday
   *     - **Tue**: Tuesday
   *     - **Wed**: Wednesday
   *     - **Thu**: Thursday
   *     - **Fri**: Friday
   *     - **Sat**: Saturday
   * - **1,2,3,28,31 \\* \\***: executes the scheduled policy at the specified time on the specified days of every month. Multiple days are supported. Valid values: [1,31\\]. If the current month does not have the 31st day, the scheduled policy is skipped on that day.
   * 
   * @example
   * * * *
   */
  period?: string;
  /**
   * @remarks
   * The trigger time points within a single day.
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
   * The application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The creation time of the elastic scaling policy. Unit: milliseconds.
   * 
   * @example
   * 1616642248938
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the idle mode is enabled.
   */
  enableIdle?: boolean;
  /**
   * @remarks
   * The time when the elastic scaling policy was last disabled.
   * 
   * @example
   * 1641882854484
   */
  lastDisableTime?: number;
  /**
   * @remarks
   * The monitoring metric-based elastic scaling configuration.
   */
  metric?: CreateApplicationScalingRuleResponseBodyDataMetric;
  /**
   * @remarks
   * Indicates whether the elastic scaling policy is enabled. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  scaleRuleEnabled?: boolean;
  /**
   * @remarks
   * The name of the elastic scaling policy.
   * 
   * @example
   * test
   */
  scaleRuleName?: string;
  /**
   * @remarks
   * The type of the elastic scaling policy. Valid values:
   * 
   * - **timing**: scheduled elastic scaling.
   * - **metric**: monitoring metric-based elastic scaling.
   * - **mix**: hybrid elastic scaling.
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The scheduled elastic scaling configuration.
   */
  timer?: CreateApplicationScalingRuleResponseBodyDataTimer;
  /**
   * @remarks
   * The update time of the elastic scaling policy. Unit: milliseconds.
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
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: success.
   * - **3xx**: redirection.
   * - **4xx**: request error.
   * - **5xx**: server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: CreateApplicationScalingRuleResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InstanceExist.ScalingRuleName
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - If the request is normal, **success** is returned.
   * - If the request is abnormal, a specific error code is returned.
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
   * Indicates whether the application instance is restarted successfully. Valid values:
   * 
   * - **true**: restarted successfully.
   * - **false**: failed to restart.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID, which is used to accurately query the call information.
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

