// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleConditionCaseList extends $dara.Model {
  /**
   * @remarks
   * 匹配表达式，示例：  logLevel: error
   * 
   * @example
   * logLevel: error
   */
  condition?: string;
  /**
   * @remarks
   * 数量匹配表达式，示例：
   * 区间组合： __count__ >= 3 && __count__ <= 10
   * 单区间： __count__ >= 3
   * 
   * @example
   * count >= 3
   */
  countCondition?: string;
  /**
   * @remarks
   * 满足条件后的告警级别
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * 匹配类型： 有数据/有特定条数据/有数据匹配/有特定条数匹配。
   * 
   * 取值范围：
   * - HasData: 有数据
   * - HasDataCount:  有特定条数据
   * - HasDataMatch：有数据匹配
   * - HasDataMatchCount：有特定条数匹配
   * 
   * @example
   * HasData
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      countCondition: 'countCondition',
      level: 'level',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      countCondition: 'string',
      level: 'string',
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

export class AlertRuleConditionCompareListValueLevelList extends $dara.Model {
  /**
   * @remarks
   * 阈值对应的级别
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * 对比的阈值
   * 
   * @example
   * 120
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionCompareList extends $dara.Model {
  /**
   * @remarks
   * 时间序列后聚合函数
   * 
   * - count
   * - sum
   * - avg
   * - min
   * - max
   * - p90
   * - p95
   * - p99
   * 
   * @example
   * count
   */
  aggregate?: string;
  /**
   * @remarks
   * 数据单位
   * 
   * @example
   * %
   */
  baseUnit?: string;
  /**
   * @remarks
   * 展示单位
   * 
   * @example
   * %
   */
  displayUnit?: string;
  /**
   * @remarks
   * 比较操作，判断是否是同比、环比
   * 
   * - 大于 GT
   * - 大于等于 GTE
   * - 小于 LT
   * - 小于等于 LTE
   * - 等于 EQ
   * - 不等于 NE
   * - 同比增加 YOY_UP
   * - 同比减少 YOY_DOWN
   * 
   * @example
   * GT
   */
  oper?: string;
  /**
   * @remarks
   * 对比的阈值
   * 
   * @example
   * 50
   */
  value?: number;
  /**
   * @remarks
   * 不同值的报警级别的列表。
   */
  valueLevelList?: AlertRuleConditionCompareListValueLevelList[];
  /**
   * @remarks
   * 同比时间单位（仅对oper=YOY_UP/YOY_DOWN生效）
   *  minute、hour、day、week、month
   * 
   * @example
   * month
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * 同比时间的值，与yoyTimeUnit配合使用
   * 
   * @example
   * 1
   */
  yoyTimeValue?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      baseUnit: 'baseUnit',
      displayUnit: 'displayUnit',
      oper: 'oper',
      value: 'value',
      valueLevelList: 'valueLevelList',
      yoyTimeUnit: 'yoyTimeUnit',
      yoyTimeValue: 'yoyTimeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      baseUnit: 'string',
      displayUnit: 'string',
      oper: 'string',
      value: 'number',
      valueLevelList: { 'type': 'array', 'itemType': AlertRuleConditionCompareListValueLevelList },
      yoyTimeUnit: 'string',
      yoyTimeValue: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.valueLevelList)) {
      $dara.Model.validateArray(this.valueLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionCompositeEscalationEscalations extends $dara.Model {
  /**
   * @remarks
   * 阈值比较符，取值范围：
   * 
   * - GreaterThanOrEqualToThreshold：大于等于。
   * - GreaterThanThreshold：大于。
   * - LessThanOrEqualToThreshold：小于等于。
   * - LessThanThreshold：小于。
   * - NotEqualToThreshold：不等于。
   * - EqualToThreshold：等于。
   * - GreaterThanYesterday：同比昨天时间上涨。
   * - LessThanYesterday：同比昨天时间下降。
   * - GreaterThanLastWeek：同比上周同一时间上涨。
   * - LessThanLastWeek：同比上周同一时间下降。
   * - GreaterThanLastPeriod：环比上周期上涨。
   * - LessThanLastPeriod：环比上周期下降。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * 指标名称
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * 指标的时间窗口
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * 统计方法，该参数的取值由指定云产品的MetricName对应的Statistics列决定。  监控项的统计方法。取值示例：
   * 
   * - $Maximum：最大值。
   * - $Minimum：最小值。
   * - $Average：平均值。
   * - $Availability：可用率（通常用于站点监控）
   * 
   * 说明 $为监控项的统一前缀符号。
   * 
   * @example
   * $Maximum
   */
  statistics?: string;
  /**
   * @remarks
   * 告警阈值
   * 
   * @example
   * 50
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'comparisonOperator',
      metricName: 'metricName',
      period: 'period',
      statistics: 'statistics',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
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

export class AlertRuleConditionCompositeEscalation extends $dara.Model {
  /**
   * @remarks
   * 多指标的组合条件列表
   */
  escalations?: AlertRuleConditionCompositeEscalationEscalations[];
  /**
   * @remarks
   * 满足条件时触发的告警级别(多指标组合告警仅支持一个级别)
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * 多个指标条件之间的关系，取值为and或or
   * 
   * @example
   * and
   */
  relation?: string;
  /**
   * @remarks
   * 触发告警需满足条件的次数
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      escalations: 'escalations',
      level: 'level',
      relation: 'relation',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: { 'type': 'array', 'itemType': AlertRuleConditionCompositeEscalationEscalations },
      level: 'string',
      relation: 'string',
      times: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.escalations)) {
      $dara.Model.validateArray(this.escalations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionExpressEscalation extends $dara.Model {
  /**
   * @remarks
   * 满足条件时触发的告警级别(表达式告警仅支持一个级别)
   * 
   * - CRITICAL
   * - WARNING
   * - INFO
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * 告警条件表达式
   * 
   * @example
   * @cpu_total[60].$Average > 60
   */
  rawExpression?: string;
  /**
   * @remarks
   * 触发告警需满足条件的次数
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      rawExpression: 'rawExpression',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      rawExpression: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionSimpleEscalationEscalations extends $dara.Model {
  /**
   * @remarks
   * 阈值比较符，取值范围：
   * 
   * - GreaterThanOrEqualToThreshold：大于等于。
   * - GreaterThanThreshold：大于。
   * - LessThanOrEqualToThreshold：小于等于。
   * - LessThanThreshold：小于。
   * - NotEqualToThreshold：不等于。
   * - EqualToThreshold：等于。
   * - GreaterThanYesterday：同比昨天时间上涨。
   * - LessThanYesterday：同比昨天时间下降。
   * - GreaterThanLastWeek：同比上周同一时间上涨。
   * - LessThanLastWeek：同比上周同一时间下降。
   * - GreaterThanLastPeriod：环比上周期上涨。
   * - LessThanLastPeriod：环比上周期下降。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * 满足条件时触发的告警级别(表达式告警仅支持一个级别)
   * 
   * - CRITICAL
   * - WARNING
   * - INFO
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * 统计方法，该参数的取值由指定云产品的MetricName对应的Statistics列决定，例如：Maximum、Minimum 和 Average
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * 告警阈值
   * 
   * @example
   * 100
   */
  threshold?: number;
  /**
   * @remarks
   * 触发告警需满足条件的次数
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'comparisonOperator',
      level: 'level',
      statistics: 'statistics',
      threshold: 'threshold',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      level: 'string',
      statistics: 'string',
      threshold: 'number',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionSimpleEscalation extends $dara.Model {
  /**
   * @remarks
   * 条件列表，同一个告警规则对应多个级别的，每一个级别会有一个条件对象。
   */
  escalations?: AlertRuleConditionSimpleEscalationEscalations[];
  /**
   * @remarks
   * 适用条件类型：CMS_BASIC_CONDITION。
   * 
   * 告警条件关联的指标
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * 指标的时间窗口，单位秒
   * 
   * @example
   * 60
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      escalations: 'escalations',
      metricName: 'metricName',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: { 'type': 'array', 'itemType': AlertRuleConditionSimpleEscalationEscalations },
      metricName: 'string',
      period: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.escalations)) {
      $dara.Model.validateArray(this.escalations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleCondition extends $dara.Model {
  /**
   * @remarks
   * 适用条件类型：SLS_CONDITION
   * 
   * 满足条件几次后告警，默认为1
   * 
   * @example
   * 1
   */
  alertCount?: number;
  /**
   * @remarks
   * 适用条件类型： SLS_CONDITION。
   * 
   * SLS告警条件列表
   */
  caseList?: AlertRuleConditionCaseList[];
  /**
   * @remarks
   * 适用条件类型：APM_CONDITION。
   * 
   * APM告警比较条件列表
   */
  compareList?: AlertRuleConditionCompareList[];
  /**
   * @remarks
   * 适用条件类型：CMS_BASIC_CONDITION
   * 
   * escalationType=composite时有效，组合指标告警条件
   */
  compositeEscalation?: AlertRuleConditionCompositeEscalation;
  /**
   * @remarks
   * 适用条件类型：CMS_BASIC_CONDITION
   * 
   * 
   * 取值范围: 
   * 
   * - simple: 简单指标条件
   * - composite: 组合指标条件
   * - express: 表达式条件
   * 
   * @example
   * simple
   */
  escalationType?: string;
  /**
   * @remarks
   * 适用条件类型：CMS_BASIC_CONDITION。
   * 
   * escalationType=composite时有效，多指标组合告警条件。
   */
  expressEscalation?: AlertRuleConditionExpressEscalation;
  /**
   * @remarks
   * 适用条件类型：APM_CONDITION。
   * 
   * 无数据时的告警级别，不指定则不对无数据报警
   * 
   * @example
   * INFO
   */
  noDataAlertLevel?: string;
  /**
   * @remarks
   * 适用条件类型：APM_CONDITION。
   * 
   * 无数据时补偿的值。
   * 
   * @example
   * 1
   */
  noDataAppendValue?: string;
  /**
   * @remarks
   * 适用条件类型：CMS_BASIC_CONDITION。
   * 
   * 
   * 无监控数据时报警的处理方式。取值：
   * 
   * - KEEP_LAST_STATE（默认值）：不做任何处理。
   * - INSUFFICIENT_DATA：报警内容为无数据。
   * - OK：正常。
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * 比较操作，判断是否是同比、环比
   * 
   * - 大于 GT
   * - 大于等于 GTE
   * - 小于 LT
   * - 小于等于 LTE
   * - 等于 EQ
   * - 不等于 NE
   * - 同比增加 YOY_UP
   * - 同比减少 YOY_DOWN
   * 
   * @example
   * LT
   */
  oper?: string;
  /**
   * @remarks
   * 适用条件类型：APM_CONDITION。
   * 
   * 多个条件之间的逻辑关系。 取值：
   * - and
   * - or
   * 
   * @example
   * and
   */
  relation?: string;
  /**
   * @remarks
   * 适用条件类型：CMS_BASIC_CONDITION。
   * 
   * 仅当escalationType=simple时有效，针对单一指标设置的告警条件
   */
  simpleEscalation?: AlertRuleConditionSimpleEscalation;
  /**
   * @remarks
   * 规则条件类型，取值范围：
   * - SLS_CONDITION(SLS告警条件)
   * - APM_CONDITION(APM告警条件)
   * - CMS_BASIC_CONDITION(基础云监控告警条件)
   * 
   * This parameter is required.
   * 
   * @example
   * SLS_CONDITION
   */
  type?: string;
  /**
   * @remarks
   * 告警触发的阈值。
   * 
   * @example
   * 60
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      alertCount: 'alertCount',
      caseList: 'caseList',
      compareList: 'compareList',
      compositeEscalation: 'compositeEscalation',
      escalationType: 'escalationType',
      expressEscalation: 'expressEscalation',
      noDataAlertLevel: 'noDataAlertLevel',
      noDataAppendValue: 'noDataAppendValue',
      noDataPolicy: 'noDataPolicy',
      oper: 'oper',
      relation: 'relation',
      simpleEscalation: 'simpleEscalation',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCount: 'number',
      caseList: { 'type': 'array', 'itemType': AlertRuleConditionCaseList },
      compareList: { 'type': 'array', 'itemType': AlertRuleConditionCompareList },
      compositeEscalation: AlertRuleConditionCompositeEscalation,
      escalationType: 'string',
      expressEscalation: AlertRuleConditionExpressEscalation,
      noDataAlertLevel: 'string',
      noDataAppendValue: 'string',
      noDataPolicy: 'string',
      oper: 'string',
      relation: 'string',
      simpleEscalation: AlertRuleConditionSimpleEscalation,
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.caseList)) {
      $dara.Model.validateArray(this.caseList);
    }
    if(Array.isArray(this.compareList)) {
      $dara.Model.validateArray(this.compareList);
    }
    if(this.compositeEscalation && typeof (this.compositeEscalation as any).validate === 'function') {
      (this.compositeEscalation as any).validate();
    }
    if(this.expressEscalation && typeof (this.expressEscalation as any).validate === 'function') {
      (this.expressEscalation as any).validate();
    }
    if(this.simpleEscalation && typeof (this.simpleEscalation as any).validate === 'function') {
      (this.simpleEscalation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

