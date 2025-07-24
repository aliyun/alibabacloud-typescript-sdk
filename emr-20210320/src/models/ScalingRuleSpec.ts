// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingRuleSpecByLoadScalingRuleSpec extends $dara.Model {
  /**
   * @remarks
   * 比较符。
   * 
   * This parameter is required.
   * 
   * @example
   * LT
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * 统计次数。
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  evaluationCount?: number;
  /**
   * @remarks
   * 指标名称。指标名称需要在 ListAutoScalingMetrics 接口返回的指标名称列表中。
   * 
   * This parameter is required.
   * 
   * @example
   * yarn_resourcemanager_root_availablememoryusage
   */
  metricName?: string;
  /**
   * @remarks
   * 统计量名称。
   * 
   * This parameter is required.
   * 
   * @example
   * AVG
   */
  statistics?: string;
  /**
   * @remarks
   * 阈值。
   * 
   * This parameter is required.
   * 
   * @example
   * 12.5
   */
  threshold?: number;
  /**
   * @remarks
   * 统计窗口。单位为秒。
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  timeWindow?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      statistics: 'Statistics',
      threshold: 'Threshold',
      timeWindow: 'TimeWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      evaluationCount: 'number',
      metricName: 'string',
      statistics: 'string',
      threshold: 'number',
      timeWindow: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingRuleSpecByTimeScalingRuleSpec extends $dara.Model {
  /**
   * @remarks
   * 重复执行定时任务的结束时间戳。单位为毫秒。
   * 
   * @example
   * 1639714800000
   */
  endTime?: number;
  /**
   * @remarks
   * 启动时间戳。单位为毫秒。
   * 
   * This parameter is required.
   * 
   * @example
   * 1639714634819
   */
  launchTime?: number;
  /**
   * @remarks
   * 指定时间规则的执行类型。
   * 
   * @example
   * WEEKLY
   */
  recurrenceType?: string;
  /**
   * @remarks
   * 重复执行定时任务的数值。具体取值取决于 recurrenceType 设置。
   * 
   * @example
   * MON,FRI,SUN
   */
  recurrenceValue?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      launchTime: 'LaunchTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      launchTime: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingRuleSpec extends $dara.Model {
  /**
   * @remarks
   * 调整值。需要为正数，代表需要扩容或者缩容的实例数量。
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * 按照负载伸缩描述。
   */
  byLoadScalingRuleSpec?: ScalingRuleSpecByLoadScalingRuleSpec;
  /**
   * @remarks
   * 按照时间伸缩描述。
   */
  byTimeScalingRuleSpec?: ScalingRuleSpecByTimeScalingRuleSpec;
  /**
   * @remarks
   * 冷却时间。单位为秒，取值范围在30~10800秒之间。
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  coolDownInterval?: number;
  /**
   * @remarks
   * 伸缩活动类型。
   * 
   * This parameter is required.
   * 
   * @example
   * SCALE_IN
   */
  scalingActivityType?: string;
  /**
   * @remarks
   * 规则名称。
   * 
   * This parameter is required.
   * 
   * @example
   * scale-out-memory
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * 伸缩规则类型。
   * 
   * This parameter is required.
   * 
   * @example
   * BY_TIME
   */
  scalingRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      adjustmentValue: 'AdjustmentValue',
      byLoadScalingRuleSpec: 'ByLoadScalingRuleSpec',
      byTimeScalingRuleSpec: 'ByTimeScalingRuleSpec',
      coolDownInterval: 'CoolDownInterval',
      scalingActivityType: 'ScalingActivityType',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleType: 'ScalingRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentValue: 'number',
      byLoadScalingRuleSpec: ScalingRuleSpecByLoadScalingRuleSpec,
      byTimeScalingRuleSpec: ScalingRuleSpecByTimeScalingRuleSpec,
      coolDownInterval: 'number',
      scalingActivityType: 'string',
      scalingRuleName: 'string',
      scalingRuleType: 'string',
    };
  }

  validate() {
    if(this.byLoadScalingRuleSpec && typeof (this.byLoadScalingRuleSpec as any).validate === 'function') {
      (this.byLoadScalingRuleSpec as any).validate();
    }
    if(this.byTimeScalingRuleSpec && typeof (this.byTimeScalingRuleSpec as any).validate === 'function') {
      (this.byTimeScalingRuleSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

