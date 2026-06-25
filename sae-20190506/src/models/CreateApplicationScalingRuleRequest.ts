// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to enable idle mode for the application.
   */
  enableIdle?: boolean;
  /**
   * @remarks
   * The minimum number of ready instances, specified as a percentage of the total number of instances. Valid values:
   * 
   * - **-1**: Indicates that a percentage is not used. In this case, the value of `MinReadyInstances` is used.
   * 
   * - **0\\~100**: A percentage. The result is rounded up. For example, if you set this parameter to 50 (%) and the application has 5 instances, the minimum number of ready instances is 3.
   * 
   * > If you specify both `MinReadyInstances` and a `MinReadyInstanceRatio` other than `-1`, `MinReadyInstanceRatio` takes precedence. For example, if `MinReadyInstances` is set to `5` and `MinReadyInstanceRatio` is set to `50`, the system uses `50` (%) to calculate the minimum number of ready instances.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of ready instances. Valid values:
   * 
   * - If you set this parameter to `0`, the application is interrupted during an update.
   * 
   * - If you set this parameter to `-1`, the system sets the value to 25% of the current number of instances, rounded up. For example, if the application has 5 instances, the minimum number of ready instances is 2 (5 × 25% = 1.25, rounded up to 2).
   * 
   * > To ensure service continuity during a rolling deployment, we recommend setting the minimum number of ready instances to 1 or more.
   * 
   * @example
   * 3
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * Specifies whether to enable the auto scaling policy. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  scalingRuleEnable?: boolean;
  /**
   * @remarks
   * Configurations for the metric-based auto scaling policy. This parameter is required if `ScalingRuleType` is set to `metric` or `mix`.
   * 
   * The parameter is a JSON string that contains the following fields:
   * 
   * - **maxReplicas**: The maximum number of application instances.
   * 
   * - **minReplicas**: The minimum number of application instances.
   * 
   * - **metricType**: The metric that triggers the auto scaling policy. Valid values:
   * 
   *   - **CPU**: CPU utilization.
   * 
   *   - **MEMORY**: Memory utilization.
   * 
   *   - **QPS**: The average queries per second (QPS) per instance for a Java application over a 1-minute period.
   * 
   *   - **RT**: The average response time (RT) of all service interfaces for a Java application over a 1-minute period.
   * 
   *   - **tcpActiveConn**: The average number of active TCP connections per instance over a 30-second period.
   * 
   *   - **SLB_QPS**: The average QPS per instance for a public-facing SLB instance over a 15-second period.
   * 
   *   - **SLB_RT**: The average RT of a public-facing SLB instance over a 15-second period.
   * 
   *   - **INTRANET_SLB_QPS**: The average QPS per instance for an internal-facing SLB instance over a 15-second period.
   * 
   *   - **INTRANET_SLB_RT**: The average RT of an internal-facing SLB instance over a 15-second period.
   * 
   * - **metricTargetAverageUtilization**: The target value for the metric specified by `metricType`. The unit of this value depends on `metricType`.
   * 
   *   - Target CPU utilization, in percentage.
   * 
   *   - Target memory utilization, in percentage.
   * 
   *   - Target QPS, in requests per second.
   * 
   *   - Target response time, in milliseconds.
   * 
   *   - Average number of active TCP connections.
   * 
   *   - Target public-facing SLB QPS, in requests per second.
   * 
   *   - Target public-facing SLB response time, in milliseconds.
   * 
   *   - Target internal-facing SLB QPS, in requests per second.
   * 
   *   - Target internal-facing SLB response time, in milliseconds.
   * 
   * - **slbId**: The SLB instance ID.
   * 
   * - **slbProject**: The Log Service project.
   * 
   * - **slbLogstore**: The Log Service Logstore.
   * 
   * - **vport**: The SLB listener port. The HTTP and HTTPS protocols are supported.
   * 
   * - **scaleUpRules**: The rules to scale out the application.
   * 
   * - **scaleDownRules**: The rules to scale in the application.
   * 
   * - **step**: The step size for scaling out or scaling in. This is the maximum number of instances that can be added or removed in a single scaling activity.
   * 
   * - **disabled**: Specifies whether to prevent the application from scaling in. If set to `true`, the number of application instances is never reduced. This can prevent business risks caused by scaling in during peak hours.
   * 
   *   - **true**: Scale-in is disabled.
   * 
   *   - **false**: Scale-in is enabled. This is the default value.
   * 
   * - **stabilizationWindowSeconds**: The cooldown period for scaling out or scaling in, in seconds. Valid values: 0 to 3600. The default value is 0.
   * 
   * > You can configure one or more metrics. If you configure multiple metrics, the application scales out when any of the metrics meets or exceeds its target value, up to the specified maximum number of instances. The application scales in only when all metrics are below their target values, down to the specified minimum number of instances.
   * 
   * @example
   * {"maxReplicas":3,"minReplicas":1,"metrics":[{"metricType":"CPU","metricTargetAverageUtilization":20},{"metricType":"MEMORY","metricTargetAverageUtilization":30},{"metricType":"tcpActiveConn","metricTargetAverageUtilization":20},{"metricType":"SLB_QPS","MetricTargetAverageUtilization":25,"slbId":"lb-xxx","slbProject":"aliyun-fc-cn-hangzhou-d95881d9-5d3c-5f26-a6b8-************","slbLogstore":"function-log","vport":"80"},{"metricType":"SLB_RT","MetricTargetAverageUtilization":35,"slbId":"lb-xxx","slbProject":"aliyun-fc-cn-hangzhou-d95881d9-5d3c-5f26-a6b8-************","slbLogstore":"function-log","vport":"80"}],"scaleUpRules":{"step":"100","disabled":false,"stabilizationWindowSeconds":0},"scaleDownRules":{"step":"100","disabled":false,"stabilizationWindowSeconds":300}}
   */
  scalingRuleMetric?: string;
  /**
   * @remarks
   * The name of the auto scaling policy. The name must be unique within an application, start with a lowercase letter, and contain only lowercase letters, digits, and hyphens (-). The name can be up to 32 characters long.
   * 
   * > The policy name cannot be changed after creation.
   * 
   * This parameter is required.
   * 
   * @example
   * timer-0800-2100
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * Configurations for the scheduled auto scaling policy. This parameter is required if `ScalingRuleType` is set to `timing` or if you use an SDK.
   * 
   * The parameter is a JSON string that contains the following fields:
   * 
   * - **beginDate** and **endDate**: The start and end dates of the policy\\"s effective period.
   * 
   *   - If both fields are set to `null` (default), the policy is effective indefinitely.
   * 
   *   - If you specify a date range, for example, `beginDate` is `2021-03-25` and `endDate` is `2021-04-25`, the policy is effective for one month.
   * 
   * - **period**: The recurrence rule for the scheduled auto scaling policy.
   * 
   *   - **\\* \\* \\***: The policy is executed at a specified time every day.
   * 
   *   - **\\* \\* Fri,Mon**: The policy is executed at a specified time on specific days of the week. You can select multiple days. The time is in the GMT+8 time zone. Valid values:
   * 
   *     - **Sun**: Sunday
   * 
   *     - **Mon**: Monday
   * 
   *     - **Tue**: Tuesday
   * 
   *     - **Wed**: Wednesday
   * 
   *     - **Thu**: Thursday
   * 
   *     - **Fri**: Friday
   * 
   *     - **Sat**: Saturday
   * 
   *   - **1,2,3,28,31 \\* \\***: The policy is executed at a specified time on specific days of a month. You can select multiple days. The value can be from 1 to 31. If a month does not have the specified day, for example, the 31st, the policy is not executed on that day for that month.
   * 
   * - **schedules**: The trigger times and the corresponding target number of instances. You can specify a maximum of 20 schedules. The parameter includes the following fields:
   * 
   *   - **atTime**: The trigger time in `HH:mm` format. For example, `08:00`.
   * 
   *   - **targetReplicas**: The target number of application instances. Valid values: 1 to 50.
   * 
   *     > During a rolling deployment, we recommend that you set the minimum number of ready instances to 1 or more to prevent service interruptions. If you set the minimum number of ready instances to `0`, your application will be interrupted during an update.
   * 
   * @example
   * {"beginDate":null,"endDate":null,"period":"* * *","schedules":[{"atTime":"08:00","targetReplicas":10},{"atTime":"20:00","targetReplicas":3}]}
   */
  scalingRuleTimer?: string;
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
   * > * If you set this parameter to `timing`, the `ScalingRuleTimer` parameter is required.
   * >
   * > * If you set this parameter to `metric`, the `ScalingRuleMetric` parameter is required.
   * >
   * > * If you set this parameter to `mix`, the `ScalingRuleMetric` parameter is required. You can also configure the `ScalingRuleTimer` parameter as needed.
   * 
   * This parameter is required.
   * 
   * @example
   * timing
   */
  scalingRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enableIdle: 'EnableIdle',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      scalingRuleEnable: 'ScalingRuleEnable',
      scalingRuleMetric: 'ScalingRuleMetric',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleTimer: 'ScalingRuleTimer',
      scalingRuleType: 'ScalingRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enableIdle: 'boolean',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      scalingRuleEnable: 'boolean',
      scalingRuleMetric: 'string',
      scalingRuleName: 'string',
      scalingRuleTimer: 'string',
      scalingRuleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

