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
   * Specifies whether to enable the idle mode.
   */
  enableIdle?: boolean;
  /**
   * @remarks
   * The percentage of the minimum number of surviving instances. Valid values:
   * 
   * - **-1**: the initial value, which indicates that the percentage is not used.
   * - **0~100**: the percentage, rounded up. For example, if you set this parameter to 50 and the current number of instances is 5, the minimum number of surviving instances is 3.
   * 
   * > When both **MinReadyInstances** and **MinReadyInstanceRatio** are specified and the value of **MinReadyInstanceRatio** is not **-1**, the **MinReadyInstanceRatio** parameter prevails. For example, if **MinReadyInstances** is set to **5** and **MinReadyInstanceRatio** is set to **50**, the value **50** is used to calculate the minimum number of surviving instances.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of surviving instances. Valid values:
   * 
   * - If you set this parameter to **0**, services are interrupted during the application upgrade.
   * - If you set this parameter to **-1**, the system recommended value is used, which is 25% of the current number of instances. For example, if the current number of instances is 5, 5 × 25% = 1.25. After rounding up, the minimum number of surviving instances is 2.
   * 
   * > We recommend that you set the minimum number of surviving instances for each rolling deployment to a value greater than or equal to 1 to ensure service continuity.
   * 
   * @example
   * 3
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * Specifies whether to enable the elastic scaling policy. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  scalingRuleEnable?: boolean;
  /**
   * @remarks
   * The configuration of the monitoring metric-based elastic policy. This parameter is required when you select the monitoring metric-based elastic policy settings.
   * 
   * Metric description:
   * 
   * - **maxReplicas**: the maximum number of instances for the application.
   * - **minReplicas**: the minimum number of instances for the application.
   * - **metricType**: the trigger condition for the monitoring metric. Valid values:
   *     - **CPU**: CPU utilization.
   *     - **MEMORY**: memory utilization.
   *     - **QPS**: the average queries per second (QPS) of a single instance of a Java application within 1 minute.
   *     - **RT**: the average response time (RT) of all service interfaces of a Java application within 1 minute.
   *     - **tcpActiveConn**: the average number of active TCP connections of a single instance within 30 seconds.
   *     - **SLB_QPS**: the average public-facing Server Load Balancer (SLB) QPS of a single instance within 15 seconds.
   *     - **SLB_RT**: the average public-Internet-facing SLB response time within 15 seconds.
   *     - **INTRANET_SLB_QPS**: the average private network SLB QPS of a single instance within 15 seconds.
   *     - **INTRANET_SLB_RT**: the average private network SLB response time within 15 seconds.
   * - **metricTargetAverageUtilization**: the target value of the monitoring metric based on the **metricType**.
   *     - Target CPU utilization, in percentage.
   *     - Target memory utilization, in percentage.
   *     - QPS.
   *     - Response time, in milliseconds.
   *     - Average number of active TCP connections, in connections per second.
   *     - Public-Internet-facing SLB QPS.
   *     - Public-Internet-facing SLB response time, in milliseconds.
   *     - Private network SLB QPS.
   *     - Private network SLB response time, in milliseconds.
   * - **slbId**: the SLB instance ID.
   * - **slbProject**: the Simple Log Service project.
   * - **slbLogstore**: the Simple Log Service Logstore.
   * - **vport**: the SLB listener port. HTTP and HTTPS protocols are supported.
   * - **scaleUpRules**: the scale-out rules for the application.
   * - **scaleDownRules**: the scale-in rules for the application.
   * - **step**: the step size for scaling out or scaling in. The maximum number of instances that can be scaled out or in per unit of time.
   * - **disabled**: specifies whether to disable scale-in. If enabled, the application instances are never scaled in, which effectively prevents service risks caused by scale-in during traffic peaks. Valid values:
   *     - **true**: enabled.
   *     - **false**: disabled. This is the default value.
   * - **stabilizationWindowSeconds**: the cooldown period for scaling out or scaling in. Valid values: [0, 3600\\]. Unit: seconds. Default value: 0.
   * 
   * > You can configure one or more monitoring metrics. If multiple monitoring metrics are configured, the application scales out as long as any metric is greater than or equal to the target value. The number of instances after scale-out does not exceed the maximum number of instances for the application. If all metrics are less than the target value, the application scales in. The number of instances after scale-in is not less than the minimum number of instances for the application.
   * 
   * @example
   * {"maxReplicas":3,"minReplicas":1,"metrics":[{"metricType":"CPU","metricTargetAverageUtilization":20},{"metricType":"MEMORY","metricTargetAverageUtilization":30},{"metricType":"tcpActiveConn","metricTargetAverageUtilization":20},{"metricType":"SLB_QPS","MetricTargetAverageUtilization":25,"slbId":"lb-xxx","slbProject":"aliyun-fc-cn-hangzhou-d95881d9-5d3c-5f26-a6b8-************","slbLogstore":"function-log","vport":"80"},{"metricType":"SLB_RT","MetricTargetAverageUtilization":35,"slbId":"lb-xxx","slbProject":"aliyun-fc-cn-hangzhou-d95881d9-5d3c-5f26-a6b8-************","slbLogstore":"function-log","vport":"80"}],"scaleUpRules":{"step":"100","disabled":false,"stabilizationWindowSeconds":0},"scaleDownRules":{"step":"100","disabled":false,"stabilizationWindowSeconds":300}}
   */
  scalingRuleMetric?: string;
  /**
   * @remarks
   * The custom name of the elastic scaling policy. The policy name must be unique within the application, start with a lowercase letter, and contain only lowercase letters, digits, and hyphens (-). It can be up to 32 characters in length.
   * > After the elastic scaling policy is created, the policy name cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * timer-0800-2100
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * The configuration of the scheduled elastic policy. This parameter is required when you select a scheduled elastic policy or use an SDK for configuration.
   * 
   * Metric description:
   * - **beginDate** and **endDate**: **beginDate** specifies the start date, and **endDate** specifies the end date. These parameters are used to configure the validity period of the scheduled elastic scaling policy. Valid values:
   * 
   *     - If both values are **null**, the policy is executed on a long-term basis. This is the default value.
   *     - If specific dates are specified, for example, **beginDate** is **2021-03-25** and **endDate** is **2021-04-25**, the validity period is one month.
   * 
   * - **period**: the epoch for executing the scheduled elastic scaling policy. Valid values:
   *     - **\\* \\* \\***: executes the scheduled policy at the specified time every day.
   *     - **\\* \\* Fri,Mon**: executes the scheduled policy at the specified time on the specified days of every week. Multiple days are supported. The time zone is GMT+8. Valid values: 
   *         - **Sun**: Sunday
   *         - **Mon**: Monday
   *         - **Tue**: Tuesday
   *         - **Wed**: Wednesday
   *         - **Thu**: Thursday
   *         - **Fri**: Friday
   *         - **Sat**: Saturday
   *     - **1,2,3,28,31 \\* \\***: executes the scheduled policy at the specified time on the specified days of every month. Multiple days are supported. Valid values: [1,31\\]. If the current month does not have the 31st day, the scheduled policy is skipped on that day.
   * - **schedules**: the trigger time of the elastic scaling policy and the number of application instances to maintain during the time period. Up to 20 time points are supported. Metric description:
   *     - **atTime**: the trigger time point. The format is **HH:mm**, for example, **08:00**.
   *     - **targetReplicas**: the number of instances for the application, or the minimum number of surviving instances for each deployment. Valid values: [1,50\\].
   *         > We recommend that you set the minimum number of surviving instances for each rolling deployment to a value greater than or equal to **1** to ensure that business is not interrupted. If you set this parameter to **0**, business will be interrupted during the application upgrade procedure.
   * 
   * @example
   * {"beginDate":null,"endDate":null,"period":"* * *","schedules":[{"atTime":"08:00","targetReplicas":10},{"atTime":"20:00","targetReplicas":3}]}
   */
  scalingRuleTimer?: string;
  /**
   * @remarks
   * The type of the elastic scaling policy. Valid values:
   * 
   * - **timing**: scheduled elastic scaling.
   * - **metric**: monitoring metric-based elastic scaling.
   * 
   * - **mix**: hybrid elastic scaling.
   * 
   * >
   * > - If you select scheduled elastic scaling, the ScalingRuleTimer parameter is required.
   * > - If you select monitoring metric-based elastic scaling, the ScalingRuleMetric parameter is required.
   * > - If you select hybrid elastic scaling, the ScalingRuleMetric parameter is required. You can also specify the ScalingRuleTimer and ScalingRuleMetric parameters as needed.
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

