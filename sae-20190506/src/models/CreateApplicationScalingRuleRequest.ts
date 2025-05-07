// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  enableIdle?: boolean;
  /**
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @example
   * 3
   */
  minReadyInstances?: number;
  /**
   * @example
   * true
   */
  scalingRuleEnable?: boolean;
  /**
   * @example
   * {"maxReplicas":3,"minReplicas":1,"metrics":[{"metricType":"CPU","metricTargetAverageUtilization":20},{"metricType":"MEMORY","metricTargetAverageUtilization":30},{"metricType":"tcpActiveConn","metricTargetAverageUtilization":20},{"metricType":"SLB_QPS","MetricTargetAverageUtilization":25,"SlbProject":"aliyun-fc-cn-hangzhou-d95881d9-5d3c-5f26-a6b8-************","SlbLogstore":"function-log","Vport":"80"},{"metricType":"SLB_RT","MetricTargetAverageUtilization":35,"SlbProject":"aliyun-fc-cn-hangzhou-d95881d9-5d3c-5f26-a6b8-************","SlbLogstore":"function-log","Vport":"80"}],"scaleUpRules":{"step":"100","disabled":false,"stabilizationWindowSeconds":0},"scaleDownRules":{"step":"100","disabled":false,"stabilizationWindowSeconds":300}}
   */
  scalingRuleMetric?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * timer-0800-2100
   */
  scalingRuleName?: string;
  /**
   * @example
   * {"beginDate":null,"endDate":null,"period":"* * *","schedules":[{"atTime":"08:00","targetReplicas":10},{"atTime":"20:00","targetReplicas":3}]}
   */
  scalingRuleTimer?: string;
  /**
   * @remarks
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

