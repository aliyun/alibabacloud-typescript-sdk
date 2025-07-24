// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingRuleV1RuleParam extends $dara.Model {
  /**
   * @remarks
   * [负载触发参数] 比较符。
   * 
   * @example
   * >
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * [负载触发参数] 统计次数。
   * 
   * @example
   * 1
   */
  evaluationCount?: number;
  /**
   * @remarks
   * [时间调度参数] 周期类型周期过期时间。
   * 
   * @example
   * 0
   */
  launchExpirationTime?: number;
  /**
   * @remarks
   * [时间调度参数] 周期类型周期开始时间。
   * 
   * @example
   * 2021-09-15T04:02Z
   */
  launchTime?: string;
  /**
   * @remarks
   * [负载触发参数] 度量名称。
   * 
   * @example
   * YarnRootAvailableVCores
   */
  metricName?: string;
  /**
   * @remarks
   * [负载触发参数] 统计时长,单位分钟。
   * 
   * @example
   * 5
   */
  period?: number;
  /**
   * @remarks
   * [时间调度参数] 周期类型周期结束时间。
   * 
   * @example
   * 2021-09-16T05:02Z
   */
  recurrenceEndTime?: string;
  /**
   * @remarks
   * [时间调度参数] 周期类型。
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * [时间调度参数] 周期类型周期值。
   * 
   * @example
   * 1
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * [负载触发参数] 统计方式。
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * [负载触发参数] 阈值。
   * 
   * @example
   * 1
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      evaluationCount: 'EvaluationCount',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      metricName: 'MetricName',
      period: 'Period',
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      evaluationCount: 'number',
      launchExpirationTime: 'number',
      launchTime: 'string',
      metricName: 'string',
      period: 'number',
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      statistics: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingRuleV1 extends $dara.Model {
  /**
   * @remarks
   * 调整类型。
   * 
   * @example
   * QUANTITY_CHANGE_IN_CAPACITY
   */
  adjustmentType?: string;
  /**
   * @remarks
   * 调整值,正数为扩容,负数为缩容。
   * 
   * @example
   * 1
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * 冷却时间,单位秒。
   * 
   * @example
   * 4
   */
  coolDownTime?: number;
  /**
   * @remarks
   * 规则名称。
   * 
   * @example
   * tule1
   */
  ruleName?: string;
  /**
   * @remarks
   * 规则参数。
   */
  ruleParam?: ScalingRuleV1RuleParam;
  /**
   * @remarks
   * 规则类型。
   * 
   * @example
   * BY_LOAD
   */
  ruleType?: string;
  /**
   * @remarks
   * 弹性规则配置ID。
   * 
   * @example
   * SCB-DCD96BCCFED1****
   */
  scalingConfigBizId?: string;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      coolDownTime: 'CoolDownTime',
      ruleName: 'RuleName',
      ruleParam: 'RuleParam',
      ruleType: 'RuleType',
      scalingConfigBizId: 'ScalingConfigBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      coolDownTime: 'number',
      ruleName: 'string',
      ruleParam: ScalingRuleV1RuleParam,
      ruleType: 'string',
      scalingConfigBizId: 'string',
    };
  }

  validate() {
    if(this.ruleParam && typeof (this.ruleParam as any).validate === 'function') {
      (this.ruleParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

